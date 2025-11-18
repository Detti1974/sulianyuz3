// app/angol/quiz-subtopic.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import styles from "../../lib/styles";

import { TOPIC_TREE } from "../../lib/angol/bank";
import { lessonToBank } from "../../lib/angol/lesson-map";
import { useQuiz } from "../../lib/QuizContext";

const CUSTOM_SUB_ID = "__custom__";

export default function AngolQuizSubtopic() {
  const { topicId, scope } = useLocalSearchParams<{ topicId: string; scope?: string }>();
  const bankId = String(topicId || "");
  const lessonId = scope ? String(scope) : undefined;

  const topic = TOPIC_TREE.find(t => t.id === bankId) || null;
  const allowed = lessonId ? (lessonToBank[lessonId]?.sections ?? null) : null;

  const sections = React.useMemo(() => {
    if (!topic) return [];
    const list = topic.sections || [];
    if (!allowed || allowed.length === 0) return list;
    const ok = new Set(allowed);
    return list.filter(s => ok.has(s.id));
  }, [topic, allowed]);

  const { startSub, getSubCount, resetSub } = useQuiz();
  const [counts, setCounts] = React.useState<Record<string, number>>({});

  const loadCounts = React.useCallback(async () => {
    if (!topic) return;
    const entries = await Promise.all(
      (sections || []).map(async s => [s.id, await getSubCount(topic.id, s.id)] as const)
    );
    const customCount = await getSubCount(topic.id, CUSTOM_SUB_ID);
    setCounts({ ...(Object.fromEntries(entries) as any), [CUSTOM_SUB_ID]: customCount });
  }, [topic, sections, getSubCount]);

  useFocusEffect(React.useCallback(() => { loadCounts(); }, [loadCounts]));

  const onStart = async (subId: string) => {
    if (!topic) return;
    await startSub(topic.id, subId);
    router.push("/quiz");
  };

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  if (!topic) {
    return (
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Text style={[styles.titleBig, { color: "#ffb3b3" }]}>Ismeretlen témakör</Text>
            <Text style={[styles.lead, { marginTop: 6 }]}>Azonosító: {bankId || "(nincs)"}</Text>
            <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray, { marginTop: 10 }]}>
              <Text style={styles.buttonText}>← Vissza</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* NAV */}
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Fejléc */}
        <View style={styles.card}>
          <Text style={styles.titleBig}>{topic.title}</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>Válaszd ki az alfejezetet:</Text>
        </View>

        {/* Alfejezet kártyák */}
        {sections.map(s => {
          const count = counts[s.id] ?? 0;
          const enabled = (s.bank?.length ?? 0) > 0;
          const qCount = s.bank?.length ?? 0;

          return (
            <View key={s.id} style={[styles.card, { marginTop: 10 }]}>
              <Text style={[styles.title, { color: "#bcd0ff" }]}>
                {s.title}
              </Text>
              <Text style={[styles.small, { marginTop: 4 }]}>Kérdések: {qCount}</Text>

              <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap", marginTop: 10, alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => onStart(s.id)}
                  disabled={!enabled}
                  style={[styles.btn, styles.btnOrange, { opacity: enabled ? 1 : 0.5 }]}
                >
                  <Text style={styles.buttonText}>Kvíz indítása</Text>
                </TouchableOpacity>

                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Elvégzések (≥50%): {count}</Text>
                </View>

                <TouchableOpacity
                  onPress={async () => { await resetSub(topic.id, s.id); await loadCounts(); }}
                  style={[styles.btn, styles.btnGray]}
                >
                  <Text style={styles.buttonText}>Nullázás</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        {/* === Saját téma blokk (a kért UI szerint) === */}
        <View style={[styles.card, { marginTop: 10 }]}>
          <Text style={[styles.title, { color: "#ffd28a" }]}>Saját téma</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Itt hozhatsz létre <Text style={{ fontWeight: "800" }}>saját kérdésbankot</Text> ehhez a
            témához. Ha kevesebb mint 10 kérdésed van, a rendszer a témakör kérdéseiből{" "}
            <Text style={{ fontWeight: "800" }}>automatikusan kiegészíti</Text>.
          </Text>

          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap", marginTop: 12, alignItems: "center" }}>
            {/* Kvíz indítása (saját) */}
            <TouchableOpacity
              onPress={() => onStart(CUSTOM_SUB_ID)}
              style={[styles.btn, styles.btnOrange]}
            >
              <Text style={styles.buttonText}>Kvíz indítása</Text>
            </TouchableOpacity>

            {/* Kérdésbank szerkesztése – ÁLLÍTSD BE AZ ÚTVONALAT, ha más nálad */}
            <TouchableOpacity
              onPress={() => router.push({ pathname: "/angol/custom-bank", params: { topicId: topic.id } })}
              style={[styles.btn, styles.btnIndigo]}
            >
              <Text style={styles.buttonText}>Kérdésbank szerkesztése</Text>
            </TouchableOpacity>

            {/* Jegyzetek – ÁLLÍTSD BE AZ ÚTVONALAT, ha más nálad */}
          </View>

          <View style={{ flexDirection: "row", gap: 10, alignItems: "center", marginTop: 12 }}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Elvégzések (≥50%): {counts[CUSTOM_SUB_ID] ?? 0}</Text>
            </View>

            <TouchableOpacity
              onPress={async () => { await resetSub(topic.id, CUSTOM_SUB_ID); await loadCounts(); }}
              style={[styles.btn, styles.btnGray]}
            >
              <Text style={styles.buttonText}>Nullázás</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

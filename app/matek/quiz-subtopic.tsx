import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import styles from "../../lib/styles";
import { useQuiz } from "../../lib/QuizContext";
import { TOPIC_TREE } from "../../lib/matek/bank";
import { lessonToBank } from "../../lib/matek/lesson-map";

const CUSTOM_SUB_ID = "__custom__";

export default function MatekQuizSubtopic() {
  const { topicId, scope } = useLocalSearchParams<{ topicId: string; scope?: string }>();

  const bankId = String(topicId);
  const topic = TOPIC_TREE.find((t) => t.id === bankId);

  // scope → megengedett section id-k
  const allowed = React.useMemo(() => {
    const m = scope ? lessonToBank[String(scope)] : undefined;
    return m?.sections ?? null; // ha nincs kitöltve → minden szekció látszik
  }, [scope]);

  const sections = React.useMemo(() => {
    if (!topic) return [];
    if (!allowed || allowed.length === 0) return topic.sections;
    const set = new Set(allowed);
    return topic.sections.filter((s: any) => set.has(s.id));
  }, [topic, allowed]);

  const { startSub, getSubCount, resetSub } = useQuiz();
  const [counts, setCounts] = React.useState<Record<string, number>>({});

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const loadCounts = React.useCallback(async () => {
    if (!topic) return;
    const entries = await Promise.all(
      sections.map(async (s) => [s.id, await getSubCount(topic.id, s.id)] as const)
    );
    const customCount = await getSubCount(topic.id, CUSTOM_SUB_ID);
    setCounts({ ...(Object.fromEntries(entries) as Record<string, number>), [CUSTOM_SUB_ID]: customCount });
  }, [topic, sections, getSubCount]);

  useFocusEffect(React.useCallback(() => { loadCounts(); }, [loadCounts]));

  const onStart = async (subId: string) => {
    if (!topic) return;
    await startSub(topic.id, subId);
    router.push("/quiz");
  };

  if (!topic) {
    return (
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Text style={styles.titleBig}>Ismeretlen témakör</Text>
            <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnGray, { marginTop: 10 }]}>
              <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Fejléc */}
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Címkártya */}
        <View style={styles.card}>
          <Text style={styles.titleBig}>{topic.title}</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Válaszd ki az alfejezetet{scope ? " ehhez a fejezethez" : ""}:
          </Text>
        </View>

        {/* Alfejezetek (szűrve a fejezet szerint) */}
        {sections.map((s) => (
          <View key={s.id} style={styles.card}>
            <Text style={styles.title}>{s.title}</Text>

            <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap", marginTop: 10, alignItems: "center" }}>
              <TouchableOpacity onPress={() => onStart(s.id)} style={[styles.btn, styles.btnOrange]}>
                <Text style={styles.buttonText}>Kvíz indítása</Text>
              </TouchableOpacity>

              <View style={styles.badge}>
                <Text style={styles.badgeText}>Elvégzések (≥50%): {counts[s.id] ?? 0}</Text>
              </View>

              <TouchableOpacity
                onPress={async () => {
                  await resetSub(topic.id, s.id);
                  await loadCounts();
                }}
                style={[styles.btn, styles.btnGray]}
              >
                <Text style={styles.buttonText}>Nullázás</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Saját téma */}
        <View style={styles.card}>
          <Text style={[styles.title, { color: "#f59e0b" }]}>Saját téma</Text>
          <Text style={[styles.paragraph, { marginTop: 6 }]}>
            Ha 10-nél kevesebb saját kérdésed van, a kvíz automatikusan kiegészül a témakör kérdéseivel.
          </Text>

          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap", marginTop: 10, alignItems: "center" }}>
            <TouchableOpacity onPress={() => onStart(CUSTOM_SUB_ID)} style={[styles.btn, styles.btnOrange]}>
              <Text style={styles.buttonText}>Kvíz indítása</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push({ pathname: "/matek/custom-bank", params: { topicId: topic.id } })}
              style={[styles.btn, styles.btnIndigo]}
            >
              <Text style={styles.buttonText}>Saját kérdések</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push({ pathname: "/matek/notes", params: { topicId: topic.id } })}
              style={[styles.btn, styles.btnGreen]}
            >
              <Text style={styles.buttonText}>Jegyzetek</Text>
            </TouchableOpacity>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>Elvégzések (≥50%): {counts[CUSTOM_SUB_ID] ?? 0}</Text>
            </View>

            <TouchableOpacity
              onPress={async () => {
                await resetSub(topic.id, CUSTOM_SUB_ID);
                await loadCounts();
              }}
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

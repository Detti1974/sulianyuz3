import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

import styles from "../../lib/styles";
import { useQuiz } from "../../lib/QuizContext";
import { TOPIC_TREE } from "../../lib/tortenelem/bank";

const ACCENT = ["#60a5fa", "#22c55e", "#f59e0b", "#a78bfa", "#38bdf8", "#f472b6"];
const CUSTOM_SUB_ID = "__custom__";

export default function QuizSubtopicScreen() {
  const { topicId: p } = useLocalSearchParams<{ topicId?: string }>();
  const topicId = String(p ?? "ww1");

  const { startSub, getSubCount, resetSub } = useQuiz() as any;

  const topic = TOPIC_TREE.find((t: any) => t.id === topicId);

  const [counts, setCounts] = React.useState<Record<string, number>>({});

  const loadCounts = React.useCallback(async () => {
    if (!topic) return;
    const entries = await Promise.all(
      (topic.sections ?? []).map(async (s: any) => {
        const v = (await getSubCount?.(topicId, s.id)) ?? 0;
        return [s.id, v] as const;
      })
    );
    // Saját téma számláló
    const customCount = (await getSubCount?.(topicId, CUSTOM_SUB_ID)) ?? 0;
    setCounts({ ...(Object.fromEntries(entries) as any), [CUSTOM_SUB_ID]: customCount });
  }, [topic, topicId, getSubCount]);

  useFocusEffect(
    React.useCallback(() => {
      loadCounts();
    }, [loadCounts])
  );

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const onStart = (subId: string) => {
    startSub?.(topicId, subId);
    router.push("/quiz");
  };

  if (!topic) {
    return (
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Text style={styles.titleBig}>Ismeretlen témakör</Text>
            <Text style={[styles.lead, { marginTop: 6 }]}>
              Térj vissza és válassz egy másik témát.
            </Text>
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
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Cím */}
        <View style={styles.card}>
          <Text style={styles.titleBig}>{topic.title}</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>Válaszd ki az alfejezetet:</Text>
        </View>

        {/* Alfejezet kártyák */}
        {(topic.sections ?? []).map((s: any, i: number) => {
          const color = ACCENT[i % ACCENT.length];
          const done = counts[s.id] ?? 0;

          return (
            <View key={s.id} style={styles.card}>
              <Text style={[styles.title, { color }]}>{s.title}</Text>

              <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
                <TouchableOpacity
                  onPress={() => onStart(s.id)}
                  style={[styles.btn, styles.btnOrange]}
                  activeOpacity={0.9}
                >
                  <Text style={styles.buttonText}>Kvíz indítása</Text>
                </TouchableOpacity>

                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Elvégzések (≥50%): {done}</Text>
                </View>

                {typeof resetSub === "function" && (
                  <TouchableOpacity
                    onPress={async () => {
                      try {
                        await resetSub(topicId, s.id);
                      } finally {
                        await loadCounts();
                      }
                    }}
                    style={[styles.btn, styles.btnGray]}
                  >
                    <Text style={styles.buttonText}>Nullázás</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}

        {/* --- SAJÁT TÉMA KÁRTYA --- */}
        <View style={styles.card}>
          <Text style={[styles.title, { color: "#f59e0b" }]}>Saját téma</Text>
          <Text style={[styles.paragraph, { marginTop: 6 }]}>
            Itt hozhatsz létre **saját kérdésbankot** ehhez a témához. Ha kevesebb mint 10 kérdésed van,
            a rendszer a témakör kérdéseiből **automatikusan kiegészíti**.
          </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
            <TouchableOpacity
              onPress={() => onStart(CUSTOM_SUB_ID)}
              style={[styles.btn, styles.btnOrange]}
            >
              <Text style={styles.buttonText}>Kvíz indítása</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push({ pathname: "/tortenelem/custom-bank", params: { topicId } })}
              style={[styles.btn, styles.btnIndigo]}
            >
              <Text style={styles.buttonText}>Kérdésbank szerkesztése</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push({ pathname: "/tortenelem/notes", params: { topicId } })}
              style={[styles.btn, styles.btnGreen]}
            >
              <Text style={styles.buttonText}>Jegyzetek</Text>
            </TouchableOpacity>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>Elvégzések (≥50%): {counts[CUSTOM_SUB_ID] ?? 0}</Text>
            </View>

            {typeof resetSub === "function" && (
              <TouchableOpacity
                onPress={async () => {
                  try {
                    await resetSub(topicId, CUSTOM_SUB_ID);
                  } finally {
                    await loadCounts();
                  }
                }}
                style={[styles.btn, styles.btnGray]}
              >
                <Text style={styles.buttonText}>Nullázás</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

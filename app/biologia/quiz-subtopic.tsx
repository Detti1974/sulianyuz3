// app/biologia/quiz-subtopic.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useQuiz } from "../../lib/QuizContext";
import { TOPIC_TREE as BIO_TREE } from "../../lib/biologia/bank";
import lessonToBank from "../../lib/biologia/lesson-map";
import styles from "../../lib/styles";

type Section = { id: string; title?: string };

const CUSTOM_SUB_ID = "__custom__";
const keyUserBank = (topicId: string) => `userbank:${topicId}`;

/* ===== util: biológia topic azonosító feloldás ===== */
const norm = (s: string) =>
  String(s || "")
    .toLowerCase()
    // rugalmas: biologia_8_..., biologia8_..., bio_8_..., bio8_...
    .replace(/^biologia_?\d*_?/, "")
    .replace(/^bio_?\d*_?/, "")
    .replace(/_/g, "");

function resolveBioTopic(anyId: string) {
  const id = String(anyId || "");
  let t = (BIO_TREE as any[]).find((x) => x.id === id);
  if (t) return t;

  const n = norm(id);
  t = (BIO_TREE as any[]).find((x) => norm(x.id) === n);
  if (t) return t;

  t = (BIO_TREE as any[]).find((x) => norm(x.id).endsWith(n));
  return t || null;
}

export default function BiologiaQuizSubtopic() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const tId = String(topicId || "");
  const { startSub, getSubCount, resetSub } = useQuiz();

  const topic = React.useMemo(() => resolveBioTopic(tId), [tId]);

  const sections: Section[] = React.useMemo(() => {
    if (topic?.sections?.length) {
      return (topic.sections as any[]).map((s) => ({
        id: s.id,
        title: s.title || s.id,
      }));
    }
    // fallback a lesson-mapre, ha onnan jön a mapping
    const map = (lessonToBank as any)?.[tId];
    if (map?.sections?.length) {
      return (map.sections as string[]).map((sid) => ({ id: sid, title: sid }));
    }
    return [];
  }, [topic, tId]);

  const topicTitle: string =
    topic?.title ||
    (lessonToBank as any)?.[tId]?.title ||
    "Biológia — Kvíz (alfejezetek)";

  const [passes, setPasses] = React.useState<Record<string, number>>({});
  const [customCount, setCustomCount] = React.useState<number>(0);
  const [busy, setBusy] = React.useState(false);

  React.useEffect(() => {
    let alive = true;
    (async () => {
      const p: Record<string, number> = {};
      const bankTopicId = topic?.id ?? tId;

      try {
        const raw = await AsyncStorage.getItem(keyUserBank(bankTopicId));
        const arr = raw ? JSON.parse(raw) : [];
        if (alive) setCustomCount(Array.isArray(arr) ? arr.length : 0);
      } catch {
        if (alive) setCustomCount(0);
      }

      for (const s of sections) {
        try {
          p[s.id] = await getSubCount(bankTopicId, s.id);
        } catch {
          p[s.id] = 0;
        }
      }
      if (alive) setPasses(p);
    })();
    return () => { alive = false; };
  }, [sections, topic?.id, tId, getSubCount]);

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const startSubNow = async (sid: string) => {
    if (busy) return;
    setBusy(true);
    try {
      const bankTopicId = topic?.id ?? tId;
      await startSub(bankTopicId, sid);
      router.push("/quiz");
    } finally {
      setBusy(false);
    }
  };

  const startCustom = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const bankTopicId = topic?.id ?? tId;
      await startSub(bankTopicId, CUSTOM_SUB_ID);
      router.push("/quiz");
    } finally {
      setBusy(false);
    }
  };

  const openCustomEditor = () =>
    router.push({
      pathname: "../biologia/custom-bank",
      params: { topicId: topic?.id ?? tId },
    });

  const onResetOne = (sid: string) => {
    const bankTopicId = topic?.id ?? tId;
    Alert.alert(
      "Számláló nullázása",
      "Biztosan törlöd ennek az alfejezetnek az átmenő számlálóját?",
      [
        { text: "Mégse", style: "cancel" },
        {
          text: "Nullázás",
          style: "destructive",
          onPress: async () => {
            await resetSub(bankTopicId, sid);
            setPasses((prev) => ({ ...prev, [sid]: 0 }));
          },
        },
      ]
    );
  };

  const shadow = {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  } as const;

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

        {/* Cím és leírás */}
        <View style={[styles.card, shadow]}>
          <Text style={[styles.titleBig, { color: "#06b6d4" }]}>{topicTitle}</Text>
          <Text style={[styles.paragraph, { marginTop: 6 }]}>
            Válaszd ki az <Text style={{ fontWeight: "800", color: "#f59e0b" }}>alfejezetet</Text>, és indul a 10 kérdéses kvíz.
          </Text>
        </View>

        {/* Saját kvíz blokk */}
        <View
          style={[
            styles.card,
            shadow,
            { backgroundColor: "rgba(245,158,11,0.10)", borderWidth: 1, borderColor: "rgba(245,158,11,0.35)" },
          ]}
        >
          <Text style={[styles.title, { color: "#f59e0b" }]}>Saját kvíz</Text>
          <Text style={[styles.paragraph, { marginTop: 6 }]}>
            Saját kérdésekből sorsolunk. Ha nincs meg a 10, a témakör bankjából egészítjük ki.
          </Text>
          <View style={{ flexDirection: "row", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
            <View style={styles.badge}><Text style={styles.badgeText}>Saját kérdések: {customCount}</Text></View>
            <View style={styles.badge}><Text style={styles.badgeText}>Cél: 10 / kvíz</Text></View>
          </View>

          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              onPress={startCustom}
              disabled={busy}
              style={[
                styles.btn,
                { backgroundColor: "#22c55e", borderColor: "#4ade80", opacity: busy ? 0.6 : 1 },
              ]}
            >
              <Text style={[styles.buttonText, { color: "#fff" }]}>✨ Indítás (10 kérdés)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={openCustomEditor}
              style={[
                styles.btn,
                { marginTop: 10, backgroundColor: "#8b5cf6", borderColor: "#a78bfa" },
              ]}
            >
              <Text style={[styles.buttonText, { color: "#fff" }]}>✍️ Saját kvíz szerkesztése</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Alfejezet kártyák */}
        {sections.map((s) => (
          <View
            key={s.id}
            style={[
              styles.card,
              shadow,
              { backgroundColor: "rgba(6,182,212,0.10)", borderWidth: 1, borderColor: "rgba(6,182,212,0.35)" },
            ]}
          >
            <Text style={[styles.title, { color: "#06b6d4" }]}>{s.title}</Text>

            <View style={{ flexDirection: "row", gap: 10, marginTop: 8, alignItems: "center", flexWrap: "wrap" }}>
              <View style={styles.badge}><Text style={styles.badgeText}>✅ Átmenők: {passes[s.id] ?? 0}</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>🎯 Cél: 5/10</Text></View>
              <TouchableOpacity
                onPress={() => onResetOne(s.id)}
                style={[styles.btn, { backgroundColor: "#f97316", borderColor: "#fb923c" }]}
              >
                <Text style={[styles.buttonText, { color: "#fff" }]}>🧹 Nullázás</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => startSubNow(s.id)}
              disabled={busy}
              style={[
                styles.btn,
                { marginTop: 10, backgroundColor: "#06b6d4", borderColor: "#22d3ee", opacity: busy ? 0.6 : 1 },
              ]}
            >
              <Text style={[styles.buttonText, { color: "#fff" }]}>🧪 Indítás (10 kérdés)</Text>
            </TouchableOpacity>
          </View>
        ))}

        {sections.length === 0 && (
          <View style={styles.card}>
            <Text style={styles.lead}>Ehhez a témához még nincs alfejezet vagy kérdésbank.</Text>
          </View>
        )}

        <View style={{ height: 28 }} />
      </ScrollView>
    </View>
  );
}

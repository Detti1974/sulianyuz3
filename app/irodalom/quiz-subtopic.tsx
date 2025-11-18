// app/irodalom/quiz-subtopic.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../../lib/styles";
import { useQuiz } from "../../lib/QuizContext";
import { TOPIC_TREE as HUN_TREE } from "../../lib/irodalom/bank";

type Section = { id: string; title?: string };

const CUSTOM_SUB_ID = "__custom__";
const keyUserBank = (topicId: string) => `userbank:${topicId}`;
const keySub = (t: string, s: string) => `kviz:sub:${t}:${s}`;

const norm = (s: string) =>
  String(s || "")
    .toLowerCase()
    .replace(/^irodalom_?\d*_?/, "")
    .replace(/_/g, "");

function resolveTopic(anyId: string) {
  const id = String(anyId || "");
  let t = (HUN_TREE as any[]).find((x) => x.id === id);
  if (t) return t;
  const n = norm(id);
  t = (HUN_TREE as any[]).find((x) => norm(x.id) === n);
  if (t) return t;
  t = (HUN_TREE as any[]).find((x) => norm(x.id).endsWith(n));
  return t || null;
}

async function readSubPassesFallback(topicId: string, subId: string): Promise<number> {
  try {
    const raw = await AsyncStorage.getItem(keySub(topicId, subId));
    if (!raw) return 0;
    const data = JSON.parse(raw);
    if (typeof data?.passes === "number") return data.passes;
    if (typeof data?.count === "number") return data.count;
    if (Array.isArray(data?.passes)) return data.passes.length;
    if (Array.isArray(data)) return data.filter((x) => x === true || x?.passed === true).length;
  } catch {}
  return 0;
}

// — színpaletta —
const PALETTE = ["#f9a8d4", "#60a5fa", "#34d399", "#f59e0b", "#f472b6"]; // rózsaszín, kék, zöld, narancs, pink
const INDIGO = "#6366f1";

export default function IrodalomQuizSubtopic() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const tId = String(topicId || "");
  const { startSub, getSubCount, resetSub } = useQuiz();

  const topic = React.useMemo(() => resolveTopic(tId), [tId]);

  const sections: Section[] = React.useMemo(() => {
    if (topic?.sections?.length) {
      return (topic.sections as any[]).map((s) => ({ id: s.id, title: s.title || s.id }));
    }
    return [];
  }, [topic]);

  const [passes, setPasses] = React.useState<Record<string, number>>({});
  const [customCount, setCustomCount] = React.useState<number>(0);

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
        let val = 0;
        try {
          const n = await getSubCount(bankTopicId, s.id);
          val = typeof n === "number" && !Number.isNaN(n) ? n : await readSubPassesFallback(bankTopicId, s.id);
        } catch {
          val = await readSubPassesFallback(bankTopicId, s.id);
        }
        p[s.id] = val;
      }
      if (alive) setPasses(p);
    })();
    return () => {
      alive = false;
    };
  }, [sections, topic?.id, tId, getSubCount]);

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const startSubNow = (sid: string) => {
    const bankTopicId = topic?.id ?? tId;
    startSub(bankTopicId, sid);
    router.push("/quiz");
  };

  const startCustom = () => {
    const bankTopicId = topic?.id ?? tId;
    startSub(bankTopicId, CUSTOM_SUB_ID);
    router.push("/quiz");
  };

  const openCustomEditor = () =>
    router.push({ pathname: "/irodalom/custom-bank", params: { topicId: topic?.id ?? tId } });

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

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Fejléc */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.btn}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={styles.btn}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Címkártya – KÉNYSZERÍTETT színekkel */}
        <View style={styles.card}>
          <Text style={[styles.titleBig, { color: "#f9a8d4" as const }]}>
            {topic?.title ?? "Irodalom 8 — Kvíz (alfejezetek)"}
          </Text>
          <Text style={[styles.paragraph, { marginTop: 6, color: "#93c5fd" as const }]}>
            Válaszd ki az <Text style={{ fontWeight: "800", color: "#10b981" as const }}>alfejezetet</Text>, és indul a 10 kérdéses kvíz.
          </Text>
        </View>

        {/* Saját kvíz blokk – indigó indítógomb */}
        <View style={[styles.card, { backgroundColor: "rgba(99,102,241,0.08)" }]}>
          <Text style={[styles.title, { color: "#a78bfa" as const }]}>Saját kvíz</Text>
          <Text style={[styles.paragraph, { marginTop: 6 }]}>
            Saját kérdésekből sorsolunk. Ha nincs meg a 10, a témakör bankjából egészítjük ki.
          </Text>

          <View style={{ flexDirection: "row", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
            <View style={styles.badge}><Text style={styles.badgeText}>Saját kérdések: {customCount}</Text></View>
            <View style={styles.badge}><Text style={styles.badgeText}>Cél: 10 / kvíz</Text></View>
          </View>

          <TouchableOpacity onPress={startCustom} style={[styles.btn, { marginTop: 10, backgroundColor: INDIGO }]}>
            <Text style={styles.buttonText}>✨ Indítás (10 kérdés)</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openCustomEditor} style={[styles.btn, { marginTop: 10 }]}>
            <Text style={styles.buttonText}>✍️ Saját kvíz szerkesztése</Text>
          </TouchableOpacity>
        </View>

        {/* Alfejezet kártyák – váltakozó címszínek + indigó indítás */}
        {sections.map((s, i) => {
          const accent = PALETTE[i % PALETTE.length];
          return (
            <View key={s.id} style={[styles.card, { borderLeftWidth: 4, borderLeftColor: accent }]}>
              <Text style={[styles.title, { color: accent }]}>{s.title}</Text>

              <View style={{ flexDirection: "row", gap: 10, marginTop: 8, alignItems: "center", flexWrap: "wrap" }}>
                <View style={styles.badge}><Text style={styles.badgeText}>✅ Átmenők: {passes[s.id] ?? 0}</Text></View>
                <View style={styles.badge}><Text style={styles.badgeText}>Cél: 5/10</Text></View>
                <TouchableOpacity onPress={() => onResetOne(s.id)} style={[styles.btn, { backgroundColor: "rgba(148,163,184,0.15)" }]}>
                  <Text style={[styles.buttonText, { color: "#f59e0b" as const }]}>🧹 Nullázás</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => startSubNow(s.id)} style={[styles.btn, { marginTop: 10, backgroundColor: INDIGO }]}>
                <Text style={styles.buttonText}>🎯 Indítás (10 kérdés)</Text>
              </TouchableOpacity>
            </View>
          );
        })}

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

// app/angol/topicMenu.tsx
import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import styles from "../../lib/styles";

import { LESSONS } from "../../lib/angol/lessons";
import { lessonToBank } from "../../lib/angol/lesson-map";
import { TOPIC_TREE as ENG_TREE } from "../../lib/angol/bank";
import { useQuiz } from "../../lib/QuizContext";

export default function AngolTopicMenu() {
  // Elfogadjuk a topicId-t (bank) és a lessonId-t (tananyag) is
  const { topicId: pTopic, lessonId: pLesson } = useLocalSearchParams<{
    topicId?: string;
    lessonId?: string;
  }>();

  // 1) Bank ID meghatározása
  const bankId = React.useMemo(() => {
    const t = (pTopic ?? "").trim();
    if (t && ENG_TREE.some(x => x.id === t)) return t; // már bank ID
    const l = (pLesson ?? "").trim();
    if (l && lessonToBank[l]?.topicId) return lessonToBank[l].topicId; // lesson → bank
    return ""; // ismeretlen
  }, [pTopic, pLesson]);

  // 2) Téma cím
  const title = React.useMemo(() => {
    const byBank = ENG_TREE.find(t => t.id === bankId)?.title;
    if (byBank) return byBank;
    const byLesson = LESSONS[(pLesson ?? "")]?.title;
    return byLesson ?? "Angol – témaválasztó";
  }, [bankId, pLesson]);

  // 3) Van-e tananyag (Tananyag gomb színe)
  const hasMaterial = React.useMemo(() => {
    const lid = (pLesson ?? bankId) || "";
    const lesson = LESSONS[lid];
    const blocks = (lesson as any)?.blocks || (lesson as any)?.cards || [];
    return Array.isArray(blocks) && blocks.length > 0;
  }, [pLesson, bankId]);

  const { startExam } = useQuiz();

  const onExam = () => {
    if (!bankId) return;
    // FONTOS: előbb startExam, aztán navigáció
    startExam(bankId);
    router.push("/quiz");
  };

  const onSub = () => {
    if (!bankId) return;
    router.push({ pathname: "/angol/quiz-subtopic", params: { topicId: bankId } });
  };

  const onLearn = () => {
    // Tananyagot megnyitjuk a lessonId-vel, ha van, különben a bankId-vel
    const lid = (pLesson ?? bankId) || "";
    router.push({ pathname: "/angol/learn", params: { topicId: lid, lessonId: lid } });
  };

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      {/* NAV */}
      <View style={{ flexDirection: "row", gap: 8, marginBottom: 8 }}>
        <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>

      {/* Fejléc */}
      <View style={styles.card}>
        <Text style={[styles.titleBig, { color: "#769ffeff" }]}>{title}</Text>
        <Text style={[styles.lead, { marginTop: 6 }]}>
          Válassz: dolgozat, kvíz – alfejezetek vagy tananyag.
        </Text>
      </View>

      {/* 3 gomb */}
      <View style={styles.card}>
        <TouchableOpacity
          onPress={onExam}
          disabled={!bankId}
          style={[styles.btn, styles.btnOrange, { opacity: bankId ? 1 : 0.5 }]}
        >
          <Text style={styles.buttonText}>Dolgozat (10 véletlen kérdés)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onSub}
          disabled={!bankId}
          style={[styles.btn, styles.btnIndigo, { marginTop: 10, opacity: bankId ? 1 : 0.5 }]}
        >
          <Text style={styles.buttonText}>Kvíz – alfejezetek</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onLearn}
          disabled={!hasMaterial}
          style={[
            styles.btn,
            hasMaterial ? styles.btnGreen : styles.btnDisabled,
            { marginTop: 10 },
          ]}
        >
          <Text style={styles.buttonText}>Tananyag</Text>
        </TouchableOpacity>
      </View>

      {/* DEV diagnosztika – csak fejlesztéskor látszik */}
      {__DEV__ && (
        <View style={[styles.card, { marginTop: 10, opacity: 0.9 }]}>
          <Text style={[styles.small, { color: "#75a2f7ff" }]}>Debug</Text>
          <Text style={styles.small}>param topicId: {String(pTopic ?? "-")}</Text>
          <Text style={styles.small}>param lessonId: {String(pLesson ?? "-")}</Text>
          <Text style={styles.small}>→ bankId: {bankId || "(ismeretlen)"}</Text>
          <Text style={styles.small}>Tananyag: {hasMaterial ? "van" : "nincs"}</Text>
        </View>
      )}

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

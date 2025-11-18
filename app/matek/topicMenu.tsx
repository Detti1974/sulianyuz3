import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import styles from "../../lib/styles";
import { LESSONS as MATH_LESSONS } from "../../lib/matek/lessons";
import { useQuiz } from "../../lib/QuizContext";
import { lessonToBank } from "../../lib/matek/lesson-map";

export default function MatekTopicMenu() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const { startExam } = useQuiz();

  const lessonId = String(topicId || "");
  const lesson: any = (MATH_LESSONS as any)[lessonId];

  const mapping = lessonToBank[lessonId];
  const bankId = mapping?.topicId ?? lessonId.replace(/^math_/, ""); // biztonságos visszaesés

  const goHome = () => router.replace("/");
  const goBack = () => router.back();

  const openLearn = () =>
    router.push({ pathname: "/matek/learn", params: { topicId: lessonId } });

  // Kvíz – alfejezetek: bank főtéma + scope=fejezet
  const openQuizSubtopics = () => {
    if (!bankId) return;
    router.push({
      pathname: "/matek/quiz-subtopic",
      params: { topicId: bankId, scope: lessonId },
    });
  };

  // Dolgozat: teljes bank-főtémából (ha szeretnéd, tudom scope-ra is szűkíteni)
  const startExamNow = () => {
    if (!bankId) return;
    startExam(bankId);
    router.push("/quiz");
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.card}>
        <Text style={[styles.titleBig, { color: "#a7b8ff" }]}>
          {lesson?.title || "Ismeretlen témakör"}
        </Text>
        <Text style={[styles.lead, { marginTop: 6 }]}>
          Válaszd ki, mit szeretnél gyakorolni!
        </Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={openLearn} style={[styles.btn, styles.btnGreen, { marginTop: 6 }]}>
          <Text style={styles.buttonText}>Tananyag</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={openQuizSubtopics} style={[styles.btn, styles.btnOrange, { marginTop: 10 }]}>
          <Text style={styles.buttonText}>Kvíz (alfejezetek)</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={startExamNow} style={[styles.btn, styles.btnIndigo, { marginTop: 10 }]}>
          <Text style={styles.buttonText}>Dolgozat (10 véletlen kérdés)</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
        <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

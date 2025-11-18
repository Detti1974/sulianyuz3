// app/nyelvtan/topicMenu.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import styles from "../../lib/styles";
import { useQuiz } from "../../lib/QuizContext";
import { TOPIC_TREE } from "../../lib/nyelvtan/bank";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NyelvtanTopicMenu() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const id = String(topicId || "");
  const topic = (TOPIC_TREE as any[]).find((t) => t.id === id);

  const { startExam, getTopicCount } = useQuiz();
  const [passes, setPasses] = React.useState(0);

  // --- csak a DOLGOZAT átmenőit kérjük le ---
  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const n = await getTopicCount(id);
        if (alive) setPasses(Number(n || 0));
      } catch {
        if (alive) setPasses(0);
      }
    })();
    return () => {
      alive = false;
    };
  }, [id, getTopicCount]);

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const startExamNow = async () => {
    if (!topic?.id) return;
    await startExam(topic.id); // 10 kérdéses dolgozat
    (router as any).push({ pathname: "/nyelvtan/quiz", params: { topicId: topic.id } });
  };

  const openSubQuiz = () =>
    (router as any).push({ pathname: "/nyelvtan/quiz-subtopic", params: { topicId: id } });

  const openLessons = () =>
    (router as any).push({ pathname: "/nyelvtan/learn", params: { topicId: id } });

  // --- NULLÁZÁS: csak a dolgozat számláló törlése ehhez a főtémához ---
  const resetPasses = async () => {
    try {
      await AsyncStorage.removeItem(`kviz:topic:${id}`); // csak a dolgozat counter
      setPasses(0);
      Alert.alert("Kész!", "A dolgozat-számláló nullázva.");
    } catch (e) {
      Alert.alert("Hoppá", "Nem sikerült nullázni. Próbáld újra.");
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Fejléc */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.btn}>
            <Text style={[styles.buttonText, { color: "#f472b6" }]}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={styles.btn}>
            <Text style={[styles.buttonText, { color: "#38bdf8" }]}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Címsáv */}
        <View style={styles.card}>
          <Text style={[styles.titleBig, { color: "#60a5fa" }]}>
            {topic?.title ?? "Nyelvtan — témakör"}
          </Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Ez a dolgozat a teljes főtémát érinti.{"\n"}
            Legalább <Text style={{ fontWeight: "700", color: "#22c55e" }}>50 %</Text>-os eredménnyel számít
            sikeresnek.
          </Text>

          {/* BADGE-SOR: tördelhető + nullázás gomb */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 8,
              marginTop: 10,
            }}
          >
            <View style={[styles.badge, { alignSelf: "flex-start" }]}>
              <Text style={styles.badgeText}>✅ Sikeres dolgozatok: {passes}</Text>
            </View>

            <View style={[styles.badge, { alignSelf: "flex-start" }]}>
              <Text style={styles.badgeText}>🎯 Cél: 5 sikeres ismétlés</Text>
            </View>

            <TouchableOpacity
              onPress={resetPasses}
              style={[
                styles.badge,
                { alignSelf: "flex-start", backgroundColor: "#ef4444" },
              ]}
            >
              <Text style={[styles.badgeText, { color: "white" }]}>🔄 Nullázás</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 3 gomb */}
        <View style={styles.card}>
          <TouchableOpacity
            onPress={startExamNow}
            style={[styles.btn, { backgroundColor: "#22c55e" }]}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>🧠 Dolgozat (10 kérdés)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openSubQuiz}
            style={[styles.btn, styles.btnIndigo, { marginTop: 10 }]}
          >
            <Text style={styles.buttonText}>🎯 Kvíz – alfejezetek</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openLessons}
            style={[styles.btn, { backgroundColor: "#f59e0b", marginTop: 10 }]}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>📘 Tananyag (altémák)</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

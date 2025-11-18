// app/irodalom/topicMenu.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import styles from "../../lib/styles";
import { useQuiz } from "../../lib/QuizContext";
import { TOPIC_TREE } from "../../lib/irodalom/bank";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function IrodalomTopicMenu() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const { startExam, getTopicCount } = useQuiz();

  const topic = React.useMemo(
    () => (TOPIC_TREE as any[]).find((t) => t.id === String(topicId || "")),
    [topicId]
  );

  const sectionCount = (topic?.sections || []).length;
  const [passes, setPasses] = React.useState(0);

  // --- Dolgozat-átmenők lekérése (>=50%) ---
  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        if (!topic?.id) return;
        const n = await getTopicCount(topic.id);
        if (alive) setPasses(Number(n || 0));
      } catch {
        if (alive) setPasses(0);
      }
    })();
    return () => {
      alive = false;
    };
  }, [topic?.id, getTopicCount]);

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const startExamNow = () => {
    if (!topic?.id) return;
    startExam(topic.id);
    router.push("/quiz"); // maradt, ahogy nálad működik
  };

  const openLessons = () => {
    if (!topic?.id) return;
    (router as any).push({
      pathname: "/irodalom/learn",
      params: { topicId: topic.id },
    });
  };

  const openSubQuiz = () => {
    if (!topic?.id) return;
    (router as any).push({
      pathname: "/irodalom/quiz-subtopic",
      params: { topicId: topic.id },
    });
  };

  // 🔄 Nullázás: dolgozat-számláló törlése csak ehhez a főtémához
  const resetPasses = async () => {
    try {
      if (!topic?.id) return;
      await AsyncStorage.removeItem(`kviz:topic:${topic.id}`);
      setPasses(0);
      Alert.alert("Kész!", "A dolgozat-számláló nullázva.");
    } catch {
      Alert.alert("Hoppá", "Nem sikerült nullázni. Próbáld újra.");
    }
  };

  const palette = ["#60a5fa", "#f59e0b", "#10b981", "#a78bfa", "#fb7185"];

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
          <Text
            style={[
              styles.titleBig,
              { color: palette[Math.floor(Math.random() * palette.length)] },
            ]}
          >
            {topic?.title ?? "Irodalom — témakör"}
          </Text>
          <Text
            style={[
              styles.paragraph,
              { marginTop: 6, color: palette[Math.floor(Math.random() * palette.length)] },
            ]}
          >
            Ebben a főtémában{" "}
            <Text style={{ fontWeight: "800", color: "#10b981" }}>{sectionCount}</Text> alfejezet
            található.{"\n"}A{" "}
            <Text style={{ fontWeight: "800", color: "#f59e0b" }}>Tananyag</Text> a jegyzeteket
            mutatja, a{" "}
            <Text style={{ fontWeight: "800", color: "#6366f1" }}>Kvíz – alfejezetek</Text> az adott
            alfejezetből indít 10 kérdéses gyakorlót, a{" "}
            <Text style={{ fontWeight: "800", color: "#22c55e" }}>Dolgozat</Text> pedig a teljes
            főtémából sorsol.
          </Text>

          {/* 🔢 Dolgozat badge + Nullázás gomb */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap", // ↩ tördelés, hogy elférjen minden
              gap: 8,
              marginTop: 10,
            }}
          >
            <View style={styles.badge}>
              <Text style={styles.badgeText}>✅ Sikeres dolgozatok: {passes}</Text>
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>🎯 Cél: 5 sikeres ismétlés</Text>
            </View>

            <TouchableOpacity
              onPress={resetPasses}
              style={[styles.badge, { backgroundColor: "#ef4444" }]}
            >
              <Text style={[styles.badgeText, { color: "white" }]}>🔄 Nullázás</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 3 színes gomb */}
        <View style={styles.card}>
          <TouchableOpacity
            onPress={startExamNow}
            style={[styles.btn, { backgroundColor: "#22c55e" }]}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>📝 Dolgozat (10 kérdés)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openSubQuiz}
            style={[styles.btn, styles.btnIndigo, { marginTop: 10 }]}
          >
            <Text style={styles.buttonText}>📚 Kvíz – alfejezetek</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openLessons}
            style={[styles.btn, { backgroundColor: "#f59e0b", marginTop: 10 }]}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>🧠 Tananyag (altémák)</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 28 }} />
      </ScrollView>
    </View>
  );
}

// app/nemet/topicMenu.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../../lib/styles";
import { useQuiz } from "../../lib/QuizContext";
import { TOPIC_TREE as NEM_TREE } from "../../lib/nemet/bank";

export default function NemetTopicMenu() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const tId = String(topicId || "");

  // Cím feloldása a bankból
  const title =
    (NEM_TREE as any[]).find((t) => t.id === tId)?.title || "Német — téma";

  const { startExam, getTopicCount } = useQuiz();

  // ✅ Dolgozat-számláló
  const [passes, setPasses] = React.useState(0);
  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const n = await getTopicCount(tId);
        if (alive) setPasses(Number(n || 0));
      } catch {
        if (alive) setPasses(0);
      }
    })();
    return () => {
      alive = false;
    };
  }, [tId, getTopicCount]);

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  // ── Navigáció ───────────────────────────────
  const goLearn = () =>
    (router as any).push(`/nemet/learn?topicId=${encodeURIComponent(tId)}`);

  const goSubquiz = () =>
    (router as any).push(`/nemet/quiz-subtopic?topicId=${encodeURIComponent(tId)}`);

  const startExamNow = () => {
    startExam(tId);
    (router as any).push("/nemet/quiz");
  };

  // 🔄 Nullázás
  const resetPasses = async () => {
    try {
      await AsyncStorage.removeItem(`kviz:topic:${tId}`);
      setPasses(0);
      Alert.alert("Kész!", "A dolgozat-számláló nullázva.");
    } catch {
      Alert.alert("Hoppá", "Nem sikerült nullázni. Próbáld újra.");
    }
  };

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

        {/* Cím + leírás */}
        <View style={styles.card}>
          <Text style={[styles.titleBig, { color: "#22c55e" }]}>{title}</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Válassz módot: <Text style={{ fontWeight: "800" }}>Dolgozat</Text> (10 kérdés),{" "}
            <Text style={{ fontWeight: "800" }}>Kvíz – alfejezetek</Text> vagy{" "}
            <Text style={{ fontWeight: "800" }}>Tananyag</Text>.
          </Text>

          {/* Dolgozat badge-ek */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
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
              <Text style={[styles.badgeText, { color: "#fff" }]}>🔄 Nullázás</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Gombok */}
        <View style={styles.card}>
          <TouchableOpacity
            onPress={startExamNow}
            style={[styles.btn, { backgroundColor: "#f97316", borderColor: "#fb923c" }]}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>🧠 Dolgozat (10 kérdés)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goSubquiz}
            style={[
              styles.btn,
              { marginTop: 10, backgroundColor: "#5e24e5ff", borderColor: "#5f21f0ff" },
            ]}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>🎯 Kvíz – alfejezetek</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goLearn}
            style={[
              styles.btn,
              { marginTop: 10, backgroundColor: "#22c55e", borderColor: "#4ade80" },
            ]}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>📚 Tananyag (altémák)</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 28 }} />
      </ScrollView>
    </View>
  );
}

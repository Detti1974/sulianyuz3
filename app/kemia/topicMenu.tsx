import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import styles from "../../lib/styles";
import { useQuiz } from "../../lib/QuizContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function KemiaTopicMenu() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const tId = String(topicId || "");

  const { startExam, getTopicCount } = useQuiz();
  const [passes, setPasses] = React.useState(0);

  React.useEffect(() => {
    let on = true;
    (async () => {
      try {
        const c = await getTopicCount(tId); // csak dolgozat-átmenők
        if (on) setPasses(Number(c || 0));
      } catch {
        if (on) setPasses(0);
      }
    })();
    return () => {
      on = false;
    };
  }, [tId, getTopicCount]);

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const goLearn = () =>
    router.push({ pathname: "/kemia/learn", params: { topicId: tId } });

  const goSubquiz = () =>
    router.push({ pathname: "/kemia/quiz-subtopic", params: { topicId: tId } });

  const startExamNow = async () => {
    await startExam(tId);
    router.push({ pathname: "/kemia/quiz", params: { topicId: tId } });
  };

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
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={[styles.titleBig, { color: "#38bdf8" }]}>Kémia — téma</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Ez a dolgozat a teljes főtémát érinti. Legalább{" "}
            <Text style={{ fontWeight: "700", color: "#22c55e" }}>50 %</Text>-os eredmény
            számít sikeresnek.
          </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
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

        <View style={styles.card}>
          <TouchableOpacity
            onPress={startExamNow}
            style={[styles.btn, { backgroundColor: "#22c55e" }]}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>🧠 Dolgozat (10 kérdés)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goSubquiz}
            style={[styles.btn, styles.btnIndigo, { marginTop: 10 }]}
          >
            <Text style={[styles.buttonText]}>🎯 Kvíz – alfejezetek</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goLearn}
            style={[styles.btn, { marginTop: 10, backgroundColor: "#f59e0b" }]}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>📚 Tananyag (altémák)</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 28 }} />
      </ScrollView>
    </View>
  );
}

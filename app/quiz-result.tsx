// app/quiz-result.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router, useSegments } from "expo-router";
import styles from "../lib/styles";
import { useQuiz } from "../lib/QuizContext";

export default function QuizResult() {
  const { getScore, getReviewItems, state, startSub, startExam } = useQuiz();

  // Hol futunk? (globális vagy nyelvtan stack)
  const segments = useSegments(); // pl. ["nyelvtan","quiz-result"] vagy ["quiz-result"]
  const inNyelvtan = Array.isArray(segments) && segments[0] === "nyelvtan";
  const QUIZ_PATH = inNyelvtan ? "/nyelvtan/quiz" : "/quiz";

  const { correct, total, percent } = getScore();
  const review = getReviewItems();

  const goHome = () => router.replace("/");

  // Új kvíz: ugyanabból a módból és témából újrasorsolunk, AZTÁN lépünk /quiz-re
  const newQuiz = async () => {
    try {
      const topicId = state.topicId || "";
      const subId = state.subId || "";
      if (state.mode === "exam" && topicId) {
        await startExam(topicId);                 // új sorsolás DOLGOZAT módra
      } else if (state.mode === "sub" && topicId && subId) {
        await startSub(topicId, subId);          // új sorsolás KVÍZ (alfejezet) módra
      } else {
        // biztonsági fallback: ha valami hiányzik, induljon alap kvíz
        await startSub(topicId || "nyelvtan_8_szofajok", subId || "section_szofajok_alap");
      }
    } finally {
      router.replace(QUIZ_PATH);                 // navigáció csak a sorsolás UTÁN
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Eredménykártya */}
        <View style={styles.card}>
          <Text style={styles.titleBig}>Eredményed 🎯</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Helyes válaszok: <Text style={{ color: "#22c55e", fontWeight: "800" }}>{correct}</Text>
            {" / "}
            <Text style={{ color: "#f59e0b", fontWeight: "800" }}>{total}</Text>
          </Text>
          <Text style={[styles.lead, { marginTop: 4 }]}>
            Pontosság:{" "}
            <Text style={{ color: percent >= 60 ? "#22c55e" : "#ef4444", fontWeight: "800" }}>
              {percent}%
            </Text>
          </Text>

          <TouchableOpacity
            onPress={newQuiz}
            style={[styles.btn, { marginTop: 12, backgroundColor: "#f59e0b", borderColor: "#f59e0b" }]}
          >
            <Text style={styles.buttonText}>🔁 Új kvíz</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goHome} style={[styles.btn, { marginTop: 10 }]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Részletes áttekintő (ha kell) */}
        {review?.length
          ? review.map((r: any, i: number) => {
              const ok = r.chosen === r.correctIndex;
              return (
  <View
    key={i}
    style={[styles.card, { backgroundColor: "rgba(255,255,255,0.03)" }]}
  >
    {/* kérdés sorszáma és helyesség */}
    <Text
      style={[
        styles.title,
        { color: ok ? "#22c55e" : "#ef4444" }
      ]}
    >
      {i + 1}. kérdés {ok ? "✔️" : "❌"}
    </Text>

    {/* <<< EZ AZ ÚJ SOR: a kérdés szövege >>> */}
  <Text
  style={{
    fontSize: 18,
    color: "#f59e0b", // narancs (#f59e0b)
    fontWeight: "700",
    marginTop: 6,
    marginBottom: 6,
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  }}
>
  {r.q}
</Text>


    {/* válaszok */}
    <Text style={[styles.paragraph, { marginTop: 6 }]}>
      <Text style={{ fontWeight: "800" }}>A te válaszod: </Text>
      {r.options?.[r.chosen ?? -1] ?? "—"}
    </Text>

    <Text style={[styles.paragraph, { marginTop: 2 }]}>
      <Text style={{ fontWeight: "800" }}>Helyes válasz: </Text>
      <Text style={{ color: "#f59e0b", fontWeight: "800" }}>
        {r.options?.[r.correctIndex] ?? "—"}
      </Text>
    </Text>

    {r.exp && (
      <View style={[styles.explainBox, { marginTop: 8 }]}>
        <Text style={styles.paragraph}>{r.exp}</Text>
      </View>
    )}
  </View>
);

            })
          : null}

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

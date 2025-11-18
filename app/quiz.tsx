// app/quiz.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../lib/styles";
import { useQuiz } from "../lib/QuizContext";

const EXAM_COLOR_KEY = "exam_colorize_toggle";

// Visszafogott, nem-indigó árnyalatok
const COLOR_OK = "#16a34a";       // zöld
const COLOR_BAD = "#ef4444";      // piros
const COLOR_DIM = "#4b5563";      // szürkített
const COLOR_PICKED_EXAM = "#14b8a6"; // türkiz a kiválasztotthoz exam módban
const COLOR_PROGRESS = "#22c55e"; // zöld progressz

export default function QuizScreen() {
  const { state, choose, next, restart, markAndStore } = useQuiz();
  const items = state.items ?? [];
  const step = state.step;
  const q = items[step];
  const isExam = state.mode === "exam";

  // Eredmény route: nyelvtan stackben /nyelvtan/quiz-result
  const segments = useSegments();
  const inNyelvtan = Array.isArray(segments) && segments[0] === "nyelvtan";
  const RESULT_PATH = inNyelvtan ? "/nyelvtan/quiz-result" : "/quiz-result";

  // ---- Exam színezés kapcsoló (csak exam módban látszik) ----
  const [examColorize, setExamColorize] = React.useState<boolean>(false);
  React.useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(EXAM_COLOR_KEY);
        setExamColorize(raw === "1");
      } catch {}
    })();
  }, []);
  const toggleExamColor = React.useCallback(async () => {
    const nextVal = !examColorize;
    setExamColorize(nextVal);
    try { await AsyncStorage.setItem(EXAM_COLOR_KEY, nextVal ? "1" : "0"); } catch {}
  }, [examColorize]);

  // Üres kérdéslista esetén egyszer próbáljuk újra
  const retried = React.useRef(false);
  React.useEffect(() => {
    if (!state.finished && items.length === 0 && !retried.current) {
      retried.current = true;
      Promise.resolve().then(() => restart());
    }
  }, [items.length, state.finished, restart]);

  // Ha befejeztük, mentsünk és menjünk az összegzőre
  React.useEffect(() => {
    if (state.finished) {
      markAndStore().finally(() => router.replace(RESULT_PATH));
    }
  }, [state.finished, RESULT_PATH, markAndStore]);

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  if (!q) {
    return (
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Text style={styles.lead}>Nem sikerült kérdéseket betölteni.</Text>
            <TouchableOpacity onPress={goHome} style={[styles.btn, { marginTop: 12 }]}>
              <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  const correct = q.correctIndex;
  const chosen = q.chosen ?? null;
  const progressed = step + (chosen !== null ? 1 : 0);
  const total = items.length;
  const left = Math.max(total - progressed, 0);
  const progressPct = total ? Math.min(100, Math.round((progressed / total) * 100)) : 0;
  const isCorrect = chosen !== null && chosen === correct;

  const onPick = (i: number) => choose(i);

  const onNext = async () => {
    const last = step >= total - 1;
    if (last) {
      await markAndStore();
      router.replace(RESULT_PATH);
      return;
    }
    next();
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Fejléc */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={[styles.btn]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>

          {/* Exam színezés kapcsoló – csak dolgozat módban */}
          {isExam && (
            <TouchableOpacity onPress={toggleExamColor} style={[styles.btn, { marginLeft: 8 }]}>
              <Text style={styles.buttonText}>
                {examColorize ? "Színezés: BE" : "Színezés: KI"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Kérdéskártya */}
        <View style={styles.card}>
          <Text style={styles.title}>Kérdés {step + 1} / {total} 🎯</Text>

          {/* Haladási sáv */}
          <View style={{ height: 8, backgroundColor: "#1f2937", borderRadius: 8, marginTop: 8 }}>
            <View style={{ height: 8, width: `${progressPct}%`, backgroundColor: COLOR_PROGRESS, borderRadius: 8 }} />
          </View>

          {/* Kérdés szöveg */}
          <Text style={[styles.lead, { marginTop: 12 }]}>{q.q}</Text>

          {/* Opciók */}
          {(q.options || []).map((opt: string, i: number) => {
            const btnStyles: any[] = [styles.btn, { marginTop: 10 }];

            if (!isExam && chosen !== null) {
              // KVÍZ (alfejezet) – azonnali visszajelzés
              if (i === correct) {
                btnStyles.push({ backgroundColor: COLOR_OK, borderColor: COLOR_OK });
              } else if (i === chosen) {
                btnStyles.push({ backgroundColor: COLOR_BAD, borderColor: COLOR_BAD });
              } else {
                btnStyles.push({ backgroundColor: COLOR_DIM, borderColor: COLOR_DIM });
              }
            }

            if (isExam && chosen !== null) {
              // DOLGOZAT – csak a kiválasztott legyen különböző, ha be van kapcsolva
              if (i === chosen && examColorize) {
                btnStyles.push({ backgroundColor: COLOR_PICKED_EXAM, borderColor: COLOR_PICKED_EXAM });
              } else if (i === chosen) {
                btnStyles.push({ opacity: 0.88 });
              }
            }

            return (
              <TouchableOpacity
                key={i}
                activeOpacity={0.9}
                disabled={chosen !== null}   // választás után Tovább gombbal lépünk
                onPress={() => onPick(i)}
                style={btnStyles}
              >
                <Text style={styles.buttonText}>{opt}</Text>
              </TouchableOpacity>
            );
          })}

          {/* Magyarázat blokk – CSAK kvíz módban, választás után */}
          {!isExam && chosen !== null && (
            <View
              style={[
                styles.explainBox,
                {
                  marginTop: 12,
                  borderColor: isCorrect ? "rgba(34,197,94,0.35)" : "rgba(239,68,68,0.35)",
                },
              ]}
            >
              <Text style={[styles.lead, { color: isCorrect ? COLOR_OK : COLOR_BAD }]}>
                {isCorrect ? "Szuper! ✅" : "Nem talált! ❌"}
              </Text>

              <Text style={[styles.paragraph, { marginTop: 6 }]}>
                Helyes válasz:{" "}
                <Text style={{ color: "#f59e0b", fontWeight: "700" }}>
                  {q.options[correct]}
                </Text>
              </Text>

              {!!q.exp && (
                <Text style={[styles.paragraph, { marginTop: 6 }]}>{q.exp}</Text>
              )}
            </View>
          )}

          {/* Számlálók */}
          <View style={{ flexDirection: "row", gap: 12, marginTop: 12, alignItems: "center" }}>
            <View style={styles.badge}><Text style={styles.badgeText}>{progressed} / {total}</Text></View>
            <View style={styles.badge}><Text style={styles.badgeText}>Hátra: {left}</Text></View>
          </View>

          {/* Tovább – választás után zöldre vált */}
          <TouchableOpacity
            onPress={() => { if (chosen !== null) onNext(); }}
            disabled={chosen === null}
            style={[
              styles.btn,
              {
                marginTop: 12,
                opacity: chosen === null ? 0.5 : 1,
                ...(chosen !== null
                  ? { backgroundColor: COLOR_OK, borderColor: COLOR_OK }
                  : null),
              },
            ]}
          >
            <Text style={styles.buttonText}>Tovább ▶️</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

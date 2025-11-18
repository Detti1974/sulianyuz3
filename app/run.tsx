// app/run.tsx
import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import styles from "../lib/styles";
import { useQuiz } from "../lib/QuizContext";

// ---------------- Confetti (emoji) ----------------
function ConfettiBurst({ run = false, duration = 1200, count = 22 }) {
  const { width } = Dimensions.get("window");
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    if (!run) return;
    setTick((t) => t + 1);
  }, [run]);

  const particles = React.useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const startX = Math.random() * (width - 40) + 20;
        const travelY = 180 + Math.random() * 120;
        const driftX = (Math.random() - 0.5) * 120;

        const p = {
          x: new Animated.Value(startX),
          y: new Animated.Value(0),
          o: new Animated.Value(1),
          r: new Animated.Value(0),
          emoji: ["🎉", "✨", "🎊", "🌟", "💥", "🎈"][i % 6],
        };

        Animated.parallel([
          Animated.timing(p.y, {
            toValue: travelY,
            duration,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(p.x, {
            toValue: startX + driftX,
            duration,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(p.o, {
            toValue: 0,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(p.r, {
            toValue: Math.random() * 6.28,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]).start();

        return p;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tick]
  );

  if (!run) return null;
  return (
    <View pointerEvents="none" style={{ position: "absolute", left: 0, right: 0, top: -6 }}>
      {particles.map((p, i) => (
        <Animated.Text
          key={i}
          style={{
            position: "absolute",
            transform: [{ translateX: p.x }, { translateY: p.y }, { rotate: p.r }],
            opacity: p.o,
            fontSize: 22,
          }}
        >
          {p.emoji}
        </Animated.Text>
      ))}
    </View>
  );
}
// --------------------------------------------------

export default function RunScreen() {
  // A context API-k különböző verzióihoz is igazodunk:
  const { state, current, choose, next, submit, reset } = useQuiz() as any;

  const items = state?.items ?? [];
  const idx = state?.step ?? 0;
  const q = current ?? items[idx] ?? null;

  const total = items.length || state?.total || 10;
  const answered = (items || []).filter((x: any) => typeof x.chosen === "number").length;
  const percent = total ? Math.round(((answered || idx + 1) / total) * 100) : 0;

  const [celebrate, setCelebrate] = React.useState(false);

  const goBack = () => router.back();
  const goHome = () => {
    reset?.();
    router.replace("/");
  };

  const onPick = (i: number) => {
    if (!q || typeof q.chosen === "number") return;
    choose(i);
    if (i === q.correctIndex) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 1300);
    }
  };

  const isAnswered = q && typeof q.chosen === "number";
  const isCorrect = isAnswered && q.chosen === q.correctIndex;

  if (!q) {
    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.lead}>Nem érkeztek kérdések a dolgozathoz.</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
              <Text style={styles.buttonText}>← Vissza</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
              <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // opció kártyák (azonos a quiz.tsx-szel)
  const optBase = { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 16, marginBottom: 8 };
  const optNeutral = { backgroundColor: "#374151" };
  const optChosen = { backgroundColor: "#334155", borderWidth: 2, borderColor: "#94a3b8" };
  const optCorrect = { backgroundColor: "#14532d", borderWidth: 2, borderColor: "#22c55e" };
  const optWrong = { backgroundColor: "#7f1d1d", borderWidth: 2, borderColor: "#ef4444" };

  const infoBox = { borderRadius: 14, padding: 12, marginTop: 10, borderWidth: 1 } as const;
  const infoGood = { backgroundColor: "#052e1a", borderColor: "#16a34a" };
  const infoBad = { backgroundColor: "#2b0a0a", borderColor: "#ef4444" };

  return (
    <View style={styles.screen}>
      <ConfettiBurst run={celebrate} />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Dolgozat — kérdés {Math.min(idx + 1, total)} / {total} 📝</Text>

          {/* progress */}
          <View style={[styles.divider, { backgroundColor: "#1f2937", marginTop: 10 }]} />
          <View style={{ height: 6, borderRadius: 999, backgroundColor: "#16a34a", width: `${percent}%`, marginTop: -6 }} />

          <Text style={[styles.lead, { marginTop: 10 }]}>{q.q}</Text>

          {/* opciók */}
          <View style={{ marginTop: 12 }}>
            {q.options.map((opt: string, i: number) => {
              const chosen = q.chosen === i;
              let moreStyle: any = optNeutral;
              if (isAnswered) {
                if (i === q.correctIndex) moreStyle = optCorrect;
                else if (chosen) moreStyle = optWrong;
              } else if (chosen) {
                moreStyle = optChosen;
              }
              return (
                <TouchableOpacity key={i} activeOpacity={0.85} onPress={() => onPick(i)}>
                  <View style={[optBase, moreStyle]}>
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", textAlign: "center" }}>
                      {opt}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* visszajelző doboz */}
          {isAnswered && (
            <View style={[infoBox, isCorrect ? infoGood : infoBad]}>
              {isCorrect ? (
                <Text style={styles.lead}>
                  Szuper! ✅{" "}
                  <Text style={{ fontWeight: "800", color: "#86efac" }}>
                    Helyes válasz: {q.options[q.correctIndex]}
                  </Text>{" "}
                  🎉
                </Text>
              ) : (
                <>
                  <Text style={styles.lead}>
                    Sajnos nem ez. ❌{" "}
                    <Text style={{ fontWeight: "800", color: "#fde68a" }}>
                      Helyes válasz: {q.options[q.correctIndex]}
                    </Text>
                  </Text>
                  {q.exp ? <Text style={[styles.paragraph, { marginTop: 6 }]}>{q.exp}</Text> : null}
                </>
              )}
            </View>
          )}

          {/* badge-ek */}
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center", marginTop: 12 }}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>✅ {answered}/{total}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>⏭️ Hátra: {Math.max(total - answered, 0)}</Text>
            </View>
          </View>

          {/* navigáció */}
          <View style={{ flexDirection: "row", gap: 10, marginTop: 14 }}>
            {idx < total - 1 ? (
              <TouchableOpacity onPress={next} style={[styles.btn, styles.btnOrange]}>
                <Text style={styles.buttonText}>{isAnswered ? "Következő ▶️" : "Tovább ▶️"}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={submit} style={[styles.btn, styles.btnGreen]}>
                <Text style={styles.buttonText}>Összegzés 📊</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

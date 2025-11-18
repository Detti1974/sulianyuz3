// app/kemia/quiz.tsx
import React, { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { TOPIC_TREE, QA } from "@/lib/kemia/bank";

function pickRandom<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

export default function QuizKemia() {
  const { topicId, sectionId, mode } = useLocalSearchParams<{
    topicId: string;
    sectionId?: string;
    mode?: "quiz" | "exam";
  }>();

  const topic = TOPIC_TREE.find((t) => t.id === topicId);
  const section =
    topic?.sections.find((s) => s.id === sectionId) || null;

  const pool: QA[] = useMemo(() => {
    if (!topic) return [];
    if (mode === "quiz" && section) return section.bank;
    // exam mód – összes szekció bank összefésülve
    const all = topic.sections.flatMap((s) => s.bank);
    return pickRandom(all, Math.min(10, all.length));
  }, [topic, section, mode]);

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  if (!topic || pool.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: "#0a0f1c", padding: 16 }}>
        <Text style={{ color: "#fecaca" }}>Nincs elérhető kérdés.</Text>
      </View>
    );
  }

  const q = pool[idx];

  const onPick = (i: number) => {
    if (showResult) return;
    const next = [...answers, i];
    if (mode === "quiz") {
      // azonnali visszajelzéses mód – léptetés
      setAnswers(next);
      if (idx + 1 < pool.length) setIdx(idx + 1);
      else setShowResult(true);
    } else {
      // exam – csak rögzítjük, végén értékelünk
      setAnswers(next);
      if (idx + 1 < pool.length) setIdx(idx + 1);
      else setShowResult(true);
    }
  };

  const correctCount = useMemo(
    () => answers.filter((a, i) => a === pool[i].correctIndex).length,
    [answers, pool]
  );

  if (showResult) {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#0a0f1c" }}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
      >
        <View
          style={{
            backgroundColor: "#0b1220",
            borderRadius: 18,
            padding: 18,
            borderWidth: 1,
            borderColor: "#1f2a44",
          }}
        >
          <Text
            style={{
              color: "#a7f3d0",
              fontSize: 22,
              fontWeight: "800",
              marginBottom: 8,
            }}
          >
            Eredmény
          </Text>
          <Text style={{ color: "#e2e8f0", fontSize: 18, marginBottom: 12 }}>
            {correctCount} / {pool.length} helyes válasz 🎉
          </Text>

          {/* kérdés + helyes válasz összefoglaló */}
          {pool.map((qq, i) => {
            const my = answers[i];
            return (
              <View
                key={i}
                style={{
                  marginTop: 10,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: my === qq.correctIndex ? "#052e1a" : "#2a0b0b",
                }}
              >
                <Text style={{ color: "#93c5fd", fontWeight: "800" }}>
                  {i + 1}. {qq.q}
                </Text>
                <Text style={{ color: "#e2e8f0", marginTop: 4 }}>
                  ✅ Helyes: {qq.options[qq.correctIndex]}
                </Text>
                <Text style={{ color: "#e2e8f0" }}>
                  {my === qq.correctIndex ? "✔️ Jól válaszoltál." : `❌ Te: ${qq.options[my ?? 0] ?? "-"}`}
                </Text>
                {!!qq.exp && (
                  <Text style={{ color: "#a7f3d0", marginTop: 6 }}>{qq.exp}</Text>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#0a0f1c" }}>
      <View
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderColor: "#1f2a44",
          backgroundColor: "#0b1220",
        }}
      >
        <Text style={{ color: "#e2e8f0" }}>
          Kérdés {idx + 1} / {pool.length}
        </Text>
        <Text
          style={{
            color: "#bfdbfe",
            fontSize: 20,
            fontWeight: "800",
            marginTop: 6,
          }}
        >
          {q.q}
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {q.options.map((opt, i) => (
          <Pressable
            key={i}
            onPress={() => onPick(i)}
            style={{
              backgroundColor: "#111827",
              borderWidth: 1,
              borderColor: "#1f2a44",
              padding: 14,
              borderRadius: 14,
              marginBottom: 12,
            }}
          >
            <Text style={{ color: "#e2e8f0", fontSize: 16, fontWeight: "700" }}>
              {opt}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

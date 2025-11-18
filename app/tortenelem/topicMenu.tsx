import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

import styles from "../../lib/styles";
import { useQuiz } from "../../lib/QuizContext";
import { LESSONS } from "./lessons";

export default function TopicMenuScreen() {
  const { topicId: p1, topic: p2 } = useLocalSearchParams<{ topicId?: string; topic?: string }>();
  const topicId = String(p1 ?? p2 ?? "ww1");

  const { startExam, getTopicCount, resetTopicCount } = useQuiz();

  // Cím/lead a lessons.ts-ből
  const lesson: any = (LESSONS as any)[topicId] ?? {};
  const title: string = typeof lesson?.title === "string" ? lesson.title : "Témakör";
  const lead: string =
    typeof lesson?.lead === "string" ? lesson.lead : "Válaszd ki, mit szeretnél gyakorolni!";

  const [count, setCount] = React.useState<number>(0);

  const loadCount = React.useCallback(async () => {
    try {
      const v = await getTopicCount(topicId);
      setCount(v);
    } catch {
      setCount(0);
    }
  }, [topicId, getTopicCount]);

  // Fókuszra is frissítjük (összegzőről visszatérve EZ kell!)
  useFocusEffect(
    React.useCallback(() => {
      loadCount();
    }, [loadCount])
  );

  // Nav
  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const onExam = () => { startExam(topicId); router.push("/quiz"); };
  const goQuizBySubtopics = () => router.push({ pathname: "/tortenelem/quiz-subtopic", params: { topicId } });
  const goLearn = () => router.push({ pathname: "/tortenelem/learn", params: { topicId } });

  const onReset = async () => {
    await resetTopicCount(topicId);
    await loadCount();
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* felső gombsor */}
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* fő kártya */}
        <View style={styles.card}>
          <Text style={styles.titleBig}>{title}</Text>
          <Text style={styles.lead}>{lead}</Text>

          <TouchableOpacity onPress={onExam} style={[styles.btn, styles.btnOrange]}>
            <Text style={styles.buttonText}>Dolgozat (10 véletlen kérdés)</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goQuizBySubtopics} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>Kvíz – alfejezetek</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goLearn} style={[styles.btn, styles.btnGreen]}>
            <Text style={styles.buttonText}>Tananyag</Text>
          </TouchableOpacity>

          {/* számláló + nullázás */}
          <View style={{ height: 10 }} />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View
              style={{
                backgroundColor: "rgba(22,163,74,0.12)",
                borderLeftWidth: 4,
                borderLeftColor: "#16a34a",
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
                flex: 1,
              }}
            >
              <Text style={{ color: "#e5e7eb", fontSize: 16, textAlign: "left" }}>
                Elvégzések (≥50%): {count}
              </Text>
            </View>

            <TouchableOpacity onPress={onReset} style={[styles.btn, styles.btnGray]}>
              <Text style={styles.buttonText}>Nullázás</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

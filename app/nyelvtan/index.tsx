// app/nyelvtan/index.tsx
import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import styles from "../../lib/styles";
import LESSONS from "../../lib/nyelvtan/lessons";

export default function NyelvtanTopicsScreen() {
  const topics = React.useMemo(
    () =>
      Object.entries(LESSONS as Record<string, any>).map(([id, lesson]) => ({
        id,
        title: lesson?.title ?? id,
        sectionCount: Array.isArray(lesson?.sections)
          ? lesson.sections.length
          : 0,
      })),
    []
  );

  const openTopic = (id: string) => {
    router.push({ pathname: "/nyelvtan/topicMenu", params: { topicId: id } });
  };

  const goSubjects = () => router.replace("/subjects");
  const goHome = () => router.replace("/");

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      {/* Fejléc sáv */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={goSubjects}
          style={[styles.btn, { backgroundColor: "#6b7280" }]} // szürke vissza
        >
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goHome}
          style={[styles.btn, { backgroundColor: "#818cf8" }]} // lila kezdőoldal
        >
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>

      {/* Bevezető kártya */}
      <View style={styles.card}>
        <Text style={[styles.titleBig, { color: "#bcd0ff" }]}>
          Nyelvtan — témakörök
        </Text>
        <Text style={[styles.lead, { marginTop: 6 }]}>
          Válaszd ki a témát! A következő képernyőn jön a három opció:{" "}
          <Text style={{ fontWeight: "800" }}>Dolgozat</Text>,{" "}
          <Text style={{ fontWeight: "800" }}>Kvíz – alfejezetek</Text>, és{" "}
          <Text style={{ fontWeight: "800" }}>Tananyag</Text>.
        </Text>
      </View>

      {/* Témalistát kirajzoljuk */}
      {topics.map((t) => (
        <View key={t.id} style={styles.card}>
          <Text style={[styles.title, { color: "#9fc0ff" }]}>{t.title}</Text>

          <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Alfejezetek: {t.sectionCount}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => openTopic(t.id)}
            style={[styles.btn, styles.btnGreen, { marginTop: 10 }]}
            activeOpacity={0.9}
          >
            <Text style={styles.buttonText}>Megnyitás</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={{ height: 28 }} />
    </ScrollView>
  );
}

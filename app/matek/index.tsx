// app/matek/index.tsx
import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import styles from "../../lib/styles";
import { LESSONS as MATH_LESSONS } from "../../lib/matek/lessons";

export default function MatekTopicsScreen() {
  const topics = React.useMemo(
    () =>
      Object.entries(MATH_LESSONS).map(([id, lesson]: any) => ({
        id,
        title: lesson?.title ?? id,
      })),
    []
  );

  const openTopic = (id: string) => {
    router.push({ pathname: "/matek/topicMenu", params: { topicId: id } });
  };

  const goSubjects = () => router.replace("/subjects");
  const goHome = () => router.replace("/");

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      {/* Fejléc – Vissza és Kezdőoldal */}
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

      {/* Cím és bevezető */}
      <View style={styles.card}>
        <Text style={[styles.titleBig, { color: "#9fc0ff" }]}>
          Matematika — témakörök
        </Text>
        <Text style={[styles.lead, { marginTop: 6 }]}>
          Válaszd ki a témát. A következő képernyőn jön a három opció:{" "}
          <Text style={{ fontWeight: "700" }}>Dolgozat</Text>,{" "}
          <Text style={{ fontWeight: "700" }}>Kvíz – alfejezetek</Text>,{" "}
          <Text style={{ fontWeight: "700" }}>Tananyag</Text>.
        </Text>
      </View>

      {/* Témák listája */}
      {topics.map((t) => (
        <View key={t.id} style={styles.card}>
          <Text style={[styles.title, { color: "#bcd0ff" }]}>{t.title}</Text>
          <Text style={[styles.lead, { marginTop: 8 }]}>
            Érintsd meg a gombot a továbblépéshez!
          </Text>

          <TouchableOpacity
            onPress={() => openTopic(t.id)}
            style={[styles.btn, styles.btnIndigo, { marginTop: 12 }]}
          >
            <Text style={styles.buttonText}>Megnyitás</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={{ height: 28 }} />
    </ScrollView>
  );
}

// app/angol/index.tsx
import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import styles from "../../lib/styles";
import { TOPIC_TREE as ENG_TREE } from "../../lib/angol/bank";

export default function AngolIndex() {
  const topics = React.useMemo(
    () => ENG_TREE.map((t) => ({ id: t.id, title: t.title })),
    []
  );

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
          style={[styles.btn, { backgroundColor: "#6b7280" }]} // szürke "vissza"
        >
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goHome}
          style={[styles.btn, { backgroundColor: "#818cf8" }]} // lila "kezdőoldal"
        >
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>

      {/* Cím és bevezető */}
      <View style={styles.card}>
        <Text style={[styles.titleBig, { color: "#bcd0ff" }]}>
          Angol — témakörök
        </Text>
        <Text style={[styles.lead, { marginTop: 6 }]}>
          Válaszd ki a fejezetet, amelyikből tanulni vagy kvízt tölteni
          szeretnél!
        </Text>
      </View>

      {/* Témák listája */}
      {topics.map((t) => (
        <View key={t.id} style={styles.card}>
          <Text style={[styles.title, { color: "#9fc0ff" }]}>{t.title}</Text>
          <Text style={[styles.lead, { marginTop: 8 }]}>
            Érintsd meg a gombot a továbblépéshez!
          </Text>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/angol/topicMenu",
                params: { topicId: t.id },
              })
            }
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

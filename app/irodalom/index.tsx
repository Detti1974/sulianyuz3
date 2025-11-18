// app/irodalom/index.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../lib/styles";
import { router } from "expo-router";
import { TOPIC_TREE } from "../../lib/irodalom/bank";

export default function IrodalomIndex() {
  const palette = ["#a78bfa", "#60a5fa", "#10b981", "#f59e0b", "#fb7185"];

  const goSubjects = () => router.replace("/subjects");
  const goHome = () => router.replace("/");

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
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

        {/* Fejléc – színes cím */}
        <View style={styles.card}>
          <Text style={[styles.titleBig, { color: "#a78bfa" }]}>
            Irodalom 8 — Témák
          </Text>
          <Text style={[styles.paragraph, { marginTop: 6, color: "#93c5fd" }]}>
            Válassz fő témát, majd az alfejezetnél indíthatod a kvízt.
          </Text>
        </View>

        {/* Témák listája */}
        {TOPIC_TREE.map((t: any, index: number) => {
          const sectionCount = (t.sections || []).length;
          const color = palette[index % palette.length]; // váltakozó színek
          return (
            <View key={t.id} style={styles.card}>
              <Text style={[styles.title, { color }]}>{t.title}</Text>

              <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    Alfejezetek: {sectionCount}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/irodalom/topicMenu",
                    params: { topicId: t.id },
                  })
                }
                style={[styles.btn, styles.btnGreen, { marginTop: 10 }]}
              >
                <Text style={styles.buttonText}>Megnyitás</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        <View style={{ height: 28 }} />
      </ScrollView>
    </View>
  );
}

// app/tortenelem/index.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import styles from "../../lib/styles";
import { TOPIC_TREE } from "../../lib/tortenelem/bank";

// helyi akcent paletta (nem függ a styles-től)
const ACCENT = ["#60a5fa", "#22c55e", "#f59e0b", "#a78bfa", "#38bdf8", "#f472b6", "#84cc16", "#fb923c"];

export default function TortenelemTopicList() {
  const goHome = () => router.replace("/");

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 24 }}>
      {/* Fejléc */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={[styles.btn, styles.btnGray]}>
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>

      {/* Színes főcím */}
      <View style={styles.card}>
        <Text style={styles.title}>
          <Text style={{ color: "#60a5fa" }}>Történelem</Text>
          <Text> — </Text>
          <Text style={{ color: "#f59e0b" }}>témakörök</Text>
        </Text>
        <Text style={[styles.paragraph, { marginTop: 6 }]}>
          Válaszd ki a témát. A következő képernyőn jön a három opció:{" "}
          <Text style={{ fontWeight: "700" }}>Dolgozat</Text>,{" "}
          <Text style={{ fontWeight: "700" }}>Kvíz – alfejezetek</Text>,{" "}
          <Text style={{ fontWeight: "700" }}>Tananyag</Text>.
        </Text>
      </View>

      {/* Témalisták */}
      {TOPIC_TREE.map((t, idx) => {
        const color = ACCENT[idx % ACCENT.length];
        return (
          <View key={t.id} style={[styles.card, { borderLeftWidth: 5, borderLeftColor: color }]}>
            <Text style={[styles.lead, { color }]}>{t.title}</Text>
            <Text style={[styles.paragraph, { marginTop: 8 }]}>
              Érintsd meg a gombot a továbblépéshez!
            </Text>

            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/tortenelem/topicMenu",
                  params: { topic: t.id, title: t.title },
                })
              }
              style={[styles.btn, styles.btnIndigo, { marginTop: 12 }]}
            >
              <Text style={styles.buttonText}>Megnyitás</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
}

// app/foldrajz/index.tsx
import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import styles from "../../lib/styles";
import { TOPIC_TREE as GEO_TREE } from "../../lib/foldrajz/bank";

export default function FoldrajzIndex() {
  const topics = (GEO_TREE as any[]) || [];

  const goHome = () => router.replace("/");

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Fejléc */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Címkártya */}
        <View style={styles.card}>
          <Text style={[styles.titleBig, { color: "#06b6d4" }]}>Földrajz 8. — Témák</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Válassz főtémát! A következő képernyőn indíthatsz{" "}
            <Text style={{ fontWeight: "800" }}>Dolgozatot</Text>,{" "}
            <Text style={{ fontWeight: "800" }}>Kvízt (alfejezet)</Text> vagy megnézheted a{" "}
            <Text style={{ fontWeight: "800" }}>Tananyagot</Text>.
          </Text>
        </View>

        {/* Témalista */}
        {topics.map((t) => (
          <View
            key={t.id}
            style={[
              styles.card,
              {
                backgroundColor: "rgba(6,182,212,0.10)",
                borderWidth: 1,
                borderColor: "rgba(6,182,212,0.35)",
              },
            ]}
          >
            <Text style={[styles.title, { color: "#06b6d4" }]}>{t.title || t.id}</Text>
            <View style={{ flexDirection: "row", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Altémák: {Array.isArray(t.sections) ? t.sections.length : 0}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  (router as any).push(`/foldrajz/topicMenu?topicId=${encodeURIComponent(t.id)}`)
                }
                style={[styles.btn, { backgroundColor: "#06b6d4", borderColor: "#22d3ee" }]}
              >
                <Text style={[styles.buttonText, { color: "#fff" }]}>Megnyitás</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={{ height: 28 }} />
      </ScrollView>
    </View>
  );
}

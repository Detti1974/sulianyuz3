// app/kemia/index.tsx
import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import styles from "../../lib/styles";
import { TOPIC_TREE as CHEM_TREE } from "../../lib/kemia/bank";

export default function KemiaTopicsIndex() {
  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const openTopic = (topicId: string) =>
    router.push({ pathname: "/kemia/topicMenu", params: { topicId } });

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Fejléc */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Címdoboz */}
        <View style={styles.card}>
          <Text style={[styles.titleBig, { color: "#06b6d4" }]}>Kémia – Témakörök</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Válassz témakört! A kattintás után megjelenik a Dolgozat / Kvíz / Tananyag képernyő.
          </Text>
        </View>

        {/* Témalisták */}
        {CHEM_TREE.map((t: any, i: number) => (
          <View
            key={t.id}
            style={[
              styles.card,
              {
                backgroundColor: "rgba(6,182,212,0.08)",
                borderWidth: 1,
                borderColor: "rgba(6,182,212,0.35)",
              },
            ]}
          >
            <Text style={[styles.title, { color: "#cb8adcff" }]}>{t.title || t.id}</Text>
            <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  Alfejezetek: {(t.sections || []).length}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => openTopic(t.id)}
              style={[styles.btn, styles.btnGreen, { marginTop: 10 }]}
            >
              <Text style={styles.buttonText}>Megnyitás ▶️</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={{ height: 28 }} />
      </ScrollView>
    </View>
  );
}

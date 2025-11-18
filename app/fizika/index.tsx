// app/fizika/index.tsx
import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import styles from "../../lib/styles";
import { TOPIC_TREE as PHYS_TREE } from "../../lib/fizika/bank";

export default function FizikaTopicsIndex() {
  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const openTopic = (topicId: string) =>
    router.push({ pathname: "../fizika/topicMenu", params: { topicId } });

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
          <Text style={[styles.titleBig, { color: "#f59e0b" }]}>Fizika – Témakörök</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Válassz témakört! A kattintás után megjelenik a Dolgozat / Kvíz / Tananyag képernyő.
          </Text>
        </View>

        {/* Témalisták */}
        {PHYS_TREE.map((t: any) => (
          <View
            key={t.id}
            style={[
              styles.card,
              {
                backgroundColor: "rgba(245,158,11,0.08)",     // melegebb, nem kék
                borderWidth: 1,
                borderColor: "rgba(245,158,11,0.35)",
              },
            ]}
          >
            <Text style={[styles.title, { color: "#d8b4fe" }]}>{t.title || t.id}</Text>
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

// app/biologia/index.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import styles from "../../lib/styles";
import { TOPIC_TREE as BIO_TREE } from "../../lib/biologia/bank";

export default function BiologiaIndex() {
  const goHome = () => router.replace("/");

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Fejléc */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Címdoboz */}
        <View style={styles.card}>
          <Text style={[styles.titleBig, { color: "#22c55e" }]}>Biológia 8. osztály</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Válassz egy témát, majd tanulj, kvízezz vagy írj dolgozatot!
          </Text>
        </View>

        {/* Főtémák listája */}
        {(BIO_TREE as any[]).map((topic) => (
          <TouchableOpacity
            key={topic.id}
            style={[styles.card, { backgroundColor: "#14532d", borderColor: "#16a34a" }]}
            onPress={() =>
              // <<< Itt a lényeg: string alapú route, nincs több TS hiszti
              router.push(`/biologia/topicMenu?topicId=${encodeURIComponent(topic.id)}` as any)

            }
          >
            <Text style={{ color: "#bbf7d0", fontSize: 22, fontWeight: "900", textShadowColor: "#116b34", textShadowRadius: 3 }}>
              {topic.title}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

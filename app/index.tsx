// app/index.tsx
import { router } from "expo-router";
import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../lib/styles";

export default function HomeScreen() {
  // String alapú push — nem fog “typed routes” miatt hisztizni
  const goAI = () => (router as any).push("/ai-chat");
  const goSubjects = () => (router as any).push("/subjects");

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.screen}>
      {/* Címkártya */}
      <View style={styles.card}>
        <Text style={[styles.title, { color: "#fff" }]}>Tansegítő – 8. osztály</Text>
        <Text style={[styles.lead, { marginTop: 6 }]}>
          Válassz: AI segítség vagy tantárgyak szerinti tanulás.
        </Text>
      </View>

      {/* Szili MI – ingyenes asszisztens (Pipedream webhookkal megy) */}
      <View
        style={[
          styles.card,
          { backgroundColor: "rgba(139,92,246,0.10)", borderColor: "rgba(139,92,246,0.35)", borderWidth: 1 },
        ]}
      >
        <Text style={[styles.title, { color: "#a78bfa" }]}>🎓 Szili MI (ingyenes)</Text>
        <Text style={[styles.paragraph, { marginTop: 6 }]}>
          Rövid, pontokra szedett magyarázatok házihoz vagy tananyaghoz. Biztonságos stílus,
          8. osztályos szinten.
        </Text>

        <TouchableOpacity
          onPress={goAI}
          style={[styles.btn, { marginTop: 10, backgroundColor: "#8b5cf6", borderColor: "#a78bfa" }]}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>💬 Belépés a Szili MI-hez</Text>
        </TouchableOpacity>
      </View>

      {/* Tantárgyak menü */}
      <View style={styles.card}>
        <Text style={styles.title}>📚 Tantárgyak</Text>
        <Text style={[styles.lead, { marginTop: 6 }]}>
          Tananyag + kvíz + dolgozat — válaszd ki a tárgyat!
        </Text>

        <TouchableOpacity onPress={goSubjects} style={[styles.btn, styles.btnIndigo, { marginTop: 10 }]}>
          <Text style={styles.buttonText}>Tantárgyak megnyitása</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

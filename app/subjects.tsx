// app/subjects.tsx
import { router } from "expo-router";
import * as React from "react";
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "../lib/styles";

// Reusable, animált gomb komponens
function SubjectButton({
  label,
  emoji,
  color,
  to,
}: {
  label: string;
  emoji: string;
  color: string;
  to: string;
}) {
  const scale = React.useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start();
  };
  const pressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start();
  };

  return (
    <Pressable
      onPress={() => router.push(to as any)}
      onPressIn={pressIn}
      onPressOut={pressOut}
      style={{ marginTop: 12, borderRadius: 14 }}
    >
      <Animated.View
        style={[
          localStyles.btnBase,
          { backgroundColor: color },
          { transform: [{ scale }] },
        ]}
      >
        <Text style={[styles.buttonText, { fontSize: 18 }]}>
          {emoji} {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

export default function SubjectsScreen() {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.card}>
        <Text style={[styles.titleBig, { color: "#f0f4ff" }]}>
          Tansegítő – 8. osztály
        </Text>
        <Text style={[styles.lead, { marginTop: 6 }]}>
          Válaszd ki a tantárgyat!
        </Text>

        {/* ────────────── TÖRTÉNELEM ────────────── */}
        <SubjectButton
          label="Történelem"
          emoji="🏰"
          color="#eab308"
          to="/tortenelem"
        />

        {/* ────────────── MATEMATIKA ────────────── */}
        <SubjectButton
          label="Matematika"
          emoji="➗"
          color="#2563eb"
          to="/matek"
        />

        {/* ────────────── ANGOL ────────────── */}
        <SubjectButton
          label="Angol"
          emoji="🇬🇧"
          color="#a855f7"
          to="/angol"
        />

        {/* ────────────── NÉMET (ÚJ) ────────────── */}
        <SubjectButton
          label="Német"
          emoji="🇩🇪"
          color="#ef4444"
          to="/nemet"
        />

        {/* ────────────── IRODALOM ────────────── */}
        <SubjectButton
          label="Irodalom"
          emoji="📚"
          color="#f97316"
          to="/irodalom"
        />

        {/* ────────────── NYELVTAN ────────────── */}
        <SubjectButton
          label="Nyelvtan"
          emoji="✍️"
          color="#22c55e"
          to="/nyelvtan"
        />

        {/* ────────────── KÉMIA ────────────── */}
        <SubjectButton
          label="Kémia"
          emoji="🧪"
          color="#06b6d4"
          to="/kemia"
        />

        {/* ────────────── FIZIKA ────────────── */}
        <SubjectButton
          label="Fizika"
          emoji="⚡"
          color="#f59e0b"
          to="/fizika"
        />

        {/* ────────────── BIOLÓGIA ────────────── */}
        <SubjectButton
          label="Biológia"
          emoji="🧬"
          color="#16a34a"
          to="/biologia"
        />

        {/* ────────────── FÖLDRAJZ ────────────── */}
        <SubjectButton
          label="Földrajz"
          emoji="🌍"
          color="#06b6d4"
          to="/foldrajz"
        />
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  btnBase: {
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
});

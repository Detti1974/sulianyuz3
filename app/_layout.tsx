// app/_layout.tsx
import "react-native-gesture-handler";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

// ✅ A QuizProvider default exportként van exportálva
import QuizProvider from "../lib/QuizContext";

const BG = "#0b1020";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: BG }}>
      <SafeAreaProvider>
        {/* ✅ A QuizProvider körbefogja az egész appot */}
        <QuizProvider>
          <StatusBar style="light" />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: BG },
              headerStyle: { backgroundColor: BG },
              headerTintColor: "#9df1b4ee",
            }}
          />
        </QuizProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

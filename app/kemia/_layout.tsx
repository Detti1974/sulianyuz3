// app/kemia/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function LayoutKemia() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 🔹 Elrejti a natív fejlécet minden kémia képernyőn
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="topicMenu" />
      <Stack.Screen name="learn" />
      <Stack.Screen name="quiz" />
      <Stack.Screen name="quiz-subtopic" />
    </Stack>
  );
}

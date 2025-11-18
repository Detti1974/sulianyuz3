// app/foldrajz/_layout.tsx
import * as React from "react";
import { Stack } from "expo-router";

export default function FoldrajzLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="topicMenu" />
      <Stack.Screen name="quiz-subtopic" />
      <Stack.Screen name="learn" />
      <Stack.Screen name="quiz" />
    </Stack>
  );
}

// app/nemet/_layout.tsx
import * as React from "react";
import { Stack } from "expo-router";

export default function NemetLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#0b1220" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="learn" />
      <Stack.Screen name="quiz" />
    </Stack>
  );
}

// app/biologia/_layout.tsx
import { Stack } from "expo-router";

export default function BiologiaLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
        gestureEnabled: true,
        contentStyle: { backgroundColor: "#0b1220" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="topicMenu" />
      <Stack.Screen name="quiz-subtopic" />
      <Stack.Screen name="quiz" />
      <Stack.Screen name="learn" />
      <Stack.Screen name="custom-bank" />
    </Stack>
  );
}

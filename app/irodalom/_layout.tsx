import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="quiz-subtopic" />
      <Stack.Screen name="lessons" /> {/* <<< EZ KELL */}
    </Stack>
  );
}

// app/nyelvtan/_layout.tsx
import * as React from "react";
import { Stack } from "expo-router";
import QuizProvider from "../../lib/QuizContext"; // default export

export default function NyelvtanLayout() {
  return (
    <QuizProvider>
      {/* A nyelvtan alatti összes képernyő ugyanazon QuizProvider alatt fut */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* Nem kötelező felsorolni, de expliciten megadom a stabilitás kedvéért */}
        <Stack.Screen name="index" />
        <Stack.Screen name="topicMenu" />
        <Stack.Screen name="quiz-subtopic" />
        <Stack.Screen name="custom-bank" />
        <Stack.Screen name="learn" />
        <Stack.Screen name="quiz" />
        <Stack.Screen name="quiz-result" />
      </Stack>
    </QuizProvider>
  );
}

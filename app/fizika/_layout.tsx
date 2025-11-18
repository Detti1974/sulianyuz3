// app/fizika/_layout.tsx
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function FizikaLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0f172a" },   // sötétkék háttér
          headerTintColor: "#fde68a",                     // aranysárga szöveg
          headerTitleStyle: { fontWeight: "bold" },
          headerShadowVisible: false,
          animation: "slide_from_right",
          gestureEnabled: true,
          headerShown: false, 
        }}
      >
        {/* fő témalista */}
        <Stack.Screen
          name="index"
          options={{
            title: "Fizika – témakörök",
          }}
        />
        {/* témamenü */}
        <Stack.Screen
          name="topicMenu"
          options={{
            title: "Fizika – témamenü",
          }}
        />
        {/* kvíz alfejezetek */}
        <Stack.Screen
          name="quiz-subtopic"
          options={{
            title: "Fizika – alfejezetes kvíz",
          }}
        />
        {/* saját kvíz szerkesztő */}
        <Stack.Screen
          name="custom-bank"
          options={{
            title: "Saját fizika kvíz",
          }}
        />
        {/* tananyag */}
        <Stack.Screen
          name="learn"
          options={{
            title: "Tananyag – Fizika 8",
          }}
        />
      </Stack>
    </>
  );
}

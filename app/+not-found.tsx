import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function NotFoundScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: "800", marginBottom: 12 }}>This screen does not exist.</Text>
      <TouchableOpacity
        onPress={() => router.replace("/")}
        style={{ backgroundColor: "#4f46e5", paddingHorizontal: 18, paddingVertical: 12, borderRadius: 10 }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

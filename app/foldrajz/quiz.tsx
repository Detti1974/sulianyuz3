// app/foldrajz/quiz.tsx
import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import styles from "../../lib/styles";

export default function FoldrajzQuizWrapper() {
  const params = useLocalSearchParams<{
    topicId?: string;
    subId?: string;
  }>();

  // A tényleges kvíz a globális /quiz képernyőn fut, innen csak átirányítunk
  React.useEffect(() => {
    (router as any).replace({
      pathname: "/quiz",
      params: { subject: "foldrajz", topicId: params.topicId, subId: params.subId },
    });
  }, [params.topicId, params.subId]);

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { justifyContent: "space-between" }]}>
        <TouchableOpacity onPress={() => router.back()} style={[styles.btn, styles.btnGray]}>
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: "#06b6d4" }]}>Földrajz — Kvíz</Text>
        <TouchableOpacity onPress={() => router.replace("/")} style={[styles.btn, styles.btnIndigo]}>
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

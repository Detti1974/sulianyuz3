import * as React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, router } from "expo-router";
import styles from "../../lib/styles";

const KEY = (topicId: string) => `notes_${topicId}`;

export default function MatekNotes() {
  const { topicId } = useLocalSearchParams<{ topicId: string }>();
  const tId = String(topicId || "");
  const [text, setText] = React.useState("");

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const load = React.useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(KEY(tId));
      setText(raw ?? "");
    } catch {
      setText("");
    }
  }, [tId]);

  const save = React.useCallback(async () => {
    await AsyncStorage.setItem(KEY(tId), text);
    Alert.alert("Mentve", "A jegyzet elmentve.");
  }, [tId, text]);

  const clearAll = React.useCallback(async () => {
    await AsyncStorage.removeItem(KEY(tId));
    setText("");
  }, [tId]);

  React.useEffect(() => {
    if (!tId) return;
    load();
  }, [tId, load]);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Fejléc */}
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.titleBig}>Jegyzetek</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Írj fel képleteket, trükköket, hibás feladatok magyarázatát.
          </Text>

          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Írj ide…"
            multiline
            style={{
              borderWidth: 1,
              borderColor: "#334155",
              borderRadius: 10,
              padding: 10,
              marginTop: 12,
              color: "white",
              minHeight: 220,
              textAlignVertical: "top",
            }}
          />

          <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
            <TouchableOpacity onPress={save} style={[styles.btn, styles.btnGreen]}>
              <Text style={styles.buttonText}>Mentés</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clearAll} style={[styles.btn, styles.btnGray]}>
              <Text style={styles.buttonText}>Törlés</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

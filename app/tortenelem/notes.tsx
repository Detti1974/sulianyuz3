import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../lib/styles";

type Note = { id: string; text: string; ts: number };
const keyNotes = (t: string) => `notes:custom:${t}`;

export default function NotesScreen() {
  const { topicId: p } = useLocalSearchParams<{ topicId?: string }>();
  const topicId = String(p ?? "ww1");

  const [notes, setNotes] = React.useState<Note[]>([]);
  const [draft, setDraft] = React.useState("");

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  React.useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem(keyNotes(topicId));
      setNotes(raw ? JSON.parse(raw) : []);
    })();
  }, [topicId]);

  const persist = async (arr: Note[]) => {
    setNotes(arr);
    try {
      await AsyncStorage.setItem(keyNotes(topicId), JSON.stringify(arr));
    } catch {
      Alert.alert("Hoppá", "Nem sikerült elmenteni a jegyzeteket.");
    }
  };

  const addNote = () => {
    const text = draft.trim();
    if (!text) return;
    const n: Note = { id: String(Date.now()), text, ts: Date.now() };
    persist([n, ...notes]);
    setDraft("");
  };

  const delNote = (id: string) => {
    Alert.alert("Törlés", "Biztosan törlöd?", [
      { text: "Mégse", style: "cancel" },
      { text: "Törlés", style: "destructive", onPress: () => persist(notes.filter(n => n.id !== id)) },
    ]);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
        <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>📝 Jegyzetek (Saját téma)</Text>

        <TextInput
          value={draft}
          onChangeText={setDraft}
          placeholder="Írj be egy jegyzetet…"
          placeholderTextColor="#9aa4b2"
          multiline
          style={{
            backgroundColor: "#0f172a",
            color: "#e2e8f0",
            borderColor: "#334155",
            borderWidth: 1,
            borderRadius: 12,
            padding: 10,
            marginTop: 10,
            minHeight: 60,
          }}
        />
        <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
          <TouchableOpacity onPress={addNote} style={[styles.btn, styles.btnGreen]}>
            <Text style={styles.buttonText}>💾 Mentés</Text>
          </TouchableOpacity>
          {!!draft.trim() && (
            <TouchableOpacity onPress={() => setDraft("")} style={[styles.btn, styles.btnGray]}>
              <Text style={styles.buttonText}>Mégse</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Mentett jegyzetek</Text>
        {notes.length === 0 ? (
          <Text style={[styles.paragraph, { marginTop: 6 }]}>Még nincs jegyzet.</Text>
        ) : (
          <View style={{ marginTop: 12, gap: 10 }}>
            {notes.map(n => (
              <View key={n.id} style={{ borderWidth: 1, borderColor: "#334155", borderRadius: 12, padding: 10 }}>
                <Text style={styles.paragraph}>{n.text}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                  <Text style={{ color: "#94a3b8", fontSize: 12 }}>{new Date(n.ts).toLocaleString()}</Text>
                  <TouchableOpacity onPress={() => delNote(n.id)} style={[styles.btn, styles.btnRed]}>
                    <Text style={styles.buttonText}>Törlés</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

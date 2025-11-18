// app/angol/learn.tsx
import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../lib/styles";
import LESSONS from "../../lib/angol/lessons";

type Note = { id: string; text: string; created: number };
const keyNotes = (lessonId: string) => `notes:angol:${lessonId}`;

export default function AngolLearnScreen() {
  const { lessonId: pLesson, topicId: pTopic } =
    useLocalSearchParams<{ lessonId?: string; topicId?: string }>();
  const lessonId = String(pLesson ?? pTopic ?? "").trim();
  const lesson = LESSONS[lessonId];

  const [notes, setNotes] = React.useState<Note[]>([]);
  const [draft, setDraft] = React.useState("");
  const [editing, setEditing] = React.useState<string | null>(null);
  const [editText, setEditText] = React.useState("");

  React.useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(keyNotes(lessonId));
        setNotes(raw ? JSON.parse(raw) : []);
      } catch {
        setNotes([]);
      }
    })();
  }, [lessonId]);

  const saveNotes = async (arr: Note[]) => {
    setNotes(arr);
    await AsyncStorage.setItem(keyNotes(lessonId), JSON.stringify(arr));
  };

  const addNote = async () => {
    const text = draft.trim();
    if (!text) return;
    const n: Note = { id: `${Date.now()}`, text, created: Date.now() };
    await saveNotes([n, ...notes]);
    setDraft("");
  };

  const delNote = async (id: string) => {
    await saveNotes(notes.filter((n) => n.id !== id));
  };

  const startEdit = (n: Note) => {
    setEditing(n.id);
    setEditText(n.text);
  };
  const saveEdit = async () => {
    if (!editing) return;
    const txt = editText.trim();
    const arr = notes.map((n) => (n.id === editing ? { ...n, text: txt } : n));
    await saveNotes(arr);
    setEditing(null);
    setEditText("");
  };
  const cancelEdit = () => {
    setEditing(null);
    setEditText("");
  };

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 16 }}>
      {/* NAV */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>

      {/* Fejléc */}
      <View style={styles.card}>
        <Text style={[styles.titleBig, { color: "#9fc0ff" }]}>
          {lesson?.title ?? "Angol – Tananyag"}
        </Text>
        {!lesson && (
          <Text style={[styles.lead, { color: "#ffb3b3", marginTop: 6 }]}>
            Ehhez a témához még nincs tananyag (hibás lessonId?).
          </Text>
        )}
      </View>

      {/* Színes tananyag-kártyák */}
      {lesson?.blocks?.map((b: any, idx: number) => (
        <View
          key={`${idx}`}
          style={[
            styles.card,
            {
              borderLeftWidth: 6,
              borderLeftColor: b.color,
              backgroundColor: "rgba(255,255,255,0.06)",
            },
          ]}
        >
          <Text style={[styles.lead, { color: b.color }]}>{b.text}</Text>
        </View>
      ))}

      {/* Jegyzetek – matekos layout */}
      <View style={[styles.card, { marginTop: 12 }]}>
        <Text style={[styles.title, { color: "#bcd0ff" }]}>Jegyzetek</Text>

        {/* beviteli mező külön sorban */}
        <TextInput
          value={draft}
          onChangeText={setDraft}
          placeholder="Írj be egy rövid jegyzetet..."
          placeholderTextColor="#a3a3a3"
          style={[styles.input, { marginTop: 10 }]}
        />

        {/* nagy zöld Mentés gomb külön sorban */}
        <TouchableOpacity
          onPress={addNote}
          style={[styles.btn, styles.btnGreen, { marginTop: 10 }]}
        >
          <Text style={styles.buttonText}>💾 Mentés</Text>
        </TouchableOpacity>

        {/* lista */}
        <View style={{ marginTop: 12, gap: 8 }}>
          {notes.map((n) => (
            <View
              key={n.id}
              style={[styles.card, { backgroundColor: "rgba(255,255,255,0.05)" }]}
            >
              {editing === n.id ? (
                <>
                  <TextInput
                    value={editText}
                    onChangeText={setEditText}
                    placeholder="Jegyzet szerkesztése…"
                    placeholderTextColor="#a3a3a3"
                    style={styles.input}
                  />
                  <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
                    <TouchableOpacity onPress={saveEdit} style={[styles.btn, styles.btnGreen]}>
                      <Text style={styles.buttonText}>💾 Mentés</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={cancelEdit} style={[styles.btn, styles.btnGray]}>
                      <Text style={styles.buttonText}>✖ Mégse</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <>
                  <Text style={styles.lead}>{n.text}</Text>
                  <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
                    <TouchableOpacity onPress={() => startEdit(n)} style={[styles.btn, styles.btnGray]}>
                      <Text style={styles.buttonText}>✏️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => delNote(n.id)} style={[styles.btn, styles.btnGray]}>
                      <Text style={styles.buttonText}>🗑️</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          ))}

          {notes.length === 0 && (
            <Text style={[styles.small, { color: "#a3e3ff", marginTop: 6 }]}>
              Nincsenek jegyzetek. Adj hozzá egyet a fenti mezővel!
            </Text>
          )}
        </View>
      </View>

      <View style={{ height: 28 }} />
    </ScrollView>
  );
}

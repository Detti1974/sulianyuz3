// lib/NotesPanel.tsx
import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";

type Note = { id: string; text: string };
type Props = {
  /** Kötelező: egyedi kulcs ehhez a képernyőhöz/témához */
  storageKey: string;
  /** Opcionális cím (alap: "Jegyzetek") */
  title?: string;
};

export default function NotesPanel({ storageKey, title = "Jegyzetek" }: Props) {
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [value, setValue] = React.useState("");
  const [editingId, setEditingId] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(storageKey);
        setNotes(raw ? JSON.parse(raw) : []);
      } catch {
        setNotes([]);
      }
    })();
  }, [storageKey]);

  const persist = async (next: Note[]) => {
    setNotes(next);
    try {
      await AsyncStorage.setItem(storageKey, JSON.stringify(next));
    } catch {}
  };

  const onSave = () => {
    const t = value.trim();
    if (!t) return;
    if (editingId) {
      const next = notes.map(n => (n.id === editingId ? { ...n, text: t } : n));
      persist(next);
      setEditingId(null);
      setValue("");
      return;
    }
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    persist([{ id, text: t }, ...notes]);
    setValue("");
  };

  const onEdit = (n: Note) => {
    setEditingId(n.id);
    setValue(n.text);
  };

  const onDelete = (id: string) => {
    persist(notes.filter(n => n.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setValue("");
    }
  };

  const onCancel = () => {
    setEditingId(null);
    setValue("");
  };

  return (
    <View style={[styles.card, { marginTop: 12 }]}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {/* input + gombok */}
      <View style={{ marginTop: 8 }}>
        <TextInput
          style={styles.input}
          placeholder="Írj be egy rövid jegyzetet…"
          placeholderTextColor="#9aa4b2"
          value={value}
          onChangeText={setValue}
        />
        <View style={{ flexDirection: "row", gap: 12, marginTop: 8 }}>
          <TouchableOpacity onPress={onSave} style={[styles.btn, styles.btnGreen]}>
            <Text style={styles.buttonText}>{editingId ? "Mentés" : "Mentés"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCancel}
            style={[styles.btn, styles.btnGray]}
            disabled={!editingId && !value.trim()}
          >
            <Text style={styles.buttonText}>Mégse</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* lista */}
      {notes.length === 0 ? (
        <Text style={[styles.lead, { marginTop: 10, color: "#a9b4c7" }]}>
          Még nincs jegyzeted ehhez a témához.
        </Text>
      ) : (
        <FlatList
          style={{ marginTop: 10 }}
          data={notes}
          keyExtractor={(n) => n.id}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#0f172a",
                borderRadius: 12,
                padding: 12,
                marginBottom: 8,
                borderWidth: 1,
                borderColor: "#1e293b",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <Text style={[styles.paragraph, { flex: 1 }]}>{item.text}</Text>
              <View style={{ flexDirection: "row", gap: 8 }}>
                <TouchableOpacity
                  onPress={() => onEdit(item)}
                  style={[styles.iconBtn, { backgroundColor: "#334155" }]}
                >
                  <Text style={{ fontSize: 16 }}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onDelete(item.id)}
                  style={[styles.iconBtn, { backgroundColor: "#3f2d2d" }]}
                >
                  <Text style={{ fontSize: 16 }}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

// app/fizika/learn.tsx
// Fizika "Tananyag" képernyő – sötét téma + tartalomblokkok + jegyzetek (mentés/szerk./törlés)

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// !!! CSAK EZ A KÉT IMPORT KÜLÖNBÖZIK TANTÁRGYANKÉNT !!!
import LESSON_MAP, {
  LessonTopic,
  LessonSubtopic,
} from "@/lib/fizika/lesson-map";
import LESSONS from "@/lib/fizika/lessons";

// ---- jegyzet típus
type Note = { id: string; text: string; ts: number };

// ---- kulcs generátor
const keyNotes = (topicId: string, subId: string) =>
  `notes:fizika:${topicId}:${subId}`;

// ---- jegyzet hook (betöltés/mentés/törlés)
function useNotes(topicId?: string, subId?: string) {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Note[]>([]);

  const load = useCallback(async () => {
    if (!topicId || !subId) return;
    const raw = await AsyncStorage.getItem(keyNotes(topicId, subId));
    setItems(raw ? JSON.parse(raw) : []);
  }, [topicId, subId]);

  useEffect(() => {
    setText("");
    setItems([]);
    load();
  }, [load]);

  const save = useCallback(async () => {
    if (!topicId || !subId) return;
    const trimmed = text.trim();
    if (!trimmed) return;
    const arr = [
      { id: `${Date.now()}`, text: trimmed, ts: Date.now() },
      ...items,
    ];
    setItems(arr);
    setText("");
    await AsyncStorage.setItem(keyNotes(topicId, subId), JSON.stringify(arr));
  }, [text, items, topicId, subId]);

  const update = useCallback(
    async (id: string, newText: string) => {
      if (!topicId || !subId) return;
      const arr = items.map((n) => (n.id === id ? { ...n, text: newText } : n));
      setItems(arr);
      await AsyncStorage.setItem(keyNotes(topicId, subId), JSON.stringify(arr));
    },
    [items, topicId, subId]
  );

  const remove = useCallback(
    async (id: string) => {
      if (!topicId || !subId) return;
      const arr = items.filter((n) => n.id !== id);
      setItems(arr);
      await AsyncStorage.setItem(keyNotes(topicId, subId), JSON.stringify(arr));
    },
    [items, topicId, subId]
  );

  return { text, setText, items, save, update, remove };
}

/* ==========================
   Képernyő
========================== */

export default function LearnFizika() {
  const [selectedTopic, setSelectedTopic] = useState<LessonTopic | null>(null);
  const [selectedSub, setSelectedSub] = useState<LessonSubtopic | null>(null);

  // Témalistát generáljuk (id-t a végén adjuk, ne ütközzön)
  const topicList = useMemo(
    () =>
      Object.entries(LESSON_MAP).map(([id, t]) => ({
        ...(t as LessonTopic),
        id,
      })),
    []
  );

  const subList = selectedTopic?.sections ?? [];

  // Aktuális tartalom (LESSONS -> content blokkok)
  const contentBlocks = useMemo(() => {
    if (!selectedTopic || !selectedSub) return [];
    const topicData = (LESSONS as any)[selectedTopic.id];
    const sec =
      topicData?.sections?.find((s: any) => s.id === selectedSub.id) || null;
    return sec?.content ?? [];
  }, [selectedTopic, selectedSub]);

  const notes = useNotes(selectedTopic?.id, selectedSub?.id);
  const scrollRef = useRef<ScrollView>(null);

  const goBackToTopics = () => {
    setSelectedSub(null);
    setSelectedTopic(null);
  };

  const goBackToSubs = () => {
    setSelectedSub(null);
  };

  /* ============ Render segédkomponensek ============ */

  const TopicCard = ({ topic }: { topic: LessonTopic }) => (
    <Pressable
      onPress={() => setSelectedTopic(topic)}
      style={[styles.card, { backgroundColor: topic.color ?? "#3b82f6" }]}
    >
      <Text style={styles.cardTitle}>{topic.title}</Text>
      <Text style={styles.cardMeta}>{topic.sections.length} altéma</Text>
    </Pressable>
  );

  const SubCard = ({ sub }: { sub: LessonSubtopic }) => (
    <Pressable
      onPress={() => setSelectedSub(sub)}
      style={[styles.card, { backgroundColor: sub.color ?? "#34d399" }]}
    >
      <Text style={styles.cardTitle}>{sub.title}</Text>
    </Pressable>
  );

  const Block = ({ b }: { b: any }) => {
    if (b.type === "text") {
      return (
        <View style={[styles.block, styles.blockText]}>
          <Text style={styles.blockTitle}>{selectedSub?.title}</Text>
          <Text style={styles.blockTextInner}>{b.text}</Text>
        </View>
      );
    }
    if (b.type === "list") {
      return (
        <View style={[styles.block, styles.blockList]}>
          {b.items?.map((it: string, i: number) => (
            <View key={i} style={{ flexDirection: "row", gap: 8 }}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{it}</Text>
            </View>
          ))}
        </View>
      );
    }
    if (b.type === "example") {
      return (
        <View style={[styles.block, styles.blockExample]}>
          <Text style={styles.blockHeader}>📘 Példa</Text>
          <Text style={styles.exampleText}>{b.text}</Text>
        </View>
      );
    }
    if (b.type === "tip") {
      return (
        <View style={[styles.block, styles.blockTip]}>
          <Text style={styles.blockHeader}>💡 Tipp</Text>
          <Text style={styles.tipText}>{b.text}</Text>
        </View>
      );
    }
    return null;
  };

  /* ============ UI ============ */

  return (
    <View style={styles.container}>
      {/* Fejléc */}
      <View style={styles.header}>
        {(selectedTopic || selectedSub) ? (
          <Pressable
            onPress={selectedSub ? goBackToSubs : goBackToTopics}
            hitSlop={10}
          >
            <Text style={styles.backText}>◀ {selectedSub ? "Témák" : "Tantárgyak"}</Text>
          </Pressable>
        ) : (
          <Text style={styles.headerTitle}>Fizika — Tananyag</Text>
        )}
      </View>

      {/* 1) Témalisták */}
      {!selectedTopic && (
        <FlatList
          contentContainerStyle={{ padding: 16, gap: 12 }}
          data={topicList}
          keyExtractor={(t) => t.id}
          renderItem={({ item }) => <TopicCard topic={item} />}
        />
      )}

      {/* 2) Altémák listája */}
      {selectedTopic && !selectedSub && (
        <FlatList
          contentContainerStyle={{ padding: 16, gap: 12 }}
          ListHeaderComponent={
            <Text style={styles.topicTitle}>{selectedTopic.title}</Text>
          }
          data={subList}
          keyExtractor={(s) => s.id}
          renderItem={({ item }) => <SubCard sub={item} />}
        />
      )}

      {/* 3) Tartalom + Jegyzetek */}
      {selectedTopic && selectedSub && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
          >
            <Text style={styles.topicTitle}>{selectedSub.title}</Text>

            {contentBlocks.length === 0 ? (
              <Text style={styles.emptyText}>
                Ehhez az altémához még nincs feltöltött tananyag.
              </Text>
            ) : (
              contentBlocks.map((b: any, i: number) => <Block key={i} b={b} />)
            )}

            {/* Jegyzet doboz */}
            <View style={styles.notesWrap}>
              <Text style={styles.notesTitle}>Saját jegyzet</Text>

              <View style={styles.noteInputBox}>
                <TextInput
                  value={notes.text}
                  onChangeText={notes.setText}
                  placeholder="Írd le, amit fontosnak érzel…"
                  placeholderTextColor="#9aa4b2"
                  multiline
                  style={styles.input}
                />
                <Pressable onPress={notes.save} style={styles.saveBtn}>
                  <Text style={styles.saveBtnText}>Mentés</Text>
                </Pressable>
              </View>

              {/* Mentett jegyzetek */}
              {notes.items.map((n) => (
                <NoteItem
                  key={n.id}
                  note={n}
                  onSave={(t) => notes.update(n.id, t)}
                  onDelete={() => notes.remove(n.id)}
                />
              ))}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

/* ==========================
   Jegyzet elem
========================== */

function NoteItem({
  note,
  onSave,
  onDelete,
}: {
  note: Note;
  onSave: (t: string) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(note.text);

  return (
    <View style={styles.noteCard}>
      {editing ? (
        <>
          <TextInput
            value={val}
            onChangeText={setVal}
            multiline
            style={[styles.input, { minHeight: 80 }]}
          />
          <View style={styles.noteBtns}>
            <Pressable
              onPress={() => {
                onSave(val.trim());
                setEditing(false);
              }}
              style={[styles.smallBtn, { backgroundColor: "#10b981" }]}
            >
              <Text style={styles.smallBtnText}>Ment</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setVal(note.text);
                setEditing(false);
              }}
              style={[styles.smallBtn, { backgroundColor: "#475569" }]}
            >
              <Text style={styles.smallBtnText}>Mégse</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.noteText}>{note.text}</Text>
          <View style={styles.noteBtns}>
            <Pressable
              onPress={() => setEditing(true)}
              style={[styles.smallBtn, { backgroundColor: "#3b82f6" }]}
            >
              <Text style={styles.smallBtnText}>Szerk.</Text>
            </Pressable>
            <Pressable
              onPress={onDelete}
              style={[styles.smallBtn, { backgroundColor: "#ef4444" }]}
            >
              <Text style={styles.smallBtnText}>Törlés</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

/* ==========================
   Stílusok – sötét téma
========================== */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b1220" }, // SÖTÉT HÁTTÉR
  header: { paddingTop: 14, paddingHorizontal: 16, paddingBottom: 6 },
  backText: { color: "#94a3b8", fontSize: 16, fontWeight: "600" },
  headerTitle: { color: "white", fontSize: 24, fontWeight: "800" },

  topicTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 10,
  },

  card: {
    borderRadius: 18,
    padding: 16,
  },
  cardTitle: { color: "white", fontSize: 22, fontWeight: "800" },
  cardMeta: { color: "white", opacity: 0.9, marginTop: 4 },

  emptyText: { color: "#cbd5e1", marginTop: 6 },

  block: {
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  blockText: { backgroundColor: "#3d3a1c" },
  blockTextInner: { color: "#ffeaa7", fontSize: 18, lineHeight: 26 },
  blockTitle: {
    color: "#fff6d5",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 8,
  },

  blockList: { backgroundColor: "#0b2c2b" },
  bullet: { color: "#34d399", fontSize: 22, lineHeight: 26 },
  listText: { color: "#a7f3d0", fontSize: 18, lineHeight: 26 },

  blockExample: { backgroundColor: "#1f2937" },
  blockTip: { backgroundColor: "#2b1e2b" },
  blockHeader: { color: "white", fontWeight: "800", marginBottom: 6 },
  exampleText: { color: "#d1d5db", fontSize: 18, lineHeight: 26 },
  tipText: { color: "#e9d5ff", fontSize: 18, lineHeight: 26 },

  notesWrap: { marginTop: 10 },
  notesTitle: {
    color: "#8bf6c3",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 8,
  },
  noteInputBox: {
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    marginBottom: 10,
  },
  input: {
    color: "white",
    minHeight: 56,
    fontSize: 16,
  },
  saveBtn: {
    alignSelf: "flex-end",
    backgroundColor: "#10b981",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 8,
  },
  saveBtnText: { color: "white", fontWeight: "800", fontSize: 16 },

  noteCard: {
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    marginBottom: 10,
  },
  noteText: { color: "white", fontSize: 16, lineHeight: 24 },
  noteBtns: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
    justifyContent: "flex-end",
  },
  smallBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
  smallBtnText: { color: "white", fontWeight: "800" },
});

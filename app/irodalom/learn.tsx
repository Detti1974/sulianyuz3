// app/irodalom/learn.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";

// ⬇️ Tananyag (LESSONS)
import LESSONS from "../../lib/irodalom/lessons";

// ⬇️ BANK – hogy 100%-ban a kvíz/dolgozat ID-kre igazodjunk az altémalistában
import { TOPIC_TREE as BANK } from "../../lib/irodalom/bank";

/* ─── Színes cím segéd ─── */
const PALETTE = [
  "#93c5fd",
  "#a7f3d0",
  "#f9a8d4",
  "#fde68a",
  "#fda4af",
  "#c7d2fe",
  "#7dd3fc",
];
const Rainbow = ({ text, style }: { text: string; style?: any }) => (
  <Text style={[style, { color: PALETTE[0] }]}>
    {Array.from(text).map((ch, i) => (
      <Text key={i} style={{ color: PALETTE[i % PALETTE.length] }}>
        {ch}
      </Text>
    ))}
  </Text>
);

/* ─── Típusok ─── */
type ContentBlock =
  | { type: "text"; text: string }
  | { type: "list"; items: string[] }
  | { type: "example"; text: string }
  | { type: "tip"; text: string };

type Section = {
  id: string;
  title: string;
  color?: string;
  content?: ContentBlock[];
};

type LessonsTopic = { title: string; color?: string; sections: Section[] };

/* ─── Lekérők ─── */
function getLessonsTopic(topicId?: string | null): LessonsTopic | null {
  if (!topicId) return null;
  const L: any = LESSONS as any;
  return (L[topicId] || L[`irodalom_8_${topicId}`] || L[`irodalom_${topicId}`]) ?? null;
}

function getBankTopic(topicId?: string | null) {
  if (!topicId) return null;
  const T: any = BANK as any;
  return T[topicId] || T[`irodalom_8_${topicId}`] || T[`irodalom_${topicId}`] || null;
}

/* ─── Jegyzetek ─── */
type Note = { id: string; text: string; ts: number };
const keyNotes = (topicId: string, subId: string) =>
  `notes:irodalom:${topicId}:${subId}`;

function useNotes(topicId?: string | null, subId?: string | null) {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Note[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!topicId || !subId) return;
    try {
      const raw = await AsyncStorage.getItem(keyNotes(topicId, subId));
      setItems(raw ? JSON.parse(raw) : []);
    } catch {
      setItems([]);
    }
  }, [topicId, subId]);

  useEffect(() => {
    setText("");
    setEditId(null);
    load();
  }, [load]);

  const persist = useCallback(
    async (next: Note[]) => {
      if (!topicId || !subId) return;
      setItems(next);
      await AsyncStorage.setItem(keyNotes(topicId, subId), JSON.stringify(next));
    },
    [topicId, subId]
  );

  const add = useCallback(async () => {
    const t = text.trim();
    if (!t) return;
    const note: Note = { id: `${Date.now()}`, text: t, ts: Date.now() };
    await persist([note, ...items]);
    setText("");
    Keyboard.dismiss();
  }, [text, items, persist]);

  const startEdit = (id: string) => {
    const n = items.find((x) => x.id === id);
    if (!n) return;
    setEditId(id);
    setText(n.text);
  };

  const saveEdit = useCallback(async () => {
    if (!editId) return;
    const t = text.trim();
    if (!t) {
      await persist(items.filter((x) => x.id !== editId));
    } else {
      const next = items.map((x) =>
        x.id === editId ? { ...x, text: t, ts: Date.now() } : x
      );
      await persist(next);
    }
    setEditId(null);
    setText("");
    Keyboard.dismiss();
  }, [editId, text, items, persist]);

  const remove = useCallback(
    async (id: string) => {
      await persist(items.filter((x) => x.id !== id));
    },
    [items, persist]
  );

  return { text, setText, items, add, remove, editId, startEdit, saveEdit };
}

/* ─── Blokk-render ─── */
function ContentBlocks({ content }: { content: ContentBlock[] }) {
  let p = 0;
  return (
    <>
      {(content || []).map((blk, i) => {
        if (blk?.type === "text") {
          return (
            <View key={`t-${i}`} style={[styles.block, styles.leadBox]}>
              <Text
                style={[
                  styles.paragraph,
                  { color: PALETTE[p++ % PALETTE.length] },
                ]}
              >
                {blk.text}
              </Text>
            </View>
          );
        } else if (blk?.type === "list") {
          return (
            <View key={`l-${i}`} style={[styles.block, styles.bulletBox]}>
              {(blk.items || []).map((it: string, j: number) => (
                <Text
                  key={j}
                  style={[
                    styles.bullet,
                    { color: PALETTE[p++ % PALETTE.length] },
                  ]}
                >
                  • {it}
                </Text>
              ))}
            </View>
          );
        } else if (blk?.type === "example") {
          return (
            <View key={`e-${i}`} style={[styles.block, styles.exampleBox]}>
              <Text style={styles.h2}>📘 Példa</Text>
              <Text style={styles.paragraph}>{blk.text}</Text>
            </View>
          );
        } else if (blk?.type === "tip") {
          return (
            <View key={`x-${i}`} style={[styles.block, styles.tipBox]}>
              <Text style={styles.h2}>💡 Tipp</Text>
              <Text style={styles.paragraph}>{blk.text}</Text>
            </View>
          );
        }
        return null;
      })}
    </>
  );
}

/* ─── Képernyő ─── */
export default function LearnIrodalom() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();

  // a Tananyag gomb topicId-vel hoz ide → altémák listája
  const [topic, setTopic] = useState<LessonsTopic | null>(() =>
    getLessonsTopic(topicId)
  );
  const [subId, setSubId] = useState<string | null>(null);

  // bank-téma a biztos ID-khez és címhez
  const bankTopic = useMemo(() => getBankTopic(topicId), [topicId]);

  useEffect(() => {
    setTopic(getLessonsTopic(topicId));
    setSubId(null);
  }, [topicId]);

  const notes = useNotes(topicId || "", subId || "");

  /* 1) ALTÉMÁK LISTÁJA (elsőként LESSONS, ha hiányzik → BANK sections) */
  if (!subId) {
    const lessonSections = topic?.sections || [];
    const bankSections: { id: string; title: string }[] = (bankTopic?.sections ||
      []
    ).map((s: any) => ({
      id: s.id || s.subId || s.key || s.slug,
      title: s.title || s.name || s.label || "Altéma",
    }));

    const subs: Section[] = lessonSections.length
      ? lessonSections
      : bankSections.map((s) => ({
          id: s.id,
          title: s.title,
          color: "#0ea5e9",
          content: [],
        }));

    const headerTitle =
      topic?.title || bankTopic?.title || "Irodalom — Tananyag";

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <Text style={styles.screenTitle}>{headerTitle}</Text>
          </View>
          <FlatList
            contentContainerStyle={{ padding: 16, gap: 12 }}
            data={subs}
            keyExtractor={(s) => s.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => setSubId(item.id)}
                style={[
                  styles.card,
                  { backgroundColor: item.color || "#0ea5e9" },
                ]}
              >
                <Text style={styles.cardTitle}>{item.title}</Text>
              </Pressable>
            )}
            ListHeaderComponent={
              <Pressable onPress={() => router.back()} style={{ marginBottom: 6 }}>
                <Text style={styles.backLink}>◀ Vissza</Text>
              </Pressable>
            }
          />
        </View>
      </KeyboardAvoidingView>
    );
  }

  /* 2) SZÍNES TARTALOM + JEGYZET (content csak LESSONS-ból) */
  const lessonTopic = getLessonsTopic(topicId);
  const sub = lessonTopic?.sections.find((s) => s.id === subId);
  const content = (sub?.content || []) as ContentBlock[];

  const subTitle =
    sub?.title ||
    (bankTopic?.sections || []).find(
      (s: any) => (s.id || s.subId) === subId
    )?.title ||
    "Altéma";

  const mainTitle =
    lessonTopic?.title || bankTopic?.title || "Irodalom — Tananyag";

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.screenTitle}>{subTitle}</Text>
        </View>

        <ScrollView
          contentContainerStyle={{
            padding: 16,
            gap: 16,
            paddingBottom: 220, // hely a jegyzet-gomboknak
          }}
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets={true}
        >
          <Pressable onPress={() => setSubId(null)} style={{ marginBottom: -8 }}>
            <Text style={styles.backLink}>◀ {mainTitle}</Text>
          </Pressable>

          {subTitle ? <Rainbow text={subTitle} style={styles.h1} /> : null}

          {content.length ? (
            <ContentBlocks content={content} />
          ) : (
            <View style={[styles.block, styles.emptyBox]}>
              <Text style={styles.paragraph}>
                Ehhez az altémához még nincs tananyag a lessons.ts-ben. A
                kvíz/dolgozat működik, mert a bankból jön — ide csak ugyanazzal
                az <Text style={{ fontWeight: "800" }}>altéma-ID-val</Text> adj
                meg tartalmat a lessons.ts-ben.
              </Text>
            </View>
          )}

          {/* Jegyzet-szerkesztő */}
          <Text style={styles.notesTitle}>Jegyzetek</Text>
          <View style={styles.noteEditor}>
            <TextInput
              value={notes.text}
              onChangeText={notes.setText}
              placeholder="Írd le, amit fontosnak érzel…"
              placeholderTextColor="#b8ccb6"
              multiline
              style={styles.textInput}
              cursorColor="#22c55e"
              selectionColor="rgba(34,197,94,0.35)"
              textAlignVertical="top"
              returnKeyType="done"
              blurOnSubmit
              onSubmitEditing={Keyboard.dismiss}
            />
            <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
              {notes.editId ? (
                <Pressable
                  onPress={notes.saveEdit}
                  style={[styles.btn, styles.btnGreen]}
                >
                  <Text style={styles.btnText}>Mentés</Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={notes.add}
                  style={[styles.btn, styles.btnGreen]}
                >
                  <Text style={styles.btnText}>Hozzáadás</Text>
                </Pressable>
              )}
            </View>
          </View>

          {/* Jegyzetlista szerkesztés/törlés gombokkal */}
          {notes.items.length > 0 && (
            <View style={styles.notesList}>
              {notes.items.map((n) => (
                <View key={n.id} style={styles.noteRow}>
                  <Text style={styles.noteText}>{n.text}</Text>
                  <View style={styles.noteActions}>
                    <Pressable
                      onPress={() => notes.startEdit(n.id)}
                      style={[styles.btn, styles.noteActionBtn]}
                    >
                      <Text style={styles.noteActionText}>Szerkesztés</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => notes.remove(n.id)}
                      style={[styles.btn, styles.noteDeleteBtn]}
                    >
                      <Text style={styles.noteActionText}>Törlés</Text>
                    </Pressable>
                  </View>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

/* ─── Stílusok ─── */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b1220" },
  headerRow: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screenTitle: { fontSize: 28, fontWeight: "900", color: "#fde68a" },
  backLink: { color: "#94a3b8", fontSize: 16 },

  card: { borderRadius: 16, padding: 16 },
  cardTitle: { color: "white", fontSize: 22, fontWeight: "800" },

  block: {
    borderRadius: 16,
    padding: 16,
    borderColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
  },
  emptyBox: { backgroundColor: "rgba(255,255,255,0.03)" },

  h1: { fontSize: 30, fontWeight: "900", color: "#fbbf24" },
  h2: { fontSize: 20, fontWeight: "800", marginBottom: 6, color: "#60a5fa" },

  leadBox: {
    backgroundColor: "rgba(251,191,36,0.10)",
    borderColor: "rgba(251,191,36,0.35)",
  },
  bulletBox: {
    backgroundColor: "rgba(56,189,248,0.08)",
    borderColor: "rgba(56,189,248,0.35)",
  },
  exampleBox: {
    backgroundColor: "rgba(99,102,241,0.10)",
    borderColor: "rgba(99,102,241,0.35)",
  },
  tipBox: {
    backgroundColor: "rgba(16,185,129,0.10)",
    borderColor: "rgba(16,185,129,0.35)",
  },

  paragraph: {
    color: "rgba(255,255,255,0.95)",
    fontSize: 16,
    lineHeight: 24,
  },
  bullet: {
    color: "rgba(255,255,255,0.95)",
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 2,
  },

  notesTitle: {
    marginTop: 4,
    color: "#a7f3d0",
    fontWeight: "900",
    fontSize: 22,
  },
  noteEditor: {
    backgroundColor: "#0f172a",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#334155",
  },
  textInput: {
    color: "#d1fae5",
    minHeight: 110,
    padding: 12,
    backgroundColor: "#0b1328",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3b4a6b",
    fontSize: 16,
  },

  notesList: { marginTop: 12, gap: 8 },
  noteRow: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#1f2937",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
  },
  noteText: { color: "#e5e7eb", fontSize: 15, flex: 1 },
  noteActions: { flexDirection: "row", gap: 8 },
  noteActionBtn: { backgroundColor: "#0ea5e9" },
  noteDeleteBtn: { backgroundColor: "#b91c1c" },
  noteActionText: { color: "white", fontWeight: "700", fontSize: 13 },

  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 },
  btnText: { color: "white", fontWeight: "700" },
  btnGreen: { backgroundColor: "#16a34a" },
});

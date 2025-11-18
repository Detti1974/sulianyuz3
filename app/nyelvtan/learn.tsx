// app/nyelvtan/learn.tsx
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
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";

// ⬇️ Tananyag (opcionális, altéma-tartalomhoz)
import LESSONS from "../../lib/nyelvtan/lessons";

// ⬇️ BANK – hogy 100%-ban a kvíz/dolgozat ID-kre igazodjunk az altémalistában
import { TOPIC_TREE as BANK } from "../../lib/nyelvtan/bank";

/* ─── Színes címsor ─── */
const PALETTE = ["#f97316", "#22c55e", "#38bdf8", "#a855f7", "#eab308"];
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

type LessonSection = {
  id: string;
  title: string;
  color?: string;
  content: ContentBlock[];
};

type LessonTopic = {
  id: string;
  title: string;
  color?: string;
  sections: LessonSection[];
};

/* ─── Jegyzetek ─── */
type Note = { id: string; text: string; ts: number };
const keyNotes = (topicId: string, subId: string) =>
  `notes:nyelvtan:${topicId}:${subId}`;

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
            <View key={`p-${i}`} style={[styles.block, styles.tipBox]}>
              <Text style={styles.h2}>💡 TIPP</Text>
              <Text style={styles.paragraph}>{blk.text}</Text>
            </View>
          );
        }
        return null;
      })}
    </>
  );
}

/* ─── Fő komponens ─── */
export default function LearnScreen() {
  const { topicId, subId: rawSubId } =
    useLocalSearchParams<{ topicId?: string; subId?: string }>();
  const subId = useMemo(
    () => (typeof rawSubId === "string" ? rawSubId : null),
    [rawSubId]
  );

  const topic: LessonTopic | undefined = useMemo(
    () => (LESSONS as any)[topicId || ""] as LessonTopic | undefined,
    [topicId]
  );
 const bankTopic = useMemo(
  () => (BANK as any)[topicId || ""],
  [topicId]
);

  const sections = useMemo<LessonSection[]>(() => {
    const lessonSections = topic?.sections || [];
    if (lessonSections.length) return lessonSections;
    const bankSections: LessonSection[] = (bankTopic?.sections || []).map(
      (s: any) => ({
        id: s.id || s.subId || s.key,
        title: s.title,
        color: s.color,
        content: [],
      })
    );
    return bankSections;
  }, [topic, bankTopic]);

  const mainTitle = topic?.title || bankTopic?.title || "Tananyag";
  const subTitle = useMemo(() => {
    if (!subId) return "";
    const sec = sections.find((s) => s.id === subId);
    return sec?.title || "";
  }, [sections, subId]);

  const content = useMemo<ContentBlock[]>(() => {
    if (!subId) return [];
    const sec = sections.find((s) => s.id === subId);
    return sec?.content || [];
  }, [sections, subId]);

  const notes = useNotes(topicId || "", subId || "");

  if (!topicId) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ color: "white" }}>Hiányzik a topicId.</Text>
      </View>
    );
  }

  // ── 1) Altéma lista nézet ─────────────────────────────
  if (!subId) {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.headerRow}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backLink}>◀ Vissza</Text>
          </Pressable>
          <Text style={styles.screenTitle}>{mainTitle}</Text>
        </View>

        <ScrollView
          style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}
          contentContainerStyle={{ paddingBottom: 32 }}
        >
          {sections.map((sec) => (
            <Pressable
              key={sec.id}
              onPress={() =>
                router.push({
                  pathname: "/nyelvtan/learn",
                  params: { topicId, subId: sec.id },
                })
              }
              style={[
                styles.block,
                {
                  marginBottom: 12,
                  backgroundColor: sec.color || "rgba(15,23,42,0.9)",
                  borderColor: "rgba(148,163,184,0.6)",
                },
              ]}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "800" }}
              >
                {sec.title}
              </Text>
              <Text
                style={{
                  color: "#e5e7eb",
                  marginTop: 4,
                  fontSize: 14,
                }}
              >
                Koppints a részletes tananyagra…
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  // ── 2) Konkrét altéma + jegyzetek ─────────────────────
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backLink}>◀ Vissza</Text>
        </Pressable>
        <Text style={styles.screenTitle}>{mainTitle}</Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 32 }}
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets={true}
        >
          <Pressable
            onPress={() =>
              router.push({ pathname: "/nyelvtan/learn", params: { topicId } })
            }
            style={{ marginBottom: -8 }}
          >
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

          {notes.items.length > 0 && (
            <View style={styles.notesList}>
              {notes.items.map((n) => (
                <View key={n.id} style={styles.noteRow}>
                  <Text style={styles.noteText}>{n.text}</Text>
                  <View style={styles.noteActionsRow}>
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
    paddingBottom: 8,
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

  paragraph: { color: "rgba(255,255,255,0.95)", fontSize: 16, lineHeight: 24 },
  bullet: {
    color: "rgba(255,255,255,0.95)",
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 2,
  },

  notesTitle: { marginTop: 4, color: "#a7f3d0", fontWeight: "900", fontSize: 22 },
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
    flexDirection: "column", // ⬅️ szöveg felül, gombok alatta
    gap: 8,
  },
  noteText: { color: "#e5e7eb", fontSize: 15, flex: 1 },
  noteActionsRow: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-end",
  },
  noteActionBtn: { backgroundColor: "#0ea5e9" },
  noteDeleteBtn: { backgroundColor: "#b91c1c" },
  noteActionText: { color: "white", fontWeight: "700", fontSize: 13 },

  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 },
  btnText: { color: "white", fontWeight: "700" },
  btnGreen: { backgroundColor: "#16a34a" },
});

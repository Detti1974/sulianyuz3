// app/foldrajz/learn.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

import LESSONS from "../../lib/foldrajz/lessons";
import { TOPIC_TREE as BANK } from "../../lib/foldrajz/bank";

/* ===== Segédek ===== */
const norm = (s: any) =>
  String(s ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\d]+/g, "")
    .replace(/^foldrajz\d*_?/, "")
    .replace(/^geo\d*_?/, "")
    .replace(/^topic_?/, "");

function resolveBankTopic(anyId?: string | null) {
  const id = String(anyId || "");
  const arr: any[] = Array.isArray(BANK) ? (BANK as any[]) : (BANK as any)?.TOPIC_TREE || [];
  if (!arr?.length) return null;

  let t = arr.find((x) => x?.id === id);
  if (t) return t;

  const n = norm(id);
  t = arr.find((x) => norm(String(x?.id)) === n);
  if (t) return t;

  t = arr.find((x) => norm(String(x?.id)).endsWith(n));
  return t || null;
}

/* ===== Tartalom-kereső ===== */
function extractContent(section: any) {
  if (!section) return null;
  return (
    section.content ??
    section.texts ??
    section.items ??
    section.paragraphs ??
    section.blocks ??
    section.text ??
    null
  );
}

function findLessonContent(topicId: string | undefined, subId: string, subTitle?: string) {
  const L: any = LESSONS as any;

  const wantId = String(subId || "");
  const wantIdN = norm(wantId);
  const wantTitleN = norm(subTitle || "");

  const matchSection = (s: any) => {
    const sid = String(s?.id ?? s?.subId ?? s?.key ?? s?.slug ?? "");
    const sidN = norm(sid);
    const stN = norm(String(s?.title ?? s?.name ?? s?.label ?? ""));
    return sid === wantId || sidN === wantIdN || sidN.endsWith(wantIdN) || (wantTitleN && stN === wantTitleN);
  };

  const topic = L?.[topicId!] || L?.[`foldrajz_8_${topicId}`] || L?.[`foldrajz_${topicId}`];
  if (topic && Array.isArray(topic.sections)) {
    const sec = topic.sections.find(matchSection);
    const c = extractContent(sec);
    if (c != null) return c;
  }

  if (Array.isArray(L)) {
    const sec = L.find(matchSection);
    const c = extractContent(sec);
    if (c != null) return c;
  }

  if (L && typeof L === "object") {
    for (const k of Object.keys(L)) {
      const t = L[k];
      const secs = Array.isArray(t?.sections) ? t.sections : [];
      const sec = secs.find(matchSection);
      const c = extractContent(sec);
      if (c != null) return c;
    }
  }

  return [];
}

/* ===== Blokkok + színezés ===== */
type ContentBlock =
  | { type: "text"; text: string }
  | { type: "list"; items: string[] }
  | { type: "example"; text: string }
  | { type: "tip"; text: string };

function toBlocks(raw: any): ContentBlock[] {
  if (!raw) return [];
  if (Array.isArray(raw) && raw.every((x) => typeof x === "object" && "type" in x)) return raw;
  if (Array.isArray(raw)) return raw.map((p) => ({ type: "text", text: String(p) }));
  if (typeof raw === "string") {
    const lines = raw.split(/\r?\n/);
    const blocks: ContentBlock[] = [];
    let buf: string[] = [];
    let list: string[] = [];
    const flushP = () => {
      if (buf.length) {
        blocks.push({ type: "text", text: buf.join("\n") });
        buf = [];
      }
    };
    const flushL = () => {
      if (list.length) {
        blocks.push({ type: "list", items: [...list] });
        list = [];
      }
    };
    for (const line of lines) {
      if (/^\s*$/.test(line)) {
        flushP();
        flushL();
      } else if (/^\s*[-•]\s+/.test(line)) {
        flushP();
        list.push(line.replace(/^\s*[-•]\s+/, "").trim());
      } else {
        flushL();
        buf.push(line.trim());
      }
    }
    flushP();
    flushL();
    return blocks;
  }
  return [{ type: "text", text: String(raw) }];
}

// Paletták (nincs fehér)
const PHYS_PASTEL = ["#6eb1feff", "#a7f3d0", "#fde68a", "#f9a8d4", "#fca5a5"];
const RAINBOW = ["#93c5fd", "#a7f3d0", "#fde68a", "#f9a8d4", "#fca5a5", "#c7d2fe", "#7dd3fc"];

// <b>…</b> kiemelés színezése
function renderStyledText(rawText: string) {
  const parts = rawText.split(/(<b>.*?<\/b>)/gi);
  let boldIdx = 0;
  return parts.map((part, i) => {
    const m = part.match(/^<b>(.*?)<\/b>$/i);
    if (m) {
      const inner = m[1];
      const color = PHYS_PASTEL[boldIdx % PHYS_PASTEL.length];
      boldIdx++;
      return (
        <Text key={`b-${i}`} style={{ color, fontWeight: "900" }}>
          {inner}
        </Text>
      );
    }
    return <Text key={`t-${i}`}>{part}</Text>;
  });
}

/* ===== Bekezdésenként váltakozó szín ===== */
function ContentBlocks({ content }: { content: any[] }) {
  return (
    <>
      {content.map((blk: any, i: number) => {
        const paragraphColor = PHYS_PASTEL[i % PHYS_PASTEL.length];

        if (blk.type === "text") {
          return (
            <View key={`t-${i}`} style={[styles.block, styles.textBox]}>
              <Text style={[styles.paragraph, { color: paragraphColor }]}>{renderStyledText(blk.text)}</Text>
            </View>
          );
        }

        if (blk.type === "list") {
          return (
            <View key={`l-${i}`} style={[styles.block, styles.bulletBox]}>
              {blk.items.map((it: string, j: number) => (
                <Text key={`li-${i}-${j}`} style={[styles.bullet, { color: paragraphColor }]}>
                  • {renderStyledText(it)}
                </Text>
              ))}
            </View>
          );
        }

        if (blk.type === "example") {
          return (
            <View key={`e-${i}`} style={[styles.block, styles.exampleBox]}>
              <Text style={[styles.paragraph, { color: paragraphColor }]}>{renderStyledText(blk.text)}</Text>
            </View>
          );
        }

        if (blk.type === "tip") {
          return (
            <View key={`x-${i}`} style={[styles.block, styles.tipBox]}>
              <Text style={[styles.paragraph, { color: paragraphColor }]}>{renderStyledText(blk.text)}</Text>
            </View>
          );
        }

        return null;
      })}
    </>
  );
}

/* ===== Szivárványos egyetlen főcím ===== */
function RainbowTitle({ text }: { text: string }) {
  return (
    <Text style={styles.h1}>
      {Array.from(text).map((ch, i) => (
        <Text key={i} style={{ color: RAINBOW[i % RAINBOW.length] }}>
          {ch}
        </Text>
      ))}
    </Text>
  );
}

/* ===== ALTÉMA JEGYZET – ceruza + kuka, billentyűzetbarát ===== */
type Note = { id: string; text: string; ts: number };
function NotePad({ topicId, subId }: { topicId?: string | null; subId?: string | null }) {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Note[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const key = `notes:foldrajz:${String(topicId ?? "")}:${String(subId ?? "")}`;

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(key);
        if (!alive) return;
        if (!raw) setItems([]);
        else {
          try {
            const parsed = JSON.parse(raw);
            setItems(Array.isArray(parsed) ? parsed : []);
          } catch {
            setItems([]);
          }
        }
      } catch {
        setItems([]);
      }
    })();
    return () => {
      alive = false;
    };
  }, [key]);

  const persist = async (next: Note[]) => {
    try {
      setItems(next);
      await AsyncStorage.setItem(key, JSON.stringify(next));
    } catch {
      // swallow
    }
  };

  const add = async () => {
    const t = text.trim();
    if (!t) return;
    const note: Note = { id: `${Date.now()}`, text: t, ts: Date.now() };
    await persist([note, ...items]);
    setText("");
    Keyboard.dismiss();
  };

  const startEdit = (id: string) => {
    const n = items.find((x) => x.id === id);
    if (!n) return;
    setEditId(id);
    setText(n.text);
  };

  const saveEdit = async () => {
    if (!editId) return;
    const t = text.trim();
    if (!t) {
      // üresre mentés = törlés
      await persist(items.filter((x) => x.id !== editId));
    } else {
      const next = items.map((x) => (x.id === editId ? { ...x, text: t, ts: Date.now() } : x));
      await persist(next);
    }
    setEditId(null);
    setText("");
    Keyboard.dismiss();
  };

  const cancelEdit = () => {
    setEditId(null);
    setText("");
    Keyboard.dismiss();
  };

  const remove = async (id: string) => {
    await persist(items.filter((x) => x.id !== id));
  };

  if (!topicId || !subId) return null;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ marginTop: 12 }}
    >
      <View
        style={{
          padding: 12,
          borderRadius: 14,
          backgroundColor: "#0f172a",
          borderWidth: 1,
          borderColor: "#334155",
        }}
      >
        <Text style={{ color: "#a7f3d0", fontWeight: "900", fontSize: 20, marginBottom: 6 }}>
          Jegyzetek
        </Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder={editId ? "Jegyzet szerkesztése…" : "Írd le, amit fontosnak érzel…"}
          placeholderTextColor="#94a3b8"
          multiline
          style={{
            color: "#d1fae5",
            minHeight: 110,
            padding: 12,
            backgroundColor: "#0b1328",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#3b4a6b",
            fontSize: 16,
            textAlignVertical: "top",
          }}
          cursorColor="#06b6d4"
          selectionColor="rgba(6,182,212,0.35)"
          returnKeyType="done"
          blurOnSubmit
          onSubmitEditing={Keyboard.dismiss}
        />

        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
          {editId ? (
            <>
              <Pressable
                onPress={saveEdit}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderRadius: 10,
                  backgroundColor: "#22c55e",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Feather name="check" size={18} color="#0b1220" />
                <Text style={{ color: "#0b1220", fontWeight: "800" }}>Mentés</Text>
              </Pressable>
              <Pressable
                onPress={cancelEdit}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderRadius: 10,
                  backgroundColor: "#475569",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Feather name="x" size={18} color="#e5e7eb" />
                <Text style={{ color: "#e5e7eb", fontWeight: "800" }}>Mégse</Text>
              </Pressable>
            </>
          ) : (
            <Pressable
              onPress={add}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 14,
                borderRadius: 10,
                backgroundColor: "#06b6d4",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Feather name="plus" size={18} color="#0b1220" />
              <Text style={{ color: "#0b1220", fontWeight: "800" }}>Hozzáadás</Text>
            </Pressable>
          )}
        </View>

        {items.map((n) => (
          <View
            key={n.id}
            style={{
              marginTop: 10,
              padding: 12,
              borderRadius: 12,
              backgroundColor: "rgba(6,182,212,0.08)",
              borderWidth: 1,
              borderColor: "rgba(6,182,212,0.35)",
            }}
          >
            <Text style={{ color: "#e5e7eb", fontSize: 16, lineHeight: 22 }}>{n.text}</Text>

            <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
              <Pressable
                onPress={() => startEdit(n.id)}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 8,
                  backgroundColor: "#3b82f6",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Feather name="edit-2" size={16} color="#e5e7eb" />
                <Text style={{ color: "#e5e7eb", fontWeight: "800" }}>Szerk.</Text>
              </Pressable>

              <Pressable
                onPress={() => remove(n.id)}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 8,
                  backgroundColor: "#ef4444",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Feather name="trash-2" size={16} color="#fff" />
                <Text style={{ color: "#fff", fontWeight: "800" }}>Törlés</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </KeyboardAvoidingView>
  );
}

/* ===== Képernyő ===== */
export default function LearnFoldrajz() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const [subId, setSubId] = useState<string | null>(null);
  const bankTopic = useMemo(() => resolveBankTopic(topicId), [topicId]);

  useEffect(() => setSubId(null), [topicId]);

  if (!bankTopic) {
    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Földrajz — Tananyag</Text>
        <View style={[styles.block, styles.emptyBox]}>
          <Text style={[styles.paragraph, { color: "#e2e8f0" }]}>
            Nem találom a főtémát a bankban.
          </Text>
        </View>
      </View>
    );
  }

  // Altéma lista
  if (!subId) {
    const subs = (bankTopic.sections || [])
      .map((s: any) => ({
        id: String(s?.id ?? s?.subId ?? s?.key ?? s?.slug ?? ""),
        title: String(s?.title ?? s?.name ?? s?.label ?? "Altéma"),
        color: s?.color || "#06b6d4",
      }))
      .filter((s: any) => s.id.trim().length > 0);

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <Text style={styles.screenTitle}>{bankTopic.title}</Text>
          </View>
          <FlatList
            data={subs}
            contentContainerStyle={{ padding: 16, gap: 12 }}
            keyExtractor={(s) => s.id}
            renderItem={({ item }) => (
              <Pressable onPress={() => setSubId(item.id)} style={[styles.card, { backgroundColor: item.color }]}>
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

  // Altéma tartalom
  const sub = (bankTopic.sections || []).find(
    (s: any) => String(s?.id ?? s?.subId ?? s?.key ?? s?.slug ?? "") === subId
  );
  const subTitle = sub?.title || "Altéma";
  const content = toBlocks(findLessonContent(topicId, subId, subTitle));

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ padding: 16, paddingBottom: 220 }}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets
      >
        <Pressable onPress={() => setSubId(null)} style={{ marginBottom: 6 }}>
          <Text style={styles.backLink}>◀ {bankTopic.title}</Text>
        </Pressable>

        {/* SZIVÁRVÁNYOS FŐCÍM */}
        <RainbowTitle text={subTitle} />

        {content.length ? (
          <ContentBlocks content={content} />
        ) : (
          <View style={[styles.block, styles.emptyBox]}>
            <Text style={[styles.paragraph, { color: "#e2e8f0" }]}>
              Ehhez az altémához még nincs tananyag a lessons.ts-ben.
            </Text>
          </View>
        )}

        {/* —— Jegyzetek (altéma) —— */}
        <NotePad topicId={topicId} subId={subId} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

/* ===== Stílusok (nincs #fff) ===== */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b1220" },
  headerRow: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 4 },
  screenTitle: { fontSize: 28, fontWeight: "900", color: "#06b6d4" },
  backLink: { color: "#94a3b8", fontSize: 16 },

  card: { borderRadius: 16, padding: 16 },
  cardTitle: { color: "#e5e7eb", fontSize: 22, fontWeight: "800" },

  block: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(147,197,253,0.25)",
  },
  emptyBox: { backgroundColor: "rgba(147,197,253,0.06)" },
  textBox: { backgroundColor: "rgba(147,197,253,0.04)" },
  bulletBox: {
    backgroundColor: "rgba(125,211,252,0.08)",
    borderColor: "rgba(125,211,252,0.35)",
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
  },
  exampleBox: {
    backgroundColor: "rgba(99,102,241,0.10)",
    borderColor: "rgba(99,102,241,0.35)",
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
  },
  tipBox: {
    backgroundColor: "rgba(16,185,129,0.10)",
    borderColor: "rgba(16,185,129,0.35)",
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
  },

  paragraph: { fontSize: 16, lineHeight: 24, fontWeight: "400" },
  bullet: { fontSize: 16, lineHeight: 24, marginLeft: 4 },

  h1: { fontSize: 32, fontWeight: "900", marginBottom: 8 },
});

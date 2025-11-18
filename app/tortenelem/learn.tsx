// app/tortenelem/learn.tsx
import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../lib/styles";
import { LESSONS } from "./lessons";

const ACCENT = ["#7c9eff", "#22c55e", "#f59e0b", "#a78bfa", "#38bdf8", "#f472b6"];

type Note = { id: string; text: string; ts: number };

export default function LearnScreen() {
  const params = useLocalSearchParams<{ topicId?: string }>();
  const topicId = (params?.topicId as string) || "ww1";
  const lesson: any = LESSONS?.[topicId];

  const [notes, setNotes] = React.useState<Note[]>([]);
  const [draft, setDraft] = React.useState("");

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  // --- helpers (fej, színcsík) ---
  const Head = ({ children, color = "#c7d2fe" }: { children: React.ReactNode; color?: string }) => (
    <Text style={[styles.lead, { color }]}>{children}</Text>
  );
  const Bar = ({ color = "#94a3b8" }: { color?: string }) => (
    <View style={{ height: 6, borderRadius: 999, backgroundColor: color, marginTop: 6, opacity: 0.9 }} />
  );

  // --- Jegyzet kulcs ezen a témán ---
  const KEY = `notes:tortenelem:${topicId}`;

  // --- Betöltés ---
  React.useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(KEY);
        if (raw) setNotes(JSON.parse(raw));
      } catch {
        /* no-op */
      }
    })();
  }, [KEY]);

  // --- Mentés util ---
  const persist = async (arr: Note[]) => {
    setNotes(arr);
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(arr));
    } catch {
      Alert.alert("Hoppá", "Nem sikerült elmenteni a jegyzeteket.");
    }
  };

  // --- Új jegyzet hozzáadása ---
  const addNote = () => {
    const text = draft.trim();
    if (!text) return;
    const n: Note = { id: String(Date.now()), text, ts: Date.now() };
    persist([n, ...notes]);
    setDraft("");
  };

  // --- Jegyzet törlése ---
  const delNote = (id: string) => {
    Alert.alert("Törlés", "Biztosan törlöd ezt a jegyzetet?", [
      { text: "Mégse", style: "cancel" },
      {
        text: "Törlés",
        style: "destructive",
        onPress: () => persist(notes.filter((n) => n.id !== id)),
      },
    ]);
  };

  if (!lesson) {
    return (
      <ScrollView contentContainerStyle={styles.container} style={styles.screen}>
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={{ fontWeight: "700", color: "#fff" }}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={{ fontWeight: "700", color: "#fff" }}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Tananyag</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.lead}>Ehhez a részhez még nincs szöveg.</Text>
        </View>

        {/* Jegyzetek blokk üres állapottal is látszódhat */}
        <NotesBlock
          notes={notes}
          draft={draft}
          setDraft={setDraft}
          addNote={addNote}
          delNote={delNote}
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.screen}>
      {/* fejléc */}
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
        <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
          <Text style={{ fontWeight: "700", color: "#fff" }}>← Vissza</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
          <Text style={{ fontWeight: "700", color: "#fff" }}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>

      {/* cím kártya */}
      <View style={styles.card}>
        <Text style={styles.title}>Tananyag</Text>
        {lesson.title ? (
          <Text style={[styles.lead, { marginTop: 8, color: "#c7d2fe" }]}>{lesson.title}</Text>
        ) : null}
      </View>

      {/* bevezető */}
      {lesson.intro ? (
        <View style={styles.card}>
          <Head color="#a5b4fc">Bevezető</Head>
          <Bar color="#a5b4fc" />
          <Text style={[styles.paragraph, { marginTop: 10 }]}>{lesson.intro}</Text>
        </View>
      ) : null}

      {/* szekciók */}
      {Array.isArray(lesson.sections) &&
        lesson.sections.map((sec: any, idx: number) => (
          <View key={`${sec.title ?? "sec"}-${idx}`} style={styles.card}>
            <Head color={ACCENT[idx % ACCENT.length]}>{sec.title ?? `Rész ${idx + 1}`}</Head>
            <Bar color={ACCENT[idx % ACCENT.length]} />
            {sec.text ? <Text style={[styles.paragraph, { marginTop: 10 }]}>{sec.text}</Text> : null}

            {Array.isArray(sec.bullets) &&
              sec.bullets.map((b: string, i: number) => (
                <Text key={`b-${i}`} style={[styles.paragraph, { marginTop: 6 }]}>• {b}</Text>
              ))}

            {Array.isArray(sec.facts) &&
              sec.facts.map((f: any, i: number) => (
                <Text key={`f-${i}`} style={[styles.paragraph, { marginTop: 6 }]}>
                  <Text style={{ fontWeight: "700", color: ACCENT[(idx + i) % ACCENT.length] }}>
                    {f.label ?? "Tény"}:{" "}
                  </Text>
                  {f.value}
                </Text>
              ))}

            {Array.isArray(sec.quotes) &&
              sec.quotes.map((q: any, i: number) => (
                <Text key={`q-${i}`} style={[styles.paragraph, { marginTop: 8, fontStyle: "italic" }]}>
                  “{q.text}” {q.author ? <Text style={{ fontStyle: "normal", color: "#93c5fd" }}>— {q.author}</Text> : null}
                </Text>
              ))}

            {Array.isArray(sec.images) &&
              sec.images.map((src: string, i: number) => (
                <Image
                  key={`img-${i}`}
                  source={{ uri: src }}
                  style={{ width: "100%", height: 180, borderRadius: 12, marginTop: 10 }}
                  resizeMode="cover"
                />
              ))}
          </View>
        ))}

      {/* idővonal */}
      {Array.isArray(lesson.dates) && lesson.dates.length > 0 ? (
        <View style={styles.card}>
          <Head color={ACCENT[3]}>Idővonal</Head>
          <Bar color={ACCENT[3]} />
          {lesson.dates.map((d: any, i: number) => (
            <Text key={`date-${i}`} style={[styles.paragraph, { marginTop: 8 }]}>
              <Text style={{ fontWeight: "800", color: ACCENT[i % ACCENT.length] }}>{d.year} </Text>
              <Text>{d.event}</Text>
              {d.extra ? <Text style={{ color: "#a7f3d0" }}>{` — ${d.extra}`}</Text> : null}
            </Text>
          ))}
        </View>
      ) : null}

      {/* kulcsszavak */}
      {Array.isArray(lesson.keywords) && lesson.keywords.length > 0 ? (
        <View style={styles.card}>
          <Head color={ACCENT[2]}>Kulcsszavak</Head>
          <Bar color={ACCENT[2]} />
          {lesson.keywords.map((k: any, i: number) => (
            <Text key={`kw-${i}`} style={[styles.paragraph, { marginTop: 8 }]}>
              <Text style={{ fontWeight: "700", color: ACCENT[i % ACCENT.length] }}>{k.term}: </Text>
              <Text>{k.def}</Text>
            </Text>
          ))}
        </View>
      ) : null}

      {/* --- Jegyzetek blokk --- */}
      <NotesBlock
        notes={notes}
        draft={draft}
        setDraft={setDraft}
        addNote={addNote}
        delNote={delNote}
      />
    </ScrollView>
  );
}

// Külön komponens a jegyzetekhez (olvashatóbb).
function NotesBlock({
  notes,
  draft,
  setDraft,
  addNote,
  delNote,
}: {
  notes: { id: string; text: string; ts: number }[];
  draft: string;
  setDraft: (t: string) => void;
  addNote: () => void;
  delNote: (id: string) => void;
}) {
  return (
    <View style={styles.card}>
      <Text style={[styles.lead, { color: "#fca5a5" }]}>📝 Jegyzetek</Text>
      <View style={{ height: 6, borderRadius: 999, backgroundColor: "#fca5a5", marginTop: 6, opacity: 0.9 }} />

      {/* Új jegyzet mező */}
      <TextInput
        value={draft}
        onChangeText={setDraft}
        placeholder="Írj be egy rövid jegyzetet…"
        placeholderTextColor="#9aa4b2"
        multiline
        style={{
          marginTop: 10,
          backgroundColor: "#0f172a",
          borderColor: "#334155",
          borderWidth: 1,
          borderRadius: 12,
          paddingVertical: 10,
          paddingHorizontal: 12,
          color: "#e2e8f0",
          minHeight: 60,
        }}
      />
      <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
        <TouchableOpacity onPress={addNote} style={[styles.btn, styles.btnGreen]}>
          <Text style={{ fontWeight: "700", color: "#fff" }}>💾 Mentés</Text>
        </TouchableOpacity>
        {!!draft.trim() && (
          <TouchableOpacity onPress={() => setDraft("")} style={[styles.btn, styles.btnGray]}>
            <Text style={{ fontWeight: "700", color: "#fff" }}>Mégse</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Lista */}
      {notes.length === 0 ? (
        <Text style={[styles.paragraph, { marginTop: 10, opacity: 0.9 }]}>
          Nincsenek jegyzetek. Adj hozzá egyet a fenti mezővel!
        </Text>
      ) : (
        <View style={{ marginTop: 12, gap: 10 }}>
          {notes.map((n) => (
            <View key={n.id} style={{ borderWidth: 1, borderColor: "#334155", borderRadius: 12, padding: 10 }}>
              <Text style={[styles.paragraph]}>{n.text}</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8, alignItems: "center" }}>
                <Text style={{ color: "#94a3b8", fontSize: 12 }}>
                  {new Date(n.ts).toLocaleString()}
                </Text>
                <TouchableOpacity onPress={() => delNote(n.id)} style={[styles.btn, styles.btnRed]}>
                  <Text style={{ fontWeight: "700", color: "#fff" }}>Törlés</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

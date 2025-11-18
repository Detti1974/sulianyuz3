import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../../lib/styles";
import { LESSONS as MATH_LESSONS } from "../../lib/matek/lessons";

// ha máshol már van Note típusod, ez kompatibilis vele
type Note = { id: string; text: string; ts: number };

export default function LearnScreen() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const key = (topicId as string) || "";

  // a matek tananyag közvetlenül a matekos lessons-ből jön
  const lesson: any = (MATH_LESSONS as any)[key];

  const [notes, setNotes] = React.useState<Note[]>([]);
  const [draft, setDraft] = React.useState("");

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  // ---- Jegyzetek betöltése/mentése ----
  const storageKey = React.useMemo(() => `notes_${key}`, [key]);

  React.useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(storageKey);
        if (raw) setNotes(JSON.parse(raw));
        else setNotes([]);
      } catch {
        setNotes([]);
      }
    })();
  }, [storageKey]);

  const saveNotes = async (list: Note[]) => {
    setNotes(list);
    try {
      await AsyncStorage.setItem(storageKey, JSON.stringify(list));
    } catch {
      // ha nem sikerül menteni, nem omlik össze
    }
  };

  const addNote = async () => {
    const t = draft.trim();
    if (!t) return;
    const next: Note[] = [{ id: String(Date.now()), text: t, ts: Date.now() }, ...notes];
    await saveNotes(next);
    setDraft("");
  };

  const removeNote = async (id: string) => {
    const next = notes.filter((n) => n.id !== id);
    await saveNotes(next);
  };

  // ---- Nincs tananyag erre a topicId-re ----
  if (!lesson) {
    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.card}>
          <Text style={styles.titleBig}>Tananyag nem található</Text>
          <Text style={[styles.lead, { marginTop: 6 }]}>
            Úgy tűnik, ehhez a <Text style={{ fontWeight: "bold" }}>matek</Text>{" "}
            témához még nincs felvéve tananyag (vagy hibás a topicId).
          </Text>
          {key ? (
            <Text style={[styles.lead, { marginTop: 8, opacity: 0.85 }]}>
              (Kapott topicId: <Text style={{ fontWeight: "bold" }}>{key}</Text>)
            </Text>
          ) : null}
        </View>

        {/* Jegyzetblokk ilyen esetben is elérhető */}
        <View style={[styles.card, { borderColor: "rgba(255,255,255,0.12)", borderWidth: 1 }]}>
          <Text style={[styles.title, { color: "#bcd0ff" }]}>🗒️ Jegyzetek</Text>

          <TextInput
            placeholder="Írj be egy rövid jegyzetet..."
            placeholderTextColor="rgba(255,255,255,0.5)"
            value={draft}
            onChangeText={setDraft}
            style={{
              marginTop: 10,
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.16)",
              color: "white",
            }}
          />

          <TouchableOpacity onPress={addNote} style={[styles.btn, styles.btnGreen, { marginTop: 10 }]}>
            <Text style={styles.buttonText}>💾 Mentés</Text>
          </TouchableOpacity>

          {notes.length === 0 ? (
            <Text style={[styles.lead, { marginTop: 12 }]}>
              Nincsenek jegyzetek. Adj hozzá egyet a fenti mezővel!
            </Text>
          ) : (
            notes.map((n) => (
              <View
                key={n.id}
                style={{
                  marginTop: 10,
                  padding: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.14)",
                }}
              >
                <Text style={[styles.learnLead]}>{n.text}</Text>
                <TouchableOpacity
                  onPress={() => removeNote(n.id)}
                  style={[styles.btn, styles.btnGray, { marginTop: 8, alignSelf: "flex-start" }]}
                >
                  <Text style={styles.buttonText}>Törlés</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>

        <View style={{ height: 12 }} />
        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  // ---- Van tananyag: fejrész + szekciók ----
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={styles.card}>
        <Text style={styles.titleBig}>{lesson.title}</Text>
        {lesson.intro ? (
          <Text style={[styles.lead, { marginTop: 8 }]}>{lesson.intro}</Text>
        ) : null}
      </View>

      {Array.isArray(lesson.sections) &&
        lesson.sections.map((sec: any, sidx: number) => (
          <View key={`sec-${sidx}`} style={styles.card}>
            {sec.title ? (
              <Text style={[styles.title, { color: "#a7b8ff" }]}>
                {`${sidx + 1}. ${sec.title}`}
              </Text>
            ) : null}

            {Array.isArray(sec.text) &&
              sec.text.map((line: any, i: number) =>
                typeof line === "string" ? (
                  <Text
                    key={`t-${sidx}-${i}`}
                    style={[styles.learnLead, { marginTop: i === 0 ? 10 : 6 }]}
                  >
                    {line}
                  </Text>
                ) : (
                  <View
                    key={`e-${sidx}-${i}`}
                    style={{ marginTop: i === 0 ? 10 : 6, alignItems: "flex-start" }}
                  >
                    {line /* JSX.Element pl. <Fraction /> szépen megjelenik */}
                  </View>
                )
              )}
          </View>
        ))}

      {/* Jegyzetblokk */}
      <View style={[styles.card, { borderColor: "rgba(255,255,255,0.12)", borderWidth: 1 }]}>
        <Text style={[styles.title, { color: "#bcd0ff" }]}>🗒️ Jegyzetek</Text>

        <TextInput
          placeholder="Írj be egy rövid jegyzetet..."
          placeholderTextColor="rgba(255,255,255,0.5)"
          value={draft}
          onChangeText={setDraft}
          style={{
            marginTop: 10,
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.16)",
            color: "white",
          }}
        />

        <TouchableOpacity onPress={addNote} style={[styles.btn, styles.btnGreen, { marginTop: 10 }]}>
          <Text style={styles.buttonText}>💾 Mentés</Text>
        </TouchableOpacity>

        {notes.length === 0 ? (
          <Text style={[styles.lead, { marginTop: 12 }]}>
            Nincsenek jegyzetek. Adj hozzá egyet a fenti mezővel!
          </Text>
        ) : (
          notes.map((n) => (
            <View
              key={n.id}
              style={{
                marginTop: 10,
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.14)",
              }}
            >
              <Text style={[styles.learnLead]}>{n.text}</Text>
              <TouchableOpacity
                onPress={() => removeNote(n.id)}
                style={[styles.btn, styles.btnGray, { marginTop: 8, alignSelf: "flex-start" }]}
              >
                <Text style={styles.buttonText}>Törlés</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>

      <View style={{ height: 12 }} />
      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

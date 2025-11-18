// app/custom-bank.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../lib/styles";
import type { Question } from "../../lib/types";

const keyUserBank = (t: string) => `userbank:${t}`;

type Draft = {
  id?: string;
  q: string;               // régi: q   (újból átkonvertálunk)
  options: string[];       // régi: options (újból átkonvertálunk)
  correctIndex: number;    // régi: correctIndex (újból átkonvertálunk)
  exp?: string;            // régi: exp (újból átkonvertálunk)
};

export default function CustomBankScreen() {
  const { topicId: p } = useLocalSearchParams<{ topicId?: string }>();
  const topicId = String(p ?? "");

  const [list, setList] = React.useState<Question[]>([]);
  const [editing, setEditing] = React.useState<Draft>({
    q: "",
    options: ["", "", "", ""],
    correctIndex: 0,
    exp: "",
  });

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const load = React.useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(keyUserBank(topicId));
      const arr: Question[] = raw ? JSON.parse(raw) : [];
      setList(Array.isArray(arr) ? arr : []);
    } catch {
      setList([]);
    }
  }, [topicId]);

  React.useEffect(() => {
    load();
  }, [load]);

  const persist = async (arr: Question[]) => {
    setList(arr);
    try {
      await AsyncStorage.setItem(keyUserBank(topicId), JSON.stringify(arr));
    } catch {
      Alert.alert("Hoppá", "Nem sikerült elmenteni a kérdésbankot.");
    }
  };

  const resetDraft = () =>
    setEditing({ q: "", options: ["", "", "", ""], correctIndex: 0, exp: "" });

  const saveDraft = () => {
    const e = editing;
    const trimmed = e.options.map((s) => s.trim());
    if (!e.q.trim()) return Alert.alert("Hoppá", "Írj be egy kérdést!");
    if (trimmed.filter(Boolean).length < 2)
      return Alert.alert("Hoppá", "Legalább 2 opció kell.");
    if (
      e.correctIndex < 0 ||
      e.correctIndex >= trimmed.length ||
      !trimmed[e.correctIndex]
    )
      return Alert.alert("Hoppá", "A helyes válasz indexe hibás.");

    // Mentünk a RÉGI (q/options/correctIndex/exp) struktúrában,
    // mert ez a sajátkvíz közös fájlod több tárgynál.
    const base: Question = {
      id: (e as any).id ?? `u-${Date.now()}`,
      q: e.q.trim(),
      options: trimmed.filter(Boolean),
      correctIndex: e.correctIndex,
      exp: (e.exp ?? "").trim(),
    };

    const next = [...list];
    const idx = next.findIndex((x) => x.id === (base as any).id);
    if (idx >= 0) next[idx] = base;
    else next.unshift(base);
    persist(next);
    resetDraft();
  };

  // Régi + új forma támogatása szerkesztéskor
  const onEdit = (qq: Question) => {
    // kérdésszöveg
    const qText = (qq as any).q ?? (qq as any).question ?? "";
    // opciók (új choices -> string tömb)
    const opts: string[] =
      (qq as any).options ??
      ((qq as any).choices?.map((c: any) => String(c?.text ?? "").trim()) ?? []);
    // helyes index
    const cIdx: number = (qq as any).correctIndex ?? (qq as any).answerIndex ?? 0;
    // magyarázat
    const explain: string = (qq as any).exp ?? (qq as any).explanation ?? "";

    setEditing({
      id: (qq as any).id,
      q: String(qText),
      options: [...opts, "", "", "", ""].slice(0, 6),
      correctIndex: typeof cIdx === "number" ? cIdx : 0,
      exp: String(explain),
    });
  };

  const onDelete = (id: string) => {
    Alert.alert("Törlés", "Biztosan törlöd ezt a kérdést?", [
      { text: "Mégse", style: "cancel" },
      {
        text: "Törlés",
        style: "destructive",
        onPress: () => persist(list.filter((x) => x.id !== id)),
      },
    ]);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      {/* fejléc */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnIndigo]}>
          <Text style={styles.buttonText}>🏠 Kezdőoldal</Text>
        </TouchableOpacity>
      </View>

      {/* űrlap */}
      <View style={styles.card}>
        <Text style={[styles.titleBig, { color: "#38bdf8" }]}>
          Saját kvíz – szerkesztő
        </Text>
        <Text style={[styles.paragraph, { marginTop: 6 }]}>
          <Text style={{ color: "#f59e0b", fontWeight: "800" }}>Téma-ID:</Text>{" "}
          <Text style={{ color: "#c7d2fe" }}>{topicId || "—"}</Text>
        </Text>

        <Text style={[styles.lead, { marginTop: 12, color: "#22c55e" }]}>
          Kérdés
        </Text>
        <TextInput
          value={editing.q}
          onChangeText={(t) => setEditing((s) => ({ ...s, q: t }))}
          placeholder="Írd be a kérdést…"
          placeholderTextColor="#9aa4b2"
          style={{
            backgroundColor: "#0f172a",
            color: "#e5e7eb",
            borderWidth: 1,
            borderColor: "#334155",
            borderRadius: 12,
            padding: 10,
            marginTop: 6,
          }}
          multiline
        />

        <Text style={[styles.lead, { marginTop: 12, color: "#a78bfa" }]}>
          Válaszlehetőségek (min. 2)
        </Text>
        {editing.options.map((opt, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              marginTop: 6,
            }}
          >
            <TouchableOpacity
              onPress={() => setEditing((s) => ({ ...s, correctIndex: i }))}
              style={[
                styles.badge,
                {
                  backgroundColor:
                    editing.correctIndex === i ? "#14532d" : "#374151",
                  borderColor: "#16a34a",
                  borderWidth: 1,
                },
              ]}
            >
              <Text style={styles.badgeText}>
                {editing.correctIndex === i ? "✅ helyes" : "—"}
              </Text>
            </TouchableOpacity>
            <TextInput
              value={opt}
              onChangeText={(t) =>
                setEditing((s) => {
                  const arr = [...s.options];
                  arr[i] = t;
                  return { ...s, options: arr };
                })
              }
              placeholder={`Válasz ${i + 1}`}
              placeholderTextColor="#9aa4b2"
              style={{
                flex: 1,
                backgroundColor: "#0f172a",
                color: "#e5e7eb",
                borderWidth: 1,
                borderColor: "#334155",
                borderRadius: 12,
                padding: 10,
              }}
            />
          </View>
        ))}

        <Text style={[styles.lead, { marginTop: 12, color: "#fb7185" }]}>
          Magyarázat (opcionális)
        </Text>
        <TextInput
          value={editing.exp}
          onChangeText={(t) => setEditing((s) => ({ ...s, exp: t }))}
          placeholder="Rövid magyarázat…"
          placeholderTextColor="#9aa4b2"
          style={{
            backgroundColor: "#0f172a",
            color: "#e5e7eb",
            borderWidth: 1,
            borderColor: "#334155",
            borderRadius: 12,
            padding: 10,
            marginTop: 6,
          }}
          multiline
        />

        <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
          <TouchableOpacity onPress={saveDraft} style={[styles.btn, styles.btnGreen]}>
            <Text style={styles.buttonText}>💾 Mentés</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetDraft} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>Mégse</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* lista */}
      <View style={styles.card}>
        <Text style={[styles.title, { color: "#f472b6" }]}>Saját kérdések</Text>
        {list.length === 0 ? (
          <Text style={[styles.paragraph, { marginTop: 6, color: "#93c5fd" }]}>
            Még nincs saját kérdés.
          </Text>
        ) : (
          <View style={{ marginTop: 10, gap: 10 }}>
            {list.map((q) => {
              // Megjelenítéshez is támogassuk az új elnevezéseket:
              const title = (q as any).q ?? (q as any).question ?? "";
              const opts: string[] =
                (q as any).options ??
                ((q as any).choices?.map((c: any) => String(c?.text ?? "")) ?? []);
              const cIdx: number = (q as any).correctIndex ?? (q as any).answerIndex ?? 0;

              return (
                <View
                  key={(q as any).id}
                  style={{
                    borderWidth: 1,
                    borderColor: "#334155",
                    borderRadius: 12,
                    padding: 10,
                  }}
                >
                  <Text style={[styles.lead, { color: "#c7d2fe" }]}>{title}</Text>

                  <View style={{ marginTop: 6, gap: 6 }}>
                    {(opts ?? []).map((o, i) => (
                      <View
                        key={i}
                        style={{
                          backgroundColor:
                            i === cIdx ? "rgba(22,163,74,0.15)" : "#1f2937",
                          borderRadius: 8,
                          paddingVertical: 8,
                          paddingHorizontal: 10,
                        }}
                      >
                        <Text
                          style={[
                            styles.paragraph,
                            { color: i === cIdx ? "#86efac" : "#e5e7eb" },
                          ]}
                        >
                          {i === cIdx ? "✅ " : ""}
                          {String(o)}
                        </Text>
                      </View>
                    ))}
                  </View>

                  <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
                    <TouchableOpacity onPress={() => onEdit(q)} style={[styles.btn, styles.btnIndigo]}>
                      <Text style={styles.buttonText}>Szerkeszt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onDelete(String((q as any).id))} style={[styles.btn, styles.btnRed]}>
                      <Text style={styles.buttonText}>Töröl</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </View>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

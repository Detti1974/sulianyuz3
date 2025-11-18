// app/nemet/custom-bank.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import styles from "../../lib/styles";

// A QuizContext-ban is ez a minta kulcs: userbank:<topicId>
const keyUserBank = (topicId: string) => `userbank:${topicId}`;

type CustomQ = {
  q: string;           // kérdés
  a: string[];         // helyes válasz(ok) — itt 1-et használunk
  options: string[];   // válaszopciók (legalább 2, max 6 ajánlott)
};

export default function NemetCustomBank() {
  const { topicId } = useLocalSearchParams<{ topicId?: string }>();
  const bankKey = keyUserBank(String(topicId || "nemet"));

  const [items, setItems] = React.useState<CustomQ[]>([]);
  const [busy, setBusy] = React.useState(false);

  // Űrlap mezők
  const [q, setQ] = React.useState("");
  const [ans, setAns] = React.useState("");          // egy helyes válasz
  const [opts, setOpts] = React.useState("");        // vesszővel elválasztva
  const [editIdx, setEditIdx] = React.useState<number | null>(null);

  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(bankKey);
        const arr: CustomQ[] = raw ? JSON.parse(raw) : [];
        if (alive) setItems(Array.isArray(arr) ? arr : []);
      } catch {
        if (alive) setItems([]);
      }
    })();
    return () => {
      alive = false;
    };
  }, [bankKey]);

  const persist = async (arr: CustomQ[]) => {
    setItems(arr);
    await AsyncStorage.setItem(bankKey, JSON.stringify(arr));
  };

  const resetForm = () => {
    setQ("");
    setAns("");
    setOpts("");
    setEditIdx(null);
  };

  const validate = (): { ok: boolean; msg?: string } => {
    if (!q.trim()) return { ok: false, msg: "Írj be egy kérdést." };
    if (!ans.trim()) return { ok: false, msg: "Adj meg legalább egy helyes választ." };
    const rawOpts = opts
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    // Tegyük be a helyes választ is az opciók közé, ha hiányzik
    const allOptions = Array.from(new Set([ans.trim(), ...rawOpts]));
    if (allOptions.length < 2) return { ok: false, msg: "Legalább 2 válaszopció kell." };
    if (allOptions.length > 8) return { ok: false, msg: "Maximum 8 opció javasolt." };

    return { ok: true };
  };

  const onSave = async () => {
    if (busy) return;
    const v = validate();
    if (!v.ok) {
      Alert.alert("Hoppá!", v.msg || "Ellenőrizd a mezőket.");
      return;
    }

    setBusy(true);
    try {
      const correct = ans.trim();
      const allOptions = Array.from(
        new Set([correct, ...opts.split(",").map((s) => s.trim()).filter(Boolean)])
      );

      const item: CustomQ = { q: q.trim(), a: [correct], options: allOptions };

      if (editIdx != null) {
        const next = [...items];
        next[editIdx] = item;
        await persist(next);
      } else {
        await persist([...items, item]);
      }
      resetForm();
    } finally {
      setBusy(false);
    }
  };

  const onEdit = (idx: number) => {
    const it = items[idx];
    setQ(it.q);
    setAns(it.a[0] || "");
    // szerk: az options-ból vegyük ki az első (helyes) elemet megjelenítéshez
    const other = it.options.filter((o) => o !== (it.a[0] || "")).join(", ");
    setOpts(other);
    setEditIdx(idx);
  };

  const onDelete = (idx: number) => {
    Alert.alert("Törlés", "Biztosan törlöd ezt a kérdést?", [
      { text: "Mégse", style: "cancel" },
      {
        text: "🗑️ Törlés",
        style: "destructive",
        onPress: async () => {
          const next = items.filter((_, i) => i !== idx);
          await persist(next);
          if (editIdx === idx) resetForm();
        },
      },
    ]);
  };

  const onClearAll = () => {
    Alert.alert(
      "Összes törlése",
      "Tényleg törlöd az összes saját kérdést ennél a témánál?",
      [
        { text: "Mégse", style: "cancel" },
        {
          text: "🧹 Igen, töröld",
          style: "destructive",
          onPress: async () => {
            await persist([]);
            resetForm();
          },
        },
      ]
    );
  };

  const shadow = {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  } as const;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#0b1220" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 12 : 0}
    >
      <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>
        {/* Fejléc */}
        <View style={[styles.header, { marginBottom: 8 }]}>
          <TouchableOpacity onPress={() => router.back()} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <Text style={[styles.title, { color: "#f59e0b" }]}>Német — Saját kvíz</Text>
          <TouchableOpacity onPress={() => router.replace("/")} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>🏠 Kezdő</Text>
          </TouchableOpacity>
        </View>

        {/* Infók */}
        <View style={[styles.card, shadow]}>
          <Text style={[styles.lead]}>Témakör ID: <Text style={{ color: "#fbbf24" }}>{String(topicId || "–")}</Text></Text>
          <View style={{ flexDirection: "row", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
            <View style={styles.badge}><Text style={styles.badgeText}>Kérdések: {items.length}</Text></View>
            <View style={styles.badge}><Text style={styles.badgeText}>🎯 Kvíz: 10 kérdés</Text></View>
          </View>
          <TouchableOpacity
            onPress={onClearAll}
            style={[styles.btn, { marginTop: 10, backgroundColor: "#ef4444", borderColor: "#f87171" }]}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>🧹 Összes törlése</Text>
          </TouchableOpacity>
        </View>

        {/* Űrlap */}
        <View
          style={[
            styles.card,
            shadow,
            { backgroundColor: "rgba(245,158,11,0.07)", borderColor: "rgba(245,158,11,0.35)", borderWidth: 1 },
          ]}
        >
          <Text style={[styles.title, { color: "#fbbf24" }]}>{editIdx != null ? "Kérdés szerkesztése" : "Új kérdés"}</Text>

          <Text style={[styles.paragraph, { marginTop: 10 }]}>Kérdés</Text>
          <TextInput
            value={q}
            onChangeText={setQ}
            placeholder="Pl.: Mit jelent: 'die Schule'?"
            placeholderTextColor="#94a3b8"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              color: "#e5e7eb",
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginTop: 6,
            }}
            multiline
          />

          <Text style={[styles.paragraph, { marginTop: 12 }]}>Helyes válasz</Text>
          <TextInput
            value={ans}
            onChangeText={setAns}
            placeholder="Pl.: iskola"
            placeholderTextColor="#94a3b8"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              color: "#e5e7eb",
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginTop: 6,
            }}
          />

          <Text style={[styles.paragraph, { marginTop: 12 }]}>
            További opciók (vesszővel elválasztva)
          </Text>
          <TextInput
            value={opts}
            onChangeText={setOpts}
            placeholder="Pl.: osztály, tanóra, ház"
            placeholderTextColor="#94a3b8"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              color: "#e5e7eb",
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginTop: 6,
              marginBottom: 6,
            }}
          />

          <View style={{ flexDirection: "row", gap: 10, marginTop: 6, flexWrap: "wrap" }}>
            {editIdx != null && (
              <TouchableOpacity
                onPress={resetForm}
                style={[styles.btn, styles.btnGray]}
              >
                <Text style={styles.buttonText}>↩️ Mégse</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={onSave}
              disabled={busy}
              style={[
                styles.btn,
                { backgroundColor: "#22c55e", borderColor: "#4ade80", opacity: busy ? 0.6 : 1 },
              ]}
            >
              <Text style={[styles.buttonText, { color: "#fff" }]}>
                {editIdx != null ? "💾 Mentés" : "➕ Hozzáadás"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Lista */}
        <View style={[styles.card, shadow]}>
          <Text style={[styles.title, { color: "#f59e0b" }]}>Mentett kérdések</Text>

          {items.length === 0 && (
            <Text style={[styles.paragraph, { marginTop: 8, color: "#94a3b8" }]}>
              Még nincs saját kérdésed ehhez a témához.
            </Text>
          )}

          {items.map((it, idx) => (
            <View
              key={`${idx}-${it.q.slice(0, 8)}`}
              style={{
                marginTop: 10,
                backgroundColor: "rgba(255,255,255,0.03)",
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.08)",
                padding: 12,
              }}
            >
              <Text style={{ color: "#e5e7eb", fontWeight: "800" }}>{it.q}</Text>
              <Text style={{ color: "#a7f3d0", marginTop: 4 }}>✔ {it.a[0]}</Text>
              <Text style={{ color: "#c7d2fe", marginTop: 4 }}>
                Opciók: {it.options.join(" • ")}
              </Text>

              <View style={{ flexDirection: "row", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
                <TouchableOpacity
                  onPress={() => onEdit(idx)}
                  style={[styles.btn, { backgroundColor: "#6366f1", borderColor: "#818cf8" }]}
                >
                  <Text style={[styles.buttonText, { color: "#fff" }]}>✏️ Szerkesztés</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onDelete(idx)}
                  style={[styles.btn, { backgroundColor: "#ef4444", borderColor: "#f87171" }]}
                >
                  <Text style={[styles.buttonText, { color: "#fff" }]}>🗑️ Törlés</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

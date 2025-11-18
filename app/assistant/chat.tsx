// app/assistant/chat.tsx
import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../lib/styles";
import ParentalGate from "../../lib/parental/guard";

/**
 * Szili chat — ONLINE-ONLY, DEFAULT proxy endpoint + PIN kezelés + PIN csere
 *
 * - DEFAULT_ENDPOINT biztosítja, hogy "működjön azonnal".
 * - A KEY_ENDPOINT felülírható a Beállítások képernyőn.
 * - Internet bekapcsolása PIN-hez kötött (ParentalGate unlock).
 * - PIN csere folyamat: először feloldod a meglévő PIN-nel, utána beállíthatod az újat.
 */

/* =================== KONFIG =================== */
// Ha szeretnéd, ezt cseréld a saját proxy URL-edre.
// A proxy feladata: átvenni az OpenAI-kompatibilis /v1/chat kéréseket,
// és visszaadni choices[0].message.content-ot.
const DEFAULT_ENDPOINT = "https://tansegito-ai-proxy.vercel.app/v1/chat";

const KEY_ONLINE = "assistant:onlineEnabled";
const KEY_ENDPOINT = "assistant:endpoint";
const KEY_THREAD = (r: string) => `assistant:thread:${r}`;

/* =================== TÍPUSOK =================== */
type MsgRole = "user" | "assistant" | "system";
type Msg = { role: MsgRole; content: string; ts: number };

/* =================== RENDSZERPROMPT =================== */
function systemPrompt(role: string) {
  const base = [
    "Te egy gyerekbarát tanulási asszisztens vagy magyarul.",
    "Ne kérj személyes adatot. Ne adj kész másolnivalót a házi feladathoz.",
    "Mindig magyarázd el a miérteket, adj ellenőrző feladatot, rövid bekezdések és pontokba szedés a stílus.",
  ];
  if (role === "teacher")
    return [
      ...base,
      "Szerep: Szili tanár. Magyarázz, adj hétköznapi példát, és a végén tegyél fel 1 rövid kontrollkérdést.",
    ].join("\n");
  if (role === "dev")
    return [
      ...base,
      "Szerep: Szili fejlesztő. Adj rövid, futtatható kódrészletet magyarázattal (oktatási cél).",
    ].join("\n");
  // default: study / tanulótárs
  return [
    ...base,
    "Szerep: Szili tanulótárs. Kérdezz–felelek, adaptív villámkvíz, ha kéri: magyarázd el 12 évesnek.",
  ].join("\n");
}

/* =================== HELPER: AsyncStorage getters =================== */
async function getOnlineFlag(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(KEY_ONLINE)) === "1";
  } catch {
    return false;
  }
}

async function setOnlineFlag(v: boolean): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY_ONLINE, v ? "1" : "0");
  } catch {}
}

async function getEndpoint(): Promise<string> {
  try {
    const ep = await AsyncStorage.getItem(KEY_ENDPOINT);
    return (ep && ep.trim()) || DEFAULT_ENDPOINT;
  } catch {
    return DEFAULT_ENDPOINT;
  }
}

/* =================== AI CALL =================== */
// Egyszerű, OpenAI-compatible POST /v1/chat hívás.
// Visszaadja a szöveget, ha bármi baj: dob hibát.
async function callAI(endpoint: string, role: string, history: Msg[]): Promise<string> {
  const messages = [
    { role: "system", content: systemPrompt(role) },
    ...history.map((m) => ({ role: m.role, content: m.content })),
  ];
  const payload: any = { messages };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Bad status ${res.status} ${txt}`);
  }

  const data = await res.json().catch(() => null);
  const text =
    data?.choices?.[0]?.message?.content || data?.message || data?.text || "";
  return String(text).trim();
}

/* =================== FŐ KOMPONENS =================== */
export default function AssistantChat() {
  const { role } = useLocalSearchParams<{ role?: string }>();
  const roleId = (role || "teacher") as "teacher" | "study" | "dev";

  const [msgs, setMsgs] = React.useState<Msg[]>([]);
  const [text, setText] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [online, setOnline] = React.useState(false);
  const [endpoint, setEndpointState] = React.useState<string | null>(null);

  // ParentalGate vezérlés (unlock / set pin)
  const [askUnlockGate, setAskUnlockGate] = React.useState(false);
  const [askSetPinGate, setAskSetPinGate] = React.useState(false);
  // Átmenet: ha PIN csere folyamat indul -> először unlock, ha ok -> set
  const [pinChangeFlow, setPinChangeFlow] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const on = await getOnlineFlag();
      const ep = await getEndpoint();
      setOnline(on);
      setEndpointState(ep || DEFAULT_ENDPOINT);

      // betöltjük az előzmény-szálat (vagy rendszerprompt)
      try {
        const raw = await AsyncStorage.getItem(KEY_THREAD(roleId));
        const arr: Msg[] = raw ? JSON.parse(raw) : [];
        const sys: Msg = { role: "system", content: systemPrompt(roleId), ts: Date.now() };
        setMsgs(arr.length ? arr : [sys]);
      } catch {
        setMsgs([{ role: "system", content: systemPrompt(roleId), ts: Date.now() }]);
      }
    })();
  }, [roleId]);

  const persist = React.useCallback(async (next: Msg[]) => {
    setMsgs(next);
    try {
      await AsyncStorage.setItem(KEY_THREAD(roleId), JSON.stringify(next.slice(-200)));
    } catch {}
  }, [roleId]);

  // Ellenőrzések mielőtt küldünk
  const ensureReady = async (): Promise<boolean> => {
    const on = await getOnlineFlag();
    const ep = await getEndpoint();
    if (!on) {
      Alert.alert("Internet KI", "Kapcsold be az internetet a Szili MI-hez (szülői PIN szükséges).");
      return false;
    }
    if (!ep) {
      Alert.alert("Hiányzó végpont", "Nincs beállítva MI végpont. Menj a Beállításokba.");
      return false;
    }
    return true;
  };

  const send = async () => {
    const t = text.trim();
    if (!t || busy) return;
    if (!(await ensureReady())) return;

    const next = [...msgs, { role: "user", content: t, ts: Date.now() } as Msg];
    setText("");
    await persist(next);
    setBusy(true);
    try {
      const ep = await getEndpoint();
      const reply = await callAI(ep, roleId, next);
      const aiMsg: Msg = { role: "assistant", content: reply, ts: Date.now() };
      await persist([...next, aiMsg]);
    } catch (e: any) {
      const errMsg = `Hiba az online válaszban. Ellenőrizd a végpontot. (${String(e?.message || e)})`;
      await persist([...next, { role: "assistant", content: errMsg, ts: Date.now() }]);
    } finally {
      setBusy(false);
    }
  };

  /* ----- PIN / Online kezelők ----- */
  const openUnlockGate = () => setAskUnlockGate(true);
  const openSetPinGate = () => {
    // Indítjuk a pinChangeFlow-ot: először feloldás, majd set
    setPinChangeFlow(true);
    setAskUnlockGate(true);
  };

  const onUnlockSuccess = async () => {
    // Feloldás sikeres: engedélyezzük az internetet, frissítjük állapotot.
    setAskUnlockGate(false);
    await setOnlineFlag(true);
    setOnline(true);
    const ep = await getEndpoint();
    setEndpointState(ep || DEFAULT_ENDPOINT);

    // Ha PIN csere folyamat volt, most nyissuk meg a set PIN gate-et
    if (pinChangeFlow) {
      setPinChangeFlow(false);
      setAskSetPinGate(true);
    } else {
      Alert.alert("Szülői feloldás", "Internet engedélyezve a Szili MI-hez.");
    }
  };

  const onSetPinSuccess = () => {
    setAskSetPinGate(false);
    Alert.alert("PIN beállítva", "Az új PIN mentésre került.");
  };

  const onUnlockCancel = () => {
    setAskUnlockGate(false);
    setPinChangeFlow(false);
  };

  const onSetPinCancel = () => setAskSetPinGate(false);

  /* ----- UI navigációsegéd ----- */
  const goBack = () => router.back();
  const goHome = () => (router as any).replace("/");

  return (
    <View style={styles.screen}>
      {/* Fejléc */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={[styles.btn, styles.btnGray]}>
          <Text style={styles.buttonText}>← Vissza</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { color: "#a78bfa" }]}>
          Szili – {roleId === "teacher" ? "tanár" : roleId === "dev" ? "fejlesztő" : "tanulótárs"}
        </Text>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity onPress={() => (router as any).push("/assistant/settings")} style={[styles.btn, styles.btnIndigo]}>
            <Text style={styles.buttonText}>⚙️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnGray]}>
            <Text style={styles.buttonText}>🏠</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Üzenetek */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        {msgs.map((m, i) => (
          <View
            key={i}
            style={{
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              backgroundColor: m.role === "user" ? "rgba(34,197,94,0.15)" : "rgba(139,92,246,0.12)",
              borderColor: "rgba(255,255,255,0.12)",
              borderWidth: 1,
              borderRadius: 12,
              padding: 10,
              marginBottom: 8,
              maxWidth: "90%",
            }}
          >
            <Text style={{ color: "#e5e7eb" }}>{m.content}</Text>
          </View>
        ))}

        {busy && <ActivityIndicator style={{ marginTop: 6 }} />}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Input + státusz + PIN csere gomb */}
      <View
        style={{
          padding: 12,
          borderTopWidth: 1,
          borderTopColor: "rgba(255,255,255,0.08)",
          backgroundColor: "#0b1220",
        }}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Írj egy feladatot vagy kérdést…"
          placeholderTextColor="#94a3b8"
          multiline
          style={{
            minHeight: 44,
            maxHeight: 120,
            color: "#e5e7eb",
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: 10,
            padding: 10,
            textAlignVertical: "top",
          }}
        />

        <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
          <TouchableOpacity
            onPress={send}
            disabled={busy}
            style={[
              styles.btn,
              { flex: 1, backgroundColor: "#8b5cf6", borderColor: "#a78bfa", opacity: busy ? 0.6 : 1 },
            ]}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>{busy ? "Küldés…" : "Küldés ▶"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openUnlockGate}
            style={[styles.btn, { backgroundColor: online ? "#22c55e" : "#ef4444", borderColor: "#fff2" }]}
          >
            <Text style={styles.buttonText}>{online ? "Internet: BE" : "Internet: KI"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openSetPinGate}
            style={[styles.btn, { backgroundColor: "#f59e0b", borderColor: "#fbbf24" }]}
          >
            <Text style={[styles.buttonText, { color: "#0b1220" }]}>PIN csere</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.paragraph, { marginTop: 6, textAlign: "center", color: online ? "#93c5fd" : "#94a3b8" }]}>
          {online
            ? `🌐 Online (végpont: ${endpoint ? endpoint.replace(/^https?:\/\//, "") : "—"})`
            : "🚫 Internet letiltva — PIN szükséges a bekapcsoláshoz"}
        </Text>
      </View>

      {/* ParentalGate modalok */}
      {askUnlockGate && (
        <ParentalGate mode="unlock" onCancel={onUnlockCancel} onSuccess={onUnlockSuccess} />
      )}
      {askSetPinGate && <ParentalGate mode="set" onCancel={onSetPinCancel} onSuccess={onSetPinSuccess} />}
    </View>
  );
}

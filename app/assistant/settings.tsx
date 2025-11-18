// app/assistant/settings.tsx
import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import styles from "../../lib/styles";
import ParentalGate from "../../lib/parental/guard";

// Ugyanaz az alapértelmezett proxy, mint a chat-ben
const DEFAULT_ENDPOINT = "https://tansegito-ai-proxy.vercel.app/v1/chat";
const KEY_PIN = "parental:pin";
const KEY_ONLINE = "assistant:onlineEnabled";
const KEY_ENDPOINT = "assistant:endpoint";

export default function AssistantSettings() {
  const [endpoint, setEndpoint] = React.useState("");
  const [hasPin, setHasPin] = React.useState(false);
  const [askSetPin, setAskSetPin] = React.useState(false);
  const [askUnlockPin, setAskUnlockPin] = React.useState(false);
  const [changing, setChanging] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const ep = await AsyncStorage.getItem(KEY_ENDPOINT);
        if (ep) setEndpoint(ep);
        const pin = await AsyncStorage.getItem(KEY_PIN);
        setHasPin(!!pin);
      } catch {}
    })();
  }, []);

  /* ---------- MI-végpont mentése ---------- */
  const saveEndpoint = async () => {
    try {
      const value = endpoint.trim() || DEFAULT_ENDPOINT;
      await AsyncStorage.setItem(KEY_ENDPOINT, value);
      Alert.alert("Kész!", "MI-végpont elmentve.");
    } catch {
      Alert.alert("Hiba", "Nem sikerült menteni a végpontot.");
    }
  };

  /* ---------- PIN kezelés ---------- */
  const openSetPin = () => setAskSetPin(true);
  const openChangePin = () => {
    setChanging(true);
    setAskUnlockPin(true);
  };
  const openDeletePin = async () => {
    Alert.alert("PIN törlése", "Biztosan törlöd a PIN kódot?", [
      { text: "Mégse", style: "cancel" },
      {
        text: "🗑️ Törlés",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem(KEY_PIN);
          await AsyncStorage.setItem(KEY_ONLINE, "0");
          setHasPin(false);
          Alert.alert("Törölve", "PIN törölve, internet kikapcsolva.");
        },
      },
    ]);
  };

  const onUnlockSuccess = () => {
    setAskUnlockPin(false);
    if (changing) {
      setChanging(false);
      setAskSetPin(true); // PIN csere folyamat
    } else {
      Alert.alert("Feloldva", "Szülői PIN ellenőrizve.");
    }
  };

  const onUnlockCancel = () => {
    setAskUnlockPin(false);
    setChanging(false);
  };

  const onSetPinSuccess = () => {
    setAskSetPin(false);
    setHasPin(true);
    Alert.alert("Beállítva", "PIN sikeresen mentve.");
  };

  const onSetPinCancel = () => setAskSetPin(false);

  /* ---------- Navigáció ---------- */
  const goBack = () => router.back();
  const goHome = () => (router as any).replace("/");

  /* ---------- UI ---------- */
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Fejléc */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={goBack}
            style={[styles.btn, styles.btnGray]}
          >
            <Text style={styles.buttonText}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goHome}
            style={[styles.btn, styles.btnIndigo]}
          >
            <Text style={styles.buttonText}>🏠 Kezdő</Text>
          </TouchableOpacity>
        </View>

        {/* Cím */}
        <View style={styles.card}>
          <Text style={[styles.titleBig, { color: "#93c5fd" }]}>
            Szülői beállítások
          </Text>
          <Text style={[styles.paragraph, { marginTop: 6 }]}>
            Itt kezelheted a Szülői PIN-t és az online MI végpontot.
          </Text>
        </View>

        {/* PIN blokk */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: "rgba(239,68,68,0.08)",
              borderColor: "rgba(239,68,68,0.35)",
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.title, { color: "#fca5a5" }]}>Szülői PIN</Text>
          <Text style={[styles.paragraph, { marginTop: 6 }]}>
            {hasPin
              ? "PIN beállítva – internet csak feloldás után engedélyezett."
              : "Nincs PIN beállítva – a gyerek automatikusan hozzáfér az MI-hez."}
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 10,
            }}
          >
            {!hasPin && (
              <TouchableOpacity
                onPress={openSetPin}
                style={[
                  styles.btn,
                  { backgroundColor: "#ef4444", borderColor: "#f87171" },
                ]}
              >
                <Text style={[styles.buttonText, { color: "#fff" }]}>
                  PIN beállítása
                </Text>
              </TouchableOpacity>
            )}
            {hasPin && (
              <>
                <TouchableOpacity
                  onPress={openChangePin}
                  style={[
                    styles.btn,
                    { backgroundColor: "#f59e0b", borderColor: "#fbbf24" },
                  ]}
                >
                  <Text style={[styles.buttonText, { color: "#0b1220" }]}>
                    PIN módosítása
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={openDeletePin}
                  style={[
                    styles.btn,
                    { backgroundColor: "#ef4444", borderColor: "#f87171" },
                  ]}
                >
                  <Text style={[styles.buttonText, { color: "#fff" }]}>
                    PIN törlése
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>

        {/* MI végpont */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: "rgba(139,92,246,0.08)",
              borderColor: "rgba(139,92,246,0.35)",
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.title, { color: "#a78bfa" }]}>MI végpont</Text>
          <Text style={[styles.paragraph, { marginTop: 6 }]}>
            Alapértelmezett:{" "}
            <Text style={{ fontWeight: "900" }}>
              {DEFAULT_ENDPOINT.replace(/^https?:\/\//, "")}
            </Text>
          </Text>
          <Text style={[styles.paragraph, { marginTop: 6 }]}>
            Ha üresen hagyod, Szili MI automatikusan ezt használja.
          </Text>

          <TextInput
            value={endpoint}
            onChangeText={setEndpoint}
            placeholder="https://sajat-szerver.hu/v1/chat"
            placeholderTextColor="#94a3b8"
            autoCapitalize="none"
            style={{
              marginTop: 8,
              color: "#e5e7eb",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: 10,
            }}
          />
          <TouchableOpacity
            onPress={saveEndpoint}
            style={[
              styles.btn,
              {
                marginTop: 10,
                backgroundColor: "#8b5cf6",
                borderColor: "#a78bfa",
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: "#fff" }]}>
              Mentés / alapértelmezett használata
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>

      {/* PIN modalok */}
      {askSetPin && (
        <ParentalGate
          mode="set"
          onCancel={onSetPinCancel}
          onSuccess={onSetPinSuccess}
        />
      )}
      {askUnlockPin && (
        <ParentalGate
          mode="unlock"
          onCancel={onUnlockCancel}
          onSuccess={onUnlockSuccess}
        />
      )}
    </View>
  );
}

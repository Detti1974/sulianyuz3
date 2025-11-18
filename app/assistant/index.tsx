// app/assistant/index.tsx
import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, Switch, Alert } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../lib/styles";
import ParentalGate from "../../lib/parental/guard";

const KEY_ONLINE = "assistant:onlineEnabled";

const ROLES = [
  { id: "teacher", title: "Szili tanár", color: "#22c55e", desc: "Magyaráz, példát ad, visszakérdez (tantárgybarát)." },
  { id: "study",   title: "Szili tanulótárs", color: "#f59e0b", desc: "Adaptív gyakorlás, villámkvíz, „magyarázd el 12 évesnek”." },
  { id: "dev",     title: "Szili fejlesztő", color: "#38bdf8", desc: "Kód és hibakeresés (csak oktatási célra)." },
];

export default function AssistantHome() {
  const [online, setOnline] = React.useState(false);
  const [askPin, setAskPin] = React.useState(false);

  React.useEffect(() => { (async () => {
    try { setOnline((await AsyncStorage.getItem(KEY_ONLINE)) === "1"); } catch {}
  })(); }, []);

  const saveOnline = async (val: boolean) => { await AsyncStorage.setItem(KEY_ONLINE, val ? "1" : "0"); setOnline(val); };
  const toggleOnline = () => { if (!online) setAskPin(true); else saveOnline(false); };
  const onPinOk = async () => { setAskPin(false); await saveOnline(true); Alert.alert("Engedélyezve", "Internet bekapcsolva a Szili MI-hez."); };

  const startRole = (roleId: string) => (router as any).push(`/assistant/chat?role=${encodeURIComponent(roleId)}`);
  const goHome = () => (router as any).replace("/");
  const goSettings = () => (router as any).push("/assistant/settings");

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goHome} style={[styles.btn, styles.btnGray]}><Text style={styles.buttonText}>🏠 Kezdő</Text></TouchableOpacity>
          <TouchableOpacity onPress={goSettings} style={[styles.btn, styles.btnIndigo]}><Text style={styles.buttonText}>⚙️ Beállítások</Text></TouchableOpacity>
        </View>

        <View style={[styles.card, { backgroundColor:"rgba(139,92,246,0.08)", borderColor:"rgba(139,92,246,0.35)", borderWidth:1 }]}>
          <Text style={[styles.titleBig, { color:"#c4b5fd" }]}>🎓 Szili MI – online</Text>
          <Text style={[styles.paragraph, { marginTop:6 }]}>
            Csak tanulásra: magyaráz, példát ad, visszakérdez. Internet csak szülői PIN után.
          </Text>
          <View style={{ flexDirection:"row", alignItems:"center", gap:10, marginTop:10 }}>
            <Switch value={online} onValueChange={toggleOnline} />
            <Text style={styles.paragraph}>{online ? "🌐 Internet: BE" : "🚫 Internet: KI"}</Text>
          </View>
        </View>

        {ROLES.map(r => (
          <View key={r.id} style={[styles.card, { borderWidth:1, borderColor:"rgba(255,255,255,0.12)" }]}>
            <Text style={[styles.title, { color:r.color }]}>{r.title}</Text>
            <Text style={[styles.paragraph, { marginTop:6 }]}>{r.desc}</Text>
            <TouchableOpacity onPress={() => startRole(r.id)} style={[styles.btn, { marginTop:10, backgroundColor:r.color, borderColor:"#fff2" }]}>
              <Text style={[styles.buttonText, { color:"#0b1220" }]}>Indítás</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ height: 24 }} />
      </ScrollView>

      {askPin && <ParentalGate mode="unlock" onCancel={() => setAskPin(false)} onSuccess={onPinOk} />}
    </View>
  );
}

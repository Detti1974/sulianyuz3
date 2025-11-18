// lib/parental/guard.tsx
import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles";

const KEY_PIN = "parental:pin";
async function getPin(): Promise<string | null> { try { return (await AsyncStorage.getItem(KEY_PIN)) || null; } catch { return null; } }
async function setPin(val: string) { await AsyncStorage.setItem(KEY_PIN, val); }

export default function ParentalGate({ mode, onCancel, onSuccess }: { mode: "unlock" | "set"; onCancel: () => void; onSuccess: () => void; }) {
  const [pin, setPinVal] = React.useState(""); const [pin2, setPin2] = React.useState("");
  const submit = async () => {
    if (mode === "unlock") {
      const saved = await getPin();
      if (!saved) { Alert.alert("Nincs PIN", "Előbb állíts be PIN-t a Beállításokban."); return; }
      if (pin === saved) onSuccess(); else Alert.alert("Hibás PIN", "Próbáld újra.");
    } else {
      if (pin.length < 4) { Alert.alert("Rövid PIN", "Legalább 4 számjegy."); return; }
      if (pin !== pin2) { Alert.alert("Nem egyezik", "A két PIN nem azonos."); return; }
      await setPin(pin); onSuccess();
    }
  };
  return (
    <Modal transparent animationType="fade">
      <View style={{ flex:1, backgroundColor:"rgba(0,0,0,0.5)", justifyContent:"center", padding:16 }}>
        <View style={[styles.card, { backgroundColor:"#0b1220" }]}>
          <Text style={[styles.title, { color:"#fda4af" }]}>{mode==="unlock" ? "Szülői PIN" : "PIN beállítása"}</Text>
          <TextInput value={pin} onChangeText={setPinVal} placeholder="PIN" placeholderTextColor="#94a3b8" keyboardType="number-pad" secureTextEntry style={{ marginTop:10, color:"#e5e7eb", backgroundColor:"rgba(255,255,255,0.06)", borderRadius:10, padding:10 }} />
          {mode==="set" && (
            <TextInput value={pin2} onChangeText={setPin2} placeholder="PIN újra" placeholderTextColor="#94a3b8" keyboardType="number-pad" secureTextEntry style={{ marginTop:10, color:"#e5e7eb", backgroundColor:"rgba(255,255,255,0.06)", borderRadius:10, padding:10 }} />
          )}
          <View style={{ flexDirection:"row", gap:10, marginTop:12 }}>
            <TouchableOpacity onPress={onCancel} style={[styles.btn, styles.btnGray]}><Text style={styles.buttonText}>Mégse</Text></TouchableOpacity>
            <TouchableOpacity onPress={submit} style={[styles.btn, { backgroundColor:"#ef4444", borderColor:"#f87171" }]}><Text style={[styles.buttonText, { color:"#fff" }]}>{mode==="unlock" ? "Feloldás" : "Mentés"}</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

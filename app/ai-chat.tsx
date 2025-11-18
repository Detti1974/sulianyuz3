// app/ai-chat.tsx – stabil chat, SafeArea, fix alsó beviteli sáv

import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { askAI, type AiMode, hasApiKey } from "../lib/ai";

type ChatMessage = { role: "user" | "assistant"; text: string };

const MODES: { key: AiMode; label: string }[] = [
  { key: "tanar", label: "Tanár" },
  { key: "hazisegito", label: "Házi segítő" },
  { key: "tarstanulo", label: "Társtanuló" },
];

// TILTOTT TÉMÁK – minden, ami nem tananyag
function isForbiddenTopic(text: string) {
  const t = text.toLowerCase();
  const ban = [
    "szex",
    "porn",
    "punci",
    "pénisz",
    "fasz",
    "meztelen",
    "mell",
    "anál",
    "orál",
    "szop",
    "kúr",
    "basz",
    "pussy",
    "öngyilk",
    "depresszió",
    "szorong",
    "szerelmes",
    "lelki",
    "miért nem szeret",
    "heroin",
    "kokain",
    "drog",
    "füvez",
    "pia",
    "berúg",
    "fegyver",
    "kés",
    "megöl",
    "megver",
    "bántani",
    "betörés",
    "lopás",
    "verekedés",
  ];
  return ban.some((w) => t.includes(w));
}

export default function AiChatScreen() {
  const [mode, setMode] = useState<AiMode>("tanar");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const scrollRef = useRef<ScrollView>(null);

  function clearChat() {
    setMessages([]);
    setErr(null);
  }

  async function send() {
    const q = input.trim();
    if (!q || loading) return;

    if (isForbiddenTopic(q)) {
      setErr(
        "Ez a kérdés nem tananyag jellegű. Tanulással kapcsolatos kérdésben szívesen segítek!"
      );
      return;
    }

    if (!hasApiKey()) {
      setErr("Hiányzik az AI kulcs. Ellenőrizd a .env fájlt!");
      return;
    }

    const newMessages: ChatMessage[] = [...messages, { role: "user", text: q }];
    setMessages(newMessages);
    setInput("");
    setErr(null);
    setLoading(true);

    try {
      // teljes kontextus szövegként – ezt kapja az askAI
      const contextText = newMessages
        .map((m) =>
          m.role === "user" ? `Tanuló: ${m.text}` : `Asszisztens: ${m.text}`
        )
        .join("\n");

      const answer = await askAI(contextText, mode);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: answer || "Nem sikerült értelmes választ adni.",
        },
      ]);

      setTimeout(() => {
        scrollRef.current?.scrollToEnd({ animated: true });
      }, 200);
    } catch (e: any) {
      setErr(e?.message ?? "Ismeretlen hiba történt.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 12,
            paddingTop: 12,
          }}
        >
          {/* Módválasztó */}
          <View style={{ flexDirection: "row", gap: 8, marginBottom: 8 }}>
            {MODES.map(({ key, label }) => {
              const active = mode === key;
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => {
                    setMode(key);
                    setMessages([]); // téma szerinti törlés
                    setErr(null);
                  }}
                  style={{
                    flex: 1,
                    backgroundColor: active ? "#22c55e" : "#1e293b",
                    paddingVertical: 10,
                    borderRadius: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: active ? "#0f172a" : "white",
                      fontWeight: "700",
                    }}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Kézi törlés */}
          {!!messages.length && (
            <TouchableOpacity
              onPress={clearChat}
              style={{
                alignSelf: "flex-end",
                backgroundColor: "#ef4444",
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 8,
                marginBottom: 8,
              }}
            >
              <Text style={{ color: "white", fontWeight: "600" }}>
                Téma törlése
              </Text>
            </TouchableOpacity>
          )}

          {/* Hibaüzenet */}
          {!!err && (
            <View
              style={{
                backgroundColor: "#7f1d1d",
                borderColor: "#fecaca",
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                marginBottom: 8,
              }}
            >
              <Text style={{ color: "#fecaca" }}>{err}</Text>
            </View>
          )}

          {/* Chat buborékok */}
          <ScrollView
            ref={scrollRef}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 90 }}
            keyboardShouldPersistTaps="handled"
          >
            {messages.map((m, idx) => (
              <View
                key={idx}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "80%",
                  backgroundColor: m.role === "user" ? "#2563eb" : "#1e293b",
                  padding: 10,
                  borderRadius: 10,
                  marginVertical: 4,
                }}
              >
                <Text style={{ color: "white", lineHeight: 20 }}>{m.text}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Alsó beviteli sáv */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              gap: 8,
              paddingTop: 8,
              paddingBottom: Platform.OS === "android" ? 4 : 0,
              borderTopWidth: 1,
              borderTopColor: "#334155",
              backgroundColor: "#0f172a",
            }}
          >
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Írj ide… (tananyag)"
              placeholderTextColor="#94a3b8"
              multiline
              style={{
                flex: 1,
                maxHeight: 120,
                backgroundColor: "#1e293b",
                color: "white",
                padding: 10,
                borderRadius: 10,
              }}
            />

            <TouchableOpacity
              onPress={send}
              disabled={!input.trim() || loading}
              style={{
                backgroundColor:
                  !input.trim() || loading ? "#475569" : "#22c55e",
                paddingVertical: 10,
                paddingHorizontal: 14,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                {loading ? "…" : "Küld"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

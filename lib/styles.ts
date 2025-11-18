// lib/styles.ts
import { StyleSheet } from "react-native";

/** Alapszínek – sötét háttér + élénk akcentek */
export const palette = {
  bg: "#0b1220",          // képernyőháttér (nagyon sötét)
  card: "#0f172a",        // kártya
  border: "#23304a",

  text: "#e5e7eb",        // alap szöveg
  textMuted: "#cbd5e1",
  textFaint: "#94a3b8",
  white: "#ffffff",

  indigo: "#6366f1",
  green: "#22c55e",
  orange: "#f97316",
  gray: "#6b7280",
  red: "#ef4444",
};

/** Színes csíkokhoz / jelvényekhez körbeforgó paletta */
export const ringColors = [
  "#60a5fa", // kék
  "#22c55e", // zöld
  "#f59e0b", // borostyán/sárga
  "#ef4444", // piros
  "#a78bfa", // lila
  "#f97316", // narancs
  "#10b981", // türkiz
  "#6366f1", // indigó
];
const colors = {
  bg: "#0f172a",          // sötét háttér
  card: "#111827",
  cardBorder: "#1f2937",
  text: "#e5e7eb",
  sub: "#cbd5e1",

  indigo: "#6366f1",
  indigoDark: "#4f46e5",
  orange: "#f97316",
  orangeDark: "#ea580c",
  grayBtn: "#374151",

  inputBg: "#0b1220",
  inputBorder: "#233249",

  good: "#86efac",
  warn: "#fde68a",
};
/** Alfejezet-csík szín: index alapján */
export const getColorByIndex = (i: number): string => {
  const idx = Math.abs(i) % ringColors.length;
  return ringColors[idx];
};

const styles = StyleSheet.create({
  // --- ADD / REPLACE THESE KEYS INSIDE StyleSheet.create({...}) ---
header: { flexDirection: "row", gap: 12, marginBottom: 12 },

divider: {
  height: 2,
  backgroundColor: "#273444",
  borderRadius: 2,
  marginVertical: 10,
},

badge: {
  backgroundColor: "#1f2937",
  paddingVertical: 6,
  paddingHorizontal: 10,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#334155",
},
badgeText: { color: "#cbd5e1", fontWeight: "700" },

btn: {
  paddingVertical: 14,
  paddingHorizontal: 16,
  borderRadius: 14,
  borderWidth: 2,
  borderColor: "#1f2937",
},
btnGray:   { backgroundColor: "#4b5563", borderColor: "#374151" },
btnIndigo: { backgroundColor: "#6366f1", borderColor: "#4f46e5" },
btnOrange: { backgroundColor: "#f97316", borderColor: "#ea580c" },
btnGreen:  { backgroundColor: "#22c55e", borderColor: "#16a34a" },
btnRed:    { backgroundColor: "#ef4444", borderColor: "#dc2626" },
buttonText:{ color: "#fff", fontWeight: "800", textAlign: "center", fontSize: 18 },
btnSuccess: { backgroundColor: "#16a34a" }, // zöld
btnDanger:  { backgroundColor: "#ef4444" },
  btnPrimary: {
    backgroundColor: "#2563eb",
    borderColor: "#1e3a8a",
    borderWidth: 1,
  },
// --- HIÁNYZÓ STÍLUSOK PÓTLÁSA ---

small: {
  color: "#b3c7ff",
  fontSize: 13,
  lineHeight: 18,
},


// ha bármelyik alap hiányzik, ezek is kellenek:
screen:    { flex: 1, backgroundColor: "#0f172a" },
container: { padding: 16 },
card: {
  backgroundColor: "#0b1220",
  borderRadius: 22,
  padding: 16,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: "#1f2937",
},
lead:      { color: "#cbd5e1", fontSize: 18, lineHeight: 26 },
title:     { color: "#fff", fontSize: 28, fontWeight: "900" },
subtitle:  { color: "#93c5fd", fontSize: 20, fontWeight: "800" },
paragraph: { color: "#e5e7eb", fontSize: 16, lineHeight: 24 },
textInfo:  { color: "#cbd5e1", marginTop: 6 },

  // ===== LAYOUT =====
 
  titleBig: {
    fontSize: 34,
    lineHeight: 38,
    fontWeight: "900",
    color: palette.white,
    marginBottom: 6,
  },
  
  // Eredmény nagy számokhoz (összegzés)
  bigStat: {
    fontSize: 24,
    fontWeight: "800",
    color: palette.white,
  },

  // ===== BUTTONS =====
  
  // Szöveges „link” gomb (Learn képernyőn Vissza/Kezdőoldal)
  linkBtn: {
    fontSize: 18,
    fontWeight: "800",
    color: palette.indigo,
  },
 explainBox: {
    backgroundColor: "#0b2e26",
    borderColor: "#134e4a",
    borderWidth: 2,
    borderRadius: 16,
    padding: 12,
    marginTop: 10,
  },
  
 
  // --- EREDMÉNY/MAGYARÁZAT DOBOZOK (ha hiányoznak) ---
  resultCardGood: {
    backgroundColor: "#0d1f14",
    borderColor: "#14532d",
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  resultCardBad: {
    backgroundColor: "#1f1414",
    borderColor: "#7f1d1d",
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  explainOkBox: {
    backgroundColor: "rgba(22,163,74,0.16)",
    borderLeftWidth: 6,
    borderLeftColor: "#22c55e",
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
  explainBadBox: {
    backgroundColor: "rgba(239,68,68,0.16)",
    borderLeftWidth: 6,
    borderLeftColor: "#ef4444",
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
  // Matek gombhoz külön szín (világoskék)
subBtnMath: {
  backgroundColor: "#3b82f6", // élénk kék
  borderRadius: 12,
  paddingVertical: 10,
  paddingHorizontal: 16,
  alignItems: "center",
  marginVertical: 4,
},
btnDisabled: {
  backgroundColor: "#444a58",
  borderColor: "#555b69",
  opacity: 0.6,
},

  /** Tananyag kártya (Learn képernyő) */
  learnContent: {
    backgroundColor: "#0b1220",
    padding: 12,
    borderRadius: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  learnLead: {
  color: "#9ca3af",
  fontSize: 14,
  lineHeight: 20,
},
input: {
  backgroundColor: "rgba(255,255,255,0.05)",
  borderColor: "rgba(255,255,255,0.2)",
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 12,
  paddingVertical: 8,
  color: "#fff",
  fontSize: 16,
},
// lib/styles.ts végére (export default előtt vagy a style objektum végére)
sectionTitle: {
  fontSize: 18,
  fontWeight: "700",
  color: "#93c5fd",       // világoskék, egységes a témával
  marginBottom: 4,
},
// a többi stílusod marad
iconBtn: {
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderRadius: 10,
},



});

export default styles;

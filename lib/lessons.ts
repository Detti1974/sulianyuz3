// lib/lessons.ts
// Központi aggregáló: minden tantárgy tananyagát egyetlen map-be gyűjti.
// A Learn képernyő ebből olvassa ki a lesson-t a kapott topicId alapján.

import { LESSONS as HIST_LESSONS } from "../app/tortenelem/lessons";
import { LESSONS as MATH_LESSONS } from "../lib/matek/lessons";

// ──────────────────────────────────────────────────────────────────────────────
// Egyesített lesson-tár: a kulcsoknak pontosan egyezniük kell a navigációban
// használt topicId-kkal (pl. "math_algebra", "math_linear", stb.)
// ──────────────────────────────────────────────────────────────────────────────
export const ALL_LESSONS: Record<string, any> = {
  ...HIST_LESSONS,
  ...MATH_LESSONS,
};

// ──────────────────────────────────────────────────────────────────────────────
// Matek témalisták (id + title), ha kényelmes menühöz / listázáshoz.
// A címeket a matek lessons-ből olvassuk ki, így nem kell duplán karbantartani.
// ──────────────────────────────────────────────────────────────────────────────
export const MATH_TOPICS: { id: string; title: string }[] = [
  { id: "math_algebra",       title: MATH_LESSONS?.math_algebra?.title       ?? "Algebrai kifejezések és azonosságok" },
  { id: "math_linear",        title: MATH_LESSONS?.math_linear?.title        ?? "Lineáris egyenletek és egyenlőtlenségek" },
  { id: "math_ratio_percent", title: MATH_LESSONS?.math_ratio_percent?.title ?? "Arányosság és százalékszámítás" },
  { id: "math_powers_roots",  title: MATH_LESSONS?.math_powers_roots?.title  ?? "Hatványozás és gyökvonás" },
  { id: "math_pythagoras",    title: MATH_LESSONS?.math_pythagoras?.title    ?? "Pitagorasz-tétel és távolság" },
  { id: "math_geometry_area", title: MATH_LESSONS?.math_geometry_area?.title ?? "Kerület és terület" },
  { id: "math_solids",        title: MATH_LESSONS?.math_solids?.title        ?? "Testek: felszín és térfogat" },
  { id: "math_stats_prob",    title: MATH_LESSONS?.math_stats_prob?.title    ?? "Statisztika és valószínűség" },
];

// (Ha jól jön kulcslista simán:)
export const MATH_TOPIC_IDS = MATH_TOPICS.map(t => t.id);

// ──────────────────────────────────────────────────────────────────────────────
// Opcionális aliasok (nem kötelező): emberbarát kulcsok a fő belépő fejezethez
// ──────────────────────────────────────────────────────────────────────────────
if (MATH_LESSONS["math_algebra"]) {
  ALL_LESSONS["matek"]   = MATH_LESSONS["math_algebra"];
  ALL_LESSONS["matek-8"] = MATH_LESSONS["math_algebra"];
}

// Ugyanez történelemre példa (csak ha van ilyen kulcs nálad):
if (HIST_LESSONS["ww1"]) {
  ALL_LESSONS["tori"]       = HIST_LESSONS["ww1"];
  ALL_LESSONS["tortenelem"] = HIST_LESSONS["ww1"];
}

// Kényelmi default export:
export default ALL_LESSONS;

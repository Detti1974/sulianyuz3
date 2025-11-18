// lib/angol/lessons.tsx
// Teljes, tiszta lessons – ID-k 1:1-ben egyeznek a bankkal

export type LessonBlock = { color: string; text: string };
export type LessonTopic = { title: string; blocks: LessonBlock[] };
export type Lessons = Record<string, LessonTopic>;

/**
 * Színkészlet (világos kártyák, sötét háttérhez jól olvasható)
 * nyugodtan variálhatod a későbbiekben.
 */
const C = {
  teal:   "#1de9b6",
  blue:   "#64b5f6",
  indigo: "#9fa8da",
  amber:  "#ffca28",
  orange: "#ff8a65",
  green:  "#81c784",
  lime:   "#dce775",
  pink:   "#f06292",
  purple: "#ba68c8",
  brown:  "#a1887f",
};

export const LESSONS: Lessons = {
  /* ===================== GRAMMAR ===================== */
  eng_grammar: {
    title: "Nyelvtan (Grammar)",
    blocks: [
      { color: C.teal, text: "Egyszerű jelen (Present Simple): szokások, menetrendek, általános igazságok. E/3-ban –s végződés: he works, she plays." },
      { color: C.blue, text: "Kérdés/Tagadás: do/does + V1 (Does she like…? / They don’t eat…). E/3-ban does, többesben do." },
      { color: C.indigo, text: "Időhatározók: always, usually, often, sometimes, never. A gyakorisági határozók az ige előtt állnak (She often reads.)." },

      { color: C.amber, text: "Egyszerű múlt (Past Simple): befejezett múltbeli esemény. Reguláris: -ed (play → played), rendhagyó: go → went." },
      { color: C.orange, text: "Kérdés/Tagadás múltban: did + V1 (Did you see…? / I didn’t see…). Figyelj: did után alapalak!" },
      { color: C.green, text: "Időjelek: yesterday, last week/year, in 2019, ago. Ezek erős jelzői a Past Simple-nek." },

      { color: C.lime, text: "Present Perfect: múltbeli tapasztalat, jelenre ható eredmény vagy tartam (for/since). Szerkezet: have/has + V3 (She has finished.)." },
      { color: C.pink, text: "Tipikus jelzők: already, just, yet, ever, never, recently. Tartamnál: for (időtartam), since (kezdőpont)." },
      { color: C.purple, text: "Időválasztás: ‘this week/month/year’ (még tart) → gyakran Present Perfect; pontos múltidő (yesterday, last…) → Past Simple." },
    ],
  },

  /* ===================== VOCABULARY ===================== */
  eng_vocabulary: {
    title: "Szókincs (Vocabulary)",
    blocks: [
      { color: C.blue, text: "Mindennapok (Everyday): napi rutin (get up, have breakfast, go to school), házimunka (do the dishes, clean the room), időtöltés." },
      { color: C.green, text: "Iskola (School): tantárgyak (subjects), eszközök (pencil, board), tevékenységek (hand in homework, take a test)." },
      { color: C.amber, text: "Utazás (Travel): közlekedés (flight, underground), szállás (book a room), menetrend (schedule), reptér (boarding pass)." },
      { color: C.brown, text: "Kollokációk: take a photo, have lunch, catch a flight, go sightseeing — ezek fix szókapcsolatok, érdemes memorizálni." },
    ],
  },

  /* ===================== IRREGULAR VERBS ===================== */
  eng_irregulars: {
    title: "Rendhagyó igék (Irregular Verbs)",
    blocks: [
      { color: C.teal, text: "Táblázat: 3 alak (V1–V2–V3). Pl.: go–went–gone, see–saw–seen, take–took–taken, do–did–done, have–had–had." },
      { color: C.purple, text: "Figyelj a hibás alakokra: ✗ goed, writed, drinked. A rendhagyó igéknél a múlt/v3 alak külön megtanulandó." },
      { color: C.orange, text: "Alkalmazás: mondatba illesztés. Past Simple → V2 (Yesterday I saw…), Present Perfect → have/has + V3 (I have seen…)." },
      { color: C.pink, text: "Kiejtés: read–read–read (írás ugyanaz, kiejtés múltban /red/). E/3 jelenben: says /sez/, does /dʌz/." },
    ],
  },

  /* ===================== READING ===================== */
  eng_reading: {
    title: "Szövegértés (Reading)",
    blocks: [
      { color: C.indigo, text: "Stratégiák: skimming (átfutás a fő gondolatért), scanning (célzott keresés kulcsszavakra)." },
      { color: C.green, text: "Feladattípusok: igaz/hamis, feleletválasztós, időpontok, helyszínek, következtetések. Mindig keresd a bizonyítékot a szövegben!" },
      { color: C.amber, text: "Jelzőszavak: however, because, therefore, although — logikai kapcsolatok. Fordítsd le magadban a kötőszavakat!" },
      { color: C.blue, text: "Nem kell minden szót ismerni: környezetből következtesd ki az ismeretlent (prefix/suffix, szinonimák a környezetben)." },
    ],
  },
};

export default LESSONS;

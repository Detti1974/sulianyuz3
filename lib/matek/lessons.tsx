import * as React from "react";
import { Text } from "react-native";
import Fraction from "../../components/Fraction";

/** Segéd a színes, félkövér kiemelésekhez */
const C = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <Text style={{ color, fontWeight: "700" }}>{children}</Text>
);

/** A Learn képernyő olyan adatra számít, ahol egy section.text elemei stringek VAGY React-elemek */
export type Lesson = {
  title: string;
  intro: string;
  sections: { title: string; text: (string | React.ReactNode)[] }[];
};

/** 8. évfolyam – fejezetek + alfejezetek */
export const LESSONS: Record<string, Lesson> = {
  /* ───────────────────────── 1. Algebrai kifejezések, azonosságok ───────────────────────── */
  math_algebra: {
    title: "Algebrai kifejezések és azonosságok",
    intro:
      "Változók, kifejezések rendezése, nevezetes azonosságok. Minden képlet alatt rövid, színes magyarázat.",
    sections: [
      {
        title: "1.1 Változók, tagok, rendezés",
        text: [
          "A változók (x, y, a, b…) számokat helyettesítenek. Azonos tagokat lehet összevonni.",
          "Példa (összevonás):",
          <C color="#90caf9">2x + 3x = 5x</C>,
          "Példa (rendezés, abc szerint):",
          <C color="#80cbc4">3ab − 2ba + a² = a² + ab</C>,
        ],
      },
      {
        title: "1.2 Nevezetes azonosságok",
        text: [
          <C color="#ffb74d">(a + b)² = a² + 2ab + b²</C>,
          <C color="#ffb74d">(a − b)² = a² − 2ab + b²</C>,
          <C color="#ffb74d">a² − b² = (a − b)(a + b)</C>,
          "Használat: gyors fejtés, egyszerűsítés, fejben számolás mintái.",
        ],
      },
      {
        title: "1.3 Zárójelek felbontása (disztributivitás)",
        text: [
          <C color="#aed581">a·(b + c) = a·b + a·c</C>,
          "Fordítva: közös tényező kiemelése.",
          <C color="#aed581">4x + 8 = 4(x + 2)</C>,
        ],
      },
    ],
  },

  /* ───────────────────────── 2. Lineáris egyenletek és egyenlőtlenségek ──────────────────── */
  math_linear: {
    title: "Lineáris egyenletek és egyenlőtlenségek",
    intro:
      "Egyismeretlenes elsőfokú egyenletek rendezése, törtes esettel és zárójellel. Egyenlőtlenség megoldása.",
    sections: [
      {
        title: "2.1 Alaplépések",
        text: [
          "Mindkét oldalon azonos művelet: egyenlőség megmarad.",
          "Példa:",
          <C color="#ce93d8">2x + 3 = 11</C>,
          <C color="#ce93d8">2x = 8</C>,
          <C color="#ce93d8">x = 4</C>,
        ],
      },
      {
        title: "2.2 Törtes egyenlet",
        text: [
          "Közös nevezőre hozás / nevező kiiktatása.",
          <C color="#ffcc80">
            <Text> </Text>
          </C>,
          <>
            <Fraction num={<Text> x </Text>} den={3} />, <Text> + </Text><Fraction num={<Text> 1 </Text>} den={6} />, <Text> = </Text><Fraction num={<Text> 5 </Text>} den={6} />,
          </>,
          <C color="#ffcc80">szorozzuk 6-tal ⇒ 2x + 1 = 5</C>,
          <C color="#ffcc80">2x = 4 ⇒ x = 2</C>,
        ],
      },
      {
        title: "2.3 Egyenlőtlenségek",
        text: [
          "Szabály: ha negatív számmal szorzunk/osztunk, a reláció iránya megfordul.",
          <C color="#81d4fa">−2x &gt; 6 ⇒ x &lt; −3</C>,
        ],
      },
    ],
  },

  /* ───────────────────────── 3. Egyenes arányosság, százalékszámítás ─────────────────────── */
  math_ratio_percent: {
    title: "Arányosság és százalékszámítás",
    intro:
      "Fordított és egyenes arányosság, aránypár, százalék, százalékpont, növekedés–csökkenés.",
    sections: [
      {
        title: "3.1 Egyenes arányosság",
        text: [
          "y egyenesen arányos x-szel: y = k·x",
          "Táblázatos példa k = 3 esetén:",
          <C color="#4db6ac">x: 1, 2, 3, 4  →  y: 3, 6, 9, 12</C>,
        ],
      },
      {
        title: "3.2 Fordított arányosság",
        text: [
          "y fordítottan arányos x-szel: y = k / x",
          <>
            <Text> y = </Text>
            <Fraction num={<Text> 12 </Text>} den={<Text> x </Text>} />
          </>,
        ],
      },
      {
        title: "3.3 Százalék alapok",
        text: [
          "p% = p/100 része az egésznek.",
          <>
            <Text> 25% = </Text>
            <Fraction num={<Text> 25 </Text>} den={<Text> 100 </Text>} />, <Text> = </Text>, <Fraction num={<Text> 1 </Text>} den={<Text> 4 </Text>} />
          </>,
          "Növekedés 10%-kal: új = régi · 1,10  |  Csökkenés 10%-kal: új = régi · 0,90",
        ],
      },
    ],
  },

  /* ───────────────────────── 4. Hatványozás, gyökvonás ───────────────────────────────────── */
  math_powers_roots: {
    title: "Hatványozás és gyökvonás",
    intro:
      "Egész kitevős hatványok szabályai; négyzetgyök kezelése; egyszerűsítés, tudományos jelölés.",
    sections: [
      {
        title: "4.1 Hatványozási azonosságok",
        text: [
          <C color="#ffab91">a^m · a^n = a^(m+n)</C>,
          <C color="#ffab91">a^m : a^n = a^(m−n)  (a ≠ 0)</C>,
          <C color="#ffab91">(a^m)^n = a^(m·n)</C>,
          <C color="#ffab91">(ab)^n = a^n · b^n</C>,
        ],
      },
      {
        title: "4.2 Négyzetgyök",
        text: [
          "√a · √b = √(ab)  (a,b ≥ 0)",
          "Többjegyű példa: √50 = √(25·2) = 5√2",
        ],
      },
      {
        title: "4.3 Tudományos jelölés",
        text: [
          "Nagy számok: 3,6 · 10^8  |  Kis számok: 7,2 · 10^−5",
        ],
      },
    ],
  },

  /* ───────────────────────── 5. Pitagorasz és távolság ───────────────────────────────────── */
  math_pythagoras: {
    title: "Pitagorasz-tétel és távolság",
    intro:
      "Derékszögű háromszögben: c² = a² + b². Alkalmazás négyzetrácson és koordinátasíkon.",
    sections: [
      {
        title: "5.1 Alaptétel",
        text: [
          <C color="#a5d6a7">c² = a² + b²</C>,
          "Ha a = 3, b = 4 ⇒ c = 5 (klasszikus 3-4-5 háromszög).",
        ],
      },
      {
        title: "5.2 Távolság képlete (x₁,y₁)–(x₂,y₂)",
        text: [
          <C color="#90caf9">d = √((x₂ − x₁)² + (y₂ − y₁)²)</C>,
        ],
      },
    ],
  },

  /* ───────────────────────── 6. Síkidomok kerülete, területe ─────────────────────────────── */
  math_geometry_area: {
    title: "Kerület és terület",
    intro:
      "Alapképletek és mértékegységek. Minden képlet külön sorban, gyors ellenőrzéshez.",
    sections: [
      {
        title: "6.1 Háromszög, téglalap, paralelogramma",
        text: [
          <C color="#ffd54f">Kₜₑ́g = 2(a + b)</C>,
          <C color="#ffd54f">Tₜₑ́g = a · b</C>,
          <C color="#ffd54f">Tₕₐ́r = (a · mₐ) / 2</C>,
          <C color="#ffd54f">Tₚₐᵣ = a · mₐ</C>,
        ],
      },
      {
        title: "6.2 Trapéz, deltoid, kör",
        text: [
          <>
            <Text> Tₜᵣₐₚ = </Text>
            <Fraction num={<Text>(a + c) · m</Text>} den={<Text>2</Text>} />
          </>,
          <C color="#4dd0e1">T_d = (e · f) / 2</C>,
          <C color="#4dd0e1">K_kör = 2πr  |  T_kör = πr²</C>,
        ],
      },
    ],
  },

  /* ───────────────────────── 7. Testek felszíne és térfogata ─────────────────────────────── */
  math_solids: {
    title: "Testek: felszín és térfogat",
    intro: "Hasáb, henger, gúla, kúp és gömb képletei rövid példákkal.",
    sections: [
      {
        title: "7.1 Hasáb, henger",
        text: [
          <C color="#bcaaa4">Vₕₐₛₐᵦ = A_alap · m</C>,
          <C color="#bcaaa4">Fₕₐₛₐᵦ = 2·A_alap + K_alap · m</C>,
          <C color="#bcaaa4">Vₕy = πr²h</C>,
          <C color="#bcaaa4">Fₕy = 2πr(r + h)</C>,
        ],
      },
      {
        title: "7.2 Gúla, kúp, gömb",
        text: [
          <>
            <Text> V_gúla = </Text>
            <Fraction num={<Text>A_alap · m</Text>} den={<Text>3</Text>} />
          </>,
          <>
            <Text> V_kúp = </Text>
            <Fraction num={<Text>πr²h</Text>} den={<Text>3</Text>} />
          </>,
          <C color="#bcaaa4">F_kúp = πr(r + ℓ)</C>,
          <C color="#bcaaa4">V_gömb = (4/3)πr³  |  F_gömb = 4πr²</C>,
        ],
      },
    ],
  },

  /* ───────────────────────── 8. Statisztika és valószínűség ──────────────────────────────── */
  math_stats_prob: {
    title: "Statisztika és valószínűség",
    intro:
      "Átlag, módusz, medián; egyszerű események valószínűsége; kombinatorika alapok.",
    sections: [
      {
        title: "8.1 Középértékek",
        text: [
          <>
            <Text> Számtani átlag (</Text>
            <C color="#81c784">x̄</C>
            <Text>): </Text>
            <Fraction num={<Text>x₁ + x₂ + … + xₙ</Text>} den={<Text>n</Text>} />
          </>,
          "Módusz: a leggyakoribb érték.  Medián: középső elem (rendezve).",
        ],
      },
      {
        title: "8.2 Valószínűség",
        text: [
          <>
            <Text> P(E) = </Text>
            <Fraction num={<Text>kedvező esetek</Text>} den={<Text>összes eset</Text>} />
          </>,
          "Kockadobásnál P(páros) = 3/6 = 1/2.",
        ],
      },
    ],
  },
};

export default LESSONS;

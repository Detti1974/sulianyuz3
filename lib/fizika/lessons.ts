// lib/fizika/lessons.ts
// Fizika 8. osztály – részletes, színes tananyag, bank.ts ID-kkel egyezően

export type ContentBlock =
  | { type: "text"; text: string }
  | { type: "list"; items: string[] }
  | { type: "example"; text: string }
  | { type: "tip"; text: string };

export type LessonSection = {
  id: string;
  title: string;
  color?: string;
  content: ContentBlock[];
};

const LESSONS: Record<
  string,
  { title: string; color?: string; sections: LessonSection[] }
> = {
  /* ───────────────────────────────
   * Rezgő- és hullámmozgás
   * ─────────────────────────────── */
  fizika_8_rezgo_hullam: {
    title: "Rezgő- és hullámmozgás",
    color: "#60a5fa",
    sections: [
      {
        id: "rezgomozgas_alapok",
        title: "Rezgések alapfogalmai",
        color: "#38bdf8",
        content: [
          {
            type: "text",
            text:
              "A rezgőmozgás olyan periodikus mozgás, amely egyensúlyi helyzet körül ismétlődik.",
          },
          {
            type: "list",
            items: [
              "Kitérés (x): a pillanatnyi eltérés az egyensúlyi helyzettől.",
              "Amplitúdó (A): a legnagyobb kitérés.",
              "Periódusidő (T): egy teljes rezgés ideje.",
              "Frekvencia (f): 1 másodperc alatt végzett rezgések száma, f = 1/T.",
            ],
          },
          { type: "example", text: "Rugóra függesztett test, inga, hangvilla." },
          {
            type: "tip",
            text: "A frekvencia mértékegysége a hertz (Hz): 1 Hz = 1/s.",
          },
        ],
      },
      {
        id: "hullamok_alapok",
        title: "Hullámok – alapok",
        color: "#0ea5e9",
        content: [
          {
            type: "text",
            text:
              "A hullám egy rezgésállapot tovaterjedése térben és időben, közeg segítségével.",
          },
          {
            type: "list",
            items: [
              "Transzverzális hullám: a rezgés iránya merőleges a terjedésre.",
              "Longitudinális hullám: a rezgés iránya párhuzamos a terjedésével.",
              "Hullámhossz (λ): két azonos fázisban lévő pont távolsága.",
              "Sebesség: v = λ·f (m/s).",
            ],
          },
          {
            type: "example",
            text: "Vízfelszín hullámai, hanghullámok a levegőben, húr rezgése.",
          },
          {
            type: "tip",
            text:
              "Ugyanabban a közegben a hullámsebesség állandó: ha nő a frekvencia, csökken a hullámhossz.",
          },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * Hangtan
   * ─────────────────────────────── */
  fizika_8_hangtan: {
    title: "Hangtan",
    color: "#34d399",
    sections: [
      {
        id: "hang_tulajdonsagok",
        title: "A hang jellemzői",
        color: "#10b981",
        content: [
          {
            type: "text",
            text:
              "A hang mechanikai longitudinális hullám, amely rugalmas közegben (pl. levegőben) terjed.",
          },
          {
            type: "list",
            items: [
              "Hangforrás: rezgő test.",
              "Sebessége levegőben kb. 340 m/s (20 °C-on).",
              "Hangmagasság a frekvenciától függ (f ↑ → magasabb hang).",
              "Hangosság az amplitúdótól függ (A ↑ → hangosabb).",
              "Hangszín a felhangoktól függ – ezért különbözik a zongora és a gitár hangja.",
            ],
          },
          {
            type: "example",
            text: "A hangvilla mélyebb hangot ad, mint a kisebb, gyorsabban rezgő hangvilla.",
          },
          { type: "tip", text: "A vákuum nem vezeti a hangot, mert nincs közeg!" },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * Fénytan (Optika)
   * ─────────────────────────────── */
  fizika_8_fenytan: {
    title: "Fénytan (Optika)",
    color: "#fde68a",
    sections: [
      {
        id: "feny_visszaverodes_tores",
        title: "Visszaverődés és törés",
        color: "#fbbf24",
        content: [
          {
            type: "text",
            text:
              "A fény egyenes vonalban terjed, de irányt változtat, ha két különböző közeg határára ér.",
          },
          {
            type: "list",
            items: [
              "Visszaverődés: beesési szög = visszaverődési szög.",
              "Fénytörés: a fény sűrűbb közegbe lépve a merőleges felé hajlik.",
              "Teljes visszaverődés: ha a törés szöge nem értelmezhető (optikai szál).",
            ],
          },
          { type: "example", text: "Tükörkép, kanálban fordított tükörkép, prizma." },
          {
            type: "tip",
            text: "A törésmutató (n) megmutatja, hányszor lassul le a fény adott közegben.",
          },
        ],
      },
      {
        id: "lencsek_kepkepzes",
        title: "Lencsék és képképzés",
        color: "#f59e0b",
        content: [
          {
            type: "list",
            items: [
              "Domború (gyűjtő) lencse: valós, fordított képet alkot.",
              "Homorú (szóró) lencse: látszólagos, kicsinyített képet alkot.",
              "Fókuszpont: az a pont, ahol a párhuzamos sugarak metszik egymást.",
            ],
          },
          {
            type: "example",
            text: "Nagyító, mikroszkóp, távcső, fényképezőgép lencserendszere.",
          },
          { type: "tip", text: "A szem domború lencséje a retina síkjára fókuszálja a képet." },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * Elektromosság
   * ─────────────────────────────── */
  fizika_8_elektromossag: {
    title: "Egyenáram, elektromosságtan",
    color: "#c7d2fe",
    sections: [
      {
        id: "elektrosztatika_alapok",
        title: "Elektrosztatika – alapok",
        color: "#8b5cf6",
        content: [
          {
            type: "text",
            text:
              "Az elektromos töltés pozitív vagy negatív lehet; azonos töltések taszítják, ellentétesek vonzzák egymást.",
          },
          {
            type: "list",
            items: [
              "Coulomb-törvény: F = k·(Q₁·Q₂)/r².",
              "Vezetőben a töltések szabadon mozoghatnak, szigetelőben nem.",
              "Térerősség: E = F/q.",
            ],
          },
          { type: "example", text: "Műanyag rúd megdörzsölése – elektrosztatikus vonzás." },
        ],
      },
      {
        id: "ohm_torveny_aramkor",
        title: "Ohm törvénye és egyszerű áramkörök",
        color: "#7c3aed",
        content: [
          {
            type: "list",
            items: [
              "Ohm törvénye: U = R·I.",
              "Áramerősség (I): a töltésáramlás mértéke (A).",
              "Feszültség (U): a két pont közti potenciálkülönbség (V).",
              "Ellenállás (R): az áram útjának „akadálya” (Ω).",
            ],
          },
          {
            type: "example",
            text: "Egy 6 V-os izzón 0,3 A folyik → R = 20 Ω.",
          },
          { type: "tip", text: "Voltmérőt párhuzamosan, ampermérőt sorosan kötünk." },
        ],
      },
      {
        id: "aramkorok_meres",
        title: "Áramkörök, mérések",
        color: "#6d28d9",
        content: [
          {
            type: "text",
            text:
              "A mérésekhez zárt áramkör szükséges: áramforrás, vezeték, fogyasztó, mérőműszer.",
          },
          {
            type: "list",
            items: [
              "Soros kapcsolás: az áramerősség minden elemben azonos.",
              "Párhuzamos kapcsolás: a feszültség azonos, az áram megoszlik.",
            ],
          },
          { type: "example", text: "Ellenállások soros és párhuzamos hálózata." },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * Energia
   * ─────────────────────────────── */
  fizika_8_energia: {
    title: "Energia, munka, teljesítmény",
    color: "#fda4af",
    sections: [
      {
        id: "munka_teljesitmeny",
        title: "Munka, energiafajták, teljesítmény",
        color: "#fb7185",
        content: [
          {
            type: "list",
            items: [
              "Munka: W = F·s (ha F párhuzamos a mozgással).",
              "Energiafajták: mozgási, helyzeti, rugalmas, hő, elektromos.",
              "Teljesítmény: P = W/t.",
            ],
          },
          {
            type: "example",
            text: "100 N erővel 2 m-t emelünk: W = 200 J.",
          },
          { type: "tip", text: "A hatásfok: η = (hasznos / összes) × 100%." },
        ],
      },
      {
        id: "energia_takarekossag",
        title: "Energiatakarékosság és biztonság",
        color: "#f43f5e",
        content: [
          {
            type: "text",
            text:
              "Az energiamegmaradás törvénye szerint az energia nem vész el, csak átalakul.",
          },
          {
            type: "list",
            items: [
              "Fogyassz kevesebb elektromos energiát: LED, szigetelés.",
              "Kikapcsolt állapotban is van fogyasztás (standby).",
              "Megújuló energiaforrások: nap, szél, víz, geotermikus.",
            ],
          },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * Mágnesesség
   * ─────────────────────────────── */
  fizika_8_magnesesseg: {
    title: "Mágnesség és elektromágnesesség",
    color: "#7dd3fc",
    sections: [
      {
        id: "magneses_jelensegek",
        title: "Mágneses jelenségek",
        color: "#0ea5e9",
        content: [
          {
            type: "list",
            items: [
              "A mágnes két pólusa: északi (N) és déli (S).",
              "Azonos pólusok taszítják, ellentétesek vonzzák egymást.",
              "A Föld is hatalmas mágnes – mágneses északi pólusa délen van.",
            ],
          },
          { type: "example", text: "Iránytű a mágneses térben beáll az erővonalak mentén." },
        ],
      },
      {
        id: "elektromagneses_indukcio",
        title: "Elektromágneses indukció – alapok",
        color: "#06b6d4",
        content: [
          {
            type: "text",
            text:
              "Változó mágneses mező elektromos áramot indukál vezetőben (Faraday-törvény).",
          },
          {
            type: "list",
            items: [
              "Generátorok: mechanikai → elektromos energia.",
              "Transzformátor: feszültség növelése vagy csökkentése.",
              "Lenz-törvény: az indukált áram iránya gátolja a változást.",
            ],
          },
          { type: "tip", text: "Az elektromágnes erőssége nő a menetszám vagy az áram növelésével." },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * Hőtan
   * ─────────────────────────────── */
  fizika_8_hotan: {
    title: "Hőtan és halmazállapot-változások",
    color: "#f87171",
    sections: [
      {
        id: "homerseklet_hotagulas",
        title: "Hőmérséklet, hőtágulás, hőterjedés",
        color: "#f43f5e",
        content: [
          {
            type: "list",
            items: [
              "A hőmérséklet a részecskék mozgási energiáját fejezi ki.",
              "Hőtágulás: melegedéskor a testek térfogata nő.",
              "Hőterjedés módjai: vezetés, áramlás, sugárzás.",
            ],
          },
          {
            type: "example",
            text: "A vas sínek között hézag van a hőtágulás miatt.",
          },
          { type: "tip", text: "A fekete test jobban elnyeli és kisugározza a hőt." },
        ],
      },
      {
        id: "halmazallapot_valtozasok",
        title: "Halmazállapot-változások",
        color: "#e11d48",
        content: [
          {
            type: "list",
            items: [
              "Olvadás ↔ fagyás, párolgás ↔ lecsapódás, szublimáció.",
              "Olvadáspont, forráspont anyagi minőségre jellemző.",
              "Forráskor az egész folyadékban gőz képződik.",
            ],
          },
          {
            type: "example",
            text: "A víz 100 °C-on forr, jég 0 °C-on olvad – normál légnyomáson.",
          },
          { type: "tip", text: "A forráspont nő, ha nő a nyomás (pl. kukta)." },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * ÚJ: Nyomás és felhajtóerő
   * ─────────────────────────────── */
  fizika_8_nyomas: {
    title: "Nyomás és felhajtóerő",
    color: "#93c5fd",
    sections: [
      {
        id: "nyomas_alapok",
        title: "Nyomás – alapfogalmak",
        color: "#60a5fa",
        content: [
          {
            type: "text",
            text:
              "A nyomás (p) az erő felületre jutó része: p = F/A. Mértékegysége: pascal (Pa) = N/m².",
          },
          {
            type: "list",
            items: [
              "Ha ugyanazt az erőt kisebb felületre fejtjük ki → nagyobb a nyomás.",
              "Statikus nyomás: nyugalomban lévő közeg okozza.",
              "Légnyomás: a levegő súlya miatt alakul ki (kb. 101 325 Pa a tengerszinten).",
            ],
          },
          {
            type: "example",
            text:
              "Szög sarka jobban nyom, mint az oldala; hótalp csökkenti a hóba süllyedést.",
          },
          { type: "tip", text: "1 bar ≈ 100 kPa; 1 atm ≈ 101,3 kPa." },
        ],
      },
      {
        id: "folyadek_nyomas",
        title: "Folyadékok és gázok nyomása",
        color: "#7dd3fc",
        content: [
          {
            type: "list",
            items: [
              "Folyadékok hidrosztatikai nyomása: p = ρ·g·h (mélységgel nő).",
              "A nyomás minden irányban terjed a folyadékokban (Pascal-elv).",
              "Gázoknál a nyomás az ütköző részecskékből származik; melegítésre nő.",
            ],
          },
          {
            type: "example",
            text:
              "Hidraulikus emelő működése (kis erő nagyobbat hoz létre nagy felületen).",
          },
          { type: "tip", text: "A búvár fülére ható nyomás a mélységgel nő." },
        ],
      },
      {
        id: "felhajtoero",
        title: "Felhajtóerő – Arkhimédész törvénye",
        color: "#a5b4fc",
        content: [
          {
            type: "text",
            text:
              "Arkhimédész törvénye: a folyadékba merülő testre felhajtóerő hat, nagysága megegyezik a kiszorított folyadék súlyával.",
          },
          {
            type: "list",
            items: [
              "F = ρ_folyadék · g · V_kiszorított.",
              "Ha F_felhajtóerő > G (súly), a test úszik; ha kisebb, elsüllyed.",
              "Sűrűség összehasonlításával eldönthető az úszás/süllyedés.",
            ],
          },
          {
            type: "example",
            text:
              "A hajó acélból készül, mégis úszik – mert nagy térfogatú vizet szorít ki, így a felhajtóerő nagy.",
          },
          { type: "tip", text: "Sós víz sűrűbb → nagyobb felhajtóerő, könnyebb benne lebegni." },
        ],
      },
    ],
  },
};

export default LESSONS;

// lib/kemia/lessons.ts
// 8. osztályos KÉMIA — részletes, színes tananyag
// Teljesen kompatibilis a bank.ts azonosítóival

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
   * I. ANYAGOK, KEVERÉKEK ÉS OLDATOK
   * ─────────────────────────────── */
  kemia_8_anyag_es_keverekek: {
    title: "Anyagok, keverékek és oldatok",
    color: "#60a5fa",
    sections: [
      {
        id: "anyag_halmazallapot",
        title: "Anyagok tulajdonságai és halmazállapotok",
        color: "#60a5fa",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** Az anyagokat parányi részecskék (atomok, molekulák, ionok) alkotják. "
              + "Ezek mozgása és rendezettsége határozza meg a halmazállapotot.",
          },
          {
            type: "text",
            text:
              "🌡️ **Részletes magyarázat:**\n"
              + "A szilárd anyagokban a részecskék szabályos rendben rezegnek fix helyük körül. "
              + "A folyadékokban a részecskék közel vannak egymáshoz, de elgördülhetnek egymáson, ezért alakjuk változik, térfogatuk állandó. "
              + "A gázokban a részecskék messze vannak egymástól, szabadon, gyorsan mozognak — összenyomhatók és kitöltik a rendelkezésre álló teret.",
          },
          {
            type: "list",
            items: [
              "Szilárd: rendezett szerkezet, saját alak, saját térfogat.",
              "Folyadék: felveszi az edény alakját, de térfogata állandó.",
              "Gáz: nincs saját alakja, sem térfogata.",
            ],
          },
          {
            type: "example",
            text:
              "❄️ A jég, a víz és a vízgőz ugyanaz az anyag, csak más halmazállapotban. "
              + "A melegítés növeli a részecskék mozgási energiáját.",
          },
          {
            type: "tip",
            text:
              "💡 Gondolj a párolgásra: amikor elpárolog a víz, a gyorsabb részecskék lépnek ki először!",
          },
        ],
      },
      {
        id: "keverekek_szetevalasztasa",
        title: "Keverékek szétválasztása",
        color: "#38bdf8",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** A keverék többféle anyagból áll, melyek fizikai módszerekkel szétválaszthatók.",
          },
          {
            type: "text",
            text:
              "⚗️ **Részletes magyarázat:**\n"
              + "A keverékek lehetnek homogének (mindenütt azonos összetételűek, pl. cukros víz) vagy heterogének (pl. olaj és víz). "
              + "A szétválasztás módja az anyagok tulajdonságaitól függ: szemcseméret, sűrűség, forráspont stb.",
          },
          {
            type: "list",
            items: [
              "Szűrés – folyadék és szilárd részecskék elválasztása (pl. homok–víz).",
              "Ülepítés – a nehezebb szemcsék leülepednek.",
              "Desztilláció – forráspont alapján választunk szét (pl. alkohol-víz).",
              "Kromatográfia – oldékonyság és tapadás alapján választunk el (pl. tintaszínek).",
            ],
          },
          {
            type: "example",
            text:
              "🏭 A desztillációt a kőolaj feldolgozásánál is használják: külön választják a benzin, gázolaj, kenőolaj frakciókat.",
          },
          {
            type: "tip",
            text:
              "💡 A legtisztább vizet desztillációval nyerhetjük, de az ivóvíznek szüksége van ásványi anyagokra is.",
          },
        ],
      },
      {
        id: "oldatok_koncentracio",
        title: "Oldatok és koncentráció",
        color: "#f59e0b",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** Az oldat oldószerből és oldott anyagból áll. "
              + "Az oldhatóságot hőmérséklet és anyagi minőség befolyásolja.",
          },
          {
            type: "text",
            text:
              "🧪 **Részletes magyarázat:**\n"
              + "Az oldás során az oldószer molekulái körülveszik az oldott anyag részecskéit, és széthúzzák őket. "
              + "Ha az oldószer már nem képes több anyagot feloldani, az oldat telített. "
              + "A koncentráció megmutatja, mennyi anyag van adott mennyiségű oldatban.",
          },
          {
            type: "list",
            items: [
              "Tömegszázalék: (m oldott anyag / m oldat) × 100%.",
              "Telített oldat: már nem old további anyagot.",
              "Híg oldat: kevés oldott anyag az oldószerhez képest.",
            ],
          },
          {
            type: "example",
            text:
              "🍵 Meleg vízben több cukor oldódik, mint hidegben — a hőmérséklet növeli az oldhatóságot.",
          },
          {
            type: "tip",
            text:
              "💡 Ha forró italba teszel cukrot, előbb oldódik fel, mint hidegbe. Ezért gyorsabb a reakció meleg közegben.",
          },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * II. KÉMIAI REAKCIÓK
   * ─────────────────────────────── */
  kemia_8_kemiai_reakciok: {
    title: "Kémiai reakciók",
    color: "#ef4444",
    sections: [
      {
        id: "kemiai_reakciok_alap",
        title: "Kémiai reakciók alapjai",
        color: "#ef4444",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** A kémiai reakciók során új anyagok keletkeznek, miközben az atomok újrarendeződnek.",
          },
          {
            type: "text",
            text:
              "⚙️ **Részletes magyarázat:**\n"
              + "A reakciókban az atomok nem tűnnek el és nem keletkeznek, csak más kapcsolatokban jelennek meg. "
              + "Ezt fejezi ki a **kémiai egyenlet**, amely mutatja, mely anyagok (reaktánsok) alakulnak át termékekké. "
              + "A tömegmegmaradás törvénye szerint az össztömeg a reakció előtt és után megegyezik.",
          },
          {
            type: "list",
            items: [
              "Egyesülés: két vagy több anyagból egy új keletkezik (pl. H₂ + Cl₂ → 2HCl).",
              "Bontás: egy anyag két vagy több részre bomlik (pl. 2H₂O → 2H₂ + O₂).",
              "Cserebomlás: anyagok részei helyet cserélnek (pl. NaOH + HCl → NaCl + H₂O).",
              "Égés: exoterm reakció oxigén jelenlétében, hő- és fénykibocsátással.",
            ],
          },
          {
            type: "example",
            text:
              "🔥 2H₂ + O₂ → 2H₂O\nA hidrogén égésekor víz keletkezik — ez egyesülés, és hő fejlődik.",
          },
          {
            type: "tip",
            text:
              "💡 Az egyenleteket mindig **egyensúlyozni** kell, hogy az atomok száma mindkét oldalon egyezzen!",
          },
        ],
      },
    ],
  },
    /* ───────────────────────────────
   * III. ATOM ÉS PERIÓDUSOS RENDSZER
   * ─────────────────────────────── */
  kemia_8_atom_periodus: {
    title: "Atom és periódusos rendszer",
    color: "#a78bfa",
    sections: [
      {
        id: "atom_periodusos",
        title: "Az atom felépítése és a periódusos rendszer",
        color: "#a78bfa",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** Az atom a kémiai elemek legkisebb egysége, amely kémiai reakcióban tovább nem bontható.",
          },
          {
            type: "text",
            text:
              "⚛️ **Részletes magyarázat:**\n"
              + "Az atom középpontjában található az **atommag**, benne a pozitív töltésű protonok és a semleges neutronok. "
              + "A negatív töltésű elektronok az elektronhéjakon keringenek körülötte. "
              + "A protonok száma azonos az elektronok számával, így az atom semleges.",
          },
          {
            type: "list",
            items: [
              "Rendszám = protonok száma = elektronok száma.",
              "Tömegszám = protonok + neutronok száma.",
              "A periódusos rendszer elemei rendszám szerint vannak sorba rendezve.",
              "A csoport száma megmutatja, hány elektron van a külső héjon.",
            ],
          },
          {
            type: "example",
            text:
              "💡 Példa: A nátrium (Na) rendszáma 11 → 11 proton, 11 elektron; "
              + "1 elektron van a külső héján, ezért nagyon reakcióképes.",
          },
          {
            type: "tip",
            text:
              "🔮 A nemesgázok (pl. neon, argon) már stabil elektronhéj-szerkezetűek, ezért nem lépnek reakcióba.",
          },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * IV. KÖTÉSEK ÉS ANYAGOK
   * ─────────────────────────────── */
  kemia_8_kotesek: {
    title: "Kötések és anyagok",
    color: "#22c55e",
    sections: [
      {
        id: "kotesek_anyagok",
        title: "Kötések és anyagok",
        color: "#22c55e",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** A kötés az atomokat összetartó erő. "
              + "Ez határozza meg az anyag tulajdonságait, olvadáspontját és halmazszerkezetét.",
          },
          {
            type: "text",
            text:
              "⚗️ **Részletes magyarázat:**\n"
              + "1️⃣ **Kovalens kötés:** amikor két atom elektronpárokat oszt meg egymással. "
              + "Ilyen a víz (H₂O) vagy az oxigén (O₂) molekula.\n"
              + "2️⃣ **Ionos kötés:** ha az egyik atom elektront ad le, a másik pedig felvesz. "
              + "Az ellentétes töltésű ionok vonzása tartja össze őket (pl. NaCl – konyhasó).\n"
              + "3️⃣ **Fémes kötés:** a fématomok elektronjai szabadon mozognak a rácsban – ezért vezetik jól az áramot.",
          },
          {
            type: "list",
            items: [
              "Kovalens: nemfém + nemfém.",
              "Ionos: fém + nemfém.",
              "Fémes: fém + fém.",
            ],
          },
          {
            type: "example",
            text:
              "🔧 Példa: a réz (Cu) jó vezető, mert benne az elektronok könnyen elmozdulnak; "
              + "a víz viszont nem vezet, mert molekulás anyag.",
          },
          {
            type: "tip",
            text:
              "💡 A kötés típusa meghatározza az anyag viselkedését: az ionos vegyületek kristályosak, a fémek hajlíthatók, a molekulás anyagok párolgékonyak.",
          },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * V. SAVAK, BÁZISOK ÉS SÓK
   * ─────────────────────────────── */
  kemia_8_savbazis_sok: {
    title: "Savak, bázisok és sók",
    color: "#14b8a6",
    sections: [
      {
        id: "savbazis_sok_alap",
        title: "Savak, bázisok és sók – alapok",
        color: "#14b8a6",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** A savas és lúgos oldatok mindennapjaink részei. "
              + "A pH érték mutatja, mennyire savas vagy lúgos egy anyag.",
          },
          {
            type: "text",
            text:
              "🧪 **Részletes magyarázat:**\n"
              + "A **savak** vizes oldatban **hidrogéniont (H⁺)** adnak le (pl. sósav – HCl). "
              + "A **bázisok** (lúgok) **hidroxidiont (OH⁻)** adnak le (pl. NaOH). "
              + "A két oldat reakciója **semlegesítés**, melynek során **só és víz** keletkezik.",
          },
          {
            type: "list",
            items: [
              "pH-skála: 0–14 között, 7 a semleges pont.",
              "Savak pH-ja < 7 (citromlé, ecet).",
              "Bázisok pH-ja > 7 (szappan, mosószóda).",
              "Semleges oldat pH = 7 (tiszta víz).",
            ],
          },
          {
            type: "example",
            text:
              "⚖️ Példa: HCl + NaOH → NaCl + H₂O. "
              + "A sósav és a nátrium-hidroxid semlegesítésével sóoldat és víz keletkezik.",
          },
          {
            type: "tip",
            text:
              "💡 Mindig öntsd a savat a vízhez, soha fordítva – így elkerülöd a fröccsenést!",
          },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * VI. KÖRNYEZETI KÉMIA ÉS ENERGIATAKARÉKOSSÁG
   * ─────────────────────────────── */
  kemia_8_kornyezeti_kemia: {
    title: "Környezeti kémia és energiatakarékosság",
    color: "#eab308",
    sections: [
      {
        id: "kornyezeti_kemia_alapok",
        title: "Környezeti kémia – alapok",
        color: "#eab308",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** A kémia segít megérteni a környezetünkben zajló folyamatokat és azok hatását az élővilágra.",
          },
          {
            type: "text",
            text:
              "🌍 **Részletes magyarázat:**\n"
              + "A vegyszerek helytelen felhasználása és az ipari szennyezés károsíthatja a levegőt, vizeket és talajt. "
              + "A fenntartható fejlődés célja, hogy a természeti erőforrásokat úgy használjuk, hogy azok a jövő generációk számára is elérhetőek maradjanak.",
          },
          {
            type: "list",
            items: [
              "Szelektív hulladékgyűjtés és újrahasznosítás.",
              "Veszélyes anyagok (akkumulátor, festék) elkülönített kezelése.",
              "Energiatakarékos izzók, víztakarékos csapok, megújuló energia.",
            ],
          },
          {
            type: "tip",
            text:
              "💡 Egy kis odafigyeléssel is sokat tehetsz: húzd ki a töltőt, ha már feltöltötted a telefont!",
          },
        ],
      },
      {
        id: "kornyezeti_kemia_viz_levego",
        title: "Víz, levegő és hulladék",
        color: "#38bdf8",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** A levegő és a víz a Föld életének alapja. "
              + "Ezek tisztaságának megőrzése mindenki felelőssége.",
          },
          {
            type: "text",
            text:
              "🌫️ **Részletes magyarázat:**\n"
              + "A kén-dioxid (SO₂) és nitrogén-oxidok (NOₓ) a levegőben vízzel reagálva savakat képeznek. "
              + "Ez a **savas eső**, ami károsítja az erdőket és az épületeket. "
              + "A vízszennyezés fő forrásai a vegyszerek, olaj és műanyag hulladék.",
          },
          {
            type: "list",
            items: [
              "Levegőtisztaság-védelem: szűrők, katalizátorok használata.",
              "Vízszennyezés megelőzése: ne önts olajat a lefolyóba!",
              "Hulladék: csökkentés, újrahasznosítás, szelektív gyűjtés.",
            ],
          },
          {
            type: "tip",
            text:
              "💧 Egy csepegő csap évente akár 1000 liter vizet is pazarolhat – zárd el rendesen!",
          },
        ],
      },
    ],
  },

  /* ───────────────────────────────
   * VII. LABORBIZTONSÁG
   * ─────────────────────────────── */
  kemia_8_laborbiztonsag: {
    title: "Laborbiztonság és piktogramok",
    color: "#94a3b8",
    sections: [
      {
        id: "laborbiztonsag_piktogramok",
        title: "Laborbiztonság és veszélyjelzések",
        color: "#94a3b8",
        content: [
          {
            type: "text",
            text:
              "🧩 **Összefoglaló:** A kémiai kísérletek csak biztonságos körülmények között végezhetők!",
          },
          {
            type: "text",
            text:
              "⚠️ **Részletes magyarázat:**\n"
              + "A laborban mindig viselj védőszemüveget, köpenyt és zárt cipőt. "
              + "Ne szagolj közvetlenül a kémcsőbe, és ne kóstold meg a vegyszert! "
              + "Tudd, mit jelentenek a piktogramok: mérgező ☠️, maró 🧴, gyúlékony 🔥, robbanásveszélyes 💥.",
          },
          {
            type: "list",
            items: [
              "Baleset esetén azonnal szólj a tanárnak.",
              "Égési sérülésre hideg vizet kell folyatni.",
              "Tilos futni vagy lökdösődni a laborban.",
              "Mindig mosd meg a kezed a kísérlet után.",
            ],
          },
          {
            type: "tip",
            text:
              "💡 A biztonság az első! Ha bizonytalan vagy, inkább kérdezz rá.",
          },
        ],
      },
    ],
  },
};

export default LESSONS;


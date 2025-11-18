// lib/irodalom/lessons.ts
// Irodalom 8. – Tananyag (színes kártyák + jegyzet), idézetes példákkal

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
  /* ────────────── LÍRA ────────────── */
  irodalom_8_lira: {
    title: "Irodalom 8 — Líra",
    color: "#a78bfa",
    sections: [
      {
        id: "lira_alap_mufajok",
        title: "Líra alapjai és műfajok",
        color: "#8b5cf6",
        content: [
          {
            type: "text",
            text:
              "A líra az érzelmek és gondolatok művészete. A költő a saját lelkiállapotát, hangulatát fejezi ki közvetlenül.",
          },
          {
            type: "list",
            items: [
              "Fő jellemző: én-központúság, pillanatnyi érzések.",
              "Műfajok: dal, óda, elégia, epigramma, himnusz, rapszódia.",
              "Hangnem: meghitt, ünnepélyes, fájdalmas, ironikus.",
              "Sűrített, képszerű, zeneileg is hatásos nyelv.",
            ],
          },
          {
            type: "example",
            text:
              "Petőfi: *Szeptember végén* — „Elhull a virág, eliramlik az élet…”\nVörösmarty: *Szózat* — „Hazádnak rendületlenül légy híve, oh magyar!”",
          },
          {
            type: "tip",
            text:
              "Jegyezd meg: minden műfaj más hangulatot hordoz. Gyakorold versrészletek felismerését hangulat alapján.",
          },
        ],
      },
      {
        id: "lira_versforma",
        title: "Versforma, ritmus, rím, szabadvers",
        color: "#7c3aed",
        content: [
          {
            type: "text",
            text:
              "A vers zeneiségét a ritmus, a rím és a verssorok szerkezete teremti meg. A szabadvers e szabályokból szabadon építkezik.",
          },
          {
            type: "list",
            items: [
              "Időmértékes verselés: rövid és hosszú szótagok váltakozása (pl. hexameter).",
              "Ütemhangsúlyos: hangsúlyos és hangsúlytalan szótagok rendje (népdalok).",
              "Rím: sorvégi hangzásazonosság (páros, keresztrím, ölelkező, félrím).",
              "Szabadvers: nincs szabályos ritmus, de képi és érzelmi zeneiség van.",
            ],
          },
          {
            type: "example",
            text:
              "Radnóti: *Nem tudhatom* – „Békesség volt a házak ormán.”\nAdy: *Lédával a bálban* – szabadversszerű, szaggatott ritmus.",
          },
          {
            type: "tip",
            text:
              "Olvasáskor tapssal vagy kopogással próbáld követni a vers ritmusát – így könnyebb felismerni a formát.",
          },
        ],
      },
    ],
  },

  /* ────────────── EPIKA ────────────── */
  irodalom_8_epika: {
    title: "Irodalom 8 — Epika",
    color: "#60a5fa",
    sections: [
      {
        id: "epika_novella",
        title: "Epika — novella, elbeszélés, egyperces",
        color: "#38bdf8",
        content: [
          {
            type: "text",
            text:
              "Az epikai művek történetet mesélnek el. A novella rövid, egyetlen konfliktus köré szerveződik, és gyakran csattanóval zárul.",
          },
          {
            type: "list",
            items: [
              "Cselekmény: rövid, feszes, kevés szereplővel.",
              "Fordulat, csattanó a végén (pl. Örkény).",
              "Narrátor lehet külső (3. személy) vagy belső (1. személy).",
              "Idő: lineáris vagy visszatekintő (keretes szerkezet).",
            ],
          },
          {
            type: "example",
            text:
              "Móricz: *Hét krajcár* – anya és gyermeke szegénységben is összetartanak.\nÖrkény: *In memoriam dr. K. H. G.* – „Egy ember, aki minden nap ugyanazt tette.”",
          },
          {
            type: "tip",
            text:
              "Keresd a fordulópontot, ahol a hős sorsa megváltozik — ez a novella lelke.",
          },
        ],
      },
      {
        id: "epika_regeny",
        title: "Epika — regény és elbeszélő szerkezet",
        color: "#0ea5e9",
        content: [
          {
            type: "text",
            text:
              "A regény nagyepikai műfaj: sok szereplő, hosszú idő, több szál. Az elbeszélő szervezi a világot és irányítja a nézőpontot.",
          },
          {
            type: "list",
            items: [
              "Típusok: fejlődésregény, kalandregény, történelmi regény, lélektani regény.",
              "Szerkezet: expozíció – bonyodalom – tetőpont – megoldás.",
              "Narráció: külső (mindentudó) vagy belső (személyes) elbeszélő.",
            ],
          },
          {
            type: "example",
            text:
              "Gárdonyi: *Egri csillagok* – „A hit pajzsa erősebb, mint a vas.”\nJókai: *A kőszívű ember fiai* – testvéri ellentét és hősi hazaszeretet.",
          },
          {
            type: "tip",
            text:
              "Rajzold le a történet ívét: kezdet–fordulat–csúcspont–lezárás. Segít megérteni a szerkezetet.",
          },
        ],
      },
    ],
  },

  /* ────────────── DRÁMA ────────────── */
  irodalom_8_drama: {
    title: "Irodalom 8 — Dráma és színház",
    color: "#f59e0b",
    sections: [
      {
        id: "drama_alapok",
        title: "Dráma — alapfogalmak, szerkezet, konfliktus",
        color: "#fbbf24",
        content: [
          {
            type: "text",
            text:
              "A dráma jelen idejű cselekmény: a szereplők párbeszédében, konfliktusban bontakozik ki. Színpadra szánt műfaj.",
          },
          {
            type: "list",
            items: [
              "Műfajok: tragédia, komédia, tragikomédia.",
              "Szerkezet: expozíció – bonyodalom – tetőpont – katasztrófa/feloldás.",
              "Színpadi jelek: instrukciók, kellékek, díszlet.",
            ],
          },
          {
            type: "example",
            text:
              "Shakespeare: *Rómeó és Júlia* – „Ó, mért vagy te Rómeó?”\nMadách: *Az ember tragédiája* – „Mondottam, ember: küzdj és bízva bízzál!”",
          },
          {
            type: "tip",
            text:
              "Olvasd hangosan: a dráma élő megszólalásra készült. Figyeld, hogyan nő a feszültség a dialógusban.",
          },
        ],
      },
      {
        id: "drama_szinhaz",
        title: "Színház — eszközök és foglalkozások",
        color: "#f59e0b",
        content: [
          {
            type: "list",
            items: [
              "A színház közösségi élmény, a néző is része a jelentésnek.",
              "Rendező, dramaturg, díszlettervező, színész, ügyelő együtt dolgozik.",
              "A fény, hang és mozgás is „szöveg”: jelentést hordoz.",
            ],
          },
          {
            type: "example",
            text:
              "Katona József: *Bánk bán* – „Hazám, hazám, te mindenem.”\nKortárs rendezések új értelmezéseket adnak: minimalista díszlet, vetítés, zene.",
          },
          {
            type: "tip",
            text:
              "Ha színházban jársz, figyeld a mozdulatokat és a fényt: ezek árulják el a rendező szándékát.",
          },
        ],
      },
    ],
  },

  /* ────────────── FOGALMAK ÉS IRÁNYZATOK ────────────── */
  irodalom_8_fogalmak: {
    title: "Irodalom 8 — Fogalmak és irányzatok",
    color: "#22c55e",
    sections: [
      {
        id: "fogalmak_kepek",
        title: "Irodalmi fogalmak — képek és alakzatok",
        color: "#10b981",
        content: [
          {
            type: "text",
            text:
              "A képek és alakzatok az irodalmi nyelv díszítő és jelentést sűrítő elemei. Segítenek érzékletesen kifejezni gondolatokat.",
          },
          {
            type: "list",
            items: [
              "Képek: hasonlat, metafora, megszemélyesítés, szimbólum.",
              "Alakzatok: ismétlés, ellentét, fokozás, kérdés, megszólítás.",
              "Hangulatkeltés, ritmus, érzelmi nyomaték.",
            ],
          },
          {
            type: "example",
            text:
              "„Tengerbe vesző hegy” – metafora a végtelenről.\n„Alszik a város” – megszemélyesítés.\n„Oly szép vagy, mint a tavasz” – hasonlat.",
          },
          {
            type: "tip",
            text:
              "Próbáld saját szavaiddal átírni a képeket: így megérted, mit fejeznek ki valóban.",
          },
        ],
      },
      {
        id: "stilus_iranyzatok",
        title: "Irányzatok — klasszicizmustól a modernig",
        color: "#16a34a",
        content: [
          {
            type: "text",
            text:
              "Az irodalmi korszakok változása új stíluseszközöket és témákat hozott: a rendtől a szabadságig, az érzelemtől a tudatig.",
          },
          {
            type: "list",
            items: [
              "Klasszicizmus – mérték, szabály, antik példák.",
              "Romantika – szenvedély, szabadság, hősiség.",
              "Realizmus – valóságábrázolás, társadalmi hűség.",
              "Modernség – egyéniség, szimbolizmus, avantgárd formabontás.",
            ],
          },
          {
            type: "example",
            text:
              "Petőfi romantikája: *Nemzeti dal* – „Rabok tovább nem leszünk!”\nAdy modernsége: *A föl-földobott kő* – hazaszeretet és önazonosság.",
          },
          {
            type: "tip",
            text:
              "Készíts időrendi sávot a korszakokhoz: szerzők + jellemző művek. Ez segít látni az irodalom fejlődését.",
          },
        ],
      },
    ],
  },
};

export default LESSONS;

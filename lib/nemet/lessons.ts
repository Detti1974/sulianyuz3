// lib/nemet/lessons.ts
type Block =
  | { type: "text"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "example"; text: string };

type Section = { id: string; title: string; content: Block[] };
type Topic = { id: string; title: string; sections: Section[] };

const mk = (id: string, title: string, content: (string | Block)[]): Section => ({
  id,
  title,
  content: content.map((c) =>
    typeof c === "string" ? { type: "text", text: c } : c
  ),
});

const LESSONS: Record<string, Topic> = {
  /* ===== Német alapok ===== */
  nemet_alapok: {
    id: "nemet_alapok",
    title: "Német alapok",
    sections: [
      mk("abc_kiejtes", "ABC és kiejtés", [
        "A német ABC 26 betűből és umlautos magánhangzókból áll: <b>ä, ö, ü</b>. A ß (Eszett) hosszú magánhangzó után áll: z. B. <b>Straße</b>.",
        { type: "list", items: ["ch: ich [ɪç], ach [ax]", "j: ja [ja]", "v: voll [fɔl]"] },
        { type: "tip", text: "Hallgass lassított anyanyelvi mintákat és ismételd a kiejtést hangosan!" },
      ]),
      mk("koszones_bemutatkozas", "Köszönés, bemutatkozás", [
        "<b>Guten Tag!</b> – Jó napot! <b>Ich heiße…</b> – A nevem… <b>Wie heißt du?</b> – Hogy hívnak?",
        { type: "example", text: "– Hallo! Ich heiße Anna. Und du? – Ich bin Bence. Freut mich!" },
      ]),
      mk("szamok_datum_ido", "Számok, dátum, idő", [
        "Számok: <b>eins, zwei, drei…</b> Dátum: <b>am 3. Mai</b>. Idő: <b>Es ist halb drei</b> (fél három).",
      ]),
    ],
  },

  /* ===== Nyelvtan ===== */
  nemet_grammatika: {
    id: "nemet_grammatika",
    title: "Nyelvtan – igeidők és szerkezetek",
    sections: [
      mk("presens", "Präsens (jelen idő)", [
        "Rendszeres igeragozás: <b>spielen</b> – ich spiele, du spielst, er spielt…",
        { type: "example", text: "Ich spiele Fußball. Lernst du Deutsch?" },
      ]),
      mk("perfekt", "Perfekt (befejezett múlt)", [
        "Segédige: <b>haben/sein</b> + Partizip II. Mozgás/állapotváltozásnál gyakran <b>sein</b>.",
        { type: "example", text: "Ich habe gelernt. Er ist gefahren." },
      ]),
      mk("prateritum", "Präteritum", [
        "Gyakori írásbeli múlt: <b>war, hatte, ging, kam</b>. Szövegértéshez fontos.",
      ]),
      mk("modalverben", "Módbeli segédigék", [
        { type: "list", items: ["können, müssen, dürfen, sollen, wollen, mögen"] },
        { type: "example", text: "Ich <b>kann</b> schwimmen. Du <b>musst</b> lernen." },
      ]),
      mk("wortstellung", "Szórend", [
        "Főmondat: ige 2. helyen. Kérdés: ige az első. Mellékmondat: ige a mondat végén.",
        { type: "example", text: "Weil ich müde bin, gehe ich früh ins Bett." },
      ]),
    ],
  },

  /* ===== Szókincs ===== */
  nemet_szokincs: {
    id: "nemet_szokincs",
    title: "Szókincs témakörök",
    sections: [
      mk("csalad_es_baratok", "Család és barátok", [
        { type: "list", items: ["die Mutter, der Vater, die Geschwister", "der Freund, die Freundin"] },
        { type: "example", text: "Ich habe zwei Geschwister. Meine Freundin heißt Lea." },
      ]),
      mk("iskola", "Iskola, tantárgyak, napirend", [
        { type: "list", items: ["Mathe, Deutsch, Geschichte, Biologie", "der Stundenplan, die Hausaufgabe"] },
      ]),
      mk("szabadido_sport", "Szabadidő, sport, hobbik", [
        { type: "list", items: ["Fußball spielen, Musik hören, lesen, zeichnen"] },
      ]),
      mk("utazas_kozlekedes", "Utazás és közlekedés", [
        { type: "list", items: ["der Bahnhof, der Bus, die U-Bahn, das Ticket"] },
        { type: "example", text: "Wo ist der Bahnhof? – Geradeaus und dann links." },
      ]),
      mk("eletmod_egeszseg", "Életmód és egészség", [
        { type: "list", items: ["gesund essen, schlafen, Sport treiben", "der Arzt, die Apotheke"] },
      ]),
    ],
  },

  /* ===== Kommunikáció ===== */
  nemet_kommunikacio: {
    id: "nemet_kommunikacio",
    title: "Kommunikációs helyzetek",
    sections: [
      mk("vasarlas_vendeglatas", "Vásárlás, vendéglátás", [
        { type: "example", text: "Ich hätte gern ein Brötchen. Was empfehlen Sie?" },
      ]),
      mk("utbaigazitas", "Útbaigazítás", [
        { type: "example", text: "Entschuldigung, wie komme ich zum Museum?" },
      ]),
      mk("orvosnal", "Orvosnál", [
        { type: "example", text: "Ich habe Kopfschmerzen. Haben Sie etwas dagegen?" },
      ]),
      mk("iskolai_szituaciok", "Iskolai szituációk", [
        { type: "example", text: "Entschuldigung, ich habe die Hausaufgabe vergessen." },
      ]),
    ],
  },

  /* ===== Landeskunde ===== */
  nemet_landskunde: {
    id: "nemet_landskunde",
    title: "Landeskunde – D-A-CH",
    sections: [
      mk("deutschland", "Németország", [
        "16 tartomány: pl. Bayern, Berlin, Hessen. Főváros: <b>Berlin</b>.",
      ]),
      mk("osterreich", "Ausztria", [
        "9 tartomány, főváros: <b>Wien</b>. Híres: Alpok, klasszikus zene.",
      ]),
      mk("schweiz", "Svájc", [
        "26 kanton, több hivatalos nyelv: német, francia, olasz, rétoromán.",
      ]),
    ],
  },
};

export default LESSONS;

// lib/nyelvtan/lessons.ts
// Nyelvtan 8 — Tananyag (LESSONS)
// Szerkezet kompatibilis a matek/angol Learn képernyőjével:
// - LESSONS: Record<topicId, { title, sections: LessonSection[] }>
// - LessonSection: { id, title, color?, image?, content: ContentBlock[] }
// - ContentBlock: { type: "text"|"example"|"list"|"tip"; text?: string; items?: string[] }

export type ContentBlock =
  | { type: "text"; text: string }
  | { type: "example"; text: string }
  | { type: "tip"; text: string }
  | { type: "list"; items: string[] };

export type LessonSection = {
  id: string;
  title: string;
  color?: string;
  image?: string;
  content: ContentBlock[];
};

export type Lessons = Record<
  string,
  {
    title: string;
    sections: LessonSection[];
  }
>;

/* Egy egységes, világos színpaletta sötét háttérhez – kártyaszínek */
const C = {
  blue: "#90caf9",
  indigo: "#9fa8da",
  teal: "#80cbc4",
  green: "#a5d6a7",
  lime: "#c5e1a5",
  amber: "#ffe082",
  orange: "#ffcc80",
  pink: "#f48fb1",
  purple: "#ce93d8",
  cyan: "#81d4fa",
};

/* ─────────────────────────────────────────────
   NYELVTAN 8 — SZÓFAJOK ÉS ALAPTÍPUSOK (FŐTÉMA)
   topicId: "nyelvtan_8_szofajok"
   A bank.ts-hez illeszkedő, színes, rövid és példás magyarázatok.
   ───────────────────────────────────────────── */

const lesson_szofajok_sections: LessonSection[] = [
  {
    id: "ige",
    title: "Ige – cselekvés, történések, létezés",
    color: C.indigo,
    content: [
      {
        type: "text",
        text:
          "Az ige cselekvést, történést vagy létezést fejez ki. Ragozható személyben és számban, időben (jelen, múlt), módban (kijelentő, feltételes, felszólító) és nemben (a magyarban nyelvtani nem nincs).",
      },
      {
        type: "list",
        items: [
          "Idők: jelen – múlt – (jövő: körülírással: fog + főnévi igenév).",
          "Módok: kijelentő (olvas), feltételes (olvasna), felszólító (olvass!).",
          "Tárgyas/általános ragozás: látom a könyvet vs. látok valamit.",
        ],
      },
      { type: "example", text: "Példák: fut, esik, van, lesz, láttam, olvasnál, írj!" },
      {
        type: "tip",
        text:
          "Tipp: Jövő időben a „fog + főnévi igenév” természetesebb: „Holnap el fogom olvasni a könyvet.”",
      },
    ],
  },
  {
    id: "fonev",
    title: "Főnév – személy, tárgy, elvont fogalom",
    color: C.blue,
    content: [
      {
        type: "text",
        text:
          "A főnév személyt, állatot, tárgyat, helyet vagy elvont fogalmat jelöl. Ragozható számban (egy/több) és esetragokkal (-ban, -hoz, -nak stb.).",
      },
      {
        type: "list",
        items: [
          "Köznevek és tulajdonnevek (Anna, Tisza, Budapest).",
          "Többes szám jele: -k (ház-ak), hangrend/hasonulás figyelendő.",
          "Esetragok: hely, irány, birtok (házban, házhoz, házam).",
        ],
      },
      { type: "example", text: "Példák: tanár, kutya, fa, szabadság, Magyarország." },
      {
        type: "tip",
        text:
          "Tipp: A tulajdonnevek nagybetűsek; a toldalékokat kötőjellel választjuk el, ha mozaikszóhoz kapcsolódnak (BBC-ben).",
      },
    ],
  },
  {
    id: "melleknev",
    title: "Melléknév – tulajdonság",
    color: C.teal,
    content: [
      {
        type: "text",
        text:
          "A melléknév tulajdonságot fejez ki. Fokozható (alapfok, középfok, felsőfok), és jelzőként kapcsolódik a főnévhez.",
      },
      {
        type: "list",
        items: [
          "Fokozás: szép – szebb – legszebb.",
          "Hasonlítás: -bb, mint; ugyanolyan… mint.",
          "Rokon értelműek árnyalatot visznek a stílusba (szép – gyönyörű).",
        ],
      },
      { type: "example", text: "Példák: piros, ügyes, barátságos, legszebb." },
      {
        type: "tip",
        text:
          "Tipp: A fokozásnál a helyesírásra figyelj (ly/j, hosszú-rövid magánhangzók: drága – drágább).",
      },
    ],
  },
  {
    id: "szamnev",
    title: "Számnév – mennyiség, sorszám, tört",
    color: C.green,
    content: [
      {
        type: "text",
        text:
          "A számnév mennyiséget, sorrendet vagy részt fejez ki. Fajtái: tőszámnév, sorszámnév, törtszámnév, határozatlan számnév.",
      },
      {
        type: "list",
        items: [
          "Tőszámnév: egy, kettő, száz.",
          "Sorszámnév: első, második (-adik/-edik).",
          "Törtszám: egyharmad, háromnegyed.",
          "Határozatlan: néhány, sok, rengeteg.",
        ],
      },
      { type: "example", text: "Példák: öt könyv, harmadik hely, fél alma." },
    ],
  },
  {
    id: "nevmas",
    title: "Névmás – a névszók helyettesítői",
    color: C.purple,
    content: [
      {
        type: "text",
        text:
          "A névmás helyettesít főnevet, melléknevet, számnevet vagy határozószót. Fajtái többek közt: személyes, birtokos, mutató, kérdő, vonatkozó, határozatlan.",
      },
      {
        type: "list",
        items: [
          "Személyes: én, te, ő, mi, ti, ők.",
          "Mutató: ez, az, ilyen, olyan.",
          "Kérdő: ki? mi? melyik? milyen?",
          "Vonatkozó: aki, ami, amely.",
        ],
      },
      { type: "example", text: "Példák: Ez az enyém. Aki mer, az nyer." },
      {
        type: "tip",
        text:
          "Tipp: A vesszőt a vonatkozó mellékmondat elé tesszük: „Aki eljött, jól érezte magát.”",
      },
    ],
  },
  {
    id: "hatarozoszo",
    title: "Határozószó – hely, idő, mód",
    color: C.cyan,
    content: [
      {
        type: "text",
        text:
          "A határozószó körülményeket fejez ki: hol? hová? mikor? hogyan? mennyire? Gyakran mondatrész (hely/time/mód határozó).",
      },
      {
        type: "list",
        items: [
          "Hely: itt, ott, fent, lent.",
          "Idő: most, tegnap, hamarosan.",
          "Mód: gyorsan, halkan, bátran.",
          "Fok: nagyon, eléggé, túlságosan.",
        ],
      },
      { type: "example", text: "Példák: Hol? Itt. Mikor? Most. Hogyan? Gyorsan." },
    ],
  },
  {
    id: "nevuto",
    title: "Névutó – a ragok „szavai”",
    color: C.lime,
    content: [
      {
        type: "text",
        text:
          "A névutó önálló szó, amely raghoz hasonló viszonyt fejez ki. A főnév után áll: az asztal alatt, a ház mögött, a folyó mellett.",
      },
      {
        type: "list",
        items: [
          "Helyviszony: alatt, fölött, mellett, mögött, között.",
          "Időviszony: előtt, után.",
          "Eredet/ok: miatt, végett.",
        ],
      },
      { type: "example", text: "Példák: a ház előtt, a bolt mellett, a fák között." },
      {
        type: "tip",
        text:
          "Tipp: A névutó mindig a főnév (vagy névszói szerkezet) után áll: „a híd alatt”, nem *„alatt a híd”.",
      },
    ],
  },
  {
    id: "kotokotoszo",
    title: "Kötőszó – mondatok, tagok összekapcsolása",
    color: C.amber,
    content: [
      {
        type: "text",
        text:
          "A kötőszó szavakat, szószerkezeteket vagy tagmondatokat kapcsol össze. Logikai viszonyt is jelezhet (ellentét, ok, következmény, feltétel).",
      },
      {
        type: "list",
        items: [
          "Mellérendelő: és, meg, s, vagy, de, azonban, ezért, tehát.",
          "Alárendelő: hogy, mert, ha, bár, mintha, ami/aki.",
          "Szövegkohézió: ezért, tehát, viszont, azonban, mivel.",
        ],
      },
      {
        type: "example",
        text:
          "Példák: „Sokat tanult, ezért jól sikerült a dolgozat.” „Ha esik, otthon maradunk.”",
      },
      {
        type: "tip",
        text:
          "Tipp: A vesszőhasználat a tagmondathatároknál döntő. Gyakorold a kötőszó-típusokat a kvízben!",
      },
    ],
  },
  {
    id: "igeragozas_igeidok",
    title: "Igeragozás és idő/mód – gyors áttekintés",
    color: C.orange,
    content: [
      {
        type: "text",
        text:
          "A magyar igeragozás személyt/számot, tárgyasságot és módot jelöl. A jövő idő rendszerint körülírás: „fog + főnévi igenév”.",
      },
      {
        type: "list",
        items: [
          "Kijelentő: olvasok/olvasom; múlt: olvastam; jövő: olvasni fogok.",
          "Feltételes: olvasnék/olvasnám; Felszólító: olvass(ak)!",
          "Igekötők: meg-, fel-, le-… (helye változhat: „megírta” ~ „írta meg”).",
        ],
      },
      { type: "example", text: "Példák: Látom a könyvet. Holnap el fogom olvasni." },
    ],
  },
  {
    id: "indulatszo_modositoszo",
    title: "Indulatszók és módosítószók",
    color: C.pink,
    content: [
      {
        type: "text",
        text:
          "Indulatszók érzelmet/akaratot fejeznek ki (hej!, jaj!, pszt!). A módosítószók a mondat egészének jelentését árnyalják (talán, bizony, sajnos).",
      },
      {
        type: "list",
        items: [
          "Indulatszó: érzelmi, akaratkifejező; gyakori az írásjel (felkiáltó!).",
          "Módosítószó: a kijelentés fokát, attitűdjét jelöli (bizony, vajon).",
        ],
      },
      { type: "example", text: "Példák: Jaj! Talán igazad van. Bizony, így történt." },
    ],
  },
];
/* A főtémához tartozó bejegyzés a LESSONS-ben */
const lesson_mondatelemzes_sections: LessonSection[] = [
{
  id: "alany_allitmany",
  title: "Alany és állítmány",
  color: "#9fa8da", // világos indigó
  content: [
    {
      type: "text",
      text:
        "A mondat legfontosabb két része az **alany** és az **állítmány**. Az alany megmondja, hogy KI vagy MI a cselekvő, az állítmány pedig azt, hogy MIT CSINÁL, MI TÖRTÉNIK vagy MI A HELYZET.",
    },
    {
      type: "list",
      items: [
        "Az **alany** kérdései: *ki? mi? kik? mik?*",
        "Az **állítmány** az ige, amely a cselekvést, történést, létezést fejezi ki.",
        "Az állítmány egyezik számban és személyben az alannyal.",
      ],
    },
    {
      type: "example",
      text: "Példák: „A gyerek fut.” → alany: *gyerek*, állítmány: *fut*. „A fák zöldek.” → alany: *fák*, állítmány: *zöldek*.",
    },
    {
      type: "tip",
      text:
        "Tipp: Az állítmány legtöbbször ige, de lehet névszói is (pl. „A kutya okos.”). Ilyenkor a mondat állítása tulajdonság.",
    },
    {
      type: "text",
      text:
        "📘 **Névszói-igei állítmány:** akkor van, ha az állítmány két részből áll: *van/volt/lesz* + névszó.",
    },
    {
      type: "example",
      text:
        "„A fiú fáradt volt.” → névszói-igei állítmány: *volt fáradt*. \n„A kert szép lesz.” → névszói-igei állítmány: *lesz szép*.",
    },
  ],
},
{
  id: "targy_hatarozok_jelzok",
  title: "Tárgy, határozók és jelzők",
  color: "#80cbc4", // halvány türkiz
  content: [
    {
      type: "text",
      text:
        "Az alany és az állítmány után a mondat legfontosabb részei a **tárgyak**, **határozók** és **jelzők**. Ezek bővítik a mondat tartalmát, pontosítják a cselekvést vagy az alanyt.",
    },
    {
      type: "list",
      items: [
        "**Tárgy:** megnevezi, hogy *mit? kit? kiket?* érint a cselekvés. → pl. 'Olvasom a könyvet.' (tárgy: *a könyvet*)",
        "**Határozó:** a cselekvés körülményeit fejezi ki (hely, idő, mód, ok, cél, eszköz). → pl. 'A fiú a kertben játszik.' (helyhatározó)",
        "**Jelző:** a főnév tulajdonságát, mennyiségét, birtokosát mutatja meg. → pl. 'A piros labda gurul.' (minőségjelző)",
      ],
    },
    {
      type: "example",
      text:
        "Példák:\n• 'A gyerek almát eszik.' → tárgy: *almát*.\n• 'A gyerek a kertben játszik.' → határozó: *a kertben*.\n• 'A kislány piros ruhát visel.' → jelző: *piros*.",
    },
    {
      type: "tip",
      text:
        "Tipp: A **tárgy** mindig az állítmányhoz kapcsolódik; a **jelző** mindig egy főnévhez; a **határozó** legtöbbször az ige mellett áll.",
    },
    {
      type: "text",
      text:
        "💡 **Fontos:** a határozók és jelzők gyakran szókapcsolatokat alkotnak, pl. 'az iskola előtt', 'a tanárnő könyve', 'szorgalmas diák'.",
    },
    {
      type: "example",
      text:
        "Több bővítményes mondat: 'A szorgalmas diák reggel az iskolában dolgozatot írt.' → alany: *diák*, jelző: *szorgalmas*, határozó: *reggel*, *az iskolában*, tárgy: *dolgozatot*.",
    },
  ],
},
{
  id: "mondatreszek_kapcsolatai_sorrendje",
  title: "Mondatrészek kapcsolatai és sorrendje",
  color: "#c5e1a5", // halvány zöld
  content: [
    {
      type: "text",
      text:
        "A mondatrészek **kapcsolatokban** állnak egymással. Az alany és az állítmány között **állítmányi kapcsolat**, az állítmány és a bővítmények (tárgy, határozó, jelző) között **alárendelő kapcsolat** van.",
    },
    {
      type: "list",
      items: [
        "**Alany – állítmány:** egyeztetés számban és személyben (A gyerek fut. – A gyerekek futnak.)",
        "**Állítmány – tárgy:** vonzat (Olvasom a könyvet. → Mit olvasok?)",
        "**Főnév – jelző:** közvetlen kapcsolat (A piros autó gyors.)",
        "**Ige – határozó:** körülménykifejezés (Tanul a szobában.)",
      ],
    },
    {
      type: "example",
      text:
        "Példák:\n• 'A tanár magyaráz a diákoknak a táblánál.' → alany: *tanár*, állítmány: *magyaráz*, határozók: *a diákoknak*, *a táblánál*.\n• 'A szép ház a domb tetején áll.' → alany: *ház*, jelző: *szép*, határozó: *a domb tetején*.",
    },
    {
      type: "tip",
      text:
        "Tipp: Egy mondatban több bővítmény is lehet, de a mondatrészek sorrendje általában **alany – állítmány – bővítmények**.",
    },
    {
      type: "text",
      text:
        "📘 **Mondatrészlánc:** egy főmondatrészhez több alárendelt is kapcsolódhat. Például: 'A gyerek a kert végében a fák alatt labdázik.'",
    },
    {
      type: "example",
      text:
        "Sorrend: Alany (*gyerek*) → Határozó (*a kert végében, a fák alatt*) → Állítmány (*labdázik*).",
    },
  ],
},
{
  id: "ossz_mondatok_attekintes",
  title: "Összetett mondatok rövid áttekintése",
  color: "#ffe082", // halvány aranysárga
  content: [
    {
      type: "text",
      text:
        "Az **összetett mondat** két vagy több tagmondatból áll. A tagmondatok egymással **mellérendelő** vagy **alárendelő** kapcsolatban lehetnek.",
    },
    {
      type: "list",
      items: [
        "**Mellérendelő:** a tagmondatok egyenrangúak, kötőszó kapcsolja őket (és, de, vagy, ezért, tehát).",
        "**Alárendelő:** az egyik tagmondat függ a másiktól, kötőszóval kapcsolódik (mert, hogy, ha, aki, ami).",
        "**Vegyes:** egy mondatban többféle viszony is előfordulhat.",
      ],
    },
    {
      type: "example",
      text:
        "Példák:\n• Mellérendelő: 'Süt a nap, és énekelnek a madarak.'\n• Ellentétes: 'Sokat tanult, de nem sikerült a vizsga.'\n• Okhatározói alárendelő: 'Azért siet, mert elkésik.'",
    },
    {
      type: "tip",
      text:
        "Tipp: A tagmondatok határát általában vessző jelöli. A kötőszó típusa segít felismerni a viszonyt.",
    },
    {
      type: "text",
      text:
        "💡 **Összetett mondat felismerése:** több állítmánya van. Ha csak egy ige (vagy névszói-igei állítmány) van, az egyszerű mondat.",
    },
    {
      type: "example",
      text:
        "Példák:\n• Egyszerű: 'A gyerek fut a pályán.'\n• Összetett: 'A gyerek fut a pályán, mert edzést tartanak.'",
    },
  ],
},
];
// ─────────────────────────────────────────────
// NYELVTAN 8 — HELYESÍRÁS (4 altéma)
// topicId: "nyelvtan_8_helyesiras"
// ─────────────────────────────────────────────

const lesson_helyesiras_sections: LessonSection[] = [
  {
    id: "helyesiras_alapelvek",
    title: "Helyesírási alapelvek",
    color: "#a5d6a7", // halvány zöld
    content: [
      {
        type: "text",
        text:
          "A magyar helyesírás fő alapelvei: kiejtés elve, szóelemzés (morféma) elve, hagyomány elve, egyszerűsítés elve.",
      },
      {
        type: "list",
        items: [
          "Kiejtés elve: úgy írunk, ahogy ejtünk (pl. *apa, csónak*).",
          "Szóelemzés elve: megőrizzük a szóelemek alakját (pl. *hídhoz* → d ~ gy hasonulás ellenére d-t írunk).",
          "Hagyomány elve: megszokás (pl. j/ly: *hely, lyuk*).",
          "Egyszerűsítés elve: kettőzések elkerülése (pl. *jegygyűrű* → három azonos mássalhangzó nem lehet).",
        ],
      },
      {
        type: "example",
        text:
          "Példa morfémamegőrzésre: *híd + -hoz → hídhoz* (ejtésben [hígyhoz], írásban d marad).",
      },
      { type: "tip", text: "Tipp: Ha bizonytalan vagy, elemezd a szót: tő + képző/jel/rag." },
    ],
  },
  {
    id: "egybe_kulon_kotojel",
    title: "Egybeírás, különírás, kötőjel",
    color: "#ffcc80", // halvány narancs
    content: [
      {
        type: "text",
        text:
          "Összetett szavak írása: külön, egybe vagy kötőjellel. Kulcs: jelentés, szerkezet, hossz (6 szótagnál kötőjel), mozaikszók, tulajdonnevek.",
      },
      {
        type: "list",
        items: [
          "Jelentésváltozás → gyakran egybe: *kézilabda, vízszint*.",
          "Hat szótagnál hosszabb alapösszetétel → kötőjel: *vízszintmérő-készülék*.",
          "Mozaikszó + toldalék: kötőjellel: *BBC-ben, OTP-s*.",
          "Idő- és számkapcsolatok: többnyire kötőjel: *10–12 óráig, 1990–1995*.",
        ],
      },
      {
        type: "example",
        text:
          "Példák: *háztető (egybe)*, *házi feladat (külön)*, *magyar–angol szótár (kötőjellel)*.",
      },
      {
        type: "tip",
        text:
          "Tipp: Ha bizonytalan vagy, mondd ki egyben; ha új fogalmat jelöl, gyakran egybeírjuk.",
      },
    ],
  },
  {
    id: "j_ly_massalhangzo",
    title: "J–ly, mássalhangzók és hasonulások",
    color: "#90caf9", // világos kék
    content: [
      {
        type: "text",
        text:
          "A j/ly többnyire hagyomány kérdése: szót kell tudni. A mássalhangzók találkozásánál gyakori a hasonulás és összeolvadás.",
      },
      {
        type: "list",
        items: [
          "J/ly: *hagy, jegy, jegyzet* (j); *hely, folyó, golyó* (ly).",
          "Részleges hasonulás: *zsebben* [zsebb_en]; teljes: *asszony*.",
          "Összeolvadás: *híd + -hoz → hídhoz* (ejtésben gy-hez idomul a d).",
          "Kettőzések: *hússzelet* (ss), de három nem lehet: egyszerűsítünk.",
        ],
      },
      {
        type: "example",
        text:
          "Példák: *higgy, egyjelentésű, különböző, máj, korhely*.",
      },
      {
        type: "tip",
        text:
          "Tipp: J/ly kétséges esetben nézz szótárba; gyakorlatban tanuld meg a gyakori családokat (hely-, foly-, goly-).",
      },
    ],
  },
  {
    id: "irasjelek_gyors",
    title: "Írásjelek – gyors áttekintés",
    color: "#ce93d8", // lila
    content: [
      {
        type: "text",
        text:
          "Az írásjelek tagolnak, jelentést pontosítanak. A vessző tagmondathatárt jelölhet; a mondatvégi jelek közlésmódot jeleznek.",
      },
      {
        type: "list",
        items: [
          "Vessző: tagmondat, felsorolás, megszólítás, közbevetés.",
          "Kettőspont: magyarázó, idézet bevezetése.",
          "Pontosvessző: nagyobb tagolás felsorolásnál.",
          "Gondolatjel: közbevetés, hiány, párbeszéd jelölése.",
          "Felkiáltó/kérdő jel: érzelem és kérdés.",
        ],
      },
      {
        type: "example",
        text:
          "Példák: „Tudtam, hogy sikerül.” „Három dolgot kérek: rendet, csendet, figyelmet.” „– Megyünk?”",
      },
      { type: "tip", text: "Tipp: Tagmondatok közé vessző; állítmány nélküli bővítményláncnál mérlegelj!" },
    ],
  },
];
  // ─────────────────────────────────────────────
// NYELVTAN 8 — SZÖVEGKOHÉZIÓ (4 altéma)
// topicId: "nyelvtan_8_szovegkohezio"
// ─────────────────────────────────────────────

const lesson_szovegkohezio_sections: LessonSection[] = [
  {
    id: "kohézio_alapok",
    title: "Mondat- és szövegkohézió – alapok",
    color: "#81d4fa", // világos cián
    content: [
      {
        type: "text",
        text:
          "A **kohézió** a szöveg összetartó ereje: attól lesz a mondatok sora folyamatos és érthető. Van **grammatikai** (nyelvtani) és **logikai** (tartalmi) kohézió.",
      },
      {
        type: "list",
        items: [
          "Grammatika: egyeztetés, névmási utalás, ismétlés, szórend.",
          "Lexikai: kulcsszavak, szinonimák, rokon értelmű körülírás.",
          "Logikai: ok–okozat, következtetés, ellentét, feltétel.",
        ],
      },
      {
        type: "example",
        text:
          "„Az osztály kirándulni ment. **Ők** a hegyre indultak.” (névmási utalás tartja össze)",
      },
      { type: "tip", text: "Tipp: Ha a szöveg ugrálónak tűnik, adj hozzá utaló elemeket (névmás, kötőszó, ismétlés)." },
    ],
  },
  {
    id: "kotoszok_kapcsoloelemek",
    title: "Kötőszók és kapcsolóelemek",
    color: "#ffcc80", // halvány narancs
    content: [
      {
        type: "text",
        text:
          "A **kötőszók** és kapcsolóelemek a mondatok/tagmondatok viszonyát jelzik: hozzáadás, ellentét, ok, következmény, feltétel, cél stb.",
      },
      {
        type: "list",
        items: [
          "Hozzáadás: és, továbbá, sőt.",
          "Ellentét: de, azonban, viszont, mégis.",
          "Ok/következmény: mert, mivel, ezért, tehát, így.",
          "Feltétel/cél: ha, amennyiben; azért, hogy; abból a célból, hogy.",
          "Rendezők: először, továbbá, végül; egyrészt–másrészt.",
        ],
      },
      {
        type: "example",
        text:
          "„Sokat gyakorolt, **ezért** magabiztos volt. **Mégis**, izgult a versenyen.”",
      },
      { type: "tip", text: "Tipp: A gondolatmenetet **mentális kapaszkodók** (tehát, ezért, viszont) teszik átláthatóvá." },
    ],
  },
  {
    id: "utalas_tema_rema",
    title: "Utalás, névmások és téma–réma",
    color: "#ce93d8", // lila
    content: [
      {
        type: "text",
        text:
          "**Utalás**: névmásokkal, ismétléssel, rokon értelmű szavakkal hivatkozunk korábbi elemekre. A **téma** (miről van szó) többnyire a mondat eleje, a **réma** (új információ) a folytatás.",
      },
      {
        type: "list",
        items: [
          "Névmási utalás: ő, ez, az, ilyen/olyan, aki/ami/amely.",
          "Lexikai lánc: könyv – mű – kötet – regény.",
          "Téma → réma: ismert → új; a szöveg előrehaladását segíti.",
        ],
      },
      {
        type: "example",
        text:
          "„A **verseny** nehéz volt. **Az** elődöntő különösen szorosra sikerült.” (téma: verseny → rámutató névmás tartja egyben)",
      },
      { type: "tip", text: "Tipp: Új bekezdés elején nevezd meg a témát, utána jöhet a réma (új állítások, adatok)." },
    ],
  },
  {
    id: "bekezdes_szerkezet",
    title: "Bekezdés és szövegszerkezet",
    color: "#a5d6a7", // halvány zöld
    content: [
      {
        type: "text",
        text:
          "A jól tagolt szöveg **bekezdésekből** épül fel. Egy bekezdés egy fő gondolatot bont ki: állítás + magyarázat + példa/következtetés.",
      },
      {
        type: "list",
        items: [
          "Bevezetés – tárgyalás – befejezés (klasszikus felépítés).",
          "Tematikus mondat: a bekezdés fő állítása.",
          "Kohéziós hidak bekezdések között: összegzés, előreutalás, kulcsszó ismétlés.",
        ],
      },
      {
        type: "example",
        text:
          "„A sport fejleszti a kitartást. **Először** az állóképességet növeli, **majd** a fegyelmet erősíti. **Végül** közösséget teremt.”",
      },
      { type: "tip", text: "Tipp: A bekezdések első mondata legyen tiszta állítás; az utolsó zárjon le, vagy vezessen át a következő részre." },
    ],
  },
];
// ─────────────────────────────────────────────
// NYELVTAN 8 — JELENTÉSTAN (4 altéma)
// topicId: "nyelvtan_8_jelentestan"
// ─────────────────────────────────────────────

const lesson_jelentestan_sections: LessonSection[] = [
  {
    id: "szavak_jelentese",
    title: "A szavak jelentése",
    color: "#c5e1a5", // halvány zöld
    content: [
      {
        type: "text",
        text:
          "A szó jelentése az, amit a szó hallatán elképzelünk. Lehet **alapjelentés** (szó szerinti) és **átvitt jelentés** (képes kifejezés).",
      },
      {
        type: "list",
        items: [
          "Alapjelentés: közvetlen, konkrét – *asztal, fut, piros.*",
          "Átvitt jelentés: képes, hangulati – *arany szív, fut az idő.*",
          "Többjelentésű szó: egy szó több, de rokon értelmű jelentése – *fej: ember feje, káposztafej, cég feje.*",
        ],
      },
      {
        type: "example",
        text:
          "Példák: „A nap süt.” (égitest) – „Ma szép napunk volt.” (átvitt).",
      },
      { type: "tip", text: "Tipp: A képes jelentések színesítik a szöveget, de csak akkor használd, ha érthető marad!" },
    ],
  },
  {
    id: "rokon_ellentetes_azonos",
    title: "Rokon értelmű, ellentétes és azonos alakú szavak",
    color: "#ffcc80", // halvány narancs
    content: [
      {
        type: "text",
        text:
          "A szavak közti kapcsolatokat vizsgáljuk: rokon értelmű, ellentétes jelentésű, azonos alakú (homonima), többjelentésű, hangutánzó.",
      },
      {
        type: "list",
        items: [
          "Rokon értelmű (szinonima): szép – csinos, gyönyörű.",
          "Ellentétes (antonima): magas – alacsony, gyors – lassú.",
          "Azonos alakú (homonima): vár (ige) – vár (főnév).",
          "Hangutánzó: csattan, zúg, csörög.",
        ],
      },
      {
        type: "example",
        text:
          "Példák: *barát – haver (szinonima)*, *fent – lent (antonima)*, *kulcs – hangszerkulcs (homonima)*.",
      },
      { type: "tip", text: "Tipp: A rokon értelmű szavak segítenek elkerülni az ismétlést a fogalmazásban." },
    ],
  },
  {
    id: "szokapcsolatok",
    title: "Szókapcsolatok és állandósult kifejezések",
    color: "#ce93d8", // lila
    content: [
      {
        type: "text",
        text:
          "A szavak gyakran együtt fordulnak elő: **szókapcsolatok** (nyitott ablak) és **állandósult kifejezések** (idiómák, közmondások).",
      },
      {
        type: "list",
        items: [
          "Szókapcsolat: egy fő szó + bővítmény (piros alma, gyorsan fut).",
          "Állandósult szókapcsolat: jelentése nem elemeiből adódik (pl. fejét veszi, kétbalkezes).",
          "Közmondás: életbölcsesség – „Ki korán kel, aranyat lel.”",
        ],
      },
      {
        type: "example",
        text:
          "Példák: *hideg vizet önt valamire*, *szemet huny felett*, *olajat önt a tűzre.*",
      },
      { type: "tip", text: "Tipp: Az idiómák gazdagítják a stílust, de csak helyzethez illően használd őket!" },
    ],
  },
  {
    id: "jelentesvaltozas",
    title: "Jelentésváltozások",
    color: "#a5d6a7", // halvány zöld
    content: [
      {
        type: "text",
        text:
          "A nyelv élő: a szavak jelentése idővel módosulhat. Ezt nevezzük **jelentésváltozásnak**.",
      },
      {
        type: "list",
        items: [
          "Bővülés: új jelentés hozzáadódik (*egér – állat → számítógépes eszköz*).",
          "Szűkülés: kevesebb dolgot jelent (*gyümölcs – alma → csak bizonyos fajták*).",
          "Átvitel: hasonlóság alapján új értelmet kap (*szív – szeretet központja*).",
          "Hangulati eltolódás: pl. *okos* → pozitív, *ravasz* → negatív árnyalat.",
        ],
      },
      {
        type: "example",
        text:
          "Példa: *csillag* (égi test → híresség); *egér* (állat → számítógép-tartozék).",
      },
      { type: "tip", text: "Tipp: A jelentésváltozások mutatják, hogy a nyelv él és alkalmazkodik." },
    ],
  },
];
// ─────────────────────────────────────────────
// NYELVTAN 8 — NYELVVÁLTOZATOK ÉS STÍLUS (4 altéma)
// topicId: "nyelvtan_8_nyelvvaltozatok"
// ─────────────────────────────────────────────

const lesson_nyelvvaltozatok_sections: LessonSection[] = [
  {
    id: "koznyelv_regionalis",
    title: "Köznyelv és regionális köznyelv",
    color: "#90caf9", // világos kék
    content: [
      {
        type: "text",
        text:
          "A **köznyelv** az egységes, mindenki által érthető nyelvváltozat. A **regionális köznyelv** a köznyelv területi árnyalata: kiejtésben/szókészletben enyhén eltér.",
      },
      {
        type: "list",
        items: [
          "Köznyelv: iskolai, médiabeli, hivatalos kommunikáció alapja.",
          "Regionális köznyelv: köznyelvi szerkezet + táji elemek (pl. szóhasználat).",
          "Tájnyelv: erősebb területi sajátosságok – nem mindenki érti az ország más részén.",
        ],
      },
      {
        type: "example",
        text:
          "Példa: köznyelvi „tegnap” ~ regionálisan „tegnap esteje” (néhol).",
      },
      { type: "tip", text: "Tipp: Hivatalos szövegben maradj a köznyelvnél; beszédben természetesek a regionális jegyek." },
    ],
  },
  {
    id: "szlenges_ifjusagi",
    title: "Szleng és ifjúsági nyelv",
    color: "#f48fb1", // rózsaszín
    content: [
      {
        type: "text",
        text:
          "A **szleng** csoportnyelv: játékos, kreatív, gyorsan változik. Főleg informális helyzetben használjuk; hivatalosban kerülendő.",
      },
      {
        type: "list",
        items: [
          "Funkció: közösségépítés, humor, rövidítés.",
          "Jellemzők: új szavak, jelentésmódosítás, idegen szavak beemelése.",
          "Veszély: félreértés generációk/külső csoportok közt.",
        ],
      },
      {
        type: "example",
        text:
          "Példa: „lelépek”, „zsír”, „király”, „cringe”, „vibe”.",
      },
      { type: "tip", text: "Tipp: Helyzetfüggő! Tanári levélben ne szlengelj; baráti chatben természetes." },
    ],
  },
  {
    id: "stilusrend_hivatalos",
    title: "Stílusrétegek és hivatalos stílus",
    color: "#ce93d8", // lila
    content: [
      {
        type: "text",
        text:
          "A **stílusrétegek** a kommunikációs helyzethez igazodó nyelvhasználati módok: hivatalos, tudományos, publicisztikai, szépirodalmi, társalgási.",
      },
      {
        type: "list",
        items: [
          "Hivatalos: udvarias, pontos, tárgyilagos; rögzült formulák (Tisztelt…, Tisztelettel:).",
          "Tudományos: szakkifejezések, definíciók, logikus tagolás.",
          "Publicisztikai: közéleti témák, hatásos címek, retorikai eszközök.",
          "Társalgási: kötetlen, rövid mondatok, kitöltőszavak.",
        ],
      },
      {
        type: "example",
        text:
          "Hivatalos: „Kérem szíves tájékoztatását…”  Társalgási: „Megírnád, mikor jó?”",
      },
      { type: "tip", text: "Tipp: Válaszd a stílust a címzett és a cél szerint. Az udvariassági elemek mindig számítanak." },
    ],
  },
  {
    id: "netikett_online",
    title: "Netikett és online udvariasság",
    color: "#a5d6a7", // halvány zöld
    content: [
      {
        type: "text",
        text:
          "Online közegben hiányoznak a mimikai/hanglejtési jelek, ezért a félreértés kockázata nagyobb. A **netikett** az internetes illemszabályok összessége.",
      },
      {
        type: "list",
        items: [
          "Köszönj, szólítsd meg a címzettet; használd a kérem/köszönöm formulákat.",
          "Ne írj végig csupa nagybetűvel; figyelj az írásjelekre.",
          "Érzelmes témánál adj több kontextust; kerüld a sértő kifejezéseket.",
          "Hivatalos emailben ne használj emojikat; válaszolj ésszerű időn belül.",
        ],
      },
      {
        type: "example",
        text:
          "„Tisztelt Tanárnő! Érdeklődni szeretnék… Köszönettel: …” vs. „Szia! Ma ráérsz?”",
      },
      { type: "tip", text: "Tipp: Ha félreértést sejtesz, kérdezz vissza higgadtan; törekedj a tiszta, rövid mondatokra." },
    ],
  },
];
// ─────────────────────────────────────────────
// NYELVTAN 8 — ZÁRÓ ÖSSZEFOGLALÁS
// topicId: "nyelvtan_8_zaro"
// ─────────────────────────────────────────────

const lesson_zaro_sections: LessonSection[] = [
  {
    id: "osszefoglalo_szofajok",
    title: "Szófajok gyors áttekintése",
    color: "#81d4fa", // világos cián
    content: [
      {
        type: "text",
        text:
          "A szófajok a szavakat csoportosítják a mondatbeli szerepük szerint. 10 önálló és 1 mondatszói kategória van.",
      },
      {
        type: "list",
        items: [
          "Ige – cselekvés/történés/létezés.",
          "Főnév – személy, tárgy, fogalom.",
          "Melléknév – tulajdonság.",
          "Számnév – mennyiség, sorszám.",
          "Névmás – helyettesít névszókat.",
          "Határozószó – körülményt fejez ki.",
          "Névutó – raghoz hasonló viszonyt jelöl.",
          "Kötőszó – kapcsol, viszonyt jelez.",
          "Módosító/indulatszó – érzelem, attitűd.",
        ],
      },
      {
        type: "example",
        text:
          "Példák: *fut, ház, piros, három, ő, ott, alatt, és, jaj!*",
      },
      { type: "tip", text: "Tipp: Kvíz előtt olvasd át a szófajokat hangosan – így rögzül a jelentésük!" },
    ],
  },
  {
    id: "osszefoglalo_mondatelemzes",
    title: "Mondatelemzés – fő mondatrészek",
    color: "#a5d6a7", // halvány zöld
    content: [
      {
        type: "text",
        text:
          "A mondat legfontosabb elemei: alany, állítmány, tárgy, határozó, jelző. Ezek kapcsolata adja a mondat szerkezetét.",
      },
      {
        type: "list",
        items: [
          "Alany – ki/mi végzi a cselekvést.",
          "Állítmány – mit csinál, mi történik.",
          "Tárgy – mit/kit érint a cselekvés.",
          "Határozó – körülmény (hol, mikor, hogyan).",
          "Jelző – az alany/tárgy tulajdonsága.",
        ],
      },
      {
        type: "example",
        text:
          "„A diák reggel a könyvtárban olvas könyvet.” → alany: *diák*, határozók: *reggel*, *a könyvtárban*, tárgy: *könyvet*, állítmány: *olvas*.",
      },
      { type: "tip", text: "Tipp: Dolgozat előtt rajzolj mondatrész-elemző ábrát: így átláthatóvá válik a szerkezet." },
    ],
  },
  {
    id: "osszefoglalo_helyesiras_stilus",
    title: "Helyesírás, stílus és kohézió",
    color: "#ffcc80", // halvány narancs
    content: [
      {
        type: "text",
        text:
          "A helyesírás, a stílus és a kohézió együtt adja a szöveg érthetőségét és igényességét.",
      },
      {
        type: "list",
        items: [
          "Helyesírási alapelvek: kiejtés, szóelemzés, hagyomány, egyszerűsítés.",
          "Stílusrétegek: hivatalos, tudományos, társalgási, publicisztikai, szépirodalmi.",
          "Szövegkohézió: névmások, kötőszók, logikai kapcsolatok.",
          "Netikett: udvariasság, rövid, tiszta mondatok, megfelelő stílus online is.",
        ],
      },
      {
        type: "example",
        text:
          "„A tanárnő figyelmes, **mert** meghallgat mindenkit.” → okhatározói kapcsolat, helyes írásjel, világos stílus.",
      },
      { type: "tip", text: "Tipp: Dolgozatban ügyelj a tagolásra, írásjelekre, és a stílusod illeszd a feladathoz." },
    ],
  },
  {
    id: "osszefoglalo_gyakorlati",
    title: "Gyakorlati tanácsok a dolgozathoz",
    color: "#ce93d8", // lila
    content: [
      {
        type: "text",
        text:
          "A jó dolgozat és kvíz kulcsa az összefüggések megértése. Ne csak memorizálj, hanem **értsd meg**, hogyan épül fel a nyelv.",
      },
      {
        type: "list",
        items: [
          "Olvasd át a tananyag címeit – minden főtémából 2–3 kérdés jöhet.",
          "Ismételd a példákat és a kérdésszavakat (ki? mi? mit? hol?).",
          "A hibákból tanulj: nézd vissza az összegző kártyákat!",
          "Használd a saját kvíz funkciót: így célozhatsz a gyenge pontokra.",
        ],
      },
      {
        type: "example",
        text:
          "„Mi a különbség a melléknév és a határozószó között?” – a melléknév főnévhez, a határozószó igéhez kapcsolódik.",
      },
      { type: "tip", text: "Tipp: A kvíz végén az összegző kártyák színe segít: zöld = biztos tudás, piros = ismétlés ajánlott!" },
    ],
  },
];

export const LESSONS: Lessons = {
  nyelvtan_8_szofajok: {
    title: "Nyelvtan 8 — Szófajok és alaptípusok",
    sections: lesson_szofajok_sections,
  },
  nyelvtan_8_mondatelemzes: {
    title: "Nyelvtan 8 — Mondatelemzés",
    sections: lesson_mondatelemzes_sections,
  },
    nyelvtan_8_helyesiras: {
    title: "Nyelvtan 8 — Helyesírás",
    sections: lesson_helyesiras_sections,
    },
      nyelvtan_8_szovegkohezio: {
    title: "Nyelvtan 8 — Szövegkohézió",
    sections: lesson_szovegkohezio_sections,
  },
  nyelvtan_8_jelentestan: {
    title: "Nyelvtan 8 — Jelentéstan",
    sections: lesson_jelentestan_sections,
  },
  nyelvtan_8_nyelvvaltozatok: {
    title: "Nyelvtan 8 — Nyelvváltozatok és stílus",
    sections: lesson_nyelvvaltozatok_sections,
  },
  nyelvtan_8_zaro: {
    title: "Nyelvtan 8 — Záró összefoglalás",
    sections: lesson_zaro_sections,
  },

};
export default LESSONS;

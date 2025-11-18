// lib/biologia/bank.ts
// 8. évfolyam — BIOLÓGIA kérdésbank és témastruktúra
// Struktúra egyezik a projektben használtal (id, question, choices[{text}], answerIndex, explanation)

export type Choice = { text: string };
export type Question = {
  id: string;
  question: string;
  choices: Choice[];   // pontosan 4 db
  answerIndex: number; // 0..3
  explanation: string;
};
export type Section = { id: string; title: string; bank: Question[] };
export type Topic   = { id: string; title: string; sections: Section[] };

/* ============================================================
   1. FŐTÉMA: SEJT ÉS SZÖVETEK
   ============================================================ */

/* --- ALTÉMA 1: A sejt felépítése --- */
const bank_sejt_felepitese: Question[] = [
  {
    id: "bio_sejt_001",
    question: "Melyik sejtalkotó tartalmazza a DNS legnagyobb részét az eukarióta sejtekben?",
    choices: [{ text: "Sejtplazma" }, { text: "Sejtmag" }, { text: "Mitokondrium" }, { text: "Riboszóma" }],
    answerIndex: 1,
    explanation: "Az eukarióta sejtek örökítőanyagának döntő része a sejtmagban található.",
  },
  {
    id: "bio_sejt_002",
    question: "Mi különbözteti meg alapvetően a növényi és az állati sejtet?",
    choices: [{ text: "Sejthártya" }, { text: "Sejtfal és kloroplasztisz" }, { text: "Riboszóma" }, { text: "Golgi-készülék" }],
    answerIndex: 1,
    explanation: "A növényi sejtnek van sejtfala és kloroplasztisza, az állatinak nincs.",
  },
  {
    id: "bio_sejt_003",
    question: "Melyik sejtalkotó felelős az energiatermelésért (ATP)?",
    choices: [{ text: "Lizoszóma" }, { text: "Kloroplasztisz" }, { text: "Mitokondrium" }, { text: "Sejtfal" }],
    answerIndex: 2,
    explanation: "A mitokondrium a sejtlégzés helye, itt termelődik ATP.",
  },
  {
    id: "bio_sejt_004",
    question: "Hol zajlik a fehérjeszintézis?",
    choices: [{ text: "Riboszómákon" }, { text: "Vakuólumban" }, { text: "Sejtfalban" }, { text: "Lizoszómában" }],
    answerIndex: 0,
    explanation: "A riboszómák a fehérjeszintézis helyei.",
  },
  {
    id: "bio_sejt_005",
    question: "Mi jellemzi a sejthártyát?",
    choices: [{ text: "Teljesen átjárhatatlan" }, { text: "Csak vizet enged át" }, { text: "Féláteresztő" }, { text: "Nincs a sejten" }],
    answerIndex: 2,
    explanation: "A sejthártya szelektíven engedi át az anyagokat (féláteresztő).",
  },
  {
    id: "bio_sejt_006",
    question: "Melyik NEM csak növényi sejtben található?",
    choices: [{ text: "Sejtfal" }, { text: "Kloroplasztisz" }, { text: "Mitokondrium" }, { text: "Nagy központi vakuólum" }],
    answerIndex: 2,
    explanation: "Mitokondrium mindkét sejtben van; sejtfal, kloroplasztisz és nagy vakuólum a növényire jellemző.",
  },
  {
    id: "bio_sejt_007",
    question: "Mi a Golgi-készülék fő feladata?",
    choices: [{ text: "Genetikai információ tárolása" }, { text: "Fehérjék módosítása és szállítása" }, { text: "Energiatermelés" }, { text: "Lebontás" }],
    answerIndex: 1,
    explanation: "A Golgi-készülék a frissen szintetizált fehérjéket módosítja és csomagolja.",
  },
  {
    id: "bio_sejt_008",
    question: "Melyik állítás igaz az eukarióta sejtre?",
    choices: [{ text: "Nincs sejtmagja" }, { text: "Van sejtmagja" }, { text: "Nincs sejtmembránja" }, { text: "Nincs citoplazmája" }],
    answerIndex: 1,
    explanation: "Az eukarióta sejtekben elkülönült sejtmag található.",
  },
  {
    id: "bio_sejt_009",
    question: "Mi a vakuólum szerepe a növényi sejtekben?",
    choices: [{ text: "Anyagok raktározása és ozmózis szabályozása" }, { text: "Fehérjeszintézis" }, { text: "Sejtlégzés" }, { text: "Sejtosztódás" }],
    answerIndex: 0,
    explanation: "A vakuólum raktár és a vízháztartás egyik szabályozója növényi sejtekben.",
  },
  {
    id: "bio_sejt_010",
    question: "Melyik makromolekula alkotja a kromoszómákat?",
    choices: [{ text: "DNS" }, { text: "Zsír" }, { text: "Keményítő" }, { text: "Cellulóz" }],
    answerIndex: 0,
    explanation: "A kromoszómák fő anyaga a DNS fehérjékkel társulva.",
  },
  {
    id: "bio_sejt_011",
    question: "Mi az endoplazmatikus retikulum (ER) egyik szerepe?",
    choices: [{ text: "Anyagok szállítása a sejten belül" }, { text: "Sejtosztódás irányítása" }, { text: "Emésztés" }, { text: "Vérképzés" }],
    answerIndex: 0,
    explanation: "Az ER szállítási és szintézis-feladatokat lát el.",
  },
  {
    id: "bio_sejt_012",
    question: "Mi a különbség a durva és sima ER között?",
    choices: [{ text: "Durvának nincsenek riboszómái" }, { text: "Sima ER-nek vannak riboszómái" }, { text: "Durva ER-nek vannak riboszómái" }, { text: "Nincs különbség" }],
    answerIndex: 2,
    explanation: "A durva ER felszínén riboszómák ülnek; a simán nincsenek.",
  },
  {
    id: "bio_sejt_013",
    question: "Melyik folyamat zajlik a mitokondriumban?",
    choices: [{ text: "Fotoszintézis" }, { text: "Sejtlégzés" }, { text: "Ozmózis" }, { text: "Aktív transzport" }],
    answerIndex: 1,
    explanation: "A sejtlégzés fő helye a mitokondrium.",
  },
  {
    id: "bio_sejt_014",
    question: "Mi a sejtplazma szerepe?",
    choices: [{ text: "A sejt belsejének kitöltése és anyagcsere helye" }, { text: "Genetikai info tárolása" }, { text: "Sejtosztódás" }, { text: "Csak raktározás" }],
    answerIndex: 0,
    explanation: "A citoplazmában sok biokémiai folyamat zajlik.",
  },
  {
    id: "bio_sejt_015",
    question: "Melyik NEM sejtorganellum?",
    choices: [{ text: "Mitokondrium" }, { text: "Riboszóma" }, { text: "Sejtfal" }, { text: "Kloroplasztisz" }],
    answerIndex: 2,
    explanation: "A sejtfal burkoló képlet, nem organellum.",
  },
  {
    id: "bio_sejt_016",
    question: "Mi a kloroplasztisz fő feladata?",
    choices: [{ text: "Fehérjék bontása" }, { text: "Fotoszintézis" }, { text: "Sejtlégzés" }, { text: "Emésztés" }],
    answerIndex: 1,
    explanation: "A fotoszintézis a kloroplasztiszban zajlik.",
  },
  {
    id: "bio_sejt_017",
    question: "Mit jelent a féláteresztő membrán kifejezés?",
    choices: [{ text: "Semmit sem enged át" }, { text: "Csak vizet enged át" }, { text: "Bizonyos anyagokat átenged, másokat nem" }, { text: "Mindet átengedi" }],
    answerIndex: 2,
    explanation: "Szelektíven átjárható a molekulák számára.",
  },
  {
    id: "bio_sejt_018",
    question: "Mi a lizoszóma szerepe?",
    choices: [{ text: "Sejtosztás" }, { text: "Lebontás (emésztőenzimek)" }, { text: "Energiaszintézis" }, { text: "Információtárolás" }],
    answerIndex: 1,
    explanation: "A lizoszómák emésztőenzimeket tartalmaznak.",
  },
  {
    id: "bio_sejt_019",
    question: "Melyik állítás igaz a prokarióta sejtekre?",
    choices: [{ text: "Van sejtmagjuk" }, { text: "Nincs sejtmagjuk" }, { text: "Nincs sejthártyájuk" }, { text: "Csak növényekben vannak" }],
    answerIndex: 1,
    explanation: "A prokarióták (baktériumok) sejtmag nélküliek.",
  },
  {
    id: "bio_sejt_020",
    question: "Mi a kromoszóma?",
    choices: [{ text: "Energiatermelő szerv" }, { text: "Fehérje lebontó enzim" }, { text: "DNS-ből és fehérjékből álló struktúra" }, { text: "Sejthártya pórusa" }],
    answerIndex: 2,
    explanation: "A kromoszómák DNS-t és fehérjéket tartalmaznak.",
  },
];
const section_sejt_felepitese: Section = {
  id: "sejt_felepitese",
  title: "A sejt felépítése",
  bank: bank_sejt_felepitese,
};

/* --- ALTÉMA 2: Sejtorganellumok --- */
const bank_sejtorganellumok: Question[] = [
  {
    id: "bio_org_001",
    question: "Melyik organellum a fehérjék módosításáért és szortírozásáért felelős?",
    choices: [{ text: "Golgi-készülék" }, { text: "Mitokondrium" }, { text: "Lizoszóma" }, { text: "Sejtmag" }],
    answerIndex: 0,
    explanation: "A Golgi-készülék csomagolja és módosítja a fehérjéket a szállításhoz.",
  },
  {
    id: "bio_org_002",
    question: "Melyik organellumban zajlik túlnyomórészt a sejtlégzés?",
    choices: [{ text: "Mitokondrium" }, { text: "Peroxiszóma" }, { text: "Sima ER" }, { text: "Centriolum" }],
    answerIndex: 0,
    explanation: "A mitokondrium végzi az ATP-termelő sejtlégzést.",
  },
  {
    id: "bio_org_003",
    question: "Hol történik a fehérjék szintézise?",
    choices: [{ text: "Riboszómákon" }, { text: "Lizoszómákban" }, { text: "Peroxiszómákban" }, { text: "Sejtmagban" }],
    answerIndex: 0,
    explanation: "A riboszómák a fehérjeszintézis helyei.",
  },
  {
    id: "bio_org_004",
    question: "Melyik különbözteti meg a durva ER-t a sima ER-től?",
    choices: [{ text: "Riboszómák jelenléte a felszínen" }, { text: "Maghártya kapcsolódás" }, { text: "Klórplasztisz tartalma" }, { text: "Mitotikus orsó képzése" }],
    answerIndex: 0,
    explanation: "A durva ER felszínén riboszómák ülnek, a simán nincsenek.",
  },
  {
    id: "bio_org_005",
    question: "Melyik organellum tartalmazza a klorofillt?",
    choices: [{ text: "Kloroplasztisz" }, { text: "Mitokondrium" }, { text: "Sejtmag" }, { text: "Centriolum" }],
    answerIndex: 0,
    explanation: "A kloroplasztiszban zajlik a fotoszintézis a klorofill segítségével.",
  },
  {
    id: "bio_org_006",
    question: "Mi a lizoszómák fő feladata?",
    choices: [{ text: "Makromolekulák lebontása" }, { text: "Fehérjeszintézis" }, { text: "Energiatermelés" }, { text: "Genetikai információ tárolása" }],
    answerIndex: 0,
    explanation: "A lizoszómák hidrolitikus enzimeket tartalmaznak lebontásra.",
  },
  {
    id: "bio_org_007",
    question: "Melyik organellum semlegesíti a reaktív oxigénfajtákat?",
    choices: [{ text: "Peroxiszóma" }, { text: "Riboszóma" }, { text: "Sima ER" }, { text: "Sejtmag" }],
    answerIndex: 0,
    explanation: "A peroxiszómák detoxikációs reakciókat végeznek (pl. H₂O₂ bontása).",
  },
  {
    id: "bio_org_008",
    question: "Hol található a nukleolusz és mi a szerepe?",
    choices: [{ text: "Sejtmagban; rRNS és riboszóma-alegységek képzése" }, { text: "Mitokondriumban; ATP-termelés" }, { text: "Citoplazmában; fehérjebontás" }, { text: "Kloroplasztiszban; fotoszintézis" }],
    answerIndex: 0,
    explanation: "A sejtmagban lévő nukleolusz a riboszóma-alkotórészeket állítja elő.",
  },
  {
    id: "bio_org_009",
    question: "Melyik organellum jellemző a növényi sejtekre, de az állatiakban nincs?",
    choices: [{ text: "Kloroplasztisz" }, { text: "Mitokondrium" }, { text: "Riboszóma" }, { text: "Golgi-készülék" }],
    answerIndex: 0,
    explanation: "A kloroplasztisz csak növényekben (és algákban) fordul elő.",
  },
  {
    id: "bio_org_010",
    question: "Mi a sejtváz (citoszkeleton) fő szerepe?",
    choices: [{ text: "Sejt alakjának fenntartása és anyagok szállítása" }, { text: "DNS másolása" }, { text: "Fehérjék lebontása" }, { text: "Hormonok szintézise" }],
    answerIndex: 0,
    explanation: "A mikrotubulusok, mikrofilamentumok tartják a sejtvázat és segítik a transzportot.",
  },
  {
    id: "bio_org_011",
    question: "Melyik organellum kapcsolódik a fehérjék szekréciós útjához?",
    choices: [{ text: "Durva ER → Golgi-készülék → vezikulák" }, { text: "Mitokondrium → lizoszóma" }, { text: "Peroxiszóma → sejtmag" }, { text: "Sima ER → sejtmag" }],
    answerIndex: 0,
    explanation: "A szekréciós fehérjék a durva ER-ből a Golgiba kerülnek, majd vezikulákba.",
  },
  {
    id: "bio_org_012",
    question: "Melyik organellum végzi főként a lipidszintézist?",
    choices: [{ text: "Sima endoplazmatikus retikulum" }, { text: "Riboszóma" }, { text: "Lizoszóma" }, { text: "Centriolum" }],
    answerIndex: 0,
    explanation: "A sima ER feladata a lipid- és szteroidszintézis, detoxikáció.",
  },
  {
    id: "bio_org_013",
    question: "Melyik állítás igaz a mitokondriumra?",
    choices: [{ text: "Kettős membránú organellum" }, { text: "Csak növényekben van" }, { text: "Nincs saját DNS-e" }, { text: "Fényenergiát alakít kémiaivá" }],
    answerIndex: 0,
    explanation: "A mitokondrium kettős membránú és saját DNS-sel is rendelkezik.",
  },
  {
    id: "bio_org_014",
    question: "Mi a centriolum feladata állati sejtekben?",
    choices: [{ text: "Osztódási orsó szervezése" }, { text: "Fehérjeszintézis" }, { text: "Fotoszintézis" }, { text: "Anyagok lebontása" }],
    answerIndex: 0,
    explanation: "A centriolumok a mikrotubulusokból álló orsót szervezik mitózis/meiòzis idején.",
  },
  {
    id: "bio_org_015",
    question: "Melyik állítás igaz a kloroplasztiszra?",
    choices: [{ text: "Kettős membránja és saját DNS-e van" }, { text: "Csak állatokban van" }, { text: "Lizoszomális enzimeket tartalmaz" }, { text: "Fehérjeszintézist végez" }],
    answerIndex: 0,
    explanation: "A kloroplasztisz is endoszimbionta eredetű, saját DNS-sel.",
  },
  {
    id: "bio_org_016",
    question: "Hol játszódik le a fehérjék végső módosítása és csomagolása?",
    choices: [{ text: "Golgi-készülékben" }, { text: "Sejtmagban" }, { text: "Mitokondriumban" }, { text: "Lizoszómában" }],
    answerIndex: 0,
    explanation: "A Golgi végzi a glikozilálást, szortírozást és csomagolást.",
  },
  {
    id: "bio_org_017",
    question: "Melyik organellum vesz részt a sejten belüli emésztésben?",
    choices: [{ text: "Lizoszóma" }, { text: "Riboszóma" }, { text: "Sima ER" }, { text: "Kloroplasztisz" }],
    answerIndex: 0,
    explanation: "A lizoszómák emésztőenzimeikkel lebontanak makromolekulákat.",
  },
  {
    id: "bio_org_018",
    question: "Melyik szakaszhoz kötődik leginkább a mikrotubulusok szerepe?",
    choices: [{ text: "Sejtosztódás (orsófonalak)" }, { text: "Fehérjeszintézis" }, { text: "Sejtlégzés" }, { text: "Fotoszintézis" }],
    answerIndex: 0,
    explanation: "A mikrotubulusok kulcsfontosságúak az osztódási orsó felépítésében.",
  },
  {
    id: "bio_org_019",
    question: "Melyik organellum kapcsolódik szorosan a sejtmaghártyához?",
    choices: [{ text: "Durva endoplazmatikus retikulum" }, { text: "Mitokondrium" }, { text: "Peroxiszóma" }, { text: "Lizoszóma" }],
    answerIndex: 0,
    explanation: "A durva ER gyakran közvetlenül a maghártyához kapcsolódik.",
  },
  {
    id: "bio_org_020",
    question: "Melyik organellum hiánya okozná közvetlenül az ATP-termelés leállását?",
    choices: [{ text: "Mitokondrium" }, { text: "Riboszóma" }, { text: "Golgi-készülék" }, { text: "Lizoszóma" }],
    answerIndex: 0,
    explanation: "Az ATP nagy része a mitokondriumban képződik oxidatív foszforilációval.",
  },
];
const section_sejtorganellumok: Section = {
  id: "sejtorganellumok",
  title: "Sejtorganellumok",
  bank: bank_sejtorganellumok,
};

  /* --- ALTÉMA 3: Szövetek típusai --- */
const bank_szovetek_tipusai: Question[] = [
  {
    id: "bio_szov_001",
    question: "Mi a szövet definíciója?",
    choices: [{ text: "Azonos felépítésű és működésű sejtek együttese" }, { text: "Az összes sejt összessége" }, { text: "Csak idegsejtek halmaza" }, { text: "Csak vérsejtek halmaza" }],
    answerIndex: 0,
    explanation: "A szövet azonos felépítésű és funkciójú sejtek csoportja.",
  },
  {
    id: "bio_szov_002",
    question: "Melyek az alapvető szövettípusok?",
    choices: [{ text: "Hám, izom, ideg, kötő- és támasztó" }, { text: "Hám, vér, zsír" }, { text: "Csak kötőszövet" }, { text: "Csak izomszövet" }],
    answerIndex: 0,
    explanation: "A klasszikus felosztás négy fő típust különít el.",
  },
  {
    id: "bio_szov_003",
    question: "Mi a hám fő feladata a bőrön?",
    choices: [{ text: "Védelem (mechanikai, kémiai, kórokozók ellen)" }, { text: "Vérképzés" }, { text: "Impulzusvezetés" }, { text: "Zsírraktározás" }],
    answerIndex: 0,
    explanation: "A hám borít és véd, valamint egyes helyeken felszív és kiválaszt.",
  },
  {
    id: "bio_szov_004",
    question: "Melyik izomszövet akaratlagos működésű?",
    choices: [{ text: "Vázizom" }, { text: "Simaizom" }, { text: "Szívizom" }, { text: "Mind akaratlan" }],
    answerIndex: 0,
    explanation: "A vázizom harántcsíkolt és akaratlagosan irányítható.",
  },
  {
    id: "bio_szov_005",
    question: "Melyik állítás igaz a szívizomra?",
    choices: [{ text: "Akarattól függetlenül működik" }, { text: "Többrétegű laphám" }, { text: "Zsírszövet" }, { text: "Csak a végtagokban található" }],
    answerIndex: 0,
    explanation: "A szívizom saját ingerképző rendszerrel rendelkezik.",
  },
  {
    id: "bio_szov_006",
    question: "Mi a kötőszövet egyik fő feladata?",
    choices: [{ text: "Támasztás és összeköttetés a szövetek között" }, { text: "Idegi ingerület vezetése" }, { text: "Fotoszintézis" }, { text: "Sejtosztódás" }],
    answerIndex: 0,
    explanation: "A kötőszövet mechanikai támaszt nyújt és összeköt.",
  },
  {
    id: "bio_szov_007",
    question: "Melyik támasztószövet ad a legnagyobb szilárdságot a testnek?",
    choices: [{ text: "Csontszövet" }, { text: "Porcszövet" }, { text: "Zsírszövet" }, { text: "Laza rostos kötőszövet" }],
    answerIndex: 0,
    explanation: "A csontszövet ásványi sókat tartalmaz, nagy szilárdságú.",
  },
  {
    id: "bio_szov_008",
    question: "Mi a porc alapállományának jellegzetessége?",
    choices: [{ text: "Rugalmas, kollagén és elasztikus rostokat tartalmaz" }, { text: "Csak ásványi sókból áll" }, { text: "Nincs sejt közötti állomány" }, { text: "Csak folyadék" }],
    answerIndex: 0,
    explanation: "A porc rugalmas a gazdag mátrixnak köszönhetően.",
  },
  {
    id: "bio_szov_009",
    question: "Mi a vér különlegessége szövetként?",
    choices: [{ text: "Folyékony sejtközötti állománya van (plazma)" }, { text: "Nincs sejtje" }, { text: "Csak zsírból áll" }, { text: "Csak sejtekből áll, állomány nélkül" }],
    answerIndex: 0,
    explanation: "A vér kötőszöveti eredetű, plazmában úszó alakos elemekkel.",
  },
  {
    id: "bio_szov_010",
    question: "Mely sejtek szállítanak oxigént a vérben?",
    choices: [{ text: "Vörösvérsejtek" }, { text: "Fehérvérsejtek" }, { text: "Vérlemezkék" }, { text: "Fibroblasztok" }],
    answerIndex: 0,
    explanation: "A hemoglobin a vörösvérsejtekben köti az oxigént.",
  },
  {
    id: "bio_szov_011",
    question: "Mi a zsírszövet fő funkciója?",
    choices: [{ text: "Energiaraktározás és hőszigetelés" }, { text: "Impulzusvezetés" }, { text: "Gázcsere" }, { text: "Véralvadás" }],
    answerIndex: 0,
    explanation: "A zsír energiaraktár és hővédő réteget képez.",
  },
  {
    id: "bio_szov_012",
    question: "Melyik hám borítja a tüdő léghólyagocskáit?",
    choices: [{ text: "Egyrétegű laphám" }, { text: "Többrétegű elszarusodó laphám" }, { text: "Hengerhám csillókkal" }, { text: "Köbhám" }],
    answerIndex: 0,
    explanation: "Az egyrétegű laphám rövid diffúziós úthosszt biztosít.",
  },
  {
    id: "bio_szov_013",
    question: "Mely sejtek alkotják az idegszövet támogató állományát?",
    choices: [{ text: "Gliasejtek" }, { text: "Vörösvérsejtek" }, { text: "Fibrocyták" }, { text: "Oszteoklasztok" }],
    answerIndex: 0,
    explanation: "A gliasejtek táplálják és védik a neuronokat.",
  },
  {
    id: "bio_szov_014",
    question: "Melyik állítás igaz a vázizomszövetre?",
    choices: [{ text: "Harántcsíkolt és gyors kontrakcióra képes" }, { text: "Sima felszínű és lassú" }, { text: "Önkéntelenül működik" }, { text: "Nincs benne aktin-miozin" }],
    answerIndex: 0,
    explanation: "A vázizom akaratlagos, harántcsíkolt szerkezetű.",
  },
  {
    id: "bio_szov_015",
    question: "Melyik szövet borítja és védi a test külső felszínét?",
    choices: [{ text: "Hám" }, { text: "Kötőszövet" }, { text: "Porc" }, { text: "Csont" }],
    answerIndex: 0,
    explanation: "A bőr felszínét többrétegű hám borítja.",
  },
  {
    id: "bio_szov_016",
    question: "Mi adja a csont különleges szilárdságát?",
    choices: [{ text: "Ásványi sók (főleg Ca-foszfát) a szerves mátrixban" }, { text: "Csak víz" }, { text: "Csak zsír" }, { text: "Csak fehérje" }],
    answerIndex: 0,
    explanation: "A szerves mátrixot ásványi sók impregnálják.",
  },
  {
    id: "bio_szov_017",
    question: "Melyik szövet felel az ingerület továbbításáért?",
    choices: [{ text: "Idegszövet" }, { text: "Kötőszövet" }, { text: "Zsírszövet" }, { text: "Porcszövet" }],
    answerIndex: 0,
    explanation: "A neuronok elektromos jeleket vezetnek.",
  },
  {
    id: "bio_szov_018",
    question: "Hol történik a vérsejtek képzése?",
    choices: [{ text: "Csontvelőben" }, { text: "Májban" }, { text: "Lépben" }, { text: "Nyirokcsomóban" }],
    answerIndex: 0,
    explanation: "A vörös csontvelő a vérképzés helye.",
  },
  {
    id: "bio_szov_019",
    question: "Melyik állítás igaz a simaizomzatra?",
    choices: [{ text: "Zsigerek falában található, akaratunktól független" }, { text: "Csak a csontokhoz tapad" }, { text: "Harántcsíkolt" }, { text: "Csak a szívben van" }],
    answerIndex: 0,
    explanation: "A simaizom a belső szervek falában dolgozik automatikusan.",
  },
  {
    id: "bio_szov_020",
    question: "Melyik szövet alkotja az inakat és szalagokat főként?",
    choices: [{ text: "Tömött rostos kötőszövet" }, { text: "Laza rostos kötőszövet" }, { text: "Porc" }, { text: "Zsírszövet" }],
    answerIndex: 0,
    explanation: "A tömött rostos kötőszövet nagy szakítószilárdságú, inakban-szalagokban gyakori.",
  },
];
const section_szovetek_tipusai = {
  id: "szovetek_tipusai",
  title: "Szövetek típusai",
  bank: bank_szovetek_tipusai,
};


/* ============================================================
   2. FŐTÉMA: TÁPLÁLKOZÁS ÉS EMÉSZTÉS
   ============================================================ */

/* --- ALTÉMA 1: Az emésztőrendszer felépítése --- */
const bank_emeszto_rendszer_felepitese: Question[] = [
  {
    id: "bio_emeszto_001",
    question: "Mi a táplálék helyes útja az emésztőrendszerben?",
    choices: [
      { text: "Száj → gyomor → nyelőcső → vastagbél → vékonybél → végbél" },
      { text: "Száj → nyelőcső → gyomor → vékonybél → vastagbél → végbél" },
      { text: "Száj → garat → gége → légcső → tüdő" },
      { text: "Száj → vékonybél → gyomor → vastagbél → végbél" },
    ],
    answerIndex: 1,
    explanation: "A táplálék sorrendje: száj, nyelőcső, gyomor, vékonybél, vastagbél, végbél.",
  },
  {
    id: "bio_emeszto_002",
    question: "Mi a szájüreg egyik fő feladata?",
    choices: [
      { text: "Fehérjék bontása pepszinnel" },
      { text: "Keményítő bontásának megkezdése amilázzal" },
      { text: "Víz visszaszívása" },
      { text: "Epe termelése" },
    ],
    answerIndex: 1,
    explanation: "A nyál amiláz enzimet tartalmaz, ami a keményítő bontását indítja.",
  },
  {
    id: "bio_emeszto_003",
    question: "Mely szerv köti össze a garatot a gyomorral?",
    choices: [{ text: "Légcső" }, { text: "Vékonybél" }, { text: "Nyelőcső" }, { text: "Patkóbél" }],
    answerIndex: 2,
    explanation: "A nyelőcső perisztaltikával juttatja a falatot a gyomorba.",
  },
  {
    id: "bio_emeszto_004",
    question: "Mi akadályozza meg a gyomortartalom visszaáramlását a nyelőcsőbe?",
    choices: [
      { text: "Pylorus (gyomorkapu) záróizma" },
      { text: "Gyomorszáj (kardia) záróizma" },
      { text: "Vastagbél billentyűi" },
      { text: "Hasnyálmirigy váladéka" },
    ],
    answerIndex: 1,
    explanation: "A gyomorszáj záróizma (kardia) gátolja a refluxot.",
  },
  {
    id: "bio_emeszto_005",
    question: "Mi a gyomorsav fő összetevője?",
    choices: [{ text: "Ecetsav" }, { text: "Sósav" }, { text: "Tejsav" }, { text: "Szénsav" }],
    answerIndex: 1,
    explanation: "A gyomorsav sósavat tartalmaz, ami aktiválja a pepszint.",
  },
  {
    id: "bio_emeszto_006",
    question: "Hol ömlik a hasnyál és az epe az emésztőrendszerbe?",
    choices: [{ text: "Gyomor" }, { text: "Patkóbél (nyombél)" }, { text: "Éhbél" }, { text: "Vastagbél" }],
    answerIndex: 1,
    explanation: "A patkóbélbe (duodenum) nyílik a hasnyálmirigy- és epevezeték.",
  },
  {
    id: "bio_emeszto_007",
    question: "Melyik szerv termeli az epét?",
    choices: [{ text: "Hasnyálmirigy" }, { text: "Máj" }, { text: "Gyomor" }, { text: "Vese" }],
    answerIndex: 1,
    explanation: "Az epe a májban termelődik, az epehólyag tárolja.",
  },
  {
    id: "bio_emeszto_008",
    question: "Mi az epe fő feladata?",
    choices: [
      { text: "Fehérjék bontása" },
      { text: "Zsírok emulgeálása" },
      { text: "Keményítő bontása" },
      { text: "Vitaminok termelése" },
    ],
    answerIndex: 1,
    explanation: "Az epe apró cseppekre bontja a zsírokat, segítve a lipáz működését.",
  },
  {
    id: "bio_emeszto_009",
    question: "Mi a vékonybél legfőbb feladata?",
    choices: [
      { text: "Tápanyagok emésztése és felszívása" },
      { text: "Víz visszaszívása" },
      { text: "Bélsár tárolása" },
      { text: "Hormonok termelése a vérképzéshez" },
    ],
    answerIndex: 0,
    explanation: "A vékonybél az emésztés és felszívás fő helye.",
  },
  {
    id: "bio_emeszto_010",
    question: "Hol történik döntően a víz visszaszívása?",
    choices: [{ text: "Gyomor" }, { text: "Vastagbél" }, { text: "Patkóbél" }, { text: "Hasnyálmirigy" }],
    answerIndex: 1,
    explanation: "A vastagbél fő feladata a víz és sók visszaszívása.",
  },
  {
    id: "bio_emeszto_011",
    question: "Mi a hasnyálmirigy exokrin működésének lényege?",
    choices: [
      { text: "Hormonok (inzulin, glukagon) termelése" },
      { text: "Emésztőenzimek termelése és ürítése a bélbe" },
      { text: "Epe termelése" },
      { text: "Vizeletkiválasztás" },
    ],
    answerIndex: 1,
    explanation: "A hasnyálmirigy emésztőenzimeket választ ki a duodenumba.",
  },
  {
    id: "bio_emeszto_012",
    question: "Melyik a gyomor egyik fontos emésztőenzime?",
    choices: [{ text: "Pepszin" }, { text: "Tripszin" }, { text: "Amiláz" }, { text: "Lipáz" }],
    answerIndex: 0,
    explanation: "A pepszin a fehérjék bontását kezdi meg savas közegben.",
  },
  {
    id: "bio_emeszto_013",
    question: "Mi a perisztaltika?",
    choices: [
      { text: "A bélbolyhok mozgatása" },
      { text: "A falat előrehaladását biztosító hullámzó izommozgás" },
      { text: "A nyálkatermelés fokozódása" },
      { text: "A máj epekiválasztása" },
    ],
    answerIndex: 1,
    explanation: "A perisztaltika továbbítja a táplálékot a cső alakú szervekben.",
  },
  {
    id: "bio_emeszto_014",
    question: "Melyik állítás igaz a vakbélre és a féregnyúlványra?",
    choices: [
      { text: "Fő emésztőszerv" },
      { text: "Nincs szerepe az immunrendszerben" },
      { text: "Nyirokszervként is működik" },
      { text: "Közvetlenül az epehólyaghoz csatlakozik" },
    ],
    answerIndex: 2,
    explanation: "A féregnyúlvány nyirokszervként funkcionálhat.",
  },
  {
    id: "bio_emeszto_015",
    question: "Melyik szerv választ ki inzulint?",
    choices: [{ text: "Hasnyálmirigy" }, { text: "Máj" }, { text: "Gyomor" }, { text: "Vese" }],
    answerIndex: 0,
    explanation: "Az inzulint a hasnyálmirigy Langerhans-szigetei termelik.",
  },
  {
    id: "bio_emeszto_016",
    question: "Mi a hashártya egyik szerepe?",
    choices: [
      { text: "Agy-gerincvelői folyadék termelése" },
      { text: "Hasüregi szervek rögzítése és védelme" },
      { text: "Vizeletképzés" },
      { text: "Vérnyomás szabályozása" },
    ],
    answerIndex: 1,
    explanation: "A hashártya (peritoneum) burkol és rögzít.",
  },
  {
    id: "bio_emeszto_017",
    question: "Hol található a pylorus?",
    choices: [{ text: "Gyomor bemeneténél" }, { text: "Gyomor kimeneténél (patkóbél felé)" }, { text: "Nyelőcső közepén" }, { text: "Vastagbél kezdetén" }],
    answerIndex: 1,
    explanation: "A pylorus a gyomor kimeneti záróizma.",
  },
  {
    id: "bio_emeszto_018",
    question: "Mi a nyál szerepe NEM?",
    choices: [
      { text: "Falat nedvesítése" },
      { text: "Keményítő bontásának indítása" },
      { text: "Fehérjék teljes lebontása" },
      { text: "A szájüreg tisztítása" },
    ],
    answerIndex: 2,
    explanation: "A fehérjék teljes lebontása nem a szájüregben történik.",
  },
  {
    id: "bio_emeszto_019",
    question: "Melyik nem része az emésztőrendszernek?",
    choices: [{ text: "Garat" }, { text: "Gége" }, { text: "Gyomor" }, { text: "Vastagbél" }],
    answerIndex: 1,
    explanation: "A gége a légzőrendszer része.",
  },
  {
    id: "bio_emeszto_020",
    question: "Mi történik a végbélben?",
    choices: [
      { text: "Tápanyagok felszívása" },
      { text: "Bélsár tárolása és kiürítése" },
      { text: "Fehérjék bontása" },
      { text: "Epe tárolása" },
    ],
    answerIndex: 1,
    explanation: "A végbél feladata a bélsár tárolása és kiürítése.",
  },
];
const section_emeszto_rendszer_felepitese: Section = {
  id: "emeszto_rendszer_felepitese",
  title: "Az emésztőrendszer felépítése",
  bank: bank_emeszto_rendszer_felepitese,
};
/* --- ALTÉMA 2: Tápanyagok és vitaminok --- */
const bank_tapanyagok_vitaminok: Question[] = [
  {
    id: "bio_tap_001",
    question: "Melyek a fő tápanyagcsoportok?",
    choices: [
      { text: "Szénhidrátok, fehérjék, zsírok" },
      { text: "Vitaminok, víz, rostok" },
      { text: "Ásványi anyagok, víz, rostok" },
      { text: "Enzimek, hormonok, hemoglobin" },
    ],
    answerIndex: 0,
    explanation: "A három fő makrotápanyag: szénhidrát, fehérje, zsír.",
  },
  {
    id: "bio_tap_002",
    question: "Mi a fehérjék építőköve?",
    choices: [{ text: "Zsírsav" }, { text: "Aminosav" }, { text: "Glükóz" }, { text: "Cellulóz" }],
    answerIndex: 1,
    explanation: "A fehérjék aminosavakból épülnek fel.",
  },
  {
    id: "bio_tap_003",
    question: "Melyik tápanyag ad a legtöbb energiát grammonként?",
    choices: [{ text: "Fehérje" }, { text: "Szénhidrát" }, { text: "Zsír" }, { text: "Víz" }],
    answerIndex: 2,
    explanation: "A zsírok ~9 kcal/g energiát adnak.",
  },
  {
    id: "bio_tap_004",
    question: "Mi a rostanyagok (élelmi rostok) szerepe?",
    choices: [
      { text: "Fehérjék lebontása" },
      { text: "Bélműködés serkentése, teltségérzet" },
      { text: "Oxigénszállítás" },
      { text: "Hormontermelés" },
    ],
    answerIndex: 1,
    explanation: "A rostok javítják a bélperisztaltikát és a széklet állagát.",
  },
  {
    id: "bio_tap_005",
    question: "Mely vitamin zsírban oldódik?",
    choices: [{ text: "C-vitamin" }, { text: "B1-vitamin" }, { text: "D-vitamin" }, { text: "B12-vitamin" }],
    answerIndex: 2,
    explanation: "Az A-, D-, E-, K-vitamin zsírban oldódik.",
  },
  {
    id: "bio_tap_006",
    question: "Mi a C-vitamin hiánybetegsége?",
    choices: [{ text: "Angolkór" }, { text: "Vészes vérszegénység" }, { text: "Skorbut" }, { text: "Golyva" }],
    answerIndex: 2,
    explanation: "C-vitamin hiányában skorbut alakulhat ki.",
  },
  {
    id: "bio_tap_007",
    question: "Mi a D-vitamin hiányhoz köthető betegség?",
    choices: [{ text: "Skorbut" }, { text: "Angolkór" }, { text: "Pellagra" }, { text: "Beriberi" }],
    answerIndex: 1,
    explanation: "D-vitamin hiány a csontok ásványianyag-beépülését rontja (angolkór).",
  },
  {
    id: "bio_tap_008",
    question: "Melyik vitamin oldódik vízben?",
    choices: [{ text: "A-vitamin" }, { text: "D-vitamin" }, { text: "E-vitamin" }, { text: "B-vitaminok" }],
    answerIndex: 3,
    explanation: "A B-vitaminok és a C-vitamin vízoldékonyak.",
  },
  {
    id: "bio_tap_009",
    question: "Melyik ásványi anyag fontos a vér oxigénszállításához?",
    choices: [{ text: "Kalcium" }, { text: "Vas" }, { text: "Nátrium" }, { text: "Kálium" }],
    answerIndex: 1,
    explanation: "A hemoglobin vasat tartalmaz.",
  },
  {
    id: "bio_tap_010",
    question: "Melyik vitamin termelődhet a bőrben napfény hatására?",
    choices: [{ text: "D-vitamin" }, { text: "C-vitamin" }, { text: "B6-vitamin" }, { text: "K-vitamin" }],
    answerIndex: 0,
    explanation: "UV-fény hatására a bőrben D-vitamin keletkezik.",
  },
  {
    id: "bio_tap_011",
    question: "Mi a B12-vitamin egyik fő szerepe?",
    choices: [
      { text: "Véralvadás" },
      { text: "Vörösvérsejt-képzés, idegrendszer" },
      { text: "Látás pigmentjeinek felépítése" },
      { text: "Csontképzés" },
    ],
    answerIndex: 1,
    explanation: "A B12 nélkülözhetetlen a vérképzéshez és az idegrendszerhez.",
  },
  {
    id: "bio_tap_012",
    question: "Mi az emberi szervezet fő, gyorsan hasznosítható energiaforrása?",
    choices: [{ text: "Glükóz" }, { text: "Cellulóz" }, { text: "Keményítő" }, { text: "Glikogén" }],
    answerIndex: 0,
    explanation: "A sejtek közvetlen energiaforrása a glükóz.",
  },
  {
    id: "bio_tap_013",
    question: "Melyik ásványi anyag kulcsfontosságú a csontok szilárdságához?",
    choices: [{ text: "Vas" }, { text: "Cink" }, { text: "Kalcium" }, { text: "Réz" }],
    answerIndex: 2,
    explanation: "A csontok ásványi állományában sok kalcium-foszfát van.",
  },
  {
    id: "bio_tap_014",
    question: "Mi a kiegyensúlyozott táplálkozás egyik alapelve?",
    choices: [
      { text: "Csak zsírok fogyasztása" },
      { text: "Változatosság és mértékletesség" },
      { text: "Csak szénhidrátok fogyasztása" },
      { text: "Napi vitaminok elhagyása" },
    ],
    answerIndex: 1,
    explanation: "A változatos, mértékletes étrend fedezi a szükségleteket.",
  },
  {
    id: "bio_tap_015",
    question: "Melyik vitamin hiányához köthető a véralvadás zavara?",
    choices: [{ text: "K-vitamin" }, { text: "A-vitamin" }, { text: "D-vitamin" }, { text: "C-vitamin" }],
    answerIndex: 0,
    explanation: "A K-vitamin szükséges több alvadási faktor képzéséhez.",
  },
  {
    id: "bio_tap_016",
    question: "Melyik tápanyag tartalmaz esszenciális aminosavakat?",
    choices: [{ text: "Fehérjék" }, { text: "Szénhidrátok" }, { text: "Zsírok" }, { text: "Víz" }],
    answerIndex: 0,
    explanation: "Az esszenciális aminosavakat fehérjékkel kell felvennünk.",
  },
  {
    id: "bio_tap_017",
    question: "Mi segíti a vas felszívódását a bélben?",
    choices: [{ text: "C-vitamin" }, { text: "D-vitamin" }, { text: "A-vitamin" }, { text: "K-vitamin" }],
    answerIndex: 0,
    explanation: "A C-vitamin fokozza a vas felszívódását.",
  },
  {
    id: "bio_tap_018",
    question: "Melyik tápanyagból épülnek fel a hormonok és sejtmembránok jelentős része?",
    choices: [{ text: "Zsírok (lipidek)" }, { text: "Keményítő" }, { text: "Cellulóz" }, { text: "Víz" }],
    answerIndex: 0,
    explanation: "A lipidek a membránok és számos hormon alapjai.",
  },
  {
    id: "bio_tap_019",
    question: "Mi a glikogén?",
    choices: [
      { text: "Állati eredetű tartalék szénhidrát" },
      { text: "Növényi sejtfal alkotója" },
      { text: "Zsírsav bontási végterméke" },
      { text: "Fehérjék építőeleme" },
    ],
    answerIndex: 0,
    explanation: "A glikogén a májban és izmokban raktározott poliszacharid.",
  },
  {
    id: "bio_tap_020",
    question: "Miért fontos a megfelelő folyadékbevitel?",
    choices: [
      { text: "Oldószerként szolgál és hőszabályoz" },
      { text: "Csökkenti a hemoglobin mennyiségét" },
      { text: "Megakadályozza a fehérjeszintézist" },
      { text: "Közvetlenül vitaminokat termel" },
    ],
    answerIndex: 0,
    explanation: "A víz oldószer, szállít és a hőháztartás kulcsa.",
  },
];
const section_tapanyagok_vitaminok: Section = {
  id: "tapanyagok_vitaminok",
  title: "Tápanyagok és vitaminok",
  bank: bank_tapanyagok_vitaminok,
};
/* --- ALTÉMA 3: Emésztés és felszívódás --- */

const bank_emesztes_felszivas: Question[] = [
  {
    id: "bio_felsz_001",
    question: "Hol kezdődik a keményítő emésztése?",
    choices: [{ text: "Szájüreg" }, { text: "Gyomor" }, { text: "Patkóbél" }, { text: "Vastagbél" }],
    answerIndex: 0,
    explanation: "A nyál amiláz enzimje már a szájban bontja a keményítőt.",
  },
  {
    id: "bio_felsz_002",
    question: "Melyik enzim bontja a fehérjéket a gyomorban?",
    choices: [{ text: "Pepszin" }, { text: "Amiláz" }, { text: "Maltáz" }, { text: "Laktáz" }],
    answerIndex: 0,
    explanation: "A pepszin savas közegben kezdi meg a fehérjebontást.",
  },
  {
    id: "bio_felsz_003",
    question: "Mi az epe szerepe az emésztésben?",
    choices: [
      { text: "Fehérjék bontása" },
      { text: "Zsírok emulgeálása" },
      { text: "Szénhidrátok lebontása" },
      { text: "Vitaminok szintézise" },
    ],
    answerIndex: 1,
    explanation: "Az epe apró cseppekre bontja a zsírokat, így a lipáz hatékonyabb.",
  },
  {
    id: "bio_felsz_004",
    question: "Mi a vékonybél bolyhainak funkciója?",
    choices: [
      { text: "Vérnyomás szabályozása" },
      { text: "Felszívó felület jelentős növelése" },
      { text: "Epe termelése" },
      { text: "Víz visszaszívása" },
    ],
    answerIndex: 1,
    explanation: "A bélbolyhok és mikrobolyhok hatalmasra növelik a felületet.",
  },
  {
    id: "bio_felsz_005",
    question: "Mi a szénhidrátbontás végterméke, ami felszívódik?",
    choices: [{ text: "Aminosav" }, { text: "Zsírsav" }, { text: "Glükóz" }, { text: "Glicerin" }],
    answerIndex: 2,
    explanation: "A monoszacharidok (pl. glükóz) szívódnak fel.",
  },
  {
    id: "bio_felsz_006",
    question: "Mi a fehérjebontás fő végterméke a felszívódáshoz?",
    choices: [{ text: "Aminosavak" }, { text: "Diszacharidok" }, { text: "Zsírsavak" }, { text: "Glicerin" }],
    answerIndex: 0,
    explanation: "A fehérjék aminosavakra bomlanak, így szívódnak fel.",
  },
  {
    id: "bio_felsz_007",
    question: "Mi a zsírbontás végterméke a felszívódás előtt?",
    choices: [{ text: "Aminosav" }, { text: "Zsírsav és glicerin" }, { text: "Glükóz" }, { text: "Rostok" }],
    answerIndex: 1,
    explanation: "A trigliceridek zsírsavakra és glicerinre bomlanak.",
  },
  {
    id: "bio_felsz_008",
    question: "Melyik szerv termel hasnyálat (amiláz, lipáz, proteázok)?",
    choices: [{ text: "Máj" }, { text: "Hasnyálmirigy" }, { text: "Gyomor" }, { text: "Vese" }],
    answerIndex: 1,
    explanation: "A hasnyálmirigy emésztőenzimeket választ ki a duodenumba.",
  },
  {
    id: "bio_felsz_009",
    question: "Mi a laktáz enzimet érintő hiány következménye?",
    choices: [
      { text: "Laktózintolerancia (puffadás, hasmenés)" },
      { text: "Cukorbetegség azonnal" },
      { text: "Epekövesség" },
      { text: "Vérszegénység" },
    ],
    answerIndex: 0,
    explanation: "A tejcukor bontásának hiánya emésztési panaszokat okoz.",
  },
  {
    id: "bio_felsz_010",
    question: "Hol szívódik fel a legtöbb víz a tápcsatornában?",
    choices: [{ text: "Vékonybél" }, { text: "Vastagbél" }, { text: "Gyomor" }, { text: "Szájüreg" }],
    answerIndex: 1,
    explanation: "A víz döntően a vastagbélben szívódik vissza.",
  },
  {
    id: "bio_felsz_011",
    question: "Mi a nyirok szerepe a zsírok felszívásában?",
    choices: [
      { text: "Közvetlenül a gyomorba szállítja a zsírt" },
      { text: "A bélboholy-lactealisok a zsírokat először a nyirokba juttatják" },
      { text: "Megakadályozza a zsírok felszívódását" },
      { text: "Csak fehérjéket szállít" },
    ],
    answerIndex: 1,
    explanation: "A zsírok először a nyirokkeringésbe kerülnek, onnan a vérbe.",
  },
  {
    id: "bio_felsz_012",
    question: "Melyik vitamin segíti a vas felszívódását?",
    choices: [{ text: "C-vitamin" }, { text: "A-vitamin" }, { text: "D-vitamin" }, { text: "K-vitamin" }],
    answerIndex: 0,
    explanation: "A C-vitamin fokozza a vas felszívódását.",
  },
  {
    id: "bio_felsz_013",
    question: "Mi történik, ha a hasnyálmirigy enzimei hiányoznak?",
    choices: [
      { text: "Az emésztés és felszívódás romlik" },
      { text: "A légzés leáll" },
      { text: "A keringés szűnik meg" },
      { text: "Nem történik semmi" },
    ],
    answerIndex: 0,
    explanation: "Enzimhiány esetén a makrotápanyagok lebontása elégtelen.",
  },
  {
    id: "bio_felsz_014",
    question: "Melyik NEM a vékonybél fő funkciója?",
    choices: [
      { text: "Emésztés" },
      { text: "Tápanyagok felszívása" },
      { text: "Víz visszaszívása nagy részben" },
      { text: "Enzimek termelése" },
    ],
    answerIndex: 2,
    explanation: "A víz visszaszívás főként a vastagbél feladata.",
  },
  {
    id: "bio_felsz_015",
    question: "Mi bontja a zsírokat zsírsavakká és glicerinre?",
    choices: [{ text: "Lipáz" }, { text: "Pepszin" }, { text: "Amiláz" }, { text: "Laktáz" }],
    answerIndex: 0,
    explanation: "A lipáz a zsírbontó enzim.",
  },
  {
    id: "bio_felsz_016",
    question: "Melyik enzim bontja a keményítő bontása után keletkező maltózt glükózzá?",
    choices: [{ text: "Maltáz" }, { text: "Tripszin" }, { text: "Laktáz" }, { text: "Pepszin" }],
    answerIndex: 0,
    explanation: "A maltáz a diszacharid maltózt glükózra bontja.",
  },
  {
    id: "bio_felsz_017",
    question: "Mi a gyomor egyik funkciója NEM?",
    choices: [
      { text: "Fehérjék bontásának kezdete" },
      { text: "Tárolás és keverés" },
      { text: "Keményítő teljes lebontása glükózzá" },
      { text: "Baktériumok elölése savval" },
    ],
    answerIndex: 2,
    explanation: "A keményítő teljes lebontása nem a gyomorban történik.",
  },
  {
    id: "bio_felsz_018",
    question: "Mi fokozza a bélbolyhok felszínét a mikroszkopikus mérettartományban?",
    choices: [{ text: "Redők" }, { text: "Mikrobolyhok" }, { text: "Izmok" }, { text: "Kötőszövet" }],
    answerIndex: 1,
    explanation: "A mikrobolyhok a sejtfelszínt növelik.",
  },
  {
    id: "bio_felsz_019",
    question: "Melyik szakaszban semlegesítik a gyomorsavat a lúgos váladékok?",
    choices: [{ text: "Gyomor" }, { text: "Patkóbél (duodenum)" }, { text: "Vastagbél" }, { text: "Végbél" }],
    answerIndex: 1,
    explanation: "A hasnyál és az epe lúgos kémhatású, a duodenumban semlegesít.",
  },
  {
    id: "bio_felsz_020",
    question: "Mi történik felszívódási zavar esetén?",
    choices: [
      { text: "Tápanyagok vesztesége, fogyás, hiányállapotok" },
      { text: "Csak a víz szívódik fel jobban" },
      { text: "Nincs érdemi hatás" },
      { text: "Csak a vitaminok szívódnak fel jobban" },
    ],
    answerIndex: 0,
    explanation: "A felszívódási zavar hiányállapotokat és testsúlycsökkenést okozhat.",
  },
];
const section_emesztes_felszivas: Section = {
  id: "emesztes_felszivas",
  title: "Emésztés és felszívódás",
  bank: bank_emesztes_felszivas,
};

/* ============================================================
   3. FŐTÉMA: LÉGZÉS ÉS KERINGÉS
   ============================================================ */

/* --- ALTÉMA 1: Légzőrendszer alapok --- */
const bank_legzorendszer_alapok: Question[] = [
  {
    id: "bio_legz_001",
    question: "Mi a légzés elsődleges célja?",
    choices: [{ text: "Hőtermelés" }, { text: "Oxigén felvétele és CO₂ leadása" }, { text: "Vérképzés" }, { text: "Hormontermelés" }],
    answerIndex: 1,
    explanation: "A külső és belső légzés biztosítja az O₂ ellátást és a CO₂ eltávolítást.",
  },
  {
    id: "bio_legz_002",
    question: "Hol történik a gázcsere a tüdőben?",
    choices: [{ text: "Bronchusok falán" }, { text: "Alveolusok (léghólyagok) falán" }, { text: "Garatban" }, { text: "Légcsőben" }],
    answerIndex: 1,
    explanation: "Az alveolusok vékony falán át diffundálnak a gázok.",
  },
  {
    id: "bio_legz_003",
    question: "Melyik izom a belégzés fő izma nyugalomban?",
    choices: [{ text: "Hasizmok" }, { text: "Rekeszizom" }, { text: "Csuklyásizom" }, { text: "Farizom" }],
    answerIndex: 1,
    explanation: "A rekeszizom összehúzódása tágítja a mellkast.",
  },
  {
    id: "bio_legz_004",
    question: "Mi történik belégzéskor a mellűri nyomással?",
    choices: [{ text: "Nő" }, { text: "Nem változik" }, { text: "Csökken" }, { text: "Előbb nő, majd csökken" }],
    answerIndex: 2,
    explanation: "A mellkas tágulása miatt a nyomás csökken, levegő áramlik be.",
  },
  {
    id: "bio_legz_005",
    question: "Mi köti meg az oxigént a vérben?",
    choices: [{ text: "Albumin" }, { text: "Hemoglobin" }, { text: "Fibrinogén" }, { text: "Myosin" }],
    answerIndex: 1,
    explanation: "A hemoglobin vörösvérsejtekben szállítja az O₂-t.",
  },
  {
    id: "bio_legz_006",
    question: "Mi tartja nyitva a légcsövet?",
    choices: [{ text: "Simai zomgyűrűk" }, { text: "Porckarikák (patkó alakú)" }, { text: "Csontlemezek" }, { text: "Kötőszöveti tok" }],
    answerIndex: 1,
    explanation: "A C alakú porcok megakadályozzák az összecsukódást.",
  },
  {
    id: "bio_legz_007",
    question: "Mi a csillós hám szerepe a légutakban?",
    choices: [{ text: "Vérképzés" }, { text: "Nyák és szennyeződések továbbítása kifelé" }, { text: "Gázcsere" }, { text: "Epe kiválasztása" }],
    answerIndex: 1,
    explanation: "A csillók a nyárral együtt felfelé mozgatják a részecskéket.",
  },
  {
    id: "bio_legz_008",
    question: "Melyik állítás igaz nyugalmi kilégzésre?",
    choices: [{ text: "Aktív izommunkát igényel" }, { text: "Passzív folyamat" }, { text: "A rekeszizom összehúzódik" }, { text: "A mellkas térfogata nő" }],
    answerIndex: 1,
    explanation: "Nyugalomban rugalmas összeesés és a rekesz ellazulása segíti.",
  },
  {
    id: "bio_legz_009",
    question: "Mi a vitálkapacitás?",
    choices: [
      { text: "A tüdő teljes térfogata" },
      { text: "A maximális belégzés után maximálisan kilélegezhető levegő" },
      { text: "A maradék térfogat" },
      { text: "A percenkénti légzések száma" },
    ],
    answerIndex: 1,
    explanation: "VC = IRV + TV + ERV.",
  },
  {
    id: "bio_legz_010",
    question: "Melyik NEM tartozik az alsó légutakhoz?",
    choices: [{ text: "Légcső" }, { text: "Hörgők" }, { text: "Orrüreg" }, { text: "Tüdő" }],
    answerIndex: 2,
    explanation: "Az orrüreg a felső légutak része.",
  },
  {
    id: "bio_legz_011",
    question: "Mi fokozza a légzésszámot testmozgáskor?",
    choices: [{ text: "Csökkenő CO₂-termelés" }, { text: "Növekvő O₂-igény és CO₂-termelés" }, { text: "Csökkenő hőtermelés" }, { text: "Csökken a vérkeringés" }],
    answerIndex: 1,
    explanation: "A kemoreceptorok és idegi szabályozás növeli a ventilációt.",
  },
  {
    id: "bio_legz_012",
    question: "Mi a gázcsere hajtóereje az alveolusoknál?",
    choices: [{ text: "Elektromos gradiens" }, { text: "Részleges nyomáskülönbség" }, { text: "Aktív transzport" }, { text: "Ozmózis" }],
    answerIndex: 1,
    explanation: "A gázok diffúziója a parciális nyomások különbségét követi.",
  },
  {
    id: "bio_legz_013",
    question: "Mi rontja a gázcserét közvetlenül?",
    choices: [
      { text: "Alveolusfal vastagodása, folyadék" },
      { text: "Nagyobb kapilláris hálózat" },
      { text: "Vékonyabb alveolusfal" },
      { text: "Nagyobb felület" },
    ],
    answerIndex: 0,
    explanation: "A diffúziós út növekedése rontja a gázáramlást.",
  },
  {
    id: "bio_legz_014",
    question: "Hol érzékelik a vér gázösszetételének változását?",
    choices: [
      { text: "Bőr receptorai" },
      { text: "Aortatest, nyaki artériatest, agytörzsi központok" },
      { text: "Hasnyálmirigy" },
      { text: "Vesék" },
    ],
    answerIndex: 1,
    explanation: "Perifériás és centrális kemoreceptorok szabályoznak.",
  },
  {
    id: "bio_legz_015",
    question: "Mi az asztma jellemző mechanizmusa?",
    choices: [
      { text: "Alveolusok elmeszesedése" },
      { text: "Légúti simaizomgörcs és nyálkahártya-duzzanat" },
      { text: "Vérlemezkék hiánya" },
      { text: "Szívbillentyű elégtelenség" },
    ],
    answerIndex: 1,
    explanation: "Bronchokonstrikció és nyáktermelés nehezíti a kiáramlást.",
  },
  {
    id: "bio_legz_016",
    question: "Melyik állítás igaz: a hemoglobin O₂-kötése…",
    choices: [
      { text: "Független a pH-tól" },
      { text: "pH-csökkenésre gyengül (Bohr-effektus)" },
      { text: "pH-csökkenésre erősödik" },
      { text: "CO₂ növekedés nem befolyásolja" },
    ],
    answerIndex: 1,
    explanation: "Savasodáskor az O₂ leadása könnyebb a szövetekben.",
  },
  {
    id: "bio_legz_017",
    question: "Melyik nem része a felső légutaknak?",
    choices: [{ text: "Orrüreg" }, { text: "Garat" }, { text: "Gége" }, { text: "Hörgők" }],
    answerIndex: 3,
    explanation: "A hörgők az alsó légutakhoz tartoznak.",
  },
  {
    id: "bio_legz_018",
    question: "Mi a légzés frekvenciája nyugalomban serdülőknél?",
    choices: [{ text: "2–4/perc" }, { text: "6–8/perc" }, { text: "12–18/perc" }, { text: "30–40/perc" }],
    answerIndex: 2,
    explanation: "Átlagosan 12–18 légvétel percenként.",
  },
  {
    id: "bio_legz_019",
    question: "Mi vált ki köhögési reflexet?",
    choices: [{ text: "Alacsony vércukor" }, { text: "Légutak irritációja" }, { text: "Magas kalciumszint" }, { text: "Veseinger" }],
    answerIndex: 1,
    explanation: "Irritációra a szervezet erőteljes kilégzéssel tisztítja a légutakat.",
  },
  {
    id: "bio_legz_020",
    question: "Mi jellemző hiperventillációra?",
    choices: [
      { text: "CO₂-szint emelkedik" },
      { text: "CO₂-szint csökken, légzési alkalózis" },
      { text: "O₂-szint csökken" },
      { text: "Nincs változás" },
    ],
    answerIndex: 1,
    explanation: "A túlzott szellőzés a CO₂-t túlságosan eltávolítja.",
  },
];
const section_legzorendszer_alapok: Section = {
  id: "legzorendszer_alapok",
  title: "Légzőrendszer alapok",
  bank: bank_legzorendszer_alapok,
};
/* --- ALTÉMA 2: Keringés – szív és erek --- */
const bank_keringes_szivekerek: Question[] = [
  {
    id: "bio_kering_001",
    question: "Hány üregből áll az emberi szív?",
    choices: [{ text: "Kettő" }, { text: "Három" }, { text: "Négy" }, { text: "Öt" }],
    answerIndex: 2,
    explanation: "Két pitvar és két kamra alkotja.",
  },
  {
    id: "bio_kering_002",
    question: "Melyik ér visz vért a szívből kifelé?",
    choices: [{ text: "Véna" }, { text: "Artéria" }, { text: "Kapilláris" }, { text: "Nyirokér" }],
    answerIndex: 1,
    explanation: "Az artériák a szív felől szállítanak.",
  },
  {
    id: "bio_kering_003",
    question: "Hol történik az anyagcsere-termékek cseréje a szövetekkel?",
    choices: [{ text: "Artériákban" }, { text: "Vénákban" }, { text: "Kapillárisokban" }, { text: "Aortában" }],
    answerIndex: 2,
    explanation: "A hajszálerek vékony fala alkalmas diffúzióra.",
  },
  {
    id: "bio_kering_004",
    question: "Melyik billentyű van a bal pitvar és a bal kamra között?",
    choices: [{ text: "Tricuspidalis" }, { text: "Mitrális (kéthegyű)" }, { text: "Pulmonális" }, { text: "Aorta-billentyű" }],
    answerIndex: 1,
    explanation: "A bal oldalon a mitrális szelep található.",
  },
  {
    id: "bio_kering_005",
    question: "Mi a kisvérkör feladata?",
    choices: [
      { text: "Tápanyagok szállítása a belekből" },
      { text: "Gázcsere a tüdő és a vér között" },
      { text: "Vizeletkiválasztás" },
      { text: "Hormonok szállítása a mirigyekből" },
    ],
    answerIndex: 1,
    explanation: "A jobb kamra → tüdő → bal pitvar útvonalon zajlik.",
  },
  {
    id: "bio_kering_006",
    question: "Mi a nagyvérkör feladata?",
    choices: [
      { text: "A test szöveteinek ellátása oxigéndús vérrel" },
      { text: "Epe szállítása" },
      { text: "Légzés szabályozása" },
      { text: "Vitaminok termelése" },
    ],
    answerIndex: 0,
    explanation: "Bal kamra → test → jobb pitvar.",
  },
  {
    id: "bio_kering_007",
    question: "Mi a pulzus?",
    choices: [
      { text: "A vénák lüktetése" },
      { text: "Az artériák lüktetése a szív összehúzódása miatt" },
      { text: "A vérlemezkék száma" },
      { text: "Az oxigénszint mérése" },
    ],
    answerIndex: 1,
    explanation: "Az artériák tágulása-szűkülése tapintható hullámot ad.",
  },
  {
    id: "bio_kering_008",
    question: "Melyik érben a legmagasabb a nyomás?",
    choices: [{ text: "Vénákban" }, { text: "Artériákban" }, { text: "Kapillárisokban" }, { text: "Nyirokerekben" }],
    answerIndex: 1,
    explanation: "A szívhez közelebb nagyobb a nyomás és az áramlási sebesség.",
  },
  {
    id: "bio_kering_009",
    question: "Mi segíti a vénás vér visszaáramlását a lábakból?",
    choices: [
      { text: "Csak a gravitáció" },
      { text: "Vénabillentyűk és az izmok pumpája" },
      { text: "Aorta-billentyű" },
      { text: "A vékonybél perisztaltikája" },
    ],
    answerIndex: 1,
    explanation: "A vázizmok összehúzódása és a billentyűk együtt dolgoznak.",
  },
  {
    id: "bio_kering_010",
    question: "Melyik kamra pumpál a tüdőbe?",
    choices: [{ text: "Bal kamra" }, { text: "Jobb kamra" }, { text: "Bal pitvar" }, { text: "Jobb pitvar" }],
    answerIndex: 1,
    explanation: "A jobb kamra nyomja a vért a tüdőartériába.",
  },
  {
    id: "bio_kering_011",
    question: "Mi a szisztolé?",
    choices: [{ text: "Pitvarok telődése" }, { text: "A szív összehúzódása" }, { text: "A szív elernyedése" }, { text: "A véralvadás" }],
    answerIndex: 1,
    explanation: "Systole = összehúzódás, diastole = elernyedés.",
  },
  {
    id: "bio_kering_012",
    question: "Melyik eszközzel mérjük a vérnyomást?",
    choices: [{ text: "Pulzoximéter" }, { text: "Spirométer" }, { text: "Sphygmomanométer" }, { text: "Ekg-készülék" }],
    answerIndex: 2,
    explanation: "Mandzsettás vérnyomásmérő a szabvány.",
  },
  {
    id: "bio_kering_013",
    question: "Mi az érelmeszesedés (atherosclerosis) lényege?",
    choices: [
      { text: "Az erek kóros tágulata" },
      { text: "Zsíros plakkok képződése az artériák falában" },
      { text: "A vénabillentyűk hiánya" },
      { text: "Fokozott véralvadás" },
    ],
    answerIndex: 1,
    explanation: "A plakkok szűkítik a lumeneket, rontva az áramlást.",
  },
  {
    id: "bio_kering_014",
    question: "Mi jellemző a vénák falára az artériákhoz képest?",
    choices: [
      { text: "Vastagabb és rugalmasabb" },
      { text: "Vékonyabb, nagyobb térfogatot képes tárolni" },
      { text: "Csontos megerősítésű" },
      { text: "Nincs simaizom" },
    ],
    answerIndex: 1,
    explanation: "A vénák kapacitáserek, tároló funkcióval.",
  },
  {
    id: "bio_kering_015",
    question: "Mi a nyugalmi pulzusszám serdülőknél jellemzően?",
    choices: [{ text: "20–30/perc" }, { text: "40–50/perc" }, { text: "60–90/perc" }, { text: "100–140/perc" }],
    answerIndex: 2,
    explanation: "Általában 60–90/perc közé esik.",
  },
  {
    id: "bio_kering_016",
    question: "Melyik billentyű nyílik a jobb kamra és a tüdőartéria között?",
    choices: [{ text: "Aortabillentyű" }, { text: "Pulmonális billentyű" }, { text: "Mitrális billentyű" }, { text: "Tricuspidalis billentyű" }],
    answerIndex: 1,
    explanation: "A jobb kamra kiáramlását a pulmonális szelep szabályozza.",
  },
  {
    id: "bio_kering_017",
    question: "Mi jellemző a kapillárisokra?",
    choices: [
      { text: "Vastag, izmos fal" },
      { text: "Egyrétegű laphám és bazális membrán" },
      { text: "Billentyűk jelenléte" },
      { text: "Porcgyűrűk tartják nyitva" },
    ],
    answerIndex: 1,
    explanation: "Vékony faluk ideális anyagcserére.",
  },
  {
    id: "bio_kering_018",
    question: "Melyik ér hozza vissza az oxigénszegény vért a szívbe a testből?",
    choices: [{ text: "Tüdővéna" }, { text: "Felső és alsó üres véna" }, { text: "Aorta" }, { text: "Tüdőartéria" }],
    answerIndex: 1,
    explanation: "Az üres vénák a jobb pitvarba torkollnak.",
  },
  {
    id: "bio_kering_019",
    question: "Mi okozza a szívhangokat (S1, S2)?",
    choices: [
      { text: "Alveolusok záródása" },
      { text: "Billentyűk záródása" },
      { text: "Aorta tágulása" },
      { text: "Kapillárisok rezgése" },
    ],
    answerIndex: 1,
    explanation: "Az S1 az AV-szelepek, S2 az artériás szelepek záródása.",
  },
  {
    id: "bio_kering_020",
    question: "Melyik agyi központ szabályozza főként a keringést?",
    choices: [{ text: "Kisagy" }, { text: "Agytörzs (nyúltagy)" }, { text: "Homloklebeny" }, { text: "Hipotalamusz" }],
    answerIndex: 1,
    explanation: "Az agytörzsi vegetatív központok irányítják az alapvető keringési reflexeket.",
  },
];
const section_keringes_szivekerek: Section = {
  id: "keringes_szivekerek",
  title: "Keringés – szív és erek",
  bank: bank_keringes_szivekerek,
};
/* --- ALTÉMA 3: Vér összetétele --- */
const bank_ver_osszetetele: Question[] = [
  {
    id: "bio_ver_001",
    question: "Mi a vér folyékony része?",
    choices: [{ text: "Plazma" }, { text: "Szérum" }, { text: "Víz" }, { text: "Nyirok" }],
    answerIndex: 0,
    explanation: "A vérplazma vízből, fehérjékből, oldott anyagokból áll.",
  },
  {
    id: "bio_ver_002",
    question: "Mi szállítja az oxigént a vérben?",
    choices: [{ text: "Albumin" }, { text: "Hemoglobin" }, { text: "Fibrin" }, { text: "Immunoglobulin" }],
    answerIndex: 1,
    explanation: "A hemoglobin a vörösvérsejtekben köti az O₂-t.",
  },
  {
    id: "bio_ver_003",
    question: "Melyik NEM alakos elem?",
    choices: [{ text: "Vörösvérsejt" }, { text: "Fehérvérsejt" }, { text: "Vérlemezke" }, { text: "Plazma" }],
    answerIndex: 3,
    explanation: "A plazma a vér folyékony része, nem sejt-eredetű elem.",
  },
  {
    id: "bio_ver_004",
    question: "Mi a fehérvérsejtek fő feladata?",
    choices: [{ text: "Oxigénszállítás" }, { text: "Védekezés kórokozók ellen" }, { text: "Véralvadás" }, { text: "Csontképzés" }],
    answerIndex: 1,
    explanation: "Részt vesznek a veleszületett és adaptív immunitásban.",
  },
  {
    id: "bio_ver_005",
    question: "Mi a vérlemezkék (trombociták) szerepe?",
    choices: [{ text: "Hormontermelés" }, { text: "Véralvadás elindítása" }, { text: "Gázcsere" }, { text: "Sav-bázis pufferelés" }],
    answerIndex: 1,
    explanation: "Tapadnak, összecsapzódnak és alvadási kaszkádot segítenek.",
  },
  {
    id: "bio_ver_006",
    question: "Hol képződnek a vérsejtek?",
    choices: [{ text: "Májban" }, { text: "Lépben" }, { text: "Vörös csontvelőben" }, { text: "Tüdőben" }],
    answerIndex: 2,
    explanation: "A hematopoézis fő helye a vörös csontvelő.",
  },
  {
    id: "bio_ver_007",
    question: "Mi a hematokrit?",
    choices: [
      { text: "A plazma fehérjetartalma" },
      { text: "A vér alakos elemeinek térfogataránya" },
      { text: "A hemoglobin tömege" },
      { text: "A vér kalciumszintje" },
    ],
    answerIndex: 1,
    explanation: "A teljes vérhez viszonyított alakos elem arány.",
  },
  {
    id: "bio_ver_008",
    question: "Melyik ásványi anyag nélkülözhetetlen a hemoglobinhoz?",
    choices: [{ text: "Kalcium" }, { text: "Vas" }, { text: "Jód" }, { text: "Nátrium" }],
    answerIndex: 1,
    explanation: "A hem vasat tartalmaz.",
  },
  {
    id: "bio_ver_009",
    question: "Mi a szérum?",
    choices: [
      { text: "Alvadás után visszamaradó plazma fibrinogén nélkül" },
      { text: "Plazma fibrinogénnel" },
      { text: "Vér alakos elemei" },
      { text: "Csak víz" },
    ],
    answerIndex: 0,
    explanation: "A szérumban nincsen fibrinogén.",
  },
  {
    id: "bio_ver_010",
    question: "Melyik vércsoportot tekintik gyakran ‘univerzális’ vörösvérsejt-donornak?",
    choices: [{ text: "A pozitív" }, { text: "B negatív" }, { text: "AB pozitív" }, { text: "0 negatív" }],
    answerIndex: 3,
    explanation: "A 0− vörösvérsejtei legtöbbször kompatibilisek.",
  },
  {
    id: "bio_ver_011",
    question: "Mi jellemző a vérszegénységre (anémiára)?",
    choices: [
      { text: "Magas hemoglobin" },
      { text: "Alacsony hemoglobin/kevés vörösvérsejt" },
      { text: "Magas vérlemezke" },
      { text: "Nincs tünet" },
    ],
    answerIndex: 1,
    explanation: "Fáradékonyság, sápadtság, terhelésre nehézlégzés jelentkezhet.",
  },
  {
    id: "bio_ver_012",
    question: "Melyik fehérje tartja fenn főleg a plazma ozmotikus nyomását?",
    choices: [{ text: "Albumin" }, { text: "Fibrin" }, { text: "Immunoglobulin" }, { text: "Aktin" }],
    answerIndex: 0,
    explanation: "Az albumin mennyisége dominál és ozmotikusan aktív.",
  },
  {
    id: "bio_ver_013",
    question: "Mi a hemofília lényege?",
    choices: [
      { text: "Vörösvérsejtek alacsony száma" },
      { text: "Véralvadási faktorok hiánya/működészavara" },
      { text: "Fokozott immunválasz" },
      { text: "Magas vérnyomás" },
    ],
    answerIndex: 1,
    explanation: "X-kromoszómához kötött alvadási zavar.",
  },
  {
    id: "bio_ver_014",
    question: "Mi a vér pH-jának normál tartománya?",
    choices: [{ text: "6,8–7,0" }, { text: "7,35–7,45" }, { text: "7,8–8,0" }, { text: "5,0–5,5" }],
    answerIndex: 1,
    explanation: "A szűk tartományt puffer-rendszerek tartják fenn.",
  },
  {
    id: "bio_ver_015",
    question: "Melyik vitamin szükséges több alvadási faktor képződéséhez?",
    choices: [{ text: "K-vitamin" }, { text: "C-vitamin" }, { text: "D-vitamin" }, { text: "A-vitamin" }],
    answerIndex: 0,
    explanation: "K-vitamin hiányában vérzékenység léphet fel.",
  },
  {
    id: "bio_ver_016",
    question: "Mi a gyulladás négy klasszikus helyi jele?",
    choices: [
      { text: "Duzzanat, vörösség, melegség, fájdalom" },
      { text: "Köhögés, láz, szédülés, kiütés" },
      { text: "Vérzés, sápadtság, hidegrázás, álmosság" },
      { text: "Fulladás, zsibbadás, görcs, hányinger" },
    ],
    answerIndex: 0,
    explanation: "A vasodilatatio, permeabilitás és mediátorok okozzák.",
  },
  {
    id: "bio_ver_017",
    question: "Mi a vakfolt a látásban?",
    choices: [
      { text: "A makula közepén lévő nagy felbontású terület" },
      { text: "A látóideg kilépési helye a retinán, receptorok nélkül" },
      { text: "A szaruhártya központi bemélyedése" },
      { text: "A pupilla teljes záródása" },
    ],
    answerIndex: 1,
    explanation: "A látóideg kilépési pontján nincsenek fotoreceptorok.",
  },
  {
    id: "bio_ver_018",
    question: "Mi a vérplazma legnagyobb mennyiségű összetevője?",
    choices: [{ text: "Fehérjék" }, { text: "Víz" }, { text: "Lipidek" }, { text: "Szénhidrátok" }],
    answerIndex: 1,
    explanation: "A plazma ~90%-a víz.",
  },
  {
    id: "bio_ver_019",
    question: "Melyik sejt típus vesz részt az ellenanyag-termelésben?",
    choices: [{ text: "Vörösvérsejt" }, { text: "B-limfocita/plazmasejt" }, { text: "Trombo cita" }, { text: "Oszteocita" }],
    answerIndex: 1,
    explanation: "A B-sejtek plazmasejtekké alakulva ellenanyagokat termelnek.",
  },
  {
    id: "bio_ver_020",
    question: "Mi a fibrin szerepe a véralvadásban?",
    choices: [
      { text: "Oxigén kötése" },
      { text: "Alvadék háló képzése, sebek zárása" },
      { text: "Immunválasz indítása" },
      { text: "Víz visszaszívása a bélben" },
    ],
    answerIndex: 1,
    explanation: "A fibrinháló csapdába ejti a vérsejteket, stabil alvadékot képezve.",
  },
];
const section_ver_osszetetele: Section = {
  id: "ver_osszetetele",
  title: "Vér összetétele",
  bank: bank_ver_osszetetele,
};

/* ============================================================
   4. FŐTÉMA: KIVÁLASZTÁS ÉS HOMEOSZTÁZIS
   ============================================================ */

/* --- ALTÉMA 1: A kiválasztás szervei és szerepe --- */
const bank_kivalasztas_szervei: Question[] = [
  {
    id: "bio_kiv_001",
    question: "Mi a kiválasztás fő feladata?",
    choices: [
      { text: "Az oxigén szállítása" },
      { text: "A salakanyagok eltávolítása a szervezetből" },
      { text: "A vérnyomás növelése" },
      { text: "Az emésztőnedvek termelése" },
    ],
    answerIndex: 1,
    explanation: "A kiválasztás eltávolítja a felesleges és káros anyagokat a vérből.",
  },
  {
    id: "bio_kiv_002",
    question: "Melyik szerv a legfontosabb kiválasztószerv?",
    choices: [{ text: "Tüdő" }, { text: "Vese" }, { text: "Máj" }, { text: "Gyomor" }],
    answerIndex: 1,
    explanation: "A vesék szűrik a vért, és vizeletet termelnek.",
  },
  {
    id: "bio_kiv_003",
    question: "Mi a vese legkisebb működési egysége?",
    choices: [{ text: "Neuron" }, { text: "Alveolus" }, { text: "Nephron" }, { text: "Kapilláris" }],
    answerIndex: 2,
    explanation: "A nefron végzi a szűrést, visszaszívást és kiválasztást.",
  },
  {
    id: "bio_kiv_004",
    question: "Mi történik a vesében?",
    choices: [
      { text: "A vér megszűrése, vizeletképzés" },
      { text: "A szén-dioxid eltávolítása" },
      { text: "A tápanyagok bontása" },
      { text: "A véralvadás" },
    ],
    answerIndex: 0,
    explanation: "A vesék a vérből eltávolítják a felesleges anyagokat.",
  },
  {
    id: "bio_kiv_005",
    question: "Mi szállítja el a vizeletet a veséből a húgyhólyagba?",
    choices: [{ text: "Húgyvezeték" }, { text: "Húgycső" }, { text: "Artéria" }, { text: "Gyűjtőér" }],
    answerIndex: 0,
    explanation: "A húgyvezeték (ureter) viszi a vizeletet a hólyagba.",
  },
  {
    id: "bio_kiv_006",
    question: "Hol tárolódik a vizelet, mielőtt kiürül?",
    choices: [{ text: "Vese" }, { text: "Húgyhólyag" }, { text: "Máj" }, { text: "Bél" }],
    answerIndex: 1,
    explanation: "A húgyhólyag rugalmas falú, vizeletgyűjtő szerv.",
  },
  {
    id: "bio_kiv_007",
    question: "Milyen anyagokat választ ki a vese?",
    choices: [
      { text: "Víz, sók és bomlástermékek (pl. karbamid)" },
      { text: "Fehérjék és vérsejtek" },
      { text: "Zsírok és hormonok" },
      { text: "Vitaminok" },
    ],
    answerIndex: 0,
    explanation: "A vizelet fő összetevői a víz, sók és karbamid.",
  },
  {
    id: "bio_kiv_008",
    question: "Mi történik a vesében a szűrés után?",
    choices: [
      { text: "Minden anyag eltávozik" },
      { text: "A hasznos anyagok (víz, glükóz) visszaszívódnak" },
      { text: "Csak a fehérjék maradnak a vizeletben" },
      { text: "A vizelet újra bekerül a vérbe" },
    ],
    answerIndex: 1,
    explanation: "A visszaszívás során a szervezet megőrzi a fontos anyagokat.",
  },
  {
    id: "bio_kiv_009",
    question: "Mi történik, ha a vese működése leáll?",
    choices: [
      { text: "Felhalmozódnak a mérgező anyagok a vérben" },
      { text: "Túl sok oxigén lesz a vérben" },
      { text: "A testhőmérséklet csökken" },
      { text: "A sejtek nem kapnak glükózt" },
    ],
    answerIndex: 0,
    explanation: "A salakanyagok kiválasztása nélkül a vér elsavasodik és mérgezővé válik.",
  },
  {
    id: "bio_kiv_010",
    question: "Mi a vizelet fő alkotórésze?",
    choices: [{ text: "Vérsejtek" }, { text: "Fehérje" }, { text: "Víz, só, karbamid" }, { text: "Zsírok" }],
    answerIndex: 2,
    explanation: "A vizelet főleg vízből, sókból és karbamidból áll.",
  },
  // Folytatás: bank_kivalasztas_szervei (második 10 kérdés)
  {
    id: "bio_kiv_011",
    question: "Melyik anyag NEM kerülhet a vizeletbe egészséges embernél?",
    choices: [
      { text: "Víz" },
      { text: "Karbamid" },
      { text: "Glükóz" },
      { text: "Só" },
    ],
    answerIndex: 2,
    explanation: "A glükóz visszaszívódik, ezért normál esetben nincs a vizeletben.",
  },
  {
    id: "bio_kiv_012",
    question: "Miért fontos a vesék kettős vérellátása?",
    choices: [
      { text: "Mert a vese egyszerre szűr és szabályozza a vér összetételét" },
      { text: "Mert a vese oxigént termel" },
      { text: "Mert a vizeletet közvetlenül a szívhez vezetik" },
      { text: "Mert csak így tud a vérkeringés fennmaradni" },
    ],
    answerIndex: 0,
    explanation: "A vesék egyszerre kapnak vért a szűréshez és a tápanyagellátáshoz.",
  },
  {
    id: "bio_kiv_013",
    question: "Mi történik a vesében, ha a szervezet kevés vizet kap?",
    choices: [
      { text: "A vizelet higul" },
      { text: "Kevesebb, sűrűbb vizelet képződik" },
      { text: "Megáll a szűrés" },
      { text: "A vesék több karbamidot termelnek" },
    ],
    answerIndex: 1,
    explanation: "A szervezet visszatartja a vizet, így a vizelet sötétebb és sűrűbb lesz.",
  },
  {
    id: "bio_kiv_014",
    question: "Milyen anyag kerülhet a vizeletbe láz vagy éhezés esetén?",
    choices: [
      { text: "Fehérje" },
      { text: "Keményítő" },
      { text: "Hemoglobin" },
      { text: "Zsírcsepp" },
    ],
    answerIndex: 0,
    explanation: "Nagy terhelésnél átmenetileg fehérje megjelenhet a vizeletben.",
  },
  {
    id: "bio_kiv_015",
    question: "Hogyan segítik a vesék a test belső egyensúlyát (homeosztázist)?",
    choices: [
      { text: "A víz és só arányának szabályozásával" },
      { text: "Az izommozgás irányításával" },
      { text: "A légzési ritmus növelésével" },
      { text: "A vércukorszint csökkentésével" },
    ],
    answerIndex: 0,
    explanation: "A vesék folyamatosan szabályozzák a víz- és sóháztartást.",
  },
  {
    id: "bio_kiv_016",
    question: "Hány vesénk van az emberi testben?",
    choices: [
      { text: "Egy" },
      { text: "Kettő" },
      { text: "Három" },
      { text: "Négy" },
    ],
    answerIndex: 1,
    explanation: "Két vese található a gerincoszlop két oldalán, a hát alsó részén.",
  },
  {
    id: "bio_kiv_017",
    question: "Melyik anyag NEM bomlástermék?",
    choices: [
      { text: "Karbamid" },
      { text: "Víz" },
      { text: "Glükóz" },
      { text: "Szén-dioxid" },
    ],
    answerIndex: 2,
    explanation: "A glükóz tápanyag, nem kiválasztandó salakanyag.",
  },
  {
    id: "bio_kiv_018",
    question: "Mi történik a vesében a glükózzal?",
    choices: [
      { text: "A vérből kiszűrődik, majd visszaszívódik" },
      { text: "Kiválasztódik a vizelettel" },
      { text: "Átalakul fehérjévé" },
      { text: "Oxigénné bomlik" },
    ],
    answerIndex: 0,
    explanation: "A glükóz kiszűrődik, de teljesen visszakerül a vérbe.",
  },
  {
    id: "bio_kiv_019",
    question: "Mi a karbamid?",
    choices: [
      { text: "Fehérje-bontás során keletkező salakanyag" },
      { text: "A vércukor egyik formája" },
      { text: "A vesék hormonja" },
      { text: "Az epe egyik összetevője" },
    ],
    answerIndex: 0,
    explanation: "A fehérjék lebontásakor keletkezik, és a vese választja ki.",
  },
  {
    id: "bio_kiv_020",
    question: "Mi a vizeletképzés sorrendje a vesében?",
    choices: [
      { text: "Szűrés → visszaszívás → kiválasztás" },
      { text: "Kiválasztás → visszaszívás → szűrés" },
      { text: "Csak szűrés történik" },
      { text: "Szűrés → emésztés → kiválasztás" },
    ],
    answerIndex: 0,
    explanation: "A vese először megszűri a vért, majd visszaszívja a hasznos anyagokat, végül kiválasztja a felesleget.",
  },
];
const section_kivalasztas_szervei: Section = {
  id: "kivalasztas_szervei",
  title: "A kiválasztás szervei és szerepe",
  bank: bank_kivalasztas_szervei,
};

/* --- ALTÉMA 2: A bőr kiválasztó és védő szerepe --- */
const bank_bor_kivalasztasa: Question[] = [
  {
    id: "bio_bor_001",
    question: "Miért nevezhető a bőr kiválasztószervnek is?",
    choices: [
      { text: "Mert a verejték révén salakanyagokat választ ki" },
      { text: "Mert oxigént termel" },
      { text: "Mert táplálékot bont" },
      { text: "Mert hormonokat raktároz" },
    ],
    answerIndex: 0,
    explanation: "A verejtékvíz, sók és méreganyagok távoznak a bőrön keresztül.",
  },
  {
    id: "bio_bor_002",
    question: "Mi a verejték legfontosabb szerepe?",
    choices: [
      { text: "A testhőmérséklet szabályozása" },
      { text: "A vérnyomás növelése" },
      { text: "A tápanyagok bontása" },
      { text: "A vér sűrítése" },
    ],
    answerIndex: 0,
    explanation: "A verejtékezés segít a hőleadásban és a hőszabályozásban.",
  },
  {
    id: "bio_bor_003",
    question: "Mi a faggyúmirigy szerepe?",
    choices: [
      { text: "Zsíros anyagot termel, ami puhán tartja a bőrt" },
      { text: "Vizet választ ki" },
      { text: "Fehérjét bont" },
      { text: "Idegvégződés" },
    ],
    answerIndex: 0,
    explanation: "A faggyú megakadályozza a bőr kiszáradását.",
  },
  {
    id: "bio_bor_004",
    question: "Mi védi a bőrt az UV-sugárzás káros hatásaitól?",
    choices: [
      { text: "A melanin pigment" },
      { text: "A keratin" },
      { text: "A szaruréteg" },
      { text: "A verejték" },
    ],
    answerIndex: 0,
    explanation: "A melanin elnyeli az UV-sugarakat, védve a sejteket.",
  },
  {
    id: "bio_bor_005",
    question: "Hány rétegből áll a bőr?",
    choices: [{ text: "1" }, { text: "2" }, { text: "3" }, { text: "4" }],
    answerIndex: 2,
    explanation: "Három réteg: hám, irha és bőralja.",
  },
  {
    id: "bio_bor_006",
    question: "Mi található az irhában?",
    choices: [
      { text: "Idegvégződések, verejtékmirigyek, erek" },
      { text: "Csak zsírszövet" },
      { text: "Csak vérlemezkék" },
      { text: "Csak szaruréteg" },
    ],
    answerIndex: 0,
    explanation: "Az irha gazdag idegekben és erekben, így érzékel és hűt.",
  },
  {
    id: "bio_bor_007",
    question: "Melyik anyagot választják ki a verejtékmirigyek?",
    choices: [{ text: "Víz, só és karbamid" }, { text: "Fehérje" }, { text: "Hemoglobin" }, { text: "Zsír" }],
    answerIndex: 0,
    explanation: "A verejték összetétele hasonló a híg vizelethez.",
  },
  {
    id: "bio_bor_008",
    question: "Miért fontos a bőr vérerei?",
    choices: [
      { text: "Segítik a testhőmérséklet szabályozását" },
      { text: "Oxigént termelnek" },
      { text: "A szőr növekedését gátolják" },
      { text: "A verejték elpárologtatását akadályozzák" },
    ],
    answerIndex: 0,
    explanation: "A vérerek tágulása fokozza a hőleadást, szűkülése csökkenti.",
  },
  {
    id: "bio_bor_009",
    question: "Mi történik, ha a test túlmelegszik?",
    choices: [
      { text: "A vérerek kitágulnak, a verejtékezés fokozódik" },
      { text: "A vérerek összehúzódnak" },
      { text: "A faggyúmirigyek leállnak" },
      { text: "A test nem reagál" },
    ],
    answerIndex: 0,
    explanation: "A testhő leadása verejtékkel és értágulással valósul meg.",
  },
  {
    id: "bio_bor_010",
    question: "Miért fontos a bőr, mint érzékszerv?",
    choices: [
      { text: "Érzi a hőt, hideget, nyomást és fájdalmat" },
      { text: "Csak a fényt érzékeli" },
      { text: "A hallást segíti" },
      { text: "Szagokat érzékel" },
    ],
    answerIndex: 0,
    explanation: "A bőr érzőidegei reagálnak a külső ingerekre.",
  },
  // Folytatás: bank_bor_kivalasztasa (második 10 kérdés)
  {
    id: "bio_bor_011",
    question: "Miért nevezik a bőrt védőszervnek is?",
    choices: [
      { text: "Mert megakadályozza a kórokozók bejutását" },
      { text: "Mert tárolja a vért" },
      { text: "Mert lebontja a fehérjéket" },
      { text: "Mert termeli az epét" },
    ],
    answerIndex: 0,
    explanation: "A bőr véd a kórokozóktól, mechanikai sérüléstől és UV-sugárzástól is.",
  },
  {
    id: "bio_bor_012",
    question: "Milyen anyagot termel a faggyúmirigy?",
    choices: [
      { text: "Olajos, zsíros anyagot" },
      { text: "Vizes oldatot" },
      { text: "Fehérjét" },
      { text: "Vért" },
    ],
    answerIndex: 0,
    explanation: "A faggyú olajos anyag, ami védi a bőrt a kiszáradástól.",
  },
  {
    id: "bio_bor_013",
    question: "Mi történik, ha túl sok faggyú termelődik?",
    choices: [
      { text: "Mitesszerek és pattanások alakulhatnak ki" },
      { text: "A bőr kiszárad" },
      { text: "A szőrzet kihullik" },
      { text: "A bőr elvékonyodik" },
    ],
    answerIndex: 0,
    explanation: "A túl sok faggyú eltömíti a pórusokat, gyulladást okozva.",
  },
  {
    id: "bio_bor_014",
    question: "Miért fontos a bőr érzőidegeinek működése?",
    choices: [
      { text: "Mert segítségükkel érzékeljük a meleget, hideget és fájdalmat" },
      { text: "Mert izmot mozgatnak" },
      { text: "Mert hormonokat termelnek" },
      { text: "Mert serkentik a verejtékmirigyeket" },
    ],
    answerIndex: 0,
    explanation: "A bőr idegvégződései közvetítik az érzékelést az agy felé.",
  },
  {
    id: "bio_bor_015",
    question: "Mi a bőr három fő rétege?",
    choices: [
      { text: "Hám, irha, bőralja" },
      { text: "Hám, izom, csont" },
      { text: "Bőr, szőr, faggyú" },
      { text: "Hám, izomszövet, vér" },
    ],
    answerIndex: 0,
    explanation: "A bőr rétegei: hámréteg (külső), irha (középső) és bőralja (belső).",
  },
  {
    id: "bio_bor_016",
    question: "Mi történik, ha hidegben összehúzódnak a bőr erei?",
    choices: [
      { text: "Csökken a hőleadás, a test melegen marad" },
      { text: "Fokozódik a hőleadás" },
      { text: "A bőr elsötétül" },
      { text: "A verejtékezés nő" },
    ],
    answerIndex: 0,
    explanation: "Érszűkületkor a test kevesebb hőt ad le, így védekezik a lehűlés ellen.",
  },
  {
    id: "bio_bor_017",
    question: "Mi jellemző a bőraljára?",
    choices: [
      { text: "Zsírszövetet tartalmaz, ami védi és hőszigeteli a testet" },
      { text: "Idegekben gazdag réteg" },
      { text: "Nincs benne szövet" },
      { text: "Csak hámsejteket tartalmaz" },
    ],
    answerIndex: 0,
    explanation: "A bőralja zsírszövete energiát raktároz és hővédelmet biztosít.",
  },
  {
    id: "bio_bor_018",
    question: "Mi a különbség a faggyú- és a verejtékmirigy között?",
    choices: [
      { text: "A faggyú zsíros, a verejték vizes anyagot választ ki" },
      { text: "A faggyú fehér, a verejték barna" },
      { text: "A faggyú bőraljában, a verejték a hajban található" },
      { text: "Mindkettő csak a hajhagymákhoz kapcsolódik" },
    ],
    answerIndex: 0,
    explanation: "A faggyúmirigy zsíros védőanyagot, a verejtékmirigy vízben oldott sókat választ ki.",
  },
  {
    id: "bio_bor_019",
    question: "Mi történik, ha a test túlhevül?",
    choices: [
      { text: "A bőr erei kitágulnak, fokozódik a verejtékezés" },
      { text: "A bőr elfehéredik" },
      { text: "A faggyúmirigyek leállnak" },
      { text: "A hőleadás megszűnik" },
    ],
    answerIndex: 0,
    explanation: "Értágulás és izzadás révén a test hőt ad le.",
  },
  {
    id: "bio_bor_020",
    question: "Miért fontos a bőr pH-ja?",
    choices: [
      { text: "Mert savas kémhatása gátolja a kórokozók elszaporodását" },
      { text: "Mert lúgos kémhatása fertőtlenít" },
      { text: "Mert segíti az izommozgást" },
      { text: "Mert szabályozza a vércukrot" },
    ],
    answerIndex: 0,
    explanation: "A bőr enyhén savas pH-ja (kb. 5,5) természetes védelmet nyújt a baktériumok ellen.",
  },
];
const section_bor_kivalasztasa: Section = {
  id: "bor_kivalasztasa",
  title: "A bőr kiválasztó és védő szerepe",
  bank: bank_bor_kivalasztasa,
};
/* --- ALTÉMA 3: Homeosztázis és hőszabályozás --- */
const bank_homeosztazis: Question[] = [
  {
    id: "bio_homeo_001",
    question: "Mit jelent a homeosztázis?",
    choices: [
      { text: "A test belső egyensúlyának fenntartását" },
      { text: "A sejtek osztódását" },
      { text: "A légzési ritmus szabályozását" },
      { text: "A hormontermelés megszűnését" },
    ],
    answerIndex: 0,
    explanation: "A homeosztázis a szervezet belső állandóságát biztosítja.",
  },
  {
    id: "bio_homeo_002",
    question: "Melyik szervrendszer segít a testhőmérséklet szabályozásában?",
    choices: [{ text: "Légzőrendszer" }, { text: "Kiválasztó rendszer és bőr" }, { text: "Emésztőrendszer" }, { text: "Mozgásrendszer" }],
    answerIndex: 1,
    explanation: "A verejtékezés és az erek tágulása/szűkülése tartja fenn a hőmérsékletet.",
  },
  {
    id: "bio_homeo_003",
    question: "Milyen hőmérsékletet igyekszik a szervezet fenntartani?",
    choices: [{ text: "Kb. 25 °C" }, { text: "Kb. 37 °C" }, { text: "Kb. 40 °C" }, { text: "Kb. 15 °C" }],
    answerIndex: 1,
    explanation: "A normál testhőmérséklet 36–37 °C körül van.",
  },
  {
    id: "bio_homeo_004",
    question: "Mi történik, ha a test lehűl?",
    choices: [
      { text: "Az erek kitágulnak, verejtékezés fokozódik" },
      { text: "Az erek összehúzódnak és reszketés indul" },
      { text: "A vércukorszint csökken" },
      { text: "A bőr pigmentje nő" },
    ],
    answerIndex: 1,
    explanation: "Érszűkülés és reszketés (izommunka) növeli a hőtermelést.",
  },
  {
    id: "bio_homeo_005",
    question: "Mi a verejtékezés szerepe?",
    choices: [
      { text: "A hőleadás és salakanyag-kiválasztás" },
      { text: "A véralvadás" },
      { text: "A vércukorszint növelése" },
      { text: "A hormontermelés" },
    ],
    answerIndex: 0,
    explanation: "A párolgás hőt von el, így hűti a testet.",
  },
  {
    id: "bio_homeo_006",
    question: "Mi történik, ha a test belső hőmérséklete túl magas?",
    choices: [
      { text: "A hőleadás fokozódik, erek tágulnak" },
      { text: "A verejtékezés csökken" },
      { text: "A vérkeringés leáll" },
      { text: "A sejtek oxigénfelvétele nő" },
    ],
    answerIndex: 0,
    explanation: "Értágulás és izzadás révén csökken a testhő.",
  },
  {
    id: "bio_homeo_007",
    question: "Melyik agyi terület irányítja a testhőmérsékletet?",
    choices: [{ text: "Kisagy" }, { text: "Hipotalamusz" }, { text: "Homloklebeny" }, { text: "Talamusz" }],
    answerIndex: 1,
    explanation: "A hipotalamusz érzékeli és vezérli a hőszabályozást.",
  },
  {
    id: "bio_homeo_008",
    question: "Milyen példát jelent a homeosztázis a mindennapokban?",
    choices: [
      { text: "Izzadás forróságban" },
      { text: "Alvás közbeni izommozgás" },
      { text: "Étvágy növekedése" },
      { text: "Tanulás és memória" },
    ],
    answerIndex: 0,
    explanation: "Izzadás a testhő csökkentése érdekében klasszikus példa a homeosztázisra.",
  },
  {
    id: "bio_homeo_009",
    question: "Mi történik, ha a testhőmérséklet tartósan 40°C fölé emelkedik?",
    choices: [
      { text: "Fokozott anyagcsere és veszélyes fehérje-kicsapódás" },
      { text: "Jobb teljesítmény" },
      { text: "Lassabb vérkeringés" },
      { text: "Javuló immunválasz" },
    ],
    answerIndex: 0,
    explanation: "A magas hőmérséklet károsítja a fehérjéket és életveszélyes lehet.",
  },
  {
    id: "bio_homeo_010",
    question: "Mi a szerepe a homeosztázisnak a szervezet működésében?",
    choices: [
      { text: "Az állandóság fenntartása külső változások ellenére" },
      { text: "A hirtelen változások fokozása" },
      { text: "A sejtek lebontása" },
      { text: "A táplálék raktározása" },
    ],
    answerIndex: 0,
    explanation: "A szervezet folyamatai egyensúlyban maradnak, így biztosított az egészség.",
  },
  // Folytatás: bank_homeosztazis (második 10 kérdés)
  {
    id: "bio_homeo_011",
    question: "Mi történik, ha a test túl sok hőt veszít?",
    choices: [
      { text: "Reszketés indul, hogy hőt termeljen az izommunka" },
      { text: "A test azonnal izzadni kezd" },
      { text: "A vércukorszint leesik" },
      { text: "A bőr megnyílik a hőleadásra" },
    ],
    answerIndex: 0,
    explanation: "A reszketés fokozza az izommunkát, így több hő termelődik.",
  },
  {
    id: "bio_homeo_012",
    question: "Mi a homeosztázis fenntartásában a máj szerepe?",
    choices: [
      { text: "A vércukorszint szabályozása glikogén raktározásával" },
      { text: "A testhőmérséklet közvetlen irányítása" },
      { text: "A verejtékezés elindítása" },
      { text: "Az oxigén szállítása" },
    ],
    answerIndex: 0,
    explanation: "A máj glikogént tárol és bont, ezzel kiegyenlíti a vércukorszintet.",
  },
  {
    id: "bio_homeo_013",
    question: "Miért fontos a vízháztartás a homeosztázisban?",
    choices: [
      { text: "Mert a víz oldószer és segíti az anyagcserét" },
      { text: "Mert a víz energiát termel" },
      { text: "Mert a víz hűti a tüdőt" },
      { text: "Mert a víz csökkenti a vérnyomást" },
    ],
    answerIndex: 0,
    explanation: "A víz szükséges az életfolyamatokhoz és az oldott anyagok szállításához.",
  },
  {
    id: "bio_homeo_014",
    question: "Hogyan reagál a szervezet, ha a testhőmérséklet nő?",
    choices: [
      { text: "Értágulás és izzadás indul" },
      { text: "Érszűkülés és reszketés indul" },
      { text: "A máj több glükózt termel" },
      { text: "A verejtékezés csökken" },
    ],
    answerIndex: 0,
    explanation: "A test fokozza a hőleadást az erek kitágításával és izzadással.",
  },
  {
    id: "bio_homeo_015",
    question: "Mi történik, ha a test folyadékot veszít és nem pótolják?",
    choices: [
      { text: "Kiszáradás, gyengeség, vérnyomás-csökkenés" },
      { text: "A testhő nő" },
      { text: "A sejtek osztódása fokozódik" },
      { text: "A tüdő megtelik vízzel" },
    ],
    answerIndex: 0,
    explanation: "Vízhiány esetén a sejtek működése romlik, vérnyomás csökken, szomjúság jelentkezik.",
  },
  {
    id: "bio_homeo_016",
    question: "Mi a hipotalamusz feladata a homeosztázisban?",
    choices: [
      { text: "Érzékeli a test belső hőmérsékletét és szabályozza azt" },
      { text: "A mozgás irányítása" },
      { text: "A vércukorszint csökkentése" },
      { text: "A hormontermelés leállítása" },
    ],
    answerIndex: 0,
    explanation: "A hipotalamusz az agy központi hőszabályozó és belső egyensúlyt irányító területe.",
  },
  {
    id: "bio_homeo_017",
    question: "Mi segít a testhő megtartásában hidegben?",
    choices: [
      { text: "Érszűkülés és fokozott anyagcsere" },
      { text: "Értágulás és izzadás" },
      { text: "Vércukorszint csökkenése" },
      { text: "Fehérvérsejtek aktiválódása" },
    ],
    answerIndex: 0,
    explanation: "Hidegben az erek szűkülnek és az anyagcsere fokozódik, hogy hőt termeljen.",
  },
  {
    id: "bio_homeo_018",
    question: "Mit jelent a láz a homeosztázis szempontjából?",
    choices: [
      { text: "A testhőmérséklet átmeneti megemelkedését fertőzéskor" },
      { text: "A test végleges lehűlését" },
      { text: "A szervezet kiszáradását" },
      { text: "A keringés leállását" },
    ],
    answerIndex: 0,
    explanation: "A láz a védekezés jele: a magasabb hőmérséklet gátolja a kórokozók szaporodását.",
  },
  {
    id: "bio_homeo_019",
    question: "Mi történik, ha a szervezet nem tudja fenntartani a homeosztázist?",
    choices: [
      { text: "Betegség, kimerülés vagy akár életveszélyes állapot alakul ki" },
      { text: "Fokozódik a teljesítmény" },
      { text: "A sejtek megerősödnek" },
      { text: "A test regenerálódik" },
    ],
    answerIndex: 0,
    explanation: "Az egyensúly felborulása komoly működési zavarokat okoz.",
  },
  {
    id: "bio_homeo_020",
    question: "Miért fontos a test hőmérsékletének állandósága?",
    choices: [
      { text: "Mert az enzimek csak meghatározott hőmérsékleten működnek megfelelően" },
      { text: "Mert így nő a vércukorszint" },
      { text: "Mert a sejtek jobban hűlnek" },
      { text: "Mert csökken a vérnyomás" },
    ],
    answerIndex: 0,
    explanation: "Az enzimek érzékenyek a hőmérsékletre, így az állandóság létfontosságú az életfolyamatokhoz.",
  }
];
const section_homeosztazis: Section = {
  id: "homeosztazis",
  title: "Homeosztázis és hőszabályozás",
  bank: bank_homeosztazis,
};

/* --- ALTÉMA 1: Idegrendszer felépítése és működése --- */
const bank_idegrendszer_felepitese: Question[] = [
  {
    id: "bio_ideg_001",
    question: "Mi az idegrendszer alapegysége?",
    choices: [
      { text: "Az izomsejt" },
      { text: "A neuron (idegsejt)" },
      { text: "A hámsejt" },
      { text: "A vérsejt" },
    ],
    answerIndex: 1,
    explanation: "A neuron vezeti az idegingereket a test különböző részei között.",
  },
  {
    id: "bio_ideg_002",
    question: "Mi az ingerület?",
    choices: [
      { text: "Az idegsejtben továbbított elektromos jel" },
      { text: "A sejtek szaporodása" },
      { text: "A vérkeringés egy fázisa" },
      { text: "A hormontermelés eredménye" },
    ],
    answerIndex: 0,
    explanation: "Az ingerület egy elektromos jel, amely információt közvetít az idegsejtek között.",
  },
  {
    id: "bio_ideg_003",
    question: "Melyik az idegsejt azon része, amely a jelet továbbítja?",
    choices: [
      { text: "A dendrit" },
      { text: "Az axon" },
      { text: "A sejtmag" },
      { text: "A szinapszis" },
    ],
    answerIndex: 1,
    explanation: "Az axon hosszú nyúlvány, amelyen keresztül az ingerület halad tovább.",
  },
  {
    id: "bio_ideg_004",
    question: "Mi a központi idegrendszer része?",
    choices: [
      { text: "Agy és gerincvelő" },
      { text: "Idegek és receptorok" },
      { text: "Bőr és izmok" },
      { text: "Szem és fül" },
    ],
    answerIndex: 0,
    explanation: "A központi idegrendszert az agy és a gerincvelő alkotja.",
  },
  {
    id: "bio_ideg_005",
    question: "Mi a perifériás idegrendszer szerepe?",
    choices: [
      { text: "Összeköti a központi idegrendszert a szervekkel" },
      { text: "Szabályozza a vérnyomást" },
      { text: "A hormontermelést irányítja" },
      { text: "A hőszabályozást végzi" },
    ],
    answerIndex: 0,
    explanation: "A perifériás idegrendszer idegei az agyból és gerincvelőből indulva kapcsolják a szerveket.",
  },
  {
    id: "bio_ideg_006",
    question: "Mi a különbség az akaratlagos és akaratlan idegrendszer között?",
    choices: [
      { text: "Az akaratlagos az izmokat, az akaratlan a belső szerveket irányítja" },
      { text: "Az akaratlagos a légzést szabályozza" },
      { text: "Az akaratlan csak alvás közben működik" },
      { text: "Mindkettő ugyanazt irányítja" },
    ],
    answerIndex: 0,
    explanation: "Az akaratlagos idegrendszer az izmokat, az akaratlan a belső szerveket szabályozza.",
  },
  {
    id: "bio_ideg_007",
    question: "Mi a szinapszis?",
    choices: [
      { text: "Két idegsejt közötti kapcsolat" },
      { text: "Egy izomrost" },
      { text: "Egy vérsejt" },
      { text: "A bőr egyik rétege" },
    ],
    answerIndex: 0,
    explanation: "A szinapszis az a hely, ahol az ingerület egyik sejtről a másikra terjed át.",
  },
  {
    id: "bio_ideg_008",
    question: "Mi az agykéreg feladata?",
    choices: [
      { text: "A tudatos érzékelés és gondolkodás központja" },
      { text: "A vérnyomás szabályozása" },
      { text: "A légzés irányítása" },
      { text: "A reflexek végrehajtása" },
    ],
    answerIndex: 0,
    explanation: "Az agykéreg a magasabb rendű idegi működések központja.",
  },
  {
    id: "bio_ideg_009",
    question: "Mi irányítja a légzést és a szívverést?",
    choices: [
      { text: "Agytörzs" },
      { text: "Kisagy" },
      { text: "Homloklebeny" },
      { text: "Hipotalamusz" },
    ],
    answerIndex: 0,
    explanation: "Az agytörzs az életfontosságú vegetatív központokat tartalmazza.",
  },
  {
    id: "bio_ideg_010",
    question: "Mi a kisagy feladata?",
    choices: [
      { text: "Az egyensúly és mozgás összehangolása" },
      { text: "A látás irányítása" },
      { text: "A légzés vezérlése" },
      { text: "Az érzékelés kikapcsolása" },
    ],
    answerIndex: 0,
    explanation: "A kisagy felel a testtartásért és mozgáskoordinációért.",
  },
  {
    id: "bio_ideg_011",
    question: "Milyen szerepet játszik a gerincvelő?",
    choices: [
      { text: "Reflexek központja és az agyba vezető idegpályák helye" },
      { text: "Csak a vért szűri" },
      { text: "Hormonokat termel" },
      { text: "A hallást irányítja" },
    ],
    answerIndex: 0,
    explanation: "A gerincvelő közvetíti az információkat és irányítja az egyszerű reflexeket.",
  },
  {
    id: "bio_ideg_012",
    question: "Melyik része az agynak irányítja az alvás–ébrenlét ciklust?",
    choices: [
      { text: "Agytörzs" },
      { text: "Kisagy" },
      { text: "Hipotalamusz" },
      { text: "Homloklebeny" },
    ],
    answerIndex: 2,
    explanation: "A hipotalamusz hormonálisan is befolyásolja az alvást és testhőmérsékletet.",
  },
  {
    id: "bio_ideg_013",
    question: "Mit szabályoz a vegetatív idegrendszer?",
    choices: [
      { text: "A belső szervek akaratlan működését" },
      { text: "A kézmozgást" },
      { text: "A gondolkodást" },
      { text: "A tanulást" },
    ],
    answerIndex: 0,
    explanation: "A vegetatív idegrendszer szabályozza a szív, tüdő, emésztés működését.",
  },
  {
    id: "bio_ideg_014",
    question: "Mi a neuronok közötti ingerületátvitel anyaga?",
    choices: [
      { text: "Neurotranszmitter" },
      { text: "Hemoglobin" },
      { text: "Enzim" },
      { text: "Víz" },
    ],
    answerIndex: 0,
    explanation: "Az ingerület átvitelét vegyi anyagok (neurotranszmitterek) segítik a szinapszisban.",
  },
  {
    id: "bio_ideg_015",
    question: "Miért fontos az idegrendszer az egész test számára?",
    choices: [
      { text: "Mert összeköti a szervek működését és szabályozza őket" },
      { text: "Mert energiát termel" },
      { text: "Mert táplálékot emészt" },
      { text: "Mert oxigént termel" },
    ],
    answerIndex: 0,
    explanation: "Az idegrendszer biztosítja az információáramlást és az összehangolt működést.",
  },
  {
    id: "bio_ideg_016",
    question: "Milyen idegek vezetik az ingerületet az agyból a szervekhez?",
    choices: [
      { text: "Mozgatóidegek" },
      { text: "Érzőidegek" },
      { text: "Reflexidegek" },
      { text: "Átmeneti idegek" },
    ],
    answerIndex: 0,
    explanation: "A mozgatóidegek viszik az agy utasításait az izmokhoz és szervekhez.",
  },
  {
    id: "bio_ideg_017",
    question: "Mi történik, ha az idegsejt axonja megsérül?",
    choices: [
      { text: "Az ingerületvezetés megszakad" },
      { text: "Gyorsabb lesz a reakció" },
      { text: "Erősödik a kapcsolat a sejtek között" },
      { text: "Az ingerület átugrik más sejtekre" },
    ],
    answerIndex: 0,
    explanation: "Az axon sérülése megszakítja az ingerület továbbítását.",
  },
  {
    id: "bio_ideg_018",
    question: "Melyik anyag védi az idegsejteket az elektromos zavaroktól?",
    choices: [
      { text: "A mielinhüvely" },
      { text: "A hemoglobin" },
      { text: "A zsírsejt" },
      { text: "A kalcium" },
    ],
    answerIndex: 0,
    explanation: "A mielinhüvely szigetelő réteg, gyorsítja az ingerületvezetést.",
  },
  {
    id: "bio_ideg_019",
    question: "Mi a központi idegrendszer legfőbb feladata?",
    choices: [
      { text: "Az információk feldolgozása és döntések hozatala" },
      { text: "Csak a reflexek irányítása" },
      { text: "Az izmok erősítése" },
      { text: "A sejtosztódás" },
    ],
    answerIndex: 0,
    explanation: "Az agy és gerincvelő dolgozza fel az érzékszervek jeleit és irányítja a választ.",
  },
  {
    id: "bio_ideg_020",
    question: "Melyik állítás igaz az idegsejtekre?",
    choices: [
      { text: "Nem osztódnak, de életünk végéig működnek" },
      { text: "Naponta újraképződnek" },
      { text: "Csak alváskor aktívak" },
      { text: "A vérben úsznak szabadon" },
    ],
    answerIndex: 0,
    explanation: "Az idegsejtek nem képesek osztódni, ezért sérülésük maradandó lehet.",
  }
];
/* --- ALTÉMA 2: Érzékszervek – látás és hallás --- */
const bank_erzek_szervek: Question[] = [
  {
    id: "bio_erzek_001",
    question: "Mi az érzékszervek feladata?",
    choices: [
      { text: "A külvilágból érkező ingerek felfogása" },
      { text: "A hormonok termelése" },
      { text: "Az izmok irányítása" },
      { text: "A vérnyomás fenntartása" },
    ],
    answerIndex: 0,
    explanation: "Az érzékszervek az ingereket idegingerré alakítják, amit az agy feldolgoz.",
  },
  {
    id: "bio_erzek_002",
    question: "Melyik szerv felel a látásért?",
    choices: [
      { text: "Szem" },
      { text: "Fül" },
      { text: "Orr" },
      { text: "Bőr" },
    ],
    answerIndex: 0,
    explanation: "A szem a fényérzékelés szerve, a látás központja az agyban van.",
  },
  {
    id: "bio_erzek_003",
    question: "Mi a pupilla feladata?",
    choices: [
      { text: "A bejutó fény mennyiségének szabályozása" },
      { text: "A retina védelme" },
      { text: "A szem mozgatása" },
      { text: "A színek felismerése" },
    ],
    answerIndex: 0,
    explanation: "A pupilla tágul vagy szűkül, hogy a megfelelő mennyiségű fény jusson a szembe.",
  },
  {
    id: "bio_erzek_004",
    question: "Mi a szivárványhártya feladata?",
    choices: [
      { text: "A szem színének meghatározása és a pupilla szabályozása" },
      { text: "A retina táplálása" },
      { text: "A szaruhártya mozgatása" },
      { text: "A szem nedvességének fenntartása" },
    ],
    answerIndex: 0,
    explanation: "A szivárványhártya (írisz) szabályozza a pupilla nagyságát és adja a szem színét.",
  },
  {
    id: "bio_erzek_005",
    question: "Hol történik a kép érzékelése a szemben?",
    choices: [
      { text: "A retinán" },
      { text: "A pupillán" },
      { text: "A szivárványhártyán" },
      { text: "A szaruhártyán" },
    ],
    answerIndex: 0,
    explanation: "A retina (ideghártya) tartalmazza a fényérzékeny receptorokat.",
  },
  {
    id: "bio_erzek_006",
    question: "Mi alakítja éles képpé a látott képet?",
    choices: [
      { text: "A szemlencse" },
      { text: "A retina" },
      { text: "A pupilla" },
      { text: "A szaruhártya" },
    ],
    answerIndex: 0,
    explanation: "A szemlencse domborúságát változtatva fókuszál a tárgyakra.",
  },
  {
    id: "bio_erzek_007",
    question: "Mit nevezünk rövidlátásnak?",
    choices: [
      { text: "Ha a távoli tárgyakat homályosan látjuk" },
      { text: "Ha a közeli tárgyakat nem látjuk" },
      { text: "Ha a szem nem érzékeli a színeket" },
      { text: "Ha a retina nem működik" },
    ],
    answerIndex: 0,
    explanation: "Rövidlátáskor a kép a retina elé vetül, ezért a távoli tárgyak elmosódnak.",
  },
  {
    id: "bio_erzek_008",
    question: "Mit nevezünk távollátásnak?",
    choices: [
      { text: "Ha a közeli tárgyakat homályosan látjuk" },
      { text: "Ha nem látjuk a távoli tárgyakat" },
      { text: "Ha a látóideg megsérül" },
      { text: "Ha a retina nem tartalmaz csapokat" },
    ],
    answerIndex: 0,
    explanation: "Távollátáskor a kép a retina mögé kerül, ezért a közeli tárgyak elmosódnak.",
  },
  {
    id: "bio_erzek_009",
    question: "Mi a színlátás feltétele?",
    choices: [
      { text: "A csapsejtek működése" },
      { text: "A pálcikasejtek működése" },
      { text: "A retina hiánya" },
      { text: "A pupilla tágulása" },
    ],
    answerIndex: 0,
    explanation: "A csapsejtek különböző színek fényét érzékelik (vörös, zöld, kék).",
  },
  {
    id: "bio_erzek_010",
    question: "Hol dolgozza fel az agy a látási információkat?",
    choices: [
      { text: "A nyakszirti lebenyben" },
      { text: "A homloklebenyben" },
      { text: "A kisagyban" },
      { text: "A halántéklebenyben" },
    ],
    answerIndex: 0,
    explanation: "A látóközpont az agy nyakszirti lebenyében található.",
  },
  {
    id: "bio_erzek_011",
    question: "Melyik szerv felel a hallásért és egyensúlyért?",
    choices: [
      { text: "A fül" },
      { text: "A szem" },
      { text: "A nyelv" },
      { text: "A bőr" },
    ],
    answerIndex: 0,
    explanation: "A fül a hangok érzékelésének és az egyensúly érzékelésének szerve.",
  },
  {
    id: "bio_erzek_012",
    question: "Mi a dobhártya szerepe?",
    choices: [
      { text: "A hanghullámok rezgéssé alakítása" },
      { text: "A levegő hűtése" },
      { text: "A hallócsontok mozgatása" },
      { text: "A nyomás kiegyenlítése" },
    ],
    answerIndex: 0,
    explanation: "A dobhártya a hanghullámokat rezgéssé alakítja, amit a hallócsontok továbbítanak.",
  },
  {
    id: "bio_erzek_013",
    question: "Melyik három apró csont található a középfülben?",
    choices: [
      { text: "Kalapács, üllő, kengyel" },
      { text: "Csípő, térd, boka" },
      { text: "Orrcsont, állkapocs, nyelvcsont" },
      { text: "Csigolya, lapocka, borda" },
    ],
    answerIndex: 0,
    explanation: "A hallócsontocskák (kalapács, üllő, kengyel) vezetik tovább a hangrezgést.",
  },
  {
    id: "bio_erzek_014",
    question: "Mi a belső fül fő része?",
    choices: [
      { text: "Csiga (cochlea)" },
      { text: "Dobüreg" },
      { text: "Hallójárat" },
      { text: "Dobhártya" },
    ],
    answerIndex: 0,
    explanation: "A csigában alakulnak át a hangrezgések idegingerületté.",
  },
  {
    id: "bio_erzek_015",
    question: "Mi biztosítja az egyensúlyérzékelést a fülben?",
    choices: [
      { text: "A félkörös ívjáratok" },
      { text: "A hallójárat" },
      { text: "A csiga" },
      { text: "A hallóideg" },
    ],
    answerIndex: 0,
    explanation: "A félkörös ívjáratok a fej mozgását érzékelik a belső fülben.",
  },
  {
    id: "bio_erzek_016",
    question: "Melyik agyi terület dolgozza fel a hallási ingereket?",
    choices: [
      { text: "Halántéklebeny" },
      { text: "Nyakszirti lebeny" },
      { text: "Homloklebeny" },
      { text: "Kisagy" },
    ],
    answerIndex: 0,
    explanation: "A hallás központja a halántéklebenyben található.",
  },
  {
    id: "bio_erzek_017",
    question: "Mi történik, ha a dobhártya kiszakad?",
    choices: [
      { text: "A hallás romlik, de általában gyógyul" },
      { text: "A látás is romlik" },
      { text: "Az egyensúly megszűnik" },
      { text: "A hallás élesebbé válik" },
    ],
    answerIndex: 0,
    explanation: "A dobhártya sérülése csökkenti a hangvezetést, de többnyire regenerálódik.",
  },
  {
    id: "bio_erzek_018",
    question: "Mi biztosítja a nyomáskiegyenlítést a fülben?",
    choices: [
      { text: "A fülkürt (Eustach-kürt)" },
      { text: "A dobhártya" },
      { text: "A hallóideg" },
      { text: "A csiga" },
    ],
    answerIndex: 0,
    explanation: "A fülkürt köti össze a középfület a garattal, így kiegyenlíti a nyomást.",
  },
  {
    id: "bio_erzek_019",
    question: "Mi a hallóideg szerepe?",
    choices: [
      { text: "A hangrezgések idegingerületté alakítása és az agyba juttatása" },
      { text: "A hanghullámok továbbítása a dobhártyához" },
      { text: "A hallócsontok mozgatása" },
      { text: "A középfül hűtése" },
    ],
    answerIndex: 0,
    explanation: "A hallóideg az ingerületet a csigából a halántéklebenybe viszi.",
  },
  {
    id: "bio_erzek_020",
    question: "Mi történik, ha a félkörös ívjáratok működése zavart?",
    choices: [
      { text: "Szédülés, egyensúlyzavar alakul ki" },
      { text: "A hallás erősödik" },
      { text: "A látás elmosódik" },
      { text: "A beszéd elakad" },
    ],
    answerIndex: 0,
    explanation: "A félkörös ívjáratok az egyensúlyérzékelés központjai, működési zavaruk szédülést okoz.",
  }
];
/* --- ALTÉMA 3: Reflexek, mozgás és az idegrendszer védelme --- */
const bank_reflexek_mozgas_vedelem: Question[] = [
  {
    id: "bio_reflex_001",
    question: "Mi a reflex?",
    choices: [
      { text: "Gyors, akaratlan válasz egy ingerre" },
      { text: "Tudatos mozgás" },
      { text: "A szívverés lelassulása" },
      { text: "Az izmok fáradása" },
    ],
    answerIndex: 0,
    explanation: "A reflex automatikus válasz, amit a gerincvelő vagy az agy közvetít.",
  },
  {
    id: "bio_reflex_002",
    question: "Melyik a legegyszerűbb reflexív eleme?",
    choices: [
      { text: "Receptor – érzőideg – központ – mozgatóideg – végrehajtó szerv" },
      { text: "Csak az agykéreg" },
      { text: "Az izmok" },
      { text: "A szem és a fül" },
    ],
    answerIndex: 0,
    explanation: "A reflexív láncolatban halad az inger az érzékeléstől a válaszig.",
  },
  {
    id: "bio_reflex_003",
    question: "Hol történik a térdreflex irányítása?",
    choices: [
      { text: "A gerincvelőben" },
      { text: "Az agykéregben" },
      { text: "A kisagyban" },
      { text: "A hipotalamuszban" },
    ],
    answerIndex: 0,
    explanation: "A térdreflexet a gerincvelő közvetlenül vezérli, az agy közreműködése nélkül.",
  },
  {
    id: "bio_reflex_004",
    question: "Mi a tanult reflex?",
    choices: [
      { text: "Olyan reflex, amely gyakorlás útján alakul ki" },
      { text: "Öröklött, veleszületett reflex" },
      { text: "Izomgörcs" },
      { text: "Hormonális válasz" },
    ],
    answerIndex: 0,
    explanation: "Tanulás során kialakuló, rögzülő reflex például az autóvezetés mozdulatai.",
  },
  {
    id: "bio_reflex_005",
    question: "Mi a feltétlen reflex?",
    choices: [
      { text: "Veleszületett, automatikus válasz (pl. pislogás)" },
      { text: "Tanulással kialakult válasz" },
      { text: "Tudatos mozgás" },
      { text: "Érzelmi reakció" },
    ],
    answerIndex: 0,
    explanation: "A feltétlen reflexek velünk születettek, pl. köhögés, nyelés, pislogás.",
  },
  {
    id: "bio_reflex_006",
    question: "Mi a feltételes reflex?",
    choices: [
      { text: "Tanult, ismétléssel rögzülő válasz" },
      { text: "Veleszületett reflex" },
      { text: "Izomremegés hidegben" },
      { text: "A szem alkalmazkodása" },
    ],
    answerIndex: 0,
    explanation: "Ismétlés hatására kialakuló reflex, pl. Pavlov kutyás kísérlete.",
  },
  {
    id: "bio_reflex_007",
    question: "Melyik szerv irányítja a mozgások összehangolását?",
    choices: [
      { text: "A kisagy" },
      { text: "A gerincvelő" },
      { text: "A homloklebeny" },
      { text: "A hipotalamusz" },
    ],
    answerIndex: 0,
    explanation: "A kisagy koordinálja az izmok működését, testtartást és mozgást.",
  },
  {
    id: "bio_reflex_008",
    question: "Mi biztosítja az idegrendszer védelmét a koponyában?",
    choices: [
      { text: "A koponyacsont és az agyhártyák" },
      { text: "A haj és a bőr" },
      { text: "A nyakizmok" },
      { text: "A nyirokrendszer" },
    ],
    answerIndex: 0,
    explanation: "A koponyacsontok és három agyhártya védik az agyat a külső hatásoktól.",
  },
  {
    id: "bio_reflex_009",
    question: "Mi az agy- és gerincvelői folyadék szerepe?",
    choices: [
      { text: "Védelem és tápanyagellátás biztosítása" },
      { text: "A hormonok tárolása" },
      { text: "A hőmérséklet csökkentése" },
      { text: "A vérnyomás növelése" },
    ],
    answerIndex: 0,
    explanation: "A folyadék csillapítja az ütődéseket és táplálja az idegsejteket.",
  },
  {
    id: "bio_reflex_010",
    question: "Mi a koponyán kívül az idegrendszer másik védelmi része?",
    choices: [
      { text: "A gerincoszlop" },
      { text: "A mellkas" },
      { text: "A bordák" },
      { text: "A bőr" },
    ],
    answerIndex: 0,
    explanation: "A gerincvelőt a csigolyák alkotta gerinccsatorna védi.",
  },
  {
    id: "bio_reflex_011",
    question: "Melyik idegrendszeri központ szabályozza a testhőmérsékletet?",
    choices: [
      { text: "A hipotalamusz" },
      { text: "A kisagy" },
      { text: "A nyúltvelő" },
      { text: "A homloklebeny" },
    ],
    answerIndex: 0,
    explanation: "A hipotalamusz a test belső egyensúlyát és hőmérsékletét is szabályozza.",
  },
  {
    id: "bio_reflex_012",
    question: "Mi a gerincvelő szerepe a reflexekben?",
    choices: [
      { text: "A reflexív központja, gyors válaszokat ad" },
      { text: "A hormontermelés helye" },
      { text: "A vérkeringést vezérli" },
      { text: "Csak tároló szerepe van" },
    ],
    answerIndex: 0,
    explanation: "A reflexek nagy része a gerincvelő szintjén valósul meg, gyors reakciót biztosítva.",
  },
  {
    id: "bio_reflex_013",
    question: "Mi a mozgás kivitelezésének központja?",
    choices: [
      { text: "A homloklebeny" },
      { text: "A nyakszirti lebeny" },
      { text: "A kisagy" },
      { text: "A hipotalamusz" },
    ],
    answerIndex: 0,
    explanation: "A homloklebeny motoros központja irányítja az akaratlagos mozgásokat.",
  },
  {
    id: "bio_reflex_014",
    question: "Mi történik, ha a gerincvelő megsérül?",
    choices: [
      { text: "Az ingerületvezetés megszakad, bénulás következhet be" },
      { text: "A reflexek erősödnek" },
      { text: "A hallás romlik" },
      { text: "A bőr érzékenyebbé válik" },
    ],
    answerIndex: 0,
    explanation: "A gerincvelő sérülése megakadályozza az ingerület továbbítását, bénulást okozva.",
  },
  {
    id: "bio_reflex_015",
    question: "Mi a vegetatív idegrendszer két része?",
    choices: [
      { text: "Szimpatikus és paraszimpatikus" },
      { text: "Mozgató és érző" },
      { text: "Akaratlan és akaratlagos" },
      { text: "Jobb és bal oldali" },
    ],
    answerIndex: 0,
    explanation: "A szimpatikus rendszer a készenlétet, a paraszimpatikus a nyugalmat segíti.",
  },
  {
    id: "bio_reflex_016",
    question: "Mi a vegetatív idegrendszer fő feladata?",
    choices: [
      { text: "A belső szervek működésének szabályozása" },
      { text: "A mozgás irányítása" },
      { text: "A látás élesítése" },
      { text: "A reflexek kialakítása" },
    ],
    answerIndex: 0,
    explanation: "A vegetatív idegrendszer akaratlanul irányítja a szív, tüdő, emésztés működését.",
  },
  {
    id: "bio_reflex_017",
    question: "Melyik reflex segít a szem védelmében?",
    choices: [
      { text: "Pislogás" },
      { text: "Nyelés" },
      { text: "Köhögés" },
      { text: "Reszketés" },
    ],
    answerIndex: 0,
    explanation: "A pislogás reflex védi a szemet az idegen testektől és a kiszáradástól.",
  },
  {
    id: "bio_reflex_018",
    question: "Mi az agyhártyagyulladás veszélye?",
    choices: [
      { text: "Az idegrendszer tartós károsodása" },
      { text: "A csontok meggyengülése" },
      { text: "A tüdő összeesése" },
      { text: "A vérkeringés leállása" },
    ],
    answerIndex: 0,
    explanation: "Agyhártyagyulladás súlyos, fertőzéses betegség, amely az idegrendszert károsíthatja.",
  },
  {
    id: "bio_reflex_019",
    question: "Mi segíti az agyat a mechanikai rázkódások ellen?",
    choices: [
      { text: "Az agyvíz (liquor cerebrospinalis)" },
      { text: "A haj" },
      { text: "A vérerek" },
      { text: "A nyirokcsomók" },
    ],
    answerIndex: 0,
    explanation: "Az agyvíz párnaként védi és táplálja az agyat.",
  },
  {
    id: "bio_reflex_020",
    question: "Mi a reflexek biológiai előnye?",
    choices: [
      { text: "Gyors és automatikus reakciót tesznek lehetővé" },
      { text: "Lehetővé teszik a tanulást" },
      { text: "Erősítik az izmokat" },
      { text: "Segítik az emésztést" },
    ],
    answerIndex: 0,
    explanation: "A reflexek életmentő gyors válaszok, például a forró tárgy elrántása esetén.",
  }
];
/* --- ALTÉMA 1: Az ivarszervek és a szaporodás folyamata --- */
const bank_szaporodas_folyamata: Question[] = [
  {
    id: "bio_szap_001",
    question: "Mi az ivarsejtek fő feladata?",
    choices: [
      { text: "Az öröklődő anyag továbbadása" },
      { text: "A test védelme" },
      { text: "A tápanyagok termelése" },
      { text: "A vérkeringés irányítása" },
    ],
    answerIndex: 0,
    explanation: "Az ivarsejtek hordozzák a genetikai információt az utód számára.",
  },
  {
    id: "bio_szap_002",
    question: "Hol termelődnek a hímivarsejtek?",
    choices: [
      { text: "A herékben" },
      { text: "A petefészekben" },
      { text: "A húgyhólyagban" },
      { text: "A prosztatában" },
    ],
    answerIndex: 0,
    explanation: "A herék termelik a hímivarsejteket, amelyek az ondóvezetéken keresztül jutnak tovább.",
  },
  {
    id: "bio_szap_003",
    question: "Mi a női ivarsejt neve?",
    choices: [
      { text: "Petesejt" },
      { text: "Spermium" },
      { text: "Vörösvérsejt" },
      { text: "Leukocita" },
    ],
    answerIndex: 0,
    explanation: "A női ivarsejt a petesejt, amely a petefészekben termelődik.",
  },
  {
    id: "bio_szap_004",
    question: "Hol történik a megtermékenyítés az emberi szervezetben?",
    choices: [
      { text: "A petevezetékben" },
      { text: "A méhben" },
      { text: "A petefészekben" },
      { text: "A hüvelyben" },
    ],
    answerIndex: 0,
    explanation: "A petesejt és a spermium egyesülése a petevezetékben történik.",
  },
  {
    id: "bio_szap_005",
    question: "Mi a megtermékenyítés lényege?",
    choices: [
      { text: "A petesejt és a hímivarsejt magjának egyesülése" },
      { text: "A sejtek növekedése" },
      { text: "A hormonok termelése" },
      { text: "A szervek fejlődése" },
    ],
    answerIndex: 0,
    explanation: "A két ivarsejt egyesülésekor létrejön a zigóta, az új élet kezdete.",
  },
  {
    id: "bio_szap_006",
    question: "Mi alakul ki a zigótából?",
    choices: [
      { text: "Az embrió" },
      { text: "A bőr" },
      { text: "A méhlepény" },
      { text: "A hámsejt" },
    ],
    answerIndex: 0,
    explanation: "A zigóta sejtosztódással embrióvá fejlődik.",
  },
  {
    id: "bio_szap_007",
    question: "Mi a méhlepény szerepe?",
    choices: [
      { text: "Tápanyag- és gázcsere az anya és a magzat között" },
      { text: "A hormontermelés" },
      { text: "Az izomműködés" },
      { text: "A hőszabályozás" },
    ],
    answerIndex: 0,
    explanation: "A méhlepény biztosítja az oxigén és tápanyag átjutását az anyától a magzatba.",
  },
  {
    id: "bio_szap_008",
    question: "Mi a köldökzsinór szerepe?",
    choices: [
      { text: "Összeköti a magzatot a méhlepénnyel" },
      { text: "Rögzíti a magzatot a méh falához" },
      { text: "A légzést irányítja" },
      { text: "Hormonokat szállít az anyába" },
    ],
    answerIndex: 0,
    explanation: "A köldökzsinóron keresztül áramlik a vér a méhlepény és a magzat között.",
  },
  {
    id: "bio_szap_009",
    question: "Mikor kezdődik a serdülőkor?",
    choices: [
      { text: "Amikor megindul a nemi hormonok termelése" },
      { text: "Amikor a csontok összenőnek" },
      { text: "Amikor megáll a növekedés" },
      { text: "Amikor a testhőmérséklet nő" },
    ],
    answerIndex: 0,
    explanation: "A serdülőkor a nemi hormonok fokozott termelésével indul.",
  },
  {
    id: "bio_szap_010",
    question: "Mi a fő női nemi hormon?",
    choices: [
      { text: "Ösztrogén" },
      { text: "Tesztoszteron" },
      { text: "Adrenalin" },
      { text: "Inzulin" },
    ],
    answerIndex: 0,
    explanation: "Az ösztrogén irányítja a női nemi szervek fejlődését és működését.",
  },
  {
    id: "bio_szap_011",
    question: "Mi a fő férfi nemi hormon?",
    choices: [
      { text: "Tesztoszteron" },
      { text: "Ösztrogén" },
      { text: "Szerotonin" },
      { text: "Kortizol" },
    ],
    answerIndex: 0,
    explanation: "A tesztoszteron felel a férfi nemi jellegek kialakulásáért.",
  },
  {
    id: "bio_szap_012",
    question: "Mi történik a menstruáció során?",
    choices: [
      { text: "A méhnyálkahártya lelökődik és vérzés kíséri" },
      { text: "A petesejt beágyazódik" },
      { text: "Megtermékenyítés történik" },
      { text: "A petevezeték elzáródik" },
    ],
    answerIndex: 0,
    explanation: "Ha nem történik megtermékenyítés, a méhnyálkahártya leválik és távozik.",
  },
  {
    id: "bio_szap_013",
    question: "Hány kromoszóma található az emberi ivarsejtekben?",
    choices: [
      { text: "23" },
      { text: "46" },
      { text: "22" },
      { text: "24" },
    ],
    answerIndex: 0,
    explanation: "Az ivarsejtek haploidok, azaz 23 kromoszómát tartalmaznak.",
  },
  {
    id: "bio_szap_014",
    question: "Mi biztosítja, hogy az utód egyedi legyen?",
    choices: [
      { text: "A két szülő génjeinek keveredése" },
      { text: "Az anya vérének összetétele" },
      { text: "A magzat hőmérséklete" },
      { text: "A hormonok szintje" },
    ],
    answerIndex: 0,
    explanation: "A megtermékenyítés során a két szülő génjeinek kombinációja egyedi öröklődést eredményez.",
  },
  {
    id: "bio_szap_015",
    question: "Mi a magzatvíz szerepe?",
    choices: [
      { text: "Védi a magzatot a rázkódástól és a kiszáradástól" },
      { text: "Táplálja a magzatot" },
      { text: "Részt vesz a légzésben" },
      { text: "Fertőtleníti a méhet" },
    ],
    answerIndex: 0,
    explanation: "A magzatvíz védi a magzatot a külső behatásoktól és lehetővé teszi a mozgását.",
  },
  {
    id: "bio_szap_016",
    question: "Mi jellemző a hímivarsejtekre?",
    choices: [
      { text: "Mozgékonyak és kisebbek a petesejtnél" },
      { text: "Nagyok és mozdulatlanok" },
      { text: "Nem tartalmaznak DNS-t" },
      { text: "A csontvelőben termelődnek" },
    ],
    answerIndex: 0,
    explanation: "A spermiumok kicsik, farkuk segítségével mozognak a petesejt felé.",
  },
  {
    id: "bio_szap_017",
    question: "Mi jellemző a petesejtre?",
    choices: [
      { text: "Nagy, mozdulatlan sejt, tápanyagot tartalmaz" },
      { text: "Kicsi és gyorsan mozog" },
      { text: "A májban képződik" },
      { text: "Nem tartalmaz sejtmagot" },
    ],
    answerIndex: 0,
    explanation: "A petesejt nagy méretű és tápanyagot raktároz az embrió kezdeti fejlődéséhez.",
  },
  {
    id: "bio_szap_018",
    question: "Hogyan nevezzük a megtermékenyített petesejtet?",
    choices: [
      { text: "Zigóta" },
      { text: "Embrió" },
      { text: "Fötusz" },
      { text: "Sejtmag" },
    ],
    answerIndex: 0,
    explanation: "A zigóta a megtermékenyített petesejt, amelyből sejtosztódással embrió fejlődik.",
  },
  {
    id: "bio_szap_019",
    question: "Hogyan jön létre az egypetéjű iker?",
    choices: [
      { text: "Egy zigóta osztódik ketté" },
      { text: "Két petesejt termékenyül meg" },
      { text: "Két spermium egyesül" },
      { text: "Kettős megtermékenyítés történik" },
    ],
    answerIndex: 0,
    explanation: "Egypetéjű ikrek egy megtermékenyített petesejtből fejlődnek.",
  },
  {
    id: "bio_szap_020",
    question: "Mi jellemző a kétpetéjű ikrekre?",
    choices: [
      { text: "Két külön petesejt és két spermium egyesül" },
      { text: "Egy zigóta kettéválik" },
      { text: "Csak azonos neműek lehetnek" },
      { text: "Mindig hasonló külsővel rendelkeznek" },
    ],
    answerIndex: 0,
    explanation: "Kétpetéjű ikrek két külön petesejtből és két hímivarsejtből alakulnak ki, így nem feltétlenül hasonlítanak.",
  }
];
/* --- ALTÉMA 2: Sejtosztódás – mitózis és meiózis --- */
const bank_sejtosztodas: Question[] = [
  {
    id: "bio_oszt_001",
    question: "Mi a sejtosztódás célja?",
    choices: [
      { text: "Új sejtek létrehozása növekedéshez és pótláshoz" },
      { text: "A sejtek elpusztítása" },
      { text: "A sejtek energiatermelése" },
      { text: "A sejtmag eltávolítása" },
    ],
    answerIndex: 0,
    explanation: "A sejtosztódás során új sejtek jönnek létre, ami nélkülözhetetlen a növekedéshez és a regenerációhoz.",
  },
  {
    id: "bio_oszt_002",
    question: "Mi történik a mitózis során?",
    choices: [
      { text: "A sejt kettéosztódik, és két azonos sejt keletkezik" },
      { text: "A kromoszómák feleződnek" },
      { text: "A sejtmag eltűnik" },
      { text: "A sejtek összeolvadnak" },
    ],
    answerIndex: 0,
    explanation: "A mitózis során a sejt genetikai anyaga lemásolódik, így két azonos utódsejt keletkezik.",
  },
  {
    id: "bio_oszt_003",
    question: "Melyik sejttípus osztódik mitózissal?",
    choices: [
      { text: "A testi sejtek" },
      { text: "Az ivarsejtek" },
      { text: "Csak a vörösvérsejtek" },
      { text: "Csak a baktériumok" },
    ],
    answerIndex: 0,
    explanation: "A testi sejtek mitózissal osztódnak, hogy pótolják az elöregedett sejteket.",
  },
  {
    id: "bio_oszt_004",
    question: "Mi a meiózis fő célja?",
    choices: [
      { text: "Ivarsejtek létrehozása felezett kromoszómaszámmal" },
      { text: "A sejtek növekedése" },
      { text: "A test energiaellátása" },
      { text: "A sejtmag megerősítése" },
    ],
    answerIndex: 0,
    explanation: "A meiózis során az ivarsejtekben a kromoszómaszám a felére csökken (haploid sejtek jönnek létre).",
  },
  {
    id: "bio_oszt_005",
    question: "Hány kromoszóma van az emberi testi sejtekben?",
    choices: [
      { text: "46" },
      { text: "23" },
      { text: "44" },
      { text: "48" },
    ],
    answerIndex: 0,
    explanation: "Az ember testi sejtjeiben 46 kromoszóma található, 23 párban.",
  },
  {
    id: "bio_oszt_006",
    question: "Hány kromoszóma található az ivarsejtekben?",
    choices: [
      { text: "23" },
      { text: "46" },
      { text: "44" },
      { text: "22" },
    ],
    answerIndex: 0,
    explanation: "A meiózis miatt az ivarsejtek felezett kromoszómaszámúak (haploid).",
  },
  {
    id: "bio_oszt_007",
    question: "Mi történik a sejtosztódás előtt?",
    choices: [
      { text: "A DNS megkettőződik" },
      { text: "A sejtmag eltűnik" },
      { text: "A sejt összezsugorodik" },
      { text: "A citoplazma elpárolog" },
    ],
    answerIndex: 0,
    explanation: "A sejt osztódás előtt lemásolja a DNS-t, hogy mindkét utódsejt azonos információt kapjon.",
  },
  {
    id: "bio_oszt_008",
    question: "Mit jelent a kromoszómapár?",
    choices: [
      { text: "Két azonos génkészletet hordozó kromoszóma" },
      { text: "Két különböző sejtmag" },
      { text: "Két riboszóma kapcsolata" },
      { text: "Két sejthártya réteg" },
    ],
    answerIndex: 0,
    explanation: "Minden testi sejt kromoszómái párokban fordulnak elő: az egyik az anyától, a másik az apától származik.",
  },
  {
    id: "bio_oszt_009",
    question: "Miben különbözik a meiózis a mitózistól?",
    choices: [
      { text: "A meiózis során feleződik a kromoszómaszám" },
      { text: "A meiózis gyorsabb folyamat" },
      { text: "A meiózis több energiát termel" },
      { text: "A meiózis azonos sejteket eredményez" },
    ],
    answerIndex: 0,
    explanation: "A meiózisban az utódsejtek fele kromoszómaszámúak lesznek (haploid).",
  },
  {
    id: "bio_oszt_010",
    question: "Hol zajlik a meiózis az emberi testben?",
    choices: [
      { text: "A herékben és a petefészekben" },
      { text: "A májban" },
      { text: "A bőrben" },
      { text: "A gyomorban" },
    ],
    answerIndex: 0,
    explanation: "Az ivarsejtek képződése során történik a meiózis.",
  },
  {
    id: "bio_oszt_011",
    question: "Mi történik a kromoszómákkal mitózis során?",
    choices: [
      { text: "Kettéosztódnak és az utódsejtekbe kerülnek" },
      { text: "Elveszítik a DNS-t" },
      { text: "Visszafordulnak a magba" },
      { text: "Összeolvadnak" },
    ],
    answerIndex: 0,
    explanation: "A mitózis során a kromoszómák szétválnak, és mindkét utódsejt megkapja a teljes génkészletet.",
  },
  {
    id: "bio_oszt_012",
    question: "Mit nevezünk sejtciklusnak?",
    choices: [
      { text: "A sejt növekedésének és osztódásának ismétlődő folyamata" },
      { text: "A sejtek pusztulását" },
      { text: "A sejtmag mozgását" },
      { text: "A fehérjék szintézisét" },
    ],
    answerIndex: 0,
    explanation: "A sejtciklus magában foglalja a sejt növekedését, DNS másolását és osztódását.",
  },
  {
    id: "bio_oszt_013",
    question: "Mit nevezünk haploid sejtnek?",
    choices: [
      { text: "Olyan sejtet, amely felezett kromoszómaszámú" },
      { text: "Olyan sejtet, amely dupla kromoszómaszámú" },
      { text: "Olyan sejtet, amelynek nincs sejtmagja" },
      { text: "Olyan sejtet, amely több sejtmaggal rendelkezik" },
    ],
    answerIndex: 0,
    explanation: "A haploid sejtekben a kromoszómaszám fele a testi sejtekének, ilyenek az ivarsejtek.",
  },
  {
    id: "bio_oszt_014",
    question: "Mi a diploid sejt?",
    choices: [
      { text: "Kétszeres kromoszómaszámú sejt (23 pár = 46)" },
      { text: "Fele kromoszómaszámú sejt" },
      { text: "Sejtmag nélküli sejt" },
      { text: "Színtelen vérsejt" },
    ],
    answerIndex: 0,
    explanation: "A diploid sejtek 23 pár kromoszómát tartalmaznak, az egyik szülőtől az egyik, a másiktól a másik származik.",
  },
  {
    id: "bio_oszt_015",
    question: "Mi a meiózis biológiai jelentősége?",
    choices: [
      { text: "Az öröklődő változatosság biztosítása" },
      { text: "A sejtek méretének növelése" },
      { text: "A DNS stabilizálása" },
      { text: "A sejt energiaellátása" },
    ],
    answerIndex: 0,
    explanation: "A meiózis során a kromoszómák véletlenszerű szétválása genetikai sokféleséget eredményez.",
  },
  {
    id: "bio_oszt_016",
    question: "Mi történik a meiózis során a kromoszómákkal?",
    choices: [
      { text: "Párosodnak, majd szétválnak" },
      { text: "Eltűnnek a sejtből" },
      { text: "Megkettőződnek és megmaradnak" },
      { text: "A sejtmag elpusztítja őket" },
    ],
    answerIndex: 0,
    explanation: "A meiózis során a homológ kromoszómák párosodnak, majd két sejtosztódásban szétválnak.",
  },
  {
    id: "bio_oszt_017",
    question: "Mi a mitózis biológiai szerepe?",
    choices: [
      { text: "A növekedés és sejtmegújulás biztosítása" },
      { text: "Az öröklődés szabályozása" },
      { text: "Az ivarsejtek létrehozása" },
      { text: "A hormonok termelése" },
    ],
    answerIndex: 0,
    explanation: "A mitózis nélkül nem nőne a szervezet, és nem tudná pótolni az elhalt sejteket.",
  },
  {
    id: "bio_oszt_018",
    question: "Melyik állítás igaz a mitózisra?",
    choices: [
      { text: "Két genetikailag azonos utódsejt keletkezik" },
      { text: "Két különböző sejt jön létre" },
      { text: "A kromoszómaszám feleződik" },
      { text: "Csak ivarsejtekben történik" },
    ],
    answerIndex: 0,
    explanation: "A mitózis során az utódsejtek azonos genetikai információt kapnak.",
  },
  {
    id: "bio_oszt_019",
    question: "Melyik sejttípus NEM osztódik?",
    choices: [
      { text: "Az idegsejtek" },
      { text: "A bőrsejtek" },
      { text: "A vérsejtek" },
      { text: "A csontsejtek" },
    ],
    answerIndex: 0,
    explanation: "Az idegsejtek nem osztódnak, ezért sérülésük maradandó lehet.",
  },
  {
    id: "bio_oszt_020",
    question: "Mi a sejtosztódás jelentősége az öröklődés szempontjából?",
    choices: [
      { text: "Biztosítja, hogy az utódsejtek ugyanazt az örökítőanyagot kapják" },
      { text: "Megakadályozza az öröklődést" },
      { text: "Csökkenti a genetikai változatosságot" },
      { text: "Csak a mutációk során történik" },
    ],
    answerIndex: 0,
    explanation: "A sejtosztódás biztosítja az öröklött információ pontos továbbadását minden sejtbe.",
  }
];
/* --- ALTÉMA 3: Öröklődés és tulajdonságok átadása --- */
const bank_oroklodes: Question[] = [
  {
    id: "bio_orok_001",
    question: "Mi az öröklődés lényege?",
    choices: [
      { text: "A tulajdonságok továbbadása a szülőktől az utódoknak" },
      { text: "A test növekedése" },
      { text: "A sejtek elöregedése" },
      { text: "A szervek működése" },
    ],
    answerIndex: 0,
    explanation: "Az öröklődés során a genetikai információk generációról generációra átadódnak.",
  },
  {
    id: "bio_orok_002",
    question: "Mi a gén?",
    choices: [
      { text: "Az öröklődés egysége, a DNS szakasza" },
      { text: "Egy sejtalkotó" },
      { text: "A fehérjék típusa" },
      { text: "Egy vérsejt" },
    ],
    answerIndex: 0,
    explanation: "A gén a DNS egy szakasza, amely egy adott tulajdonságot határoz meg.",
  },
  {
    id: "bio_orok_003",
    question: "Hol található a genetikai információ?",
    choices: [
      { text: "A sejtmagban, a DNS-ben" },
      { text: "A sejthártyán" },
      { text: "A citoplazmában" },
      { text: "A mitokondriumban" },
    ],
    answerIndex: 0,
    explanation: "A genetikai információ a sejtmagban, a kromoszómák DNS-ében található.",
  },
  {
    id: "bio_orok_004",
    question: "Hány kromoszómapár található az emberi testi sejtekben?",
    choices: [
      { text: "23 pár" },
      { text: "22 pár" },
      { text: "46 pár" },
      { text: "24 pár" },
    ],
    answerIndex: 0,
    explanation: "Az ember testi sejtjeiben 23 kromoszómapár (összesen 46 kromoszóma) található.",
  },
  {
    id: "bio_orok_005",
    question: "Ki volt Gregor Mendel?",
    choices: [
      { text: "A genetika tudományának megalapítója" },
      { text: "Egy orvos, aki a vért vizsgálta" },
      { text: "Egy fizikus" },
      { text: "Egy biokémikus" },
    ],
    answerIndex: 0,
    explanation: "Mendel borsókísérleteivel felfedezte az öröklődés alapvető törvényeit.",
  },
  {
    id: "bio_orok_006",
    question: "Mit nevezünk domináns tulajdonságnak?",
    choices: [
      { text: "Azt, amelyik elnyomja a másik gén hatását" },
      { text: "A gyengébb, rejtett jelleget" },
      { text: "A kizárólag nőknél megjelenőt" },
      { text: "A kizárólag férfiaknál megjelenőt" },
    ],
    answerIndex: 0,
    explanation: "A domináns gén hatása már egy példányban is érvényesül.",
  },
  {
    id: "bio_orok_007",
    question: "Mit jelent a recesszív tulajdonság?",
    choices: [
      { text: "Csak akkor jelenik meg, ha mindkét gén recesszív" },
      { text: "Mindig megjelenik" },
      { text: "A domináns ellentéte" },
      { text: "A sejtosztódás típusa" },
    ],
    answerIndex: 0,
    explanation: "A recesszív gén hatása csak akkor érvényesül, ha a másik gén is recesszív.",
  },
  {
    id: "bio_orok_008",
    question: "Mit nevezünk genotípusnak?",
    choices: [
      { text: "A gének összességét" },
      { text: "A külső megjelenést" },
      { text: "A sejtek alakját" },
      { text: "A kromoszómák méretét" },
    ],
    answerIndex: 0,
    explanation: "A genotípus az egyed genetikai felépítése, a gének összessége.",
  },
  {
    id: "bio_orok_009",
    question: "Mi a fenotípus?",
    choices: [
      { text: "A megjelenő tulajdonság" },
      { text: "A sejt DNS-állománya" },
      { text: "A sejtosztódás módja" },
      { text: "A fehérjék típusa" },
    ],
    answerIndex: 0,
    explanation: "A fenotípus a genotípus és a környezet hatására megjelenő tulajdonság.",
  },
  {
    id: "bio_orok_010",
    question: "Hogyan öröklődik a szemszín?",
    choices: [
      { text: "Több gén határozza meg" },
      { text: "Egyetlen gén irányítja" },
      { text: "Nem öröklődik" },
      { text: "Csak az anyától származik" },
    ],
    answerIndex: 0,
    explanation: "A szemszínt több gén együttes hatása határozza meg, ezért sokféle árnyalat lehetséges.",
  },
  {
    id: "bio_orok_011",
    question: "Mit nevezünk mutációnak?",
    choices: [
      { text: "A DNS-ben bekövetkező öröklődő változást" },
      { text: "A sejtek elhalását" },
      { text: "A sejtosztódás gyorsulását" },
      { text: "A sejthártya megsérülését" },
    ],
    answerIndex: 0,
    explanation: "A mutáció a DNS megváltozása, ami új tulajdonságokat hozhat létre.",
  },
  {
    id: "bio_orok_012",
    question: "Mi okozhat mutációt?",
    choices: [
      { text: "Sugárzás, vegyszerek vagy vírusok" },
      { text: "Testmozgás" },
      { text: "Zajhatás" },
      { text: "Alvás hiánya" },
    ],
    answerIndex: 0,
    explanation: "A mutációkat környezeti tényezők, például UV-sugárzás vagy vegyi anyagok is kiválthatják.",
  },
  {
    id: "bio_orok_013",
    question: "Mi az ivari kromoszómák szerepe?",
    choices: [
      { text: "A nem meghatározása" },
      { text: "A testhőmérséklet szabályozása" },
      { text: "A sejtlégzés irányítása" },
      { text: "Az izomműködés" },
    ],
    answerIndex: 0,
    explanation: "Az ivari kromoszómák (X és Y) határozzák meg, hogy az egyed fiú vagy lány lesz.",
  },
  {
    id: "bio_orok_014",
    question: "Hány ivari kromoszóma van az emberben?",
    choices: [
      { text: "2 (XX vagy XY)" },
      { text: "1" },
      { text: "4" },
      { text: "23" },
    ],
    answerIndex: 0,
    explanation: "Az emberben 2 ivari kromoszóma van: nőknél XX, férfiaknál XY.",
  },
  {
    id: "bio_orok_015",
    question: "Miért különböznek a testvérek egymástól?",
    choices: [
      { text: "Mert a szülők génjei véletlenszerűen keverednek a megtermékenyítéskor" },
      { text: "Mert más a vércsoportjuk" },
      { text: "Mert eltérő az életkoruk" },
      { text: "Mert másképp táplálkoznak" },
    ],
    answerIndex: 0,
    explanation: "A meiózis során a kromoszómák véletlenszerűen oszlanak el, így minden utód genetikai kombinációja egyedi.",
  },
  {
    id: "bio_orok_016",
    question: "Mit nevezünk öröklött betegségnek?",
    choices: [
      { text: "Olyan betegséget, amely genetikai hiba miatt alakul ki" },
      { text: "Olyat, amit fertőzés okoz" },
      { text: "Olyat, amit az életmód befolyásol" },
      { text: "Olyat, amit stressz vált ki" },
    ],
    answerIndex: 0,
    explanation: "Az öröklött betegségek a DNS hibái miatt jönnek létre és továbböröklődnek.",
  },
  {
    id: "bio_orok_017",
    question: "Mi a kromoszóma?",
    choices: [
      { text: "A DNS szálakból felépülő örökítő struktúra" },
      { text: "Egy sejthártya" },
      { text: "Egy fehérje molekula" },
      { text: "A sejtplazma része" },
    ],
    answerIndex: 0,
    explanation: "A kromoszómák a sejtmagban található DNS-t tartalmazzák, amelyek a géneket hordozzák.",
  },
  {
    id: "bio_orok_018",
    question: "Mi biztosítja az öröklődő változatosságot?",
    choices: [
      { text: "A meiózis és a mutációk" },
      { text: "A sejtlégzés" },
      { text: "A hormontermelés" },
      { text: "A táplálkozás" },
    ],
    answerIndex: 0,
    explanation: "A meiózis véletlenszerű kromoszómaszétválása és a mutációk új kombinációkat hoznak létre.",
  },
  {
    id: "bio_orok_019",
    question: "Mit jelent, ha valaki hordozó egy öröklött betegségre?",
    choices: [
      { text: "Egy hibás gént örökölt, de nem beteg" },
      { text: "Biztosan beteg" },
      { text: "Nem tud továbbörökíteni semmit" },
      { text: "Több kromoszómája van a szokásosnál" },
    ],
    answerIndex: 0,
    explanation: "A hordozó személyben a recesszív betegség nem jelenik meg, de továbbadható az utódnak.",
  },
  {
    id: "bio_orok_020",
    question: "Mi az öröklődés biológiai jelentősége?",
    choices: [
      { text: "Az élet folytonosságának biztosítása és a faj fennmaradása" },
      { text: "A sejtek gyors növekedése" },
      { text: "A hormonok termelése" },
      { text: "A szervezet energiatermelése" },
    ],
    answerIndex: 0,
    explanation: "Az öröklődés biztosítja, hogy a faj jellemzői megmaradjanak és az utód hasonlítson a szülőkre.",
  }
];
/* ===============================
 * BIOLÓGIA 8 — ÖKOLÓGIA ÉS KÖRNYEZETVÉDELEM
 * Altémák: okologiai_alapfogalmak, anyag_es_energia_korforgas, kornyezetvedelem_fenntarthatosag
 * =============================== */

/* --- ALTÉMA 1: Ökológiai alapfogalmak --- */
export const bank_okologiai_alapfogalmak: Question[] = [
  { id: "bio_okol_001", question: "Mi az ökoszisztéma?", choices: [
    { text: "Élőlények közössége és élettelen környezetük kölcsönhatásban" },
    { text: "Csak az állatok együttese" },
    { text: "Csak a növények együttese" },
    { text: "Egy faj egyedeinek összessége" }
  ], answerIndex: 0, explanation: "Ökoszisztéma = élő (biotikus) + élettelen (abiotikus) tényezők rendszere." },

  { id: "bio_okol_002", question: "Mit jelent a populáció?", choices: [
    { text: "Azonos faj egyedei egy helyen, egy időben" },
    { text: "Különböző fajok összessége" },
    { text: "Egyed és környezete" },
    { text: "Az összes élőlény a Földön" }
  ], answerIndex: 0, explanation: "Populáció: egy faj térben-időben együtt élő egyedei." },

  { id: "bio_okol_003", question: "Mi a társulás (biocönózis)?", choices: [
    { text: "Különböző fajok populációinak együttese" },
    { text: "Egy faj egyedei" },
    { text: "Csak a talaj élőlényei" },
    { text: "Az élettelen környezet" }
  ], answerIndex: 0, explanation: "A társulás több faj populációiból áll össze." },

  { id: "bio_okol_004", question: "Mi a tápláléklánc?", choices: [
    { text: "Ki kit eszik, egymást követő kapcsolatok sora" },
    { text: "Az élőlények rokonsági rendszere" },
    { text: "A vízkörforgás ábrája" },
    { text: "A talajképződés folyamata" }
  ], answerIndex: 0, explanation: "Producens → fogyasztó → lebontó kapcsolatok." },

  { id: "bio_okol_005", question: "Mit nevezünk producenseknek?", choices: [
    { text: "Fotoszintetizáló élőlények" },
    { text: "Húsevő állatok" },
    { text: "Mindenevők" },
    { text: "Lebontók" }
  ], answerIndex: 0, explanation: "A producensek elsődleges szervesanyag-termelők (növények, algák)." },

  { id: "bio_okol_006", question: "Kik a lebontók (dekomponensek)?", choices: [
    { text: "Gombák, baktériumok – szerves anyagot bontanak le" },
    { text: "Ragadozók" },
    { text: "Mindenevők" },
    { text: "Csak növényevők" }
  ], answerIndex: 0, explanation: "A lebontók ásványi anyagokra bontanak, körforgást zárnak." },

  { id: "bio_okol_007", question: "Mi a biomassza?", choices: [
    { text: "Élőlények össztömege egy rendszerben" },
    { text: "A vízkészlet mennyisége" },
    { text: "Csak a növényi tömeg" },
    { text: "A talaj ásványtartalma" }
  ], answerIndex: 0, explanation: "Biomassza = adott tér/idő élőanyag-tömege." },

  { id: "bio_okol_008", question: "Mi a biotóp?", choices: [
    { text: "Élőhely – az élettelen környezeti tényezők együttese" },
    { text: "Egy faj közössége" },
    { text: "Táplálékháló" },
    { text: "Védett terület" }
  ], answerIndex: 0, explanation: "A társulás élettelen „színtere” a biotóp." },

  { id: "bio_okol_009", question: "Mi a niche (ökológiai fülke)?", choices: [
    { text: "Egy faj szerepe, erőforrás-használata a rendszerben" },
    { text: "Védett barlang" },
    { text: "Fészek" },
    { text: "Csak a tápláléka" }
  ], answerIndex: 0, explanation: "A niche a faj „szakmája”: milyen erőforrásokat, hogyan használ." },

  { id: "bio_okol_010", question: "Mi a kompetíció?", choices: [
    { text: "Versengés azonos erőforrásokért" },
    { text: "Együttműködés fajok között" },
    { text: "Lebontás" },
    { text: "Mutualizmus" }
  ], answerIndex: 0, explanation: "Azonos erőforrás → versengés (pl. táplálék, élőhely)." },

  { id: "bio_okol_011", question: "Mi a mutualizmus?", choices: [
    { text: "Kölcsönösen előnyös kapcsolat" },
    { text: "Egyoldalú haszon" },
    { text: "Kórokozó-házigazda" },
    { text: "Versengés" }
  ], answerIndex: 0, explanation: "Mindkét fél nyer (pl. beporzás: növény–rovar)." },

  { id: "bio_okol_012", question: "Mi a parazitizmus?", choices: [
    { text: "Élősködés – egyik fél haszna a másik kárára" },
    { text: "Mindkét fél nyer" },
    { text: "Kölcsönös védelem" },
    { text: "Nincs kapcsolat" }
  ], answerIndex: 0, explanation: "Parazita a gazdából él, annak kárára." },

  { id: "bio_okol_013", question: "Mit jelent az inváziós faj?", choices: [
    { text: "Idegenhonos, gyorsan terjedő faj, kiszoríthat őshonosakat" },
    { text: "Csak védett területen él" },
    { text: "Kipusztuló faj" },
    { text: "Csak háziállat" }
  ], answerIndex: 0, explanation: "Új területre bekerülve versenyelőnnyel terjedhet." },

  { id: "bio_okol_014", question: "Mi a táplálékháló?", choices: [
    { text: "Sok tápláléklánc összekapcsolt rendszere" },
    { text: "Egyetlen lánc" },
    { text: "Csak a ragadozók hálója" },
    { text: "Csak a növényevők lánca" }
  ], answerIndex: 0, explanation: "Valós rendszerekben láncok hálózatot alkotnak." },

  { id: "bio_okol_015", question: "Mit jelent a biodiverzitás?", choices: [
    { text: "Faji és élőhelyi változatosság" },
    { text: "Csak a fajok száma" },
    { text: "Csak a génváltozatosság" },
    { text: "Csak a biomassza" }
  ], answerIndex: 0, explanation: "Sokféleség több szinten: gének, fajok, élőhelyek." },

  { id: "bio_okol_016", question: "Mi az indikátorfaj?", choices: [
    { text: "Környezeti állapotot jelző faj" },
    { text: "Csúcsragadozó" },
    { text: "Lebontó szervezet" },
    { text: "Mindenevő" }
  ], answerIndex: 0, explanation: "Érzékeny fajok jelenléte/hiánya jelezheti a változást." },

  { id: "bio_okol_017", question: "Mi az eltartóképesség?", choices: [
    { text: "A környezet által fenntartható egyedszám" },
    { text: "A populáció átlagéletkora" },
    { text: "A fajok száma" },
    { text: "A születések aránya" }
  ], answerIndex: 0, explanation: "Erőforrások korlátozzák a populáció növekedését." },

  { id: "bio_okol_018", question: "Mi a szukcesszió?", choices: [
    { text: "Társulások egymásutánja egy területen" },
    { text: "Egyedfejlődés" },
    { text: "Sejtosztódás" },
    { text: "Mutáció" }
  ], answerIndex: 0, explanation: "Pionír közösségektől a klimax társulásig." },

  { id: "bio_okol_019", question: "Mi a klimax társulás?", choices: [
    { text: "Viszonylag stabil, érett közösség" },
    { text: "Pionír növényzet" },
    { text: "Csak gyomfajok" },
    { text: "Csak állatok" }
  ], answerIndex: 0, explanation: "Szukcesszió végállapota (dinamikusan stabil)." },

  { id: "bio_okol_020", question: "Melyik NEM abiotikus tényező?", choices: [
    { text: "Ragadozó jelenléte" },
    { text: "Hőmérséklet" },
    { text: "Fény" },
    { text: "Víz" }
  ], answerIndex: 0, explanation: "A ragadozó biotikus (élő), a többiek élettelen tényezők." },
];

/* --- ALTÉMA 2: Anyag- és energiakörforgás --- */
export const bank_anyag_energia_korforgas: Question[] = [
  { id: "bio_korf_001", question: "Mi hajtja az ökoszisztémák energiáját?", choices: [
    { text: "A Nap sugárzása" }, { text: "A Föld forgása" }, { text: "A Hold fénye" }, { text: "Csak geotermia" }
  ], answerIndex: 0, explanation: "A Nap energiája indítja a fotoszintézist." },

  { id: "bio_korf_002", question: "Mi a fotoszintézis lényege?", choices: [
    { text: "Szervetlenből szerves anyag, oxigén felszabadulásával" },
    { text: "Szervesből szervetlen anyag" },
    { text: "Fehérjeépítés a gyomorban" },
    { text: "Csak hőtermelés" }
  ], answerIndex: 0, explanation: "CO₂ + H₂O → szőlőcukor + O₂ (fényenergia)." },

  { id: "bio_korf_003", question: "Melyik helyes energiaáramlás?", choices: [
    { text: "Nap → producensek → fogyasztók → lebontók" },
    { text: "Fogyasztók → producensek → Nap" },
    { text: "Lebontók → Nap → producensek" },
    { text: "Nap → lebontók → fogyasztók" }
  ], answerIndex: 0, explanation: "Az energia egyirányúan áramlik, hővé alakul." },

  { id: "bio_korf_004", question: "Mi a szén körforgásának fő lépése?", choices: [
    { text: "Fotoszintézis és légzés" },
    { text: "Csak csapadék" },
    { text: "Csak párolgás" },
    { text: "Csak ülepedés" }
  ], answerIndex: 0, explanation: "A bioszféra CO₂ felvétele és visszabocsátása." },

  { id: "bio_korf_005", question: "Mi növeli a légköri CO₂-t?", choices: [
    { text: "Fosszilis tüzelők égetése" },
    { text: "Fotoszintézis" },
    { text: "Erdősítés" },
    { text: "Karsztképződés" }
  ], answerIndex: 0, explanation: "Égetés → CO₂ kibocsátás nő." },

  { id: "bio_korf_006", question: "Mi a nitrogénkörforgás különlegessége?", choices: [
    { text: "Kötött N₂-t baktériumok teszik felvehetővé" },
    { text: "A növények közvetlenül N₂-t lélegeznek be" },
    { text: "A talaj köti meg végleg" },
    { text: "Csak vulkánok adják" }
  ], answerIndex: 0, explanation: "N-kötő baktériumok → ammónia/nitrát formák." },

  { id: "bio_korf_007", question: "Mi a denitrifikáció?", choices: [
    { text: "Nitrát visszaalakulása N₂ gázzá" },
    { text: "Ammónia képződése" },
    { text: "Fotoszintézis" },
    { text: "Nitrifikáció" }
  ], answerIndex: 0, explanation: "Talajbaktériumok zárják a nitrogénkört." },

  { id: "bio_korf_008", question: "Mi a nitrifikáció?", choices: [
    { text: "Ammónia → nitrit/nitrát átalakítás baktériumokkal" },
    { text: "CO₂ megkötése" },
    { text: "Fehérjebontás" },
    { text: "Kénsavképzés" }
  ], answerIndex: 0, explanation: "Talajban zajló oxidációs lépések." },

  { id: "bio_korf_009", question: "Mi zárja az anyagkörforgást?", choices: [
    { text: "Lebontók munkája" }, { text: "Csúcsragadozók" }, { text: "Szél" }, { text: "Csapadék" }
  ], answerIndex: 0, explanation: "A szerves anyagokat visszaalakítják szervetlenné." },

  { id: "bio_korf_010", question: "Miért rövid a tápláléklánc hossza?", choices: [
    { text: "Mert energia minden szinten vész (hő formájában)" },
    { text: "Mert nincsenek lebontók" },
    { text: "Mert a Nap nem süt eleget" },
    { text: "Mert a ragadozók nem esznek" }
  ], answerIndex: 0, explanation: "10% szabály: kevés energia jut feljebb." },

  { id: "bio_korf_011", question: "Mi a vízkörforgás hajtóereje?", choices: [
    { text: "A Nap melege (párolgás)" }, { text: "Csak a szél" }, { text: "Csak a jég" }, { text: "Csak a gravitáció" }
  ], answerIndex: 0, explanation: "Párolgás–felhőképződés–csapadék." },

  { id: "bio_korf_012", question: "Mi a talaj termékenységének alapja?", choices: [
    { text: "Humusz és ásványi anyagok aránya" },
    { text: "Csak homok" },
    { text: "Csak kavics" },
    { text: "Csak agyag" }
  ], answerIndex: 0, explanation: "Humusz tápanyag- és vízmegkötést segít." },

  { id: "bio_korf_013", question: "Mi az eutrofizáció?", choices: [
    { text: "Tápanyag-terhelés miatti algásodás" },
    { text: "Savaseső" },
    { text: "Talajsivatagosodás" },
    { text: "Ózonpajzs vastagodása" }
  ], answerIndex: 0, explanation: "Foszfor/nitrogén többlet → algavirágzás, oxigénhiány." },

  { id: "bio_korf_014", question: "Mi csökkenti az eróziót?", choices: [
    { text: "Erdősávok, talajtakarás" },
    { text: "Monokultúra" },
    { text: "Túllegeltetés" },
    { text: "Követbányászat" }
  ], answerIndex: 0, explanation: "Növényborítás védi a talajt a lemosódástól." },

  { id: "bio_korf_015", question: "Mi a primer produkció?", choices: [
    { text: "Producensek szervesanyag-termelése" },
    { text: "Ragadozók zsákmányszerzése" },
    { text: "Lebontás sebessége" },
    { text: "Szélenergia termelése" }
  ], answerIndex: 0, explanation: "Fotoszintézis révén létrehozott biomassza." },

  { id: "bio_korf_016", question: "Mi a szekunder produkció?", choices: [
    { text: "Fogyasztók testtömeg-gyarapodása" },
    { text: "Producensek termelése" },
    { text: "Lebontók munkája" },
    { text: "Talajképződés" }
  ], answerIndex: 0, explanation: "Átadott energia a fogyasztói szinteken." },

  { id: "bio_korf_017", question: "Mi az ökológiai lábnyom?", choices: [
    { text: "Erőforrás-igényünk területigénye" },
    { text: "Cipőméret" },
    { text: "Csak CO₂-kibocsátás" },
    { text: "Csak vízfelhasználás" }
  ], answerIndex: 0, explanation: "Megmutatja, mekkora terület kell életmódunk fenntartásához." },

  { id: "bio_korf_018", question: "Mi a bioakkumuláció?", choices: [
    { text: "Mérgek felhalmozódása az élőlényekben" },
    { text: "Só kiválása" },
    { text: "Vízpárolgás" },
    { text: "Homok lerakódás" }
  ], answerIndex: 0, explanation: "Zsíroldékony szennyezők trófaszinten erősödnek (biomagnifikáció)." },

  { id: "bio_korf_019", question: "Mi a fenntartható gazdálkodás célja?", choices: [
    { text: "Erőforrások megőrzése a jövő generációknak" },
    { text: "Minél gyorsabb kimerítés" },
    { text: "Csak nyereség rövid távon" },
    { text: "Csak ipari növekedés" }
  ], answerIndex: 0, explanation: "Ökológiai és társadalmi szempontok összehangolása." },

  { id: "bio_korf_020", question: "Melyik NEM megújuló energia?", choices: [
    { text: "Kőolaj" }, { text: "Nap" }, { text: "Szél" }, { text: "Víz" }
  ], answerIndex: 0, explanation: "A kőolaj fosszilis, nem megújuló." },
];

/* --- ALTÉMA 3: Környezetvédelem és fenntarthatóság --- */
export const bank_kornyezetvedelem_fenntarthatosag: Question[] = [
  { id: "bio_korny_001", question: "Mi a fenntarthatóság lényege?", choices: [
    { text: "Jelen igények kielégítése a jövő veszélyeztetése nélkül" },
    { text: "Csak a jelenlegi termelés növelése" },
    { text: "Erőforrások gyors kimerítése" },
    { text: "Csak természetvédelmi területek bővítése" }
  ], answerIndex: 0, explanation: "Gazdaság–társadalom–környezet egyensúlya." },

  { id: "bio_korny_002", question: "Mi a szelektív hulladékgyűjtés célja?", choices: [
    { text: "Újrahasznosítás hatékonyságának növelése" },
    { text: "Csak a hulladék eltüntetése" },
    { text: "Égetés növelése" },
    { text: "Lerakók számának növelése" }
  ], answerIndex: 0, explanation: "Anyagában történő hasznosítás, kevesebb lerakott szemét." },

  { id: "bio_korny_003", question: "Mi a komposztálás előnye?", choices: [
    { text: "Szerves hulladékból humusz, talajjavítás" },
    { text: "Műanyag lebontása" },
    { text: "Fémek szétválasztása" },
    { text: "Üveg olvasztása" }
  ], answerIndex: 0, explanation: "Zöldhulladék visszakerül a körforgásba." },

  { id: "bio_korny_004", question: "Mi a légszennyezés egyik fő forrása városokban?", choices: [
    { text: "Közlekedés" }, { text: "Csak erdők" }, { text: "Csak tavak" }, { text: "Csak hegyek" }
  ], answerIndex: 0, explanation: "Járművek kibocsátása (NOx, PM, CO₂)." },

  { id: "bio_korny_005", question: "Miért veszélyes a mikroműanyag?", choices: [
    { text: "Felhalmozódik táplálékhálóban, szervezetekben" },
    { text: "Csak látványprobléma" },
    { text: "Gyorsan lebomlik" },
    { text: "Csak tengerekben fordul elő" }
  ], answerIndex: 0, explanation: "Biomagnifikáció, hosszú lebomlási idő." },

  { id: "bio_korny_006", question: "Mi az üvegházhatás fő gázai közül az egyik?", choices: [
    { text: "Szén-dioxid (CO₂)" }, { text: "Hidrogén" }, { text: "Hélium" }, { text: "Argon" }
  ], answerIndex: 0, explanation: "CO₂, CH₄, N₂O, vízgőz fontos üvegházhatású gázok." },

  { id: "bio_korny_007", question: "Mi a zajszennyezés egyik hatása?", choices: [
    { text: "Stressz, halláskárosodás" },
    { text: "Fotoszintézis nő" },
    { text: "Talajjavulás" },
    { text: "Víz tisztul" }
  ], answerIndex: 0, explanation: "Tartós zaj egészségkárosító." },

  { id: "bio_korny_008", question: "Mi a világítótestek fényszennyezésének hatása?", choices: [
    { text: "Zavarja állatok tájékozódását, élővilág ciklusait" },
    { text: "Javítja a csillagászati megfigyelést" },
    { text: "Nem hat a természetre" },
    { text: "Fokozza a fotoszintézist" }
  ], answerIndex: 0, explanation: "Éjjeli rovarok, madarak, ember alvása is érintett." },

  { id: "bio_korny_009", question: "Mi csökkenti a közlekedési kibocsátást?", choices: [
    { text: "Tömegközlekedés, kerékpár, közös autózás" },
    { text: "Üresjárat növelése" },
    { text: "Régi járművek használata" },
    { text: "Lassú defekt" }
  ], answerIndex: 0, explanation: "Megosztás és alternatív módok → kevesebb kibocsátás." },

  { id: "bio_korny_010", question: "Mi az ökoturisztika célja?", choices: [
    { text: "Természetkímélő turizmus, helyi közösségek támogatása" },
    { text: "Olcsó tömegturizmus" },
    { text: "Csak extrém sportok" },
    { text: "Védett területek rombolása" }
  ], answerIndex: 0, explanation: "Kis lábnyom, helyi haszon, edukáció." },

  { id: "bio_korny_011", question: "Mi a körkörös gazdaság?", choices: [
    { text: "Újrahasználat, javítás, újrafeldolgozás elsődlegessége" },
    { text: "Csak egyszer használatos termékek" },
    { text: "Hulladékégetés növelése" },
    { text: "Bányászat fokozása" }
  ], answerIndex: 0, explanation: "Anyagáramok zárása, kevesebb hulladék." },

  { id: "bio_korny_012", question: "Mi az ökológiai lábnyom csökkentésének módja?", choices: [
    { text: "Energiatakarékos eszközök, diéta, közlekedésváltás" },
    { text: "Több egyszer használatos termék" },
    { text: "Mindig autóval járni egyedül" },
    { text: "Fűtés növelése indokolatlanul" }
  ], answerIndex: 0, explanation: "Energia- és anyagtakarékosság fő eszköz." },

  { id: "bio_korny_013", question: "Mi a védett faj fogalma?", choices: [
    { text: "Jogilag oltalmazott, veszélyeztetett faj" },
    { text: "Csak dísznövény" },
    { text: "Csak háziállat" },
    { text: "Nem létező fogalom" }
  ], answerIndex: 0, explanation: "Természetvédelmi jog eszköze a veszélyeztetettségre." },

  { id: "bio_korny_014", question: "Mi az inváziós faj elleni védekezés egyik módja?", choices: [
    { text: "Megelőzés, behurcolás elkerülése" },
    { text: "Szándékos betelepítés" },
    { text: "Élőhelyek felszámolása" },
    { text: "Csak vegyszer" }
  ], answerIndex: 0, explanation: "A megelőzés a leghatékonyabb." },

  { id: "bio_korny_015", question: "Mi a természetvédelmi területek célja?", choices: [
    { text: "Élőhelyek és fajok megőrzése" },
    { text: "Bányászat segítése" },
    { text: "Ipari parkok létesítése" },
    { text: "Vadászat fokozása" }
  ], answerIndex: 0, explanation: "Természeti értékek védelme." },

  { id: "bio_korny_016", question: "Mi a zöld tető előnye városban?", choices: [
    { text: "Hőszigetel, csapadékot visszatart, élőhelyet ad" },
    { text: "Növeli a hőszigethatást" },
    { text: "Csak dísz" },
    { text: "Csak súlyt ad" }
  ], answerIndex: 0, explanation: "Éghajlat- és vízgazdálkodási haszon." },

  { id: "bio_korny_017", question: "Mi a szelektív kuka színei általában (HU)?", choices: [
    { text: "Kék: papír; Sárga: műanyag/fém; Zöld/fehér: üveg" },
    { text: "Piros: papír" },
    { text: "Fekete: üveg" },
    { text: "Fehér: szerves" }
  ], answerIndex: 0, explanation: "Önkormányzatonként lehet eltérés, ez az általános." },

  { id: "bio_korny_018", question: "Mi a karbonlábnyom?", choices: [
    { text: "CO₂-egyenértékben kifejezett kibocsátásunk" },
    { text: "Csak a szemét mennyisége" },
    { text: "Csak vízfogyasztás" },
    { text: "Csak villanyszámla" }
  ], answerIndex: 0, explanation: "Tevékenységekhez köthető ÜHG-kibocsátás." },

  { id: "bio_korny_019", question: "Mi csökkenti a háztartási energiafogyasztást?", choices: [
    { text: "Szigetelés, LED, tudatos fűtés/hűtés" },
    { text: "Ablak nyitva fűtésnél" },
    { text: "Állandó 25 °C télen" },
    { text: "Éjjel is minden világít" }
  ], answerIndex: 0, explanation: "Egyszerű, nagy hatású lépések." },

  { id: "bio_korny_020", question: "Mi a víztakarékosság egyik eszköze?", choices: [
    { text: "Perlátor, csöpögések megszüntetése" },
    { text: "Hosszú zuhanyok" },
    { text: "Autómosás naponta" },
    { text: "Régi WC-tartály" }
  ], answerIndex: 0, explanation: "Kis beruházással nagy spórolás." },
];
/* --- Sections és Topic az új főtémához --- */

/* =========================================================
   BIOLÓGIA 8 — SECTION + TOPIC EXPORTOK
   (másold a bank.ts legvégére)
   ========================================================= */




// === 1. SEJT ÉS SZÖVETEK ===
const topic_sejt_szovet: Topic = {
  id: "bio8_sejt_szovet",
  title: "A sejt és a szövetek",
  sections: [
    section_sejt_felepitese,
    section_sejtorganellumok,
    section_szovetek_tipusai,
  ],
};

// === 2. TÁPLÁLKOZÁS ÉS EMÉSZTÉS ===
const topic_emesztes: Topic = {
  id: "bio8_emesztes",
  title: "Táplálkozás és emésztés",
  sections: [
    section_emeszto_rendszer_felepitese,
    section_tapanyagok_vitaminok,
    section_emesztes_felszivas,
  ],
};

// === 3. LÉGZÉS ÉS KERINGÉS ===
const topic_legzes_keringes: Topic = {
  id: "bio8_legzes_keringes",
  title: "Légzés és keringés",
  sections: [
    section_legzorendszer_alapok,
    section_keringes_szivekerek,
    section_ver_osszetetele,
  ],
};

// === 4. KIVÁLASZTÁS ÉS HOMEOSZTÁZIS ===
const topic_kivalasztas_homeosztazis: Topic = {
  id: "bio8_kivalasztas_homeosztazis",
  title: "Kiválasztás és homeosztázis",
  sections: [
    section_kivalasztas_szervei,
    section_bor_kivalasztasa,
    section_homeosztazis,
  ],
};

// =====================================================
// 5. FŐTÉMA – Idegrendszer és érzékszervek
// =====================================================
export const section_idegrendszer_felepitese = {
  id: "idegrendszer_felepitese",
  title: "Az idegrendszer felépítése és működése",
  bank: bank_idegrendszer_felepitese,
};

export const section_erzek_szervek = {
  id: "erzek_szervek",
  title: "Érzékszervek – látás, hallás, tapintás",
  bank: bank_erzek_szervek,
};

export const section_reflexek_mozgas_vedelem = {
  id: "reflexek_mozgas_vedelem",
  title: "Reflexek, mozgás és az idegrendszer védelme",
  bank: bank_reflexek_mozgas_vedelem,
};

export const topic_idegrendszer_erzek = {
  id: "biologia_8_idegrendszer_erzek",
  title: "Biológia 8 — Idegrendszer és érzékszervek",
  sections: [section_idegrendszer_felepitese, section_erzek_szervek, section_reflexek_mozgas_vedelem],
};

// =====================================================
// 6. FŐTÉMA – Szaporodás és öröklődés
// =====================================================
export const section_szaporodas_folyamata = {
  id: "szaporodas_folyamata",
  title: "Az ivarszervek és a szaporodás folyamata",
  bank: bank_szaporodas_folyamata,
};

export const section_sejtosztodas = {
  id: "sejtosztodas",
  title: "Sejtosztódás – mitózis és meiózis",
  bank: bank_sejtosztodas,
};

export const section_oroklodes = {
  id: "oroklodes",
  title: "Öröklődés és tulajdonságok átadása",
  bank: bank_oroklodes,
};

export const topic_szaporodas_oroklodes = {
  id: "biologia_8_szaporodas_oroklodes",
  title: "Biológia 8 — Szaporodás és öröklődés",
  sections: [section_szaporodas_folyamata, section_sejtosztodas, section_oroklodes],
};

// =====================================================
// 7. FŐTÉMA – Ökológia és környezetvédelem
// =====================================================
export const section_okologiai_alapfogalmak = {
  id: "okologiai_alapfogalmak",
  title: "Ökológiai alapfogalmak",
  bank: bank_okologiai_alapfogalmak,
};

export const section_anyag_energia_korforgas = {
  id: "anyag_energia_korforgas",
  title: "Anyag- és energiakörforgás",
  bank: bank_anyag_energia_korforgas,
};

export const section_kornyezetvedelem = {
  id: "kornyezetvedelem",
  title: "Környezetvédelem és fenntarthatóság",
  bank: bank_kornyezetvedelem_fenntarthatosag,
};

export const topic_okologia_kornyezet = {
  id: "biologia_8_okologia_kornyezet",
  title: "Biológia 8 — Ökológia és környezetvédelem",
  sections: [section_okologiai_alapfogalmak, section_anyag_energia_korforgas, section_kornyezetvedelem],
};

// =====================================================
// TOPIC_TREE – főtémák listája
// =====================================================
export const TOPIC_TREE = [
  topic_sejt_szovet,
  topic_emesztes,
  topic_legzes_keringes,
  topic_kivalasztas_homeosztazis,
  topic_idegrendszer_erzek,
  topic_szaporodas_oroklodes,
  topic_okologia_kornyezet,
];


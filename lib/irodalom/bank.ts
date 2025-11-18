/**
 * IRODALOM 8 – Kérdésbank (TELJES)
 * Témák:
 * 1) LÍRA – (A) Líra alapjai és műfajok (20), (B) Versforma–ritmus–rím–szabadvers (20)
 * 2) EPIKA – (A) Novella, elbeszélés, egyperces (20), (B) Regény és elbeszélő szerkezet (20)
 * 3) DRÁMA ÉS SZÍNHÁZ – (A) Dráma alapfogalmak és szerkezet (20), (B) Színházi eszközök és foglalkozások (20)
 * 4) FOGALMAK ÉS IRÁNYZATOK – (A) Képek és alakzatok (20), (B) Irodalmi irányzatok (20)
 */

export type QA = {
  q: string;
  options: string[];
  correctIndex: number;
  exp?: string;
};

/* ─────────────────────────────────────────────────────
   TÉMA 1 – LÍRA
   Altéma A: Líra alapjai és műfajok (20 kérdés)
   Altéma B: Versforma, ritmus, rím, szabadvers (20 kérdés)
   ───────────────────────────────────────────────────── */

export const bank_lira_alap_mufajok: QA[] = [
  { q: "Mi a lírai művek központi sajátossága?", options: ["Cselekmény részletes elbeszélése","A költő belső világának, érzelmeinek kifejezése","Színpadi párbeszéd formája","Történelmi események dokumentálása"], correctIndex: 1, exp: "A líra az érzelmek, gondolatok sűrített kifejezése; nem a cselekmény a fő." },
  { q: "Melyik NEM lírai műfaj?", options: ["Elégia","Óda","Eposz","Dal"], correctIndex: 2, exp: "Az eposz epikai műfaj." },
  { q: "Mi jellemzi a 'dalt'?", options: ["Hosszú, sok mellékszál","Rövid, személyes hangú költemény","Színpadi párbeszéd","Tudományos értekezés"], correctIndex: 1, exp: "Rövid, egyszerűbb forma, személyes hang." },
  { q: "Az 'óda' tipikusan…", options: ["Humoros, csattanós","Magasztos, ünnepélyes","Szereplők közti párbeszéd","Rögtönzött, dallamos"], correctIndex: 1, exp: "Emelkedett hangnemű lírai mű." },
  { q: "Mi igaz az elégiára?", options: ["Derűs hangú","Melankolikus tónusú","Színpadra írt","Mindig rímtelen"], correctIndex: 1, exp: "Bánatos, elégikus hangnem." },
  { q: "A himnusz…", options: ["Istent/közösséget megszólító, magasztos költemény","Hősi eposz","Komikus jelenet","Prózai leírás"], correctIndex: 0, exp: "Könyörgő/megszólító, ünnepélyes." },
  { q: "Mi a 'lírai én'?", options: ["A szerző neve","A versben megszólaló tudat/hang","A főhős","A narrátor drámában"], correctIndex: 1, exp: "Nem azonos automatikusan a szerzővel." },
  { q: "Műnemek helyes sorrendje?", options: ["Líra–Epika–Dráma","Dráma–Líra–Epika","Epika–Dráma–Líra","Ballada–Epika–Líra"], correctIndex: 0, exp: "Hagyomány: líra, epika, dráma." },
  { q: "Mit jelent a szereplíra?", options: ["Szerző saját nevén szól","Lírai én szerepet/maszkot vesz fel","Csak párbeszéd","Zenére írt szöveg"], correctIndex: 1, exp: "Maszkos megszólalás." },
  { q: "Melyik áll közel az életképhez?", options: ["Elégia","Epigramma","Idill","Óda"], correctIndex: 2, exp: "Idill: derűs, harmonikus életkép." },
  { q: "Epigramma:", options: ["Hosszú eposz","Rövid, csattanós költemény","Színpadi jelenet","Elmélkedő hosszú vers"], correctIndex: 1, exp: "Sűrített, tömör, csattanós." },
  { q: "Melyik NEM lírai hangnem?", options: ["Magasztos","Melankolikus","Elbeszélő","Személyes"], correctIndex: 2, exp: "Elbeszélő inkább epika." },
  { q: "Mit fejez ki a hangulat a versben?", options: ["Cselekmény fordulatait","Szerző személyes adatait","Érzelmi tónust","Rímek számát"], correctIndex: 2, exp: "Érzelmi alapállás." },
  { q: "‘Himnikus’ jelző melyikhez illik?", options: ["Himnusz","Dal","Epigramma","Elégia"], correctIndex: 0, exp: "A himnusz emelkedett hangjára utal." },
  { q: "Melyik NEM tipikus lírai alaphelyzet?", options: ["Hitvita zsinaton","Szerelmi vallomás","Természeti élmény","Meditáció"], correctIndex: 0, exp: "A hitvita nem lírai alaphelyzet." },
  { q: "Dal vs elégia:", options: ["Mindkettő epika","Dal derűsebb, elégia szomorkásabb","Mindkettő dráma","Csak időmértékes lehet"], correctIndex: 1, exp: "Általános hangulati különbség." },
  { q: "Hazaszeretet motívuma gyakran…", options: ["Epigramma","Óda/himnusz","Humoreszk","Anekdota"], correctIndex: 1, exp: "Emelkedett műfajokban." },
  { q: "Sírfelirat irodalmi megfelelője:", options: ["Himnusz","Epitáfium","Óda","Idill"], correctIndex: 1, exp: "Epitáfium: sírfeliratszerű költemény." },
  { q: "Lírai pillanat:", options: ["Versszak hossza","Intenzív érzelmi-gondolati sűrítmény","Rímképlet fordítása","Cselekmény csúcspont"], correctIndex: 1, exp: "Sűrített élmény." },
  { q: "Melyik lírai műfaj?", options: ["Dal","Regény","Kiseposz","Dráma"], correctIndex: 0, exp: "A dal lírai." },
];

export const bank_lira_versforma: QA[] = [
  { q: "Mit nevezünk versritmusnak?", options: ["Fordulatszám","Hangsúlyok/szótagidők rendjét","Rímképletet","Sorszámot"], correctIndex: 1, exp: "Hangsúly, időmérték mintázata." },
  { q: "Mi a rím?", options: ["Azonos/hasonló szóvégek összecsengése","Írásjelek sora","Párbeszéd","Azonos szótagszám"], correctIndex: 0, exp: "Zeneiséget ad." },
  { q: "Páros rím képlete:", options: ["abba","abab","aabb","abbaabba"], correctIndex: 2, exp: "Egymást követő sorok rímelnek." },
  { q: "Keresztrím:", options: ["aabb","abab","abba","abcabc"], correctIndex: 1, exp: "1–3 és 2–4 sor rímel." },
  { q: "Bokorrím:", options: ["aaaa…","Szabálytalan","Csak refrénben","Sor eleji rím"], correctIndex: 0, exp: "Azonos rímhangzás sorozatban." },
  { q: "Időmértékes verselés:", options: ["Hosszú–rövid szótagok váltakozása","Azonos szótagszám","Rímek hiánya","Prózaszerű forma"], correctIndex: 0, exp: "Mennyiségi ritmus." },
  { q: "Jambus:", options: ["– ˘","˘ –","– –","˘ ˘"], correctIndex: 1, exp: "Rövid–hosszú." },
  { q: "Trocheus:", options: ["– ˘","˘ –","– –","˘ ˘"], correctIndex: 0, exp: "Hosszú–rövid." },
  { q: "Hexameter:", options: ["Hatütemű időmértékes sor","Hat szótag","Hat rím","Hat versszak"], correctIndex: 0, exp: "Klasszikus eposzok sora." },
  { q: "Szabadvers:", options: ["Kötött rímképlet","Kötetlen ritmus, gyakran rímtelen","Dalra írt","Klasszikus időmérték"], correctIndex: 1, exp: "Formakényszer nélküli." },
  { q: "Belső rím:", options: ["Sor elején","Soron belül","Versszakok között","Rímképlet fordítottja"], correctIndex: 1, exp: "Soron belüli összecsengés." },
  { q: "HAMIS állítás:", options: ["Rím csak sor végén lehet","Van belső rím","Szabadvers is lehet zenei","Időmérték mennyiségi ritmus"], correctIndex: 0, exp: "Rím nem csak sorvég." },
  { q: "Ütemhangsúlyos verselés:", options: ["Magyar hagyomány, hangsúlyos ritmus","Latin időmérték","Rím nélküliség","Drámai jambus"], correctIndex: 0, exp: "Hangsúlyokra épül." },
  { q: "Ragrím:", options: ["Csak azonos rag cseng össze (gyenge)","Sor eleji rím","Minden rím ilyen","Csak időmértékben"], correctIndex: 0, exp: "Gyengébb rímtípus." },
  { q: "Rímképlet célja:", options: ["Vsz. számozás","Rímrend jelölése betűkkel","Hangsúly leírása","Műfaj megadása"], correctIndex: 1, exp: "Pl. abab, aabb." },
  { q: "Refrén:", options: ["Visszatérő sor(ok)","Epigramma csattanója","Rímképlet betűje","Hexameter vége"], correctIndex: 0, exp: "Ismétlődő egység." },
  { q: "Periódus:", options: ["Hosszú, tagolt mondatforma","Sorvégi rím","Időmérték neve","Verscím"], correctIndex: 0, exp: "Összetett mondatszerkezet." },
  { q: "Rím gazdagsága:", options: ["Több azonos hang a rímben","Kevés rím","Csak ragok rímelnek","Nincs rím"], correctIndex: 0, exp: "Gazdagabb egyezés jobb csengés." },
  { q: "Terza rima:", options: ["aba bcb cdc…","aabb","abba","abab"], correctIndex: 0, exp: "Láncrím (Dante)." },
  { q: "Szonett (olasz):", options: ["2×4 sor + 2×3 sor","3×4 sor","2×3 sor","1×8 sor"], correctIndex: 0, exp: "Két kvartina és két tercina." },
];

/* ─ Sections a LÍRÁHOZ ─ */
export const section_lira_alap_mufajok = { id: "lira_alap_mufajok", title: "Líra alapjai és műfajok", bank: bank_lira_alap_mufajok };
export const section_lira_versforma    = { id: "lira_versforma",    title: "Versforma, ritmus, rím, szabadvers", bank: bank_lira_versforma };
export const topic_lira = { id: "irodalom_8_lira", title: "Irodalom 8 — Líra", sections: [section_lira_alap_mufajok, section_lira_versforma] };

/* ─────────────────────────────────────────────────────
   TÉMA 2 – EPIKA
   Altéma A: Novella, elbeszélés, egyperces (20)
   Altéma B: Regény és elbeszélő szerkezet (20)
   ───────────────────────────────────────────────────── */

export const bank_epika_novella: QA[] = [
  { q: "Mi a novella fő jellemzője?", options: ["Terjedelmes, sok mellékszál","Rövid, sűrített cselekmény, kevés szereplő","Színpadi dialógus","Lírai helyzetek sora"], correctIndex: 1, exp: "Rövid terjedelem, kevés helyszín és szereplő." },
  { q: "Elbeszélés:", options: ["Mindig verses","Prózai mű, narrátor közvetít","Színpadi dialógus","Csak idill"], correctIndex: 1, exp: "Narrátor közvetíti a történetet." },
  { q: "Egyperces (Örkény):", options: ["Hosszú, részletező","Rövid, csattanós, groteszk/ironikus","Színpadi instrukciók","Képek halmaza"], correctIndex: 1, exp: "Sűrített, csattanóval." },
  { q: "Expozíció:", options: ["Utószó","Jellemzés","Kiinduló helyzet","Tetőpont"], correctIndex: 2, exp: "Alaphelyzet bemutatása." },
  { q: "Konfliktus:", options: ["Rím","Értékek/szereplők ütközése","Helyszín leírása","Narrátor személye"], correctIndex: 1, exp: "Ütközés, ellentét." },
  { q: "Csattanó:", options: ["Középső leírás","Váratlan befejezés/fordulat","Helyzetkép","Párbeszédek összegzése"], correctIndex: 1, exp: "Meglepő befejezés." },
  { q: "Mi NEM jellemző novellára?", options: ["Sűrítés","Kevés helyszín","Sok mellékszál","Jellegzetes nézőpont"], correctIndex: 2, exp: "Sok mellékszál inkább regény." },
  { q: "Leírás szerepe:", options: ["Ritmus erősítése","Színpadi mozgás","Hangulat/környezet/jellem kiemelése","Helykitöltés"], correctIndex: 2, exp: "Hangulat és karakter." },
  { q: "Időrend felbontása:", options: ["Mindig kronológia","Vissza-/előreutalások, idősík-váltás","Csak egy jelenet","Csak párbeszéd"], correctIndex: 1, exp: "Narrációs eszköz." },
  { q: "Jellemrajz célja:", options: ["Tulajdonságok érzékletes bemutatása","Rímképlet","Díszlet ismertetés","Szerző életrajza"], correctIndex: 0, exp: "Szereplők plasztikussá tétele." },
  { q: "Narrátor lehet…", options: ["Csak E/1","Mindig mindentudó","Belső (szereplő) vagy külső is","A rendező"], correctIndex: 2, exp: "Többféle narrátori pozíció." },
  { q: "Nézőpontváltás szerepe:", options: ["Rímek","Több szemszög bemutatása","Színpadi mozgás","Versszak kijelölés"], correctIndex: 1, exp: "Árnyalt látásmód." },
  { q: "Párbeszéd funkciója:", options: ["Elbeszélés helyett","Jellemábrázolás, tempó","Díszítő elem","Mindig rímes"], correctIndex: 1, exp: "Dinamika és jellemzés." },
  { q: "Klasszikus szerkezeti ív:", options: ["Expozíció–bonyodalom–tetőpont–megoldás","Prologosz–kórus–exodosz","Vsz–refrén–vsz–refrén","Felvonás–jelenet–epilógus"], correctIndex: 0, exp: "Gyakori epikai váz." },
  { q: "Helyzetdal epikában:", options: ["Lírai műfaj","Kísérőzene","Rövid, lírai színezetű szituáció-próza","Narrátor nélkül"], correctIndex: 2, exp: "Sűrített szituáció." },
  { q: "Novella ideje többnyire:", options: ["Hosszú évek","Rövid időszak, sűrítés","Csak jövőidő","Nincs idő"], correctIndex: 1, exp: "Sűrített idő." },
  { q: "Leíró betétek gyakran…", options: ["Megállítják a cselekményt hangulatért","Rímet növelnek","Tetőpontot helyettesítenek","Káoszt okoznak"], correctIndex: 0, exp: "Hangulat és világ." },
  { q: "Cím szerepe lehet:", options: ["Tematikus utalás/előrejelzés","Csak sorszám","Mindig főhős neve","Dísz"], correctIndex: 0, exp: "Értelmező funkció." },
  { q: "Mi NEM novella-altípus?", options: ["Kulcsnovella","Realista novella","Egyperces","Eposz"], correctIndex: 3, exp: "Eposz nagyepika." },
  { q: "Elbeszélői mód NEM lehet:", options: ["Én-elbeszélés","Te-elbeszélés","Ő-elbeszélés","Kóruselbeszélés"], correctIndex: 3, exp: "Kórus drámai elem." },
];

export const bank_epika_regeny: QA[] = [
  { q: "Regény vs novella:", options: ["Regény mindig verses","Regény terjedelmesebb, több szál","Novella hosszabb","Regény egy helyszín"], correctIndex: 1, exp: "Regény: nagyepika, sok szereplő/szál." },
  { q: "Fő cselekményszál:", options: ["Narrátor jellemzése","Legfontosabb történeti vonal","Mellékszereplők listája","Költői eszközök"], correctIndex: 1, exp: "A történet gerince." },
  { q: "Időkezelés regényben:", options: ["Csak kronologikus","Több idősík, vissza-/előreutalás","Csak jövőbeni","Mindig jelen idő"], correctIndex: 1, exp: "Rugalmas időkezelés." },
  { q: "Fejezetek szerepe:", options: ["Versszakok helyett","Tagolás, nézőpont/helyszínváltás","Szereplők listázása","Díszítés"], correctIndex: 1, exp: "Szerkezeti tagolás." },
  { q: "Mellékszál funkció:", options: ["Ellenpont","Jellemzés, világépítés","Tematikus árnyalás","Mindhárom"], correctIndex: 3, exp: "Komplexitás növelése." },
  { q: "Fejlődésregény hangsúlya:", options: ["Hős beavatódása/érése","Csak külső történések","Rímszerkezet","Színpadi instrukció"], correctIndex: 0, exp: "Belső érési folyamat." },
  { q: "Levélregény:", options: ["Egy mondat","Levelek/naplók alkotják","Mindig verses","Csak párbeszéd"], correctIndex: 1, exp: "Dokumentumforma." },
  { q: "Legteljesebb elbeszélő:", options: ["Belső narrátor","Külső korlátozott","Mindentudó narrátor","Szereplő monológja"], correctIndex: 2, exp: "Mindentudó narrátor." },
  { q: "Realista regényvilág:", options: ["Csak fantasztikus","Valószerű, részletező ábrázolás","Mindig múlt idő","Csak város"], correctIndex: 1, exp: "Valósághűség." },
  { q: "Kulcsjelenetek:", options: ["Mindig lírai képek","Fordulópontok, nagy döntések","Csak leírás","Fejezetcímek"], correctIndex: 1, exp: "Tét és változás." },
  { q: "Nézőpontváltás:", options: ["Ritka és kerülendő","Szereplők belső világának feltárása","Tiltott","Csak levélregényben"], correctIndex: 1, exp: "Többszólamúság." },
  { q: "Világépítés:", options: ["Rímképlet","Tér, idő, társadalom, szabályok kidolgozása","Csak főhős rajza","Zenei hatás"], correctIndex: 1, exp: "Komplex környezet." },
  { q: "Regényidő vs elbeszélő idő:", options: ["Azonos","Eltérhet (sűrítés, kihagyás…)","Mindig lineáris","Csak 1 nap"], correctIndex: 1, exp: "Narráció alakítja." },
  { q: "Mi NEM regény műfaj?", options: ["Kalandregény","Detektívregény","Levélregény","Epigramma"], correctIndex: 3, exp: "Epigramma lírai." },
  { q: "Párbeszéd regényben:", options: ["Nincs szerepe","Jellemzés, dinamika","Csak lírai betét","Mindig monológ"], correctIndex: 1, exp: "Életszerűség." },
  { q: "Fejezetek között gyakori:", options: ["Idő/hely váltás","Rím","Versszakváltás","Semmi"], correctIndex: 0, exp: "Természetes váltópont." },
  { q: "Narráció NEM lehet:", options: ["Én-elbeszélés","Te-elbeszélés","Ő-elbeszélés","Kóruselbeszélés"], correctIndex: 3, exp: "Kórus drámai elem." },
  { q: "Leíró betétek szerepe:", options: ["Világ kidolgozása, hangulat","Rímszám növelés","Csattanó előkészítése mindig","Felesleges"], correctIndex: 0, exp: "Atmoszféra." },
  { q: "Főhős jellemzésekor fontos:", options: ["Külső–belső, célok, konfliktusok","Ruházat felsorolása","Csak cselekedetek listája","Csak mások véleménye"], correctIndex: 0, exp: "Komplex jellemzés." },
  { q: "Nyitott befejezés:", options: ["Tilos","Lehet szándékos (értelmezés/folytatás)","Mindig csattanó","Csak esszében"], correctIndex: 1, exp: "Értelmezést tágít." },
];

/* ─ Sections az EPIKÁHOZ ─ */
export const section_epika_novella = { id: "epika_novella", title: "Epika — novella, elbeszélés, egyperces", bank: bank_epika_novella };
export const section_epika_regeny  = { id: "epika_regeny",  title: "Epika — regény és elbeszélő szerkezet", bank: bank_epika_regeny };
export const topic_epika = { id: "irodalom_8_epika", title: "Irodalom 8 — Epika", sections: [section_epika_novella, section_epika_regeny] };

/* ─────────────────────────────────────────────────────
   TÉMA 3 – DRÁMA ÉS SZÍNHÁZ
   Altéma A: Dráma alapfogalmak, szerkezet, konfliktus (20)
   Altéma B: Színházi eszközök és foglalkozások (20)
   ───────────────────────────────────────────────────── */

export const bank_drama_alapok: QA[] = [
  { q: "Mi a dráma alapvető jellemzője?", options: ["Elbeszélő narrátor szól","Párbeszédre és cselekvésre épül","Lírai én szól","Csak leírás"], correctIndex: 1, exp: "A dráma dialógusokra és színpadi cselekvésre épül." },
  { q: "Mi az expozíció drámában?", options: ["Befejezés","Kiinduló helyzet bemutatása","Tetőpont","Katarzis"], correctIndex: 1, exp: "Alaphelyzet, szereplők, viszonyok." },
  { q: "A bonyodalom…", options: ["Konfliktus felütése, cselekmény beindul","Záró kórus","Feloldás","Jelenetváltás"], correctIndex: 0, exp: "A feszültség elkezd növekedni." },
  { q: "Tetőpont:", options: ["Konfliktus kiéleződése, legnagyobb feszültség","Kiindulás","Feloldás","Epilógus"], correctIndex: 0, exp: "A drámai csúcs." },
  { q: "Késleltetés (retardáció):", options: ["Gyorsítás","Feszültség fenntartása elodázással","Jelenet kihagyása","Díszletcsere"], correctIndex: 1, exp: "A megoldás halogatása fokozza a feszültséget." },
  { q: "Feloldás:", options: ["Új bonyodalom","A konfliktus lezárása","Expozíció","Díszlet leírása"], correctIndex: 1, exp: "A cselekmény befejező szakasza." },
  { q: "Konfliktus drámában:", options: ["Rímelés","Szereplők/értékek összeütközése","Narrációmód","Versszak"], correctIndex: 1, exp: "A drámai mozgás motorja." },
  { q: "Tragédia lényege:", options: ["Vidám végkifejlet","Főhős sorsa bukásba torkollik","Csak komikus alakok","Nincs feszültség"], correctIndex: 1, exp: "Súlyos erkölcsi/egzisztenciális tét, bukás." },
  { q: "Komédia lényege:", options: ["Súlyos bukás","Nevettetés, társadalmi visszásságok kigúnyolása","Nincs párbeszéd","Mindig verses"], correctIndex: 1, exp: "Komikumon keresztül bírál." },
  { q: "Monológ:", options: ["Többszereplős párbeszéd","Egy szereplő huzamos beszéde","Kórusbeszéd","Súgás"], correctIndex: 1, exp: "Önálló megszólalás a színen." },
  { q: "Aside (félre):", options: ["Díszlet mögött","Szereplő a közönséghez szól, a többiek 'nem hallják'","Súgó felolvasása","Zenei betét"], correctIndex: 1, exp: "Színpadi konvenció." },
  { q: "Színpadi utasítás:", options: ["Csak díszletlista","Szerző instrukciói mozgásra, hangra, díszletre","Jegyárlista","Jelenet hossza"], correctIndex: 1, exp: "Instrukció a játékhoz." },
  { q: "Felvonás–jelenet viszony:", options: ["Jelenet nagyobb egység","Felvonás nagyobb egység, azon belül jelenetek","Azonos","Nem használjuk"], correctIndex: 1, exp: "A felvonás szerkezeti egység." },
  { q: "Hármas egység (klasszicista):", options: ["Idő–hely–cselekmény egysége","Rím–ritmus–refrén","Tér–idő–díszlet","Kar–prologosz–exodosz"], correctIndex: 0, exp: "Rövid idő, egy helyszín, egy fő szál." },
  { q: "Katarzis:", options: ["Díszletcsere","Lelki megtisztulás, megrendülés","Szöveg rövidítése","Szereposztás"], correctIndex: 1, exp: "Nézőben kiváltott erkölcsi-érzelmi hatás." },
  { q: "Drámai helyzet:", options: ["Leíró tájkép","Feszültséggel teli szituáció, döntési kényszer","Narrációs nézőpont","Versszak"], correctIndex: 1, exp: "Cselekvést kiváltó szituáció." },
  { q: "Kar (kórus) szerepe klasszikus drámában:", options: ["Díszlet hordása","Kommentál, értelmez, lírai kórusok","Súgás","Jegykezelés"], correctIndex: 1, exp: "Értelmező közösségi hang." },
  { q: "Tragikomédia:", options: ["Csak tragikus","Csak komikus","Tragikus és komikus elemek keverednek","Monodráma"], correctIndex: 2, exp: "Vegyes hangnem." },
  { q: "Dramaturg feladata (szöveg szintjén):", options: ["Díszlet festése","Szövegkönyv gondozása, húzások, szerkezet","Fény beállítása","Hangtechnika"], correctIndex: 1, exp: "Szerkezeti-szövegkönyvi munka." },
  { q: "Alapszerkezet röviden:", options: ["Expozíció–bonyodalom–tetőpont–késleltetés–feloldás","Prológus–epilógus","Felvonás–jelenet","Kórus–tánc"], correctIndex: 0, exp: "Gyakori drámai váz." },
];

export const bank_drama_szinhaz: QA[] = [
  { q: "Ki irányítja az előadást művészi egészként?", options: ["Rendező","Dramaturg","Súgó","Világosító"], correctIndex: 0, exp: "A rendező koncepciót alkot és vezeti a próbát." },
  { q: "Dramaturg:", options: ["Hangmérnök","Szövegkönyv, húzások, szerkezet, koncepció támogatása","Jelmezvarrás","Jegyszedő"], correctIndex: 1, exp: "Szöveg és dramaturgiai ív." },
  { q: "Díszlet funkciója:", options: ["Ruhák tárolása","Játék tere, környezet megteremtése","Súgás","Kotta"], correctIndex: 1, exp: "Helyszín és hangulat." },
  { q: "Kellék:", options: ["Színpadi tárgy a játékban","Felirat a plakáton","Szereposztás","Fényrendszer"], correctIndex: 0, exp: "A színész használja a játékban." },
  { q: "Jelmez célja:", options: ["Színpad tisztítása","Szerep, kor, társadalmi helyzet jelzése","Fény visszaverés","Hang elnyelés"], correctIndex: 1, exp: "Karakter és korszak jelzése." },
  { q: "Súgó feladata:", options: ["Világítás","Szöveg segítése próba/előadás alatt","Hangosítás","Díszlet mozgatása"], correctIndex: 1, exp: "Színész támogatása." },
  { q: "Kulissza:", options: ["Színpad széle, oldalsó takarás/díszletelem","Zsinórpadlás","Nézőtér közepe","Páholy"], correctIndex: 0, exp: "Takarás és háttér." },
  { q: "Zsinórpadlás:", options: ["Padláson lévő nézők","Felmennyezet feletti gépház díszletekhez","Hangpróba tere","Raktár"], correctIndex: 1, exp: "Díszletek, függönyök mozgatása." },
  { q: "Fényterv szerepe:", options: ["Hangosítás","Világítás dramaturgiája (hangulat, fókusz)","Jelmezek szabása","Súgás"], correctIndex: 1, exp: "Fény dramaturgiát teremt." },
  { q: "Hangterv:", options: ["Díszletfestés","Zenei/hang effektek rendszere","Világítás","Plakát"], correctIndex: 1, exp: "Atmoszféra, ritmus." },
  { q: "Színpadi irányok a néző felől nézve:", options: ["Bal–jobb fordított a színésznek","Mindig azonos","Nincs jelentésük","Csak filmen van"], correctIndex: 0, exp: "Színész jobb/bal a néző tükre." },
  { q: "Süllyesztő:", options: ["Emelvény a zenekarnak","Színpad alatti emelőberendezés","Hangfal","Fényvezérlő"], correctIndex: 1, exp: "Díszlet/ember mozgatása alulról." },
  { q: "Rendezőpéldány:", options: ["Plakát","A rendezés jegyzeteit tartalmazó szövegkönyv","Díszletmakett","Jelmezterv"], correctIndex: 1, exp: "Beállítások, húzások, jelzések." },
  { q: "Próbafolyamat szakasza NEM ez:", options: ["Olvasópróba","Főpróba","Szinkronpróba","Részpróba"], correctIndex: 2, exp: "Szinkronpróba filmes kifejezés." },
  { q: "Büfé a színházban szerepe:", options: ["Díszlettervezés","Nézők/alkotók ellátása","Fénypróba helye","Hangosító pult"], correctIndex: 1, exp: "Nem színpadi funkció." },
  { q: "Sufnibármi (improvizatív kellék):", options: ["Hivatalos kifejezés","Alkalmi megoldás próbán","Hangtechnika","Világítás"], correctIndex: 1, exp: "Próbán kreatív pótlás." },
  { q: "Maszk (smink) célja:", options: ["Nézőtér sötétítése","Karakter arcának kiemelése, láthatóság","Fény rögzítése","Kellék tárolás"], correctIndex: 1, exp: "Láthatóság, karakter." },
  { q: "Gördülő díszlet:", options: ["Kézi emelő","Kerekeken mozgatható elem","Hangosító kocsi","Függöny"], correctIndex: 1, exp: "Gyors váltásokhoz." },
  { q: "Ügyelő feladata:", options: ["Jegyszedés","Előadás menetének technikai felügyelete, jeladások","Rendrakás","Színész vezetése szövegben"], correctIndex: 1, exp: "Jelek, beállások, időzítés." },
  { q: "Front of House:", options: ["Színpad hátulja","Nézőtérrel kapcsolatos egységek (jegy, ruhatár, usher)","Díszletraktár","Zsinórpadlás"], correctIndex: 1, exp: "Nézők kiszolgálása." },
];

/* ─ Sections a DRÁMÁHOZ ─ */
export const section_drama_alapok  = { id: "drama_alapok",  title: "Dráma — alapfogalmak, szerkezet, konfliktus", bank: bank_drama_alapok };
export const section_drama_szinhaz = { id: "drama_szinhaz", title: "Színház — eszközök és foglalkozások", bank: bank_drama_szinhaz };
export const topic_drama = { id: "irodalom_8_drama", title: "Irodalom 8 — Dráma és színház", sections: [section_drama_alapok, section_drama_szinhaz] };

/* ─────────────────────────────────────────────────────
   TÉMA 4 – FOGALMAK ÉS IRÁNYZATOK
   Altéma A: Képek és alakzatok (20)
   Altéma B: Irodalmi irányzatok (20)
   ───────────────────────────────────────────────────── */

export const bank_fogalmak_kepek: QA[] = [
  { q: "Metafora:", options: ["Két dolog azonosítása közös jegy alapján","Két dolog összehasonlítása mint kötőszóval","Rész–egész felcserélése","Ellentétes fogalmak összekapcsolása"], correctIndex: 0, exp: "Rejtett hasonlat, azonosítás." },
  { q: "Hasonlat jelölője gyakran:", options: ["mint/akár","de","és","vagy"], correctIndex: 0, exp: "Kötőszavas összehasonlítás." },
  { q: "Megszemélyesítés:", options: ["Élettelennek emberi tulajdonságot tulajdonít","Rész–egész csere","Túlzás","Ellentét"], correctIndex: 0, exp: "Személyes cselekvés élettelenre." },
  { q: "Metonímia:", options: ["Hasonlóságon alapul","Tér/ok/anyag/alkotó–mű viszonyán alapuló csere","Ellentét","Zenei ismétlés"], correctIndex: 1, exp: "Terem–tanterem, szerző–mű stb." },
  { q: "Allegória:", options: ["Egyetlen szóalakzat","Hosszabb, következetes metaforarendszer","Rímfajta","Időmérték"], correctIndex: 1, exp: "Végigvitt megszemélyesítés/metafora." },
  { q: "Szinesztézia:", options: ["Érzékterületek keverése","Túlzás","Eufemizmus","Halmozás"], correctIndex: 0, exp: "Pl. ‘édes dallam’." },
  { q: "Oxymoron:", options: ["Azonos alakú szavak","Összeférhetetlen fogalmak egybekapcsolása","Egy szóismétlés","Hangsúlyváltás"], correctIndex: 1, exp: "Pl. ‘hangos csend’." },
  { q: "Eufemizmus:", options: ["Kényes tartalom szelídítése","Durvítás","Túlzás","Ellentét"], correctIndex: 0, exp: "Enyhítő kifejezés." },
  { q: "Hiperbola:", options: ["Kicsinyítés","Túlzás","Ellentét","Metonímia"], correctIndex: 1, exp: "Szándékos nagyítás." },
  { q: "Litotész:", options: ["Kicsinyítő túlzás (tagadással)","Ellentét","Eufemizmus","Metafora"], correctIndex: 0, exp: "Pl. ‘nem épp kicsi’." },
  { q: "Paradoxon:", options: ["Köznapi igazság","Látszólagos ellentmondás, mélyebb igazsággal","Rímhiba","Sorrendi csere"], correctIndex: 1, exp: "Gondolati feszültség." },
  { q: "Párhuzam (parallelizmus):", options: ["Azonos szerkezetű egységek","Véletlen egyezés","Ragrím","Szóvicc"], correctIndex: 0, exp: "Szerkezetismétlés." },
  { q: "Ismétlés szerepe:", options: ["Jelentőség kiemelése, ritmus","Túlír","Értelmetlen","Felesleges"], correctIndex: 0, exp: "Fókusz és zeneiség." },
  { q: "Fokozás:", options: ["Csökkenő erősség","Erősödő/gyengülő sorozat","Véletlen sorrend","Visszavonás"], correctIndex: 1, exp: "Kiemel, dramatizál." },
  { q: "Halmozás:", options: ["Egy elem hangsúlyozása","Több azonos szerepű elem felsorolása","Ellentét","Szinonimacsere"], correctIndex: 1, exp: "Felsorolás hatása." },
  { q: "Retorikai kérdés:", options: ["Információkérés","Választ nem igénylő, hatásra törekvő kérdés","Válasz kérése tanártól","Kötelező válasz"], correctIndex: 1, exp: "Hatáskeltő eszköz." },
  { q: "Ellentét (antitézis):", options: ["Két azonos fogalom","Két ellentétes fogalom szembeállítása","Szóvicc","Hangutánzás"], correctIndex: 1, exp: "Kontraszt, feszültség." },
  { q: "Alliteráció:", options: ["Sorvégi rím","Azonos kezdőhangok sorozata","Belső rím","Szóismétlés"], correctIndex: 1, exp: "Hangzásbeli játék." },
  { q: "Anaphora:", options: ["Sorvégi ismétlés","Sor eleji ismétlés","Belső ismétlés","Rím"], correctIndex: 1, exp: "Sorok elején azonos szó/kifejezés." },
  { q: "Onomatopoéia:", options: ["Hangfestés/hangutánzás","Ragrím","Időmérték","Képszerűség hiánya"], correctIndex: 0, exp: "Pl. csitt, zúg, csobog." },
];

export const bank_stilus_iranyzatok: QA[] = [
  { q: "Klasszicizmus jellemzője:", options: ["Szabály, mérték, antik minták tisztelete","Teljes formabontás","Tudatáramlás","Absztrakt expresszív"], correctIndex: 0, exp: "Rend, harmónia, mértékletesség." },
  { q: "Romantika fő vonása:", options: ["Érzelem, egyéniség, szabadságvágy","Csak hűvös tárgyilagosság","Csak ókori témák","Csak verses forma"], correctIndex: 0, exp: "Képzelet, szenvedély, nemzeti tudat." },
  { q: "Realizmus célja:", options: ["Valóság hiteles ábrázolása","Csak fantasztikum","Költői képek halmaza","Színpadi abszurd"], correctIndex: 0, exp: "Típusalkotás, hétköznapi világ." },
  { q: "Naturalizmus:", options: ["Idealizál","Tárgyszerű, gyakran nyers valóságábrázolás","Tündérmese","Csak líra"], correctIndex: 1, exp: "Determinációk, részletező leírás." },
  { q: "Szimbolizmus:", options: ["Egyértelmű képek","Szimbólumokkal, jelképekkel fejez ki elvont tartalmakat","Csak rímekkel játszik","Dokumentarista"], correctIndex: 1, exp: "Sejtetés, többértelműség." },
  { q: "Impresszionizmus:", options: ["Kemény tárgyilagosság","Pillanatnyi benyomás, hangulat rögzítése","Kizárólag dráma","Csak hexameter"], correctIndex: 1, exp: "Fények, színek, érzések." },
  { q: "Avantgárd gyűjtőfogalom:", options: ["Hagyományos formák megőrzése","Úttörő, formabontó irányzatok (pl. futurizmus, dada, szürrealizmus)","Csak realista","Csak klasszicista"], correctIndex: 1, exp: "Modernizmus radikális ága." },
  { q: "Szecesszió:", options: ["Geometrikus dísztelenség","Díszítő, hullámvonalas, organikus formák","Csak fekete-fehér","Hangköltészet"], correctIndex: 1, exp: "Dekoratív, stilizált formanyelv." },
  { q: "Parnasszizmus jellemző:", options: ["Közvetlen vallomás","Formai fegyelem, tárgyias szépségkultusz","Szabadvers radikalizmusa","Csak próza"], correctIndex: 1, exp: "Kötött forma műgondja." },
  { q: "Modernség 20. század elején:", options: ["Hagyomány ismétlése","Új témák, formák, tudatlíra, városi lét","Csak népköltészet","Csak klasszicista témák"], correctIndex: 1, exp: "Forma- és szemléletváltás." },
  { q: "Futurizmus:", options: ["Múltkultusz","Sebesség, technika, dinamika kultusza","Természet idillje","Csak dráma"], correctIndex: 1, exp: "Modern ipari világ ünneplése." },
  { q: "Dadaizmus:", options: ["Rend, mérték","Formabontó, értékromboló provokáció","Realista megfigyelés","Klasszicista szabályok"], correctIndex: 1, exp: "Abszurd, anti-művészet gesztusai." },
  { q: "Szürrealizmus:", options: ["Racionális rend","Álomlogika, tudattalan képei","Csak riport","Hexameter"], correctIndex: 1, exp: "Asszociációk, automatizmus." },
  { q: "Expresszionizmus:", options: ["Külső látvány tárgyilagossága","Belső feszültségek, kiáltások, torzítás","Csak dráma","Csak realista leírás"], correctIndex: 1, exp: "Szubjektív, felfokozott." },
  { q: "Posztmodern egyik jegye:", options: ["Egyetlen stílus hű követése","Játékosság, idézetelv, stíluskeverés","Csak eposz","Csak rím"], correctIndex: 1, exp: "Intertextualitás, irónia." },
  { q: "Neoromantika:", options: ["Romantika ellenében","Romantikus jegyek újraéledése","Csak próza","Csak dráma"], correctIndex: 1, exp: "Érzelem és képzelet revival." },
  { q: "Klasszicizmus mintaképe:", options: ["Görög–római antikvitás","Középkori misztérium","Őskori mítosz","Rokokó csipke"], correctIndex: 0, exp: "Antik mérték és harmónia." },
  { q: "Naturalizmus kulcsfogalma:", options: ["Szabadságvágy","Determináltság (öröklés, környezet)","Álomszerűség","Forma játék"], correctIndex: 1, exp: "Erők meghatározzák a sorsot." },
  { q: "Realizmus módszere:", options: ["Tipizálás és részletező leírás","Álomlogika","Teljes absztrakció","Csak költészet"], correctIndex: 0, exp: "Valószerűség és típusábrázolás." },
  { q: "Romantika hőstípusa gyakran:", options: ["Átlagember","Kivételes, szenvedélyes egyéniség","Csak gyerek","Csak király"], correctIndex: 1, exp: "Kivételes egyén és nagy érzések." },
];

/* ─ Sections a FOGALMAKHOZ ─ */
export const section_fogalmak_kepek     = { id: "fogalmak_kepek",     title: "Irodalmi fogalmak — képek és alakzatok", bank: bank_fogalmak_kepek };
export const section_stilus_iranyzatok  = { id: "stilus_iranyzatok",  title: "Irányzatok — klasszicizmustól a modernig", bank: bank_stilus_iranyzatok };
export const topic_fogalmak = { id: "irodalom_8_fogalmak", title: "Irodalom 8 — Fogalmak és irányzatok", sections: [section_fogalmak_kepek, section_stilus_iranyzatok] };

/* ─────────────────────────────────────────────────────
   TOPIC_TREE – Az irodalom 8. témák gyűjtése
   ───────────────────────────────────────────────────── */
export const TOPIC_TREE = [
  topic_lira,
  topic_epika,
  topic_drama,
  topic_fogalmak,
];

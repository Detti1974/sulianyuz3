// lib/kemia/bank.ts
// KÉMIA 8 — kérdésbank
// Struktúra: szekciók (section_*) → főtémák (topic_*) → TOPIC_TREE
// Kérdésmezők: q, options (4), correctIndex, exp

export type QA = {
  q: string;
  options: [string, string, string, string];
  correctIndex: number;
  exp?: string;
};

export type Section = { id: string; title: string; bank: QA[] };
export type Topic = { id: string; title: string; sections: Section[] };
/* ─────────────────────────────────────────────
   I. ANYAG, HALMAZÁLLAPOTOK, KEVERÉKEK
   Szekció 1: Anyagok tulajdonságai és halmazállapotok (20 kérdés)
───────────────────────────────────────────── */

export const bank_anyag_halmazallapot: QA[] = [
  { q: "Melyik NEM halmazállapot?",
    options: ["Szilárd", "Folyékony", "Gáz", "Fény"],
    correctIndex: 3,
    exp: "A fény nem anyag-halmazállapot, hanem elektromágneses sugárzás." },
  { q: "Melyik jellemző a szilárd testekre?",
    options: ["Nincs saját térfogata", "Könnyen összenyomható", "Rendezett részecskék", "Mindig áramlik"],
    correctIndex: 2,
    exp: "Szilárdban a részecskék helyhez kötött rezgőmozgást végeznek, rendezettebbek." },
  { q: "A folyadékok…",
    options: ["összenyomhatók", "nincs térfogatuk", "felveszik az edény alakját", "kristályrácsosak"],
    correctIndex: 2,
    exp: "A folyadék saját térfogatú, de felveszi az edény alakját." },
  { q: "A gázokra igaz, hogy…",
    options: ["aligha tágulnak", "könnyen összenyomhatók", "merev szerkezetűek", "szilárd rácsot alkotnak"],
    correctIndex: 1,
    exp: "A gáz jól összenyomható és kitölti a rendelkezésre álló teret." },
  { q: "Olvadáskor a halmazállapot-változás iránya:",
    options: ["szilárd → folyadék", "folyadék → szilárd", "folyadék → gáz", "gáz → folyadék"],
    correctIndex: 0,
    exp: "Olvadás: szilárd anyag folyadékká válik." },
  { q: "Forráskor az alábbi történik:",
    options: ["szilárd → gáz", "folyadék → gáz az egész térfogatban", "csak párolgás a felszínen", "gáz → folyadék"],
    correctIndex: 1,
    exp: "Forrás: a folyadék gőzzé alakul az egész térfogatában." },
  { q: "Melyik halmazállapot-változás endoterm?",
    options: ["fagyás", "lecsapódás", "párolgás", "dermedés"],
    correctIndex: 2,
    exp: "Endoterm: hőfelvétellel jár (párolgás, olvadás, szublimáció)." },
  { q: "Melyik NEM tiszta anyag?",
    options: ["desztillált víz", "oxigén", "konyhasó (NaCl)", "csapvíz"],
    correctIndex: 3,
    exp: "A csapvíz keverék (oldott anyagokkal)." },
  { q: "A sűrűség mértékegysége SI-ben:",
    options: ["kg", "kg/m³", "N", "m³/kg"],
    correctIndex: 1,
    exp: "Sűrűség: tömeg/térfogat → kg/m³ (vagy g/cm³)." },
  { q: "Melyik állítás igaz a párolgásra?",
    options: ["Csak forrásponton történik", "Bármely hőmérsékleten a felszínen megy végbe", "Endoterm és csak szilárdban", "Exoterm folyamat"],
    correctIndex: 1,
    exp: "Párolgás minden hőmérsékleten lehetséges, a felszínen." },
  { q: "A jég olvadáspontja normál nyomáson:",
    options: ["0 °C", "32 °C", "100 °C", "-10 °C"],
    correctIndex: 0,
    exp: "Víz: 0 °C-on olvad, 100 °C-on forr (101,3 kPa)." },
  { q: "Szublimáció példája:",
    options: ["jég → víz", "víz → gőz", "jód kristály → jódgőz", "gőz → víz"],
    correctIndex: 2,
    exp: "Szilárd → gáz közvetlenül (pl. jód)." },
  { q: "A lecsapódás (kondenzáció) ellentéte:",
    options: ["párolgás", "olvadás", "fagyás", "szublimáció"],
    correctIndex: 0,
    exp: "Kondenzáció ↔ párolgás." },
  { q: "Melyik fizikai tulajdonság?",
    options: ["szín", "reakció savval", "égéshő", "bomlás hőre"],
    correctIndex: 0,
    exp: "Szín, sűrűség, olvadáspont: fizikai jellemzők." },
  { q: "A kristályos anyagokra jellemző:",
    options: ["nincs rendezett szerkezet", "éles olvadáspont", "gumi-szerű nyúlás", "mindig amorf"],
    correctIndex: 1,
    exp: "Kristályos: szabályos rácsszerkezet, éles olvadás." },
  { q: "Az amorf anyag…",
    options: ["rendezett rácsú", "nincs határozott olvadáspontja", "fémes fényű", "ionrácsos"],
    correctIndex: 1,
    exp: "Amorf: rendezetlen (pl. üveg)." },
  { q: "A víz halmazállapotai közül a legnagyobb sűrűség:",
    options: ["jég", "4 °C-os folyadék", "100 °C-os gőz", "20 °C-os folyadék"],
    correctIndex: 1,
    exp: "Víz sűrűsége 4 °C-on a legnagyobb." },
  { q: "A hab példája…",
    options: ["szilárd oldatnak", "emulziónak", "gáz folyadékban diszpergálva", "szuszpenziónak"],
    correctIndex: 2,
    exp: "Hab: gázbuborékok folyadékban." },
  { q: "Az emulzió:",
    options: ["gáz szilárdban", "folyadék folyadékban finoman eloszlatva", "szilárd folyadékban", "gáz gázban"],
    correctIndex: 1,
    exp: "Két nem elegyedő folyadék finom keveréke (pl. tej)." },
  { q: "A szuszpenzió:",
    options: ["gázok elegye", "szilárd részecskék folyadékban", "kristályos oldat", "ionos elegy"],
    correctIndex: 1,
    exp: "Ülepedő szilárd szemcsék folyadékban (pl. iszap)." },
];

/* ─────────────────────────────────────────────
   Szekció 2: Keverékek szétválasztása (20 kérdés)
───────────────────────────────────────────── */

export const bank_keverekek_szetevalasztasa: QA[] = [
  { q: "Homok–só keverék szétválasztásának helyes sorrendje:",
    options: ["Szűrés → Oldás → Párologtatás","Oldás → Szűrés → Párologtatás","Párologtatás → Oldás → Szűrés","Ülepítés → Párologtatás → Szűrés"],
    correctIndex: 1, exp: "Oldás → szűrés (homok fennmarad) → bepárlás (só)." },
  { q: "Melyik módszer szilárd–folyadék keverékhez jó?",
    options: ["Desztilláció","Szűrés","Extrahálás","Mind"],
    correctIndex: 3, exp: "Szűrés, desztilláció, extrakció is lehet helyes környezettől függően." },
  { q: "Melyikhez kell desztilláció?",
    options: ["Víz + etanol szétválasztása","Homok + vasreszelék","Olaj + víz","Só + cukor kézzel"],
    correctIndex: 0, exp: "Különböző forráspontú folyadékok elválasztása." },
  { q: "Az olaj–víz keverék elválasztása:",
    options: ["Dekantálás","Mágneses elválasztás","Szublimáció","Kromatográfia"],
    correctIndex: 0, exp: "Rétegek szerint leöntés / szeparáló tölcsér." },
  { q: "Vas + kénpor keverék: első lépés?",
    options: ["Szűrés","Mágnessel a vas eltávolítása","Desztilláció","Párologtatás"],
    correctIndex: 1, exp: "A vas szemcsék mágnessel eltávolíthatók." },
  { q: "Kromatográfia lényege:",
    options: ["Különböző oldhatóság a két fázis között","Különböző forráspont","Különböző sűrűség","Különböző mágnesesség"],
    correctIndex: 0, exp: "Eltérő mértékben mozognak a stacionárius és mobil fázisokban." },
  { q: "Melyik NEM szétválasztási módszer?",
    options: ["Szűrés","Oldás","Desztilláció","Kromatográfia"],
    correctIndex: 1, exp: "Az oldás nem szétválasztás, hanem keverékképzés." },
  { q: "A bepárlás akkor célszerű, ha…",
    options: ["az oldott anyag kell és hőre bomlik","az oldószer kell és illékonyabb","az oldott anyag kell és hőre nem bomlik","mindig jobb, mint a desztilláció"],
    correctIndex: 2, exp: "Ha az oldott anyag a cél, és bírja a hőt." },
  { q: "Víz + tintafolt iskolai elválasztása:",
    options: ["Papírkromatográfia","Dekantálás","Szűrés","Szublimáció"],
    correctIndex: 0, exp: "A festék komponensei szétválnak." },
  { q: "A desztillációs készülék kimenetén a … van.",
    options: ["forraló lombik","hűtő","szűrőpapír","mágnes"],
    correctIndex: 1, exp: "A gőz a hűtőben csapódik le." },
  { q: "Szeparáló tölcsér … elválasztásához kell.",
    options: ["szilárd–folyadék","gáz–folyadék","nem elegyedő folyadék–folyadék","szilárd–szilárd"],
    correctIndex: 2, exp: "Olaj–víz típusú elegyekhez." },
  { q: "Szűrés során a szilárd részek…",
    options: ["a szűrletben maradnak","átmennek a pórusokon","a szűrőn fennakadnak","elpárolognak"],
    correctIndex: 2, exp: "A folyadék a szűrlet." },
  { q: "Telített oldat azt jelenti, hogy…",
    options: ["sok oldott anyag van benne","adott T-n a lehető legtöbb oldott anyagot tartalmazza","nincs benne oldott anyag","csak gázokat old"],
    correctIndex: 1, exp: "Egyensúlyi maximumon van." },
  { q: "A centrifugálás elve:",
    options: ["sűrűségkülönbség gyors forgással","hőmérséklet-különbség","mágnesesség","kémiai reakció"],
    correctIndex: 0, exp: "A nagyobb sűrűségű részek kifelé szorulnak." },
  { q: "Forráspont-különbségre építő módszer:",
    options: ["szűrés","bepárlás","desztilláció","kromatográfia"],
    correctIndex: 2, exp: "Különböző forráspont." },
  { q: "Homok leválasztása sóoldatból:",
    options: ["feloldjuk és szűrjük","desztilláljuk","kromatografáljuk","szublimáljuk"],
    correctIndex: 0, exp: "Só oldódik, homok nem → szűrés." },
  { q: "A „szűrlet” jelentése:",
    options: ["a szűrőben maradt rész","a csapadék","a szűrőn átfolyt folyadék","az ülepedő rész"],
    correctIndex: 2, exp: "Szűrés után a folyadék a szűrlet." },
  { q: "Piszkos víz tisztításának alaplépése nem lehet:",
    options: ["ülepítés","szűrés","desztilláció","kromatográfia hétköznap"],
    correctIndex: 3, exp: "Hétköznapi tisztításnál nincs értelme." },
  { q: "Oldatból az oldószer visszanyerése:",
    options: ["bepárlás","desztilláció","szűrés","centrifugálás"],
    correctIndex: 1, exp: "Ha az oldószer kell (pl. etanol)." },
  { q: "A kristályosítás célja:",
    options: ["forráspont mérése","tiszta kristály előállítása oldatból","gáz elnyeletése","szilárd őrlése"],
    correctIndex: 1, exp: "Szabályozott kihűtéssel tiszta kristályok." },
];

/* ─────────────────────────────────────────────
   Szekció 3: Oldatok, oldhatóság, koncentráció (20 kérdés)
───────────────────────────────────────────── */

export const bank_oldatok_koncentracio: QA[] = [
  { q: "Az oldat összetevői:",
    options: ["oldószer + oldott anyag","szolvat + gél","emulgens + diszperzió","ion + elektron"],
    correctIndex: 0, exp: "Oldat = oldószer + oldott anyag(ok)." },
  { q: "A tömegszázalék (m/m%) jelentése:",
    options: ["100 g oldatban hány g oldott anyag van","1 L oldatban molok száma","100 mL oldat térfogata","gáz részarány a levegőben"],
    correctIndex: 0, exp: "m/m% = (m(oldott)/m(oldat))×100." },
  { q: "10 m/m%-os sóoldat 200 g össztömegben: a só tömege?",
    options: ["10 g","20 g","50 g","180 g"],
    correctIndex: 1, exp: "10% × 200 g = 20 g." },
  { q: "A térfogatszázalék (V/V%) tipikusan…",
    options: ["szilárd oldatokra","folyadék–folyadék oldatokra","gázokra","szuszpenziókra"],
    correctIndex: 1, exp: "Pl. etanol–víz elegy." },
  { q: "A telítetlen oldat azt jelenti, hogy…",
    options: ["több oldott anyag már nem vihető be","még bevihető több oldott anyag adott T-n","csak gázokat old","nincs oldott anyag benne"],
    correctIndex: 1, exp: "Telítetlen: még több anyag oldható." },
  { q: "Az oldhatóság függ leginkább…",
    options: ["nyomástól minden anyagnál","hőmérséklettől (szilárd anyagoknál általában nő)","mágneses tértől","fényerősségtől"],
    correctIndex: 1, exp: "Szilárd anyagoknál T emelése általában növeli az oldhatóságot." },
  { q: "Gázok vízben való oldhatósága:",
    options: ["T emelésével nő","T emelésével csökken","nem függ T-től","mindig 0"],
    correctIndex: 1, exp: "Melegebb vízben kevesebb gáz oldódik." },
  { q: "Melyik koncentráció-fogalom NEM százalékos?",
    options: ["m/m%","V/V%","m/V%","mol/dm³"],
    correctIndex: 3, exp: "Moláris koncentráció (c) nem százalékos." },
  { q: "0,5 mol/dm³ NaCl-oldat 1 dm³-ben hány mol NaCl?",
    options: ["0,05 mol","0,5 mol","5 mol","1 mol"],
    correctIndex: 1, exp: "c = n/V → 0,5×1 = 0,5 mol." },
  { q: "1,0 m/m%-os cukoroldatban 1 kg oldatban hány g cukor?",
    options: ["1 g","10 g","100 g","1000 g"],
    correctIndex: 1, exp: "1% × 1000 g = 10 g." },
  { q: "Melyik művelettel nő az oldódási sebesség?",
    options: ["darabolás/őrölés","hűtés","nyomás csökkentése","sötétítés"],
    correctIndex: 0, exp: "Felületnövelés, keverés, melegítés gyorsít." },
  { q: "A 12 V/V%-os etanol–víz oldat 100 mL-ben hány mL etanol?",
    options: ["12 mL","88 mL","24 mL","6 mL"],
    correctIndex: 0, exp: "V/V% = V(oldott)/V(oldat)×100." },
  { q: "Hígításkor a koncentráció…",
    options: ["nő","nem változik","csökken","kristályosodik"],
    correctIndex: 2, exp: "c csökken (n állandó, V nő)." },
  { q: "Az elektrolitoldatok vezetik az áramot, mert…",
    options: ["molekulák mozognak","ionok mozognak","elektronok mozognak a vízben","fotonok szállítják a töltést"],
    correctIndex: 1, exp: "Ionok (kation/anion) hordozzák a töltést." },
  { q: "A cukoroldat nem elektrolit, mert…",
    options: ["nincs benne részecske","nem oldódik","nem képez ionokat oldatban","csak gázokkal reagál"],
    correctIndex: 2, exp: "Molekulákra esik szét, nem ionokra." },
  { q: "Az oldhatóság görbéje mit mutat?",
    options: ["forráspont változása T-vel","sűrűség a nyomás függvényében","g/100 g oldószer T-függésben","kristályméretet"],
    correctIndex: 2, exp: "T ↔ oldható mennyiség (tipikusan g/100 g víz)." },
  { q: "A túltelített oldat…",
    options: ["kevesebbet tartalmaz, mint lehetne","átmenetileg többet tartalmaz, mint az egyensúlyi maximum","mindig stabil","csak gázoknál van"],
    correctIndex: 1, exp: "Metastabil; kristálymag hatására kicsapódhat." },
  { q: "m/V% jelentése:",
    options: ["g/100 mL oldat","mL/100 g oldat","mol/100 mL oldószer","mindig azonos a m/m%-kal"],
    correctIndex: 0, exp: "Tömeg/100 mL oldat." },
  { q: "0,20 mol/dm³ HCl-ből 250 mL oldatban hány mol HCl?",
    options: ["0,050 mol","0,20 mol","1,0 mol","0,005 mol"],
    correctIndex: 0, exp: "n = c·V = 0,20×0,250 = 0,050 mol." },
  { q: "A vízkeménységet főként … okozza:",
    options: ["NaCl","Ca²⁺ és Mg²⁺ ionok","Fe³⁺","K⁺"],
    correctIndex: 1, exp: "Karbonátok/szulfátok formájában." },
];

/* ─────────────────────────────────────────────
   II. KÉMIAI REAKCIÓK ALAPJAI (20 kérdés)
───────────────────────────────────────────── */

export const bank_kemiai_reakciok_alap: QA[] = [
  { q: "Melyik kémiai változás?",
    options: ["Jég olvadása","Víz forrása","Vas rozsdásodása","Etanol párolgása"],
    correctIndex: 2, exp: "Új anyag (vas-oxid) keletkezik." },
  { q: "Égés feltételei (tűz háromszöge):",
    options: ["üzemanyag + O₂ + gyújtóforrás","üzemanyag + víz + hideg","O₂ + víz + nyomás","üzemanyag + szél + jég"],
    correctIndex: 0, exp: "Oxidálható anyag, oxigén és gyújtóforrás." },
  { q: "Exoterm folyamat:",
    options: ["hőelnyelő","hőleadó","mindig fényt ad","mindig gáz fejlődik"],
    correctIndex: 1, exp: "Hőt ad le." },
  { q: "Reakciósebesség nő, ha…",
    options: ["T csökken","felület nő","koncentráció csökken","katalizátort eltávolítunk"],
    correctIndex: 1, exp: "Felület/T/konc növelés és katalizátor gyorsít." },
  { q: "A katalizátor…",
    options: ["elfogy","megfordítja a reakciót","csökkenti az aktiválási energiát","növeli az aktiválási energiát"],
    correctIndex: 2, exp: "Nem fogy el, Eₐ-t csökkenti." },
  { q: "Égéskor szükséges gáz:",
    options: ["N₂","O₂","CO","He"],
    correctIndex: 1, exp: "Oxidáció: oxigénkell." },
  { q: "Mészkő hevítésekor keletkezik:",
    options: ["CaCO₃","CaO + CO₂","Ca(OH)₂","CaCl₂"],
    correctIndex: 1, exp: "CaCO₃ → CaO + CO₂ (termikus bomlás)." },
  { q: "Semlegesítés során…",
    options: ["sav + bázis → só + víz","sav + só → bázis","bázis + só → sav","sav + sav → semleges"],
    correctIndex: 0, exp: "Pl. HCl + NaOH → NaCl + H₂O." },
  { q: "Kémiai reakció jele lehet:",
    options: ["Halmazállapot-változás","Hőmérséklet-változás ok nélkül","Új anyag keletkezése","Mindhárom együtt"],
    correctIndex: 3, exp: "Szín, csapadék, gázfejlődés, hő." },
  { q: "Tömegmegmaradás törvénye:",
    options: ["reakció előtt/után azonos tömeg zárt rendszerben","reakció után kisebb","reakció után nagyobb","gázfejlődésnél eltűnik a tömeg"],
    correctIndex: 0, exp: "Zárt rendszerben a tömeg állandó." },
  { q: "Redukció:",
    options: ["elektronleadás","elektronfelvétel","protonleadás","vízfelvétel"],
    correctIndex: 1, exp: "Oxidáció: elektronleadás; redukció: elektronfelvétel." },
  { q: "Oxidációs szám:",
    options: ["részecske tömege","héjelektronok száma","kötésben „formálisan” felvett töltés","atommag töltése"],
    correctIndex: 2, exp: "Elektronátmenetek „könyvelésére” szolgál." },
  { q: "Hidrogén égésekor keletkezik:",
    options: ["H₂O","H₂O₂","HCl","He"],
    correctIndex: 0, exp: "2 H₂ + O₂ → 2 H₂O." },
  { q: "CO₂ kimutatása mészvízzel:",
    options: ["vörös lesz","kékül","elszínteleníti","zavarossá teszi"],
    correctIndex: 3, exp: "Fehér CaCO₃-csapadék." },
  { q: "A rozsda fő összetevője:",
    options: ["FeS","Fe₂O₃·xH₂O","FeCl₃","Fe(OH)₂"],
    correctIndex: 1, exp: "Vas(III)-oxid-hidrátok." },
  { q: "A hőbontás másik neve:",
    options: ["szublimáció","termikus bomlás","olvadás","desztilláció"],
    correctIndex: 1, exp: "Hő hatására bomlik az anyag." },
  { q: "Fotoszintézis…",
    options: ["exoterm","endoterm (fény energiáját használja)","semlegesítés","redoxi nélkül"],
    correctIndex: 1, exp: "Fényenergia beépül (glükóz + O₂ keletkezik)." },
  { q: "Melyik NEM kémiai reakció?",
    options: ["cukor karamellizálása","víz párolgása","kalcium-karbonát bomlása","vas rozsdásodása"],
    correctIndex: 1, exp: "Párolgás fizikai változás." },
  { q: "Láncreakcióra példa:",
    options: ["jegesedés","metán égése","kődarabolás","víz forrása"],
    correctIndex: 1, exp: "Szabadgyökös mechanizmus (égés)." },
  { q: "Aktiválási energia…",
    options: ["a reakció megindításához szükséges energiatöbblet","a termék energiája","mindig nulla","nem befolyásolja a sebességet"],
    correctIndex: 0, exp: "Minél kisebb, annál gyorsabb lehet a reakció." },
];

/* ─────────────────────────────────────────────
   III. ÚJ: ATOM ÉS PERIÓDUSOS RENDSZER (20 kérdés)
───────────────────────────────────────────── */

export const bank_atom_periodusos: QA[] = [
  { q: "Az atom három fő részecskéje:",
    options: ["proton, neutron, elektron","proton, ion, elektron","ion, molekula, atommag","neutron, foton, elektron"],
    correctIndex: 0, exp: "Proton (+), neutron (0) a magban, elektron (–) a héjon." },
  { q: "A rendszám (Z) megadja…",
    options: ["neutronok számát","protonok számát","elektronok tömegét","tömegszámot"],
    correctIndex: 1, exp: "Rendszám = protonszám (semleges atomban elektronok száma is)." },
  { q: "A tömegszám (A) megadja…",
    options: ["proton + neutron számát","csak elektronok számát","protonok számát","héjak számát"],
    correctIndex: 0, exp: "A = Z + N (protonok + neutronok száma)." },
  { q: "Az izotópok abban különböznek, hogy…",
    options: ["különböző a protonszámuk","különbözik a neutron számuk","különböző az elemük","más a kémiai jelük"],
    correctIndex: 1, exp: "Ugyanazon elem különböző tömegszámú atomjai." },
  { q: "A periódusos rendszer oszlopai a…",
    options: ["periódusok","csoportok","rácsok","héjak"],
    correctIndex: 1, exp: "Oszlop = csoport (hasonló külső elektronhéj), sor = periódus." },
  { q: "A nemesgázokra jellemző, hogy…",
    options: ["nagyon reakcióképesek","könnyen ionizálódnak","külső héjuk telített","fémes vezetők"],
    correctIndex: 2, exp: "Telített külső héj → kémiailag közömbösek." },
  { q: "A halogének helye:",
    options: ["I. főcsoport","II. főcsoport","VII. főcsoport","VIII. főcsoport"],
    correctIndex: 2, exp: "VII. főcsoport (F, Cl, Br, I…)." },
  { q: "Az alkálifémek a … főcsoportban vannak.",
    options: ["I.","II.","III.","IV."],
    correctIndex: 0, exp: "I. főcsoport: Li, Na, K… reakcióképes fémek." },
  { q: "A periódusszám megegyezik…",
    options: ["a külső elektronok számával","a betöltött elektronhéjak számával","a protonok számával","a kötő elektronpárok számával"],
    correctIndex: 1, exp: "Pl. 3. periódus → 3 elektronhéj." },
  { q: "A fémek tipikus tulajdonsága:",
    options: ["rossz hővezetés","ridegség","fémes fény, jó vezetés","mind szigetelő"],
    correctIndex: 2, exp: "Fémes kötés → jó hő- és villamosvezetők." },
  { q: "A nemfémek tipikusan…",
    options: ["jó vezetők","ridegek, szigetelők","nyújthatók","szálhúzhatók"],
    correctIndex: 1, exp: "Nemfémek többsége szigetelő; kivétel lehet (grafit félvezető)." },
  { q: "A külső (vegyérték) elektronok száma erősen befolyásolja…",
    options: ["az olvadáspontot","a kémiai reakcióképességet","a sűrűséget","a színt"],
    correctIndex: 1, exp: "Vegyértékelektronok döntik el a kötésre való hajlamot." },
  { q: "A szén (C) rendszáma:",
    options: ["5","6","7","12"],
    correctIndex: 1, exp: "C: Z=6, tömegszám gyakran 12." },
  { q: "Az oxigén (O) elektronszerkezete röviden:",
    options: ["2,6","2,8,6","2,8","1,8"],
    correctIndex: 0, exp: "Összesen 8 e–, héjanként 2,6." },
  { q: "A nátrium-klorid (konyhasó) kötése…",
    options: ["kovalens","ionos","fémes","hidrogénkötés"],
    correctIndex: 1, exp: "Na⁺ és Cl⁻ ionok rácsba rendeződnek (ionrács)." },
  { q: "A klór (Cl₂) molekulában a kötés:",
    options: ["ionos","fémes","egyszeres kovalens","peptid"],
    correctIndex: 2, exp: "Két azonos nemfém között kovalens kötés alakul ki." },
  { q: "A periódusos rendszer bal oldalán inkább…",
    options: ["fémek","nemfémek","nemesgázok","halogének"],
    correctIndex: 0, exp: "Balra fémek, jobbra nemfémek, jobb szélen nemesgázok." },
  { q: "A kalcium (Ca) tipikusan … iont képez.",
    options: ["Ca⁻","Ca²⁻","Ca⁺","Ca²⁺"],
    correctIndex: 3, exp: "II. főcsoport → 2 elektront ad le → Ca²⁺." },
  { q: "A fluor (F) tipikusan … iont képez.",
    options: ["F⁺","F²⁺","F⁻","F²⁻"],
    correctIndex: 2, exp: "VII. főcsoport → 1 elektront vesz fel → F⁻." },
  { q: "A hidrogén …",
    options: ["csak nemfém","csak fém","különleges: nemfém, de az I. főcsoportban","nemesgáz"],
    correctIndex: 2, exp: "H különleges helyzetű: nemfém, de 1 e–-ja miatt I. főcsoport felett." },
];

/* ─────────────────────────────────────────────
   IV. ÚJ: KÖTÉSEK ÉS ANYAGOK (20 kérdés)
───────────────────────────────────────────── */

export const bank_kotesek_anyagok: QA[] = [
  { q: "Az ionos kötés akkor jön létre, ha…",
    options: ["két fém kapcsolódik","két azonos nemfém kapcsolódik","fém elektron(oka)t ad át nemfémnek","nemesgázok reagálnak"],
    correctIndex: 2, exp: "Elektronátadás → ellentétes töltésű ionok vonzása." },
  { q: "A kovalens kötés…",
    options: ["elektronpár megosztásával jön létre","elektronátadás eredménye","fémrácsban alakul ki","mindig fémes fényt ad"],
    correctIndex: 0, exp: "Két nemfém többnyire kovalensen köt." },
  { q: "A fémes kötés jellemzője:",
    options: ["delokalizált elektronok","lokalizált elektronpárok","ellenionok közti vonzás","hidrogénkötések"],
    correctIndex: 0, exp: "Elektrontenger modell → jó vezetés." },
  { q: "Az ionrácsos anyagokra jellemző:",
    options: ["alacsony olvadáspont","jó elektromos vezetés szilárdan","gyakran oldódnak vízben","molekulákból állnak"],
    correctIndex: 2, exp: "Vízben sok ionrácsos anyag jól oldódik; olvadéka vezeti az áramot." },
  { q: "A kovalens molekulákból álló kristályokra jellemző:",
    options: ["nagyon magas olvadáspont","molekulárács, gyenge kölcsönhatások","fémes vezetés","ionvándorlás"],
    correctIndex: 1, exp: "Pl. jód, kén – gyenge diszperziós kölcsönhatások." },
  { q: "A gyémánt rácsa:",
    options: ["molekularács","fémrács","ionrács","atomrács (kovalens háló)"],
    correctIndex: 3, exp: "C atomok kovalens hálózata → nagyon kemény, nagy olvadáspont." },
  { q: "A grafit vezet, mert…",
    options: ["ionjai vándorolnak","delokalizált π-elektronjai vannak","ionrácsos","molekulárács"],
    correctIndex: 1, exp: "Réteges szerkezet, delokalizált elektronok." },
  { q: "A hidrogénkötés tipikusan fellép…",
    options: ["H–Cl között","H–O, H–N, H–F kapcsolatoknál","fémes kötésben","ionrácsban"],
    correctIndex: 1, exp: "Erős másodlagos kötés, pl. vízben H–O…H." },
  { q: "A NaCl kristály…",
    options: ["molekulárácsos","ionrácsos","fémrácsos","atomrácsos"],
    correctIndex: 1, exp: "Na⁺ és Cl⁻ váltakozó rácsa." },
  { q: "A víz forráspontja a hidrogénkötés miatt magas ahhoz képest, hogy…",
    options: ["kicsi molekula","fém","ionrácsos","atomrácsos"],
    correctIndex: 0, exp: "Kis molekulatömeghez képest magas a T_forr (H-kötés)." },
  { q: "A kristályrács típusát NEM befolyásolja direkt módon:",
    options: ["kötés típusa","atomok/molekulák közti kölcsönhatás","elektronok delokalizációja","anyag színe"],
    correctIndex: 3, exp: "Szín következmény, nem ok." },
  { q: "A sósav (HCl) vízben…",
    options: ["molekulaként marad","ionokra esik: H₃O⁺ + Cl⁻","Na⁺ és Cl⁻ lesz","nem oldódik"],
    correctIndex: 1, exp: "Erős sav → teljes disszociáció." },
  { q: "A cukor vízben oldódik, de az oldat nem vezet, mert…",
    options: ["nincsenek benne részecskék","nem képez ionokat oldatban","gáz fejlődik","fémes kötésű"],
    correctIndex: 1, exp: "Molekulás oldat, nincs ion." },
  { q: "A réz (Cu) jó vezető, mert…",
    options: ["ionjai vándorolnak","fémes kötése miatt delokalizált elektronjai vannak","molekulárácsos","ionrácsos"],
    correctIndex: 1, exp: "Fémes kötés → jó villamos és hővezetés." },
  { q: "A jég sűrűsége kisebb, mint a vízé, mert…",
    options: ["ionrácsa van","molekulárácsa van, benne üregek (H-kötés)","fémrácsa van","atomrácsa van"],
    correctIndex: 1, exp: "H-kötéses szerkezet „lazább” → jég úszik a vízen." },
  { q: "A poláris kovalens kötés…",
    options: ["azonos atomok között alakul ki","elektronpár teljes átvitelével jár","elektronpár megosztás, de eltérő elektronvonzás","fémek között"],
    correctIndex: 2, exp: "Eltérő elektronegativitás → részleges töltések." },
  { q: "A metán (CH₄) molekulája…",
    options: ["ionos","fémes","kovalens, apoláris molekula","polimer"],
    correctIndex: 2, exp: "C–H kötések összhatása apoláris (tetraéderes)." },
  { q: "A víz (H₂O) molekulája…",
    options: ["lineáris, apoláris","V-alakú, poláris","tetraéderes, apoláris","sík, apoláris"],
    correctIndex: 1, exp: "Kötésszög ~104,5°, dipólusos." },
  { q: "A sókristályok törékenyek, mert…",
    options: ["molekulárácsuk van","fémrácsúak","az ionrétegek elcsúszásakor azonos töltések taszítják egymást","hidrogénkötés gyenge"],
    correctIndex: 2, exp: "Az azonos töltésű ionok egymásra kerülnek → taszítás → ridegség." },
  { q: "A polietilén egy példája…",
    options: ["fémnek","ionrácsnak","polimernek (műanyagnak)","atomrácsnak"],
    correctIndex: 2, exp: "Hosszú láncú molekulák (–CH₂–)ₙ." },
];

/* ─────────────────────────────────────────────
   V. ÚJ: SAVAK, BÁZISOK, SÓK – ALAPOK (20 kérdés)
───────────────────────────────────────────── */

export const bank_savbazis_sok_alap: QA[] = [
  { q: "Sav + bázis reakciójának terméke általában:",
    options: ["sav + gáz","bázis + gáz","só + víz","csak hő"],
    correctIndex: 2, exp: "Semlegesítés: sav + bázis → só + víz." },
  { q: "A pH-skála szerint a pH=2 oldat…",
    options: ["semleges","gyengén lúgos","erősen savas","erősen lúgos"],
    correctIndex: 2, exp: "pH<7 savas, pH>7 lúgos." },
  { q: "A pH=7 oldat…",
    options: ["savas","semleges","lúgos","erősen lúgos"],
    correctIndex: 1, exp: "Tiszta víz ~pH 7 (25 °C-on)." },
  { q: "A vöröskáposzta-levél indikátorként…",
    options: ["mindenhol kék","savasban pirosas, lúgosban zöldes/kékes","csak lúgosban színez","nem változtat színt"],
    correctIndex: 1, exp: "Természetes indikátor: pH-függő szín." },
  { q: "Az esővíz pH-ja tiszta levegőn közel…",
    options: ["1","3","5,6","9"],
    correctIndex: 2, exp: "CO₂-től enyhén savas (szénsav)." },
  { q: "Erős savra példa:",
    options: ["ecetsav (CH₃COOH)","sósav (HCl)","víz (H₂O)","ammónia (NH₃)"],
    correctIndex: 1, exp: "HCl, HNO₃, H₂SO₄ erős savak példái." },
  { q: "Erős bázisra példa:",
    options: ["NaOH","NH₃ (aq)","Cu(OH)₂","víz"],
    correctIndex: 0, exp: "NaOH, KOH erős bázisok." },
  { q: "A nátrium-klorid képlete:",
    options: ["NaCl","NaCl₂","Na₂Cl","Na₂Cl₂"],
    correctIndex: 0, exp: "Nátrium-klorid: NaCl." },
  { q: "A mésztej a … vizes szuszpenziója.",
    options: ["CaO","CaCO₃","Ca(OH)₂","CaSO₄"],
    correctIndex: 2, exp: "Mészhidrát vizes szuszpenziója." },
  { q: "A szénsav képlete:",
    options: ["H₂CO₃","HCOOH","H₂SO₄","HNO₃"],
    correctIndex: 0, exp: "Szénsav: H₂CO₃." },
  { q: "A semlegesítés során felszabadulhat…",
    options: ["hő","fény","elektron","neutron"],
    correctIndex: 0, exp: "Exoterm folyamat lehet (hőtermelés)." },
  { q: "A pH-skála … tartományban értelmezett (iskolai közelítés).",
    options: ["1–5","0–14","–5–5","0–7"],
    correctIndex: 1, exp: "Gyakorlati skála 0–14." },
  { q: "Az ammónia vizes oldata (ammónium-hidroxid)…",
    options: ["sav","semleges","bázis","só"],
    correctIndex: 2, exp: "NH₃(aq) bázikus oldatot ad." },
  { q: "Ecetsav vizes oldata…",
    options: ["erős sav","gyenge sav","lúgos","semleges"],
    correctIndex: 1, exp: "Gyenge sav, részleges disszociáció." },
  { q: "A konyhasó (NaCl) oldata elektromosan…",
    options: ["szigetelő","vezető","csak jégben vezet","mindig szigetel"],
    correctIndex: 1, exp: "Ionok mozognak → vezet." },
  { q: "A mészvíz zavarossá válik CO₂-től, mert…",
    options: ["CaCO₃ csapadék keletkezik","Na₂CO₃ képződik","H₂ fejlődik","semmi nem történik"],
    correctIndex: 0, exp: "Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O." },
  { q: "A nátrium-hidroxid képlete:",
    options: ["NaO","NaOH","NaH","NaHO₂"],
    correctIndex: 1, exp: "Nátrium-hidroxid: NaOH." },
  { q: "A kénsav képlete:",
    options: ["H₂SO₃","H₂SO₄","HSO₄⁻","SO₄²⁻"],
    correctIndex: 1, exp: "Kénsav: H₂SO₄." },
  { q: "A pH-papír…",
    options: ["hőmérsékletet mér","pH-értéket jelez színskálán","vezetőképességet mér","sűrűséget mér"],
    correctIndex: 1, exp: "Indikátorpapír – színskála szerint leolvasható pH." },
  { q: "A semleges oldat pH-ja…",
    options: ["0","5,6","7","14"],
    correctIndex: 2, exp: "25 °C-on ~7." },
];
/* ─────────────────────────────────────────────
   VI. ÚJ: KÖRNYEZET KÉMIAI ANYAGAI ÉS VÉDELEM (20 kérdés)
───────────────────────────────────────────── */

export const bank_kornyezeti_kemia: QA[] = [
  { q: "Az üvegházhatás fő természetes okozói közül melyik NEM tartozik ide?",
    options: ["CO₂", "CH₄", "N₂", "H₂O(g)"],
    correctIndex: 2,
    exp: "A nitrogén (N₂) nem üvegházhatású gáz; CO₂, CH₄ és vízgőz igen." },

  { q: "A savas eső fő okozója:",
    options: ["CO₂ és O₂", "SO₂ és NOx", "H₂ és He", "O₃ és Ar"],
    correctIndex: 1,
    exp: "Kén-dioxid (SO₂) és nitrogén-oxidok (NO, NO₂) savas esőt okozhatnak." },

  { q: "A troposzférában a szmog egyik kulcskomponense:",
    options: ["O₃ (ózon)", "He", "Ne", "Kr"],
    correctIndex: 0,
    exp: "A fotokémiai szmogban az ózon (felszínközeli O₃) kulcsszereplő." },

  { q: "Az ózonréteg leginkább melyik sugárzást nyeli el?",
    options: ["Rádióhullámok", "UV-B", "Infravörös", "Látható zöld"],
    correctIndex: 1,
    exp: "A sztratoszférikus ózon az UV-B nagy részét elnyeli." },

  { q: "Melyik NEM primer levegőszennyező?",
    options: ["SO₂", "NO", "CO", "O₃"],
    correctIndex: 3,
    exp: "Az O₃ többnyire más gázokból keletkező másodlagos szennyező." },

  { q: "A „NOx” rövidítés általában … jelöl:",
    options: ["N₂O csak", "NO és NO₂ keveréke", "NH₃ és NO₃⁻", "NO₃⁻ és NO₂⁻"],
    correctIndex: 1,
    exp: "A NOx gyűjtőnév a nitrogén-oxidokra (NO, NO₂)." },

  { q: "A víz eutrofizációját főként mi okozza?",
    options: ["Fémionok hiánya", "Tápanyag-többlet (N, P)", "Nagynyomás", "CO hiánya"],
    correctIndex: 1,
    exp: "Nitrogén- és foszforterhelés algavirágzást indít, oxigénhiányhoz vezethet." },

  { q: "A biológiai szennyvíztisztítás alapja:",
    options: ["Fémpor szűrés", "Mikrobiális lebontás", "Desztilláció", "Kromatográfia"],
    correctIndex: 1,
    exp: "A mikrobák lebontják a szerves szennyezőket (aktíviszap folyamatok)." },

  { q: "Melyik jelöl újrahasznosíthatóságot?",
    options: ["Veszélyjel (koponya)", "Mobius-hurok (három nyíl)", "CE jelölés", "WEEE áthúzott kuka nélkül"],
    correctIndex: 1,
    exp: "A Mobius-hurok a körforgás/újrahasznosítás jelképe." },

  { q: "A szelektív gyűjtésnél a kék konténer általában:",
    options: ["Üveg", "Papír", "Műanyag/fém", "Zöldhulladék"],
    correctIndex: 1,
    exp: "Itthon tipikusan: kék = papír, sárga = műanyag/fém, zöld/fehér = üveg (településtől függhet)." },

  { q: "Melyik állítás igaz a műanyagokról?",
    options: ["Mind vízben azonnal oldódik", "Mind éghető és mérgező gázt fejleszt", "Többségük polimer, újrahasznosítási kóddal", "Soha nem szelektálható"],
    correctIndex: 2,
    exp: "A műanyagok polimerek, soknál van újrahasznosítási kód (PET, HDPE…)." },

  { q: "A CO (szén-monoxid) veszélye főként az, hogy…",
    options: ["erős sav", "hemoglobinhoz kötődik", "robbanékony vízzel", "radioaktív"],
    correctIndex: 1,
    exp: "A CO erősen kötődik a hemoglobinhoz → oxigénszállítás gátlás." },

  { q: "Üvegházhatású gáz NEM ez:",
    options: ["CO₂", "CH₄", "N₂O", "N₂"],
    correctIndex: 3,
    exp: "A N₂ nem üvegházgáz; CO₂, CH₄, N₂O igen." },

  { q: "A „biológiailag lebomló” kifejezés azt jelenti, hogy az anyag…",
    options: ["vízben azonnal feloldódik", "mikrobák lebontják idővel", "áramtalanításra lebomlik", "csak fényben bomlik"],
    correctIndex: 1,
    exp: "Mikroorganizmusok általi lebontásra képes (idő- és környezetfüggő)." },

  { q: "A jegesedés elleni útszórásnál használt NaCl környezeti gondja:",
    options: ["Szén-dioxid-kibocsátás", "Talaj- és vízsósság növelése", "Ózonképződés", "Savképzés közvetlenül"],
    correctIndex: 1,
    exp: "A sózás szikesedést, élőlény-terhelést okozhat." },

  { q: "A háztartási vegyszerek keverése (pl. hipó + sav) veszélyes, mert…",
    options: ["oxigén maró", "klórgáz fejlődhet", "hélium szökik", "nitrogén keletkezik"],
    correctIndex: 1,
    exp: "Hipó (NaOCl) savval klórgázt fejleszthet – mérgező." },

  { q: "A pH-csökkenés a természetes vizekben általában azt jelzi, hogy…",
    options: ["lúgosodás", "savasodás", "nincs változás", "szilárdosodás"],
    correctIndex: 1,
    exp: "Alacsonyabb pH → savasabb közeg (pl. savas eső hatása)." },

  { q: "A levegő fő összetevői térfogatszázalékban kb.:",
    options: ["78% N₂, 21% O₂, ~1% egyéb", "50% O₂, 50% N₂", "21% N₂, 78% O₂", "90% CO₂"],
    correctIndex: 0,
    exp: "Kb. 78% N₂, 21% O₂, 1% nemesgázok, CO₂ stb." },

  { q: "A „kémiai oxigénigény” (KOI) a vizekben…",
    options: ["a sótartalmat méri", "a szerves szennyezés kémiai oxidálhatóságát jelzi", "a nitrátot adja meg", "a hőmérsékletet jelzi"],
    correctIndex: 1,
    exp: "A KOI a szerves terhelés becslésére használt mutató." },

  { q: "A hulladékhierarchiában a legjobb megoldás:",
    options: ["Ártalmatlanítás", "Újrahasználat/Újrahasznosítás", "Megelőzés (kevesebb hulladék keletkezzen)", "Elégetés minden esetben"],
    correctIndex: 2,
    exp: "Első: megelőzés → aztán újrahasználat/újrahasznosítás → ártalmatlanítás a végén." },
];
/* ─────────────────────────────────────────────
   VI/b: KÖRNYEZET – VÍZ, LEVEGŐ, HULLADÉK (20 kérdés)
───────────────────────────────────────────── */

export const bank_kornyezeti_kemia_viz_levego: QA[] = [
  { q: "A felszínközeli ózon (O₃) elsősorban…",
    options: ["hasznos védőréteg mindenhol", "fotokémiai szmog része, egészségkárosító", "ártalmatlan nemesgáz", "csak a sztratoszférában létezik"],
    correctIndex: 1,
    exp: "A talajközeli ózon másodlagos szennyező, légúti panaszokat okozhat." },

  { q: "Az ivóvíz tisztítás tipikus lépései helyes sorrendben:",
    options: ["Klorozás → Ülepítés → Szűrés", "Durvaszűrés → Ülepítés → Szűrés → Fertőtlenítés", "Desztilláció → Kromatográfia → Klorozás", "Csak forralás"],
    correctIndex: 1,
    exp: "Előszűrés/derítés, ülepítés, homokszűrés, végső fertőtlenítés (pl. klór/UV)." },

  { q: "A BOI (biokémiai oxigénigény) a vizekben azt jelzi, hogy…",
    options: ["mennyi nitrát van", "mennyi oldott oxigén kell a szerves anyag lebontásához", "a víz pH-ját", "a víz keménységét"],
    correctIndex: 1,
    exp: "Magas BOI → sok szerves szennyezés, oxigénhiány veszélye." },

  { q: "Melyik NEM tipikus ivóvíz-fertőtlenítési módszer?",
    options: ["Klórozás", "Ózonozás", "UV-kezelés", "Elektrolízis konyhasóval a csapnál"],
    correctIndex: 3,
    exp: "A házi hálózatban nem alkalmaznak ilyen elektrolízist fertőtlenítésre." },

  { q: "A nitrát (NO₃⁻) túl magas szintje ivóvízben főleg…",
    options: ["kék csecsemő szindrómát okozhat", "csak kellemetlen ízt ad", "radioaktívvá teszi a vizet", "mindig lúgosít"],
    correctIndex: 0,
    exp: "Methemoglobinémia veszélye csecsemőknél." },

  { q: "A PM2.5 jelölés a levegőben…",
    options: ["2,5% páratartalmat jelent", "2,5 mm-es porszemeket jelent", "2,5 μm-nél kisebb részecskéket jelent", "2,5 mol% oxigént jelent"],
    correctIndex: 2,
    exp: "Finomrészecske (≤2,5 μm), egészségügyi kockázattal." },

  { q: "A „keménység” növekedését főleg mely ionok okozzák?",
    options: ["Na⁺, K⁺", "Ca²⁺, Mg²⁺", "Fe²⁺, Cu²⁺", "Cl⁻, Br⁻"],
    correctIndex: 1,
    exp: "Ca²⁺ és Mg²⁺ sói adják a vízkeménységet." },

  { q: "A háztartási veszélyes hulladék NEM ez:",
    options: ["Lejárt gyógyszer", "Használt elem/akku", "Fáradt olaj", "Banánhéj"],
    correctIndex: 3,
    exp: "A banánhéj biológiailag lebomló, komposztálható; a többi veszélyes." },

  { q: "Elektronikai hulladék (e-hulladék) jelölése:",
    options: ["CE", "Mobius-hurok", "Áthúzott kuka piktogram", "Veszélyjel: láng"],
    correctIndex: 2,
    exp: "Az áthúzott kuka jelzi, hogy nem háztartási hulladékba való." },

  { q: "A komposztálás során főként…",
    options: ["fémek oxidálódnak", "mikroorganizmusok bontják a szerves anyagot", "műanyagok depolimerizálódnak vízben", "gázok kondenzálódnak"],
    correctIndex: 1,
    exp: "Biológiai lebomlás: hő, CO₂ keletkezhet; humuszszerű anyag marad." },

  { q: "A papír szelektív gyűjtésének tipikus színe (HU):",
    options: ["Kék", "Sárga", "Zöld/fehér", "Barna"],
    correctIndex: 0,
    exp: "Általában kék = papír, sárga = műanyag/fém, zöld/fehér = üveg, barna = bio." },

  { q: "A mikroplasztik fő forrása NEM ez:",
    options: ["Műanyagok aprózódása", "Textíliák mosása", "Autógumik kopása", "Tiszta desztillált víz előállítása"],
    correctIndex: 3,
    exp: "A desztillált víz készítése nem forrása mikroplasztiknak." },

  { q: "A passzív szellőztetés célja…",
    options: ["oxigén csökkentése", "belső szennyezők hígítása friss levegővel", "szén-monoxid koncentrálása", "ózon előállítása"],
    correctIndex: 1,
    exp: "Rendszeres szellőzés csökkenti a beltéri szennyezőket (VOC, CO₂, aeroszolok)." },

  { q: "A szürkevíz (greywater)…",
    options: ["ivásra kész víz", "WC-ből származó víz", "mosásból, zuhanyból származó enyhén szennyezett víz", "tengervíz"],
    correctIndex: 2,
    exp: "Szürkevíz öntözésre, öblítésre – kezelés után – hasznosítható." },

  { q: "A napelemek villamos energiát termelnek…",
    options: ["kémiai reakcióval", "fény → elektromosság (fotovoltaikus hatás)", "forralással", "ferromágnesességgel"],
    correctIndex: 1,
    exp: "PV cellák: félvezetőkben fotonok hatására töltéshordozók keletkeznek." },

  { q: "A megújuló energia NEM ez:",
    options: ["Napenergia", "Szélenergia", "Fosszilis gáz", "Vízenergia"],
    correctIndex: 2,
    exp: "A földgáz fosszilis; a többiek megújulók." },

  { q: "A légkör CO₂-szintjének növekedése összefügg…",
    options: ["üvegházhatással és melegedéssel", "csak a savas esővel", "ózonréteg pusztulásával közvetlenül", "a levegő nitrogéntartalmával"],
    correctIndex: 0,
    exp: "CO₂ üvegházhatású gáz → éghajlatváltozással összefügg." },

  { q: "A hipót (NaOCl) SOHA ne keverd…",
    options: ["vízzel", "ecettel/savval", "mosószódával", "szódabikarbónával"],
    correctIndex: 1,
    exp: "Savas közegben klórgáz fejlődhet – mérgező!" },

  { q: "Az esővíz pH-ja tiszta levegőn tipikusan…",
    options: ["1", "3", "5,6", "9"],
    correctIndex: 2,
    exp: "CO₂ miatt enyhén savas (~5,6)." },

  { q: "A hulladék-hierarchiában az első helyen áll:",
    options: ["Ártalmatlanítás", "Megelőzés (kevesebb hulladék keletkezzen)", "Újrahasznosítás", "Elégetés"],
    correctIndex: 1,
    exp: "Első a megelőzés → aztán újrahasználat/újrahasznosítás → egyéb." },
];
/* ─────────────────────────────────────────────
   VII: FÉMEK, NEMFÉMEK, ÖTVÖZETEK, KORRÓZIÓ (20 kérdés)
───────────────────────────────────────────── */

export const bank_femek_korrózio: QA[] = [
  { q: "A fémek tipikus tulajdonsága NEM ez:",
    options: ["jó elektromos vezetés", "fémes fény", "ridegség és rossz vezetés általában", "nyújthatóság, szálhúzhatóság"],
    correctIndex: 2,
    exp: "A legtöbb fém jó vezető és képlékeny; a nemfémek jellemzően ridegek/szigetelők." },

  { q: "A nemfémekre jellemző inkább:",
    options: ["jó hő- és villamosvezetés", "szálhúzhatóság", "ridegség, szigetelés", "fémes kötés"],
    correctIndex: 2,
    exp: "Nemfémek többnyire szigetelők és ridegek (kivételek lehetnek, pl. grafit félvezető)." },

  { q: "Az ötvözet:",
    options: ["két vagy több fém (vagy fém + kis nemfém) szilárd elegye", "mindig tiszta elem", "csak nemfémek elegye", "mindig molekuláris kristály"],
    correctIndex: 0,
    exp: "Pl. acél (Fe+C), bronz (Cu+Sn), sárgaréz (Cu+Zn)." },

  { q: "A bronz összetétele tipikusan:",
    options: ["Cu + Sn", "Cu + Zn", "Fe + C", "Al + Mg"],
    correctIndex: 0,
    exp: "Bronz: réz–ón ötvözet." },

  { q: "A sárgaréz összetétele tipikusan:",
    options: ["Cu + Sn", "Cu + Zn", "Fe + C", "Al + Zn"],
    correctIndex: 1,
    exp: "Sárgaréz: réz–cink ötvözet." },

  { q: "Az acél lényege:",
    options: ["tiszta vas", "vas kis széntartalommal", "vas + króm csak", "vas + ón"],
    correctIndex: 1,
    exp: "Az acél vas–szén ötvözet (széntartalom nagyságrendje döntő)." },

  { q: "A rozsdamentes acélban fontos ötvöző:",
    options: ["Króm és nikkel", "Cink és ón", "Ólom és higany", "Réz és ezüst"],
    correctIndex: 0,
    exp: "A króm passzív védőréteget képez, a nikkel javítja a tulajdonságokat." },

  { q: "A korrózió alapja vas esetén:",
    options: ["fizikai oldódás", "oxidáció nedvesség/oxigén jelenlétében", "desztilláció", "polimerizáció"],
    correctIndex: 1,
    exp: "Vas → vas-oxid-hidrátok (rozsda) keletkeznek oxigén és víz hatására." },

  { q: "A vas korróziójának megelőzésére NEM alkalmas:",
    options: ["festés, bevonat", "horganyzás (Zn-bevonat)", "áldozati anód (pl. Zn, Mg)", "forralás 100 °C-on naponta"],
    correctIndex: 3,
    exp: "Forralás nem véd; a bevonatok és áldozati anód működő módszerek." },

  { q: "A horganyzás során a vas felületére … kerül:",
    options: ["réz", "alumínium", "cink", "ón"],
    correctIndex: 2,
    exp: "Cink (Zn) bevonat – katódos védelem, passziválás." },

  { q: "Az alumínium jó korrózióállóságú, mert…",
    options: ["nem reagál oxigénnel", "vastag rozsda védi", "tömör Al₂O₃ védőréteget képez a felületen", "mindig zsírréteg fedi"],
    correctIndex: 2,
    exp: "Az Al₂O₃ természetes passzív réteget képez (eloxálással erősíthető)." },

  { q: "A galvánelem (elektrokémiai cella) működése:",
    options: ["kémiai energia → elektromos energia", "elektromos → hőenergia", "fény → kémiai energia", "mechanikai → elektromos energia"],
    correctIndex: 0,
    exp: "Önként végbemenő redoxireakcióból áramot nyerünk." },

  { q: "Áldozati anód alkalmazásakor a védendő fémet…",
    options: ["nem kötik semmihez", "nemesebb fémmel kötik össze, ami oldódik helyette", "kevésbé nemes (aktívabb) fémhez kötik, ami oldódik helyette", "szigetelő műanyaggal rögzítik"],
    correctIndex: 2,
    exp: "Pl. vas védelme cink/magnézium anóddal – az oldódik előbb." },

  { q: "A reaktivitási sorban (egyszerűsítve) a magnézium a vasnál…",
    options: ["nemesebb", "kevésbé reaktív", "reaktívabb", "azonos"],
    correctIndex: 2,
    exp: "Mg reaktívabb → áldozati anódként is használható." },

  { q: "Ónkanna belsejében ónbevonat célja:",
    options: ["keményítés", "esztétika csak", "korrózióvédelem és élelmiszerbarát felület", "szigetelés elektromosan"],
    correctIndex: 2,
    exp: "Ón bevonat védi a vasat és élelmiszerrel kompatibilis." },

  { q: "A forraszanyagok jellemzője, hogy…",
    options: ["nagy olvadáspont", "kicsi olvadáspont a kötendő fémehez képest", "mindig acél", "nem fémekből állnak"],
    correctIndex: 1,
    exp: "Alacsonyabb olvadásponttal megolvasztva összekötik a részeket." },

  { q: "A patina a rézen főleg…",
    options: ["réz-klorid", "réz-karbonátok és -hidroxidok", "réz-nitrát", "réz-oxid-hidrid"],
    correctIndex: 1,
    exp: "Zöldes CuCO₃·Cu(OH)₂ jellegű rétegek – részben védő." },

  { q: "Az ón-passziválás célja, hogy…",
    options: ["az ónt oldja", "a vasat oxidálja erősen", "védőbevonatot képezzen a korrózió ellen", "elektrolitosan bontsa a vizet"],
    correctIndex: 2,
    exp: "Vékony ónréteg a vas felületén gátolja a rozsdásodást." },

  { q: "A galvanizálás (elektrolitikus bevonatolás) során…",
    options: ["fémionokat redukálnak a munkadarab felületén", "a munkadarabot párologtatják", "csak políroznak", "alumíniumot olvasztanak rá"],
    correctIndex: 0,
    exp: "Áram hatására fémionok lerakódnak (pl. nikkelbev., krómozás)." },

  { q: "A fémek rácstípusa tipikusan:",
    options: ["molekulárács", "fémrács delokalizált elektronokkal", "ionrács", "atomrács mindig"],
    correctIndex: 1,
    exp: "Fémrácsban az elektronok delokalizáltak → jó vezetés, képlékenység." },
];
/* ─────────────────────────────────────────────
   VIII: REAKCIÓEGYENLETEK – GYAKORLÓ (20 kérdés)
───────────────────────────────────────────── */

export const bank_reakcioegyenletek_gyakorlo: QA[] = [
  { q: "Melyik kifejezés írja le helyesen az égést?",
    options: ["anyag + oxigén → oxid", "anyag → oxigén + hő", "anyag + hidrogén → víz", "anyag + nitrogén → nitrid"],
    correctIndex: 0,
    exp: "Égéskor az anyag oxigénnel reagál, oxid(ok) keletkeznek, hő szabadul fel." },

  { q: "A hidrogén égésekor keletkezik:",
    options: ["H₂O", "H₂O₂", "HCl", "O₂"],
    correctIndex: 0,
    exp: "2 H₂ + O₂ → 2 H₂O (víz)." },

  { q: "Melyik a helyesen kiegyenlített egyenlet a metán égésére?",
    options: ["CH₄ + 2 O₂ → CO₂ + 2 H₂O", "CH₄ + O₂ → CO₂ + H₂O", "2 CH₄ + O₂ → 2 CO₂ + 2 H₂O", "CH₄ + 3 O₂ → 2 CO₂ + 2 H₂O"],
    correctIndex: 0,
    exp: "Számold meg az atomokat: C:1–1, H:4–4, O:4–4." },

  { q: "A vas(III)-oxid és alumínium reakciója (termit) milyen típus?",
    options: ["Sav-bázis", "Redoxi", "Csapadékképződés", "Komplexképződés"],
    correctIndex: 1,
    exp: "Elektronátmenet történik: Fe₂O₃ + 2 Al → 2 Fe + Al₂O₃." },

  { q: "Semlegesítés általános egyenlete:",
    options: ["sav + bázis → só + víz", "sav + fém → hidrogén + só", "oxid + víz → sav", "bázis + víz → sav"],
    correctIndex: 0,
    exp: "Pl. HCl + NaOH → NaCl + H₂O." },

  { q: "Melyik a helyes egyenlet sósav és nátrium-hidroxid reakciójára?",
    options: ["HCl + NaOH → NaCl + H₂O", "HCl + NaOH → H₂ + NaClO", "HCl + NaOH → Na + Cl + H₂O", "HCl + NaOH → NaOH + HCl"],
    correctIndex: 0,
    exp: "Egyszerű sav-bázis semlegesítés: só és víz keletkezik." },

  { q: "Kalcium-karbonát hőbontása:",
    options: ["CaCO₃ → CaO + CO₂", "CaCO₃ → Ca + CO₃", "CaCO₃ → Ca(OH)₂", "CaCO₃ + HCl → CaCl₂ + CO₂ + H₂O"],
    correctIndex: 0,
    exp: "Termikus bomlás: mészkőből (CaCO₃) égetett mész (CaO) és CO₂ lesz." },

  { q: "Melyik a helyes egyenlet magnézium és sósav reakciójára?",
    options: ["Mg + 2 HCl → MgCl₂ + H₂", "Mg + HCl → MgH + Cl", "Mg + HCl → MgCl + H", "Mg + 2 HCl → MgCl + H₂"],
    correctIndex: 0,
    exp: "Fém + sav → só + hidrogén gáz." },

  { q: "A kén-dioxid vízben oldódva…",
    options: ["salétromos savat ad", "kénsavat ad", "kénessavat ad", "sót képez csak"],
    correctIndex: 2,
    exp: "SO₂ + H₂O ⇌ H₂SO₃ (kénessav)." },

  { q: "Válaszd ki a helyesen kiegyenlített egyenletet!",
    options: ["2 KClO₃ → 2 KCl + 3 O₂", "KClO₃ → KCl + O₂", "KClO₃ → K + Cl + 3 O₂", "2 KClO₃ → K₂Cl₂ + 3 O"],
    correctIndex: 0,
    exp: "Klorátok bomlásakor oxigén fejlődik; atomok száma mindkét oldalon egyezik." },

  { q: "Szén-monoxid oxidációja szén-dioxiddá:",
    options: ["CO + ½ O₂ → CO₂", "CO + O₂ → CO₂ + O", "C + O → CO₂", "CO₂ → CO + ½ O₂"],
    correctIndex: 0,
    exp: "Gyakran 2 CO + O₂ → 2 CO₂ alakban írjuk (egész együtthatók)." },

  { q: "Vas(III)-oxid előállítása vas és oxigén reakciójával:",
    options: ["4 Fe + 3 O₂ → 2 Fe₂O₃", "Fe + O₂ → FeO₂", "Fe + O → FeO", "2 Fe + O₂ → Fe₂O"],
    correctIndex: 0,
    exp: "Kiegyenlítve: 4:3:2 arányban ad teljes számokat." },

  { q: "Réz(II)-hidroxid hevítésekor:",
    options: ["Cu(OH)₂ → CuO + H₂O", "Cu(OH)₂ → Cu + H₂O₂", "Cu(OH)₂ → Cu(OH)₃", "Cu(OH)₂ + HCl → CuCl₂ + H₂O + H₂"],
    correctIndex: 0,
    exp: "Bázisok hevítéskor gyakran bomlanak: fém-oxid + víz." },

  { q: "Kalcium-oxid és víz reakciója:",
    options: ["CaO + H₂O → Ca(OH)₂", "CaO + H₂O → Ca + H₂O₂", "CaO + H₂O → CaO₂ + H₂", "CaO + H₂O → Ca + O₂ + H₂"],
    correctIndex: 0,
    exp: "Oltott mész keletkezik – exoterm folyamat." },

  { q: "Melyik csapadékképződési reakció?",
    options: ["AgNO₃ + NaCl → AgCl↓ + NaNO₃", "NaCl + KBr → KCl + NaBr", "H₂ + O₂ → H₂O", "CO₂ + H₂O → H₂CO₃"],
    correctIndex: 0,
    exp: "Az AgCl vízben rosszul oldódik → fehér csapadék." },

  { q: "Szén égésekor keletkezhet:",
    options: ["csak CO₂", "CO₂ vagy CO, körülményektől függően", "csak CO", "csak korom"],
    correctIndex: 1,
    exp: "Tökéletes égés: CO₂; oxigénhiány: CO." },

  { q: "Az ammónium-klorid bomlása hevítéskor (szublimációs jelleg):",
    options: ["NH₄Cl → NH₃ + HCl", "NH₄Cl → N₂ + H₂ + Cl₂", "NH₄Cl → NH₄⁺ + Cl⁻ (gáz)", "NH₄Cl → NH₂Cl + H₂"],
    correctIndex: 0,
    exp: "Szétválik ammóniára és sósavra (gázkeverék)." },

  { q: "Melyik egyenlet írja le a mészvíz zavarosodását CO₂ hatására?",
    options: ["Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O", "CaO + CO₂ → CaCO₃↓", "CaCO₃ → CaO + CO₂", "CO₂ + H₂O → H₂CO₃"],
    correctIndex: 0,
    exp: "Fehér CaCO₃-csapadék keletkezik a vízben oldott Ca(OH)₂-ből." },

  { q: "Válaszd ki a helyes oxidációs szám változást a reakcióban: 2 Mg + O₂ → 2 MgO!",
    options: ["Mg: 0 → +2, O: 0 → –2", "Mg: +2 → 0, O: –2 → 0", "Mg: 0 → –2, O: 0 → +2", "Mg: +1 → +2, O: –1 → –2"],
    correctIndex: 0,
    exp: "Magnézium oxidálódik (+2), oxigén redukálódik (–2)." },

  { q: "Az alábbiak közül melyik a helyesen kiegyenlített semlegesítés?",
    options: ["H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O", "H₂SO₄ + NaOH → Na₂SO₄ + H₂O", "H₂SO₄ + NaOH → NaHSO₄ + H₂O (mindig)", "2 H₂SO₄ + NaOH → Na₂SO₄ + H₂O"],
    correctIndex: 0,
    exp: "Két bázis egység kell a kétprotonos savhoz: 1 szulfát + 2 víz keletkezik." },
];
/* ─────────────────────────────────────────────
   IX: LABORBIZTONSÁG ÉS PIKTOGRAMOK (20 kérdés)
───────────────────────────────────────────── */

export const bank_laborbiztonsag_piktogramok: QA[] = [
  { q: "A laborban a legfontosabb szabály:",
    options: ["egyedül dolgozzunk", "soha ne használjunk védőeszközt", "utasítás nélkül semmit ne csináljunk", "mindent szagoljunk meg közvetlenül"],
    correctIndex: 2,
    exp: "Mindig csak tanári/oktatói felügyelettel és utasítás szerint dolgozunk." },

  { q: "A védőszemüveg célja:",
    options: ["a szagok csökkentése", "a szem védelme a fröccsenő anyagoktól", "dísz", "a hallás védelme"],
    correctIndex: 1,
    exp: "A kémiai fröccsenések és gázok elleni alapvédelem." },

  { q: "A piktogram, amelyen láng látható, azt jelzi:",
    options: ["mérgező anyag", "korrózív anyag", "tűzveszélyes anyag", "oxidáló gáz"],
    correctIndex: 2,
    exp: "A láng szimbólum tűzveszélyes vagy gyúlékony anyagot jelöl." },

  { q: "A koponya és keresztcsont piktogram:",
    options: ["ártalmatlan", "irritáló anyag", "mérgező, halálos lehet", "nyomás alatt lévő gáz"],
    correctIndex: 2,
    exp: "A legsúlyosabb toxikus anyagokat jelzi." },

  { q: "A felkiáltójel piktogram jelentése:",
    options: ["maró hatású", "irritáló, enyhén veszélyes", "radioaktív", "robbanásveszélyes"],
    correctIndex: 1,
    exp: "Figyelmeztet enyhén káros, irritáló vagy ártalmas anyagokra." },

  { q: "A robbanást ábrázoló piktogram jelentése:",
    options: ["oxidáló", "robbanásveszélyes anyag", "korrózív", "biológiai veszély"],
    correctIndex: 1,
    exp: "Ez a jel robbanóanyagokat és instabil vegyületeket jelöl." },

  { q: "A fekete láng fehér háttéren (O betűvel) jelöli:",
    options: ["tűzveszélyes anyag", "oxidáló anyag", "radioaktív anyag", "nyomás alatt lévő gáz"],
    correctIndex: 1,
    exp: "Az oxidálószer fokozza az égést, önmagában nem feltétlen éghető." },

  { q: "A maró anyag piktogramja két kézre/ fémre cseppenő folyadékot mutat, jelentése:",
    options: ["tűzveszélyes", "mérgező", "korrózív (maró hatású)", "biohazard"],
    correctIndex: 2,
    exp: "Erősen maró savak és lúgok jelzése (pl. HCl, NaOH tömény oldatok)." },

  { q: "A nyomás alatt lévő gáz piktogramja:",
    options: ["palack alakú szimbólum", "láng", "robbanás", "felkiáltójel"],
    correctIndex: 0,
    exp: "Palack szimbólum: sűrített vagy cseppfolyósított gáz." },

  { q: "A biohazard jel mit jelent?",
    options: ["biológiai veszély", "kémiai égésveszély", "elektromos veszély", "ionizáló sugárzás"],
    correctIndex: 0,
    exp: "Fertőző mikroorganizmusok, biológiai kockázat." },

  { q: "A radioaktív anyag piktogramja:",
    options: ["háromágú sárga–fekete szimbólum", "piros láng", "kék csepp", "zöld levél"],
    correctIndex: 0,
    exp: "A sugárveszély szimbóluma: háromágú fekete jel sárga háttéren." },

  { q: "Mi a teendő, ha vegyszer a bőrre kerül?",
    options: ["Letörölni ronggyal", "Azonnal bő vízzel leöblíteni", "Bekenni alkohollal", "Szagolni, hogy mi volt"],
    correctIndex: 1,
    exp: "Azonnali leöblítés vízzel, majd szükség esetén orvosi ellátás." },

  { q: "Mi a helyes eljárás, ha savas oldatot kell hígítani?",
    options: ["Vizet öntsünk a savhoz", "Savat öntsünk a vízhez lassan", "Mindegy, hogyan", "Egyszerre öntsük össze"],
    correctIndex: 1,
    exp: "Mindig a savat a vízhez öntjük – ellenkező esetben fröccsenés történhet." },

  { q: "A tűzoltó készülék osztályai (A, B, C…) mit jelölnek?",
    options: ["a készülék színét", "az oltóanyag típusát és a tűz fajtáját", "a gyártási országot", "a hőmérsékletet"],
    correctIndex: 1,
    exp: "A – szilárd, B – folyadék, C – gáz, D – fém, F – zsiradék." },

  { q: "Mit TILOS tenni elektromos tüzek esetén?",
    options: ["áramtalanítani", "vízzel oltani", "porral oltót használni", "riasztani"],
    correctIndex: 1,
    exp: "Víz vezető → áramütés veszélye." },

  { q: "A laborban soha ne…",
    options: ["együnk és igyunk", "viseljünk zárt cipőt", "legyen felkötve a hajunk", "olvassuk el a címkét"],
    correctIndex: 0,
    exp: "Evés–ivás szigorúan tilos a laborban." },

  { q: "A savas és lúgos oldatokkal való munka során szükséges:",
    options: ["védőszemüveg, kesztyű", "csak köpeny", "csak szemüveg", "semmi különös"],
    correctIndex: 0,
    exp: "Mindig köpeny, szemüveg, kesztyű." },

  { q: "A „veszélyes a környezetre” piktogram mit ábrázol?",
    options: ["halott fa és hal", "láng", "biohazard", "robbanás"],
    correctIndex: 0,
    exp: "A hal és fa szimbólum környezeti veszélyt jelöl (pl. ne kerüljön természetbe)." },

  { q: "A vegyszeres üvegeken lévő jelölés C jelentése régebben:",
    options: ["Corrosive (maró)", "Combustible (éghető)", "Compressed (nyomás alatt)", "Critical (veszélyes)"],
    correctIndex: 0,
    exp: "Régi rövidítés a maró anyagokra (C = corrosive)." },

  { q: "A kémiai veszélyt jelző piktogramokat ma melyik rendszer egységesíti?",
    options: ["UNESCO", "GHS (Globally Harmonized System)", "WHO", "WTO"],
    correctIndex: 1,
    exp: "A GHS (Globally Harmonized System) a vegyi anyagok világszintű jelölési rendszere." },
];

/* ─────────────────────────────────────────────
   SZEKCIÓ-OBJEKTUMOK
───────────────────────────────────────────── */
export const section_laborbiztonsag = {
  id: "laborbiztonsag_piktogramok",
  title: "Laborbiztonság és piktogramok",
  bank: bank_laborbiztonsag_piktogramok,
};


export const section_reakcioegyenletek = {
  id: "reakcioegyenletek",
  title: "Reakcióegyenletek – gyakorló",
  bank: bank_reakcioegyenletek_gyakorlo,
};

export const section_femek_korrozio = {
  id: "femek_korrozio",
  title: "Fémek, nemfémek, ötvözetek, korrózió",
  bank: bank_femek_korrózio,
};

export const section_kornyezeti_kemia = {
  id: "kornyezeti_kemia_alapok",
  title: "Környezet kémiai anyagai és védelem",
  bank: bank_kornyezeti_kemia,
};



export const section_anyag_halmazallapot = {
  id: "anyag_halmazallapot",
  title: "Anyagok tulajdonságai és halmazállapotok",
  bank: bank_anyag_halmazallapot,
};

export const section_keverekek_szetevalasztasa = {
  id: "keverekek_szetevalasztasa",
  title: "Keverékek szétválasztása",
  bank: bank_keverekek_szetevalasztasa,
};

export const section_oldatok_koncentracio = {
  id: "oldatok_koncentracio",
  title: "Oldatok, oldhatóság, koncentráció",
  bank: bank_oldatok_koncentracio,
};

export const section_kemiai_reakciok_alap = {
  id: "kemiai_reakciok_alap",
  title: "Kémiai reakciók alapjai",
  bank: bank_kemiai_reakciok_alap,
};

export const section_atom_periodusos = {
  id: "atom_periodusos",
  title: "Atom és periódusos rendszer",
  bank: bank_atom_periodusos,
};

export const section_kotesek_anyagok = {
  id: "kotesek_anyagok",
  title: "Kötések és anyagok",
  bank: bank_kotesek_anyagok,
};

export const section_savbazis_sok_alap = {
  id: "savbazis_sok_alap",
  title: "Savak, bázisok, sók – alapok",
  bank: bank_savbazis_sok_alap,
};
export const section_kornyezeti_kemia_viz_levego = {
  id: "kornyezeti_kemia_viz_levego",
  title: "Víz, levegő, hulladék – gyakorlat",
  bank: bank_kornyezeti_kemia_viz_levego,
};

/* ─────────────────────────────────────────────
   FŐTÉMÁK (TOPICOK)
───────────────────────────────────────────── */
export const topic_laborbiztonsag = {
  id: "kemia_8_laborbiztonsag",
  title: "Kémia 8 — Laborbiztonság és piktogramok",
  sections: [section_laborbiztonsag],
};

export const topic_anyag_es_keverekek = {
  id: "kemia_8_anyag_es_keverekek",
  title: "Kémia 8 — Anyagok, keverékek, oldatok",
  sections: [
    section_anyag_halmazallapot,
    section_keverekek_szetevalasztasa,
    section_oldatok_koncentracio,
  ],
};

export const topic_reakciok = {
  id: "kemia_8_kemiai_reakciok",
  title: "Kémia 8 — Kémiai reakciók",
  sections: [section_kemiai_reakciok_alap],
};

export const topic_atom_periodus = {
  id: "kemia_8_atom_periodus",
  title: "Kémia 8 — Atom, periódusos rendszer",
  sections: [section_atom_periodusos],
};

export const topic_kotesek = {
  id: "kemia_8_kotesek",
  title: "Kémia 8 — Kötések és anyagok",
  sections: [section_kotesek_anyagok],
};

export const topic_savbazis = {
  id: "kemia_8_savbazis_sok",
  title: "Kémia 8 — Savak, bázisok, sók",
  sections: [section_savbazis_sok_alap],
};


// 2) Anyagszerkezet és kötések  → 2 alfejezet (összefogva az eddig külön témákat)
export const topic_anyagszerkezet_es_kotesek = {
  id: "kemia_8_anyagszerkezet_kotesek",
  title: "Kémia 8 — Anyagszerkezet és kötések",
  sections: [
    section_atom_periodusos,   // Atom és periódusos rendszer
    section_kotesek_anyagok,   // Kötések és anyagok
    section_femek_korrozio,    // ⇦ ÚJ: Fémek, nemfémek, ötvözetek, korrózió
  ],
};


// 3) Reakciók, savak-bázisok  → 2 alfejezet (összefogva)
export const topic_reakciok_es_savbazis = {
  id: "kemia_8_reakciok_es_savbazis",
  title: "Kémia 8 — Reakciók, savak és bázisok",
  sections: [
    section_kemiai_reakciok_alap, // Kémiai reakciók alapjai
    section_savbazis_sok_alap,    // Savak, bázisok, sók – alapok
    section_reakcioegyenletek,    // ⇦ ÚJ: Reakcióegyenletek – gyakorló
  ],
};

export const topic_kornyezeti_kemia = {
  id: "kemia_8_kornyezeti_kemia",
  title: "Kémia 8 — Környezet kémiai anyagai",
  sections: [
    section_kornyezeti_kemia,            // (az első alfejezet, ami már nálad megvan)
    section_kornyezeti_kemia_viz_levego, // ÚJ alfejezet (20 kérdés)
  ],
};


/* ─────────────────────────────────────────────
   TOPIC_FA
───────────────────────────────────────────── */

export const TOPIC_TREE = [
  topic_anyag_es_keverekek,
  topic_reakciok,
  topic_atom_periodus,
  topic_kotesek,
  topic_savbazis,
  topic_kornyezeti_kemia,
  topic_laborbiztonsag,
  
];
export function findTopicById(id: string, tree: Topic[] = TOPIC_TREE): Topic | undefined {
  return tree.find(t => t.id === id);
}

export function countQuestionsOfTopic(topicId: string, tree: Topic[] = TOPIC_TREE): number {
  const t = findTopicById(topicId, tree);
  if (!t) return 0;
  return t.sections.reduce((sum, s) => sum + (s.bank?.length ?? 0), 0);
}
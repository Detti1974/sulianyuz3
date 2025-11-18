// app/nyelvtan/bank.ts
// NYELVTAN – Témakör 1: Szófajok (8. osztály)
// Struktúra a meglévő rendszerhez igazítva: TOPIC_TREE -> topic.sections[].bank

import type { Question } from "../../lib/types";

type Section = {
  id: string;
  title: string;
  bank: Question[];
};

type Topic = {
  id: string;
  title: string;
  sections: Section[];
};
export type Q = {
  id?: string;
  q: string;
  options: string[];
  correctIndex: number;
  exp?: string;  // magyarázat
  hu?: string;   // ha kell magyar kieg.
};

export type Subtopic = {
  id: string;
  title: string;
  learnKey: string;        // tananyag szekció kulcsa
  bank: Q[];               // 20 kérdés
};



// ---------- ALTÉMA 1: Szófajok I. – Alapok (20 kérdés) ----------
const bank_szofajok_alap: Question[] = [
  {
    q: "Melyik szó főnév?",
    options: ["szép", "asztal", "holnap", "gyorsan"],
    correctIndex: 1,
    exp: "A főnév személyt, tárgyat, elvont fogalmat jelöl. Itt: „asztal”.",
  },
  {
    q: "Melyik ige?",
    options: ["fut", "piros", "asztal", "alatt"],
    correctIndex: 0,
    exp: "Az ige cselekvést/történést létezést fejez ki. Itt: „fut”.",
  },
  {
    q: "Válaszd ki a melléknevet!",
    options: ["szépen", "szép", "szépség", "szépek"],
    correctIndex: 1,
    exp: "A melléknév tulajdonságot jelöl („szép”). A „szépen” határozószó, a „szépség” főnév.",
  },
  {
    q: "Melyik határozószó?",
    options: ["holnap", "szék", "olvas", "piros"],
    correctIndex: 0,
    exp: "Időhatározószó: „holnap”.",
  },
  {
    q: "Melyik névelő?",
    options: ["egy", "én", "szép", "kékül"],
    correctIndex: 0,
    exp: "Névelők: határozott (a/az) és határozatlan (egy).",
  },
  {
    q: "Melyik névmás?",
    options: ["ez", "asztal", "futás", "kéken"],
    correctIndex: 0,
    exp: "Névmás: más szófajok helyett áll (mutató névmás: „ez”).",
  },
  {
    q: "Válaszd ki a számnevet!",
    options: ["kettő", "kettős", "kettőz", "ketté"],
    correctIndex: 0,
    exp: "Számnév: „kettő” (tőszámnév). A „kettős” melléknév.",
  },
  {
    q: "Melyik kötőszó?",
    options: ["és", "én", "ő", "ők"],
    correctIndex: 0,
    exp: "Kötőszók kapcsolnak: „és”, „de”, „vagy”, stb.",
  },
  {
    q: "Melyik igekötő?",
    options: ["meg-", "megint", "megye", "megintem"],
    correctIndex: 0,
    exp: "Igekötő: „meg-”, „ki-”, „be-”, stb. Az ige jelentését módosítja.",
  },
  {
    q: "Melyik melléknévi igenév?",
    options: ["olvasott", "olvas", "olvasás", "olvasóban"],
    correctIndex: 0,
    exp: "Melléknévi igenév: -ott/-ett/-ött; -ó/-ő (folyamatos); -andó/-endő.",
  },
  {
    q: "Melyik határozói igenév?",
    options: ["olvasva", "olvasó", "olvasás", "olvasat"],
    correctIndex: 0,
    exp: "Határozói igenév: -va/-ve (pl. „olvasva”).",
  },
  {
    q: "Melyik főnévi igenév (infinitív)?",
    options: ["olvasni", "olvastam", "olvasott", "olvasva"],
    correctIndex: 0,
    exp: "Főnévi igenév: -ni alak („olvasni”).",
  },
  {
    q: "Melyik indulatszó?",
    options: ["hopp", "hoppan", "hobbi", "hoppon"],
    correctIndex: 0,
    exp: "Indulatszók érzelmet/hangutánzást fejeznek ki: „hopp”, „jaj”, „hej”.",
  },
  {
    q: "Melyik viszonyszó?",
    options: ["alatt", "asztal", "olvas", "pirosan"],
    correctIndex: 0,
    exp: "Viszonyszók: névutók, segédszók, módosítószók (itt: „alatt” – névutó).",
  },
  {
    q: "Melyik képzett főnév?",
    options: ["olvasó", "olvas", "olvass", "olvastok"],
    correctIndex: 0,
    exp: "„olvas+ó” lehet személyt jelölő főnév („az olvasó”).",
  },
  {
    q: "Melyik fokozott melléknév?",
    options: ["szebb", "szép", "szépek", "szépen"],
    correctIndex: 0,
    exp: "Fokozás: szép – szebb – legszebb.",
  },
  {
    q: "Mi a szófaja: „mi”?",
    options: ["kérdő névmás", "mutató névmás", "melléknév", "határozószó"],
    correctIndex: 0,
    exp: "„mi” – kérdő névmás (ki? mi?).",
  },
  {
    q: "Mi a szófaja: „néhány”?",
    options: ["határozatlan számnév", "főnév", "ige", "névelő"],
    correctIndex: 0,
    exp: "„néhány” – határozatlan számnév.",
  },
  {
    q: "Mi a szófaja: „azonban”?",
    options: ["kötőszó", "határozószó", "névmás", "igekötő"],
    correctIndex: 0,
    exp: "„azonban” – ellentétes kötőszó.",
  },
  {
    q: "Mi a szófaja: „aligha”?",
    options: ["módosítószó/határozószó", "névelő", "névmás", "indulatszó"],
    correctIndex: 0,
    exp: "„aligha” – valószínűséget árnyaló módosítószó/határozószó.",
  },
];
export const section_szofajok_alap = {
id: "szofajok_alap", 
title: "Szófajok I. – Alapok", 
bank: bank_szofajok_alap,
};
// ---------- ALTÉMA 2: Szófajok II. – Névmások és számnevek (20 kérdés) ----------
const bank_szofajok_nevmas_szamnev: Question[] = [
  {
    q: "Milyen típusú névmás a „én, te, ő”?",
    options: ["személyes", "mutató", "kérdő", "határozatlan"],
    correctIndex: 0,
    exp: "„én, te, ő” – személyes névmások.",
  },
  {
    q: "Milyen névmás a „ez, az, eme”?",
    options: ["mutató", "birtokos", "visszaható", "vonatkozó"],
    correctIndex: 0,
    exp: "Mutató névmások (rámutatnak valamire).",
  },
  {
    q: "Milyen névmás a „ki, mi, melyik”?",
    options: ["kérdő", "határozatlan", "személyes", "kölcsönös"],
    correctIndex: 0,
    exp: "Kérdő névmások (kérdést fejeznek ki).",
  },
  {
    q: "Milyen névmás a „valaki, valami, néhány”?",
    options: ["határozatlan", "személyes", "mutató", "visszaható"],
    correctIndex: 0,
    exp: "Határozatlan névmások (nem pontosítanak teljesen).",
  },
  {
    q: "Milyen névmás a „aki, ami, amely”?",
    options: ["vonatkozó", "kérdő", "mutató", "birtokos"],
    correctIndex: 0,
    exp: "Vonatkozó névmások kötőelemként is működhetnek mellékmondatban.",
  },
  {
    q: "Milyen névmás a „magam, magad, magát”?",
    options: ["visszaható", "birtokos", "személyes", "kölcsönös"],
    correctIndex: 0,
    exp: "Visszaható névmás: a cselekvőre utal vissza.",
  },
  {
    q: "Milyen névmás az „egymás”?",
    options: ["kölcsönös", "mutató", "kérdő", "határozatlan"],
    correctIndex: 0,
    exp: "Kölcsönös névmás: a cselekvők egymásra irányuló viszonyát fejezi ki.",
  },
  {
    q: "„az enyém, a tiéd, az övé” – milyen névmás?",
    options: ["birtokos", "személyes", "mutató", "visszaható"],
    correctIndex: 0,
    exp: "Birtokos névmások.",
  },
  {
    q: "Melyik a tőszámnév?",
    options: ["kettő", "második", "ketted", "kétszeres"],
    correctIndex: 0,
    exp: "Tőszámnév: kettő. A „második” sorszámnév.",
  },
  {
    q: "Melyik a sorszámnév?",
    options: ["ötödik", "öt", "ötöd", "ötféle"],
    correctIndex: 0,
    exp: "Sorszámnév: ötödik.",
  },
  {
    q: "Melyik a törtszámnév?",
    options: ["háromnegyed", "három", "negyedik", "háromszori"],
    correctIndex: 0,
    exp: "Törtszámnév: „háromnegyed”.",
  },
  {
    q: "Melyik határozatlan számnév?",
    options: ["néhány", "hat", "hatodik", "hatod",
    ],
    correctIndex: 0,
    exp: "„néhány” – határozatlan mennyiséget jelöl.",
  },
  {
    q: "„mennyi” szófaja?",
    options: ["kérdő névmás/számnév", "mutató névmás", "birtokos névmás", "melléknév"],
    correctIndex: 0,
    exp: "Kérdő szó: gyakran számnévi szerepben (mennyi?).",
  },
  {
    q: "„ennyi, annyi” szófaja?",
    options: ["mutató számnév", "mutató névmás (főnévi)", "kérdő névmás", "határozószó"],
    correctIndex: 0,
    exp: "Mutató számnév: mennyiséget jelez, rámutatással.",
  },
  {
    q: "„melyik” szófaja?",
    options: ["kérdő névmás", "mutató névmás", "személyes névmás", "határozószó"],
    correctIndex: 0,
    exp: "Kérdő névmás (választó jelleg).",
  },
  {
    q: "„valamennyi” szófaja?",
    options: ["határozatlan számnév", "tőszámnév", "sorszámnév", "névutó"],
    correctIndex: 0,
    exp: "Határozatlan számnév (mennyi? nem pontos).",
  },
  {
    q: "„semennyi” szófaja?",
    options: ["tagadó határozatlan számnév", "kérdő névmás", "mutató névmás", "módosítószó"],
    correctIndex: 0,
    exp: "Tagadó határozatlan számnév.",
  },
  {
    q: "„hányadik” szófaja?",
    options: ["kérdő sorszámnév", "tőszámnév", "határozószó", "mutató számnév"],
    correctIndex: 0,
    exp: "Kérdő sorszámnév.",
  },
  {
    q: "„valaki” – melyik névmás?",
    options: ["határozatlan", "vonatkozó", "kölcsönös", "visszaható"],
    correctIndex: 0,
    exp: "Határozatlan névmás.",
  },
  {
    q: "„aki” – melyik névmás?",
    options: ["vonatkozó", "kérdő", "mutató", "birtokos"],
    correctIndex: 0,
    exp: "Vonatkozó névmás (alárendelő összetett mondat kötőszava is lehet).",
  },
];
export const section_szofajok_nevmas_szamnev = {
  id: "szofajok_nevmas_szamnev", 
  title: "Szófajok II. – Névmások és számnevek", 
  bank: bank_szofajok_nevmas_szamnev
};
// ---------- ALTÉMA 3: Szófajok III. – Viszonyszók (névelők, kötőszók, igekötők, indulatszók, módosítók) (20 kérdés) ----------
const bank_szofajok_viszonyszok: Question[] = [
  {
    q: "Melyik határozott névelő?",
    options: ["a/az", "egy", "némely", "némelyik"],
    correctIndex: 0,
    exp: "Határozott névelő: a/az. Határozatlan: egy.",
  },
  {
    q: "Melyik kötőszó ellentétes kapcsolatot fejez ki?",
    options: ["azonban", "és", "vagy", "meg"],
    correctIndex: 0,
    exp: "Ellentétes kötőszók: azonban, de, viszont…",
  },
  {
    q: "Melyik okhatározói kötőszó?",
    options: ["mert", "hogy", "hanem", "ha"],
    correctIndex: 0,
    exp: "Okhatározói: mert, mivel.",
  },
  {
    q: "Melyik feltételes kötőszó?",
    options: ["ha", "és", "vagy", "hiszen"],
    correctIndex: 0,
    exp: "Feltételes: ha, amennyiben.",
  },
  {
    q: "Melyik igekötő?",
    options: ["ki-", "kint", "kinn", "kisebb"],
    correctIndex: 0,
    exp: "Igekötők: ki-, be-, meg-, vissza-, fel-, le- stb.",
  },
  {
    q: "Melyik indulatszó?",
    options: ["jaj", "jajgat", "jajszó", "jajjá"],
    correctIndex: 0,
    exp: "Indulatszók: jaj, hű, hej, hopp…",
  },
  {
    q: "Melyik módosítószó (bizonytalanságot, fokot fejez ki)?",
    options: ["talán", "asztal", "író", "ír"],
    correctIndex: 0,
    exp: "Módosítószók: talán, bizony, ugyan, aligha, éppen…",
  },
  {
    q: "Melyik a helyes igekötős ige?",
    options: ["megírom", "meg írom", "meg- írom", "meg írok"],
    correctIndex: 0,
    exp: "Igekötős ige: „megírom” – egybeírjuk a személyragos alakban.",
  },
  {
    q: "„Szeretném, ha eljönnél.” – melyik a kötőszó?",
    options: ["ha", "szeretném", "eljönnél", "—"],
    correctIndex: 0,
    exp: "Alárendelő kötőszó: „ha”.",
  },
  {
    q: "„Sok, de nem elég.” – milyen kötőszó a „de”?",
    options: ["ellentétes", "okhatározói", "következményes", "feltételes"],
    correctIndex: 0,
    exp: "„de” – ellentétes kapcsolatot jelöl.",
  },
  {
    q: "„Ki-be járkál.” – a „be” itt micsoda?",
    options: ["igekötő", "határozószó", "névutó", "névelő"],
    correctIndex: 0,
    exp: "Igekötő: ki-be (összetett igekötőkapcsolat).",
  },
  {
    q: "„a ház előtt” – az „előtt” micsoda?",
    options: ["névutó", "névelő", "határozószó", "kötőszó"],
    correctIndex: 0,
    exp: "Névutó (viszonyszó).",
  },
  {
    q: "„Hurrá! Nyertünk.” – „Hurrá!” micsoda?",
    options: ["indulatszó", "módosítószó", "kötőszó", "névelő"],
    correctIndex: 0,
    exp: "Indulatszó (érzelemkitörés).",
  },
  {
    q: "„Bizony szép.” – „Bizony” micsoda?",
    options: ["módosítószó", "névmás", "névelő", "határozószó"],
    correctIndex: 0,
    exp: "Módosítószó (állásfoglalást erősít).",
  },
  {
    q: "„Ha esik, nem megyünk.” – „Ha” micsoda?",
    options: ["feltételes kötőszó", "következményes kötőszó", "ellentétes kötőszó", "névutó"],
    correctIndex: 0,
    exp: "Feltételt fejez ki: ha.",
  },
  {
    q: "„Ezért nem jött.” – „Ezért” micsoda?",
    options: ["következményes kötőszó/módosító elem", "névelő", "névmás", "indulatszó"],
    correctIndex: 0,
    exp: "Következményt kifejező kötőelem/módosítószóként funkcionál.",
  },
  {
    q: "„Meg sem mozdult.” – a „sem” micsoda?",
    options: ["módosítószó/nyomatékosító", "névelő", "névmás", "névutó"],
    correctIndex: 0,
    exp: "Tagadás-nyomatékosító (módosítószó).",
  },
  {
    q: "„Még szebb lett.” – „Még” micsoda?",
    options: ["módosítószó (fokozás)", "kötőszó", "névelő", "határozószó"],
    correctIndex: 0,
    exp: "Fokozó módosítószó.",
  },
  {
    q: "„Talán eljön.” – „Talán” micsoda?",
    options: ["módosítószó (bizonytalanság)", "kötőszó", "névelő", "névmás"],
    correctIndex: 0,
    exp: "Bizonytalanságot kifejező módosítószó.",
  },
  {
    q: "„Dehogy!” – „Dehogy” micsoda?",
    options: ["indulatszó/módosítószó", "névelő", "névutó", "kötőszó"],
    correctIndex: 0,
    exp: "Erős tagadás: indulatszó/módosító elem.",
  },
];
export const section_szofajok_viszonyszok = {
 id: "szofajok_viszonyszok", 
 title: "Szófajok III. – Viszonyszók", 
 bank: bank_szofajok_viszonyszok,
};
// ---------- TÉMA: Szófajok – a három altémával ----------

// ---------- TÉMA 2: Mondatelemzés és mondatrészek ----------

const bank_mondatelemzes_alany_allitmany: Question[] = [
  {
    q: "Mi az alany a mondatban? „A kutya ugat.”",
    options: ["A kutya", "ugat", "A kutya ugat", "—"],
    correctIndex: 0,
    exp: "Az alany az, akiről vagy amiről az állítmány állít valamit. Itt: „A kutya”.",
  },
  {
    q: "Mi az állítmány a mondatban? „A macska alszik.”",
    options: ["A macska", "alszik", "A macska alszik", "a"],
    correctIndex: 1,
    exp: "Az állítmány kifejezi a cselekvést, történést vagy létezést: „alszik”.",
  },
  {
    q: "Milyen típusú állítmány: „Péter orvos.”",
    options: ["névszói", "igei", "névszói-igei", "összetett"],
    correctIndex: 0,
    exp: "„orvos” – névszói állítmány, mert nem ige fejezi ki a létet, hanem névszó.",
  },
  {
    q: "Milyen típusú állítmány: „Péter orvos lett.”",
    options: ["névszói-igei", "igei", "névszói", "összetett"],
    correctIndex: 0,
    exp: "A 'lett' segédige + névszó = névszói-igei állítmány.",
  },
  {
    q: "Milyen típusú állítmány: „Péter fut.”",
    options: ["igei", "névszói", "névszói-igei", "—"],
    correctIndex: 0,
    exp: "„fut” – ige, tehát igei állítmány.",
  },
  {
    q: "Milyen fajta alany a „Gyerekek játszanak.” mondatban?",
    options: ["általános", "határozott", "többes számú határozatlan", "egyéni"],
    correctIndex: 1,
    exp: "„Gyerekek” – többes számú, de konkrét csoport → határozott alany.",
  },
  {
    q: "Mi az állítmány szófaja ebben a mondatban: „Az ég kék.”",
    options: ["melléknév", "ige", "főnév", "határozószó"],
    correctIndex: 0,
    exp: "„kék” melléknév → névszói állítmány.",
  },
  {
    q: "Melyik mondatban van névszói-igei állítmány?",
    options: ["A fiú okos volt.", "A fiú fut.", "Az ablak nyitva.", "Sötétedik."],
    correctIndex: 0,
    exp: "„okos volt” → névszói-igei állítmány.",
  },
  {
    q: "Mi az alany az „Elment a postás.” mondatban?",
    options: ["a postás", "elment", "—", "a"],
    correctIndex: 0,
    exp: "Az alany: aki cselekszik → „a postás”.",
  },
  {
    q: "Mi az állítmány az „Elment a postás.” mondatban?",
    options: ["elment", "a postás", "ment", "postás"],
    correctIndex: 0,
    exp: "Az állítmány: „elment” (cselekvést fejez ki).",
  },
  {
    q: "Melyik mondatban van alany és állítmány is?",
    options: ["Fúj a szél.", "Esik.", "Hideg van.", "Megjött."],
    correctIndex: 0,
    exp: "„Fúj a szél.” → alany: szél, állítmány: fúj.",
  },
  {
    q: "Mi az alany az „Fáj a fejem.” mondatban?",
    options: ["a fejem", "fáj", "fejem", "a"],
    correctIndex: 0,
    exp: "Az alany: „a fejem”. Az állítmány: „fáj”.",
  },
  {
    q: "Milyen az alany száma? „A madarak csicseregnek.”",
    options: ["többes szám", "egyes szám", "határozatlan", "általános"],
    correctIndex: 0,
    exp: "„madarak” – többes számú alany.",
  },
  {
    q: "Milyen az állítmány száma az előző mondatban?",
    options: ["többes szám", "egyes szám", "—", "nem határozható meg"],
    correctIndex: 0,
    exp: "Az állítmány az alanyhoz egyeztetve többes számban áll: csicseregnek.",
  },
  {
    q: "Mi az alany az „Elromlott a gép.” mondatban?",
    options: ["a gép", "elromlott", "gép", "—"],
    correctIndex: 0,
    exp: "Az alany: „a gép”, az állítmány: „elromlott”.",
  },
  {
    q: "Mi az állítmány a „Gyerekek lesznek orvosok.” mondatban?",
    options: ["lesznek", "gyerekek", "orvosok", "—"],
    correctIndex: 0,
    exp: "„lesznek” – igei rész (névszói-igei állítmány).",
  },
  {
    q: "Mi a mondat állítmánya: „A könyv érdekes.”",
    options: ["érdekes", "könyv", "érdeklő", "olvasható"],
    correctIndex: 0,
    exp: "„érdekes” melléknév → névszói állítmány.",
  },
  {
    q: "Melyik mondatban hiányzik az alany?",
    options: ["Esik.", "A kutya ugat.", "A fiú olvas.", "A ház áll."],
    correctIndex: 0,
    exp: "„Esik.” → alany nélküli (időjárás-típusú) mondat.",
  },
  {
    q: "Melyik mondatban van összetett állítmány?",
    options: ["Elkezdett futni.", "Fut.", "A fiú orvos.", "A ház kék."],
    correctIndex: 0,
    exp: "„Elkezdett futni.” → ige + főnévi igenév → összetett állítmány.",
  },
  {
    q: "Mi az állítmány a „Szeretnék pihenni.” mondatban?",
    options: ["Szeretnék pihenni", "Szeretnék", "pihenni", "—"],
    correctIndex: 0,
    exp: "Összetett állítmány: „szeretnék pihenni”.",
  },
];
export const section_mondatelemzes_alany_allitmany = {
  id: "mondatelemzes_alany_allitmany",
  title: "Mondatelemzés I. – Alany és állítmány",
  bank: bank_mondatelemzes_alany_allitmany,
};
// ---------- TÉMA 2 / ALTÉMA 2: Mondatelemzés – Tárgy és határozók (20 kérdés) ----------

export const bank_mondatelemzes_targy_hatarozok: Question[] = [
  {
    q: "Mi a TÁRGY? – „Péter elolvasta a könyvet.”",
    options: ["Péter", "elolvasta", "a könyvet", "—"],
    correctIndex: 2,
    exp: "A tárgy a cselekvés elszenvedője: kit? mit? → „a könyvet”.",
  },
  {
    q: "Mi a RÉSZESEHATÁROZÓ? – „A tanár a DIÁKNAK magyaráz.”",
    options: ["a tanár", "a diáknak", "magyaráz", "—"],
    correctIndex: 1,
    exp: "Részeshatározó: kinek? minek? → „a diáknak”.",
  },
  {
    q: "Melyik a HELYHATÁROZÓ? – „A labda a FŰVÖN gurul.”",
    options: ["a labda", "a fűvön", "gurul", "—"],
    correctIndex: 1,
    exp: "Helyhatározó: hol? hova? honnan? → „a fűvön”.",
  },
  {
    q: "Mi az IDŐHATÁROZÓ? – „HOLNAP korán indulunk.”",
    options: ["holnap", "korán", "indulunk", "—"],
    correctIndex: 0,
    exp: "Időhatározó: mikor? mettől meddig? → „holnap”.",
  },
  {
    q: "Mi a MÓDHATÁROZÓ? – „Csendben dolgoznak.”",
    options: ["Csendben", "dolgoznak", "—", "ők"],
    correctIndex: 0,
    exp: "Módhatározó: hogyan? miként? → „csendben”.",
  },
  {
    q: "Mi az OKHATÁROZÓ? – „FÁRADTSÁG MIATT nem jött.”",
    options: ["fáradtság miatt", "nem jött", "ő", "—"],
    correctIndex: 0,
    exp: "Okhatározó: miért? milyen okból? → „fáradtság miatt”.",
  },
  {
    q: "Mi a CÉLHATÁROZÓ? – „Tanul vizsgára.”",
    options: ["Tanul", "vizsgára", "—", "ő"],
    correctIndex: 1,
    exp: "Célhatározó: mi célból? → „vizsgára”.",
  },
  {
    q: "Mi az ESZKÖZHATÁROZÓ? – „Tollal ír.”",
    options: ["Tollal", "ír", "—", "ő"],
    correctIndex: 0,
    exp: "Eszközhatározó: mivel? → „tollal”.",
  },
  {
    q: "Mi a TÁRHATÁROZÓ (MÉRTÉK)? – „Nagyon fázom.”",
    options: ["Nagyon", "fázom", "—", "én"],
    correctIndex: 0,
    exp: "Fok-mérték határozó: mennyire? milyen mértékben? → „nagyon”.",
  },
  {
    q: "Mi a TÁRSHATÁROZÓ? – „A barátjával ment.”",
    options: ["A barátjával", "ment", "—", "ő"],
    correctIndex: 0,
    exp: "Társhatározó: kivel? → „a barátjával”.",
  },
  {
    q: "Válaszd ki a TÁRGYAT! – „Megnéztük a filmet.”",
    options: ["Megnéztük", "a filmet", "—", "mi"],
    correctIndex: 1,
    exp: "Tárgy: kit? mit? → „a filmet”.",
  },
  {
    q: "Mi az ÁLLAPOTHATÁROZÓ? – „Betegen is dolgozott.”",
    options: ["Betegen", "dolgozott", "is", "—"],
    correctIndex: 0,
    exp: "Állapothatározó: milyen állapotban? → „betegen”.",
  },
  {
    q: "Mi a HATÓKÖR/TEKINTETHATÁROZÓ? – „Ebből a SZEMPONTBÓL helyes.”",
    options: ["ebből", "a szempontból", "ebből a szempontból", "helyes"],
    correctIndex: 2,
    exp: "Tekintethatározó: milyen tekintetben? → „ebből a szempontból”.",
  },
  {
    q: "Mi a FELTÉTELHATÁROZÓ? – „HA esik, otthon maradunk.”",
    options: ["ha esik", "otthon", "maradunk", "—"],
    correctIndex: 0,
    exp: "Feltétel: milyen feltétellel? → „ha esik”.",
  },
  {
    q: "Mi az ENGEDMÉNYHATÁROZÓ? – „BÁR fáradt, tovább tanul.”",
    options: ["bár fáradt", "tovább", "tanul", "—"],
    correctIndex: 0,
    exp: "Engedmény: minek ellenére? → „bár fáradt”.",
  },
  {
    q: "Mi a HElyHATÁROZÓ? – „HazaÉRKEZETT ESTE.”",
    options: ["hazaérkezett", "este", "—", "ő"],
    correctIndex: 1,
    exp: "Itt az időhatározó „este”; a helyhatározó hiányzik. Figyelem: trükkös!",
  },
  {
    q: "Mi a HELYHATÁROZÓ? – „A városból jött.”",
    options: ["A városból", "jött", "—", "ő"],
    correctIndex: 0,
    exp: "Honnan? → „a városból” (helyhatározó – eredet).",
  },
  {
    q: "Mi a TÁRGY? – „Megköszönte a segítséget.”",
    options: ["Megköszönte", "a segítséget", "—", "ő"],
    correctIndex: 1,
    exp: "Tárgy: mit? → „a segítséget”.",
  },
  {
    q: "Mi a RÉSZESEHATÁROZÓ? – „Megköszönte A TANÁRÁNAK a segítséget.”",
    options: ["a tanárának", "a segítséget", "megtköszönte", "—"],
    correctIndex: 0,
    exp: "Kinek? → „a tanárának” (részeshatározó).",
  },
  {
    q: "Mi a CÉLHATÁROZÓ? – „Edzeni megyek, HOGY erősebb legyek.”",
    options: ["Edzeni", "hogy erősebb legyek", "megyek", "—"],
    correctIndex: 1,
    exp: "Cél: mi célból? → „hogy erősebb legyek” (alárendelt mellékmondat mint célhat.).",
  },
];
export const section_mondatelemzes_targy_hatarozok = {
  id: "mondatelemzes_targy_hatarozok",
  title: "Mondatelemzés II. – Tárgy és határozók",
  bank: bank_mondatelemzes_targy_hatarozok,
  
};
export const bank_mondatelemzes_jelzok: Question[] = [
  {
    q: "Milyen jelző a „piros” a „piros labda” szerkezetben?",
    options: ["Mennyiségjelző", "Minőségjelző", "Birtokos jelző", "Kijelölő jelző"],
    correctIndex: 1,
    exp: "A „piros” a főnév tulajdonságát fejezi ki → minőségjelző."
  },
  {
    q: "Milyen jelzőt látsz: „három almát vettem”?",
    options: ["Birtokos jelző", "Kijelölő jelző", "Mennyiségjelző (számjelző)", "Minőségjelző"],
    correctIndex: 2,
    exp: "A „három” számot, mennyiséget fejez ki → mennyiségjelző (számnévi jelző)."
  },
  {
    q: "Az „anyukám könyve” kifejezésben mi a „anyukám”?",
    options: ["Birtokos jelző", "Minőségjelző", "Kijelölő jelző", "Állítmány"],
    correctIndex: 0,
    exp: "A birtokost jelöli (kinek a könyve?) → birtokos jelző."
  },
  {
    q: "„Ez a ház” – milyen jelző az „ez a”?",
    options: ["Kijelölő jelző", "Minőségjelző", "Viszonyjelző", "Birtokos jelző"],
    correctIndex: 0,
    exp: "A mutató névmás kijelöli, hogy melyik házról van szó → kijelölő jelző."
  },
  {
    q: "„A kertben álló fa” – milyen jelző az „álló”?",
    options: ["Állítmányi jelző", "Igenévi (melléknévi igenévi) jelző", "Birtokos jelző", "Mennyiségjelző"],
    correctIndex: 1,
    exp: "Az „álló” melléknévi igenév (-ó/-ő), a főnévhez kapcsolódva jelzői szerepben → igenévi jelző."
  },
  {
    q: "„A város egyik legszebb parkja” – mi a „legszebb” funkciója?",
    options: ["Mennyiségjelző", "Fokozott minőségjelző", "Kijelölő jelző", "Birtokos jelző"],
    correctIndex: 1,
    exp: "Tulajdonságot, méghozzá felsőfokot fejez ki → minőségjelző (fokozott)."
  },
  {
    q: "„Mindkét versenyző célba ért.” – milyen jelző a „mindkét”?",
    options: ["Birtokos jelző", "Kijelölő jelző", "Mennyiségjelző (határozottságot kifejező)", "Minőségjelző"],
    correctIndex: 2,
    exp: "A „mindkét” mennyiségre (kettőre) vonatkozó névmási jelző."
  },
  {
    q: "„Péter kedvenc könyve” – a „kedvenc” milyen jelző?",
    options: ["Minőségjelző", "Birtokos jelző", "Kijelölő jelző", "Állítmányi jelző"],
    correctIndex: 0,
    exp: "A könyv minőségére/tulajdonságára utal → minőségjelző."
  },
  {
    q: "„A tanár által kijelölt feladat” – a „kijelölt” micsoda?",
    options: ["Melléknévi igenévi jelző", "Mennyiségjelző", "Birtokos jelző", "Kijelölő jelző"],
    correctIndex: 0,
    exp: "A „kijelölt” befejezett melléknévi igenév (-t/-tt), jelzői szerepben."
  },
  {
    q: "„Az a sok szép ház” – mennyi jelző van, és melyek?",
    options: [
      "1 jelző: „sokszép”",
      "2 jelző: „az a”, „sok”",
      "2 jelző: „sok”, „szép”",
      "3 jelző: „az a”, „sok”, „szép”"
    ],
    correctIndex: 3,
    exp: "„az a” → kijelölő; „sok” → mennyiség; „szép” → minőségjelző. Összesen 3."
  },
  {
    q: "„A csapat harmadik helyen végzett.” – a „harmadik” milyen jelző?",
    options: ["Kijelölő", "Mennyiségjelző (sorszámnévi)", "Minőségjelző", "Birtokos jelző"],
    correctIndex: 1,
    exp: "Sorszámot fejez ki → mennyiségjelző (sorszámnévi)."
  },
  {
    q: "„Ekkora hibát még nem láttam.” – az „ekkora” szerepe?",
    options: ["Minőségjelző", "Mennyiségjelző", "Kijelölő jelző (mutató)", "Birtokos jelző"],
    correctIndex: 2,
    exp: "Mutató névmás mértékre utalva, de kijelölő-korlátozó funkcióban → kijelölő jelző."
  },
  {
    q: "„A kutya bundája puha.” – melyik szó jelző, és milyen?",
    options: [
      "„kutya” – birtokos jelző",
      "„bundája” – birtokos jelző",
      "„puha” – minőségjelző",
      "Nincs jelző"
    ],
    correctIndex: 0,
    exp: "„kinek a bundája?” → a kutya → birtokos jelző."
  },
  {
    q: "„A tegnap látott film érdekes volt.” – a „látott” milyen jelző?",
    options: [
      "Mennyiségjelző",
      "Minőségjelző",
      "Melléknévi igenévi jelző",
      "Kijelölő jelző"
    ],
    correctIndex: 2,
    exp: "A „látott” befejezett melléknévi igenév → igenévi jelző."
  },
  {
    q: "„Az én táskám könnyebb.” – az „én” szerepe?",
    options: ["Birtokos jelző", "Kijelölő jelző", "Minőségjelző", "Nincs jelző"],
    correctIndex: 0,
    exp: "Személyes névmási birtokos jelző: „kinek a táskája?” → az én."
  },
  {
    q: "„Kevés szabad időm van.” – a „kevés” milyen jelző?",
    options: ["Minőségjelző", "Mennyiségjelző", "Birtokos jelző", "Kijelölő jelző"],
    correctIndex: 1,
    exp: "Mennyiségre utal → mennyiségjelző."
  },
  {
    q: "„Az első pad jobb a kilátáshoz.” – az „első” milyen jelző?",
    options: ["Mennyiségjelző (sorszámnévi)", "Minőségjelző", "Birtokos jelző", "Kijelölő jelző"],
    correctIndex: 0,
    exp: "Sorrendet jelöl → sorszámnévi mennyiségjelző."
  },
  {
    q: "„Minden diák beadta.” – a „minden” milyen jelző?",
    options: ["Mennyiségjelző (általánosító)", "Kijelölő jelző", "Minőségjelző", "Birtokos jelző"],
    correctIndex: 0,
    exp: "Általános mennyiséget fejez ki (összesség) → mennyiségjelző."
  },
  {
    q: "„A bal oldali kapu zárva van.” – a „bal oldali” milyen jelző?",
    options: ["Birtokos", "Kijelölő", "Minőségjelző (viszonyt, helyet jelölő)", "Mennyiségjelző"],
    correctIndex: 2,
    exp: "Tulajdonságot/viszonyt jelez → minőségjelző (összetett jelzős szerkezet)."
  },
  {
    q: "„A volt osztálytársaim találkoztak.” – a „volt” milyen jelző?",
    options: ["Igenévi jelző (volt ~ létige múlt idejű alakja, jelzői értékben)", "Birtokos", "Mennyiség", "Kijelölő"],
    correctIndex: 0,
    exp: "Állapotra/viszonyra utaló jelzői elem (igenévi funkcióban használt igei alak)."
  }
];
export const section_mondatelemzes_jelzok: Section = {
  id: "mondatelemzes_jelzok",
  title: "Mondatelemzés III. – Jelzők",
  bank: bank_mondatelemzes_jelzok,
};
// --- ALTÉMA 4: Mondatelemzés – Összetett mondatok (20 kérdés) ---

export const bank_mondatelemzes_osszmondatok: Question[] = [
  {
    q: "Hány tagmondata van: „Elmentem a boltba, mert elfogyott a kenyér.”?",
    options: ["1", "2", "3", "4"],
    correctIndex: 1,
    exp: "Két tagmondat: [Elmentem a boltba], [mert elfogyott a kenyér]."
  },
  {
    q: "Milyen kapcsolat: „Elmentem, és vettem tejet.”",
    options: ["alárendelő", "mellérendelő (kapcsolatos)", "mellérendelő (ellentétes)", "alárendelő (okhatározói)"],
    correctIndex: 1,
    exp: "„és” → mellérendelő, kapcsolatos viszony."
  },
  {
    q: "Milyen kapcsolat: „Elment, de nem talált tejet.”",
    options: ["mellérendelő (ellentétes)", "mellérendelő (kapcsolatos)", "alárendelő (okhat.)", "alárendelő (feltételes)"],
    correctIndex: 0,
    exp: "„de” → ellentétes mellérendelés."
  },
  {
    q: "Milyen kapcsolat: „Nem ettem, mert nem voltam éhes.”",
    options: ["alárendelő (okhatározói)", "mellérendelő (következtető)", "alárendelő (célhat.)", "mellérendelő (magyarázó)"],
    correctIndex: 0,
    exp: "„mert” → okhatározói alárendelés."
  },
  {
    q: "Milyen kapcsolat: „Sokat tanult, ezért jól sikerült a dolgozata.”",
    options: ["mellérendelő (következtető)", "alárendelő (okhat.)", "mellérendelő (ellentétes)", "alárendelő (ok-fok)"],
    correctIndex: 0,
    exp: "„ezért” → következtető mellérendelés."
  },
  {
    q: "Mi a kötőszó funkciója: „Ha esik, otthon maradunk.”?",
    options: ["alárendelő, feltételes", "mellérendelő, ellentétes", "alárendelő, okhatározói", "mellérendelő, magyarázó"],
    correctIndex: 0,
    exp: "„ha” → feltételes alárendelés."
  },
  {
    q: "Hol kell vessző: „Elmegyek ha ráérek.”",
    options: ["Elmegyek, ha ráérek.", "Elmegyek ha, ráérek.", "Elmegyek ha ráérek,", "Nem kell vessző."],
    correctIndex: 0,
    exp: "Alárendelő kötőszó („ha”) előtt általában vessző van."
  },
  {
    q: "Az alábbiak közül melyik alárendelő mondat?",
    options: [
      "Sokat tanult, ezért jól sikerült.",
      "Elmentem, és vettem kenyeret.",
      "Nem megyek, mert fáradt vagyok.",
      "Elment, de visszajött."
    ],
    correctIndex: 2,
    exp: "A „mert” okhatározói alárendelést jelez."
  },
  {
    q: "Milyen viszony: „Bár fáradt volt, folytatta a munkát.”",
    options: ["alárendelő engedő", "mellérendelő ellentétes", "alárendelő feltételes", "mellérendelő magyarázó"],
    correctIndex: 0,
    exp: "„bár” → engedő (engedményes) alárendelés."
  },
  {
    q: "Milyen kapcsolat: „Nem tudta, hogy mikor jön.”",
    options: ["alárendelő tárgyi mellékmondat", "mellérendelő magyarázó", "alárendelő időhatározói", "alárendelő okhatározói"],
    correctIndex: 0,
    exp: "A főmondat tárgyi bővítményét a mellékmondat fejezi ki → tárgyi mellékmondat."
  },
  {
    q: "Hol a főmondat: „Azt mondta, hogy holnap hív.”",
    options: [
      "Azt mondta",
      "hogy holnap hív",
      "Mindkettő mellékmondat",
      "Nincs főmondat"
    ],
    correctIndex: 0,
    exp: "„Azt mondta” → főmondat; „hogy holnap hív” → tárgyi mellékmondat."
  },
  {
    q: "Melyik kötőszó jelez gyakran magyarázó mellérendelést?",
    options: ["ugyanis", "hogy", "mert", "ha"],
    correctIndex: 0,
    exp: "„ugyanis” → magyarázó mellérendelés (nem alárendelés!)."
  },
  {
    q: "Melyik NEM alárendelő kötőszó?",
    options: ["amikor", "mivel", "hanem", "hogy"],
    correctIndex: 2,
    exp: "„hanem” → ellentétes mellérendelő kötőszó."
  },
  {
    q: "Milyen mellékmondat: „Az a cél, hogy időben beérjünk.”",
    options: ["alanyi", "állítmányi", "tárgyi (célkijelölő tartalmú)", "helyhatározói"],
    correctIndex: 2,
    exp: "A „hogy időben beérjünk” a „cél”-t fejti ki → tartalmi-tárgyi mellékmondat."
  },
  {
    q: "Hova kell vessző: „Siettem ezért nem késtem el.”",
    options: [
      "Siettem, ezért nem késtem el.",
      "Siettem ezért, nem késtem el.",
      "Siettem, ezért, nem késtem el.",
      "Nem kell vessző."
    ],
    correctIndex: 0,
    exp: "Következtető mellérendelés („ezért”) előtt vessző."
  },
  {
    q: "Milyen mellékmondat: „Aki korán kel, aranyat lel.”",
    options: ["vonatkozó mellékmondat", "okhatározói", "időhatározói", "feltételes"],
    correctIndex: 0,
    exp: "„aki” vonatkozó névmás vezeti be → vonatkozó mellékmondat."
  },
  {
    q: "Melyik a HELYTELEN vesszőzés?",
    options: [
      "Bár fáradt volt, folytatta.",
      "Ha esik, otthon maradunk.",
      "Elment és vett kenyeret.",
      "Elment, és vett kenyeret."
    ],
    correctIndex: 2,
    exp: "Egyszerű „és” kapcsolatos mellérendelésnél általában nem kell vessző (kiv. nyomaték, bővítmények)."
  },
  {
    q: "Mi a kapcsolat: „Nemcsak szorgalmas, hanem tehetséges is.”",
    options: ["mellérendelő (kapcsolatos, páros kötőszó)", "alárendelő", "ellentétes", "magyarázó"],
    correctIndex: 0,
    exp: "„nemcsak … hanem (is)” → páros kötőszós kapcsolatos mellérendelés."
  },
  {
    q: "Milyen mellékmondat: „Ott lakik, ahol a folyó kanyarodik.”",
    options: ["helyhatározói mellékmondat", "időhatározói mellékmondat", "vonatkozó mellékmondat", "okhatározói"],
    correctIndex: 0,
    exp: "„ahol” → helyhatározói mellékmondat."
  },
  {
    q: "Az alábbiak közül melyik KÖVETKEZTETŐ mellérendelés?",
    options: [
      "Nem jött, mert beteg volt.",
      "Beteg volt, ezért nem jött.",
      "Bár beteg volt, eljött.",
      "Ha beteg, nem jön."
    ],
    correctIndex: 1,
    exp: "„ezért” → következtető mellérendelés."
  },
];

export const section_mondatelemzes_osszmondatok = {
  id: "mondatelemzes_osszmondatok",
  title: "Mondatelemzés IV. – Összetett mondatok",
  bank: bank_mondatelemzes_osszmondatok,
};
// ────────────────────────────────────────────────────────────────
// NYELVTAN 8 — HELYESÍRÁS I.
// Altéma: Kis- és nagybetűk használata (20 kérdés + exp)
// ────────────────────────────────────────────────────────────────

export const bank_helyesiras_kis_nagybetu: Question[] = [
  {
    q: "Hogyan írjuk helyesen? „ma találkozunk a tanárral.”",
    options: [
      "Ma találkozunk a tanárral.",
      "ma Találkozunk a Tanárral.",
      "Ma találkozunk a Tanárral.",
      "ma találkozunk a tanárral."
    ],
    correctIndex: 0,
    exp: "Mondatkezdés nagybetű, köznév: „tanárral” kisbetű. → „Ma találkozunk a tanárral.”"
  },
  {
    q: "Helyes írásmód: „budapesten voltunk.”",
    options: [
      "Budapesten voltunk.",
      "budapesten voltunk.",
      "BudapestEn voltunk.",
      "BudaPesten voltunk."
    ],
    correctIndex: 0,
    exp: "Tulajdonnévből képzett helyhatározói raggal írt alak: „Budapesten” – nagy B-vel."
  },
  {
    q: "Hogyan írjuk a hónapokat?",
    options: [
      "Mindig nagybetűvel (pl. Január).",
      "Mindig kisbetűvel (pl. január).",
      "Csak mondat elején nagybetűvel.",
      "Csak ünnep esetén nagybetűvel."
    ],
    correctIndex: 1,
    exp: "A hónapok és a napok nevei köznevek: „január, február, hétfő” – kisbetű."
  },
  {
    q: "Melyik a helyes? „magyar nyelv és irodalom” tantárgy",
    options: [
      "magyar nyelv és irodalom",
      "Magyar nyelv és irodalom",
      "Magyar Nyelv és Irodalom",
      "magyar Nyelv és Irodalom"
    ],
    correctIndex: 0,
    exp: "A tantárgy neve köznévként írandó: „magyar nyelv és irodalom”. (Csak címben, névben nagybetűs.)"
  },
  {
    q: "Melyik a helyes? „az európai unió tanácsa”",
    options: [
      "az Európai Unió Tanácsa",
      "Az Európai unió tanácsa",
      "Az európai Unió tanácsa",
      "az európai unió tanácsa"
    ],
    correctIndex: 0,
    exp: "Hivatalos intézménynév minden tagja nagybetűs: „Európai Unió Tanácsa”."
  },
  {
    q: "Hogyan írjuk? „petőfi sándor utca”",
    options: [
      "Petőfi Sándor utca",
      "Petőfi Sándor Utca",
      "petőfi Sándor utca",
      "Petőfi sándor utca"
    ],
    correctIndex: 0,
    exp: "A közterületfajta (utca, tér) köznév → kisbetű, a tulajdonnévi rész nagybetűs: „Petőfi Sándor utca”."
  },
  {
    q: "Melyik helyes? „a balaton partján”",
    options: [
      "a Balaton partján",
      "a balaton partján",
      "a Balaton Partján",
      "A Balaton partján"
    ],
    correctIndex: 0,
    exp: "Földrajzi név nagybetű: „Balaton”; köznév: „partján” kisbetű."
  },
  {
    q: "Hogyan írjuk helyesen? „karácsonykor együtt vacsorázunk.”",
    options: [
      "Karácsonykor együtt vacsorázunk.",
      "karácsonykor együtt vacsorázunk.",
      "Karácsonykor Együtt Vacsorázunk.",
      "KarácsonyKor együtt vacsorázunk."
    ],
    correctIndex: 0,
    exp: "Mondatkezdés nagybetű; „karácsonykor” köznévi ünnepnév származék, kisbetűkkel írandó."
  },
  {
    q: "Melyik a helyes alak? „az angol nyelv”",
    options: [
      "az angol nyelv",
      "Az angol nyelv",
      "az Angol nyelv",
      "Az Angol Nyelv"
    ],
    correctIndex: 0,
    exp: "Nyelvek nevei köznevek: „angol (nyelv)” → kisbetű. Mondat elején nagybetűs lehet."
  },
  {
    q: "Hogyan írjuk? „a debreceni egyetem épülete”",
    options: [
      "A Debreceni Egyetem épülete",
      "A debreceni egyetem épülete",
      "A Debreceni egyetem épülete",
      "A debreceni Egyetem épülete"
    ],
    correctIndex: 0,
    exp: "Intézménynév tulajdonnév: „Debreceni Egyetem” nagybetűs; „épülete” köznév."
  },
  {
    q: "Helyes írásmód: „budapesti diák vagyok.”",
    options: [
      "Budapesti diák vagyok.",
      "budapesti diák vagyok.",
      "BudaPesti diák vagyok.",
      "Budapesti Diák vagyok."
    ],
    correctIndex: 1,
    exp: "A -i képzős származék köznév (lakosnév, melléknév): „budapesti” kisbetű."
  },
  {
    q: "Melyik helyes? „a magyarországon élő külföldiek száma nőtt.”",
    options: [
      "A Magyarországon élő külföldiek száma nőtt.",
      "A magyarországon élő külföldiek száma nőtt.",
      "A Magyarországon Élő Külföldiek Száma Nőtt.",
      "A magyarországon Élő külföldiek száma nőtt."
    ],
    correctIndex: 0,
    exp: "Országnév nagybetű: „Magyarországon”. Mondat eleje nagybetű."
  },
  {
    q: "Hogyan írjuk a hét napjait?",
    options: [
      "Mindig nagybetűvel (Hétfő).",
      "Mindig kisbetűvel (hétfő).",
      "Csak ha ünnep, nagybetű.",
      "Csak rövidítésnél nagybetű."
    ],
    correctIndex: 1,
    exp: "A hét napjai köznevek: „hétfő, kedd…” → kisbetű."
  },
  {
    q: "Melyik helyes? „Tegnap találkoztam Kovács doktorral.”",
    options: [
      "Tegnap találkoztam Kovács doktorral.",
      "Tegnap találkoztam kovács doktorral.",
      "Tegnap találkoztam Kovács Doktorral.",
      "Tegnap Találkoztam Kovács doktorral."
    ],
    correctIndex: 0,
    exp: "Személynév nagybetűs: „Kovács”; a „doktor” köznév → kisbetű."
  },
  {
    q: "Helyes írásmód: „az igazgató úr üzeni”",
    options: [
      "Az igazgató úr üzeni",
      "Az Igazgató Úr üzeni",
      "Az igazgató Úr üzeni",
      "Az Igazgató úr üzeni"
    ],
    correctIndex: 0,
    exp: "A megszólításként használt köznevek („igazgató úr”) kisbetűsek."
  },
  {
    q: "Melyik a helyes? „a történelem című könyv”",
    options: [
      "a Történelem című könyv",
      "a történelem című könyv",
      "A Történelem Című Könyv",
      "a Történelem Című könyv"
    ],
    correctIndex: 1,
    exp: "Könyvcím idézőjelben szokás, de általánosan: köznévi megnevezés → kisbetű („történelem” mint tantárgy)."
  },
  {
    q: "Hogyan írjuk? „a pécsi székesegyház”",
    options: [
      "a Pécsi székesegyház",
      "a pécsi Székesegyház",
      "a pécsi székesegyház",
      "a Pécsi Székesegyház"
    ],
    correctIndex: 2,
    exp: "Nem hivatalos intézménynév, hanem általános megnevezés: „pécsi székesegyház” kisbetű."
  },
  {
    q: "Melyik helyes? „Az Alföld Magyarország része.”",
    options: [
      "Az Alföld Magyarország része.",
      "Az alföld Magyarország része.",
      "Az Alföld magyarország része.",
      "Az alföld magyarország része."
    ],
    correctIndex: 0,
    exp: "Földrajzi tájegység neve tulajdonnév: „Alföld”. Országnév: „Magyarország”."
  },
  {
    q: "Hogyan írjuk? „a magyar olimpiai bizottság közleményt adott ki.”",
    options: [
      "A Magyar Olimpiai Bizottság közleményt adott ki.",
      "A magyar olimpiai bizottság közleményt adott ki.",
      "A Magyar olimpiai Bizottság közleményt adott ki.",
      "A magyar Olimpiai Bizottság közleményt adott ki."
    ],
    correctIndex: 0,
    exp: "Hivatalos szervezet teljes neve nagybetűs: „Magyar Olimpiai Bizottság”."
  },
  {
    q: "Helyes írásmód: „kínai étterembe megyünk.”",
    options: [
      "Kínai étterembe megyünk.",
      "kínai étterembe megyünk.",
      "Kínai Étterembe megyünk.",
      "kínai Étterembe megyünk."
    ],
    correctIndex: 1,
    exp: "A „kínai” itt köznévi jelentésű melléknév (konyhatípus), kisbetűs."
  }
];

// ── SECTION az altémához ─────────────────────
export const section_helyesiras_kis_nagybetu = {
  id: "helyesiras_kis_nagybetu",
  title: "Helyesírás I. – Kis- és nagybetűk",
  bank: bank_helyesiras_kis_nagybetu,
};
// ────────────────────────────────────────────────────────────────
/* NYELVTAN 8 — HELYESÍRÁS II.
   Altéma: Egybeírás–különírás (20 kérdés + exp) */
// ────────────────────────────────────────────────────────────────

export const bank_helyesiras_egybe_kulon: Question[] = [
  {
    q: "Hogyan írjuk helyesen? gyors...étterem",
    options: ["gyorsétterem", "gyors étterem", "gyors-étterem", "gyors ét-terem"],
    correctIndex: 0,
    exp: "Állandósult szókapcsolat, jelentésváltozás → egybe: gyorsétterem."
  },
  {
    q: "Hogyan írjuk helyesen? kézi...labda",
    options: ["kézilabda", "kézi labda", "kézi-labda", "kéz-i labda"],
    correctIndex: 0,
    exp: "Sportágnevek többnyire egybe: kézilabda, vízilabda, kosárlabda."
  },
  {
    q: "Hogyan írjuk helyesen? közép...iskola",
    options: ["középiskola", "közép iskola", "közép-iskola", "középis-kola"],
    correctIndex: 0,
    exp: "Iskolatípus megnevezése: középiskola (egybe)."
  },
  {
    q: "Hogyan írjuk helyesen? nagy...takarítás",
    options: ["nagytakarítás", "nagy takarítás", "nagy-takarítás", "nagy takarítása"],
    correctIndex: 0,
    exp: "Jelentésváltozás (nem ‘nagy méretű’ takarítás, hanem „alapos”) → nagytakarítás."
  },
  {
    q: "Hogyan írjuk helyesen? házi...feladat",
    options: ["házi feladat", "házifeladat", "házi-feladat", "házi fel-adat"],
    correctIndex: 0,
    exp: "Szabad szókapcsolat → külön: házi feladat."
  },
  {
    q: "Hogyan írjuk helyesen? anyanyelv",
    options: ["anyanyelv", "anya nyelv", "anya-nyelv", "any anyelv"],
    correctIndex: 0,
    exp: "Állandósult összetétel → egybe: anyanyelv."
  },
  {
    q: "Hogyan írjuk helyesen? víz...vezeték...szerelő",
    options: ["vízvezeték-szerelő", "vízvezeték szerelő", "víz-vezeték-szerelő", "víz vezeték-szerelő"],
    correctIndex: 0,
    exp: "A „vízvezeték” már összetett, ehhez járul a „szerelő” → kötőjellel kapcsolt: vízvezeték-szerelő."
  },
  {
    q: "Hogyan írjuk helyesen? gép...jármű...vezető",
    options: ["gépjármű-vezető", "gépjárművezető", "gép jármű vezető", "gép-jármű-vezető"],
    correctIndex: 0,
    exp: "A „gépjármű” összetett szó, ehhez a „-vezető” külön tagként kötőjellel járul: gépjármű-vezető."
  },
  {
    q: "Hogyan írjuk helyesen? képviselő...testület",
    options: ["képviselő-testület", "képviselőtestület", "képviselő testület", "kép-viselőtestület"],
    correctIndex: 0,
    exp: "A ‘képviselő’ és ‘testület’ összekapcsolt intézménymegnevezés → kötőjellel: képviselő-testület."
  },
  {
    q: "Hogyan írjuk helyesen? hegy...csúcs",
    options: ["hegycsúcs", "hegy csúcs", "hegy-csúcs", "hegycs-úcs"],
    correctIndex: 0,
    exp: "Jelentésváltozás, állandósult összetétel → hegycsúcs (egybe)."
  },
  {
    q: "Hogyan írjuk helyesen? kül...város",
    options: ["külváros", "kül város", "kül-város", "külvá-ros"],
    correctIndex: 0,
    exp: "Jelentésváltozás (város peremterülete) → külváros."
  },
  {
    q: "Hogyan írjuk helyesen? nap...fényes",
    options: ["napfényes", "nap fényes", "nap-fényes", "nap fény-es"],
    correctIndex: 0,
    exp: "Származék (napfény + -es) → egybe: napfényes."
  },
  {
    q: "Hogyan írjuk helyesen? óvodás...korú",
    options: ["óvodáskorú", "óvodás korú", "óvodás-korú", "óvódáskorú"],
    correctIndex: 0,
    exp: "Származékszó, összetételi utótaggal → egybe: óvodáskorú."
  },
  {
    q: "Hogyan írjuk helyesen? ház...tartás...beli",
    options: ["háztartásbeli", "háztartás-beli", "ház tartásbeli", "ház-tartásbeli"],
    correctIndex: 0,
    exp: "Állandósult jelentés (otthon dolgozó személy) → egybe: háztartásbeli."
  },
  {
    q: "Hogyan írjuk helyesen? elsősegély...doboz",
    options: ["elsősegélydoboz", "elsősegély-doboz", "első segélydoboz", "első segély doboz"],
    correctIndex: 1,
    exp: "Többtagú összetétel → gyakori megoldás a kötőjeles kapcsolás: elsősegély-doboz."
  },
  {
    q: "Hogyan írjuk helyesen? belépő...jegy",
    options: ["belépőjegy", "belépő jegy", "belépő-jegy", "bel épőjegy"],
    correctIndex: 0,
    exp: "Jelentésváltozás (jegytípus) → egybe: belépőjegy."
  },
  {
    q: "Hogyan írjuk helyesen? madár...tej...torta",
    options: ["madártejtorta", "madártej-torta", "madár tej torta", "madár-tej-torta"],
    correctIndex: 1,
    exp: "A „madártej” összetett, ehhez járul a „torta” → kötőjeles: madártej-torta."
  },
  {
    q: "Hogyan írjuk helyesen? arany...érem...tábla",
    options: ["aranyérem-tábla", "aranyérmtábla", "arany érem tábla", "arany-éremtábla"],
    correctIndex: 0,
    exp: "Összetett + külön tag → kötőjeles kapcsolás: aranyérem-tábla."
  },
  {
    q: "Hogyan írjuk helyesen? tej...föl...leszedő",
    options: ["tejföl-leszedő", "tejföl leszedő", "tejfölleszedő", "tej-föl-leszedő"],
    correctIndex: 2,
    exp: "Állandósult jelentés (eszköznév) → egybe: tejfölleszedő."
  },
  {
    q: "Hogyan írjuk helyesen? általános...iskola...igazgató",
    options: ["általánosiskola-igazgató", "általános iskolai igazgató", "általános iskolaigazgató", "általános-iskola igazgató"],
    correctIndex: 1,
    exp: "A természetes megoldás: melléknévi jelzős szerkezet → külön: általános iskolai igazgató."
  },
];

// ── SECTION az altémához ─────────────────────
export const section_helyesiras_egybe_kulon = {
  id: "helyesiras_egybe_kulon",
  title: "Helyesírás II. – Egybeírás–különírás",
  bank: bank_helyesiras_egybe_kulon,
};
// ────────────────────────────────────────────────────────────────
/* NYELVTAN 8 — HELYESÍRÁS III.
   Altéma: Ly–j és nehezebb szavak (20 kérdés + exp) */
// ────────────────────────────────────────────────────────────────

export const bank_helyesiras_ly_j: Question[] = [
  {
    q: "Hogyan írjuk helyesen? fa...",
    options: ["faj", "faly", "falj", "fáj"],
    correctIndex: 0,
    exp: "„fa” + „-j” hang, nem ejtett „ly”: faj → „ly” nincs benne, helyesen: faj."
  },
  {
    q: "Helyes alak: „megszó...tam”",
    options: ["megszóllytam", "megszólítam", "megszóltam", "megszólytam"],
    correctIndex: 2,
    exp: "A „szól” igetőhöz ‘-tam’ járul → nincs „ly”: megszóltam."
  },
  {
    q: "Melyik helyes? „Hosszú ...ú.”",
    options: ["ly", "j", "lyj", "jj"],
    correctIndex: 0,
    exp: "Kivételes ‘ly’-os szó: „hályog, folyosó, gólya, moly, gálya, súly, mély, hűlye → helyesen: hosszú lyú.”"
  },
  {
    q: "Melyik szó íródik 'ly'-nal?",
    options: ["kiráj", "hely", "haj", "kaj"],
    correctIndex: 1,
    exp: "„hely” → ‘ly’-al írandó (kivételes szavak közé tartozik)."
  },
  {
    q: "Hogyan írjuk? „fo...os”",
    options: ["fojós", "folyos", "folyós", "folyószámla"],
    correctIndex: 2,
    exp: "A „folyó” szó „ly”-jal írandó: folyós."
  },
  {
    q: "Melyik íródik ’j’-vel?",
    options: ["helyes", "folyó", "hajó", "mély"],
    correctIndex: 2,
    exp: "„hajó” → „j”-vel, mivel a tő „haj”, nem tartozik az ly-s kivételek közé."
  },
  {
    q: "Melyik íródik ’ly’-nal?",
    options: ["folyadék", "hajnal", "fajta", "bajusz"],
    correctIndex: 0,
    exp: "A „folyó” származéka → megőrzi az „ly”-t: folyadék."
  },
  {
    q: "Melyik a helyes alak? „ma...ár”",
    options: ["majár", "maljár", "maljár", "malár"],
    correctIndex: 0,
    exp: "A „majár” szóban ’j’ van, mivel a tő ‘maj-’ → majár."
  },
  {
    q: "Melyik szó íródik 'j'-vel?",
    options: ["moly", "olyasmi", "haj", "hely"],
    correctIndex: 2,
    exp: "„haj” → j-vel. (A többi ly-s kivétel.)"
  },
  {
    q: "Melyik szó íródik 'ly'-jal?",
    options: ["gója", "gólya", "gója", "gójja"],
    correctIndex: 1,
    exp: "„gólya” – kivételes ly-s szó, egyedülálló."
  },
  {
    q: "Melyik a helyes írásmód? „megbá...ás”",
    options: ["megbájás", "megbájjás", "megbánás", "megbályás"],
    correctIndex: 2,
    exp: "Szócsalád: „bán” → nincs „ly”: megbánás."
  },
  {
    q: "Melyik íródik ’j’-vel?",
    options: ["súly", "faj", "folyó", "hely"],
    correctIndex: 1,
    exp: "„faj” → j-vel, nem ly-s kivétel."
  },
  {
    q: "Hogyan írjuk helyesen? „a gú...a köröz a levegőben.”",
    options: ["gújja", "gúlya", "gújlya", "gúja"],
    correctIndex: 1,
    exp: "„gólya” mintára: „gúlya” – ly-s kivétel, jelentése: állatcsorda."
  },
  {
    q: "Melyik a helyes? „megszá...ta a hibát.”",
    options: ["megszályta", "megszájta", "megszánta", "megszállyta"],
    correctIndex: 2,
    exp: "„megszánta” (’ly’ nincs benne)."
  },
  {
    q: "Melyik szóban van 'ly'?",
    options: ["táj", "mély", "haj", "vaj"],
    correctIndex: 1,
    exp: "„mély” → ly-s kivétel."
  },
  {
    q: "Hogyan írjuk? „fú...tat”",
    options: ["fújtat", "fúlyt", "fúlytat", "fúlyttat"],
    correctIndex: 0,
    exp: "Igető: „fúj” + -tat → j-s marad: fújtat."
  },
  {
    q: "Melyik a helyes? „pa...tás”",
    options: ["pajtas", "pajjtás", "pajtás", "pálytás"],
    correctIndex: 2,
    exp: "Szócsalád: „paj” → j-vel, helyesen: pajtás."
  },
  {
    q: "Melyik helyes? „ha...nalodik”",
    options: ["hajnalodik", "hajlynalodik", "hajjnalodik", "hálynalodik"],
    correctIndex: 0,
    exp: "Szócsalád: „hajnal” → j-s, helyesen: hajnalodik."
  },
  {
    q: "Melyik szó íródik 'ly'-jal?",
    options: ["folyo", "bolya", "oly", "helyzet"],
    correctIndex: 3,
    exp: "A „hely” származéka → megőrzi az ly-t: helyzet."
  },
  {
    q: "Melyik a helyes írásmód? „A fiam nagyon jó...ú.”",
    options: ["jójju", "jólyu", "jóljú", "jól jű"],
    correctIndex: 2,
    exp: "A melléknévből képzett alak → ly-s kivétel: jóljú (kiejtve: 'jóljú')."
  },
];

// ── SECTION az altémához ─────────────────────
export const section_helyesiras_ly_j = {
  id: "helyesiras_ly_j",
  title: "Helyesírás III. – Ly–j és nehezebb szavak",
  bank: bank_helyesiras_ly_j,
};
// ────────────────────────────────────────────────────────────────
/* NYELVTAN 8 — HELYESÍRÁS IV.
   Altéma: Írásjelek a mondatban (20 kérdés + exp) */
// ────────────────────────────────────────────────────────────────

export const bank_helyesiras_irasjelek: Question[] = [
  {
    q: "Hová kell vessző? „Sokáig olvastam de nem értem a történetet.”",
    options: [
      "Sokáig olvastam, de nem értem a történetet.",
      "Sokáig, olvastam de nem értem a történetet.",
      "Sokáig olvastam de, nem értem a történetet.",
      "Nem kell vessző."
    ],
    correctIndex: 0,
    exp: "A 'de' ellentétes kötőszó, elé mindig vessző kerül."
  },
  {
    q: "Helyes írásmód: „Kérem hogy jöjjön ide.”",
    options: [
      "Kérem, hogy jöjjön ide.",
      "Kérem hogy, jöjjön ide.",
      "Kérem hogy jöjjön, ide.",
      "Nem kell vessző."
    ],
    correctIndex: 0,
    exp: "Alárendelő összetett mondatban a kötőszó ('hogy') elé vesszőt teszünk."
  },
  {
    q: "Milyen írásjel zárja a felszólítást? „Gyere ide”",
    options: ["Pont", "Kérdőjel", "Felkiáltójel", "Kettőspont"],
    correctIndex: 2,
    exp: "A felszólító mondat végére felkiáltójel kerül: „Gyere ide!”"
  },
  {
    q: "Helyes-e: „Szereted a fagyit.”?",
    options: [
      "Igen, ez kijelentő mondat.",
      "Nem, kérdőjel kell a végére.",
      "Nem, felkiáltójel kell a végére.",
      "Nem, vessző hiányzik."
    ],
    correctIndex: 1,
    exp: "Kérdő mondat esetén kérdőjel a mondatzáró írásjel: „Szereted a fagyit?”"
  },
  {
    q: "Melyik helyes? „Nem jött el mert beteg volt.”",
    options: [
      "Nem jött el, mert beteg volt.",
      "Nem jött, el mert beteg volt.",
      "Nem jött el mert, beteg volt.",
      "Nem kell vessző."
    ],
    correctIndex: 0,
    exp: "Alárendelő összetett mondatban a 'mert' elé vessző kerül."
  },
  {
    q: "Melyik helyes? „Elmentem a boltba és vettem kenyeret.”",
    options: [
      "Elmentem a boltba és vettem kenyeret.",
      "Elmentem a boltba, és vettem kenyeret.",
      "Elmentem, a boltba és vettem kenyeret.",
      "Elmentem a boltba és, vettem kenyeret."
    ],
    correctIndex: 0,
    exp: "Az 'és' kapcsolatos mellérendelő mondatban általában nem kell vessző."
  },
  {
    q: "Hová kell vessző? „Bár fáradt volt folytatta a munkát.”",
    options: [
      "Bár fáradt volt, folytatta a munkát.",
      "Bár, fáradt volt folytatta a munkát.",
      "Bár fáradt, volt folytatta a munkát.",
      "Nem kell vessző."
    ],
    correctIndex: 0,
    exp: "Az engedő (bár...) mellékmondat után vessző következik."
  },
  {
    q: "Helyes-e: „Gyorsan gyere ide!”?",
    options: [
      "Igen, így helyes.",
      "Nem, kérdőjel kell.",
      "Nem, pont kell.",
      "Nem, vessző kell a 'gyorsan' után."
    ],
    correctIndex: 0,
    exp: "Felszólító mondat → felkiáltójel, így helyes: „Gyorsan gyere ide!”"
  },
  {
    q: "Milyen írásjel hiányzik? „Nem jössz velem”",
    options: ["Pont", "Kérdőjel", "Felkiáltójel", "Vessző"],
    correctIndex: 1,
    exp: "Ez kérdő mondat → kérdőjel a végére: „Nem jössz velem?”"
  },
  {
    q: "Melyik helyes? „Sokáig tanult ezért sikerült.”",
    options: [
      "Sokáig tanult, ezért sikerült.",
      "Sokáig tanult ezért, sikerült.",
      "Sokáig, tanult ezért sikerült.",
      "Nem kell vessző."
    ],
    correctIndex: 0,
    exp: "A 'ezért' következtető kötőszó elé vessző kerül."
  },
  {
    q: "Milyen írásjel kerül a megszólítás után? „Kedves Anna … köszönöm a segítséget!”",
    options: ["vessző", "pont", "kettőspont", "pontosvessző"],
    correctIndex: 0,
    exp: "A megszólítást vessző zárja: „Kedves Anna, köszönöm a segítséget!”"
  },
  {
    q: "Hová kerül a vessző? „Ha esik otthon maradunk.”",
    options: [
      "Ha esik, otthon maradunk.",
      "Ha esik otthon, maradunk.",
      "Ha, esik otthon maradunk.",
      "Nem kell vessző."
    ],
    correctIndex: 0,
    exp: "Feltételes alárendelés – a 'ha' után vesszőt teszünk."
  },
  {
    q: "Melyik helyes? „Ő a legjobb barátom ugye.”",
    options: [
      "Ő a legjobb barátom, ugye?",
      "Ő a legjobb barátom ugye?",
      "Ő a legjobb, barátom ugye?",
      "Ő, a legjobb barátom ugye?"
    ],
    correctIndex: 0,
    exp: "A nyomatékosító 'ugye' előtt vessző és kérdőjel a végén: „Ő a legjobb barátom, ugye?”"
  },
  {
    q: "Helyes-e: „Szép nap van!”?",
    options: [
      "Igen, kijelentő mondatban is lehet felkiáltójel.",
      "Nem, csak kérdő mondatban van felkiáltójel.",
      "Nem, csak felszólítás végén.",
      "Nem, pont kell."
    ],
    correctIndex: 0,
    exp: "Nyomatékos kijelentés is kaphat felkiáltójelet: „Szép nap van!”"
  },
  {
    q: "Hová kell írásjel? „Nem tudom hogy eljön-e.”",
    options: [
      "Nem tudom, hogy eljön-e.",
      "Nem, tudom hogy eljön-e.",
      "Nem tudom hogy, eljön-e.",
      "Nem kell vessző."
    ],
    correctIndex: 0,
    exp: "Alárendelő összetett mondat – a 'hogy' elé vessző kerül."
  },
  {
    q: "Milyen írásjel áll a megszólítás előtt levélben?",
    options: ["Kettőspont", "Vessző", "Pont", "Pontosvessző"],
    correctIndex: 0,
    exp: "Levélben a megszólítás után kettőspont: „Kedves Anna:”"
  },
  {
    q: "Melyik helyes? „Szeretem a kávét a teát viszont nem.”",
    options: [
      "Szeretem a kávét, a teát viszont nem.",
      "Szeretem a kávét a teát, viszont nem.",
      "Szeretem a kávét, a teát viszont, nem.",
      "Nem kell vessző."
    ],
    correctIndex: 0,
    exp: "Ellentétes tagmondatok között vessző: „..., a teát viszont nem.”"
  },
  {
    q: "Helyes-e: „Elmentem boltba.”?",
    options: [
      "Nem, hiányzik a határozórag (-ba): boltba.",
      "Nem, hiányzik a vessző.",
      "Igen, így helyes.",
      "Nem, kérdőjel kell a végére."
    ],
    correctIndex: 0,
    exp: "A helyes alak: „boltba” – a ragot is jelölni kell, de ez nem írásjel, hanem nyelvtani hiba."
  },
  {
    q: "Melyik írásjel választja el a tagmondatokat felsorolásban?",
    options: ["vessző", "pontosvessző", "kettőspont", "gondolatjel"],
    correctIndex: 0,
    exp: "Egyszerű felsorolásnál vessző választja el a tagokat."
  },
  {
    q: "Melyik helyes? „Szeretem a csokit! És te?”",
    options: [
      "Szeretem a csokit! És te?",
      "Szeretem a csokit és te?",
      "Szeretem a csokit és, te?",
      "Szeretem a csokit és te!"
    ],
    correctIndex: 0,
    exp: "Felkiáltójel az első mondat végén, a második kérdőjelre végződik → helyes."
  }
];

// ── SECTION az altémához ─────────────────────
export const section_helyesiras_irasjelek = {
  id: "helyesiras_irasjelek",
  title: "Helyesírás IV. – Írásjelek a mondatban",
  bank: bank_helyesiras_irasjelek,
};
// 🟩 NYELVTAN 8 – SZÖVEGALKOTÁS I. A szöveg fogalma és jellemzői
export const bank_szoveg_fogalma: Question[] = [
  {
    q: "Mit nevezünk szövegnek?",
    options: [
      "Egymás után következő szavakat",
      "Összefüggő mondatok sorát, amelyeknek van értelme és célja",
      "Egyetlen mondatot",
      "A szótagok összességét"
    ],
    correctIndex: 1,
    exp: "Szövegnek az egymással összefüggő, értelmes mondatok sorát nevezzük, amelyek valamilyen kommunikációs célt szolgálnak."
  },
  {
    q: "Mi a szöveg legfontosabb jellemzője?",
    options: [
      "Hogy rövid",
      "Hogy sok idegen szót tartalmaz",
      "Hogy összefüggő és egységes",
      "Hogy rímes"
    ],
    correctIndex: 2,
    exp: "A szöveg legfontosabb jellemzője az összefüggés és az egységesség – minden mondat kapcsolódik a többihez."
  },
  {
    q: "Mit jelent az, hogy a szövegnek van témája?",
    options: [
      "Csak egy mondatból áll",
      "Valamilyen központi gondolatról szól",
      "Mindig több különböző dologról beszél",
      "Nincs értelme"
    ],
    correctIndex: 1,
    exp: "A szöveg témája az a központi gondolat, amely köré az egész tartalom szerveződik."
  },
  {
    q: "Melyik NEM a szöveg jellemzője?",
    options: [
      "Összefüggő",
      "Egységes",
      "Célirányos",
      "Véletlenszerű"
    ],
    correctIndex: 3,
    exp: "A szöveg sosem véletlenszerű: tudatosan épül fel és mindig kommunikációs céllal jön létre."
  },
  {
    q: "Melyik szövegtípusnak NEM célja a tájékoztatás?",
    options: [
      "Újságcikk",
      "Tanulmány",
      "Személyes levél",
      "Reklám"
    ],
    correctIndex: 3,
    exp: "A reklám nem tájékoztatásra, hanem meggyőzésre törekszik – befolyásolja az olvasót."
  },
  {
    q: "Mit jelent a szöveg kohéziója?",
    options: [
      "A mondatok és szavak kapcsolódását, összefüggését",
      "A szöveg hosszát",
      "A mondatok számát",
      "A szóismétlések hiányát"
    ],
    correctIndex: 0,
    exp: "A kohézió a szöveg szerkezeti összetartó ereje: a mondatok és bekezdések logikai kapcsolódása."
  },
  {
    q: "Mi a cím szerepe egy szövegben?",
    options: [
      "Nincs különösebb szerepe",
      "Díszítésként szolgál",
      "Elárulja a szöveg témáját, felkelti az érdeklődést",
      "Mindig az első mondatban ismétlődik"
    ],
    correctIndex: 2,
    exp: "A cím összefoglalja a szöveg témáját és felkelti az olvasó figyelmét."
  },
  {
    q: "Melyik mondat NEM alkot önálló szöveget?",
    options: [
      "Holnap találkozunk.",
      "Kinyitotta az ajtót. Belépett. Körbenézett.",
      "Kék.",
      "A gyerekek a parkban játszanak."
    ],
    correctIndex: 2,
    exp: "A „Kék.” mondat nem közöl teljes gondolatot, így nem tekinthető önálló szövegnek."
  },
  {
    q: "Mi a bekezdés szerepe a szövegben?",
    options: [
      "A szöveg részeinek tagolása",
      "A díszítés",
      "A mondatok számozása",
      "A rímek kiemelése"
    ],
    correctIndex: 0,
    exp: "A bekezdés segít tagolni a szöveget – új gondolat, új szemszög esetén új bekezdés kezdődik."
  },
  {
    q: "Mit jelent az, hogy a szöveg egységes?",
    options: [
      "Minden mondat külön témáról szól",
      "Minden mondat ugyanazt a központi gondolatot szolgálja",
      "Azonos hosszúságú mondatokat tartalmaz",
      "Nem tartalmaz mellékneveket"
    ],
    correctIndex: 1,
    exp: "Egységes a szöveg, ha minden mondata ugyanazt a témát és célt szolgálja."
  }
];

// SECTION az altémához
export const section_szoveg_fogalma = {
  id: "szoveg_fogalma",
  title: "Szövegalkotás I. 🟩 A szöveg fogalma és jellemzői",
  bank: bank_szoveg_fogalma,
};
// 🟩 NYELVTAN 8 – SZÖVEGALKOTÁS II. A szöveg szerkezete és egysége
export const bank_szoveg_szerkezete: Question[] = [
  {
    q: "Melyik a szöveg szerkezeti egységeinek helyes sorrendje?",
    options: [
      "Bevezetés – Befejezés – Tárgyalás",
      "Bevezetés – Tárgyalás – Befejezés",
      "Tárgyalás – Bevezetés – Befejezés",
      "Befejezés – Bevezetés – Tárgyalás"
    ],
    correctIndex: 1,
    exp: "A szöveg szerkezete: bevezetés, tárgyalás és befejezés. Ez adja a logikus felépítést."
  },
  {
    q: "Mi a bevezetés feladata a szövegben?",
    options: [
      "Összefoglalja a lényeget",
      "Megfogalmazza a mondanivalót és felkelti az érdeklődést",
      "Tartalmazza a példákat",
      "Lezárja a gondolatmenetet"
    ],
    correctIndex: 1,
    exp: "A bevezetés célja, hogy előkészítse a témát és megragadja az olvasó figyelmét."
  },
  {
    q: "Mit tartalmaz a tárgyalás rész?",
    options: [
      "Az érvek és magyarázatok részletes kifejtését",
      "A téma lezárását",
      "A cím értelmezését",
      "A következtetést"
    ],
    correctIndex: 0,
    exp: "A tárgyalás a szöveg legterjedelmesebb része, ahol a gondolatokat, érveket részletezzük."
  },
  {
    q: "Mi a befejezés szerepe?",
    options: [
      "A téma felvezetése",
      "A mondanivaló lezárása, összegzése",
      "Új gondolat bemutatása",
      "Az olvasó megtévesztése"
    ],
    correctIndex: 1,
    exp: "A befejezés célja az összegzés, lezárás és a fő gondolat megerősítése."
  },
  {
    q: "Mitől lesz egységes a szöveg?",
    options: [
      "Ha a bekezdések véletlenszerűen követik egymást",
      "Ha a mondatok témája és stílusa összhangban van",
      "Ha minden mondat más stílusban van írva",
      "Ha nincsenek kötőszavak"
    ],
    correctIndex: 1,
    exp: "Egységes a szöveg, ha a gondolatok logikusan kapcsolódnak és stílusuk is egységes."
  },
  {
    q: "Mit nevezünk tételmondatnak?",
    options: [
      "Egy érdekes kérdést",
      "A bekezdés központi mondatát, amely megfogalmazza a fő gondolatot",
      "Az utolsó mondatot",
      "A címet"
    ],
    correctIndex: 1,
    exp: "A tételmondat a bekezdés központi mondata, amely összefoglalja annak tartalmát."
  },
  {
    q: "Mi jellemzi a jó bekezdést?",
    options: [
      "Egyetlen mondatból áll",
      "Egy gondolatkört foglal össze és tételmondattal kezdődik",
      "Véletlenszerű mondatokat tartalmaz",
      "Minden mondat azonos hosszúságú"
    ],
    correctIndex: 1,
    exp: "A jó bekezdés logikailag összetartozó mondatokat tartalmaz, amelyek egy gondolatkört fejtenek ki."
  },
  {
    q: "Milyen kapcsolat van a bekezdések között?",
    options: [
      "Nincs köztük kapcsolat",
      "Logikai és tartalmi kapcsolat",
      "Mindegyik más témáról szól",
      "Véletlenszerűen váltakoznak"
    ],
    correctIndex: 1,
    exp: "A bekezdéseket logikai kapcsolat köti össze, ez biztosítja a szöveg folyamatos egységét."
  },
  {
    q: "Mi biztosítja a szöveg szerkezeti egységét?",
    options: [
      "A szavak száma",
      "A kohézió és a logikus felépítés",
      "A mondatok hossza",
      "A bekezdések számának növelése"
    ],
    correctIndex: 1,
    exp: "A szöveg szerkezeti egységét a kohézió (összetartó erő) és a logikus felépítés adja."
  },
  {
    q: "Mi történik, ha a szöveg szerkezete szétesik?",
    options: [
      "Könnyebben érthető lesz",
      "Érthetetlenné válik, és elveszti egységét",
      "Több információt tartalmaz",
      "Rövidebb lesz"
    ],
    correctIndex: 1,
    exp: "Ha a szerkezet szétesik, a szöveg követhetetlenné és nehezen értelmezhetővé válik."
  }
];

// SECTION az altémához
export const section_szoveg_szerkezete = {
  id: "szoveg_szerkezete",
  title: "Szövegalkotás II. 🟦 A szöveg szerkezete és egysége",
  bank: bank_szoveg_szerkezete,
};
// 🟩 NYELVTAN 8 – SZÖVEGALKOTÁS III. Szövegfajták és műfajok
export const bank_szoveg_fajtai: Question[] = [
  {
    q: "Mit nevezünk szövegfajtának?",
    options: [
      "Egy szöveg hosszát",
      "A szöveg kommunikációs célja és témája alapján kialakuló típust",
      "A betűtípust, amellyel a szöveget írják",
      "A szövegben szereplő nevek számát"
    ],
    correctIndex: 1,
    exp: "A szövegfajta a szövegek kommunikációs célja és témája szerint kialakult típus, pl. elbeszélő, leíró, érvelő."
  },
  {
    q: "Melyik NEM szövegfajta?",
    options: [
      "Elbeszélő",
      "Leíró",
      "Érvelő",
      "Rajzos"
    ],
    correctIndex: 3,
    exp: "A „rajzos” nem szövegfajta, mert nem a szöveg célja vagy szerkezete alapján jön létre."
  },
  {
    q: "Melyik szövegfajta mutat be eseményeket időrendben?",
    options: [
      "Leíró",
      "Elbeszélő",
      "Érvelő",
      "Felsorolás"
    ],
    correctIndex: 1,
    exp: "Az elbeszélő szöveg eseményeket mutat be időrendben, gyakran szereplőkkel és cselekménnyel."
  },
  {
    q: "Mi a leíró szöveg célja?",
    options: [
      "Történet elmondása",
      "Egy tárgy, személy vagy hely bemutatása",
      "Vélemény kifejtése",
      "Tanácsadás"
    ],
    correctIndex: 1,
    exp: "A leíró szöveg célja, hogy érzékletesen mutasson be egy tárgyat, személyt vagy helyet."
  },
  {
    q: "Mi az érvelő szöveg célja?",
    options: [
      "Meggyőzni valakit egy állításról",
      "Leírni egy eseményt",
      "Szórakoztatni az olvasót",
      "Felsorolni adatokat"
    ],
    correctIndex: 0,
    exp: "Az érvelő szöveg célja, hogy meggyőzze az olvasót egy állítás igazságáról érvek és példák segítségével."
  },
  {
    q: "Melyik szövegfajta jellemzője az időrend és a cselekmény?",
    options: [
      "Leíró",
      "Érvelő",
      "Elbeszélő",
      "Tájékoztató"
    ],
    correctIndex: 2,
    exp: "Az elbeszélő szöveg cselekményt és eseménysort mutat be időrendben."
  },
  {
    q: "Melyik szövegfajta használ érveket és ellenérveket?",
    options: [
      "Leíró",
      "Elbeszélő",
      "Érvelő",
      "Tájékoztató"
    ],
    correctIndex: 2,
    exp: "Az érvelő szöveg célja a meggyőzés, ezért érveket és gyakran ellenérveket is tartalmaz."
  },
  {
    q: "Mi a közös az elbeszélő és a leíró szövegben?",
    options: [
      "Mindkettő valóságot ábrázol, de más módon",
      "Mindkettő érveket sorol fel",
      "Mindkettő csak párbeszédes formájú",
      "Egyik sem tartalmaz időrendet"
    ],
    correctIndex: 0,
    exp: "Az elbeszélő és leíró szöveg egyaránt a valóság elemeit mutatja be, de különböző szerkezetben."
  },
  {
    q: "Melyik műfaj tartozik az elbeszélő szöveghez?",
    options: [
      "Hirdetés",
      "Mese",
      "Leírás",
      "Értekezés"
    ],
    correctIndex: 1,
    exp: "A mese az elbeszélő szöveg egyik műfaja: történetet mesél el, gyakran tanulsággal."
  },
  {
    q: "Melyik műfaj tartozik a leíró szöveghez?",
    options: [
      "Portré",
      "Vita",
      "Reklám",
      "Riport"
    ],
    correctIndex: 0,
    exp: "A portré a leíró szöveg műfaja: részletesen bemutat egy személyt vagy jellemet."
  },
  {
    q: "Mi jellemző az érvelő szöveg befejezésére?",
    options: [
      "Új témát vezet be",
      "Összegzi az érveket és megismétli az álláspontot",
      "Kérdéseket tesz fel",
      "Nem tartalmaz lezárást"
    ],
    correctIndex: 1,
    exp: "Az érvelő szöveg befejezésében összegzik az érveket és megerősítik az álláspontot."
  },
  {
    q: "Melyik szövegfajta fordul elő leggyakrabban az újságban?",
    options: [
      "Tájékoztató és érvelő",
      "Leíró",
      "Elbeszélő",
      "Költői"
    ],
    correctIndex: 0,
    exp: "Az újságcikkek többsége tájékoztató vagy érvelő jellegű szöveg."
  },
  {
    q: "Mi különbözteti meg a tudományos szöveget a szépirodalmitól?",
    options: [
      "A szókincs választékossága",
      "A cél és a stílus: a tudományos szöveg tárgyilagos, a szépirodalmi érzelmeket is kifejez",
      "A szöveg hossza",
      "A mondatok száma"
    ],
    correctIndex: 1,
    exp: "A tudományos szöveg tárgyilagos, a szépirodalmi viszont gyakran érzelmi hatást is kelt."
  },
  {
    q: "Mi a közéleti szöveg célja?",
    options: [
      "Szórakoztatás",
      "Tájékoztatás, felhívás vagy befolyásolás",
      "Tanítás",
      "Rímelés"
    ],
    correctIndex: 1,
    exp: "A közéleti szövegek (pl. hirdetés, kampánybeszéd) célja a tájékoztatás és befolyásolás."
  },
  {
    q: "Melyik NEM jellemző a leíró szövegre?",
    options: [
      "Állandó szempontból mutat be valamit",
      "Sok melléknév használata",
      "Mozgás, cselekmény bemutatása",
      "Érzékletes kifejezések"
    ],
    correctIndex: 2,
    exp: "A leíró szövegben nincs cselekmény vagy mozgás – állapotot, jellemzőt mutat be."
  },
  {
    q: "Melyik műfaj tartozik az érvelő szöveghez?",
    options: [
      "Levél",
      "Tanulmány",
      "Mese",
      "Riport"
    ],
    correctIndex: 1,
    exp: "A tanulmány az érvelő szövegek körébe tartozik – bizonyít, elemzi és alátámasztja az álláspontot."
  },
  {
    q: "Mi a jellemző a tájékoztató szövegre?",
    options: [
      "Személyes hangvétel",
      "Rövid, lényegre törő információk közlése",
      "Érzelmek kifejezése",
      "Cselekményes elbeszélés"
    ],
    correctIndex: 1,
    exp: "A tájékoztató szöveg tárgyilagosan és tömören közöl információt."
  },
  {
    q: "Mi a különbség a magánjellegű és a hivatalos szöveg között?",
    options: [
      "Semmi különbség nincs",
      "A magánszöveg személyes, a hivatalos kötött formájú és szabályozott",
      "A magánszöveg hosszabb",
      "A hivatalos szöveg díszesebb nyelvezetű"
    ],
    correctIndex: 1,
    exp: "A magánszöveg személyes, míg a hivatalos szöveg formális, szabályokhoz kötött és hivatalos célt szolgál."
  },
  {
    q: "Melyik NEM jellemző az érvelő szövegre?",
    options: [
      "Álláspont megfogalmazása",
      "Érvek felsorolása",
      "Érzelemkifejezés helyett tárgyilagosság",
      "Cselekmény bemutatása"
    ],
    correctIndex: 3,
    exp: "Az érvelő szöveg nem mesél el eseményeket, hanem álláspontot véd érvekkel."
  },
  {
    q: "Mi a közös minden szövegfajtában?",
    options: [
      "Mindegyiknek van témája és célja",
      "Minden szöveg rímes",
      "Minden szöveg verses",
      "Mindegyik irodalmi mű"
    ],
    correctIndex: 0,
    exp: "Minden szövegfajta valamilyen témáról szól és egy meghatározott kommunikációs célt szolgál."
  }
];

// SECTION az altémához
export const section_szoveg_fajtai = {
  id: "szoveg_fajtai",
  title: "Szövegalkotás III. 🟨 Szövegfajták és műfajok",
  bank: bank_szoveg_fajtai,
};
// 🟩 NYELVTAN 8 – SZÖVEGALKOTÁS IV. Fogalmazás – a szövegalkotás lépései
export const bank_fogalmazas_lepesei: Question[] = [
  {
    q: "Mi a szövegalkotás első lépése?",
    options: ["Rávezető mondat megírása", "Téma és cél tisztázása", "Cím kitalálása", "Bevezetés megfogalmazása"],
    correctIndex: 1,
    exp: "Mindig a kommunikációs helyzet tisztázásával indulunk: téma, cél, címzett, csatorna."
  },
  {
    q: "Melyik NEM része a tervezésnek?",
    options: ["Vázlatkészítés", "Anyaggyűjtés", "Fogalmazás javítása", "Cél megfogalmazása"],
    correctIndex: 2,
    exp: "A javítás az utómunkához tartozik; tervezéskor vázlat, cél, anyaggyűjtés történik."
  },
  {
    q: "Miért készítünk vázlatot?",
    options: [
      "Hogy hosszabb legyen a szöveg",
      "Hogy lássuk a gondolatok logikai sorrendjét",
      "Hogy több példa férjen bele",
      "Hogy díszesebb legyen a stílus"
    ],
    correctIndex: 1,
    exp: "A vázlat a gondolatok rendezett, logikus sorrendje; segít a szerkezet tartásában."
  },
  {
    q: "Melyik hármas felel meg a klasszikus szerkezetnek?",
    options: [
      "Felütés – fordulat – csattanó",
      "Expozíció – bonyodalom – katarzis",
      "Bevezetés – tárgyalás – befejezés",
      "Motiváció – akció – reakció"
    ],
    correctIndex: 2,
    exp: "A legtöbb iskolai fogalmazás szerkezete: bevezetés, tárgyalás, befejezés."
  },
  {
    q: "Mi a bevezetés fő feladata?",
    options: [
      "Az összes érv felsorolása",
      "A téma, nézőpont és cél felvillantása, érdeklődés felkeltése",
      "A tanulság megfogalmazása",
      "A hivatkozások felsorolása"
    ],
    correctIndex: 1,
    exp: "A bevezetés irányt szab: megnevezi a témát/célt, ráhangol és megfogja az olvasót."
  },
  {
    q: "Érvelő fogalmazásban hová kerül az álláspont (tételmondat) leggyakrabban?",
    options: ["Csak a végére", "A bevezetés végére vagy a tárgyalás elejére", "A befejezés közepére", "Bárhová, nem számít"],
    correctIndex: 1,
    exp: "Az álláspontot korán tisztázzuk, hogy az érvek ehhez kapcsolódjanak."
  },
  {
    q: "Melyik jó bekezdés-szabály?",
    options: [
      "Egy bekezdés = egy központi gondolat",
      "Minél hosszabb, annál jobb",
      "Minden mondat új bekezdés",
      "A bekezdések véletlenszerűen váltakozzanak"
    ],
    correctIndex: 0,
    exp: "Áttekinthetőség: egy bekezdés egy gondolatkör köré szerveződik, belső logikával."
  },
  {
    q: "Mit jelent a koherencia a szövegben?",
    options: [
      "Helyesírási hibák hiánya",
      "Gondolati összefüggés és következetesség",
      "Szép betűtípus",
      "Rímek használata"
    ],
    correctIndex: 1,
    exp: "Koherencia: a mondatok és bekezdések logikusan kapcsolódnak, a gondolatmenet követhető."
  },
  {
    q: "Melyik kötőelem NEM tipikus érvelésben?",
    options: ["Először is…", "Ugyanakkor…", "Ezért…", "Holnap…"],
    correctIndex: 3,
    exp: "A „Holnap…” időhatározó nem logikai kapcsolatot fejez ki; a többiek érvelési kötőszók."
  },
  {
    q: "Mi a tárgyalás részének fő feladata?",
    options: [
      "A téma megnevezése",
      "Érvek, példák, leírás vagy elbeszélés kibontása",
      "A tanulság megfogalmazása",
      "A cím kitalálása"
    ],
    correctIndex: 1,
    exp: "A tárgyalásban bontjuk ki a tartalmat: érvelünk, bemutatunk, elbeszélünk."
  },
  {
    q: "Mi a befejezés tipikus eleme?",
    options: ["Új téma felvetése", "Összegzés, következtetés, záró gondolat", "Részletes definíciók", "Függelék"],
    correctIndex: 1,
    exp: "A befejezés lezár: összefoglal, következtet, esetleg felhívást tesz."
  },
  {
    q: "Mi a stílus következetessége?",
    options: [
      "Mindig ugyanazokat a szavakat használjuk",
      "A helyzethez illő nyelvhasználat végig azonos hangnemben",
      "Sok idegen szó használata",
      "Csak rövid mondatok írása"
    ],
    correctIndex: 1,
    exp: "A regiszter és hangnem illeszkedjen a címzetthez és maradjon következetes."
  },
  {
    q: "Mikor végezzük a nyelvi-stilisztikai javítást?",
    options: [
      "Közvetlenül a cím kitalálása után",
      "A piszkozat elkészítése után, többször átolvasva",
      "Még az anyaggyűjtés előtt",
      "Soha, nem szükséges"
    ],
    correctIndex: 1,
    exp: "Piszkozat → átolvasás → javítás: hibák, szóismétlések, mondathossz, kötőszók, írásjelek."
  },
  {
    q: "Melyik jó címadás?",
    options: [
      "Pontatlan, túl általános",
      "Hosszú mondatként megírva",
      "Figyelemfelkeltő és tartalmi utalást ad",
      "Mindig kérdő mondat"
    ],
    correctIndex: 2,
    exp: "A jó cím rövid, kifejező, jelzi a témát/nézőpontot; nem kötelező kérdő."
  },
  {
    q: "Mi a tételmondat szerepe bekezdésben?",
    options: [
      "Csak dísz",
      "A bekezdés központi állítását fogalmazza meg",
      "A befejezés helyett használjuk",
      "Mindig idézet"
    ],
    correctIndex: 1,
    exp: "A tételmondat megnevezi a bekezdés lényegi állítását, amelyet példák, magyarázatok követnek."
  },
  {
    q: "Mit érdemes kerülni érvelésben?",
    options: [
      "Személyeskedő támadást (ad hominem)",
      "Konkrét példákat",
      "Logikai kötőszókat",
      "Hiteles forrásokat"
    ],
    correctIndex: 0,
    exp: "Az ad hominem nem az állítást támadja, hanem a személyt – ez érvelési hiba."
  },
  {
    q: "Melyik mondat világosabb?",
    options: [
      "Sok szempontból nézve úgy tűnik, hogy talán jó lenne esetleg megfontolni…",
      "A könyvtár bővítése szükséges: több hely és csend kell a tanuláshoz.",
      "Vannak olyan esetek, amikor ez meg az történik",
      "Nyilvánvalóan nem biztos, hogy igen"
    ],
    correctIndex: 1,
    exp: "A világos mondat konkrét, tömör és állítást fogalmaz meg indokkal."
  },
  {
    q: "Mire figyelünk idézet használatakor?",
    options: [
      "Ne legyen forrás",
      "Pontosan és jelölten idézzünk, és illesszük a szövegbe",
      "Mindig félkövérrel írjuk",
      "Lehetőleg félreérthető legyen"
    ],
    correctIndex: 1,
    exp: "Idézetnél: pontos szöveg, idézőjel/forrás megadása, grammatikai illesztés a mondatba."
  },
  {
    q: "Mi segíti a bekezdések közti átmenetet?",
    options: [
      "Szóismétlés",
      "Ugyanaz a mondat kétszer",
      "Kohéziós eszközök: kötőszók, utalások, kulcsszavak",
      "Csupa felkiáltójel"
    ],
    correctIndex: 2,
    exp: "Kohéziós eszközök teremtenek kapcsolatot: ezért, továbbá, emellett, ugyanakkor, következésképp…"
  },
  {
    q: "Mi a végső ellenőrzés jó sorrendje?",
    options: [
      "Helyesírás → tartalom → szerkezet",
      "Tartalom/szerkezet → stílus → helyesírás",
      "Cím → bevezetés → befejezés → tárgyalás",
      "Semmilyen sorrend nem kell"
    ],
    correctIndex: 1,
    exp: "Előbb a nagy egészet (tartalom/szerkezet), aztán a nyelvi-stilisztikai simítás, végül helyesírás."
  }
];

// SECTION az altémához
export const section_fogalmazas_lepesei = {
  id: "fogalmazas_lepesei",
  title: "Szövegalkotás IV. 🟩 Fogalmazás – a szövegalkotás lépései",
  bank: bank_fogalmazas_lepesei,
};
// 🟦 NYELVTAN 8 – KOMMUNIKÁCIÓ ÉS RETORIKA I. A kommunikáció fogalma és tényezői
export const bank_kommunikacio_fogalma: Question[] = [
  {
    q: "Mit jelent a kommunikáció?",
    options: [
      "Beszélgetést két ember között",
      "Információcsere két vagy több fél között",
      "Csak szóban történő üzenetátadást",
      "Írott szövegek elemzését"
    ],
    correctIndex: 1,
    exp: "A kommunikáció információcsere: üzenetek küldése és fogadása bármilyen jelrendszer segítségével."
  },
  {
    q: "Ki a kommunikáció adója?",
    options: [
      "Aki az üzenetet fogadja",
      "Aki az üzenetet küldi",
      "Aki közvetíti az üzenetet",
      "Aki félreérti az üzenetet"
    ],
    correctIndex: 1,
    exp: "Az adó az, aki az üzenetet megfogalmazza és eljuttatja a címzetthez."
  },
  {
    q: "Ki a kommunikáció vevője?",
    options: [
      "Aki megfogalmazza az üzenetet",
      "Aki feldolgozza és értelmezi az üzenetet",
      "Aki csak megismétli az üzenetet",
      "Aki zajt kelt a folyamatban"
    ],
    correctIndex: 1,
    exp: "A vevő a kommunikáció címzettje: ő értelmezi az üzenetet, és reagálhat rá."
  },
  {
    q: "Mi a kód a kommunikációban?",
    options: [
      "A titkosítás módja",
      "A közös jelrendszer (pl. nyelv), amelyben az üzenetet megfogalmazzuk",
      "A kommunikáció csatornája",
      "Az üzenet másolata"
    ],
    correctIndex: 1,
    exp: "A kód az a közös jelrendszer (pl. magyar nyelv), amelyet az adó és a vevő ismer."
  },
  {
    q: "Mi a csatorna a kommunikációban?",
    options: [
      "Az üzenet megfogalmazója",
      "Az üzenet útja az adótól a vevőig (pl. hang, írás, internet)",
      "A zaj forrása",
      "A kommunikáció eredménye"
    ],
    correctIndex: 1,
    exp: "A csatorna közvetíti az üzenetet – például hanghullám, papír, levegő, internet."
  },
  {
    q: "Mi a zaj a kommunikációban?",
    options: [
      "A háttérzaj a rádióban",
      "Minden tényező, ami megzavarja az üzenet megértését",
      "A hangos beszéd",
      "A visszajelzés"
    ],
    correctIndex: 1,
    exp: "Zajnak nevezzük mindazt, ami akadályozza vagy torzítja az üzenet eljutását és értelmezését."
  },
  {
    q: "Mit nevezünk üzenetnek?",
    options: [
      "A kommunikáció folyamatát",
      "A továbbított információt, amit az adó közölni akar",
      "A vevő reakcióját",
      "A beszélgetés helyét"
    ],
    correctIndex: 1,
    exp: "Az üzenet a közlés tartalma, amit az adó a vevőnek átadni kíván."
  },
  {
    q: "Mi a visszacsatolás (feedback)?",
    options: [
      "A vevő válasza vagy reakciója az üzenetre",
      "Az üzenet ismétlése",
      "A kommunikáció leállítása",
      "A hibás értelmezés"
    ],
    correctIndex: 0,
    exp: "A visszacsatolás a vevő reakciója, amelyből az adó megtudja, megértették-e az üzenetét."
  },
  {
    q: "Melyik tényező NEM része a kommunikációs folyamatnak?",
    options: ["Adó", "Csatorna", "Szereplő", "Zaj"],
    correctIndex: 2,
    exp: "A kommunikáció tényezői: adó, vevő, üzenet, kód, csatorna, zaj, visszacsatolás."
  },
  {
    q: "Mi történik, ha a kommunikációban nincs közös kód?",
    options: [
      "Nem jön létre megértés",
      "A beszélgetés gyorsabb lesz",
      "A kommunikáció pontosabbá válik",
      "Semmi probléma nincs"
    ],
    correctIndex: 0,
    exp: "Ha az adó és a vevő nem ugyanazt a kódot használja (pl. különböző nyelvet), a megértés meghiúsul."
  },
  {
    q: "Miért fontos a figyelem a kommunikációban?",
    options: [
      "Mert így gyorsabban beszélünk",
      "Mert segít az üzenet pontos értelmezésében",
      "Mert az adó jobban hallatszik",
      "Mert hangosabbá teszi a beszédet"
    ],
    correctIndex: 1,
    exp: "A figyelem biztosítja, hogy a vevő valóban megértse az üzenet tartalmát és szándékát."
  },
  {
    q: "Mi jellemzi a hatékony kommunikációt?",
    options: [
      "Egyirányú, gyors információáramlás",
      "Kétirányú, visszacsatolással kísért megértés",
      "Túl sok idegen szó használata",
      "A rövid válaszok"
    ],
    correctIndex: 1,
    exp: "Hatékony kommunikáció akkor jön létre, ha a felek kölcsönösen megértik egymást, visszajeleznek."
  },
  {
    q: "Mit nevezünk kommunikációs helyzetnek?",
    options: [
      "A beszélgetés pontos helyét",
      "A beszélgetés idejét",
      "A közlés körülményeit: ki, kinek, mit, miért, hogyan, milyen csatornán",
      "A kommunikációs zaj mértékét"
    ],
    correctIndex: 2,
    exp: "Kommunikációs helyzet: a közlés teljes környezete – a szereplők, cél, forma és körülmények."
  },
  {
    q: "Miért fontos a közös előismeret az adó és a vevő között?",
    options: [
      "Gyorsabbá teszi az írást",
      "Segíti az üzenet megértését és értelmezését",
      "Nincs jelentősége",
      "Zajt okoz a beszélgetésben"
    ],
    correctIndex: 1,
    exp: "A közös tapasztalat, előismeret segíti, hogy a vevő pontosan értse a szándékot és az üzenetet."
  },
  {
    q: "Mitől lesz félreértés a kommunikációban?",
    options: [
      "Ha túl sok visszacsatolás van",
      "Ha az üzenet nem egyértelmű vagy a kód nem közös",
      "Ha mindkét fél ugyanazt mondja",
      "Ha a beszéd halk"
    ],
    correctIndex: 1,
    exp: "A félreértés oka legtöbbször a homályos megfogalmazás, a zaj vagy a nem közös jelrendszer."
  },
  {
    q: "Mi jellemzi az egyirányú kommunikációt?",
    options: [
      "Csak az adó küld üzenetet, nincs visszajelzés",
      "A vevő folyamatosan kérdez",
      "Mindkét fél egyszerre beszél",
      "Mindig írásban történik"
    ],
    correctIndex: 0,
    exp: "Egyirányú a kommunikáció, ha nincs visszajelzés, pl. rádió, TV, plakát."
  },
  {
    q: "Mi jellemzi a kétirányú kommunikációt?",
    options: [
      "Csak az egyik fél beszél",
      "Nincs visszacsatolás",
      "Az adó és a vevő folyamatosan szerepet cserélnek",
      "Mindig géppel történik"
    ],
    correctIndex: 2,
    exp: "A kétirányú kommunikációban a szerepek váltakoznak: az adó vevővé, a vevő adóvá válhat."
  },
  {
    q: "Mi történik, ha a visszacsatolás elmarad?",
    options: [
      "A kommunikációs folyamat befejeződik",
      "Nem biztos, hogy a vevő megértette az üzenetet",
      "Tisztább lesz az információ",
      "Több üzenet fér bele"
    ],
    correctIndex: 1,
    exp: "Visszacsatolás nélkül nem tudjuk, hogy az üzenet célba ért-e vagy félreértették."
  },
  {
    q: "Mi jellemző a kommunikációs zajra az internetes üzenetváltásban?",
    options: [
      "Nem fordulhat elő",
      "Lehet technikai (pl. lassú kapcsolat) vagy nyelvi félreértés",
      "Csak hanghiba",
      "Mindig a címzett hibája"
    ],
    correctIndex: 1,
    exp: "Az online kommunikációban a zaj lehet technikai (hiba, késés) vagy nyelvi félreértés is."
  },
  {
    q: "Mikor sikeres a kommunikáció?",
    options: [
      "Ha az adó kimondta az üzenetet",
      "Ha a vevő megértette az üzenetet a szándék szerint",
      "Ha nincs visszacsatolás",
      "Ha a beszéd gyors volt"
    ],
    correctIndex: 1,
    exp: "A kommunikáció akkor sikeres, ha a vevő ugyanazt az üzenetet érti, amit az adó közölni akart."
  }
];

// SECTION az altémához
export const section_kommunikacio_fogalma = {
  id: "kommunikacio_fogalma",
  title: "Kommunikáció és retorika I. 🟦 A kommunikáció fogalma és tényezői",
  bank: bank_kommunikacio_fogalma,
};
// 🟦 NYELVTAN 8 – KOMMUNIKÁCIÓ ÉS RETORIKA II. A kommunikáció formái és fajtái
export const bank_kommunikacio_formai: Question[] = [
  {
    q: "Mi alapján különböztetjük meg a kommunikáció formáit?",
    options: [
      "A használt eszköz és a résztvevők száma alapján",
      "A beszéd sebessége alapján",
      "A helyszín és napszak szerint",
      "A hangmagasság alapján"
    ],
    correctIndex: 0,
    exp: "A kommunikáció formái az eszköz (pl. szó, írás, gesztus) és a résztvevők kapcsolata alapján különülnek el."
  },
  {
    q: "Melyik NEM verbális kommunikáció?",
    options: [
      "Beszéd",
      "Írás",
      "Testtartás",
      "Előadás"
    ],
    correctIndex: 2,
    exp: "A testtartás nem verbális (nem nyelvi) közlésmód, gesztusnak számít."
  },
  {
    q: "Mit jelent a verbális kommunikáció?",
    options: [
      "Nem nyelvi eszközökkel való közlést",
      "Szóbeli és írásbeli nyelvi eszközökkel való közlést",
      "Csak arckifejezésekkel való közlést",
      "Csak elektronikus kommunikációt"
    ],
    correctIndex: 1,
    exp: "Verbális kommunikáció minden, ami nyelvi jelekkel történik: beszéd, írás, olvasás."
  },
  {
    q: "Melyik NEM verbális csatorna?",
    options: [
      "Hanghullám",
      "Levegő",
      "Testbeszéd",
      "Papír"
    ],
    correctIndex: 2,
    exp: "A testbeszéd nem csatorna, hanem nem verbális közlésmód."
  },
  {
    q: "Mi a nem verbális kommunikáció?",
    options: [
      "A nyelvi szavak nélküli közlésmód (gesztus, mimika, testtartás, tekintet stb.)",
      "Csak írott formában történő közlés",
      "Hangos kommunikáció",
      "Az információs zaj formája"
    ],
    correctIndex: 0,
    exp: "A nem verbális kommunikáció nem szavakkal, hanem mozdulatokkal, tekintettel, mimikával történik."
  },
  {
    q: "Melyik NEM a nem verbális kommunikáció része?",
    options: [
      "Gesztus",
      "Hanghordozás",
      "Kézfogás",
      "Főnévhasználat"
    ],
    correctIndex: 3,
    exp: "A főnévhasználat nyelvi, tehát verbális elem, nem tartozik a testbeszédhez."
  },
  {
    q: "Melyik a verbális kommunikáció írásbeli formája?",
    options: [
      "Telefonbeszélgetés",
      "Levelezés",
      "Testtartás",
      "Mosoly"
    ],
    correctIndex: 1,
    exp: "A levelezés írásbeli verbális kommunikáció, mert nyelvi jeleket használ."
  },
  {
    q: "Mi jellemző a közvetlen kommunikációra?",
    options: [
      "Az adó és a vevő egy térben, időben vannak jelen",
      "Technikai eszközt igényel",
      "Kizárólag írott formájú",
      "Nincs visszacsatolás"
    ],
    correctIndex: 0,
    exp: "Közvetlen a kommunikáció, ha az adó és vevő személyesen jelen van, pl. beszélgetéskor."
  },
  {
    q: "Mi jellemző a közvetett kommunikációra?",
    options: [
      "Az adó és a vevő személyesen találkozik",
      "Technikai eszközt használ (pl. telefon, e-mail)",
      "Nincs üzenet",
      "Mindig zajos"
    ],
    correctIndex: 1,
    exp: "Közvetett kommunikáció, ha eszköz közvetíti az üzenetet, pl. telefon, e-mail, újság."
  },
  {
    q: "Mi a különbség az írott és a szóbeli kommunikáció között?",
    options: [
      "Az írott lassabb, átgondoltabb; a szóbeli gyorsabb, közvetlenebb",
      "Az írott mindig zajosabb",
      "A szóbeli mindig pontosabb",
      "Az írott mindig rövidebb"
    ],
    correctIndex: 0,
    exp: "Az írott kommunikáció átgondolt, tartós; a szóbeli gyors, azonnali visszajelzést ad."
  },
  {
    q: "Melyik példa a tömegkommunikációra?",
    options: [
      "Osztályfőnöki óra",
      "Rádióadás",
      "Személyes beszélgetés",
      "Csoportos vita"
    ],
    correctIndex: 1,
    exp: "A rádió, TV, újság, internet a tömegkommunikáció eszközei: sok emberhez jut el egyszerre az üzenet."
  },
  {
    q: "Mit nevezünk csoportos kommunikációnak?",
    options: [
      "Két ember közötti beszélgetést",
      "Kisebb közösségben történő kommunikációt, pl. osztály, csapat",
      "Tömegmédiát",
      "E-mailt"
    ],
    correctIndex: 1,
    exp: "Csoportos kommunikáció: több ember beszélget, de még személyes kapcsolatban, pl. osztályvita."
  },
  {
    q: "Melyik jellemző az egyéni kommunikációra?",
    options: [
      "Mindig közönség előtt zajlik",
      "Személyes, egy adó–egy vevő viszony",
      "Technikai eszközt igényel",
      "Tömegekhez szól"
    ],
    correctIndex: 1,
    exp: "Egyéni kommunikáció: közvetlen, személyes kapcsolatban, pl. baráti beszélgetés."
  },
  {
    q: "Milyen kommunikáció zajlik az osztályban a tanár és diákok között?",
    options: [
      "Tömegkommunikáció",
      "Csoportos kommunikáció",
      "Személyes írásbeli kommunikáció",
      "Nem verbális kommunikáció"
    ],
    correctIndex: 1,
    exp: "A tanár–diák helyzet csoportos kommunikáció, mert kis közösségben zajlik."
  },
  {
    q: "Melyik NEM jellemző a nem verbális kommunikációra?",
    options: [
      "Kiegészíti a verbális közlést",
      "Ellentmondhat a verbális üzenetnek",
      "Kizárólag írásban történik",
      "Érzelmeket fejez ki"
    ],
    correctIndex: 2,
    exp: "A nem verbális közlés nem írott, hanem gesztusos, testbeszéd alapú."
  },
  {
    q: "Mi jellemző az informális kommunikációra?",
    options: [
      "Kötetlen, baráti, személyes jellegű",
      "Szabályozott, hivatalos, előírt formájú",
      "Mindig írásban zajlik",
      "Szigorúan érzelemmentes"
    ],
    correctIndex: 0,
    exp: "Informális kommunikáció a kötetlen, személyes jellegű közlés, pl. baráti beszélgetés."
  },
  {
    q: "Mi jellemző a formális kommunikációra?",
    options: [
      "Kötetlen, érzelmes stílus",
      "Szabályokhoz kötött, hivatalos hangnem",
      "Mindig szóban történik",
      "Csak a családtagok között használatos"
    ],
    correctIndex: 1,
    exp: "Formális kommunikáció hivatalos keretek között, például munkahelyen, iskolában."
  },
  {
    q: "Melyik forma NEM jellemző az internetes kommunikációra?",
    options: [
      "Chat, e-mail, videóhívás",
      "Azonnali visszacsatolás lehetősége",
      "Mindig élőszavas párbeszéd",
      "Képi és írott elemek keveredése"
    ],
    correctIndex: 2,
    exp: "Az internetes kommunikáció gyakran írott és képi, de nem mindig élőszavas."
  },
  {
    q: "Melyik kommunikációs forma igényli leginkább a visszajelzést?",
    options: [
      "Egyirányú kommunikáció",
      "Tömegkommunikáció",
      "Kétirányú személyes kommunikáció",
      "Rádióadás"
    ],
    correctIndex: 2,
    exp: "A kétirányú személyes kommunikáció azonnali visszajelzést igényel és lehetővé is tesz."
  },
  {
    q: "Miért fontos a nem verbális kommunikáció figyelése?",
    options: [
      "Mert árulkodik az érzelmi állapotról és a valódi szándékról",
      "Mert helyettesíti az üzenetet",
      "Mert mindig félrevezető",
      "Mert csak a színészek használják"
    ],
    correctIndex: 0,
    exp: "A testbeszéd, mimika, hangszín gyakran elárulja az érzelmeket – kiegészíti vagy árnyalja a szóbeli közlést."
  }
];

// SECTION az altémához
export const section_kommunikacio_formai = {
  id: "kommunikacio_formai",
  title: "Kommunikáció és retorika II. 🟩 A kommunikáció formái és fajtái",
  bank: bank_kommunikacio_formai,
};
// 🟦 NYELVTAN 8 – KOMMUNIKÁCIÓ ÉS RETORIKA III. A retorika alapjai – a meggyőző beszéd
export const bank_retorika_alapjai: Question[] = [
  {
    q: "Mit jelent a retorika?",
    options: [
      "Az írás szabályait",
      "A meggyőző, hatásos beszéd művészetét",
      "A helyesírás tanát",
      "A testbeszéd tudományát"
    ],
    correctIndex: 1,
    exp: "A retorika a meggyőző, hatásos beszéd és érvelés művészete, amely már az ókorban is létezett."
  },
  {
    q: "Ki volt az egyik legismertebb ókori szónok?",
    options: ["Arisztotelész", "Cicero", "Platón", "Homérosz"],
    correctIndex: 1,
    exp: "Marcus Tullius Cicero a római szónoklás egyik legnagyobb alakja volt."
  },
  {
    q: "Mit nevezünk szónoklatnak?",
    options: [
      "Rövid írásbeli üzenetet",
      "Nyilvános, meggyőző céllal tartott beszédet",
      "Hivatalos iratot",
      "Csoportos vitát"
    ],
    correctIndex: 1,
    exp: "A szónoklat nyilvános beszéd, amelynek célja a hallgatóság befolyásolása, meggyőzése."
  },
  {
    q: "Mi a retorika célja?",
    options: [
      "A beszéd szépítése",
      "A hallgatóság meggyőzése, befolyásolása, érzelmi hatás kiváltása",
      "A gyors beszéd megtanulása",
      "A helyes kiejtés gyakorlása"
    ],
    correctIndex: 1,
    exp: "A retorika célja, hogy a beszélő a hallgatóságot gondolkodásban, érzelmekben befolyásolja."
  },
  {
    q: "Melyik NEM a hatásos beszéd része?",
    options: [
      "Megfelelő felkészülés",
      "Világos szerkezet",
      "Zavaros mondatszerkezet",
      "Érzelmi azonosulás a témával"
    ],
    correctIndex: 2,
    exp: "A zavaros szerkezet rontja a megértést, ezért a hatásos beszéd mindig világos, tagolt."
  },
  {
    q: "Melyik az érvelő beszéd legfontosabb jellemzője?",
    options: [
      "Elmesél egy történetet",
      "Kifejt egy álláspontot és érvekkel támasztja alá",
      "Csak kérdéseket tesz fel",
      "Leíró jellegű"
    ],
    correctIndex: 1,
    exp: "Az érvelő beszéd célja, hogy logikus érvekkel meggyőzzön egy állítás igazságáról."
  },
  {
    q: "Mi a logosz az ókori retorikában?",
    options: [
      "Érzelmi hatás",
      "Ésszerű, logikus érvelés",
      "A szónok megjelenése",
      "A hallgatóság reakciója"
    ],
    correctIndex: 1,
    exp: "Arisztotelész szerint a logosz a józan, logikus érvek alkalmazása a meggyőzésben."
  },
  {
    q: "Mi az etosz az ókori retorikában?",
    options: [
      "A szónok jelleméből fakadó hitelesség",
      "Az érzelmi hatás eszköze",
      "A történetek elmesélése",
      "A nyelvi díszítés"
    ],
    correctIndex: 0,
    exp: "Az etosz a szónok jellemének, hitelességének, tekintélyének meggyőző ereje."
  },
  {
    q: "Mit jelent a pátosz a retorikában?",
    options: [
      "A logikus gondolkodást",
      "Az érzelmi hatást és lelkesítő előadást",
      "A rövid beszédet",
      "A hivatalos hangnemet"
    ],
    correctIndex: 1,
    exp: "A pátosz az érzelmekre ható előadásmód, amely lelkesíti a hallgatóságot."
  },
  {
    q: "Mi az érvelés célja?",
    options: [
      "Ellentmondás keresése",
      "Álláspont igazolása érvekkel és példákkal",
      "Szórakoztatás",
      "Történetmesélés"
    ],
    correctIndex: 1,
    exp: "Az érvelés célja, hogy logikus bizonyítékokkal alátámassza az állítást."
  },
  {
    q: "Melyik hiba rontja a meggyőző beszédet?",
    options: [
      "Túl sok idegen szó",
      "Világos felépítés",
      "Tételmondatok használata",
      "Példák beépítése"
    ],
    correctIndex: 0,
    exp: "A túl sok idegen szó zavaró, mert a hallgatóság nem minden tagja érti pontosan."
  },
  {
    q: "Mi jellemzi a jó szónokot?",
    options: [
      "Tisztán, érthetően, logikusan beszél, és kapcsolatot tart a hallgatósággal",
      "Gyorsan beszél és sok idegen szót használ",
      "Nem figyel a hallgatókra",
      "Olvasás nélkül rögtönöz"
    ],
    correctIndex: 0,
    exp: "A jó szónok figyel a hallgatóságra, világosan, érthetően és felkészülten beszél."
  },
  {
    q: "Mitől lesz hiteles egy szónok?",
    options: [
      "Ha tekintélyt sugároz és következetes a mondanivalója",
      "Ha túlzottan érzelmes",
      "Ha sokszor ismétli magát",
      "Ha csak olvassa a szöveget"
    ],
    correctIndex: 0,
    exp: "A hitelesség alapja az etikus viselkedés, az őszinteség és a következetesség."
  },
  {
    q: "Mi a retorikai kérdés?",
    options: [
      "Olyan kérdés, amire nem vár választ, mert az nyilvánvaló",
      "Feleletválasztós kérdés",
      "Kérdőre vonás",
      "Kérdő mondat a vizsgán"
    ],
    correctIndex: 0,
    exp: "A retorikai kérdés gondolatébresztő, nem vár tényleges választ, csak hatást gyakorol."
  },
  {
    q: "Mi a példa szerepe az érvelésben?",
    options: [
      "Díszítés",
      "Az állítás igazolása, érthetőbbé tétele",
      "Témaváltás",
      "Közbevetés"
    ],
    correctIndex: 1,
    exp: "A példa segíti a hallgatót a megértésben, konkrétan alátámasztja az elvont állítást."
  },
  {
    q: "Mi a beszéd felépítésének klasszikus hármassága?",
    options: [
      "Bevezetés – tárgyalás – befejezés",
      "Cím – főrész – forrásjegyzék",
      "Téma – érvek – cáfolat",
      "Előkészítés – kifejtés – zárás"
    ],
    correctIndex: 0,
    exp: "A szónoki beszéd klasszikus felépítése: bevezetés, tárgyalás, befejezés."
  },
  {
    q: "Melyik retorikai eszköz fokozza az érzelmi hatást?",
    options: [
      "Szemléltető hasonlatok, ismétlés, hangulatfestő szavak",
      "Túlzott bonyolultság",
      "Latin idézetek",
      "Monoton hang"
    ],
    correctIndex: 0,
    exp: "A hasonlat, ismétlés és hangulatfestő szó gazdagítja a beszéd érzelmi erejét."
  },
  {
    q: "Mi az érvelési hiba?",
    options: [
      "Ha az állítás nincs bizonyítva, vagy logikai ellentmondás van benne",
      "Ha túl hosszú a beszéd",
      "Ha rövid a tételmondat",
      "Ha sok a gesztus"
    ],
    correctIndex: 0,
    exp: "Érvelési hiba az, ha az állítás nincs bizonyítva, vagy az érvek nem logikusan következnek egymásból."
  },
  {
    q: "Miért fontos a hallgatóság ismerete a retorikában?",
    options: [
      "Mert így választható megfelelő hangnem, érvelés és példák",
      "Mert a beszéd hossza attól függ",
      "Mert a szónok így hangosabban beszélhet",
      "Mert a hallgatóság írja a beszédet"
    ],
    correctIndex: 0,
    exp: "A hatásos szónok alkalmazkodik a hallgatóság előismereteihez, korához, érdeklődéséhez."
  },
  {
    q: "Mi jellemző a hatásos zárásra?",
    options: [
      "Új téma felvetése",
      "A fő gondolat összefoglalása, felhívás vagy tanulság",
      "Hosszú idézetek sorolása",
      "Viccel zárás minden esetben"
    ],
    correctIndex: 1,
    exp: "A zárás emlékezetessé teszi a beszédet: összegzi, lezárja vagy cselekvésre ösztönöz."
  }
];

// SECTION az altémához
export const section_retorika_alapjai = {
  id: "retorika_alapjai",
  title: "Kommunikáció és retorika III. 🟨 A retorika alapjai – a meggyőző beszéd",
  bank: bank_retorika_alapjai,
};
// 🟦 NYELVTAN 8 – KOMMUNIKÁCIÓ ÉS RETORIKA IV. A nyilvános beszéd és érvelés technikái
export const bank_nyilvanos_beszed: Question[] = [
  {
    q: "Mi a nyilvános beszéd célja?",
    options: [
      "A hallgatóság tájékoztatása, meggyőzése vagy befolyásolása",
      "A gyors beszédgyakorlat",
      "A vita elkerülése",
      "A hallgatóság szórakoztatása csak"
    ],
    correctIndex: 0,
    exp: "A nyilvános beszéd célja lehet informálás, meggyőzés, buzdítás vagy szórakoztatás."
  },
  {
    q: "Mi a sikeres nyilvános beszéd első lépése?",
    options: [
      "A téma és cél pontos meghatározása",
      "A hosszú bevezetés kidolgozása",
      "A közönség megfélemlítése",
      "A szöveg bemagolása"
    ],
    correctIndex: 0,
    exp: "A szónoklás alapja a pontos cél és téma meghatározása, hogy tudjuk, mit és miért akarunk mondani."
  },
  {
    q: "Miért fontos a hallgatóság ismerete?",
    options: [
      "Mert meghatározza a hangnemet, példákat és stílust",
      "Mert ettől lesz rövidebb a beszéd",
      "Mert ez dönti el, mennyi ideig tart a beszéd",
      "Nem fontos egyáltalán"
    ],
    correctIndex: 0,
    exp: "A beszédet mindig a hallgatóság előismereteihez, érdeklődéséhez és életkorához kell igazítani."
  },
  {
    q: "Melyik NEM jellemző a jó előadóra?",
    options: [
      "Figyel a hallgatóság reakcióira",
      "Érthetően, megfelelő hangerővel beszél",
      "Elhadarja a szöveget, hogy gyorsabban végezzen",
      "Képes lelkesedést kelteni"
    ],
    correctIndex: 2,
    exp: "A hadarás rontja a megértést, a jó előadó tempósan, hangsúlyosan és érthetően beszél."
  },
  {
    q: "Mi jellemzi a jó testbeszédet nyilvános beszéd közben?",
    options: [
      "Természetes, nyitott mozdulatok, szemkontaktus",
      "Karba tett kéz és lesütött szem",
      "Túlzott gesztikulálás és ideges mozdulatok",
      "Merev testtartás"
    ],
    correctIndex: 0,
    exp: "A testbeszéd is kommunikáció: nyitottság, magabiztosság és kapcsolat a hallgatókkal."
  },
  {
    q: "Melyik a hatásos kezdés egyik módja?",
    options: [
      "Érdekes adat, idézet vagy kérdés felvetése",
      "Hosszú bevezető olvasása",
      "Téma nélküli történet mesélése",
      "Halkan mormolni a szöveget"
    ],
    correctIndex: 0,
    exp: "A figyelem felkeltésére hatásos a kérdés, idézet vagy frappáns tény a bevezetésben."
  },
  {
    q: "Mi a szemkontaktus szerepe a beszédben?",
    options: [
      "Megteremti a kapcsolatot és bizalmat a hallgatósággal",
      "Zavaró a közönség számára",
      "Csak a tanároknál fontos",
      "Kerülendő a zavar elkerülése miatt"
    ],
    correctIndex: 0,
    exp: "A szemkontaktus figyelmet, bizalmat és kapcsolatot teremt a közönséggel."
  },
  {
    q: "Milyen a jó hanghasználat?",
    options: [
      "Változatos hangerő, hangsúly és tempó",
      "Monoton és halk beszéd",
      "Túl gyors és hadaró stílus",
      "Mindig kiabáló"
    ],
    correctIndex: 0,
    exp: "A változatos hanglejtés és hangerő fenntartja a figyelmet és segíti a megértést."
  },
  {
    q: "Mi a szerepe a példáknak és történeteknek a beszédben?",
    options: [
      "Unalmassá teszik a beszédet",
      "Szemléletessé, érthetővé és személyessé teszik a mondanivalót",
      "Elterelik a figyelmet",
      "Csak a viccelődés részei"
    ],
    correctIndex: 1,
    exp: "A példák, történetek segítik az azonosulást és könnyebbé teszik az üzenet befogadását."
  },
  {
    q: "Mit érdemes kerülni a nyilvános beszéd során?",
    options: [
      "Túlzott ide-oda járkálást, töltelékszavakat és monotonitást",
      "Példák használatát",
      "Szemkontaktust",
      "Hangszínbeli változatosságot"
    ],
    correctIndex: 0,
    exp: "A zavaró mozdulatok és töltelékszavak csökkentik a hatást; a természetes előadás meggyőzőbb."
  },
  {
    q: "Mi a jegyzet célja a beszéd közben?",
    options: [
      "Teljes szöveg felolvasása",
      "Támpontot ad, segíti a logikai sorrend megtartását",
      "A közönség megzavarása",
      "Szó szerinti olvasás"
    ],
    correctIndex: 1,
    exp: "A jegyzet csak mankó, nem szó szerinti szöveg: a szónok szabadon, de szervezetten beszél."
  },
  {
    q: "Melyik a jó beszéd felépítése?",
    options: [
      "Bevezetés – tárgyalás – befejezés",
      "Téma – kérdések – vita",
      "Tézis – példa – idézet",
      "Felvezetés – elkalandozás – zárás"
    ],
    correctIndex: 0,
    exp: "A klasszikus szerkezet itt is érvényes: bevezetés (ráhangolás), tárgyalás (kifejtés), befejezés (lezárás)."
  },
  {
    q: "Mi a leggyakoribb érvelési hiba nyilvános vitában?",
    options: [
      "Személyeskedés és logikai ellentmondás",
      "Túl sok tény használata",
      "Túl rövid mondatok",
      "Csendes beszéd"
    ],
    correctIndex: 0,
    exp: "Az érvelés hibája az ad hominem (személyeskedés) és a logikai következetlenség."
  },
  {
    q: "Mi segíti a hallgatóság figyelmének fenntartását?",
    options: [
      "Hanglejtés, kérdések, humor, szemkontaktus",
      "Monoton felolvasás",
      "Csak a kézmozdulatok",
      "Gyorsan befejezett beszéd"
    ],
    correctIndex: 0,
    exp: "A figyelem fenntartását a változatos hanglejtés, közvetlenség és interakció segíti."
  },
  {
    q: "Miért fontos a felkészülés?",
    options: [
      "Csökkenti a lámpalázat, növeli a magabiztosságot",
      "Felesleges időpocsékolás",
      "Nem számít a hallgatóságnak",
      "Csak az improvizálás jobb"
    ],
    correctIndex: 0,
    exp: "A felkészültség biztonságot ad és lehetővé teszi a természetes, meggyőző előadást."
  },
  {
    q: "Mi a lámpaláz?",
    options: [
      "Fizikai izgalom és feszültség nyilvános szereplés előtt",
      "A színpadi világítás hibája",
      "Az unalom jele",
      "A közönség reakciója"
    ],
    correctIndex: 0,
    exp: "A lámpaláz természetes izgalmi állapot, amit gyakorlással és légzéstechnikával csökkenteni lehet."
  },
  {
    q: "Mi jellemző a jó zárásra a nyilvános beszédben?",
    options: [
      "Fő gondolat kiemelése, összegzés vagy felhívás",
      "Új témák felvetése",
      "Elhallgatás közben",
      "Túl hosszú köszöngetés"
    ],
    correctIndex: 0,
    exp: "A hatásos zárás összegzi a lényeget és gyakran felhívással vagy gondolatébresztéssel zár."
  },
  {
    q: "Mi a vita célja?",
    options: [
      "Más vélemények ütköztetése kulturált formában",
      "Hangos veszekedés",
      "A másik megalázása",
      "A gyors döntés"
    ],
    correctIndex: 0,
    exp: "A vita célja a különböző álláspontok ütköztetése érvek alapján, tisztelettel."
  },
  {
    q: "Mit jelent az, hogy érvelési stratégia?",
    options: [
      "Az érvek logikus felépítése és sorrendje a cél elérése érdekében",
      "A beszéd hangerejének váltogatása",
      "Túlzott gesztikulálás",
      "Az ellenfél kinevetése"
    ],
    correctIndex: 0,
    exp: "Az érvelési stratégia tudatos terv: milyen sorrendben, milyen érvekkel hatunk a hallgatóságra."
  },
  {
    q: "Miért fontos a nyitottság vitában?",
    options: [
      "Segíti a közös megértést és a kulturált párbeszédet",
      "Gyengeséget mutat",
      "Lassítja a vitát",
      "Nem fontos, csak a győzelem számít"
    ],
    correctIndex: 0,
    exp: "A nyitottság, más vélemények meghallgatása segíti a kölcsönös tiszteletet és a meggyőzést."
  }
];

// SECTION az altémához
export const section_nyilvanos_beszed = {
  id: "nyilvanos_beszed",
  title: "Kommunikáció és retorika IV. 🟦 A nyilvános beszéd és érvelés technikái",
  bank: bank_nyilvanos_beszed,
};
// 🟪 NYELVTAN 8 – STÍLUS ÉS STILISZTIKA I. A stílus fogalma és tényezői
export const bank_stilus_fogalma: Question[] = [
  {
    q: "Mit nevezünk stílusnak?",
    options: [
      "A szöveg hosszát és betűtípusát",
      "A nyelvi eszközök tudatos, célnak és helyzetnek megfelelő megválasztását",
      "A mondatok számát",
      "A rímek használatát"
    ],
    correctIndex: 1,
    exp: "A stílus a nyelvi kifejezésmód: az eszközök (szókincs, mondatszerkesztés, hangnem) célnak és helyzetnek megfelelő használata."
  },
  {
    q: "Melyik NEM stílustényező?",
    options: ["Téma/cél", "Kommunikációs helyzet", "Címzett", "Betűszín"],
    correctIndex: 3,
    exp: "A stílust a kommunikációs helyzet (ki, kinek, miért, hogyan), a téma/cél és a címzett befolyásolja – a betűszín tipográfia."
  },
  {
    q: "Mi a regiszter a stílusban?",
    options: [
      "A helyesírási szabályok gyűjteménye",
      "A helyzethez illő nyelvváltozat (hivatalos, köznyelvi, szleng, tudományos stb.)",
      "Csak az udvariassági formulák",
      "A mondatok hossza"
    ],
    correctIndex: 1,
    exp: "Regiszter = stílusváltozat: a helyzethez igazodó nyelvhasználat (formális–informális skála)."
  },
  {
    q: "Mi a hangnem (modor) szerepe?",
    options: [
      "A mondatok hossza lesz tőle nagyobb",
      "Érzelmi–akarati beállítódást jelez (tárgyilagos, barátságos, ünnepélyes stb.)",
      "Mindig vicces lesz a szöveg",
      "Csak írott szövegben van"
    ],
    correctIndex: 1,
    exp: "A hangnem kifejezi a beszélő viszonyát a témához és a címzetthez: tárgyilagos, közvetlen, ünnepélyes stb."
  },
  {
    q: "Melyik állítás igaz a stílus és cél kapcsolatára?",
    options: [
      "A stílusnak nincs köze a célhoz",
      "A cél (tájékoztatás, meggyőzés, felhívás) meghatározza a stíluseszközök választását",
      "Csak a címzett dönt",
      "A stílus mindig irodalmi"
    ],
    correctIndex: 1,
    exp: "Más eszköz kell tájékoztatáshoz (tárgyilagos), mint meggyőzéshez (érzelmi, retorikai fogások)."
  },
  {
    q: "Mi jellemzi a tárgyilagos (objektív) stílust?",
    options: [
      "Sok érzelem és túlzás",
      "Pontosság, egyértelműség, szakkifejezések mértékletes használata",
      "Szleng és közvetlenség",
      "Csak rövid mondatok"
    ],
    correctIndex: 1,
    exp: "A tárgyilagos stílus célja a világos, ellenőrizhető közlés: pontos terminusokkal, mértékkel."
  },
  {
    q: "Melyik példa informális, közvetlen stílusra?",
    options: [
      "Tisztelt Címzett! Mellékelten küldöm…",
      "Szia! Dobj egy üzit, ha jó így!",
      "Alulírott ezennel nyilatkozom…",
      "A vizsgálat eredményei az alábbiak:"
    ],
    correctIndex: 1,
    exp: "A „Szia! Dobj egy üzit…” informális, közvetlen regiszter és hangnem."
  },
  {
    q: "Melyik NEM stíluseszköz?",
    options: ["Metafora", "Hasonlat", "Fokozás", "Főnévi igenév"],
    correctIndex: 3,
    exp: "A főnévi igenév nyelvtani kategória; a metafora, hasonlat, fokozás stilisztikai eszközök."
  },
  {
    q: "Mi a szóhasználat (diktum) szerepe a stílusban?",
    options: [
      "A szavak véletlenszerű kiválasztása",
      "A jelentésárnyalatok tudatos megválasztása (szinonimák, hangulat, regiszter)",
      "Csak idegen szavak halmozása",
      "Csak ritka szavak keresése"
    ],
    correctIndex: 1,
    exp: "A szókészlet és jelentésárnyalatok megválasztása alapvetően meghatározza a stílust."
  },
  {
    q: "Mit jelent a tömörség elve?",
    options: [
      "Minél hosszabb annál jobb",
      "A lényeg kiemelése fölösleges szószaporítás nélkül",
      "Mindig egyszavas mondatok",
      "Csak felsorolás"
    ],
    correctIndex: 1,
    exp: "A világosság és tömörség alapelv: hagyjuk el a fölösleges töltelékszavakat."
  },
  {
    q: "Melyik stíluselv sérül a következőben? „Egy előre előirányzott terv szerint…”",
    options: ["Tömörség", "Udvariasság", "Nyomaték", "Zeneiség"],
    correctIndex: 0,
    exp: "Plenazmus (felesleges halmozás): „előre” + „előirányzott” → tömörség sérül."
  },
  {
    q: "Mi a célja a képszerűségnek a stílusban?",
    options: [
      "A tárgyilagosság megszüntetése",
      "Érzékletes, szemléletes hatás (szóképek, hasonlatok)",
      "A szöveg meghosszabbítása",
      "Csak versekben szerepelhet"
    ],
    correctIndex: 1,
    exp: "A képszerűség az érthetőséget és a hatást növeli – nem csak lírában alkalmazható."
  },
  {
    q: "Mikor indokolt a hivatalos stílus?",
    options: [
      "Baráti chaten",
      "Hivatalos ügyintézésnél, beadványoknál, nyilatkozatoknál",
      "Mesemondásnál",
      "Reklámszlogenben"
    ],
    correctIndex: 1,
    exp: "A hivatalos stílus kötött formulákat és pontos, jogilag egyértelmű nyelvet használ."
  },
  {
    q: "Melyik javítja a szöveg világosságát?",
    options: [
      "Túlzott idegen szavak",
      "Pontatlan megfogalmazás",
      "Példák, definíciók és tagolt szerkezet",
      "Bonyolult körmondatok halmozása"
    ],
    correctIndex: 2,
    exp: "A jól tagolt szerkezet és a példák a megértést segítik."
  },
  {
    q: "Mi a különbség a formális és informális stílus között?",
    options: [
      "Nincs különbség",
      "A formális szabályozott és tárgyilagosabb, az informális közvetlenebb és kötetlenebb",
      "A formális rövidebb",
      "Az informális csak írott"
    ],
    correctIndex: 1,
    exp: "Helyzettől és címzettől függ: hivatalos ügyben formális, baráti beszélgetésben informális stílus illik."
  },
  {
    q: "Melyik NEM illik tudományos stílusba?",
    options: ["Definíció", "Hivatkozás", "Pontatlanság", "Szaknyelv mértékkel"],
    correctIndex: 2,
    exp: "A tudományos stílus alapja a pontosság és ellenőrizhetőség – a pontatlanság ellentétes vele."
  },
  {
    q: "Melyik példa udvarias, mégis tömör megfogalmazásra?",
    options: [
      "Na, akkor ezt most gyorsan alá kéne írni!",
      "Kérem, írja alá az űrlapot.",
      "Lécci-lécci írd alá!",
      "Aláírni!"
    ],
    correctIndex: 1,
    exp: "Udvarias megszólítás + egyértelmű kérés → helyzethez illő stílus."
  },
  {
    q: "Mit nevezünk eufemizmusnak?",
    options: [
      "Túlzásnak",
      "Enyhébb, tapintatos kifejezésnek (pl. „elhunyt” a „meghalt” helyett)",
      "Ellentétnek",
      "Hangutánzó szónak"
    ],
    correctIndex: 1,
    exp: "Az eufemizmus udvariasabb, kevésbé nyers megfogalmazás."
  },
  {
    q: "Mi a túlzás (hiperbola) szerepe?",
    options: [
      "Mindig hazugság",
      "Nyomatékosít, érzelmi hatást kelt („ezer éve várok”)",
      "Csökkenti a hatást",
      "Csak humorban használható"
    ],
    correctIndex: 1,
    exp: "A túlzás nyomatékosít és érzelmi töltetet ad – a kontextus dönti el, mennyire helyénvaló."
  },
  {
    q: "Mi jellemzi a jó stílusválasztást?",
    options: [
      "A helyzethez és célhoz illő regiszter, világosság, következetesség",
      "Minél több díszítés",
      "Minél hosszabb mondatok",
      "Minél több idegen szó"
    ],
    correctIndex: 0,
    exp: "A jó stílus funkcionális: szolgálja a célt és a címzett megértését."
  }
];

// SECTION az altémához
export const section_stilus_fogalma = {
  id: "stilus_fogalma",
  title: "Stílus és stilisztika I. 🟪 A stílus fogalma és tényezői",
  bank: bank_stilus_fogalma,
};
// 🟪 NYELVTAN 8 – STÍLUS ÉS STILISZTIKA II. Stílusrétegek és stílusváltozatok
export const bank_stilusretegek: Question[] = [
  {
    q: "Mit nevezünk stílusrétegnek?",
    options: [
      "A szöveg színeit",
      "A nyelvhasználatnak a kommunikációs helyzethez kötődő formáját",
      "A betűtípusokat",
      "A nyelvtani szabályok csoportját"
    ],
    correctIndex: 1,
    exp: "A stílusréteg a nyelvhasználat egy-egy területe: más a stílus a tudományban, az irodalomban vagy a hétköznapi beszédben."
  },
  {
    q: "Melyik a tudományos stílus jellemzője?",
    options: [
      "Érzelmes, személyes hangnem",
      "Tárgyilagos, pontos, logikus felépítés",
      "Szleng és viccek",
      "Rövid felkiáltások"
    ],
    correctIndex: 1,
    exp: "A tudományos stílus tárgyilagos, logikus és szakmai szókincset használ."
  },
  {
    q: "Mi jellemzi a hivatalos stílust?",
    options: [
      "Baráti, kötetlen hangnem",
      "Pontos, szabályozott, udvarias megfogalmazás",
      "Érzelmi töltet és szóképek",
      "Szlengszavak és kifejezések"
    ],
    correctIndex: 1,
    exp: "A hivatalos stílus kötött, szabályozott és udvarias formákat követ (pl. levelek, szerződések)."
  },
  {
    q: "Melyik jellemző a köznyelvi stílusra?",
    options: [
      "Tudományos kifejezések halmozása",
      "Egyszerű, természetes, mindennapi szóhasználat",
      "Hivatalos megszólítások",
      "Túlzott díszítés"
    ],
    correctIndex: 1,
    exp: "A köznyelvi stílus a mindennapi beszédmód: természetes, világos és közvetlen."
  },
  {
    q: "Mi jellemzi a szépirodalmi stílust?",
    options: [
      "Tárgyilagos, személytelen megfogalmazás",
      "Képszerű, kifejező nyelv, érzelmek, szóképek",
      "Száraz adatfelsorolás",
      "Csak rövid mondatok"
    ],
    correctIndex: 1,
    exp: "A szépirodalmi stílus célja a művészi hatás – szóképeket és alakzatokat használ."
  },
  {
    q: "Melyik jellemző a publicisztikai stílusra?",
    options: [
      "Hivatalos megszólítások",
      "Közéleti témák, meggyőzés, figyelemfelkeltés",
      "Személytelen megfogalmazás",
      "Zárkózott hangnem"
    ],
    correctIndex: 1,
    exp: "A publicisztikai stílus újságok, blogok, rádió, tévé nyelve: célja a tájékoztatás és a befolyásolás."
  },
  {
    q: "Mi a különbség a tudományos és a hivatalos stílus között?",
    options: [
      "Semmi különbség nincs",
      "A tudományos magyaráz, a hivatalos szabályoz",
      "A hivatalos érzelmesebb",
      "A tudományos rövidebb"
    ],
    correctIndex: 1,
    exp: "A tudományos célja az ismeretterjesztés és bizonyítás, a hivatalos pedig a jogi, szervezeti közlés."
  },
  {
    q: "Mi jellemzi a szónoki (retorikai) stílust?",
    options: [
      "Személytelen és tárgyilagos",
      "Érzelmeket, meggyőzést szolgáló, hatásos nyelvhasználat",
      "Csak rövid kijelentő mondatokat tartalmaz",
      "Nem használ képeket"
    ],
    correctIndex: 1,
    exp: "A szónoki stílus célja a meggyőzés és hatáskeltés, ezért retorikai eszközöket alkalmaz."
  },
  {
    q: "Melyik stílusréteg használja leginkább a szóképeket?",
    options: ["Hivatalos", "Szépirodalmi", "Tudományos", "Köznyelvi"],
    correctIndex: 1,
    exp: "A szépirodalmi stílusban a képszerűség és szóképek (metafora, hasonlat) jellemzőek."
  },
  {
    q: "Melyik stílusréteghez tartozik a következő mondat? „Kedves Barátom, rég láttalak!”",
    options: ["Hivatalos", "Köznyelvi", "Tudományos", "Publicisztikai"],
    correctIndex: 1,
    exp: "Ez természetes, közvetlen stílus: a köznyelvi réteghez tartozik."
  },
  {
    q: "Melyik jellemző az ifjúsági szlengre?",
    options: [
      "Kötött, szabályozott nyelvhasználat",
      "Kreatív, játékos, gyorsan változó kifejezések",
      "Tudományos terminológia",
      "Udvarias, hivatalos megszólítások"
    ],
    correctIndex: 1,
    exp: "A szleng játékos, rövid életű kifejezésekből áll, amelyet főként fiatalok használnak."
  },
  {
    q: "Mi jellemző a népi stílusrétegre?",
    options: [
      "Kizárólag idegen szavak",
      "Népi szólások, közmondások, tájnyelvi kifejezések",
      "Tudományos meghatározások",
      "Száraz adatfelsorolások"
    ],
    correctIndex: 1,
    exp: "A népi stílusréteg jellemzője a népi nyelv, szólások, közmondások és tájnyelvi elemek."
  },
  {
    q: "Melyik stílusréteg használata jellemző egy reklámra?",
    options: ["Publicisztikai", "Tudományos", "Hivatalos", "Szépirodalmi"],
    correctIndex: 0,
    exp: "A reklám nyelve publicisztikai stílusú, célja a befolyásolás és a figyelemfelkeltés."
  },
  {
    q: "Mit jelent a stíluskeveredés?",
    options: [
      "Több stílusréteg elemeinek egy szövegben való megjelenése",
      "A stílus megszűnését",
      "A szöveg rövidítését",
      "A szavak ismétlését"
    ],
    correctIndex: 0,
    exp: "A stíluskeveredés természetes jelenség: például egy újságcikk lehet részben tudományos és publicisztikai is."
  },
  {
    q: "Melyik stílusréteg jellemző a tankönyvekre?",
    options: ["Tudományos-ismeretterjesztő", "Szépirodalmi", "Publicisztikai", "Népi"],
    correctIndex: 0,
    exp: "A tankönyvek a tudományos stílus ismeretterjesztő, könnyebben érthető változatát használják."
  },
  {
    q: "Mi a stílusváltozat?",
    options: [
      "A stílusrétegek kisebb egysége, amely a helyzethez és a beszélő személyéhez igazodik",
      "A betűtípus módosítása",
      "A szöveg színezése",
      "A mondathossz megváltoztatása"
    ],
    correctIndex: 0,
    exp: "A stílusváltozat a beszélő egyéni választása a kommunikációs helyzethez igazítva."
  },
  {
    q: "Melyik állítás igaz a köznyelv és a szaknyelv kapcsolatára?",
    options: [
      "A szaknyelv a köznyelv egyik változata",
      "A köznyelv szűkebb, mint a szaknyelv",
      "A szaknyelv mindig közérthető",
      "A köznyelv csak írott"
    ],
    correctIndex: 0,
    exp: "A szaknyelv a köznyelv része, de speciális, szakterületi kifejezéseket használ."
  },
  {
    q: "Melyik stílusréteghez tartozik a jogi szöveg?",
    options: ["Hivatalos", "Tudományos", "Szépirodalmi", "Köznyelvi"],
    correctIndex: 0,
    exp: "A jogi nyelvezet a hivatalos stílusrétegbe tartozik, mert kötött és pontos megfogalmazásokat használ."
  },
  {
    q: "Miért fontos a stílusrétegek ismerete?",
    options: [
      "Segít a helyzethez illő nyelvhasználatban és a megértésben",
      "Csak irodalomórán szükséges",
      "Nincs gyakorlati jelentősége",
      "A szavak helyesírását tanítja"
    ],
    correctIndex: 0,
    exp: "A stílusrétegek ismerete segíti a megfelelő regiszterválasztást különböző helyzetekben."
  },
  {
    q: "Melyik a legáltalánosabban használt stílusréteg?",
    options: ["Hivatalos", "Tudományos", "Köznyelvi", "Szépirodalmi"],
    correctIndex: 2,
    exp: "A köznyelvi stílus a mindennapi kommunikáció alapja, mindenki számára érthető."
  }
];

// SECTION az altémához
export const section_stilusretegek = {
  id: "stilusretegek",
  title: "Stílus és stilisztika II. 🟩 Stílusrétegek és stílusváltozatok",
  bank: bank_stilusretegek,
};
// 🟪 NYELVTAN 8 – STÍLUS ÉS STILISZTIKA III. Szóképek és alakzatok I. – Képek, hasonlat, metafora
export const bank_szokep_has_metafora: Question[] = [
  {
    q: "Mit nevezünk szóképeknek?",
    options: [
      "A szóalakok helyesírási változatait",
      "Képszerű kifejezéseket, amelyek érzékletesebbé teszik a közlést",
      "A szavak szótagolását",
      "Hangutánzó szavakat"
    ],
    correctIndex: 1,
    exp: "A szóképek a nyelvi kifejezésmód képszerű eszközei: a valóságot szemléletesebbé teszik."
  },
  {
    q: "Mi a hasonlat lényege?",
    options: [
      "A két dolog azonosítása",
      "Két dolog összehasonlítása közös tulajdonság alapján, kapcsolószóval",
      "Az ellentét kifejezése",
      "Az ismétlés elkerülése"
    ],
    correctIndex: 1,
    exp: "A hasonlat két dolgot állít párhuzamba közös tulajdonság alapján, pl. „Olyan, mint a nap”."
  },
  {
    q: "Melyik szókapcsolat hasonlat?",
    options: [
      "Arca rózsaként ragyog",
      "Arca rózsa",
      "Arca rózsaszínű",
      "Arca ragyog"
    ],
    correctIndex: 0,
    exp: "A 'mint' kapcsolószó vagy az ahhoz hasonló szerkezet (pl. -ként) jelzi a hasonlatot."
  },
  {
    q: "Mi a metafora?",
    options: [
      "Szó szerinti kifejezés",
      "Két dolog azonosítása közös tulajdonság alapján, kapcsolószó nélkül",
      "A mondat díszítése fölösleges szavakkal",
      "Azonos szó ismétlése"
    ],
    correctIndex: 1,
    exp: "A metafora két dolgot azonosít: pl. „A nap arany hajnal” = a napot hajnalhoz hasonlítja, kapcsolószó nélkül."
  },
  {
    q: "Melyik példa metafora?",
    options: [
      "Feje, mint a tök",
      "Feje egy nagy tök",
      "Feje akkora, mint a tök",
      "Feje tök alakú"
    ],
    correctIndex: 1,
    exp: "A „Feje egy nagy tök” azonosítást fejez ki, ezért metafora."
  },
  {
    q: "Mi a megszemélyesítés?",
    options: [
      "Élettelen dolgoknak emberi tulajdonságot adunk",
      "Két dolgot összehasonlítunk",
      "Hangutánzó szót használunk",
      "A szavakat szándékosan elferdítjük"
    ],
    correctIndex: 0,
    exp: "A megszemélyesítésben élettelen dolgok emberként viselkednek: pl. „Sír a szél az ablakban”."
  },
  {
    q: "Melyik példában van megszemélyesítés?",
    options: [
      "A szél fúj",
      "A szél dühösen ordított az ablakban",
      "A szél hideg",
      "A szél északról fújt"
    ],
    correctIndex: 1,
    exp: "A 'dühösen ordított' emberi tulajdonság, tehát megszemélyesítés."
  },
  {
    q: "Mi a szimbólum (jelkép)?",
    options: [
      "Olyan szó, ami rejtett vagy elvont fogalmat fejez ki konkrét képpel",
      "Egyszerű hasonlat",
      "A szavak szó szerinti jelentése",
      "Szótagismétlés"
    ],
    correctIndex: 0,
    exp: "A szimbólum egy elvont fogalmat jelképez: pl. galamb = béke, kereszt = hit."
  },
  {
    q: "Melyik a helyes sorrend: hasonlat – metafora – szimbólum?",
    options: [
      "Hasonlít – azonosít – jelképez",
      "Azonosít – hasonlít – jelképez",
      "Jelképez – azonosít – hasonlít",
      "Nincs közöttük kapcsolat"
    ],
    correctIndex: 0,
    exp: "A hasonlat összehasonlít, a metafora azonosít, a szimbólum elvontan jelképez."
  },
  {
    q: "Mi a metonímia?",
    options: [
      "Hasonlat kapcsolószóval",
      "Névcsere: fogalmi kapcsolat alapján",
      "Ellentét",
      "Fokozás"
    ],
    correctIndex: 1,
    exp: "A metonímia névcsere: pl. 'ittam egy pohárral' – valójában nem a poharat, hanem a tartalmát."
  },
  {
    q: "Melyik példa metonímia?",
    options: [
      "Olvasom Józsefet",
      "Olvasom József Attilától a verset",
      "Olvasok egy könyvet",
      "Olvasok a könyvben"
    ],
    correctIndex: 0,
    exp: "A 'Olvasom Józsefet' – a szerző nevét a mű helyett használja, ez metonímia."
  },
  {
    q: "Mi a szinekdoché?",
    options: [
      "A rész és egész felcserélése",
      "A hasonlat kapcsolószava",
      "A szóismétlés fajtája",
      "A rím másik neve"
    ],
    correctIndex: 0,
    exp: "A szinekdoché a rész és egész (vagy nem és faj) felcserélése: pl. 'a magyar kard győzött' = a magyar hadsereg."
  },
  {
    q: "Melyik kifejezés tartalmaz szimbólumot?",
    options: [
      "A szívem tele van virággal",
      "Fehér galamb száll az égre",
      "Olyan szép, mint a nap",
      "Feje egy nagy tök"
    ],
    correctIndex: 1,
    exp: "A 'fehér galamb' jelképezi a békét – ez szimbólum."
  },
  {
    q: "Mi a különbség a metafora és a megszemélyesítés között?",
    options: [
      "Nincs különbség",
      "A metafora tárgyakat azonosít, a megszemélyesítés emberi tulajdonságot ad élettelennek",
      "A megszemélyesítés ellentétet fejez ki",
      "A metafora csak ige lehet"
    ],
    correctIndex: 1,
    exp: "A metafora két dolgot azonosít, a megszemélyesítés emberi jellemzőt ad nem embernek."
  },
  {
    q: "Mi a szerepe a szóképeknek a stílusban?",
    options: [
      "Szó szerintivé teszik a szöveget",
      "Képszerűséget, érzelmi hatást, szemléletességet adnak",
      "Megnehezítik az értelmezést",
      "Mindig hivatalossá teszik a szöveget"
    ],
    correctIndex: 1,
    exp: "A szóképek célja a hatásos, érzékletes kifejezés – az olvasó képzeletére hatnak."
  },
  {
    q: "Melyik NEM szóképfajta?",
    options: ["Metafora", "Hasonlat", "Metonímia", "Ellentét"],
    correctIndex: 3,
    exp: "Az ellentét alakzat, nem szóképfajta."
  },
  {
    q: "Mit nevezünk állandósult szókapcsolatnak?",
    options: [
      "Szóképet, amely gyakran ismétlődik és közmondássá vált",
      "Egy véletlen szóösszetételt",
      "Egy hibás szerkezetet",
      "Csak idegen nyelvi kifejezést"
    ],
    correctIndex: 0,
    exp: "Az állandósult szókapcsolatok (szólások, közmondások) gyakori szóképes szerkezetek."
  },
  {
    q: "Miért fontosak a szóképek az irodalmi stílusban?",
    options: [
      "Szabályosságot adnak a mondatoknak",
      "Egyéni látásmódot és kifejezőerőt biztosítanak",
      "Korlátozzák a szóhasználatot",
      "Csak díszítésre valók"
    ],
    correctIndex: 1,
    exp: "A szóképek teszik egyedivé és művészivé az irodalmi szöveget."
  },
  {
    q: "Mi a közös a hasonlatban és a metaforában?",
    options: [
      "Mindkettő képszerűen fejez ki valamit",
      "Mindkettő ellentétet teremt",
      "Mindkettő szóismétlés",
      "Mindkettő hivatalos nyelvi elem"
    ],
    correctIndex: 0,
    exp: "A hasonlat és a metafora is képszerű eszköz, csak a hasonlatban van kapcsolószó ('mint')."
  },
  {
    q: "Melyik a leggyakoribb szóképfajta a mindennapi beszédben?",
    options: [
      "Metafora és hasonlat",
      "Szinekdoché",
      "Metonímia",
      "Ellentét"
    ],
    correctIndex: 0,
    exp: "A hasonlat és metafora gyakori a köznyelvben is: „olyan, mint…”, „ez egy csoda”."
  }
];

// SECTION az altémához
export const section_szokep_has_metafora = {
  id: "szokep_has_metafora",
  title: "Stílus és stilisztika III. 🟨 Szóképek és alakzatok I. – Képek, hasonlat, metafora",
  bank: bank_szokep_has_metafora,
};
// 🟪 NYELVTAN 8 – STÍLUS ÉS STILISZTIKA IV. Szóképek és alakzatok II. – Alakzatok, ellentét, ismétlés, fokozás
export const bank_alakzatok: Question[] = [
  {
    q: "Mit nevezünk alakzatnak?",
    options: [
      "A szóképek egyik típusát",
      "A gondolat vagy érzelem kifejezésének formai, szerkezeti eszközét",
      "A szavak jelentését",
      "A helyesírási szabályokat"
    ],
    correctIndex: 1,
    exp: "Az alakzat a stílus formai eszköze: mondatszerkezetek, szórend, ismétlés, ellentét, kérdés stb."
  },
  {
    q: "Mi a szóismétlés (repetíció) célja?",
    options: [
      "A mondat megnyújtása",
      "Nyomatékosítás, érzelmi hatás",
      "Helyettesítés",
      "Humor keltése"
    ],
    correctIndex: 1,
    exp: "A szóismétlés a figyelem felkeltésére, nyomatékosításra szolgál."
  },
  {
    q: "Mi a halmozás?",
    options: [
      "Azonos szerepű szavak felsorolása a kifejezőerő fokozására",
      "A szavak elhagyása",
      "A mondatok rövidítése",
      "A szóismétlés kerülése"
    ],
    correctIndex: 0,
    exp: "A halmozás azonos szerepű szavak, kifejezések sorozata: pl. 'szép, vidám, mosolygós'."
  },
  {
    q: "Mi az ellentét szerepe?",
    options: [
      "Ellentétes gondolatok kiemelése a hatás fokozására",
      "A mondatok összevonása",
      "A jelentés elrejtése",
      "A hasonlat erősítése"
    ],
    correctIndex: 0,
    exp: "Az ellentét a kontraszt révén erősíti a mondanivalót: pl. 'Él bennem a múlt, s újra kezdem a jövőt.'"
  },
  {
    q: "Mi a fokozás?",
    options: [
      "A hasonló tartalmú elemek erősödő sorrendje",
      "A szavak ismétlése",
      "A mondat rövidítése",
      "A szóképek kiterjesztése"
    ],
    correctIndex: 0,
    exp: "A fokozás (grádáció) a hatás erősödését mutatja: pl. 'szép, gyönyörű, elbűvölő'."
  },
  {
    q: "Mi a kérdés-alakzat (költői kérdés) szerepe?",
    options: [
      "Valós információkérés",
      "Érzelmi hatáskeltés, gondolatébresztés válasz nélkül",
      "Kifejezetten válaszvárás",
      "A szöveg rövidítése"
    ],
    correctIndex: 1,
    exp: "A költői kérdés nem vár választ, célja a figyelem felkeltése vagy a gondolat nyomatékosítása."
  },
  {
    q: "Mi a megszólítás szerepe a szövegben?",
    options: [
      "A beszéd megszakítása",
      "Kapcsolat teremtése a címzettel, érzelmi hatás",
      "A mondat lezárása",
      "A téma megváltoztatása"
    ],
    correctIndex: 1,
    exp: "A megszólítás az érzelmi kapcsolatot, személyességet erősíti: pl. 'Ó, te drága hazám!'"
  },
  {
    q: "Mi az ellipszis?",
    options: [
      "A mondatból hiányzó, de kikövetkeztethető elem elhagyása",
      "Szóismétlés",
      "Ellentét",
      "Túlzás"
    ],
    correctIndex: 0,
    exp: "Ellipszis: hiányos mondat, ahol a kimaradt rész egyértelmű: pl. 'Én almát, ő körtét.'"
  },
  {
    q: "Mi a túlzás (hiperbola) szerepe?",
    options: [
      "A hatás fokozása, érzelem kifejezése",
      "A mondat rövidítése",
      "A szöveg logikusabbá tétele",
      "A szavak elrejtése"
    ],
    correctIndex: 0,
    exp: "A túlzás nyomatékosít, pl. 'Ezer éve nem láttalak!'"
  },
  {
    q: "Mit nevezünk gúnyos ellentétnek (iróniának)?",
    options: [
      "A kimondott és a valós jelentés ellentéte",
      "A szavak ismétlése",
      "A fokozás egy fajtája",
      "A hangulat kiemelése"
    ],
    correctIndex: 0,
    exp: "Az irónia a kimondott és valós jelentés közötti ellentét: pl. 'De ügyes vagy!' (ha valaki hibázott)."
  },
  {
    q: "Mi az ellentétes értelmű szavak együttes használata?",
    options: [
      "Oximoron",
      "Ellipszis",
      "Metafora",
      "Tautológia"
    ],
    correctIndex: 0,
    exp: "Oximoron: látszólag ellentétes szavak együttese, pl. 'fájdalmas gyönyör'."
  },
  {
    q: "Mi a felsorolás?",
    options: [
      "Több azonos szerepű elem egymás után",
      "A szavak ismétlése azonos formában",
      "A mondatok rövidítése",
      "Az ellentétek párosítása"
    ],
    correctIndex: 0,
    exp: "A felsorolás több hasonló szerepű szó, kifejezés egymás után, pl. 'almát, körtét, szilvát vettem'."
  },
  {
    q: "Mi a gondolatritmus?",
    options: [
      "A mondatrészek, szószerkezetek ritmikus ismétlése",
      "A szóismétlés véletlenszerű alkalmazása",
      "A rímek szabálya",
      "A versmérték"
    ],
    correctIndex: 0,
    exp: "A gondolatritmus a párhuzamos szerkezetek ismétlődése, pl. zsoltárokban, népköltészetben."
  },
  {
    q: "Melyik NEM alakzat?",
    options: ["Fokozás", "Hasonlat", "Ellentét", "Ismétlés"],
    correctIndex: 1,
    exp: "A hasonlat szóképfajta, a többi alakzat."
  },
  {
    q: "Melyik példa tartalmaz halmozást?",
    options: [
      "Szép, gyönyörű, elragadó látvány!",
      "Fájdalmas öröm",
      "Mint a nap, ragyog az arca",
      "A hegy, a völgy, a patak csendes"
    ],
    correctIndex: 0,
    exp: "A több hasonló értelmű szó sorozata halmozás: 'szép, gyönyörű, elragadó'."
  },
  {
    q: "Mi az ellentét alapú alakzat célja?",
    options: [
      "Kiemelni az ellentétes fogalmak közti különbséget",
      "A mondat rövidítése",
      "A szavak elhagyása",
      "A díszítés"
    ],
    correctIndex: 0,
    exp: "Az ellentét kiemeli a különbséget és erősíti a kifejezést, pl. 'Bűn és bűnhődés'."
  },
  {
    q: "Mit nevezünk párhuzamnak?",
    options: [
      "Két azonos szerkezetű mondatrész egymás mellé állítása",
      "Ellentétes értelmű szavak használata",
      "A mondat kihagyása",
      "Szóismétlés"
    ],
    correctIndex: 0,
    exp: "A párhuzam azonos szerkezetű egységek ismétlése: pl. 'Szerettem őt, szeretem most is.'"
  },
  {
    q: "Mi a szerepe az ismétlő alakzatoknak?",
    options: [
      "Figyelemfelkeltés, nyomatékosítás, érzelem kifejezése",
      "A szöveg unalmassá tétele",
      "A mondatok rövidítése",
      "A téma elrejtése"
    ],
    correctIndex: 0,
    exp: "Az ismétlés érzelmi nyomatékot ad és fokozza a hatást."
  },
  {
    q: "Melyik példa ellentét?",
    options: [
      "Él bennem a múlt, s újra kezdem a jövőt.",
      "Gyors, fürge, mozgékony.",
      "Csendes patak csobog.",
      "Szomorúan szép emlék."
    ],
    correctIndex: 0,
    exp: "A 'múlt' és 'jövő' ellentétes fogalmak, tehát ellentétet fejez ki."
  },
  {
    q: "Miért alkalmaznak az írók alakzatokat?",
    options: [
      "A kifejezés változatossá, hatásossá, érzelmileg telítettebbé tétele céljából",
      "Hibás mondatok alkotására",
      "Rövidítés miatt",
      "Tévedésből"
    ],
    correctIndex: 0,
    exp: "Az alakzatok a szöveg érzelmi és stilisztikai hatását erősítik, élővé teszik a kifejezést."
  }
];

// SECTION az altémához
export const section_alakzatok = {
  id: "alakzatok",
  title: "Stílus és stilisztika IV. 🟦 Szóképek és alakzatok II. – Alakzatok, ellentét, ismétlés, fokozás",
  bank: bank_alakzatok,
};
// 🟧 NYELVTAN 8 – HELYESÍRÁS ÉS KÖZPONTOZÁS I. A magyar helyesírás alapelvei
export const bank_helyesiras_alapelvei: Question[] = [
  {
    q: "Mi NEM a magyar helyesírás alapelve?",
    options: [
      "Kiejtés elve",
      "Szóelemzés (morféma) elve",
      "Hagyomány elve",
      "Véletlenszerű választás elve"
    ],
    correctIndex: 3,
    exp: "Az alapelvek: kiejtés, szóelemzés, hagyomány, egyszerűsítés. A „véletlenszerű választás” természetesen nem elv."
  },
  {
    q: "Mit jelent a kiejtés elve?",
    options: [
      "Úgy írjuk, ahogyan kiejtjük (hang–betű megfeleltetés)",
      "Csak a hosszú magánhangzókat jelöljük",
      "Mindig elhagyjuk a mássalhangzókat",
      "Csupa nagybetűvel írunk"
    ],
    correctIndex: 0,
    exp: "A kiejtés elve szerint a hangzást követi az írás: pl. fa, kenyér, hideg."
  },
  {
    q: "Melyik szó példázza a kiejtés elvét?",
    options: ["labda", "lyuk", "asszony", "mégsem"],
    correctIndex: 0,
    exp: "A „labda” betűzése a kiejtést követi. A többiben más elv is megjelenik (hagyomány, egyszerűsítés, szóelemzés)."
  },
  {
    q: "Mit jelent a szóelemzés (morféma) elve?",
    options: [
      "Mindig röviden írjuk a magánhangzókat",
      "Az összetevőket (tő, toldalék) felismerhetően tartjuk meg az írásban",
      "Nem jelöljük a toldalékokat",
      "A szavakat egybeírjuk"
    ],
    correctIndex: 1,
    exp: "A morfémák alakját őrizzük: pl. „ház+ban” → házban (nem *házban* kiejtés szerint ‘házban’, de a tő változatlanul látszik)."
  },
  {
    q: "Melyik példázza a szóelemzés elvét?",
    options: ["kézben", "képbe", "kézbe", "képben"],
    correctIndex: 2,
    exp: "„kéz+be” → kézbe (a tő ‚kéz’ látszik), bár kiejtve [kézbe]. A többiben más morféma."
  },
  {
    q: "Mit jelent a hagyomány elve?",
    options: [
      "Régi írásmódok, történeti okok megőrzése (pl. ly, dzs)",
      "Minden szót újítunk",
      "Csak latin betűket használunk ékezet nélkül",
      "A tájnyelvi kiejtés szerint írunk"
    ],
    correctIndex: 0,
    exp: "Hagyományos alakok: ly, y-os családnevek (Kovácsy), bizonyos tulajdonnevek rögzített írása."
  },
  {
    q: "Melyik szó írásmódját a hagyomány elve rögzíti?",
    options: ["lyuk", "játék", "jelen", "jó"],
    correctIndex: 0,
    exp: "Az „ly” történeti eredetű, a kiejtés ma /j/, de az írásmód hagyományt követ."
  },
  {
    q: "Mit jelent az egyszerűsítés elve?",
    options: [
      "A kettős betűkapcsolatokat – ha találkoznak – egyszerűsítjük",
      "Mindig elhagyjuk a mássalhangzókat",
      "Nem használunk ékezeteket",
      "A szavakat rövidítjük bármikor"
    ],
    correctIndex: 0,
    exp: "Pl. „híd+dal” → híddal (nem *hídddal*), „kép+pal” → képpel (pp megmarad, mert mássalhangzó-illeszkedés)."
  },
  {
    q: "Melyik az egyszerűsítés helyes példája?",
    options: ["képppel", "képpel", "képpal", "képel"],
    correctIndex: 1,
    exp: "„kép+vel” → képpel: a v→p hasonul (zöngétlenedik) és kettőződik; három azonos mássalhangzót nem írunk."
  },
  {
    q: "Melyik elv érvényesül a „mégsem” írásmódjában?",
    options: ["Kiejtés elve", "Szóelemzés elve", "Hagyomány elve", "Egyszerűsítés elve"],
    correctIndex: 3,
    exp: "„még + sem” → „mégsem” (három azonos s nincs, az írás egyszerűsít)."
  },
  {
    q: "Mikor követjük elsősorban a kiejtés elvét?",
    options: [
      "Egyszerű, nem összetett szavak írásakor",
      "Csak tulajdonneveknél",
      "Csak idegen szavaknál",
      "Soha"
    ],
    correctIndex: 0,
    exp: "Alapvetően a kiejtés az irányadó, kivéve amikor más elv (morféma, hagyomány, egyszerűsítés) felülírja."
  },
  {
    q: "Melyik NEM a szóelemzés elvének példája?",
    options: ["házban", "tűzben", "hídnál", "hegyet"],
    correctIndex: 2,
    exp: "„hídnál” kiejtésben [hídnál], de az -nál rag illeszkedik; a kérdésben mindegyik morfématartó, ám tipikusan a tő megőrzése a lényeg – jobb ellenpélda: „asszony” (nem morfémaelv, hanem hagyomány/ejtés–történet)."
  },
  {
    q: "Melyik szóban látod a hagyomány elvét az ly miatt?",
    options: ["folyó", "boly", "oly", "mind"],
    correctIndex: 1,
    exp: "„boly” – az ly hagyományos jelölés, kiejtése /j/."
  },
  {
    q: "Az „asszony” írásmódjában milyen elv figyelhető meg?",
    options: ["Csak kiejtés", "Történeti-hagyományos alakfenntartás", "Szóelemzés", "Szabálytalan"],
    correctIndex: 1,
    exp: "Az „ssz” jelölése történeti okokra megy vissza, rögzült íráskép."
  },
  {
    q: "Mi a helyes alak a következő esetben: „híd + hoz”?",
    options: ["hídhoz", "híthoz", "hítho z", "hídhoz (hosszú d nélkül)"],
    correctIndex: 0,
    exp: "„hídhoz”: a zöngésség és a morféma őrzése számít; a d megmarad, a h rag kezdőhangja változatlan."
  },
  {
    q: "Melyik páros mutatja a morféma megtartását (szóelemzés)?",
    options: [
      "kéz + ben → kézben",
      "kéz + ben → kézben (de *készben*)",
      "víz + be → vízbe (de *vízpe*)",
      "ház + val → házzal"
    ],
    correctIndex: 0,
    exp: "A tő érintetlenül látszik: kéz + -ben → kézben. (A házzal is jó példa lenne, de ott hasonulás is történik)."
  },
  {
    q: "Miért írjuk úgy: „ház+zal → házzal”?",
    options: [
      "Mert a kiejtés így kívánja: [házzal], és a morféma is őrződik",
      "Mert három z-t írunk mindig",
      "Mert hagyomány",
      "Mert idegen szó"
    ],
    correctIndex: 0,
    exp: "A -val/-vel rag zöngétlenedik és hasonul: v→z, majd kettőződik: házzal (és a tő is látszik)."
  },
  {
    q: "Mikor dönt az egyszerűsítés elve az írásképben?",
    options: [
      "Három azonos mássalhangzó találkozásakor",
      "Bármikor, ha hosszúnak érezzük",
      "Csak tulajdonneveknél",
      "Csak idegen szavaknál"
    ],
    correctIndex: 0,
    exp: "Három azonos mássalhangzót nem írunk le: pl. „különn + ny” → „különny” helyett szabályosan másképp rendeződik (általános példa: *hídddal* → híddal)."
  },
  {
    q: "Melyik alak helyes az elvek szerint: „bír + ról”?",
    options: ["bírról", "bírról (három r-rel)", "bírr ól", "bíróról"],
    correctIndex: 0,
    exp: "„bírról” – a toldalék illeszkedik, az r kettőződik, de három azonos betűt nem írunk (itt amúgy két r lesz)."
  },
  {
    q: "Melyik állítás igaz az alapelvek együttélésére?",
    options: [
      "Mindig csak egy elv érvényesülhet",
      "Az elvek együtt hatnak; néha a morféma- vagy hagyományelv felülírja a kiejtést",
      "A kiejtés mindig felülír mindent",
      "Az egyszerűsítés nem szabály"
    ],
    correctIndex: 1,
    exp: "Sok szóban több elv érvényesül egyszerre; ilyenkor szabályrend dönti el a végső alakot."
  },
  {
    q: "Mi a legfőbb célja a helyesírási alapelveknek?",
    options: [
      "A lehető legbonyolultabb íráskép",
      "Következetes, jól olvasható, érthető írásmód",
      "Csak a hagyomány tisztelete",
      "A tájnyelv rögzítése"
    ],
    correctIndex: 1,
    exp: "A helyesírás célja az egységes, áttekinthető, egyértelmű közlés támogatása."
  }
];

// SECTION az altémához
export const section_helyesiras_alapelvei = {
  id: "helyesiras_alapelvei",
  title: "Helyesírás és központozás I. 🟧 A magyar helyesírás alapelvei",
  bank: bank_helyesiras_alapelvei,
};
// 🟧 NYELVTAN 8 – HELYESÍRÁS ÉS KÖZPONTOZÁS II. Nagybetű-használat és központozás
export const bank_nagybetu_kozpont: Question[] = [
  {
    q: "Mikor írunk nagy kezdőbetűt a magyar helyesírás szerint?",
    options: [
      "Mondat elején és tulajdonnevekben",
      "Ha fontosnak tartjuk a szót",
      "Minden főnév elején",
      "Ha új sorba kerül"
    ],
    correctIndex: 0,
    exp: "A mondat első szava és a tulajdonnevek kezdődnek nagybetűvel. Nem a nyomaték vagy hangsúly indokolja."
  },
  {
    q: "Melyik szó írása helyes?",
    options: ["budapest", "Budapest", "BUDAPEST", "budapEst"],
    correctIndex: 1,
    exp: "A városnév tulajdonnév, ezért nagy kezdőbetűvel írjuk: Budapest."
  },
  {
    q: "Melyik NEM tulajdonnév?",
    options: ["Petőfi Sándor", "Tisza folyó", "hegység", "Kékes-tető"],
    correctIndex: 2,
    exp: "A 'hegység' köznév, nem tulajdonnév. A többi konkrét név: személy, folyó, hegycsúcs."
  },
  {
    q: "Melyik írásmód helyes? „a magyar nyelv napja”",
    options: [
      "A Magyar Nyelv Napja",
      "A magyar nyelv napja",
      "A magyar Nyelv Napja",
      "A Magyar nyelv napja"
    ],
    correctIndex: 0,
    exp: "Az ünnepnév első szava és minden főszava nagybetűs: A Magyar Nyelv Napja."
  },
  {
    q: "Mikor használunk nagy kezdőbetűt a megszólításban?",
    options: [
      "Ha udvariassági formaként használjuk: Kedves Barátom!",
      "Soha",
      "Csak e-mailben",
      "Csak hivatalos levelekben"
    ],
    correctIndex: 0,
    exp: "A megszólítás udvariasságból nagy kezdőbetűs: Kedves Tanár Úr!, Tisztelt Igazgató Asszony!"
  },
  {
    q: "Melyik esetben kell nagy kezdőbetű a címben?",
    options: [
      "Minden szó elején",
      "Csak az első és a tulajdonnév kezdetén",
      "Csak az utolsó szónál",
      "Egyiknél sem"
    ],
    correctIndex: 1,
    exp: "Címekben csak az első szó és a tulajdonnevek kezdődnek nagybetűvel, pl. A Pál utcai fiúk."
  },
  {
    q: "Melyik példa mutatja a mondatvégi írásjelet helyesen?",
    options: [
      "Szereted a fagyit",
      "Szereted a fagyit?",
      "Szereted a fagyit!",
      "Szereted a fagyit,"
    ],
    correctIndex: 1,
    exp: "A kérdő mondat végén kérdőjel áll: Szereted a fagyit?"
  },
  {
    q: "Mi jelöli a kijelentő mondat végét?",
    options: ["Pont", "Kérdőjel", "Felkiáltójel", "Kettőspont"],
    correctIndex: 0,
    exp: "A kijelentő mondat végén pontot teszünk."
  },
  {
    q: "Melyik írásjel áll a felsorolás bevezetése előtt?",
    options: ["Vessző", "Kettőspont", "Pontosvessző", "Felkiáltójel"],
    correctIndex: 1,
    exp: "A felsorolás bevezetése előtt gyakran kettőspont áll: 'Hozzávalók: liszt, tojás, tej...'"
  },
  {
    q: "Mi a vessző fő szerepe?",
    options: [
      "A mondatrészek elválasztása, tagolás",
      "A hangsúly jelölése",
      "A sorok tördelése",
      "A mondat lezárása"
    ],
    correctIndex: 0,
    exp: "A vessző elválasztja a tagmondatokat, felsorolás elemeit, vagy kiemel beékelődést."
  },
  {
    q: "Mikor teszünk vesszőt a mellérendelt tagmondatok közé?",
    options: [
      "Ha kötőszóval kapcsolódnak és önállóan is értelmesek",
      "Soha",
      "Ha nagyon rövidek",
      "Ha kérdő mondatok"
    ],
    correctIndex: 0,
    exp: "Pl.: 'Elmentem a boltba, és vettem kenyeret.' – mindkét tagmondat önálló, ezért vesszővel kapcsolódik."
  },
  {
    q: "Melyik mondatban NEM kell vessző?",
    options: [
      "Kati és Anna hazamentek.",
      "Kati, és Anna hazamentek.",
      "Kati, Anna és Bence hazamentek.",
      "Kati, hazament és pihent."
    ],
    correctIndex: 0,
    exp: "Az 'és' kötőszó által összekapcsolt egyszerű alanyok között nem teszünk vesszőt."
  },
  {
    q: "Mi a pontosvessző szerepe?",
    options: [
      "Tagmondatok lazább elválasztása, mint a pont, de szorosabb, mint a vessző",
      "A mondat lezárása",
      "A kérdés jelölése",
      "A felkiáltás kifejezése"
    ],
    correctIndex: 0,
    exp: "A pontosvessző tagmondatok közötti szünetet jelez, ha azok tartalmilag összefüggenek."
  },
  {
    q: "Mi a gondolatjel fő funkciója?",
    options: [
      "Párbeszéd, közbevetés, hirtelen váltás jelölése",
      "A hangsúly kiemelése",
      "A mondat lezárása",
      "A hiányzó betű pótlása"
    ],
    correctIndex: 0,
    exp: "A gondolatjel tagol, közbevetést vagy párbeszédet jelöl: „– Szia! – mondta Anna.”"
  },
  {
    q: "Melyik jelzi a felsorolás végét?",
    options: ["Pont", "Vessző", "Pont és vessző", "Nincs külön jel"],
    correctIndex: 0,
    exp: "A felsorolás végén ponttal zárunk, ha a mondat is véget ér."
  },
  {
    q: "Melyik esetben kell nagybetű egy idézetben?",
    options: [
      "Ha az idézet önálló mondat",
      "Ha csak szókapcsolat",
      "Soha",
      "Mindig kisbetűvel kezdjük"
    ],
    correctIndex: 0,
    exp: "Önálló mondatként idézve nagybetűvel kezdjük: „Szeretem a nyelvtant.”"
  },
  {
    q: "Mi a különbség a kötőjel és a gondolatjel között?",
    options: [
      "A kötőjel rövidebb és szavakat kapcsol össze, a gondolatjel hosszabb és tagol",
      "A kötőjel kérdést jelez",
      "A gondolatjel mindig az évszámokhoz tartozik",
      "Nincs különbség"
    ],
    correctIndex: 0,
    exp: "Pl.: 'magyar–angol szótár' (kötőjel), de '– mondta Anna.' (gondolatjel)."
  },
  {
    q: "Melyik mondatban helytelen a központozás?",
    options: [
      "Szia! Hogy vagy?",
      "Elmegyek holnap, ha nem esik.",
      "Gyere gyorsan, haza!",
      "Ez egy szép nap."
    ],
    correctIndex: 2,
    exp: "A 'Gyere gyorsan, haza!' hibás: nincs ok vesszőre, helyesen 'Gyere gyorsan haza!'"
  },
  {
    q: "Mikor teszünk felkiáltójelet?",
    options: [
      "Érzelmet, felszólítást, kívánságot kifejező mondat végén",
      "Ha bizonytalanok vagyunk",
      "Mindig kérdőszó után",
      "Ha több szó van a mondatban"
    ],
    correctIndex: 0,
    exp: "A felkiáltójel erős érzelmet, felszólítást vagy meglepetést jelez: „Vigyázz!”"
  },
  {
    q: "Mi a központozás célja?",
    options: [
      "A szöveg tagolása, értelmezhetőségének biztosítása",
      "A díszítés",
      "A betűk számlálása",
      "A szavak elválasztása"
    ],
    correctIndex: 0,
    exp: "A központozás segít a szöveg tagolásában, a mondatok szerkezetének megértésében."
  }
];

// SECTION az altémához
export const section_nagybetu_kozpont = {
  id: "nagybetu_kozpont",
  title: "Helyesírás és központozás II. 🟨 Nagybetű-használat és központozás",
  bank: bank_nagybetu_kozpont,
};
// 🟧 NYELVTAN 8 – HELYESÍRÁS ÉS KÖZPONTOZÁS III. Egybe- és különírás szabályai
export const bank_egybe_kuloniras: Question[] = [
  {
    q: "Mikor írunk két szót egybe?",
    options: [
      "Ha új jelentésű összetett szót alkotnak",
      "Ha egymás után kerülnek a mondatban",
      "Ha mindkettő főnév",
      "Ha rövidek"
    ],
    correctIndex: 0,
    exp: "Az egybeírás új fogalmat hoz létre, pl. 'nap+szemüveg' → 'napszemüveg'."
  },
  {
    q: "Melyik szó helyes írásmódú?",
    options: ["földrajzóra", "földrajz óra", "föld rajzóra", "földrajz-óra"],
    correctIndex: 0,
    exp: "Az 'óra' típusú összetételeket egybeírjuk: 'földrajzóra', 'matekóra', 'énekóra'."
  },
  {
    q: "Melyik a különírás helyes példája?",
    options: ["kékpóló", "kék póló", "kékpóló", "kék-póló"],
    correctIndex: 1,
    exp: "Ha a jelző és a főnév jelentése szabadon összekapcsolható, külön írjuk: 'kék póló'."
  },
  {
    q: "Melyik szó írható egybe?",
    options: ["ház ajtó", "kép keret", "villamosmegálló", "asztal láb"],
    correctIndex: 2,
    exp: "'villamos+megálló' → 'villamosmegálló' új fogalom, ezért egybeírjuk."
  },
  {
    q: "Melyik helyes? 'ház + tető'",
    options: ["háztető", "ház tető", "ház-tető", "házt ető"],
    correctIndex: 0,
    exp: "A 'háztető' összetett szó, új jelentéssel bír – egybeírjuk."
  },
  {
    q: "Mi a mozgószabály?",
    options: [
      "Az összetett szavak írásmódjának változása toldalékoláskor vagy bővüléskor",
      "A mondat mozgása a sorban",
      "A hangrend változása",
      "A szótagszám növekedése"
    ],
    correctIndex: 0,
    exp: "Pl. 'gépírónő' → 'gépírónő-képzés', 'házőrző' → 'házőrző kutya'."
  },
  {
    q: "Melyik példa mutat mozgószabályt?",
    options: ["énektanár", "énektanár-képzés", "énektanárképzés", "ének tanárképzés"],
    correctIndex: 1,
    exp: "A 'tanár' szóhoz új elem kapcsolódik, ezért kötőjellel: 'énektanár-képzés'."
  },
  {
    q: "Melyik az alapszabály az összetett szavak hosszára?",
    options: [
      "Hat szótagnál hosszabb összetett szavakat általában kötőjellel tagolunk",
      "Mindig külön írjuk",
      "Mindig egybeírjuk",
      "Mindig elválasztjuk szóközzel"
    ],
    correctIndex: 0,
    exp: "Hat szótag fölött kötőjel: pl. 'vízvezeték-szerelő'."
  },
  {
    q: "Mi a helyes alak? 'víz + vezeték + szerelő'",
    options: ["vízvezeték szerelő", "vízvezeték-szerelő", "víz-vezeték-szerelő", "vízvezeték-szerel ő"],
    correctIndex: 1,
    exp: "Három tagból áll (6+ szótag): kötőjellel – 'vízvezeték-szerelő'."
  },
  {
    q: "Melyik NEM összetett szó?",
    options: ["napszemüveg", "postás", "piros alma", "asztallap"],
    correctIndex: 2,
    exp: "'piros alma' szabad jelzős szerkezet, nem összetett szó."
  },
  {
    q: "Melyik az egybeírt alak helyes?",
    options: ["gyorsvonatjegy", "gyorsvonat jegy", "gyors vonatjegy", "gyors vonat jegy"],
    correctIndex: 0,
    exp: "'gyorsvonat' új fogalom, és 'jegy' hozzá kapcsolódik: 'gyorsvonatjegy'."
  },
  {
    q: "Mi a helyes alak: 'házi + feladat + füzet'?",
    options: ["házi feladat füzet", "házi feladatfüzet", "házi-feladatfüzet", "házi feladat-füzet"],
    correctIndex: 2,
    exp: "Három tagból áll, hat szótagnál több, ezért kötőjel: 'házi-feladatfüzet'."
  },
  {
    q: "Melyik helyes? 'duna + part'",
    options: ["Duna-part", "Dunapart", "Duna part", "duna-part"],
    correctIndex: 0,
    exp: "Tulajdonnévi előtag → kötőjel: 'Duna-part'."
  },
  {
    q: "Mi a helyes alak a 'gimnázium igazgatója' esetében?",
    options: ["gimnáziumigazgató", "gimnázium igazgató", "gimnázium-igazgató", "gimnáziumi igazgató"],
    correctIndex: 3,
    exp: "Jelzős szerkezet: 'gimnáziumi igazgató' (különírandó, toldalékos jelzővel)."
  },
  {
    q: "Melyik a helyes? 'ház + őr'",
    options: ["házőr", "ház őr", "ház-őr", "ház őr"],
    correctIndex: 0,
    exp: "Összetett szó: 'házőr', új jelentéssel ('őrző személy'), tehát egybeírjuk."
  },
  {
    q: "Mi a különbség az 'autóbusz' és a 'buszmegálló' között?",
    options: [
      "Az 'autóbusz' egyszerűbb összetétel (2 tag), a 'buszmegálló' újabb szóösszetétel (jelentésbővülés)",
      "Nincs különbség",
      "Az egyik idegen szó",
      "Az egyik többes számú"
    ],
    correctIndex: 0,
    exp: "'Autóbusz' két szótag, egyszerű összetett; 'buszmegálló' új fogalom, szintén összetett, de más szerkezetű."
  },
  {
    q: "Melyik összetett szóban nem használunk kötőjelet?",
    options: ["gyümölcstorta", "tortaszeletelő kés", "névnap-köszöntés", "háztartásbeli"],
    correctIndex: 0,
    exp: "A 'gyümölcstorta' rövid, két tagú összetett szó, nem igényel kötőjelet."
  },
  {
    q: "Mi a helyes alak? 'iroda vezető' – főnévként használva",
    options: ["irodavezető", "iroda-vezető", "iroda vezető", "Iroda vezető"],
    correctIndex: 0,
    exp: "Új fogalom, egy személyt jelöl: 'irodavezető'."
  },
  {
    q: "Melyik helyes alak? 'általános iskola igazgatója'",
    options: ["általánosiskola-igazgató", "általános iskola-igazgató", "általános iskolai igazgató", "Általánosiskolai igazgató"],
    correctIndex: 2,
    exp: "Jelzős szerkezet toldalékos: 'általános iskolai igazgató'."
  },
  {
    q: "Mi a helyes írásmód? 'sport + barát'",
    options: ["sportbarát", "sport barát", "sport-barát", "Sportbarát"],
    correctIndex: 0,
    exp: "'sportbarát' új fogalmat jelöl (valamit kedvelő személy), tehát egybeírjuk."
  }
];

// SECTION az altémához
export const section_egybe_kuloniras = {
  id: "egybe_kuloniras",
  title: "Helyesírás és központozás III. 🟩 Egybe- és különírás szabályai",
  bank: bank_egybe_kuloniras,
};
// 🟧 NYELVTAN 8 – HELYESÍRÁS ÉS KÖZPONTOZÁS IV. Gyakori helyesírási hibák és javításuk
export const bank_helyesirasi_hibak: Question[] = [
  {
    q: "Melyik szó írása helyes?",
    options: ["különben", "külön ben", "külön-ben", "külőnben"],
    correctIndex: 0,
    exp: "'különben' egybeírandó, mert új jelentést hordoz ('egyébként')."
  },
  {
    q: "Melyik szó helytelenül van írva?",
    options: ["együtt", "mindjárt", "muszály", "biztosan"],
    correctIndex: 2,
    exp: "A helyes alak: 'muszáj'. Sok tanuló tévesen írja 'ly'-nal."
  },
  {
    q: "Mi a helyes alak? 'bírálatot mondott'",
    options: ["birálatot mondott", "bírálatot mondott", "bírálattot mondott", "birálattot mondott"],
    correctIndex: 1,
    exp: "A hosszú í-t jelölni kell: 'bírálatot'."
  },
  {
    q: "Melyik szó helyes?",
    options: ["helyesírás", "helyes írás", "helyesí rás", "helyes-írás"],
    correctIndex: 0,
    exp: "'helyesírás' egybeírandó, mert új fogalmat alkot ('írás szabályainak rendszere')."
  },
  {
    q: "Melyik a helytelen írásmód?",
    options: ["kíváncsi", "muszáj", "mindíg", "körülbelül"],
    correctIndex: 2,
    exp: "'mindig' rövid i-vel írandó. A 'mindíg' gyakori tévedés."
  },
  {
    q: "Mi a helyes írásmód? 'egy + más'",
    options: ["egymás", "egy más", "egy-más", "egymáss"],
    correctIndex: 0,
    exp: "'egymás' egybeírandó, új jelentésű szó: 'kölcsönösen'."
  },
  {
    q: "Melyik szó írása helyes?",
    options: ["kissebb", "kisebb", "kisebb", "kiss ebb"],
    correctIndex: 1,
    exp: "A 'kisebb' szóban csak egy s van, a melléknévi fokozás jele: -bb."
  },
  {
    q: "Melyik szó helyes?",
    options: ["egyszárnyú", "egy szárnyú", "egy-szárnyú", "egyszárnyúu"],
    correctIndex: 0,
    exp: "Az összetett szót egybeírjuk: 'egyszárnyú'."
  },
  {
    q: "Melyik szó írása helytelen?",
    options: ["különbség", "együtt", "eggyütt", "mindkettő"],
    correctIndex: 2,
    exp: "A 'együtt' két g-vel helytelen. Csak egy g: 'együtt'."
  },
  {
    q: "Mi a helyes írásmód? 'valószínűleg'",
    options: ["valószínűleg", "valószínű légy", "valószinüleg", "valószinűleg"],
    correctIndex: 0,
    exp: "A helyes alak: 'valószínűleg' – hosszú ű és é betűkkel."
  },
  {
    q: "Melyik szó helyes?",
    options: ["egyátalán", "egyáltalán", "egy általán", "egyáltallán"],
    correctIndex: 1,
    exp: "A helyes forma: 'egyáltalán' – egybeírva és hosszú á-val."
  },
  {
    q: "Melyik szóban van fölösleges 'j'?",
    options: ["hagyja", "mondja", "visszajön", "folytassuk"],
    correctIndex: 3,
    exp: "'folytassuk' 'ly'-nal írandó, nem 'j'-vel. Gyakori hiba: 'fojtat' ↔ 'folytat'."
  },
  {
    q: "Mi a helyes írásmód a következőben: 'meg + lepődött'?",
    options: ["meg lepődött", "meglepődött", "meg-lepődött", "meg lepődöttt"],
    correctIndex: 1,
    exp: "Az igekötős igéket egybeírjuk: 'meglepődött'."
  },
  {
    q: "Melyik szó helytelen?",
    options: ["különben", "befejezés", "megszünik", "gondolatjel"],
    correctIndex: 2,
    exp: "A helyes alak: 'megszűnik' – hosszú ű-vel."
  },
  {
    q: "Melyik szó helyes?",
    options: ["körülbelül", "körűlbelül", "kőrülbelül", "körül belül"],
    correctIndex: 0,
    exp: "'körülbelül' egybeírandó, a 'körül' csak egy rövid ü-vel helyes."
  },
  {
    q: "Melyik szó hibásan van írva?",
    options: ["belül", "felül", "kivül", "alul"],
    correctIndex: 2,
    exp: "A 'kivül' helytelen, helyesen 'kívül' hosszú í-vel."
  },
  {
    q: "Mi a helyes írásmód? 'ugy + is'",
    options: ["úgyis", "úgy is", "úgy-is", "ugyis"],
    correctIndex: 0,
    exp: "'úgyis' egybeírandó, ha jelentése 'mindegyik esetben'."
  },
  {
    q: "Melyik szó helytelenül van írva?",
    options: ["helyesírás", "tulajdonképpen", "kézbe", "meg lepődött"],
    correctIndex: 3,
    exp: "Az 'meg lepődött' külön írása helytelen, helyesen 'meglepődött'."
  },
  {
    q: "Mi a helyes írásmód? 'semmi képp'",
    options: ["semmiképp", "semmi képp", "semmi-képp", "semmi képpen"],
    correctIndex: 0,
    exp: "'semmiképp' egybeírandó, jelentése 'semmilyen módon'."
  },
  {
    q: "Melyik szóban van fölösleges hosszú magánhangzó?",
    options: ["biztosan", "túlzottan", "kellően", "mindíg"],
    correctIndex: 3,
    exp: "'mindíg' hibás, mert rövid i-vel: 'mindig'."
  }
];

// SECTION az altémához
export const section_helyesirasi_hibak = {
  id: "helyesirasi_hibak",
  title: "Helyesírás és központozás IV. 🟦 Gyakori helyesírási hibák és javításuk",
  bank: bank_helyesirasi_hibak,
};
// 🟩 1. ALTÉMA – A mondatfajták a beszélő szándéka szerint
export const bank_mondatfajtak_szandek: Question[] = [
  {
    q: "Melyik mondat kijelentő mondat?",
    options: ["Ne menj el!", "Gyere ide!", "Ma süt a nap.", "Süssünk palacsintát!"],
    correctIndex: 2,
    exp: "A kijelentő mondat tájékoztat valamiről → „Ma süt a nap.”"
  },
  {
    q: "Melyik a kérdő mondat?",
    options: ["Szia!", "Elmentél tegnap a boltba?", "Ne gyere későn!", "Nagyon szeretlek."],
    correctIndex: 1,
    exp: "A kérdő mondat kérdést tartalmaz → „Elmentél tegnap a boltba?”"
  },
  {
    q: "Melyik felszólító mondat?",
    options: ["Ne zavarj!", "Tegnap esett az eső.", "Tényleg elhiszed?", "De szép napunk van!"],
    correctIndex: 0,
    exp: "A felszólító mondat cselekvésre ösztönöz → „Ne zavarj!”"
  },
  {
    q: "Melyik felkiáltó mondat?",
    options: ["De szép ez a virág!", "Menj oda!", "Ez a ház kék.", "Kéred a fagyit?"],
    correctIndex: 0,
    exp: "A felkiáltó mondat érzelmet fejez ki → „De szép ez a virág!”"
  },
  {
    q: "Mi jellemző a kijelentő mondatra?",
    options: ["Parancsot ad", "Kérdez", "Érzelmet fejez ki", "Tájékoztat"],
    correctIndex: 3,
    exp: "A kijelentő mondat tájékoztat valamiről, információt közöl."
  },
  {
    q: "Melyik mondat típusa: „Ne hagyd el a táskád!”?",
    options: ["Kérdő", "Kijelentő", "Felszólító", "Felkiáltó"],
    correctIndex: 2,
    exp: "A „Ne hagyd el a táskád!” mondat cselekvésre szólít fel → felszólító mondat."
  },
  {
    q: "A „Hová tetted a könyved?” mondat milyen?",
    options: ["Kérdő", "Felszólító", "Kijelentő", "Felkiáltó"],
    correctIndex: 0,
    exp: "Kérdőszóval kezdődik és választ vár → kérdő mondat."
  },
  {
    q: "Milyen mondat a „De ügyes vagy!”?",
    options: ["Felkiáltó", "Kérdő", "Felszólító", "Kijelentő"],
    correctIndex: 0,
    exp: "Erős érzelmet fejez ki → felkiáltó mondat."
  },
  {
    q: "Melyik mondat kérdő?",
    options: ["Elmentek kirándulni.", "Vajon hol lehet most?", "De hideg van!", "Ülj le!"],
    correctIndex: 1,
    exp: "A „Vajon hol lehet most?” kérdést tartalmaz, tehát kérdő mondat."
  },
  {
    q: "Mit fejez ki a felkiáltó mondat?",
    options: ["Érzelmet", "Kérést", "Tényt", "Tantárgyat"],
    correctIndex: 0,
    exp: "A felkiáltó mondat az érzelmeket (öröm, harag, meglepetés stb.) fejezi ki."
  },
  {
    q: "Melyik mondat felszólító?",
    options: ["Ne menj be!", "Elmegyünk nyaralni.", "Milyen szép ruha!", "Megérkeztél már?"],
    correctIndex: 0,
    exp: "A felszólító mód cselekvésre szólít fel → „Ne menj be!”"
  },
  {
    q: "Milyen mondat a „Milyen finom ez a torta!”?",
    options: ["Felkiáltó", "Kérdő", "Kijelentő", "Felszólító"],
    correctIndex: 0,
    exp: "Erős érzelmet fejez ki → felkiáltó mondat."
  },
  {
    q: "Mi a funkciója a kijelentő mondatnak?",
    options: ["Felhívás", "Tájékoztatás", "Kérdés", "Érzelemkifejezés"],
    correctIndex: 1,
    exp: "A kijelentő mondat információt közöl → tájékoztatás."
  },
  {
    q: "Melyik mondat kijelentő?",
    options: ["Kinyitod az ablakot?", "A nap nyugaton nyugszik.", "Ne csukd be az ajtót!", "De jó ez!"],
    correctIndex: 1,
    exp: "A tényközlő mondat → kijelentő mondat."
  },
  {
    q: "Mi jellemzi a kérdő mondatot?",
    options: ["Érzelmet fejez ki", "Választ vár", "Felhívásra ösztönöz", "Tiltást tartalmaz"],
    correctIndex: 1,
    exp: "A kérdő mondat kérdést tesz fel, és választ vár."
  },
  {
    q: "Melyik mondatban van felszólítás?",
    options: ["Ne beszélj hangosan!", "Ki jött be?", "Nagyon szép ez a kert.", "Ez a ház régi."],
    correctIndex: 0,
    exp: "Tiltás formájában is felszólítás → „Ne beszélj hangosan!”"
  },
  {
    q: "A „Jaj, de szép ez a táj!” mondat típusa?",
    options: ["Kérdő", "Kijelentő", "Felkiáltó", "Felszólító"],
    correctIndex: 2,
    exp: "Erős érzelmi töltetű → felkiáltó mondat."
  },
  {
    q: "Mi a kérdő mondat célja?",
    options: ["Érzelemkifejezés", "Cselekvésre ösztönzés", "Tájékozódás", "Dicséret"],
    correctIndex: 2,
    exp: "A kérdő mondat célja: információ, válasz kérése → tájékozódás."
  },
  {
    q: "Melyik mondat felszólító?",
    options: ["Süss palacsintát!", "Hol van a könyved?", "Ez a fiú magas.", "Milyen szép ház!"],
    correctIndex: 0,
    exp: "Cselekvésre szólít fel → felszólító mondat."
  },
  {
    q: "Melyik mondatban fejeződik ki erős érzelem?",
    options: ["Ne menj el!", "Szeretem a csokit.", "De szép ez a ruha!", "Kinyitod az ajtót?"],
    correctIndex: 2,
    exp: "Erős érzelem = felkiáltó mondat → „De szép ez a ruha!”"
  },
];

// SECTION az altémához
export const section_mondatfajtak_szandek = {
  id: "mondatfajtak_szandek",
  title: "Mondatfajták I. – A beszélő szándéka szerint",
  bank: bank_mondatfajtak_szandek,
};
// 🟦 2. ALTÉMA – A mondatfajták szerkezetük szerint
// egyszerű / összetett; tagolt / tagolatlan; bővített / bővítetlen; hiányos stb.
export const bank_mondatfajtak_szerkezet: Question[] = [
  {
    q: "Melyik egyszerű mondat?",
    options: ["Elmentem a boltba, és vettem kenyeret.", "Elmentem a boltba.", "Amikor elindultam, zuhogott.", "Ha fáradt vagyok, pihenek."],
    correctIndex: 1,
    exp: "Az egyszerű mondatnak egy állítmánya van → „Elmentem a boltba.”"
  },
  {
    q: "Melyik összetett mondat?",
    options: ["Este tanulok.", "A macska az ágyon alszik.", "Amíg főztem, csörgött a telefon.", "Szép az idő."],
    correctIndex: 2,
    exp: "Az összetett mondatban legalább két állítmány (tagmondat) van → időhatározói alárendelés."
  },
  {
    q: "Melyik TAGOLATLAN mondat?",
    options: ["Megjött a busz.", "Milyen csodás!", "A fiú hazament.", "Holnapra kész a házi feladat."],
    correctIndex: 1,
    exp: "A tagolatlan mondatnak nincs hagyományos alany-állítmány szerkezete, csak mondatértékű kijelentés/érzelem."
  },
  {
    q: "Válaszd ki a TAGOLT mondatot!",
    options: ["Csönd!", "De szép!", "A kutya ugat.", "Jaj!"],
    correctIndex: 2,
    exp: "Tagolt = van alany-állítmány szerkezet → „A kutya ugat.”"
  },
  {
    q: "Melyik BŐVÍTETLEN mondat?",
    options: ["A madár csicsereg a fán.", "A madár csicsereg.", "A kis madár vidáman csicsereg.", "A madár reggel csicsereg a fán."],
    correctIndex: 1,
    exp: "Bővítetlen = csak alany és állítmány (vagy csak állítmány) → „A madár csicsereg.”"
  },
  {
    q: "Melyik BŐVÍTETT mondat?",
    options: ["Esik.", "Péter olvas.", "Péter este a szobában olvas.", "Futok."],
    correctIndex: 2,
    exp: "Bővített mondatban az alany-állítmány mellett bővítmények is vannak (hely, idő, mód stb.)."
  },
  {
    q: "Melyik HIÁNYOS mondat?",
    options: ["Holnap moziba megyünk.", "A kertben dolgozik.", "Én a szobában, ő a konyhában.", "Szeretem a csokit."],
    correctIndex: 2,
    exp: "A második tagból hiányzik az állítmány, de értelmileg kiegészül az elsőből → ellipszis."
  },
  {
    q: "Az „Esik az eső, de meleg van.” mondat típusa?",
    options: ["Alárendelő összetett", "Mellérendelő összetett", "Egyszerű tagolt", "Tagolatlan"],
    correctIndex: 1,
    exp: "Két tagmondat egyenrangúan kapcsolódik kötőszóval → mellérendelés (ellentétes)."
  },
  {
    q: "Az „Amikor hazaértem, megvacsoráztam.” szerkezete?",
    options: ["Mellérendelő összetett", "Egyszerű", "Alárendelő összetett", "Tagolatlan"],
    correctIndex: 2,
    exp: "Az időhatározói mellékmondat alárendelt a főmondatnak → alárendelő összetett."
  },
  {
    q: "Melyik tagmondathatároló jel NEM jellemző?",
    options: ["Vessző", "Pontosvessző", "Kettőspont", "Három pont mindenképp"],
    correctIndex: 3,
    exp: "A három pont nem tagmondathatároló jel; a vessző, pontosvessző, kettőspont viszont lehet az."
  },
  {
    q: "Melyik a MONDATKAPCSOLAT példája?",
    options: ["Elmentem, és vettem kenyeret.", "Elmentem; vettem kenyeret.", "Elmentem: vettem kenyeret.", "Elmentem. Vettem kenyeret."],
    correctIndex: 3,
    exp: "Önálló mondatok laza kapcsolata írásjellel → mondatkapcsolat."
  },
  {
    q: "A „Hű, de jó!” mondat jellege?",
    options: ["Tagolatlan felkiáltó mondat", "Egyszerű kijelentő", "Összetett kérdő", "Bővített felszólító"],
    correctIndex: 0,
    exp: "Érzelemkifejező, alany-állítmány nélkül → tagolatlan felkiáltó."
  },
  {
    q: "Melyik NEM összetett mondat?",
    options: ["Szeretek olvasni, mert kikapcsol.", "Ha elfáradok, pihenek.", "Ma korán keltem.", "Elment, majd visszajött."],
    correctIndex: 2,
    exp: "Csak egy állítmány van → egyszerű mondat."
  },
  {
    q: "Melyik PÁRHUZAMOS mellérendelés?",
    options: ["Vagy esik, vagy fúj a szél.", "Mert fáradt voltam, lefeküdtem.", "Bár esett, elmentünk.", "Olyan csend volt, hogy elaludtam."],
    correctIndex: 0,
    exp: "Azonos szerepű tagmondatok választó kötőszóval → párhuzamos mellérendelés."
  },
  {
    q: "Melyik OKHATÁROZÓI alárendelés?",
    options: ["Azért sietek, hogy elérjem a buszt.", "Mert elaludtam, elkéstem.", "Ha sietsz, eléred.", "Bár esik, fut."],
    correctIndex: 1,
    exp: "„Mert” → okhatározói alárendelő viszony."
  },
  {
    q: "Melyik CÉLHATÁROZÓI alárendelés?",
    options: ["Úgy futott, mint a szél.", "Azért tanulok, hogy jó jegyet kapjak.", "Ha esik, maradunk.", "Bár fáradt, dolgozik."],
    correctIndex: 1,
    exp: "„Azért…, hogy …” → célhatározói alárendelés."
  },
  {
    q: "Az „Olyan fáradt voltam, hogy elaludtam.” viszonya?",
    options: ["Hasonlító", "Következményes", "Okhatározói", "Megengedő"],
    correctIndex: 1,
    exp: "„Olyan…, hogy …” → következményes alárendelés."
  },
  {
    q: "Melyik MONDATEGYENÉRTÉKŰ SZERKEZET?",
    options: ["A fiú fut a pályán.", "A pályán futó fiú.", "A futás jó sport.", "Futva ért be."],
    correctIndex: 3,
    exp: "Határozói igenév + bővítmény gyakran mondategyenértékű (idő/mód) → „Futva ért be.”"
  },
  {
    q: "A „Kinyitotta az ablakot, hogy friss levegő jöjjön be.” …",
    options: ["Egyszerű mondat", "Mellérendelő összetett", "Alárendelő összetett (célhatározói)", "Tagolatlan"],
    correctIndex: 2,
    exp: "„… hogy …” → célhatározói alárendelő összetett."
  },
  {
    q: "Melyik a HELYES szerkezeti besorolás: „Elmentem a könyvtárba; sok jó könyvet találtam.”?",
    options: ["Egyszerű bővített", "Alárendelő összetett", "Mellérendelő összetett (következtető/magyarázó)", "Tagolatlan"],
    correctIndex: 3 - 1, // index 2
    exp: "Pontosvesszővel összekapcsolt, önálló tagmondatok → mellérendelő összetett (magyarázó jelleg)."
  },
];

// SECTION az altémához
export const section_mondatfajtak_szerkezet = {
  id: "mondatfajtak_szerkezet",
  title: "Mondatfajták II. – Szerkezet szerint",
  bank: bank_mondatfajtak_szerkezet,
};
// 🟦 3. ALTÉMA – Mondatszintű írásjelek és határolás
// vessző, pontosvessző, kettőspont, gondolatjel, zárójelek, idézőjelek

export const bank_mondatszintu_irasjelek: Question[] = [
  {
    q: "Melyik mondatban KELL vessző a kötőszó elé?",
    options: [
      "Elmentem és vettem kenyeret.",
      "Szeretek olvasni mert kikapcsol.",
      "Korán keltem ezért fáradt vagyok.",
      "Hideg van de süt a nap."
    ],
    correctIndex: 1,
    exp: "Az okhatározói mellékmondat előtt vessző áll: „…, mert …”."
  },
  {
    q: "Melyik NEM igényel vesszőt?",
    options: [
      "A diák aki nyert nagyon boldog.",
      "Az a diák aki nyert nagyon boldog.",
      "A diák, aki nyert, nagyon boldog.",
      "A diák aki nyert, nagyon boldog."
    ],
    correctIndex: 2,
    exp: "Az értelmező, beékelődő mellékmondatot két vessző választja el."
  },
  {
    q: "Hol a HELYES vesszőzés?",
    options: [
      "Ha esik maradunk otthon.",
      "Ha esik, maradunk otthon.",
      "Ha, esik maradunk otthon.",
      "Ha esik maradunk, otthon."
    ],
    correctIndex: 1,
    exp: "Feltételes mellékmondat után vessző: „Ha esik, …”."
  },
  {
    q: "Mikor célszerű PONTOSVESSZŐT használni?",
    options: [
      "Szoros alárendelés jelölésére.",
      "Azonos szintű, de bonyolult tagmondatok elválasztására.",
      "Szóismétlés elkerülésére.",
      "Rövid mondat végén."
    ],
    correctIndex: 1,
    exp: "A pontosvessző lazább kapcsolatot jelez a mondatrészek között, mint a vessző."
  },
  {
    q: "Melyik példáz KETTŐSPONTOT?",
    options: [
      "Sok mindent vettem, kenyeret tejet vajat.",
      "Sok mindent vettem: kenyeret, tejet, vajat.",
      "Sok mindent vettem; kenyeret, tejet, vajat.",
      "Sok mindent vettem — kenyeret, tejet, vajat."
    ],
    correctIndex: 1,
    exp: "A felsorolás bevezetésére szolgál a kettőspont."
  },
  {
    q: "Melyik GONDOLATJELES közbevetés helyes?",
    options: [
      "Péter — aki késik — ma is elaludt.",
      "Péter, — aki késik, — ma is elaludt.",
      "Péter – aki késik, – ma is elaludt.",
      "Péter aki késik – ma is elaludt."
    ],
    correctIndex: 2,
    exp: "A beékelést gondolatjelek közé tesszük (kötőjelnél hosszabb: „–”)."
  },
  {
    q: "Melyik mondatban INDOKOLT a KETTŐSPONT?",
    options: [
      "A célom egyszerű: sikerülni fog.",
      "Elmentem, mert fáradt voltam:",
      "Tanulok: és pihenek.",
      "Nem esik: de hideg van."
    ],
    correctIndex: 0,
    exp: "Magyarázó tagmondat, következmény bevezetése: „A célom egyszerű: …”."
  },
  {
    q: "Melyik írásjel zárja az IDÉZETET HELYESEN?",
    options: [
      "„Szeretem az irodalmat”.",
      "„Szeretem az irodalmat.”",
      "„Szeretem az irodalmat”,",
      "„Szeretem az irodalmat,”"
    ],
    correctIndex: 1,
    exp: "Az idézethez tartozó mondatzáró írásjel az idézőjelek BELSEJÉBE kerül."
  },
  {
    q: "Hol KELL ZÁRÓJELET használni?",
    options: [
      "Péter tegnap (talán) beteg volt.",
      "Péter ( tegnap ) beteg volt.",
      "Péter tegnap )talán( beteg volt.",
      "Péter tegnap talán beteg volt."
    ],
    correctIndex: 0,
    exp: "A bizonytalan, magyarázó jellegű betoldást zárójelbe tehetjük."
  },
  {
    q: "Melyik mondat tagolása HELYES?",
    options: [
      "Elmentem a boltba: vettem kenyeret; tejet.",
      "Elmentem a boltba; vettem kenyeret, tejet.",
      "Elmentem a boltba, vettem; kenyeret tejet.",
      "Elmentem a boltba vettem: kenyeret; tejet."
    ],
    correctIndex: 1,
    exp: "Két önálló rész között pontosvessző, felsoroláson belül vessző a célszerű."
  },
  {
    q: "Melyik NEM igényel vesszőt?",
    options: [
      "Nemcsak tanul, hanem sportol is.",
      "Mind az osztály, mind a tanár elégedett.",
      "Iskola után, hazamegyek.",
      "Bár fáradt volt, edzett."
    ],
    correctIndex: 2,
    exp: "Egyszerű időhatározói bővítmény nem választandó el vesszővel: „Iskola után hazamegyek.”"
  },
  {
    q: "Hol INDOKOLT a GONDOLATJEL mondateleji megjegyzéshez?",
    options: [
      "– Természetesen igazad van – mondta.",
      "–Természetesen igazad van– mondta.",
      "— Természetesen igazad van — mondta.",
      "- Természetesen igazad van - mondta."
    ],
    correctIndex: 0,
    exp: "Párbeszédben a megszólalás gondolatjellel indítható; a tipográfiailag helyes jel az en-dash (–)."
  },
  {
    q: "Melyik a HELYES írásmód időpontnál?",
    options: [
      "8: 30-kor",
      "8:30-kor",
      "8 :30-kor",
      "8 : 30-kor"
    ],
    correctIndex: 1,
    exp: "Az időpontnál a kettőspont szóköz nélkül áll: „8:30-kor”."
  },
  {
    q: "Hol hiányzik vessző a megszólítás miatt?",
    options: [
      "Kedves Anna kérlek segíts!",
      "Kedves Anna, kérlek segíts!",
      "Kedves, Anna kérlek segíts!",
      "Kedves Anna kérlek, segíts!"
    ],
    correctIndex: 1,
    exp: "A megszólítást vesszővel választjuk el: „Kedves Anna, …”."
  },
  {
    q: "Melyik mondatban helyes a KETTŐSPONT idézet előtt?",
    options: [
      "A tanár így szólt: „Holnap dolgozat.”",
      "A tanár így szólt „Holnap dolgozat”:",
      "A tanár így szólt; „Holnap dolgozat.”",
      "A tanár így szólt — „Holnap dolgozat.”"
    ],
    correctIndex: 0,
    exp: "Idézet BEVEZETÉSÉRE kettőspontot használunk."
  },
  {
    q: "Hol INDOKOLT a PONTOSVESSZŐ?",
    options: [
      "Kicsi a lakás, mégis szeretjük.",
      "Kicsi a lakás; mégis szeretjük.",
      "Kicsi a lakás: mégis szeretjük.",
      "Kicsi a lakás — mégis szeretjük."
    ],
    correctIndex: 1,
    exp: "Erős szünet két önálló állítás között, ahol a vessző túl gyenge volna."
  },
  {
    q: "Melyik ZÁRÓJELES adatkezelés helyes?",
    options: [
      "Petőfi Sándor (1823–1849) költő.",
      "Petőfi Sándor ( 1823 – 1849 ) költő.",
      "Petőfi Sándor 1823–1849 ( költő ).",
      "Petőfi Sándor –1823–1849– költő."
    ],
    correctIndex: 0,
    exp: "Az évszámok között gondolatjel (–), a zárójelhez nem teszünk belső szóközt."
  },
  {
    q: "Hol kell VESSZŐ a kapcsolatos kötőszó előtt?",
    options: [
      "Sokat tanultam és felkészültem.",
      "Sokat tanultam, és felkészültem.",
      "Sokat tanultam és, felkészültem.",
      "Sokat tanultam; és felkészültem."
    ],
    correctIndex: 1,
    exp: "Két önálló tagmondat kapcsolatos viszonyban: célszerű vesszővel tagolni."
  },
  {
    q: "Hol helyes az IDÉZŐJELEK használata címnél?",
    options: [
      "Kedvenc versem: „Szeptember végén”.",
      "Kedvenc versem „Szeptember végén”:",
      "Kedvenc versem: „Szeptember végén.”",
      "Kedvenc versem — „Szeptember végén”."
    ],
    correctIndex: 0,
    exp: "Címek önálló említésekor idézőjelbe tesszük; a kettőspont a cím ELŐTT áll."
  },
  {
    q: "Melyik a HELYES tagolás magyarázó mellérendelésnél?",
    options: [
      "Szeretem a kávét: erőt ad.",
      "Szeretem a kávét erőt ad.",
      "Szeretem a kávét; erőt ad.",
      "Szeretem a kávét — erőt ad."
    ],
    correctIndex: 0,
    exp: "Magyarázó, következtető viszonyban gyakori a kettőspont: „…, mert/azért: …”."
  }
];

// SECTION az altémához
export const section_mondatszintu_irasjelek = {
  id: "mondatszintu_irasjelek",
  title: "Mondatfajták III. – Mondatszintű írásjelek és határolás",
  bank: bank_mondatszintu_irasjelek,
};
// 🟦 4. ALTÉMA – Egyeztetés, szórend, mondatritmus
// alany-állítmányi egyeztetés; többes szám; összetett alany; szórendi semlegesség/kiemelés; ritmus, párhuzam, ismétlés

export const bank_egyeztetes_szorend_ritmus: Question[] = [
  {
    q: "Mit jelent az alany–állítmányi egyeztetés?",
    options: [
      "Az alany és az állítmány személyben és számban összhangban van",
      "Az alany és a tárgy azonos esetszámban áll",
      "Az állítmány mindig többes számú",
      "Az alany mindig egyes számú"
    ],
    correctIndex: 0,
    exp: "A magyarban az állítmány száma és (igei) személye az alanyhoz igazodik."
  },
  {
    q: "Melyik mondat egyeztet helyesen?",
    options: [
      "A diákok csendben figyel.",
      "A diákok csendben figyelnek.",
      "A diákok csendben figyelsz.",
      "A diákok csendben figyelünk."
    ],
    correctIndex: 1,
    exp: "Többes számú alany → többes számú állítmány: „figyelnek”."
  },
  {
    q: "Összetett alanynál (Péter és Anna) mi az alapegyeztetés?",
    options: ["Egyes szám", "Többes szám", "Mindig E/3.", "Nincs szabály"],
    correctIndex: 1,
    exp: "Kettős alany → többes szám az állítmányban: „Péter és Anna jönnek”."
  },
  {
    q: "Melyik mondat helyes egyeztetésű?",
    options: [
      "A tanárnő meg a diákok elégedett.",
      "A tanárnő meg a diákok elégedettek.",
      "A tanárnő meg a diákok elégedettek volt.",
      "A tanárnő meg a diákok elégedett voltak."
    ],
    correctIndex: 1,
    exp: "Vegyes számú alanycsoport → többes számú állítmány: „elégedettek”."
  },
  {
    q: "Mikor maradhat egyes szám az állítmány többes értelmű alanynál?",
    options: [
      "Soha",
      "Ha az alany jellegzetesen gyűjtőnév vagy mennyiséget kifejező szó",
      "Ha az alany nőnemű",
      "Ha kérdő mondat"
    ],
    correctIndex: 1,
    exp: "Pl. „A közönség tapsolt.” – a gyűjtőnévi alany egyeztethető E/3.-ban."
  },
  {
    q: "Válaszd ki a helyes egyeztetést: „A csapat … a meccset.”",
    options: ["megnyerték", "megnyerte", "megnyersz", "megnyernek"],
    correctIndex: 1,
    exp: "„csapat” gyűjtőnév → E/3.: „megnyerte”."
  },
  {
    q: "Melyik a semleges (alap) magyar szórend?",
    options: [
      "Alany – Állítmány – Tárgy – Határozók",
      "Állítmány – Alany – Tárgy – Határozók",
      "Tárgy – Alany – Állítmány",
      "Nincs semleges szórend a magyarban"
    ],
    correctIndex: 0,
    exp: "Alapesetben alany–állítmány, majd bővítmények; a fókusz helye ettől eltérhet."
  },
  {
    q: "Hol van fókusz (kiemelés) a mondatban?",
    options: [
      "Mindig a mondat végén",
      "Az állítmány előtt az ún. fókuszpozícióban",
      "Mindig a mondat elején",
      "A tárgy után"
    ],
    correctIndex: 1,
    exp: "A fókusz az ige előtt áll, és rá esik a fő hangsúly: „ÉN olvastam el a könyvet.”"
  },
  {
    q: "Melyik mondatban a TÁRGY a fókusz?",
    options: [
      "A TANÁR magyarázta el a feladatot.",
      "A tanár MAGYARÁZTA el a feladatot.",
      "A tanár a FELADATOT magyarázta el.",
      "A tanár elmagyarázta a feladatot."
    ],
    correctIndex: 2,
    exp: "Az ige előtti fókuszpozícióban a tárgy áll: „a FELADATOT magyarázta el”."
  },
  {
    q: "Melyik NEM fókusz, hanem témamegjelölés (topik)?",
    options: [
      "A könyvet Péter olvasta el.",
      "Péter a könyvet olvasta el.",
      "A könyvet, azt Péter olvasta el.",
      "Pont Péter olvasta el a könyvet."
    ],
    correctIndex: 1,
    exp: "„Péter …” mondatkezdő topik; a fókusz az ige előtt van (itt: „a könyvet”)."
  },
  {
    q: "Mi a mondatritmus?",
    options: [
      "A mondat hangrendje",
      "A hangsúlyozás, szünetek, ismétlések, párhuzamok által kialakuló lüktetés",
      "A rímelés szabálya",
      "A betűk hossza"
    ],
    correctIndex: 1,
    exp: "A ritmust a prozódia (hangsúly, hanglejtés) és a szerkezeti ismétlődések adják."
  },
  {
    q: "Melyik példa mutat gondolatritmust/párhuzamot?",
    options: [
      "Szeretek olvasni.",
      "Olvasok, írok, tanulok.",
      "Aki mer, az nyer; aki fél, az veszít.",
      "Szép az idő."
    ],
    correctIndex: 2,
    exp: "Azonos szerkezetek ismétlődése → párhuzam (gondolatritmus)."
  },
  {
    q: "Melyik mondatban helyes az egyeztetés többes alanynál?",
    options: [
      "A fiú és a lány fut.",
      "A fiú és a lány futnak.",
      "A fiú és a lány futsz.",
      "A fiú és a lány futunk."
    ],
    correctIndex: 1,
    exp: "Kettős alany → többes szám: „futnak”."
  },
  {
    q: "Mi jellemző a semleges szórendre állítmány helye szerint?",
    options: [
      "A mondat végén áll",
      "Az alany után áll",
      "Mindig az elején áll",
      "A tárgy után áll"
    ],
    correctIndex: 1,
    exp: "Semleges rend: Alany – Állítmány – (Tárgy/Határozók)."
  },
  {
    q: "Melyik kiemelés teszi egyértelművé, HOGY KI végezte az eseményt?",
    options: [
      "A könyvet olvasta el Péter.",
      "PÉTER olvasta el a könyvet.",
      "Elolvasta Péter a könyvet.",
      "Péter elolvasta a könyvet."
    ],
    correctIndex: 1,
    exp: "Fókusz az ige előtt: „PÉTER olvasta el…”."
  },
  {
    q: "Hol sérül az egyeztetés?",
    options: [
      "A sok gyerek futott a pályán.",
      "A közönség tapsolt.",
      "A tanulók feleltek a kérdésekre.",
      "A tanulók felelt a kérdésekre."
    ],
    correctIndex: 3,
    exp: "Többes számú alany → többes számú állítmány szükséges: „feleltek”."
  },
  {
    q: "Melyik szórendi megoldás jelöl időkörülményt kiemelve?",
    options: [
      "HOLNAP megyünk kirándulni.",
      "Kirándulni megyünk holnap.",
      "Holnap kirándulni megyünk.",
      "Mindhárom"
    ],
    correctIndex: 3,
    exp: "A magyar szórend rugalmas; a fókusz és a topik pozíciók variálhatók a kiemelés szerint."
  },
  {
    q: "Melyik mondat ritmusát erősíti a felsorolás?",
    options: [
      "Olvasok.",
      "Olvasok és tanulok.",
      "Olvasok, tanulok, sportolok.",
      "Olvasok, tanulok."
    ],
    correctIndex: 2,
    exp: "A három elemű felsorolás különösen ritmikus, fokozó hatású."
  },
  {
    q: "Miért hasznos a párhuzamos szerkezet?",
    options: [
      "Rontja az érthetőséget",
      "Egységet és átláthatóságot ad, könnyíti a befogadást",
      "Mindig helytelen",
      "Csak versben használható"
    ],
    correctIndex: 1,
    exp: "Párhuzamosság → könnyebb követhetőség, erősebb hatás."
  },
  {
    q: "Melyik mondatban természetesebb a semleges szórend?",
    options: [
      "Elolvasom én a könyvet.",
      "Én elolvasom a könyvet.",
      "A könyvet elolvasom én.",
      "Elolvasom a könyvet én."
    ],
    correctIndex: 1,
    exp: "Topik („Én”) + állítmány + tárgy: a mindennapi közlésben ez a legtermészetesebb."
  }
];

// SECTION az altémához
export const section_egyeztetes_szorend_ritmus = {
  id: "egyeztetes_szorend_ritmus",
  title: "Mondatfajták IV. – Egyeztetés, szórend, mondatritmus",
  bank: bank_egyeztetes_szorend_ritmus,
};
// 🟩 1. ALTÉMA – A szöveg és mondatai közötti kapcsolat (általános kohézió)
export const bank_szovegkohézió_altalanos: Question[] = [
  {
    q: "Mit jelent a szövegkohézió fogalma?",
    options: [
      "A mondatok közötti kapcsolódást és összefüggést a szövegben",
      "A mondatok különállását a szövegben",
      "A helyesírás szabályait",
      "A mondatok hosszúságát"
    ],
    correctIndex: 0,
    exp: "A szövegkohézió a szöveg mondatai közötti kapcsolat, ami egységet teremt a mondatok között."
  },
  {
    q: "Mi biztosítja a szöveg egységét?",
    options: [
      "A mondatok közötti nyelvi és tartalmi kapcsolatok",
      "A mondatok száma",
      "A mondatok hossza",
      "A mondatok sorrendje véletlenszerűen"
    ],
    correctIndex: 0,
    exp: "A szöveg egységét a kohéziós kapcsolatok, azaz a nyelvi és tartalmi összefüggések biztosítják."
  },
  {
    q: "Mi jellemző a jól szerkesztett szövegre?",
    options: [
      "Mondatai lazán kapcsolódnak",
      "Mondatai egymásból következnek, összefüggnek",
      "Nincsenek kötőelemei",
      "Minden mondata külön témát dolgoz fel"
    ],
    correctIndex: 1,
    exp: "A jól szerkesztett szöveg mondatai logikusan kapcsolódnak egymáshoz."
  },
  {
    q: "Melyik példa mutat szoros kohéziót?",
    options: [
      "A nap süt. Az ég kék. A gyerekek játszanak.",
      "A nap süt, ezért a gyerekek az udvaron játszanak.",
      "A nap süt, a könyv a polcon van.",
      "A gyerekek játszanak, a nap süt, de hideg van."
    ],
    correctIndex: 1,
    exp: "A „mert”, „ezért” kötőszavak összefüggést teremtenek a mondatok között."
  },
  {
    q: "Mi NEM tartozik a kohéziós eszközök közé?",
    options: [
      "A kötőszavak",
      "A névmások",
      "A mondatvégi írásjelek",
      "A szinonimák"
    ],
    correctIndex: 2,
    exp: "A mondatvégi írásjelek nem kötnek mondatokat össze, csak lezárják őket."
  },
  {
    q: "Melyik nyelvi elem segíti a kohéziót?",
    options: ["A kötőszó", "A ragozás", "A hangsúly", "A helyesírás"],
    correctIndex: 0,
    exp: "A kötőszók kapcsolatot hoznak létre a mondatok között, pl. 'és', 'mert', 'de'."
  },
  {
    q: "Mi jellemzi a gyenge kohéziójú szöveget?",
    options: [
      "Összefüggő és logikus",
      "Tagolt és gördülékeny",
      "Mondatai laza kapcsolatban vannak",
      "Sok kötőszót használ"
    ],
    correctIndex: 2,
    exp: "Gyenge kohézió esetén a mondatok közti kapcsolatok lazák, logikai összefüggés hiányzik."
  },
  {
    q: "Mi teremthet kapcsolatot a mondatok között?",
    options: [
      "A kötőszók és névmások",
      "A mondatok hosszúsága",
      "A bekezdések száma",
      "A szöveg címe"
    ],
    correctIndex: 0,
    exp: "A kohéziót főleg a kötőszók, névmások és szinonimák biztosítják."
  },
  {
    q: "Mi a szöveg témája?",
    options: [
      "A szöveg fő gondolata, amiről szól",
      "Az első mondata",
      "A szöveg befejezése",
      "A szerző neve"
    ],
    correctIndex: 0,
    exp: "A téma a szöveg központi gondolata, amely köré a mondatok szerveződnek."
  },
  {
    q: "Mi a szöveg tartalmi kohéziója?",
    options: [
      "A mondatok közti logikai és jelentésbeli összefüggés",
      "A mondatok nyelvtani szerkezete",
      "A helyesírás",
      "A mondatok száma"
    ],
    correctIndex: 0,
    exp: "A tartalmi kohézió a gondolati-logikai kapcsolat a mondatok között."
  },
  {
    q: "Melyik példa mutat jelentésbeli kapcsolatot?",
    options: [
      "A kutya ugat. A macska alszik.",
      "A gyerek fut, mert elkésett.",
      "A tanár ír. A diák olvas.",
      "A nap süt. Az asztal kék."
    ],
    correctIndex: 1,
    exp: "A 'mert' okozati viszonyt teremt → jelentésbeli kapcsolat."
  },
  {
    q: "Mi biztosítja, hogy a szöveg összefüggő legyen?",
    options: [
      "A kötőszók, névmások és az ismétlések",
      "A mondatok rövidsége",
      "A díszes szavak",
      "A sok bekezdés"
    ],
    correctIndex: 0,
    exp: "A nyelvi kapcsolóelemek biztosítják az összefüggést, azaz a kohéziót."
  },
  {
    q: "Mi a bekezdés fő funkciója?",
    options: [
      "A szöveg tagolása logikai egységekre",
      "A szavak díszítése",
      "A mondatok rövidítése",
      "A szöveg befejezése"
    ],
    correctIndex: 0,
    exp: "A bekezdés a szöveg logikai és szerkezeti egysége; témaváltásnál használjuk."
  },
  {
    q: "Melyik NEM bekezdés-kezdő kapcsolat?",
    options: [
      "Először is",
      "Ezen kívül",
      "Ezért",
      "Ámde"
    ],
    correctIndex: 3,
    exp: "Az 'Ámde' archaikus, irodalmi forma, nem jellemző bekezdéskezdő kötőszó."
  },
  {
    q: "Mi jellemző a lineáris kohézióra?",
    options: [
      "Az egymást követő mondatok közvetlenül kapcsolódnak",
      "A mondatok véletlenszerűen kapcsolódnak",
      "A mondatok külön témát fejtenek ki",
      "A mondatok csak formai kapcsolatban állnak"
    ],
    correctIndex: 0,
    exp: "A lineáris kohézióban a mondatok közvetlenül kapcsolódnak egymáshoz (pl. névmási utalás)."
  },
  {
    q: "Mi a globális kohézió?",
    options: [
      "A szöveg egészére kiterjedő tematikus és logikai egység",
      "A mondatok nyelvtani kapcsolata",
      "A szöveg tagolása bekezdésekre",
      "A mondatok sorrendje"
    ],
    correctIndex: 0,
    exp: "A globális kohézió az egész szöveg logikai és tartalmi egységét jelenti."
  },
  {
    q: "Melyik példáz gyenge kohéziót?",
    options: [
      "A fiú fut, mert elkésett.",
      "A nap süt, a felhők eltűntek, a kutya ugat.",
      "A kutya ugat, ezért bezárták.",
      "Tegnap esett, ma nem."
    ],
    correctIndex: 1,
    exp: "A mondatok között nincs egyértelmű logikai viszony → gyenge kohézió."
  },
  {
    q: "Mit nevezünk kötőelemeknek?",
    options: [
      "Olyan szavakat, amelyek összekapcsolják a mondatokat",
      "A mondatvégi írásjeleket",
      "A szöveg címét",
      "A bekezdés első mondatát"
    ],
    correctIndex: 0,
    exp: "Kötőelemek (pl. kötőszók, névmások, ismétlések) segítik a mondatok kapcsolatát."
  },
  {
    q: "Melyik mondatpár kapcsolódik legerősebben egymáshoz?",
    options: [
      "Elmentem boltba. Vettem kenyeret.",
      "Elmentem a boltba, és vettem kenyeret.",
      "Elmentem a boltba. Kenyeret.",
      "Elmentem. Vettem kenyeret."
    ],
    correctIndex: 1,
    exp: "A kötőszó („és”) biztosítja a legerősebb kapcsolatot."
  },
  {
    q: "Mi a szöveg logikai szerkezete?",
    options: [
      "A gondolatmenet felépítése és egymásra épülése",
      "A mondatok hossza",
      "A helyesírás szabályai",
      "A szöveg ritmusa"
    ],
    correctIndex: 0,
    exp: "A logikai szerkezet mutatja, hogyan követik egymást a gondolatok a szövegben."
  }
];

// SECTION az altémához
export const section_szovegkohezio_altalanos = {
  id: "szovegkohezio_altalanos",
  title: "Szövegkohézió és kapcsolóelemek I. – A szöveg mondatai közötti kapcsolat",
  bank: bank_szovegkohézió_altalanos,
};
// 🟦 2. ALTÉMA – Grammatikai kapcsolóelemek (névmások, kötőszók, egyeztetés)
export const bank_szovegkohezio_grammatikai: Question[] = [
  {
    q: "Mit nevezünk grammatikai kapcsolóelemnek?",
    options: [
      "Olyan szavakat, amelyek nyelvtani kapcsolatot teremtenek a mondatok között",
      "A mondatvégi írásjeleket",
      "A szöveg bekezdéseit",
      "A mondat első szavát"
    ],
    correctIndex: 0,
    exp: "Grammatikai kapcsolóelemek: névmások, kötőszók, egyeztetés — ezek nyelvtani kapcsolatot biztosítanak a mondatok között."
  },
  {
    q: "Melyik névmás kapcsolja össze a két mondatot? „Péter elment a boltba. Ott vett kenyeret.”",
    options: ["Péter", "boltba", "Ott", "kenyeret"],
    correctIndex: 2,
    exp: "Az „Ott” helyhatározó névmás a második mondatot az elsőhöz köti."
  },
  {
    q: "Melyik személyes névmás teremt kapcsolatot a mondatok között?",
    options: [
      "Ő",
      "Aki",
      "Amely",
      "Mindenki"
    ],
    correctIndex: 0,
    exp: "A személyes névmás („ő”) visszautalásként teremti meg a szövegkohéziót."
  },
  {
    q: "Melyik kötőszó fejez ki ellentétet?",
    options: ["és", "mert", "de", "hogy"],
    correctIndex: 2,
    exp: "Az ellentétes kötőszók: de, azonban, viszont."
  },
  {
    q: "Mi jellemzi az okhatározói kötőszót?",
    options: ["Oka vagy indoka van a másik mondatnak", "Időt fejez ki", "Helyet fejez ki", "Feltételt fejez ki"],
    correctIndex: 0,
    exp: "Az okhatározói kötőszók (pl. mert, mivel, hiszen) az okot jelölik meg."
  },
  {
    q: "Mi a kötőszók szerepe a szövegben?",
    options: [
      "Mondatok vagy tagmondatok közötti viszonyt fejeznek ki",
      "Díszítik a mondatot",
      "Elválasztják a bekezdéseket",
      "Helyettesítik a főneveket"
    ],
    correctIndex: 0,
    exp: "A kötőszók a szöveg logikai viszonyait (ok, ellentét, következmény, stb.) mutatják."
  },
  {
    q: "Melyik kötőszó fejez ki okot?",
    options: ["mert", "de", "és", "vagy"],
    correctIndex: 0,
    exp: "Az 'mert' okhatározói kötőszó, okot jelöl."
  },
  {
    q: "Melyik kötőszó fejez ki következményt?",
    options: ["ezért", "de", "és", "mivel"],
    correctIndex: 0,
    exp: "Az 'ezért' következményes viszonyt jelöl."
  },
  {
    q: "Melyik kötőszó fejez ki feltételt?",
    options: ["ha", "hogy", "mert", "tehát"],
    correctIndex: 0,
    exp: "A 'ha' feltételes kötőszó, pl. 'Ha esik, maradunk otthon.'"
  },
  {
    q: "Melyik kötőszó fejez ki ellentétet?",
    options: ["de", "mivel", "tehát", "ha"],
    correctIndex: 0,
    exp: "Az 'de' ellentétes kötőszó, ellentétes kapcsolatot teremt a mondatok között."
  },
  {
    q: "Mi az egyeztetés szerepe a szövegkohézióban?",
    options: [
      "Az alany és az állítmány nyelvtani kapcsolatát biztosítja",
      "A szavakat díszíti",
      "A mondatok hosszát szabályozza",
      "A bekezdéseket elválasztja"
    ],
    correctIndex: 0,
    exp: "Az egyeztetés (szám, személy, nem) összetartja a mondat elemeit nyelvtanilag."
  },
  {
    q: "Melyik példában van grammatikai kapcsolat névmás segítségével?",
    options: [
      "A kutya ugat. A macska dorombol.",
      "A fiú olvas. Ő nagyon szeret könyveket.",
      "A fák zöldek. A levegő friss.",
      "A lány nevet. A fiú is nevet."
    ],
    correctIndex: 1,
    exp: "Az 'Ő' névmás visszautal az előző mondat alanyára."
  },
  {
    q: "Mi a kötőszó szerepe ebben a mondatban: 'Sokat tanul, mert szeretne jó jegyet.'?",
    options: ["Ellentétet fejez ki", "Okot fejez ki", "Feltételt fejez ki", "Következményt fejez ki"],
    correctIndex: 1,
    exp: "A 'mert' okhatározói kötőszó, az okot jelöli meg."
  },
  {
    q: "Melyik kötőszó fejez ki engedményt?",
    options: ["bár", "mert", "hogy", "tehát"],
    correctIndex: 0,
    exp: "Az 'bár' engedményes viszonyt jelöl: 'Bár esik, elmegyünk.'"
  },
  {
    q: "Melyik mondatban van mellérendelő kötőszó?",
    options: [
      "Szeretem a kávét, de a teát is.",
      "Azért ment el, mert fáradt volt.",
      "Ha esik, maradunk otthon.",
      "Olyan fáradt volt, hogy elaludt."
    ],
    correctIndex: 0,
    exp: "A 'de' mellérendelő kötőszó, ellentétes viszonyt fejez ki."
  },
  {
    q: "Melyik kötőszó fejez ki következtetést?",
    options: ["tehát", "ha", "de", "mert"],
    correctIndex: 0,
    exp: "A 'tehát' következtető kötőszó, logikai kapcsolatot fejez ki."
  },
  {
    q: "Melyik mondat tartalmaz névmási visszautalást?",
    options: [
      "Mari szereti a csokit. Ez a kedvenc édessége.",
      "Mari szereti a csokit. Pista is szereti.",
      "Mari szereti a csokit. Csoki finom.",
      "Mari szereti a csokit. Nagyon szereti csoki."
    ],
    correctIndex: 0,
    exp: "Az 'Ez' mutató névmás visszautal a korábbi mondat tartalmára."
  },
  {
    q: "Melyik mondatban van kötőszó?",
    options: [
      "Szeretem a kávét, de a teát nem.",
      "A fiú fut.",
      "Ma reggel elaludt.",
      "A könyv a polcon van."
    ],
    correctIndex: 0,
    exp: "A 'de' kötőszó grammatikai kapcsolatot hoz létre a két tagmondat között."
  },
  {
    q: "Melyik kötőszó fejez ki következményt?",
    options: ["ezért", "mert", "ha", "bár"],
    correctIndex: 0,
    exp: "Az 'ezért' következményes kötőszó, a logikai viszony eredményét mutatja."
  },
  {
    q: "Melyik kötőszó fejez ki okot?",
    options: ["mivel", "de", "vagy", "bár"],
    correctIndex: 0,
    exp: "A 'mivel' okhatározói kötőszó, az okot jelöli meg a második tagmondatban."
  }
];

// SECTION az altémához
export const section_szovegkohezio_grammatikai = {
  id: "szovegkohezio_grammatikai",
  title: "Szövegkohézió II. – Grammatikai kapcsolóelemek (névmások, kötőszók, egyeztetés)",
  bank: bank_szovegkohezio_grammatikai,
};
// 🟩 3. ALTÉMA – Jelentésbeli kapcsolatok (rokonság, ellentét, ok–okozat, következtetés)
export const bank_szovegkohezio_jelentesbeli: Question[] = [
  {
    q: "Mit nevezünk jelentésbeli kapcsolatnak a szövegben?",
    options: [
      "Szavak és mondatok közti logikai–jelentésbeli viszonyokat",
      "A helyesírás szabályait",
      "A bekezdések hosszát",
      "A mondatok dallamát"
    ],
    correctIndex: 0,
    exp: "Jelentésbeli kapcsolat = szinonímia, ellentét, ok–okozat, következtetés, példázás stb."
  },
  {
    q: "Melyik szópár SZINONIMA (rokon értelmű)?",
    options: ["gyors – sebes", "gyors – lassú", "gyors – rövid", "gyors – halk"],
    correctIndex: 0,
    exp: "A 'gyors' és 'sebes' hasonló jelentésű szavak."
  },
  {
    q: "Melyik szópár ELLENTÉTES jelentésű?",
    options: ["magas – alacsony", "magas – emeletes", "magas – nagy", "magas – óriási"],
    correctIndex: 0,
    exp: "'magas' ↔ 'alacsony' tipikus antonimák."
  },
  {
    q: "Melyik mutat OK–OKOZATI viszonyt?",
    options: [
      "Sokat tanult, ezért ötöst kapott.",
      "Sokat tanult, de elfáradt.",
      "Sokat tanult, mégis izgult.",
      "Sokat tanult, tehát hosszú volt a nap."
    ],
    correctIndex: 0,
    exp: "Az 'ezért' következményt jelöl a megadott okhoz képest."
  },
  {
    q: "Melyik kötőszó jelöl ELLENTÉTET?",
    options: ["azonban", "mert", "ezért", "tehát"],
    correctIndex: 0,
    exp: "Ellentétes kötőszók: 'de', 'azonban', 'viszont'."
  },
  {
    q: "Melyik kötőszó jelöl KÖVETKEZTETÉST?",
    options: ["tehát", "bár", "ha", "mert"],
    correctIndex: 0,
    exp: "'tehát' → következtetés (konklúzió)."
  },
  {
    q: "Melyik mondatpár erősen összefügg jelentésben?",
    options: [
      "Esik az eső. Vizes az út.",
      "Esik az eső. Finom a leves.",
      "Esik az eső. A Hold kerek.",
      "Esik az eső. Zöld az alma."
    ],
    correctIndex: 0,
    exp: "Az elsőben okozati kapcsolat feltételezhető (eső → vizes út)."
  },
  {
    q: "Mi a HIPERONIMA (fölérendelt fogalom) a 'róka' szóra?",
    options: ["ragadozó", "állat", "emlős", "kutya"],
    correctIndex: 1,
    exp: "'állat' a legáltalánosabb kategória (hiperonima)."
  },
  {
    q: "Mi a HIPONIMA (alárendelt fogalom) a 'gyümölcs' szóra?",
    options: ["élelmiszer", "alma", "növény", "étel"],
    correctIndex: 1,
    exp: "Az 'alma' a 'gyümölcs' egyik fajtája → hiponima."
  },
  {
    q: "Melyik mondat jelöl PÉLDÁZÁST?",
    options: [
      "Sok sportot szeretek, például a futást és az úszást.",
      "Sok sportot szeretek, ezért boldog vagyok.",
      "Sok sportot szeretek, mert egészséges.",
      "Sok sportot szeretek, tehát fitt vagyok."
    ],
    correctIndex: 0,
    exp: "A 'például' kulcsszó példázó kapcsolatot jelez."
  },
  {
    q: "Melyik mutat ÁLTALÁNOSÍTÁST/ÖSSZEGZÉST?",
    options: [
      "Vettem almát, körtét, szilvát, röviden: gyümölcsöt.",
      "Vettem almát, körtét, szilvát, ezért elfáradtam.",
      "Vettem almát, körtét, szilvát, de nem ettem meg.",
      "Vettem almát, körtét, szilvát, ha volt pénzem."
    ],
    correctIndex: 0,
    exp: "A 'röviden' bevezető utal a fölérendelt fogalomra (összegzés)."
  },
  {
    q: "Melyik jelöli KÖVETKEZMÉNYT?",
    options: [
      "Sokat esett, ezért árad a folyó.",
      "Sokat esett, de süt a nap.",
      "Sokat esett, mert hideg volt.",
      "Sokat esett, bár meleg volt."
    ],
    correctIndex: 0,
    exp: "Az 'ezért' következményt vezet be."
  },
  {
    q: "Melyik KOHÉZIÓS eljárás NEM jelentésbeli?",
    options: ["szinonima-használat", "ellentét", "névmási visszautalás", "hipo–hiperónimia"],
    correctIndex: 2,
    exp: "A névmási visszautalás grammatikai (nem szemantikai) kapcsolóelem."
  },
  {
    q: "Melyik MONDAT fejez ki ENGEDMÉNYT (ellentét árnyalásával)?",
    options: [
      "Bár fáradt volt, elment futni.",
      "Ha fáradt volt, elment futni.",
      "Mert fáradt volt, elment futni.",
      "Ezért fáradt volt, elment futni."
    ],
    correctIndex: 0,
    exp: "'Bár' → engedményes viszony (ellentétes elvárt következménnyel)."
  },
  {
    q: "Melyik szerkezet JELEZ OKOT?",
    options: ["azon okból, hogy…", "ennek ellenére…", "következésképp…", "mindazonáltal…"],
    correctIndex: 0,
    exp: "„azon okból, hogy …” → okot jelöl (okhatározói szerkezet)."
  },
  {
    q: "Melyik KULCSSZÓ jelez KÖVETKEZTETÉST a szövegben?",
    options: ["ennélfogva", "azonban", "holott", "noha"],
    correctIndex: 0,
    exp: "Következtetés: 'tehát', 'ennélfogva', 'következésképp'."
  },
  {
    q: "Az alábbiak közül melyik NEM ellentétes viszony?",
    options: ["de", "azonban", "viszont", "tehát"],
    correctIndex: 3,
    exp: "'tehát' következtető viszonyt jelez, nem ellentétest."
  },
  {
    q: "Melyik mondatpár mutat SZEMANTIKAI KAPCSOLATOT SZINONÍMIÁVAL?",
    options: [
      "Reggel korán keltem. Hajnalban ébredtem.",
      "Reggel korán keltem. Este aludtam el.",
      "Reggel korán keltem. A fa magas.",
      "Reggel korán keltem. Hideg a fagyi."
    ],
    correctIndex: 0,
    exp: "A 'reggel korán' és 'hajnalban' jelentésben közel állnak egymáshoz."
  },
  {
    q: "Melyik mondatpár jelöl OK–KÖVETKEZMÉNYt kifejező kötőszót?",
    options: [
      "Nem tanult, ezért megbukott.",
      "Nem tanult, mégis megbukott.",
      "Nem tanult, azonban megbukott.",
      "Nem tanult, viszont megbukott."
    ],
    correctIndex: 0,
    exp: "Az 'ezért' a következményt vezeti be."
  },
  {
    q: "Melyik NÖVELI a szemantikai kohéziót?",
    options: [
      "Kulcsszavak ismétlése, rokon értelmű váltás, ellentétpárok",
      "Hosszú mondatok használata",
      "Díszes jelzők halmozása",
      "Minél több idegen szó"
    ],
    correctIndex: 0,
    exp: "Lexikai eszközök (ismétlés, szinonímia, antonímia) erősítik az összefüggést."
  },
  {
    q: "Mi a SEJTETT KÖVETKEZTETÉS (implikatúra) szerepe?",
    options: [
      "Rejtett logikai kapcsolatot ad a mondatok közé",
      "Csak hangulati elem",
      "Helyesírási szabály",
      "Kötőszó fajtája"
    ],
    correctIndex: 0,
    exp: "A kimondatlan, de kikövetkeztethető kapcsolat is kohéziót teremt."
  }
];

// SECTION az altémához
export const section_szovegkohezio_jelentesbeli = {
  id: "szovegkohezio_jelentesbeli",
  title: "Szövegkohézió III. – Jelentésbeli kapcsolatok (rokonság, ellentét, ok–okozat, következtetés)",
  bank: bank_szovegkohezio_jelentesbeli,
};

// 🟪 4. ALTÉMA – Szövegösszefüggés és logikai viszonyok a szövegben
export const bank_szovegkohezio_logikai: Question[] = [
  {
    q: "Mit jelent a szövegösszefüggés fogalma?",
    options: [
      "A szöveg mondatai között logikai és tartalmi kapcsolat van",
      "A mondatok véletlenszerűen követik egymást",
      "A szöveg csak rímelés alapján épül fel",
      "A szövegben nincs kapcsolat a gondolatok között"
    ],
    correctIndex: 0,
    exp: "A szövegösszefüggés a gondolatok logikai és tartalmi kapcsolatát jelenti a szövegben."
  },
  {
    q: "Mi teremti meg a szöveg logikai kapcsolatát?",
    options: [
      "Kötőszók, utalószók, következtető elemek",
      "A mondatok száma",
      "A szavak hosszúsága",
      "A rímek használata"
    ],
    correctIndex: 0,
    exp: "A szöveg logikai kapcsolatát nyelvi elemek (pl. tehát, ezért, viszont) biztosítják."
  },
  {
    q: "Melyik kötőszó fejez ki OK–OKOZATI viszonyt?",
    options: ["mert", "de", "azonban", "vagy"],
    correctIndex: 0,
    exp: "A 'mert' okhatározói kötőszó, az okot jelöli meg a mondatok között."
  },
  {
    q: "Melyik kötőszó fejez ki KÖVETKEZMÉNYT?",
    options: ["ezért", "ha", "bár", "vagy"],
    correctIndex: 0,
    exp: "Az 'ezért' következményes kötőszó, logikai viszonyt jelez."
  },
  {
    q: "Melyik kötőszó fejez ki ELLENTÉTET?",
    options: ["de", "mert", "tehát", "ha"],
    correctIndex: 0,
    exp: "Az 'de' ellentétes kötőszó, ellentétes viszonyt hoz létre."
  },
  {
    q: "Melyik logikai viszony jellemzi az alábbi mondatokat? 'Sokat tanult, ezért sikeres lett.'",
    options: ["ok–okozati", "ellentétes", "feltételes", "engedményes"],
    correctIndex: 0,
    exp: "Az 'ezért' jelöli az ok–okozati kapcsolatot a két mondat között."
  },
  {
    q: "Melyik logikai viszony jellemzi? 'Bár esett, elmentünk sétálni.'",
    options: ["engedményes", "feltételes", "ellentétes", "ok–okozati"],
    correctIndex: 0,
    exp: "Az 'bár' engedményes viszonyt jelez, a várttal ellentétes eredménnyel."
  },
  {
    q: "Mi a logikai viszony szerepe a szövegben?",
    options: [
      "Összefüggő gondolatmenetet hoz létre",
      "A mondatok elválasztását szolgálja",
      "Csak a versformákban használatos",
      "A szavak szótári alakját mutatja"
    ],
    correctIndex: 0,
    exp: "A logikai viszonyok biztosítják, hogy a gondolatmenet világos és következetes legyen."
  },
  {
    q: "Melyik fejez ki FELTÉTELES viszonyt?",
    options: ["ha", "de", "mert", "tehát"],
    correctIndex: 0,
    exp: "A 'ha' feltételes kötőszó: 'Ha esik, maradunk otthon.'"
  },
  {
    q: "Mi a következtetés viszonyát kifejező szó az alábbi mondatban? 'Sokat edzett, tehát erős lett.'",
    options: ["tehát", "mert", "bár", "vagy"],
    correctIndex: 0,
    exp: "A 'tehát' következtető kötőszó, logikai kapcsolatot fejez ki a két mondat között."
  },
  {
    q: "Melyik kötőszó jelöli az ENGEDMÉNYES viszonyt?",
    options: ["bár", "mivel", "mert", "ezért"],
    correctIndex: 0,
    exp: "'Bár' → engedményes viszony, ellentétes az elvárttal."
  },
  {
    q: "Melyik kapcsolatot fejezi ki a 'mivel' kötőszó?",
    options: ["okot", "ellentétet", "feltételt", "következtetést"],
    correctIndex: 0,
    exp: "A 'mivel' okhatározói kötőszó, okot fejez ki."
  },
  {
    q: "Melyik logikai viszony jellemzi a mondatot? 'Sokat tanult, de nem sikerült a vizsgája.'",
    options: ["ellentétes", "ok–okozati", "engedményes", "feltételes"],
    correctIndex: 0,
    exp: "A 'de' ellentétes viszonyt teremt a mondatok között."
  },
  {
    q: "Melyik logikai viszony fejezi ki a következő kapcsolatot: 'Nem tanult, tehát megbukott.'?",
    options: ["következtető", "ellentétes", "feltételes", "engedményes"],
    correctIndex: 0,
    exp: "'tehát' → következtető viszony."
  },
  {
    q: "Melyik mondat tartalmaz OK–OKOZATI viszonyt?",
    options: [
      "Elaludt, mert fáradt volt.",
      "Elaludt, de fáradt volt.",
      "Elaludt, ha fáradt volt.",
      "Elaludt, bár fáradt volt."
    ],
    correctIndex: 0,
    exp: "A 'mert' okhatározói kötőszó → ok–okozati kapcsolat."
  },
  {
    q: "Melyik mondatban VAN FELTÉTELES kapcsolat?",
    options: [
      "Ha tanulsz, sikerül a vizsgád.",
      "Tanulsz, ezért sikerül.",
      "Tanulsz, tehát sikerül.",
      "Tanulsz, de nem sikerül."
    ],
    correctIndex: 0,
    exp: "A 'ha' feltételes viszonyt hoz létre."
  },
  {
    q: "Mi jellemzi a KÖVETKEZTETŐ viszonyt?",
    options: [
      "Az első mondatból logikailag levezethető a második",
      "Az első mondat ellentétes a másodikkal",
      "A mondatok egymástól függetlenek",
      "A mondatok ismétlődnek"
    ],
    correctIndex: 0,
    exp: "A következtető viszony logikai kapcsolatot mutat: az egyikből következik a másik."
  },
  {
    q: "Melyik fejez ki LOGIKAI KAPCSOLATOT?",
    options: ["Ezért, tehát, mivel, bár", "Alma, körte, banán", "Szép, jó, igaz", "Ház, kert, ajtó"],
    correctIndex: 0,
    exp: "A 'ezért', 'tehát', 'mivel', 'bár' tipikus logikai kötőelemek."
  },
  {
    q: "Melyik mondatban VAN ENGEDMÉNYES viszony?",
    options: [
      "Bár beteg volt, iskolába ment.",
      "Beteg volt, ezért otthon maradt.",
      "Beteg volt, ha iskolába ment.",
      "Beteg volt, mert hideg volt."
    ],
    correctIndex: 0,
    exp: "A 'bár' engedményes viszonyt jelez (ellentétes az elvárttal)."
  },
  {
    q: "Miért fontos a logikai viszony felismerése a szövegben?",
    options: [
      "Segíti a megértést és a gondolatmenet követését",
      "Színesebbé teszi a szöveget",
      "Szebb lesz tőle a helyesírás",
      "Csak a versekben van szerepe"
    ],
    correctIndex: 0,
    exp: "A logikai kapcsolatok segítik az olvasót a szöveg értelmezésében és követésében."
  }
];

// SECTION az altémához
export const section_szovegkohezio_logikai = {
  id: "szovegkohezio_logikai",
  title: "Szövegkohézió IV. – Szövegösszefüggés és logikai viszonyok a szövegben",
  bank: bank_szovegkohezio_logikai,
};

  
// 🟦 1. ALTÉMA – A szójelentés és többjelentésű szavak
export const bank_jelentestan_szavak: Question[] = [
  {
    q: "Mit nevezünk szójelentésnek?",
    options: [
      "A szó és a valóság közötti kapcsolatot, amit a szó kifejez",
      "A szó hangalakját",
      "A szó betűinek számát",
      "A szó eredetét"
    ],
    correctIndex: 0,
    exp: "A szójelentés az, amit a szó a valóságban jelöl (fogalom, tárgy, cselekvés, tulajdonság stb.)."
  },
  {
    q: "Melyik szó TÖBBJELENTÉSŰ?",
    options: ["kar", "asztal", "kutya", "alma"],
    correctIndex: 0,
    exp: "A 'kar' jelenthet testrészt, növényi ágat, vagy szervezeti egységet (pl. egyetemi kar)."
  },
  {
    q: "Mi a többjelentésű szó jellemzője?",
    options: [
      "Egy alakhoz több, egymással összefüggő jelentés tartozik",
      "Több alakhoz ugyanaz a jelentés",
      "Két külön szó, hasonló hangalakban",
      "Csak idegen nyelvű szavaknál fordul elő"
    ],
    correctIndex: 0,
    exp: "A többjelentésű szavak jelentései között logikai kapcsolat van (pl. 'fej' – emberi fej, káposztafej, hegycsúcs)."
  },
  {
    q: "Melyik szó NEM többjelentésű?",
    options: ["asztal", "kar", "fej", "csillag"],
    correctIndex: 0,
    exp: "Az 'asztal' csak egy jelentéssel bír, ezért nem többjelentésű."
  },
  {
    q: "Melyik példában van többjelentésű szó?",
    options: [
      "A hajó kikötött a parton.",
      "A ló megállt a karámnál.",
      "A fa lombja lehullott.",
      "A kar befordult a sarkon."
    ],
    correctIndex: 3,
    exp: "A 'kar' itt testrészt és útszakaszt is jelenthet — többjelentésű szó."
  },
  {
    q: "Mi a többjelentésű szó ellentéte?",
    options: ["egyjelentésű szó", "szinonima", "homonima", "idegen szó"],
    correctIndex: 0,
    exp: "Az egyjelentésű szónak csak egyetlen jelentése van (pl. 'asztal')."
  },
  {
    q: "Melyik szó használható átvitt értelemben?",
    options: [
      "hegy lába",
      "hegy csúcsa",
      "hegy oldala",
      "hegy teteje"
    ],
    correctIndex: 0,
    exp: "A 'hegy lába' átvitt értelmű kifejezés: a 'láb' nem testrész, hanem a hegy alja."
  },
  {
    q: "Mi az átvitt jelentés?",
    options: [
      "Amikor a szó jelentése valamilyen hasonlóság alapján más dologra utal",
      "Amikor a szó idegen nyelvből származik",
      "Amikor a szó jelentése elavul",
      "Amikor a szó új alakot kap"
    ],
    correctIndex: 0,
    exp: "Az átvitt jelentés képi, hasonlóságon alapuló jelentésbővülés (pl. 'hegy lába')."
  },
  {
    q: "Melyik szó NEM többjelentésű?",
    options: ["asztal", "kar", "fej", "kulcs"],
    correctIndex: 0,
    exp: "Az 'asztal' csak egyetlen dolgot jelöl — tárgyat."
  },
  {
    q: "Miért többjelentésű a 'kulcs' szó?",
    options: [
      "Jelenthet zárnyitó eszközt és zenei jelölést is",
      "Mert hosszú szó",
      "Mert több hangból áll",
      "Mert idegen eredetű"
    ],
    correctIndex: 0,
    exp: "A 'kulcs' szó jelentései között logikai kapcsolat van (zár – megoldás – zenei kulcs)."
  },
  {
    q: "Melyik szó többjelentésű az alábbiak közül?",
    options: ["szem", "asztal", "ház", "fa"],
    correctIndex: 0,
    exp: "'Szem': testrész, tűfok, burgonyaszem – több jelentés, logikai kapcsolatban."
  },
  {
    q: "Mit jelent, hogy egy szó 'átvitt értelmű'?",
    options: [
      "Képszerűen, nem szó szerinti értelemben használjuk",
      "Külföldi eredetű",
      "Elavult szó",
      "Tudományos szakkifejezés"
    ],
    correctIndex: 0,
    exp: "Pl. 'Arany szíve van.' → átvitt értelmű, jóságot jelent."
  },
  {
    q: "Melyik szókapcsolatban van átvitt jelentés?",
    options: [
      "kőszívű ember",
      "piros alma",
      "nagy ház",
      "kék ég"
    ],
    correctIndex: 0,
    exp: "A 'kőszívű ember' nem szó szerinti, hanem jellembeli jelentést hordoz."
  },
  {
    q: "Melyik szó példáz TÖBBJELENTÉSŰSÉGET?",
    options: [
      "fej (ember testrésze, hegycsúcs, káposztafej)",
      "asztal",
      "iskola",
      "óra (mindig ugyanazt jelenti)"
    ],
    correctIndex: 0,
    exp: "A 'fej' több különböző, de összefüggő jelentéssel bír."
  },
  {
    q: "Melyik szópár példáz átvitt jelentést?",
    options: ["éles elme", "nagy ház", "zöld fű", "hideg víz"],
    correctIndex: 0,
    exp: "'Éles elme' → nem szó szerinti, hanem gyors gondolkodást jelent."
  },
  {
    q: "Melyik szó NEM többjelentésű?",
    options: ["asztal", "fej", "kulcs", "kar"],
    correctIndex: 0,
    exp: "'Asztal' csak egy dolgot jelöl → egyjelentésű szó."
  },
  {
    q: "Melyik szópár példáz átvitt jelentést?",
    options: ["arany szív", "piros alma", "nagy ház", "hideg víz"],
    correctIndex: 0,
    exp: "Az 'arany szív' → nem szó szerinti, jóságos emberre utal."
  },
  {
    q: "Mi jellemzi az ÁTVITT ÉRTELEM használatát?",
    options: [
      "A hasonlóság vagy kapcsolat alapján új jelentés jön létre",
      "A szó eredeti alakja megváltozik",
      "A szó elveszti a jelentését",
      "Csak versekben használható"
    ],
    correctIndex: 0,
    exp: "Az átvitt értelem képi, metaforikus jelentésbővülés."
  },
  {
    q: "Miért mondjuk, hogy a 'fej' szó többjelentésű?",
    options: [
      "Mert több, egymással összefüggő fogalmat jelöl",
      "Mert különböző nyelvekben is használják",
      "Mert idegen szó",
      "Mert több betűből áll"
    ],
    correctIndex: 0,
    exp: "A 'fej' többjelentésű: testrész, hegytető, káposztafej stb."
  },
  {
    q: "Miért hasznos a többjelentésű szavak ismerete?",
    options: [
      "Segíti a szöveg pontosabb megértését és gazdagítja a nyelvhasználatot",
      "Mert könnyebbé teszi a helyesírást",
      "Mert rövidíti a mondatokat",
      "Mert segít verset írni"
    ],
    correctIndex: 0,
    exp: "A többjelentésű szavak árnyaltabb kifejezést és pontosabb értelmezést tesznek lehetővé."
  }
];

// SECTION az altémához
export const section_jelentestan_szavak = {
  id: "jelentestan_szavak",
  title: "Jelentéstan I. – A szójelentés és többjelentésű szavak",
  bank: bank_jelentestan_szavak,
};
// 🟩 2. ALTÉMA – Rokon értelmű és ellentétes jelentésű szavak
export const bank_jelentestan_szinonima_antonima: Question[] = [
  {
    q: "Mit nevezünk rokon értelmű szavaknak?",
    options: [
      "Olyan szavakat, amelyek jelentése hasonló vagy azonos",
      "Olyan szavakat, amelyek egymás ellentétei",
      "Az idegen eredetű szavakat",
      "A többjelentésű szavakat"
    ],
    correctIndex: 0,
    exp: "A rokon értelmű (szinonima) szavak azonos vagy hasonló jelentést fejeznek ki, pl. gyors – sebes."
  },
  {
    q: "Mi az ellentétes jelentésű szavak elnevezése?",
    options: ["antonimák", "szinonimák", "homonimák", "hiperonimák"],
    correctIndex: 0,
    exp: "Az ellentétes jelentésű szavak neve: antonimák (pl. meleg – hideg)."
  },
  {
    q: "Melyik szópár SZINONIMA?",
    options: ["okos – eszes", "okos – buta", "okos – lusta", "okos – gyenge"],
    correctIndex: 0,
    exp: "Az 'okos' és 'eszes' hasonló jelentésű szavak."
  },
  {
    q: "Melyik szópár ellentétes jelentésű?",
    options: ["nagy – kicsi", "nagy – hatalmas", "nagy – óriási", "nagy – jelentős"],
    correctIndex: 0,
    exp: "A 'nagy' és 'kicsi' ellentétes jelentésű szavak."
  },
  {
    q: "Melyik szó NEM rokon értelmű a 'szép' szóval?",
    options: ["gyönyörű", "helyes", "csúnya", "bájos"],
    correctIndex: 2,
    exp: "A 'csúnya' ellentétes jelentésű, nem rokon értelmű szó."
  },
  {
    q: "Melyik szó ellentétes jelentésű a 'magas' szóval?",
    options: ["alacsony", "mély", "sötét", "hosszú"],
    correctIndex: 0,
    exp: "A 'magas' ellentéte: 'alacsony'."
  },
  {
    q: "Melyik szópár rokon értelmű?",
    options: ["gyors – sebes", "gyors – lassú", "gyors – alacsony", "gyors – nehéz"],
    correctIndex: 0,
    exp: "A 'gyors' és 'sebes' jelentése hasonló → rokon értelműek."
  },
  {
    q: "Mi a 'vidám' szó ellentéte?",
    options: ["szomorú", "boldog", "mosolygós", "kedves"],
    correctIndex: 0,
    exp: "A 'vidám' ellentéte: 'szomorú'."
  },
  {
    q: "Mi a 'kemény' szó ellentéte?",
    options: ["puha", "nehez", "törékeny", "hűvös"],
    correctIndex: 0,
    exp: "A 'kemény' ellentéte: 'puha'."
  },
  {
    q: "Melyik szópár rokon értelmű?",
    options: ["beszél – társalog", "beszél – hallgat", "beszél – mond", "beszél – ír"],
    correctIndex: 0,
    exp: "'Beszél' és 'társalog' hasonló jelentésű → szinonimák."
  },
  {
    q: "Miért használunk rokon értelmű szavakat?",
    options: [
      "Hogy változatosabb legyen a nyelvhasználat",
      "Hogy hosszabb legyen a mondat",
      "Hogy ne értsék a szöveget",
      "Hogy idegennek tűnjön a beszéd"
    ],
    correctIndex: 0,
    exp: "A szinonimák gazdagítják és árnyalják a kifejezést."
  },
  {
    q: "Mi a 'nevet' szó rokon értelmű párja?",
    options: ["mosolyog", "sír", "kiabál", "hallgat"],
    correctIndex: 0,
    exp: "'Nevet' és 'mosolyog' hasonló jelentésűek."
  },
  {
    q: "Mi a 'hideg' szó ellentéte?",
    options: ["meleg", "jeges", "fagyos", "hűvös"],
    correctIndex: 0,
    exp: "'Hideg' ↔ 'meleg' ellentétes jelentésű szavak."
  },
  {
    q: "Melyik szópár rokon értelmű?",
    options: ["szép – bájos", "szép – csúnya", "szép – nagy", "szép – hosszú"],
    correctIndex: 0,
    exp: "'Szép' és 'bájos' hasonló jelentésűek → szinonimák."
  },
  {
    q: "Mi a 'jó' szó ellentéte?",
    options: ["rossz", "kedves", "helyes", "ügyes"],
    correctIndex: 0,
    exp: "'Jó' ↔ 'rossz' az alapvető antonimapár."
  },
  {
    q: "Melyik szópár ellentétes jelentésű?",
    options: ["nappal – éjjel", "reggel – hajnal", "nappal – délután", "reggel – délelőtt"],
    correctIndex: 0,
    exp: "'Nappal' és 'éjjel' ellentétes időszakokat jelöl."
  },
  {
    q: "Mi a 'gyors' szó ellentéte?",
    options: ["lassú", "rövid", "magas", "mély"],
    correctIndex: 0,
    exp: "'Gyors' ↔ 'lassú'."
  },
  {
    q: "Melyik szópár rokon értelmű?",
    options: ["bátor – merész", "bátor – gyáva", "bátor – félős", "bátor – ügyetlen"],
    correctIndex: 0,
    exp: "'Bátor' és 'merész' rokon értelmű szavak."
  },
  {
    q: "Mi a 'sötét' szó ellentéte?",
    options: ["világos", "fekete", "komor", "árnyékos"],
    correctIndex: 0,
    exp: "'Sötét' ↔ 'világos' – alapvető ellentétpár."
  },
  {
    q: "Melyik szó NEM rokon értelmű a 'gyermek' szóval?",
    options: ["fiú", "gyerek", "lány", "öreg"],
    correctIndex: 3,
    exp: "'Öreg' ellentétes korcsoportot jelöl, ezért nem szinonima."
  }
];

// SECTION az altémához
export const section_jelentestan_szinonima_antonima = {
  id: "jelentestan_szinonima_antonima",
  title: "Jelentéstan II. – Rokon értelmű és ellentétes jelentésű szavak",
  bank: bank_jelentestan_szinonima_antonima,
};
// 🟨 3. ALTÉMA – Azonos alakú (homonim) és hangutánzó szavak
export const bank_jelentestan_homonim_hangutanzo: Question[] = [
  {
    q: "Mit nevezünk azonos alakú (homonim) szónak?",
    options: [
      "Ugyanaz az alak, de egymástól független jelentések",
      "Hasonló alak és hasonló jelentés",
      "Ugyanaz az alak, összefüggő jelentések (többjelentés)",
      "Idegen eredetű szavak"
    ],
    correctIndex: 0,
    exp: "Homonima: azonos hang-íráskép, de különböző, nem összefüggő jelentések (pl. vár – főnév/ige)."
  },
  {
    q: "Melyik homonima?",
    options: ["vár (erőd) – vár (ige)", "fej (testrész) – fej (káposzta)","sebes – gyors","szép – gyönyörű"],
    correctIndex: 0,
    exp: "A 'vár' főnév és ige teljesen külön jelentés; nem többjelentés, hanem homonima."
  },
  {
    q: "Melyik NEM homonima?",
    options: ["ír (cselekvés) – ír (népnév)", "kar (testrész) – kar (egyetemi egység)", "kulcs (zár) – kulcs (zenei)", "asztal – asztal (mindig tárgy)"],
    correctIndex: 3,
    exp: "Az 'asztal' egyjelentésű; a többiekben azonos alak, eltérő jelentések."
  },
  {
    q: "Mi különbözteti meg a homonimiát a többjelentéstől?",
    options: [
      "A homonim jelentések közt nincs szemantikai kapcsolat",
      "A homonim mindig idegen szó",
      "A többjelentésnél nincs közös alak",
      "A többjelentés csak hangutánzó szavaknál fordul elő"
    ],
    correctIndex: 0,
    exp: "Többjelentés: összefüggő jelentésmező; homonima: független jelentések."
  },
  {
    q: "Melyik szó HANGUTÁNZÓ?",
    options: ["csobban", "fut", "néz", "olvas"],
    correctIndex: 0,
    exp: "'Csobban' a hangot utánozza → hangutánzó (onomatopoetikus)."
  },
  {
    q: "Melyik NEM hangutánzó?",
    options: ["cincog", "dübörög", "robban", "tanul"],
    correctIndex: 3,
    exp: "A 'tanul' nem hangot utánoz."
  },
  {
    q: "Melyik PÁR mutat homonímiát?",
    options: ["kasza – kaszál", "ég (tűz) – ég (boltív) – ég (ige)", "szép – gyönyörű", "kopog – dörömböl"],
    correctIndex: 1,
    exp: "Az 'ég' azonos alak több, egymástól független jelentéssel → homonima."
  },
  {
    q: "Mi a 'kattog' szó típusa?",
    options: ["hangutánzó ige", "homonima", "összetett szó", "idegen eredetű"],
    correctIndex: 0,
    exp: "A 'kattog' hangot imitál → hangutánzó."
  },
  {
    q: "Melyik NEM homonima, hanem többjelentés?",
    options: ["fej (testrész/hegycsúcs/káposzta)", "kar (testrész/egyetemi kar)", "ír (cselekvés/népnév)", "pad (ülőbútor/iskolapad)"],
    correctIndex: 2,
    exp: "Az 'ír' esetében a jelentések függetlenek → homonima; a többiekben van jelentéskapcsolat → többjelentés."
  },
  {
    q: "Válaszd a hangutánzó szót!",
    options: ["csattog", "épít", "rak", "számol"],
    correctIndex: 0,
    exp: "'Csattog' → hang megszólaltatása a szóban."
  },
  {
    q: "Melyik homonima: 'szár'?",
    options: [
      "növény része – ruha része (ruhaujja szára)",
      "növény része – szél",
      "csillag – bolygó",
      "könyv – füzet"
    ],
    correctIndex: 0,
    exp: "Az 'ujj szára' kifejezésben a 'szár' más fogalomkörbe tartozik, független az eredetitől."
  },
  {
    q: "Melyik NEM hangutánzó?",
    options: ["bömböl", "sziszeg", "pislant", "surrog"],
    correctIndex: 2,
    exp: "'Pislant' mozgást ír le, nem hangot."
  },
  {
    q: "A 'huhog' szó…",
    options: ["hangutánzó", "homonima", "többjelentésű", "összetett szó"],
    correctIndex: 0,
    exp: "'Huhog' → bagoly hangját utánzó ige."
  },
  {
    q: "Melyik homonima: 'tárgyas ragozás' 'tárgyalás' kapcsán?",
    options: [
      "tárgy – tárgyal (különböző szócsaládok, alakilag eltérők)",
      "tárgy – tárgy (nyelvtani/konkrét dolog)",
      "tárgy – cél",
      "tárgy – tantárgy"
    ],
    correctIndex: 1,
    exp: "A 'tárgy' azonos alak, eltérő, független jelentésekben is használatos (nyelvtani/konkrét)."
  },
  {
    q: "Melyik hangutánzó?",
    options: ["zümmög", "ír", "tanít", "fénylik"],
    correctIndex: 0,
    exp: "'Zümmög' → zümmögő hangot utánoz."
  },
  {
    q: "Hogyan segíti a hangutánzás a szöveg kifejezőerejét?",
    options: [
      "Élettelibbé, érzékletesebbé teszi a leírást",
      "Rövidíti a mondatokat",
      "Helyettesíti a mellékneveket",
      "Csak a versben használható"
    ],
    correctIndex: 0,
    exp: "Az onomatopoetikus szavak akusztikus élményt közvetítenek."
  },
  {
    q: "Melyik NEM homonima?",
    options: ["szék (bútor) – szék (testi pozíció)", "bor (ital) – bor (ige: borul rövidülése)", "sár (föld) – sár (szín)", "ár (érték) – ár (áram)"],
    correctIndex: 1,
    exp: "A 'bor' igealak nem azonos íráskép (bor/borul), így nem tiszta homonima."
  },
  {
    q: "Válaszd ki a HANGUTÁNZÓ igét!",
    options: ["dörög", "forog", "ugrik", "áll"],
    correctIndex: 0,
    exp: "'Dörög' → mennydörgés hangját utánozza."
  },
  {
    q: "A 'csilingel' szó…",
    options: ["hangutánzó", "homonima", "összetett", "idegen"],
    correctIndex: 0,
    exp: "Csengő hangját utánzó ige."
  },
  {
    q: "A 'pattan' szó…",
    options: ["hangulatfestő/hangutánzó hatású", "homonima", "szinonima", "többjelentés"],
    correctIndex: 0,
    exp: "A pattanás hangjára utal; gyakran hangulatfestő is."
  }
];

// SECTION az altémához
export const section_jelentestan_homonim_hangutanzo = {
  id: "jelentestan_homonim_hangutanzo",
  title: "Jelentéstan III. – Azonos alakú és hangutánzó szavak",
  bank: bank_jelentestan_homonim_hangutanzo,
};
// 🟪 4. ALTÉMA – Állandósult szókapcsolatok (szólások, közmondások)
export const bank_jelentestan_szolasok_kozmondasok: Question[] = [
  {
    q: "Mit nevezünk állandósult szókapcsolatnak?",
    options: [
      "Rögzült, nem szó szerint értendő kifejezést",
      "Bármelyik melléknév + főnév kapcsolódását",
      "Újonnan alkotott szókapcsolatot",
      "Mindig szó szerint értendő kifejezést"
    ],
    correctIndex: 0,
    exp: "Az állandósult szókapcsolatok (frazeologizmusok) rögzült, gyakran képes beszédű kifejezések."
  },
  {
    q: "Melyik SZÓLÁS (képes jelentésű, helyzethez kötött)?",
    options: ["Falra hányt borsó.", "Ki korán kel, aranyat lel.", "Sok lúd disznót győz.", "Jobb félni, mint megijedni."],
    correctIndex: 0,
    exp: "A „falra hányt borsó” helyzethez kötött, képes beszédű szólás; a többi általános érvényű közmondás."
  },
  {
    q: "Melyik KÖZMONDÁS?",
    options: ["Húzza a lóbőrt.", "Megáll, mint a cövek.", "Addig nyújtózkodj, ameddig a takaród ér.", "Elvitte a cica."],
    correctIndex: 2,
    exp: "Általános érvényű életbölcsességet megfogalmazó mondat → közmondás."
  },
  {
    q: "Mit jelent: „Kétbalkezes”?",
    options: ["Ügyetlen", "Kapzsi", "Ravasz", "Bátor"],
    correctIndex: 0,
    exp: "A szólás képletesen ügyetlenséget fejez ki."
  },
  {
    q: "Mit jelent: „Megégette magát” (átvitt értelem)?",
    options: ["Rossz tapasztalat érte", "Tűzbe nyúlt", "Lebarnult", "Megfázott"],
    correctIndex: 0,
    exp: "Képletes kudarc/veszteség, kellemetlen tapasztalat."
  },
  {
    q: "Mit fejez ki: „Sokat akar a szarka, de nem bírja a farka”?",
    options: ["Többet akar valaki, mint amennyit elbír", "Ravaszságot", "Bátorságot", "Segítőkészséget"],
    correctIndex: 0,
    exp: "Intő közmondás: mértéktelenség, túlzott vállalás."
  },
  {
    q: "Melyik szólás jelent KÖNNYŰ SIKERT?",
    options: ["Könnyen jött, könnyen ment.", "Aranyat ér.", "Mennyei manna.", "Zöld utat kap."],
    correctIndex: 3,
    exp: "A „zöld utat kap” akadálytalan előrehaladást/sikeres engedélyt jelent."
  },
  {
    q: "Az „aranyat ér” mit jelent?",
    options: ["Nagyon értékes", "Aranyból van", "Drága", "Túl nehéz"],
    correctIndex: 0,
    exp: "Értékességet fejez ki – nem szó szerint."
  },
  {
    q: "Mit jelent: „Éles eszű”?",
    options: ["Okos", "Haragos", "Gazdag", "Félelmetes"],
    correctIndex: 0,
    exp: "Képletes jelzős szerkezet: gyors, jó felfogású."
  },
  {
    q: "Melyik közmondás fejez ki KÖVETKEZMÉNYT?",
    options: ["Ki mint vet, úgy arat.", "Ki korán kel, aranyat lel.", "Lassan járj, tovább érsz.", "Nincs rózsa tövis nélkül."],
    correctIndex: 0,
    exp: "Ok–következmény reláció: a cselekedet eredményéhez kötődik."
  },
  {
    q: "Mit jelent: „Elgurult a gyógyszere”?",
    options: ["Kiszámíthatatlanul viselkedik", "Meggyógyult", "Gyógyszert vett", "Orvoshoz ment"],
    correctIndex: 0,
    exp: "Tréfás, képletes szólás: furcsán/indokolatlanul viselkedik."
  },
  {
    q: "Mit jelent: „Két tűz között van”?",
    options: ["Két ellentétes nyomás alatt áll", "Tűzoltó", "Kandalló mellett ül", "Két gyertya ég mellette"],
    correctIndex: 0,
    exp: "Képletes: két oldalról támadják/nyomás alatt áll."
  },
  {
    q: "Melyik SZÓLÁS a dühre?",
    options: ["Füstöl az orra.", "Sok bába közt elvész a gyerek.", "Jobb ma egy veréb, mint holnap egy túzok.", "Ki nem dolgozik, ne is egyék."],
    correctIndex: 0,
    exp: "A „füstöl az orra” dühöt/haragot jelez – képes beszéd."
  },
  {
    q: "Mi a jelentése: „Sűrű fillér jobb, mint a ritka forint.”?",
    options: ["A kisebb, de gyakori bevétel hasznosabb", "Mindig nagy pénz kell", "A forint értéktelen", "A spórolás felesleges"],
    correctIndex: 0,
    exp: "Közmondás gazdálkodási tapasztalatról – gyakoriság vs. nagyság."
  },
  {
    q: "Mit jelent: „Fején találta a szöget”?",
    options: ["Pontosan rátapintott a lényegre", "Megütötte a kezét", "Asztalos", "Elhibázta"],
    correctIndex: 0,
    exp: "Képletesen: telitalálat a probléma lényegére."
  },
  {
    q: "Melyik közmondás int TÜRELEMRE?",
    options: ["Lassan járj, tovább érsz.", "Kutyaharapást szőrével.", "Ajándék lónak ne nézd a fogát.", "A cél szentesíti az eszközt."],
    correctIndex: 0,
    exp: "A mértékletesség/türelem hasznát hangsúlyozza."
  },
  {
    q: "Mit jelent: „Kakukktojás” egy felsorolásban?",
    options: ["Oda nem illő elem", "Madárfaj", "Legdrágább darab", "Leghangosabb szereplő"],
    correctIndex: 0,
    exp: "Képletes: rendszerbe nem illeszkedő elem."
  },
  {
    q: "Mit jelent: „Húzza a lóbőrt”?",
    options: ["Alszik", "Fut", "Hazudik", "Dicsekszik"],
    correctIndex: 0,
    exp: "Tréfás szólás: mélyen alszik."
  },
  {
    q: "Melyik közmondás a MUNKA ÉRTÉKÉRŐL szól?",
    options: ["Ki nem dolgozik, ne is egyék.", "Sok beszédnek sok az alja.", "Ami késik, nem múlik.", "Jobb félni, mint megijedni."],
    correctIndex: 0,
    exp: "Normatív közmondás: a munkához köti a jogosultságot."
  },
  {
    q: "Mit fejez ki: „Sok bába közt elvész a gyerek.”?",
    options: ["Ha túl sokan intéznek valamit, szétesik a felelősség", "Mindig kell sok segítő", "Az orvosok hibáznak", "A gyereknevelés könnyű"],
    correctIndex: 0,
    exp: "Túl sok beleszóló → széteső, eredménytelen ügyintézés."
  }
];

// SECTION az altémához
export const section_jelentestan_szolasok_kozmondasok = {
  id: "jelentestan_szolasok_kozmondasok",
  title: "Jelentéstan IV. – Állandósult szókapcsolatok (szólások, közmondások)",
  bank: bank_jelentestan_szolasok_kozmondasok,
};
// ─────────────────────────────────────────────
// NYELVTAN 8 — NYELVI VÁLTOZATOK ÉS NYELVHASZNÁLAT
// ─────────────────────────────────────────────

/* 1. ALTÉMA – Köznyelv, nyelvjárások, regionális köznyelv */
export const bank_nyelvvaltozat_koznyelv_nyelvjaras: Question[] = [
  { q: "Mit nevezünk köznyelvnek?", options: [
      "A magyar nyelv egységes, művelt, mindenki által érthető változata",
      "Egy tájnyelv megnevezése",
      "A szleng ellentéte, tiltott nyelvhasználat",
      "A tudományos szaknyelv"
    ], correctIndex: 0,
    exp: "A köznyelv a kommunikáció alapváltozata; területi és társadalmi csoportok felett álló norma."
  },
  { q: "Mit jelent a nyelvjárás (dialektus)?", options: [
      "Területi alapú nyelvi változat saját hang- és szóhasználattal",
      "A köznyelv hibás változata",
      "Egy rétegnyelv",
      "Kizárólag városi beszédmód"
    ], correctIndex: 0, exp: "A nyelvjárás területhez kötött; hangzóalakban, szókincsben, néha nyelvtanban tér el."
  },
  { q: "Mi a regionális köznyelv?", options: [
      "Köznyelv területi színezetű ejtéssel/szókészlettel",
      "Szleng egyik fajtája",
      "Hivatalos nyelvhasználat",
      "Tudományos nyelv"
    ], correctIndex: 0, exp: "Köznyelvi szerkezet + helyi kiejtés/szóhasználat (pl. ‘sufni’ vs. ‘fészer’)."
  },
  { q: "Melyik jellemző a nyelvjárásokra?", options: [
      "Azonos kiejtés az egész országban",
      "Jellegzetes hangváltozatok (pl. ë-zés), saját szavak",
      "Kizárólag írott formában léteznek",
      "Nincsenek nyelvtani sajátosságok"
    ], correctIndex: 1, exp: "A magyar nyelvjárások hangzó sajátosságai jól felismerhetők."
  },
  { q: "Melyik nyelvváltozat szerepe a legáltalánosabb a nyilvános kommunikációban?", options: [
      "Nyelvjárás", "Szleng", "Köznyelv", "Csoportnyelv"
    ], correctIndex: 2, exp: "A köznyelv az általános érintkezés alapja."
  },
  { q: "Mi NEM nyelvjárási jelenség?", options: [
      "Tájszavak használata", "Ë-zés", "Magázás", "Hosszú–rövid magánhangzó eltérés"
    ], correctIndex: 2, exp: "A magázás udvariassági (társas) kategória, nem területi eltérés."
  },
  { q: "Mi a tájszó?", options: [
      "Csak egy szűk szakma használja", "Területhez kötött szóalak/lexéma", "Hibás köznyelvi szó", "Idegen eredetű szó"
    ], correctIndex: 1, exp: "Tájszavak: regionális elterjedésű kifejezések (pl. pityók(a)=burgonya)."
  },
  { q: "Melyik párosítás helyes?", options: [
      "Köznyelv – regionális köznyelv: azonos", 
      "Köznyelv – nyelvjárás: eltérő kör, más funkció",
      "Nyelvjárás – szleng: ugyanaz", 
      "Köznyelv – szleng: azonos"
    ], correctIndex: 1, exp: "A köznyelv általános, a nyelvjárás területi."
  },
  { q: "Mi a ‘norma’ a köznyelvben?", options: [
      "Kényszerítő törvény", "Szokásrendszer: bevett helyénvaló formák összessége", "Helyesírási kézikönyv neve", "Csak iskolai szabály"
    ], correctIndex: 1, exp: "A norma a nyelvközösség által elfogadott használati minták rendszere."
  },
  { q: "Melyik állítás igaz a nyelvjárásokról?", options: [
      "Eltüntették a köznyelv terjedése", "Ma is élnek és értékes részei a nyelvnek", "Csak idős emberek használják", "Csak tréfás beszédre jók"
    ], correctIndex: 1, exp: "A nyelvjárások kulturális értékek, identitáshordozók."
  },
  { q: "Mi a kódváltás?", options: [
      "Két különböző nyelv keverése mindig hibásan", "Váltás nyelvváltozatok között helyzethez igazodva", "Helyesírás-váltás", "Titkos nyelv"
    ], correctIndex: 1, exp: "Pl. dialektus → köznyelv közt beszédhelyzet szerint."
  },
  { q: "Melyik NEM a köznyelv funkciója?", options: [
      "Általános érthetőség", "Hivatalos ügyintézés alapja", "Tájidentitás kifejezése", "Országos média nyelve"
    ], correctIndex: 2, exp: "A tájidentitás kifejezésére inkább a nyelvjárás alkalmas."
  },
  { q: "Mi jellemző a regionális köznyelvre?", options: [
      "Nyelvtani szerkezet eltér a köznyelvtől", "Kiejtés/szókincs enyhén regionális", "Nem érthető országosan", "Helytelen nyelvhasználat"
    ], correctIndex: 1, exp: "A szerkezet köznyelvi, a hangzás/lexika regionális árnyalatú."
  },
  { q: "Mi a ‘prestige’ a nyelvhasználatban?", options: [
      "A helyesírás mértéke", "Társadalmi megbecsültség egy nyelvváltozat mögött", "Hangos beszéd", "Idegen szavak aránya"
    ], correctIndex: 1, exp: "A köznyelv gyakran magas presztízzsel bír a hivatalos színtéren."
  },
  { q: "Melyik állítás helyes?", options: [
      "A nyelvjárás mindig helytelen", "A köznyelv és nyelvjárás egymást kizárja", "Mindkettő legitim, más funkcióban", "Csak köznyelv létezik ma"
    ], correctIndex: 2, exp: "Funkciómegosztás: mindkettő természetes."
  },
  { q: "Mi motiválhat kódváltást köznyelv és dialektus között?", options: [
      "Téma, szereplők, kommunikációs cél, hivatalosság foka", "Mindig véletlen", "Csak szokás", "Csak érzelem"
    ], correctIndex: 0, exp: "Regiszter- és helyzetfüggő igazítás."
  },
  { q: "Mi a ‘táji kiejtés’ példája?", options: [
      "Standard hosszú magánhangzó", "Ë-zés, diftongizálás", "Angol akcentus", "Suttogás"
    ], correctIndex: 1, exp: "Regionális fonetikai jelenségek."
  },
  { q: "A köznyelvi norma…", options: [
      "örök és változatlan", "változik a használattal", "csak az iskolák döntik el", "szavazással alakul"
    ], correctIndex: 1, exp: "A norma társas gyakorlatból alakul, folyamatosan."
  },
  { q: "Mi NEM a dialektus előnye?", options: [
      "Identitás", "Közösségi kohézió", "Pontosan azonos a hivatalos nyelvvel minden helyzetben", "Kulturális érték"
    ], correctIndex: 2, exp: "Hivatalos helyzetben többnyire a köznyelv előnyös."
  },
  { q: "A köznyelv és nyelvjárás viszonya…", options: [
      "hierarchia nélküli, funkcionális", "a dialektus tiltott", "a köznyelv hibás", "mindkettő tiltott"
    ], correctIndex: 0, exp: "Funkcionális megosztás: helyénvalóság függ a helyzettől."
  },
];

export const section_nyelvvaltozat_koznyelv_nyelvjaras = {
  id: "nyelvvaltozat_koznyelv_nyelvjaras",
  title: "Nyelvi változatok I. – Köznyelv, nyelvjárások, regionális köznyelv",
  bank: bank_nyelvvaltozat_koznyelv_nyelvjaras,
};


/* 2. ALTÉMA – Szleng, ifjúsági nyelv, digitális kommunikáció (netikett) */
export const bank_nyelvvaltozat_szleng_digitlis: Question[] = [
  { q: "Mi a szleng?", options: [
      "Kötött, hivatalos nyelvváltozat", "Csoportnyelv játékos, informális kifejezésekkel", "Nyelvjárás egyik fajtája", "Helyesírási szabály"
    ], correctIndex: 1, exp: "A szleng csoporthoz kötött, informális, kreatív szóhasználat."
  },
  { q: "Melyik NEM a szleng jellemzője?", options: [
      "Kreativitás", "Hivatalosság", "Csoporthoz kötöttség", "Expresszivitás"
    ], correctIndex: 1, exp: "A szleng nem hivatalos regiszter."
  },
  { q: "Mi az ifjúsági nyelv egyik mozgatója?", options: [
      "Elhatárolódás, saját csoportidentitás", "Hivatalos ügyintézés", "Tudományos publikáció", "Jogszabályalkotás"
    ], correctIndex: 0, exp: "Az identitás és a kreativitás fő hajtóerő."
  },
  { q: "Mi a netikett?", options: [
      "Az online kommunikáció illemszabályai", "Helyesírási szótár", "Számítógép márka", "Kódolási nyelv"
    ], correctIndex: 0, exp: "Udvarias, biztonságos, átlátható online viselkedési irányok."
  },
  { q: "Melyik szabály illik a netiketthez?", options: [
      "Nagybetűs írás, mert hangsúlyos", "Forrásmegjelölés, tiszteletteljes hang", "Sértegetés megengedett", "Folyamatos spamelés"
    ], correctIndex: 1, exp: "Nagybetű = kiabálás online; kerülendő."
  },
  { q: "Melyik példa sorolható szlenghez?", options: [
      "Nagyon tetszik.", "Ez király!", "Kérem a szerződést.", "Tárgyaljunk napirend szerint."
    ], correctIndex: 1, exp: "Informális, játékos minősítés."
  },
  { q: "Mi a ‘mém’ szerepe nyelvileg?", options: [
      "Jogszabály", "Kultúrkód rövid vizuális/nyelvi jeleiként működik", "Helyesírási jel", "Nyelvjárási hang"
    ], correctIndex: 1, exp: "Közös háttértudásra építő tömör üzenet."
  },
  { q: "Mi az emojik tipikus funkciója?", options: [
      "Helyettesítik a helyesírást", "Hangulat, attitűd jelölése", "Nyelvtani jel", "Mindig kötelező"
    ], correctIndex: 1, exp: "Paranyelvi, érzelmi komponens pótlása írásban."
  },
  { q: "Melyik helyzetben nem célszerű szlenget használni?", options: [
      "Állásinterjú", "Baráti chat", "Játék közben", "Csoportbeszélgetésben az osztálytársakkal"
    ], correctIndex: 0, exp: "Formális kontextusban kerülendő."
  },
  { q: "Mi az online félreértések egyik oka?", options: [
      "Hanglejtés, mimika hiánya", "Túl hosszú mondatok", "Papírminőség", "Betűtípus"
    ], correctIndex: 0, exp: "Nonverbális jelek hiánya miatt félreérthető lehet a szándék."
  },
  { q: "Mit jelent az ‘OTSZ’ típusú rövidítés világa?", options: [
      "Szabvány neve", "Internetes rövidítések (pl. brb, btw) gyorsítják a csetet", "Nyelvjárási hang", "Helyesírást javít"
    ], correctIndex: 1, exp: "Chat-gyorsítók; helyénvalóság közegtől függ."
  },
  { q: "Mi a ‘flame’ (flamewar) online?", options: [
      "Udvarias vita", "Sértő, elmérgesedő vita", "Mémgyártás", "Technikai hiba"
    ], correctIndex: 1, exp: "Netikett szerint kerülendő; lehűtés, moderáció szükséges."
  },
  { q: "Mi a ‘ghosting’ kommunikációs hatása?", options: [
      "Nyílt lezárás", "Indokolás nélküli eltűnés → bizonytalanságot kelt", "Hivatalos tájékoztatás", "Hangfelvétel küldése"
    ], correctIndex: 1, exp: "Az online kapcsolattartás egyik problémája."
  },
  { q: "Mi NEM netikett?", options: [
      "Források jelölése", "Korrekt idézés", "Adatvédelem figyelmen kívül hagyása", "Sértő kifejezések kerülése"
    ], correctIndex: 2, exp: "Adatvédelem megsértése kerülendő."
  },
  { q: "Mit tegyünk félreértés gyanúja esetén online?", options: [
      "Tovább kiabálunk CAPS-szel", "Feltételezzük a rossz szándékot", "Rákérdezünk, tisztázunk, higgadtak maradunk", "Rögtön jelentünk mindenkit"
    ], correctIndex: 2, exp: "Tiszteletteljes tisztázás segít."
  },
  { q: "A szleng…", options: [
      "állandó és változatlan", "gyorsan változik, új szavak jönnek-mennek", "csak vidéken van", "mindig trágár"
    ], correctIndex: 1, exp: "A szleng dinamikus, divatszerű."
  },
  { q: "A rövidítések (pl. ‘szia’, ‘köszi’) szerepe online?", options: [
      "Intimitás, gyorsaság", "Kötelező hivatalos szövegben", "Mindig helytelen", "Csak telefonon megengedett"
    ], correctIndex: 0, exp: "Informális közegben természetes."
  },
  { q: "Mit jelent az ‘asap’/‘azonnal pls’ típus?", options: [
      "Udvarias kérés hivatalos levélben", "Gyorsítók, de hivatalosban kerülendők", "Nyelvjárási forma", "Tudományos jelölés"
    ], correctIndex: 1, exp: "Regiszterfüggő helyénvalóság."
  },
  { q: "Miért fontos az online hangnem?", options: [
      "Mert nincs hanglejtés/mimika → könnyű félreérteni", "Mert tiltott beszélni", "Mert így rövidül a szöveg", "Nem fontos"
    ], correctIndex: 0, exp: "Hangulatjel, pontos fogalmazás segít."
  },
  { q: "Mi a ‘thread’ szerepe?", options: [
      "Szálon belüli rendezett beszélgetés → követhetőség", "Nyelvjárási jelenség", "Helyesírási szabály", "Személyes adat"
    ], correctIndex: 0, exp: "A tematizált válaszok rendezik a beszélgetést."
  },
];

export const section_nyelvvaltozat_szleng_digitalis = {
  id: "nyelvvaltozat_szleng_digitlis",
  title: "Nyelvi változatok II. – Szleng, ifjúsági nyelv, digitális kommunikáció (netikett)",
  bank: bank_nyelvvaltozat_szleng_digitlis,
};


/* 3. ALTÉMA – Regiszterek: hivatalos, tudományos, publicisztikai; beszélt vs. írott */
export const bank_nyelvvaltozat_regiszterek: Question[] = [
  { q: "Mi a ‘regiszter’ a nyelvben?", options: [
      "A beszélő zenei hangja", "Helyzettől függő nyelvhasználati mód", "Nyelvjárás új neve", "Helyesírás"
    ], correctIndex: 1, exp: "A kommunikációs helyzethez igazított nyelvváltozat (stílusréteg)."
  },
  { q: "Melyik a HIVATALOS regiszter jellemzője?", options: [
      "Szlengek bő használata", "Pontosság, udvariassági formulák, tárgyszerűség", "Rímes mondatok", "Dialektus kötelező"
    ], correctIndex: 1, exp: "Formális, udvarias, precíz megfogalmazás."
  },
  { q: "A tudományos stílus…", options: [
      "érzelmi, díszítő", "tárgyszerű, definíciós, hivatkozó", "személyeskedő", "szlenggel teli"
    ], correctIndex: 1, exp: "Definíciók, bizonyítások, hivatkozások jellemzik."
  },
  { q: "A publicisztikai stílus célja:", options: [
      "Szórakoztatás és tájékoztatás, véleményformálás", "Szigorú jogi szabályozás", "Laboratóriumi eljárások", "Hétköznapi chat"
    ], correctIndex: 0, exp: "Közéleti, sajtónyelvi kommunikáció."
  },
  { q: "Mi különbözteti meg a beszélt és írott regisztert leginkább?", options: [
      "A betűk alakja", "A nonverbális jelek/azonnali visszacsatolás jelenléte vs. hiánya", "A nyelvtan más", "A szókincs mindig azonos"
    ], correctIndex: 1, exp: "Beszédben mimika, hanglejtés segít; írásban ezek hiányoznak."
  },
  { q: "Melyik illik hivatalos levélbe?", options: [
      "Szia!", "Tisztelt Cím!", "Csáó!", "Puszi!"
    ], correctIndex: 1, exp: "Formális megszólítás szükséges."
  },
  { q: "Hol természetes a köznyelvi, laza regiszter?", options: [
      "Államigazgatási kérelem", "Baráti üzenet", "Bírósági beadvány", "Önéletrajz"
    ], correctIndex: 1, exp: "Informális közegben természetes."
  },
  { q: "Melyik kerülendő tudományos szövegben?", options: [
      "Hivatkozás", "Szleng", "Definíció", "Fogalmi pontosság"
    ], correctIndex: 1, exp: "A szleng informális, tudományosban nem helyénvaló."
  },
  { q: "A beszéd sajátossága:", options: [
      "Azonnali reagálás, javítás", "Nincs hang", "Mindig hibátlan", "Mindig hosszabb"
    ], correctIndex: 0, exp: "Interakciós jelleg, spontán szerkesztés."
  },
  { q: "Az írás sajátossága:", options: [
      "Spontaneitás, hezitálások", "Tervezhetőség, szerkesztettség", "Csak szleng", "Mindig rövid"
    ], correctIndex: 1, exp: "Idő van szerkesztésre, korrektúrára."
  },
  { q: "Melyik stílusjegy hivatalos szövegben gyakori?", options: [
      "Pontos jogi kifejezések", "Tréfás hasonlatok", "Emojik", "Túlzó jelzők"
    ], correctIndex: 0, exp: "Szabatos terminológia."
  },
  { q: "Mi a ‘címzett’ és ‘tárgy’ szerepe levélben?", options: [
      "Díszítés", "Azonosítás, cél megjelölése", "Humor", "Helyesírás ellenőrzése"
    ], correctIndex: 1, exp: "Átláthatóságot ad."
  },
  { q: "Publicisztikában gyakori eszköz:", options: [
      "Szakkifejezések tömege", "Címszerű, figyelemfelkeltő címek, retorika", "Dialektus kötelező használata", "Csak rövidítések"
    ], correctIndex: 1, exp: "Olvasómegszólítás, állítás–érv kombináció."
  },
  { q: "Mit jelent a ‘regiszterváltás’?", options: [
      "Nyelv csere", "Helyzethez igazított stílusváltás", "Helyesírás váltása", "Kiejtés megváltoztatása idegen nyelvre"
    ], correctIndex: 1, exp: "Formális–informális közti átmenet, kontextusfüggően."
  },
  { q: "Melyik NEM jellemző hivatalos regiszterre?", options: [
      "Udvariassági formulák", "Egyértelműség", "Szlengek, mémek", "Tárgyszerűség"
    ], correctIndex: 2, exp: "Szlengek kerülendők."
  },
  { q: "Tudományos szövegben…", options: [
      "személyeskedünk", "idézünk és hivatkozunk", "csak emojikkal magyarázunk", "mesélünk"
    ], correctIndex: 1, exp: "Forrásfeltüntetés, ellenőrizhetőség."
  },
  { q: "Melyik állítás igaz?", options: [
      "Az írott forma mindig barátságosabb", "A beszélt forma mindig pontosabb", "A regiszter a helyzethez igazodjon", "A szleng mindenhol jó"
    ], correctIndex: 2, exp: "A ‘helyénvalóság’ elve vezérel."
  },
  { q: "Hol elfogadható emoji használata?", options: [
      "Szakdolgozat", "Hivatalos kérelem", "Baráti üzenet", "Törvényjavaslat"
    ], correctIndex: 2, exp: "Informális közeg."
  },
  { q: "Melyik jellemző az írott közlésre?", options: [
      "Rögtönzött szerkezet", "Kötőszók, bekezdések tudatos szervezése", "Hanglejtés, gesztus", "Átfedő beszéd"
    ], correctIndex: 1, exp: "Szerkesztettség, kohézió látható szervezése."
  },
  { q: "A beszélt vs. írott közlés különbségei közül melyik igaz?", options: [
      "Beszédben több hezitálás, ismétlés; írásban letisztultság", "Mindig azonosak", "Mindig ellenkezőek", "Csak írásban vannak hibák"
    ], correctIndex: 0, exp: "Természetes eltérés a csatorna sajátosságai miatt."
  },
];

export const section_nyelvvaltozat_regiszterek = {
  id: "nyelvvaltozat_regiszterek",
  title: "Nyelvi változatok III. – Regiszterek (hivatalos, tudományos, publicisztikai; beszélt vs. írott)",
  bank: bank_nyelvvaltozat_regiszterek,
};


/* 4. ALTÉMA – Nyelvi norma, helyénvalóság, udvariasság; tegezés–magázás */
export const bank_nyelvvaltozat_norma_udvariassag: Question[] = [
  { q: "Mit nevezünk nyelvi normának?", options: [
      "Szótári betűrend", "A helyénvaló, bevett használati minták rendszere", "Kötelező jogszabály", "Csak helyesírás"
    ], correctIndex: 1, exp: "A norma közösségi konszenzus; változik a használattal."
  },
  { q: "Mi a ‘helyénvalóság’ (appropriateness) elve?", options: [
      "Ami szép, az jó", "A helyzethez illő nyelvhasználat", "Mindig a legrövidebb legyen", "Mindig a legdíszesebb legyen"
    ], correctIndex: 1, exp: "Kommunikációs cél, partner, közeg dönti el, mi megfelelő."
  },
  { q: "Mikor célszerű magázni?", options: [
      "Hivatalos, ismeretlen vagy idősebb személlyel", "Mindig tegezünk", "Baráti beszélgetésben", "Családban"
    ], correctIndex: 0, exp: "A társas távolságot udvariasan jelöli."
  },
  { q: "Mikor természetes a tegezés?", options: [
      "Tanár–diák hivatalos viszonyban", "Barátok között", "Hivatalos levélben", "Ismeretleneknek írt emailben"
    ], correctIndex: 1, exp: "Közeli, informális kapcsolat."
  },
  { q: "Melyik udvarias megszólítás hivatalos levélben?", options: [
      "Szia!", "Helló!", "Tisztelt …!", "Cső!"
    ], correctIndex: 2, exp: "Formális megszólítás szükséges."
  },
  { q: "Mi az ‘önözés’ (Ön/Önök)?", options: [
      "Tárgyas ragozás", "Udvarias második személy", "Szleng", "Nyelvjárási jelenség"
    ], correctIndex: 1, exp: "Magázó forma a magyarban."
  },
  { q: "Melyik NEM udvarias formula?", options: [
      "Kérem, köszönöm", "Legyen szíves", "Azonnal csináld!", "Elnézést"
    ], correctIndex: 2, exp: "Parancsoló, nyers hangnem kerülendő."
  },
  { q: "Mit jelent a ‘face-saving’ (arc megőrzése) udvariasságban?", options: [
      "Dicséret tiltása", "A partner méltóságának tisztelete, kerülni a megszégyenítést", "Mindig viccelni", "Mindig hallgatni"
    ], correctIndex: 1, exp: "Konfliktusok elsimítása, tapintat."
  },
  { q: "Hogyan kérjünk kulturáltan segítséget?", options: [
      "Kell a megoldás!", "Azonnal küldd!", "Megtennéd, hogy segítesz ebben…?", "Kötelező megcsinálnod!"
    ], correctIndex: 2, exp: "Feltételes kérés, udvarias formulákkal."
  },
  { q: "Melyik helyzetben maradjon a magázás?", options: [
      "Hivatalos ügyintézés", "Baráti chat", "Osztálytársakkal", "Családtagokkal"
    ], correctIndex: 0, exp: "Formális közeg: magázás az alap."
  },
  { q: "Mi a ‘nyers direktív’ kommunikációs kockázata?", options: [
      "Gyorsítja a megértést", "Udvariatlannak hat, ellenállást szülhet", "Mindig sikeres", "Hivatalosban elvárt"
    ], correctIndex: 1, exp: "Udvariassági elv megsértése rossz hatású."
  },
  { q: "Mi a ‘diszkréció’ szerepe?", options: [
      "Titoktartás és tapintat a kommunikációban", "Hangos beszéd", "Szlenghasználat", "Hibakeresés"
    ], correctIndex: 0, exp: "Bizalom megőrzése, adatvédelem."
  },
  { q: "Mikor illik visszakérdezni tegezésről–magázásról?", options: [
      "Ha bizonytalan a viszony/hierarchia", "Soha", "Csak családban", "Csak írásban"
    ], correctIndex: 0, exp: "Udvarias egyeztetés: ‘Tegezhetjük egymást?’"
  },
  { q: "Mi a ‘nyelvi agresszió’ példája?", options: [
      "Gúny, sértegetés, fenyegetés", "Udvarias kérés", "Köszönet", "Dicséret"
    ], correctIndex: 0, exp: "Sértő, bántó nyelvi cselekedetek."
  },
  { q: "Mi az ‘illokúciós cél’?", options: [
      "A mondat hangrendje", "A beszélő szándéka (kérés, ígéret, fenyegetés stb.)", "A betűk sorrendje", "A mondat hossza"
    ], correctIndex: 1, exp: "Beszédaktus-elméleti fogalom."
  },
  { q: "Mi a ‘pozitív udvariasság’ eszköze?", options: [
      "Közös pont keresése, dicséret", "Megszégyenítés", "Kiabálás", "Fenntartott távolság"
    ], correctIndex: 0, exp: "Kapcsolatápoló stratégia."
  },
  { q: "Mi a ‘negatív udvariasság’ eszköze?", options: [
      "Kérés enyhítése (feltételes mód, kerülő formulák)", "Parancs", "Vádaskodás", "Gúny"
    ], correctIndex: 0, exp: "Partner autonómiájának tisztelete (pl. ‘Megtenné, hogy…?’)"
  },
  { q: "Hogyan zárjunk hivatalos levelet?", options: [
      "Puszi!", "Üdv", "Tisztelettel:", "Csá!"
    ], correctIndex: 2, exp: "Formális záróformula."
  },
  { q: "A norma megsértése…", options: [
      "minden helyzetben azonos mértékű", "helyzetfüggő megítélésű", "mindig súlyos", "mindig vicces"
    ], correctIndex: 1, exp: "A helyénvalóság elve: közeg- és partnerfüggő."
  },
  { q: "A tegezés–magázás váltásának udvarias formája:", options: [
      "Mostantól tegeződjünk, világos?", "Engedje meg, hogy tegezzem?", "Ezentúl magázni fogom!", "Nem számít, hogyan szólítjuk."
    ], correctIndex: 1, exp: "Kérés formájában, tiszteletteljesen."
  },
];

export const section_nyelvvaltozat_norma_udvariassag = {
  id: "nyelvvaltozat_norma_udvariassag",
  title: "Nyelvi változatok IV. – Nyelvi norma, helyénvalóság, udvariasság; tegezés–magázás",
  bank: bank_nyelvvaltozat_norma_udvariassag,
};
// ─────────────────────────────────────────────
// NYELVTAN 8 — ZÁRÓ ÖSSZEFOGLALÁS ÉS VEGYES DOLGOZATOK
// ─────────────────────────────────────────────

/* 1. ALTÉMA – Szófajok, mondatrészek, mondatfajták vegyes gyakorló */
export const bank_zaro_szofajok_mondatreszek: Question[] = [
  {
    q: "Melyik szó az alábbi mondatban az ige? „A gyerek játszik a kertben.”",
    options: ["gyerek", "játszik", "kertben", "a"],
    correctIndex: 1,
    exp: "Az ige a cselekvést fejezi ki: ‘játszik’."
  },
  {
    q: "Mi a 'szép' szó szófaja a 'szép ház' kifejezésben?",
    options: ["főnév", "ige", "melléknév", "határozószó"],
    correctIndex: 2,
    exp: "A 'szép' a főnév tulajdonságát jelöli → melléknév."
  },
  {
    q: "Melyik szó a tárgy? „A fiú elolvasta a könyvet.”",
    options: ["fiú", "a", "elolvasta", "könyvet"],
    correctIndex: 3,
    exp: "A 'könyvet' válaszolja meg a 'mit?' kérdésre → tárgy."
  },
  {
    q: "Melyik mondat kijelentő?",
    options: ["Szereted a csokit?", "Egyél csokit!", "Szeretem a csokit.", "Milyen finom a csoki!"],
    correctIndex: 2,
    exp: "Tényközlő → kijelentő mondat."
  },
  {
    q: "A „Milyen magas a torony!” mondat fajtája:",
    options: ["kérdő", "felkiáltó", "felszólító", "kijelentő"],
    correctIndex: 1,
    exp: "Érzelmet fejez ki → felkiáltó."
  },
  {
    q: "A 'házakban' szó hány morfémából áll?",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
    exp: "Tő ('ház') + többes jel (-ak) + helyhatározó rag (-ban)."
  },
  {
    q: "A 'szaladgál' szó képzése:",
    options: ["tőszó", "képzett szó", "összetett szó", "ragozott szó"],
    correctIndex: 1,
    exp: "A ‘szalad’ igéből képzett ismétlő ige."
  },
  {
    q: "Melyik az állítmány? „A tanulók figyelmesek.”",
    options: ["tanulók", "figyelmesek", "a", "figyelmesek tanulók"],
    correctIndex: 1,
    exp: "Az állítmány a mondat állítása → ‘figyelmesek’."
  },
  {
    q: "Melyik mondatrész a „kertben” szó a „Jancsi játszik a kertben.” mondatban?",
    options: ["tárgy", "helyhatározó", "állítmány", "jelző"],
    correctIndex: 1,
    exp: "A ‘hol?’ kérdésre válaszol → helyhatározó."
  },
  {
    q: "Melyik igeidő: „olvasta”?",
    options: ["jelen", "múlt", "jövő", "folyamatos"],
    correctIndex: 1,
    exp: "Az -t jel múlt időre utal."
  },
  {
    q: "A „Lacika gyorsan fut.” mondatban a ‘gyorsan’ szó szófaja:",
    options: ["melléknév", "ige", "határozószó", "névmás"],
    correctIndex: 2,
    exp: "A ‘hogyan?’ kérdésre válaszol → határozószó."
  },
  {
    q: "Melyik az összetett mondat?",
    options: ["A kutya ugat.", "Esik az eső, de kimegyünk.", "A gyerek fut.", "A tanár mosolyog."],
    correctIndex: 1,
    exp: "Két tagmondat, kötőszóval összekapcsolva → összetett mondat."
  },
  {
    q: "Mi a 'futóverseny' szó felépítése?",
    options: ["tőszó", "képzett szó", "összetett szó", "ragozott szó"],
    correctIndex: 2,
    exp: "‘futó’ + ‘verseny’ → összetett szó."
  },
  {
    q: "Melyik szó ige?",
    options: ["asztal", "piros", "ír", "gyorsan"],
    correctIndex: 2,
    exp: "Cselekvést fejez ki → ‘ír’."
  },
  {
    q: "A 'mi' szó szófaja:",
    options: ["kötőszó", "kérdő névmás", "melléknév", "számnév"],
    correctIndex: 1,
    exp: "Kérdő névmás, kérdést fejez ki."
  },
  {
    q: "A „Fáj a fejem.” mondatban az „a” szó szerepe:",
    options: ["névelő", "melléknév", "határozó", "tárgy"],
    correctIndex: 0,
    exp: "Határozott névelő."
  },
  {
    q: "A 'nagyobb' szó milyen viszonyban áll a 'nagy' szóval?",
    options: ["fokozott alak", "összetett szó", "tárgyas ige", "szinonima"],
    correctIndex: 0,
    exp: "A 'nagyobb' a 'nagy' melléknév középfoka."
  },
  {
    q: "Mi a 'túlzás' szó stíluseszköz szerint?",
    options: ["metafora", "hiperbola", "szinesztézia", "irónia"],
    correctIndex: 1,
    exp: "A túlzás → hiperbola."
  },
  {
    q: "A „Gyorsabban fut, mint a szél” mondatban a ‘mint’ szó…",
    options: ["kötőszó", "névutó", "melléknév", "határozószó"],
    correctIndex: 0,
    exp: "A hasonlatot kapcsolja össze → kötőszó."
  },
  {
    q: "A 'futottak még' kifejezés…",
    options: ["tárgyi jelentésű", "állandósult szókapcsolat", "igeidő", "szóösszetétel"],
    correctIndex: 1,
    exp: "Képletes, rögzült jelentés → szólásszerű kifejezés."
  }
];

export const section_zaro_szofajok_mondatreszek = {
  id: "zaro_szofajok_mondatreszek",
  title: "Záró összefoglalás I. – Szófajok, mondatrészek, mondatfajták vegyes gyakorló",
  bank: bank_zaro_szofajok_mondatreszek,
};


/* 2. ALTÉMA – Helyesírás, szókincs, jelentéstan vegyes */
export const bank_zaro_helyesiras_jelentestan: Question[] = [
  {
    q: "Melyik szó helyes?",
    options: ["muszály", "muszáj", "muszaj", "muszályy"],
    correctIndex: 1,
    exp: "Csak a ‘muszáj’ helyes: j-vel, nem ly."
  },
  {
    q: "Mi a 'kulcs' szó többjelentésű használata?",
    options: ["zárhoz való – zenei kulcs", "csak tárgy", "mindig azonos", "csak hangutánzó"],
    correctIndex: 0,
    exp: "Többjelentés: kapcsolódó, de eltérő fogalmak."
  },
  {
    q: "Melyik szó hibás?",
    options: ["gyapjú", "lyuk", "hejes", "helyes"],
    correctIndex: 2,
    exp: "‘hejes’ → helytelen, hiányzik az ‘ly’."
  },
  {
    q: "Melyik kifejezés közmondás?",
    options: ["Fején találta a szöget.", "Lassan járj, tovább érsz.", "Füstöl az orra.", "Elgurult a gyógyszere."],
    correctIndex: 1,
    exp: "Általános életigazságot tartalmaz → közmondás."
  },
  {
    q: "Mi a 'vár' szó két jelentése közti viszony?",
    options: ["homonima", "szinonima", "antonima", "többjelentés"],
    correctIndex: 0,
    exp: "Teljesen különböző jelentések → homonima."
  },
  {
    q: "Mit jelent az „aranyat ér” szólás?",
    options: ["drágát", "értékeset", "aranyból készültet", "ritkát"],
    correctIndex: 1,
    exp: "Átvitt értelem: értékes."
  },
  {
    q: "Melyik szóban van toldalék?",
    options: ["asztal", "asztalok", "asztal", "asztal."],
    correctIndex: 1,
    exp: "A többes szám jele: -ok."
  },
  {
    q: "Mi a 'nemzet' és 'ország' viszonya?",
    options: ["szinonima", "antonima", "hangulatfestő", "idegen szó"],
    correctIndex: 0,
    exp: "Rokon értelműek, bár nem teljesen azonosak."
  },
  {
    q: "Melyik szó idegen eredetű?",
    options: ["televízió", "asztal", "kert", "háromszög"],
    correctIndex: 0,
    exp: "‘televízió’ → görög–latin eredetű."
  },
  {
    q: "Mi a 'csobban' szó típusa?",
    options: ["hangutánzó", "homonima", "összetett", "idegen"],
    correctIndex: 0,
    exp: "Hangutánzó (onomatopoetikus) ige."
  },
  {
    q: "Melyik szó rokon értelmű a 'szép'-re?",
    options: ["csúnya", "gyönyörű", "rossz", "unalmas"],
    correctIndex: 1,
    exp: "Szinonima → ‘gyönyörű’."
  },
  {
    q: "A 'ki' szó melyik mondatrészhez tartozhat? („Ki ment a házból.”)",
    options: ["alany", "ige", "határozószó", "tárgy"],
    correctIndex: 2,
    exp: "Mozgás irányát jelöli → határozószó."
  },
  {
    q: "Melyik szó ellentétes a 'gazdag'-gal?",
    options: ["szegény", "jómódú", "bőkezű", "nagylelkű"],
    correctIndex: 0,
    exp: "Antonima: ‘szegény’."
  },
  {
    q: "Mit fejez ki az 'érdekes' szó?",
    options: ["tulajdonságot", "cselekvést", "tárgyat", "helyet"],
    correctIndex: 0,
    exp: "Melléknév → tulajdonság."
  },
  {
    q: "Melyik helyesírási szabály él a 'hídhoz' szóban?",
    options: ["j–ly szabály", "képzés", "hasznosított tőhangváltás (d~gy)", "ragozás hiánya"],
    correctIndex: 2,
    exp: "Híd – híDhoz → d gy-hez hasonul."
  },
  {
    q: "Mi jellemzi a 'szleng' kifejezéseket?",
    options: ["Formálisak", "Csoporthoz kötöttek, játékosak", "Kizárólag hibásak", "Szótáriak"],
    correctIndex: 1,
    exp: "A szleng informális, kreatív."
  },
  {
    q: "Mit jelent a 'regionális köznyelv'?",
    options: ["Köznyelv területi árnyalattal", "Helytelen nyelvhasználat", "Idegen nyelv", "Szlengváltozat"],
    correctIndex: 0,
    exp: "Köznyelvi szerkezet + táji szóhasználat."
  },
  {
    q: "A 'Tisztelt Uram!' megszólítás regisztere:",
    options: ["Hivatalos", "Szleng", "Családi", "Költői"],
    correctIndex: 0,
    exp: "Hivatalos, udvarias formula."
  },
  {
    q: "Mi a 'megérkezett' szó alapja?",
    options: ["ér", "érkezik", "megérkezik", "meg"],
    correctIndex: 1,
    exp: "‘érkezik’ ige → ‘meg-’ igekötő + múlt idő."
  },
  {
    q: "A 'gyors' és 'lassú' kapcsolatát nevezzük…",
    options: ["szinonimának", "antonimának", "hangulatfestésnek", "homonímiának"],
    correctIndex: 1,
    exp: "Ellentét → antonima."
  }
];

export const section_zaro_helyesiras_jelentestan = {
  id: "zaro_helyesiras_jelentestan",
  title: "Záró összefoglalás II. – Helyesírás, szókincs, jelentéstan vegyes",
  bank: bank_zaro_helyesiras_jelentestan,
};

/* 3. ALTÉMA – Kommunikáció, stílus, udvariasság vegyes (TELJES 20) */
export const bank_zaro_kommunikacio_stilus: Question[] = [
  {
    q: "Mi a kommunikáció alapfogalma?",
    options: ["Információcsere ember és ember között", "Mindig írásos közlés", "Csak hangalapú üzenet", "Jelzőrendszer nélküli folyamat"],
    correctIndex: 0,
    exp: "Kommunikáció = információcsere jelrendszeren keresztül."
  },
  {
    q: "Melyik a nyelvi udvariasság jele?",
    options: ["Kérem", "Na végre!", "Csináld!", "Most azonnal!"],
    correctIndex: 0,
    exp: "A ‘kérem’ udvarias formula."
  },
  {
    q: "Melyik stílusréteghez tartozik a 'Tisztelt Cím!' megszólítás?",
    options: ["hivatalos", "szleng", "irodalmi", "tudományos"],
    correctIndex: 0,
    exp: "Hivatalos regiszter, udvarias formula."
  },
  {
    q: "Mi a 'szinonima'?",
    options: ["Ellentétes jelentés", "Rokon értelmű szó", "Azonos alak", "Hangutánzó szó"],
    correctIndex: 1,
    exp: "Rokon értelmű → szinonima."
  },
  {
    q: "Melyik szó hangulatfestő?",
    options: ["pöttyös", "hegyes", "buta", "vidám"],
    correctIndex: 0,
    exp: "A ‘pöttyös’ hangulati színezettel bíró szóalak."
  },
  {
    q: "Mit jelent: „Elgurult a gyógyszere”?",
    options: ["Megbolondult", "Gyógyszert vett", "Meggyógyult", "Lemondott a kezelésről"],
    correctIndex: 0,
    exp: "Tréfás szólás: furcsán viselkedik."
  },
  {
    q: "Mit nevezünk ‘netikett’-nek?",
    options: ["Internetes viselkedési szabályokat", "Szlenggyűjteményt", "Szótári rövidítést", "Új szóalakot"],
    correctIndex: 0,
    exp: "Online illemszabályrendszer."
  },
  {
    q: "Melyik regiszterben kerülendő az emoji?",
    options: ["baráti chat", "hivatalos email", "osztálycsoport üzenet", "magánmessenger"],
    correctIndex: 1,
    exp: "Formális helyzetben az emojik nem helyénvalók."
  },
  {
    q: "Mi a kommunikációs zaj?",
    options: ["A kapcsolat megszakítása szándékosan", "Megértést zavaró tényező (pl. hangzavar, félreértés)", "Mindig viccelődés", "Sorozatos emojihasználat"],
    correctIndex: 1,
    exp: "Zaj: minden, ami rontja az üzenet átjutását."
  },
  {
    q: "Mi a beszédaktus ‘illokúciós’ célja?",
    options: ["A beszéd fizikai megjelenése", "A beszélő szándéka (kérés, ígéret, fenyegetés)", "A hangmagasság", "A betűk alakja"],
    correctIndex: 1,
    exp: "Illokúció = a megnyilatkozás célja."
  },
  {
    q: "Melyik udvariasabb kérés?",
    options: ["Add ide!", "Megtennéd, hogy ideadod?", "Ide vele!", "Kötelező odaadnod."],
    correctIndex: 1,
    exp: "Enyhítő, feltételes szerkezet."
  },
  {
    q: "Melyik a hivatalos levél helyes zárása?",
    options: ["Puszi!", "Üdv!", "Tisztelettel:", "Cső!"],
    correctIndex: 2,
    exp: "Formális záróformula."
  },
  {
    q: "Mi a ‘regiszterváltás’?",
    options: ["Nyelvcsere kötelezően", "Helyzethez illő stílusváltás", "Helyesírás-váltás", "Kiejtés idegennyelvűvé tétele"],
    correctIndex: 1,
    exp: "Formális–informális közti váltás a kontextus szerint."
  },
  {
    q: "Miért fontos az online hangnem?",
    options: ["Mert nincs mimika/hanglejtés → félreértés lehet", "Mindig kötelező viccelni", "Csak nagybetűvel illik írni", "Nem fontos"],
    correctIndex: 0,
    exp: "Paranyelvi jelek hiányát a pontos, udvarias fogalmazás pótolja."
  },
  {
    q: "Mi az ‘arcmegőrzés’ (face-saving) udvariasságban?",
    options: ["A partner méltóságának kímélése", "Sértő gúny", "Hangos vita", "Ironizálás kötelezően"],
    correctIndex: 0,
    exp: "Konfliktusminimalizálás, tapintat."
  },
  {
    q: "Melyik a beszélt közlés sajátossága?",
    options: ["Azonnali visszajelzés, hezitálások", "Mindig szerkesztett", "Nincs ismétlés", "Mindig rövid"],
    correctIndex: 0,
    exp: "Spontán, interaktív jelleg."
  },
  {
    q: "Melyik igaz az írott közlésre?",
    options: ["Hirtelen váltások, hezitálás", "Szerkesztettség, bekezdések", "Csak szleng", "Csak emojik"],
    correctIndex: 1,
    exp: "Tudatos szerkezet és kohézió."
  },
  {
    q: "Mikor magázunk alapból?",
    options: ["Barátok közt", "Hivatalos ügyintézésben/ismeretlennel", "Családban", "Osztálytársakkal"],
    correctIndex: 1,
    exp: "Formális, távolságtartó helyzet."
  },
  {
    q: "Mikor természetes a tegezés?",
    options: ["Hivatalos kérelemben", "Baráti beszélgetésben", "Munkahelyi első levélben", "Bírósági beadványban"],
    correctIndex: 1,
    exp: "Informális viszonyban."
  },
  {
    q: "Mit tegyünk félreértés gyanúja esetén online?",
    options: ["Rákiabálunk CAPS-szel", "Feltételezzük a rossz szándékot", "Visszakérdezünk, higgadtan tisztázunk", "Kötelezően jelentjük a másikat"],
    correctIndex: 2,
    exp: "Tisztázó, udvarias kommunikáció csökkenti a feszültséget."
  }
];

export const section_zaro_kommunikacio_stilus = {
  id: "zaro_kommunikacio_stilus",
  title: "Záró összefoglalás III. – Kommunikáció, stílus, udvariasság vegyes",
  bank: bank_zaro_kommunikacio_stilus,
};

/* FŐTÉMA – összefűzés */
export const topic_nyelvvaltozatok = {
  id: "nyelvtan_8_nyelvvaltozatok",
  title: "Nyelvtan 8 — Nyelvi változatok és nyelvhasználat",
  sections: [
    section_nyelvvaltozat_koznyelv_nyelvjaras,
    section_nyelvvaltozat_szleng_digitalis,
    section_nyelvvaltozat_regiszterek,
    section_nyelvvaltozat_norma_udvariassag,
  ],
};

export const topic_szofajok = {
    id: "nyelvtan_8_szofajok",
    title: "Nyelvtan 8 — Szófajok",
    sections: [
      section_szofajok_alap,
      section_szofajok_nevmas_szamnev,
      section_szofajok_viszonyszok,
    ],
};
  // TÉMA 2 konténerpélda:
export const topic_mondatelemzes = {
  id: "nyelvtan_8_mondatelemzes",
  title: "Nyelvtan 8 — Mondatelemzés",
  sections: [
    section_mondatelemzes_alany_allitmany,
    section_mondatelemzes_targy_hatarozok,
    section_mondatelemzes_jelzok,
    section_mondatelemzes_osszmondatok,
  ],
};
export const topic_helyesiras = {
  id: "nyelvtan_8_helyesiras",
  title: "Nyelvtan 8 — Helyesírás",
  sections: [
    section_helyesiras_kis_nagybetu,
    section_helyesiras_egybe_kulon,
    section_helyesiras_ly_j,
    section_helyesiras_irasjelek,
  ],
};
export const topic_szovegalkotas = {
  id: "nyelvtan_8_szovegalkotas",
  title: "Nyelvtan 8 – Szövegalkotás",
  sections: [
    section_szoveg_fogalma,
    section_szoveg_szerkezete,
    section_szoveg_fajtai,
    section_fogalmazas_lepesei,
  ],
};
// ─────────────────────────────────────────────
// NYELVTAN 8 — KOMMUNIKÁCIÓ ÉS RETORIKA (FŐTÉMA)
// ─────────────────────────────────────────────
 
    export const topic_kommunikacio_retorika = {
  id: "nyelvtan_8_kommunikacio_retorika",
  title: "Nyelvtan 8 — Kommunikáció és retorika",
  sections: [
    section_kommunikacio_fogalma,
    section_kommunikacio_formai,
    section_retorika_alapjai,
    section_nyilvanos_beszed,
  ],
 };
 // ─────────────────────────────────────────────
// NYELVTAN 8 — STÍLUS ÉS STILISZTIKA (FŐTÉMA)
// ─────────────────────────────────────────────
export const topic_stilus = {
  id: "nyelvtan_8_stilus",
  title: "Nyelvtan 8 — Stílus és stilisztika",
  sections: [
    section_stilus_fogalma,        // I. A stílus fogalma és tényezői
    section_stilusretegek,         // II. Stílusrétegek és stílusváltozatok
    section_szokep_has_metafora,   // III. Szóképek és alakzatok I.
    section_alakzatok,             // IV. Szóképek és alakzatok II.
  ],
};
// ─────────────────────────────────────────────
// NYELVTAN 8 — HELYESÍRÁS ÉS KÖZPONTOZÁS (FŐTÉMA)
// ─────────────────────────────────────────────
export const topic_helyesiras_halado = {
  id: "nyelvtan_8_helyesiras_halado",
  title: "Nyelvtan 8 — Helyesírás és központozás",
  sections: [
    section_helyesiras_alapelvei, // I. A magyar helyesírás alapelvei
    section_nagybetu_kozpont,     // II. Nagybetű-használat és központozás
    section_egybe_kuloniras,      // III. Egybe- és különírás szabályai
    section_helyesirasi_hibak,    // IV. Gyakori helyesírási hibák és javításuk
  ],
};
// ─────────────────────────────────────────────
// NYELVTAN 8 — MONDATFAJTÁK ÉS MONDATSZERKEZET (FŐTÉMA)
// ─────────────────────────────────────────────
export const topic_mondatfajtak = {
  id: "nyelvtan_8_mondatfajtak",
  title: "Nyelvtan 8 — Mondatfajták és mondatszerkezet",
  sections: [
    section_mondatfajtak_szandek,       // I. A beszélő szándéka szerint
    section_mondatfajtak_szerkezet,     // II. Szerkezet szerint
    section_mondatszintu_irasjelek,     // III. Mondatszintű írásjelek és határolás
    section_egyeztetes_szorend_ritmus,  // IV. Egyeztetés, szórend, mondatritmus
  ],
};
// ─────────────────────────────────────────────
// NYELVTAN 8 — SZÖVEGKOHÉZIÓ ÉS KAPCSOLÓELEMEK (FŐTÉMA)
// ─────────────────────────────────────────────
export const topic_szovegkohezio = {
  id: "nyelvtan_8_szovegkohezio",
  title: "Nyelvtan 8 — Szövegkohézió és kapcsolóelemek",
  sections: [
    section_szovegkohezio_altalanos,   // I. A szöveg mondatai közti kapcsolat
    section_szovegkohezio_grammatikai, // II. Grammatikai kapcsolóelemek
    section_szovegkohezio_jelentesbeli,// III. Jelentésbeli kapcsolatok
    section_szovegkohezio_logikai,     // IV. Logikai viszonyok a szövegben
  ],
};
// ─────────────────────────────────────────────
// NYELVTAN 8 — JELENTÉSTAN ÉS SZÓKINCSFEJLESZTÉS (FŐTÉMA)
// ─────────────────────────────────────────────
export const topic_jelentestan = {
  id: "nyelvtan_8_jelentestan",
  title: "Nyelvtan 8 — Jelentéstan és szókincsfejlesztés",
  sections: [
    section_jelentestan_szavak,                 // I. Szójelentés, többjelentés
    section_jelentestan_szinonima_antonima,    // II. Szinonimák és antonimák
    section_jelentestan_homonim_hangutanzo,    // III. Homonimák, hangutánzók
    section_jelentestan_szolasok_kozmondasok,  // IV. Szólások, közmondások
  ],
};
// ─────────────────────────────────────────────
// NYELVTAN 8 — ZÁRÓ ÖSSZEFOGLALÁS ÉS VEGYES DOLGOZATOK (FŐTÉMA)
// ─────────────────────────────────────────────
export const topic_nyelvtan_zaro = {
  id: "nyelvtan_8_zaro",
  title: "Nyelvtan 8 — Záró összefoglalás és vegyes dolgozatok",
  sections: [
    section_zaro_szofajok_mondatreszek,
    section_zaro_helyesiras_jelentestan,
    section_zaro_kommunikacio_stilus,
  ],
};

// Ha itt gyűjtöd a témafákat, add hozzá:
export const TOPIC_TREE = [
  // … korábbi nyelvtan 8. témák …
  topic_szofajok,
  topic_mondatelemzes,
  topic_helyesiras,
  topic_szovegalkotas,
  topic_kommunikacio_retorika,
  topic_stilus,
  topic_helyesiras_halado,
  topic_mondatfajtak,
  topic_szovegkohezio,
  topic_jelentestan,
  topic_nyelvvaltozatok,
  topic_nyelvtan_zaro, // ⇦ most hozzáadva
];





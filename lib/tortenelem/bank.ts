// ===============================
// I. VILÁGHÁBORÚ (WW1) – 3×20
// ===============================

// bank.ts – TETEJE

// 1) Helyes import (ne a QuizContext-ből):
import type { Question } from "../../lib/types";

// 2) Adjunk automatikus id-t minden kérdésnek:
let __qid = 0;
const q = (
  qText: string,
  options: string[],
  correctIndex: number,
  exp: string
): Question => ({
  id: String(__qid++),   // <<< EZ az egyedi id
  q: qText,
  options,
  correctIndex,
  exp,
});

// --- WW1 – Okok és előzmények (20) ---
const WW1_OKOK: Question[] = [
  q(
    "Mi volt az egyik fő feszültségforrás Európában 1914 előtt?",
    ["Nacionalizmus", "Pacifizmus", "Közös valuta", "Unió minden országnak"],
    0,
    "A nacionalizmus erősítette a versengést és a területi igényeket az országok között."
  ),
  q(
    "Melyik volt a két nagy szövetségi rendszer a háború előtt?",
    ["Antant és Központi hatalmak", "NATO és Varsó", "EU és NAFTA", "SEATO és CENTO"],
    0,
    "Az Antant (Anglia, Franciaország, Oroszország) és a Központi hatalmak (Németország, Monarchia, később Törökország)."
  ),
  q(
    "Ki követte el a szarajevói merényletet 1914-ben?",
    ["Gavrilo Princip", "Lenin", "Mussolini", "Chamberlain"],
    0,
    "Gavrilo Princip szerb nacionalista lőtte le Ferenc Ferdinánd trónörököst Szarajevóban."
  ),
  q(
    "A merénylet hol és mikor történt?",
    ["Szarajevó, 1914", "London, 1912", "Berlin, 1916", "Róma, 1910"],
    0,
    "1914 júniusában Szarajevóban, ez indította el a válságot."
  ),
  q(
    "Melyik nagyhatalom támogatta Szerbiát 1914-ben?",
    ["Oroszország", "Németország", "Olaszország", "Japán"],
    0,
    "Oroszország védte Szerbiát, ezért eszkalálódott gyorsan a konfliktus."
  ),
  q(
    "Mi volt a fegyverkezési verseny egyik fő területe?",
    ["Haditengerészet", "Űrverseny", "Internet", "Légitaxik"],
    0,
    "Anglia és Németország különösen a flottájukat építették."
  ),
  q(
    "Mit jelent a ’Balkán a puskaporos hordó’ kifejezés?",
    ["Könnyen robbanó feszültség halmozódott fel", "Gazdag olajmező", "Békés zóna", "Lakatlan vidék"],
    0,
    "Sok nép, sok vita, területi ellentétek – bármikor kirobbanhatott a konfliktus."
  ),
  q(
    "Mi volt a Schlieffen-terv lényege?",
    ["Franciaország gyors legyőzése", "Anglia megszállása", "Orosz flotta elsüllyesztése", "Spanyolország megtámadása"],
    0,
    "Németország gyorsan akarta legyőzni Franciaországot, majd keletre fordulni."
  ),
  q(
    "Mi váltotta ki közvetlenül a háborút?",
    ["Osztrák ultimátum Szerbiának", "Brit ultimátum Japánnak", "Francia ultimátum Spanyolnak", "Orosz ultimátum Olaszországnak"],
    0,
    "A merénylet után Ausztria–Magyarország kemény feltételeket szabott Szerbiának."
  ),
  q(
    "Miért lépett be Nagy-Britannia a háborúba?",
    ["Belgium semlegességének megsértése miatt", "Szövetség Németországgal", "Gyarmati vita Ausztráliával", "Semlegesség megszűnése miatt"],
    0,
    "Németország átvonult a semleges Belgiumon, ezt Nagy-Britannia nem fogadta el."
  ),
  q(
    "Melyik birodalom volt Németország fő szövetségese?",
    ["Osztrák–Magyar Monarchia", "Orosz Birodalom", "Brit Birodalom", "Spanyol Királyság"],
    0,
    "A Monarchia és Németország szorosan együttműködött."
  ),
  q(
    "Miért akart minden fél 'gyors háborút'?",
    ["Villámgyőzelemben hittek", "Nem volt hadseregük", "Nem volt pénzük", "Nem ismerték a fegyvereket"],
    0,
    "A korábbi háborúk mintájára rövid harcot vártak – tévedtek."
  ),
  q(
    "Mi a pánszlávizmus?",
    ["Szláv népek összefogását hirdető eszme", "Latin országok szövetsége", "Brit gyarmati elv", "Semlegességi politika"],
    0,
    "Oroszország is erre hivatkozva támogatta a szerbeket."
  ),
  q(
    "Melyik térségben volt a legtöbb válság 1912–1913-ban?",
    ["Balkán-félsziget", "Skandinávia", "Benelux", "Ibériai-félsziget"],
    0,
    "A balkáni háborúk megmutatták, mennyire feszült a helyzet."
  ),
  q(
    "Miért volt fontosak a gyarmatok a feszültségben?",
    ["Nyersanyag és piacok miatt versengtek értük", "Mindenki lemondott róluk", "Csak kulturális ok", "Csak vallási ok"],
    0,
    "A nagyhatalmak gyarmati terjeszkedése versenyt szült."
  ),
  q(
    "Melyik állítás igaz a szövetségi rendszerekre?",
    ["Ha egy állam belépett, a szövetségesei is mozdultak", "Mind békeszövetség volt", "Nem számítottak sokat", "Csak papíron léteztek"],
    0,
    "A szövetségi kötelezettségek dominóhatást okoztak."
  ),
  q(
    "Mi volt az ultimátum?",
    ["Kemény feltételrendszer, határidővel", "Békés levél barátoknak", "Kereskedelmi ajánlat", "Sportverseny kiírása"],
    0,
    "Ausztria–Magyarország ultimátuma Szerbiának élesítette a helyzetet."
  ),
  q(
    "Miért számított az ipari fejlettség a háború előtt?",
    ["Fegyverek és ellátás gyors termelése", "Csak dísz", "Nem számított", "Csak a hadsereg létszáma döntött"],
    0,
    "Az ipar meghatározta a hadsereg ellátását és erejét."
  ),
  q(
    "Miért gondolták sokan, hogy karácsonyra vége lesz?",
    ["Rövid háborúra számítottak", "Nem hitték el a híreket", "Tél tilos a harc", "Kifogynak a puskák"],
    0,
    "Senki sem számolt elhúzódó állóháborúval."
  ),
  q(
    "Melyik állítás IGAZ 1914 nyarán?",
    ["Sok ország gyors mozgósításba kezdett", "Mindenki kivárt", "Csak tengeri harcok voltak", "A háború el sem kezdődött"],
    0,
    "A mozgósítások sorra indultak, a válság gyorsan háborúvá nőtt."
  ),
];

// --- WW1 – Frontok és csaták (20) ---
const WW1_FRONTOK: Question[] = [
  q(
    "Melyik fronton alakult ki főleg a lövészárok-háború?",
    ["Nyugati fronton", "Keleti fronton", "Afrikában", "Skandináviában"],
    0,
    "Franciaország és Belgium területén hosszan álló frontvonalak voltak."
  ),
  q(
    "Mikor volt az első marnei csata?",
    ["1914", "1915", "1916", "1917"],
    0,
    "1914 őszén a franciák megállították a német előrenyomulást Párizs közelében."
  ),
  q(
    "Verdun ostroma melyik évben zajlott főleg?",
    ["1916", "1914", "1915", "1918"],
    0,
    "1916-ban rendkívül hosszú és véres ütközet volt a franciák és németek között."
  ),
  q(
    "Hol vetettek be először tömegesen harci gázt?",
    ["Ypres", "Verdun", "Marne", "Somme"],
    0,
    "1915-ben Ypres-nél jelent meg nagy mennyiségben a gázfegyver."
  ),
  q(
    "Mikor használtak először nagy számban tankokat?",
    ["Somme-nál (1916)", "Marne-nál (1914)", "Verdunnél (1916)", "Caporettónál (1917)"],
    0,
    "A britek a Somme-nál vetették be először a páncélosokat nagyobb számban."
  ),
  q(
    "Mi volt a Gallipoli hadművelet célja?",
    ["A Dardanellák megszerzése", "Berlin elfoglalása", "Moszkva elfoglalása", "Róma védelme"],
    0,
    "A szorosok feletti ellenőrzés kulcsfontosságú lett volna a szövetségeseknek."
  ),
  q(
    "USA mikor lépett be a háborúba?",
    ["1917", "1914", "1915", "1916"],
    0,
    "Az USA 1917-ben csatlakozott az antanthoz, nagy erősítést adva."
  ),
  q(
    "Mi volt a tengeralattjáró-háború fő célja?",
    ["Ellenséges utánpótlás elsüllyesztése", "Új földrészek felfedezése", "Halászat segítése", "Turizmus"],
    0,
    "A német U-bootok a brit ellátást akarták megbénítani."
  ),
  q(
    "Hol zajlottak hegyi harcok az olasz fronton?",
    ["Isonzó mentén", "Rajna mentén", "Szatmárnál", "Szegednél"],
    0,
    "Az Isonzó folyónál kemény hegyi csaták voltak Olaszország és a Monarchia között."
  ),
  q(
    "Melyik csata zajlott 1916-ban a brit és francia erők nagy részvételével?",
    ["Somme", "Ardennek", "Dunkerque", "Anzio"],
    0,
    "A Somme-i csata a front áttörését célozta, óriási veszteségek árán."
  ),
  q(
    "Mi volt az 1918-as német tavaszi offenzíva célja?",
    ["Gyors győzelem a nyugati fronton", "Tengerpart megszerzése Afrikában", "USA megtámadása", "Japán elfoglalása"],
    0,
    "Az USA csapatai érkezése előtt akartak döntő sikert."
  ),
  q(
    "Mikor kötöttek fegyverszünetet a nyugati fronton?",
    ["1918. november 11-én", "1917. május 7-én", "1919. június 4-én", "1918. január 8-án"],
    0,
    "1918. november 11-én ért véget a harc a nyugati fronton."
  ),
  q(
    "Melyik csata állította meg a német előretörést Párizs felé 1914-ben?",
    ["Marne", "Verdun", "Somme", "Ypres"],
    0,
    "A Marne-nál a franciák döntő ellentámadást indítottak."
  ),
  q(
    "Melyik ország csatlakozott a háborúhoz a Központi hatalmak oldalán 1915-ben?",
    ["Oszmán Birodalom", "Spanyolország", "Svájc", "Svédország"],
    0,
    "Az Oszmán Birodalom belépése kiterjesztette a háborút a Közel-Keletre is."
  ),
  q(
    "Melyik 1915-ös hadművelet okozott nagy orosz visszavonulást?",
    ["Gorlice–Tarnów áttörés", "Caporetto", "Arras", "Passchendaele"],
    0,
    "A központi hatalmak áttörték az orosz vonalakat Galíciában."
  ),
  q(
    "Mi volt a lövészárok-háború hátránya?",
    ["Hosszú, álló háború, nagy veszteségek", "Gyors győzelem", "Könnyű mozgás", "Télen nincs harc"],
    0,
    "Az állófront miatt hónapokig-évekig elhúzódtak a harcok."
  ),
  q(
    "Melyik csata jelezte az olasz front válságát 1917-ben?",
    ["Caporetto", "Somme", "Marne", "El-Alamein"],
    0,
    "Caporettónál az olasz haderő súlyos vereséget szenvedett."
  ),
  q(
    "Mi volt az utánpótlás jelentősége a háborúban?",
    ["Fegyver, élelem, lőszer nélkül nincs harcképesség", "Csak a bátorság számít", "Csak a lovasság számít", "Csak a flotta számít"],
    0,
    "Az ipari hátország és a szállítás döntő lett a front ellátásában."
  ),
  q(
    "Hol harcoltak a gyarmati csapatok is a háborúban?",
    ["Európában és gyarmatokon is", "Csak Amerikában", "Csak Ázsiában", "Sehol"],
    0,
    "A birodalmak gyarmatairól is érkeztek katonák Európába."
  ),
  q(
    "Miért volt különleges a Somme és Verdun?",
    ["Hatalmas veszteségek, kevés területi nyereség", "Villámháború", "Csak tengeri csata", "Csak légiharc"],
    0,
    "A modern ipari háború borzalmait mutatták meg."
  ),
];

// --- WW1 – Hátország és következmények (20) ---
const WW1_HATTER: Question[] = [
  q(
    "Mi jellemezte a hátországot a háború alatt?",
    ["Jegyrendszer és hiány", "Bőség és árcsökkenés", "Minden olcsó lett", "Nem történt semmi"],
    0,
    "Az államok korlátozták a fogyasztást és az árakat, sok volt a hiány."
  ),
  q(
    "Miért lépett be az USA a háborúba?",
    ["Tengeralattjáró-támadások és politikai okok miatt", "Gyarmatszerzésért", "Semmiért", "Európa kérte"],
    0,
    "A német U-bootok és a Zimmermann-távirat is szerepet játszott."
  ),
  q(
    "Mikor ért véget a harc a nyugati fronton?",
    ["1918. november 11-én", "1914. július 28-án", "1917. május 7-én", "1920. június 4-én"],
    0,
    "Ekkor írták alá a fegyverszünetet Compiègne-ben."
  ),
  q(
    "Mi volt a versailles-i béke egyik célja?",
    ["Németország katonai erejének korlátozása", "Terjeszkedés engedése", "Gyarmatok visszaadása", "Német egység erősítése"],
    0,
    "Korlátozták a hadsereg létszámát és a fegyvereket."
  ),
  q(
    "Ki fogalmazta meg a ’14 pontot’?",
    ["Woodrow Wilson", "Franklin D. Roosevelt", "Churchill", "Clemenceau"],
    0,
    "Wilson amerikai elnök a békés rendezés elveit vázolta."
  ),
  q(
    "Mikor írták alá a trianoni békét?",
    ["1920. június 4-én", "1918. november 11-én", "1919. június 28-án", "1921. március 5-én"],
    0,
    "Magyarország számára ez jelentős terület- és népességvesztéssel járt."
  ),
  q(
    "Mi lett az Oszmán Birodalommal?",
    ["Szétesett, létrejött Törökország", "Gyarmattá vált", "Nagyobb lett", "Semmi"],
    0,
    "A birodalomból modern Törökország alakult Kemal Atatürk vezetésével."
  ),
  q(
    "Miért volt nagy a veszteség?",
    ["Modern fegyverek és hosszú állóháború miatt", "Rövid volt a harc", "Csak gyakorlatoztak", "Csak tengeri csata volt"],
    0,
    "Géppuska, tüzérség, gáz, és a lövészárkok okozták a hatalmas áldozatokat."
  ),
  q(
    "Hol volt a Népszövetség székhelye?",
    ["Genfben", "Berlinben", "Rómában", "Washingtonban"],
    0,
    "A Népszövetség a béke fenntartását célozta, de kevés eszköze volt."
  ),
  q(
    "Mi történt a gyarmatbirodalmakkal?",
    ["Mandátumterületekre osztották őket", "Azonnal függetlenek lettek", "Németország kapta meg", "Semmi"],
    0,
    "A vesztesek gyarmatai a győztesek felügyelete alá kerültek."
  ),
  q(
    "Mi volt a spanyolnátha?",
    ["Világjárvány 1918–1920 között", "Helyi influenza", "Középkori pestis", "Nincs ilyen"],
    0,
    "A háború végén hatalmas járvány söpört végig a világon."
  ),
  q(
    "Mi lett az Osztrák–Magyar Monarchiával?",
    ["Felbomlott több utódállamra", "Erősebb lett", "Csatlakozott Németországhoz", "Gyarmat lett"],
    0,
    "A birodalom megszűnt, új államok alakultak (pl. Csehszlovákia, Jugoszlávia)."
  ),
  q(
    "Mit jelent a jóvátétel?",
    ["Háborús károk pénzbeli megtérítése", "Új szövetség", "Fegyvervásárlás", "Lakásépítés"],
    0,
    "A vesztes államok pénzben és javakban kártérítést fizettek."
  ),
  q(
    "Mi történt Németország hadseregével a béke szerint?",
    ["Létszám- és fegyverkorlátozás alá került", "Megduplázták", "Nukleáris fegyvert kapott", "Mindenkit leszereltek Európában"],
    0,
    "Csak kis létszámú hadsereg maradhatott, nehézfegyverek nélkül."
  ),
  q(
    "Miért volt elégedetlen sok ország a békerendszerrel?",
    ["Igazságtalannak érezték a döntéseket", "Túl laza volt", "Túl rövid volt", "Nem voltak térképek"],
    0,
    "Sok területi és nemzetiségi kérdés megoldatlan maradt."
  ),
  q(
    "Miben segített a Vöröskereszt és más szervezetek?",
    ["Hadifoglyok és sebesültek ellátásában", "Új fegyverek gyártásában", "Adók beszedésében", "Tengerek lezárásában"],
    0,
    "Humanitárius segítséget nyújtottak a rászorulóknak."
  ),
  q(
    "Miért fontos a hátország munkája?",
    ["Nélküle nincs utánpótlás a frontra", "Csak dísz", "Felesleges", "Csak a katonák számítanak"],
    0,
    "Az élelmiszer, fegyver, ruha, szállítás mind ott készül."
  ),
  q(
    "Mi volt Wilson egyik célja a 14 ponttal?",
    ["Önrendelkezés elve erősítése", "Új gyarmatok szerzése", "Tengerek lezárása", "Némaság"],
    0,
    "A népek jogait és a nyílt diplomáciát hangsúlyozta."
  ),
  q(
    "Miért volt nehéz a békekötés?",
    ["Sok eltérő érdek és sérelem ütközött", "Mindenben egyetértettek", "Csak két ország tárgyalt", "Nem voltak térképek"],
    0,
    "A győztesek céljai és a vesztesek helyzete nagyon különbözött."
  ),
  q(
    "Miért lett később újabb háború?",
    ["A problémák nagy része megmaradt", "Mindenki elégedett lett", "Nem volt több vita", "Megszűnt az ipar"],
    0,
    "Az igazságtalannak érzett döntések új feszültségeket szültek."
  ),
];


// ===============================
// KÉT VILÁGHÁBORÚ KÖZÖTT (INTERWAR) – 3×20
// ===============================

// --- Politika, ideológiák (20) ---
const INTERWAR_POLITIKA: Question[] = [
  q(
    "Ki lett Németország kancellárja 1933-ban?",
    ["Adolf Hitler", "Paul von Hindenburg", "Joseph Goebbels", "Benito Mussolini"],
    0,
    "Hitlert 1933-ban nevezték ki kancellárrá, ezzel indult a náci diktatúra."
  ),
  q(
    "Melyik országban alakult ki fasizmus Mussolini vezetésével?",
    ["Olaszország", "Németország", "Spanyolország", "Szovjetunió"],
    0,
    "Mussolini 1922-ben került hatalomra Olaszországban, bevezette a fasiszta rendszert."
  ),
  q(
    "Mit jelent a totalitárius állam?",
    ["Az állam mindent ellenőriz", "Csak a gazdaságot szabályozza", "Csak a vallást irányítja", "Nincs kormány"],
    0,
    "A totalitárius állam az élet minden területét uralja (pl. náci Németország, sztálini SZU)."
  ),
  q(
    "Melyik esemény volt Hitler sikertelen hatalomátvételi kísérlete 1923-ban?",
    ["Sörpuccs", "Kristályéjszaka", "Anschluss", "Müncheni egyezmény"],
    0,
    "1923-ban Hitler sikertelen puccsot kísérelt meg Münchenben."
  ),
  q(
    "Mit jelent a 'Lebensraum' kifejezés?",
    ["Élettér, terjeszkedés", "Szabad választások", "Új szövetség", "Kultúra támogatása"],
    0,
    "A nácik ideológiájában a németek terjeszkedését, új területek megszerzését jelentette."
  ),
  q(
    "Melyik évben történt a Kristályéjszaka?",
    ["1938", "1933", "1935", "1941"],
    0,
    "1938-ban zsidóellenes pogromot rendeztek Németországban."
  ),
  q(
    "Mi volt a nürnbergi törvények célja 1935-ben?",
    ["A zsidók jogfosztása", "Új adórendszer bevezetése", "Munkanélküliség megszüntetése", "Földreform"],
    0,
    "A törvények a zsidókat jogfosztották, megtiltották a vegyes házasságokat."
  ),
  q(
    "Ki volt a spanyol polgárháború nacionalista vezetője?",
    ["Francisco Franco", "Stalin", "Churchill", "De Gaulle"],
    0,
    "Franco tábornok 1936–1939 között vívott polgárháborút, és diktatúrát vezetett be."
  ),
  q(
    "Melyik állam nem volt tengelyhatalom?",
    ["Franciaország", "Németország", "Olaszország", "Japán"],
    0,
    "A tengelyhatalmak Németország, Olaszország és Japán voltak."
  ),
  q(
    "Ki vezette a Szovjetuniót a '30-as években?",
    ["Sztálin", "Lenin", "Hruscsov", "Trocmki"],
    0,
    "Sztálin 1924-től haláláig, 1953-ig volt vezető."
  ),
  q(
    "Mi volt a kolhozosítás célja?",
    ["Kollektív gazdaság létrehozása", "Parasztság felszabadítása", "Teljes privatizáció", "Fegyverkezés"],
    0,
    "Sztálin a földeket közös tulajdonba vonta, ami éhínséget okozott."
  ),
  q(
    "Mit jelent a személyi kultusz?",
    ["Vezető istenítése", "Demokratikus választás", "Törvény előtti egyenlőség", "Nincs vezető"],
    0,
    "Sztálin és Hitler rendszere erősen épített a személyi kultuszra."
  ),
  q(
    "Mit jelent a propaganda?",
    ["Tömegek befolyásolása", "Kereskedelem", "Katonai szövetség", "Tudományos kutatás"],
    0,
    "A diktatúrákban a propaganda a lakosság meggyőzésének eszköze volt."
  ),
  q(
    "Melyik szervezet volt Hitler ifjúsági mozgalma?",
    ["Hitlerjugend", "Gestapo", "SA", "NSDAP"],
    0,
    "A Hitlerjugend a fiatalokat nevelte náci szellemben."
  ),
  q(
    "Mi volt Mussolini híres hatalomátvételi akciója?",
    ["Római menet", "Sörpuccs", "Kristályéjszaka", "Molotov–Ribbentrop-paktum"],
    0,
    "1922-ben Mussolini a feketeingesekkel vonult Rómába."
  ),
  q(
    "Mit jelentett a Weimari köztársaság válsága?",
    ["Hiperinfláció és instabilitás", "Bőség és jólét", "Teljes nyugalom", "Csak katonai problémák"],
    0,
    "Az 1920-as években a német gazdaság összeomlott."
  ),
  q(
    "Mit jelent az antiszemitizmus?",
    ["Zsidóellenesség", "Keresztényellenesség", "Ateizmus", "Szocializmus"],
    0,
    "A náci ideológia alapja a zsidóellenes gyűlölet volt."
  ),
  q(
    "Mi volt a célja a Gestapónak?",
    ["Titkosrendőrség, megfélemlítés", "Ifjúsági program", "Kereskedelem", "Népességnövelés"],
    0,
    "A Gestapo a politikai rendőrség volt a náci Németországban."
  ),
  q(
    "Melyik évben zajlott a spanyol polgárháború?",
    ["1936–1939", "1933–1935", "1929–1931", "1941–1943"],
    0,
    "1936 és 1939 között a nacionalisták és a köztársaságiak vívták a háborút."
  ),
];

// --- Gazdaság, válság (20) ---
const INTERWAR_GAZDASAG: Question[] = [
  q(
    "Melyik évben robbant ki a világgazdasági válság?",
    ["1929", "1919", "1933", "1938"],
    0,
    "1929-ben a New York-i tőzsde összeomlása indította el a válságot."
  ),
  q(
    "Hol indult a tőzsdekrach?",
    ["New York", "London", "Berlin", "Párizs"],
    0,
    "A New York-i tőzsdén, majd átterjedt az egész világra."
  ),
  q(
    "Ki vezette be a New Dealt?",
    ["Roosevelt", "Wilson", "Truman", "Hoover"],
    0,
    "Franklin D. Roosevelt amerikai elnök vezette be 1933-ban."
  ),
  q(
    "Mi volt a New Deal egyik fontos eleme?",
    ["Közmunkaprogramok", "Gyarmatok szerzése", "Háború", "Tömeges kivándorlás"],
    0,
    "Közmunkák, állami beruházások és szociális intézkedések indultak."
  ),
  q(
    "Mit jelent a protekcionizmus?",
    ["Vámokkal védeni a hazai ipart", "Teljes szabadkereskedelem", "Mindent olcsóvá tenni", "Csak agrárpolitika"],
    0,
    "A válság idején az országok magas vámokkal próbálták védeni iparukat."
  ),
  q(
    "Mi volt a Dawes-terv célja?",
    ["Német jóvátétel fizetésének ütemezése", "Gyarmatok visszaadása", "Új szövetség", "Lengyelország támogatása"],
    0,
    "1924-ben ütemezték a német jóvátétel fizetését, amerikai kölcsönnel."
  ),
  q(
    "Mi volt a válság egyik következménye?",
    ["Munkanélküliség növekedése", "Azonnali fellendülés", "Infláció megszűnése", "Nincs változás"],
    0,
    "Milliók veszítették el a munkájukat."
  ),
  q(
    "Mi volt a New Deal egyik hatása?",
    ["Csökkent a munkanélküliség", "Megszűnt az ipar", "Gyarmatok szűntek meg", "Semmi"],
    0,
    "Állami programokkal sokan kaptak munkát."
  ),
  q(
    "Melyik évben kötötték a Briand–Kellogg-paktumot?",
    ["1928", "1919", "1933", "1935"],
    0,
    "1928-ban több ország lemondott a háborúról, de a gyakorlatban nem tartották be."
  ),
  q(
    "Miért volt hatástalan a Népszövetség?",
    ["Nem volt valódi ereje", "Túl erős volt", "USA irányította", "Svájc tiltotta"],
    0,
    "Nem volt katonai és gazdasági eszköze a döntések betartatására."
  ),
  q(
    "Mit jelent a hiperinfláció?",
    ["Árak rohamos emelkedése", "Árak csökkenése", "Nincs változás", "Árak befagyasztása"],
    0,
    "Weimarban hatalmas infláció söpört végig a '20-as években."
  ),
  q(
    "Miért terjedt el a tömegtermelés?",
    ["Olcsóbb lett a gyártás", "Mert mindenki kézzel akart dolgozni", "Csak háború miatt", "Semmi köze"],
    0,
    "Az ipari forradalom vívmányai (futószalag) lehetővé tették az olcsóbb termelést."
  ),
  q(
    "Mi volt a '29-es válság fő oka?",
    ["Túlzott hitelfelvétel és spekuláció", "Aranyhiány", "Katonai kudarc", "Természeti katasztrófa"],
    0,
    "Sokan részvényekkel spekuláltak, a tőzsde összeomlott."
  ),
  q(
    "Melyik ország vált a válság után vezető nagyhatalommá?",
    ["USA", "Olaszország", "Spanyolország", "Belgium"],
    0,
    "Az USA gazdasági és politikai súlya megnőtt, bár maga is szenvedett a válságtól."
  ),
  q(
    "Miért hatott a válság Európára is?",
    ["Szoros gazdasági kapcsolatok miatt", "Nem hatott", "Mert háború lett", "Csak Afrikára terjedt"],
    0,
    "Az amerikai válság a világkereskedelem miatt átterjedt Európára."
  ),
  q(
    "Mi volt a fő következménye a válságnak?",
    ["Szélsőséges pártok megerősödése", "Demokrácia terjedése", "Semmi", "Közös valuta"],
    0,
    "A válság kedvezett a szélsőjobboldali és szélsőbaloldali pártoknak."
  ),
  q(
    "Melyik ország volt a válság után az egyik legeladósodottabb?",
    ["Németország", "Svájc", "Svédország", "Norvégia"],
    0,
    "Németország súlyosan eladósodott, ez segítette Hitler felemelkedését."
  ),
  q(
    "Mi volt az Alphabet Agencies célja?",
    ["Munkahelyek teremtése", "Új gyarmatok", "Katonaállítás", "Semmi"],
    0,
    "Roosevelt programjai munkahelyeket hoztak létre az USA-ban."
  ),
  q(
    "Melyik ország vezetett be először jóléti állami intézkedéseket?",
    ["USA", "Németország", "Franciaország", "Japán"],
    0,
    "Az USA-ban a New Deal volt az első nagy program."
  ),
];

// --- Külpolitika, háború felé (20) ---
const INTERWAR_KULPOL: Question[] = [
  q(
    "Melyik évben történt az Anschluss?",
    ["1938", "1933", "1929", "1941"],
    0,
    "1938-ban Németország csatolta Ausztriát."
  ),
  q(
    "Mi volt a Müncheni egyezmény következménye?",
    ["A Szudéta-vidék Németországhoz került", "Franciaország felosztása", "Japán megszállása", "USA belépett a háborúba"],
    0,
    "1938-ban a nagyhatalmak engedtek Hitlernek."
  ),
  q(
    "Mikor remilitarizálták a Rajna-vidéket?",
    ["1936", "1925", "1930", "1938"],
    0,
    "Hitler megszegte a versailles-i békét és bevonult a Rajna-vidékre."
  ),
  q(
    "Mi volt a Molotov–Ribbentrop-paktum lényege?",
    ["Német–szovjet megnemtámadási egyezmény", "Brit–francia szövetség", "USA–Japán egyezmény", "Olasz–német unió"],
    0,
    "1939-ben a két diktatúra megnemtámadási szerződést kötött."
  ),
  q(
    "Mit tartalmazott a paktum titkos záradéka?",
    ["Kelet-Európa felosztását", "Afrika felosztását", "Nincs titkos záradék", "Gyarmatok megosztását"],
    0,
    "A titkos rész arról szólt, hogy Lengyelországot felosztják."
  ),
  q(
    "Mikor kezdődött a II. világháború?",
    ["1939. szeptember 1.", "1938. szeptember 30.", "1941. december 7.", "1945. május 8."],
    0,
    "Lengyelország megtámadásával kezdődött a háború."
  ),
  q(
    "Melyik országot támadta meg Olaszország 1935-ben?",
    ["Etiópiát", "Lengyelországot", "Franciaországot", "Belgiumot"],
    0,
    "Mussolini csapatai megszállták Etiópiát."
  ),
  q(
    "Melyik évben zajlott a spanyol polgárháború?",
    ["1936–1939", "1920–1923", "1939–1941", "1945–1948"],
    0,
    "A háborúban Németország és Olaszország is beavatkozott Franco oldalán."
  ),
  q(
    "Kik támogatták a spanyol nacionalistákat?",
    ["Németország és Olaszország", "Szovjetunió", "USA", "Franciaország"],
    0,
    "Hitler és Mussolini segítette Franco győzelmét."
  ),
  q(
    "Melyik nagyhatalom maradt ki a Müncheni egyezményből?",
    ["Szovjetunió", "Németország", "Franciaország", "Nagy-Britannia"],
    0,
    "A Szovjetuniót nem hívták meg, ami feszültséget okozott."
  ),
  q(
    "Mi volt a Locarnói egyezmény célja?",
    ["Nyugati határok biztosítása", "Keleti határok újrarajzolása", "Gyarmatfelosztás", "Új szövetség Japánnal"],
    0,
    "A locarnói szerződés garantálta Németország nyugati határait."
  ),

// --- Külpolitika, háború felé (20) ---  (folytatás + teljes)
  q(
    "Melyik évben történt az Anschluss?",
    ["1938", "1933", "1929", "1941"],
    0,
    "1938-ban Németország erőszak nélkül csatolta Ausztriát."
  ),
  q(
    "Mi volt a Müncheni egyezmény következménye?",
    ["A Szudéta-vidék Németországhoz került", "Franciaország felosztása", "Japán megszállása", "USA belépett a háborúba"],
    0,
    "1938 őszén a nagyhatalmak engedtek Hitlernek, hogy elkerüljék a háborút."
  ),
  q(
    "Mikor remilitarizálták a Rajna-vidéket?",
    ["1936", "1925", "1930", "1938"],
    0,
    "Hitler bevonult a korábban lefegyverzett zónába – próba a Nyugat felé."
  ),
  q(
    "Mi volt a Molotov–Ribbentrop-paktum lényege?",
    ["Német–szovjet megnemtámadási egyezmény", "Brit–francia szövetség", "USA–Japán egyezmény", "Olasz–német unió"],
    0,
    "1939 augusztusában aláírták; időt nyert mindkét fél."
  ),
  q(
    "Mit tartalmazott a paktum titkos záradéka?",
    ["Kelet-Európa felosztását", "Afrika felosztását", "Nincs titkos záradék", "Gyarmatok megosztását"],
    0,
    "A befolyási övezeteket rögzítette, Lengyelország felosztásával."
  ),
  q(
    "Mikor kezdődött a II. világháború?",
    ["1939. szeptember 1.", "1938. szeptember 30.", "1941. december 7.", "1945. május 8."],
    0,
    "Németország megtámadta Lengyelországot."
  ),
  q(
    "Melyik országot támadta meg Olaszország 1935-ben?",
    ["Etiópiát", "Lengyelországot", "Franciaországot", "Belgiumot"],
    0,
    "Az olasz hódítás a Népszövetség gyengeségét is jelezte."
  ),
  q(
    "Melyik évben zajlott a spanyol polgárháború?",
    ["1936–1939", "1920–1923", "1939–1941", "1945–1948"],
    0,
    "A konfliktus főpróbája volt a nagyhatalmaknak is."
  ),
  q(
    "Kik támogatták a spanyol nacionalistákat?",
    ["Németország és Olaszország", "Szovjetunió", "USA", "Franciaország"],
    0,
    "A köztársaságiakat a SZU és önkéntesek támogatták."
  ),
  q(
    "Melyik nagyhatalom maradt ki a Müncheni egyezményből?",
    ["Szovjetunió", "Németország", "Franciaország", "Nagy-Britannia"],
    0,
    "A SZU kimaradása bizalmatlanságot szült."
  ),
  q(
    "Mi volt a locarnói szerződések fő célja (1925)?",
    ["Nyugati határok biztosítása", "Keleti határok újrarajzolása", "Gyarmatfelosztás", "Közös hadsereg"],
    0,
    "A „locarnói szellem” rövid enyhülést hozott."
  ),
  q(
    "Mi történt Mandzsúriában a ’30-as évek elején?",
    ["Japán megszállta a térséget", "Németország hódított ott", "Brit gyarmat lett", "USA védnökséget vállalt"],
    0,
    "1931-től Japán terjeszkedett – a Népszövetség tehetetlen volt."
  ),
  q(
    "Mit jelent az appeasement politika?",
    ["Engedményekkel békíteni Hitlert", "Azonnali háborút indítani", "Gazdasági blokádot fenntartani", "Semlegességet hirdetni"],
    0,
    "Chamberlain politikája: engedmények árán békét remélt."
  ),
  q(
    "Mit jelzett a fegyverkezési verseny fokozódása?",
    ["Közeledett a háború", "Tartós béke jön", "Teljes leszerelés", "Csak a flotta bővül"],
    0,
    "A hadseregek és fegyverek gyors bővítése háborús előszel volt."
  ),
  q(
    "Mi volt a Kisantant célja?",
    ["Trianoni határok védelme", "Gyarmatok szerzése", "Németország támogatása", "Szovjetunió csatlakoztatása"],
    0,
    "Csehszlovákia, Románia és Jugoszlávia együttműködése a status quo védelmére."
  ),
  q(
    "Mit jelent a demilitarizált övezet a Rajna-vidéken?",
    ["Katonaság tilalma", "Csak légierő lehet", "Csak helyi milícia", "Teljes fegyverkezés"],
    0,
    "Versailles írta elő; megsértése fontos lépcső volt."
  ),
  q(
    "Miért volt gyenge a Népszövetség?",
    ["Nem volt kikényszerítő ereje", "Túl erős hadserege volt", "USA vezette és túl kemény volt", "Csak Afrikára vonatkozott"],
    0,
    "Szankciókat alig tudott érvényesíteni; USA sem volt tag."
  ),
  q(
    "Melyik állam NEM volt tengelyhatalom?",
    ["Franciaország", "Németország", "Olaszország", "Japán"],
    0,
    "A tengely: Berlin–Róma–Tokió."
  ),
  q(
    "Melyik esemény NEM a háborút közvetlenül megelőző lépés?",
    ["Pearl Harbor", "Anschluss", "Müncheni egyezmény", "Rajna-vidék remilitarizálása"],
    0,
    "Pearl Harbor 1941-ben történt, már a háború alatt."
  ),
  q(
    "Miért volt fontos a Szudéta-vidék?",
    ["Etnikai német többség és erődítések", "Olajmezők", "Gyarmat", "Tengeri kikötő"],
    0,
    "Csehszlovákia védelme gyengült az átadással."
  ),
];
// ===============================
// II. VILÁGHÁBORÚ (WW2) – 3×20
// ===============================

// --- Hadiesemények (20) ---
const WW2_HADI: Question[] = [
  q(
    "Mikor támadta meg Németország Lengyelországot?",
    ["1939. szeptember 1.", "1938. szeptember 30.", "1940. május 10.", "1941. június 22."],
    0,
    "1939. szeptember 1-jén kezdődött a II. világháború Lengyelország megtámadásával."
  ),
  q(
    "Miért lépett be Anglia és Franciaország a háborúba 1939-ben?",
    ["Lengyelország megtámadása miatt", "Pearl Harbor miatt", "Rajna-vidék remilitarizálása miatt", "Müncheni egyezmény miatt"],
    0,
    "Lengyelország megtámadása után Anglia és Franciaország hadat üzent Németországnak."
  ),
  q(
    "Melyik évben kapitulált Franciaország?",
    ["1940", "1939", "1941", "1942"],
    0,
    "Franciaország 1940 júniusában adta meg magát Németországnak."
  ),
  q(
    "Mi volt a brit légi csata?",
    ["Anglia elleni német légitámadások", "Spanyolország lerohanása", "Afrikai front", "Oroszország megszállása"],
    0,
    "1940-ben Németország légicsatákat vívott Anglia ellen, de nem tudta legyőzni."
  ),
  q(
    "Mikor indult a Barbarossa-hadművelet?",
    ["1941. június 22.", "1939. szeptember 1.", "1942. február 2.", "1940. május 10."],
    0,
    "1941 nyarán Németország megtámadta a Szovjetuniót."
  ),
  q(
    "Mi volt a Pearl Harbor elleni támadás dátuma?",
    ["1941. december 7.", "1940. június 10.", "1942. július 4.", "1945. május 8."],
    0,
    "Japán megtámadta az amerikai flottát, az USA belépett a háborúba."
  ),
  q(
    "Hol zajlott a sztálingrádi csata?",
    ["Szovjetunióban", "Lengyelországban", "Franciaországban", "Afrikában"],
    0,
    "1942–43 fordulóján a Szovjetunióban fordult meg a háború menete."
  ),
  q(
    "Hol történt a világtörténelem legnagyobb tankcsatája?",
    ["Kurszk", "El-Alamein", "Normandia", "Ardennek"],
    0,
    "1943-ban Kurszknál hatalmas páncélos ütközet zajlott."
  ),
  q(
    "Mi volt a D-nap?",
    ["Normandiai partraszállás", "Pearl Harbor", "Stalingrád ostroma", "El-Alamein"],
    0,
    "1944. június 6-án a szövetségesek partra szálltak Normandiában."
  ),
  q(
    "Melyik évben esett el Berlin?",
    ["1945", "1944", "1943", "1942"],
    0,
    "1945 tavaszán a szovjet hadsereg bevette Berlint."
  ),
  q(
    "Mikor dobtak atombombát Hirosimára?",
    ["1945. augusztus 6.", "1944. június 6.", "1943. február 2.", "1942. december 7."],
    0,
    "Az első atombombát 1945 augusztusában vetették be Japán ellen."
  ),
  q(
    "Mikor ért véget a háború Európában?",
    ["1945. május 8.", "1944. június 6.", "1943. február 2.", "1945. szeptember 2."],
    0,
    "1945. május 8-án Németország feltétel nélkül kapitulált."
  ),
  q(
    "Hol állították meg a németeket Észak-Afrikában?",
    ["El-Alamein", "Tripoli", "Kairó", "Tobruk"],
    0,
    "1942-ben az angol Montgomery tábornok győzelmet aratott El-Alameinnél."
  ),
  q(
    "Melyik volt a háború utolsó nagy német offenzívája?",
    ["Ardennek", "Normandia", "Stalingrád", "Kurszk"],
    0,
    "1944 telén a németek utolsó nagy támadását indították az Ardennekben."
  ),
  q(
    "Mi volt a Midway-i csata jelentősége?",
    ["Japán veresége a Csendes-óceánon", "Német győzelem Anglia felett", "Szovjet győzelem Moszkvánál", "Olasz vereség Afrikában"],
    0,
    "1942-ben Midway fordította meg a csendes-óceáni háborút."
  ),
  q(
    "Meddig tartott Leningrád ostroma?",
    ["1941–1944", "1940–1941", "1943–1945", "1939–1940"],
    0,
    "Közel 900 napig tartott a város ostroma."
  ),
  q(
    "Mikor volt a moszkvai csata?",
    ["1941–1942", "1939", "1943", "1944"],
    0,
    "A szovjetek megállították a németeket Moszkva előtt."
  ),
  q(
    "Hol zajlott az olaszországi partraszállás 1943-ban?",
    ["Szicília és Anzio", "Normandia", "Berlin", "Krím"],
    0,
    "A szövetségesek Szicíliában és Anziónál szálltak partra."
  ),
  q(
    "Mikor fejeződött be a háború Japánban?",
    ["1945. szeptember 2.", "1945. május 8.", "1944. június 6.", "1943. február 2."],
    0,
    "Japán 1945 szeptemberében írta alá a kapitulációt."
  ),
];

// --- Hátország és gazdaság (20) ---
const WW2_HATTER: Question[] = [
  q(
    "Mit jelent a totális háború?",
    ["Az egész társadalom és gazdaság a háborút szolgálja", "Csak a katonák harcolnak", "Csak rövid ideig tart", "Csak a fronton van hatása"],
    0,
    "A civil lakosság és a gazdaság is teljesen a hadviselést szolgálta."
  ),
  q(
    "Mi volt a Holokauszt?",
    ["Zsidók tömeges kiirtása", "Új vallási mozgalom", "Fegyverzetfejlesztés", "Faluépítési program"],
    0,
    "A náci rendszer több millió zsidót és más kisebbséget pusztított el."
  ),
  q(
    "Milyen rendszerrel szabályozták az élelmiszert a hátországban?",
    ["Jegyrendszerrel", "Szabad piac", "Közös raktár", "Korlátlan ellátás"],
    0,
    "Jegyekkel lehetett vásárolni, hogy igazságosan osszák el a keveset."
  ),
  q(
    "Melyik ország segítette a szövetségeseket Lend-Lease programmal?",
    ["USA", "Németország", "Japán", "Olaszország"],
    0,
    "Az USA fegyverekkel és anyagokkal segítette a szövetségeseket."
  ),
  q(
    "Miért dolgoztak sok nő a gyárakban?",
    ["A férfiak a fronton voltak", "Hobbi", "Több pénzért", "Mert megszűnt az iskola"],
    0,
    "A férfiak háborúztak, így a nők vették át a termelést."
  ),
  q(
    "Mi volt a propaganda szerepe?",
    ["Lakosság lelkesítése", "Ellenzék erősítése", "Kormány gyengítése", "Árak csökkentése"],
    0,
    "Plakátok, filmek, rádió segítségével tartották fenn a háborús morált."
  ),
  q(
    "Miért jöttek létre partizánmozgalmak?",
    ["Megszállás ellen harcoltak", "Csak játék volt", "Munkanélküliek szórakozása", "Katonai kiképzés"],
    0,
    "Elfoglalt területeken civilek és katonák is harcoltak titokban."
  ),
  q(
    "Hol zajlott a nürnbergi per?",
    ["Németországban", "Franciaországban", "Olaszországban", "Japánban"],
    0,
    "A fő háborús bűnösöket Németországban, Nürnbergben ítélték el."
  ),
  q(
    "Melyik ország ipara lett a legerősebb a háborúban?",
    ["USA", "Németország", "Japán", "Olaszország"],
    0,
    "Az USA hatalmas ipari kapacitása döntő volt."
  ),
  q(
    "Mi volt a feketepiac oka?",
    ["Hiánygazdaság", "Bőség", "Szabadkereskedelem", "Túltermelés"],
    0,
    "A hiány miatt sokan illegálisan szereztek be árut."
  ),
  q(
    "Milyen új fegyver jelent meg a háborúban?",
    ["Atombomba", "Szablya", "Íj", "Csúzli"],
    0,
    "Az USA 1945-ben atombombát vetett be."
  ),
  q(
    "Miért volt fontos a rádió?",
    ["Gyors hírközlés", "Szórakozás csak", "Nincs jelentősége", "Csak a fronton használták"],
    0,
    "A rádió gyorsan eljuttatta a híreket és propagandát."
  ),
  q(
    "Miért bombázták a városokat?",
    ["Ipari központok tönkretétele", "Szórakozás", "Semmiért", "Csak a hadsereg edzése miatt"],
    0,
    "Az ipari városok lerombolása gyengítette az ellenséget."
  ),
  q(
    "Miért volt szükség élelmiszerjegyekre?",
    ["Hiány volt", "Bőség volt", "Nem akartak pénzt használni", "Csak a gyerekeknek kellett"],
    0,
    "Kevés volt az élelmiszer, így adagolni kellett."
  ),
  q(
    "Mi volt a gettó?",
    ["Elzárt városrész zsidóknak", "Katonai tábor", "Ipari központ", "Pihenőhely"],
    0,
    "A zsidó lakosságot kényszerrel ide költöztették."
  ),
  q(
    "Mit jelent a deportálás?",
    ["Emberek erőszakos elszállítása", "Kirándulás", "Utazás nyaralni", "Új munkahely"],
    0,
    "Sok zsidót koncentrációs táborokba hurcoltak."
  ),
  q(
    "Miért volt nehéz a hátországban az élet?",
    ["Bombázások és hiányok miatt", "Semmi miatt", "Csak mert hosszú volt", "Túl sok étel volt"],
    0,
    "A háború az otthonokat is sújtotta."
  ),
  q(
    "Mi volt a koncentrációs tábor?",
    ["Kényszermunka és megsemmisítés helye", "Katonai kiképző tábor", "Iskola", "Színház"],
    0,
    "A náci rendszer a foglyokat ide hurcolta, sokan nem élték túl."
  ),
  q(
    "Miért volt fontos a szövetségesek összefogása?",
    ["Egymást kiegészítve erősebbek voltak", "Mindenki külön utat járt", "Nem működött", "Csak papíron létezett"],
    0,
    "A közös erőforrások döntő szerepet játszottak a győzelemben."
  ),
];

// --- Következmények, békék (20) ---
const WW2_KOV: Question[] = [
  q(
    "Mikor alapították meg az ENSZ-et?",
    ["1945-ben", "1939-ben", "1955-ben", "1961-ben"],
    0,
    "Az ENSZ 1945-ben alakult San Franciscóban a béke fenntartására."
  ),
  q(
    "Mi volt a jaltai konferencia fő témája?",
    ["Háború utáni rendezés", "Új gyarmatok", "Közös pénz", "Sportrendezvény"],
    0,
    "Churchill, Roosevelt és Sztálin a világ felosztásáról tárgyaltak."
  ),
  q(
    "Mi volt a potsdami konferencia fő döntése?",
    ["Németország megszállási övezetekre osztása", "USA–Japán szövetség", "Új európai unió", "Közös valuta"],
    0,
    "Németországot szövetséges megszállási zónákra osztották."
  ),
  q(
    "Melyik évben jött létre a NATO?",
    ["1949", "1945", "1955", "1961"],
    0,
    "A NATO 1949-ben alakult a szovjet fenyegetés ellen."
  ),
  q(
    "Melyik évben alakult meg a Varsói Szerződés?",
    ["1955", "1949", "1962", "1975"],
    0,
    "A Varsói Szerződés a keleti blokk katonai szövetsége volt."
  ),
  q(
    "Mikor kiáltották ki Izrael államát?",
    ["1948", "1945", "1956", "1967"],
    0,
    "1948-ban a zsidó állam megalakult, ami sok konfliktust váltott ki."
  ),
  q(
    "Hány áldozata volt kb. a holokausztnak?",
    ["6 millió zsidó", "1 millió", "12 millió", "100 ezer"],
    0,
    "A náci népirtás során kb. 6 millió zsidót öltek meg."
  ),
  q(
    "Mit jelentett a denacifikáció?",
    ["Németország megtisztítása a náci eszméktől", "Új nácik alapítása", "Szovjetunió bukása", "Gyarmatok megszerzése"],
    0,
    "A háború után a náci ideológia eltávolítása zajlott."
  ),
  q(
    "Melyik nagyhatalom nem volt tagja a Népszövetségnek?",
    ["USA", "Németország", "Franciaország", "Japán"],
    0,
    "Az USA nem lépett be, így gyenge maradt a szervezet."
  ),
  q(
    "Melyik nagyhatalmak lettek az ENSZ BT állandó tagjai?",
    ["USA, SZU, Nagy-Britannia, Franciaország, Kína", "USA, Németország, Japán, Olaszország, Franciaország", "USA, Kanada, Ausztrália, India, Brazília", "UK, Spanyolország, Portugália, Hollandia, Belgium"],
    0,
    "Az öt állandó tag vétójoggal rendelkezik."
  ),
  q(
    "Mi volt a Marshall-terv célja?",
    ["Európa újjáépítése", "Új háború indítása", "Gyarmatok felszámolása", "Tengeri kereskedelem lezárása"],
    0,
    "Az USA segélyprogramja Európa talpra állítására."
  ),
  q(
    "Mi volt a nürnbergi perek célja?",
    ["Háborús bűnösök felelősségre vonása", "Új alkotmány írása", "Új államok létrehozása", "Új fegyverek gyártása"],
    0,
    "A náci vezetőket állították bíróság elé."
  ),
// --- Következmények, békék (20) ---
  q(
    "Mikor alapították meg az ENSZ-et?",
    ["1945-ben", "1939-ben", "1955-ben", "1961-ben"],
    0,
    "Az ENSZ 1945-ben jött létre a béke fenntartására, székhelye New York lett."
  ),
  q(
    "Mi volt a jaltai konferencia fő témája?",
    ["Háború utáni rendezés", "Új gyarmatok szerzése", "Sportesemény szervezése", "Új pénznem bevezetése"],
    0,
    "1945 februárjában Roosevelt, Churchill és Sztálin a háború utáni Európáról döntöttek."
  ),
  q(
    "Mi volt a potsdami konferencia fő döntése?",
    ["Németország megszállási övezetekre osztása", "Japán csatlakozása a szövetségesekhez", "USA–SZU szövetség megkötése", "Új közös európai hadsereg létrehozása"],
    0,
    "1945 nyarán Németországot négy megszállási övezetre osztották."
  ),
  q(
    "Melyik évben jött létre a NATO?",
    ["1949", "1945", "1955", "1961"],
    0,
    "A NATO 1949-ben alakult a nyugati országok katonai szövetségeként."
  ),
  q(
    "Melyik évben alakult meg a Varsói Szerződés?",
    ["1955", "1949", "1962", "1975"],
    0,
    "A keleti blokk katonai szövetsége 1955-ben jött létre, válaszul a NATO-ra."
  ),
  q(
    "Mikor kiáltották ki Izrael államát?",
    ["1948", "1945", "1956", "1967"],
    0,
    "1948-ban jött létre Izrael, ami azonnal háborúhoz vezetett a szomszédos arab államokkal."
  ),
  q(
    "Hány áldozata volt kb. a holokausztnak?",
    ["6 millió zsidó", "1 millió", "12 millió", "100 ezer"],
    0,
    "Kb. 6 millió zsidót öltek meg a náci népirtás során."
  ),
  q(
    "Mit jelentett a denacifikáció?",
    ["Németország megtisztítása a náci eszméktől", "Náci pártok megerősítése", "Szovjet rendszer bevezetése", "Új háború kirobbantása"],
    0,
    "A háború után Németországban felszámolták a náci szervezeteket és ideológiát."
  ),
  q(
    "Melyik ország nem volt tagja a Népszövetségnek?",
    ["USA", "Németország", "Franciaország", "Japán"],
    0,
    "Az USA sosem csatlakozott, ez gyengítette a szervezetet."
  ),
  q(
    "Melyik nagyhatalmak lettek az ENSZ BT állandó tagjai?",
    ["USA, SZU, Nagy-Britannia, Franciaország, Kína", "USA, Németország, Japán, Olaszország, Franciaország", "USA, Kanada, India, Brazília, Ausztrália", "UK, Spanyolország, Portugália, Hollandia, Belgium"],
    0,
    "Az öt állandó tag vétójoggal rendelkezik: USA, SZU/RU, Nagy-Britannia, Franciaország, Kína."
  ),
  q(
    "Mi volt a Marshall-terv célja?",
    ["Európa újjáépítése", "Új gyarmatok szerzése", "Háború indítása", "Tengeri blokád kialakítása"],
    0,
    "Az USA gazdasági segítséget nyújtott Nyugat-Európa újjáépítéséhez."
  ),
  q(
    "Mi volt a nürnbergi perek célja?",
    ["Háborús bűnösök felelősségre vonása", "Új államok létrehozása", "NATO megalapítása", "Japán szövetségbe vonása"],
    0,
    "A náci vezetőket állították bíróság elé."
  ),
  q(
    "Miért kezdődött a hidegháború?",
    ["Nyugat és Kelet ellentétei miatt", "Új gyarmatok szerzése miatt", "Személyes viták miatt", "Kereskedelmi háború miatt"],
    0,
    "A szovjet és amerikai érdekek ütközése miatt kétpólusú világ alakult ki."
  ),
  q(
    "Mit jelentett a 'vasfüggöny' kifejezés?",
    ["Kelet és Nyugat elválasztása", "Új fegyver", "Színházi darab", "Titkos szövetség"],
    0,
    "Churchill nevezte így a két blokk közötti határvonalat."
  ),
  q(
    "Melyik szerződés alapozta meg Nyugat-Európa gazdasági újjáépítését?",
    ["Marshall-terv", "Trianon", "Varsói Szerződés", "Müncheni egyezmény"],
    0,
    "Az amerikai segélyprogram volt a gazdasági fellendülés alapja."
  ),
  q(
    "Melyik ország lett két részre osztva a háború után?",
    ["Németország", "Franciaország", "Olaszország", "Spanyolország"],
    0,
    "Németországot keleti és nyugati részre osztották."
  ),
  q(
    "Miért jött létre az Európai Szén- és Acélközösség?",
    ["Háború megelőzése gazdasági együttműködéssel", "Fegyverkezés fokozása", "Új gyarmatbirodalom", "Világvallás alapítása"],
    0,
    "A közös gazdaságpolitika megalapozta az Európai Uniót."
  ),
  q(
    "Mit jelent a 'hidegháború' kifejezés?",
    ["Fegyveres háború nélkül zajló szembenállás", "Jegesmedvék háborúja", "Középkori küzdelmek", "Afrikai háborúk"],
    0,
    "A szovjet és amerikai blokk politikai és katonai versengését jelentette."
  ),
  q(
    "Miért osztották fel Európát befolyási övezetekre?",
    ["A nagyhatalmak így biztosították érdekeiket", "Mert unalomból", "Mert nem volt térképük", "Mert mindenki mindent akart"],
    0,
    "A győztesek megállapodtak, ki melyik térséget ellenőrzi."
  ),
  q(
    "Mi volt a hidegháború egyik első válsága?",
    ["Berlini blokád", "Kubai rakétaválság", "Koreai háború", "Vietnam-háború"],
    0,
    "1948–49-ben a SZU elzárta Nyugat-Berlint, a szövetségesek légi híddal segítettek."
  ),
];
// ===============================
// MAGYARORSZÁG A 20. SZÁZADBAN (HU20c) – 3×20
// ===============================

// --- Trianon és két vh között (20) ---
const HU_Trianon_Interwar: Question[] = [
  q(
    "Mikor írták alá a trianoni békét?",
    ["1920. június 4.", "1919. június 28.", "1921. március 15.", "1938. november 2."],
    0,
    "1920. június 4-én írták alá a versailles-i Nagy-Trianon palotában."
  ),
  q(
    "Mekkora területet veszített Magyarország Trianonban?",
    ["Kétharmadát", "Egyharmadát", "Semmit", "Az egész országot"],
    0,
    "A történelmi Magyarország területének kb. kétharmadát elveszítette."
  ),
  q(
    "Ki volt a miniszterelnök a konszolidáció idején?",
    ["Bethlen István", "Károlyi Mihály", "Gömbös Gyula", "Teleki Pál"],
    0,
    "Bethlen István 1921–1931 között vezette az országot, stabilizálva a helyzetet."
  ),
  q(
    "Mikor vezették be a pengőt?",
    ["1927-ben", "1919-ben", "1931-ben", "1946-ban"],
    0,
    "A pengő 1927-től váltotta a koronát."
  ),
  q(
    "Melyik állam NEM volt a kisantant tagja?",
    ["Ausztria", "Csehszlovákia", "Románia", "Jugoszlávia"],
    0,
    "A kisantant célja a trianoni határok védelme volt Magyarországgal szemben."
  ),
  q(
    "Mi volt a revíziós politika célja?",
    ["Elveszített területek visszaszerzése", "Új gyarmatok szerzése", "Szabad kereskedelem", "Új pénznem bevezetése"],
    0,
    "A politikai cél a trianoni határok módosítása volt."
  ),
  q(
    "Melyik évben hozták meg a numerus clausus törvényt?",
    ["1920", "1935", "1912", "1941"],
    0,
    "1920-ban korlátozták a zsidó hallgatók egyetemi arányát."
  ),
  q(
    "Ki volt Gömbös Gyula?",
    ["Miniszterelnök a '30-as években", "Színházi rendező", "Katona a Donnál", "Királyi tanácsos"],
    0,
    "Gömbös Gyula 1932–36 között miniszterelnökként fasiszta mintájú rendszert épített."
  ),
  q(
    "Mit jelentett a bledi egyezmény (1938)?",
    ["Fegyverkezési engedmény Magyarországnak", "Új szövetség Jugoszláviával", "Szovjetunióval kötött egyezmény", "USA-val kötött béke"],
    0,
    "A környező országok elismerték Magyarország fegyverkezési jogát."
  ),
  q(
    "Melyik területet kapta vissza Magyarország az első bécsi döntésben?",
    ["Felvidék déli része", "Erdély", "Délvidék", "Burgenland"],
    0,
    "1938 novemberében a Felvidék déli része került vissza Magyarországhoz."
  ),
  q(
    "Melyik területet kapta vissza a második bécsi döntésben?",
    ["Észak-Erdélyt", "Felvidéket", "Burgenlandot", "Dalmáciát"],
    0,
    "1940-ben Észak-Erdélyt csatolták vissza."
  ),
  q(
    "Mit jelentett a revízió jelszava?",
    ["Csonka Magyarország nem ország!", "Több is veszett Mohácsnál", "Éljen a király!", "Egy ország – egy nép"],
    0,
    "A trianoni veszteségek visszaszerzését hirdette."
  ),
  q(
    "Mikor alakult a Magyar Nemzeti Bank?",
    ["1924", "1919", "1931", "1946"],
    0,
    "A jegybank 1924-ben jött létre a pénzügyi stabilizáció részeként."
  ),
  q(
    "Mikor fogadták el az első zsidótörvényt?",
    ["1938", "1935", "1941", "1922"],
    0,
    "Az első zsidótörvény 1938-ban korlátozta a zsidók arányát az értelmiségi pályákon."
  ),
  q(
    "Mi volt a gazdasági válság hatása Magyarországra?",
    ["Munkanélküliség és agrárválság", "Azonnali fellendülés", "Semmi hatás", "Csak ipari növekedés"],
    0,
    "Az 1929-es válság erősen sújtotta a magyar gazdaságot."
  ),
  q(
    "Mit jelentett a 'kettős külpolitika'?",
    ["Közeledés Németországhoz és Olaszországhoz", "Szövetség USA-val", "Elzárkózás mindenkitől", "Semlegesség"],
    0,
    "Magyarország egyszerre próbált több nagyhatalomhoz közeledni, de főleg a tengelyhez kötődött."
  ),
  q(
    "Melyik kulturális folyóirat volt meghatározó a két vh között?",
    ["Nyugat", "Magyar Hírlap", "Kurír", "Esti Újság"],
    0,
    "A Nyugat irodalmi folyóirat volt a korszak meghatározó orgánuma."
  ),
  q(
    "Miért volt fontos a vasútfejlesztés?",
    ["Kereskedelem és közlekedés javítása", "Csak a hadsereg miatt", "Nincs jelentősége", "Csak turizmus"],
    0,
    "A közlekedés fejlesztése gazdasági és katonai okból is fontos volt."
  ),
  q(
    "Miért volt erős a revíziós propaganda?",
    ["Trianon igazságtalansága miatt", "Mert mindenki elégedett volt", "Nem volt hatása", "Csak szórakoztatás"],
    0,
    "A veszteségek miatt sokan támogatták a terület-visszaszerzést."
  ),
];

// --- II. világháború és megszállás (20) ---
const HU_WW2_Megs: Question[] = [
  q(
    "Mikor lépett be Magyarország a II. világháborúba?",
    ["1941. június 27.", "1939. szeptember 1.", "1944. március 19.", "1940. augusztus 30."],
    0,
    "A Kassa elleni bombázás után Magyarország hadat üzent a Szovjetuniónak."
  ),
  q(
    "Mi volt a doni katasztrófa?",
    ["A 2. magyar hadsereg pusztulása 1943-ban", "Budapest ostroma", "Pearl Harbor támadása", "Kassa bombázása"],
    0,
    "1943-ban a Don-kanyarnál a 2. magyar hadsereg súlyos vereséget szenvedett."
  ),
  q(
    "Mikor szállták meg a németek Magyarországot?",
    ["1944. március 19.", "1941. június 27.", "1940. május 10.", "1945. április 4."],
    0,
    "A német hadsereg 1944 márciusában megszállta Magyarországot."
  ),
  q(
    "Mikor volt a nyilas hatalomátvétel?",
    ["1944. október 15.", "1943. február 2.", "1941. december 7.", "1945. május 8."],
    0,
    "Szálasi Ferenc és a nyilas párt került hatalomra."
  ),
  q(
    "Ki volt Horthy Miklós?",
    ["Magyarország kormányzója 1920–1944 között", "Miniszterelnök", "Királlyá koronázott uralkodó", "Parasztvezér"],
    0,
    "Horthy Miklós kormányzóként vezette az országot."
  ),
  q(
    "Mi volt a második bécsi döntés következménye?",
    ["Észak-Erdély visszakerült Magyarországhoz", "Felvidék átadása", "Burgenland visszacsatolása", "Dalmácia megszerzése"],
    0,
    "1940-ben Észak-Erdély Magyarországhoz került."
  ),
  q(
    "Mikor zajlottak a deportálások fő időszaka?",
    ["1944 tavasz–nyár", "1938", "1942", "1945"],
    0,
    "A német megszállás után százezreket deportáltak koncentrációs táborokba."
  ),
  q(
    "Mikor ért véget Budapest ostroma?",
    ["1945 februárjában", "1944 októberében", "1943 januárjában", "1945 szeptemberében"],
    0,
    "A főváros 1945 februárjára került szovjet kézre."
  ),
  q(
    "Mi volt az Aranyvonat?",
    ["Elhurcolt zsidó vagyon szállítása", "Új gyorsvonat", "Aranybányák termelése", "Valutaváltó program"],
    0,
    "A háború végén a náci hatóságok magyar zsidóktól elvett kincseket szállítottak el."
  ),
  q(
    "Mi történt 1944. október 15-én?",
    ["Nyilas hatalomátvétel", "Pearl Harbor", "Don-katasztrófa", "Trianon aláírása"],
    0,
    "Horthy sikertelen kiugrási kísérlete után a nyilasok átvették a hatalmat."
  ),
  q(
    "Ki volt Szálasi Ferenc?",
    ["Nyilas vezető", "Miniszterelnök", "Király", "Irodalmár"],
    0,
    "Szálasi a nyilas párt vezetőjeként került hatalomra."
  ),
  q(
    "Mi volt a fegyverszünet dátuma Magyarország számára?",
    ["1945. január", "1944. október", "1946. május", "1947. február"],
    0,
    "Magyarország 1945 januárjában írt alá fegyverszünetet a szovjetekkel."
  ),
  q(
    "Mit jelentett a megszállás a hátország számára?",
    ["Bombázások és nyomor", "Bőség", "Semmi", "Csak élelmiszerfelesleg"],
    0,
    "A német megszállás és a háború súlyosan érintette a lakosságot."
  ),
  q(
    "Miért volt jelentős a kassai bombázás?",
    ["Ezután hadat üzent a SZU-nak Magyarország", "Azonnali békét hozott", "USA belépett", "Semmi"],
    0,
    "A vitatott hátterű bombázás ürügyet adott a hadbalépésre."
  ),
  q(
    "Miért volt jelentős a 2. magyar hadsereg veresége?",
    ["Súlyos emberveszteség", "Győzelem a Donnál", "Semmi hatás", "Új területek nyerése"],
    0,
    "Tízezrek haltak meg vagy estek fogságba."
  ),
  q(
    "Miért szállták meg a németek Magyarországot?",
    ["Kiugrás megakadályozása", "Új szövetség", "Semlegesség védelme", "Csak katonai gyakorlatozás"],
    0,
    "Horthy kiugrási kísérletét akarták megakadályozni."
  ),
  q(
    "Melyik ország szabadította fel Magyarországot?",
    ["Szovjetunió", "USA", "Franciaország", "Japán"],
    0,
    "A szovjet hadsereg 1945 tavaszára felszabadította az országot."
  ),
  q(
    "Mikor fejeződött be a II. világháború Magyarországon?",
    ["1945. április 4.", "1944. október 15.", "1943. január", "1945. szeptember 2."],
    0,
    "1945. április 4-én fejeződtek be a harcok."
  ),
  q(
    "Miért volt tragikus a holokauszt Magyarországon?",
    ["Százezreket deportáltak és öltek meg", "Nem történt semmi", "Csak gazdasági gond volt", "Bőség lett"],
    0,
    "A magyar zsidóság többségét deportálták és elpusztították."
  ),
];

// --- Kommunista diktatúra (20) ---
const HU_Kommunista: Question[] = [
  q(
    "Melyik évben államosították a nagyobb ipari üzemeket?",
    ["1948-ban", "1945-ben", "1956-ban", "1962-ben"],
    0,
    "1948-ban államosították az ipar nagy részét."
  ),
  q(
    "Mit jelentett az ÁVH?",
    ["Államvédelmi Hatóság", "Általános Városi Hivatal", "Állami Vagyon Hivatala", "Áruelosztó Hálózat"],
    0,
    "Az ÁVH a kommunista diktatúra titkosrendőrsége volt."
  ),
  q(
    "Mikor volt az 1956-os forradalom?",
    ["1956. október 23.", "1955. május 14.", "1961. augusztus 13.", "1949. augusztus 20."],
    0,
    "1956. október 23-án kezdődött a budapesti diáktüntetéssel."
  ),
  q(
    "Mikor verték le a forradalmat?",
    ["1956. november 4.", "1956. október 28.", "1957. január 1.", "1956. december 24."],
    0,
    "Szovjet tankok november 4-én leverték a forradalmat."
  ),
  q(
    "Mit jelentett a megtorlás 1956 után?",
    ["Kivégzések és börtönbüntetések", "Semmi", "Szabadság növekedése", "Demokrácia"],
    0,
    "Sokakat kivégeztek, bebörtönöztek vagy emigrálni kényszerültek."
  ),
  q(
    "Ki lett az új vezető 1956 után?",
    ["Kádár János", "Rákosi Mátyás", "Nagy Imre", "Horthy Miklós"],
    0,
    "Kádár János 1956 után került hatalomra, szovjet támogatással."
  ),
  q(
    "Mit nevezünk gulyáskommunizmusnak?",
    ["Kádár-kori viszonylagos jólétet", "Ételreceptet", "Forradalmat", "Új pártot"],
    0,
    "A '70–80-as években viszonylag jobb életszínvonal volt a diktatúra mellett."
  ),
  q(
    "Mikor vezették be az új gazdasági mechanizmust?",
    ["1968", "1956", "1975", "1989"],
    0,
    "1968-ban indult el némi piacgazdasági elem a szocializmusban."
  ),
  q(
    "Mit jelent a tervgazdaság?",
    ["Állami tervek szabják meg a termelést", "Minden piaci alapú", "Nincs szabályozás", "Csak a parasztok döntenek"],
    0,
    "A központi párt döntötte el, mennyit kell termelni."
  ),
  // --- Kommunista diktatúra (20) ---  (teljes, 8.-os szint)
  q(
    "Melyik évben államosították a nagyobb ipari üzemeket?",
    ["1948-ban", "1945-ben", "1956-ban", "1962-ben"],
    0,
    "1948-ban a kommunista vezetés állami tulajdonba vette a nagyobb gyárakat és üzemeket."
  ),
  q(
    "Mit jelentett az ÁVH?",
    ["Államvédelmi Hatóság", "Általános Városi Hivatal", "Állami Vagyon Hivatala", "Áruelosztó Hálózat"],
    0,
    "Az ÁVH a kommunista diktatúra titkosrendőrsége volt, megfélemlítéssel tartotta fenn a rendszert."
  ),
  q(
    "Mikor volt az 1956-os forradalom kezdete?",
    ["1956. október 23.", "1955. május 14.", "1961. augusztus 13.", "1949. augusztus 20."],
    0,
    "1956. október 23-án a diákok tüntetése országos szabadságharccá vált."
  ),
  q(
    "Mikor verték le a forradalmat?",
    ["1956. november 4.", "1956. október 28.", "1957. január 1.", "1956. december 24."],
    0,
    "1956. november 4-én szovjet csapatok leverték a forradalmat."
  ),
  q(
    "Mit jelentett a megtorlás 1956 után?",
    ["Kivégzések és börtönbüntetések", "Semmi", "Teljes sajtószabadság", "Királyság visszaállítása"],
    0,
    "Sokakat elítéltek, bebörtönöztek vagy emigrációra kényszerítettek."
  ),
  q(
    "Ki lett az új vezető 1956 után?",
    ["Kádár János", "Rákosi Mátyás", "Nagy Imre", "Horthy Miklós"],
    0,
    "Kádár János szovjet támogatással került hatalomra, hosszú ideig irányította az országot."
  ),
  q(
    "Mit nevezünk gulyáskommunizmusnak?",
    ["Kádár-kori viszonylagos jólétet", "Egy ételt", "Forradalmat", "Új pártot"],
    0,
    "A ’70–80-as években az életszínvonal mérsékelten emelkedett, miközben a rendszer diktatúra maradt."
  ),
  q(
    "Mikor vezették be az új gazdasági mechanizmust?",
    ["1968", "1956", "1975", "1989"],
    0,
    "1968-ban óvatos piaci elemeket engedtek a tervgazdaságba."
  ),
  q(
    "Mit jelent a tervgazdaság?",
    ["Állami tervek szabják meg a termelést", "Szabadpiaci verseny", "Teljes szabályozás nélkül", "Csak a parasztok döntenek"],
    0,
    "A központi tervek határozták meg, mi mennyit készüljön a gazdaságban."
  ),
  q(
    "Mikor kiáltották ki a (III.) Magyar Köztársaságot?",
    ["1989. október 23.", "1956. november 4.", "1949. augusztus 20.", "1990. május 2."],
    0,
    "1989. október 23-án, a rendszerváltás részeként kikiáltották a köztársaságot."
  ),
  q(
    "Mi jellemezte a Rákosi-korszakot az ’50-es évek elején?",
    ["Személyi kultusz és kemény diktatúra", "Teljes demokrácia", "Királyság", "Szabad választások"],
    0,
    "Rákosi Mátyás idején erős személyi kultusz, koncepciós perek és erőszakos államosítás zajlott."
  ),
  q(
    "Mi volt a kollektivizálás (TSZ-esítés) célja?",
    ["A mezőgazdaság állami irányítása", "Magángazdaságok erősítése", "Gyarmatok szerzése", "Csak export növelése"],
    0,
    "A parasztokat termelőszövetkezetekbe kényszerítették, hogy könnyebb legyen központilag irányítani."
  ),
  q(
    "Mit jelent a kultúrpolitikában a 'három T'?",
    ["Támogatott, tűrt, tiltott", "Tanulás, tudás, tudomány", "Takarékosság, tisztaság, türelem", "Titok, terv, tiltás"],
    0,
    "A művészeti-kulturális alkotásokat a rendszer szerint három kategóriába sorolták."
  ),
  q(
    "Mi volt az Ellenzéki Kerekasztal szerepe 1989-ben?",
    ["Tárgyalt a hatalommal a békés átmenetről", "Új király választása", "Népszámlálás", "Katonai puccs"],
    0,
    "Az ellenzéki szervezetek egyeztettek a pártállammal a rendszerváltás menetrendjéről."
  ),
  q(
    "Mi volt a 'szamizdat'?",
    ["Illegálisan terjesztett kiadvány", "Állami újság", "Katonai parancs", "Iskolai füzet"],
    0,
    "Tiltott vagy cenzúrázott írások titkos sokszorosítása és terjesztése."
  ),
  q(
    "Miért adósodott el Magyarország a ’70–80-as években?",
    ["Hitelekből tartották fenn az életszínvonalat", "Aranybánya miatt", "Túl sok adóbevétel", "Csak a hadsereg költött"],
    0,
    "A felzárkózást és jólétet külföldi hitelekből finanszírozták, ami eladósodáshoz vezetett."
  ),
  q(
    "Mikor bontották le a vasfüggönyt az osztrák határon?",
    ["1989-ben", "1975-ben", "1961-ben", "1995-ben"],
    0,
    "1989-ben kezdődött a határzár felszámolása, jelképe a rendszer nyitásának."
  ),
  q(
    "Mi történt 1989. június 16-án Budapesten?",
    ["Nagy Imre és mártírtársai újratemetése", "Új alkotmány elfogadása", "Forradalom kezdete", "Szovjet kivonulás"],
    0,
    "Az 1958-ban kivégzett miniszterelnököt és társait méltósággal temették újra, a rendszerváltás fontos jelképe."
  ),
  q(
    "Mikor vonultak ki a szovjet csapatok Magyarországról?",
    ["1991-ben", "1980-ban", "1970-ben", "1995-ben"],
    0,
    "1991-re fejeződött be a szovjet csapatok kivonulása, ezzel zárult le a katonai függés."
  ),
  q(
    "Tagja volt-e Magyarország a Varsói Szerződésnek?",
    ["Igen, 1955-től", "Nem", "Csak 1949-ig", "Csak 1999 után"],
    0,
    "Magyarország 1955-től 1991-ig a keleti katonai szövetség tagja volt."
  ),
];

// ===============================
// HIDEGHÁBORÚ (COLDWAR) – 3×20
// ===============================

// --- Kezdetek és szembenállás (20) ---
const CW_KEZDET: Question[] = [
  q(
    "Mit jelent a 'vasfüggöny' kifejezés?",
    ["Kelet és Nyugat szétválasztását", "Új fegyvert", "Színházi darabot", "Titkos szövetséget"],
    0,
    "Churchill nevezte így 1946-ban a kétpólusú világ határvonalát."
  ),
  q(
    "Melyik két nagyhatalom állt szemben a hidegháborúban?",
    ["USA és Szovjetunió", "Németország és Olaszország", "Franciaország és Anglia", "Kína és Japán"],
    0,
    "Az Egyesült Államok és a Szovjetunió két szembenálló blokkot vezetett."
  ),
  q(
    "Mikor alapították meg a NATO-t?",
    ["1949-ben", "1955-ben", "1961-ben", "1975-ben"],
    0,
    "A nyugati országok katonai szövetségeként jött létre 1949-ben."
  ),
  q(
    "Mikor alakult a Varsói Szerződés?",
    ["1955-ben", "1949-ben", "1962-ben", "1989-ben"],
    0,
    "A szovjet blokk katonai szövetsége volt 1955-től 1991-ig."
  ),
  q(
    "Mi volt a Truman-doktrína lényege?",
    ["Kommunizmus feltartóztatása", "Új választások", "Háború kirobbantása", "Atombomba használata"],
    0,
    "Az USA célja a kommunizmus terjedésének megállítása volt."
  ),
  q(
    "Mi volt a Marshall-terv?",
    ["Nyugat-Európa újjáépítésének amerikai segélye", "Új katonai szövetség", "Atombomba terve", "Űrprogram"],
    0,
    "Az USA gazdasági támogatást nyújtott Nyugat-Európának."
  ),
  q(
    "Mi volt a berlini blokád?",
    ["Nyugat-Berlin ellátásának lezárása", "Új fal építése", "Háborús támadás", "Katonai puccs"],
    0,
    "1948–49-ben a SZU lezárta a várost, a nyugatiak légi híddal látták el."
  ),
  q(
    "Mikor épült a berlini fal?",
    ["1961-ben", "1949-ben", "1975-ben", "1989-ben"],
    0,
    "1961-ben emelték a falat, hogy megállítsák a kelet-nyugati menekülést."
  ),
  q(
    "Miért volt fontos a koreai háború (1950–53)?",
    ["Első fegyveres konfliktus a hidegháborúban", "Európai határok védelme", "Gyarmati háború", "Afrikai függetlenség"],
    0,
    "A kommunista Észak és a kapitalista Dél között zajlott, ENSZ-részvétellel."
  ),
  q(
    "Mi volt a fegyverkezési verseny fő eszköze?",
    ["Atomfegyverek", "Szablyák", "Gőzgépek", "Íjak"],
    0,
    "Mindkét nagyhatalom atom- és rakétaversenyt folytatott."
  ),
  q(
    "Mit jelentett a 'kölcsönösen biztosított megsemmisítés'?",
    ["Atomháború esetén mindkét fél pusztul", "Csak a győztes marad", "Nincs háború", "Csak kis fegyverek"],
    0,
    "MAD-doktrína: atomtámadás esetén mindkét fél elpusztítja a másikat."
  ),
  q(
    "Mit jelent a bipoláris világ?",
    ["Két nagyhatalom vezetése", "Többpólusú rend", "Egyetlen birodalom", "Semlegesség"],
    0,
    "A hidegháború idején két pólusra, USA-ra és SZU-ra épült a világpolitika."
  ),
  q(
    "Miért volt fontos a Helsinki értekezlet (1975)?",
    ["Enyhülés, emberi jogok hangsúlyozása", "Új szövetség", "Háború kirobbantása", "Gyarmatok felosztása"],
    0,
    "A konferencia elősegítette a kelet–nyugati kapcsolatok javulását."
  ),
  q(
    "Mit jelentett a 'vasfüggöny lebontása'?",
    ["Kelet-Európa nyitása", "Új fal építése", "Fegyverek beszerzése", "Színházi díszlet"],
    0,
    "1989-től a keleti országok sorra megszüntették a határzárakat."
  ),
  q(
    "Miért volt fontos Berlin helyzete?",
    ["Két részre osztott város", "Semleges állam", "USA fővárosa", "Nincs jelentősége"],
    0,
    "Berlin Kelet- és Nyugat-Berlinre oszlott, szimbolizálva a hidegháborút."
  ),
  q(
    "Mi volt a SALT-egyezmény?",
    ["Atomfegyver-korlátozás", "Új atombomba kifejlesztése", "Űrhajó-egyezmény", "Közös katonai hadjárat"],
    0,
    "1972-ben és 1979-ben az atomfegyverek korlátozásáról állapodtak meg."
  ),
  q(
    "Mit jelentett a 'detente' politikája?",
    ["Enyhülést a hidegháborúban", "Új háborút", "Katonai puccsot", "Falépítést"],
    0,
    "A ’70-es években a szembenállás enyhülését nevezték így."
  ),
  q(
    "Melyik ország nem tartozott a keleti blokkhoz?",
    ["Franciaország", "Lengyelország", "Magyarország", "Csehszlovákia"],
    0,
    "Franciaország nyugati országként a NATO tagja volt."
  ),
  q(
    "Miért volt feszült a hidegháború kezdete?",
    ["USA és SZU ellentétes rendszere miatt", "Mert nem ismerték egymást", "Csak személyes vita volt", "Afrikai kérdések miatt"],
    0,
    "A kapitalista és kommunista rendszer összeütközése okozta."
  ),
];

// --- Konfliktusok és válságok (20) ---
const CW_KONFLIKT: Question[] = [
  q(
    "Mikor zajlott a kubai rakétaválság?",
    ["1962-ben", "1956-ban", "1975-ben", "1989-ben"],
    0,
    "1962-ben a SZU atomrakétákat telepített Kubába, de végül visszavonták őket."
  ),
  q(
    "Ki volt Kuba kommunista vezetője?",
    ["Fidel Castro", "Che Guevara", "Pinochet", "Mao Ce-tung"],
    0,
    "Castro 1959-től vezette Kubát, szoros kapcsolatban a Szovjetunióval."
  ),
  q(
    "Miért volt fontos Vietnam a hidegháborúban?",
    ["USA és SZU közvetett háborúja", "Afrikai gyarmati vita", "Európai határ", "Semleges terület"],
    0,
    "A vietnami háborúban az USA Dél-Vietnámot, a SZU és Kína Észak-Vietnámot támogatta."
  ),
  q(
    "Mikor omlott le a berlini fal?",
    ["1989. november 9.", "1980. május 1.", "1975. április 30.", "1991. december 25."],
    0,
    "1989. novemberében megnyitották a falat, a hidegháború szimbóluma omlott össze."
  ),
  q(
    "Mikor történt a prágai tavasz?",
    ["1968-ban", "1956-ban", "1975-ben", "1989-ben"],
    0,
    "1968-ban a csehszlovák reformkísérletet a Varsói Szerződés tankjai verték le."
  ),
  q(
    "Mikor zajlott az afganisztáni szovjet beavatkozás?",
    ["1979–1989", "1962–1965", "1985–1987", "1950–1953"],
    0,
    "A szovjet csapatok 10 évig tartó háborúba keveredtek Afganisztánban."
  ),
  q(
    "Mi volt a vietnami háború vége?",
    ["1975-ben USA kivonult, Észak győzött", "1968-ban Dél győzött", "1989-ben fal leomlott", "1955-ben gyarmati függetlenség"],
    0,
    "1975-ben a kommunista Észak-Vietnam győzött, az ország egyesült."
  ),
  q(
    "Mit jelentett a 'harmadik világ' fogalma?",
    ["Fejlődő országok", "NATO-tagállamok", "Szovjet blokk", "Ősi civilizációk"],
    0,
    "A hidegháborúban az iparilag elmaradott, fejlődő országokat nevezték így."
  ),
  q(
    "Miért robbant ki a koreai háború?",
    ["Észak megtámadta a Dél", "USA támadta Északot", "Japán támadta Dél-Koreát", "Semmiért"],
    0,
    "1950-ben Észak-Korea támadta meg Dél-Koreát."
  ),
  q(
    "Mi volt az űrverseny fő eredménye?",
    ["Ember a Holdon", "Tankcsata", "Fegyverkezés vége", "Új gyarmatok"],
    0,
    "1969-ben az USA embert juttatott a Holdra, a SZU korábban űrbe juttatta Gagarint."
  ),
  q(
    "Mikor lett vége a vietnami háborúnak?",
    ["1975", "1968", "1989", "1953"],
    0,
    "1975-ben foglalták el a kommunisták Saigont."
  ),
  q(
    "Mit jelent a détente?",
    ["Enyhülés", "Új háború", "Fegyverkezés", "Puccs"],
    0,
    "A hidegháború enyhülési időszakát nevezték így."
  ),
  q(
    "Mi volt a SALT-egyezmény célja?",
    ["Atomfegyverek korlátozása", "Új szövetség", "Űrháború indítása", "Fejlett fegyverek gyártása"],
    0,
    "Az USA és a SZU megállapodott az atomfegyverek korlátozásáról."
  ),
  q(
    "Mit jelent a 'peresztrojka'?",
    ["Átalakítás, reform a SZU-ban", "Új háború", "Falépítés", "Semlegesség"],
    0,
    "Gorbacsov gazdasági és politikai reformokat indított a ’80-as években."
  ),
  q(
    "Mi volt a 'glasznoszty'?",
    ["Nyíltság, szólásszabadság", "Katonai doktrína", "Űrprogram", "Gazdasági válság"],
    0,
    "Gorbacsov politikájának része, nagyobb szabadságot adott a nyilvánosságnak."
  ),
  q(
    "Mikor jött létre az EU elődje, az EGK?",
    ["1957-ben", "1949-ben", "1961-ben", "1989-ben"],
    0,
    "1957-ben a Római Szerződés hozta létre az Európai Gazdasági Közösséget."
  ),
  q(
    "Miért volt jelentős a berlini fal leomlása?",
    ["A hidegháború végét jelezte", "Új háború kezdete", "Atomháború indítása", "Semmi különös"],
    0,
    "A kelet-európai rendszerváltás és a hidegháború végét szimbolizálta."
  ),
  q(
    "Mikor alakult meg a KGST?",
    ["1949-ben", "1955-ben", "1961-ben", "1975-ben"],
    0,
    "A KGST (Kölcsönös Gazdasági Segítség Tanácsa) a szocialista országok gazdasági szervezete volt."
  ),
  q(
    "Mikor bomlott fel a Szovjetunió?",
    ["1991-ben", "1989-ben", "1975-ben", "1962-ben"],
    0,
    "1991 decemberében a SZU hivatalosan is megszűnt."
  ),
];

// --- Hidegháború vége és következményei (20) ---
const CW_VEGE: Question[] = [
  q(
    "Ki volt a Szovjetunió utolsó vezetője?",
    ["Mihail Gorbacsov", "Borisz Jelcin", "Sztálin", "Hruscsov"],
    0,
    "Mihail Gorbacsov 1985–1991 között vezette a Szovjetuniót."
  ),
  q(
    "Mikor omlott össze a kommunista rendszer Kelet-Európában?",
    ["1989-ben", "1975-ben", "1968-ban", "1995-ben"],
    0,
    "1989-ben sorra bukott meg a kommunista diktatúrák rendszere."
  ),
  q(
    "Mi volt a rendszerváltás lényege?",
    ["Demokrácia és piacgazdaság bevezetése", "Új diktatúra", "Gyarmatok szerzése", "Csak pénzcsere"],
    0,
    "A keleti blokk országaiban megszűnt a kommunista rendszer."
  ),
  q(
    "Miért fontos az 1989. október 23-i dátum Magyarországon?",
    ["Kikiáltották a köztársaságot", "Forradalom kezdete", "Szovjet bevonulás", "NATO-csatlakozás"],
    0,
    "1989. október 23-án kikiáltották a Magyar Köztársaságot."
  ),
  q(
    "Mi volt a berlini fal leomlásának hatása?",
    ["Kelet-Európa szabaddá vált", "USA megszűnt", "Japán kapitulált", "Új fal épült"],
    0,
    "A fal leomlása a hidegháború végét jelentette."
  ),
  q(
    "Mikor egyesült újra Németország?",
    ["1990-ben", "1989-ben", "1991-ben", "1985-ben"],
    0,
    "1990-ben az NSZK és az NDK egyesült."
  ),
  q(
    "Mi volt a Varsói Szerződés sorsa?",
    ["1991-ben feloszlott", "Megalakult 1995-ben", "Ma is létezik", "USA vezeti"],
    0,
    "A hidegháború végével a katonai szövetség megszűnt."
  ),
  q(
    "Mikor csatlakozott Magyarország a NATO-hoz?",
    ["1999-ben", "1989-ben", "2004-ben", "1991-ben"],
    0,
    "1999-ben lettünk a nyugati katonai szövetség tagjai."
  ),
  q(
    "Mi volt a keleti tömb összeomlásának fő oka?",
    ["Gazdasági válság és politikai nyitás", "Győztes háború", "Új gyarmatok", "Király visszatérése"],
    0,
    "A szocialista országok gazdaságilag összeomlottak, a nyitás felgyorsította a bukást."
  ),
  q(
    "Melyik szervezet lett a NATO riválisa a hidegháborúban?",
    ["Varsói Szerződés", "KGST", "ENSZ", "EU"],
    0,
    "A Varsói Szerződés volt a keleti blokk katonai szövetsége."
  ),
  // --- Hidegháború vége és következményei (20) ---
  q(
    "Ki volt a Szovjetunió utolsó vezetője?",
    ["Mihail Gorbacsov", "Borisz Jelcin", "Sztálin", "Hruscsov"],
    0,
    "Mihail Gorbacsov 1985–1991 között vezette a Szovjetuniót."
  ),
  q(
    "Mikor omlott össze a kommunista rendszer Kelet-Európában?",
    ["1989-ben", "1975-ben", "1968-ban", "1995-ben"],
    0,
    "1989-ben sorra bukott meg a kommunista diktatúrák rendszere."
  ),
  q(
    "Mi volt a rendszerváltás lényege?",
    ["Demokrácia és piacgazdaság bevezetése", "Új diktatúra", "Gyarmatok szerzése", "Csak pénzcsere"],
    0,
    "A keleti blokk országaiban megszűnt a kommunista rendszer."
  ),
  q(
    "Miért fontos az 1989. október 23-i dátum Magyarországon?",
    ["Kikiáltották a köztársaságot", "Forradalom kezdete", "Szovjet bevonulás", "NATO-csatlakozás"],
    0,
    "1989. október 23-án kikiáltották a Magyar Köztársaságot."
  ),
  q(
    "Mi volt a berlini fal leomlásának hatása?",
    ["Kelet-Európa szabaddá vált", "USA megszűnt", "Japán kapitulált", "Új fal épült"],
    0,
    "A fal leomlása a hidegháború végét jelentette."
  ),
  q(
    "Mikor egyesült újra Németország?",
    ["1990-ben", "1989-ben", "1991-ben", "1985-ben"],
    0,
    "1990-ben az NSZK és az NDK egyesült."
  ),
  q(
    "Mi volt a Varsói Szerződés sorsa?",
    ["1991-ben feloszlott", "Megalakult 1995-ben", "Ma is létezik", "USA vezeti"],
    0,
    "A hidegháború végével a katonai szövetség megszűnt."
  ),
  q(
    "Mikor csatlakozott Magyarország a NATO-hoz?",
    ["1999-ben", "1989-ben", "2004-ben", "1991-ben"],
    0,
    "1999-ben lettünk a nyugati katonai szövetség tagjai."
  ),
  q(
    "Mi volt a keleti tömb összeomlásának fő oka?",
    ["Gazdasági válság és politikai nyitás", "Győztes háború", "Új gyarmatok", "Király visszatérése"],
    0,
    "A szocialista országok gazdaságilag összeomlottak, a nyitás felgyorsította a bukást."
  ),
  q(
    "Melyik szervezet lett a NATO riválisa a hidegháborúban?",
    ["Varsói Szerződés", "KGST", "ENSZ", "EU"],
    0,
    "A Varsói Szerződés volt a keleti blokk katonai szövetsége."
  ),
  q(
    "Mit jelentett a glasznoszty?",
    ["Nyíltság, szólásszabadság", "Fegyverkezés", "Új háború", "Falépítés"],
    0,
    "Gorbacsov politikája nagyobb nyíltságot és szólásszabadságot adott."
  ),
  q(
    "Mit jelentett a peresztrojka?",
    ["Gazdasági és politikai átalakítás", "Fegyverkezés", "Háború indítása", "Új szövetség"],
    0,
    "Gorbacsov reformprogramja volt a Szovjetunióban."
  ),
  q(
    "Mikor bomlott fel a Szovjetunió?",
    ["1991-ben", "1989-ben", "1975-ben", "1962-ben"],
    0,
    "1991 decemberében hivatalosan is megszűnt a Szovjetunió."
  ),
  q(
    "Melyik ország lett a Szovjetunió legnagyobb utódállama?",
    ["Oroszország", "Ukrajna", "Kazahsztán", "Fehéroroszország"],
    0,
    "Az Oroszországi Föderáció lett a legnagyobb és legerősebb utódállam."
  ),
  q(
    "Miért volt fontos a rendszerváltás Magyarországon?",
    ["Demokratikus állam lettünk", "Gyarmati státuszba kerültünk", "Királyság lett", "Semmi sem változott"],
    0,
    "1989–90-ben Magyarországon is bevezették a demokráciát és piacgazdaságot."
  ),
  q(
    "Mi volt a hidegháború egyik utolsó fegyveres válsága?",
    ["Afganisztáni háború", "Koreai háború", "Prágai tavasz", "Kubai rakétaválság"],
    0,
    "1979–1989 között a szovjetek Afganisztánban háborúztak."
  ),
  q(
    "Mit jelentett a kétpólusú világ megszűnése?",
    ["Csak egy nagyhatalom, az USA maradt", "Új gyarmati birodalmak", "NATO megszűnése", "Európa elszigetelődése"],
    0,
    "1991 után az USA lett a világ egyetlen szuperhatalma."
  ),
  q(
    "Mi volt a kelet-európai rendszerváltások közös jellemzője?",
    ["Békés átmenet", "Vérengzés mindenhol", "Király visszatérése", "Csak gazdasági változás"],
    0,
    "Több országban békésen zajlott a hatalomátadás."
  ),
  q(
    "Mi volt az EU elődje?",
    ["Európai Gazdasági Közösség", "KGST", "NATO", "Varsói Szerződés"],
    0,
    "Az EGK 1957-től a későbbi EU alapját képezte."
  ),
];
// ===============================
// TÉMAFA (TOPIC_TREE) – teljes
// ===============================

// ===== Típusok a témához/alfelzethez =====
export type Section = {
  id: string;
  title: string;
  bank: Question[];
};

export type Topic = {
  id: string;
  title: string;
  sections: Section[];
};

// ===== A témafa (tömb!) =====
export const TOPIC_TREE: Topic[] = [
  {
    id: "ww1",
    title: "I. világháború (1914–1918)",
    sections: [
      { id: "okok",   title: "Okok és előzmények",           bank: WW1_OKOK },
      { id: "frontok",title: "Frontok és csaták",            bank: WW1_FRONTOK },
      { id: "hatter", title: "Hátország és következmények",  bank: WW1_HATTER },
    ],
  },
  {
    id: "interwar",
    title: "Két világháború között (1918–1939)",
    sections: [
      { id: "politika", title: "Politika és ideológiák",         bank: INTERWAR_POLITIKA },
      { id: "gazdasag", title: "Gazdaság és válság",             bank: INTERWAR_GAZDASAG },
      { id: "kulpol",   title: "Külpolitika és háború felé",     bank: INTERWAR_KULPOL },
    ],
  },
  {
    id: "ww2",
    title: "II. világháború (1939–1945)",
    sections: [
      { id: "hadi",   title: "Hadiesemények",           bank: WW2_HADI },
      { id: "hatter", title: "Hátország és gazdaság",   bank: WW2_HATTER },
      { id: "kov",    title: "Következmények és békék", bank: WW2_KOV },
    ],
  },
  {
    id: "hu20c",
    title: "Magyarország a 20. században",
    sections: [
      { id: "trianon",   title: "Trianon és két vh között",      bank: HU_Trianon_Interwar },
      { id: "megszallas",title: "II. világháború és megszállás", bank: HU_WW2_Megs },
      { id: "komm",      title: "Kommunista diktatúra",          bank: HU_Kommunista },
    ],
  },
  {
    id: "coldwar",
    title: "Hidegháború (1945–1991)",
    sections: [
      { id: "kezdet",   title: "Kezdetek és szembenállás", bank: CW_KEZDET },
      { id: "konflikt", title: "Konfliktusok és válságok",  bank: CW_KONFLIKT },
      { id: "vege",     title: "Vége és következmények",    bank: CW_VEGE },
    ],
  },
];

// ===== Kényelmi segédfüggvények =====
// Téma (topic) lekérése id alapján
export function getTopic(topicId: string): Topic | undefined {
  return TOPIC_TREE.find(t => t.id === topicId);
}

// Alfejezet (section) lekérése topic + subId alapján
export function getSubtopic(topicId: string, subId: string): Section | undefined {
  const t = getTopic(topicId);
  return t?.sections.find(s => s.id === subId);
}

// lib/biologia/lessons.ts
// Biológia 8 — Tananyag (illesztve a bank.ts-hez, 8.-os szintre egyszerűsítve)
import { LessonSection } from "../types";
export type Lesson = {
  id: string;
  title: string;
  content: string;
};

export const LESSONS_BIO8: LessonSection[] = [
  /* ============================================================
     1. FŐTÉMA: SEJT ÉS SZÖVETEK
     ============================================================ */
  {
    id: "sejt_felepitese",
    title: "A sejt felépítése",
    content: `
<b>A sejt</b> az élőlények legkisebb, önálló működésre képes egysége.  
Minden élő szervezet sejtekből épül fel. Az emberi testben több milliárd sejt található.

<b>Főbb sejtalkotók:</b>
• <b>Sejthártya</b> – határolja és védi a sejtet, csak bizonyos anyagokat enged át (féláteresztő).  
• <b>Sejtplazma</b> – folyékony anyag, benne lebegnek a sejtalkotók.  
• <b>Sejtmag</b> – irányítja a sejt működését, benne található a <b>DNS</b>.  
• <b>Mitokondrium</b> – az energiatermelés helye, itt zajlik a <b>sejtlégzés</b>.  
• <b>Riboszómák</b> – a fehérjék felépítése itt történik.  
• <b>Golgi-készülék</b> – a fehérjéket “csomagolja”, módosítja és szállítja.  
• <b>Endoplazmatikus retikulum</b> – anyagokat szállít a sejten belül.  

<b>Növényi sejtek különlegességei:</b> sejtfal (cellulózból), kloroplasztisz (fotoszintézis), nagy központi vakuólum (vízraktár).

<i>Érdekesség:</i> Az emberi test legnagyobb sejtje a petesejt, a legkisebb a vörösvérsejt.
    `,
  },
  {
    id: "sejtorganellumok",
    title: "Sejtorganellumok",
    content: `
<b>A sejtorganellumok</b> olyan sejten belüli alkotórészek, amelyek meghatározott feladatot látnak el.

• <b>Mitokondrium</b> – az energia (ATP) előállításának helye.  
• <b>Riboszóma</b> – a fehérjék felépítését végzi.  
• <b>Golgi-készülék</b> – a kész fehérjéket és anyagokat módosítja, szállítja.  
• <b>Lizoszóma</b> – lebontja az elöregedett sejtrészeket, felesleges anyagokat.  
• <b>Kloroplasztisz</b> – csak növényi sejtekben van, itt történik a fotoszintézis.  
• <b>Sima és durva endoplazmatikus retikulum</b> – zsírokat, fehérjéket szállít és állít elő.  

A sejtorganellumok együtt biztosítják a sejt működését: a tápanyagok felvételét, az energia átalakítását és a fehérjék előállítását.
    `,
  },
  {
    id: "szovetek_tipusai",
    title: "Szövetek típusai",
    content: `
A <b>szövet</b> azonos felépítésű és működésű sejtek együttese.  
Az emberi test többféle szövetből épül fel:

• <b>Hámszövet</b> – véd, borít és kiválaszt.  
• <b>Kötő- és támasztószövet</b> – összeköti és alátámasztja a szerveket (ide tartozik a vér, a csont és a porc is).  
• <b>Izomszövet</b> – mozgást biztosít; lehet simaizom (akaratlan), harántcsíkolt izom (akarattal irányított) és szívizom.  
• <b>Ideg-szövet</b> – az idegsejtekből és segítő sejtjeikből áll, az ingerek felvételét és továbbítását végzi.  

A különböző szövetek összerendeződve szerveket alkotnak (pl. a szív izom-, ideg- és kötőszövetből épül fel).
    `,
  },

  /* ============================================================
     2. FŐTÉMA: TÁPLÁLKOZÁS ÉS EMÉSZTÉS
     ============================================================ */
  {
    id: "emeszto_rendszer_felepitese",
    title: "Az emésztőrendszer felépítése",
    content: `
<b>Feladata:</b> a táplálék feldolgozása, az emészthetetlen anyagok eltávolítása.  

<b>A táplálék útja:</b> száj → nyelőcső → gyomor → vékonybél → vastagbél → végbél.  

<b>Főbb szervek és szerepük:</b>
• <b>Szájüreg</b> – a rágás és a keményítő bontásának kezdete.  
• <b>Nyelőcső</b> – perisztaltikus mozgással továbbítja a falatot.  
• <b>Gyomor</b> – a fehérjék bontása és a táplálék keverése.  
• <b>Vékonybél</b> – a tápanyagok lebontása és felszívódása.  
• <b>Vastagbél</b> – a víz visszaszívása.  
• <b>Végbél</b> – a bélsár tárolása és ürítése.  

<b>Mellékszervek:</b> máj (epe), hasnyálmirigy (emésztőenzimek), epehólyag.
    `,
  },
  {
    id: "tapanyagok_vitaminok",
    title: "Tápanyagok és vitaminok",
    content: `
<b>Tápanyagok:</b>
• <b>Szénhidrátok</b> – gyors energiát adnak (pl. cukor, kenyér, gyümölcsök).  
• <b>Fehérjék</b> – az izmok és sejtek építőanyagai (pl. hús, tojás, tejtermékek).  
• <b>Zsírok</b> – hosszú távú energiatartalékok, a hormonok és sejtmembránok részei.  

<b>Vitaminok:</b>
• <b>A-, D-, E-, K-vitamin</b> – zsírban oldódnak.  
• <b>B- és C-vitamin</b> – vízben oldódnak.  

A vitaminok és ásványi anyagok <i>kis mennyiségben is létfontosságúak</i>, segítik az anyagcserét és az immunrendszert.  
A <b>kiegyensúlyozott étrend</b> biztosítja, hogy mindegyikből megfelelő mennyiség jusson a szervezetbe.
    `,
  },
  {
    id: "emesztes_felszivas",
    title: "Emésztés és felszívódás",
    content: `
Az <b>emésztés</b> célja, hogy a nagy tápanyagmolekulák (pl. keményítő, fehérje, zsír) lebomoljanak kisebb egységekre,  
amelyeket a szervezet fel tud szívni.

<b>Enzimek és szerepük:</b>
• <b>Amiláz</b> – keményítő bontása cukorrá.  
• <b>Pepszin</b> – fehérjék bontása a gyomorban.  
• <b>Lipáz</b> – zsírok bontása zsírsavakká és glicerinné.  

<b>Felszívódás:</b> a vékonybélben történik, a bélbolyhok nagy felszínt biztosítanak.  
A tápanyagok a vérbe vagy a nyirokba kerülnek, és eljutnak a sejtekhez.  

<b>Vastagbél:</b> a víz visszaszívása és a bélflóra működése (vitaminok termelése).  
    `,
  },

  /* ============================================================
     3. FŐTÉMA: LÉGZÉS ÉS KERINGÉS
     ============================================================ */
  {
    id: "legzorendszer_alapok",
    title: "Légzőrendszer alapjai",
    content: `
A <b>légzés</b> feladata az oxigén felvétele és a szén-dioxid leadása.

<b>A légutak részei:</b>
• Orrüreg – a levegőt megtisztítja, felmelegíti.  
• Gége – hangképzés szerve.  
• Légcső – porckarikák tartják nyitva.  
• Hörgők és hörgőcskék – elágaznak a tüdőbe.  
• Tüdő – milliónyi <b>léghólyag (alveolus)</b>, ahol a gázcsere zajlik.

<b>Belégzéskor</b> a rekeszizom összehúzódik, a levegő beáramlik.  
<b>Kilégzéskor</b> a rekesz ellazul, a levegő kiáramlik.

A <b>hemoglobin</b> szállítja az oxigént a vérben.
    `,
  },
  {
    id: "keringes_szivekerek",
    title: "Keringés – szív és erek",
    content: `
<b>A szív</b> négyüregű izmos szerv: két pitvar és két kamra.  
<b>Bal oldal</b> – oxigéndús vér, <b>jobb oldal</b> – oxigénszegény vér.

<b>A vér útja:</b>
Kisvérkör: jobb kamra → tüdő → bal pitvar (gázcsere)  
Nagyvérkör: bal kamra → test → jobb pitvar (szövetek ellátása)

<b>Ér-típusok:</b>
• <b>Artériák</b> – a szívből visznek vért (magas nyomás).  
• <b>Vénák</b> – a szív felé hoznak vért (billentyűk segítik).  
• <b>Hajszálerek</b> – az anyagcsere helyei.

<b>Pulzus:</b> az artériák lüktetése a szívverés ütemében.
    `,
  },
  {
    id: "ver_osszetetele",
    title: "A vér összetétele",
    content: `
A <b>vér</b> folyékony kötőszövet, amely szállítja a tápanyagokat, oxigént és hormonokat.

<b>Fő részei:</b>
• <b>Vérplazma</b> – víz, oldott anyagok és fehérjék.  
• <b>Vörösvérsejtek</b> – oxigént szállítanak (hemoglobinnal).  
• <b>Fehérvérsejtek</b> – védekeznek a kórokozók ellen.  
• <b>Vérlemezkék</b> – a véralvadást segítik.

A <b>K-vitamin</b> fontos a véralvadáshoz,  
a <b>vas</b> pedig a hemoglobin alkotórésze.

<b>A vérkeringés</b> és <b>a légzés</b> együtt biztosítja a sejtek oxigénellátását és az anyagcserét.
    `,
  },
];
// ============================================================
//  BIOLÓGIA 8 — KIVÁLASZTÁS ÉS HOMEOSZTÁZIS
// ============================================================

export const LESSONS_BIO8_KIVALASZTAS_HOMEOSZT = [
  {
    id: "bio8_kiv_szervek_szerepe",
    title: "A kiválasztás szervei és szerepe",
    content: [
      "A kiválasztás a szervezet anyagcsere-folyamatainak természetes része, melynek során a felesleges vagy káros anyagok eltávoznak a testből.",
      "A kiválasztó szervrendszer legfontosabb elemei a vesék, a húgyvezeték, a húgyhólyag és a húgycső.",
      "A vesék kiszűrik a vérből a vízben oldott salakanyagokat, például a karbamidot. Ezek a vizelettel együtt ürülnek ki.",
      "A kiválasztás nemcsak a méregtelenítés, hanem a szervezet víz- és sóháztartásának szabályozása szempontjából is alapvető fontosságú."
    ]
  },
  {
    id: "bio8_bor_kivalaszto_szerepe",
    title: "A bőr kiválasztó és védő szerepe",
    content: [
      "A bőr a test külső védelmi vonala, amely mechanikai, kémiai és kórokozókkal szembeni védelmet biztosít.",
      "A bőrnek fontos kiválasztó szerepe is van: a verejtékmirigyek segítségével vizet, sókat és karbamidot választ ki.",
      "A verejtékezés nemcsak a kiválasztást, hanem a testhőmérséklet szabályozását is szolgálja.",
      "A bőrön keresztül távozik a szervezetből némi szén-dioxid és egyes illékony anyagok is."
    ]
  },
  {
    id: "bio8_homeosztazis_hoszabalyozas",
    title: "Homeosztázis és hőszabályozás",
    content: [
      "A homeosztázis a belső környezet viszonylagos állandóságának fenntartását jelenti, melyet a szervezet szabályozó mechanizmusai biztosítanak.",
      "A testhőmérsékletet az agy hőszabályozó központja irányítja: ha a test túlmelegszik, fokozódik a verejtékezés és kitágulnak az erek; ha lehűl, az erek összehúzódnak és reszketés indul.",
      "A homeosztatikus folyamatok közé tartozik a vércukorszint, a víz- és sótartalom, valamint a pH szabályozása is.",
      "A homeosztázis felborulása betegségekhez vagy szélsőséges esetben életveszélyhez vezethet."
    ]
  }
];

/* --- BIOLÓGIA 8 — IDEGRENDSZER ÉS ÉRZÉKSZERVEK --- */

export const lessons_idegrendszer_felepitese = {
  id: "idegrendszer_felepitese",
  title: "Az idegrendszer felépítése és működése",
  content: `
🧠 **Az idegrendszer szerepe**
Az idegrendszer biztosítja, hogy testünk különböző részei összehangoltan működjenek. 
Információt gyűjt a külvilágból és a testből, feldolgozza azt, majd választ ad rá.

🔹 **Az idegsejt (neuron)**
Az idegrendszer alapegysége az idegsejt. A neuron három fő részből áll:
- **Sejttest:** itt található a sejtmag.
- **Dendritek:** rövid nyúlványok, melyek az ingert a sejttest felé vezetik.
- **Axon:** hosszú nyúlvány, amely továbbítja az ingerületet más sejtekhez.
Az idegsejteket **mielinhüvely** védi és gyorsítja az ingerületet.

⚡ **Inger és ingerület**
Az **inger** a környezet vagy a test változása (pl. hang, fény, érintés).
Az **ingerület** az idegsejtben továbbított elektromos jel, amely eljut a központi idegrendszerbe.

🏛️ **A központi és perifériás idegrendszer**
- **Központi idegrendszer:** agy és gerincvelő.
- **Perifériás idegrendszer:** az idegek, amelyek összekötik a központi részeket a szervekkel.

🧩 **Az agy részei és feladatai**
- **Nagyagy:** a gondolkodás, emlékezés, érzékelés és tudatos mozgás központja.
- **Kisagy:** az egyensúly és mozgás összehangolásáért felel.
- **Agytörzs:** a légzés, szívverés és vérnyomás szabályozása.
- **Hipotalamusz:** a belső egyensúly (homeosztázis) és hormonális irányítás központja.

⚙️ **Az idegrendszer működése**
A jelek az érzékszervekből az **érzőidegeken** jutnak az agyba, 
majd a **mozgatóidegeken** keresztül az izmokhoz.

💡 **Érdekesség**
Egyetlen idegsejt több ezer másikhoz kapcsolódhat — 
ezek az apró kapcsolódási pontok a **szinapszisok**, 
amelyekben az ingerület vegyi úton terjed tovább.
`
};

/* --- ÉRZÉKSZERVEK --- */
export const lessons_erzek_szervek = {
  id: "erzek_szervek",
  title: "Érzékszervek – látás és hallás",
  content: `
👁️ **Látás – a szem működése**
A szem a fény érzékelésére szolgáló szervünk. A fény a szaruhártyán és a pupillán át jut a **retinára**, 
ahol a fényérzékeny **pálcikák és csapok** alakítják azt idegingerré.

🔹 **A szem fő részei:**
- **Szaruhártya:** a fényt beengedi és megtöri.
- **Pupilla:** szabályozza a bejutó fény mennyiségét.
- **Szemlencse:** domborúságát változtatva éles képet hoz létre.
- **Retina:** itt keletkezik az idegingerület.
- **Látóideg:** az ingerületet a nyakszirti lebeny látóközpontjába viszi.

🔹 **Látáshibák**
- **Rövidlátás:** a távoli tárgyak homályosak, mert a kép a retina elé vetül.
- **Távollátás:** a közeli tárgyak homályosak, mert a kép a retina mögé kerül.

🎧 **Hallás és egyensúlyérzékelés**
A fül három részből áll:
- **Külső fül:** fülkagyló és hallójárat – összegyűjti a hanghullámokat.
- **Középfül:** dobhártya és a három hallócsontocska (kalapács, üllő, kengyel) vezeti a rezgéseket.
- **Belső fül:** a **csiga** alakítja át a rezgéseket idegingerré.
Az **egyensúlyérzékelés** szervei a belső fülben lévő félkörös ívjáratok.

💬 **Érdekesség**
A hanghullámok rezgésként terjednek, és a levegő rezgéseit alakítjuk idegi jellé. 
A hallás központja az agy **halántéklebenyében** található.
`
};

/* --- REFLEXEK, MOZGÁS, VÉDELEM --- */
export const lessons_reflexek_mozgas_vedelem = {
  id: "reflexek_mozgas_vedelem",
  title: "Reflexek, mozgás és az idegrendszer védelme",
  content: `
⚡ **Reflex – az életmentő gyors válasz**
A reflex gyors, akaratlan válasz egy ingerre. 
Például: ha forró tárgyat érintünk, azonnal elrántjuk a kezünket.

🔹 **A reflexív részei:**
Receptor → Érzőideg → Központ (gerincvelő) → Mozgatóideg → Végrehajtó szerv (izom)

- **Feltétlen reflex:** veleszületett (pl. pislogás, nyelés)
- **Feltételes reflex:** tanulással kialakuló (pl. Pavlov kutyája)

🏃 **A mozgás irányítása**
Az **akaratlagos mozgásokat** az agykéreg homloklebenye irányítja, 
az **egyensúly** és **mozgáskoordináció** a **kisagy** feladata.

🛡️ **Az idegrendszer védelme**
- **Koponya és gerincoszlop:** fizikai védelem.
- **Agyhártyák:** három rétegű burok az agy és gerincvelő körül.
- **Agyvíz (liquor):** védi az agyat az ütésektől, táplálja az idegsejteket.

⚠️ **Betegségek**
Az agyhártyagyulladás súlyos fertőzés, 
ami lázzal és fejfájással jár, és maradandó idegrendszeri károsodást okozhat.

💡 **Érdekesség**
Egyes reflexek olyan gyorsak, hogy az agy csak utólag „értesül” a történtekről. 
Ezért tudunk forró tárgyat elengedni még mielőtt tudatosulna a fájdalom.
`
};
// src/lib/biologia/lessons.ts


export const LESSONS_BIOLOGIA_8_IDEGRENDSZER: LessonSection[] = [
  {
    id: "idegrendszer_felepitese",
    title: "Az idegrendszer felépítése és működése",
    content: `
🧠 **Az idegrendszer alapjai**

Az **idegrendszer** az emberi test irányító és összekötő rendszere. Alapegysége az **idegsejt (neuron)**, amely az **ingerületet** – egy elektromos jelet – továbbítja a sejtek között.  
Az ingerület áthalad a **dendriteken**, végighalad az **axonon**, majd a **szinapszison** keresztül egy másik sejthez jut.

⚙️ **Központi és perifériás idegrendszer**

A **központi idegrendszer** az **agy** és a **gerincvelő**,  
míg a **perifériás idegrendszer** idegei a test szerveit kötik össze a központtal.  
Az idegrendszer két fő része:
- **Akaratlagos idegrendszer:** az izmokat irányítja.  
- **Akaratlan (vegetatív) idegrendszer:** a belső szervek működését szabályozza.

🧩 **Az agy felépítése**

- **Agykéreg:** a tudatos gondolkodás és érzékelés központja.  
- **Kisagy:** az egyensúlyt és a mozgáskoordinációt irányítja.  
- **Agytörzs:** az életfontosságú folyamatokat (légzés, szívverés) szabályozza.  
- **Hipotalamusz:** a testhőmérséklet és az alvás központja.

A **gerincvelő** a reflexek központja, és információkat továbbít az agy felé és onnan vissza.

💡 **Összefoglalás:**
Az idegrendszer biztosítja, hogy testünk minden része összehangoltan működjön.  
Ha az ingerületvezetés megsérül, bénulás vagy érzékelési zavar alakulhat ki.
`,
  },
  {
    id: "erzek_szervek",
    title: "Érzékszervek – látás és hallás",
    content: `
👁️ **A látás folyamata**

A **szem** érzékeli a fényt, amit a **retina** fényérzékeny sejtjei (pálcikák és csapok) alakítanak idegingerületté.  
A **szivárványhártya** adja a szem színét és szabályozza a **pupilla** méretét.  
A **szemlencse** a tárgyakra fókuszál, így a **retinán** éles kép jön létre.  
A látóideg továbbítja a jelet az **agy nyakszirti lebenyébe**, ahol megtörténik a kép értelmezése.

👂 **A hallás és az egyensúly**

A hanghullámok a **fülkagylón** keresztül a **dobhártyához** jutnak,  
majd a **hallócsontocskák (kalapács, üllő, kengyel)** vezetik tovább a rezgéseket a **belső fül csigájába**.  
Itt az idegsejtek elektromos jellé alakítják a rezgést, amit a **hallóideg** az **agy halántéklebenyébe** küld.  
Az **egyen­súlyérzékelés** a **félkörös ívjáratokban** történik, ahol a test mozgását érzékeljük.

🎯 **Érdekesség:**
- A **rövidlátó** szem a képet a retina elé, a **távollátó** szem mögé vetíti.  
- A **fülkürt** segíti a nyomás kiegyenlítését a fülben (pl. repüléskor, hegyen).

`,
  },
  {
    id: "reflexek_mozgas_vedelem",
    title: "Reflexek, mozgás és az idegrendszer védelme",
    content: `
⚡ **A reflex működése**

A **reflex** gyors, akaratlan válasz egy ingerre. Például ha forró tárgyat érintünk,  
az inger a bőr **receptoraitól** a **gerincvelőbe** jut, amely azonnali választ küld az izmoknak.  
Ez az úgynevezett **reflexív**: receptor → érzőideg → gerincvelő → mozgatóideg → izom.

🏃 **Tanult és veleszületett reflexek**

- **Feltétlen reflex:** veleszületett, pl. pislogás, köhögés.  
- **Feltételes reflex:** tanulással kialakított, pl. biciklizés vagy gépelés.  
A reflexek a gyors reakciót biztosítják a szervezet számára, gyakran életmentőek.

🧱 **Az idegrendszer védelme**

Az agyat a **koponyacsont**, a **három agyhártya** és az **agyvíz** (liquor) védi a rázkódástól.  
A **gerincvelő** a **csigolyák között** helyezkedik el, és a gerinccsatorna védi.  
A **gerincfolyadék** táplálja és védi az idegszövetet.

💡 **Összefoglalás:**
A reflexek és az idegrendszer védelmi mechanizmusai biztosítják,  
hogy a szervezet gyorsan és hatékonyan reagáljon a környezet változásaira.
`,
  },
];
// lib/biologia/lessons.ts
// Biológia 8 — Szaporodás és öröklődés (tananyag a kvíz-bank altémáihoz igazítva)

/**
 * Altéma ID-k:
 *  - "szaporodas_folyamata"  -> bank_szaporodas_folyamata
 *  - "sejtosztodas"          -> bank_sejtosztodas
 *  - "oroklodes"             -> bank_oroklodes
 *
 * A learn.tsx/lesson-map.ts ezekre az id-kre hivatkozzon.
 */
export const LESSONS_BIO8_SZAP: LessonSection[] = [
  {
    id: "szaporodas_folyamata",
    title: "Az ivarszervek és a szaporodás folyamata",
    content: `
👶 **Mi a megtermékenyítés?**  
A hímivarsejt és a petesejt **magjának egyesülése** → létrejön a **zigóta**.  
📍 **Helye:** emberben többnyire a **petevezeték**.

🧬 **Ivarsejtek**  
• **Hímivarsejt (spermium):** kicsi, **mozgékony**, farki nyúlvánnyal halad.  
• **Petesejt:** nagy, **tápanyagban gazdag**, mozdulatlan.  
• Mindkettő **23 kromoszómát** tartalmaz (haploid).

🧫 **Női szaporítórendszer**  
• **Petefészek:** petesejtek képződése, hormontermelés (ösztrogén, progeszteron).  
• **Petevezeték:** itt történik a megtermékenyítés.  
• **Méh:** a megtermékenyített petesejt **beágyazódik**, itt fejlődik a magzat.  
• **Hüvely:** a szülőcsatorna és a közösülés szerve.

🧪 **Férfi szaporítórendszer**  
• **Herék:** hímivarsejtek és **tesztoszteron** termelése.  
• **Mellékhere, ondóvezeték, prosztata, ondóhólyag:** az ivarsejtek tárolása és továbbítása.

👶 **Magzati kapcsolatok**  
• **Méhlepény:** anyai–magzati **gáz- és tápanyagcsere**.  
• **Köldökzsinór:** a kapcsolat „vezetéke”.  
• **Magzatvíz:** védelem, mozgástér.

🩸 **Menstruációs ciklus röviden**  
Ha nincs megtermékenyítés, a felépült **méhnyálkahártya lelökődik** → vérzés.

💡 Tipp: A **serdülőkor** a nemi hormonok fokozott termelődésével indul; ekkor alakulnak ki a másodlagos nemi jellegek.

📘 Példa: **Egypetéjű ikrek** egy zigóta korai kettéválásából jönnek létre; **kétpetéjű ikrek** két külön petesejt és két spermium találkozásából.
    `,
  },
  {
    id: "sejtosztodas",
    title: "Sejtosztódás – mitózis és meiózis",
    content: `
🔁 **Sejtciklus:** növekedés → **DNS-másolás** → osztódás.

🧩 **Mitózis (testi sejtek)**  
• **Cél:** elhasználódott sejtek pótlása, növekedés.  
• **Eredmény:** két **genetikailag azonos** utódsejt (diploid → diploid).  
• Lépések vázlatosan: kromoszómák tömörödnek → kettéválnak → a sejt kettéosztódik.

➗ **Meiózis (ivarsejtképzés)**  
• **Cél:** ivarsejtek létrehozása **felezett kromoszómaszámmal**.  
• **Eredmény:** egy kiinduló sejtből **négy haploid** sejt.  
• **Változatosság forrásai:** kromoszómák véletlen szétoszlása, rekombináció.

📊 **Számok emberben**  
• Testi sejtek: **46** kromoszóma (**23 pár**).  
• Ivarsejtek: **23** kromoszóma.

💡 Tipp: Jegyezd meg a fogalmakat! **Diploid = 2n**, **Haploid = n**.

📘 Példa: A bőr folyamatosan újul, mert a **bőr hámsejtjei mitózissal** osztódnak.
    `,
  },
  {
    id: "oroklodes",
    title: "Öröklődés és tulajdonságok átadása",
    content: `
🧬 **Alapfogalmak**  
• **Gén:** a DNS egy szakasza, egy tulajdonság információja.  
• **Genotípus:** a gének összessége. **Fenotípus:** a megjelenő tulajdonság.  
• **Domináns/recesszív:** a domináns **elnyomhatja** a recesszívet.

👨‍🌾 **Mendel törvényei (borsókísérletek)**  
• A tulajdonságok **párokban öröklődnek**.  
• Az utód **véletlenszerűen** kap egy-egy allélt a szülőktől.

🧫 **Ivari kromoszómák**  
• Nő: **XX**, Férfi: **XY** – a nem meghatározásának alapja.

🧟 **Mutáció**  
• A **DNS tartós megváltozása** (pl. sugárzás, vegyszerek hatására).  
• Lehet ártalmatlan, hasznos vagy káros; **öröklődhet**.

💡 Tipp: A testvérek nem egyformák, mert a meiózis és a megtermékenyítés során a gének **véletlen kombinációban** kerülnek az utódba.

📘 Példa: A **barna szem** gyakran domináns a kék felett, de a szemszín valójában **több gén** együttes hatásának eredménye.
    `,
  },
];
/* ===============================
 * BIOLÓGIA 8 — ÖKOLÓGIA ÉS KÖRNYEZETVÉDELEM — LECKÉK
 * (compat: LessonSection[] és a fenti bank ID-k)
 * =============================== */


export const LESSONS_BIO8_OKOL: LessonSection[] = [
  {
    id: "okologiai_alapfogalmak",
    title: "Ökológiai alapfogalmak",
    content: `
🌿 **Alapfogalmak röviden**
- **Populáció:** azonos faj egyedei egy helyen, egy időben.
- **Társulás:** különböző fajok populációinak együttese.
- **Ökoszisztéma:** társulás + **abiotikus** tényezők (fény, víz, hőmérséklet, talaj).
- **Niche:** egy faj „szerepe” – erőforrás-használata, élőhelye, aktivitása.
- **Biodiverzitás:** sokféleség géntől élőhelyig.

🧩 **Kapcsolatok**
- **Tápláléklánc** → **táplálékháló** (valóságban hálózat).
- **Kölcsönhatások:** versengés (kompetíció), mutualizmus, parazitizmus, predáció.

🌱 **Szukcesszió**
- Pionír fajok → köztes stádiumok → **klimax társulás** (viszonylagos stabilitás).

💡 **Példák**
- Inváziós fajok kiszoríthatják az őshonosakat.
- Indikátorfajok jelzik a környezet állapotát.
`,
  },
  {
    id: "anyag_es_energia_korforgas",
    title: "Anyag- és energiakörforgás",
    content: `
☀️ **Energiaáramlás**
- A **Nap** energiája indítja a **fotoszintézist** (producensek).
- Energiaveszteség szintenkként (≈ **10% szabály**), ezért rövidek a láncok.

🔄 **Anyagkörforgások**
- **Szénkörforgás:** fotoszintézis ↔ légzés; égetés növeli CO₂-t.
- **Nitrogénkörforgás:** N-kötés, nitrifikáció, denitrifikáció (baktériumok).
- **Vízkörforgás:** párolgás → felhők → csapadék → lefolyás → párolgás.

🧪 **Termőképesség**
- **Talaj:** humusz + ásványok → jó víz- és tápanyagtárolás.
- **Eutrofizáció:** tápanyag-túlterhelés → algavirágzás, oxigénhiány.

📌 **Fogalmak**
- Primer produkció (producensek), szekunder produkció (fogyasztók),
- **Ökológiai lábnyom**, **bioakkumuláció**.
`,
  },
  {
    id: "kornyezetvedelem_fenntarthatosag",
    title: "Környezetvédelem és fenntarthatóság",
    content: `
✅ **Fenntarthatóság**
- Jelen szükségletei ≠ jövő kárára. Gazdaság–társadalom–környezet egyensúlya.

🗑️ **Hulladék**
- **Szelektív gyűjtés**, **újrahasznosítás**, **komposztálás** – csökkenti a lerakót.
- **Körkörös gazdaság:** tervezés javításra, újrafelhasználásra.

🌍 **Szennyezések**
- **Légszennyezés:** közlekedés; **zaj**, **fényszennyezés**, **mikroműanyag**.
- **ÜHG-gázok:** CO₂, CH₄, N₂O – éghajlatváltozás.

🏙️ **Megoldások háztartásban**
- Szigetelés, LED, okos fűtés-hűtés, víztakarékosság (perlátor), tudatos közlekedés.
- Zöldtető, fák ültetése, helyi termékek.

🛡️ **Természetvédelem**
- Védett fajok és területek, inváziós fajok megelőzése.
- Ökoturizmus: kímélő jelenlét, helyi közösségek támogatása.
`,
  },
];
// (maradjanak meg a fenti export const-ok: LESSONS_BIO8, LESSONS_BIOLOGIA_8_IDEGRENDSZER,
//  LESSONS_BIO8_SZAP, LESSONS_BIO8_OKOL)

// ====== GYŰJTŐ EXPORT A TANANYAG-KÉPERNYŐHÖZ ======
// A bank.ts TOPIC_TREE id-jeihez igazított kulcsokkal.
// Ha a szekciótömbök nálad más néven szerepelnek, cseréld a jobb oldalt annak megfelelően.

type LessonsTopic = { sections: any[] };

// — 7 főtéma —
const LESSONS_MAP: Record<string, LessonsTopic> = {
  // 1) Sejt és szövetek
  biologia_8_sejt_szovet: { sections: LESSONS_BIO8 },


  // 4) Kiválasztás és homeosztázis
  biologia_8_kivalasztas_homeosztazis: { sections: LESSONS_BIO8_KIVALASZTAS_HOMEOSZT },

  // 5) Idegrendszer és érzékelés
  biologia_8_idegrendszer_erzek: { sections: LESSONS_BIOLOGIA_8_IDEGRENDSZER },

  // 6) Szaporodás és öröklődés
  biologia_8_szaporodas_oroklodes: { sections: LESSONS_BIO8_SZAP },

  // 7) Ökológia és környezet
  biologia_8_okologia_kornyezet: { sections: LESSONS_BIO8_OKOL },
};

// (Opcionális kompatibilitás: ha a router/bank "bio8_*" előtaggal kérdezné)
(LESSONS_MAP as any).bio8_sejt_szovet = LESSONS_MAP.biologia_8_sejt_szovet;
(LESSONS_MAP as any).bio8_emesztes = LESSONS_MAP.biologia_8_emesztes;
(LESSONS_MAP as any).bio8_legzes_keringes = LESSONS_MAP.biologia_8_legzes_keringes;
(LESSONS_MAP as any).bio8_kivalasztas_homeosztazis = LESSONS_MAP.biologia_8_kivalasztas_homeosztazis;
(LESSONS_MAP as any).bio8_idegrendszer_erzek = LESSONS_MAP.biologia_8_idegrendszer_erzek;
(LESSONS_MAP as any).bio8_szaporodas_oroklodes = LESSONS_MAP.biologia_8_szaporodas_oroklodes;
(LESSONS_MAP as any).bio8_okologia_kornyezet = LESSONS_MAP.biologia_8_okologia_kornyezet;

// ====== EZ MENJEN A FÁJL VÉGÉRE ======
export default LESSONS_MAP;





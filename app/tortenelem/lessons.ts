// app/tortenelem/lessons.ts

export type Lesson = {
  title: string;
  intro: string;
  sections: { title: string; text: string }[];
  dates: { year: number; event: string; extra?: string }[];
  keywords?: { term: string; def: string }[];
};

export const LESSONS: Record<string, Lesson> = {
  ww1: {
    title: "I. világháború (1914–1918)",
    intro:
      "A háború a nagyhatalmak közti feszültségekből és a balkáni válságokból nőtt ki. Lövészárok-háború, hatalmas ember- és anyagveszteségek. [[Tudtad? A tankokat először 1916-ban vetették be, főleg a Somme-nál.]] A háború végén új határok és békerendszer született.",
    sections: [
      {
        title: "Okok és előzmények",
        text:
          "Nacionalizmus, fegyverkezési verseny, gyarmati vetélkedés; szövetségi rendszerek (Antant – Központi hatalmak). **1914**-ben a szarajevói merénylet után dominóként léptek háborúba az államok.",
      },
      {
        title: "Frontok és csaták",
        text:
          "Nyugaton lövészárok-háború (Marne, Verdun, Somme). Keleten mozgékonyabb hadműveletek. Új fegyverek: géppuska, harci gáz, tank. **1917**-ben az USA belépése döntő erősítés volt.",
      },
      {
        title: "Hátország és következmények",
        text:
          "Jegyrendszer, hadigazdaság, ember- és anyagveszteségek. **1918**. nov. 11-én fegyverszünet. A versailles-i békerendszer és a trianoni béke újrarajzolta Európa térképét.",
      },
    ],
    dates: [
      { year: 1914, event: "Szarajevói merénylet; a háború kezdete", extra: "A Monarchia ultimátuma Szerbiának eszkalálta a válságot." },
      { year: 1914, event: "Első marnei csata – Párizs megmenekül", extra: "A Schlieffen-terv megakad; állóháború alakul ki." },
      { year: 1915, event: "Harci gáz első bevetése Ypres-nél", extra: "Új, félelmetes fegyver – gázmaszkok terjedése." },
      { year: 1916, event: "Verdun és Somme – óriási veszteségek", extra: "A modern ipari háború szimbólumai." },
      { year: 1917, event: "USA belép a háborúba", extra: "Gazdasági és katonai fölény az antant oldalán." },
      { year: 1917, event: "Orosz forradalmak", extra: "Különbéke: Breszt-Litovszk (1918)." },
      { year: 1918, event: "Német tavaszi offenzíva; fegyverszünet (nov. 11.)", extra: "Kimerülés, hátországi válság, összeomlás." },
      { year: 1919, event: "Versailles-i béke Németországgal", extra: "Jóvátétel, területvesztés, hadsereg korlátozása." },
      { year: 1920, event: "Trianoni béke Magyarországgal", extra: "Jelentős terület- és népességvesztés." },
    ],
    keywords: [
      { term: "Antant", def: "Franciaország, Nagy-Britannia és Oroszország szövetsége." },
      { term: "Központi hatalmak", def: "Németország, Osztrák–Magyar Monarchia és szövetségeseik." },
      { term: "Állóháború", def: "Hosszú, kiépített védelmi vonalakkal vívott háború." },
      { term: "Ostrakizmus…? (nem)", def: "—" },
      { term: "Jegyrendszer", def: "Korlátozott ellátás a hátországban, jegyre kiadott élelmiszer." },
      { term: "Jóvátétel", def: "Vesztes államok által fizetendő kártérítés." },
    ],
  },

  interwar: {
    title: "Két világháború között (1918–1939)",
    intro:
      "A háború utáni Európa politikailag és gazdaságilag bizonytalan volt. **Tömegtársadalom**, új eszmék, válságok, diktatúrák. [[Tudtad? A ’20-as években a rádió és a film lett a tömegek fő információforrása.]]",
    sections: [
      {
        title: "Politika és ideológiák",
        text:
          "Békeszerződések okozta elégedetlenség. **Fasizmus** Olaszországban, **nácizmus** Németországban, **kommunizmus** a Szovjetunióban. Demokráciák megerősítése/gyengülése Európában.",
      },
      {
        title: "Gazdaság és válság",
        text:
          "**1929**: New York-i tőzsdekrach → világgazdasági válság. Munkanélküliség, állami beavatkozás (New Deal). [[Tudtad? A futószalagos tömegtermelés a Fordnál vált mintává.]]",
      },
      {
        title: "Külpolitika és háború felé",
        text:
          "Hitler terjeszkedése: Rajna-vidék, Anschluss (**1938**), München, Csehszlovákia szétverése. A **Molotov–Ribbentrop-paktum** utat nyit a háborúhoz.",
      },
    ],
    dates: [
      { year: 1919, event: "Párizs környéki békék", extra: "Új államok, határok – sok vitás terület." },
      { year: 1922, event: "Mussolini hatalomra jut Olaszországban", extra: "Fasiszta diktatúra kiépítése." },
      { year: 1929, event: "Tőzsdekrach – világgazdasági válság", extra: "Gyárbezárások, munkanélküliség, szociális feszültségek." },
      { year: 1933, event: "Hitler kancellár; náci diktatúra kezdete", extra: "Egypártrendszer, propaganda, fegyverkezés." },
      { year: 1936, event: "Berlin–Róma tengely; antikomintern paktum", extra: "Fasiszta hatalmak összefognak." },
      { year: 1938, event: "Anschluss; müncheni egyezmény", extra: "Szudéta-vidék elcsatolása; „megbékítés” politikája." },
      { year: 1939, event: "Molotov–Ribbentrop-paktum", extra: "Titkos záradék: Lengyelország felosztása." },
    ],
    keywords: [
      { term: "Fasizmus", def: "Tekintélyelvű, nacionalista ideológia és rendszer." },
      { term: "New Deal", def: "Roosevelt válságkezelő programja az USA-ban." },
      { term: "Propaganda", def: "Közvélemény befolyásolása állami eszközökkel." },
      { term: "Anschluss", def: "Ausztria Németországhoz csatolása (1938)." },
      { term: "Megbékítés", def: "Nyugati engedmények Hitlernek a béke reményében." },
    ],
  },

  ww2: {
    title: "II. világháború (1939–1945)",
    intro:
      "A történelem legnagyobb háborúja: villámháborúk, népirtás, totális küzdelem. [[Tudtad? 1945-ben két atombombát vetettek be Japán ellen – Hirosima és Nagaszaki.]]",
    sections: [
      {
        title: "Európai hadszíntér",
        text:
          "**1939**: Lengyelország lerohanása; **1940**: Nyugat-Európa elfoglalása. **1941**: Szovjetunió elleni támadás. **1944**: Normandiai partraszállás – fordulat.",
      },
      {
        title: "Csendes-óceáni hadszíntér",
        text:
          "**1941**: Pearl Harbor; **1942** Midway – amerikai fordulat. Szigetugrás-stratégia, véres harcok.",
      },
      {
        title: "Háborús bűnök és következmények",
        text:
          "Holokauszt, civil áldozatok. **1945**: Németország és Japán kapitulál. Új világrend körvonalazódik.",
      },
    ],
    dates: [
      { year: 1939, event: "Németország megtámadja Lengyelországot", extra: "A Szovjetunió is bevonul keletről." },
      { year: 1940, event: "Franciaország összeomlik", extra: "Dunkerque-i mentés, Vichy-rendszer." },
      { year: 1941, event: "Barbarossa-hadművelet; Pearl Harbor", extra: "A háború globálissá válik." },
      { year: 1942, event: "Midway; Sztálingrád kezdete", extra: "Fordulat a Csendes-óceánon és keleten." },
      { year: 1944, event: "Normandiai partraszállás (D-nap)", extra: "Nyugati front megnyílik Európában." },
      { year: 1945, event: "Berlin eleste; Hirosima–Nagaszaki", extra: "Feltétel nélküli kapituláció." },
    ],
    keywords: [
      { term: "Villámháború", def: "Gyors, gépesített hadviselés." },
      { term: "Holokauszt", def: "A náci Németország népirtása a zsidóság ellen." },
      { term: "D-nap", def: "A szövetségesek normandiai partraszállása (1944. jún. 6.)." },
      { term: "Manhattan-terv", def: "Az USA atombomba-fejlesztési programja." },
      { term: "Konferencia (Jalta/Potsdam)", def: "Háború utáni rendezés nagyhatalmi megállapodásokkal." },
    ],
  },

  hu20c: {
    title: "Magyarország a 20. században",
    intro:
      "Trianon, forradalmak, Horthy-korszak, majd a háború és a szovjet befolyás. [[Tudtad? A két világháború között Magyarországon komoly rádió- és autógyártás indult (Orion, MÁG).]]",
    sections: [
      {
        title: "Trianon és következményei",
        text:
          "**1920**: Trianoni béke – jelentős terület- és népességveszteség. Menekültek, gazdasági és lelki trauma.",
      },
      {
        title: "Horthy-korszak",
        text:
          "Korlátozott parlamentarizmus, **Bethlen-konszolidáció**. Gazdasági nehézségek, revíziós törekvések.",
      },
      {
        title: "A II. világháború és utána",
        text:
          "Magyarország fokozatosan belesodródik a háborúba; **1944**: német megszállás. **1945 után** szovjet befolyás, kommunista hatalomátvétel előkészítése.",
      },
    ],
    dates: [
      { year: 1919, event: "Tanácsköztársaság", extra: "Rövid életű kommunista diktatúra." },
      { year: 1920, event: "Trianoni béke", extra: "Az ország kétharmadát elveszíti." },
      { year: 1921, event: "Horthy Miklós kormányzó", extra: "Király nélküli királyság rendszere." },
      { year: 1927, event: "Pengő bevezetése", extra: "Pénzügyi stabilizációs kísérlet." },
      { year: 1938, event: "Első bécsi döntés", extra: "Felvidék déli részeinek visszacsatolása." },
      { year: 1944, event: "Német megszállás", extra: "Nyilas hatalomátvétel, deportálások." },
      { year: 1945, event: "Felszabadítás/Megszállás; földreform", extra: "Politikai átrendeződés, SZEB." },
    ],
    keywords: [
      { term: "Revízió", def: "A határváltozások felülvizsgálatának igénye." },
      { term: "Bethlen-konszolidáció", def: "1921–31 közti politikai-gazdasági stabilizáció." },
      { term: "Nyilasok", def: "Szélsőjobboldali, náci mintájú mozgalom." },
      { term: "SZEB", def: "Szövetséges Ellenőrző Bizottság a háború után." },
      { term: "Pengő", def: "A korabeli magyar pénznem (1927–46)." },
    ],
  },

  coldwar: {
    title: "Hidegháború (1945–1991)",
    intro:
      "Két szuperhatalom szembenállása: USA vs. SZU. Fegyverkezési verseny, szövetségi rendszerek, helyi háborúk. [[Tudtad? 1957-ben indult a Szputnyik–1: az űrkorszak kezdete.]]",
    sections: [
      {
        title: "Kétpólusú világ",
        text:
          "NATO és Varsói Szerződés; **vasfüggöny** Európában. Gazdasági tömbök, propaganda, titkosszolgálatok.",
      },
      {
        title: "Válságok és konfliktusok",
        text:
          "**Berlin**, **Korea**, **Kubai rakétaválság (1962)**, **Vietnam**. A nukleáris elrettentés miatt a nagyhatalmak közvetlenül nem csaptak össze.",
      },
      {
        title: "Enyhülés és felbomlás",
        text:
          "Fegyverzetkorlátozási egyezmények, majd a Szovjetunió válsága. **1989–1991**: rendszerváltások, a SZU felbomlik.",
      },
    ],
    dates: [
      { year: 1949, event: "NATO megalakulása", extra: "Nyugati katonai szövetség." },
      { year: 1955, event: "Varsói Szerződés", extra: "Szovjet vezette katonai tömb." },
      { year: 1956, event: "Magyar forradalom", extra: "Szovjet beavatkozás leveri." },
      { year: 1962, event: "Kubai rakétaválság", extra: "A nukleáris háború közvetlen veszélye." },
      { year: 1969, event: "Holdra szállás", extra: "Űrverseny csúcspontja." },
      { year: 1989, event: "Kelet-európai rendszerváltások", extra: "Békés átmenet több országban." },
      { year: 1991, event: "Varsói Szerződés és a SZU megszűnése", extra: "A hidegháború vége." },
    ],
    keywords: [
      { term: "Elrettentés", def: "Fegyverekkel való visszatartás politikája." },
      { term: "Vasfüggöny", def: "Kelet és Nyugat éles politikai-gazdasági határa." },
      { term: "Enyhülés (détente)", def: "Feszültségcsökkentés a ’70-es években." },
      { term: "Fegyverzetkorlátozás", def: "SALT, START, INF-szerződések." },
      { term: "Proxyháború", def: "Közvetett, helyi háború nagyhatalmi támogatással." },
    ],
  },
};

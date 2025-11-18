// lib/foldrajz/bank.ts
// 8. osztály – Földrajz kérdésbank (ugyanolyan szerkezet, mint a Biológia)

export type BankQuestion = {
  id?: string;
  q: string;
  options: string[];
  correctIndex: number;
  exp?: string;
};

type Section = {
  id: string;
  title: string;
  bank: BankQuestion[];
};

type Topic = {
  id: string;
  title: string;
  sections: Section[];
};

/* ===========================================================
   TÉMÁK
   =========================================================== */


    // 1) MAGYARORSZÁG FÖLDRAJZA – 20-20 kérdés/altéma
export const topic_magyarorszag: Topic = {
  id: "foldrajz_8_magyarorszag",
  title: "Magyarország földrajza",
  sections: [
    /* ========== A) Földrajzi helyzet és domborzat (20) ========== */
    {
      id: "foldtani_helyzet_es_domborzat",
      title: "Földrajzi helyzet és domborzat",
      bank: [
        { q: "Magyarország melyik földrajzi nagytáj közepén fekszik?", options: ["Pannon-medence", "Appalache-medence", "Tarim-medence", "Kalahári-medence"], correctIndex: 0 },
        { q: "Magyarország legmagasabb pontja:", options: ["Kékes (1014 m)", "Csóványos (938 m)", "Írott-kő (882 m)", "Badacsony (437 m)"], correctIndex: 0 },
        { q: "Melyik NEM magyarországi nagytáj?", options: ["Alföld", "Kisalföld", "Északi-középhegység", "Nyugati-Kárpátok"], correctIndex: 3, exp: "A Nyugati-Kárpátok Szlovákiában/emelt peremterületen található." },
        { q: "Az Alföld felszínformálója elsősorban…", options: ["gleccser", "folyóvíz és szél", "tengerjárás", "vulkánosság"], correctIndex: 1 },
        { q: "A Dunántúli-középhegység fő kőzete:", options: ["mészkő–dolomit", "gránit", "andezit", "pala"], correctIndex: 0 },
        { q: "Az Északi-középhegységre jellemző kőzetpáros:", options: ["bazalt–andezit", "gránit–gneisz", "homokkő–agyagkő", "márga–gipsz"], correctIndex: 0 },
        { q: "Melyik táj fekszik a Duna és Balaton között?", options: ["Dunántúli-középhegység", "Alpokalja", "Dunántúli-dombság", "Őrség"], correctIndex: 0 },
        { q: "A Kisalföld központi folyója:", options: ["Rába", "Tisza", "Maros", "Ipoly"], correctIndex: 0 },
        { q: "Az Alföld legalacsonyabb térszíne a…", options: ["Bihar-hegység", "Szegedi-síkság", "Beregi-síkság", "Karancs"], correctIndex: 1, exp: "A Tisza–Maros köze a legalacsonyabb (79–85 m)." },
        { q: "A Somogyi-dombság és Zalai-dombság együtt:", options: ["Alföld", "Dunántúli-dombság", "Őrség", "Dráva-mente"], correctIndex: 1 },
        { q: "A Bakony melyik nagytáj része?", options: ["Dunántúli-középhegység", "Alföld", "Északi-középhegység", "Kisalföld"], correctIndex: 0 },
        { q: "A Mátra kialakulása főként…", options: ["gyűrődés", "vulkánosság", "gleccservájás", "tengerelöntés"], correctIndex: 1 },
        { q: "Melyik NEM vulkáni tanúhegy?", options: ["Badacsony", "Ság-hegy", "Cserhát", "Somló"], correctIndex: 2 },
        { q: "Az ország földrajzi középpontja kb. hol található?", options: ["Pusztavacs környéke", "Kiskunhalas", "Siófok", "Záhony"], correctIndex: 0 },
        { q: "A Mecsek legmagasabb pontja:", options: ["Zengő", "Irott-kő", "Kőris-hegy", "Kopasz-tető"], correctIndex: 0 },
        { q: "A kárpát-medencei süllyedékek feltöltődésének anyaga főleg…", options: ["lösz és folyóvízi üledék", "gránit", "bazaltláva", "gneisz"], correctIndex: 0 },
        { q: "A Maros hordalékkúpja hol található?", options: ["Szeged–Makó térsége", "Győr környéke", "Zemplén", "Őrség"], correctIndex: 0 },
        { q: "A Dunakanyar mely hegységek között fekszik?", options: ["Visegrádi-hegység – Börzsöny", "Bakony – Vértes", "Bükk – Mátra", "Mecsek – Villányi-hg."], correctIndex: 0 },
        { q: "Melyik táj NEM síkvidék?", options: ["Hajdúság", "Nyírség", "Zempléni-hegység", "Közép-Tisza-vidék"], correctIndex: 2 },
        { q: "A Dunántúli-dombság keleti peremén húzódó tó:", options: ["Fertő-tó", "Velencei-tó", "Tisza-tó", "Szelidi-tó"], correctIndex: 1 }
      ]
    },

    /* ========== B) Vizek, éghajlat, talajok (20) ========== */
    {
      id: "vizek_klima_talajok",
      title: "Vizek, éghajlat, talajok",
      bank: [
        { q: "Magyarország éghajlata:", options: ["trópusi monszun", "mérsékelt övi, kontinentális hatás erős", "óceáni", "sarkvidéki"], correctIndex: 1 },
        { q: "A Golf-áramlat hatása hazánkban közvetve…", options: ["hűti az időt", "melegíti Nyugat-Európát → nyugatias hatás", "szárazságot okoz", "nincs hatása"], correctIndex: 1 },
        { q: "A Tisza szabályozásának fő oka:", options: ["árvizek", "hajózás", "öntözés", "halászat"], correctIndex: 0 },
        { q: "A Balaton kialakulása:", options: ["gleccser vájta teknő", "süllyedékes medence vízzel feltöltve", "krátertó", "tengerszármazék"], correctIndex: 1 },
        { q: "A Velencei-tó tipusa:", options: ["szikes tó", "sekély, szél által felkavart", "gleccsertó", "mesterséges tározó"], correctIndex: 1 },
        { q: "A Fertő-tó különlegessége:", options: ["mély hegyi tó", "nádasokkal benőtt, sekély sztyeppi tó", "vulkáni krátertó", "tengeri öböl"], correctIndex: 1 },
        { q: "A Tisza-tó:", options: ["természetes tó", "víztározó (duzzasztás)", "gleccsertó", "forrástó"], correctIndex: 1 },
        { q: "Az éves csapadék hazánk nagy részén:", options: ["300 mm alatt", "500–800 mm", "1000 mm felett", "2500 mm"], correctIndex: 1 },
        { q: "A legszelesebb évszak átlagosan:", options: ["tavasz", "nyár", "ősz", "tél"], correctIndex: 0 },
        { q: "Az Alföld jellegzetes talaja:", options: ["csernozjom", "laterit", "tundratalaj", "vörösföld"], correctIndex: 0 },
        { q: "A barna erdőtalaj leginkább hol fordul elő?", options: ["hegy- és dombvidékeinken", "Alföld közepén", "szikeseken", "mocsarakban"], correctIndex: 0 },
        { q: "A szikes talaj kialakulása összefügg…", options: ["sófelhalmozódással", "jégkorszaki koptatással", "vulkánossággal", "gleccservájással"], correctIndex: 0 },
        { q: "A hévizek nagy száma mivel magyarázható?", options: ["aktív vulkánokkal", "vastag üledék, jó vízzáró rétegek és geotermikus gradiens", "permafroszttal", "tenger közelségével"], correctIndex: 1 },
        { q: "A Duna vízgyűjtő területéhez tartozik-e hazánk egésze?", options: ["igen", "nem, csak a Dunántúl", "nem, csak az Alföld", "egyik sem"], correctIndex: 0 },
        { q: "Melyik magyar folyó mellékfolyója a Tiszának?", options: ["Rába", "Hernád", "Dráva", "Zala"], correctIndex: 1 },
        { q: "A legnagyobb magyar vízesés természetes esése:", options: ["Lillafüred (Palotaszálló mellett)", "Ilona-völgyi-vízesés", "Ördögmalom-vízesés", "Rám-szakadék"], correctIndex: 1 },
        { q: "A leggyakoribb szélsőséges időjárási jelenség az Alföldön:", options: ["zivatarok szélviharral", "hurrikán", "szökőár", "permanens köd"], correctIndex: 0 },
        { q: "A talajdegradáció egyik fő oka hazánkban:", options: ["erózió és defláció", "gleccservájás", "tengerjárás", "permafroszt"], correctIndex: 0 },
        { q: "A Duna magyarországi szakaszának iránya nagyvonalakban:", options: ["É–D", "K–Ny", "Ny–K", "D–É"], correctIndex: 0 },
        { q: "A vízjárásra jellemző a Tiszán:", options: ["két nagy árhullám (tavasz, kora nyár)", "állandó vízszint", "téli legnagyobb vízállás", "őszi jeges ár"], correctIndex: 0 }
      ]
    },

    /* ========== C) Népesség és települések (20) ========== */
    {
      id: "nepesseg_es_telepulesek",
      title: "Népesség és települések",
      bank: [
        { q: "Magyarország népessége az utóbbi évtizedekben:", options: ["gyorsan nő", "csökken és öregszik", "változatlan", "robbanásszerű növekedés"], correctIndex: 1 },
        { q: "Az agglomeráció jelentése:", options: ["tanyavilág", "nagyváros és környéke összenövő településgyűrűvel", "alpesi falu", "szórványtelepülés"], correctIndex: 1 },
        { q: "Budapest két városrésze:", options: ["Buda és Pest", "Buda és Óbuda", "Bécs és Pest", "Pest és Pécs"], correctIndex: 0 },
        { q: "A vándorlási egyenleg pozitív, ha:", options: ["többen vándorolnak be, mint ki", "többen vándorolnak ki", "nincs mozgás", "csak külföldiek jönnek"], correctIndex: 0 },
        { q: "A természetes szaporodás negatív, ha:", options: ["születések > halálozások", "halálozások > születések", "egyenlő", "nincs adat"], correctIndex: 1 },
        { q: "A falvak funkciói közül NEM jellemző:", options: ["mezőgazdaság", "ipari termelés", "közigazgatási központ nagy intézményekkel", "helyi szolgáltatások"], correctIndex: 2 },
        { q: "A megyeszékhely NEM ez:", options: ["Salgótarján", "Szekszárd", "Vác", "Tatabánya"], correctIndex: 2 },
        { q: "Az ország legnépesebb megyéje:", options: ["Pest megye", "Bács-Kiskun", "Hajdú-Bihar", "Vas"], correctIndex: 0 },
        { q: "A népsűrűség általában nagyobb:", options: ["síkvidék városöveiben", "magashegységekben", "mocsarakban", "szikes pusztán"], correctIndex: 0 },
        { q: "A szuburbanizáció lényege:", options: ["vidék visszavándorlás a belvárosba", "városból kiköltözés a peremre", "falvak kiürülése", "nyaralók építése hegyekben"], correctIndex: 1 },
        { q: "A demográfiai öregedés azt jelenti, hogy:", options: ["nő a 65+ aránya", "nő a 0–14 évesek aránya", "csökken a várható élettartam", "több a születés"], correctIndex: 0 },
        { q: "A központi régió neve:", options: ["Közép-Dunántúl", "Közép-Magyarország", "Dél-Alföld", "Észak-Alföld"], correctIndex: 1 },
        { q: "A budapesti budai oldal jellemzője:", options: ["sík, pesti síkság", "hegylábi, dombvidéki", "szikes", "árterület"], correctIndex: 1 },
        { q: "A történelmi városszerkezetre NEM jellemző:", options: ["belváros–gyűrűs sugárutas hálózat", "ipari zóna peremeken", "falusias szórvány", "lakótelepek a 20. századból"], correctIndex: 2 },
        { q: "A fő kelet-nyugati gyorsforgalmi tengely:", options: ["M1–M3", "M7–M3", "M1–M7", "M5–M6"], correctIndex: 2 },
        { q: "Turisztikai központ NEM ez:", options: ["Hévíz", "Siófok", "Hollókő", "Karcag olajfalu"], correctIndex: 3 },
        { q: "Az Alföldre jellemző településforma:", options: ["szalagtelkes utcás falu", "tanyás térség", "alpesi fésűs beépítés", "fjordmenti város"], correctIndex: 1 },
        { q: "A városi rangot kiadhatja:", options: ["országos népszavazás", "köztársasági elnök", "országgyűlés/törvény", "önkormányzat saját hatáskörben"], correctIndex: 2 },
        { q: "A felsőoktatási központ NEM ez:", options: ["Szeged", "Debrecen", "Miskolc", "Kistelek"], correctIndex: 3 }
      ]
    },

    /* ========== D) Gazdaság ágazatai (20) ========== */
    {
      id: "gazdasag_agazatai",
      title: "Gazdaság ágazatai",
      bank: [
        { q: "A magyar villamosenergia-termelés gerince:", options: ["Paksi atomerőmű", "Tiszai vízerőművek", "barnaszén-erőművek", "csak naperőművek"], correctIndex: 0 },
        { q: "A tercier szektor tartalma:", options: ["mezőgazdaság", "ipar", "szolgáltatások", "bányászat"], correctIndex: 2 },
        { q: "Autóipari központ:", options: ["Győr", "Salgótarján", "Sátoraljaújhely", "Zalaegerszeg"], correctIndex: 0 },
        { q: "A magyar gabonatermesztés központja:", options: ["Alföld", "Őrség", "Zemplén", "Mecsek"], correctIndex: 0 },
        { q: "Borkultúra szempontjából NEM híres:", options: ["Tokaj", "Villány", "Badacsony", "Karcag"], correctIndex: 3 },
        { q: "A hazai kőolaj- és földgázkitermelés fő területe:", options: ["Alföld és Zalai-medence", "Mátra", "Bakony", "Őrség"], correctIndex: 0 },
        { q: "A turizmusban kiemelt desztináció NEM ez:", options: ["Balaton", "Budapest", "Hollókő", "Piliscsabai erdőgazdaság zárt területe"], correctIndex: 3 },
        { q: "A gyógyszeripar egyik központja:", options: ["Debrecen", "Komló", "Ózd", "Kisvárda"], correctIndex: 0 },
        { q: "A logisztikai csomóponti helyzetet erősíti:", options: ["peremtérségi elhelyezkedés", "központi fekvés az európai folyosókon", "tengerszint feletti magasság", "szikes talajok"], correctIndex: 1 },
        { q: "A termál- és gyógyturizmus alapja:", options: ["gleccser", "geotermikus adottság", "tengerpart", "permafroszt"], correctIndex: 1 },
        { q: "Az agrárszektor korszerűsítésének kulcsa NEM ez:", options: ["öntözés fejlesztése", "precíziós gazdálkodás", "fajtaszelekció", "erdőirtás növelése"], correctIndex: 3 },
        { q: "A megújuló energiák közül legdinamikusabban nő:", options: ["napenergia", "szélenergia", "geotermia", "vízenergia"], correctIndex: 0 },
        { q: "A munkaerőpiac regionális különbségeit befolyásolja NEM ez:", options: ["képzettség", "elérhetőség", "domborzat", "kulturális kínálat"], correctIndex: 2 },
        { q: "A Duna hajózhatóságát javítja:", options: ["duzzasztás és mederszabályozás", "tengerjárás", "hullámtörő gátak a Balatonon", "mesterséges gleccser"], correctIndex: 0 },
        { q: "A magyar ICT/technológiai központok egyike:", options: ["Budapest", "Zirc", "Őriszentpéter", "Bábolna"], correctIndex: 0 },
        { q: "A mezőgazdaságban az öntözés leginkább szükséges:", options: ["Nyírség homoktalajain", "Mecsekben", "Zempléni-hegységben", "Kőszegi-hegységben"], correctIndex: 0 },
        { q: "A külkereskedelmi mérleg aktív, ha:", options: ["import > export", "export > import", "nincs külkereskedelem", "csak szolgáltatás export van"], correctIndex: 1 },
        { q: "A hazai alumíniumipar nyersanyaga korábban főleg…", options: ["bauxit", "márvány", "gránit", "homokkő"], correctIndex: 0 },
        { q: "A kreatív iparágak NEM ide tartoznak:", options: ["design", "filmipar", "pékáru-kiskereskedelem", "játékfejlesztés"], correctIndex: 2 },
        { q: "A regionális fejlesztési pólusváros NEM ez:", options: ["Pécs", "Szeged", "Debrecen", "Tokaj"], correctIndex: 3 }
      ]
    }
  ]
};

// 2) KÁRPÁT-MEDENCE – 20-20-20 kérdés/altéma
export const topic_karpat_medence: Topic = {
  id: "foldrajz_8_karpat_medence",
  title: "A Kárpát-medence",
  sections: [
    /* ========== A) Földtani fejlődés és felépítés (20) ========== */
    {
      id: "foldtani_fejlodes",
      title: "Földtani fejlődés és felépítés",
      bank: [
        { q: "A Kárpát-medence kialakulását döntően mely lemezmozgás magyarázza?", options: ["Afrikai–Eurázsiai ütközés", "Pacifikus szubdukció", "Indiai–Eurázsiai ütközés", "Észak-amerikai–Európai távolodás"], correctIndex: 0 },
        { q: "Mikor létezett a Pannon-tenger?", options: ["prekambrium", "miocén", "triász", "pliocén"], correctIndex: 1 },
        { q: "A Pannon-medence aljzatának jelentős része:", options: ["ősi kristályos kőzetek és rátelepült üledékek", "friss bazaltláva", "gleccserjég", "homokdűne"], correctIndex: 0 },
        { q: "A medence süllyedékterei főként mivel töltődtek fel?", options: ["szélhordta homokkal", "folyóvízi és tóüledékekkel", "gránittörmelékkel", "tengeri korallal"], correctIndex: 1 },
        { q: "A Kárpátok hegységív jellege:", options: ["összefüggő lánchegység, fiatal gyűrt vonulat", "ősöreg pajzs", "táblás fennsík", "atollok láncolata"], correctIndex: 0 },
        { q: "Mely vulkáni formák jellemzik a belső peremeket?", options: ["pajzsvulkánok", "andezites rétegvulkánok", "tűzhányómentes süllyedékek", "tufagyűrűk tengeren"], correctIndex: 1 },
        { q: "A Dunakanyar kanyarulatát elsősorban mi alakítja?", options: ["szél", "Duna eróziója és szerkezeti vonalak", "gleccser", "apály-dagály"], correctIndex: 1 },
        { q: "A medence peremén elhelyezkedő ősmasszívum NEM ez:", options: ["Cseh-masszívum pereme", "Alpok előtere", "Skandináv-pajzs", "Dinaridák előtere"], correctIndex: 2 },
        { q: "A Kárpát-medence átlagos tengerszint feletti magassága:", options: ["kb. 100 m", "kb. 200–300 m", "kb. 800 m", "kb. 1500 m"], correctIndex: 1 },
        { q: "A Pannon-tenger visszahúzódása után mi maradt vissza nagy területen?", options: ["bazaltmező", "lösztakaró", "gránitsziklák", "jégmező"], correctIndex: 1 },
        { q: "A Balaton medencéje geológiailag:", options: ["gleccservájta", "besüllyedt árkos terület", "kaldera", "karsztos töbör"], correctIndex: 1 },
        { q: "A Visegrádi-hegység fő kőzete:", options: ["gránit", "andezit", "márga", "mészkő"], correctIndex: 1 },
        { q: "A Bükk-hegység túlnyomóan … kőzetből épül fel.", options: ["mészkő", "bazalt", "gránit", "szerpentin"], correctIndex: 0 },
        { q: "A medencealjzat mélyebb részein gyakori:", options: ["sóstalaj", "kőolaj és földgáz csapdázódása", "vasérc telepek", "gyémántképződés"], correctIndex: 1 },
        { q: "Az Alföld felszínének fiatal formálója:", options: ["jégkori gleccser", "folyóvízi üledékképződés és szél", "vulkanizmus", "apály-dagály"], correctIndex: 1 },
        { q: "A Kárpátokban a legmagasabb csúcsok elérik a …", options: ["2000 m-t", "3000 m-t", "4000 m-t", "5000 m-t"], correctIndex: 1 },
        { q: "A medence peremén NEM található:", options: ["Alpok", "Kárpátok", "Dinári-hegység", "Andok"], correctIndex: 3 },
        { q: "A „tanuhegy” kifejezés mire utal?", options: ["megmaradt kemény fedőkőzet a puhább eróziója után", "fiatal tufakúp", "gleccservájta dob", "szélvájta kürtő"], correctIndex: 0 },
        { q: "A Mátra vulkáni tevékenysége főleg milyen korú?", options: ["ősi prekambriumi", "mezozoós", "neogén–kainozoós (miocén)", "jelenkori"], correctIndex: 2 },
        { q: "A fő szerkezeti vonalak mentén gyakori jelenség:", options: ["forró pont kialakulása", "törések menti hévizesedés", "jégfelhalmozódás", "apályos barázdák"], correctIndex: 1 }
      ]
    },

    /* ========== B) Természeti erőforrások (20) ========== */
    {
      id: "termeszeti_eroforrasok",
      title: "Természeti erőforrások",
      bank: [
        { q: "A belső medenceterületek fontos energiahordozói:", options: ["kőolaj és földgáz", "uránérc tömegesen", "szénhidrogénmentes", "csak szén"], correctIndex: 0 },
        { q: "A kőolaj és földgáz csapdázódása leginkább … kőzettestekhez kötődik.", options: ["magmás gránit", "üledékes rétegek és záródások", "metamorf palák", "bazaltkürtők"], correctIndex: 1 },
        { q: "A hegységkeretben jellemző ásványkincs:", options: ["nitrát", "nemesfémek és színesfémek", "borax", "kősó csak"], correctIndex: 1 },
        { q: "A bauxit-előfordulások a medence mely részéhez kapcsolódnak?", options: ["mészkő–dolomit vonulatok pereme", "gránit aljzat", "tengerpart", "gleccserhát"], correctIndex: 0 },
        { q: "A sóbányászat hagyományos központja a térségben:", options: ["Erdély (pl. Parajd, Torda)", "Alföld közepe", "Dinári-karszt tengerpartja", "Skandináv-pajzs"], correctIndex: 0 },
        { q: "A termálvízkincs bősége oka:", options: ["vulkánkitörések", "magas geotermikus gradiens és repedezett kőzetek", "permafroszt", "tengeri áramlatok"], correctIndex: 1 },
        { q: "A lignit- és barnaszén-telepek főként … eredetűek.", options: ["tavi/ mocsári üledékek", "vulkáni hamu", "tengeri korall", "gleccsermoréna"], correctIndex: 0 },
        { q: "A karsztvizek fő befogadó kőzete:", options: ["mészkő és dolomit", "gránit", "andezit", "pala"], correctIndex: 0 },
        { q: "A vízenergia-potenciál miért korlátozott a medencében?", options: ["nincs folyó", "kisebb esés, sík terep", "túl hideg a víz", "tiltja a jog"], correctIndex: 1 },
        { q: "A termékeny lösztalaj fontos erőforrás, mert…", options: ["növeli a talaj szikesedését", "jó víz- és tápanyagraktár", "csak lucernának alkalmas", "savanyú, köves"], correctIndex: 1 },
        { q: "A szélenergia hasznosítása korlátozott főként … miatt.", options: ["alacsony átlagos szélsebesség", "túl sok hegy", "túl meleg éghajlat", "túl magas tengerszint"], correctIndex: 0 },
        { q: "A kőépítőanyag, amely a hegységperem bányászataiban gyakori:", options: ["gránitblokk", "mészkő és dolomit", "gabbró", "riolit üveg"], correctIndex: 1 },
        { q: "Réz- és aranyérc hagyományos bányavidéke:", options: ["Erdélyi-érchegység", "Kisalföld", "Bácska", "Kemeneshát"], correctIndex: 0 },
        { q: "A földgáz hazai/medencebeli előfordulásának kora gyakran:", options: ["devon", "neogén", "perm", "kréta"], correctIndex: 1 },
        { q: "A sókarszt jelensége elsősorban hol fordul elő?", options: ["Parajd és környéke", "Balaton-felvidék", "Őrség", "Nyírség"], correctIndex: 0 },
        { q: "A geotermikus energia közvetlen felhasználása NEM ez:", options: ["távfűtés", "fürdők", "üvegházi fűtés", "gleccserolvasztás"], correctIndex: 3 },
        { q: "A természeti erőforrás fogalma azt jelenti:", options: ["minden, amit a természet nyújt, és hasznosítható", "csak a bányászat", "csak a megújulók", "csak a földgáz"], correctIndex: 0 },
        { q: "A vízkészletek utánpótlása főleg miből történik?", options: ["tengervíz bepárlása", "csapadék és beszivárgás", "folyók visszafolyása", "gleccserolvadék"], correctIndex: 1 },
        { q: "A termőföld védelmét szolgáló eljárás NEM ez:", options: ["talajtakarás, mulcsozás", "kontúrszántás lejtőn", "erdőirtás meredek lejtőn", "vetésforgó"], correctIndex: 2 },
        { q: "A medencében a megújulók közül ígéretes még:", options: ["geotermia és napenergia", "ár-apály", "hullámenergia", "jégenergia"], correctIndex: 0 }
      ]
    },

    /* ========== C) Népesség és gazdasági kapcsolatok (20) ========== */
    {
      id: "nepesseg_gazdasagi_kapcsolatok",
      title: "Népesség és gazdasági kapcsolatok",
      bank: [
        { q: "A Kárpát-medence népeire NEM jellemző:", options: ["több nemzet együttélése", "gazdasági együttműködés", "sarki bálnavadászat", "turisztikai kapcsolatok"], correctIndex: 2 },
        { q: "A régió közlekedési helyzetének előnye:", options: ["peremtérségi fekvés", "központi csomópont Európában", "nincs folyóhálózat", "óceáni kikötők"], correctIndex: 1 },
        { q: "A határ menti együttműködések célja NEM ez:", options: ["infrastruktúra-fejlesztés", "kereskedelem élénkítése", "kulturális kapcsolatok", "elszigetelés fokozása"], correctIndex: 3 },
        { q: "A népesség változására általában jellemző:", options: ["erős növekedés mindenütt", "vannak csökkenő és növekvő térségek is", "teljes stagnálás", "csak bevándorlás"], correctIndex: 1 },
        { q: "A régión belüli migráció oka lehet:", options: ["munka, tanulás, család", "csak turizmus", "csak sport", "csak éghajlat"], correctIndex: 0 },
        { q: "A gazdaság térszerkezetét NEM alakítja:", options: ["közlekedés", "nyersanyag- és energiaforrás", "munkaerő", "holdfázis"], correctIndex: 3 },
        { q: "A Duna nemzetközi szerepe:", options: ["országon belüli kis patak", "Európa egyik fő vízi útvonala", "óceáni áramlat", "vízeséslánc"], correctIndex: 1 },
        { q: "A városhálózat sűrűbb általában:", options: ["síkságok és folyóvölgyek mentén", "kopár sivatagban", "gleccsermezőkön", "magashegységek gerincein"], correctIndex: 0 },
        { q: "A regionális központ NEM ez:", options: ["Pozsony/Bratislava", "Kolozsvár/Cluj", "Ungvár/Uzhhorod", "Sahalin"], correctIndex: 3 },
        { q: "A turizmus húzóágazata NEM jellemző:", options: ["gyógyfürdők", "karsztvidékek", "fjordevezés", "történelmi városok"], correctIndex: 2 },
        { q: "A mezőgazdasági specializáció példája:", options: ["Tokaji borvidék", "szahara rizstermesztés", "alpesi kukorica", "tajga narancsültetvény"], correctIndex: 0 },
        { q: "A munkamegosztás erősödése együtt jár:", options: ["elszigetelődéssel", "kereskedelmi kapcsolatok bővülésével", "városok eltűnésével", "folyók kiszáradásával"], correctIndex: 1 },
        { q: "A kis- és középvárosok szerepe:", options: ["csak mezőgazdaság", "ipari, szolgáltatási és közigazgatási központok", "nincs szerepük", "csak katonai bázisok"], correctIndex: 1 },
        { q: "A határ menti vásárok, piacok jelentősége:", options: ["kereskedelmi és kulturális kapcsolat", "csak turisztikai fotó", "nincs jelentőség", "csak helyi adóbeszedés"], correctIndex: 0 },
        { q: "A gazdasági tengelyek gyakran:", options: ["vízválasztók", "folyóvölgyek és fő közlekedési folyosók", "sivatagi dűnesorok", "gleccserek"], correctIndex: 1 },
        { q: "A térség energetikai együttműködésének eszköze NEM ez:", options: ["gázvezetékek", "villamos hálózati összeköttetések", "kőolajvezetékek", "ősöreg kőbalta csere"], correctIndex: 3 },
        { q: "A munkaerő-áramlás egyik következménye:", options: ["teljes néptelenedés mindenütt", "regionális különbségek mérséklődhetnek vagy nőhetnek", "nincs hatás", "csak turizmus nő"], correctIndex: 1 },
        { q: "A régió gazdaságában meghatározó szektorok:", options: ["csak bányászat", "ipar, mezőgazdaság, szolgáltatások vegyesen", "csak vadászat", "csak halászat"], correctIndex: 1 },
        { q: "A nagyvárosi agglomerációk problémája lehet:", options: ["közlekedési torlódás", "szmog", "lakhatási költségek emelkedése", "mindhárom"], correctIndex: 3 },
        { q: "Az EU-tagság a térség országainak …", options: ["elszigeteltséget növelte", "kereskedelmi és munkaerőpiaci integrációt erősítette", "megszüntette a városokat", "megállította a turizmust"], correctIndex: 1 }
      ]
    }
  ]
};

// 3) EURÓPA FÖLDRAJZA – 20-20-20 kérdés/altéma
export const topic_europa: Topic = {
  id: "foldrajz_8_europa",
  title: "Európa földrajza",
  sections: [
    /* ========== A) Természeti környezet (20) ========== */
    {
      id: "termeszeti_kornyezet",
      title: "Természeti környezet",
      bank: [
        { q: "Európa északi része főként milyen kőzetekből épül fel?", options: ["gránit és kristályos palák", "mészkő és dolomit", "homokkő és agyagkő", "andezit és bazalt"], correctIndex: 0 },
        { q: "A Skandináv-hegység kialakulása:", options: ["ősidőbeli gyűrődés", "fiatal lánchegység", "vulkáni eredet", "gleccservájás"], correctIndex: 0 },
        { q: "Európa legmagasabb pontja:", options: ["Mont Blanc (4807 m)", "Matterhorn (4478 m)", "Elbrusz (5642 m)", "Grossglockner (3798 m)"], correctIndex: 2, exp: "Az Elbrusz a Kaukázusban található, Európa legmagasabb pontja." },
        { q: "A nagy európai síkság fő folyói:", options: ["Rajna, Rhône, Szajna", "Volga, Dnyeper, Visztula", "Loire, Elba, Po", "Tisza, Dráva, Morava"], correctIndex: 1 },
        { q: "A Golf-áramlat hatása:", options: ["lehűti a partokat", "melegíti Nyugat-Európát", "állandó sivatagot okoz", "nincs hatása"], correctIndex: 1 },
        { q: "A Pireneusok határhegység … között.", options: ["Franciaország és Spanyolország", "Olaszország és Svájc", "Németország és Ausztria", "Szerbia és Bulgária"], correctIndex: 0 },
        { q: "A Kárpátok az … része.", options: ["Alpokalja", "Alpok–Kárpát hegységrendszer", "Urál", "Appalache"], correctIndex: 1 },
        { q: "A gleccserek által vájt mélyedések a norvég partokon:", options: ["fjordok", "lagúnák", "mangrovék", "korallzátonyok"], correctIndex: 0 },
        { q: "Az Alpok szerkezete főként … hegységtípus.", options: ["gyűrt", "rög", "táblás", "bazaltos"], correctIndex: 0 },
        { q: "A legnagyobb európai folyó:", options: ["Rajna", "Volga", "Duna", "Loire"], correctIndex: 1 },
        { q: "A Pó-síkság Európa egyik legtermékenyebb mezőgazdasági területe, mert:", options: ["vulkanikus hamuval fedett", "folyóhordalékos, sík, öntözhető", "száraz sivatag", "gleccserhát"], correctIndex: 1 },
        { q: "A Balti-tenger vize:", options: ["sósabb az átlagnál", "gyakorlatilag édes", "nagyon mély tenger", "állandóan jégmentes"], correctIndex: 1 },
        { q: "Európa legnagyobb tava:", options: ["Balaton", "Ladoga-tó", "Genfi-tó", "Vänern"], correctIndex: 1 },
        { q: "A Mediterráneum éghajlata:", options: ["nyáron forró, száraz; télen enyhe, csapadékos", "állandóan fagyos", "sztyepp", "tundra"], correctIndex: 0 },
        { q: "A tundra zóna jellemző növénye:", options: ["nyírfa", "zuzmó és moha", "olajfa", "bükk"], correctIndex: 1 },
        { q: "Az európai tajga-övezet jellemző fája:", options: ["lucfenyő", "tölgy", "gesztenye", "pálma"], correctIndex: 0 },
        { q: "A nyugat-európai síkság éghajlatát a … befolyásolja.", options: ["Atlanti-óceán", "Szahara", "Jeges-tenger", "Földközi-tenger"], correctIndex: 0 },
        { q: "Az Alpok csapadékos oldalai:", options: ["nyugati és északi lejtők", "keleti és déli lejtők", "minden irányban azonos", "nincs csapadék"], correctIndex: 0 },
        { q: "A Duna forrása …", options: ["a Fekete-erdőben", "a Pireneusokban", "a Tátrában", "a Kaukázusban"], correctIndex: 0 },
        { q: "Európa legnagyobb félszigete:", options: ["Skandináv", "Iberiai", "Balkán", "Appennini"], correctIndex: 0 }
      ]
    },

    /* ========== B) Népesség, térszerkezet és gazdaság (20) ========== */
    {
      id: "nepesseg_ter_es_gazdasag",
      title: "Népesség, térszerkezet és gazdaság",
      bank: [
        { q: "Európa lakossága kb. … fő.", options: ["250 millió", "450 millió", "750 millió", "1 milliárd"], correctIndex: 2 },
        { q: "A népesség sűrűsége a legnagyobb:", options: ["Benelux-államokban", "Skandináviában", "Oroszország északi részén", "Alpokban"], correctIndex: 0 },
        { q: "Az elöregedő társadalmakra jellemző:", options: ["sok gyermek", "kevés fiatal, sok idős", "gyors növekedés", "nincs bevándorlás"], correctIndex: 1 },
        { q: "A városodás (urbanizáció) aránya Nyugat-Európában:", options: ["nagyon magas", "alacsony", "0%", "csak falvak"], correctIndex: 0 },
        { q: "A „Ruhr-vidék” híres …", options: ["bányászat és nehézipar", "turizmus", "halászat", "sivatag"], correctIndex: 0 },
        { q: "Az európai ipari háromszög egyik csúcsa NEM ez:", options: ["Ruhr-vidék", "Rajna–Benelux régió", "Észak-Olaszország", "Andalúzia"], correctIndex: 3 },
        { q: "Az EU (Európai Unió) alapvető célja:", options: ["közös piac és gazdasági együttműködés", "katonai szövetség", "világbirodalom", "vallási egység"], correctIndex: 0 },
        { q: "Az EU központja (fő intézmények):", options: ["Brüsszel", "Párizs", "Berlin", "Róma"], correctIndex: 0 },
        { q: "A GDP alapján Európa három legnagyobb gazdasága:", options: ["Németország, Franciaország, Olaszország", "Magyarország, Ausztria, Szlovénia", "Spanyolország, Svédország, Finnország", "Lengyelország, Csehország, Szlovákia"], correctIndex: 0 },
        { q: "A szolgáltatások aránya a gazdaságban …", options: ["csökken", "domináns", "nincs", "mindenhol 0"], correctIndex: 1 },
        { q: "Az ipar hanyatló ágazatai közé tartozik:", options: ["nehezebb acélipar", "informatika", "autógyártás", "elektronika"], correctIndex: 0 },
        { q: "A modern ipar húzóágazatai:", options: ["autóipar, elektronika, gyógyszeripar", "textilipar, szénbányászat", "halászat", "vasöntés"], correctIndex: 0 },
        { q: "Az EU egységes fizetőeszköze:", options: ["euró", "font", "korona", "frank"], correctIndex: 0 },
        { q: "A mezőgazdaság Nyugat-Európában főként:", options: ["intenzív, gépesített", "extenzív pásztorkodás", "önellátó", "kézi munkára épülő"], correctIndex: 0 },
        { q: "A közép-kelet-európai országok gazdasági kihívása:", options: ["technológiai lemaradás és tőkehiány", "nincs infrastruktúra", "sivatag", "nincs lakosság"], correctIndex: 0 },
        { q: "A nagy népsűrűség oka lehet:", options: ["kedvező természeti adottság, fejlett ipar", "gleccser és sivatag", "magashegység", "örök hó"], correctIndex: 0 },
        { q: "A migráció fő iránya Európán belül:", options: ["délről és keletről nyugatra", "északtól délre", "nyugatról keletre", "Skandináviába"], correctIndex: 0 },
        { q: "A „Brexit” kifejezés arra utal, hogy …", options: ["Britannia kilépett az EU-ból", "Új ország csatlakozott", "Németország kilépett", "Franciaország csatlakozott"], correctIndex: 0 },
        { q: "A közlekedési folyosók egyik fő tengelye:", options: ["Észak–Dél (Skandinávia–Mediterráneum)", "Nyugat–Kelet (Atlanti–Fekete-tenger)", "mindkettő fontos", "nincs főirány"], correctIndex: 2 },
        { q: "A Schengeni övezet jelentése:", options: ["határellenőrzés nélküli zóna", "vámunió megszűnése", "euró bevezetése", "katonai unió"], correctIndex: 0 }
      ]
    },

    /* ========== C) Tájak és országok – példák (20) ========== */
    {
      id: "tajek_orszagok_peldak",
      title: "Tájak és országok – példák",
      bank: [
        { q: "Skandinávia fő kőzete:", options: ["gránit", "mészkő", "andezit", "pala"], correctIndex: 0 },
        { q: "A Skandináv-félsziget országai:", options: ["Norvégia, Svédország, Finnország", "Dánia, Hollandia, Belgium", "Izland, Grönland, Feröer", "Németország, Svájc, Ausztria"], correctIndex: 0 },
        { q: "A Brit-szigetek fő országai:", options: ["Egyesült Királyság és Írország", "Skócia és Wales", "Anglia és Franciaország", "Norvégia és Dánia"], correctIndex: 0 },
        { q: "A Ruhr-vidék Németországban híres …", options: ["acél- és gépiparáról", "halászatról", "turizmusról", "olajtermelésről"], correctIndex: 0 },
        { q: "A Benelux-államok közé tartozik:", options: ["Belgium, Hollandia, Luxemburg", "Bulgária, Németország, Luxemburg", "Dánia, Norvégia, Finnország", "Ausztria, Svájc, Liechtenstein"], correctIndex: 0 },
        { q: "A Francia-alföld központja:", options: ["Párizs", "Lyon", "Marseille", "Toulouse"], correctIndex: 0 },
        { q: "A Mediterráneum tipikus növénye:", options: ["olajfa", "fenyő", "nyírfa", "bükk"], correctIndex: 0 },
        { q: "A Po-síkság mezőgazdasága:", options: ["öntözéses, intenzív", "sivatagi", "rideg pásztorkodás", "gleccsergazdálkodás"], correctIndex: 0 },
        { q: "A Balkán-félsziget országai közül NEM EU-tag:", options: ["Albánia", "Görögország", "Horvátország", "Bulgária"], correctIndex: 0 },
        { q: "A Svájci Alpok jellemző gazdasága:", options: ["turizmus és tejgazdaság", "halászat", "bányászat", "sivatagi gazdálkodás"], correctIndex: 0 },
        { q: "Az Appennini-félsziget fő országa:", options: ["Olaszország", "Spanyolország", "Portugália", "Franciaország"], correctIndex: 0 },
        { q: "A Pireneusi-félsziget fő országai:", options: ["Spanyolország és Portugália", "Olaszország és Svájc", "Franciaország és Németország", "Görögország és Törökország"], correctIndex: 0 },
        { q: "A Kaukázus országai közül európai részen fekszik:", options: ["Grúzia északi része", "Örményország", "Azerbajdzsán", "mindhárom teljesen Ázsiában van"], correctIndex: 0 },
        { q: "A magyar határon túli Kárpát-medencei országok közül nyugaton:", options: ["Ausztria és Szlovénia", "Románia és Ukrajna", "Horvátország és Szerbia", "Szlovákia és Lengyelország"], correctIndex: 0 },
        { q: "A Földközi-tenger szigetei közül NEM európai:", options: ["Ciprus déli része EU-tag", "Kréta", "Sicilia", "Bali"], correctIndex: 3 },
        { q: "A Baltikum országai:", options: ["Észtország, Lettország, Litvánia", "Dánia, Svédország, Norvégia", "Lengyelország, Csehország, Szlovákia", "Finnország, Oroszország, Ukrajna"], correctIndex: 0 },
        { q: "A lengyel tengerpart:", options: ["Balti-tenger", "Földközi-tenger", "Fekete-tenger", "Jeges-tenger"], correctIndex: 0 },
        { q: "Európa legnagyobb félszigete:", options: ["Skandináv-félsziget", "Appennini", "Balkán", "Iberiai"], correctIndex: 0 },
        { q: "A dél-európai országokra jellemző energiaforrás:", options: ["napenergia", "kőolaj", "földgáz", "szén"], correctIndex: 0 },
        { q: "Izland különlegessége:", options: ["aktív vulkánosság és gejzírek", "száraz sivatag", "trópusi növényzet", "jégmentes alföld"], correctIndex: 0 }
      ]
    }
  ]
};

// 4) VILÁGGAZDASÁG ÉS GLOBÁLIS FOLYAMATOK – 20-20 kérdés/altéma
export const topic_vilaggazdasag: Topic = {
  id: "foldrajz_8_vilaggazdasag",
  title: "Gazdasági élet és világgazdaság",
  sections: [
    /* ========== A) Gazdasági szférák és szerepük (20) ========== */
    {
      id: "gazdasagi_szferak_es_szerepuk",
      title: "Gazdasági szférák és szerepük",
      bank: [
        { q: "A gazdaság három fő szektora:", options: ["primer, szekunder, tercier", "első, második, harmadik világ", "állami, magán, vegyes", "mezőgazdaság, ipar, bányászat"], correctIndex: 0 },
        { q: "A primer szektor fő tevékenysége:", options: ["mezőgazdaság, erdőgazdálkodás, halászat", "gyártás", "oktatás", "pénzügy"], correctIndex: 0 },
        { q: "A szekunder szektor tartalma:", options: ["feldolgozóipar, építőipar, energiaipar", "mezőgazdaság", "kereskedelem", "oktatás"], correctIndex: 0 },
        { q: "A tercier szektor jellemzője:", options: ["szolgáltatásokat nyújt", "termel nyersanyagot", "energiaforrást állít elő", "építkezésekkel foglalkozik"], correctIndex: 0 },
        { q: "A posztindusztriális társadalmakban:", options: ["a tercier szektor dominál", "a primer szektor a legfontosabb", "nincs ipar", "mezőgazdaság uralkodik"], correctIndex: 0 },
        { q: "Az információs társadalom kulcságazata:", options: ["IT-szektor (informatika, távközlés)", "halászat", "kohászat", "földművelés"], correctIndex: 0 },
        { q: "A világgazdaság központjai jelenleg:", options: ["Észak-Amerika, Nyugat-Európa, Kelet-Ázsia", "Afrika, Dél-Amerika, Ausztrália", "Sarkvidék, Dél-Óceánia", "Közép-Ázsia, Andok, Grönland"], correctIndex: 0 },
        { q: "A fejlett országokra jellemző:", options: ["magas GDP, képzett munkaerő", "alacsony jövedelem", "nincs ipar", "főként önellátó mezőgazdaság"], correctIndex: 0 },
        { q: "A fejlődő országokra jellemző:", options: ["alacsony jövedelem, nyersanyagexport", "fejlett infrastruktúra", "szolgáltatás túlsúlya", "magas életszínvonal"], correctIndex: 0 },
        { q: "A közlekedésben a globalizáció hatása:", options: ["gyorsabb és olcsóbb szállítás", "csak helyi utak maradtak", "nincs nemzetközi forgalom", "csökken a kereskedelem"], correctIndex: 0 },
        { q: "A termelés kihelyezését idegen szóval … nevezzük.", options: ["outsourcing", "import", "transzfer", "recycling"], correctIndex: 0 },
        { q: "A multinacionális (transznacionális) vállalat:", options: ["több országban működik", "csak helyi cégek", "állami üzem", "egy országban korlátozott"], correctIndex: 0 },
        { q: "A GDP jelentése:", options: ["bruttó hazai termék", "nettó export", "jövedelem-arányos adó", "globális deviza-pozíció"], correctIndex: 0 },
        { q: "A munkaerő-megosztás előnye:", options: ["hatékonyság, specializáció", "nincs kapcsolat az országok közt", "munka megszűnik", "termelés leáll"], correctIndex: 0 },
        { q: "A gazdasági növekedés nem feltétlenül jelent …", options: ["életszínvonal-javulást", "GDP-emelkedést", "termelékenységet", "exportot"], correctIndex: 0 },
        { q: "Az ipari forradalom kezdete:", options: ["18. század, Anglia", "14. század, Itáliai városok", "20. század, USA", "21. század, Kína"], correctIndex: 0 },
        { q: "A „negyedik szektor” (kvaterner) magába foglalja:", options: ["kutatás, fejlesztés, IT", "mezőgazdaság", "textilipar", "bányászat"], correctIndex: 0 },
        { q: "A gazdasági életben a tőke:", options: ["pénz, gép, tudás, amellyel termelni lehet", "csak készpénz", "természeti erőforrás", "állami tulajdon"], correctIndex: 0 },
        { q: "A logisztika célja:", options: ["anyag- és információáramlás hatékony szervezése", "csak raktározás", "marketing", "munkaerő-képzés"], correctIndex: 0 },
        { q: "A szolgáltatások példája:", options: ["oktatás, egészségügy, turizmus", "bányászat, olajkitermelés", "mezőgazdaság", "kohászat"], correctIndex: 0 }
      ]
    },

    /* ========== B) Nemzetközi kereskedelem és pénzügyek (20) ========== */
    {
      id: "nemzetkozi_kereskedelem_es_penzugyek",
      title: "Nemzetközi kereskedelem és pénzügyek",
      bank: [
        { q: "A globalizáció egyik fő jellemzője:", options: ["a világgazdasági kapcsolatok erősödése", "elszigetelődés", "helyi piacokra korlátozódás", "állami bezárkózás"], correctIndex: 0 },
        { q: "A külkereskedelmi mérleg aktív, ha:", options: ["az export meghaladja az importot", "az import nagyobb", "egyensúlyban van", "nincs külkereskedelem"], correctIndex: 0 },
        { q: "A kereskedelem alapja:", options: ["országok közti munkamegosztás", "véletlen csere", "erőforrások egyenlősége", "nincs kapcsolat"], correctIndex: 0 },
        { q: "A nemzetközi pénzügyi központok közül NEM ez:", options: ["London", "New York", "Tokió", "Záhony"], correctIndex: 3 },
        { q: "A deviza jelentése:", options: ["külföldi pénznem", "nemzeti valuta", "állami kötvény", "tőzsdei áru"], correctIndex: 0 },
        { q: "A valutaárfolyam azt mutatja meg, hogy …", options: ["egy pénzegység mennyit ér más valutában", "mennyi az infláció", "mekkora a GDP", "mennyi az államadósság"], correctIndex: 0 },
        { q: "A WTO feladata:", options: ["világkereskedelem szabályozása", "háborúk megakadályozása", "természeti erőforrás-védelem", "oktatás szervezése"], correctIndex: 0 },
        { q: "Az IMF rövidítése:", options: ["Nemzetközi Valutaalap", "Ipari Munkásszövetség", "Informatikai Fórum", "Közlekedési Minisztérium"], correctIndex: 0 },
        { q: "A tőzsde szerepe:", options: ["értékpapírok és áruk adás-vétele", "turizmus szervezése", "oktatás", "bányászat"], correctIndex: 0 },
        { q: "A kamat fogalma:", options: ["pénz használatáért fizetett díj", "adó", "profit", "jövedelemadó"], correctIndex: 0 },
        { q: "A világgazdaság vezető valutái:", options: ["USD, EUR, JPY", "PLN, HUF, RON", "PEN, VND, NGN", "UAH, HRK, BAM"], correctIndex: 0 },
        { q: "A nemzetközi pénzügyi válságok gyakran … hatásúak.", options: ["globális", "helyi", "kizárólag afrikai", "érvénytelen"], correctIndex: 0 },
        { q: "A „világkereskedelem” fő jellemzője:", options: ["áruk, szolgáltatások, tőke és munkaerő áramlása", "csak helyi piacok", "önellátás", "elszigeteltség"], correctIndex: 0 },
        { q: "Az EU egységes belső piaca:", options: ["áruk, szolgáltatások, személyek, tőke szabad áramlása", "csak közös pénz", "csak vám", "katonai unió"], correctIndex: 0 },
        { q: "A vám jelentése:", options: ["határon fizetendő adó az áruk után", "belföldi adó", "jövedelemadó", "árengedmény"], correctIndex: 0 },
        { q: "A szabadkereskedelmi egyezmények célja:", options: ["kereskedelmi akadályok csökkentése", "vámok növelése", "piaclezárás", "termelés tilalma"], correctIndex: 0 },
        { q: "A multinacionális cégek székhelye gyakran ott van, ahol …", options: ["kedvező adó- és jogi környezet", "nincs infrastruktúra", "sivatag", "rossz közlekedés"], correctIndex: 0 },
        { q: "A turizmus a világgazdaságban azért fontos, mert …", options: ["jelentős devizabevételt hoz", "csak helyi piacokat érint", "nem ad munkát", "csak veszteséget okoz"], correctIndex: 0 },
        { q: "A világkereskedelemben legnagyobb forgalmat bonyolító termék:", options: ["kőolaj és energiahordozók", "búza", "hal", "faanyag"], correctIndex: 0 },
        { q: "A globalizáció negatív hatása lehet:", options: ["környezetszennyezés, egyenlőtlenségek növekedése", "világbéke", "mindenki gazdagodik", "nincs hatás"], correctIndex: 0 }
      ]
    }
  ]
};

// 5) GLOBÁLIS KÖRNYEZETI PROBLÉMÁK – 20-20 kérdés/altéma
export const topic_globalis: Topic = {
  id: "foldrajz_8_globalis_problemak",
  title: "Globális környezeti problémák",
  sections: [
    /* ========== A) Klímaváltozás és üvegházhatás (20) ========== */
    {
      id: "klimavaltozas",
      title: "Klímaváltozás és üvegházhatás",
      bank: [
        { q: "Az üvegházhatás fő természetes gázai:", options: ["CO₂, H₂O, CH₄", "N₂, O₂, Ar", "He, Ne, Kr", "O₃, NO₂, SO₂"], correctIndex: 0 },
        { q: "Az antropogén (emberi eredetű) CO₂-kibocsátás fő forrása:", options: ["közlekedés és energiatermelés", "fotoszintézis", "óceáni áramlás", "sarki fény"], correctIndex: 0 },
        { q: "A metán (CH₄) nagy kibocsátója NEM ez:", options: ["rizstermesztés", "szarvasmarhatartás", "bermuda-háromszög", "hulladéklerakók"], correctIndex: 2 },
        { q: "A globális átlaghőmérséklet-emelkedés mértékét gyakran ehhez viszonyítjuk:", options: ["iparosodás előtti szint", "1950-es évek", "2000-es évek", "holocén maximum"], correctIndex: 0 },
        { q: "A tengerszint-emelkedés egyik fő oka:", options: ["termikus tágulás és jégolvadás", "szélcsend", "vulkánkitörések hiánya", "mágneses viharok"], correctIndex: 0 },
        { q: "Az IPCC feladata:", options: ["klímatudomány összegzése", "űrkutatás", "világkereskedelem szabályozása", "tengeralattjárók gyártása"], correctIndex: 0 },
        { q: "Az üvegházhatás NEM ezt jelenti:", options: ["a légkör hővisszatartása", "a felszín felmelegedése", "az űr hidege közvetlenül eléri a felszínt", "hősugárzás elnyelődése és visszasugárzása"], correctIndex: 2 },
        { q: "A klímamodellek fő célja:", options: ["jövőbeli trendek becslése", "meteorrajok számolása", "földrengések pontos előrejelzése", "árapály kiszámítása"], correctIndex: 0 },
        { q: "Az éghajlat és az időjárás különbsége:", options: ["éghajlat: hosszú távú átlagok; időjárás: pillanatnyi állapot", "nincs különbség", "éghajlat: csak csapadék", "időjárás: csak hőmérséklet"], correctIndex: 0 },
        { q: "A szárazföldi jég nagy része:", options: ["Antarktiszon és Grönlandon", "Alpokban", "Pireneusokban", "Kárpátokban"], correctIndex: 0 },
        { q: "A savas eső fő oka:", options: ["SO₂ és NOₓ kibocsátás", "CO₂", "H₂", "He"], correctIndex: 0 },
        { q: "Az ózonréteg elvékonyodását főleg mi okozta?", options: ["CFC-k", "CO₂", "CH₄", "N₂"], correctIndex: 0 },
        { q: "A klímaváltozás következménye NEM ez:", options: ["szélsőségesebb időjárás", "ökoszisztémák eltolódása", "tengerszint-emelkedés", "az éves hőingás megszűnése"], correctIndex: 3 },
        { q: "A karbonlábnyom jelentése:", options: ["egy tevékenységhez kötött ÜHG-kibocsátás", "cipőtalp mintázata", "erdők kora", "épület alapterülete"], correctIndex: 0 },
        { q: "A negatív kibocsátás példája:", options: ["CO₂-leválasztás és tárolás (CCS)", "több szén elégetése", "erdőirtás", "óceán savasítása"], correctIndex: 0 },
        { q: "A városok hőszigethatása amiért alakul ki:", options: ["burkolt felületek hőtárolása", "nagy erdők", "gleccserek", "hegyi árnyékolás"], correctIndex: 0 },
        { q: "Mit jelent az éghajlati semlegesség (klímasemlegesség)?", options: ["nettó zéró ÜHG-kibocsátás", "mindenkinek hideg van", "állandó 20 °C", "nincs energiafelhasználás"], correctIndex: 0 },
        { q: "A „1,5 °C cél” kapcsolódik:", options: ["Párizsi Klímaegyezményhez", "Monreali jegyzőkönyvhöz", "Kyotói Egyezményhez (eredetileg)", "Genfi Konvencióhoz"], correctIndex: 0 },
        { q: "A permafroszt felolvadásának kockázata:", options: ["metán felszabadulása", "óceán sótartalma nő", "mágneses pólusváltás", "vulkánok kialszanak"], correctIndex: 0 },
        { q: "Az éghajlatváltozáshoz való alkalmazkodás (adaptáció) példája:", options: ["árvízvédelmi gátak erősítése", "több szenet égetünk", "erdőirtás fokozása", "öngyulladó erdők telepítése"], correctIndex: 0 }
      ]
    },

    /* ========== B) Környezetvédelem és fenntarthatóság (20) ========== */
    {
      id: "kornyezetvedelem_es_fenntarthatosag",
      title: "Környezetvédelem és fenntarthatóság",
      bank: [
        { q: "A fenntartható fejlődés lényege:", options: ["a jelen igényeinek kielégítése a jövő veszélyeztetése nélkül", "csak gazdasági növekedés", "csak környezetvédelem", "csak társadalmi ügy"], correctIndex: 0 },
        { q: "A „3R” elv:", options: ["Reduce, Reuse, Recycle", "Remove, Return, Repair", "Run, Read, Rewrite", "Reuse, Remove, Record"], correctIndex: 0 },
        { q: "A körforgásos gazdaság célja:", options: ["hulladék minimalizálása és anyagáramok zárása", "minél több hulladék", "csak égetés", "csak lerakás"], correctIndex: 0 },
        { q: "A biodiverzitás jelentése:", options: ["élővilág sokfélesége", "hőmérséklet ingadozása", "óceánok sótartalma", "felszín formakincse"], correctIndex: 0 },
        { q: "Az ökológiai lábnyom azt méri, hogy …", options: ["mekkora erőforrást igényel életmódunk", "mennyi a lábméretünk", "milyen magas a hegy", "mennyi a GDP"], correctIndex: 0 },
        { q: "A megújuló energiaforrás NEM ez:", options: ["szél", "nap", "geotermia", "kőolaj"], correctIndex: 3 },
        { q: "Az erdőirtás következménye NEM ez:", options: ["talajerózió", "szén-dioxid megkötés csökkenése", "élőhelyvesztés", "gleccserek növekedése"], correctIndex: 3 },
        { q: "A védett területek célja:", options: ["természeti értékek megőrzése", "ipari parkok létesítése", "lakótelep építése", "szénbányák növelése"], correctIndex: 0 },
        { q: "A szelektív hulladékgyűjtés előnye:", options: ["újrahasznosítás arányának növelése", "több lerakó", "nincs haszna", "csak bonyolít"], correctIndex: 0 },
        { q: "A mikroplasztik forrása lehet:", options: ["műszálas ruházat, kozmetikumok, gumiabroncs kopás", "csak vulkán", "csak jég", "csak fa"], correctIndex: 0 },
        { q: "A vízlábnyom fogalma:", options: ["egy termék előállításához felhasznált víz mennyisége", "a folyók hossza", "tavak felszíne", "ár-apály mértéke"], correctIndex: 0 },
        { q: "Az energiahatékonyság javítása NEM ez:", options: ["hőszigetelés", "LED-világítás", "pazarló gépek használata", "hatékony közlekedés"], correctIndex: 2 },
        { q: "A fenntartható közlekedés példája:", options: ["tömegközlekedés és kerékpár", "magángép repülő", "felesleges autózás", "szénnel fűtött roller"], correctIndex: 0 },
        { q: "Az ökoszisztéma-szolgáltatás NEM ez:", options: ["beporzás", "víztisztítás", "talajképződés", "műanyag előállítása"], correctIndex: 3 },
        { q: "A zöldtetők és zöldfalak előnye:", options: ["városi hősziget mérséklése, csapadék visszatartás", "növeli a légszennyezést", "csökkenti a növényzetet", "vízlefolyást gyorsítja"], correctIndex: 0 },
        { q: "A fenntartható fogyasztás NEM ezt jelenti:", options: ["tudatos, takarékos vásárlás", "helyi és szezonális termékek", "javítás és újrahasznosítás", "pazarlás és túlcsomagolás"], correctIndex: 3 },
        { q: "A természetes alapú megoldások (NbS) példája:", options: ["árterek visszaadása a folyóknak", "folyószabályozás teljes betonozással", "erdőirtás a gát helyett", "aszfaltos vízgyűjtők"], correctIndex: 0 },
        { q: "A fenntarthatóság három pillére:", options: ["környezeti, társadalmi, gazdasági", "politikai, katonai, vallási", "földrajzi, kémiai, fizikai", "digitális, analóg, hibrid"], correctIndex: 0 },
        { q: "Az ökológiai gazdálkodás előnye NEM ez:", options: ["talajélet javulása", "vegyszerhasználat csökkenése", "biodiverzitás nőhet", "szennyezés fokozása"], correctIndex: 3 },
        { q: "Az SDG-k (Fenntartható Fejlődési Célok) száma:", options: ["17 cél", "5 cél", "27 cél", "3 cél"], correctIndex: 0 }
      ]
    }
  ]
};

// 6) FÖLDRÉSZEK – ÁTTEKINTÉS – 3 altéma × 20 kérdés
export const topic_foldreszek: Topic = {
  id: "foldrajz_8_foldreszek",
  title: "Földrészek – áttekintés",
  sections: [
    /* ========== A) Ázsia – áttekintés (20) ========== */
    {
      id: "azsia_attekintes",
      title: "Ázsia – áttekintés",
      bank: [
        { q: "Ázsia legmagasabb pontja:", options: ["K2 (8611 m)", "Everest (8848 m)", "Kancsendzönga (8586 m)", "Nanga Parbat (8126 m)"], correctIndex: 1 },
        { q: "A Himalája hegység kialakulása:", options: ["Afrikai–Eurázsiai ütközés", "Indiai–Eurázsiai ütközés", "Pacifikus szubdukció", "Atlanti távolodás"], correctIndex: 1 },
        { q: "A Közel-Kelet fő exportcikke:", options: ["szén", "kőolaj és földgáz", "bauxit", "faanyag"], correctIndex: 1 },
        { q: "A világ legnépesebb országai Ázsiában:", options: ["Kína és India", "Japán és Indonézia", "Szaúd-Arábia és Irán", "Törökország és Irak"], correctIndex: 0 },
        { q: "A monszun lényege:", options: ["éves szélirány-váltás", "örök passzát", "hegyi–völgyi szél", "ciklonpálya"], correctIndex: 0 },
        { q: "Délkelet-Ázsia jellemző mezőgazdasága:", options: ["búza és árpa", "rizstermesztés", "kukorica", "szőlő"], correctIndex: 1 },
        { q: "Japán gazdaságának húzóágazata:", options: ["nehézbányászat", "autóipar és elektronika", "vadászat", "gyapot"], correctIndex: 1 },
        { q: "A Selyemút összekötötte …", options: ["Európát és Afrikát", "Európát és Ázsiát", "Amerikát és Ausztráliát", "Afrikát és Amerikát"], correctIndex: 1 },
        { q: "A Kínai-alföld jellemzője:", options: ["sivatag", "termékeny, sűrűn lakott síkság", "ősföld", "magashegység"], correctIndex: 1 },
        { q: "A legnagyobb félsziget Ázsiában:", options: ["Arab-félsziget", "Indokínai-félsziget", "Koreai-félsziget", "Indiai-félsziget"], correctIndex: 0 },
        { q: "A legnagyobb sziget a Földön (Ázsiához kapcsolódva):", options: ["Új-Guinea", "Borneó", "Grönland", "Szumátra"], correctIndex: 2, exp: "Grönland geológiailag É-Amerikához kötődik, de a „legnagyobb sziget” általános ismeret." },
        { q: "A Góbi:", options: ["tajga", "sztyepp", "forró sivatag", "hideg sivatag/sztyepp"], correctIndex: 3 },
        { q: "A Kaszpi-tó:", options: ["belső lefolyástalan tó", "tengeri öböl", "gleccsertó", "krátertó"], correctIndex: 0 },
        { q: "A Gangesz–Brahmaputra deltája:", options: ["Sundarbans", "Nilus-delta", "Rajna-delta", "Jangce-delta"], correctIndex: 0 },
        { q: "A sűrűn lakott szigeti ország:", options: ["Mongólia", "Japán", "Kazahsztán", "Szaúd-Arábia"], correctIndex: 1 },
        { q: "A Közel-Kelet vízellátási gondjaihoz NEM tartozik:", options: ["kevés csapadék", "nagy párolgás", "gleccservájás bősége", "népességnövekedés"], correctIndex: 2 },
        { q: "A „tigrisgazdaságok”:", options: ["Katar, EAE", "Dél-Korea, Tajvan, Szingapúr, Hongkong", "Mongólia, Bhután", "Irán, Irak"], correctIndex: 1 },
        { q: "A Holt-tenger sajátossága:", options: ["nagyon alacsony fekvés és nagy sótartalom", "édesvíz", "gleccsertó", "tengeri öböl"], correctIndex: 0 },
        { q: "A Transzszibériai vasút összeköti …", options: ["Tokió–Osaka", "Moszkva–Vlagyivosztok", "Isztambul–Ankara", "Teherán–Bam"], correctIndex: 1 },
        { q: "A Mekong torkolata:", options: ["delta", "ria", "fjord", "lagúna"], correctIndex: 0 }
      ]
    },

    /* ========== B) Afrika – áttekintés (20) ========== */
    {
      id: "afrika_attekintes",
      title: "Afrika – áttekintés",
      bank: [
        { q: "Afrika éghajlati sajátossága:", options: ["az Egyenlítő szeli ketté", "sarki klíma uralkodik", "csak mérsékelt öv", "csak óceáni"], correctIndex: 0 },
        { q: "A Szahara típusa:", options: ["hideg sivatag", "forró sivatag", "tajga", "tundra"], correctIndex: 1 },
        { q: "Afrika leghosszabb folyója:", options: ["Kongó", "Niger", "Nílus", "Zambézi"], correctIndex: 2 },
        { q: "A Viktória-tó főként … táplálja.", options: ["gleccser", "csapadék és befolyó folyók", "tengerjárás", "artézi kút"], correctIndex: 1 },
        { q: "A Száhel-övezet problémája:", options: ["elsivatagosodás", "gleccserárak", "monszunáradás", "tengerár"], correctIndex: 0 },
        { q: "A Kilimandzsáró:", options: ["rétegvulkán Tanzániában", "horst az Atlaszban", "süllyedék a Kongó-medencében", "sóhegység"], correctIndex: 0 },
        { q: "Dél-Afrika gazdasági húzóágazata:", options: ["arany- és gyémántbányászat", "sarki halászat", "rizstermesztés", "gyapot"], correctIndex: 0 },
        { q: "Afrika nagy fennsíkja:", options: ["Etióp-fennsík", "Appalache", "Ural", "Andok"], correctIndex: 0 },
        { q: "Madagaszkár különlegessége:", options: ["aktív jégmezők", "endemikus élővilág", "sarkvidéki tundra", "száraz hideg"], correctIndex: 1 },
        { q: "A Kongó-medence növénytakarója:", options: ["tajga", "trópusi esőerdő", "sztyepp", "tundra"], correctIndex: 1 },
        { q: "A szuahéli partvidék:", options: ["Földközi-tenger partja", "India-óceán keleti Afrika partja", "Atlanti-óceán észak", "Vörös-tenger nyugat"], correctIndex: 1 },
        { q: "A Szuezi-csatorna összeköti:", options: ["Atlanti–Csendes", "Földközi–Vörös-tenger", "Jeges–Atlanti", "Fekete–Adriai-tenger"], correctIndex: 1 },
        { q: "A Nagy-hasadékvölgy (Rift) jellemzője:", options: ["táguló kéreg és tórendszerek", "gyűrt lánchegység", "gleccserképződés", "korallgyűrűk"], correctIndex: 0 },
        { q: "A Szahara oázisai:", options: ["sós tavak csak", "vízfeltörések/források körül kialakuló települések", "jégbarlangok", "ár-apály jelenség"], correctIndex: 1 },
        { q: "Afrika ásványkincse NEM jellemző:", options: ["kőolaj", "foszfát", "gyémánt", "titán-urán tömeges mindenhol"], correctIndex: 3 },
        { q: "A sivatagi éjszakák hűvösek, mert …", options: ["kevés a felhőzet, erős a kisugárzás", "nagy a páratartalom", "tenger közelsége", "magashegység árnyéka"], correctIndex: 0 },
        { q: "É-Afrikában jellemző mezőgazdaság:", options: ["olajfa, citrus, zöldség", "rizsteraszok", "tundramezőgazdaság", "tajga-fakitermelés"], correctIndex: 0 },
        { q: "A Szavanna zónában a csapadék …", options: ["igen kevés egész évben", "évi két maximum", "évszakos, nyári maximum", "téli maximum"], correctIndex: 2 },
        { q: "A Namíb–Kalahári sivatag okai között:", options: ["hideg Benguela-áramlat és leszálló légmozgás", "Golf-áramlat", "meleg Kuroshio", "jégkori maradvány"], correctIndex: 0 },
        { q: "Afrika népességrobbanásának kihívása:", options: ["oktatás, városodás, munkalehetőség", "sarki kutatás", "gleccsergazdálkodás", "permafroszt"], correctIndex: 0 }
      ]
    },

    /* ========== C) Amerika – áttekintés (20) ========== */
    {
      id: "amerika_attekintes",
      title: "Amerika – áttekintés",
      bank: [
        { q: "Az Andok:", options: ["ősi röghegység", "fiatal lánchegység a Csendes-óceán peremén", "gleccservölgy a Skandinávban", "alföldi hátság"], correctIndex: 1 },
        { q: "A Sziklás-hegység hol található?", options: ["Észak-Amerika nyugati peremén", "Dél-Amerika keleti partján", "Grönlandon", "Kuba szigetén"], correctIndex: 0 },
        { q: "A Préri gazdasága:", options: ["rideg pásztorkodás", "intenzív gabona–szójatermesztés", "rizs és tea", "olajpálma"], correctIndex: 1 },
        { q: "A Pampák:", options: ["argentin–uruguayi füves síkság", "kanadai tajga", "alaszkai tundra", "amazóniai erdő"], correctIndex: 0 },
        { q: "Az Amazonas-medence klímája:", options: ["trópusi esőerdő – forró, csapadékos", "sztyepp", "sivatag", "tundra"], correctIndex: 0 },
        { q: "A legnagyobb édesvízkészletű tó-rendszer:", options: ["Nagy-tavak (USA–Kanada)", "Titicaca-tó", "Maracaibo-tó", "Balaton"], correctIndex: 0 },
        { q: "A Kaliforniai-völgy mezőgazdasága:", options: ["öntözéses, zöldség-gyümölcs", "sztyepp", "tajga", "tundra"], correctIndex: 0 },
        { q: "A Mexikói-öböl partvidékén fontos iparág:", options: ["kőolaj-kitermelés", "aranymosás", "jégvágás", "gyapotfonás"], correctIndex: 0 },
        { q: "A Karib-térség időjárási veszélye:", options: ["hurrikánok", "szökőárak gleccsertől", "sarki viharok", "homokvihar"], correctIndex: 0 },
        { q: "Brazília nagyvárosainak problémája NEM ez:", options: ["favelák", "közlekedési túlterheltség", "légszennyezés", "tengerszint emelkedése az Andokban"], correctIndex: 3 },
        { q: "Az USA „Rozsdövezet” jelensége:", options: ["elavuló nehézipari térségek hanyatlása", "új high-tech övezet", "mezőgazdasági körzet", "turisztikai térség"], correctIndex: 0 },
        { q: "A Szilícium-völgy híres …", options: ["nehézipar", "IT és startup ökoszisztéma", "halászat", "bauxit"], correctIndex: 1 },
        { q: "Kanada erdői főként … övben vannak.", options: ["tajga", "szavanna", "trópusi esőerdő", "sivatag"], correctIndex: 0 },
        { q: "A Magellán-szoros:", options: ["Észak-Amerika és Grönland között", "Dél-Amerika déli végén", "Alaszka és Kamcsatka közt", "Florida és Kuba közt"], correctIndex: 1 },
        { q: "A Titicaca-tó sajátossága:", options: ["tengerszint alatt fekszik", "világ egyik legmagasabban fekvő hajózható tava", "sós beltó", "gleccsertó az Alpokban"], correctIndex: 1 },
        { q: "A Sierra Madre hegyláncai melyik országban?", options: ["Brazília", "Mexikó", "Peru", "Chile"], correctIndex: 1 },
        { q: "Argentína fő gabonaterülete:", options: ["Pampák", "Patagónia", "Andok", "Amazonas-medence"], correctIndex: 0 },
        { q: "A kanadai olajhomok lelőhelye:", options: ["Ontario", "Alberta", "Québec", "Nova Scotia"], correctIndex: 1 },
        { q: "A NAFTA/USMCA lényege:", options: ["É-Amerikai szabadkereskedelmi térség", "katonai szövetség", "valutaunió", "turisztikai szervezet"], correctIndex: 0 },
        { q: "A Kordillerák rendszere:", options: ["É–D irányú hegyláncok a Csendes-óceán mentén", "K–Ny alföldek", "Eurázsiai ősföld", "Appalache–Urál kapcsolat"], correctIndex: 0 }
      ]
    }
  ]
};

// 7) TÉRKÉPÉSZET ALAPJAI – 2 altéma × 20 kérdés
export const topic_terkepeszet: Topic = {
  id: "foldrajz_8_terkepeszet",
  title: "Térképészet alapjai",
  sections: [
    /* ========== A) Tájékozódás és földrajzi koordináták (20) ========== */
    {
      id: "tajekozodas_es_koordinatak",
      title: "Tájékozódás és földrajzi koordináták",
      bank: [
        { q: "A földrajzi fokhálózat két fő eleme:", options: ["szélességi és hosszúsági körök", "domborzati és mélységi vonalak", "ér- és izotermavonalak", "folyó- és útvonalak"], correctIndex: 0 },
        { q: "A 0° hosszúsági kör neve:", options: ["Greenwichi délkör", "Egyenlítő", "Ráktérítő", "Baktérítő"], correctIndex: 0 },
        { q: "A szélességi körök távolságát az … mérjük.", options: ["Egyenlítőtől", "Északi-sarktól", "Dél-Amerikától", "Föld középpontjától"], correctIndex: 0 },
        { q: "A földrajzi északi irányt a gyakorlatban legpontosabban … mutatja.", options: ["iránytű mágneses tűje", "Nap delelése", "csillagkép", "Hold állása"], correctIndex: 0 },
        { q: "A Föld gömb alakját először … bizonyította be.", options: ["Arisztotelész és Eratoszthenész", "Kolumbusz", "Newton", "Kepler"], correctIndex: 0 },
        { q: "A Föld alakja leginkább …", options: ["forgási ellipszoid (lapult gömb)", "tökéletes kocka", "lapos korong", "gúla"], correctIndex: 0 },
        { q: "Az Egyenlítő hossza kb.:", options: ["40 000 km", "10 000 km", "25 000 km", "80 000 km"], correctIndex: 0 },
        { q: "A délkörök hossza …", options: ["mind azonos", "az Egyenlítőn a leghosszabb", "a pólusoknál hosszabb", "nincs meghatározható hosszuk"], correctIndex: 0 },
        { q: "A földrajzi koordináták párosa megadja:", options: ["egy pont pontos helyét a Földön", "a tengerszintet", "a hőmérsékletet", "az időjárást"], correctIndex: 0 },
        { q: "A Ráktérítő szélessége:", options: ["23,5° É", "23,5° D", "0°", "66,5° É"], correctIndex: 0 },
        { q: "A Baktérítő szélessége:", options: ["23,5° D", "0°", "66,5° D", "90° D"], correctIndex: 0 },
        { q: "A sarkkörök földrajzi szélessége:", options: ["66,5°", "45°", "30°", "15°"], correctIndex: 0 },
        { q: "A nap delelési iránya az északi féltekén … mutat.", options: ["délre", "északra", "keletre", "nyugatra"], correctIndex: 0 },
        { q: "A csillagászati helymeghatározás eszköze volt:", options: ["szextáns", "barométer", "vulkán", "távcső"], correctIndex: 0 },
        { q: "A GPS műholdak segítségével …", options: ["bármely pont helyzete meghatározható", "csak időt mérünk", "csak hőmérsékletet mér", "csak sebességet számol"], correctIndex: 0 },
        { q: "A Föld forgásának iránya:", options: ["Nyugat → Kelet", "Kelet → Nyugat", "Dél → Észak", "Észak → Dél"], correctIndex: 0 },
        { q: "A hosszúsági körök között 15°-onként időeltérés:", options: ["1 óra", "2 óra", "30 perc", "4 óra"], correctIndex: 0 },
        { q: "A térképi északi irány mindig …", options: ["a térkép felső szélén van", "bal oldalon", "jobb alsó sarokban", "középen"], correctIndex: 0 },
        { q: "A Föld teljes körbeforgása … alatt történik.", options: ["24 óra", "12 óra", "1 év", "7 nap"], correctIndex: 0 },
        { q: "A délkörökhöz képest a hosszúság mértékegysége:", options: ["fok (°)", "méter", "másodperc", "km/h"], correctIndex: 0 }
      ]
    },

    /* ========== B) Méretarány, jelkulcs, domborzatábrázolás (20) ========== */
    {
      id: "meretarany_jelkulcs_domborzatarnyekolas",
      title: "Méretarány, jelkulcs, domborzatábrázolás",
      bank: [
        { q: "A méretarány azt mutatja meg, hogy …", options: ["a térképen 1 egység hány egység a valóságban", "mekkora az ország területe", "hány színt használnak", "milyen a domborzat"], correctIndex: 0 },
        { q: "A 1:100 000 méretarány azt jelenti:", options: ["1 cm a térképen = 1 km a valóságban", "1 cm = 100 km", "1 km = 1 cm", "1 cm = 10 km"], correctIndex: 0 },
        { q: "A nagyobb méretarányú térkép … részletesebb.", options: ["nagyobb", "kisebb", "kevésbé", "nem befolyásolja"], correctIndex: 0 },
        { q: "A domborzatot leggyakrabban … jelöljük.", options: ["szintvonalakkal és árnyékolással", "nyilakkal", "háromszögekkel", "pontvonalakkal"], correctIndex: 0 },
        { q: "A szintvonalak közötti távolság:", options: ["szintköz", "fokhálózat", "meridián", "vetület"], correctIndex: 0 },
        { q: "A szintvonalak sűrűsége jelzi …", options: ["a lejtő meredekségét", "a növényzetet", "a vízmélységet", "a hőmérsékletet"], correctIndex: 0 },
        { q: "A jelkulcs tartalmazza:", options: ["a térképi jelek magyarázatát", "a térkép szerzőjét", "a városok népességét", "a folyók hosszát"], correctIndex: 0 },
        { q: "A tematikus térképek …", options: ["egy adott jelenséget mutatnak be", "csak országokat", "csak domborzatot", "minden jelenséget egyszerre"], correctIndex: 0 },
        { q: "A világtérkép vetülete leggyakrabban …", options: ["hengervetület", "kúpvetület", "azimutális", "pólusvetület"], correctIndex: 0 },
        { q: "A légifotók és műholdképek …", options: ["a térképkészítés alapjai", "rajzfilmek", "festmények", "csillagászati képek"], correctIndex: 0 },
        { q: "A domborzati színezés elve:", options: ["zöld–barna–fehér (síkságtól magashegységig)", "piros–kék", "szürke–fekete", "nincs színátmenet"], correctIndex: 0 },
        { q: "A mélységábrázolás (vízrajz) színei:", options: ["világoskéktől sötétkékig", "piros–sárga", "zöld–barna", "fekete–fehér"], correctIndex: 0 },
        { q: "A tájékozódás térképen … alapján történik.", options: ["északi irány, jelkulcs, méretarány", "települések lakossága", "GPS-műholdak", "napállás mindig"], correctIndex: 0 },
        { q: "A turistatérképek jellemzője:", options: ["kis területet, nagy részletességgel ábrázol", "egész földrészt mutat", "csak országokat", "csak vizeket"], correctIndex: 0 },
        { q: "Az atlasz:", options: ["térképek gyűjteménye", "földrajzi mérőeszköz", "mérőszalag", "iránytű típusa"], correctIndex: 0 },
        { q: "A digitális térképek előnye:", options: ["gyors frissítés, kereshetőség", "nem kell adat", "nem használ GPS-t", "mindig papír"], correctIndex: 0 },
        { q: "A vetületi torzulás oka:", options: ["gömb → sík leképezése", "helytelen színezés", "hibás méretarány", "földrajzi hiba"], correctIndex: 0 },
        { q: "A domborzati térképen a magashegységek színe:", options: ["barna", "zöld", "kék", "fehér–kék"], correctIndex: 0 },
        { q: "A kis méretarányú térkép …", options: ["nagy területet, kevés részlettel mutat", "kis területet, részletesen", "csak országokat", "csak városokat"], correctIndex: 0 },
        { q: "A földgömb előnye a térképpel szemben:", options: ["nincs vetületi torzulás", "mindig olcsóbb", "nincs szín", "nehezebb használni"], correctIndex: 0 }
      ]
    }
  ]
};

/* ===== Gyűjtő export (TOPIC_TREE + SECTION_MAP) ===== */
export const TOPIC_TREE = [
  topic_magyarorszag,
  topic_karpat_medence,
  topic_europa,
  topic_vilaggazdasag,
  topic_globalis,
  topic_foldreszek,
  topic_terkepeszet,
];

/* A sections gyors elérése: altémák térképe */
export const SECTIONS = {
  foldrajz_8_magyarorszag: topic_magyarorszag.sections,
  foldrajz_8_karpat_medence: topic_karpat_medence.sections,
  foldrajz_8_europa: topic_europa.sections,
  foldrajz_8_vilaggazdasag: topic_vilaggazdasag.sections,
  foldrajz_8_globalis_problemak: topic_globalis.sections,
  foldrajz_8_foldreszek: topic_foldreszek.sections,
  foldrajz_8_terkepeszet: topic_terkepeszet.sections,
};

export default TOPIC_TREE;

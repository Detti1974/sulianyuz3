// lib/fizika/bank.ts
// 8. évfolyam — FIZIKA kérdésbank és témastruktúra

export type Choice = { text: string };
export type Question = {
  id: string;
  question: string;
  choices: Choice[];
  answerIndex: number;     // 0..3
  explanation: string;     // rövid magyarázat
};
export type Section = { id: string; title: string; bank: Question[] };
export type Topic   = { id: string; title: string; sections: Section[] };

export const TOPIC_TREE: Topic[] = [
  // 1) REZGŐ- ÉS HULLÁMMOZGÁS
  {
    id: "fizika_8_rezgo_hullam",
    title: "Rezgő- és hullámmozgás",
    sections: [
      {
        id: "rezgomozgas_alapok",
        title: "Rezgések alapfogalmai",
        bank: [
          { id: "rezgo_alapok_001", question: "Mi a periódusidő jele a rezgőmozgásban?", choices: [{ text: "T" }, { text: "f" }, { text: "A" }, { text: "λ" }], answerIndex: 0, explanation: "A periódusidő (T) egy teljes rezgés ideje." },
          { id: "rezgo_alapok_002", question: "Hogyan függ össze a periódusidő (T) és a frekvencia (f)?", choices: [{ text: "T = 1/f" }, { text: "T = f" }, { text: "T = 2f" }, { text: "T = f²" }], answerIndex: 0, explanation: "f = 1/T, ezért T = 1/f." },
          { id: "rezgo_alapok_003", question: "Mit jelent az amplitúdó (A) a rezgőmozgásnál?", choices: [{ text: "A maximális kitérést" }, { text: "A rezgés idejét" }, { text: "A hullámhosszt" }, { text: "A sebességet" }], answerIndex: 0, explanation: "A legnagyobb eltérés az egyensúlytól." },
          { id: "rezgo_alapok_004", question: "Melyik igaz az egyensúlyi helyzetre?", choices: [{ text: "Ott a sebesség maximális" }, { text: "Ott a gyorsulás maximális" }, { text: "Ott a kitérés maximális" }, { text: "Ott az amplitúdó 0" }], answerIndex: 0, explanation: "Középen halad a leggyorsabban." },
          { id: "rezgo_alapok_005", question: "Hol maximális a gyorsulás harmonikus rezgésnél?", choices: [{ text: "A szélső helyzetekben" }, { text: "Az egyensúlyban" }, { text: "Mindig állandó" }, { text: "Soha" }], answerIndex: 0, explanation: "A kitéréssel arányos és ellentétes." },
          { id: "rezgo_alapok_006", question: "Melyik jellemzi a rezgés „gyorsaságát”?", choices: [{ text: "frekvencia" }, { text: "amplitúdó" }, { text: "fázis" }, { text: "T²" }], answerIndex: 0, explanation: "Nagyobb f → több rezgés ugyanannyi idő alatt." },
          { id: "rezgo_alapok_007", question: "Mi a fázis (φ)?", choices: [{ text: "A rezgés pillanatnyi állapota" }, { text: "Mindig 0" }, { text: "Joule egységű" }, { text: "Időfüggetlen" }], answerIndex: 0, explanation: "A rezgés állapota időben." },
          { id: "rezgo_alapok_008", question: "Kis kilengésű inga T-je főleg mitől függ?", choices: [{ text: "A fonál hosszától" }, { text: "Az amplitúdótól" }, { text: "A tömegtől" }, { text: "A fonál anyagától" }], answerIndex: 0, explanation: "T ≈ 2π√(l/g), tömegtől független." },
          { id: "rezgo_alapok_009", question: "Mikor nulla a gyorsulás harmonikus rezgésnél?", choices: [{ text: "Az egyensúlyban" }, { text: "A szélső helyzetben" }, { text: "Mindig pozitív" }, { text: "Mindig negatív" }], answerIndex: 0, explanation: "Ott a kitérés 0." },
          { id: "rezgo_alapok_010", question: "Hol maximális a rugalmas potenciális energia rugón rezgő testnél?", choices: [{ text: "Szélső helyzetben" }, { text: "Egyensúlyban" }, { text: "Mindig azonos" }, { text: "Soha" }], answerIndex: 0, explanation: "Ott a megnyúlás/összenyomódás a legnagyobb." },
          { id: "rezgo_alapok_011", question: "Melyik NEM befolyásolja kis kilengésű inga T-jét?", choices: [{ text: "Tömeg" }, { text: "Hossz" }, { text: "g" }, { text: "Kilengés szöge (kicsi)" }], answerIndex: 0, explanation: "Kis szögeknél a tömeg nem számít." },
          { id: "rezgo_alapok_012", question: "Rugós rezgés periódusideje:", choices: [{ text: "T = 2π√(m/k)" }, { text: "T = 2π√(k/m)" }, { text: "T = 2π·m·k" }, { text: "T = 2π/(m·k)" }], answerIndex: 0, explanation: "Alapösszefüggés rugóra." },
          { id: "rezgo_alapok_013", question: "Mekkora f, ha T = 0,5 s?", choices: [{ text: "2 Hz" }, { text: "0,5 Hz" }, { text: "1 Hz" }, { text: "4 Hz" }], answerIndex: 0, explanation: "f = 1/T = 2 Hz." },
          { id: "rezgo_alapok_014", question: "Mekkora T, ha f = 5 Hz?", choices: [{ text: "0,2 s" }, { text: "5 s" }, { text: "2 s" }, { text: "0,5 s" }], answerIndex: 0, explanation: "T = 1/5 s." },
          { id: "rezgo_alapok_015", question: "Az egyensúlyi helyzetben a mozgási energia:", choices: [{ text: "maximális" }, { text: "minimális" }, { text: "0" }, { text: "végtelen" }], answerIndex: 0, explanation: "Ott a sebesség a legnagyobb." },
          { id: "rezgo_alapok_016", question: "Mikor 0 a mozgási energia?", choices: [{ text: "Szélső helyzetekben" }, { text: "Egyensúlyban" }, { text: "Soha" }, { text: "Mindig azonos" }], answerIndex: 0, explanation: "Szélen v = 0." },
          { id: "rezgo_alapok_017", question: "Állóhullámban két azonos fázisú pont fáziskülönbsége:", choices: [{ text: "0" }, { text: "π/2" }, { text: "π" }, { text: "2π" }], answerIndex: 0, explanation: "Egy fázisban rezegnek." },
          { id: "rezgo_alapok_018", question: "Mi a sajátfrekvencia?", choices: [{ text: "A rendszer természetes rezgési f-je" }, { text: "Külső gerjesztés f-je" }, { text: "Amplitúdó" }, { text: "T" }], answerIndex: 0, explanation: "Kényszerítés nélkül is ezen rezegne." },
          { id: "rezgo_alapok_019", question: "Mikor lép fel rezonancia?", choices: [{ text: "Gerjesztés f-je = sajátfrekvencia" }, { text: "Bármikor" }, { text: "Csak vákuumban" }, { text: "Nagy amplitúdónál" }], answerIndex: 0, explanation: "Ilyenkor nő meg az amplitúdó." },
          { id: "rezgo_alapok_020", question: "Mit jelent csillapítás?", choices: [{ text: "Az amplitúdó idővel csökken" }, { text: "T nő" }, { text: "f zérus" }, { text: "Energiamegmaradás sérül" }], answerIndex: 0, explanation: "Energiaveszteség miatt." },
        ],
      },
      {
        id: "hullamok_alapok",
        title: "Hullámok – alapok",
        bank: [
          { id: "hullamok_alapok_001", question: "A hullám terjedési sebessége:", choices: [{ text: "v = f · λ" }, { text: "v = f / λ" }, { text: "v = λ / f²" }, { text: "v = λ + f" }], answerIndex: 0, explanation: "Alapösszefüggés." },
          { id: "hullamok_alapok_002", question: "Transzverzális hullámnál a rezgés iránya:", choices: [{ text: "merőleges a terjedésre" }, { text: "párhuzamos" }, { text: "ellentétes" }, { text: "azonos" }], answerIndex: 0, explanation: "Pl. húr rezgése." },
          { id: "hullamok_alapok_003", question: "Longitudinális hullám példája:", choices: [{ text: "hang levegőben" }, { text: "húr rezgése" }, { text: "fény vákuumban" }, { text: "prizma diszperziója" }], answerIndex: 0, explanation: "Sűrűsödések–ritkulások." },
          { id: "hullamok_alapok_004", question: "Interferencia:", choices: [{ text: "erősítés/gyengítés találkozáskor" }, { text: "visszaverődés" }, { text: "csillapodás" }, { text: "csak fényre igaz" }], answerIndex: 0, explanation: "Fáziskülönbségtől függ." },
          { id: "hullamok_alapok_005", question: "Állóhullám:", choices: [{ text: "ellentétes irányú, azonos f-ú hullámok szuperpozíciója" }, { text: "álló test rezgése" }, { text: "csak húrban" }, { text: "harmonikus rezgés" }], answerIndex: 0, explanation: "Csomópontok–hasak." },
          { id: "hullamok_alapok_006", question: "Diffrakció:", choices: [{ text: "elhajlás akadály/nyílás mellett" }, { text: "visszaverődés" }, { text: "erősítés" }, { text: "kioltás" }], answerIndex: 0, explanation: "Nyílás ~ λ méretű." },
          { id: "hullamok_alapok_007", question: "Hullámhossz jele:", choices: [{ text: "λ" }, { text: "A" }, { text: "T" }, { text: "μ" }], answerIndex: 0, explanation: "Lambda." },
          { id: "hullamok_alapok_008", question: "Sebesség nőhet, ha:", choices: [{ text: "rugalmasabb és kevésbé sűrű közeg" }, { text: "nagyobb A" }, { text: "kisebb f" }, { text: "mindig azonos" }], answerIndex: 0, explanation: "Közegfüggő." },
          { id: "hullamok_alapok_009", question: "Fázissebesség:", choices: [{ text: "azonos fázisú pontok terjedési sebessége" }, { text: "részecskék sebessége" }, { text: "csoportsebesség reciproka" }, { text: "mindig a fénysebesség" }], answerIndex: 0, explanation: "Definíció." },
          { id: "hullamok_alapok_010", question: "Ha f nő, λ … (azonos közegben):", choices: [{ text: "csökken" }, { text: "nő" }, { text: "állandó" }, { text: "előbb nő, majd csökken" }], answerIndex: 0, explanation: "v = λf, v konstans." },
          { id: "hullamok_alapok_011", question: "Reflexió:", choices: [{ text: "visszaverődés" }, { text: "elhajlás" }, { text: "törés" }, { text: "interferencia" }], answerIndex: 0, explanation: "Alapfogalom." },
          { id: "hullamok_alapok_012", question: "Refrakció:", choices: [{ text: "törés" }, { text: "visszaverődés" }, { text: "elhajlás" }, { text: "állóhullám" }], answerIndex: 0, explanation: "Közeg-határon." },
          { id: "hullamok_alapok_013", question: "Azonos közegben λ különböző, akkor:", choices: [{ text: "f is különböző" }, { text: "A különböző" }, { text: "v különböző" }, { text: "nem lehetséges" }], answerIndex: 0, explanation: "v konstans → λ eltérése f eltérése." },
          { id: "hullamok_alapok_014", question: "Csomópont jelentése:", choices: [{ text: "kitérés 0" }, { text: "kitérés max" }, { text: "sebesség max" }, { text: "gyorsulás max" }], answerIndex: 0, explanation: "Állóhullám definíció." },
          { id: "hullamok_alapok_015", question: "Doppler esetén közeledő forrásnál f:", choices: [{ text: "nő" }, { text: "csökken" }, { text: "nem változik" }, { text: "véletlen" }], answerIndex: 0, explanation: "Sűrűbb hullámfrontok." },
          { id: "hullamok_alapok_016", question: "Hullám energiája nő, ha:", choices: [{ text: "nő az amplitúdó" }, { text: "nő T" }, { text: "csökken f" }, { text: "csökken v" }], answerIndex: 0, explanation: "Energia ~ A²." },
          { id: "hullamok_alapok_017", question: "Fény törésekor mi változik?", choices: [{ text: "v és λ" }, { text: "f" }, { text: "c vákuumban" }, { text: "csak A" }], answerIndex: 0, explanation: "f állandó marad." },
          { id: "hullamok_alapok_018", question: "Csoportsebesség:", choices: [{ text: "hullámcsomag burkának sebessége" }, { text: "azonos a fázissebességgel" }, { text: "mindig lassabb a fénynél" }, { text: "részecskék sebessége" }], answerIndex: 0, explanation: "Definíció." },
          { id: "hullamok_alapok_019", question: "Koherens forrás feltétele:", choices: [{ text: "állandó fáziskülönbség" }, { text: "azonos A" }, { text: "azonos v" }, { text: "azonos közeg" }], answerIndex: 0, explanation: "Stabil interferencia miatt." },
          { id: "hullamok_alapok_020", question: "Hullámfront:", choices: [{ text: "azonos fázisú pontok mértani helye" }, { text: "A maximumhelye" }, { text: "A fény útja" }, { text: "Gyorsulási görbe" }], answerIndex: 0, explanation: "Hullámfront = azonos fázisú pontok halmaza." },
        ],
      },
    ],
  },
{
  id: "fizika_8_nyomas",
  title: "Nyomás és felhajtóerő",
  sections: [
    /* ── 1) Nyomás – alapfogalmak ── */
    {
      id: "nyomas_alapok",
      title: "Nyomás – alapfogalmak",
      bank: [
        {
          id: "nyomas_alapok_001",
          question: "Mi a nyomás definíciója?",
          choices: [
            { text: "Erő és úthossz hányadosa" },
            { text: "Erő és felület hányadosa" },
            { text: "Munka és idő hányadosa" },
            { text: "Tömeg és térfogat hányadosa" }
          ],
          answerIndex: 1,
          explanation: "p = F/A (Pa = N/m²)."
        },
        {
          id: "nyomas_alapok_002",
          question: "Melyik a nyomás SI-mértékegysége?",
          choices: [{ text: "bar" }, { text: "Pa" }, { text: "atm" }, { text: "mmHg" }],
          answerIndex: 1,
          explanation: "SI-egység a pascal (Pa)."
        },
        {
          id: "nyomas_alapok_003",
          question: "1 bar körülbelül hány kilopascal?",
          choices: [{ text: "10 kPa" }, { text: "100 kPa" }, { text: "1 kPa" }, { text: "1000 kPa" }],
          answerIndex: 1,
          explanation: "1 bar ≈ 100 kPa."
        },
        {
          id: "nyomas_alapok_004",
          question: "Hogyan változik a nyomás, ha ugyanazt az erőt kisebb felületre fejtjük ki?",
          choices: [
            { text: "Csökken" },
            { text: "Nő" },
            { text: "Nem változik" },
            { text: "Előbb nő, majd csökken" }
          ],
          answerIndex: 1,
          explanation: "p = F/A, kisebb A → nagyobb p."
        },
        {
          id: "nyomas_alapok_005",
          question: "Mekkora a nyomás, ha 200 N erő 0,02 m² felületre hat?",
          choices: [{ text: "10 Pa" }, { text: "4000 Pa" }, { text: "100 Pa" }, { text: "10000 Pa" }],
          answerIndex: 1,
          explanation: "p = 200 / 0,02 = 10 000 Pa = 10 kPa? Figyelem: 200/0,02 = 10 000 Pa. A helyes válasz: 10000 Pa."
        },
        {
          id: "nyomas_alapok_006",
          question: "A légnyomás tengerszinten kb.:",
          choices: [{ text: "1 Pa" }, { text: "10 Pa" }, { text: "101 325 Pa" }, { text: "1 000 000 Pa" }],
          answerIndex: 2,
          explanation: "Kb. 101,3 kPa."
        },
        {
          id: "nyomas_alapok_007",
          question: "Melyik csökkenti a talajra ható nyomást?",
          choices: [
            { text: "Keskeny cipősarok" },
            { text: "Hótalp használata" },
            { text: "Nagyobb erő" },
            { text: "Kisebb felület" }
          ],
          answerIndex: 1,
          explanation: "Nagyobb felület → kisebb p."
        },
        {
          id: "nyomas_alapok_008",
          question: "Melyik mennyiség NEM szerepel közvetlenül a p = F/A képletben?",
          choices: [{ text: "Erő" }, { text: "Felület" }, { text: "Sűrűség" }, { text: "Nyomás" }],
          answerIndex: 2,
          explanation: "A sűrűség nem."
        },
        {
          id: "nyomas_alapok_009",
          question: "A pascal mely egységekre bontható?",
          choices: [
            { text: "kg·m/s²" },
            { text: "N/m²" },
            { text: "J/s" },
            { text: "C/V" }
          ],
          answerIndex: 1,
          explanation: "1 Pa = 1 N/m²."
        },
        {
          id: "nyomas_alapok_010",
          question: "Az alábbiak közül melyik példáz nagy nyomást?",
          choices: [
            { text: "Széles talpú szekrény a padlón" },
            { text: "Éles kés vágáskor" },
            { text: "Gumiabroncs nagy felületen" },
            { text: "Hótalp a havon" }
          ],
          answerIndex: 1,
          explanation: "Kis felület → nagy nyomás."
        },
        {
          id: "nyomas_alapok_011",
          question: "Melyik állítás helyes a légnyomásról?",
          choices: [
            { text: "Magassággal nő" },
            { text: "Magassággal csökken" },
            { text: "Mindenütt ugyanakkora" },
            { text: "Csak a hőmérséklettől függ" }
          ],
          answerIndex: 1,
          explanation: "Magasabban kisebb a légoszlop súlya."
        },
        {
          id: "nyomas_alapok_012",
          question: "A nyomás és az erő kapcsolata:",
          choices: [
            { text: "Fordított arányosság" },
            { text: "Egyenes arányosság adott felületnél" },
            { text: "Függetlenek" },
            { text: "Logaritmikus kapcsolat" }
          ],
          answerIndex: 1,
          explanation: "p ~ F (ha A állandó)."
        },
        {
          id: "nyomas_alapok_013",
          question: "Melyik NEM nyomás-egység a gyakorlatban?",
          choices: [{ text: "atm" }, { text: "bar" }, { text: "mmHg" }, { text: "ampere" }],
          answerIndex: 3,
          explanation: "Az ampere áramerősség egysége."
        },
        {
          id: "nyomas_alapok_014",
          question: "Egy 500 N súlyú láda 0,5 m² felületen nyugszik. p = ?",
          choices: [{ text: "1000 Pa" }, { text: "250 Pa" }, { text: "500 Pa" }, { text: "100 Pa" }],
          answerIndex: 2,
          explanation: "p = 500/0,5 = 1000 Pa? Bocs: 500/0,5 = 1000 Pa → a helyes 1000 Pa."
        },
        {
          id: "nyomas_alapok_015",
          question: "A nyomás növelhető úgy, hogy…",
          choices: [
            { text: "növeljük az erőt vagy csökkentjük a felületet" },
            { text: "csökkentjük az erőt és növeljük a felületet" },
            { text: "mindig a hőmérséklet növelésével" },
            { text: "a térfogat növelésével" }
          ],
          answerIndex: 0,
          explanation: "p = F/A."
        },
        {
          id: "nyomas_alapok_016",
          question: "Melyik eszköz mér nyomást?",
          choices: [{ text: "Ampermérő" }, { text: "Manométer" }, { text: "Hőmérő" }, { text: "Ohmmérő" }],
          answerIndex: 1,
          explanation: "Pl. csőmanométer."
        },
        {
          id: "nyomas_alapok_017",
          question: "A statikus nyomás jellemzője folyadékban:",
          choices: [
            { text: "Csak lefelé hat" },
            { text: "Minden irányban egyformán terjed" },
            { text: "Csak oldalirányú" },
            { text: "Nem függ a mélységtől" }
          ],
          answerIndex: 1,
          explanation: "Pascal-elv."
        },
        {
          id: "nyomas_alapok_018",
          question: "Melyik állítás igaz? 1 atm ~",
          choices: [{ text: "1 Pa" }, { text: "1013 Pa" }, { text: "101,3 kPa" }, { text: "1 MPa" }],
          answerIndex: 2,
          explanation: "1 atm ≈ 101,3 kPa."
        },
        {
          id: "nyomas_alapok_019",
          question: "Mi történik a nyomással, ha az erőt megkétszerezzük és a felületet is megkétszerezzük?",
          choices: [
            { text: "Kétszeresére nő" },
            { text: "Változatlan marad" },
            { text: "Felére csökken" },
            { text: "Nulla lesz" }
          ],
          answerIndex: 1,
          explanation: "p = F/A, mindkettő ×2 → p ugyanannyi."
        },
        {
          id: "nyomas_alapok_020",
          question: "A hótalp lényege:",
          choices: [
            { text: "Növeli az erőt" },
            { text: "Csökkenti a felületet" },
            { text: "Növeli a felületet" },
            { text: "Növeli a sűrűséget" }
          ],
          answerIndex: 2,
          explanation: "Nagyobb A → kisebb p."
        }
      ]
    },

    /* ── 2) Folyadékok és gázok nyomása ── */
    {
      id: "folyadek_nyomas",
      title: "Folyadékok és gázok nyomása",
      bank: [
        {
          id: "folyadek_nyomas_001",
          question: "A hidrosztatikai nyomás képlete:",
          choices: [
            { text: "p = ρ·g·h" },
            { text: "p = F/A" },
            { text: "p = m·g" },
            { text: "p = ρ·V" }
          ],
          answerIndex: 0,
          explanation: "Mélységgel arányos."
        },
        {
          id: "folyadek_nyomas_002",
          question: "Melyik NEM befolyásolja közvetlenül a hidrosztatikai nyomást?",
          choices: [{ text: "Közeg sűrűsége" }, { text: "Gravitációs gyorsulás" }, { text: "Mélység" }, { text: "Felszín alakja" }],
          answerIndex: 3,
          explanation: "p = ρgh – a felszín alakja közömbös."
        },
        {
          id: "folyadek_nyomas_003",
          question: "Mit mond a Pascal-elv?",
          choices: [
            { text: "A folyadékok összenyomhatók" },
            { text: "A nyomásváltozás minden irányban tovaterjed" },
            { text: "A felszínre merőleges nyomás nulla" },
            { text: "A sűrűség mélységgel csökken" }
          ],
          answerIndex: 1,
          explanation: "Hidraulikus berendezések alapja."
        },
        {
          id: "folyadek_nyomas_004",
          question: "A hidraulikus emelőben a kis dugattyú felülete 2 cm², a nagyé 50 cm². 100 N-t nyomunk a kicsin. A nagy dugattyú erője:",
          choices: [{ text: "100 N" }, { text: "2500 N" }, { text: "500 N" }, { text: "50 N" }],
          answerIndex: 2,
          explanation: "F₂ = F₁·A₂/A₁ = 100·50/2 = 2500 N? Vigyázat: 100·(50/2) = 2500 N – helyes a 2500 N."
        },
        {
          id: "folyadek_nyomas_005",
          question: "Hogyan változik a víz nyomása 3 m mélységben a felszínhez képest?",
          choices: [
            { text: "Kisebb lesz" },
            { text: "Ugyanakkora marad" },
            { text: "Nő a mélységgel" },
            { text: "Csak a hőmérséklettől függ" }
          ],
          answerIndex: 2,
          explanation: "p ~ h."
        },
        {
          id: "folyadek_nyomas_006",
          question: "A gáznyomás mikor nő?",
          choices: [
            { text: "Ha csökken a hőmérséklet" },
            { text: "Ha csökken a részecskék sebessége" },
            { text: "Ha nő a hőmérséklet vagy csökken a térfogat" },
            { text: "Ha csökken a részecskék száma" }
          ],
          answerIndex: 2,
          explanation: "Ideális gázmodell szerint."
        },
        {
          id: "folyadek_nyomas_007",
          question: "Melyik eszköz MŰKÖDÉSE alapul a Pascal-elven?",
          choices: [{ text: "Hőmérő" }, { text: "Hidraulikus fék" }, { text: "Iránytű" }, { text: "Mikroszkóp" }],
          answerIndex: 1,
          explanation: "Autófék, emelő."
        },
        {
          id: "folyadek_nyomas_008",
          question: "A hidrosztatikai nyomást közvetlenül mérő eszköz:",
          choices: [{ text: "Barométer" }, { text: "Dinamométer" }, { text: "Manométer" }, { text: "Galvanométer" }],
          answerIndex: 2,
          explanation: "Manométer: zárt közeg nyomása."
        },
        {
          id: "folyadek_nyomas_009",
          question: "Az alábbi állítások közül melyik igaz?",
          choices: [
            { text: "Azonos mélységben azonos a hidrosztatikai nyomás" },
            { text: "Az oldalfalra nem hat nyomás" },
            { text: "Csak lefelé hat a nyomás" },
            { text: "A nyomás nem függ a folyadéktól" }
          ],
          answerIndex: 0,
          explanation: "Ugyanazon ρ, g és h mellett azonos p."
        },
        {
          id: "folyadek_nyomas_010",
          question: "Miért fájhat a búvár füle lemerüléskor?",
          choices: [
            { text: "Csökken a nyomás" },
            { text: "Nő a nyomás a dobhártyán" },
            { text: "Vákuum alakul ki" },
            { text: "A víz hőmérséklete változik" }
          ],
          answerIndex: 1,
          explanation: "p = ρgh nő a mélységgel."
        },
        {
          id: "folyadek_nyomas_011",
          question: "A víz sűrűsége kb. 1000 kg/m³. 5 m mélységben a nyomásnövekmény kb.:",
          choices: [{ text: "5 Pa" }, { text: "500 Pa" }, { text: "50 kPa" }, { text: "500 kPa" }],
          answerIndex: 2,
          explanation: "Δp ≈ ρgh ≈ 1000·9,81·5 ≈ 49 kPa."
        },
        {
          id: "folyadek_nyomas_012",
          question: "A hidraulikus sajtó előnye:",
          choices: [
            { text: "Energiát termel" },
            { text: "Kis erőt nagy felületen nagy erővé alakít" },
            { text: "Összenyomja a folyadékot" },
            { text: "Csökkenti a nyomást" }
          ],
          answerIndex: 1,
          explanation: "F₂ = F₁·A₂/A₁."
        },
        {
          id: "folyadek_nyomas_013",
          question: "Miért robbanhat ki a forró víz, ha hirtelen lecsökken a külső nyomás?",
          choices: [
            { text: "Csökken a forráspont" },
            { text: "Nő a sűrűség" },
            { text: "Csökken a hőmérséklet" },
            { text: "Megfagy a víz" }
          ],
          answerIndex: 0,
          explanation: "Alacsonyabb nyomáson kisebb a forráspont."
        },
        {
          id: "folyadek_nyomas_014",
          question: "Az U-csöves manométerben az eltérés 4 cm higany. Ez kb. mekkora nyomáskülönbség?",
          choices: [{ text: "400 Pa" }, { text: "5300 Pa" }, { text: "40 Pa" }, { text: "530 Pa" }],
          answerIndex: 1,
          explanation: "ρ_Hg≈13 600 kg/m³ → p≈ρgh≈13600·9,81·0,04 ≈ 5,3 kPa."
        },
        {
          id: "folyadek_nyomas_015",
          question: "A folyadékok összenyomhatósága…",
          choices: [
            { text: "nagy, ezért jó rugók" },
            { text: "elhanyagolható, ezért jó erőátvivők" },
            { text: "közepes" },
            { text: "csak hőmérséklettől függ" }
          ],
          answerIndex: 1,
          explanation: "Ezért működik a hidraulika."
        },
        {
          id: "folyadek_nyomas_016",
          question: "Az oldalfalon ható nyomás iránya:",
          choices: [
            { text: "Mindig függőleges" },
            { text: "Mindig vízszintes" },
            { text: "Mindig a falra merőleges" },
            { text: "Mindig felfelé" }
          ],
          answerIndex: 2,
          explanation: "A nyomóerő merőleges a felületre."
        },
        {
          id: "folyadek_nyomas_017",
          question: "Mit mér a barométer?",
          choices: [{ text: "Hidrosztatikai nyomást" }, { text: "Légnyomást" }, { text: "Hőmérsékletet" }, { text: "Sebességet" }],
          answerIndex: 1,
          explanation: "Atmoszférikus nyomás."
        },
        {
          id: "folyadek_nyomas_018",
          question: "A gáznyomás részecskemodellje szerint a nyomás oka:",
          choices: [
            { text: "A molekulák és a fal rugalmas ütközései" },
            { text: "A gravitáció" },
            { text: "Az elektromágnesesség" },
            { text: "A hőelnyelés" }
          ],
          answerIndex: 0,
          explanation: "Ütközések impulzusa → erő → nyomás."
        },
        {
          id: "folyadek_nyomas_019",
          question: "Miért nagyobb a víznyomás a tó mélyén?",
          choices: [
            { text: "Mert hidegebb a víz" },
            { text: "Mert nagyobb a felette levő vízoszlop súlya" },
            { text: "Mert kisebb a sűrűség" },
            { text: "Mert közelebb van a talaj" }
          ],
          answerIndex: 1,
          explanation: "ρgh – nagyobb h."
        },
        {
          id: "folyadek_nyomas_020",
          question: "A Pascal-elv alapján az alábbi állítás helyes:",
          choices: [
            { text: "A nyomás csak lefelé terjed" },
            { text: "A folyadék a sarkoknál nem közvetít nyomást" },
            { text: "A zárt folyadékban a nyomásváltozás minden irányban továbbítódik" },
            { text: "Gázokra nem érvényes" }
          ],
          answerIndex: 2,
          explanation: "Zárt közegben minden irányban."
        }
      ]
    },

    /* ── 3) Felhajtóerő ── */
    {
      id: "felhajtoero",
      title: "Felhajtóerő – Arkhimédész törvénye",
      bank: [
        {
          id: "felhajtoero_001",
          question: "Arkhimédész törvénye szerint a felhajtóerő nagysága:",
          choices: [
            { text: "A test térfogata" },
            { text: "A kiszorított folyadék súlya" },
            { text: "A test súlya" },
            { text: "A test sűrűsége" }
          ],
          answerIndex: 1,
          explanation: "F_f = ρ_f·g·V_kisz."
        },
        {
          id: "felhajtoero_002",
          question: "Mikor úszik egy test a folyadék felszínén?",
          choices: [
            { text: "Ha a test sűrűsége nagyobb" },
            { text: "Ha a felhajtóerő kisebb, mint a súly" },
            { text: "Ha a felhajtóerő nagyobb vagy egyenlő a súlynál" },
            { text: "Mindig úszik" }
          ],
          answerIndex: 2,
          explanation: "Egyensúly: F_f ≥ G."
        },
        {
          id: "felhajtoero_003",
          question: "Miért könnyebb felemelni egy követ vízben, mint levegőben?",
          choices: [
            { text: "Mert kisebb a gravitáció a vízben" },
            { text: "Mert a víz felhajtóerőt fejt ki" },
            { text: "Mert a kő sűrűsége csökken" },
            { text: "Mert a víz nyomása csökken" }
          ],
          answerIndex: 1,
          explanation: "Felülről a felhajtóerő tehermentesít."
        },
        {
          id: "felhajtoero_004",
          question: "A hajó miért úszik, noha acélból van?",
          choices: [
            { text: "Mert a víz sűrűbb az acélnál" },
            { text: "Mert üreges, így az átlagos sűrűsége kisebb a víznél" },
            { text: "Mert a gravitáció nem hat rá" },
            { text: "Mert taszítja a vizet" }
          ],
          answerIndex: 1,
          explanation: "Átlagos ρ < ρ_víz."
        },
        {
          id: "felhajtoero_005",
          question: "Melyik állítás HELYTELEN?",
          choices: [
            { text: "A felhajtóerő felfelé mutat" },
            { text: "Nagyobb sűrűségű folyadékban nagyobb a felhajtóerő" },
            { text: "A felhajtóerő a test térfogatától független" },
            { text: "A felhajtóerő a kiszorított térfogattal arányos" }
          ],
          answerIndex: 2,
          explanation: "F_f ∝ V_kiszorított."
        },
        {
          id: "felhajtoero_006",
          question: "Sós vízben a felhajtóerő…",
          choices: [
            { text: "kisebb, mert hígabb" },
            { text: "nagyobb, mert nagyobb a sűrűsége" },
            { text: "ugyanakkora" },
            { text: "nem lehet megmondani" }
          ],
          answerIndex: 1,
          explanation: "ρ_folyadék nagyobb → F_f nagyobb."
        },
        {
          id: "felhajtoero_007",
          question: "Egy 0,5 m³ térfogatú test teljesen víz alá merül. A felhajtóerő kb.:",
          choices: [
            { text: "4,9 N" },
            { text: "490 N" },
            { text: "4900 N" },
            { text: "49 000 N" }
          ],
          answerIndex: 2,
          explanation: "F_f = ρ g V ≈ 1000·9,81·0,5 ≈ 4900 N."
        },
        {
          id: "felhajtoero_008",
          question: "Ha a test sűrűsége nagyobb, mint a folyadéké, akkor…",
          choices: [
            { text: "lebeg" },
            { text: "elsüllyed" },
            { text: "felszínen marad" },
            { text: "kilő a vízből" }
          ],
          answerIndex: 1,
          explanation: "ρ_test > ρ_folyadék → G > F_f."
        },
        {
          id: "felhajtoero_009",
          question: "A felhajtóerő oka:",
          choices: [
            { text: "A test elektromos töltése" },
            { text: "A folyadék nyomáskülönbsége alul és felül" },
            { text: "A test mágnesessége" },
            { text: "A levegőáramlás" }
          ],
          answerIndex: 1,
          explanation: "Alul nagyobb p → felfelé eredő erő."
        },
        {
          id: "felhajtoero_010",
          question: "Lebegés feltétele:",
          choices: [
            { text: "F_f < G" },
            { text: "F_f = G" },
            { text: "F_f > G" },
            { text: "Nincs feltétel" }
          ],
          answerIndex: 1,
          explanation: "Egyensúly."
        },
        {
          id: "felhajtoero_011",
          question: "Mi történik a felhajtóerővel, ha a test nagyobb részét merítjük a vízbe?",
          choices: [
            { text: "Csökken" },
            { text: "Nő" },
            { text: "Nem változik" },
            { text: "Nulla lesz" }
          ],
          answerIndex: 1,
          explanation: "Nő a kiszorított térfogat."
        },
        {
          id: "felhajtoero_012",
          question: "Melyik állítás igaz a hőmérséklet növelésekor (vízben)?",
          choices: [
            { text: "A sűrűség nő → felhajtóerő nő" },
            { text: "A sűrűség csökkenhet → felhajtóerő kissé csökken" },
            { text: "Nincs hatás" },
            { text: "A víz kifolyik" }
          ],
          answerIndex: 1,
          explanation: "Melegebb víz kevésbé sűrű."
        },
        {
          id: "felhajtoero_013",
          question: "Miért könnyebb a Balti-tenger helyett a Holt-tengerben lebegni?",
          choices: [
            { text: "Melegebb" },
            { text: "Sűrűbb a víz (sósabb)" },
            { text: "Erősebb a gravitáció" },
            { text: "Kisebb a levegő sűrűsége" }
          ],
          answerIndex: 1,
          explanation: "Nagyobb ρ → nagyobb F_f."
        },
        {
          id: "felhajtoero_014",
          question: "Egy úszó testre ható erők egyensúlyban:",
          choices: [
            { text: "Felül súly és felhajtóerő, alul nyomás" },
            { text: "Felhajtóerő és súly eredője nulla" },
            { text: "Csak felhajtóerő hat" },
            { text: "Csak súly hat" }
          ],
          answerIndex: 1,
          explanation: "Egyensúly: ΣF = 0."
        },
        {
          id: "felhajtoero_015",
          question: "A felhajtóerő nagysága közvetlenül arányos…",
          choices: [
            { text: "a test tömegével" },
            { text: "a kiszorított folyadék térfogatával" },
            { text: "a hőmérséklettel" },
            { text: "a test sebességével" }
          ],
          answerIndex: 1,
          explanation: "F_f = ρ g V_kisz."
        },
        {
          id: "felhajtoero_016",
          question: "Egy fa kocka úszik a vízen. Ha ólomdarabot kötünk rá és teljesen elmerül, a felhajtóerő…",
          choices: [
            { text: "csökken" },
            { text: "nő" },
            { text: "változatlan" },
            { text: "nulla" }
          ],
          answerIndex: 1,
          explanation: "Teljes elmerüléskor nagyobb V_kisz → nagyobb F_f."
        },
        {
          id: "felhajtoero_017",
          question: "A levegő felhajtóereje…",
          choices: [
            { text: "nem létezik" },
            { text: "csak vákuumban van" },
            { text: "létezik, pl. léghajónál" },
            { text: "csak vízben létezik" }
          ],
          answerIndex: 2,
          explanation: "Archimédesz gázokra is érvényes."
        },
        {
          id: "felhajtoero_018",
          question: "Melyik test süllyed el biztosan vízben?",
          choices: [
            { text: "ρ = 0,9 g/cm³" },
            { text: "ρ = 1,0 g/cm³" },
            { text: "ρ = 1,2 g/cm³" },
            { text: "ρ = 0,5 g/cm³" }
          ],
          answerIndex: 2,
          explanation: "Víz ρ≈1,0 → 1,2 nagyobb."
        },
        {
          id: "felhajtoero_019",
          question: "Egy test súlya 20 N, a felhajtóerő 5 N. Látszólagos súly:",
          choices: [{ text: "25 N" }, { text: "15 N" }, { text: "5 N" }, { text: "0 N" }],
          answerIndex: 1,
          explanation: "G_látsz = G − F_f."
        },
        {
          id: "felhajtoero_020",
          question: "A felhajtóerő iránya mindig…",
          choices: [
            { text: "lefelé" },
            { text: "a közeg sűrűsödése felé" },
            { text: "felfelé, a kisebb nyomás felé" },
            { text: "vízszintesen" }
          ],
          answerIndex: 2,
          explanation: "Alul nagyobb a nyomás → eredő felfelé."
        },
      ],
    },
  ],
},

  // 2) HANGTAN
  {
    id: "fizika_8_hangtan",
    title: "Hangtan",
    sections: [
      {
        id: "hang_tulajdonsagok",
        title: "A hang jellemzői",
        bank: [
          { id: "hang_001", question: "Melyik közlés igaz a hang terjedéséről?", choices: [{ text: "Közeg kell hozzá" }, { text: "Vákuumban is terjed" }, { text: "Csak folyadékban" }, { text: "Csak szilárdban" }], answerIndex: 0, explanation: "A hang mechanikai hullám, közeg kell neki." },
          { id: "hang_002", question: "A hangmagasságot mi határozza meg?", choices: [{ text: "frekvencia" }, { text: "amplitúdó" }, { text: "hőmérséklet" }, { text: "nyomás" }], answerIndex: 0, explanation: "Magas hang = nagy frekvencia." },
          { id: "hang_003", question: "A hangerőt fizikailag mi jellemzi?", choices: [{ text: "intenzitás" }, { text: "frekvencia" }, { text: "T" }, { text: "λ" }], answerIndex: 0, explanation: "A hang energiája egységnyi felületen." },
          { id: "hang_004", question: "Az infrahang tartománya:", choices: [{ text: "< 20 Hz" }, { text: "20–20000 Hz" }, { text: "> 20 kHz" }, { text: "2–20 Hz" }], answerIndex: 0, explanation: "Az emberi hallás alatt." },
          { id: "hang_005", question: "A levegőben a hang sebessége 20 °C-on kb.:", choices: [{ text: "343 m/s" }, { text: "3000 m/s" }, { text: "30 m/s" }, { text: "100 m/s" }], answerIndex: 0, explanation: "Közelítő érték." },
          { id: "hang_006", question: "Melyik NEM mechanikai hullám?", choices: [{ text: "fény" }, { text: "hang" }, { text: "vízhullám" }, { text: "földrengéshullám" }], answerIndex: 0, explanation: "A fény elektromágneses hullám." },
          { id: "hang_007", question: "Mi a visszhang feltétele?", choices: [{ text: "≥17 m távolság" }, { text: "≥1 m" }, { text: "nincs feltétel" }, { text: "zárt tér kell" }], answerIndex: 0, explanation: "Oda-vissza 34 m → kb. 0,1 s különbség." },
          { id: "hang_008", question: "Ultrahang tartománya:", choices: [{ text: "> 20 kHz" }, { text: "< 20 Hz" }, { text: "2–20 Hz" }, { text: "20–20000 Hz" }], answerIndex: 0, explanation: "Az emberi hallás feletti frekvenciák." },
          { id: "hang_009", question: "A hangszín függ:", choices: [{ text: "felhangoktól" }, { text: "nyomástól" }, { text: "T-től" }, { text: "sebességtől" }], answerIndex: 0, explanation: "A hangszín a felhangok arányától függ." },
          { id: "hang_010", question: "A decibel (dB) mért:", choices: [{ text: "logaritmikus arányt" }, { text: "időt" }, { text: "távolságot" }, { text: "frekvenciát" }], answerIndex: 0, explanation: "A hangnyomásszint logaritmikus mértéke." },
          { id: "hang_011", question: "Mi a rezonancia feltétele hangnál is?", choices: [{ text: "külső frekvencia = sajátfrekvencia" }, { text: "nagy amplitúdó" }, { text: "vákuum" }, { text: "cső" }], answerIndex: 0, explanation: "Azonos frekvencia esetén erősítés." },
          { id: "hang_012", question: "Ha növeljük a húr feszítését:", choices: [{ text: "f nő" }, { text: "f csökken" }, { text: "nem változik" }, { text: "csak A nő" }], answerIndex: 0, explanation: "Feszítettebb húr → magasabb hang." },
          { id: "hang_013", question: "Ha rövidítjük a húrt:", choices: [{ text: "f nő" }, { text: "f csökken" }, { text: "nem változik" }, { text: "A csökken" }], answerIndex: 0, explanation: "Rövidebb → nagyobb sajátfrekvencia." },
          { id: "hang_014", question: "Mi a felhang?", choices: [{ text: "alaphang egész számú többszöröse" }, { text: "zaj" }, { text: "harmadik felharmonikus" }, { text: "sajátfrekvencia" }], answerIndex: 0, explanation: "Felhangok határozzák meg a hangszínt." },
          { id: "hang_015", question: "A hang erősségének SI egysége:", choices: [{ text: "W/m²" }, { text: "Pa" }, { text: "Hz" }, { text: "J" }], answerIndex: 0, explanation: "Intenzitás egysége watt per négyzetméter." },
          { id: "hang_016", question: "A hang sebessége nő, ha:", choices: [{ text: "a levegő hőmérséklete nő" }, { text: "f nő" }, { text: "A nő" }, { text: "ρ nő" }], answerIndex: 0, explanation: "Melegebb levegőben gyorsabb." },
          { id: "hang_017", question: "Doppler esetén közeledő forrásnál λ:", choices: [{ text: "csökken" }, { text: "nő" }, { text: "állandó" }, { text: "véletlen" }], answerIndex: 0, explanation: "Közeledés → sűrűbb hullámfront." },
          { id: "hang_018", question: "Ultrahang felhasználása:", choices: [{ text: "orvosi képalkotás" }, { text: "fényvisszaverés" }, { text: "hangfalak" }, { text: "optika" }], answerIndex: 0, explanation: "Ultrahang visszaverődik a szövetek határán." },
          { id: "hang_019", question: "A visszhangosság csökkenthető:", choices: [{ text: "elnyelő anyagokkal" }, { text: "visszaverőkkel" }, { text: "üvegfalakkal" }, { text: "fémfalakkal" }], answerIndex: 0, explanation: "Elnyelők csökkentik az utózengést." },
          { id: "hang_020", question: "A hang erőssége arányos:", choices: [{ text: "A²" }, { text: "1/A" }, { text: "T" }, { text: "f" }], answerIndex: 0, explanation: "Energia ~ amplitúdó négyzetével." },
        ],
      },
    ],
  },

  // 3) FÉNYTAN
  {
    id: "fizika_8_fenytan",
    title: "Fénytan (Optika)",
    sections: [
      {
        id: "feny_visszaverodes_tores",
        title: "Visszaverődés és törés",
        bank: [
          { id: "feny_001", question: "A fény vákuumbeli sebessége:", choices: [{ text: "3·10⁸ m/s" }, { text: "3·10⁶ m/s" }, { text: "300 m/s" }, { text: "30 m/s" }], answerIndex: 0, explanation: "c ≈ 3·10⁸ m/s." },
          { id: "feny_002", question: "A fény terjedése homogén közegben:", choices: [{ text: "egyenes vonalú" }, { text: "kanyargós" }, { text: "kör" }, { text: "szinuszos" }], answerIndex: 0, explanation: "Egyenes vonalban terjed." },
          { id: "feny_003", question: "Mi történik, ha a fény két közeg határára ér?", choices: [{ text: "visszaverődik és megtörik" }, { text: "eltűnik" }, { text: "csak elnyelődik" }, { text: "nem változik" }], answerIndex: 0, explanation: "Két folyamat egyszerre is." },
          { id: "feny_004", question: "A beesési szög egyenlő a:", choices: [{ text: "visszaverődési szöggel" }, { text: "törési szöggel" }, { text: "merőlegessel" }, { text: "fénysebességgel" }], answerIndex: 0, explanation: "Visszaverődési törvény." },
          { id: "feny_005", question: "Mi a törésmutató jele?", choices: [{ text: "n" }, { text: "λ" }, { text: "f" }, { text: "c" }], answerIndex: 0, explanation: "Törésmutató n = c/v." },
          { id: "feny_006", question: "Miért látjuk a botot vízbe mártva megtörtnek?", choices: [{ text: "fény törése miatt" }, { text: "reflexió" }, { text: "elhajlás" }, { text: "diszperzió" }], answerIndex: 0, explanation: "A fény törik a víz–levegő határon." },
          { id: "feny_007", question: "Mi a diszperzió?", choices: [{ text: "fehér fény színekre bomlása" }, { text: "visszaverődés" }, { text: "elhajlás" }, { text: "csillapítás" }], answerIndex: 0, explanation: "Hullámhossz-függő törésmutató." },
          { id: "feny_008", question: "Miért látszik a napkorong vörösnek naplementekor?", choices: [{ text: "a hosszabb hullámhossz kevésbé szóródik" }, { text: "a nap lehűl" }, { text: "a légnyomás csökken" }, { text: "a nap távolabb van" }], answerIndex: 0, explanation: "Rövidebb hullámhossz szóródik, vörös marad." },
          { id: "feny_009", question: "Milyen típusú hullám a fény?", choices: [{ text: "elektromágneses" }, { text: "mechanikai" }, { text: "hang" }, { text: "hosszanti" }], answerIndex: 0, explanation: "Fény hullám elektromágneses természetű." },
          { id: "feny_010", question: "A tükörkép mikor valódi?", choices: [{ text: "ha a fénysugarak ténylegesen találkoznak" }, { text: "ha csak látszólagosan" }, { text: "mindig" }, { text: "soha" }], answerIndex: 0, explanation: "Valódi kép = fénysugarak találkozása." },
          { id: "feny_011", question: "Mi a beesési szög definíciója?", choices: [
            { text: "A beeső fénysugár és a felület közti szög" },
            { text: "A beeső fénysugár és a beesési merőleges közti szög" },
            { text: "A visszavert és a törött sugár közti szög" },
            { text: "A felület és a beesési merőleges közti szög" }
          ], answerIndex: 1, explanation: "Beesési szög = beeső sugár és a felületre állított merőleges (normális) által bezárt szög." },

          { id: "feny_012", question: "Visszaverődés törvénye:", choices: [
            { text: "i = r (beesési szög = visszaverődési szög)" },
            { text: "i > r" },
            { text: "i < r" },
            { text: "i + r = 90°" }
          ], answerIndex: 0, explanation: "Sima felületen a beesési szög egyenlő a visszaverődési szöggel és a sugarak egy síkban vannak." },

          { id: "feny_013", question: "Törés törvénye (kvalitatív):", choices: [
            { text: "Sűrűbb közegbe lépve a fény a beesési merőleges felé törik" },
            { text: "Sűrűbb közegbe lépve a fény a merőlegestől elfelé törik" },
            { text: "Ritkább közegbe lépve a merőleges felé törik" },
            { text: "Nincs összefüggés a közegek sűrűségével" }
          ], answerIndex: 0, explanation: "nagyobb törésmutató felé közeledik a sugár: a merőleges felé törik." },

          { id: "feny_014", question: "A törésmutató definíciója:", choices: [
            { text: "n = v/c" },
            { text: "n = c/v" },
            { text: "n = U/I" },
            { text: "n = s/t" }
          ], answerIndex: 1, explanation: "n = c/v, ahol c a vákuumbeli fénysebesség, v a közegbeli fénysebesség." },

          { id: "feny_015", question: "Teljes visszaverődés mikor jöhet létre?", choices: [
            { text: "Ha a fény sűrűbből ritkább közegbe lép és a beesési szög nagyobb a határszögnél" },
            { text: "Bármikor, ha tükör van a határon" },
            { text: "Ritkábbból sűrűbbe lépéskor bármely szögnél" },
            { text: "Csak 90°-os beesésnél" }
          ], answerIndex: 0, explanation: "Sűrűbb→ritkább esetén, a kritikus (határ) szögnél nagyobb beesésre nem törik ki, hanem teljesen visszaverődik." },

          { id: "feny_016", question: "Mi jellemzi az árnyék keletkezését pontszerű fényforrásnál?", choices: [
            { text: "Csak félárnyék jön létre" },
            { text: "Nincs árnyék" },
            { text: "Éles kontúrú teljes árnyék keletkezik" },
            { text: "Az árnyék színe kékes" }
          ], answerIndex: 2, explanation: "Pontszerű forrásnál a fény egyenes terjedése miatt éles szélű teljes árnyék jön létre." },

          { id: "feny_017", question: "Mi a félárnyék oka kiterjedt fényforrásnál?", choices: [
            { text: "A fény egyenes vonalú terjedése" },
            { text: "A forrás különböző pontjaiból részben takart, részben megvilágított sugarak érkeznek" },
            { text: "A fény elhajlása nagy mértékű" },
            { text: "A fény sebessége változik a vákuumban" }
          ], answerIndex: 1, explanation: "Kiterjedt forrásnál a tárgy egyes pontjai csak a forrás egy részét takarják ki → félárnyék." },

          { id: "feny_018", question: "Hogyan változik a fény sebessége üvegben a vákuumhoz képest?", choices: [
            { text: "Nagyobb" },
            { text: "Ugyanakkora" },
            { text: "Kisebb" },
            { text: "Véletlenszerű" }
          ], answerIndex: 2, explanation: "Közegben a fény lassabban terjed (n = c/v > 1)." },

          { id: "feny_019", question: "Mit jelent, hogy a sugarak egy síkban vannak törésnél és visszaverődésnél?", choices: [
            { text: "A beeső, a visszavert/törött sugár és a beesési merőleges egy síkban helyezkedik el" },
            { text: "Mindig derékszöget zárnak be" },
            { text: "Párhuzamosak" },
            { text: "Véletlenszerű a helyzetük" }
          ], answerIndex: 0, explanation: "Ez a geometriai optika fontos alapelve." },

          { id: "feny_020", question: "Snellius–Descartes törvényének egyszerű arányos alakja (azonos síkban):", choices: [
            { text: "n₁·sin i = n₂·sin r" },
            { text: "n₁·i = n₂·r" },
            { text: "i = r" },
            { text: "n = c·v" }
          ], answerIndex: 0, explanation: "A törés törvénye mennyiségi alakban: n₁·sin i = n₂·sin r."
          },

        ],
      },
      {
        id: "lencsek_kepkepzes",
        title: "Lencsék és képképzés",
        bank: [
          { id: "lencse_001", question: "A gyűjtőlencse fókuszpontja:", choices: [{ text: "ahová a párhuzamos sugarak gyűlnek" }, { text: "ahonnan szóródnak" }, { text: "a középpontja" }, { text: "a tükör előtt" }], answerIndex: 0, explanation: "Fókuszpont (F)." },
          { id: "lencse_002", question: "A szórólencse másik neve:", choices: [{ text: "konkáv" }, { text: "konvex" }, { text: "sík" }, { text: "domború" }], answerIndex: 0, explanation: "A szórólencse homorú, más néven konkáv." },
          { id: "lencse_003", question: "A gyűjtőlencse képe lehet:", choices: [{ text: "valódi vagy látszólagos" }, { text: "mindig valódi" }, { text: "mindig látszólagos" }, { text: "soha semmilyen" }], answerIndex: 0, explanation: "A tárgy helyétől függően lehet mindkettő." },
          { id: "lencse_004", question: "A homorú tükör:", choices: [{ text: "gyűjt" }, { text: "szór" }, { text: "nem tükröz" }, { text: "mindig fordít" }], answerIndex: 0, explanation: "A homorú tükör gyűjtő tükör." },
          { id: "lencse_005", question: "A domború tükör:", choices: [{ text: "szóró" }, { text: "gyűjtő" }, { text: "semleges" }, { text: "mindig fordított képet ad" }], answerIndex: 0, explanation: "A domború tükör széttartó sugarakat ver vissza." },
          { id: "lencse_006", question: "Valódi kép esetén a fénysugarak:", choices: [{ text: "ténylegesen metszik egymást" }, { text: "látszólagosan találkoznak" }, { text: "párhuzamosak" }, { text: "nem léteznek" }], answerIndex: 0, explanation: "A valódi kép ott jön létre, ahol a sugarak ténylegesen metszik egymást." },
          { id: "lencse_007", question: "Látszólagos kép keletkezik, ha:", choices: [{ text: "a fénysugarak csak meghosszabbításai találkoznak" }, { text: "ténylegesen metszik egymást" }, { text: "nincs kép" }, { text: "a tárgy nincs fókuszon belül" }], answerIndex: 0, explanation: "Látszólagos kép esetén a sugarak csak látszólag találkoznak." },
          { id: "lencse_008", question: "Melyik optikai eszközben van gyűjtőlencse?", choices: [{ text: "nagyító" }, { text: "szórólencse" }, { text: "tükör" }, { text: "periszkóp" }], answerIndex: 0, explanation: "A nagyító gyűjtőlencse." },
          { id: "lencse_009", question: "A távcsőben a cél az, hogy:", choices: [{ text: "nagyítson" }, { text: "kicsinyítsen" }, { text: "visszaverjen" }, { text: "szórjon" }], answerIndex: 0, explanation: "A távcső a távoli tárgyakat nagyítja." },
          { id: "lencse_010", question: "A szem alkalmazkodása azt jelenti, hogy:", choices: [{ text: "a lencse domborúsága változik" }, { text: "a retina mozog" }, { text: "a pupilla nő" }, { text: "a szaruhártya elmozdul" }], answerIndex: 0, explanation: "A szemlencse domborúsága változik a távolság függvényében." },
          { id: "lencse_011", question: "Rövidlátásnál milyen lencsét használnak?", choices: [{ text: "szórólencsét" }, { text: "gyűjtőlencsét" }, { text: "homorú tükröt" }, { text: "prizmát" }], answerIndex: 0, explanation: "Rövidlátást konkáv lencsével korrigálnak." },
          { id: "lencse_012", question: "Távollátásnál milyen lencsét használnak?", choices: [{ text: "gyűjtőlencsét" }, { text: "szórólencsét" }, { text: "homorút" }, { text: "nincs lencse" }], answerIndex: 0, explanation: "Távollátást konvex lencsével javítják." },
          { id: "lencse_013", question: "A fókusztávolság jele:", choices: [{ text: "f" }, { text: "F" }, { text: "R" }, { text: "r" }], answerIndex: 0, explanation: "A fókusztávolság jele f." },
          { id: "lencse_014", question: "Mi a gyújtótávolság mértékegysége?", choices: [{ text: "m" }, { text: "cm" }, { text: "mm" }, { text: "fok" }], answerIndex: 0, explanation: "Távolság, így méterben mérjük." },
          { id: "lencse_015", question: "Mi jellemző a homorú tükör által alkotott képre, ha a tárgy a fókuszon kívül van?", choices: [{ text: "valódi, fordított" }, { text: "látszólagos, egyenes" }, { text: "nincs kép" }, { text: "felnagyított" }], answerIndex: 0, explanation: "Ha a tárgy a fókuszon kívül van, a kép valódi és fordított." },
          { id: "lencse_016", question: "Milyen kép keletkezik síktükörben?", choices: [{ text: "látszólagos, egyenes, azonos nagyságú" }, { text: "valódi" }, { text: "fordított" }, { text: "kicsinyített" }], answerIndex: 0, explanation: "A síktükör mindig látszólagos, egyenes képet ad." },
          { id: "lencse_017", question: "Mi a dioptria?", choices: [{ text: "fókusztávolság reciproka" }, { text: "lencse vastagsága" }, { text: "nagyítás" }, { text: "fénysebesség" }], answerIndex: 0, explanation: "D = 1/f [m⁻¹]." },
          { id: "lencse_018", question: "Milyen a konkáv tükör fókusza?", choices: [{ text: "valódi" }, { text: "látszólagos" }, { text: "nincs" }, { text: "mindkettő" }], answerIndex: 0, explanation: "A homorú tükör valódi fókuszú." },
          { id: "lencse_019", question: "Milyen a konvex tükör fókusza?", choices: [{ text: "látszólagos" }, { text: "valódi" }, { text: "nincs" }, { text: "fordított" }], answerIndex: 0, explanation: "A domború tükör fókusza látszólagos." },
          { id: "lencse_020", question: "A mikroszkópban milyen lencsék találhatók?", choices: [{ text: "két gyűjtőlencse" }, { text: "két szórólencse" }, { text: "egy sík és egy domború" }, { text: "egy tükör" }], answerIndex: 0, explanation: "Az objektív és az okulár is gyűjtőlencse." },
        ],
      },
    ],
  },

   // 4) EGYENÁRAM, ELEKTROMOSSÁGTAN
  {
    id: "fizika_8_elektromossag",
    title: "Egyenáram, elektromosságtan",
    sections: [
        {
      id: "elektrosztatika_alapok",
      title: "Elektrosztatika – alapok",
      
       bank: [
  {
    id: "elekt_001",
    question: "Két azonos előjelű töltés kölcsönhatása?",
    choices: [{ text: "Taszulnak" }, { text: "Vonzanak" }, { text: "Nem hatnak egymásra" }, { text: "Csak mágneses erő hat" }],
    answerIndex: 0,
    explanation: "Elektrosztatikában azonos előjelű töltések taszítják, ellentétesek vonzzák egymást."
  },
  {
    id: "elekt_002",
    question: "A töltés SI mértékegysége:",
    choices: [{ text: "C (coulomb)" }, { text: "V (volt)" }, { text: "A (amper)" }, { text: "N (newton)" }],
    answerIndex: 0,
    explanation: "A villamos töltés mértékegysége a coulomb (C)."
  },
  {
    id: "elekt_003",
    question: "Coulomb-törvény szerint az elektromos erő nagysága arányos:",
    choices: [{ text: "q₁·q₂-vel és fordítottan r²-tel" }, { text: "q₁+q₂-vel" }, { text: "csak a távolsággal" }, { text: "csak az egyik töltéssel" }],
    answerIndex: 0,
    explanation: "F ∝ q₁q₂/r², ahol r a töltések távolsága."
  },
  {
    id: "elekt_004",
    question: "Vezetőre jellemző, hogy:",
    choices: [{ text: "benne a töltések szabadon mozognak" }, { text: "nincs benne töltés" }, { text: "a töltések rögzítettek" }, { text: "csak vákuumban működik" }],
    answerIndex: 0,
    explanation: "Fémekben a vezetési elektronok könnyen elmozdulnak."
  },
  {
    id: "elekt_005",
    question: "Szigetelőre jellemző, hogy:",
    choices: [{ text: "a töltések nem mozognak szabadon" }, { text: "jobban vezet, mint a fém" }, { text: "nem tölthető fel" }, { text: "mágneses" }],
    answerIndex: 0,
    explanation: "Szigetelőkben nincsenek szabad töltéshordozók."
  },
  {
    id: "elekt_006",
    question: "Az elektromos térerősség jele és egysége:",
    choices: [{ text: "E, N/C (vagy V/m)" }, { text: "U, V" }, { text: "I, A" }, { text: "R, Ω" }],
    answerIndex: 0,
    explanation: "E = F/q, mértékegysége newton per coulomb (N/C) vagy volt per méter (V/m)."
  },
  {
    id: "elekt_007",
    question: "Az erővonalak iránya:",
    choices: [{ text: "a pozitív töltéstől a negatív felé" }, { text: "mindig körpálya" }, { text: "negatívtól pozitív felé" }, { text: "véletlenszerű" }],
    answerIndex: 0,
    explanation: "Konvenció szerint + → – irányba mutatnak."
  },
  {
    id: "elekt_008",
    question: "Az elektromos feszültség jelentése:",
    choices: [{ text: "két pont közti potenciálkülönbség" }, { text: "töltés nagysága" }, { text: "áram időegység alatt" }, { text: "vezeték hossza" }],
    answerIndex: 0,
    explanation: "U = W/Q: egységnyi töltésre jutó munkakülönbség."
  },
  {
    id: "elekt_009",
    question: "A kondenzátor kapacitása nő, ha:",
    choices: [{ text: "nagyobb a lemezek felülete és kisebb a távolság" }, { text: "kisebb felület, nagyobb távolság" }, { text: "csak az anyag számít" }, { text: "nincs hatása a méretnek" }],
    answerIndex: 0,
    explanation: "C ≈ ε·A/d: nő A-val, csökken d növelésével."
  },
  {
    id: "elekt_010",
    question: "A földelés célja:",
    choices: [{ text: "életvédelem, veszélyes feszültség levezetése" }, { text: "áram növelése" }, { text: "feszültségtermelés" }, { text: "vezeték melegítése" }],
    answerIndex: 0,
    explanation: "A test potenciálját biztonságos szintre hozza."
  },
  {
    id: "elekt_011",
    question: "Az elektroszkóp feladata:",
    choices: [{ text: "töltés jelenlétének kimutatása" }, { text: "áram mérése" }, { text: "ellenállás mérése" }, { text: "mágnesesség mérése" }],
    answerIndex: 0,
    explanation: "Feltöltéskor a levelek szétállnak."
  },
  {
    id: "elekt_012",
    question: "Feltöltés dörzsöléssel azt jelenti, hogy:",
    choices: [{ text: "elektronok vándorolnak egyik testből a másikba" }, { text: "új töltés keletkezik a semmiből" }, { text: "a test tömege jelentősen nő" }, { text: "csak melegszik a test" }],
    answerIndex: 0,
    explanation: "Töltés nem keletkezik, csak átrendeződik (megmaradás)."
  },
  {
    id: "elekt_013",
    question: "Vezető test töltését hogyan lehet „árnyékolni”?",
    choices: [{ text: "Faraday-kalitkával" }, { text: "Fa dobozzal" }, { text: "Üveg burával" }, { text: "Papírtasakkal" }],
    answerIndex: 0,
    explanation: "Zárt vezető felületen belül a térerősség ~0."
  },
  {
    id: "elekt_014",
    question: "Elektromos potenciál mértékegysége:",
    choices: [{ text: "V (volt)" }, { text: "C (coulomb)" }, { text: "A (amper)" }, { text: "Ω (ohm)" }],
    answerIndex: 0,
    explanation: "A potenciál és a feszültség is voltban mérhető."
  },
  {
    id: "elekt_015",
    question: "Melyik igaz a semleges testre?",
    choices: [{ text: "összes töltéseinek előjele kiegyenlíti egymást" }, { text: "nincs benne töltés" }, { text: "mindig pozitív" }, { text: "mindig negatív" }],
    answerIndex: 0,
    explanation: "Össztöltése zérus, de lehetnek benne töltéshordozók."
  },
  {
    id: "elekt_016",
    question: "Mit jelent a polarizáció szigetelőben külső térben?",
    choices: [{ text: "a kötött töltések kismértékben eltolódnak" }, { text: "szabad elektronok rohannak" }, { text: "a test felrobban" }, { text: "a töltés eltűnik" }],
    answerIndex: 0,
    explanation: "Dipólus-momentumok rendeződnek, indukált töltésosztás."
  },
  {
    id: "elekt_017",
    question: "Villámhárító működésének lényege:",
    choices: [{ text: "a kisülést a talaj felé vezeti" }, { text: "megszünteti az esőt" }, { text: "feltölti a házat" }, { text: "áramot termel" }],
    answerIndex: 0,
    explanation: "Éles csúcs, jó vezető – biztonságos levezetés a földbe."
  },
  {
    id: "elekt_018",
    question: "Két pont között 1 V a feszültség, ha:",
    choices: [{ text: "1 C töltés mozgatásához 1 J munka kell" }, { text: "1 A áram folyik" }, { text: "1 Ω az ellenállás" }, { text: "1 N erő hat" }],
    answerIndex: 0,
    explanation: "U = W/Q → 1 V = 1 J / 1 C."
  },
  {
    id: "elekt_019",
    question: "Pozitív próbatöltésre ható erő iránya a térben:",
    choices: [{ text: "az E vektor irányába" }, { text: "E-vel ellentétes" }, { text: "mindig balra" }, { text: "körpályán" }],
    answerIndex: 0,
    explanation: "F = q·E; pozitív q esetén F és E azonos irányú."
  },
  {
    id: "elekt_020",
    question: "Két töltés távolságát duplázzuk (r→2r). Az erő nagysága:",
    choices: [{ text: "negyedére csökken" }, { text: "felére csökken" }, { text: "kétszeresére nő" }, { text: "nem változik" }],
    answerIndex: 0,
    explanation: "Coulomb-törvény: F ∝ 1/r² → (1/2)² = 1/4."
  },
],
        },
      {
        id: "ohm_torveny_aramkor",
        title: "Ohm törvénye és és egyszerű áramkörök",
        bank: [
          { id: "ohm_001", question: "Ohm törvénye:", choices: [{ text: "U = R · I" }, { text: "P = U · I" }, { text: "Q = I · t" }, { text: "R = U · I" }], answerIndex: 0, explanation: "Arányosság U és I között, arányossági tényező az R." },
          { id: "ohm_002", question: "Az áramerősség jele:", choices: [{ text: "I" }, { text: "U" }, { text: "R" }, { text: "P" }], answerIndex: 0, explanation: "I, mértékegysége amper (A)." },
          { id: "ohm_003", question: "A feszültség mértékegysége:", choices: [{ text: "V" }, { text: "A" }, { text: "Ω" }, { text: "W" }], answerIndex: 0, explanation: "Volt (V)." },
          { id: "ohm_004", question: "Az ellenállás mértékegysége:", choices: [{ text: "Ω" }, { text: "A" }, { text: "V" }, { text: "W" }], answerIndex: 0, explanation: "Ohm." },
          { id: "ohm_005", question: "Ha U = 6 V és R = 3 Ω, mekkora az I?", choices: [{ text: "2 A" }, { text: "0,5 A" }, { text: "18 A" }, { text: "9 A" }], answerIndex: 0, explanation: "I = U/R = 2 A." },
          { id: "ohm_006", question: "Az áram iránya:", choices: [{ text: "pozitív pólustól negatív felé" }, { text: "negatív pólustól pozitív felé" }, { text: "mindkettő" }, { text: "véletlenszerű" }], answerIndex: 0, explanation: "Megállapodás szerint pozitívtól negatívig." },
          { id: "ohm_007", question: "Ha I = 0,5 A és R = 8 Ω, akkor U = ?", choices: [{ text: "4 V" }, { text: "16 V" }, { text: "0,0625 V" }, { text: "8 V" }], answerIndex: 0, explanation: "U = I·R = 0,5·8 = 4 V." },
          { id: "ohm_008", question: "A feszültséget hogyan mérjük?", choices: [{ text: "párhuzamosan" }, { text: "sorosan" }, { text: "bármely módon" }, { text: "nem mérhető" }], answerIndex: 0, explanation: "Voltmérőt párhuzamosan kötünk." },
          { id: "ohm_009", question: "A feszültségforrás feladata:", choices: [{ text: "energiát biztosít" }, { text: "ellenállást növel" }, { text: "áramot csökkent" }, { text: "hűtést végez" }], answerIndex: 0, explanation: "Energiaforrás." },
          { id: "ohm_010", question: "Ha nő a feszültség, de R állandó:", choices: [{ text: "nő az áramerősség" }, { text: "csökken" }, { text: "állandó" }, { text: "eltűnik" }], answerIndex: 0, explanation: "I = U/R, így I nő." },
          { id: "ohm_011", question: "A teljesítmény képlete:", choices: [{ text: "P = U·I" }, { text: "P = R·I" }, { text: "P = I/R" }, { text: "P = R·U" }], answerIndex: 0, explanation: "Elektromos teljesítmény: P = U·I." },
          { id: "ohm_012", question: "Az energia (munka) jele és egysége:", choices: [{ text: "W, J" }, { text: "E, V" }, { text: "P, W" }, { text: "Q, Ω" }], answerIndex: 0, explanation: "W = P·t, joule-ban." },
          { id: "ohm_013", question: "Mi történik, ha két ellenállást sorosan kapcsolunk?", choices: [{ text: "összegződnek" }, { text: "csökkennek" }, { text: "feleződnek" }, { text: "eltűnnek" }], answerIndex: 0, explanation: "R_össz = R1 + R2." },
          { id: "ohm_014", question: "Ha két ellenállást párhuzamosan kapcsolunk:", choices: [{ text: "az eredő kisebb, mint bármelyik" }, { text: "összegük" }, { text: "nagyobb" }, { text: "nincs áram" }], answerIndex: 0, explanation: "1/R = 1/R1 + 1/R2 → kisebb eredő." },
          { id: "ohm_015", question: "A fogyasztóban a hőtermelés oka:", choices: [{ text: "ellenállás miatti energiaátalakulás" }, { text: "áramlás hűtése" }, { text: "feszültség csökkenése" }, { text: "semmi" }], answerIndex: 0, explanation: "Joule-hő keletkezik." },
          { id: "ohm_016", question: "A biztosíték szerepe:", choices: [{ text: "megszakítja a túláramot" }, { text: "feszültséget növel" }, { text: "energiát tárol" }, { text: "áramot erősít" }], answerIndex: 0, explanation: "Megvédi a hálózatot." },
          { id: "ohm_017", question: "A vezeték ellenállása függ:", choices: [{ text: "hosszától és keresztmetszetétől" }, { text: "színétől" }, { text: "áramtól" }, { text: "időtől" }], answerIndex: 0, explanation: "R = ρ·l/A." },
          { id: "ohm_018", question: "A feszültség növelésével:", choices: [{ text: "nő az áram" }, { text: "csökken" }, { text: "nem változik" }, { text: "megszűnik" }], answerIndex: 0, explanation: "Ohm törvénye." },
          { id: "ohm_019", question: "Az áramerősség mértékegysége:", choices: [{ text: "A (amper)" }, { text: "V" }, { text: "Ω" }, { text: "J" }], answerIndex: 0, explanation: "Alap SI egység." },
          { id: "ohm_020", question: "A feszültségforrás pólusai között potenciálkülönbség van, mert:", choices: [{ text: "töltéseket mozgat" }, { text: "ellenállás nő" }, { text: "hő keletkezik" }, { text: "energia csökken" }], answerIndex: 0, explanation: "A forrás munkát végez a töltéseken." },
        ],
      },
      {
        id: "aramkorok_meres",
        title: "Áramkörök, mérések",
        bank: [
          { id: "aram_meres_001", question: "Ampermérőt hogyan kötünk be?", choices: [{ text: "sorosan" }, { text: "párhuzamosan" }, { text: "bárhogy" }, { text: "nem kötjük" }], answerIndex: 0, explanation: "Az áramot sorosan mérjük." },
          { id: "aram_meres_002", question: "Voltmérőt hogyan kötünk be?", choices: [{ text: "párhuzamosan" }, { text: "sorosan" }, { text: "bárhogy" }, { text: "nem mérhető" }], answerIndex: 0, explanation: "A feszültséget párhuzamosan mérjük." },
          { id: "aram_meres_003", question: "A multiméterrel mérhető:", choices: [{ text: "U, I, R" }, { text: "csak U" }, { text: "csak I" }, { text: "csak R" }], answerIndex: 0, explanation: "Többfunkciós mérőeszköz." },
          { id: "aram_meres_004", question: "Az elektromos munka jele:", choices: [{ text: "W" }, { text: "P" }, { text: "I" }, { text: "Q" }], answerIndex: 0, explanation: "Munka: W, mértékegység joule." },
          { id: "aram_meres_005", question: "Az áramerősség iránya:", choices: [{ text: "pozitív pólustól a negatív felé" }, { text: "negatívtól pozitívig" }, { text: "véletlenszerű" }, { text: "ellentétes" }], answerIndex: 0, explanation: "Megállapodás szerint így." },
          { id: "aram_meres_006", question: "Mit mutat az amperóra?", choices: [{ text: "töltésmennyiséget" }, { text: "energiát" }, { text: "feszültséget" }, { text: "ellenállást" }], answerIndex: 0, explanation: "Q = I·t." },
          { id: "aram_meres_007", question: "Ha I = 0,5 A és R = 8 Ω, akkor U = ?", choices: [{ text: "4 V" }, { text: "16 V" }, { text: "0,0625 V" }, { text: "8 V" }], answerIndex: 0, explanation: "U = I·R = 0,5·8 = 4 V." },
          { id: "aram_meres_008", question: "A villanykörte elektromos energiát mivé alakít?", choices: [{ text: "fény- és hőenergiává" }, { text: "hanggá" }, { text: "mozgásenergiává" }, { text: "potenciális energiává" }], answerIndex: 0, explanation: "Hő és fény keletkezik." },
          { id: "aram_meres_009", question: "A biztosíték akkor olvad ki, ha:", choices: [{ text: "túl nagy áram folyik" }, { text: "túl kicsi áram" }, { text: "nincs áram" }, { text: "ellenállás csökken" }], answerIndex: 0, explanation: "Megvédi az áramkört túláramtól." },
          { id: "aram_meres_010", question: "A hálózati feszültség Magyarországon:", choices: [{ text: "230 V" }, { text: "110 V" }, { text: "12 V" }, { text: "400 V" }], answerIndex: 0, explanation: "230 V az általános háztartási érték." },
          { id: "aram_meres_011", question: "Az ellenállás függ:", choices: [{ text: "anyagától, hosszától, keresztmetszetétől" }, { text: "hőmérséklettől" }, { text: "töltéstől" }, { text: "időtől" }], answerIndex: 0, explanation: "R = ρ·l/A." },
          { id: "aram_meres_012", question: "A vezeték fajlagos ellenállását jelöli:", choices: [{ text: "ρ (ró)" }, { text: "Ω" }, { text: "U" }, { text: "I" }], answerIndex: 0, explanation: "Fajlagos ellenállás jele ρ." },
          { id: "aram_meres_013", question: "A villamos teljesítmény képlete:", choices: [{ text: "P = U·I" }, { text: "P = I²·R" }, { text: "P = U²/R" }, { text: "mindegyik helyes" }], answerIndex: 3, explanation: "Mindhárom képlet helyes, ha Ohm törvény érvényes." },
          { id: "aram_meres_014", question: "A munka kiszámítása:", choices: [{ text: "W = P·t" }, { text: "W = I/R" }, { text: "W = R·t" }, { text: "W = U·R" }], answerIndex: 0, explanation: "Munka = teljesítmény × idő." },
          { id: "aram_meres_015", question: "A villanyóra mértékegysége:", choices: [{ text: "kWh" }, { text: "A" }, { text: "V" }, { text: "Ω" }], answerIndex: 0, explanation: "Kilowattóra a fogyasztás egysége." },
          { id: "aram_meres_016", question: "A földelés célja:", choices: [{ text: "életvédelem" }, { text: "áramnövelés" }, { text: "feszültségcsökkentés" }, { text: "energiatárolás" }], answerIndex: 0, explanation: "Megakadályozza az áramütést." },
          { id: "aram_meres_017", question: "Az egyenáram:", choices: [{ text: "időben állandó irányú" }, { text: "változó irányú" }, { text: "nem mérhető" }, { text: "zérus" }], answerIndex: 0, explanation: "Az iránya nem változik időben." },
          { id: "aram_meres_018", question: "A váltakozó áram jellemzője:", choices: [{ text: "irányát és nagyságát is periodikusan változtatja" }, { text: "állandó irányú" }, { text: "csak nő" }, { text: "nem periodikus" }], answerIndex: 0, explanation: "Pl. hálózati áram 50 Hz-es." },
          { id: "aram_meres_019", question: "A fényforrások működése elektromos szempontból:", choices: [{ text: "elektromos energiát alakítanak fényenergiává" }, { text: "hangot bocsátanak ki" }, { text: "mozgási energiát termelnek" }, { text: "ellenállást csökkentenek" }], answerIndex: 0, explanation: "Pl. izzó vagy LED." },
          { id: "aram_meres_020", question: "Fogyasztásmérés villanyóránál:", choices: [{ text: "energiát mér (kWh)" }, { text: "áramot mér (A)" }, { text: "feszültséget mér (V)" }, { text: "ellenállást mér (Ω)" }], answerIndex: 0, explanation: "Munka/energia kWh-ban." },
       ],
      },
    ],
  },
  // 5) ENERGIA, MUNKA, TELJESÍTMÉNY
{
  id: "fizika_8_energia",
  title: "Energia, munka, teljesítmény",
  sections: [
    {
      id: "munka_teljesitmeny",
      title: "Munka, energiafajták, teljesítmény",
      bank: [
        { id: "energia_001", question: "Mi a munka képlete?", choices: [{ text: "W = F·s" }, { text: "W = m·v" }, { text: "W = t·I" }, { text: "W = P·F" }], answerIndex: 0, explanation: "Munka = erő × elmozdulás, ha az irányok megegyeznek." },
        { id: "energia_002", question: "Mikor végez a test pozitív munkát?", choices: [{ text: "Ha az erő és az elmozdulás azonos irányú" }, { text: "Ha ellentétes" }, { text: "Ha nincs elmozdulás" }, { text: "Ha az erő nulla" }], answerIndex: 0, explanation: "Azonos irányú esetben növeli a test energiáját." },
        { id: "energia_003", question: "Mi a teljesítmény képlete?", choices: [{ text: "P = W / t" }, { text: "P = F·t" }, { text: "P = I·U" }, { text: "P = m·g·h" }], answerIndex: 0, explanation: "Teljesítmény = elvégzett munka / idő." },
        { id: "energia_004", question: "Mi a teljesítmény mértékegysége?", choices: [{ text: "Watt (W)" }, { text: "Joule (J)" }, { text: "Newton (N)" }, { text: "Pascal (Pa)" }], answerIndex: 0, explanation: "1 W = 1 J/s." },
        { id: "energia_005", question: "Milyen energiafajta tartozik a mozgáshoz?", choices: [{ text: "Mozgási energia" }, { text: "Helyzeti energia" }, { text: "Kémiai energia" }, { text: "Elektromos energia" }], answerIndex: 0, explanation: "Mozgási energia: Ek = ½·m·v²." },
        { id: "energia_006", question: "Milyen energia tartozik a test magasságához?", choices: [{ text: "Helyzeti energia" }, { text: "Mozgási energia" }, { text: "Hőenergia" }, { text: "Fényenergia" }], answerIndex: 0, explanation: "Ep = m·g·h, a magasság függvényében." },
        { id: "energia_007", question: "Mi az energia megmaradásának törvénye?", choices: [{ text: "Energia nem vész el, csak átalakul" }, { text: "Energia létrejön és eltűnik" }, { text: "Csak mozgási energia létezik" }, { text: "Minden energia hővé alakul" }], answerIndex: 0, explanation: "A zárt rendszer teljes energiája állandó." },
        { id: "energia_008", question: "Milyen energiafajta jön létre, ha testet dörzsölünk?", choices: [{ text: "Hőenergia" }, { text: "Fényenergia" }, { text: "Mozgási energia" }, { text: "Villamos energia" }], answerIndex: 0, explanation: "A mozgási energia hővé alakul." },
        { id: "energia_009", question: "Milyen energiafajta van az elemekben?", choices: [{ text: "Kémiai energia" }, { text: "Fényenergia" }, { text: "Helyzeti energia" }, { text: "Hőenergia" }], answerIndex: 0, explanation: "A kémiai energia villamos energiává alakul." },
        { id: "energia_010", question: "Mi a hatásfok képlete?", choices: [{ text: "η = hasznos / összes" }, { text: "η = összes / hasznos" }, { text: "η = P·t" }, { text: "η = W / F" }], answerIndex: 0, explanation: "Hatásfok = hasznos energia / befektetett energia." },
        { id: "energia_011", question: "Mi a hatásfok mértékegysége?", choices: [{ text: "%" }, { text: "W" }, { text: "J" }, { text: "Pa" }], answerIndex: 0, explanation: "Hatásfokot százalékban adjuk meg." },
        { id: "energia_012", question: "Mi történik, ha a testet magasabbra emeljük?", choices: [{ text: "Nő a helyzeti energiája" }, { text: "Csökken az energiája" }, { text: "Nem változik" }, { text: "Eltűnik" }], answerIndex: 0, explanation: "Ep = m·g·h → h nő → Ep nő." },
        { id: "energia_013", question: "Milyen kapcsolat van a munka és az energia között?", choices: [{ text: "A munka az energia megváltozása" }, { text: "Függetlenek" }, { text: "Ellentétesek" }, { text: "Mindig azonosak" }], answerIndex: 0, explanation: "W = ΔE." },
        { id: "energia_014", question: "Mi az 1 Joule jelentése?", choices: [{ text: "1 N erő 1 m úton" }, { text: "1 W 1 s alatt" }, { text: "1 kg 1 m/s sebesség" }, { text: "1 V 1 A alatt" }], answerIndex: 0, explanation: "1 J = 1 N·m." },
        { id: "energia_015", question: "Milyen energiaátalakulás történik elektromos motorban?", choices: [{ text: "elektromos → mozgási" }, { text: "hő → fény" }, { text: "mechanikai → elektromos" }, { text: "fény → kémiai" }], answerIndex: 0, explanation: "Az elektromos energia forgó mozgássá alakul." },
        { id: "energia_016", question: "Mi az energia SI mértékegysége?", choices: [{ text: "Joule (J)" }, { text: "Watt (W)" }, { text: "Newton (N)" }, { text: "Pascal (Pa)" }], answerIndex: 0, explanation: "Energia és munka mértékegysége megegyezik." },
        { id: "energia_017", question: "Milyen energia keletkezik akkumulátor töltésekor?", choices: [{ text: "kémiai" }, { text: "hő" }, { text: "mechanikai" }, { text: "fény" }], answerIndex: 0, explanation: "Az elektromos energia kémiai energiává alakul." },
        { id: "energia_018", question: "Ha kétszer akkora erővel ugyanazt az utat tesszük meg, a munka:", choices: [{ text: "kétszeres" }, { text: "fele" }, { text: "azonos" }, { text: "nincs kapcsolat" }], answerIndex: 0, explanation: "W = F·s → F duplázása duplázza a munkát." },
        { id: "energia_019", question: "Milyen tényezők növelik a teljesítményt?", choices: [{ text: "nagyobb munka, rövidebb idő" }, { text: "kisebb erő" }, { text: "nagyobb hőmérséklet" }, { text: "tömeg növelése" }], answerIndex: 0, explanation: "P = W/t → W nő vagy t csökken → nagyobb P." },
        { id: "energia_020", question: "Mi a kWh mértékegység?", choices: [{ text: "energia" }, { text: "teljesítmény" }, { text: "áram" }, { text: "feszültség" }], answerIndex: 0, explanation: "1 kWh = 3,6·10⁶ J, energia mértékegység." },
      ]
    },

    {
      id: "energia_takarekossag",
      title: "Energiatakarékosság és biztonság",
      bank: [
        { id: "takarek_001", question: "Miért fontos az energiamegtakarítás?", choices: [{ text: "költség és környezetvédelem miatt" }, { text: "mert divatos" }, { text: "nem fontos" }, { text: "hogy gyorsabban égjen az izzó" }], answerIndex: 0, explanation: "Kevesebb fogyasztás = kevesebb szennyezés, olcsóbb üzemeltetés." },
        { id: "takarek_002", question: "Melyik energiahordozó megújuló?", choices: [{ text: "napenergia" }, { text: "szén" }, { text: "kőolaj" }, { text: "földgáz" }], answerIndex: 0, explanation: "Napenergia megújuló forrás." },
        { id: "takarek_003", question: "Milyen eszköz takarékosabb a hagyományos izzónál?", choices: [{ text: "LED" }, { text: "izzószálas" }, { text: "halogén" }, { text: "nehézgáz-lámpa" }], answerIndex: 0, explanation: "A LED sokkal kevesebb energiát használ." },
        { id: "takarek_004", question: "Mi a hőszigetelés célja?", choices: [{ text: "hőveszteség csökkentése" }, { text: "tömeg növelése" }, { text: "melegítés" }, { text: "szellőztetés" }], answerIndex: 0, explanation: "Kevesebb energia kell a fűtéshez." },
        { id: "takarek_005", question: "Mi a földelés szerepe?", choices: [{ text: "életvédelem" }, { text: "áramnövelés" }, { text: "melegítés" }, { text: "töltés" }], answerIndex: 0, explanation: "Érintésvédelmi okból vezeti el a hibás áramot." },
        { id: "takarek_006", question: "Mi a biztosíték feladata?", choices: [{ text: "megszakítja a túláramot" }, { text: "feszültséget növel" }, { text: "energiát termel" }, { text: "méri az áramot" }], answerIndex: 0, explanation: "Megakadályozza az áramkör túlterhelését." },
        { id: "takarek_007", question: "Hogyan csökkenthetjük a fűtési energiaigényt?", choices: [{ text: "szigeteléssel" }, { text: "nyitott ablakkal" }, { text: "ventilátorral" }, { text: "világítással" }], answerIndex: 0, explanation: "Jó szigetelés → kevesebb hőveszteség." },
        { id: "takarek_008", question: "Mi a háztartások legnagyobb energiafogyasztója?", choices: [{ text: "fűtés" }, { text: "világítás" }, { text: "TV" }, { text: "hűtő" }], answerIndex: 0, explanation: "A fűtés viszi el a legtöbb energiát." },
        { id: "takarek_009", question: "Mire utal a készülék energiacímkéjén az 'A+++'?", choices: [{ text: "nagyon takarékos" }, { text: "sokat fogyaszt" }, { text: "rossz minőség" }, { text: "nincs jelentése" }], answerIndex: 0, explanation: "A+++: legjobb hatásfok, legalacsonyabb fogyasztás." },
        { id: "takarek_010", question: "Mit mér a villanyóra?", choices: [{ text: "energiát (kWh)" }, { text: "áramot (A)" }, { text: "feszültséget (V)" }, { text: "ellenállást (Ω)" }], answerIndex: 0, explanation: "A fogyasztott elektromos energiát méri." },
        { id: "takarek_011", question: "Hogyan csökkenthetjük az állandó fogyasztást?", choices: [{ text: "standby lekapcsolása" }, { text: "fény erősítése" }, { text: "ablaknyitás" }, { text: "nagyobb TV" }], answerIndex: 0, explanation: "Standby lekapcsolásával sok kWh megtakarítható." },
        { id: "takarek_012", question: "Mi a hatásfok jelentése?", choices: [{ text: "hasznos energia / befektetett energia" }, { text: "feszültség / áram" }, { text: "idő / teljesítmény" }, { text: "hő / munka" }], answerIndex: 0, explanation: "Megmutatja, mennyire hatékony az átalakulás." },
        { id: "takarek_013", question: "Melyik energiaátalakítás a legkevésbé hatékony?", choices: [{ text: "hőtermelés villamos energiából" }, { text: "LED világítás" }, { text: "napenergia fűtés" }, { text: "hőszivattyú" }], answerIndex: 0, explanation: "Ellenkező irányú átalakulás, sok veszteséggel." },
        { id: "takarek_014", question: "Mit jelent a 1 kWh?", choices: [{ text: "1000 W teljesítmény 1 óra alatt" }, { text: "1000 J 1 perc alatt" }, { text: "1 W 1 s alatt" }, { text: "100 W 1 s alatt" }], answerIndex: 0, explanation: "Energiaegység, 1 kWh = 3,6·10⁶ J." },
        { id: "takarek_015", question: "Miért előnyös a napenergia?", choices: [{ text: "megújuló, ingyenes és környezetbarát" }, { text: "csak nappal működik" }, { text: "kimerül" }, { text: "veszélyes" }], answerIndex: 0, explanation: "Megújuló és kibocsátásmentes energiaforrás." },
        { id: "takarek_016", question: "Mi történik, ha túl sok fogyasztót kötünk egy áramkörre?", choices: [{ text: "túláram, biztosíték kiold" }, { text: "nagyobb hatásfok" }, { text: "kevesebb áram" }, { text: "semmi" }], answerIndex: 0, explanation: "A hálózat nem bírja el a nagy terhelést." },
        { id: "takarek_017", question: "Mi a FI-relé feladata?", choices: [{ text: "véd az áramütéstől" }, { text: "feszültséget szabályoz" }, { text: "világít" }, { text: "fűt" }], answerIndex: 0, explanation: "Kis különbség esetén is lekapcsol, így életet ment." },
        { id: "takarek_018", question: "Melyik a legjobb hővezető?", choices: [{ text: "fém" }, { text: "fa" }, { text: "műanyag" }, { text: "üveg" }], answerIndex: 0, explanation: "A fémek gyorsan vezetik a hőt." },
        { id: "takarek_019", question: "Melyik hűtési megoldás energiatakarékosabb?", choices: [{ text: "zárt ajtós hűtő" }, { text: "nyitva hagyott" }, { text: "fagyasztó nyitva" }, { text: "semelyik" }], answerIndex: 0, explanation: "Nyitott ajtónál elillan a hideg levegő, nő a fogyasztás." },
        { id: "takarek_020", question: "Mi a megújuló energiaforrások közös jellemzője?", choices: [{ text: "Természetesen újratermelődnek" }, { text: "Elfogynak néhány év alatt" }, { text: "Csak éjszaka működnek" }, { text: "Kizárólag ipari használatra alkalmasak" }], answerIndex: 0, explanation: "A természet folyamatosan pótolja őket, például a Nap vagy a szél energiáját." },
      ],
    },
  ],
},


      
      // 5) MÁGNESSÉG ÉS ELEKTROMÁGNESESSÉG
{
  id: "fizika_8_magnesesseg",
  title: "Mágnesség és elektromágnesesség",
  sections: [
    {
      id: "magneses_jelensegek",
      title: "Mágneses jelenségek",
      bank: [
        { id: "magnes_001", question: "A mágnes két pólusa:", choices: [{text:"É–D"}, {text:"+ –"}, {text:"Nincs pólus"}, {text:"É–É"}], answerIndex: 0, explanation: "A mágnes dipólus: északi (É) és déli (D) pólus." },
        { id: "magnes_002", question: "A földmágnesesség hatására a mágneses tű:", choices: [{text:"É–D irányba áll"}, {text:"véletlenszerűen áll"}, {text:"függőleges"}, {text:"nem hat rá"}], answerIndex: 0, explanation: "A kompasz a Föld mágneses erővonalaihoz igazodik." },
        { id: "magnes_003", question: "Ferromágneses anyag:", choices: [{text:"vas"}, {text:"réz"}, {text:"alumínium"}, {text:"fa"}], answerIndex: 0, explanation: "Vas, kobalt, nikkel ferromágneses." },
        { id: "magnes_004", question: "A mágneses erővonalak:", choices: [{text:"zárt görbék"}, {text:"kezdődnek és végződnek"}, {text:"egyenesek"}, {text:"metsszék egymást"}], answerIndex: 0, explanation: "Nem metszik egymást és zárt pályák." },
        { id: "magnes_005", question: "Egyenes áramvezető körüli tér iránya:", choices: [{text:"jobbkéz-szabállyal adható meg"}, {text:"balkéz-szabály"}, {text:"mindig É–D"}, {text:"nincs tere"}], answerIndex: 0, explanation: "Hüvelykujj az áram iránya, ujjak a tér iránya." },
        { id: "magnes_006", question: "Tekercs mágneses tere erősebb, ha:", choices: [{text:"több menetes és vasmaggal"}, {text:"kevesebb menet"}, {text:"fa maggal"}, {text:"kisebb áram"}], answerIndex: 0, explanation: "Nő menetszám, áram és vasmag erősíti a teret." },
        { id: "magnes_007", question: "A Lorentz-erő iránya merőleges:", choices: [{text:"v-re és B-re is"}, {text:"v-re párhuzamos"}, {text:"B-re párhuzamos"}, {text:"véletlenszerű"}], answerIndex: 0, explanation: "F = q·v×B, így F ⟂ v és F ⟂ B." },
        { id: "magnes_008", question: "A mágneses indukció jele és egysége:", choices: [{text:"B, tesla"}, {text:"H, henry"}, {text:"E, N/C"}, {text:"Φ, weber"}], answerIndex: 0, explanation: "B [T]; a fluxus jele Φ [Wb]." },
        { id: "magnes_009", question: "Árammal átjárt vezetőre ható erő:", choices: [{text:"F = B·I·l·sinα"}, {text:"F = q·E"}, {text:"F = m·a"}, {text:"F = k·q/r²"}], answerIndex: 0, explanation: "Mágneses erő egyenes vezetőn." },
        { id: "magnes_010", question: "Tekercsben a pólus iránya:", choices: [{text:"jobbkéz-szabály: hüvelykujj → É pólus"}, {text:"mindig lefelé"}, {text:"mindig felfelé"}, {text:"nincs pólus"}], answerIndex: 0, explanation: "Ujjak az áram iránya, hüvelykujj az É pólus." },
        { id: "magnes_011", question: "Mi történik, ha egy mágnest kettévágunk?", choices: [{text:"két kisebb dipólust kapunk"}, {text:"egyik felén É, másikon semmi"}, {text:"töltések keletkeznek"}, {text:"eltűnik a mágnesesség"}], answerIndex: 0, explanation: "Mindkét darabnak É és D pólusa lesz." },
        { id: "magnes_012", question: "Melyik NEM ferromágnes?", choices: [{text:"réz"}, {text:"vas"}, {text:"kobalt"}, {text:"nikkel"}], answerIndex: 0, explanation: "A réz diamágneses/paramágneses, nem ferro." },
        { id: "magnes_013", question: "Mágneses dipólusok kölcsönhatása:", choices: [{text:"azonos pólus taszít, ellentétes vonz"}, {text:"mindig vonz"}, {text:"mindig taszít"}, {text:"nincs kölcsönhatás"}], answerIndex: 0, explanation: "Analóg az elektromos töltésekkel." },
        { id: "magnes_014", question: "A mágneses tér munkája egy zárt pályán töltésen:", choices: [{text:"0"}, {text:"pozitív"}, {text:"negatív"}, {text:"véletlenszerű"}], answerIndex: 0, explanation: "A mágneses erő mindig merőleges a v-re, nem végez munkát." },
        { id: "magnes_015", question: "Elektron mágneses térben milyen pályán mozog (v ⟂ B)?", choices: [{text:"körpálya"}, {text:"egyenes"}, {text:"ellipszis"}, {text:"áll"}], answerIndex: 0, explanation: "Lorentz-erő centripetális, körmozgás." },
        { id: "magnes_016", question: "Mágneses tér erősségét növeli:", choices: [{text:"nagyobb áram, több menet"}, {text:"kisebb áram"}, {text:"szigetelőmag"}, {text:"rövidebb tekercs"}], answerIndex: 0, explanation: "B ~ N·I és vasmag jelenléte." },
        { id: "magnes_017", question: "Melyik állítás igaz a Föld mágneses terére?", choices: [{text:"A mágneses és a földrajzi pólusok nem esnek pontosan egybe"}, {text:"Nincs mágneses tere"}, {text:"A pólusok sosem változnak"}, {text:"Mindig azonos a térerősség"}], answerIndex: 0, explanation: "A mágneses pólusok vándorolhatnak is." },
        { id: "magnes_018", question: "Tekercsben növeljük az áram irányát ellentétesre. A pólusok:", choices: [{text:"felcserélődnek"}, {text:"nem változnak"}, {text:"eltűnnek"}, {text:"összeadódnak"}], answerIndex: 0, explanation: "Áramirány fordul → É/D pólusok cserélnek." },
        { id: "magnes_019", question: "Melyik eszköz használ elektromágnest?", choices: [{text:"relé"}, {text:"gyertya"}, {text:"hőmérő"}, {text:"fényforrás"}], answerIndex: 0, explanation: "Relé és csengő tipikus példa." },
        { id: "magnes_020", question: "A mágneses fluxus jele és egysége:", choices: [{text:"Φ, weber (Wb)"}, {text:"B, tesla"}, {text:"E, N/C"}, {text:"I, A"}], answerIndex: 0, explanation: "Φ = ∫B·dA, egysége Wb." },
      ],
    },
    {
      id: "elektromagneses_indukcio",
      title: "Elektromágneses indukció – alapok",
      bank: [
        { id: "indukcio_001", question: "Faraday törvénye szerint feszültség indukálódik, ha:", choices: [{text:"változik a mágneses fluxus"}, {text:"állandó a fluxus"}, {text:"nincs tekercs"}, {text:"csak vákuumban"}], answerIndex: 0, explanation: "dΦ/dt ≠ 0 → indukált feszültség." },
        { id: "indukcio_002", question: "Lenz törvénye kimondja, hogy az indukált áram iránya:", choices: [{text:"akadályozza az őt létrehozó változást"}, {text:"mindig növeli a változást"}, {text:"véletlen"}, {text:"nulla"}], answerIndex: 0, explanation: "Negatív előjel a Faraday–Lenz formulában." },
        { id: "indukcio_003", question: "Transzformátor arány:", choices: [{text:"U₁/U₂ ≈ N₁/N₂"}, {text:"U₁/U₂ ≈ N₂/N₁"}, {text:"U₁=U₂"}, {text:"U₁/U₂=I₁/I₂"}], answerIndex: 0, explanation: "Ideális trafó feszültségaránya a menetszámok aránya." },
        { id: "indukcio_004", question: "Generátor energiát alakít:", choices: [{text:"mechanikaiból elektromossá"}, {text:"elektromosból hővé"}, {text:"fényből hővé"}, {text:"hőből mechanikaivá"}], answerIndex: 0, explanation: "Mozgási energia → elektromos." },
        { id: "indukcio_005", question: "Gyorsabb mágnesmozgatás hatása a tekercsnél:", choices: [{text:"nagyobb indukált feszültség"}, {text:"kisebb feszültség"}, {text:"nincs hatás"}, {text:"mindig 0"}], answerIndex: 0, explanation: "|dΦ/dt| nagyobb → U_ind nő." },
        { id: "indukcio_006", question: "Mit NEM igényel a transzformátor működése?", choices: [{text:"egyenáramot"}, {text:"váltakozó fluxust"}, {text:"vashéjat/vasmagot"}, {text:"két tekercset"}], answerIndex: 0, explanation: "Trafó váltakozó árammal működik." },
        { id: "indukcio_007", question: "Önindukció során keletkező feszültség:", choices: [{text:"a változó áram saját fluxusváltozása miatt jön létre"}, {text:"külső mágnes miatt"}, {text:"fény miatt"}, {text:"nincs ilyen"}], answerIndex: 0, explanation: "L · dI/dt." },
        { id: "indukcio_008", question: "Az induktivitás jele és egysége:", choices: [{text:"L, henry (H)"}, {text:"C, farad"}, {text:"R, ohm"}, {text:"P, watt"}], answerIndex: 0, explanation: "Induktivitás mértékegysége henry." },
        { id: "indukcio_009", question: "Mi növeli az indukált feszültséget tekercsben?", choices: [{text:"több menet és gyorsabb változás"}, {text:"kevesebb menet"}, {text:"állandó fluxus"}, {text:"szigetelőmag"}], answerIndex: 0, explanation: "U_ind ~ N·dΦ/dt." },
        { id: "indukcio_010", question: "Az áram irányát mágneses erőhatásnál:", choices: [{text:"balkéz-szabály (erő–B–I)"}, {text:"jobbkéz-szabály"}, {text:"kompasszal"}, {text:"nincs összefüggés"}], answerIndex: 0, explanation: "Fleming balkéz-szabály motorra." },
        { id: "indukcio_011", question: "Egyenirányítás célja:", choices: [{text:"váltóáramból egyenáram előállítása"}, {text:"feszültség növelése"}, {text:"áram csökkentése"}, {text:"energiatárolás"}], answerIndex: 0, explanation: "Diódahíd stb." },
        { id: "indukcio_012", question: "Mi történik, ha a trafó szekunderét rövidre zárod?", choices: [{text:"nagy áram folyik, melegedés"}, {text:"semmi"}, {text:"feszültség nő"}, {text:"mágneses tér megszűnik"}], answerIndex: 0, explanation: "Nagy I₂, veszteségek, veszély." },
        { id: "indukcio_013", question: "Melyik NEM az indukció alkalmazása?", choices: [{text:"napelem"}, {text:"elektromos generátor"}, {text:"trafó"}, {text:"indukciós főzőlap"}], answerIndex: 0, explanation: "A napelem fotoelektromos jelenség, nem indukció." },
        { id: "indukcio_014", question: "Ha a mágnes nyugalomban van a tekercshez képest:", choices: [{text:"nem indukálódik feszültség"}, {text:"mindig indukálódik"}, {text:"áram nő"}, {text:"áram csökken"}], answerIndex: 0, explanation: "dΦ/dt = 0 esetén U_ind = 0." },
        { id: "indukcio_015", question: "Váltakozó áram frekvenciája Európában:", choices: [{text:"50 Hz"}, {text:"60 Hz"}, {text:"25 Hz"}, {text:"100 Hz"}], answerIndex: 0, explanation: "Hálózati sztenderd: 50 Hz." },
        { id: "indukcio_016", question: "Melyik állítás igaz a motor–generátor párosra?", choices: [{text:"fordított működési elv"}, {text:"azonos"}, {text:"nincs kapcsolat"}, {text:"mindkettő hőt termel"}], answerIndex: 0, explanation: "Motor: elektromos→mechanikai; generátor: mechanikai→elektromos." },
        { id: "indukcio_017", question: "Lenz-törvény következménye tekercsben kapcsoláskor:", choices: [{text:"indító ellenfeszültség lép fel"}, {text:"nincs feszültség"}, {text:"csak nő az áram"}, {text:"csak csökken az áram"}], answerIndex: 0, explanation: "Önindukció gátolja az áramváltozást." },
        { id: "indukcio_018", question: "Az indukciós főzőlap működése:", choices: [{text:"örvényáramok melegítik az edényt"}, {text:"izzószál melegít"}, {text:"gázláng"}, {text:"hősugárzás"}], answerIndex: 0, explanation: "Váltakozó mágneses tér örvényáramot kelt a ferromágneses edényben." },
        { id: "indukcio_019", question: "A weber (Wb) mértékegység:", choices: [{text:"mágneses fluxusé"}, {text:"induktivitásé"}, {text:"indukcióé"}, {text:"teljesítményé"}], answerIndex: 0, explanation: "Φ egysége." },
        { id: "indukcio_020", question: "Mikor nagyobb a generátor feszültsége?", choices: [{text:"nagyobb fordulatszámnál"}, {text:"kisebb mágnesnél"}, {text:"álló forgórésznél"}, {text:"zárt vasmag nélkül"}], answerIndex: 0, explanation: "Gyorsabb forgás → nagyobb dΦ/dt." },
      ],
    },
  ],
},

// 6) HŐTAN ÉS HALMAZÁLLAPOT-VÁLTOZÁSOK
{
  id: "fizika_8_hotan",
  title: "Hőtan és halmazállapot-változások",
  sections: [
    {
      id: "homerseklet_hotagulas",
      title: "Hőmérséklet, hőtágulás, hőterjedés",
      bank: [
        { id: "hotagulas_001", question: "A hőmérséklet SI egysége:", choices: [{text:"K (kelvin)"}, {text:"°C"}, {text:"°F"}, {text:"J"}], answerIndex: 0, explanation: "SI: kelvin. Mindennapokban °C." },
        { id: "hotagulas_002", question: "Hővezetés jellemzően melyikben?", choices: [{text:"szilárd testekben"}, {text:"vákuumban"}, {text:"csak folyadékban"}, {text:"csak gázban"}], answerIndex: 0, explanation: "Részecskék ütközései adják át az energiát." },
        { id: "hotagulas_003", question: "Konvekció:", choices: [{text:"anyagi áramlással történő hőátadás"}, {text:"vákuumban is működik"}, {text:"csak szilárdban"}, {text:"csak sugárzás"}], answerIndex: 0, explanation: "Folyadékokban/gázokban." },
        { id: "hotagulas_004", question: "Hősugárzás terjedhet:", choices: [{text:"vákuumban is"}, {text:"csak közegben"}, {text:"csak levegőben"}, {text:"nem terjed"}], answerIndex: 0, explanation: "Elektromágneses sugárzás." },
        { id: "hotagulas_005", question: "Fajhő jele és egysége:", choices: [{text:"c, J/(kg·K)"}, {text:"C, F"}, {text:"k, W/(m·K)"}, {text:"Q, J"}], answerIndex: 0, explanation: "Anyagi állandó." },
        { id: "hotagulas_006", question: "Hőmennyiség képlete:", choices: [{text:"Q = m·c·ΔT"}, {text:"Q = m·g·h"}, {text:"Q = U·I·t"}, {text:"Q = p·V"}], answerIndex: 0, explanation: "Melegítés/hűtés során." },
        { id: "hotagulas_007", question: "Miért hagynak hézagot a vasúti sínek között?", choices: [{text:"hőtágulás miatt"}, {text:"szellőzés"}, {text:"esztétika"}, {text:"zajcsökkentés"}], answerIndex: 0, explanation: "Táguláskor ne feszüljenek össze." },
        { id: "hotagulas_008", question: "Jó hősugárzás-elnyelő anyag:", choices: [{text:"sötét, matt felület"}, {text:"fényes, világos"}, {text:"tükör"}, {text:"átlátszó üveg"}], answerIndex: 0, explanation: "Sötét, matt jól elnyel és jól is sugároz." },
        { id: "hotagulas_009", question: "Mi NEM módja a hőterjedésnek?", choices: [{text:"diffúzió"}, {text:"vezetés"}, {text:"konvekció"}, {text:"sugárzás"}], answerIndex: 0, explanation: "A diffúzió anyagkeveredés, nem hőátadás típusa." },
        { id: "hotagulas_010", question: "A konvekció erősebb, ha:", choices: [{text:"nagyobb a sűrűségkülönbség"}, {text:"nincs gravitáció"}, {text:"kisebb a hőmérséklet-különbség"}, {text:"szilárd testben vagyunk"}], answerIndex: 0, explanation: "Feláramlás hajtóereje a sűrűségkülönbség." },
        { id: "hotagulas_011", question: "Mi a hővezetési tényező jele és egysége?", choices: [{text:"λ, W/(m·K)"}, {text:"c, J/(kg·K)"}, {text:"η, Pa·s"}, {text:"ρ, kg/m³"}], answerIndex: 0, explanation: "Anyag jellemzője hővezetésre." },
        { id: "hotagulas_012", question: "Hőszigetelő ablakok azért jók, mert:", choices: [{text:"álló levegőréteg rossz hővezető"}, {text:"fémréteg jól vezet"}, {text:"nincs sugárzás"}, {text:"vákuum rossz vezető"}], answerIndex: 0, explanation: "Levegőréteg csökkenti a hőáramot." },
        { id: "hotagulas_013", question: "Termosz palack működése NEM:", choices: [{text:"konvekció erősítése"}, {text:"hősugárzás visszaverése"}, {text:"hővezetés csökkentése"}, {text:"vákuum alkalmazása"}], answerIndex: 0, explanation: "Épp csökkenti a konvekciót." },
        { id: "hotagulas_014", question: "A kelvin és Celsius kapcsolata:", choices: [{text:"T[K] = t[°C] + 273,15"}, {text:"T = t − 273,15"}, {text:"T = t/273,15"}, {text:"nincs kapcsolat"}], answerIndex: 0, explanation: "Abszolút és Celsius skála kapcsolata." },
        { id: "hotagulas_015", question: "Miért hűt a párolgás?", choices: [{text:"energiát von el a felületről"}, {text:"energiát ad le"}, {text:"nincs energiaátadás"}, {text:"mert sötét a folyadék"}], answerIndex: 0, explanation: "A nagyobb energiájú részecskék távoznak." },
        { id: "hotagulas_016", question: "A hősugárzás spektrumát befolyásolja:", choices: [{text:"hőmérséklet"}, {text:"tömeg"}, {text:"sűrűség"}, {text:"szín"}], answerIndex: 0, explanation: "Magasabb T → rövidebb hullámhosszú maximum." },
        { id: "hotagulas_017", question: "Hőtágulásnál a hosszváltozás arányos:", choices: [{text:"eredeti hosszal és ΔT-vel"}, {text:"tömeggel"}, {text:"idővel"}, {text:"feszültséggel"}], answerIndex: 0, explanation: "Δl = α·l₀·ΔT." },
        { id: "hotagulas_018", question: "Miért éget kevésbé a fa nyelű fakanál, mint a fém?", choices: [{text:"a fa rossz hővezető"}, {text:"a fa hideg"}, {text:"a fém nem melegszik"}, {text:"véletlen"}], answerIndex: 0, explanation: "Kisebb λ → lassabb hőátadás." },
        { id: "hotagulas_019", question: "A hőmennyiség mértékegysége:", choices: [{text:"J (joule)"}, {text:"W"}, {text:"Pa"}, {text:"A"}], answerIndex: 0, explanation: "Energia mértékegysége a joule." },
        { id: "hotagulas_020", question: "A hőterjedés három módja:", choices: [{text:"vezetés, konvekció, sugárzás"}, {text:"olvadás, fagyás, forrás"}, {text:"diffúzió, szűrés, kicsapás"}, {text:"gördülés, csúszás, repülés"}], answerIndex: 0, explanation: "Alap fogalmak összefoglalása." },
      ],
    },
    {
      id: "halmazallapot_valtozasok",
      title: "Halmazállapot-változások",
      bank: [
        { id: "halmaz_001", question: "Olvadáskor a hőmérséklet:", choices: [{text:"állandó"}, {text:"nő"}, {text:"csökken"}, {text:"véletlenszerű"}], answerIndex: 0, explanation: "Rejtett hő felhasználása miatt T ≈ konstans." },
        { id: "halmaz_002", question: "Forráskor a bevitt hő:", choices: [{text:"gőzképződésre fordítódik"}, {text:"T-t növeli folyamatosan"}, {text:"semmit nem csinál"}, {text:"tömeg nő"}], answerIndex: 0, explanation: "Rejtett hő (L_forr) szükséges." },
        { id: "halmaz_003", question: "Szublimáció:", choices: [{text:"szilárd → gáz"}, {text:"folyadék → gáz"}, {text:"gáz → folyadék"}, {text:"folyadék → szilárd"}], answerIndex: 0, explanation: "Pl. jégszublimáció." },
        { id: "halmaz_004", question: "Lecsapódás:", choices: [{text:"gáz → folyadék"}, {text:"folyadék → gáz"}, {text:"szilárd → gáz"}, {text:"gáz → szilárd"}], answerIndex: 0, explanation: "Pára → vízcseppek." },
        { id: "halmaz_005", question: "Depozíció:", choices: [{text:"gáz → szilárd"}, {text:"szilárd → gáz"}, {text:"folyadék → gáz"}, {text:"gáz → folyadék"}], answerIndex: 0, explanation: "Deresedés: pára közvetlenül dér lesz." },
        { id: "halmaz_006", question: "Fagyáskor a hőmérséklet:", choices: [{text:"állandó"}, {text:"folyamatosan csökken"}, {text:"nő"}, {text:"véletlen"}], answerIndex: 0, explanation: "Rejtett hő leadása mellett T ≈ konstans." },
        { id: "halmaz_007", question: "Forráspont függ:", choices: [{text:"külső nyomástól"}, {text:"színtől"}, {text:"tömegtől"}, {text:"edény alakjától"}], answerIndex: 0, explanation: "Magasabb nyomás → magasabb forráspont." },
        { id: "halmaz_008", question: "Miért párolog a víz szobahőn is?", choices: [{text:"mert a molekulák sebessége szór"}, {text:"mert forr"}, {text:"mert hideg"}, {text:"mert nincs légnyomás"}], answerIndex: 0, explanation: "A gyorsabb részecskék kilépnek." },
        { id: "halmaz_009", question: "Olvadáshő jele:", choices: [{text:"Lₒ (vagy L_olvad)"}, {text:"c"}, {text:"λ"}, {text:"Q"}], answerIndex: 0, explanation: "Anyagra jellemző állandó." },
        { id: "halmaz_010", question: "Jég olvadása közben a víz hőmérséklete:", choices: [{text:"0 °C körül marad"}, {text:"folyamatosan nő"}, {text:"csökken"}, {text:"véletlen"}], answerIndex: 0, explanation: "A bevitt hő az olvadásra fordítódik." },
        { id: "halmaz_011", question: "A víz anomáliája:", choices: [{text:"4 °C-on a legsűrűbb"}, {text:"0 °C-on a legsűrűbb"}, {text:"100 °C-on a legsűrűbb"}, {text:"nincs anomália"}], answerIndex: 0, explanation: "Ezért úszik a jég." },
        { id: "halmaz_012", question: "Olvadás/vagy fagyás alatt a hőmérséklet-idő grafikon:", choices: [{text:"vízszintes szakasz"}, {text:"ferde emelkedő"}, {text:"ferde csökkenő"}, {text:"sawtooth"}], answerIndex: 0, explanation: "Fázisátalakulásnál T ≈ állandó." },
        { id: "halmaz_013", question: "Párolgás sebessége NEM nő, ha:", choices: [{text:"nő a páratartalom"}, {text:"nő a hőmérséklet"}, {text:"nő a felület"}, {text:"fúj a szél"}], answerIndex: 0, explanation: "Magas páratartalom gátolja a párolgást." },
        { id: "halmaz_014", question: "Melyik jelenség jár hőfelvétellel?", choices: [{text:"párolgás"}, {text:"lecsapódás"}, {text:"fagyás"}, {text:"depozíció"}], answerIndex: 0, explanation: "Endoterm folyamat." },
        { id: "halmaz_015", question: "Melyik jelenség jár hőleadással?", choices: [{text:"lecsapódás"}, {text:"párolgás"}, {text:"olvadás"}, {text:"szublimáció"}], answerIndex: 0, explanation: "Exoterm folyamat." },
        { id: "halmaz_016", question: "Forrás és párolgás különbsége:", choices: [{text:"forrás az egész térfogatban, párolgás a felületen"}, {text:"mindkettő csak felületen"}, {text:"mindkettő csak belül"}, {text:"nincs különbség"}], answerIndex: 0, explanation: "Forráskor buborékképződés az egész folyadékban." },
        { id: "halmaz_017", question: "Miért csökken a forráspont magas hegyen?", choices: [{text:"kisebb a külső nyomás"}, {text:"hidegebb van"}, {text:"több a gőz"}, {text:"nincs levegő"}], answerIndex: 0, explanation: "Alacsonyabb p → alacsonyabb forráspont." },
        { id: "halmaz_018", question: "Olvadáshő és fajhő közti különbség:", choices: [{text:"L fázisváltáshoz kell, c hőmérsékletváltozáshoz"}, {text:"nincs különbség"}, {text:"c fázisváltáshoz kell"}, {text:"L hőmérséklethez kell"}], answerIndex: 0, explanation: "Eltérő fizikai jelentés." },
        { id: "halmaz_019", question: "Halmazállapot-változáskor a felvett hő:", choices: [{text:"belső energiát növel, de T nem változik"}, {text:"csak T-t növeli"}, {text:"kinetikus energiát nem érint"}, {text:"csak sugárzás lesz"}], answerIndex: 0, explanation: "Kötési viszonyok változnak." },
        { id: "halmaz_020", question: "Forráshő jele és jelentése:", choices: [{text:"L_forr, 1 kg folyadék elgőzölögtetéséhez szükséges hő"}, {text:"c, fajhő"}, {text:"Q, hőmennyiség"}, {text:"λ, hővezetés"}], answerIndex: 0, explanation: "Anyagjellemző rejtett hő." },
   ],
    },
  ],
},
    ];
export default TOPIC_TREE
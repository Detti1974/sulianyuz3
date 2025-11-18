// lib/nyelvtan/lesson-map.ts
// A lessons ⇄ bank összerendelése a bank.ts TOPIC_TREE-je alapján.
// Úgy készült, hogy a korábbi (általam küldött) lessons ID-k is működjenek,
// és a mostani bank-os ID-k is – aliasokkal!

export type LessonBankMap = { topicId: string; sections?: string[] };

// Hasznos helper a „dupla” (alias) leképezéshez
function m(topicId: string, sections: string[]): LessonBankMap {
  return { topicId, sections };
}

/**
 * lessonToBank:
 * - bal oldalt: a LEARN (tananyag) / Kvíz felől érkező lessonId (főtémakör ID-je)
 * - jobb oldalt: a bank TOPIC_TREE-ben használt topicId + a hozzá tartozó szekció-ID-k
 *
 * FIGYELEM:
 * - Beletettem alias kulcsokat is, hogy mind a „régi” lessons ID-k, mind az új bank ID-k működjenek.
 * - Két kétes hely: „digitlis” (elütés) és az ékezetes „szovegkohézió”. Mindkettőre hagytam biztonsági mappinget.
 */
export const lessonToBank: Record<string, LessonBankMap> = {
  /* ─────────────────────────────────────────
     SZÓFAJOK
     bank topicId: nyelvtan_8_szo_fajok
     lessons topicId (régi): nyelvtan_8_szofajok
     ───────────────────────────────────────── */
  
  nyelvtan_8_szofajok: m("nyelvtan_8_szo_fajok", [
    "section_szofajok_alap",
    "section_szofajok_nevmas_szamnev",
    "section_szofajok_viszonyszok",
  ]),

  /* ─────────────────────────────────────────
     MONDATELEMZÉS
     (bank ID megegyezik a lessons ID-vel)
     ───────────────────────────────────────── */
  nyelvtan_8_mondatelemzes: m("nyelvtan_8_mondatelemzes", [
    "section_mondatelemzes_alany_allitmany",
    "section_mondatelemzes_targy_hatarozok",
    "section_mondatelemzes_jelzok",
    "section_mondatelemzes_osszmondatok",
  ]),

  /* ─────────────────────────────────────────
     HELYESÍRÁS
     ───────────────────────────────────────── */
  nyelvtan_8_helyesiras: m("nyelvtan_8_helyesiras", [
    "section_helyesiras_kis_nagybetu",
    "section_helyesiras_egybe_kulon",
    "section_helyesiras_ly_j",
    "section_helyesiras_irasjelek",
  ]),

  /* ─────────────────────────────────────────
     SZÖVEGALKOTÁS (külön főtémaként szerepel a bankban)
     ───────────────────────────────────────── */
  nyelvtan_8_szovegalkotas: m("nyelvtan_8_szovegalkotas", [
    "section_szoveg_fogalma",
    "section_szoveg_szerkezete",
    "section_szoveg_fajtai",
    "section_fogalmazas_lepesei",
  ]),

  /* ─────────────────────────────────────────
     KOMMUNIKÁCIÓ ÉS RETORIKA
     ───────────────────────────────────────── */
  nyelvtan_8_kommunikacio_retorika: m("nyelvtan_8_kommunikacio_retorika", [
    "section_kommunikacio_fogalma",
    "section_kommunikacio_formai",
    "section_retorika_alapjai",
    "section_nyilvanos_beszed",
  ]),

  /* ─────────────────────────────────────────
     STÍLUS ÉS STILISZTIKA
     ───────────────────────────────────────── */
  nyelvtan_8_stilus: m("nyelvtan_8_stilus", [
    "section_stilus_fogalma",
    "section_stilusretegek",
    "section_szokep_has_metafora",
    "section_alakzatok",
  ]),

  /* ─────────────────────────────────────────
     HELYESÍRÁS HALADÓ (külön főtémaként)
     ───────────────────────────────────────── */
  nyelvtan_8_helyesiras_halado: m("nyelvtan_8_helyesiras_halado", [
    "section_helyesiras_alapelvei",
    "section_nagybetu_kozpont",
    "section_egybe_kuloniras",
    "section_helyesirasi_hibak",
  ]),

  /* ─────────────────────────────────────────
     MONDATFAJTÁK
     ───────────────────────────────────────── */
  nyelvtan_8_mondatfajtak: m("nyelvtan_8_mondatfajtak", [
    "section_mondatfajtak_szandek",
    "section_mondatfajtak_szerkezet",
    "section_mondatszintu_irasjelek",
    "section_egyeztetes_szorend_ritmus",
  ]),

  /* ─────────────────────────────────────────
     SZÖVEGKOHÉZIÓ ÉS KAPCSOLÓELEMEK
     (ékezetes szekció-azonosító miatti dupla mapping)
     ───────────────────────────────────────── */
  nyelvtan_8_szovegkohezio: m("nyelvtan_8_szovegkohezio", [
    // Ha a bankban ékezetes változat szerepel:
    "section_szovegkohézió_altalanos",
    // ASCII-változat (ha így hoztad létre):
    "section_szovegkohezio_altalanos",
    "section_szovegkohezio_grammatikai",
    "section_szovegkohezio_jelentesbeli",
    "section_szovegkohezio_logikai",
  ]),

  /* ─────────────────────────────────────────
     JELENTÉSTAN ÉS SZÓKINCSFEJLESZTÉS
     ───────────────────────────────────────── */
  nyelvtan_8_jelentestan: m("nyelvtan_8_jelentestan", [
    "section_jelentestan_szavak",
    "section_jelentestan_szinonima_antonima",
    "section_jelentestan_homonim_hangutanzo",
    "section_jelentestan_szolasok_kozmondasok",
  ]),

  /* ─────────────────────────────────────────
     NYELVI VÁLTOZATOK ÉS NYELVHASZNÁLAT
     (szleng szekciónál elütés: „digitlis” ⇒ hagyok alias-t)
     ───────────────────────────────────────── */
  nyelvtan_8_nyelvvaltozatok: m("nyelvtan_8_nyelvvaltozatok", [
    "section_nyelvvaltozat_koznyelv_nyelvjaras",
    "section_nyelvvaltozat_szleng_digitlis", // elütéses változat
    "section_nyelvvaltozat_szleng_digitalis", // javított változat (ha átnevezed)
    "section_nyelvvaltozat_regiszterek",
    "section_nyelvvaltozat_norma_udvariassag",
  ]),

  /* ─────────────────────────────────────────
     ZÁRÓ ÖSSZEFOGLALÁS
     ───────────────────────────────────────── */
  nyelvtan_8_zaro: m("nyelvtan_8_zaro", [
    "section_zaro_szofajok_mondatreszek",
    "section_zaro_helyesiras_jelentestan",
    "section_zaro_kommunikacio_stilus",
  ]),
};

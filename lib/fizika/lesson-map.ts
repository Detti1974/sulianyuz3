// 8. osztály – Fizika: Témák és altémák a Tananyag képernyőhöz

export type LessonSubtopic = { id: string; title: string; color?: string };
export type LessonTopic = { id: string; title: string; color?: string; sections: LessonSubtopic[] };

const LESSON_MAP: LessonTopic[] = [
  {
    id: "fizika_8_rezgo_hullam",
    title: "Rezgések és hullámok",
    color: "#2563eb",
    sections: [
      { id: "rezgomozgas_alapok", title: "Rezgőmozgás alapok", color: "#3b82f6" },
      { id: "hullamok_alapok", title: "Hullámok jellemzői", color: "#60a5fa" },
      { id: "hang_alapok", title: "Hang – hangtan", color: "#93c5fd" },
    ],
  },
  {
    id: "fizika_8_fenytan",
    title: "Fénytan (geometriai optika)",
    color: "#f59e0b",
    sections: [
      { id: "feny_visszaverodes_tores", title: "Visszaverődés és törés", color: "#fbbf24" },
      { id: "lencsek_kepkepzes", title: "Lencsék, képképzés", color: "#f97316" },
      { id: "fenyszoras_szine", title: "Fény színe, szórás", color: "#f59e0b" },
    ],
  },
  {
  id: "fizika_8_nyomas",
  title: "Nyomás és felhajtóerő",
  color: "#93c5fd",
  sections: [
    {
      id: "nyomas_alapok",
      title: "Nyomás – alapfogalmak",
      color: "#60a5fa",
    },
    {
      id: "folyadek_nyomas",
      title: "Folyadékok és gázok nyomása",
      color: "#7dd3fc",
    },
    {
      id: "felhajtoero",
      title: "Felhajtóerő – Arkhimédész törvénye",
      color: "#a5b4fc",
    },
  ],
},

  {
    id: "fizika_8_gazok",
    title: "Gázok törvényei",
    color: "#06b6d4",
    sections: [
      { id: "boyle_mariotte", title: "Boyle–Mariotte (p·V = állandó)", color: "#67e8f9" },
      { id: "charles_torveny", title: "Charles-törvény (V ~ T)", color: "#22d3ee" },
      { id: "egyesitett_gaztorveny", title: "Egyesített gáztörvény", color: "#0891b2" },
    ],
  },
  {
    id: "fizika_8_elektrosztatika",
    title: "Elektrosztatika",
    color: "#a855f7",
    sections: [
      { id: "elektrosztatika_alapok", title: "Töltés, Coulomb-törvény", color: "#c084fc" },
      { id: "elektromos_mezo_potencial", title: "Elektromos mező, potenciál", color: "#d8b4fe" },
      { id: "kapacitas_kondenzator", title: "Kapacitás és kondenzátor", color: "#a78bfa" },
    ],
  },
  {
    id: "fizika_8_egyenaram",
    title: "Egyenáramú áramkörök",
    color: "#ef4444",
    sections: [
      { id: "ohm_torvenye", title: "Ohm törvénye", color: "#fca5a5" },
      { id: "soros_parhuzamos", title: "Soros–párhuzamos kapcsolás", color: "#f87171" },
      { id: "teljesitmeny_energia", title: "Elektromos teljesítmény, energia", color: "#dc2626" },
    ],
  },
  {
    id: "fizika_8_magnesesseg",
    title: "Mágnesesség és elektromágnesesség",
    color: "#10b981",
    sections: [
      { id: "magnesesseg_alapok", title: "Mágneses jelenségek", color: "#34d399" },
      { id: "elektromagnes", title: "Elektromágnes, áram mágneses hatása", color: "#6ee7b7" },
      { id: "aram_magneses_hatas", title: "Erő hat az áramra", color: "#10b981" },
    ],
  },
  {
    id: "fizika_8_indukcio",
    title: "Elektromágneses indukció",
    color: "#fb7185",
    sections: [
      { id: "indukcio_alapok", title: "Indukció jelensége", color: "#fda4af" },
      { id: "generatorok", title: "Generátorok, váltakozó feszültség", color: "#fb7185" },
      { id: "transzformator", title: "Transzformátor, energiaátvitel", color: "#f43f5e" },
    ],
  },
  {
    id: "fizika_8_biztonsag",
    title: "Háztartási villamosság, biztonság",
    color: "#64748b",
    sections: [
      { id: "haztartasi_villamossag", title: "Hálózati áram, biztosítékok", color: "#94a3b8" },
      { id: "erintesevedelem", title: "Érintésvédelem, FI-relé", color: "#cbd5e1" },
      { id: "energia_hatekonysag", title: "Energiahatékonyság", color: "#64748b" },
    ],
  },
  {
    id: "fizika_8_meres_modszer",
    title: "Mérés, hibabecslés",
    color: "#0ea5e9",
    sections: [
      { id: "meresi_alapismeretek", title: "Mértékegységek, pontosság", color: "#38bdf8" },
    ],
  },
];

export default LESSON_MAP;

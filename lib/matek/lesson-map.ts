// lib/matek/lesson-map.ts
export type LessonBankMap = { topicId: string; sections?: string[] };

/** Fejezet (lessons.tsx kulcs) → Bank főtéma + alfejezetek (bank.ts section ID-k) */
export const lessonToBank: Record<string, LessonBankMap> = {
  // 1) Algebrai kifejezések, azonosságok
  math_algebra: {
    topicId: "algebra",
    sections: ["kifejezesek", "azonossagok"], // (ha kell még: "egyenletek")
  },

  // 2) Lineáris egyenletek
  math_linear: {
    topicId: "equations",
    sections: ["eq_lin1"],
  },

  // 3) Százalékszámítás
  math_ratio_percent: {
    topicId: "percent",
    sections: ["perc_basic", "perc_calc", "perc_change"],
  },

  // 4) Hatványozás és gyökvonás (+ normálalak)
  math_powers_roots: {
    topicId: "powers_roots",
    sections: ["pow_basic", "root_basic", "sci_not"],
  },

  // 5) Pitagorasz
  math_pythagoras: {
    topicId: "geometry",
    sections: ["pythag"],
  },

  // 6) Kerület–terület (jelen bankban: hasonlóság & skála)
  math_geometry_area: {
    topicId: "geometry",
    sections: ["similarity"],
  },

  // 7) Testek – felszín és térfogat
  math_solids: {
    topicId: "geometry",
    sections: ["solids"],
  },

  // 8) Statisztika és valószínűség
  math_stats_prob: {
    topicId: "statistics_probability",
    sections: ["stat_desc", "stat_charts", "prob_basic"],
  },
};

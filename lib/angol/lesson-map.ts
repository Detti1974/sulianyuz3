// lib/angol/lesson-map.ts
// A lesson-id → bank-topic + engedélyezett alfejezetek leképezése

export type LessonBankMap = { topicId: string; sections?: string[] };

// FIGYELEM: az ID-k pontosan egyeznek a bank/lessons fájlokkal
export const lessonToBank: Record<string, LessonBankMap> = {
  // Grammar
  eng_grammar: {
    topicId: "eng_grammar",
    sections: ["present_simple", "past_simple", "present_perfect"],
  },

  // Vocabulary
  eng_vocabulary: {
    topicId: "eng_vocabulary",
    sections: ["everyday", "school", "travel"],
  },

  // Irregular verbs
  eng_irregulars: {
    topicId: "eng_irregulars",
    sections: ["irreg_all", "irreg_usage"],
  },

  // Reading (szövegértés)
  eng_reading: {
    topicId: "eng_reading",
    sections: ["short_texts"],
  },
};

export default lessonToBank;

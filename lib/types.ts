// lib/types.ts
export type Question = {
  id: string;

  // kérdés – régi és új elnevezés is mehet
  q?: string;
  question?: string;

  // válaszlehetőségek – régi (options: string[]) vagy új (choices: {text}[])
  options?: string[];
  choices?: { text: string }[];

  // helyes válasz indexe – régi (correctIndex) és új (answerIndex)
  correctIndex?: number;
  answerIndex?: number;

  // magyarázat – régi (exp) és új (explanation)
  exp?: string;
  explanation?: string;
};



export type AnswerRecord = {
  id: number;
  q: string;
  options: string[];
  chosen: number;
  correct: number;
  explanation: string;
  exp: string; 
};

// lib/types.ts
// ===============================================
// Közös típusdefiníciók az egész tansegítő projekthez
// ===============================================

// ─────────────────────────────
// 1️⃣ Kérdés típus (bank.ts fájlokhoz)
// ─────────────────────────────
export type QuestionChoice = {
  text: string;
};



// ─────────────────────────────
// 2️⃣ Tananyag típus (lessons.ts fájlokhoz)
// ─────────────────────────────
export type LessonSection = {
  id: string;       // altéma azonosító (pl. "idegrendszer_felepitese")
  title: string;    // altéma címe
  content: string;  // markdown / rich text formátumú tartalom
};

// ─────────────────────────────
// 3️⃣ Tananyag térkép (lesson-map.ts)
// ─────────────────────────────
export type LessonSubtopic = {
  id: string;
  title: string;
  color?: string;
};

export type LessonTopic = {
  id: string;
  title: string;
  color?: string;
  sections: LessonSubtopic[];
};

// ─────────────────────────────
// 4️⃣ Főtémák és altémák (topicMenu.ts)
// ─────────────────────────────
export type Section = {
  id: string;
  title: string;
  bank?: Question[];
};

export type Topic = {
  id: string;
  title: string;
  sections: Section[];
};

// ─────────────────────────────
// 5️⃣ Jegyzet (learn.tsx komponenshez)
// ─────────────────────────────
export type Note = {
  id: string;
  text: string;
  date: string;
};

// ─────────────────────────────
// 6️⃣ Kvíz eredmény (quiz-result.tsx)
// ─────────────────────────────
export type QuizResult = {
  correct: number;
  total: number;
  topicId: string;
  subtopicId?: string;
  timestamp: number;
};

// ─────────────────────────────
// 7️⃣ További segédtípusok (ha kell majd más modulhoz)
// ─────────────────────────────
export type RootStackParamList = {
  Home: undefined;
  Quiz: { topicId: string; subtopicId?: string };
  Learn: { topicId: string; subtopicId?: string };
  "Quiz-Result": { score: number; total: number };
};

// ===============================================
// VÉGE — egységes típusok a Tansegítő projekthez
// ===============================================

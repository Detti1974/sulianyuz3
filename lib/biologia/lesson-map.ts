// lib/biologia/lesson-map.ts
// A bank.ts az igazság forrása: innen építjük a tananyag térképet.

import { TOPIC_TREE as BIO_BANK_TOPICS } from "./bank";

export type LessonSubtopic = { id: string; title: string; color?: string };
export type LessonTopic    = { id: string; title: string; color?: string; sections: LessonSubtopic[] };

/**
 * A lesson oldalakhoz szükséges, bankkal 100%-ban egyező
 * témalista (főtémák + altémák). Nem tartalmaz kérdésbankot,
 * csak id + title (+ opcionális color, ha a bankban lenne).
 */
export const LESSON_TOPICS: LessonTopic[] = BIO_BANK_TOPICS.map((t: any) => ({
  id: t.id,
  title: t.title,
  color: t.color,
  sections: (t.sections ?? []).map((s: any) => ({
    id: s.id,
    title: s.title,
    color: s.color,
  })),
}));

/** Gyors visszakereső: altémaID -> főtémaID */
export const SECTION_TO_TOPIC: Record<string, string> =
  Object.fromEntries(LESSON_TOPICS.flatMap(t => t.sections.map((s: any) => [s.id, t.id])));
export const LESSON_MAP_BIO8 = LESSON_TOPICS
export default LESSON_TOPICS;


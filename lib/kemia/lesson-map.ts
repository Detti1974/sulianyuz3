// lib/kemia/lesson-map.ts
// ⚠️ Nincs többé kézi duplikáció: ez a fájl automatikusan a lessons.ts-ből építi fel a térképet.

import LESSONS from "./lessons";

/* ===== Típusok (a topicMenu / learn képernyők ezeket használják) ===== */
export type LessonSubtopic = { id: string; title: string; color?: string };
export type LessonTopic = { id: string; title: string; sections: LessonSubtopic[]; color?: string };
export type LessonMapTopic = Omit<LessonTopic, "id">;

/* ===== Segédek ===== */

// snake_case / kebab-case / ID → emberi cím (csak ha a lessons-ben nincs title)
function prettifyId(id: string): string {
  const clean = String(id || "")
    .replace(/^kemia(_8)?_/, "")       // "kemia_8_" előtag le
    .replace(/[^a-zA-Z0-9]+/g, " ")   // nem alfanumerikus -> szóköz
    .trim();
  if (!clean) return "Ismeretlen";
  return clean
    .split(" ")
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* ===== Fő építés: Object.entries(LESSONS) → LESSON_MAP =====
   MINDEN topic kulcs bekerül; a sections tömbből az id, title, color mezők jönnek át.
   Ha valamelyik title hiányzik a lessons-ben, automatikusan generálunk belőle emberi címet. */
const LESSON_MAP: Record<string, LessonMapTopic> = Object.fromEntries(
  Object.entries(LESSONS as any).map(([topicId, topicVal]: [string, any]) => {
    const topicTitle: string = topicVal?.title || prettifyId(topicId);
    const topicColor: string | undefined = topicVal?.color;

    const sections: LessonSubtopic[] = Array.isArray(topicVal?.sections)
      ? topicVal.sections.map((s: any) => ({
          id: String(s?.id ?? ""),
          title: String(s?.title || prettifyId(String(s?.id ?? ""))),
          color: s?.color,
        }))
      : [];

    return [
      topicId,
      {
        title: topicTitle,
        color: topicColor,
        sections,
      } as LessonMapTopic,
    ];
  })
);

export default LESSON_MAP;

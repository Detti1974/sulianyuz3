// lib/QuizContext.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import type { Question } from "./types";

/* ===== Bankfák importja ===== */
import { TOPIC_TREE as ENG_TREE }  from "./angol/bank";
import { TOPIC_TREE as LIT_TREE }  from "./irodalom/bank";
import { TOPIC_TREE as MATH_TREE } from "./matek/bank";
import { TOPIC_TREE as HUN_TREE }  from "./nyelvtan/bank";
import { TOPIC_TREE as HIST_TREE } from "./tortenelem/bank";
import { TOPIC_TREE as CHEM_TREE } from "./kemia/bank";
import { TOPIC_TREE as PHYS_TREE } from "./fizika/bank";
import { TOPIC_TREE as BIO_TREE }  from "./biologia/bank";
import { TOPIC_TREE as GEO_TREE }  from "./foldrajz/bank";
/* ÚJ: Német */
import { TOPIC_TREE as GER_TREE }  from "./nemet/bank";

/* ===== Konstansok ===== */
const CUSTOM_SUB_ID = "__custom__";
const SUB_SIZE = 10;

const keyTopic    = (t: string) => `kviz:topic:${t}`;
const keySub      = (t: string, s: string) => `kviz:sub:${t}:${s}`;
const keyUserBank = (t: string) => `userbank:${t}`;

function pickRandom<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  const take = Math.min(n, a.length);
  const out: T[] = [];
  for (let i = 0; i < take; i++) {
    const j = Math.floor(Math.random() * (a.length));
    out.push(a.splice(j, 1)[0]);
  }
  return out;
}

function shuffleWithIndex(options: string[], correctIndex: number) {
  const pairs = options.map((opt, i) => ({ opt, i }));
  for (let k = pairs.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [pairs[k], pairs[j]] = [pairs[j], pairs[k]];
  }
  return {
    options: pairs.map(p => p.opt),
    correctIndex: pairs.findIndex(p => p.i === correctIndex),
  };
}

/* ===== ID halmazok ===== */
const setOf = (tree: any[]) => new Set(tree.map(t => String(t.id)));
const MATH_IDS = setOf(MATH_TREE);
const HIST_IDS = setOf(HIST_TREE);
const ENG_IDS  = setOf(ENG_TREE);
const HUN_IDS  = setOf(HUN_TREE);
const LIT_IDS  = setOf(LIT_TREE);
const CHEM_IDS = setOf(CHEM_TREE);
const PHYS_IDS = setOf(PHYS_TREE);
const BIO_IDS  = setOf(BIO_TREE);
const GEO_IDS  = setOf(GEO_TREE);
const GER_IDS  = setOf(GER_TREE);

type Source =
  | "math" | "hist" | "eng" | "hun" | "lit"
  | "chem" | "phys" | "bio" | "geo" | "ger";

/* ===== Topic normalizálás (prefixek lepucolása is) ===== */
function normalizeTopic(anyId: string): { source: Source; bankId: string } | null {
  const s = String(anyId || "").trim();

  const bySet = (set: Set<string>, source: Source) =>
    set.has(s) ? ({ source, bankId: s } as const) : null;

  const res =
    bySet(MATH_IDS, "math") || bySet(HIST_IDS, "hist") || bySet(ENG_IDS, "eng") ||
    bySet(HUN_IDS, "hun")  || bySet(LIT_IDS, "lit")  || bySet(CHEM_IDS, "chem") ||
    bySet(PHYS_IDS, "phys")|| bySet(BIO_IDS, "bio")  || bySet(GEO_IDS, "geo")   ||
    bySet(GER_IDS, "ger");

  if (res) return res;

  // pl. biologia_8_, foldrajz_8_, nemet_8_, stb.
  const noPrefix = s.replace(/^[a-záéíóöőúüű]+_?\d*_/i, "").replace(/^[a-z]+_/, "");
  if (MATH_IDS.has(noPrefix)) return { source: "math", bankId: noPrefix };
  if (HIST_IDS.has(noPrefix)) return { source: "hist", bankId: noPrefix };
  if (ENG_IDS.has(noPrefix))  return { source: "eng",  bankId: noPrefix };
  if (HUN_IDS.has(noPrefix))  return { source: "hun",  bankId: noPrefix };
  if (LIT_IDS.has(noPrefix))  return { source: "lit",  bankId: noPrefix };
  if (CHEM_IDS.has(noPrefix)) return { source: "chem", bankId: noPrefix };
  if (PHYS_IDS.has(noPrefix)) return { source: "phys", bankId: noPrefix };
  if (BIO_IDS.has(noPrefix))  return { source: "bio",  bankId: noPrefix };
  if (GEO_IDS.has(noPrefix))  return { source: "geo",  bankId: noPrefix };
  if (GER_IDS.has(noPrefix))  return { source: "ger",  bankId: noPrefix };
  return null;
}

function getTree(source: Source) {
  switch (source) {
    case "math": return MATH_TREE;
    case "hist": return HIST_TREE;
    case "eng":  return ENG_TREE;
    case "hun":  return HUN_TREE;
    case "lit":  return LIT_TREE;
    case "chem": return CHEM_TREE;
    case "phys": return PHYS_TREE;
    case "bio":  return BIO_TREE;
    case "geo":  return GEO_TREE;
    case "ger":  return GER_TREE;
  }
}

function findTopic(anyId: string) {
  const norm = normalizeTopic(anyId);
  if (!norm) return null;
  const tree = getTree(norm.source) as any[];
  return tree.find(t => String(t.id) === norm.bankId) || null;
}

/* ===== Típusok a contexthez ===== */
type Mode = "exam" | "sub";
type Item = Question & { chosen?: number | null };

type State = {
  mode: Mode | null;
  topicId: string | null;
  subId?: string | null;
  items: Item[];
  step: number;
  finished: boolean;
};

type ReviewItem = {
  id?: string;
  q: string;
  options: string[];
  correctIndex: number;
  chosen: number | null | undefined;
  exp?: string;
};

type Ctx = {
  state: State;

  startExam: (topicId: string) => void;
  startSub: (topicId: string, subId: string) => void;
  choose: (i: number) => void;
  next: () => void;
  reset: () => void;
  restart: () => void;

  getTopicCount: (topicId: string) => Promise<number>;
  resetTopicCount: (topicId: string) => Promise<void>;
  getSubCount: (topicId: string, subId: string) => Promise<number>;
  resetSub: (topicId: string, subId: string) => Promise<void>;
  addTopicPass: (topicId: string) => Promise<void>;
  addSubPass: (topicId: string, subId: string) => Promise<void>;

  getScore: () => { correct: number; total: number; percent: number };
  markAndStore: () => Promise<void>;

  getReviewItems: () => ReviewItem[];
};

const QuizContext = React.createContext<Ctx | null>(null);
export function useQuiz(): Ctx {
  const v = React.useContext(QuizContext);
  if (!v) throw new Error("QuizContext missing");
  return v;
}

/* ===== Provider ===== */
export default function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<State>({
    mode: null,
    topicId: null,
    subId: null,
    items: [],
    step: 0,
    finished: false,
  });

  const lastRunRef = React.useRef<{ mode: Mode; topicId: string; subId?: string | null } | null>(null);

  /* — Egységes: TELJES TOPIC bank (dolgozat) — */
  const getTopicBank = React.useCallback((topicId: string): Question[] => {
    const topic = findTopic(topicId);
    if (!topic) return [];
    const sections: any[] =
      topic.sections ?? topic.subtopics ?? topic.parts ?? [];
    const all: Question[] = [];
    sections.forEach((sec: any) => {
      const list: any[] = sec.bank ?? sec.questions ?? sec.qs ?? [];
      list.forEach((q: any, i: number) => {
        all.push({
          id: q.id ?? `${sec.id}-${i}`,
          q: String(q.q ?? q.question ?? ""),
          options: (q.options ?? q.choices ?? []).map((o: any) => String(o?.text ?? o ?? "")),
          correctIndex: Number(q.correctIndex ?? q.answerIndex ?? 0),
          exp: String(q.exp ?? q.explanation ?? ""),
        } as Question);
      });
    });
    return all;
  }, []);

  /* — Egységes: ADOTT ALFEJEZET bank (kvíz) — */
  const getSubBank = React.useCallback((topicId: string, subId: string): Question[] => {
    const topic = findTopic(topicId);
    const sections: any[] =
      (topic?.sections ?? topic?.subtopics ?? topic?.parts ?? []);
    const sec = sections.find((s: any) => String(s.id) === String(subId));
    if (!sec) return [];
    const list: any[] = sec.bank ?? sec.questions ?? sec.qs ?? [];
    return list.map((q: any, i: number) => ({
      id: q.id ?? `${subId}-${i}`,
      q: String(q.q ?? q.question ?? ""),
      options: (q.options ?? q.choices ?? []).map((o: any) => String(o?.text ?? o ?? "")),
      correctIndex: Number(q.correctIndex ?? q.answerIndex ?? 0),
      exp: String(q.exp ?? q.explanation ?? ""),
    })) as Question[];
  }, []);

  /* — Felhasználói saját kérdésbank — */
  const getUserBank = React.useCallback(async (topicId: string): Promise<Question[]> => {
    try {
      const raw = await AsyncStorage.getItem(keyUserBank(topicId));
      const arr: any[] = raw ? JSON.parse(raw) : [];
      return arr.map((q: any, i: number) => ({
        id: q.id ?? `custom-${i}-${String(q.q ?? q.question ?? "").slice(0, 12)}`,
        q: String(q.q ?? q.question ?? ""),
        options: (q.options ?? q.choices ?? []).map((o: any) => String(o?.text ?? o ?? "")),
        correctIndex: Number(q.correctIndex ?? q.answerIndex ?? 0),
        exp: String(q.exp ?? q.explanation ?? ""),
      })) as Question[];
    } catch {
      return [];
    }
  }, []);

  /* ——— DOLGOZAT — */
  const startExam = React.useCallback((topicId: string) => {
    const pool = getTopicBank(topicId);
    const selected = pickRandom(pool, SUB_SIZE).map(q => {
      const { options, correctIndex } = shuffleWithIndex(q.options ?? [], q.correctIndex ?? 0);
      return { ...q, options, correctIndex, chosen: null };
    });
    lastRunRef.current = { mode: "exam", topicId };
    setState({ mode: "exam", topicId, subId: null, items: selected, step: 0, finished: false });
  }, [getTopicBank]);

  /* ——— KVÍZ — */
  const startSub = React.useCallback((topicId: string, subId: string) => {
    if (subId !== CUSTOM_SUB_ID) {
      const pool = getSubBank(topicId, subId);
      const selected = pickRandom(pool, SUB_SIZE).map(q => {
        const { options, correctIndex } = shuffleWithIndex(q.options ?? [], q.correctIndex ?? 0);
        return { ...q, options, correctIndex, chosen: null };
      });
      lastRunRef.current = { mode: "sub", topicId, subId };
      setState({ mode: "sub", topicId, subId, items: selected, step: 0, finished: false });
      return;
    }
    (async () => {
      const user = await getUserBank(topicId);
      const userCount = user.length;
      let finalList: Question[] = [];
      if (userCount >= SUB_SIZE) {
        finalList = pickRandom(user, SUB_SIZE);
      } else {
        const topicAll = getTopicBank(topicId);
        const userIds = new Set(user.map(q => String((q as any).id)));
        const rest = topicAll.filter(q => !userIds.has(String((q as any).id)));
        const fill = pickRandom(rest, SUB_SIZE - userCount);
        finalList = [...user, ...fill];
      }
      const selected = finalList.map(q => {
        const { options, correctIndex } = shuffleWithIndex(q.options ?? [], q.correctIndex ?? 0);
        return { ...q, options, correctIndex, chosen: null };
      });
      lastRunRef.current = { mode: "sub", topicId, subId: CUSTOM_SUB_ID };
      setState({ mode: "sub", topicId, subId: CUSTOM_SUB_ID, items: selected, step: 0, finished: false });
    })();
  }, [getSubBank, getTopicBank, getUserBank]);

  /* — Interakciók — */
  const choose = React.useCallback((i: number) => {
    setState(prev => {
      if (prev.finished || prev.step >= prev.items.length) return prev;
      const items = [...prev.items];
      items[prev.step] = { ...items[prev.step], chosen: i };
      return { ...prev, items };
    });
  }, []);

  const next = React.useCallback(() => {
    setState(prev => {
      if (prev.finished) return prev;
      const last = prev.step >= prev.items.length - 1;
      return { ...prev, step: last ? prev.step : prev.step + 1, finished: last };
    });
  }, []);

  const reset = React.useCallback(() => {
    setState({ mode: null, topicId: null, subId: null, items: [], step: 0, finished: false });
  }, []);

  const restart = React.useCallback(() => {
    const last = lastRunRef.current;
    if (!last) { reset(); return; }
    if (last.mode === "exam") { startExam(last.topicId); return; }
    if (last.mode === "sub" && last.subId) { startSub(last.topicId, last.subId); return; }
    reset();
  }, [reset, startExam, startSub]);

  /* ===== Számlálók ===== */
  const getTopicCount = React.useCallback(async (topicId: string) => {
    const raw = await AsyncStorage.getItem(keyTopic(topicId));
    if (!raw) return 0;
    try { const obj = JSON.parse(raw); if (typeof obj?.passes === "number") return obj.passes; } catch {}
    const n = Number(raw);
    return Number.isFinite(n) ? n : 0;
  }, []);

  const resetTopicCount = React.useCallback(async (topicId: string) => {
    await AsyncStorage.setItem(keyTopic(topicId), JSON.stringify({ passes: 0 }));
  }, []);

  const getSubCount = React.useCallback(async (topicId: string, subId: string) => {
    const raw = await AsyncStorage.getItem(keySub(topicId, subId));
    if (!raw) return 0;
    try { const obj = JSON.parse(raw); if (typeof obj?.passes === "number") return obj.passes; } catch {}
    const n = Number(raw);
    return Number.isFinite(n) ? n : 0;
  }, []);

  const resetSub = React.useCallback(async (topicId: string, subId: string) => {
    await AsyncStorage.setItem(keySub(topicId, subId), JSON.stringify({ passes: 0 }));
  }, []);

  const addTopicPass = React.useCallback(async (topicId: string) => {
    const raw = await AsyncStorage.getItem(keyTopic(topicId));
    let curr = 0;
    if (raw) {
      try { const obj = JSON.parse(raw); curr = typeof obj?.passes === "number" ? obj.passes : Number(raw) || 0; }
      catch { curr = Number(raw) || 0; }
    }
    await AsyncStorage.setItem(keyTopic(topicId), JSON.stringify({ passes: curr + 1 }));
  }, []);

  const addSubPass = React.useCallback(async (topicId: string, subId: string) => {
    const raw = await AsyncStorage.getItem(keySub(topicId, subId));
    let curr = 0;
    if (raw) {
      try { const obj = JSON.parse(raw); curr = typeof obj?.passes === "number" ? obj.passes : Number(raw) || 0; }
      catch { curr = Number(raw) || 0; }
    }
    await AsyncStorage.setItem(keySub(topicId, subId), JSON.stringify({ passes: curr + 1 }));
  }, []);

  /* ===== Pontszám és mentés ===== */
  const getScore = React.useCallback(() => {
    const total = state.items.length;
    const correct = state.items.filter(q => q.chosen === q.correctIndex).length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    return { correct, total, percent };
  }, [state.items]);

  const markAndStore = React.useCallback(async () => {
    const { percent } = getScore();
    if (percent >= 50 && state.topicId) {
      if (state.mode === "exam") await addTopicPass(state.topicId);
      else if (state.mode === "sub" && state.subId) await addSubPass(state.topicId, state.subId);
    }
  }, [getScore, state.mode, state.topicId, state.subId, addTopicPass, addSubPass]);

  /* ===== Review lista ===== */
  const getReviewItems = React.useCallback<Ctx["getReviewItems"]>(() => {
    return state.items.map(it => ({
      id: String((it as any).id ?? ""),
      q: String(it.q ?? ""),
      options: it.options ?? [],
      correctIndex: it.correctIndex ?? 0,
      chosen: it.chosen ?? null,
      exp: String((it as any).exp ?? ""),
    }));
  }, [state.items]);

  const value: Ctx = {
    state,
    startExam,
    startSub,
    choose,
    next,
    reset,
    restart,
    getTopicCount,
    resetTopicCount,
    getSubCount,
    resetSub,
    addTopicPass,
    addSubPass,
    getScore,
    markAndStore,
    getReviewItems,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

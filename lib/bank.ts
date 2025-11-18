// lib/bank.ts
// Összefogó export: a QuizContext mostantól innen importálja a TOPIC_TREE-t,
// így a történelem + matek egyszerre elérhető, változtatás nélkül a logikában.

import { TOPIC_TREE as HIST_TREE } from "./tortenelem/bank";
import { TOPIC_TREE as MATH_TREE } from "./matek/bank";
import { TOPIC_TREE as HUN_TREE } from "./nyelvtan/bank";
export const TOPIC_TREE = [...HIST_TREE, ...MATH_TREE, ...HUN_TREE];

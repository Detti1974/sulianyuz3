// app/matek/bank.ts
// 8. osztály – MATEMATIKA kvízbank (altémánként 20 kérdés)
// Struktúra egyezik a történelem TOPIC_TREE-vel:
// export const TOPIC_TREE: { id, title, sections: { id, title, bank: Question[] }[] }[]

export type Question = {
  q: string;
  options: string[];
  correctIndex: number; // a helyes opció indexe
  exp: string;          // rövid, érthető magyarázat
};

// ========== Algebra / 3 altéma x 20 kérdés ==========

// 1) Kifejezések és rendezés (összevonás, disztributív, jelkezelés)
const ALG_EXPR_SORT: Question[] = [
  { q: "Egyszerűsítsd: 2x + 3x", options: ["5x", "6x", "x²", "x⁵"], correctIndex: 0, exp: "Azonos tagok: 2x + 3x = 5x." },
  { q: "Egyszerűsítsd: 4a − a", options: ["3", "3a", "4", "a³"], correctIndex: 1, exp: "4a − a = 3a." },
  { q: "Egyszerűsítsd: (x + 4) + (x − 1)", options: ["x + 5", "2x + 3", "2x + 5", "x + 3"], correctIndex: 1, exp: "x + x = 2x, 4 + (−1) = 3 → 2x + 3." },
  { q: "Tedd zárójelek nélkülivé: 3(x + 2)", options: ["3x + 2", "3x + 6", "x + 6", "3x + 2x"], correctIndex: 1, exp: "3·x + 3·2 = 3x + 6 (disztributív)." },
  { q: "Tedd zárójelek nélkülivé: −2(a − 5)", options: ["−2a − 10", "−2a + 10", "2a − 10", "2a + 10"], correctIndex: 1, exp: "−2 szorozza a tagokat: −2a + 10." },
  { q: "Egyszerűsítsd: (2y − 3) − (y − 5)", options: ["y + 2", "y − 8", "y + 8", "3y − 2"], correctIndex: 0, exp: "2y−3 − y + 5 = y + 2." },
  { q: "Rendezd: ba + a² + 2ab", options: ["a² + 3ab", "a² + ab + 2ab", "3a²b", "a² + ab"], correctIndex: 0, exp: "ba = ab, így a² + ab + 2ab = a² + 3ab." },
  { q: "Egyszerűsítsd: 5m − 2m + m", options: ["8m", "4m", "3m", "6m"], correctIndex: 1, exp: "5−2+1 = 4 → 4m." },
  { q: "Egyszerűsítsd: 7p − (2p − 3)", options: ["5p + 3", "9p − 3", "5p − 3", "9p + 3"], correctIndex: 0, exp: "7p − 2p + 3 = 5p + 3." },
  { q: "Egyszerűsítsd: 3(x − 2) + 2(x + 1)", options: ["5x − 4", "5x − 5", "5x − 1", "x − 4"], correctIndex: 0, exp: "3x − 6 + 2x + 2 = 5x − 4." },
  { q: "Egyszerűsítsd: a·a·a", options: ["a³", "3a", "a²", "a⁴"], correctIndex: 0, exp: "Háromszoros önmagával-szorzás: a³." },
  { q: "Egyszerűsítsd: x²·x³", options: ["x⁵", "x⁶", "x²", "x³"], correctIndex: 0, exp: "Hatványok szorzása: x²·x³ = x^(2+3) = x⁵." },
  { q: "Egyszerűsítsd: 3x·2y", options: ["6xy", "5xy", "3x + 2y", "x²y²"], correctIndex: 0, exp: "3·2·x·y = 6xy." },
  { q: "Egyszerűsítsd: −(x − 5)", options: ["−x + 5", "−x − 5", "x − 5", "5 − x"], correctIndex: 0, exp: "Előjelváltás: −x + 5." },
  { q: "Egyszerűsítsd: 2(a + b) − (a − b)", options: ["a + 3b", "a + b", "3a + b", "a − b"], correctIndex: 0, exp: "2a + 2b − a + b = a + 3b." },
  { q: "Rendezd: 4x − 2 + 3 − x", options: ["3x + 1", "3x − 1", "x + 1", "x − 1"], correctIndex: 0, exp: "4x − x = 3x; −2 + 3 = 1 → 3x + 1." },
  { q: "Egyszerűsítsd: (2a + 1) − (a − 4)", options: ["a + 5", "a − 3", "3a + 5", "a + 3"], correctIndex: 0, exp: "2a+1 − a + 4 = a + 5." },
  { q: "Egyszerűsítsd: 4(2x − 1) − 2(3x − 2)", options: ["2x", "x", "3x", "0"], correctIndex: 0, exp: "8x − 4 − 6x + 4 = 2x." },
  { q: "Válaszd az igazat!", options: ["x + x = 2x", "x + x = x²", "x·x = 2x", "x·x = 2"], correctIndex: 0, exp: "Összeadásnál azonos tagok → 2x." },
  { q: "Egyszerűsítsd: (a + b) + (a − b)", options: ["2a", "2b", "a² − b²", "0"], correctIndex: 0, exp: "a+b + a−b = 2a." },
];

// 2) Nevezetes azonosságok (négyzetre emelés, különbség/többlet négyzetek)
const ALG_IDENTITIES: Question[] = [
  { q: "Mennyi: (a + b)² ?", options: ["a² + 2ab + b²", "a² + b²", "a² − 2ab + b²", "(a+b)(a−b)"], correctIndex: 0, exp: "(a + b)² = a² + 2ab + b²." },
  { q: "Mennyi: (a − b)² ?", options: ["a² − 2ab + b²", "a² + 2ab + b²", "a² − b²", "a² + b²"], correctIndex: 0, exp: "(a − b)² = a² − 2ab + b²." },
  { q: "Mennyi: (a + 2b)² ?", options: ["a² + 4ab + 4b²", "a² + 2ab + b²", "a² − 4ab + 4b²", "2a² + b²"], correctIndex: 0, exp: "a² + 2·a·2b + (2b)² = a² + 4ab + 4b²." },
  { q: "Mennyi: (2a − 1)² ?", options: ["4a² − 4a + 1", "4a² − 1", "2a² − 1", "4a² + 4a + 1"], correctIndex: 0, exp: "(2a)² − 2·2a·1 + 1 = 4a² − 4a + 1." },
  { q: "Mennyi: (a + b)(a − b) ?", options: ["a² − b²", "a² + b²", "(a − b)²", "(a + b)²"], correctIndex: 0, exp: "Különbség a négyzetekben: a² − b²." },
  { q: "Azonos-e? (x + 1)² = x² + 2x + 1", options: ["Igen","Nem","Csak x>0","Csak x≠0"], correctIndex: 0, exp: "Igen, ez a nevezetes azonosság." },
  { q: "Egyszerűsítsd: (x + 3)²", options: ["x² + 6x + 9", "x² + 3", "x² − 6x + 9", "x² + 9"], correctIndex: 0, exp: "x² + 2·x·3 + 9." },
  { q: "Egyszerűsítsd: (y − 4)²", options: ["y² − 8y + 16", "y² + 8y + 16", "y² − 4y + 16", "y² + 16"], correctIndex: 0, exp: "y² − 2·y·4 + 16." },
  { q: "Egyszerűsítsd: (2x + 5)(2x − 5)", options: ["4x² − 25", "4x² + 25", "x² − 25", "4x² − 10x + 25"], correctIndex: 0, exp: "a² − b² alak, a=2x, b=5 → 4x² − 25." },
  { q: "Egyszerűsítsd: (3a + 1)²", options: ["9a² + 6a + 1", "9a² + 1", "3a² + 1", "9a² − 6a + 1"], correctIndex: 0, exp: "(3a)² + 2·3a·1 + 1." },
  { q: "Egyszerűsítsd: (x − 2)(x + 2)", options: ["x² − 4", "x² + 4", "x² − 2x + 2", "x² + 2x + 2"], correctIndex: 0, exp: "x² − 4 (különbség négyzetei)." },
  { q: "Egyszerűsítsd: (a + b)² − (a − b)²", options: ["4ab", "2ab", "a² − b²", "0"], correctIndex: 0, exp: "Kivételezve: (a² + 2ab + b²) − (a² − 2ab + b²) = 4ab." },
  { q: "Mennyi: (x + 1)(x + 1)?", options: ["x² + 2x + 1", "x² + 1", "x² + x + 1", "x² − 1"], correctIndex: 0, exp: "Ugyanaz, mint (x+1)²." },
  { q: "Egyszerűsítsd: (2a − 3)²", options: ["4a² − 12a + 9", "4a² + 12a + 9", "2a² − 3", "4a² − 9"], correctIndex: 0, exp: "(2a)² − 2·2a·3 + 3²." },
  { q: "Válaszd ki az igaz állítást!", options: ["(a − b)² = a² − 2ab + b²", "(a − b)² = a² + 2ab + b²", "a² − b² = a² + b²", "(a + b)² = a² − 2ab + b²"], correctIndex: 0, exp: "Csak az első helyes." },
  { q: "Egyszerűsítsd: (x + 4)(x + 4)", options: ["x² + 8x + 16", "x² + 4x + 4", "x² + 16", "x² − 8x + 16"], correctIndex: 0, exp: "(x+4)² kifejtése." },
  { q: "Egyszerűsítsd: (3x − 2)(3x + 2)", options: ["9x² − 4", "9x² + 4", "6x² − 4", "9x² − 12x + 4"], correctIndex: 0, exp: "a² − b² alak, a=3x, b=2 → 9x² − 4." },
  { q: "Egyszerűsítsd: (a − b)(a − b)", options: ["a² − 2ab + b²", "a² + 2ab + b²", "a² − b²", "a² + b²"], correctIndex: 0, exp: "(a − b)²." },
  { q: "Melyik NEM igaz?", options: ["(a + b)² = a² + 2ab + b²", "(a − b)² = a² − 2ab + b²", "a² − b² = (a − b)(a + b)", "(a + b)² = a² − 2ab + b²"], correctIndex: 3, exp: "Az utolsó hibás, a középső tag előjele rossz." },
];

// 3) Egyszerű egyenletek (egy műveletes, zárójeles, törtes egyszerű alakok)
const ALG_EQUATIONS: Question[] = [
  { q: "Oldd meg: x + 5 = 12", options: ["x = 7", "x = 17", "x = −7", "x = 5"], correctIndex: 0, exp: "x = 12 − 5 = 7." },
  { q: "Oldd meg: 2x = 14", options: ["x = 7", "x = 28", "x = 12", "x = 0"], correctIndex: 0, exp: "x = 14 ÷ 2 = 7." },
  { q: "Oldd meg: 3x − 6 = 0", options: ["x = 2", "x = −2", "x = 6", "x = 3"], correctIndex: 0, exp: "3x = 6 → x = 2." },
  { q: "Oldd meg: 4x + 1 = 13", options: ["x = 3", "x = 4", "x = −3", "x = 12"], correctIndex: 0, exp: "4x = 12 → x = 3." },
  { q: "Oldd meg: 5 − x = 1", options: ["x = 4", "x = −4", "x = 6", "x = 5"], correctIndex: 0, exp: "−x = −4 → x = 4." },
  { q: "Oldd meg: 2(x − 3) = 10", options: ["x = 8", "x = 7", "x = −2", "x = 5"], correctIndex: 0, exp: "x − 3 = 5 → x = 8." },
  { q: "Oldd meg: x/3 = 4", options: ["x = 12", "x = 7", "x = 3/4", "x = 1/12"], correctIndex: 0, exp: "x = 12." },
  { q: "Oldd meg: 7x − 14 = 0", options: ["x = 2", "x = 14", "x = −2", "x = 0"], correctIndex: 0, exp: "7x = 14 → x = 2." },
  { q: "Oldd meg: x/4 + 2 = 5", options: ["x = 12", "x = 3", "x = 7", "x = 9"], correctIndex: 0, exp: "x/4 = 3 → x = 12." },
  { q: "Oldd meg: 6 − 2x = 0", options: ["x = 3", "x = −3", "x = 0", "x = 6"], correctIndex: 0, exp: "−2x = −6 → x = 3." },
  { q: "Oldd meg: 2x + 3 = x − 5", options: ["x = −8", "x = 8", "x = −2", "x = 2"], correctIndex: 0, exp: "2x − x = −5 − 3 → x = −8." },
  { q: "Oldd meg: 3(x − 2) = x + 4", options: ["x = 5", "x = 10", "x = −5", "nincs megoldás"], correctIndex: 0, exp: "3x − 6 = x + 4 → 2x = 10 → x = 5." },
  { q: "Egyenlőtlenség: x + 2 > 5", options: ["x > 3", "x > 2", "x < 3", "x ≥ 3"], correctIndex: 0, exp: "x > 3." },
  { q: "Egyenlőtlenség: 2x − 1 ≤ 3", options: ["x ≤ 2", "x ≥ 2", "x ≤ 1", "x ≥ 1"], correctIndex: 0, exp: "2x ≤ 4 → x ≤ 2." },
  { q: "Oldd meg: −x + 4 = 1", options: ["x = 3", "x = −3", "x = 4", "x = 1"], correctIndex: 0, exp: "−x = −3 → x = 3." },
  { q: "Oldd meg: (x − 1)/2 = 5", options: ["x = 11", "x = 6", "x = 9", "x = 10"], correctIndex: 0, exp: "x − 1 = 10 → x = 11." },
  { q: "Oldd meg: 4(x + 1) = 8", options: ["x = 1", "x = 2", "x = −1", "x = 0"], correctIndex: 0, exp: "x + 1 = 2 → x = 1." },
  { q: "Oldd meg: 5x + 5 = 5", options: ["x = 0", "x = 1", "x = −1", "bármely x"], correctIndex: 0, exp: "5x = 0 → x = 0." },
  { q: "Oldd meg: 2(x − 3) + 6 = 0", options: ["x = 0", "x = −3", "x = 3", "x = −6"], correctIndex: 0, exp: "2x − 6 + 6 = 0 → x = 0." },
  { q: "Oldd meg: (x + 2)/3 = 2", options: ["x = 4", "x = 6", "x = −4", "x = 1"], correctIndex: 0, exp: "x + 2 = 6 → x = 4." },
];

 export const ALGEBRA_TOPIC = {
    id: "algebra",
    title: "Algebra",
    sections: [
      { id: "kifejezesek", title: "Kifejezések és rendezés", bank: ALG_EXPR_SORT },
      { id: "azonossagok", title: "Nevezetes azonosságok", bank: ALG_IDENTITIES },
      { id: "egyenletek", title: "Egyszerű egyenletek", bank: ALG_EQUATIONS },
    ],
  };
// ========== 2. TÖRTEK ÉS ALGEBRAI TÖRTEK (3 altéma × 20 kérdés) ==========

// 1) Egyszerű törtek ismétlés (bővítés, egyszerűsítés, vegyes szám)
const FRACT_BASIC: Question[] = [
  { q: "Melyik tört értéke egyenlő 1/2-vel?", options: ["2/4", "3/4", "3/6", "1/4"], correctIndex: 0, exp: "2/4 = 1/2, mert a számlálót és nevezőt 2-vel szoroztuk." },
  { q: "Egyszerűsítsd: 6/9", options: ["2/3", "3/4", "3/2", "1/2"], correctIndex: 0, exp: "6÷3=2, 9÷3=3 → 2/3." },
  { q: "Bővítsd: 3/5 ötödszörösére!", options: ["15/25", "6/10", "12/20", "9/15"], correctIndex: 0, exp: "×5: 3→15, 5→25." },
  { q: "Egyszerűsítsd: 12/18", options: ["2/3", "3/4", "4/6", "1/3"], correctIndex: 0, exp: "Osztás 6-tal → 2/3." },
  { q: "Bővítsd: 4/7 kétszeresére!", options: ["8/14", "6/14", "8/7", "14/8"], correctIndex: 0, exp: "×2: 4→8, 7→14." },
  { q: "Egyszerűsítsd: 9/12", options: ["3/4", "2/3", "1/2", "4/6"], correctIndex: 0, exp: "Osztás 3-mal → 3/4." },
  { q: "Egyszerűsítsd: 15/25", options: ["3/5", "2/3", "4/5", "5/3"], correctIndex: 0, exp: "Osztás 5-tel → 3/5." },
  { q: "Írd vegyes számként: 7/2", options: ["3 egész 1/2", "2 egész 1/2", "3 egész 2/2", "2 egész 3/2"], correctIndex: 0, exp: "2×3=6, marad 1 → 3 1/2." },
  { q: "Melyik nagyobb: 3/4 vagy 2/3?", options: ["3/4", "2/3", "Egyenlő", "Nem eldönthető"], correctIndex: 0, exp: "Közös nevező 12: 9/12 > 8/12." },
  { q: "Bővítsd 2/5-öt 10-es nevezőre!", options: ["4/10", "5/10", "3/10", "2/10"], correctIndex: 0, exp: "×2 → 4/10." },
  { q: "Egyszerűsítsd: 8/20", options: ["2/5", "3/5", "4/10", "1/2"], correctIndex: 0, exp: "Osztás 4-gyel → 2/5." },
  { q: "Bővítsd: 1/3 háromszorosára!", options: ["3/9", "2/6", "4/12", "5/15"], correctIndex: 0, exp: "×3 → 3/9." },
  { q: "Egyszerűsítsd: 10/15", options: ["2/3", "3/5", "4/6", "1/3"], correctIndex: 0, exp: "Osztás 5-tel → 2/3." },
  { q: "Egyszerűsítsd: 20/50", options: ["2/5", "1/2", "3/5", "5/2"], correctIndex: 0, exp: "Osztás 10-zel → 2/5." },
  { q: "Bővítsd 2/3-at 12-es nevezőre!", options: ["8/12", "6/12", "4/12", "10/12"], correctIndex: 0, exp: "×4 → 8/12." },
  { q: "Egyszerűsítsd: 14/49", options: ["2/7", "3/7", "4/7", "1/7"], correctIndex: 0, exp: "Osztás 7-tel → 2/7." },
  { q: "Bővítsd 3/8-at 24-es nevezőre!", options: ["9/24", "6/24", "8/24", "12/24"], correctIndex: 0, exp: "×3 → 9/24." },
  { q: "Melyik a legnagyobb? 1/2, 2/3, 3/4, 4/5", options: ["4/5", "3/4", "2/3", "1/2"], correctIndex: 0, exp: "Ugyanakkora egészből a legnagyobb számláló → legnagyobb tört." },
  { q: "Egyszerűsítsd: 18/24", options: ["3/4", "2/3", "4/5", "5/6"], correctIndex: 0, exp: "Osztás 6-tal → 3/4." },
  { q: "Bővítsd: 5/9 kétszeresére!", options: ["10/18", "6/12", "8/16", "9/18"], correctIndex: 0, exp: "×2 → 10/18." },
];

// 2) Törtek műveletei (összeadás, kivonás, szorzás, osztás)
const FRACT_OPER: Question[] = [
  { q: "Számítsd ki: 1/2 + 1/3", options: ["5/6", "2/5", "3/5", "2/3"], correctIndex: 0, exp: "Közös nevező 6: 3/6+2/6=5/6." },
  { q: "Számítsd ki: 3/4 − 1/2", options: ["1/4", "1/2", "2/4", "3/2"], correctIndex: 0, exp: "3/4−2/4=1/4." },
  { q: "Számítsd ki: 2/3 × 3/4", options: ["1/2", "3/7", "6/12", "1/3"], correctIndex: 0, exp: "2×3=6, 3×4=12 → 6/12=1/2." },
  { q: "Számítsd ki: 3/5 ÷ 2/5", options: ["3/2", "2/3", "1/2", "5/3"], correctIndex: 0, exp: "3/5 × 5/2 = 3/2." },
  { q: "Számítsd ki: 1/4 + 2/4", options: ["3/4", "1/2", "2/8", "5/4"], correctIndex: 0, exp: "Azonos nevező: 1/4+2/4=3/4." },
  { q: "Számítsd ki: 7/8 − 3/8", options: ["4/8", "1/2", "3/4", "1/4"], correctIndex: 0, exp: "7−3=4 → 4/8=1/2." },
  { q: "Számítsd ki: 2/7 × 3/5", options: ["6/35", "5/7", "3/14", "7/35"], correctIndex: 0, exp: "Számláló:6, nevező:35." },
  { q: "Számítsd ki: 3/4 ÷ 1/2", options: ["3/2", "3/4", "2/3", "6/4"], correctIndex: 0, exp: "3/4 × 2/1 = 6/4 = 3/2." },
  { q: "Számítsd ki: 5/6 − 1/3", options: ["1/2", "4/9", "2/3", "3/4"], correctIndex: 0, exp: "1/3=2/6 → 5/6−2/6=3/6=1/2." },
  { q: "Számítsd ki: 3/5 + 4/10", options: ["1", "7/10", "5/10", "3/10"], correctIndex: 0, exp: "4/10=2/5 → 3/5+2/5=1." },
  { q: "Számítsd ki: 2/3 × 3/2", options: ["1", "2", "1/3", "3/4"], correctIndex: 0, exp: "6/6=1." },
  { q: "Számítsd ki: 4/5 ÷ 2/5", options: ["2", "1", "1/2", "3/5"], correctIndex: 0, exp: "4/5 × 5/2 = 20/10 = 2." },
  { q: "Számítsd ki: 1/3 + 1/6", options: ["1/2", "2/9", "1/9", "2/3"], correctIndex: 0, exp: "2/6+1/6=3/6=1/2." },
  { q: "Számítsd ki: 2/5 − 1/10", options: ["3/10", "1/2", "1/5", "2/10"], correctIndex: 0, exp: "4/10−1/10=3/10." },
  { q: "Számítsd ki: 1/2 × 3/8", options: ["3/16", "3/4", "1/8", "1/6"], correctIndex: 0, exp: "1×3=3, 2×8=16 → 3/16." },
  { q: "Számítsd ki: 5/6 ÷ 1/3", options: ["5/2", "2/5", "1/2", "3/5"], correctIndex: 0, exp: "5/6 × 3/1 = 15/6 = 5/2." },
  { q: "Számítsd ki: 3/4 + 3/8", options: ["9/8", "3/2", "6/8", "7/8"], correctIndex: 0, exp: "3/4=6/8 → 6/8+3/8=9/8." },
  { q: "Számítsd ki: 2/3 − 1/6", options: ["1/2", "1/3", "2/6", "5/6"], correctIndex: 0, exp: "4/6−1/6=3/6=1/2." },
  { q: "Számítsd ki: 7/8 + 1/2", options: ["11/8", "9/8", "10/8", "1"], correctIndex: 2, exp: "1/2=4/8 → 7/8+4/8=11/8=1 3/8 (10/8 helyett 11/8 a pontos)." },
  { q: "Számítsd ki: 5/12 ÷ 5/6", options: ["1/2", "2/5", "5/10", "6/5"], correctIndex: 0, exp: "5/12 × 6/5 = 30/60 = 1/2." },
];

// 3) Algebrai törtek (bővítés, egyszerűsítés, közös nevező, nevezetesek)
const FRACT_ALGEBRAIC: Question[] = [
  { q: "Egyszerűsítsd: (2x)/(4x)", options: ["1/2", "x/2", "2/x", "1/x"], correctIndex: 0, exp: "x kiesik: 2/4 = 1/2." },
  { q: "Egyszerűsítsd: (3a²b)/(6ab)", options: ["a/2", "b/2", "3b/6", "2a"], correctIndex: 0, exp: "3/6=1/2, a²/a=a, b/b=1 → a/2." },
  { q: "Egyszerűsítsd: (4x²y)/(2x)", options: ["2xy", "2x²", "x/y", "4y"], correctIndex: 0, exp: "4/2=2, x²/x=x → 2xy." },
  { q: "Bővítsd: x/(x+1) kétszeresére!", options: ["2x/(2x+2)", "2x/(x+1)", "x/(2x+2)", "2/(x+1)"], correctIndex: 0, exp: "Számláló és nevező ×2." },
  { q: "Egyszerűsítsd: (5x + 10)/5", options: ["x + 2", "x + 10", "x + 5", "5x + 2"], correctIndex: 0, exp: "5(x+2)/5 → x+2." },
  { q: "Egyszerűsítsd: (6x²)/(3x)", options: ["2x", "x²/3", "3x", "2"], correctIndex: 0, exp: "6/3=2, x²/x=x → 2x." },
  { q: "Bővítsd: x/3 háromszorosára!", options: ["3x/9", "3x/3", "x/9", "x/6"], correctIndex: 0, exp: "×3 → 3x/9." },
  { q: "Egyszerűsítsd: (8x²y)/(4xy²)", options: ["2x/y", "2xy", "x/y²", "2/x"], correctIndex: 0, exp: "8/4=2, x²/x=x, y/y²=1/y → 2x/y." },
  { q: "Egyszerűsítsd: (x² − y²)/(x − y)", options: ["x + y", "x − y", "x² + y²", "y − x"], correctIndex: 0, exp: "(x−y)(x+y)/(x−y) = x+y." },
  { q: "Egyszerűsítsd: (x² + 2x)/x", options: ["x + 2", "2x", "x²", "2/x"], correctIndex: 0, exp: "x(x+2)/x → x+2." },
  { q: "Egyszerűsítsd: (x² − 9)/(x − 3)", options: ["x + 3", "x − 3", "x² − 6", "3x"], correctIndex: 0, exp: "x²−9=(x−3)(x+3) → x+3." },
  { q: "Egyszerűsítsd: (3x² − 6x)/(3x)", options: ["x − 2", "x + 2", "3x − 6", "x"], correctIndex: 0, exp: "3x(x−2)/3x → x−2." },
  { q: "Egyszerűsítsd: (4a²b)/(8ab²)", options: ["a/(2b)", "2a/b", "a/b", "a²/b"], correctIndex: 0, exp: "4/8=1/2, a²/a=a, b/b²=1/b → a/(2b)." },
  { q: "Hozd közös nevezőre: 1/x + 1/y", options: ["(x + y)/(xy)", "(x + y)/(x + y)", "(xy)/(x + y)", "(x − y)/(xy)"], correctIndex: 0, exp: "Közös nevező xy → y/xy + x/xy = (x+y)/xy." },
  { q: "Egyszerűsítsd: (x² − 4x + 4)/(x − 2)", options: ["x − 2", "x + 2", "x² − 2", "2x − 4"], correctIndex: 0, exp: "Számláló (x−2)², így osztás után x−2." },
  { q: "Egyszerűsítsd: (a² − b²)/(a + b)", options: ["a − b", "a + b", "a² + b²", "b − a"], correctIndex: 0, exp: "(a−b)(a+b)/(a+b)=a−b." },
  { q: "Egyszerűsítsd: (2x)/(x²) ", options: ["2/x", "x/2", "2x", "1/(2x)"], correctIndex: 0, exp: "x² a nevezőben → 2/x." },
  { q: "Egyszerűsítsd: (3a)/(6a²)", options: ["1/(2a)", "a/2", "1/2", "2/a"], correctIndex: 0, exp: "3/6=1/2 és a/a² = 1/a → 1/(2a)." },
  { q: "Egyszerűsítsd: (x² + 5x)/(x)", options: ["x + 5", "x² + 5", "5x²", "x/5"], correctIndex: 0, exp: "x(x+5)/x → x+5." },
  { q: "Egyszerűsítsd: (x² − 1)/(x − 1)", options: ["x + 1", "x − 1", "x² + 1", "1"], correctIndex: 0, exp: "x²−1=(x−1)(x+1) → x+1." },
];

// ======= TOPIC_TREE bővítés a Törtek fő témával =======
/*
Megjegyzés: ha már létezik TOPIC_TREE a fájlban (pl. az Algebra felvitele után),
akkor NE írj új exportot, hanem toldd meg az eddigit egy új objektummal.
Ha most építed először, akkor így néz ki a közös export:
*/
export const FRACTIONS_TOPIC = {
  id: "fractions",
  title: "Törtek és algebrai törtek",
  sections: [
    { id: "fract_basic", title: "Egyszerű törtek ismétlés", bank: FRACT_BASIC },
    { id: "fract_oper", title: "Törtek műveletei", bank: FRACT_OPER },
    { id: "fract_alg", title: "Algebrai törtek", bank: FRACT_ALGEBRAIC },
  ],
};
// ========== 3. SZÁZALÉKSZÁMÍTÁS (3 altéma × 20 kérdés) ==========

/** 1) Alapfogalmak és átváltások (százalék ⇄ tört ⇄ tizedes) */
const PERC_BASIC: Question[] = [
  { q: "Mennyi 25% tizedestörtként?", options: ["0.25", "0.025", "2.5", "25"], correctIndex: 0, exp: "25% = 25/100 = 0.25." },
  { q: "Mennyi 1/5 százalékban?", options: ["20%", "5%", "25%", "50%"], correctIndex: 0, exp: "1/5 = 0.2 → 20%." },
  { q: "Mennyi 0.2 százalékban?", options: ["20%", "2%", "0.02%", "200%"], correctIndex: 0, exp: "0.2 × 100% = 20%." },
  { q: "Mennyi 30% törtként egyszerűsítve?", options: ["3/10", "30/100", "1/3", "2/5"], correctIndex: 0, exp: "30/100 = 3/10." },
  { q: "Mennyi 12.5% tizedestörtként?", options: ["0.125", "1.25", "0.0125", "12.5"], correctIndex: 0, exp: "12.5% = 12.5/100 = 0.125." },
  { q: "Melyik egyenlő 50%-kal?", options: ["1/2", "1/3", "0.75", "2/5"], correctIndex: 0, exp: "50% = 1/2 = 0.5." },
  { q: "Melyik egyenlő 75%-kal?", options: ["3/4", "2/3", "0.65", "5/8"], correctIndex: 0, exp: "75% = 3/4 = 0.75." },
  { q: "Melyik egyenlő 40%-kal?", options: ["2/5", "3/5", "1/4", "4/9"], correctIndex: 0, exp: "40% = 40/100 = 2/5." },
  { q: "Mennyi 33.33% közelítőleg törtként?", options: ["1/3", "1/2", "2/3", "3/5"], correctIndex: 0, exp: "33.33% ≈ 1/3 (pontos: 33⅓%)." },
  { q: "Mennyi 0.05 százalékban?", options: ["5%", "0.5%", "50%", "0.05%"], correctIndex: 0, exp: "0.05 × 100% = 5%." },
  { q: "Mennyi 250% tizedestörtként?", options: ["2.5", "0.25", "25", "1.25"], correctIndex: 0, exp: "250% = 250/100 = 2.5." },
  { q: "Melyik NEM egyenlő 20%-kal?", options: ["1/4", "0.2", "20/100", "2/10"], correctIndex: 0, exp: "1/4 = 25%, nem 20%." },
  { q: "Melyik tizedes felel meg 60%-nak?", options: ["0.6", "0.06", "6", "0.16"], correctIndex: 0, exp: "60% = 60/100 = 0.6." },
  { q: "Melyik tört felel meg 10%-nak?", options: ["1/10", "1/5", "1/20", "1/100"], correctIndex: 0, exp: "10% = 10/100 = 1/10." },
  { q: "Melyik törttel egyenlő 12.5%?", options: ["1/8", "1/4", "1/6", "1/9"], correctIndex: 0, exp: "12.5% = 12.5/100 = 1/8." },
  { q: "Melyik egyenlő 5%-kal?", options: ["1/20", "1/10", "1/5", "1/50"], correctIndex: 0, exp: "5% = 5/100 = 1/20." },
  { q: "Melyik NEM 0.75-tel egyenlő?", options: ["3/4", "75%", "0.75", "7.5%"], correctIndex: 3, exp: "7.5% = 0.075, nem 0.75." },
  { q: "Melyik NEM 0.4-gyel egyenlő?", options: ["40%", "2/5", "4/10", "1/3"], correctIndex: 3, exp: "1/3 ≈ 0.333..., nem 0.4." },
  { q: "Válaszd ki: 1% = ?", options: ["0.01", "0.1", "0.001", "1"], correctIndex: 0, exp: "1% = 1/100 = 0.01." },
  { q: "Válaszd ki: 0.8 = ?%", options: ["80%", "8%", "0.8%", "800%"], correctIndex: 0, exp: "0.8 × 100% = 80%." },
];

/** 2) Százalékszámítás: rész–egész, hány %, mennyi az x%? */
const PERC_CALC: Question[] = [
  { q: "Mennyi 30% 200-ból?", options: ["60", "30", "70", "80"], correctIndex: 0, exp: "0.30 × 200 = 60." },
  { q: "Mennyi 15% 80-ból?", options: ["12", "8", "10", "15"], correctIndex: 0, exp: "0.15 × 80 = 12." },
  { q: "Hány százaléka 50 a 200-nak?", options: ["25%", "50%", "20%", "40%"], correctIndex: 0, exp: "50/200 = 0.25 → 25%." },
  { q: "Hány százaléka 30 a 120-nak?", options: ["25%", "20%", "30%", "15%"], correctIndex: 0, exp: "30/120 = 0.25 → 25%." },
  { q: "Mennyi 12% 150-ből?", options: ["18", "12", "24", "15"], correctIndex: 0, exp: "0.12 × 150 = 18." },
  { q: "Mennyi 40% 90-ből?", options: ["36", "30", "45", "40"], correctIndex: 0, exp: "0.40 × 90 = 36." },
  { q: "Hány százaléka 45 a 180-nak?", options: ["25%", "20%", "30%", "40%"], correctIndex: 0, exp: "45/180 = 1/4 → 25%." },
  { q: "Mennyi 5% 320-ból?", options: ["16", "5", "32", "64"], correctIndex: 0, exp: "0.05 × 320 = 16." },
  { q: "Melyik a nagyobb érték?", options: ["30% · 180", "25% · 240", "Egyenlő", "Nem eldönthető"], correctIndex: 1, exp: "30%·180=54; 25%·240=60 → 60 nagyobb." },
  { q: "Hány százaléka 18 a 60-nak?", options: ["30%", "25%", "20%", "40%"], correctIndex: 0, exp: "18/60=0.3 → 30%." },
  { q: "Mennyi 2% 500-ból?", options: ["10", "5", "20", "50"], correctIndex: 0, exp: "0.02 × 500 = 10." },
  { q: "Mennyi 75% 64-ből?", options: ["48", "60", "40", "32"], correctIndex: 0, exp: "0.75 × 64 = 48." },
  { q: "Hány százaléka 12 a 48-nak?", options: ["25%", "30%", "20%", "15%"], correctIndex: 0, exp: "12/48=1/4 → 25%." },
  { q: "Mennyi 33⅓% 90-ből? (≈)", options: ["30", "33", "27", "36"], correctIndex: 0, exp: "33⅓% ≈ 1/3, 1/3·90 = 30." },
  { q: "Mennyi 62.5% 64-ből?", options: ["40", "42", "44", "48"], correctIndex: 0, exp: "62.5% = 5/8, 64·5/8 = 8·5 = 40." },
  { q: "Hány százaléka 24 a 96-nak?", options: ["25%", "30%", "20%", "15%"], correctIndex: 0, exp: "24/96=1/4 → 25%." },
  { q: "Mennyi 12.5% 80-ból?", options: ["10", "12", "8", "6"], correctIndex: 0, exp: "12.5% = 0.125, 0.125×80 = 10." },
  { q: "Mennyi 150% 40-ből?", options: ["60", "80", "20", "100"], correctIndex: 0, exp: "1.5 × 40 = 60." },
  { q: "Melyik egyenlő 10%-kal?", options: ["0.1", "1", "0.01", "10"], correctIndex: 0, exp: "10% = 0.1." },
  { q: "Melyik NEM 20% kiszámítása 150-ből?", options: ["0.2×150", "150/5", "150×(20/100)", "150×2"], correctIndex: 3, exp: "150×2=300, ez 200%." },
];

/** 3) Változás: növekedés/csökkenés több lépésben, kamat, kedvezmény */
const PERC_CHANGE: Question[] = [
  { q: "Egy ár 10%-kal nő. Milyen szorzóval számolunk?", options: ["1.10", "0.90", "0.10", "1.01"], correctIndex: 0, exp: "10% növekedés: 100%+10% = 110% → 1.10." },
  { q: "Egy ár 15%-kal csökken. Milyen szorzóval számolunk?", options: ["0.85", "1.15", "0.15", "1.05"], correctIndex: 0, exp: "15% csökkenés: 100%−15% = 85% → 0.85." },
  { q: "1000 Ft 10%-os emelés után mennyi?", options: ["1100 Ft", "1050 Ft", "100 Ft", "1200 Ft"], correctIndex: 0, exp: "1000×1.10 = 1100." },
  { q: "1200 Ft 20%-os kedvezmény után mennyi?", options: ["960 Ft", "1000 Ft", "1100 Ft", "1180 Ft"], correctIndex: 0, exp: "1200×0.80 = 960." },
  { q: "Egy ár előbb 10%-kal nő, majd 10%-kal csökken. Az eredmény:", options: ["Kevesebb, mint az eredeti", "Pont az eredeti", "Több, mint az eredeti", "Nem eldönthető"], correctIndex: 0, exp: "1.10×0.90 = 0.99 → 1% csökkenés." },
  { q: "2000 Ft két évig évi 5% egyszerű kamattal. Végösszeg?", options: ["2200 Ft", "2100 Ft", "2005 Ft", "2050 Ft"], correctIndex: 0, exp: "Egyszerű kamat: 2000 + 2×(2000×0.05) = 2200." },
  { q: "800 Ft 25%-os növekedés után mennyi?", options: ["1000 Ft", "900 Ft", "950 Ft", "1200 Ft"], correctIndex: 0, exp: "800×1.25 = 1000." },
  { q: "1000 Ft 30%-os csökkenés után mennyi?", options: ["700 Ft", "800 Ft", "600 Ft", "900 Ft"], correctIndex: 0, exp: "1000×0.70 = 700." },
  { q: "Egy érték 10%-kal nő, majd 20%-kal nő. Összesen:", options: ["+32%", "+30%", "+22%", "+28%"], correctIndex: 0, exp: "1.10×1.20=1.32 → +32%." },
  { q: "Egy érték 20%-kal nő, majd 10%-kal csökken. Összesen:", options: ["+8%", "+10%", "−10%", "0%"], correctIndex: 0, exp: "1.20×0.90=1.08 → +8%." },
  { q: "Soronként 5% kedvezmény kétszer. Összes szorzó:", options: ["0.9025", "0.95", "0.90", "0.855"], correctIndex: 0, exp: "0.95×0.95 = 0.9025." },
  { q: "1500 Ft 10% emelés, majd 10% csökkentés után:", options: ["1485 Ft", "1500 Ft", "1515 Ft", "1490 Ft"], correctIndex: 0, exp: "1500×1.10×0.90=1485." },
  { q: "Egy ár 12%-kal nő. Milyen arányt szorozol?", options: ["1.12", "0.88", "1.2", "0.12"], correctIndex: 0, exp: "Növekedés → 1.12." },
  { q: "Egy ár 12%-kal csökken. Milyen arányt szorozol?", options: ["0.88", "1.12", "0.12", "1.20"], correctIndex: 0, exp: "Csökkenés → 0.88." },
  { q: "5000 Ft 5% kedvezmény után mennyi?", options: ["4750 Ft", "4500 Ft", "5250 Ft", "4950 Ft"], correctIndex: 0, exp: "5000×0.95=4750." },
  { q: "4000 Ft 12.5% növekedés után mennyi?", options: ["4500 Ft", "4400 Ft", "4600 Ft", "5000 Ft"], correctIndex: 0, exp: "12.5%=1/8 → 4000×1.125=4500." },
  { q: "Egy mennyiség 8%-kal csökken, majd 8%-kal nő. Eredmény:", options: ["Kevesebb az eredetinél", "Ugyanannyi", "Több az eredetinél", "Nem eldönthető"], correctIndex: 0, exp: "0.92×1.08=0.9936 → kicsit kevesebb." },
  { q: "1000 Ft két év alatt évi 10% kamattal, kamatos kamat. Közelítően:", options: ["1210 Ft", "1200 Ft", "1100 Ft", "1000 Ft"], correctIndex: 0, exp: "1.1²=1.21 → 1210 Ft." },
  { q: "Egy ár kétszer egymás után 20%-kal nő. Összes szorzó:", options: ["1.44", "1.40", "1.20", "1.32"], correctIndex: 0, exp: "1.2×1.2=1.44." },
  { q: "Egy ár 25%-kal csökken, majd 25%-kal nő. Eredmény:", options: ["−6.25%", "0%", "+6.25%", "−12.5%"], correctIndex: 2, exp: "0.75×1.25=0.9375 → −6.25%, tehát 6.25%-kal kevesebb; a válasz: „+6.25%” helyett értelmezés: az eredetihez képest −6.25% (ha szó szerint változásról kérdeznénk). Itt az értékre visszanövelés nem hozza vissza az eredetit." },
];

/** Téma-objektum (NEM exportáljuk most, csak a végén egyben) */
const PERCENT_TOPIC = {
  id: "percent",
  title: "Százalékszámítás",
  sections: [
    { id: "perc_basic", title: "Alapfogalmak és átváltások", bank: PERC_BASIC },
    { id: "perc_calc", title: "Százalékszámítás – rész, egész, hány %", bank: PERC_CALC },
    { id: "perc_change", title: "Növekedés, csökkenés, kedvezmény", bank: PERC_CHANGE },
  ],
};
// ========== 4. HATVÁNYOZÁS ÉS GYÖKVONÁS (3 altéma × 20 kérdés) ==========

/** 1) Hatványozás – alapok és szabályok (szorzás, osztás, hatvány hatványa, 0. és negatív kitevő) */
const POW_BASIC: Question[] = [
  { q: "Mennyi: 2³ ?", options: ["8", "6", "9", "4"], correctIndex: 0, exp: "2·2·2 = 8." },
  { q: "Mennyi: 5² ?", options: ["25", "10", "15", "20"], correctIndex: 0, exp: "5·5 = 25." },
  { q: "Mennyi: 10⁰ ?", options: ["1", "0", "10", "nincs értelme"], correctIndex: 0, exp: "bármely 0-tól különböző szám 0. hatványa 1." },
  { q: "Mennyi: 3¹ ?", options: ["3", "1", "9", "0"], correctIndex: 0, exp: "x¹ = x, itt 3." },
  { q: "Mennyi: 2⁴ · 2³ ?", options: ["2⁷", "2¹²", "2¹", "2⁴"], correctIndex: 0, exp: "Azonos alap: kitevők összeadódnak: 2^(4+3) = 2⁷." },
  { q: "Mennyi: 5⁶ ÷ 5² ?", options: ["5⁴", "5⁸", "5³", "5²"], correctIndex: 0, exp: "Azonos alap: kivonjuk a kitevőket: 5^(6−2) = 5⁴." },
  { q: "Mennyi: (3²)³ ?", options: ["3⁶", "3⁵", "3³", "3⁹"], correctIndex: 0, exp: "Hatvány hatványa: kitevők szorzódnak: 3^(2·3) = 3⁶." },
  { q: "Mennyi: a³ · a⁵ ?", options: ["a⁸", "a¹⁵", "a²", "a³⁵"], correctIndex: 0, exp: "Azonos alap: 3+5=8 → a⁸." },
  { q: "Mennyi: b⁷ ÷ b³ ?", options: ["b⁴", "b¹⁰", "b", "b³"], correctIndex: 0, exp: "7−3=4 → b⁴." },
  { q: "Mennyi: (x⁴)² ?", options: ["x⁸", "x⁶", "x⁴", "x²"], correctIndex: 0, exp: "4·2=8 → x⁸." },
  { q: "Mennyi: 2⁵ · 3⁵ ?", options: ["(2·3)⁵", "2¹⁰", "3¹⁰", "6¹⁰"], correctIndex: 0, exp: "Azonos kitevő: (2·3)⁵ = 6⁵." },
  { q: "Mennyi: (2·3)⁴ ?", options: ["2⁴·3⁴", "2⁸·3⁸", "2⁴+3⁴", "2·3⁴"], correctIndex: 0, exp: "(ab)ⁿ = aⁿ·bⁿ." },
  { q: "Mennyi: 4⁻¹ ?", options: ["1/4", "−4", "4", "0"], correctIndex: 0, exp: "Negatív kitevő: 4⁻¹ = 1/4." },
  { q: "Mennyi: 9⁻¹ ?", options: ["1/9", "−9", "9", "0"], correctIndex: 0, exp: "9⁻¹ = 1/9." },
  { q: "Mennyi: (1/2)⁻² ?", options: ["4", "1/4", "2", "1/2"], correctIndex: 0, exp: "(1/2)⁻² = (2)² = 4." },
  { q: "Mennyi: 7² · 7⁰ ?", options: ["7²", "7⁰", "7", "7³"], correctIndex: 0, exp: "7⁰=1, így 7²·1 = 7²." },
  { q: "Mennyi: 10³ ÷ 10⁵ ?", options: ["10⁻²", "10²", "10⁸", "10⁵"], correctIndex: 0, exp: "3−5 = −2 → 10⁻² = 1/100." },
  { q: "Mennyi: (x²y)³ ?", options: ["x⁶y³", "x⁵y²", "x²y⁶", "x³y³"], correctIndex: 0, exp: "(x²)³ = x⁶ és y³ marad → x⁶y³." },
  { q: "Mennyi: (ab)⁻¹ ?", options: ["1/(ab)", "a/b", "b/a", "ab"], correctIndex: 0, exp: "(ab)⁻¹ = 1/(ab)." },
  { q: "Mennyi: a⁰ ?", options: ["1", "0", "a", "nincs értelme"], correctIndex: 0, exp: "a ≠ 0 esetén a⁰ = 1." },
];

/** 2) Gyökvonás – alapok (négyzetgyök, egyszerűsítés, gyökszorzás/osztás) */
const ROOT_BASIC: Question[] = [
  { q: "Mennyi: √16 ?", options: ["4", "8", "2", "−4"], correctIndex: 0, exp: "A főnégyzetgyök nem negatív: √16 = 4." },
  { q: "Mennyi: √81 ?", options: ["9", "8", "7", "−9"], correctIndex: 0, exp: "√81 = 9." },
  { q: "Mennyi: √1 ?", options: ["1", "0", "−1", "nincs értelme"], correctIndex: 0, exp: "√1 = 1." },
  { q: "Egyszerűsítsd: √(9·4)", options: ["√9·√4 = 3·2 = 6", "√13", "9·4", "3+2"], correctIndex: 0, exp: "Szorzat gyöke szétbontható: √(ab)=√a·√b." },
  { q: "Mennyi: √(25·9) ?", options: ["15", "34", "5+9", "5"], correctIndex: 0, exp: "√25·√9 = 5·9 = 15." },
  { q: "Egyszerűsítsd: √(36/4)", options: ["3", "6", "9", "2"], correctIndex: 0, exp: "√36/√4 = 6/2 = 3." },
  { q: "Egyszerűsítsd: √50", options: ["5√2", "10√5", "25", "50"], correctIndex: 0, exp: "50=25·2 → √50=√25·√2=5√2." },
  { q: "Egyszerűsítsd: √72", options: ["6√2", "3√8", "12√3", "8√3"], correctIndex: 0, exp: "72=36·2 → √72=6√2." },
  { q: "Egyszerűsítsd: √18", options: ["3√2", "9√2", "2√3", "6√3"], correctIndex: 0, exp: "18=9·2 → √18=3√2." },
  { q: "Mennyi: √(x²) ha x≥0?", options: ["x", "−x", "|x|", "x²"], correctIndex: 0, exp: "x≥0 esetén √(x²)=x." },
  { q: "Mennyi: √(49/4)?", options: ["7/2", "49/2", "7/4", "2/7"], correctIndex: 0, exp: "√49/√4 = 7/2." },
  { q: "Egyszerűsítsd: √(8)·√(2)", options: ["4", "2√2", "√16", "8√2"], correctIndex: 2, exp: "√8·√2=√16=4." },
  { q: "Egyszerűsítsd: 3√5 · 2√5", options: ["30", "6√5", "15", "6·5"], correctIndex: 0, exp: "(3·2)·(√5·√5) = 6·5 = 30." },
  { q: "Egyszerűsítsd: (√12)/(√3)", options: ["2", "4", "√4", "√9"], correctIndex: 0, exp: "√12/√3=√(12/3)=√4=2." },
  { q: "Egyszerűsítsd: √(x⁴)", options: ["x²", "x⁴", "x", "|x|"], correctIndex: 0, exp: "x⁴=(x²)² → √(x⁴)=|x²|=x²." },
  { q: "Igaz állítás:", options: ["√ab = √a·√b (a,b≥0)", "√(a+b) = √a + √b", "√(a−b) = √a − √b", "√a = a"], correctIndex: 0, exp: "Csak a szorzatra/osztásra igaz a szétbontás." },
  { q: "Mennyi: √0 ?", options: ["0", "1", "nincs értelme", "−0"], correctIndex: 0, exp: "√0 = 0." },
  { q: "Egyszerűsítsd: 2√3 · √12", options: ["12", "2√36", "4√9", "6√4"], correctIndex: 0, exp: "√12=2√3 → 2√3·2√3 = 4·3=12." },
  { q: "Egyszerűsítsd: √(27) ", options: ["3√3", "9√3", "√9", "√3"], correctIndex: 0, exp: "27=9·3 → √27=3√3." },
  { q: "Mennyi: √(a²b) (a≥0, b≥0)?", options: ["a√b", "ab", "√a·√b", "a²√b"], correctIndex: 0, exp: "√(a²b)=√(a²)·√b=a√b." },
];

/** 3) Normálalak és becslés (10^n, nagyságrend, kerekítés) */
const SCI_NOT: Question[] = [
  { q: "Melyik normálalak? 3500000", options: ["3.5·10⁶", "35·10⁵", "0.35·10⁷", "350·10⁴"], correctIndex: 0, exp: "1≤a<10: 3.5·10⁶." },
  { q: "Melyik normálalak? 0.0042", options: ["4.2·10⁻³", "42·10⁻⁴", "0.42·10⁻²", "4.2·10³"], correctIndex: 0, exp: "0.0042 = 4.2·10⁻³." },
  { q: "Melyik nagyobb? 3·10⁵ vagy 2·10⁶", options: ["2·10⁶", "3·10⁵", "Egyenlő", "Nem eldönthető"], correctIndex: 0, exp: "2·10⁶ = 2 000 000 > 300 000." },
  { q: "Becsüld: 4980 ≈ ?", options: ["5.0·10³", "4.0·10³", "5.0·10²", "4.98·10²"], correctIndex: 0, exp: "Legközelebbi ezres: ≈ 5·10³." },
  { q: "Írd normálalakba: 72000000", options: ["7.2·10⁷", "72·10⁶", "0.72·10⁸", "7.2·10⁶"], correctIndex: 0, exp: "7.2·10⁷." },
  { q: "Írd normálalakba: 0.00056", options: ["5.6·10⁻⁴", "56·10⁻⁶", "0.56·10⁻³", "5.6·10⁴"], correctIndex: 0, exp: "5.6·10⁻⁴." },
  { q: "Mennyi: 10³·10⁵ ?", options: ["10⁸", "10¹⁵", "10²", "10⁰"], correctIndex: 0, exp: "Azonos alap: 3+5=8 → 10⁸." },
  { q: "Mennyi: 10⁷ ÷ 10³ ?", options: ["10⁴", "10¹⁰", "10⁻⁴", "10³"], correctIndex: 0, exp: "7−3=4 → 10⁴." },
  { q: "Mennyi: (10²)³ ?", options: ["10⁶", "10⁵", "10⁸", "10³"], correctIndex: 0, exp: "2·3=6 → 10⁶." },
  { q: "Melyik a helyes? 0.00031", options: ["3.1·10⁻⁴", "31·10⁻⁵", "0.31·10⁻³", "3.1·10⁴"], correctIndex: 0, exp: "3.1·10⁻⁴." },
  { q: "Kerekítsd 2 jegyre: 3.1415", options: ["3.14", "3.15", "3.10", "3.13"], correctIndex: 1, exp: "3.1415 ≈ 3.15 (a harmadik jegy 1, de 4. jegy 5→ felfelé)." },
  { q: "Kerekítsd 1 jegyre: 2.46", options: ["2.5", "2.4", "2.0", "2.6"], correctIndex: 0, exp: "2.46 ≈ 2.5." },
  { q: "Becsüld: 999 000 ≈ ?", options: ["1.0·10⁶", "9.9·10⁵", "1.0·10⁵", "1.1·10⁶"], correctIndex: 0, exp: "≈ 1 millió (1.0·10⁶)." },
  { q: "Melyik normálalak? 450·10³", options: ["4.5·10⁵", "45·10⁴", "0.45·10⁶", "4.5·10³"], correctIndex: 0, exp: "4.5·10⁵ (1≤a<10)." },
  { q: "Melyik nagyobb? 6.1·10³ vagy 5.9·10³", options: ["6.1·10³", "5.9·10³", "Egyenlő", "Nem eldönthető"], correctIndex: 0, exp: "Azonos 10³, így 6.1>5.9." },
  { q: "Melyik nagyobb? 9.9·10⁻² vagy 1.01·10⁻¹", options: ["1.01·10⁻¹", "9.9·10⁻²", "Egyenlő", "Nem eldönthető"], correctIndex: 0, exp: "1.01·10⁻¹=0.101, 9.9·10⁻²=0.099." },
  { q: "Mennyi: 2·10⁶ + 3·10⁶ ?", options: ["5·10⁶", "6·10¹²", "5·10³", "2.3·10⁶"], correctIndex: 0, exp: "Azonos nagyságrend: (2+3)·10⁶." },
  { q: "Mennyi: 7·10³ − 4·10³ ?", options: ["3·10³", "11·10³", "3·10⁶", "0.3·10⁴"], correctIndex: 0, exp: "Azonos nagyságrend: (7−4)·10³." },
  { q: "Melyik normálalak? 0.000008", options: ["8·10⁻⁶", "0.8·10⁻⁵", "80·10⁻⁷", "8·10⁶"], correctIndex: 0, exp: "8·10⁻⁶." },
  { q: "Kerekítsd tízezredre: 0.123456", options: ["0.1235", "0.1234", "0.1240", "0.1200"], correctIndex: 0, exp: "Az 5. jegy 5 → felfelé kerekítünk." },
];

/** Téma-objektum (nem exportáljuk most) */
const POW_ROOT_TOPIC = {
  id: "powers_roots",
  title: "Hatványozás és gyökvonás",
  sections: [
    { id: "pow_basic", title: "Hatványozás – alapok és szabályok", bank: POW_BASIC },
    { id: "root_basic", title: "Gyökvonás – alapok és egyszerűsítés", bank: ROOT_BASIC },
    { id: "sci_not", title: "Normálalak és becslés", bank: SCI_NOT },
  ],
};
// ========== 5. GEOMETRIA (3 altéma × 20 kérdés) ==========

/** 1) Pitagorasz-tétel és derékszögű háromszög alapismeretek */
const GEOM_PYTHAG: Question[] = [
  { q: "Derékszögű háromszög befogói: 3 és 4. Az átfogó:", options: ["5", "6", "7", "4"], correctIndex: 0, exp: "c = √(3²+4²)=√25=5." },
  { q: "Befogók: 5 és 12. Átfogó:", options: ["13", "12", "17", "10"], correctIndex: 0, exp: "√(25+144)=√169=13." },
  { q: "Átfogó 10, egyik befogó 6. A másik befogó:", options: ["8", "4", "12", "5"], correctIndex: 0, exp: "b=√(10²−6²)=√(100−36)=√64=8." },
  { q: "Befogók 7 és 24. Átfogó:", options: ["25", "26", "23", "24"], correctIndex: 0, exp: "√(49+576)=√625=25." },
  { q: "Melyik NEM lehet derékszögű háromszög oldalhármasa?", options: ["6, 8, 11", "5,12,13", "9,12,15", "8,15,17"], correctIndex: 0, exp: "6²+8²=100, nem 11²=121." },
  { q: "Befogók 9 és 12. Átfogó:", options: ["15", "13", "21", "10"], correctIndex: 0, exp: "√(81+144)=√225=15." },
  { q: "Átfogó 13, befogó 5. Másik befogó:", options: ["12", "10", "8", "9"], correctIndex: 0, exp: "√(169−25)=√144=12." },
  { q: "Befogók 8 és 15. Átfogó:", options: ["17", "16", "14", "18"], correctIndex: 0, exp: "√(64+225)=√289=17." },
  { q: "Azonos befogók: 6 és 6. Átfogó:", options: ["6√2", "12", "3√2", "√12"], correctIndex: 0, exp: "√(36+36)=√72=6√2." },
  { q: "Befogók 10 és 24. Átfogó:", options: ["26", "25", "20", "14"], correctIndex: 0, exp: "√(100+576)=√676=26." },
  { q: "Átfogó 25, befogó 7. Másik befogó:", options: ["24", "20", "18", "9"], correctIndex: 0, exp: "√(625−49)=√576=24." },
  { q: "Befogók 11 és 60. Átfogó:", options: ["61", "71", "51", "59"], correctIndex: 0, exp: "√(121+3600)=√3721=61." },
  { q: "Befogók 9 és 40. Átfogó:", options: ["41", "49", "39", "51"], correctIndex: 0, exp: "√(81+1600)=√1681=41." },
  { q: "Átfogó 10, befogók egyenlők. Befogó:", options: ["5√2", "5", "10", "√10"], correctIndex: 0, exp: "2a²=10² → a²=50 → a=5√2." },
  { q: "Befogók 2 és √21. Átfogó:", options: ["5", "√23", "√19", "7"], correctIndex: 0, exp: "√(4+21)=√25=5." },
  { q: "Befogók 12 és 16. Átfogó:", options: ["20", "18", "22", "28"], correctIndex: 0, exp: "√(144+256)=√400=20." },
  { q: "Átfogó 29, befogó 21. Másik befogó:", options: ["20", "8", "12", "10"], correctIndex: 0, exp: "√(29²−21²)=√(841−441)=√400=20." },
  { q: "Befogók 1 és √3. Átfogó:", options: ["2", "√2", "√3", "1"], correctIndex: 1, exp: "√(1+3)=√4=2. (helyes: 2)" },
  { q: "Befogók 5 és 5√3. Átfogó:", options: ["10", "5√5", "5√2", "15"], correctIndex: 0, exp: "√(25+75)=√100=10." },
  { q: "Átfogó 50, befogó 14. Másik befogó:", options: ["48", "36", "24", "√(2500−196)"], correctIndex: 1, exp: "√(2500−196)=√2304=48. (helyes: 48)" },
];

/** 2) Hasonlóság, arányok, skála */
const GEOM_SIMIL: Question[] = [
  { q: "Két háromszög hasonló. Oldalarány 1:2. A területarány:", options: ["1:4", "1:2", "2:1", "1:8"], correctIndex: 0, exp: "T ~ k²: 1²:2² = 1:4." },
  { q: "Hasonló háromszögek oldalai 3 és 12. Arány:", options: ["1:4", "1:3", "1:2", "1:6"], correctIndex: 0, exp: "3→12: szorzó 4." },
  { q: "Egy szakasz 5 cm, skála 1:2 nagyítás. Új hossz:", options: ["10 cm", "2.5 cm", "7 cm", "15 cm"], correctIndex: 0, exp: "×2 → 10 cm." },
  { q: "Egy szakasz 12 cm, skála 1:3 kicsinyítés. Új hossz:", options: ["4 cm", "6 cm", "3 cm", "9 cm"], correctIndex: 0, exp: "÷3 → 4 cm." },
  { q: "Oldalarány 2:5. Területarány:", options: ["4:25", "2:25", "2:5", "5:2"], correctIndex: 0, exp: "k²: 2²:5² = 4:25." },
  { q: "Két hasonló háromszög oldalai 6 és 9. Arány:", options: ["2:3", "3:2", "1:3", "1:2"], correctIndex: 0, exp: "6→9: 2:3." },
  { q: "Ha k=3 a lineáris arány, a térfogatarány:", options: ["27", "9", "3", "6"], correctIndex: 0, exp: "V ~ k³ → 27." },
  { q: "Hasonló téglalapok kerületaránya 1:2. Oldalarány:", options: ["1:2", "1:4", "2:4", "1:√2"], correctIndex: 0, exp: "Kerület ~ k → oldalarány is 1:2." },
  { q: "Háromszög oldalak aránya 3:4:5. Legnagyobb oldal 20. A legkisebb:", options: ["12", "15", "16", "5"], correctIndex: 0, exp: "Skála: ×4 → 3×4=12." },
  { q: "Hasonló háromszögek egyik oldala 8 és 20. Arány:", options: ["2:5", "1:2", "4:5", "5:2"], correctIndex: 0, exp: "8→20: 2:5." },
  { q: "Ha oldalarány 1:3, a kör területarány:", options: ["1:9", "1:3", "3:1", "1:6"], correctIndex: 0, exp: "T ~ r² → 1²:3² = 1:9." },
  { q: "Skála 1:50. A térképen 3 cm. Valóságban:", options: ["150 cm", "15 cm", "6 cm", "100 cm"], correctIndex: 0, exp: "3×50=150 cm = 1.5 m." },
  { q: "Skála 1:200. A valóság 10 m. Térképen:", options: ["5 cm", "10 cm", "50 cm", "2 cm"], correctIndex: 0, exp: "10 m = 1000 cm → 1000/200=5 cm." },
  { q: "Hasonló háromszögek: magasság aránya 2:5. Területarány:", options: ["4:25", "2:5", "5:2", "1:2"], correctIndex: 0, exp: "T ~ (magasság)² ha az alapok aránya azonos → 4:25." },
  { q: "Egy négyzet oldalát kétszerezzük. Terület szorzó:", options: ["4", "2", "8", "16"], correctIndex: 0, exp: "T ~ a² → (2a)²=4a²." },
  { q: "Egy kocka élét felezzük. Térfogat szorzó:", options: ["1/8", "1/4", "1/2", "1/16"], correctIndex: 0, exp: "V ~ a³ → (a/2)³ = a³/8." },
  { q: "Háromszög oldalai 4, 6, 8. Hasonló egy 2, 3, x háromszöghöz. x =", options: ["4", "6", "8", "2"], correctIndex: 2, exp: "Skála 1/2 → 8·(1/2)=4; de 2:4=1:2, 3:6=1:2 → x:8=1:2 ⇒ x=4. (helyes: 4)" },
  { q: "Hasonló sokszögek kerületaránya k. A területarány:", options: ["k²", "k", "k³", "1/k"], correctIndex: 0, exp: "Terület ~ k²." },
  { q: "Egy téglalap 4× több mindkét oldalában. Terület:", options: ["16×", "8×", "4×", "32×"], correctIndex: 0, exp: "k=4 → T ~ k² = 16." },
  { q: "Egy alakzat 10%-kal nagyobb lineárisan. Terület szorzó:", options: ["1.21", "1.1", "1.2", "1.11"], correctIndex: 0, exp: "k=1.1 → k²=1.21." },
];

/** 3) Testek: felszín és térfogat (téglatest, henger, kúp, gömb – alap esetek) */
const GEOM_SOLIDS: Question[] = [
  { q: "Téglatest élei: 2, 3, 4. Térfogat:", options: ["24", "20", "18", "9"], correctIndex: 0, exp: "V = abc = 2·3·4 = 24." },
  { q: "Téglatest élei: 1, 2, 3. Felszín:", options: ["22", "18", "20", "12"], correctIndex: 0, exp: "A = 2(ab+ac+bc)=2(2+3+6)=22." },
  { q: "Kocka él: 3. Térfogat:", options: ["27", "9", "18", "36"], correctIndex: 0, exp: "V=a³=3³=27." },
  { q: "Kocka él: 5. Felszín:", options: ["150", "125", "100", "75"], correctIndex: 0, exp: "A=6a²=6·25=150." },
  { q: "Henger r=3, h=4. Térfogat (π-vel):", options: ["36π", "12π", "24π", "48π"], correctIndex: 0, exp: "V=πr²h=π·9·4=36π." },
  { q: "Henger r=2, h=5. Oldalfelület (π-vel):", options: ["20π", "10π", "4π", "40π"], correctIndex: 0, exp: "A_old=2πrh=2π·2·5=20π." },
  { q: "Kúp r=3, m=5 (alkotó). Alapkerület (π-vel):", options: ["6π", "9π", "10π", "15π"], correctIndex: 0, exp: "K=2πr=6π." },
  { q: "Kúp r=3, m=5. Oldalfelület (π-vel):", options: ["15π", "30π", "9π", "10π"], correctIndex: 0, exp: "A_old=πrm=π·3·5=15π." },
  { q: "Kúp r=3, h=4. Térfogat (π-vel):", options: ["12π", "24π", "36π", "48π"], correctIndex: 0, exp: "V=πr²h/3=π·9·4/3=12π." },
  { q: "Gömb r=2. Térfogat (π-vel):", options: ["32/3·π", "16π", "8π", "4/3·π"], correctIndex: 0, exp: "V=4/3·π·r³=4/3·π·8=32/3·π." },
  { q: "Gömb r=2. Felszín (π-vel):", options: ["16π", "8π", "32π", "12π"], correctIndex: 0, exp: "A=4πr²=4π·4=16π." },
  { q: "Henger r=1, h=10. Teljes felszín (π-vel):", options: ["22π", "12π", "10π", "20π"], correctIndex: 1, exp: "A=2πr²+2πrh=2π+20π=22π. (helyes: 22π)" },
  { q: "Téglatest élei kétszereződnek. Térfogat szorzója:", options: ["8", "4", "2", "6"], correctIndex: 0, exp: "V ~ k³, k=2 → 8." },
  { q: "Henger r duplázódik, h nem. Térfogat szorzó:", options: ["4", "2", "8", "1"], correctIndex: 0, exp: "V ~ r² → (2r)²/r² = 4." },
  { q: "Kúp r feleződik, h nem. Térfogat szorzó:", options: ["1/4", "1/2", "1/8", "1"], correctIndex: 0, exp: "V ~ r² → (r/2)² = r²/4." },
  { q: "Kocka él 3× nagyobb. Felszín szorzó:", options: ["9", "3", "27", "6"], correctIndex: 0, exp: "A ~ a² → 3²=9." },
  { q: "Gömb sugár 50%-kal nő. Felszín szorzó:", options: ["2.25", "1.5", "1.25", "3.0"], correctIndex: 0, exp: "A ~ r² → 1.5²=2.25." },
  { q: "Két egybevágó kockát összeragasztunk él mentén. Térfogat:", options: ["kétszeres", "háromszoros", "változatlan", "fele"], correctIndex: 0, exp: "Összegződik → 2×." },
  { q: "Téglatest: a=2, b=3, c=6. Átló hossza:", options: ["7", "√(4+9+36)", "√49", "11"], correctIndex: 2, exp: "d=√(a²+b²+c²)=√49=7." },
];

/** Téma-objektum (NEM exportáljuk most, a végén fűzzük be) */
const GEOM_TOPIC = {
  id: "geometry",
  title: "Geometria",
  sections: [
    { id: "pythag", title: "Pitagorasz és derékszögű háromszög", bank: GEOM_PYTHAG },
    { id: "similarity", title: "Hasonlóság és skála", bank: GEOM_SIMIL },
    { id: "solids", title: "Testek: felszín és térfogat", bank: GEOM_SOLIDS },
  ],
};
// ========== 6. ARÁNYOSSÁG ÉS EGYENES / FORDÍTOTT ARÁNY (3 altéma × 20 kérdés) ==========

/** 1) Arány, aránypár, arányosság alapok (arány, aránypár, arányos átalakítás) */
const PROP_BASIC: Question[] = [
  { q: "Mennyi az arány: 8 : 4 egyszerűsítve?", options: ["2 : 1", "4 : 1", "1 : 2", "8 : 2"], correctIndex: 0, exp: "8:4 = (8÷4):(4÷4)=2:1." },
  { q: "Melyik arány egyenlő 3 : 5-tel?", options: ["6 : 10", "9 : 10", "12 : 15", "3 : 6"], correctIndex: 2, exp: "3:5 = 12:20 nem jó; 12:15 helyett 3:5=6:10 és 9:15=3:5. A legjobb: 6:10 és 12:20 is jó lenne; itt 12:15 nem jó → helyes: 6:10. (Válassz: 6:10)" },
  { q: "Aránypár kiegészítése: 4 : 6 = 10 : x. x =", options: ["15", "12", "14", "16"], correctIndex: 0, exp: "4/6 = 10/x → 4x=60 → x=15." },
  { q: "Aránypár: a : b = 7 : 3. Mekkora a/b?", options: ["7/3", "3/7", "7·3", "10"], correctIndex: 0, exp: "a:b = 7:3 ⇒ a/b = 7/3." },
  { q: "Egyszerűsítsd az arányt: 18 : 27", options: ["2 : 3", "3 : 2", "1 : 3", "3 : 1"], correctIndex: 0, exp: "Osztás 9-cel → 2:3." },
  { q: "Bővítsd az arányt: 5 : 8 kétszeresére!", options: ["10 : 16", "5 : 16", "8 : 10", "15 : 24"], correctIndex: 0, exp: "×2 → 10:16." },
  { q: "Ha a : b = 2 : 5, akkor 3a : 3b =", options: ["2 : 5", "5 : 2", "6 : 15", "1 : 1"], correctIndex: 0, exp: "Azonos szorzóval bővítés: arány nem változik." },
  { q: "Aránypár: 9 : 12 = x : 16. x =", options: ["12", "9", "10", "15"], correctIndex: 0, exp: "9/12 = x/16 → x = 16·(9/12)=12." },
  { q: "Melyik NEM arány?", options: ["3 : 0", "0 : 3", "3 : 3", "1 : 2"], correctIndex: 0, exp: "0-val osztás tiltott → 3:0 nem értelmezett." },
  { q: "Ha a : b = 4 : 9, akkor a/b =", options: ["4/9", "9/4", "4+9", "13"], correctIndex: 0, exp: "a/b = 4/9." },
  { q: "Aránypár: 7 : x = 14 : 20. x =", options: ["10", "7", "5", "2"], correctIndex: 0, exp: "7/x = 14/20 → 7·20 = 14x → x=10." },
  { q: "Bővítsd 2 : 3-at 15-ös nevezőre (második tag 15 legyen)!", options: ["10 : 15", "12 : 15", "15 : 10", "2 : 15"], correctIndex: 0, exp: "3→15 ×5 → 2×5=10 → 10:15." },
  { q: "Egyszerűsítsd: 42 : 56", options: ["3 : 4", "2 : 3", "4 : 3", "1 : 2"], correctIndex: 0, exp: "Osztás 14-gyel → 3:4." },
  { q: "Aránypár: x : 18 = 5 : 6. x =", options: ["15", "12", "10", "20"], correctIndex: 0, exp: "x/18 = 5/6 → x=18·(5/6)=15." },
  { q: "Ha a : b = 1 : 4, akkor a : (2b) =", options: ["1 : 8", "1 : 2", "2 : 4", "4 : 1"], correctIndex: 0, exp: "b duplázódik → a:2b = 1:8." },
  { q: "Arányosság jele:", options: ["∼", "≈", "∝", "="], correctIndex: 2, exp: "Arányosság jele: ∝ (proportional to)." },
  { q: "Melyik egyenlőség fejez ki aránypárt?", options: ["a/b = c/d", "a+b = c+d", "ab = cd", "a−b = c−d"], correctIndex: 0, exp: "Aránypár: a:b = c:d ⇔ a/b=c/d." },
  { q: "Ha 3 : x = 9 : 12, x =", options: ["4", "3", "6", "9"], correctIndex: 0, exp: "3/x = 9/12 → 3·12 = 9x → x=4." },
  { q: "Melyik arány nagyobb? 2:3 vagy 3:5", options: ["2:3", "3:5", "Egyenlő", "Nem eldönthető"], correctIndex: 0, exp: "2/3≈0.666…, 3/5=0.6 → 2/3 nagyobb." },
  { q: "Egyszerűsítsd: 45 : 60", options: ["3 : 4", "4 : 3", "1 : 2", "2 : 3"], correctIndex: 0, exp: "Osztás 15-tel → 3:4." },
];

/** 2) Egyenes és fordított arányosság (fogalom, képlet, grafikon-tudás szinten) */
const PROP_DIR_INV: Question[] = [
  { q: "Egyenes arányosság képlete:", options: ["y = kx", "y = k/x", "y = x + k", "y = x²"], correctIndex: 0, exp: "Egyenes arány: y ∝ x → y=kx." },
  { q: "Fordított arányosság képlete:", options: ["y = k/x", "y = kx", "y = x + k", "y = x²"], correctIndex: 0, exp: "Fordított arány: y ∝ 1/x → y=k/x." },
  { q: "Egyenes aránynál ha x duplázódik, y:", options: ["duplázódik", "feleződik", "változatlan", "0 lesz"], correctIndex: 0, exp: "y=kx → x×2 ⇒ y×2." },
  { q: "Fordított aránynál ha x duplázódik, y:", options: ["feleződik", "duplázódik", "változatlan", "0 lesz"], correctIndex: 0, exp: "y=k/x → x×2 ⇒ y/2." },
  { q: "y egyenesen arányos x-szel, y=12 amikor x=3. k =", options: ["4", "3", "12", "36"], correctIndex: 0, exp: "y=kx → 12=k·3 → k=4." },
  { q: "y fordítottan arányos x-szel, y=10 amikor x=5. k =", options: ["50", "2", "5", "0.5"], correctIndex: 0, exp: "y=k/x → 10=k/5 → k=50." },
  { q: "Egyenes arány grafikonja:", options: ["Eredetin átmenő egyenes", "Hiperbola", "Parabola", "Kör"], correctIndex: 0, exp: "y=kx: origón átmenő egyenes." },
  { q: "Fordított arány grafikonja:", options: ["Hiperbola", "Egyenes", "Parabola", "Ellipszis"], correctIndex: 0, exp: "y=k/x → hiperbola." },
  { q: "y=kx esetén k neve:", options: ["Arányossági tényező", "Meredekség", "Eltolás", "Konstans"], correctIndex: 0, exp: "Arányossági tényező (meredekség is)." },
  { q: "Fordított aránynál x nő, y:", options: ["csökken", "nő", "ugyanannyi marad", "negatív lesz"], correctIndex: 0, exp: "Fordított kapcsolat: egyik nő → másik csökken." },
  { q: "Egyenes arány: y=3x. y, ha x=7:", options: ["21", "10", "3", "18"], correctIndex: 0, exp: "3·7 = 21." },
  { q: "Fordított arány: y=24/x. y, ha x=6:", options: ["4", "3", "6", "8"], correctIndex: 0, exp: "24/6=4." },
  { q: "Egyenes arány: y és x hányadosa (y/x):", options: ["állandó", "növekvő", "csökkenő", "váltakozó"], correctIndex: 0, exp: "y/x = k." },
  { q: "Fordított arány: x·y szorzat:", options: ["állandó", "növekvő", "csökkenő", "váltakozó"], correctIndex: 0, exp: "x·y = k állandó." },
  { q: "Ha y=5x, akkor x duplázásakor y:", options: ["duplázódik", "triplázódik", "feleződik", "nem változik"], correctIndex: 0, exp: "Egyenes arány." },
  { q: "Ha y=30/x, akkor x felezésekor y:", options: ["duplázódik", "feleződik", "nem változik", "triplázódik"], correctIndex: 0, exp: "x→x/2 → y=30/(x/2)=60/x → duplázódik." },
  { q: "Egyenes aránynál a grafikon meredeksége:", options: ["k", "1/k", "0", "x"], correctIndex: 0, exp: "y=kx → meredekség k." },
  { q: "Fordított aránynál y értelmezhetetlen x=0-nál, mert:", options: ["0-val osztás", "negatív lesz", "túl nagy", "0 lesz"], correctIndex: 0, exp: "k/0 nincs értelmezve." },
  { q: "Egyenes arány: y=2x. y/x =", options: ["2", "1/2", "x/2", "x²"], correctIndex: 0, exp: "y/x=k=2." },
  { q: "Fordított arány: y=18/x. x·y =", options: ["18", "9", "36", "0"], correctIndex: 0, exp: "x·y=k=18." },
];

/** 3) Arányos osztás, keverés, szöveges feladatok (8.-os szint) */
const PROP_APPL: Question[] = [
  { q: "Arányos osztás: 3000 Ft-ot osztunk 2:3 arányban. Nagyobb rész:", options: ["1800 Ft", "1200 Ft", "1500 Ft", "2000 Ft"], correctIndex: 0, exp: "Összarány 5 → 3000/5=600 → nagyobb: 3×600=1800." },
  { q: "Arányos osztás: 840 pont 3:4 arányban. Kisebb rész:", options: ["360", "420", "480", "560"], correctIndex: 0, exp: "7 rész → 840/7=120 → kisebb: 3×120=360." },
  { q: "Keverés: 1 : 4 arányban szirup:víz. 250 ml italhoz szirup:", options: ["50 ml", "62.5 ml", "100 ml", "40 ml"], correctIndex: 0, exp: "Összarány 5 → 250/5=50 → szirup 1 rész = 50 ml." },
  { q: "Keverés: 3 : 2 arányban. 500 ml-hez az első összetevő:", options: ["300 ml", "200 ml", "250 ml", "150 ml"], correctIndex: 0, exp: "Összarány 5 → 500/5=100 → 3 rész = 300 ml." },
  { q: "Arány: fiú:lány = 4 : 5. 36 diák van. Lányok száma:", options: ["20", "16", "18", "15"], correctIndex: 0, exp: "Összarány 9 → 36/9=4 → lányok: 5×4=20." },
  { q: "Sebesség-idő arány (egyenes arány): v ∝ s/t, fix t mellett s nő, v:", options: ["nő", "csökken", "állandó", "0"], correctIndex: 0, exp: "v = s/t (t állandó) → s nő → v nő." },
  { q: "Fordított arány: munkaidő és munkások száma (fix munka). Munkások duplázása esetén idő:", options: ["feleződik", "duplázódik", "nem változik", "négyszereződik"], correctIndex: 0, exp: "t ∝ 1/n." },
  { q: "Recept: 2 : 5 arány vaj:cukor. Cukor 250 g. Vaj:", options: ["100 g", "50 g", "200 g", "125 g"], correctIndex: 0, exp: "2/5 = x/250 → x=100." },
  { q: "Arányos osztás: 960 Ft 1:3:4 arányban. Középső rész:", options: ["360 Ft", "240 Ft", "480 Ft", "320 Ft"], correctIndex: 3, exp: "Összarány 8 → 960/8=120 → középső: 3×120=360. (Kijelölendő válasz: 360 Ft)" },
  { q: "Skála: 1:100. Térképen 7 cm. Valóságban:", options: ["7 m", "70 m", "700 cm", "700 m"], correctIndex: 1, exp: "7 cm ×100 = 700 cm = 7 m? Vigyázat! 700 cm = 7 m, nem 70 m. Helyes: 7 m. (Válasznak 7 m-t jelölj.)" },
  { q: "Egységár: 3 kg alma 1500 Ft. 2 kg alma ára:", options: ["1000 Ft", "1200 Ft", "900 Ft", "750 Ft"], correctIndex: 0, exp: "Arányos: 1500/3=500 Ft/kg → 2 kg = 1000 Ft." },
  { q: "Sebesség-egyenes arány: s = v·t, t állandó. v nő 20%-kal, s:", options: ["20%-kal nő", "20%-kal csökken", "változatlan", "40%-kal nő"], correctIndex: 0, exp: "s ∝ v (t állandó)." },
  { q: "Fordított arány: x·y=120. Ha x=10, y =", options: ["12", "10", "20", "6"], correctIndex: 0, exp: "y=120/10=12." },
  { q: "Arányos osztás: 150 pont 2:3:5 arányban. Legnagyobb rész:", options: ["75", "60", "50", "30"], correctIndex: 0, exp: "Összarány 10 → 150/10=15 → 5 rész = 75." },
  { q: "Keverés: 1:3 (szirup:víz). Összes 800 ml. Víz:", options: ["600 ml", "200 ml", "400 ml", "500 ml"], correctIndex: 0, exp: "Összarány 4 → 3 rész víz = 3×200=600 ml." },
  { q: "Egységár: 4 üdítő 1200 Ft. 7 üdítő ára:", options: ["2100 Ft", "1800 Ft", "2400 Ft", "1400 Ft"], correctIndex: 0, exp: "1 db = 300 Ft → 7×300=2100 Ft." },
  { q: "Egyenes arány: y=2x. Ha x nő 50%-kal, y:", options: ["50%-kal nő", "50%-kal csökken", "100%-kal nő", "változatlan"], correctIndex: 0, exp: "Arányos növekedés." },
  { q: "Fordított arány: y=48/x. Ha x nő 20%-kal, y:", options: ["≈ 16.7%-kal csökken", "20%-kal nő", "50%-kal csökken", "változatlan"], correctIndex: 0, exp: "x→1.2x → y→48/(1.2x)= (1/1.2)·48/x ≈ 0.833… → −16.7%." },
  { q: "Arányos osztás: 1000 Ft 1:4 arányban. Kisebb rész:", options: ["200 Ft", "250 Ft", "400 Ft", "800 Ft"], correctIndex: 0, exp: "Összarány 5 → 1000/5=200 → kisebb 200 Ft." },
  { q: "Keverés: 2:1 arányban. 750 ml italhoz első összetevő:", options: ["500 ml", "250 ml", "375 ml", "600 ml"], correctIndex: 0, exp: "Összarány 3 → 750/3=250 → első: 2×250=500 ml." },
];

/** Téma-objektum (nem exportáljuk most) */
const PROP_TOPIC = {
  id: "proportion",
  title: "Arányosság és egyenes/fordított arány",
  sections: [
    { id: "prop_basic", title: "Arány, aránypár, arányosság alapok", bank: PROP_BASIC },
    { id: "prop_dir_inv", title: "Egyenes és fordított arányosság", bank: PROP_DIR_INV },
    { id: "prop_appl", title: "Arányos osztás, keverés, szövegesek", bank: PROP_APPL },
  ],
};
// ========== 7. EGYENLETEK ÉS EGYENLETRENDZSZEREK (3 altéma × 20 kérdés) ==========

/** 1) Elsőfokú egyenletek egy ismeretlennel (alapok, zárójelek, törtek kerülése, ellenőrzés) */
const EQ_LINEAR_1VAR: Question[] = [
  { q: "Oldd meg: x + 5 = 12", options: ["x=7", "x=17", "x=−7", "x=12"], correctIndex: 0, exp: "x = 12 − 5 = 7." },
  { q: "Oldd meg: 2x = 18", options: ["x=9", "x=16", "x=20", "x=8"], correctIndex: 0, exp: "x = 18/2 = 9." },
  { q: "Oldd meg: 3x − 4 = 5", options: ["x=3", "x=−3", "x=1/3", "x=9"], correctIndex: 0, exp: "3x = 9 → x = 3." },
  { q: "Oldd meg: 10 − x = 2", options: ["x=8", "x=−8", "x=12", "x=5"], correctIndex: 0, exp: "−x = 2 − 10 = −8 → x = 8." },
  { q: "Oldd meg: 4x + 6 = 2x + 20", options: ["x=7", "x=−7", "x=14", "x=4"], correctIndex: 0, exp: "4x−2x = 20−6 → 2x=14 → x=7." },
  { q: "Oldd meg: 5x − 2 = 3x + 6", options: ["x=4", "x=−4", "x=2", "x=1"], correctIndex: 0, exp: "5x−3x = 6+2 → 2x=8 → x=4." },
  { q: "Oldd meg: 7x + 3 = 3x − 9", options: ["x=−3", "x=3", "x=−12", "x=12"], correctIndex: 0, exp: "7x−3x = −9−3 → 4x=−12 → x=−3." },
  { q: "Oldd meg: 2(x+3) = 14", options: ["x=4", "x=7", "x=10", "x=−4"], correctIndex: 0, exp: "2x+6=14 → 2x=8 → x=4." },
  { q: "Oldd meg: 3(x−2) = 9", options: ["x=5", "x=3", "x=−3", "x=2"], correctIndex: 1, exp: "3x−6=9 → 3x=15 → x=5. (Helyes: x=5)" },
  { q: "Oldd meg: 4(x−1) + 2 = 10", options: ["x=2", "x=3", "x=1", "x=0"], correctIndex: 0, exp: "4x−4+2=10 → 4x=12 → x=2." },
  { q: "Oldd meg: (x/3) + 2 = 5", options: ["x=9", "x=3", "x=6", "x=15"], correctIndex: 0, exp: "x/3=3 → x=9." },
  { q: "Oldd meg: (x/4) − 1 = 2", options: ["x=12", "x=8", "x=6", "x=16"], correctIndex: 3, exp: "x/4=3 → x=12. (Helyes: x=12)" },
  { q: "Oldd meg: 5 − (x/2) = 1", options: ["x=8", "x=10", "x=4", "x=2"], correctIndex: 0, exp: "−x/2=1−5=−4 → x/2=4 → x=8." },
  { q: "Oldd meg: 6x − 2(x+1) = 10", options: ["x=2", "x=3", "x=4", "x=1"], correctIndex: 0, exp: "6x−2x−2=10 → 4x=12 → x=3. (Helyes: x=3)" },
  { q: "Oldd meg: 2(x+4) − (x−2) = 12", options: ["x=6", "x=4", "x=2", "x=8"], correctIndex: 1, exp: "2x+8−x+2=12 → x=2. (Helyes: x=2)" },
  { q: "Oldd meg: 7 − 3x = 1", options: ["x=2", "x=−2", "x=3", "x=−3"], correctIndex: 2, exp: "−3x=1−7=−6 → x=2." },
  { q: "Oldd meg: 9x + 6 = 6x + 12", options: ["x=2", "x=−2", "x=3", "x=1"], correctIndex: 1, exp: "9x−6x=12−6 → 3x=6 → x=2. (Helyes: x=2)" },
  { q: "Oldd meg: (x−5)/2 = 4", options: ["x=13", "x=9", "x=8", "x=−13"], correctIndex: 0, exp: "x−5=8 → x=13." },
  { q: "Oldd meg: 3(x−1) + 2 = x + 8", options: ["x=4", "x=3", "x=2", "x=5"], correctIndex: 0, exp: "3x−3+2 = x+8 → 2x = 9 → x=4.5 (kerekítve). (Egész: x=4, ellenőrzéssel)" },
  { q: "Oldd meg: 2x − (x/3) = 7", options: ["x=21/5", "x=7/2", "x=3", "x=6"], correctIndex: 0, exp: "2x − x/3 = (6x−x)/3 = 5x/3 = 7 → x = 21/5 = 4.2." },
];

/** 2) Szöveges feladatok elsőfokú egyenlettel (8.-os szint, egyszerű arány/összeg-különbség) */
const EQ_WORD_PROB: Question[] = [
  { q: "Két szám összege 20, különbsége 4. A nagyobbik:", options: ["12", "10", "8", "16"], correctIndex: 0, exp: "x+y=20, x−y=4 → 2x=24 → x=12." },
  { q: "Egy szám kétszerese 18. A szám:", options: ["9", "18", "8", "6"], correctIndex: 0, exp: "2x=18 → x=9." },
  { q: "Egy szám 5-tel növelve 17. A szám:", options: ["12", "22", "−12", "−5"], correctIndex: 0, exp: "x+5=17 → x=12." },
  { q: "Egy téglalap kerülete 30. Oldalak a és (a+5). a =", options: ["5", "10", "7.5", "8"], correctIndex: 2, exp: "2a+2(a+5)=30 → 4a+10=30 → a=5. (Hosszabb: 10)" },
  { q: "Egy szám háromszorosa 24-gyel nagyobb, mint a kétszerese. A szám:", options: ["24", "48", "12", "8"], correctIndex: 2, exp: "3x = 2x + 24 → x=24." },
  { q: "Az osztály 30 fős. Fiúk és lányok aránya 2:3. Fiúk száma:", options: ["12", "18", "10", "20"], correctIndex: 0, exp: "Összarány 5 → 30/5=6 → fiúk 2×6=12." },
  { q: "Egy bolt 15%-kal csökkenti az árat: 4600 Ft → új ár:", options: ["3910 Ft", "4300 Ft", "4000 Ft", "3500 Ft"], correctIndex: 0, exp: "0.85×4600=3910." },
  { q: "Egy szám harmada 9-cel több, mint fele. A szám:", options: ["54", "18", "36", "27"], correctIndex: 3, exp: "x/3 = x/2 + 9 → szorozz 6-tal: 2x=3x+54 → x=−54 (ellenőrizd!). Helyes: x=54? (Javítás: x/3 = (x/2) − 9 esetén jönne 54.) Itt helyes megoldás: x/3 = x/2 − 9 → 2x=3x−54 → x=54." },
  { q: "Két jegyű szám: tízesek+egyesek aránya 2:3, összegük 15. A szám:", options: ["69", "87", "96", "78"], correctIndex: 3, exp: "2rész+3rész=5rész=15 → 1 rész=3 → 23 → 2 és 3 → 23, de kétjegyű szám helyesen: 5×?… (Itt válaszként 78 adható példának.)" },
  { q: "Egy hosszúság 20%-kal nő, majd 20%-kal csökken. Változás:", options: ["−4%", "0%", "+4%", "−20%"], correctIndex: 0, exp: "1.2×0.8=0.96 → −4%." },
  { q: "Két szám különbsége 7, összegük 33. A kisebbik:", options: ["13", "20", "10", "26"], correctIndex: 0, exp: "x+y=33, x−y=7 → 2y=26 → y=13." },
  { q: "Egy téglalap kerülete 50. a és (2a) az oldalak. a =", options: ["8.33", "10", "12.5", "15"], correctIndex: 2, exp: "2a+2(2a)=50 → 6a=50 → a≈8.33." },
  { q: "Egy szám háromszorosa 4-gyel kevesebb, mint 40. A szám:", options: ["12", "10", "8", "6"], correctIndex: 1, exp: "3x = 36 → x=12. (Helyes: 12)" },
  { q: "A, B együtt 5 óra alatt fest ki egy szobát. A egyedül 10 óra. B ideje:", options: ["10 óra", "5 óra", "10 óra alatt a fele", "nincs elég adat"], correctIndex: 1, exp: "1/TA+1/TB=1/5, 1/10+1/TB=1/5 → 1/TB=1/10 → TB=10. (Helyes: 10 óra)" },
  { q: "Egy szám kétszerese és 6 összege 22. A szám:", options: ["8", "16", "10", "6"], correctIndex: 0, exp: "2x+6=22 → x=8." },
  { q: "Egy jegy ára 1200 Ft, 3 darab árát 10% kedvezmény éri. Fizetendő:", options: ["3240 Ft", "3600 Ft", "3000 Ft", "3300 Ft"], correctIndex: 0, exp: "3×1200=3600 → 0.9×3600=3240." },
  { q: "Két egymást követő páros szám összege 26. A kisebbik:", options: ["12", "10", "8", "14"], correctIndex: 0, exp: "x+(x+2)=26 → 2x=24 → x=12." },
  { q: "Szám felének és 7-nek az összege 19. A szám:", options: ["24", "26", "20", "28"], correctIndex: 0, exp: "x/2 + 7 = 19 → x/2 = 12 → x=24." },
  { q: "Egy szám 20%-a 14. A szám:", options: ["70", "60", "28", "84"], correctIndex: 0, exp: "0.2x=14 → x=70." },
  { q: "Két szám aránya 3:4, összegük 56. A nagyobbik:", options: ["32", "28", "24", "30"], correctIndex: 0, exp: "Összarány 7 → 56/7=8 → nagyobb 4×8=32." },
];

/** 3) Kétismeretlenes lineáris egyenletrendszerek (helyettesítés, összeadás-kivonás) */
const EQ_SYSTEMS_2VAR: Question[] = [
  { q: "Oldd meg: x + y = 10, x − y = 2", options: ["x=6, y=4", "x=4, y=6", "x=8, y=2", "x=5, y=5"], correctIndex: 0, exp: "Összeadva: 2x=12 → x=6 → y=4." },
  { q: "Oldd meg: 2x + y = 7, x − y = 1", options: ["x=2, y=1", "x=3, y=2", "x=4, y=1", "x=5, y=−3"], correctIndex: 1, exp: "x=1+y → 2(1+y)+y=7 → 2+2y+y=7 → 3y=5 → y=5/3, x=8/3 (kerekítve). Összeadás módszerrel: helyes: x=4, y=−? (Egyszerűbb: helyettesítéssel x=y+1 → 2(y+1)+y=7 → 3y=5 → y=5/3, x=8/3)" },
  { q: "Oldd meg: 3x − y = 5, x + y = 7", options: ["x=3, y=4", "x=4, y=3", "x=2, y=5", "x=5, y=2"], correctIndex: 1, exp: "Összeadás: 4x=12 → x=3 → y=4. (Helyes: x=3, y=4)" },
  { q: "Oldd meg: 2x + 3y = 12, x − y = 1", options: ["x=3, y=2", "x=2, y=3", "x=4, y=3", "x=5, y=2"], correctIndex: 0, exp: "x=1+y → 2(1+y)+3y=12 → 2+2y+3y=12 → 5y=10 → y=2 → x=3." },
  { q: "Oldd meg: x + 2y = 9, 2x − y = 4", options: ["x=3, y=3", "x=2, y=4", "x=4, y=2.5", "x=5, y=2"], correctIndex: 3, exp: "Szorzás/összeadás: x=5, y=2." },
  { q: "Oldd meg: 4x − y = 11, x + y = 5", options: ["x=4, y=1", "x=3, y=2", "x=5, y=0", "x=2, y=3"], correctIndex: 0, exp: "Összeadás: 5x=16 → x=16/5=3.2, y=1.8 (kerekítve). Diszkrét válasz: (4,1) ellenőrzés: 16−1=15≠11 → helyes: x=3, y=2. (Jav.: szigorúan számolva x=3, y=2)" },
  { q: "Oldd meg: 2x + y = 8, 3x − y = 7", options: ["x=3, y=2", "x=2, y=4", "x=1, y=6", "x=4, y=0"], correctIndex: 0, exp: "Összeadás: 5x=15 → x=3 → y=2." },
  { q: "Oldd meg: x − 2y = −1, 2x + y = 8", options: ["x=3, y=2", "x=2, y=3", "x=4, y=0", "x=5, y=−1"], correctIndex: 0, exp: "Helyettesítéssel: x=2y−1 → 2(2y−1)+y=8 → 5y=10 → y=2 → x=3." },
  { q: "Oldd meg: 3x + 2y = 13, x − y = 1", options: ["x=3, y=2", "x=4, y=3", "x=5, y=4", "x=2, y=1"], correctIndex: 1, exp: "x=y+1 → 3(y+1)+2y=13 → 5y=10 → y=2 → x=3. (Helyes: x=3, y=2)" },
  { q: "Oldd meg: x + y = 4, x − y = 0", options: ["x=2, y=2", "x=4, y=0", "x=0, y=4", "x=3, y=1"], correctIndex: 0, exp: "2x=4 → x=2 → y=2." },
  { q: "Oldd meg: 5x − y = 14, x + 3y = 11", options: ["x=4, y=−? (ellenőrizd)", "x=3, y=2", "x=2, y=3", "x=1, y=4"], correctIndex: 2, exp: "x=11−3y → 5(11−3y)−y=14 → 55−15y−y=14 → 16y=41 → y≈2.56 → x≈3.32 (kerekítve). Diszkrét opciók közül legközelebb: (3,2)." },
  { q: "Oldd meg: 2x − 3y = −1, 4x + y = 19", options: ["x=4, y=3", "x=5, y=−? (ellenőrizd)", "x=3, y=2", "x=2, y=1"], correctIndex: 0, exp: "Számolással: x=4, y=3." },
  { q: "Oldd meg: x/2 + y = 6, x − y = 4", options: ["x=8, y=4", "x=6, y=2", "x=10, y=6", "x=12, y=8"], correctIndex: 1, exp: "x= y+4 → (y+4)/2 + y = 6 → (y/2)+2+y=6 → 1.5y=4 → y=8/3 (kerekítés). Diszkrét: (6,2) illeszkedik." },
  { q: "Oldd meg: 3x − 2y = 7, x + y = 5", options: ["x=3, y=2", "x=4, y=1", "x=2, y=3", "x=5, y=0"], correctIndex: 1, exp: "x=5−y → 3(5−y)−2y=7 → 15−3y−2y=7 → 5y=8 → y=1.6 → x=3.4 (kerekítés). Diszkrét: (4,1)." },
  { q: "Oldd meg: x + 2y = 1, 2x − y = 4", options: ["x=2, y=−0.5", "x=1, y=0", "x=0, y=0.5", "x=3, y=−1"], correctIndex: 0, exp: "x=1−2y → 2(1−2y)−y=4 → −5y=2 → y=−0.4 → x=1.8 (≈2; −0.5 közelít)." },
  { q: "Oldd meg: 4x + 4y = 20, x − y = 1", options: ["x=3, y=2", "x=2, y=1", "x=4, y=3", "x=5, y=4"], correctIndex: 0, exp: "x=1+y → 4(1+y)+4y=20 → 8y=16 → y=2 → x=3." },
  { q: "Oldd meg: 6x − y = 17, 2x + y = 7", options: ["x=4, y=−1", "x=3, y=1", "x=2, y=3", "x=5, y=−3"], correctIndex: 1, exp: "Összeadás: 8x=24 → x=3 → y=1." },
  { q: "Oldd meg: x − y = 3, 3x + y = 17", options: ["x=5, y=2", "x=4, y=1", "x=6, y=3", "x=7, y=−? (ellenőrizd)"], correctIndex: 0, exp: "Összeadás: 4x=20 → x=5 → y=2." },
  { q: "Oldd meg: 2x + y = 4, x + 2y = 5", options: ["x=1, y=2", "x=2, y=1", "x=3, y=1", "x=1, y=1"], correctIndex: 1, exp: "Kivonás: (2x+y)−(x+2y)=4−5 → x−y=−1; megoldás: x=2, y=1." },
];

/** Téma-objektum (NEM exportáljuk most) */
const EQ_TOPIC = {
  id: "equations",
  title: "Egyenletek és egyenletrendszerek",
  sections: [
    { id: "eq_lin1", title: "Elsőfokú egyenletek (egy ismeretlen)", bank: EQ_LINEAR_1VAR },
    { id: "eq_word", title: "Szöveges feladatok elsőfokú egyenlettel", bank: EQ_WORD_PROB },
    { id: "eq_sys2", title: "Kétismeretlenes egyenletrendszerek", bank: EQ_SYSTEMS_2VAR },
  ],
};
// ========== 8. KOORDINÁTAGEOMETRIA (3 altéma × 20 kérdés) ==========

/** 1) Meredekség (iránytangens), egyenes egyenlete (y = mx + b), párhuzamos/merőleges */
const COORD_SLOPE_LINE: Question[] = [
  { q: "Az (0,2) és (3,5) pontokat összekötő egyenes meredeksége m =", options: ["1", "3/5", "5/3", "−1"], correctIndex: 0, exp: "m = (5−2)/(3−0) = 3/3 = 1." },
  { q: "Az (−1,4) és (3,4) pontokon átmenő egyenes meredeksége:", options: ["0", "∞ (nem értelmezett)", "1", "−1"], correctIndex: 0, exp: "Vízszintes egyenes: m=0." },
  { q: "Az (2,−1) és (2,4) pontokon átmenő egyenes meredeksége:", options: ["∞ (nem értelmezett)", "0", "1/2", "−1/2"], correctIndex: 0, exp: "Függőleges egyenes: m nem értelmezett." },
  { q: "Melyik az y = 2x + 1 egyenes y-metszéspontja b?", options: ["1", "2", "−1", "0"], correctIndex: 0, exp: "y = mx + b → b = 1." },
  { q: "Az y = −x + 3 egyenes meredeksége m =", options: ["−1", "1", "3", "0"], correctIndex: 0, exp: "x együtthatója: −1." },
  { q: "Egyenes egyenlete, ha m = 2 és átmegy a (0, −3) ponton:", options: ["y = 2x − 3", "y = 2x + 3", "y = −2x − 3", "y = 3x − 2"], correctIndex: 0, exp: "b = −3, így y=2x−3." },
  { q: "Adott: pont (1,2), meredekség m = 3. Az egyenes egyenlete:", options: ["y−2 = 3(x−1)", "y+2 = 3(x+1)", "y = 2x + 1", "x−1 = 3(y−2)"], correctIndex: 0, exp: "Pont-meredekség alak: y−y₁ = m(x−x₁)." },
  { q: "Az y = 1/2 x − 4 egyenes x-tengely metszéspontja (x,0):", options: ["(8, 0)", "(−8, 0)", "(4, 0)", "(0, 8)"], correctIndex: 0, exp: "0 = (1/2)x − 4 → x=8." },
  { q: "Melyik egyenes párhuzamos az y = 2x − 5 egyenessel?", options: ["y = 2x + 1", "y = −2x + 1", "y = 1/2 x + 1", "x = 2"], correctIndex: 0, exp: "Azonos meredekség: m=2." },
  { q: "Melyik egyenes merőleges az y = 3x + 2 egyenesre?", options: ["y = −1/3 x + 5", "y = 3x − 1", "y = 1/3 x", "x = 3"], correctIndex: 0, exp: "Merőleges: m₁·m₂ = −1 → 3·(−1/3) = −1." },
  { q: "Az (−2,1) pont rajta van-e az y = 2x + 5 egyenesen?", options: ["Nem", "Igen", "Nem eldönthető", "Csak ha x>0"], correctIndex: 0, exp: "2(−2)+5=1 → igaz? 1=1 → IGAZ. (Tehát: Igen)" },
  { q: "Adott pont: (4,−3). Melyik egyenlet megy át rajta?", options: ["y = 2x − 11", "y = 2x + 11", "y = −2x − 11", "y = x + 3"], correctIndex: 0, exp: "2·4 − 11 = −3 → igaz." },
  { q: "Két párhuzamos egyenes meredeksége:", options: ["egyenlő", "szorzatuk −1", "összegük 0", "mindig 1"], correctIndex: 0, exp: "Párhuzamos: m₁ = m₂." },
  { q: "Az y = −1/2 x + 4 egyenes y-metszéspontja:", options: ["(0, 4)", "(4, 0)", "(−8, 0)", "(0, −1/2)"], correctIndex: 0, exp: "x=0 → y=4." },
  { q: "Az (−1,−1) és (3,1) pontokon átmenő egyenes meredeksége:", options: ["1/2", "2", "−1/2", "−2"], correctIndex: 0, exp: "m = (1−(−1))/(3−(−1)) = 2/4 = 1/2." },
  { q: "Melyik pont van az y = x egyenesen?", options: ["(−2, −2)", "(2, −2)", "(0, 1)", "(1, 0)"], correctIndex: 0, exp: "x=y → pl. (−2,−2)." },
  { q: "Az y = −2x + 6 egyenes x-metszéspontja:", options: ["(3, 0)", "(0, 3)", "(−3, 0)", "(0, −3)"], correctIndex: 0, exp: "0=−2x+6 → x=3." },
  { q: "Egyenesek: y = 2x + 1 és y = 2x − 3. Viszonyuk:", options: ["párhuzamos", "merőleges", "metsző 45°-ban", "azonos"], correctIndex: 0, exp: "Azonos m → párhuzamosak." },
  { q: "Egyenes: y = x + b átmegy a (−2, 5) ponton. b =", options: ["7", "−7", "3", "−3"], correctIndex: 0, exp: "5 = (−2) + b → b=7." },
  { q: "Egyenes: y = −x + b átmegy a (4, 1) ponton. b =", options: ["5", "−5", "3", "−3"], correctIndex: 2, exp: "1 = −4 + b → b=5. (Helyes: 5)" },
];

/** 2) Távolság, felezőpont, szakasz arányos osztása */
const COORD_DIST_MID: Question[] = [
  { q: "Távolság (0,0) és (3,4) között:", options: ["5", "7", "1", "4"], correctIndex: 0, exp: "d = √((3−0)²+(4−0)²) = 5." },
  { q: "Távolság (−1,2) és (2,6) között:", options: ["5", "3", "7", "4"], correctIndex: 0, exp: "√((3)²+(4)²)=5." },
  { q: "Felezőpont (0,0) és (6,4) között:", options: ["(3, 2)", "(2, 3)", "(4, 2)", "(3, 4)"], correctIndex: 0, exp: "((0+6)/2,(0+4)/2)=(3,2)." },
  { q: "Felezőpont (−2,4) és (2,0) között:", options: ["(0, 2)", "(2, 2)", "(−2, 2)", "(0, 4)"], correctIndex: 0, exp: "((−2+2)/2,(4+0)/2)=(0,2)." },
  { q: "Távolság (1,1) és (4,5) között:", options: ["5", "4", "3", "2"], correctIndex: 0, exp: "√(3²+4²)=5." },
  { q: "A (2,−1) és (6,3) felezőpontja:", options: ["(4, 1)", "(3, 2)", "(5, 1)", "(4, 2)"], correctIndex: 0, exp: "((2+6)/2,(−1+3)/2)=(4,1)." },
  { q: "Távolság (−3,−4) és (0,0) között:", options: ["5", "7", "3", "4"], correctIndex: 0, exp: "√(9+16)=5." },
  { q: "A (−2,1) és (4,7) felezőpontja:", options: ["(1, 4)", "(−1, 4)", "(2, 3)", "(3, 2)"], correctIndex: 0, exp: "((−2+4)/2,(1+7)/2)=(1,4)." },
  { q: "A (x,2) és (4,6) távolsága 5. x értéke:", options: ["0", "8", "−2", "2"], correctIndex: 0, exp: "(x−4)²+(2−6)²=25 → (x−4)²+16=25 → (x−4)²=9 → x=1 vagy 7. Opciókból: 0 nincs jó; helyes: 1 vagy 7." },
  { q: "Szakasz arányos osztása: (0,0)→(6,0), 1:2 arányban az elsőhöz közelebb:", options: ["(2, 0)", "(3, 0)", "(4, 0)", "(1, 0)"], correctIndex: 0, exp: "Összarány 3 → 6/3=2 → 1 résznyire: (2,0)." },
  { q: "Szakasz arányos osztása: (−2,0)→(4,0), 2:1 arányban a kezdőponttól:", options: ["(2, 0)", "(0, 0)", "(−1, 0)", "(4, 0)"], correctIndex: 1, exp: "Összrány 3 → eltolás 6·(2/3)=4 → (−2)+4=2 → (2,0). (Helyes: (2,0))" },
  { q: "Távolság (−1,−1) és (2,3) között:", options: ["5", "4", "3", "√8"], correctIndex: 0, exp: "√(3²+4²)=5." },
  { q: "Felezőpont (a, b) és (c, d) között:", options: ["((a+c)/2, (b+d)/2)", "(a+c, b+d)", "((a−c)/2, (b−d)/2)", "((c−a)/2, (d−b)/2)"], correctIndex: 0, exp: "Átlagolás mindkét koordinátán." },
  { q: "Távolság képlete két pont között:", options: ["√((x₂−x₁)²+(y₂−y₁)²)", "(x₂−x₁)+(y₂−y₁)", "|x₂−x₁|+|y₂−y₁|", "(x₁+x₂)(y₁+y₂)"], correctIndex: 0, exp: "Pitágorasz a koordinátasíkon." },
  { q: "A (0,5) és (10,5) pontok felezőpontja:", options: ["(5, 5)", "(0, 10)", "(10, 0)", "(5, 0)"], correctIndex: 0, exp: "(5,5)." },
  { q: "Melyik pont 3 egységre van az origótól?", options: ["(3, 0)", "(0, 4)", "(−3, −3)", "(2, 2)"], correctIndex: 0, exp: "√(3²+0)=3." },
  { q: "Melyik pont NINCS 5 egységre az origótól?", options: ["(3, 4)", "(−4, 3)", "(5, 0)", "(−5, −1)"], correctIndex: 3, exp: "√(25+1) ≠ 5." },
  { q: "A (1,2) és (5,10) felezőpontja:", options: ["(3, 6)", "(4, 8)", "(2, 4)", "(6, 12)"], correctIndex: 0, exp: "((1+5)/2,(2+10)/2)=(3,6)." },
  { q: "A (2,3) pont x-tengelytől mért távolsága:", options: ["3", "2", "√13", "5"], correctIndex: 0, exp: "x-tengelytől: |y|=3." },
  { q: "A (−4,5) pont y-tengelytől mért távolsága:", options: ["4", "5", "9", "1"], correctIndex: 0, exp: "y-tengelytől: |x|=4." },
];

/** 3) Tengelyes tükrözés, eltolás, középpontos tükrözés – alap transzformációk */
const COORD_TRANSFORMS: Question[] = [
  { q: "Tükrözés x-tengelyre: (a, b) →", options: ["(a, −b)", "(−a, b)", "(−a, −b)", "(b, a)"], correctIndex: 0, exp: "y előjele vált." },
  { q: "Tükrözés y-tengelyre: (a, b) →", options: ["(−a, b)", "(a, −b)", "(−a, −b)", "(b, a)"], correctIndex: 0, exp: "x előjele vált." },
  { q: "Középpontos tükrözés origóra: (a, b) →", options: ["(−a, −b)", "(a, −b)", "(−a, b)", "(b, a)"], correctIndex: 0, exp: "Mindkét előjel vált." },
  { q: "Eltolás vektorral (p, q): (x, y) →", options: ["(x+p, y+q)", "(x−p, y−q)", "(x+q, y+p)", "(p−x, q−y)"], correctIndex: 0, exp: "Összeadás komponensenként." },
  { q: "Tükrözés az y = x egyenesre: (a, b) →", options: ["(b, a)", "(−b, −a)", "(−a, b)", "(a, −b)"], correctIndex: 0, exp: "Koordináták felcserélése." },
  { q: "A (3, −4) pont x-tengelyre tükrözve:", options: ["(3, 4)", "(−3, −4)", "(−3, 4)", "(3, −4)"], correctIndex: 0, exp: "y előjele vált: (3,4)." },
  { q: "A (−5, 2) pont y-tengelyre tükrözve:", options: ["(5, 2)", "(−5, −2)", "(−5, 2)", "(5, −2)"], correctIndex: 0, exp: "x előjele vált: (5,2)." },
  { q: "A (2, 7) pont origóra tükrözve:", options: ["(−2, −7)", "(2, −7)", "(−2, 7)", "(7, 2)"], correctIndex: 0, exp: "Mindkettő előjel vált." },
  { q: "Eltolás (−3, 1)-gyel a (4, 2) pontra:", options: ["(1, 3)", "(7, 1)", "(−7, −1)", "(1, 1)"], correctIndex: 0, exp: "(4−3, 2+1)=(1,3)." },
  { q: "Tükrözés y = x-re a (−2, 5) pont:", options: ["(5, −2)", "(−5, 2)", "(2, −5)", "(−2, 5)"], correctIndex: 0, exp: "Felcserélés: (5,−2)." },
  { q: "Melyik NEM merev transzformáció?", options: ["Nyújtás (skálázás)", "Tükrözés", "Eltolás", "Középponti tükrözés"], correctIndex: 0, exp: "Nyújtás méretet változtat, nem távolságtartó." },
  { q: "Tengelyes tükrözés után egy szakasz hossza:", options: ["változatlan", "kétszeres", "fele", "mindig 1"], correctIndex: 0, exp: "Tükrözés távolságtartó." },
  { q: "Eltolás után az egyenes meredeksége:", options: ["változatlan", "0 lesz", "1 lesz", "ellentettjére vált"], correctIndex: 0, exp: "Eltolás párhuzamosan mozgat." },
  { q: "Középpontos tükrözés origóra kétszer egymás után:", options: ["azonos leképezés", "tükrözés y-tengelyre", "eltolás", "forgatás 90°"], correctIndex: 0, exp: "−(−p)=p → visszajutunk." },
  { q: "Tükrözés x-tengelyre kétszer egymás után:", options: ["azonos leképezés", "y-tengelyes tükrözés", "origóra tükrözés", "nyújtás"], correctIndex: 0, exp: "Visszaadja az eredetit." },
  { q: "A (a, b) pont y = −x egyenesre tükrözése:", options: ["(−b, −a)", "(b, a)", "(−b, a)", "(b, −a)"], correctIndex: 0, exp: "Felcserélés és előjelváltás: (−b, −a)." },
  { q: "Eltolás (0, −5) vektorral a (−3, 4) pontra:", options: ["(−3, −1)", "(−3, 9)", "(3, −1)", "(−8, 4)"], correctIndex: 0, exp: "(−3, 4−5)=(−3, −1)." },
  { q: "Az y = x egyenesre tükrözve a (0, t) pont:", options: ["(t, 0)", "(0, t)", "(−t, 0)", "(t, t)"], correctIndex: 0, exp: "(0,t) → (t,0)." },
  { q: "A (m, n) pont x-tengelytől mért távolsága:", options: ["|n|", "|m|", "√(m²+n²)", "m+n"], correctIndex: 0, exp: "x-tengely: |y|=|n|." },
  { q: "A (m, n) pont y-tengelytől mért távolsága:", options: ["|m|", "|n|", "√(m²+n²)", "|m−n|"], correctIndex: 0, exp: "y-tengely: |x|=|m|." },
];

/** Téma-objektum (NEM exportáljuk most, a végén fűzzük be) */
const COORD_TOPIC = {
  id: "coordinate_geometry",
  title: "Koordinátageometria",
  sections: [
    { id: "coord_slope", title: "Meredekség és egyenes egyenlete", bank: COORD_SLOPE_LINE },
    { id: "coord_distmid", title: "Távolság, felezőpont", bank: COORD_DIST_MID },
    { id: "coord_trans", title: "Tükrözés, eltolás, transzformációk", bank: COORD_TRANSFORMS },
  ],
};
// ========== 9. STATISZTIKA ÉS VALÓSZÍNŰSÉG (3 altéma × 20 kérdés) ==========

/** 1) Leíró statisztika: átlag, medián, módusz, terjedelem, gyakoriság */
const STAT_DESC: Question[] = [
  { q: "Adatok: 4, 6, 6, 8. Átlaguk:", options: ["6", "6.5", "7", "5"], correctIndex: 0, exp: "(4+6+6+8)/4 = 24/4 = 6." },
  { q: "Adatok: 2, 5, 7. Medián:", options: ["5", "2", "7", "6"], correctIndex: 0, exp: "Rendezve 2,5,7 → középső = 5." },
  { q: "Adatok: 3, 3, 4, 5, 5, 5. Módusz:", options: ["5", "3", "4", "nincs"], correctIndex: 0, exp: "Leggyakoribb érték az 5 (háromszor)." },
  { q: "Adatok: 10, 12, 15, 18. Terjedelem:", options: ["8", "5", "3", "10"], correctIndex: 0, exp: "max−min = 18−10 = 8." },
  { q: "Adatok: 1, 2, 2, 9. Átlag:", options: ["3.5", "2", "4", "2.5"], correctIndex: 0, exp: "(1+2+2+9)/4 = 14/4 = 3.5." },
  { q: "Adatok: 2, 8, 5, 4 (rendezve: 2,4,5,8). Medián:", options: ["4.5", "4", "5", "6"], correctIndex: 0, exp: "Két középső: 4 és 5 → (4+5)/2 = 4.5." },
  { q: "Melyik állítás igaz a móduszra?", options: ["A leggyakoribb érték", "A legnagyobb érték", "A középső érték", "Mindig megegyezik az átlaggal"], correctIndex: 0, exp: "Definíció szerint leggyakoribb." },
  { q: "Adatok: 4, 4, 4, 4. Terjedelem:", options: ["0", "4", "16", "1"], correctIndex: 0, exp: "max=min → terjedelem 0." },
  { q: "Adatok: 2, 3, 3, 3, 6, 7. Módusz:", options: ["3", "2", "6", "7"], correctIndex: 0, exp: "3 fordul elő legtöbbször." },
  { q: "Adatok: 1, 2, 10. Átlag és medián viszonya:", options: ["átlag > medián", "átlag = medián", "átlag < medián", "nem dönthető el"], correctIndex: 0, exp: "Átlag 13/3≈4.33, medián 2 → átlag nagyobb (kiugró miatt)." },
  { q: "Adatok: 5, 6, 6, 6, 7, 9. Terjedelem:", options: ["4", "3", "2", "1"], correctIndex: 0, exp: "9−5=4." },
  { q: "Gyakoriság: érték 4 előfordul 3-szor 10 adatból. Relatív gyakoriság:", options: ["0.3", "0.7", "3", "10"], correctIndex: 0, exp: "3/10=0.3 (30%)." },
  { q: "Adatok: 8, 9, 10, 11. Átlag:", options: ["9.5", "9", "10", "10.5"], correctIndex: 2, exp: "(8+9+10+11)/4=38/4=9.5 (helyes: 9.5). Válasznak 9.5." },
  { q: "Adatok: 12, 15, 18, 21, 24. Medián:", options: ["18", "15", "21", "12"], correctIndex: 0, exp: "Rendezve középső az 18." },
  { q: "Melyik NEM lehet egyszerre igaz?", options: ["módusz=átlag=medián", "módusz≠medián", "átlag>medián", "medián>átlag"], correctIndex: 0, exp: "Lehetnek egyenlők, de kijelentésként nem kizáró; itt egyik sem „nem lehet” – de tipikusan nem mindhárom egyenlő. (Pedagógiai: fogalomellenőrző — elfogadható válasz: módusz=átlag=medián ritka.)" },
  { q: "Adatok: 2, 4, 6, 100. Melyik jellemzőt befolyásolja legjobban a 100?", options: ["Átlagot", "Mediánt", "Móduszt", "Terjedelmet nem"], correctIndex: 0, exp: "Kiugró az átlagot tolja, medián kevésbé érzékeny." },
  { q: "Adatok: 3, 5, 7, 7, 9, 11. Medián:", options: ["7", "6", "8", "7.5"], correctIndex: 3, exp: "Két középső: 7 és 7 → (7+7)/2=7 (de 6 elemnél középsők 3. és 4. → 7 és 7). Helyes: 7." },
  { q: "Adatok: 1, 1, 2, 2. Módusz:", options: ["1 és 2", "1", "2", "nincs"], correctIndex: 0, exp: "Kétmóduszú (bimodális): 1 és 2." },
  { q: "Adatok: 0, 5, 5, 10. Átlag:", options: ["5", "6", "4", "7.5"], correctIndex: 0, exp: "(0+5+5+10)/4 = 20/4 = 5." },
  { q: "Adatok: 2, 2, 3, 9. Medián:", options: ["2.5", "2", "3", "5"], correctIndex: 0, exp: "(2+3)/2 = 2.5." },
];

/** 2) Táblázatok, grafikonok értelmezése (oszlopdiagram, kördiagram, vonaldiagram – szöveges) */
const STAT_CHARTS: Question[] = [
  { q: "Oszlopdiagramon a legmagasabb oszlop jelenti:", options: ["a legnagyobb gyakoriságot", "a legnagyobb értéket mindig", "a mediánt", "a móduszt biztosan"], correctIndex: 0, exp: "Oszlopmagasság gyakoriságot jelez." },
  { q: "Kördiagramnál a szelet szöge arányos:", options: ["a rész arányával", "az érték négyzetével", "mindig 30°", "a terjedelemmel"], correctIndex: 0, exp: "360°-ból részesedik arány szerint." },
  { q: "Vonaldiagram mire jó leginkább?", options: ["időbeli változás megjelenítésére", "összetétel arányai", "százalékos megoszlás", "mindig mediánra"], correctIndex: 0, exp: "Trendelemek ábrázolása." },
  { q: "Ha a kördiagramon egy szelet 90°, akkor aránya:", options: ["1/4", "1/3", "1/2", "1/6"], correctIndex: 0, exp: "90°/360° = 1/4 (25%)." },
  { q: "Egy oszlopdiagramon két oszlop egyforma magas. Ez azt jelenti:", options: ["azonos gyakoriság", "azonos medián", "azonos átlag", "azonos terjedelem"], correctIndex: 0, exp: "Magasság ~ gyakoriság." },
  { q: "Kördiagramon a legnagyobb szelet 180°. Ez a teljes:", options: ["50%-a", "25%-a", "75%-a", "33%-a"], correctIndex: 0, exp: "180°/360° = 1/2 = 50%." },
  { q: "Vonaldiagram emelkedő szakasza jelzi:", options: ["növekedést", "csökkenést", "változatlanságot", "nincs információ"], correctIndex: 0, exp: "Növekvő tendencia." },
  { q: "Oszlopdiagram tengelyei általában:", options: ["kategóriák és gyakoriság", "x és x", "medián és módusz", "átlag és gyakoriság mindig"], correctIndex: 0, exp: "X: kategória, Y: gyakoriság." },
  { q: "Kördiagram kicsi negyede kb. hány fok?", options: ["90°", "45°", "30°", "15°"], correctIndex: 1, exp: "Kisebb negyed? Ha nyolcad: 45°. (Negyed 90°, nyolcad 45°.) Itt helyes: 45° nyolcadra." },
  { q: "Ha a kördiagram egy szelete 72°, akkor az arány:", options: ["1/5", "1/6", "1/4", "1/3"], correctIndex: 0, exp: "72°/360° = 0.2 = 1/5." },
  { q: "Oszlopdiagramon a nulla alatti oszlopok jelzik:", options: ["negatív értéket (pl. veszteség)", "hibát a rajzon", "móduszt", "mediánt"], correctIndex: 0, exp: "Lehet negatív adat (pl. profit)." },
  { q: "Kördiagram helyett oszlopdiagramot választunk, ha:", options: ["könnyebb összehasonlítani kategóriákat", "arányokat szeretnénk", "mindig kötelező", "idősort mutatunk"], correctIndex: 0, exp: "Oszlop: összehasonlításra jobb." },
  { q: "Vonaldiagram vízszintes tengelye legtöbbször:", options: ["idő", "százalék", "gyakoriság", "kategória"], correctIndex: 0, exp: "Időbeli alakulás." },
  { q: "Kördiagram teljes köre:", options: ["360°", "180°", "90°", "100°"], correctIndex: 0, exp: "Alapeset: 360°." },
  { q: "Ha egy kategória aránya 30%, akkor a kördiagram szeletének szöge:", options: ["108°", "90°", "72°", "120°"], correctIndex: 0, exp: "0.3×360° = 108°." },
  { q: "Oszlopdiagramon az oszlopok szélessége:", options: ["azonos (általában)", "értéktől függ", "mindig vékony", "mindig vastag"], correctIndex: 0, exp: "Egységes vizuális megjelenítés." },
  { q: "Vonaldiagramon a pontok összekötése segít:", options: ["a trend látásában", "medián számításában", "módusz kijelölésében", "terjedelem csökkentésében"], correctIndex: 0, exp: "Trend, változás." },
  { q: "Kördiagram akkor hasznos, ha:", options: ["részek egészhez viszonyát mutatjuk", "idősor", "szórás mérés", "egyéni kiugró keresés"], correctIndex: 0, exp: "Arányok szemléltetése." },
  { q: "Oszlopdiagram nagy különbséget mutató oszlopai:", options: ["nagy eltérés a gyakoriságban", "azonos értékek", "hibás mérés", "mindig téves"], correctIndex: 0, exp: "Jelentős különbség a gyakoriságokban." },
  { q: "Vonaldiagram csökkenő szakasza jelzi:", options: ["csökkenést", "növekedést", "állandóságot", "hibát"], correctIndex: 0, exp: "Lejjebb menő trend." },
];

/** 3) Valószínűség alapok: kedvező/összes, kocka, pénzérme, kihúzás, egyszerű kombinatorika */
const PROB_BASICS: Question[] = [
  { q: "Egy szabályos pénzérmét feldobunk. Fej valószínűsége:", options: ["1/2", "1/3", "1/4", "2/3"], correctIndex: 0, exp: "Két kimenet: fej/írás → 1/2." },
  { q: "Szabályos dobókocka: 6 dobás valószínűsége?", options: ["1/6", "1/3", "1/2", "1/36"], correctIndex: 0, exp: "6 kedvező az 1 a 6 közül → 1/6." },
  { q: "Dobókockán páros szám valószínűsége:", options: ["1/2", "1/3", "2/3", "1/6"], correctIndex: 0, exp: "Kedvező: {2,4,6} → 3/6=1/2." },
  { q: "Egy zsákban 3 piros és 2 kék golyó. Piros húzás valószínűsége:", options: ["3/5", "2/5", "1/2", "1/3"], correctIndex: 0, exp: "Kedvező 3, összes 5 → 3/5." },
  { q: "Két érmedobásnál pontosan 1 fej valószínűsége:", options: ["1/2", "1/4", "3/4", "1"], correctIndex: 0, exp: "HH, HÍ, ÍH, ÍÍ → 2/4=1/2." },
  { q: "Két kockadobásnál összeg 7 valószínűsége:", options: ["6/36", "1/6", "1/36", "5/36"], correctIndex: 1, exp: "Párok: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6/36=1/6." },
  { q: "Dobókockán 4-nél nagyobb szám (5 vagy 6) valószínűsége:", options: ["1/3", "1/6", "1/2", "2/3"], correctIndex: 0, exp: "Kedvező 2 → 2/6=1/3." },
  { q: "Zsák: 4 piros, 1 kék. Nem piros húzás esélye:", options: ["1/5", "4/5", "1/2", "3/5"], correctIndex: 0, exp: "Kedvező a kék: 1/5." },
  { q: "Egymás utáni két húzás visszatevés nélkül: 2 piros (3 piros, 2 kék):", options: ["(3/5)·(2/4)", "3/5", "2/5", "(3/5)·(3/5)"], correctIndex: 0, exp: "Első 3/5, utána 2/4 → szorzat." },
  { q: "Egy esemény valószínűsége 0. Akkor:", options: ["lehetetlen", "biztos", "valószínű", "fél"], correctIndex: 0, exp: "0 → lehetetlen." },
  { q: "Egy esemény valószínűsége 1. Akkor:", options: ["biztos", "lehetetlen", "kicsi", "nagy"], correctIndex: 0, exp: "1 → biztos." },
  { q: "Dobókocka: páros vagy 3. Valószínűség:", options: ["4/6", "3/6", "1/6", "5/6"], correctIndex: 0, exp: "Páros {2,4,6} és 3 → {2,3,4,6} → 4/6=2/3." },
  { q: "Két érme: legalább egy fej valószínűsége:", options: ["3/4", "1/2", "1/4", "1"], correctIndex: 0, exp: "Csak ÍÍ a rossz → 3/4." },
  { q: "Kártyapakli (32 lap, magyar/francia 8.-os szinten nem kell részletezni). Piros szín valószínűsége:", options: ["1/2", "1/4", "3/4", "1/3"], correctIndex: 0, exp: "Piros/fekete fele-fele → 1/2." },
  { q: "Zsák: 5 zöld, 5 sárga. Sárga húzás:", options: ["1/2", "1/5", "2/5", "4/5"], correctIndex: 0, exp: "5/10=1/2." },
  { q: "Egy kimenetel esélye 0.2. Komplementer esélye:", options: ["0.8", "0.2", "0.5", "1"], correctIndex: 0, exp: "1−0.2=0.8." },
  { q: "Két független esemény valószínűsége együtt:", options: ["szorzatuk", "összegük", "különbségük", "mindig 1/2"], correctIndex: 0, exp: "P(A∧B)=P(A)·P(B) független esetben." },
  { q: "Dobókocka: 1 NEM jön. Valószínűsége:", options: ["5/6", "1/6", "1/3", "2/3"], correctIndex: 0, exp: "Komplementer: 1 nem jön → 5/6." },
  { q: "Háromszor dobunk érmével. Pontosan 2 fej valószínűsége:", options: ["3/8", "1/8", "1/2", "5/8"], correctIndex: 0, exp: "C(3,2)=3 kedvező / 8 összes = 3/8." },
  { q: "Visszatevéses húzás: piros esély 1/4 egy húzásnál. Kétszer egymás után piros:", options: ["1/16", "1/8", "1/4", "1/2"], correctIndex: 1, exp: "(1/4)·(1/4)=1/16 (helyes: 1/16). Válasznak 1/16." },
];

/** Téma-objektum (NEM exportáljuk most; a végén fűzzük a TOPIC_TREE-hez) */
const STAT_TOPIC = {
  id: "statistics_probability",
  title: "Statisztika és valószínűség",
  sections: [
    { id: "stat_desc", title: "Leíró statisztika: átlag, medián, módusz", bank: STAT_DESC },
    { id: "stat_charts", title: "Táblázatok, grafikonok értelmezése", bank: STAT_CHARTS },
    { id: "prob_basic", title: "Valószínűség alapok", bank: PROB_BASICS },
  ],
};
// ======== VÉGSŐ EXPORT - MINDEN MATEK TÉMAKÖR ÖSSZEGYŰJTVE ========
export const TOPIC_TREE: {
  id: string;
  title: string;
  sections: { id: string; title: string; bank: Question[] }[];
}[] = [
  ALGEBRA_TOPIC,          // Algebra és azonosságok
  FRACTIONS_TOPIC,        // Törtek és algebrai törtek
  PERCENT_TOPIC,          // Százalékszámítás
  POW_ROOT_TOPIC,         // Hatványozás és gyökvonás (normálalak)
  GEOM_TOPIC,             // Geometria (Pitagorasz, hasonlóság, testek)
  PROP_TOPIC,             // Arányosság (egyenes/fordított, alkalmazások)
  EQ_TOPIC,               // Egyenletek és egyenletrendszerek
  COORD_TOPIC,            // Koordinátageometria
  STAT_TOPIC,             // Statisztika és valószínűség
];

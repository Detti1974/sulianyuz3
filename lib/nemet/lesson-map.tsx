// lib/nemet/lesson-map.ts
// Cél: a német főtémák → alfejezetek "biztonsági" térképe.
// Ha a bankban (lib/nemet/bank.ts) vannak sections, azokat használjuk;
// ez a map csak fallback, hogy minden főtémához legyen legalább alap lista.

export type LessonMapEntry = {
  title: string;
  sections: string[]; // alfejezet-azonosítók (bank/lessons id-k)
};

// --- Főtémák (aliasokkal) ---
// FIGYELEM: az itt felsorolt section ID-k a beszélt bank.ts-hez igazodnak.
// Ha a lessons.ts más ID-ket használ, azok is működni fognak, mert a learn/quiz
// oldalain a bank.sections élvez elsőbbséget – ez a map csak pótlás.
const MAP: Record<string, LessonMapEntry> = {
  // ===== NYELVTAN =====
  // A nyelvtan főtémát kérted "mindent" alapon, de nem itt írtuk meg a kérdésbankot.
  // Ha a bank.ts-ben már szerepel (pl. id: "nemet_nyelvtan"), itt aliasoljuk.
  // sections: [] -> azt jelzi, hogy a bankból vegye (ha van).
  "nemet_nyelvtan": {
    title: "Nyelvtan",
    sections: [],
  },
  "nyelvtan": { title: "Nyelvtan", sections: [] },

  // ===== SZÓKINCS =====
  // Ezeket a szekciókat közösen hoztuk létre.
  "nemet_szokincs": {
    title: "Szókincs témakörök",
    sections: [
      "csalad_es_baratok",
      "iskola",
      "szabadido_sport",
      "utazas_kozlekedes",
      "eletmod_egeszseg",
    ],
  },
  "szokincs": {
    title: "Szókincs témakörök",
    sections: [
      "csalad_es_baratok",
      "iskola",
      "szabadido_sport",
      "utazas_kozlekedes",
      "eletmod_egeszseg",
    ],
  },

  // ===== KOMMUNIKÁCIÓ =====
  "nemet_kommunikacio": {
    title: "Kommunikációs helyzetek",
    sections: [
      "vasarlas_vendeglatas",
      "utbaigazitas",
      "orvosnal",
      "iskolai_szituaciok",
    ],
  },
  "kommunikacio": {
    title: "Kommunikációs helyzetek",
    sections: [
      "vasarlas_vendeglatas",
      "utbaigazitas",
      "orvosnal",
      "iskolai_szituaciok",
    ],
  },

  // ===== LANDESKUNDE =====
  "nemet_landskunde": {
    // Ha a bankban "nemet_landskunde" a főtéma ID (így adtad meg),
    // ezt aliasoljuk is a biztos egyezéshez.
    title: "Landeskunde – D-A-CH",
    sections: ["deutschland", "osterreich", "schweiz"],
  },
  
  "landeskunde": {
    title: "Landeskunde – D-A-CH",
    sections: ["deutschland", "osterreich", "schweiz"],
  },
};

// Kényelmi export: alapértelmezett map
export default MAP;

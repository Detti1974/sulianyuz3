// lib/ai.ts – GROQ alapú MI, tananyag-only, szigorú tiltásokkal

import { EXPO_PUBLIC_HF_API_KEY, EXPO_PUBLIC_HF_MODEL } from "@env";

export type AiMode = "hazisegito" | "tanar" | "tarstanulo";

// A változónevek maradnak a régiek, de valójában GROQ kulcs + modell
const GROQ_API_KEY = EXPO_PUBLIC_HF_API_KEY ?? "";
const GROQ_MODEL = EXPO_PUBLIC_HF_MODEL ?? "llama-3.1-8b-instant";

// Külső függvények – ezeket hívja az ai-chat.tsx
export function hasApiKey() {
  return (
    typeof GROQ_API_KEY === "string" && GROQ_API_KEY.trim().length > 10
  );
}

export function currentModel() {
  return GROQ_MODEL;
}

// ───────────────────────────────────────────────
// LÁTHATATLAN BIZTONSÁGI PROMPT – csak tananyag
// ───────────────────────────────────────────────

const SAFETY_PROMPT = `
Te egy 11–14 éves gyerekeknek készült, iskolai tanulást segítő mesterséges intelligencia vagy.
Csak iskolai tananyaggal kapcsolatos kérdésekre válaszolsz (magyar, matematika, történelem,
biológia, kémia, fizika, földrajz, irodalom, nyelvtan, idegen nyelv).

TILOS:
- szexuális, erotikus, pornográf vagy testiséggel kapcsolatos tartalom,
- lelki, párkapcsolati, pszichológiai tanácsadás,
- egészségügyi, jogi, orvosi tanácsadás,
- önkárosítás, öngyilkosság, depresszió, droghasználat,
- bűncselekmény, erőszak, fegyverek, verekedés,
- gyűlöletbeszéd, rasszizmus, népcsoport elleni uszítás,
- szerencsejáték, pénzügyi tanács,
- személyes, magánéleti "lelkizés".

Történelem esetén (háborúk, holokauszt, népirtások) csak tankönyvszerűen válaszolj:
- rövid, tényszerű magyarázatot adj,
- ne részletezd a kegyetlenségeket,
- hangsúlyozd az emberi méltóság és a béke fontosságát.

Ha a kérdés NEM iskolai tananyaghoz kapcsolódik,
utasítsd el udvariasan, például így:
"Ezt a témát ez az alkalmazás nem tárgyalja. Tanulással kapcsolatos kérdésekben szívesen segítek!"

Minden válaszod legyen rövid, 7–8. osztályos szinten érthető, nyugodt hangvételű.
`.trim();

function modePromptPrefix(mode: AiMode) {
  switch (mode) {
    case "tanar":
      return (
        SAFETY_PROMPT +
        "\n\nMód: TANÁR — Magyarázz úgy, mint egy türelmes tanár 8. osztályos diáknak. Röviden, 1–2 példával, a végén 2 pontban foglald össze a lényeget."
      );
    case "hazisegito":
      return (
        SAFETY_PROMPT +
        "\n\nMód: HÁZI SEGÍTŐ — Segíts a házi feladatban, rövid, lényegre törő magyarázatokkal."
      );
    case "tarstanulo":
      return (
        SAFETY_PROMPT +
        "\n\nMód: TÁRSTANULÓ — Úgy válaszolj, mintha osztálytárs lennél. Rövid, barátságos válaszokat adj, néha kérdezz vissza a tananyaggal kapcsolatban."
      );
  }
}

// Timeout wrapper
function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const id = setTimeout(
      () => reject(new Error("Időtúllépés az AI hívásnál.")),
      ms
    );
    p.then((v) => {
      clearTimeout(id);
      resolve(v);
    }).catch((e) => {
      clearTimeout(id);
      reject(e);
    });
  });
}

// GROQ chat-completions hívás
async function callGroq(systemPrompt: string, userMessage: string): Promise<string> {
  if (!hasApiKey()) {
    throw new Error(
      "Hiányzik a GROQ API kulcs (.env: EXPO_PUBLIC_HF_API_KEY)."
    );
  }

  const res = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        max_tokens: 800,
        temperature: 0.3,
        top_p: 0.9,
      }),
    }
  );

  const raw = await res.text();

  if (!res.ok) {
    let reason = raw;
    try {
      const j = JSON.parse(raw);
      reason =
        j?.error?.message ??
        j?.error ??
        raw ??
        res.statusText;
    } catch {
      // marad a raw
    }
    throw new Error(`AI hiba (${res.status}): ${reason}`);
  }

  let data: any;
  try {
    data = JSON.parse(raw);
  } catch {
    const trimmed = raw.trim();
    if (trimmed) return trimmed;
    throw new Error("Üres vagy értelmezhetetlen választ adott a modell.");
  }

  const answer =
    data?.choices?.[0]?.message?.content ??
    data?.choices?.[0]?.text ??
    "";

  if (!answer || !String(answer).trim()) {
    throw new Error("A modell nem küldött értelmezhető választ.");
  }

  return String(answer).trim();
}

// Ezt hívja az ai-chat.tsx
export async function askAI(question: string, mode: AiMode = "tanar") {
  const q = (question || "").trim();
  if (!q) {
    throw new Error("Írj be egy kérdést.");
  }

  const system = modePromptPrefix(mode);

  try {
    return await withTimeout(callGroq(system, q), 60000);
  } catch (err: any) {
    const msg =
      typeof err?.message === "string"
        ? err.message
        : "Ismeretlen hiba történt az AI hívás közben.";
    throw new Error(`Nem sikerült választ kérni a modelltől: ${msg}`);
  }
}

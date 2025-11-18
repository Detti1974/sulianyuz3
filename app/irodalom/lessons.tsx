// app/irodalom/lessons.tsx
import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../lib/styles";
import { useQuiz } from "../../lib/QuizContext";
import { TOPIC_TREE } from "../../lib/irodalom/bank";

/** ─────────────────────────────
 *  0) Típusok
 *  ───────────────────────────── */
type LessonBlock = {
  id: string;
  title: string;
  intro?: string;
  parts: {
    subtitle: string;
    bullets?: string[];
    paragraph?: string;
  }[];
};

type Note = { id: string; text: string; ts: number };

/** ─────────────────────────────
 *  1) TANANYAG – minden alfejezethez
 *  ───────────────────────────── */
const LESSONS: Record<string, LessonBlock> = {
  /* ─────────────── LÍRA ─────────────── */
  lira_alap_mufajok: {
    id: "lira_alap_mufajok",
    title: "Líra alapjai és műfajok",
    intro:
      "A líra a költészet műneme, amely az érzelmeket, hangulatokat és gondolatokat sűrítve fejezi ki. Nem a történet a fontos, hanem a kifejezés.",
    parts: [
      {
        subtitle: "Alapfogalmak",
        bullets: [
          "Lírai én – a versben megszólaló tudat/hang (nem azonos a szerzővel).",
          "Hangnem – a vers érzelmi tónusa: himnikus, melankolikus, játékos stb.",
          "Képiség – hasonlat, metafora, megszemélyesítés, allegória.",
        ],
      },
      {
        subtitle: "Gyakori lírai műfajok",
        bullets: [
          "Dal – rövid, személyes, egyszerűbb forma.",
          "Óda – magasztos, ünnepélyes hang.",
          "Elégia – szomorkás, merengő tónus.",
          "Himnusz – Istenhez vagy közösséghez szóló, emelkedett költemény.",
          "Epigramma – rövid, sűrített, csattanós mini-vers.",
          "Idill – derűs, harmonikus életkép.",
        ],
      },
      {
        subtitle: "Miért szerethető a líra?",
        paragraph:
          "A líra a pillanat erejével hat. Egy kép, egy felismerés, egy hangulat egész világokat képes megnyitni — ettől erősek a rövid lírai formák is.",
      },
    ],
  },

  lira_versforma: {
    id: "lira_versforma",
    title: "Versforma, ritmus, rím, szabadvers",
    intro:
      "A versek zeneisége a ritmusból, a rímekből és a sorok-szakaszok szerveződéséből születik. A modern költészet gyakran lazábban bánik ezekkel.",
    parts: [
      {
        subtitle: "Ritmus és verselés",
        bullets: [
          "Ütemhangsúlyos – a magyar hagyomány: hangsúlyokra épül.",
          "Időmértékes – hosszú–rövid szótagok mintázata (pl. hexameter).",
          "Alap-lábak: jambus (˘ –), trocheus (– ˘).",
        ],
      },
      {
        subtitle: "Rímképletek",
        bullets: [
          "Páros: aabb | Kereszt: abab | Ölelkező: abba.",
          "Bokorrím: hosszan azonos rím (aaaa…).",
          "Belső rím: nem sorvégen, hanem soron belül cseng össze.",
        ],
      },
      {
        subtitle: "Szabadvers",
        paragraph:
          "Nem követ kötött rímképletet és szabályos ritmust, mégis zeneiséget teremt ismétléssel, képekkel, hangulatvezetéssel.",
      },
    ],
  },

  /* ─────────────── EPIKA ─────────────── */
  epika_novella: {
    id: "epika_novella",
    title: "Epika – novella, elbeszélés, egyperces",
    intro:
      "A rövidpróza kevés szereplőt, sűrített cselekményt és erős lezárást (csattanót) használ.",
    parts: [
      {
        subtitle: "Szerkezeti ív",
        bullets: [
          "Expozíció – kiinduló helyzet.",
          "Bonyodalom – a konfliktus fellobban.",
          "Tetőpont – a feszültség csúcsa.",
          "Megoldás – a konfliktus lezárul.",
        ],
      },
      {
        subtitle: "Egyperces (Örkény)",
        bullets: [
          "Nagyon rövid terjedelem, tömörítés.",
          "Groteszk/ironikus nézőpont, csattanós zárlat.",
        ],
      },
      {
        subtitle: "Elbeszélő eszközök",
        bullets: [
          "Narrátor (belső/külső; mindentudó/korlátozott).",
          "Időkezelés: visszaemlékezés, előreutalás, kihagyás.",
          "Párbeszéd és leírás: jellemzés, hangulat.",
        ],
      },
    ],
  },

  epika_regeny: {
    id: "epika_regeny",
    title: "Epika – regény és elbeszélő szerkezet",
    intro:
      "A regény nagyepikai műfaj: több szál, sok szereplő, kiterjedt idő- és térbeli szerkezet.",
    parts: [
      {
        subtitle: "Narráció és nézőpont",
        bullets: [
          "Én-, te-, ő-elbeszélés; külső vagy belső nézőpont.",
          "Váltott nézőpont: több szereplő belső világa is látszik.",
        ],
      },
      {
        subtitle: "Szerveződés",
        bullets: [
          "Fejezetek tagolják az idő- és helyszínváltást.",
          "Mellékszálak: világépítés, tematikus árnyalatok.",
        ],
      },
      {
        subtitle: "Típusok",
        bullets: [
          "Fejlődésregény – beavatódás, érés.",
          "Levélregény – levelek/naplók alkotják.",
          "Realista, romantikus, modern stb. változatok.",
        ],
      },
    ],
  },

  /* ─────────────── DRÁMA ─────────────── */
  drama_alapok: {
    id: "drama_alapok",
    title: "Dráma – alapfogalmak, szerkezet, konfliktus",
    intro:
      "A dráma párbeszédre és cselekvésre épül; a jelenlét és a döntési helyzetek adják az élményt.",
    parts: [
      {
        subtitle: "Szerkezeti alap",
        bullets: [
          "Expozíció – Bonyodalom – Tetőpont – Késleltetés – Feloldás.",
          "Tragédia: a hős bukása, katarzis.",
          "Komédia: nevettetve bírál társadalmi visszásságokat.",
        ],
      },
      {
        subtitle: "Színpadi eszközök a szövegben",
        bullets: [
          "Monológ, aside (félre) – sajátos megszólalási módok.",
          "Színpadi utasítás – szerzői instrukció a játékhoz.",
          "Felvonás / jelenet tagolás.",
        ],
      },
    ],
  },

  drama_szinhaz: {
    id: "drama_szinhaz",
    title: "Színház – eszközök és foglalkozások",
    intro:
      "Az előadás csapatmunka: rendező, dramaturg, színészek és háttérszakmák együtt hozzák létre.",
    parts: [
      {
        subtitle: "Főbb szerepkörök",
        bullets: [
          "Rendező – koncepció, próbafolyamat irányítása.",
          "Dramaturg – szövegkönyv, húzások, szerkezet.",
          "Ügyelő – előadás menetének technikai felügyelete.",
        ],
      },
      {
        subtitle: "Tér és technika",
        bullets: [
          "Díszlet, jelmez, kellék – világépítés és karakter.",
          "Fény- és hangterv – hangulat, fókusz, tempó.",
          "Kulissza, zsinórpadlás, süllyesztő – gyors váltások eszközei.",
        ],
      },
    ],
  },

  /* ─────────────── FOGALMAK/IRÁNYZATOK ─────────────── */
  fogalmak_kepek: {
    id: "fogalmak_kepek",
    title: "Irodalmi képek és alakzatok",
    intro:
      "A képek és alakzatok teszik érzékletessé a szöveget: gondolatot és érzelmet tesznek láthatóvá.",
    parts: [
      {
        subtitle: "Képek",
        bullets: [
          "Metafora – azonosítás közös jegy alapján.",
          "Hasonlat – kötőszóval (mint/akár) jelölt összevetés.",
          "Megszemélyesítés – élettelen emberi tulajdonságokkal.",
          "Metonímia – érintkezésen alapuló csere (anyag, ok, hely stb.).",
          "Allegória – végigvitt képrendszer.",
        ],
      },
      {
        subtitle: "Alakzatok",
        bullets: [
          "Alliteráció – azonos kezdőhangok.",
          "Ismétlés, fokozás, halmozás – kiemelés és ritmus.",
          "Ellentét, oxymoron, paradoxon – gondolati feszültség.",
          "Eufemizmus, hiperbola, litotész – finomítás vagy túlzás.",
        ],
      },
    ],
  },

  stilus_iranyzatok: {
    id: "stilus_iranyzatok",
    title: "Irodalmi irányzatok – klasszicizmustól a modernig",
    intro:
      "A stílusirányzatok eltérő világképet és formanyelvet képviselnek — időben egymást váltva vagy egymás mellett.",
    parts: [
      {
        subtitle: "Klasszicizmus és romantika",
        bullets: [
          "Klasszicizmus – mérték, harmónia, antik minták.",
          "Romantika – érzelem, szabadságvágy, nemzeti tudat.",
        ],
      },
      {
        subtitle: "Realizmus és naturalizmus",
        bullets: [
          "Realizmus – valószerű, részletező ábrázolás.",
          "Naturalizmus – nyers, determinált világkép.",
        ],
      },
      {
        subtitle: "Modern és avantgárd",
        bullets: [
          "Impresszionizmus – pillanatnyi benyomás, hangulat.",
          "Szimbolizmus – jelképesség, sejtetés.",
          "Avantgárd (futurizmus, dadaizmus, szürrealizmus) – formabontás.",
          "Expresszionizmus – belső feszültség, torzítás.",
          "Posztmodern – idézetelv, játékosság, stíluskeverés.",
        ],
      },
    ],
  },
};

/** ─────────────────────────────
 *  2) Segédek – címek a bankból
 *  ───────────────────────────── */
function getTopicTitle(topicId?: string) {
  const t = (TOPIC_TREE as any[]).find((x) => x.id === topicId);
  return t?.title ?? "Irodalom 8 — Tananyag";
}
function getSectionTitle(topicId?: string, sectionId?: string) {
  const t = (TOPIC_TREE as any[]).find((x) => x.id === topicId);
  const s = (t?.sections || []).find((sec: any) => sec.id === sectionId);
  return s?.title ?? "";
}

/** ─────────────────────────────
 *  3) Jegyzetek – kulcs és perzisztencia
 *  ───────────────────────────── */
const notesKey = (topicId?: string, sectionId?: string) =>
  `notes:irodalom:${topicId || "topic"}:${sectionId || "section"}`;

/** ─────────────────────────────
 *  4) Képernyő
 *  ───────────────────────────── */
export default function IrodalomLessonScreen() {
  const { topicId, sectionId } = useLocalSearchParams<{ topicId?: string; sectionId?: string }>();
  const { startSub } = useQuiz();

  const lesson = LESSONS[String(sectionId || "")];
  const titleTopic = getTopicTitle(String(topicId || ""));
  const titleSection = getSectionTitle(String(topicId || ""), String(sectionId || ""));

  const [notes, setNotes] = React.useState<Note[]>([]);
  const [draft, setDraft] = React.useState<string>("");
  const [editId, setEditId] = React.useState<string | null>(null);
  const [editText, setEditText] = React.useState<string>("");

  const loadNotes = React.useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(notesKey(topicId, sectionId));
      const arr: Note[] = raw ? JSON.parse(raw) : [];
      setNotes(Array.isArray(arr) ? arr : []);
    } catch {
      setNotes([]);
    }
  }, [topicId, sectionId]);

  const saveNotes = async (arr: Note[]) => {
    setNotes(arr);
    try {
      await AsyncStorage.setItem(notesKey(topicId, sectionId), JSON.stringify(arr));
    } catch {
      Alert.alert("Hoppá", "Nem sikerült elmenteni a jegyzeteket.");
    }
  };

  React.useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const addNote = () => {
    const text = draft.trim();
    if (!text) return;
    const n: Note = { id: `n-${Date.now()}`, text, ts: Date.now() };
    const next = [n, ...notes];
    saveNotes(next);
    setDraft("");
  };

  const startEdit = (n: Note) => {
    setEditId(n.id);
    setEditText(n.text);
  };

  const saveEdit = () => {
    if (!editId) return;
    const t = editText.trim();
    if (!t) return;
    const next = notes.map((n) => (n.id === editId ? { ...n, text: t, ts: Date.now() } : n));
    saveNotes(next);
    setEditId(null);
    setEditText("");
  };

  const delNote = (id: string) => {
    Alert.alert("Jegyzet törlése", "Biztosan törlöd ezt a jegyzetet?", [
      { text: "Mégse", style: "cancel" },
      {
        text: "Törlés",
        style: "destructive",
        onPress: () => saveNotes(notes.filter((n) => n.id !== id)),
      },
    ]);
  };

  const clearAll = () => {
    if (notes.length === 0) return;
    Alert.alert("Összes törlése", "Biztosan törlöd az összes jegyzetet ehhez az alfejezethez?", [
      { text: "Mégse", style: "cancel" },
      {
        text: "Törlés",
        style: "destructive",
        onPress: () => saveNotes([]),
      },
    ]);
  };

  const goBack = () => router.back();
  const goHome = () => router.replace("/");

  const startQuiz = () => {
    if (!topicId || !sectionId) return;
    startSub(String(topicId), String(sectionId));
    router.push("/quiz");
  };

  // Halvány pasztell színek a tananyag betűihez
  const pastel = ["#AEE4FF", "#B8F1B0", "#FFDCA8", "#E7C6FF", "#CFFAFE", "#FECACA"];

  return (
    <View style={[styles.screen, { backgroundColor: "#0f172a" }]}>
      <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>

        {/* Fejléc */}
        <View style={[styles.header, { backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 12 }]}>
          <TouchableOpacity onPress={goBack} style={[styles.btn, { backgroundColor: "#3b82f6" }]}>
            <Text style={[styles.buttonText, { color: "#fff" }]}>← Vissza</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goHome} style={[styles.btn, { backgroundColor: "#22c55e" }]}>
            <Text style={[styles.buttonText, { color: "#fff" }]}>🏠 Kezdőoldal</Text>
          </TouchableOpacity>
        </View>

        {/* Címsor + kvíz gomb */}
        <View style={[styles.card, { backgroundColor: "#1e293b", borderLeftWidth: 6, borderLeftColor: "#f59e0b" }]}>
          <Text style={{ color: "#fbbf24", fontSize: 16, fontWeight: "700" }}>{titleTopic}</Text>
          <Text style={{ color: "#38bdf8", fontSize: 22, fontWeight: "800", marginTop: 4 }}>
            {titleSection || "Irodalom 8 — Tananyag"}
          </Text>

          {lesson?.intro ? (
            <Text style={{ color: "#E7C6FF", marginTop: 8, lineHeight: 22 }}>{lesson.intro}</Text>
          ) : (
            <Text style={{ color: "#E7C6FF", marginTop: 8, lineHeight: 22 }}>
              Ehhez az alfejezethez még nem rögzítettünk tananyagszöveget.
            </Text>
          )}

          {sectionId && (
            <TouchableOpacity
              onPress={startQuiz}
              style={[styles.btn, { backgroundColor: "#f97316", marginTop: 12, borderRadius: 14 }]}
            >
              <Text style={[styles.buttonText, { color: "#fff" }]}>🎯 Gyakorló kvíz indítása (10 kérdés)</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Tananyagrészek – pasztell színes betűkkel */}
        {lesson?.parts?.map((p, i) => (
          <View
            key={i}
            style={{
              backgroundColor: "#1e293b",
              borderLeftWidth: 6,
              borderLeftColor: pastel[i % pastel.length],
              borderRadius: 12,
              padding: 14,
              marginTop: 12,
            }}
          >
            <Text
              style={{
                color: pastel[i % pastel.length],
                fontWeight: "800",
                fontSize: 18,
                marginBottom: 4,
              }}
            >
              {p.subtitle}
            </Text>

            {p.paragraph ? (
              <Text
                style={{
                  color: pastel[(i + 1) % pastel.length],
                  marginTop: 6,
                  lineHeight: 22,
                  fontWeight: "400",
                }}
              >
                {p.paragraph}
              </Text>
            ) : null}

            {Array.isArray(p.bullets) && p.bullets.length > 0 && (
              <View style={{ marginTop: 8 }}>
                {p.bullets.map((b, j) => (
                  <View key={j} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 6 }}>
                    <Text
                      style={{
                        color: pastel[(i + j) % pastel.length],
                        fontWeight: "900",
                        marginRight: 6,
                      }}
                    >
                      •
                    </Text>
                    <Text
                      style={{
                        color: pastel[(i + j + 1) % pastel.length],
                        lineHeight: 22,
                        flexShrink: 1,
                      }}
                    >
                      {b}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}

        {/* ─────────────────────────────────────────
            JEGYZETEK BLOKK – írás, szerkesztés, törlés
            ───────────────────────────────────────── */}
        <View
          style={[
            styles.card,
            {
              marginTop: 16,
              backgroundColor: "rgba(2,6,23,0.35)",
              borderLeftWidth: 6,
              borderLeftColor: "#22c55e",
            },
          ]}
        >
          <Text style={[styles.title, { color: "#86efac" }]}>📝 Saját jegyzetek</Text>
          <Text style={[styles.paragraph, { marginTop: 6, color: "#93c5fd" }]}>
            Ezek a jegyzetek csak ezen az eszközön tárolódnak ehhez az alfejezethez
            (<Text style={{ fontWeight: "800", color: "#f59e0b" }}>{String(sectionId || "—")}</Text>).
          </Text>

          {/* Új jegyzet */}
          <Text style={[styles.lead, { marginTop: 12, color: "#38bdf8" }]}>Új jegyzet</Text>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Írd ide a jegyzetet…"
            placeholderTextColor="#9aa4b2"
            multiline
            style={{
              backgroundColor: "#0f172a",
              color: "#e5e7eb",
              borderWidth: 1,
              borderColor: "#334155",
              borderRadius: 12,
              padding: 10,
              marginTop: 6,
            }}
          />
          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <TouchableOpacity onPress={addNote} style={[styles.btn, styles.btnGreen]}>
              <Text style={styles.buttonText}>➕ Hozzáad</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={clearAll} style={[styles.btn, styles.btnGray]}>
              <Text style={styles.buttonText}>🧹 Összes törlése</Text>
            </TouchableOpacity>
          </View>

          {/* Lista */}
          {notes.length === 0 ? (
            <Text style={[styles.paragraph, { marginTop: 10, color: "#c7d2fe" }]}>
              Még nincs jegyzeted ehhez az alfejezethez.
            </Text>
          ) : (
            <View style={{ marginTop: 12, gap: 10 }}>
              {notes.map((n) => {
                const isEditing = editId === n.id;
                return (
                  <View
                    key={n.id}
                    style={{
                      borderWidth: 1,
                      borderColor: "#334155",
                      borderRadius: 12,
                      padding: 10,
                      backgroundColor: "#0b1220",
                    }}
                  >
                    {!isEditing ? (
                      <>
                        <Text style={[styles.paragraph, { color: "#E7C6FF", lineHeight: 22 }]}>
                          {n.text}
                        </Text>
                        <Text style={{ color: "#93c5fd", marginTop: 4, fontSize: 12 }}>
                          {new Date(n.ts).toLocaleString()}
                        </Text>
                        <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
                          <TouchableOpacity
                            onPress={() => startEdit(n)}
                            style={[styles.btn, styles.btnIndigo]}
                          >
                            <Text style={styles.buttonText}>Szerkeszt</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => delNote(n.id)}
                            style={[styles.btn, styles.btnRed]}
                          >
                            <Text style={styles.buttonText}>Töröl</Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    ) : (
                      <>
                        <TextInput
                          value={editText}
                          onChangeText={setEditText}
                          multiline
                          style={{
                            backgroundColor: "#0f172a",
                            color: "#e5e7eb",
                            borderWidth: 1,
                            borderColor: "#334155",
                            borderRadius: 12,
                            padding: 10,
                          }}
                        />
                        <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
                          <TouchableOpacity onPress={saveEdit} style={[styles.btn, styles.btnGreen]}>
                            <Text style={styles.buttonText}>Mentés</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setEditId(null);
                              setEditText("");
                            }}
                            style={[styles.btn, styles.btnGray]}
                          >
                            <Text style={styles.buttonText}>Mégse</Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    )}
                  </View>
                );
              })}
            </View>
          )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

// What the house understands by itself, in German and English: show a room or a device, say where something is, what is open and which
// lights are on. Anything else goes on to Home Assistant's Assist. Pure: the caller does the flying and the talking.

export type Command =
  | { kind: "show"; what: string }
  | { kind: "where"; what: string }
  | { kind: "open" }
  | { kind: "lights_on" }
  | { kind: "all_off" }
  | null;

const clean = (text: string): string =>
  text
    .toLocaleLowerCase()
    .replace(/[?!.,;:]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// articles and little words that may stand before the name
const FILLER = /^(?:(?:mir|me|uns|bitte|please|mal|doch|the|a|an|my|mein|meine|meinen|meinem|das|den|die|der|dem|des|ein|eine|einen|zum|zur|in|im|ins|into|to)\s+)+/;
const strip = (name: string): string => name.replace(FILLER, "").replace(/\s+(?:an|bitte|please)$/, "").trim();

const SHOW = /^(?:zeig(?:e)?|zeigt|geh(?:e)?\s+(?:zu|in)|wechsel(?:e)?\s+(?:zu|in)|öffne|oeffne|show|go\s+to|open|take\s+me\s+to)\s+(.+)$/;
const WHERE = /^(?:wo\s+(?:ist|sind|steht|liegt|hängt|haengt)|where\s+(?:is|are)|where's|find(?:e)?|such(?:e)?)\s+(.+)$/;
const OPEN = /^(?:was\s+ist\s+(?:alles\s+)?(?:offen|auf|geöffnet|geoeffnet)|welche\s+(?:fenster|türen|tueren)(?:\s+und\s+(?:fenster|türen|tueren))?\s+(?:sind\s+)?(?:offen|auf|geöffnet)|(?:what|which\s+(?:windows|doors))(?:\s+and\s+(?:windows|doors))?\s+(?:is|are)\s+open|what's\s+open|is\s+anything\s+open|ist\s+(?:noch\s+)?(?:etwas|was)\s+(?:offen|auf))$/;
const LIGHTS = /^(?:welche\s+(?:lichter|lampen|leuchten)\s+(?:sind\s+)?(?:an|eingeschaltet)|wo\s+brennt\s+(?:noch\s+)?licht|which\s+lights\s+are\s+on|what\s+lights\s+are\s+on|are\s+any\s+lights\s+on|brennt\s+(?:noch\s+)?(?:irgendwo\s+)?licht)$/;
const ALL_OFF = /^(?:(?:alle\s+)?(?:lichter|lampen|licht)\s+aus(?:schalten)?|schalte\s+(?:alle\s+)?(?:lichter|lampen|das\s+licht)\s+aus|(?:turn|switch)\s+(?:off\s+)?all\s+(?:the\s+)?lights(?:\s+off)?|all\s+lights\s+off)$/;

/** The command in a sentence, or null when the house leaves it to Assist. */
export function parseCommand(sentence: string): Command {
  const text = clean(sentence)
    .replace(/^(?:nextfloor|haus|house|hey\s+haus)\s+/, "")
    .trim();
  if (!text) return null;
  if (OPEN.test(text)) return { kind: "open" };
  if (LIGHTS.test(text)) return { kind: "lights_on" };
  if (ALL_OFF.test(text)) return { kind: "all_off" };
  const where = WHERE.exec(text);
  if (where) {
    const what = strip(where[1]);
    if (what) return { kind: "where", what };
  }
  const show = SHOW.exec(text);
  if (show) {
    const what = strip(show[1]);
    if (what) return { kind: "show", what };
  }
  return null;
}

/** A list read out naturally: "a", "a and b", "a, b and c" (with the language's "and"). */
export function spokenList(items: readonly string[], and: string): string {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} ${and} ${items[items.length - 1]}`;
}

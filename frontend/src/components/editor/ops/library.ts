// The search of the furniture library: every word of the query must appear somewhere in an item's names, its id or its kind;
// accents and case do not matter ("kuche" finds "Küche").

/** Lower case without accents. */
export const fold = (text: string): string => text.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");

/** The words of a query, folded. */
export const wordsOf = (query: string): string[] => fold(query).split(/\s+/).filter(Boolean);

/** Whether every word is found in the text (an empty query finds everything). */
export const hasAllWords = (words: readonly string[], haystack: string): boolean => {
  const text = fold(haystack);
  return words.every((w) => text.includes(w));
};

// The furniture library: its sections, and the search over them. A word of the search must appear somewhere in the item's names, its
// id, or the title of its section; accents and case do not matter ("kuche" finds "Küche").

export interface LibraryItem {
  type: string;
  label: string;
  /** Further names to find it by: the English name, the names in other languages. */
  search?: string;
}

export interface LibrarySection {
  key: string;
  title: string;
  items: LibraryItem[];
}

/** Lower case without accents. */
export const fold = (text: string): string => text.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");

const wordsOf = (query: string): string[] => fold(query).split(/\s+/).filter(Boolean);

const hasAllWords = (words: readonly string[], haystack: string): boolean => {
  const text = fold(haystack);
  return words.every((w) => text.includes(w));
};

/** The items of a section that fit the query; all of them for an empty query. */
export function matchingItems(section: LibrarySection, query: string): LibraryItem[] {
  const words = wordsOf(query);
  if (words.length === 0) return section.items;
  return section.items.filter((item) => hasAllWords(words, `${item.label} ${item.search ?? ""} ${item.type.replace(/[_:.]/g, " ")} ${section.title}`));
}

/** Whether any section has an item for the query. */
export const anyMatch = (sections: readonly LibrarySection[], query: string): boolean => sections.some((s) => matchingItems(s, query).length > 0);

/** The set of open sections with one switched: opened when closed, closed when open. */
export function toggledSet(open: ReadonlySet<string>, key: string): Set<string> {
  const next = new Set(open);
  if (!next.delete(key)) next.add(key);
  return next;
}

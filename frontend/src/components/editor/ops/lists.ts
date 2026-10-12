// Small operations on the lists a form edits (favourites, buttons, presets). All return new arrays.

/** The list with the item at `from` moved by `by` places, stopping at either end. */
export function moveWithin<T>(list: readonly T[], from: number, by: number): T[] {
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(Math.max(0, Math.min(next.length, from + by)), 0, item);
  return next;
}

export const removeAt = <T>(list: readonly T[], index: number): T[] => list.filter((_, i) => i !== index);

export const patchAt = <T>(list: readonly T[], index: number, patch: Partial<T>): T[] => list.map((item, i) => (i === index ? { ...item, ...patch } : item));

/** Empty lists are stored as missing, which keeps the saved plan small. */
export const orUndefined = <T>(list: T[]): T[] | undefined => (list.length > 0 ? list : undefined);

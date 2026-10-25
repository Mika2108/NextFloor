// Display names of furniture types, built-in or from packs (kept out of packs.ts, which the 3D
// bundle uses without the UI strings).

import { languageText, translate } from "./i18n.ts";
import { isPackType, packItem, packItemName, packName, type PackItem } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

/** Display name of any furniture type; furniture of a removed pack says so. */
export function furnitureName(hass: HomeAssistant | undefined, type: string): string {
  if (!isPackType(type)) return translate(hass, `furn_${type}` as Parameters<typeof translate>[1]);
  const item = packItem(type);
  return item ? packItemLabel(item, type, hass?.language ?? navigator.language) : translate(hass, "pack_missing_item");
}

// The built-in packs carry German and English names; a fetched language file (lang/<code>.json) names
// them in further languages under "packname:<pack id>", the item's type and "color:<colour id>".

/** A pack item's name in the user's language; `type` is its furniture type (packType(pack, item)). */
export function packItemLabel(item: PackItem, type: string, language: string): string {
  return item.name[language.split("-")[0]] ?? languageText(language, type) ?? packItemName(item, language);
}

/** A pack's name in the user's language. */
export function packLabel(pack: { id: string; name: string }, language: string): string {
  return languageText(language, `packname:${pack.id}`) ?? packName(pack, language);
}

/** A paint colour's name in the user's language. */
export function colourLabel(colour: { id: string; name: Record<string, string> }, language: string): string {
  return colour.name[language.split("-")[0]] ?? languageText(language, `color:${colour.id}`) ?? colour.name.en ?? Object.values(colour.name)[0];
}

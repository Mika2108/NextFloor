// The furniture library in the side panel while furnishing: a search box, sections of items (folded unless open or showing a hit),
// and a picture of an item when the pointer rests on its button.

import { html, nothing, type TemplateResult } from "lit";
import { iconPath } from "../../../icons.ts";
import { FURNITURE_GROUPS, LAMP_MODEL, isLamp } from "../../../model.ts";
import { furnitureName } from "../../../furniture-names.ts";
import { translate, type I18nKey } from "../../../i18n.ts";
import { furnitureSize, isElectric, packItemName, packName, packType, type FurniturePack } from "../../../packs.ts";
import { load3d } from "../../../load3d.ts";
import type { EditorHost } from "../host.ts";
import { anyMatch, matchingItems, toggledSet, type LibrarySection } from "../ops/library.ts";

const STORAGE_KEY = "nextfloor.library";
const OPEN_BY_DEFAULT = ["group:lights", "group:living"];
/** A stand-in for English names: the search also matches the English name of an item. */
const ENGLISH = { language: "en" } as Parameters<typeof translate>[0];

export interface Preview {
  type: string;
  /** The picture, or null while it is drawn. */
  url: string | null;
  left: number;
  top: number;
}

export class LibraryState {
  private readonly onChange: () => void;
  private text = "";
  private openKeys: Set<string>;
  private shown: Preview | null = null;

  constructor(onChange: () => void) {
    this.onChange = onChange;
    this.openKeys = new Set(OPEN_BY_DEFAULT);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) this.openKeys = new Set(JSON.parse(saved) as string[]);
    } catch {
      // no storage: the defaults stand
    }
  }

  get query(): string {
    return this.text;
  }
  set query(text: string) {
    this.text = text;
    this.onChange();
  }

  isOpen(key: string): boolean {
    return this.openKeys.has(key);
  }

  toggle(key: string): void {
    this.openKeys = toggledSet(this.openKeys, key);
    this.onChange();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.openKeys]));
    } catch {
      // no storage
    }
  }

  get preview(): Preview | null {
    return this.shown;
  }

  hidePreview(): void {
    this.shown = null;
    this.onChange();
  }

  /** Draws a picture of the item (by the 3D bundle) and shows it left of the button the pointer is on. */
  async showPreview(type: string, button: HTMLElement, packs: readonly FurniturePack[]): Promise<void> {
    const box = button.getBoundingClientRect();
    const place = { left: Math.max(8, box.left - 196), top: Math.max(8, Math.min(window.innerHeight - 200, box.top + box.height / 2 - 95)) };
    this.shown = { type, url: null, ...place };
    this.onChange();
    try {
      const [w, d, h] = furnitureSize(type);
      const url = (await load3d()).furniturePreview({ type, w, d, h, variant: null, lamp: LAMP_MODEL[type] ?? null }, 180, [...packs]);
      if (this.shown?.type === type) this.shown = { type, url, ...place };
    } catch {
      this.shown = null;
    }
    this.onChange();
  }
}

/** The sections of the library: the built-in groups, then one per pack. */
function sectionsOf(host: EditorHost, packs: readonly FurniturePack[]): LibrarySection[] {
  const language = host.hass?.language ?? "en";
  const groups = Object.entries(FURNITURE_GROUPS).map(([group, types]) => ({
    key: `group:${group}`,
    title: host.t(`furn_group_${group}` as I18nKey),
    items: types.map((type) => ({ type: type as string, label: host.t(`furn_${type}` as I18nKey), search: translate(ENGLISH, `furn_${type}` as I18nKey) })),
  }));
  const fromPacks = packs.map((pack) => ({
    key: `pack:${pack.id}`,
    title: packName(pack, language),
    items: pack.items.map((item) => ({ type: packType(pack.id, item.id), label: packItemName(item, language), search: Object.values(item.name).join(" ") })),
  }));
  return [...groups, ...fromPacks];
}

export interface LibraryActions {
  add(type: string): void;
  openExtensions(): void;
  packs: readonly FurniturePack[];
}

function itemButton(host: EditorHost, state: LibraryState, item: { type: string; label: string }, actions: LibraryActions): TemplateResult {
  const show = (e: Event) => void state.showPreview(item.type, e.currentTarget as HTMLElement, actions.packs);
  // a lamp can be switched from 3D, other electric items take an entity and a power sensor
  const badge = isLamp(item.type) ? "light" : isElectric(item.type) ? "switch" : null;
  return html`<button
    class="nf-btn ${badge ? "nf-lib-electric" : ""}"
    title=${badge ? host.t(badge === "light" ? "lib_badge_light" : "lib_badge_electric") : item.label}
    @click=${() => actions.add(item.type)}
    @mouseenter=${show}
    @focus=${show}
    @mouseleave=${() => state.hidePreview()}
    @blur=${() => state.hidePreview()}
  >
    ${item.label}
    ${badge
      ? html`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${iconPath(badge)} /></svg>`
      : nothing}
  </button>`;
}

function sectionBlock(host: EditorHost, state: LibraryState, section: LibrarySection, actions: LibraryActions): TemplateResult | typeof nothing {
  const query = state.query.trim();
  const hits = matchingItems(section, query);
  if (query && hits.length === 0) return nothing;
  const open = !!query || state.isOpen(section.key);
  return html`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${open} @click=${() => state.toggle(section.key)}>
      <span class="nf-lib-caret">${open ? "▾" : "▸"}</span>${section.title} <span class="nf-lib-count">${hits.length}</span>
    </button>
    ${open ? html`<div class="nf-library">${hits.map((item) => itemButton(host, state, item, actions))}</div>` : nothing}`;
}

/** The library with its search box and the hint to the extensions page. */
export function renderLibrary(host: EditorHost, state: LibraryState, roomName: string | undefined, actions: LibraryActions): TemplateResult {
  const t = host.t;
  const sections = sectionsOf(host, actions.packs);
  const query = state.query.trim();
  return html`<section>
      <h3>${t("furniture_add")}</h3>
      <p class="nf-sub">${roomName ? t("furniture_into", { room: roomName }) : t("furniture_pick_room")}</p>
      <input
        class="nf-search"
        type="search"
        placeholder=${t("furniture_search")}
        .value=${state.query}
        @input=${(e: Event) => (state.query = (e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => e.key === "Escape" && (state.query = "")}
      />
      ${query && !anyMatch(sections, query) ? html`<p class="nf-sub">${t("furniture_search_none")}</p>` : nothing}
      ${sections.map((s) => sectionBlock(host, state, s, actions))}
    </section>
    <div class="nf-ext-teaser">
      <b>${t("ext_teaser_title")}</b>
      <span class="nf-sub">${t("ext_teaser_text")}</span>
      <button class="nf-btn nf-primary" @click=${() => actions.openExtensions()}>${t("ext_open")}</button>
    </div>`;
}

/** The small picture shown beside a library button while the pointer rests on it. */
export function renderPreview(host: EditorHost, preview: Preview | null): TemplateResult | typeof nothing {
  if (!preview) return nothing;
  return html`<div class="nf-preview" style="left:${preview.left}px;top:${preview.top}px" aria-hidden="true">
    ${preview.url ? html`<img src=${preview.url} alt="" />` : html`<span class="nf-preview-wait"></span>`}
    <b>${furnitureName(host.hass, preview.type)}</b>
  </div>`;
}

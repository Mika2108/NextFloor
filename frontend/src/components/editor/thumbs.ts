// Pictures of the furniture for the library cards. They are drawn by the 3D bundle one at a time while the browser is idle, only for
// cards that scroll into view, and kept in IndexedDB so the next visit shows them at once. Weak tablets get no pictures at all.

import { LitElement, css, html, nothing } from "lit";
import { isLowEnd } from "../../hardware.ts";
import { LAMP_MODEL } from "../../model.ts";
import { load3d } from "../../load3d.ts";
import { furnitureSize, packItem, type FurniturePack } from "../../packs.ts";

const SIZE = 112;
const DB = "nextfloor-thumbs";

/** A short hash of a text (FNV-1a), so a changed pack item gets a new picture. */
function hashOf(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 0x01000193);
  return (h >>> 0).toString(36);
}

/** The key a picture is kept under: the type, plus what the item looks like for pack items. */
export function thumbKey(type: string): string {
  const item = packItem(type);
  return `${type}|${item ? hashOf(JSON.stringify(item)) : "b"}|${SIZE}`;
}

function openDb(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB, 1);
      req.onupgradeneeded = () => req.result.createObjectStore("thumbs");
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

class ThumbStore {
  readonly enabled = !isLowEnd();
  private readonly memory = new Map<string, string>();
  private readonly waiting = new Map<string, ((url: string | null) => void)[]>();
  private readonly queue: string[] = [];
  private db: Promise<IDBDatabase | null> | null = null;
  private running = false;
  packs: readonly FurniturePack[] = [];

  /** The picture if it is already known, without waiting. */
  cached(type: string): string | undefined {
    return this.memory.get(thumbKey(type));
  }

  /** The picture of a type: from memory, from the browser's store, or drawn. */
  get(type: string): Promise<string | null> {
    const key = thumbKey(type);
    const known = this.memory.get(key);
    if (known) return Promise.resolve(known);
    return new Promise((resolve) => {
      const list = this.waiting.get(key);
      if (list) return void list.push(resolve);
      this.waiting.set(key, [resolve]);
      void this.lookUp(type, key);
    });
  }

  private settle(key: string, url: string | null): void {
    if (url) this.memory.set(key, url);
    for (const resolve of this.waiting.get(key) ?? []) resolve(url);
    this.waiting.delete(key);
  }

  private async lookUp(type: string, key: string): Promise<void> {
    this.db ??= openDb();
    const db = await this.db;
    const stored = db
      ? await new Promise<string | null>((resolve) => {
          try {
            const req = db.transaction("thumbs").objectStore("thumbs").get(key);
            req.onsuccess = () => resolve(typeof req.result === "string" ? req.result : null);
            req.onerror = () => resolve(null);
          } catch {
            resolve(null);
          }
        })
      : null;
    if (stored) return this.settle(key, stored);
    this.queue.push(type);
    this.pump();
  }

  /** Draws the queued pictures one by one, each in an idle moment, so scrolling stays smooth. */
  private pump(): void {
    if (this.running) return;
    const type = this.queue.shift();
    if (!type) return;
    this.running = true;
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
    const next = (cb: () => void) => (idle ? idle(cb, { timeout: 300 }) : setTimeout(cb, 16));
    next(async () => {
      const key = thumbKey(type);
      let url: string | null = null;
      try {
        const [w, d, h] = furnitureSize(type);
        url = (await load3d()).furniturePreview({ type, w, d, h, variant: null, lamp: LAMP_MODEL[type] ?? null }, SIZE, [...this.packs]);
        void this.keep(key, url);
      } catch {
        url = null;
      }
      this.settle(key, url);
      this.running = false;
      this.pump();
    });
  }

  private async keep(key: string, url: string): Promise<void> {
    const db = await this.db;
    try {
      db?.transaction("thumbs", "readwrite").objectStore("thumbs").put(url, key);
    } catch {
      // a full or blocked store only costs drawing the picture again next time
    }
  }
}

export const thumbs = new ThumbStore();

let observer: IntersectionObserver | null = null;
const seen = (entries: IntersectionObserverEntry[]) => {
  for (const entry of entries) if (entry.isIntersecting) (entry.target as NfThumb).visible();
};

/** A furniture picture that is drawn once it scrolls into view; an empty frame until then. */
export class NfThumb extends LitElement {
  static properties = { type: {}, _url: { state: true } };
  declare type: string;
  declare _url: string | null;

  static styles = css`
    :host {
      display: block;
      aspect-ratio: 4 / 3;
      border-radius: 10px;
      background: rgba(127, 127, 127, 0.08);
      overflow: hidden;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `;

  constructor() {
    super();
    this.type = "";
    this._url = null;
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (!thumbs.enabled) return;
    this._url = thumbs.cached(this.type) ?? null;
    if (this._url) return;
    observer ??= new IntersectionObserver(seen, { rootMargin: "120px" });
    observer.observe(this);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    observer?.unobserve(this);
  }

  updated(changed: Map<string, unknown>): void {
    if (changed.has("type") && changed.get("type") !== undefined) {
      this._url = thumbs.cached(this.type) ?? null;
      if (!this._url && thumbs.enabled) observer?.observe(this);
    }
  }

  visible(): void {
    observer?.unobserve(this);
    const type = this.type;
    void thumbs.get(type).then((url) => {
      if (this.type === type) this._url = url;
    });
  }

  render() {
    return this._url ? html`<img src=${this._url} alt="" />` : nothing;
  }
}

if (!customElements.get("nf-thumb")) customElements.define("nf-thumb", NfThumb);

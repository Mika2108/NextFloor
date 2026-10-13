// Map tiles for the real map under the plan. OpenStreetMap's tile servers refuse requests without a Referer, and Home Assistant's pages ask
// the browser to send none to other sites (`referrer: same-origin`). So every tile is fetched with an explicit referrer policy: the browser
// sends the page's origin (not the full address), which is what the usage policy asks for.

const POLICY: ReferrerPolicy = "strict-origin-when-cross-origin";
const blobs = new Map<string, Promise<Blob | null>>();
const objectUrls = new Map<string, string>();
const waiting = new Map<string, Set<() => void>>();

/** The tile as a picture, or null when the server refused it (retried after a minute). */
export function tileBlob(url: string): Promise<Blob | null> {
  let p = blobs.get(url);
  if (!p) {
    p = fetch(url, { referrerPolicy: POLICY, mode: "cors", credentials: "omit" })
      .then(async (res) => (res.ok && (res.headers.get("content-type") ?? "").startsWith("image/") ? await res.blob() : null))
      .catch(() => null)
      .then((blob) => {
        if (!blob) setTimeout(() => blobs.delete(url), 60000);
        return blob;
      });
    blobs.set(url, p);
  }
  return p;
}

/** A tile for an `<img>` or SVG `<image>`: its object URL once loaded, otherwise null (and `onReady` is called when it has arrived). */
export function tileObjectUrl(url: string, onReady: () => void): string | null {
  const have = objectUrls.get(url);
  if (have) return have;
  let set = waiting.get(url);
  if (!set) {
    set = new Set();
    waiting.set(url, set);
    void tileBlob(url).then((blob) => {
      if (blob) objectUrls.set(url, URL.createObjectURL(blob));
      const callbacks = waiting.get(url) ?? new Set();
      waiting.delete(url);
      if (blob) for (const cb of callbacks) cb();
    });
  }
  set.add(onReady);
  return null;
}

/** Frees the pictures (the map was switched off or moved elsewhere). */
export function forgetTiles(): void {
  for (const u of objectUrls.values()) URL.revokeObjectURL(u);
  objectUrls.clear();
}

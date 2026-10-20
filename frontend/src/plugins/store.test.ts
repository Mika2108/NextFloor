import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { loadPlugins, resetLoads, resolveModuleUrl } from "./loader.ts";
import { isStoreFileUrl, parseStoreIndex, storeState, withStoreEntry, type StoreEntry } from "./store.ts";

afterEach(resetLoads);

const SHA = "a".repeat(64);
const COMMIT = "0123456789abcdef0123456789abcdef01234567";
const FILE = `https://raw.githubusercontent.com/someone/plugin/${COMMIT}/plugin.js`;
const raw = (extra: Record<string, unknown> = {}) => ({ id: "demo", name: "Demo", version: "1.0.0", author: "someone", description: "d", homepage: "https://github.com/someone/plugin", url: FILE, sha256: SHA, ...extra });
const entry = (extra: Partial<StoreEntry> = {}): StoreEntry => ({ ...(raw() as StoreEntry), ...extra });

test("store files must be pinned to a commit on raw.githubusercontent.com", () => {
  assert.ok(isStoreFileUrl(FILE));
  for (const bad of [
    "https://raw.githubusercontent.com/someone/plugin/main/plugin.js",
    `https://example.org/someone/plugin/${COMMIT}/plugin.js`,
    `http://raw.githubusercontent.com/someone/plugin/${COMMIT}/plugin.js`,
    `https://raw.githubusercontent.com/someone/plugin/${COMMIT}/plugin.txt`,
  ])
    assert.equal(isStoreFileUrl(bad), false, bad);
});

test("the index keeps valid entries and drops broken or duplicate ones", () => {
  const list = parseStoreIndex({
    plugins: [raw(), raw({ name: "Again" }), raw({ id: "no-hash", sha256: "xyz" }), raw({ id: "loose", url: "https://example.org/p.js" }), raw({ id: "x y" }), null, raw({ id: "b", homepage: "javascript:1" })],
  });
  assert.deepEqual(list.map((e) => e.id), ["demo", "b"]);
  assert.equal(list[1].homepage, "");
  assert.deepEqual(parseStoreIndex(undefined), []);
  assert.deepEqual(parseStoreIndex({ plugins: "no" }), []);
});

test("an entry is available, installed or has an update", () => {
  assert.equal(storeState(entry(), []), "available");
  assert.equal(storeState(entry(), [{ url: "/local/x.js", enabled: true }]), "available");
  assert.equal(storeState(entry(), [{ url: FILE, enabled: true, id: "demo", sha256: SHA }]), "installed");
  assert.equal(storeState(entry({ sha256: "b".repeat(64) }), [{ url: FILE, enabled: true, id: "demo", sha256: SHA }]), "update");
});

test("installing adds the entry; updating replaces it and keeps the on/off switch", () => {
  const first = withStoreEntry([{ url: "/local/mine.js", enabled: true }], entry());
  assert.equal(first.length, 2);
  assert.deepEqual(first[1], { url: FILE, enabled: true, id: "demo", version: "1.0.0", sha256: SHA });
  const off = first.map((r, i) => (i === 1 ? { ...r, enabled: false } : r));
  const next = withStoreEntry(off, entry({ version: "2.0.0", sha256: "c".repeat(64) }));
  assert.equal(next.length, 2);
  assert.deepEqual([next[1].version, next[1].sha256, next[1].enabled], ["2.0.0", "c".repeat(64), false]);
});

const bytes = new TextEncoder().encode("export default 1;");
const hex = async (b: Uint8Array) => [...new Uint8Array(await crypto.subtle.digest("SHA-256", b as BufferSource))].map((x) => x.toString(16).padStart(2, "0")).join("");
const serving = (body: Uint8Array, ok = true): typeof fetch => (async () => ({ ok, status: ok ? 200 : 404, arrayBuffer: async () => body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength) })) as unknown as typeof fetch;

test("a plugin without a checksum is imported from its address", async () => {
  assert.deepEqual(await resolveModuleUrl({ url: "/local/a.js", enabled: true }), { url: "/local/a.js" });
});

test("a plugin with a checksum is fetched, checked and imported from memory", async () => {
  const r = await resolveModuleUrl({ url: FILE, enabled: true, sha256: await hex(bytes) }, serving(bytes));
  assert.match(r.url, /^blob:/);
  r.revoke?.();
});

test("a file that does not match its checksum is refused and never imported", async () => {
  let imported = 0;
  await loadPlugins([{ url: FILE, enabled: true, sha256: SHA }], async () => void imported++, serving(bytes));
  assert.equal(imported, 0);
});

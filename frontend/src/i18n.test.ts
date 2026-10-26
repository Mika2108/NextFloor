import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { test } from "node:test";
import { awaitingLanguage, languageText, translate, type I18nKey } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";

// Language files are community-maintained: a key a file lacks (a new text) stays English, and a key the
// built-in languages no longer have is ignored, so neither fails here. What a file does translate must
// keep the placeholders of the English text.

const hass = (language: string) => ({ language }) as HomeAssistant;
const placeholders = (s: string) => [...s.matchAll(/\{[a-z0-9_]+\}/g)].map((m) => m[0]).sort();
const langDir = new URL("../lang/", import.meta.url);
const codes = readdirSync(langDir)
  .filter((f) => /^[a-z]{2}\.json$/.test(f))
  .map((f) => f.slice(0, 2));
const file = (code: string) => JSON.parse(readFileSync(new URL(`${code}.json`, langDir), "utf8")) as Record<string, string>;

// pack, item and colour names are keyed by "packname:<pack>", "pack:<pack>:<item>" and "color:<colour>"
const isPackKey = (key: string) => /^(packname|pack|color):/.test(key);
function packKeys(): Set<string> {
  const dir = new URL("../../custom_components/nextfloor/packs/", import.meta.url);
  const keys = new Set<string>();
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".json"))) {
    const pack = JSON.parse(readFileSync(new URL(f, dir), "utf8")) as { id: string; items: { id: string; colors?: { id: string }[] }[] };
    keys.add(`packname:${pack.id}`);
    for (const item of pack.items) {
      keys.add(`pack:${pack.id}:${item.id}`);
      for (const c of item.colors ?? []) keys.add(`color:${c.id}`);
    }
  }
  return keys;
}
const isKnown = (key: string) => translate(hass("en"), key as I18nKey) !== key || translate(hass("de"), key as I18nKey) !== key;

for (const code of codes) {
  test(`lang/${code}.json keeps the placeholders of the English texts`, (t) => {
    const packs = packKeys();
    const stale: string[] = [];
    for (const [key, text] of Object.entries(file(code))) {
      assert.ok(typeof text === "string" && text.trim(), `empty text for ${key}`);
      if (isPackKey(key) ? !packs.has(key) : !isKnown(key)) {
        stale.push(key);
        continue;
      }
      if (isPackKey(key)) continue;
      assert.deepEqual(placeholders(text), placeholders(translate(hass("en"), key as I18nKey)), `placeholders of ${key}`);
    }
    if (stale.length) t.diagnostic(`${stale.length} key(s) no longer used: ${stale.join(", ")}`);
  });
}

test("German and English need no file", () => {
  const element = { requestUpdate: () => assert.fail("nothing to wait for") };
  assert.equal(awaitingLanguage(hass("de-CH"), element), false);
  assert.equal(awaitingLanguage(hass("en-GB"), element), false);
});

test("a language file is fetched once, used, and English fills its gaps", async () => {
  (globalThis as { __NF_LANGS__?: Record<string, string> }).__NF_LANGS__ = { xx: "abc" };
  const original = globalThis.fetch;
  const urls: string[] = [];
  globalThis.fetch = (async (url: URL) => {
    urls.push(String(url));
    return new Response(JSON.stringify({ editor: "Éditeur", "color:white": "Blanc" }));
  }) as typeof fetch;
  try {
    let updates = 0;
    const element = { requestUpdate: () => void updates++ };
    assert.equal(awaitingLanguage(hass("xx-YY"), element), true);
    assert.equal(awaitingLanguage(hass("xx"), element), true);
    // English until the file is there
    assert.equal(translate(hass("xx"), "editor"), translate(hass("en"), "editor"));
    await new Promise((resolve) => setTimeout(resolve, 0));
    assert.equal(urls.length, 1);
    assert.match(urls[0], /\/lang\/xx\.json\?v=abc$/);
    assert.ok(updates >= 1);
    assert.equal(awaitingLanguage(hass("xx"), element), false);
    assert.equal(translate(hass("xx"), "editor"), "Éditeur");
    assert.equal(translate(hass("xx"), "all_floors"), translate(hass("en"), "all_floors"));
    assert.equal(languageText("xx", "color:white"), "Blanc");
    assert.equal(languageText("en", "color:white"), undefined);
  } finally {
    globalThis.fetch = original;
    delete (globalThis as { __NF_LANGS__?: unknown }).__NF_LANGS__;
  }
});

test("a file that cannot be read leaves English", async () => {
  (globalThis as { __NF_LANGS__?: Record<string, string> }).__NF_LANGS__ = { zz: "abc" };
  const original = globalThis.fetch;
  globalThis.fetch = (async () => new Response("", { status: 404 })) as typeof fetch;
  try {
    awaitingLanguage(hass("zz"), { requestUpdate: () => {} });
    await new Promise((resolve) => setTimeout(resolve, 0));
    assert.equal(awaitingLanguage(hass("zz"), { requestUpdate: () => {} }), false);
    assert.equal(translate(hass("zz"), "editor"), translate(hass("en"), "editor"));
  } finally {
    globalThis.fetch = original;
    delete (globalThis as { __NF_LANGS__?: unknown }).__NF_LANGS__;
  }
});

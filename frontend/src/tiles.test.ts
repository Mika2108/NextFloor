import assert from "node:assert/strict";
import { test } from "node:test";
import { tileBlob } from "./tiles.ts";

test("every tile is fetched with an explicit referrer policy, once, and a refused tile gives null", async () => {
  const calls: { url: string; init: RequestInit }[] = [];
  const real = globalThis.fetch;
  globalThis.fetch = (async (url: string, init: RequestInit) => {
    calls.push({ url, init });
    return url.endsWith("/ok.png") ? new Response(new Uint8Array([1, 2, 3]), { status: 200, headers: { "content-type": "image/png" } }) : new Response("blocked", { status: 403, headers: { "content-type": "text/html" } });
  }) as typeof fetch;
  try {
    const a = await tileBlob("https://tiles.example/1/ok.png");
    const again = await tileBlob("https://tiles.example/1/ok.png");
    assert.equal((a as Blob).size, 3);
    assert.equal(again, a, "the same promise: one request");
    assert.equal(await tileBlob("https://tiles.example/2/refused.png"), null);
    assert.equal(calls.length, 2);
    assert.ok(calls.every((c) => c.init.referrerPolicy === "strict-origin-when-cross-origin" && c.init.credentials === "omit"));
  } finally {
    globalThis.fetch = real;
  }
});

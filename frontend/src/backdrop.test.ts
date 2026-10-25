import assert from "node:assert/strict";
import { test } from "node:test";
import { backdropStyle } from "./backdrop.ts";
import { lookNow } from "./themes.ts";

test("an own background is a colour or a dimmed picture; anything unsafe is left out", () => {
  assert.equal(backdropStyle(null), "");
  assert.equal(backdropStyle({ color: "#112233" }), ";background:#112233");
  assert.match(backdropStyle({ image: "/local/garden.jpg", dim: 0.5 }), /rgba\(0,0,0,0\.5\).*url\("\/local\/garden\.jpg"\)/);
  assert.equal(backdropStyle({ image: "javascript:alert(1)" }), "");
  assert.equal(backdropStyle({ image: '/local/a.jpg") ; x: url("evil' }), "");
  assert.equal(backdropStyle({ color: "red; position:fixed" }), "");
  assert.match(backdropStyle({ image: "https://example.org/bg.png", dim: 5 }), /rgba\(0,0,0,0\.8\)/, "dimming stops at 80 %");
});

test("the auto look is day while the sun is up and neon otherwise", () => {
  assert.equal(lookNow("auto", "above_horizon"), "day");
  assert.equal(lookNow("auto", "below_horizon"), "neon");
  assert.equal(lookNow("auto", undefined), "neon");
  assert.equal(lookNow("blueprint", "above_horizon"), "blueprint");
  assert.equal(lookNow(undefined, undefined), "neon");
});

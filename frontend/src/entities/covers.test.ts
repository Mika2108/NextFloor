import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "./fixtures.ts";
import { coverPosition } from "./covers.ts";

test("a cover's position comes from its attribute, else from open / closed", () => {
  const hass = hassOf([
    entity("cover.a", "open", { current_position: 40 }),
    entity("cover.b", "open"),
    entity("cover.c", "closed"),
    entity("cover.d", "closing"),
    entity("cover.e", "unavailable"),
  ]);
  assert.equal(coverPosition(hass, "cover.a"), 40);
  assert.equal(coverPosition(hass, "cover.b"), 100);
  assert.equal(coverPosition(hass, "cover.c"), 0);
  assert.equal(coverPosition(hass, "cover.d"), 50);
  assert.equal(coverPosition(hass, "cover.e"), null);
  assert.equal(coverPosition(hass, null), null);
});

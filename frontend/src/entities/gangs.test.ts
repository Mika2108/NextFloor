import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "./fixtures.ts";
import { gangEntities, gangGlows } from "./gangs.ts";

const hass = hassOf([
  entity("light.ceiling", "on", { brightness: 255, rgb_color: [255, 0, 0] }),
  entity("light.off", "off"),
  entity("switch.kettle", "on", { current_power_w: 1600 }),
  entity("switch.lamp", "on", { current_power_w: 4 }),
  entity("switch.gone", "unavailable"),
]);

test("a button linked to a light glows in the light's colour; one that is off stays dark", () => {
  const glows = gangGlows(hass, ["light.ceiling", "light.off"], false);
  assert.equal(glows.length, 1);
  assert.equal(glows[0].gang, 0);
  assert.deepEqual(glows[0].color.map((c) => Math.round(c * 10) / 10), [1, 0, 0]);
});

test("a socket glows green, brighter the more it draws", () => {
  const [kettle, lamp] = gangGlows(hass, ["switch.kettle", "switch.lamp"], true);
  assert.deepEqual([kettle.gang, lamp.gang], [0, 1]);
  assert.ok(kettle.color[1] > kettle.color[0], "green");
  assert.ok(kettle.level > lamp.level);
});

test("empty, 'none' and unavailable buttons are left out but keep the others in place", () => {
  const glows = gangGlows(hass, [null, "none", "switch.gone", "switch.kettle"], false);
  assert.deepEqual(glows.map((g) => g.gang), [3]);
  assert.deepEqual(gangEntities([null, "switch.a", "none", "switch.b", "switch.c"], 4), ["switch.a", "switch.b"]);
  assert.deepEqual(gangEntities(undefined, 2), []);
});

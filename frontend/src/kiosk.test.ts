import assert from "node:assert/strict";
import { test } from "node:test";
import { nightActive } from "./kiosk.ts";
import type { HomeAssistant } from "./types.ts";

const at = (h: number, m = 0) => new Date(2026, 0, 15, h, m);
const sun = (state: string) => ({ states: { "sun.sun": { entity_id: "sun.sun", state, attributes: {} } } }) as unknown as HomeAssistant;

test("off, empty and nonsense never dim", () => {
  for (const night of [undefined, "", "off", "nonsense", "22-06"]) assert.equal(nightActive(night, undefined, at(23)), false, String(night));
});

test("sun mode follows the sun entity", () => {
  assert.equal(nightActive("sun", sun("below_horizon"), at(12)), true);
  assert.equal(nightActive("sun", sun("above_horizon"), at(2)), false);
  assert.equal(nightActive("sun", undefined, at(2)), false);
});

test("a daytime range includes its start and excludes its end", () => {
  assert.equal(nightActive("13:00-14:30", undefined, at(13, 0)), true);
  assert.equal(nightActive("13:00-14:30", undefined, at(14, 29)), true);
  assert.equal(nightActive("13:00-14:30", undefined, at(14, 30)), false);
  assert.equal(nightActive("13:00-14:30", undefined, at(12, 59)), false);
});

test("a range past midnight covers both sides of it", () => {
  assert.equal(nightActive("22:00 - 06:30", undefined, at(23, 15)), true);
  assert.equal(nightActive("22:00-06:30", undefined, at(1)), true);
  assert.equal(nightActive("22:00-06:30", undefined, at(6, 30)), false);
  assert.equal(nightActive("22:00-06:30", undefined, at(12)), false);
});

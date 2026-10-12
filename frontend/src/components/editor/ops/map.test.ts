import assert from "node:assert/strict";
import { test } from "node:test";
import type { Building, Floor } from "../../../model.ts";
import { movedMap, newMap, planCentre, tileTemplateFrom } from "./map.ts";

const house = (floors: Partial<Floor>[]) => ({ floors }) as unknown as Building;

test("the plan's middle is the middle of every room and outdoor area on all floors", () => {
  const b = house([{ rooms: [{ points: [[0, 0], [10, 0], [10, 6], [0, 6]] }], outdoor: [{ points: [[-4, -2], [0, -2], [0, 8]] }] } as never]);
  assert.deepEqual(planCentre(b), [3, 3]);
  assert.deepEqual(planCentre(house([{ rooms: [], outdoor: [] }])), [0, 0], "an empty plan: the origin");
});

test("a new map starts at Home Assistant's place with the defaults, anchored in the plan's middle", () => {
  const b = house([{ rooms: [{ points: [[0, 0], [4, 0], [4, 2]] }], outdoor: [] } as never]);
  const map = newMap(b, { lat: 50.11, lon: 8.68 });
  assert.deepEqual([map.on, map.lat, map.lon, map.x, map.z, map.opacity, map.zoom, map.url], [true, 50.11, 8.68, 2, 1, 0.5, 18, null]);
  assert.equal(newMap(b, undefined).lat, 0, "without a place the user types one");
});

test("moving the map shifts its anchor and nothing else", () => {
  const map = { on: true, lat: 1, lon: 2, x: 1, z: 1, opacity: 0.4 };
  assert.deepEqual(movedMap(map, 2.5, -1), { ...map, x: 3.5, z: 0 });
  assert.equal(movedMap({ on: true, lat: 1, lon: 2 }, 1, 1).x, 1, "an anchor that was never set starts at 0");
});

test("a tile address needs https and the three placeholders; empty means OpenStreetMap", () => {
  assert.equal(tileTemplateFrom(""), null);
  assert.equal(tileTemplateFrom(" https://t.example/{z}/{x}/{y}.png "), "https://t.example/{z}/{x}/{y}.png");
  assert.equal(tileTemplateFrom("http://t.example/{z}/{x}/{y}.png"), undefined);
  assert.equal(tileTemplateFrom("https://t.example/{z}/{x}.png"), undefined);
});

import assert from "node:assert/strict";
import { test } from "node:test";
import { mapCredit, mapOfPlan, mapShown, mapTiles, planOfMap, templateOf, tileMetres, tileOf, tileUrl, OSM_URL } from "./map-geo.ts";

test("a place has the well-known tile number", () => {
  // Greenwich Observatory at zoom 10 lies in tile 511 / 340
  const [x, y] = tileOf(51.4779, -0.0015, 10);
  assert.equal(Math.floor(x), 511);
  assert.equal(Math.floor(y), 340);
  const [x0, y0] = tileOf(0, 0, 1);
  assert.deepEqual([x0, y0], [1, 1]);
});

test("a tile is about 98 m wide at zoom 18 near 50° north", () => {
  assert.ok(Math.abs(tileMetres(50, 18) - 98.3) < 0.5);
});

test("the tiles around the anchor cover the square, and the anchor's own tile lies around the origin", () => {
  const tiles = mapTiles(50.11, 8.68, 18, 160);
  assert.ok(tiles.length >= 9 && tiles.length <= 36, String(tiles.length));
  const east = tiles.map((t) => t.east);
  assert.ok(Math.min(...east) <= -160 && Math.max(...east.map((e, i) => e + tiles[i].size)) >= 160);
  const holder = tiles.find((t) => t.east <= 0 && t.east + t.size > 0 && t.north >= 0 && t.north - t.size < 0);
  assert.ok(holder, "one tile contains the anchor");
  assert.equal(new Set(tiles.map((t) => `${t.x}/${t.y}`)).size, tiles.length);
});

test("tile addresses fill the template", () => {
  assert.equal(tileUrl(OSM_URL, { x: 5, y: 6, z: 7 }), "https://tile.openstreetmap.org/7/5/6.png");
  assert.equal(tileUrl("https://{s}.example/{z}/{x}/{y}.jpg", { x: 1, y: 2, z: 3 }), "https://a.example/3/1/2.jpg");
  assert.equal(templateOf({ url: null }), OSM_URL);
  assert.equal(templateOf({ url: "http://insecure/{z}" }), OSM_URL, "only https is used");
});

test("the plan's north turns the map: north up leaves it, 180° swaps north and south", () => {
  const anchor = { x: 10, z: 20 };
  assert.deepEqual(planOfMap(0, 5, 0, anchor).map((v) => Math.round(v * 1e6) / 1e6), [10, 15], "5 m north is up (-z)");
  assert.deepEqual(planOfMap(5, 0, 0, anchor).map((v) => Math.round(v * 1e6) / 1e6), [15, 20], "5 m east is right");
  assert.deepEqual(planOfMap(0, 5, 180, anchor).map((v) => Math.round(v * 1e6) / 1e6), [10, 25], "north points down when the plan's north is down");
  assert.deepEqual(planOfMap(0, 5, 90, anchor).map((v) => Math.round(v * 1e6) / 1e6), [15, 20], "north points right");
});

test("plan and map convert back and forth", () => {
  const anchor = { x: -3, z: 7 };
  for (const north of [0, 37, 180, 271]) {
    const [x, z] = planOfMap(12, -8, north, anchor);
    const [e, n] = mapOfPlan(x, z, north, anchor);
    assert.ok(Math.abs(e - 12) < 1e-9 && Math.abs(n + 8) < 1e-9, `north ${north}`);
  }
});

test("a map shows only when it is on and has a place", () => {
  assert.equal(mapShown(null), false);
  assert.equal(mapShown({ on: false, lat: 1, lon: 1 }), false);
  assert.equal(mapShown({ on: true, lat: 1, lon: 1 }), true);
});

test("the credit names OpenStreetMap, or the host of a custom address", () => {
  assert.equal(mapCredit({ url: null }).text, "© OpenStreetMap contributors");
  assert.equal(mapCredit({ url: "https://tiles.example.org/{z}/{x}/{y}.png" }).text, "Map: tiles.example.org");
});

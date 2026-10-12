import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building } from "./model.ts";
import { exportFile, EXPORT_FORMAT, parseExport, storedImageIds, withoutEntities } from "./transfer.ts";

function linked(): Building {
  const b = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  floor.rooms = [{ id: "r", name: "Room", area_id: "living", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  floor.placements = [{ entity_id: "light.a", x: 1, z: 1, y: null, mount: null }];
  floor.furniture = [{ id: "tv", type: "tv", x: 1, z: 1, rotation: 0, w: 1, d: 0.1, h: 0.6, variant: null, entity: "media_player.tv", power: "sensor.tv_power", pictures: [{ entity: "", state: "", image: "abc123" }, { entity: "", state: "", image: "https://example.org/a.png" }, { entity: "", state: "", image: "camera:front" }] }];
  floor.background = { image_id: "bg1", x: 0, z: 0, width: 10, rotation: 0, opacity: 0.5 } as never;
  b.floors = [floor];
  b.presence = [{ person: "person.a", sensor: "sensor.a" }];
  b.energy = { ...b.energy, grid: "sensor.grid", solar: "sensor.solar" };
  return b;
}

test("a shareable copy has no entity, area, person or background left", () => {
  const original = linked();
  const copy = withoutEntities(original);
  assert.equal(copy.floors[0].placements.length, 0);
  assert.equal(copy.floors[0].rooms[0].area_id, null);
  assert.equal(copy.floors[0].furniture[0].entity, null);
  assert.equal(copy.floors[0].furniture[0].power, null);
  assert.equal(copy.floors[0].background, null);
  assert.deepEqual([copy.presence, copy.energy.grid, copy.energy.solar], [[], null, null]);
  // the original stays as it was
  assert.equal(original.floors[0].rooms[0].area_id, "living");
  assert.equal(original.energy.grid, "sensor.grid");
});

test("exportFile wraps the plan and shareable or not decides about the links", () => {
  const full = exportFile(linked(), false);
  assert.equal(full.format, EXPORT_FORMAT);
  assert.equal(full.building.floors[0].placements.length, 1);
  assert.equal(exportFile(linked(), true).building.floors[0].placements.length, 0);
  assert.ok(!Number.isNaN(Date.parse(full.exported_at)));
});

test("a written file reads back, with or without the wrapper", () => {
  const wrapped = parseExport(JSON.stringify(exportFile(linked(), false)));
  assert.equal(wrapped.floors[0].name, "Ground");
  assert.equal(wrapped.floors[0].background, null, "pictures do not travel");
  assert.equal(parseExport(JSON.stringify(linked())).floors.length, 1);
});

test("garbage is told apart: not JSON versus JSON that is no plan", () => {
  assert.throws(() => parseExport("{oops"), /not_json/);
  assert.throws(() => parseExport("[1,2]"), /not_plan/);
  assert.throws(() => parseExport(JSON.stringify({ version: 2, floors: [], settings: {} })), /not_plan/);
  assert.throws(() => parseExport("null"), /not_plan/);
});

test("stored picture ids come from backgrounds and screens, once, never URLs or cameras", () => {
  const b = linked();
  b.floors[0].furniture[0].pictures!.push({ entity: "", state: "", image: "abc123" });
  assert.deepEqual(storedImageIds(b).sort(), ["abc123", "bg1"]);
});

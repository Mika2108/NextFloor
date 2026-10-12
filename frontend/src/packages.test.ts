import assert from "node:assert/strict";
import { test } from "node:test";
import { furnitureFootprint, type Furniture, type Room } from "./model.ts";
import { furnishRoom, PACKAGES, type PackageId } from "./packages.ts";

const box = (w: number, d: number): Room => ({ id: "r", name: "R", area_id: null, points: [[0, 0], [w, 0], [w, d], [0, d]], floor_material: "wood" });

function furnish(pkg: PackageId, w: number, d: number): Furniture[] {
  let n = 0;
  return furnishRoom(box(w, d), pkg, () => `f${n++}`);
}

test("every package stays inside a normal room and gets unique ids", () => {
  for (const pkg of PACKAGES) {
    const pieces = furnish(pkg, 4.4, 3.8);
    assert.ok(pieces.length > 1, pkg);
    assert.equal(new Set(pieces.map((p) => p.id)).size, pieces.length, `${pkg}: ids`);
    for (const piece of pieces) {
      for (const [x, z] of furnitureFootprint(piece)) {
        assert.ok(x > -0.01 && x < 4.41 && z > -0.01 && z < 3.81, `${pkg}: ${piece.type} corner ${x}/${z}`);
      }
    }
  }
});

test("pieces on a wall face into the room: back 0°, right 90°, front 180°, left 270°", () => {
  const byType = (pkg: PackageId, type: string) => furnish(pkg, 4.5, 4).find((p) => p.type === type)!;
  assert.equal(byType("bedroom", "bed").rotation, 0); // back wall
  assert.equal(byType("living", "shelf").rotation, 90); // right wall
  assert.equal(byType("bath", "bathtub").rotation, 180); // front wall
  assert.equal(byType("hall", "coat_rack").rotation, 270); // left wall
});

test("pieces touch their wall (2 cm of air) and keep to it", () => {
  const room = { w: 4.5, d: 4 };
  const tub = furnish("bath", room.w, room.d).find((p) => p.type === "bathtub")!;
  assert.ok(Math.abs(tub.z - (room.d - tub.d / 2 - 0.02)) < 1e-6, "front wall");
  const rack = furnish("hall", room.w, room.d).find((p) => p.type === "coat_rack")!;
  assert.ok(Math.abs(rack.x - (rack.d / 2 + 0.02)) < 1e-6, "left wall");
});

test("a row is laid out side by side without overlapping, in the order of the recipe", () => {
  const row = furnish("kitchen_row", 6, 3.5).filter((p) => p.z < 1 && p.type !== "kitchen_wall");
  const sorted = [...row].sort((a, b) => a.x - b.x);
  assert.deepEqual(sorted.map((p) => p.type).slice(0, 2), ["fridge", "kitchen_tall"]);
  sorted.slice(1).forEach((p, i) => assert.ok(p.x - p.w / 2 >= sorted[i].x + sorted[i].w / 2 - 1e-6, `${p.type} overlaps its neighbour`));
});

test("what does not fit on a wall is dropped, the later pieces first", () => {
  const small = furnish("kitchen_row", 2, 2).filter((p) => p.z < 0.8);
  const large = furnish("kitchen_row", 6, 3.5).filter((p) => p.z < 0.8);
  assert.ok(small.length < large.length);
  assert.equal(small[0].type, "fridge");
});

test("a row can start at the wall's end or centred", () => {
  const tubRoom = furnish("bath", 4, 3);
  const wc = tubRoom.find((p) => p.type === "wc")!;
  const basin = tubRoom.find((p) => p.type === "washbasin")!;
  assert.ok(wc.x > 4 - wc.w - 0.2, "wc at the right end");
  assert.ok(Math.abs(basin.x - 2) < 0.01, "basin in the middle");
});

test("free pieces are pulled inside a tiny room instead of poking out", () => {
  for (const piece of furnish("living", 2.4, 2.4)) {
    if (["rug", "sofa", "coffee_table"].includes(piece.type)) {
      assert.ok(piece.x - piece.w / 2 >= -0.2 && piece.x + piece.w / 2 <= 2.6, `${piece.type} x`);
    }
  }
});

test("positions are rounded to a millimetre", () => {
  for (const piece of furnish("dining", 4.1237, 3.3331)) {
    assert.equal(piece.x, Math.round(piece.x * 1000) / 1000);
    assert.equal(piece.z, Math.round(piece.z * 1000) / 1000);
  }
});

import assert from "node:assert/strict";
import { test } from "node:test";
import { GROUND, fieldFace, roofFaces, wallFaces } from "./faces.ts";
import { fieldModules, ROOF_WINDOW_H, ROOF_WINDOW_W } from "./fields.ts";
import { cottage, near } from "./fixtures.ts";
import { moveField, proposeField, proposeGroundField, proposeWallField, proposeWindow, turnGroundField } from "./placing.ts";

const gable = () => cottage({ type: "gable", pitch: 35, overhang: 0.5 });

test("a proposed field fits its face completely, with every module on it", () => {
  for (const face of roofFaces(gable())) {
    const f = proposeField(face, "p");
    assert.equal(f.face, face.key);
    assert.equal(fieldModules(face, f).length, f.rows * f.cols, face.key);
    assert.ok(f.cols >= 1 && f.rows >= 1 && f.rows <= 4);
  }
});

test("on a flat roof the proposal is tilted on frames, on a slope it lies flat", () => {
  const flat = roofFaces(cottage({ type: "flat", pitch: 0, overhang: 0.5 }))[0];
  assert.equal(proposeField(flat, "p").tilt, 15);
  assert.equal(proposeField(roofFaces(gable())[0], "p").tilt, null);
});

test("a hip face narrows towards the ridge, so the proposal has fewer columns until all modules fit", () => {
  const b = cottage({ type: "custom", pitch: 35, overhang: 0, sections: [{ id: "h", x0: 0, z0: 0, x1: 9, z1: 8, shape: "hip", axis: "x", eave_a: 2.6, eave_b: 2.6, pitch_a: 35, pitch_b: 35, base: 2.6, overhang: 0 }] });
  for (const face of roofFaces(b)) {
    const f = proposeField(face, "p");
    assert.equal(fieldModules(face, f).length, f.rows * f.cols, face.key);
  }
});

test("a field moved to another face keeps its modules and is centred inside the new face", () => {
  const [a, b] = roofFaces(gable());
  const original = { ...proposeField(a, "m"), rows: 2, cols: 3, portrait: false };
  const moved = moveField(b, original);
  assert.equal(moved.face, b.key);
  assert.deepEqual([moved.rows, moved.cols, moved.portrait], [2, 3, false]);
  assert.equal(moved.rotation, null);
  assert.equal(fieldModules(b, moved).length, 6);
  const flat = roofFaces(cottage({ type: "flat", pitch: 0, overhang: 0.5 }))[0];
  assert.equal(moveField(flat, { ...original, tilt: null }).tilt, 15, "a flat roof brings a tilt");
});

test("the wall field goes on the wall that gets the most sun; none without walls", () => {
  const b = gable();
  b.settings.north = 0;
  const f = proposeWallField(b, "w", "g")!;
  const face = fieldFace(b, f)!;
  assert.ok(face.wall);
  assert.equal(f.portrait, false);
  assert.equal(f.rows, 1);
  assert.ok(f.cols >= 1);
  // the sunny side looks south: +z in the plan with north up
  assert.ok(face.facing[1] > 0.5, `faces ${face.facing}`);
  assert.equal(proposeWallField(b, "w", "nowhere"), null);
  assert.ok(wallFaces(b, "g").length > 1);
});

test("a garden field stands east of the house on frames, tilted 25°, as two rows of four, looking south", () => {
  const b = gable();
  const f = proposeGroundField(b, "g");
  assert.equal(f.face, GROUND);
  assert.equal(f.rows * f.cols, 8);
  assert.equal(f.tilt, 25);
  assert.ok(f.u >= 12 + 2.9, "beside the house");
  assert.equal(f.rotation, 0);
  const north = cottage({ type: "none", pitch: 0, overhang: 0 });
  north.settings.north = 40;
  assert.equal(proposeGroundField(north, "g").rotation, 40);
  assert.equal(proposeGroundField({ ...north, floors: [] }, "g").u, 0);
});

test("turning a garden field about its middle keeps the middle where it was", () => {
  const b = gable();
  const f = { ...proposeGroundField(b, "g"), rotation: 0 };
  const middle = (g: typeof f) => {
    const mods = fieldModules(fieldFace(b, g)!, g);
    const xs = mods.flatMap((m) => m.corners.map((c) => c[0]));
    const zs = mods.flatMap((m) => m.corners.map((c) => c[2]));
    return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2];
  };
  const before = middle(f);
  const turned = { ...f, ...turnGroundField(b, f, 90) };
  assert.equal(turned.rotation, 90);
  const after = middle(turned);
  // the box of modules turns too, but its centre stays within a field's depth of where it was
  assert.ok(Math.hypot(after[0] - before[0], after[1] - before[1]) < 1.5);
  assert.equal(turnGroundField(b, f, -90).rotation, 270);
  assert.equal(turnGroundField(b, f, 450).rotation, 90);
});

test("a roof window is proposed in the middle of a face, fully on it", () => {
  const face = roofFaces(gable())[0];
  const w = proposeWindow(face, "win");
  assert.equal(w.face, face.key);
  assert.deepEqual([w.w, w.h], [null, null]);
  assert.ok(w.u > 0 && w.u + ROOF_WINDOW_W < face.lu);
  assert.ok(w.v >= 0 && w.v + ROOF_WINDOW_H <= face.ls + 1e-9);
  near(w.u, Math.round(w.u * 100) / 100, 1e-9);
});

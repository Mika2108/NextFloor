import assert from "node:assert/strict";
import { test } from "node:test";
import { roofFaces, wallFaces } from "./faces.ts";
import { cottage, field, near } from "./fixtures.ts";
import { fieldModules } from "./fields.ts";
import { bestFace, faceAt, faceCompass, onField, onFace, pointOnFace, rayOnFace } from "./picking.ts";

const house = () => cottage({ type: "gable", pitch: 35, overhang: 0.5 });

test("a plan point is found on the slope it lies under, with face coordinates that map back", () => {
  const faces = roofFaces(house());
  const hit = faceAt(faces, [6, 1])!;
  assert.equal(hit.face.key, "main:a");
  const back = [hit.face.o[0] + hit.face.eu[0] * hit.u + hit.face.es[0] * hit.s, hit.face.o[2] + hit.face.eu[2] * hit.u + hit.face.es[2] * hit.s];
  near(back[0], 6, 1e-9);
  near(back[1], 1, 1e-9);
  assert.equal(faceAt(faces, [6, 6])!.face.key, "main:b");
  assert.equal(faceAt(faces, [50, 50]), null);
  assert.equal(pointOnFace(faces[0], [50, 50]), null);
});

test("where roofs overlap the highest one is picked", () => {
  const b = cottage({ type: "custom", pitch: 35, overhang: 0, sections: [
    { id: "low", x0: 0, z0: 0, x1: 12, z1: 7, shape: "pent", axis: "x", eave_a: 2.6, eave_b: 2.6, pitch_a: 5, pitch_b: 5, base: 2.6, overhang: 0 },
    { id: "high", x0: 0, z0: 0, x1: 12, z1: 7, shape: "pent", axis: "x", eave_a: 5, eave_b: 5, pitch_a: 5, pitch_b: 5, base: 5, overhang: 0 },
  ] });
  assert.equal(faceAt(roofFaces(b), [6, 3])!.face.section, "high");
});

test("right in front of a wall the wall wins, a little further out only where there is no roof", () => {
  const b = house();
  const faces = [...roofFaces(b), ...wallFaces(b)];
  const wall = wallFaces(b)[0];
  const mid = [wall.o[0] + wall.eu[0] * wall.lu / 2, wall.o[2] + wall.eu[2] * wall.lu / 2];
  const near1 = faceAt(faces, [mid[0] + wall.n[0] * 0.2, mid[1] + wall.n[2] * 0.2])!;
  assert.equal(near1.face.key, wall.key);
  assert.ok(Number.isNaN(near1.s));
  const far = faceAt(wallFaces(b), [mid[0] + wall.n[0] * 0.6, mid[1] + wall.n[2] * 0.6])!;
  assert.equal(far.face.key, wall.key);
  assert.equal(faceAt(wallFaces(b), [mid[0] + wall.n[0] * 2, mid[1] + wall.n[2] * 2]), null);
});

test("a ray from above meets a face at the right distance and coordinates", () => {
  const face = roofFaces(house())[0];
  const target = [face.o[0] + face.eu[0] * 3 + face.es[0] * 2, face.o[1] + face.eu[1] * 3 + face.es[1] * 2, face.o[2] + face.eu[2] * 3 + face.es[2] * 2] as [number, number, number];
  const origin: [number, number, number] = [target[0], target[1] + 10, target[2]];
  const hit = rayOnFace(face, origin, [0, -1, 0])!;
  near(hit.u, 3, 1e-9);
  near(hit.s, 2, 1e-9);
  assert.ok(hit.t > 9 && hit.t < 11);
  assert.equal(rayOnFace(face, origin, [0, 1, 0]), null, "away from the face");
  assert.equal(rayOnFace(face, origin, [face.eu[0], face.eu[1], face.eu[2]]), null, "parallel to the face");
});

test("points are on a face inside its edges; the ground has no edges", () => {
  const face = roofFaces(house())[0];
  assert.equal(onFace(face, 1, 1), true);
  assert.equal(onFace(face, -1, 1), false);
  assert.equal(onFace(face, 1, face.ls + 1), false);
  assert.equal(onFace({ ...face, unbounded: true }, 1e6, 1e6), true);
});

test("a point is on a field when it lies over one of its modules, with a little slack", () => {
  const face = roofFaces(house())[0];
  const f = field(face.key, { u: 1, v: 1, cols: 2 });
  assert.equal(onField(face, f, 1.5, 1.5), true);
  assert.equal(onField(face, f, 0.97, 1.5), true, "5 cm slack");
  assert.equal(onField(face, f, 0.5, 1.5), false);
  assert.equal(onField(face, f, 6, 6), false);
  assert.equal(fieldModules(face, f).length, 2);
});

test("a face's compass direction follows the plan's north", () => {
  const [a, b] = roofFaces(house());
  assert.equal(faceCompass(a, 0), "n");
  assert.equal(faceCompass(b, 0), "s");
  assert.equal(faceCompass(b, 90), "e", "north turned 90° clockwise: a south-looking face reads as east");
  assert.equal(faceCompass(a, 180), "s");
});

test("the best face looks south and is big; flat roofs score a bit lower than a south slope", () => {
  const faces = roofFaces(house());
  assert.equal(bestFace(faces, 0)?.key, "main:b");
  assert.equal(bestFace(faces, 180)?.key, "main:a");
  assert.equal(bestFace([], 0), null);
  const flat = roofFaces(cottage({ type: "flat", pitch: 0, overhang: 0.5 }));
  assert.equal(bestFace(flat, 0)?.key, "main:top");
});

import assert from "node:assert/strict";
import { test } from "node:test";
import { BYTES_PER_TRIANGLE, DETAIL_LEVELS, MAX_UPLOAD_BYTES, maxTrianglesForLimit, meshPath, modelSlots, readableSize, trianglesFor, uploadProblem } from "./model-slots.ts";
import type { FurniturePack } from "./packs.ts";

const pack = (id: string, name: string, items: { id: string; name: string; mesh?: string }[]): FurniturePack =>
  ({ id, name, publisher: "x", items: items.map((i) => ({ id: i.id, name: { en: i.name }, size: [1, 1, 1], parts: [], mesh: i.mesh })) }) as unknown as FurniturePack;

test("the slots are the models the packs ask for, once each, with the items that use them", () => {
  const slots = modelSlots([pack("cars", "Cars", [{ id: "a", name: "Model Y", mesh: "tesla_y" }, { id: "b", name: "Model Y Long", mesh: "tesla_y" }, { id: "c", name: "Truck", mesh: "truck" }, { id: "d", name: "Plain" }]), pack("more", "More", [{ id: "e", name: "Apple", mesh: "apple" }])], "en");
  assert.deepEqual(slots.map((s) => s.id), ["apple", "tesla_y", "truck"]);
  assert.equal(slots[1].items.length, 2);
  assert.ok(slots[1].items[0].includes("Model Y") && slots[1].items[0].includes("Cars"));
  assert.deepEqual(modelSlots([], "en"), []);
});

test("the path names the model and escapes odd ids", () => {
  assert.equal(meshPath("tesla_y"), "/api/nextfloor/mesh/tesla_y");
  assert.equal(meshPath("a b"), "/api/nextfloor/mesh/a%20b");
});

test("sizes read like people say them", () => {
  assert.equal(readableSize(100), "1 KB");
  assert.equal(readableSize(840 * 1024), "840 KB");
  assert.equal(readableSize(3.2 * 1024 * 1024), "3.2 MB");
});

test("the answers of the upload map to a reason, and success to nothing", () => {
  for (const ok of [200, 201, 204]) assert.equal(uploadProblem(ok), null);
  assert.equal(uploadProblem(401), "forbidden");
  assert.equal(uploadProblem(413), "too_large");
  assert.equal(uploadProblem(400), "not_glb");
  assert.equal(uploadProblem(404), "bad_id");
  assert.equal(uploadProblem(500), "other");
});

test("the detail levels never ask for more triangles than the file limit allows", () => {
  assert.equal(maxTrianglesForLimit(120_000), 2400);
  assert.ok(maxTrianglesForLimit() * BYTES_PER_TRIANGLE <= MAX_UPLOAD_BYTES);
  assert.equal(trianglesFor("light"), 30_000);
  assert.ok(DETAIL_LEVELS.every((l) => trianglesFor(l.key) <= maxTrianglesForLimit()));
});

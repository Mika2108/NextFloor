import assert from "node:assert/strict";
import { test } from "node:test";
import { decimate, triangleCount, type Mesh3 } from "./decimate.ts";

/** A flat grid of n × n squares, two triangles each, in the x-z plane. */
function grid(n: number): Mesh3 {
  const positions = new Float32Array((n + 1) * (n + 1) * 3);
  for (let z = 0; z <= n; z++) for (let x = 0; x <= n; x++) positions.set([x / n, 0, z / n], (z * (n + 1) + x) * 3);
  const indices: number[] = [];
  for (let z = 0; z < n; z++) {
    for (let x = 0; x < n; x++) {
      const a = z * (n + 1) + x;
      indices.push(a, a + n + 1, a + 1, a + 1, a + n + 1, a + n + 2);
    }
  }
  return { positions, indices: Uint32Array.from(indices) };
}

/** A box made of 12 triangles, subdivided by repeating its faces as grids. */
function sphere(rings: number, segments: number): Mesh3 {
  const positions: number[] = [];
  for (let r = 0; r <= rings; r++) {
    for (let s = 0; s < segments; s++) {
      const [phi, theta] = [(r / rings) * Math.PI, (s / segments) * Math.PI * 2];
      positions.push(Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta));
    }
  }
  const indices: number[] = [];
  for (let r = 0; r < rings; r++) {
    for (let s = 0; s < segments; s++) {
      const [a, b] = [r * segments + s, r * segments + ((s + 1) % segments)];
      const [c, d] = [a + segments, b + segments];
      indices.push(a, c, b, b, c, d);
    }
  }
  return { positions: Float32Array.from(positions), indices: Uint32Array.from(indices) };
}

test("a mesh that is light enough comes back as it is", () => {
  const mesh = grid(4);
  assert.equal(decimate(mesh, 100), mesh);
  assert.equal(decimate(mesh, 32), mesh);
});

test("a heavy mesh gets close to the target without going over it", () => {
  const mesh = grid(60);
  assert.equal(triangleCount(mesh), 7200);
  const light = decimate(mesh, 1000);
  assert.ok(triangleCount(light) <= 1000, `${triangleCount(light)}`);
  assert.ok(triangleCount(light) > 500, `too much taken away: ${triangleCount(light)}`);
});

test("the lighter mesh stays in the shape of the original", () => {
  const light = decimate(sphere(40, 60), 600);
  assert.ok(triangleCount(light) <= 600);
  for (let v = 0; v < light.positions.length; v += 3) {
    const r = Math.hypot(light.positions[v], light.positions[v + 1], light.positions[v + 2]);
    assert.ok(r > 0.75 && r <= 1.0001, `a vertex off the sphere: ${r}`);
  }
});

test("every triangle refers to existing vertices and has three different corners", () => {
  const light = decimate(sphere(30, 40), 300);
  const vertices = light.positions.length / 3;
  for (let i = 0; i < light.indices.length; i += 3) {
    const [a, b, c] = [light.indices[i], light.indices[i + 1], light.indices[i + 2]];
    assert.ok(a < vertices && b < vertices && c < vertices);
    assert.ok(a !== b && b !== c && a !== c);
  }
  assert.equal(light.indices.length % 3, 0);
});

test("an empty mesh is left alone", () => {
  const empty: Mesh3 = { positions: new Float32Array(0), indices: new Uint32Array(0) };
  assert.equal(decimate(empty, 10), empty);
});

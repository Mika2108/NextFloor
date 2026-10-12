// Making a heavy 3D model lighter by vertex clustering: the model is laid over a grid, every grid cell becomes one vertex (the average
// of the vertices in it), and triangles that fall into a single cell or two disappear. A coarser grid gives fewer triangles, so the
// grid is chosen to land just under the wanted number. It is fast, needs no extra libraries, and keeps the shape of a car or a sofa.

export interface Mesh3 {
  /** x, y, z of every vertex. */
  positions: Float32Array;
  /** Three vertex numbers per triangle. */
  indices: Uint32Array;
}

/** The number of triangles. */
export const triangleCount = (mesh: Mesh3): number => mesh.indices.length / 3;

interface Bounds {
  min: [number, number, number];
  size: [number, number, number];
}

function boundsOf(positions: Float32Array): Bounds {
  const min: [number, number, number] = [Infinity, Infinity, Infinity];
  const max: [number, number, number] = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < positions.length; i += 3) {
    for (let k = 0; k < 3; k++) {
      min[k] = Math.min(min[k], positions[i + k]);
      max[k] = Math.max(max[k], positions[i + k]);
    }
  }
  return { min, size: [max[0] - min[0], max[1] - min[1], max[2] - min[2]] };
}

/** The cell number of every vertex for a grid of cells `cell` wide. Cells are numbered by their coordinates, packed into one number. */
function cellsOf(positions: Float32Array, bounds: Bounds, cell: number): Float64Array {
  const count = positions.length / 3;
  const counts = bounds.size.map((s) => Math.floor(s / cell) + 1);
  const cells = new Float64Array(count);
  for (let v = 0; v < count; v++) {
    const x = Math.floor((positions[v * 3] - bounds.min[0]) / cell);
    const y = Math.floor((positions[v * 3 + 1] - bounds.min[1]) / cell);
    const z = Math.floor((positions[v * 3 + 2] - bounds.min[2]) / cell);
    cells[v] = (x * counts[1] + y) * counts[2] + z;
  }
  return cells;
}

/** The triangles that survive clustering: all three corners in different cells. Counted without building anything. */
function survivors(indices: Uint32Array, cells: Float64Array): number {
  let kept = 0;
  for (let i = 0; i < indices.length; i += 3) {
    const [a, b, c] = [cells[indices[i]], cells[indices[i + 1]], cells[indices[i + 2]]];
    if (a !== b && b !== c && a !== c) kept++;
  }
  return kept;
}

/** Builds the lighter mesh for a given grid: one vertex per used cell, and the surviving triangles without duplicates. */
function cluster(mesh: Mesh3, cells: Float64Array): Mesh3 {
  const vertexOfCell = new Map<number, number>();
  const sums: number[] = [];
  const members: number[] = [];
  const mapped = new Uint32Array(cells.length);
  for (let v = 0; v < cells.length; v++) {
    let id = vertexOfCell.get(cells[v]);
    if (id === undefined) {
      id = members.length;
      vertexOfCell.set(cells[v], id);
      members.push(0);
      sums.push(0, 0, 0);
    }
    mapped[v] = id;
    members[id]++;
    for (let k = 0; k < 3; k++) sums[id * 3 + k] += mesh.positions[v * 3 + k];
  }
  const positions = new Float32Array(members.length * 3);
  for (let id = 0; id < members.length; id++) for (let k = 0; k < 3; k++) positions[id * 3 + k] = sums[id * 3 + k] / members[id];
  const seen = new Set<string>();
  const indices: number[] = [];
  for (let i = 0; i < mesh.indices.length; i += 3) {
    const [a, b, c] = [mapped[mesh.indices[i]], mapped[mesh.indices[i + 1]], mapped[mesh.indices[i + 2]]];
    if (a === b || b === c || a === c) continue;
    // the same triangle with the same winding, written starting at its smallest corner, is a duplicate
    const start = Math.min(a, b, c);
    const key = start === a ? `${a},${b},${c}` : start === b ? `${b},${c},${a}` : `${c},${a},${b}`;
    if (seen.has(key)) continue;
    seen.add(key);
    indices.push(a, b, c);
  }
  return { positions, indices: Uint32Array.from(indices) };
}

/**
 * A lighter copy of the mesh with at most `target` triangles. A mesh that is light enough is returned as it is. The grid is found by
 * halving the search between a very fine and a very coarse one.
 */
export function decimate(mesh: Mesh3, target: number): Mesh3 {
  if (triangleCount(mesh) <= target || mesh.positions.length === 0) return mesh;
  const bounds = boundsOf(mesh.positions);
  const longest = Math.max(...bounds.size, 1e-9);
  let fine = longest / 4096;
  let coarse = longest;
  let best = cellsOf(mesh.positions, bounds, coarse);
  for (let step = 0; step < 14; step++) {
    const middle = Math.sqrt(fine * coarse);
    const cells = cellsOf(mesh.positions, bounds, middle);
    if (survivors(mesh.indices, cells) > target) fine = middle;
    else {
      coarse = middle;
      best = cells;
    }
  }
  return cluster(mesh, best);
}

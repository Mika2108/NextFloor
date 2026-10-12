// Room packages: a ready-made set of furniture for a kind of room. Pieces stand against the walls of
// the room's bounding box in rows (the "back" wall is the top edge of the plan), the rest is placed freely.
// It is a starting point that the editor then adjusts.

import { bounds, FURNITURE_SIZE, type Furniture, type FurnitureType, type Room } from "./model.ts";

export const PACKAGES = ["kitchen_row", "kitchen_l", "bath", "bedroom", "living", "dining", "office", "kids", "hall"] as const;
export type PackageId = (typeof PACKAGES)[number];

type Wall = "back" | "front" | "left" | "right";
type Size = [width: number, depth: number, height: number];

/** A piece, optionally with its own size instead of the standard one. */
type Piece = FurnitureType | [FurnitureType, Size];

/** Pieces side by side along a wall, starting at one end or centred. */
type Row = [wall: Wall, align: "start" | "center" | "end", pieces: Piece[]];

/** A piece somewhere in the room: [piece, share of the width, share of the depth, turn in degrees]. */
type Spot = [piece: Piece, fx: number, fz: number, turn: number];

interface Recipe {
  rows: Row[];
  spots: Spot[];
}

const RECIPES: Record<PackageId, Recipe> = {
  kitchen_row: {
    rows: [
      ["back", "start", ["fridge", "kitchen_tall", ["kitchen", [0.9, 0.62, 0.92]], "sink", "dishwasher", "stove", ["kitchen", [0.6, 0.62, 0.92]]]],
      ["back", "start", [["kitchen_wall", [1.2, 0.35, 0.7]]]],
    ],
    spots: [
      [["table", [1.2, 0.8, 0.75]], 0.5, 0.72, 0],
      ["lamp_pendant", 0.5, 0.72, 0],
      ["lamp_ceiling", 0.5, 0.3, 0],
    ],
  },
  kitchen_l: {
    rows: [
      ["back", "start", ["fridge", ["kitchen", [0.9, 0.62, 0.92]], "sink", "dishwasher", "stove"]],
      ["right", "start", [["kitchen", [0.9, 0.62, 0.92]], ["kitchen", [0.6, 0.62, 0.92]], "kitchen_tall"]],
      ["back", "start", [["kitchen_wall", [1.2, 0.35, 0.7]]]],
    ],
    spots: [
      ["table", 0.4, 0.68, 0],
      ["bar_stool", 0.72, 0.86, 180],
      ["lamp_ceiling", 0.5, 0.35, 0],
    ],
  },
  bath: {
    rows: [
      ["back", "center", ["washbasin"]],
      ["back", "end", ["wc"]],
      ["front", "start", ["bathtub"]],
      ["left", "start", ["washer"]],
    ],
    spots: [["lamp_downlight", 0.5, 0.5, 0]],
  },
  bedroom: {
    rows: [
      ["back", "center", ["nightstand", "bed", "nightstand"]],
      ["left", "center", [["wardrobe", [2, 0.6, 2.1]]]],
      ["front", "end", ["dresser"]],
    ],
    spots: [["lamp_ceiling", 0.5, 0.55, 0]],
  },
  living: {
    rows: [
      ["back", "center", ["tv_board"]],
      ["right", "start", ["shelf"]],
    ],
    spots: [
      ["sofa", 0.5, 0.72, 180],
      ["coffee_table", 0.5, 0.52, 0],
      [["rug", [2.2, 1.6, 0.01]], 0.5, 0.55, 0],
      ["armchair", 0.14, 0.5, 270],
      ["lamp_floor", 0.86, 0.8, 0],
      ["plant", 0.9, 0.12, 0],
      ["lamp_ceiling", 0.5, 0.45, 0],
    ],
  },
  dining: {
    rows: [["back", "center", ["sideboard"]]],
    spots: [
      ["table", 0.5, 0.55, 0],
      ["chair", 0.4, 0.35, 0],
      ["chair", 0.6, 0.35, 0],
      ["chair", 0.4, 0.75, 180],
      ["chair", 0.6, 0.75, 180],
      ["lamp_pendant", 0.5, 0.55, 0],
    ],
  },
  office: {
    rows: [
      ["back", "center", ["desk"]],
      ["left", "center", ["shelf", "shelf"]],
    ],
    spots: [
      ["office_chair", 0.5, 0.38, 180],
      ["lamp_ceiling", 0.5, 0.55, 0],
    ],
  },
  kids: {
    rows: [
      ["left", "start", [["bed", [0.9, 2, 0.8]]]],
      ["back", "end", [["desk", [1.2, 0.6, 0.75]]]],
      ["right", "end", ["shelf"]],
    ],
    spots: [
      [["rug", [1.6, 1.2, 0.01]], 0.55, 0.6, 0],
      ["lamp_ceiling", 0.5, 0.5, 0],
    ],
  },
  hall: {
    rows: [["left", "start", ["coat_rack"]]],
    spots: [
      ["lamp_downlight", 0.5, 0.3, 0],
      ["lamp_downlight", 0.5, 0.7, 0],
    ],
  },
};

const typeOf = (piece: Piece): FurnitureType => (typeof piece === "string" ? piece : piece[0]);
const sizeOf = (piece: Piece): Size => (typeof piece === "string" ? FURNITURE_SIZE[piece] : piece[1]);

const MARGIN = 0.05; // distance to a wall end or the room's edge
const WALL_CLEARANCE = 0.02; // air between a piece and the wall

const thousandths = (n: number) => Math.round(n * 1000) / 1000;

/**
 * Where a piece stands when it is `along` metres from the start of a wall and `depth` metres deep.
 * A wall's start is its left end seen from inside the room, so the back wall runs towards +x, the right wall
 * towards +z, the front wall towards -x and the left wall towards -z. The turn makes the piece face the room.
 */
function atWall(box: { x0: number; x1: number; z0: number; z1: number }, wall: Wall, along: number, depth: number): { x: number; z: number; turn: number } {
  switch (wall) {
    case "back":
      return { x: box.x0 + along, z: box.z0 + depth, turn: 0 };
    case "right":
      return { x: box.x1 - depth, z: box.z0 + along, turn: 90 };
    case "front":
      return { x: box.x1 - along, z: box.z1 - depth, turn: 180 };
    case "left":
      return { x: box.x0 + depth, z: box.z1 - along, turn: 270 };
  }
}

/** The furniture of a package for a room; `nextId` supplies the ids of the new pieces. */
export function furnishRoom(room: Room, pkg: PackageId, nextId: () => string): Furniture[] {
  const box = bounds(room.points);
  const width = box.x1 - box.x0;
  const depth = box.z1 - box.z0;
  const made: Furniture[] = [];
  const put = (type: FurnitureType, x: number, z: number, rotation: number, [w, d, h]: Size) => {
    made.push({ id: nextId(), type, x: thousandths(x), z: thousandths(z), rotation, w, d, h, variant: null, entity: null, power: null });
  };

  for (const [wall, align, pieces] of RECIPES[pkg].rows) {
    const room_along = wall === "back" || wall === "front" ? width : depth;
    // pieces that no longer fit on the wall are left out
    let used = 0;
    const fitting: Piece[] = [];
    for (const piece of pieces) {
      if (used + sizeOf(piece)[0] > room_along - 0.1) break;
      fitting.push(piece);
      used += sizeOf(piece)[0];
    }
    let cursor = align === "start" ? MARGIN : align === "end" ? room_along - used - MARGIN : (room_along - used) / 2;
    for (const piece of fitting) {
      const size = sizeOf(piece);
      const spot = atWall(box, wall, cursor + size[0] / 2, size[1] / 2 + WALL_CLEARANCE);
      put(typeOf(piece), spot.x, spot.z, spot.turn, size);
      cursor += size[0];
    }
  }

  for (const [piece, fx, fz, turn] of RECIPES[pkg].spots) {
    const size = sizeOf(piece);
    const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
    const x = clamp(box.x0 + width * fx, box.x0 + size[0] / 2 + MARGIN, box.x1 - size[0] / 2 - MARGIN);
    const z = clamp(box.z0 + depth * fz, box.z0 + size[1] / 2 + MARGIN, box.z1 - size[1] / 2 - MARGIN);
    put(typeOf(piece), x, z, turn, size);
  }
  return made;
}

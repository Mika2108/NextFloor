import type { Floor } from "../../model.ts";
import type { GeoBuffer, LineBuffer } from "../geo.ts";

/** Roof geometry that sits on a floor: y = 0 is `base` above the floor's own level. */
export interface RoofGeometry {
  floor: Floor;
  base: number;
  solid: GeoBuffer;
  lines: LineBuffer;
  /** See-through roof panels of canopies, drawn with their own, fainter material. */
  glass: GeoBuffer;
  /** The roof sections in this part (sections roofs only). */
  sections?: string[];
  /** False for canopies: they stand on posts on their floor and do not lift off with the roof when the floors are pulled apart. */
  lift?: boolean;
}

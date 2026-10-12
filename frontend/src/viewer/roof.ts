// The roof, split into modules in roof/: the single roof, roof sections, canopy frames, and what sits in a roof.

export { buildRoof } from "./roof/roof.ts";
export { roofFloor } from "./roof/single.ts";
export { pushSection } from "./roof/sections.ts";
export { pushModules, type RoofWindowState } from "./roof/fittings.ts";
export type { RoofGeometry } from "./roof/types.ts";

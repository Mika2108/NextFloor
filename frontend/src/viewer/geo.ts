// Geometry primitives for walls, furniture and opening parts: merged vertex-coloured buffers with a per-vertex fold value
// (see build.ts), line buffers, cutting at a height, and shapes. Split into modules in geo/.

export { DEG, EDGE_BASE, EDGE_CUT, EDGE_SOFT, EDGE_TOP, shade } from "./geo/colors.ts";
export { ALWAYS, CAP_OFFSET, CUT_OFFSET, FURN_OFFSET, GeoBuffer, LineBuffer, LOWER_OFFSET } from "./geo/buffers.ts";
export { cutAbove, cutLinesAbove } from "./geo/cut.ts";
export { pushLoft, pushLyingCyl, pushPrism, pushSkin, triangulate, type PrismOptions } from "./geo/shapes.ts";

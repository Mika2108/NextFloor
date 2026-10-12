// Room lighting without real-time lights, split into modules in lighting/: the surface the light is painted on, and the
// light that falls on it.

export { buildLightSurface, type LightSurface } from "./lighting/surface.ts";
export { lightColors, roomIndexAt, zoneOf, type LightKind, type LightSource } from "./lighting/light.ts";

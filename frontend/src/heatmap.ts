// Heat map: the floor of a room is coloured by what its sensors say (temperature, humidity, CO₂).

import { roomClimateValue } from "./devices.ts";
import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export type HeatMode = "none" | "temperature" | "humidity" | "co2" | "values";

/** The modes that paint floors ("values" prints numbers at the room names instead). */
export type HeatColorMode = Exclude<HeatMode, "none" | "values">;

type Rgb = [number, number, number];
type Stop = readonly [value: number, colour: Rgb];

interface Scale {
  deviceClass: string;
  unit: string;
  stops: Stop[];
}

/** Colour ramps, from low to high. Between two stops the colour is blended; outside the range it stays at the end. */
export const HEAT_SCALES: Record<HeatColorMode, Scale> = {
  temperature: {
    deviceClass: "temperature",
    unit: "°C",
    stops: [[16, [0.2, 0.45, 1]], [20, [0.15, 0.85, 0.75]], [22.5, [0.95, 0.8, 0.3]], [26, [1, 0.28, 0.18]]],
  },
  humidity: {
    deviceClass: "humidity",
    unit: "%",
    stops: [[30, [0.95, 0.6, 0.2]], [45, [0.3, 0.88, 0.5]], [60, [0.2, 0.78, 1]], [75, [0.32, 0.4, 0.98]]],
  },
  co2: {
    deviceClass: "carbon_dioxide",
    unit: "ppm",
    stops: [[450, [0.3, 0.88, 0.5]], [800, [0.98, 0.84, 0.3]], [1200, [1, 0.5, 0.2]], [1600, [0.98, 0.25, 0.25]]],
  },
};

const mix = (a: Rgb, b: Rgb, t: number): Rgb => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

/** The colour a value gets on a scale. */
export function heatColor(mode: HeatColorMode, value: number): Rgb {
  const { stops } = HEAT_SCALES[mode];
  const upper = stops.findIndex(([limit]) => value <= limit);
  if (upper === -1) return stops[stops.length - 1][1];
  if (upper === 0) return stops[0][1];
  const [lowValue, lowColour] = stops[upper - 1];
  const [highValue, highColour] = stops[upper];
  return mix(lowColour, highColour, (value - lowValue) / (highValue - lowValue));
}

/** The reading of every room that has a fitting sensor, by room id. */
export function roomValues(hass: HomeAssistant, building: Building, mode: HeatColorMode): Map<string, number> {
  const values = new Map<string, number>();
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      const reading = roomClimateValue(hass, floor, room, mode);
      if (reading !== null) values.set(room.id, reading);
    }
  }
  return values;
}

/** The scale as a CSS gradient, for the legend bar. */
export function heatGradient(mode: HeatColorMode): string {
  const { stops } = HEAT_SCALES[mode];
  const first = stops[0][0];
  const span = stops[stops.length - 1][0] - first;
  const parts = stops.map(([value, colour]) => `rgb(${colour.map((c) => Math.round(c * 255)).join(",")}) ${Math.round(((value - first) / span) * 100)}%`);
  return `linear-gradient(90deg, ${parts.join(", ")})`;
}

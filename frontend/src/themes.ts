// Looks of the 3D view, shared by the main bundle (settings, stage background) and the 3D bundle.

export type Theme = "neon" | "blueprint" | "day";

export const THEMES: Theme[] = ["neon", "blueprint", "day"];

/** A look to pick: one of the looks, or "auto" – day while the sun is up, neon after sunset. */
export type Look = Theme | "auto";

export const LOOKS: Look[] = ["auto", ...THEMES];

/** The look to draw now: "auto" follows sun.sun (day above the horizon, else neon; neon when there is no sun entity). */
export function lookNow(look: Look | undefined, sunState: string | undefined): Theme {
  if (look !== "auto") return look ?? "neon";
  return sunState === "above_horizon" ? "day" : "neon";
}

/** Background of the 3D stage per look (sky in the middle, ground at the edges), night and day. */
export const STAGE: Record<Theme, { night: [number[], number[]]; day: [number[], number[]] }> = {
  neon: {
    night: [
      [11, 17, 32],
      [7, 11, 20],
    ],
    day: [
      [26, 44, 78],
      [12, 20, 36],
    ],
  },
  blueprint: {
    night: [
      [26, 70, 130],
      [10, 38, 78],
    ],
    day: [
      [34, 86, 150],
      [14, 48, 96],
    ],
  },
  day: {
    night: [
      [214, 224, 238],
      [176, 190, 210],
    ],
    day: [
      [242, 246, 251],
      [205, 216, 230],
    ],
  },
};

// The own background behind the house (building settings → backdrop), as CSS for the 3D stage.

import type { Building } from "./model.ts";

/** The own background behind the house: a colour, or a picture (from Home Assistant or https) dimmed a little. */
export function backdropStyle(b: Building["settings"]["backdrop"]): string {
  if (!b) return "";
  const dim = Math.min(0.8, Math.max(0, b.dim ?? 0.35));
  const image = b.image && /^(https:\/\/|\/local\/|\/api\/)[^"'()\\\s]+$/.test(b.image) ? b.image : null;
  const color = b.color && /^#[0-9a-f]{6}$/i.test(b.color) ? b.color : null;
  if (image) return `;background:linear-gradient(rgba(0,0,0,${dim}),rgba(0,0,0,${dim})),center / cover no-repeat url("${image}")${color ? ` ${color}` : ""}`;
  return color ? `;background:${color}` : "";
}

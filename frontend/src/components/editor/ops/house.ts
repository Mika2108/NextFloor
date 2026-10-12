// Settings of the house as a whole: who is tracked by which sensor, the start camera, the data of an own button.

import type { PresenceLink, StartView } from "../../../model.ts";
import type { EntityOption } from "../entities.ts";

/** The presence links with `person` pointing at `sensor`; null or "none" removes the link. */
export function withPresence(links: readonly PresenceLink[], person: string, sensor: string | null): PresenceLink[] {
  const others = links.filter((link) => link.person !== person);
  return sensor && sensor !== "none" ? [...others, { person, sensor }] : others;
}

/** Room sensors that look like they belong to this person (named after them, ESPresense and Bermuda style) come first. */
export function likelyRoomSensors(options: readonly EntityOption[], person: string): EntityOption[] {
  const slug = person.slice(person.indexOf(".") + 1);
  const likely = (o: EntityOption) => o.id.includes(slug) && /(area|room|raum|bermuda|espresense)/.test(o.id);
  return [...options.filter(likely), ...options.filter((o) => !likely(o))];
}

/** The start view as the line to put into a card's YAML. */
export function startViewYaml(view: StartView): string {
  const target = view.target ? `, target: { x: ${view.target.x}, y: ${view.target.y}, z: ${view.target.z} }` : "";
  return `start_view: { theta: ${view.theta}, phi: ${view.phi}, radius: ${view.radius}${target} }`;
}

export type ParsedData = { ok: true; value: Record<string, unknown> | null } | { ok: false };

/** The extra data of a button, typed as JSON: empty means none, and anything but an object is refused. */
export function parseButtonData(text: string): ParsedData {
  const raw = text.trim();
  if (!raw) return { ok: true, value: null };
  try {
    const value: unknown = JSON.parse(raw);
    return value && typeof value === "object" && !Array.isArray(value) ? { ok: true, value: value as Record<string, unknown> } : { ok: false };
  } catch {
    return { ok: false };
  }
}

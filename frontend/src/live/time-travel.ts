// Time travel: the house as it was at an earlier moment, from Home Assistant's recorder. The history of the entities the 3D view shows
// is loaded once for the chosen span; at any moment the view is fed a copy of hass whose states are the ones of that moment, so
// lamps, blinds, doors and robots replay with the same code that shows them live.

import type { HassEntity, HomeAssistant } from "../types.ts";

/** The kinds of entities worth replaying: what switches, moves or opens. Sensors with values change too often to be useful. */
const REPLAY = /^(light|switch|cover|binary_sensor|lock|media_player|vacuum|fan|climate|lawn_mower|input_boolean|person|device_tracker|alarm_control_panel)\./;
const MAX_ENTITIES = 200;

export interface Change {
  /** Milliseconds since 1970. */
  t: number;
  state: string;
  attributes: Record<string, unknown>;
}

export type History = Map<string, Change[]>;

interface CompressedState {
  s: string;
  a?: Record<string, unknown>;
  /** Last changed / last updated, in seconds since 1970. */
  lc?: number;
  lu: number;
}

/** The entities of the view that are replayed. */
export const replayable = (ids: Iterable<string>): string[] => [...new Set([...ids].filter((id) => REPLAY.test(id)))].slice(0, MAX_ENTITIES);

/** Turns the recorder's compressed answer into sorted changes per entity; attributes carry on until they change. */
export function parseHistory(raw: Record<string, CompressedState[]>): History {
  const out: History = new Map();
  for (const [id, list] of Object.entries(raw)) {
    let attributes: Record<string, unknown> = {};
    const changes: Change[] = [];
    for (const row of list) {
      if (row.a) attributes = row.a;
      changes.push({ t: Math.round((row.lu ?? row.lc ?? 0) * 1000), state: row.s, attributes });
    }
    changes.sort((p, q) => p.t - q.t);
    out.set(id, changes);
  }
  return out;
}

/** Loads the history of the replayed entities between two moments (ms). */
export async function loadHistory(hass: HomeAssistant, ids: readonly string[], from: number, to: number): Promise<History> {
  if (ids.length === 0) return new Map();
  const raw = await hass.callWS<Record<string, CompressedState[]>>({
    type: "history/history_during_period",
    start_time: new Date(from).toISOString(),
    end_time: new Date(to).toISOString(),
    entity_ids: ids,
    include_start_time_state: true,
    significant_changes_only: false,
    minimal_response: false,
    no_attributes: false,
  });
  return parseHistory(raw);
}

/** The change in effect at moment t: the last one at or before it (null before the first). */
export function changeAt(changes: readonly Change[], t: number): Change | null {
  let [lo, hi] = [0, changes.length - 1];
  let found: Change | null = null;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (changes[mid].t <= t) {
      found = changes[mid];
      lo = mid + 1;
    } else hi = mid - 1;
  }
  return found;
}

/** A copy of hass whose replayed entities show their state at moment t; everything else stays as it is now. */
export function hassAt(hass: HomeAssistant, history: History, t: number): HomeAssistant {
  const states: Record<string, HassEntity> = { ...hass.states };
  for (const [id, changes] of history) {
    const c = changeAt(changes, t);
    if (!c) continue;
    const now = hass.states[id];
    states[id] = { ...(now ?? { entity_id: id }), entity_id: id, state: c.state, attributes: { ...(now?.attributes ?? {}), ...c.attributes } } as HassEntity;
  }
  return { ...hass, states };
}

/** The moments something switched, opened or moved, for the marks on the timeline (at most `max`, spread evenly). */
export function changeMoments(history: History, from: number, to: number, max = 400): number[] {
  const moments: number[] = [];
  for (const changes of history.values()) {
    for (let i = 1; i < changes.length; i++) {
      if (changes[i].state !== changes[i - 1].state && changes[i].t >= from && changes[i].t <= to) moments.push(changes[i].t);
    }
  }
  moments.sort((a, b) => a - b);
  if (moments.length <= max) return moments;
  const step = moments.length / max;
  return Array.from({ length: max }, (_, i) => moments[Math.floor(i * step)]);
}

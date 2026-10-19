// Registered plugins and the lookups the rest of NextFloor uses. A broken plugin must never break
// the house view: every call into plugin code is guarded and failures are recorded per plugin.

import type { DeviceKind } from "../entities/kinds.ts";
import type { HassEntity } from "../types.ts";
import { PLUGIN_API_VERSION, type Glow, type LightAnimationFn, type MarkerContext, type MarkerPatch, type NextFloorPlugin, type RoomSectionContext } from "./api.ts";

export interface PluginStatus {
  id: string;
  name: string;
  version: string;
  /** The module URL it came from (empty when registered by a dashboard resource). */
  source: string;
  errors: string[];
}

// The main bundle and the lazily loaded 3D bundle each carry their own copy of this module, so the
// state lives on globalThis: both copies must see the same plugins.
interface Store {
  plugins: Map<string, { plugin: NextFloorPlugin; status: PluginStatus }>;
  listeners: Set<() => void>;
}
const g = globalThis as typeof globalThis & { __nextfloorPluginStore?: Store };
const store: Store = (g.__nextfloorPluginStore ??= { plugins: new Map(), listeners: new Set() });
const plugins = store.plugins;
const listeners = store.listeners;

const BUILT_IN_ANIMATIONS = new Set(["none", "rainbow", "pulse", "flicker"]);
const MAX_ERRORS = 5;

function note(status: PluginStatus, err: unknown): void {
  if (status.errors.length < MAX_ERRORS) status.errors.push(err instanceof Error ? err.message : String(err));
}

function changed(): void {
  for (const listener of listeners) listener();
}

/** Called whenever a plugin is added, replaced or fails; returns the unsubscribe function. */
export function onPluginsChanged(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Validates and stores a plugin. Throws with a readable message when the plugin cannot be used. */
export function registerPlugin(plugin: NextFloorPlugin, source = ""): void {
  if (!plugin || typeof plugin !== "object") throw new Error("register() needs a plugin object");
  if (typeof plugin.id !== "string" || !/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(plugin.id)) throw new Error("plugin id must be 1–64 letters, digits, '.', '_' or '-'");
  if (plugin.apiVersion !== PLUGIN_API_VERSION) throw new Error(`plugin "${plugin.id}" wants API ${String(plugin.apiVersion)}, NextFloor offers ${PLUGIN_API_VERSION}`);
  for (const name of Object.keys(plugin.lightAnimations ?? {})) {
    if (BUILT_IN_ANIMATIONS.has(name)) throw new Error(`plugin "${plugin.id}": light animation "${name}" is built in`);
    if (typeof plugin.lightAnimations?.[name] !== "function") throw new Error(`plugin "${plugin.id}": light animation "${name}" is not a function`);
  }
  for (const device of plugin.devices ?? []) if (typeof device?.match !== "function") throw new Error(`plugin "${plugin.id}": every device extension needs match()`);
  for (const section of plugin.roomSections ?? []) if (typeof section?.render !== "function" || typeof section.id !== "string") throw new Error(`plugin "${plugin.id}": every room section needs id and render()`);
  plugins.set(plugin.id, {
    plugin,
    status: { id: plugin.id, name: plugin.name || plugin.id, version: plugin.version || "", source, errors: [] },
  });
  changed();
}

export function unregisterPlugin(id: string): void {
  if (plugins.delete(id)) changed();
}

export const pluginStatuses = (): PluginStatus[] => [...plugins.values()].map((p) => p.status);

// ---- light animations ---------------------------------------------------------------------------

/** Names of the light animations plugins add, for the editor's effect mapping. */
export const pluginLightAnimationNames = (): string[] => [...plugins.values()].flatMap((p) => Object.keys(p.plugin.lightAnimations ?? {}));

function findAnimation(name: string): { fn: LightAnimationFn; status: PluginStatus } | null {
  for (const { plugin, status } of plugins.values()) {
    const fn = plugin.lightAnimations?.[name];
    if (fn) return { fn, status };
  }
  return null;
}

export const hasPluginAnimation = (name: string): boolean => findAnimation(name) !== null;

/** Runs a plugin animation; a throwing or malformed one leaves the glow as it was. */
export function animateWithPlugin(glow: Glow, name: string, seconds: number): Glow {
  const found = findAnimation(name);
  if (!found) return glow;
  try {
    const out = found.fn({ color: [...glow.color] as Glow["color"], level: glow.level }, seconds);
    const ok = out && Array.isArray(out.color) && out.color.length === 3 && out.color.every((c) => Number.isFinite(c)) && Number.isFinite(out.level);
    if (!ok) return glow;
    const clamp = (v: number) => Math.max(0, Math.min(1, v));
    return { color: [clamp(out.color[0]), clamp(out.color[1]), clamp(out.color[2])], level: clamp(out.level) };
  } catch (err) {
    note(found.status, err);
    return glow;
  }
}

// ---- devices ------------------------------------------------------------------------------------

function* matchingDevices(entityId: string, state: HassEntity | undefined) {
  for (const { plugin, status } of plugins.values()) {
    for (const device of plugin.devices ?? []) {
      let hit = false;
      try {
        hit = device.match(entityId, state);
      } catch (err) {
        note(status, err);
      }
      if (hit) yield { device, status };
    }
  }
}

/** The kind a plugin gives an entity NextFloor does not know itself (null: no plugin claims it). */
export function pluginKind(entityId: string, state: HassEntity | undefined): DeviceKind | null {
  for (const { device } of matchingDevices(entityId, state)) return device.kind ?? "sensor";
  return null;
}

/** Collected marker changes of every matching plugin; later plugins win on the same field. */
export function pluginMarkerPatch(ctx: MarkerContext): MarkerPatch | null {
  let patch: MarkerPatch | null = null;
  for (const { device, status } of matchingDevices(ctx.entityId, ctx.state)) {
    if (!device.marker) continue;
    try {
      const p = device.marker(ctx);
      if (!p) continue;
      patch = { ...(patch ?? {}) };
      if (typeof p.icon === "string" && p.icon) patch.icon = p.icon;
      if (typeof p.text === "string") patch.text = p.text.slice(0, 60);
      if (typeof p.active === "boolean") patch.active = p.active;
    } catch (err) {
      note(status, err);
    }
  }
  return patch;
}

// ---- room sections ------------------------------------------------------------------------------

export interface RenderedSection {
  key: string;
  title: string;
  content: Node | string;
}

export function pluginRoomSections(ctx: RoomSectionContext): RenderedSection[] {
  const out: RenderedSection[] = [];
  for (const { plugin, status } of plugins.values()) {
    for (const section of plugin.roomSections ?? []) {
      try {
        const content = section.render(ctx);
        if (content === null || content === undefined || content === "") continue;
        if (typeof content !== "string" && !(content instanceof Node)) continue;
        out.push({ key: `${plugin.id}/${section.id}`, title: status.name, content });
      } catch (err) {
        note(status, err);
      }
    }
  }
  return out;
}

/** Test helper: forget every plugin. */
export function resetPlugins(): void {
  plugins.clear();
  changed();
}

// The public plugin API (version 1). Plugins are plain ES modules that call
// `window.NextFloor.register({...})`; nothing here may import Lit or three.js, so the
// contract stays small and stable. Documented in docs/plugins.md.

import type { DeviceKind } from "../entities/kinds.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

export const PLUGIN_API_VERSION = 1;

/** A light's glow as NextFloor draws it: colour channels 0–1 and the brightness level 0–1. */
export interface Glow {
  color: [number, number, number];
  level: number;
}

/** Turns the current glow into the animated one at `seconds` since the page loaded. */
export type LightAnimationFn = (glow: Glow, seconds: number) => Glow;

export interface MarkerContext {
  hass: HomeAssistant;
  entityId: string;
  state: HassEntity;
}

/** What a plugin may change on a device's marker; leave a field out to keep NextFloor's own value. */
export interface MarkerPatch {
  /** "mdi:icon-name" or inline SVG markup. */
  icon?: string;
  /** The short state text under the pin, e.g. "3 Pakete". */
  text?: string;
  /** Highlights the marker the way an "on" device is highlighted. */
  active?: boolean;
}

export interface DeviceExtension {
  /** Which entities this extension handles. Runs for every placed entity, so keep it cheap. */
  match: (entityId: string, state: HassEntity | undefined) => boolean;
  /**
   * Lets NextFloor show entities of domains it does not know (e.g. `vacuum`, `lawn_mower`, `todo`).
   * The kind decides the default icon and how the device behaves; default "sensor".
   */
  kind?: DeviceKind;
  marker?: (ctx: MarkerContext) => MarkerPatch | null | undefined;
}

export interface RoomSectionContext {
  hass: HomeAssistant;
  room: { id: string; name: string; area_id: string | null };
  /** The entities NextFloor lists for this room. */
  entities: string[];
}

/** An extra block at the end of a room's panel (a small custom card). */
export interface RoomSection {
  id: string;
  /** Return a DOM node, a plain-text string, or null to show nothing for this room. */
  render: (ctx: RoomSectionContext) => Node | string | null | undefined;
}

export interface NextFloorPlugin {
  /** Unique, e.g. "garage-door-plus". Registering the same id again replaces the plugin. */
  id: string;
  name?: string;
  version?: string;
  /** The API version the plugin was written for; must be 1. */
  apiVersion: number;
  lightAnimations?: Record<string, LightAnimationFn>;
  devices?: DeviceExtension[];
  roomSections?: RoomSection[];
}

/** A plugin source stored in the plan's settings. */
export interface PluginRef {
  url: string;
  enabled: boolean;
}

/** Where plugin modules may be loaded from: Home Assistant's own www folder, HACS, or HTTPS. */
export const isAllowedPluginUrl = (url: string): boolean => /^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(url.trim());

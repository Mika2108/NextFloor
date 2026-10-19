// Loads plugin modules and exposes `window.NextFloor` for them. Two ways in:
//  1. URLs in the plan's settings (Extensions page) are imported by the panel and the card.
//  2. A dashboard resource (e.g. installed by HACS) that loads before NextFloor pushes its plugin
//     onto `window.__nextfloorPlugins`; it is picked up when NextFloor starts.

import { PLUGIN_API_VERSION, isAllowedPluginUrl, type NextFloorPlugin, type PluginRef } from "./api.ts";
import { registerPlugin } from "./registry.ts";

export interface LoadState {
  url: string;
  state: "loading" | "loaded" | "error";
  error?: string;
}

const loads = new Map<string, LoadState>();
/** The module URL currently being evaluated, so register() calls can be attributed to it. */
let currentSource = "";

declare global {
  interface Window {
    NextFloor?: { apiVersion: number; register: (plugin: NextFloorPlugin) => void };
    __nextfloorPlugins?: NextFloorPlugin[];
  }
}

/** Installs `window.NextFloor` once and registers plugins queued by earlier scripts. */
export function installPluginGlobal(): void {
  // globalThis is window in the browser
  const w = globalThis as unknown as Window;
  if (w.NextFloor) return;
  w.NextFloor = {
    apiVersion: PLUGIN_API_VERSION,
    register: (plugin) => registerPlugin(plugin, currentSource),
  };
  const queued = w.__nextfloorPlugins ?? [];
  w.__nextfloorPlugins = [];
  for (const plugin of queued) {
    try {
      registerPlugin(plugin);
    } catch (err) {
      console.warn("NextFloor: plugin rejected", err);
    }
  }
}

export const pluginLoadStates = (): LoadState[] => [...loads.values()];

/**
 * Imports every enabled plugin URL that was not imported yet. Modules are cached by the browser,
 * so turning a plugin off takes effect after a reload (the Extensions page says so).
 */
export async function loadPlugins(refs: PluginRef[] | undefined, importer: (url: string) => Promise<unknown> = (url) => import(/* @vite-ignore */ url)): Promise<void> {
  installPluginGlobal();
  for (const ref of refs ?? []) {
    if (!ref.enabled || loads.has(ref.url)) continue;
    if (!isAllowedPluginUrl(ref.url)) {
      loads.set(ref.url, { url: ref.url, state: "error", error: "not allowed: use /local/…, /hacsfiles/… or https://…" });
      continue;
    }
    const entry: LoadState = { url: ref.url, state: "loading" };
    loads.set(ref.url, entry);
    try {
      currentSource = ref.url;
      await importer(ref.url);
      entry.state = "loaded";
    } catch (err) {
      entry.state = "error";
      entry.error = err instanceof Error ? err.message : String(err);
      console.warn(`NextFloor: plugin ${ref.url} failed to load`, err);
    } finally {
      currentSource = "";
    }
  }
}

/** Test helper. */
export function resetLoads(): void {
  loads.clear();
}

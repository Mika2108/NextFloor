// Main bundle: sidebar panel, dashboard card and editor. three.js is loaded separately on demand.

import "./polyfills.ts";
import "./panel.ts";
import "./card.ts";

import { installPluginGlobal } from "./plugins/loader.ts";

// window.NextFloor for plugins; picks up plugins a dashboard resource queued before NextFloor loaded
installPluginGlobal();

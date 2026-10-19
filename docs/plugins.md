# Writing NextFloor plugins

Plugins add things to NextFloor without changing its code: your own light animations, support for
entities NextFloor does not know, and small cards in a room's panel. A plugin is one JavaScript
file (an ES module) that calls `window.NextFloor.register({...})`.

> **Trust:** a plugin runs in your browser with the same rights as NextFloor and Home Assistant's
> frontend. Only install plugins whose source you trust.

## Installing a plugin

1. Put the file into Home Assistant's `www` folder, e.g. `/config/www/nextfloor/my-plugin.js`.
2. In NextFloor open **Extensions → Plugins**, enter `/local/nextfloor/my-plugin.js` and press **Add**.
3. The plugin loads right away. Turning a plugin off or removing it takes effect after reloading the page.

Allowed addresses: `/local/…` (the `www` folder), `/hacsfiles/…` (installed by HACS) and `https://…`,
each ending in `.js` or `.mjs`. At most 20 plugins.

A plugin can also be loaded as a **dashboard resource** (Settings → Dashboards → Resources, type
JavaScript module), which is how HACS installs frontend plugins. It then shows up on the Extensions
page as "registered by a dashboard resource". Resources only load with dashboards, so for the
sidebar panel add the plugin on the Extensions page as well.

## The API (version 1)

```js
const plugin = {
  id: "my-plugin",        // required: letters, digits, '.', '_', '-'; the same id again replaces the plugin
  name: "My plugin",      // shown on the Extensions page and as the room-section title
  version: "1.0.0",
  apiVersion: 1,          // required: must be 1

  lightAnimations: { … },
  devices: [ … ],
  roomSections: [ … ],
};

// works whether NextFloor loaded before or after your script
if (window.NextFloor) window.NextFloor.register(plugin);
else (window.__nextfloorPlugins ??= []).push(plugin);
```

`register` throws when the plugin is not valid (wrong `apiVersion`, a missing function, a built-in
animation name). Errors your functions throw later are caught; NextFloor keeps working and shows
the error next to the plugin on the Extensions page.

### `lightAnimations`

A map from an animation name to a function `(glow, seconds) => glow`. `glow` is
`{ color: [r, g, b], level }` with every value between 0 and 1, after the light's brightness was
applied; `seconds` counts up while the page is open. Return a new glow; values are clamped to 0–1.

The names appear in a light's **Effects** settings next to the built-in Rainbow, Pulse and Flicker,
so you can map e.g. the WLED effect "Fireworks" to your `"strobe"`. The names `none`, `rainbow`,
`pulse` and `flicker` are taken. Keep the function cheap: it runs every frame for every lit lamp.

```js
lightAnimations: {
  strobe: (glow, seconds) => ({ ...glow, level: seconds % 0.5 < 0.25 ? glow.level : 0 }),
},
```

### `devices`

Each entry handles the entities its `match(entityId, state)` returns `true` for:

| Field | What it does |
|---|---|
| `match(entityId, state)` | Required. Runs for every placed entity, so keep it cheap. |
| `kind` | For entities of domains NextFloor does not know (`vacuum`, `lawn_mower`, `todo`, …): NextFloor then shows them like this kind (`light`, `switch`, `fan`, `cover`, `climate`, `media`, `lock`, `sensor`, `binary`, `scene`, `script`; default `sensor`). |
| `marker({ hass, entityId, state })` | Returns what to change on the device's marker: `icon` (`"mdi:name"` or inline SVG), `text` (max. 60 characters), `active` (highlighted like an "on" device). Leave a field out to keep NextFloor's value. An icon picked in the plan wins over the plugin's. |

```js
devices: [{
  match: (id) => id.startsWith("vacuum."),
  kind: "switch",
  marker: ({ state }) => ({ icon: "mdi:robot-vacuum", text: state.state, active: state.state === "cleaning" }),
}],
```

### `roomSections`

Extra blocks at the end of a room's panel, titled with the plugin's name. `render({ hass, room, entities })`
gets the room (`id`, `name`, `area_id`) and the entities the panel lists; return a DOM node, a string,
or `null` to show nothing in this room. It runs again whenever Home Assistant's state changes, so
build the content fresh each time and keep it small.

```js
roomSections: [{
  id: "open-windows",
  render: ({ hass, entities }) => {
    const open = entities.filter((id) => hass.states[id]?.attributes.device_class === "window" && hass.states[id]?.state === "on");
    return open.length ? `🪟 ${open.length} window(s) open` : null;
  },
}],
```

A complete example with all three: [`docs/examples/nextfloor-plugin-example.js`](examples/nextfloor-plugin-example.js).

## Compatibility

The API version only changes when something breaks existing plugins; new optional fields can come
in any release. A plugin written for another API version is refused with a message on the
Extensions page instead of half-working.

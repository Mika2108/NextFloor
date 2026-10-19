// Example NextFloor plugin (API 1). Copy it to /config/www/nextfloor/example.js and add
// /local/nextfloor/example.js on NextFloor's Extensions page. See docs/plugins.md.

const plugin = {
  id: "example",
  name: "Example plugin",
  version: "1.0.0",
  apiVersion: 1,

  // 1. Light animations: map a light's effect to "strobe" in the light's effect settings.
  lightAnimations: {
    strobe: (glow, seconds) => ({ ...glow, level: seconds % 0.5 < 0.25 ? glow.level : 0 }),
    sunrise: (glow, seconds) => {
      const t = (Math.sin(seconds * 0.5) + 1) / 2;
      return { color: [1, 0.35 + 0.5 * t, 0.1 + 0.6 * t], level: glow.level * (0.4 + 0.6 * t) };
    },
  },

  // 2. Devices: show robot vacuums (a domain NextFloor does not know) with their own icon and text.
  devices: [
    {
      match: (entityId) => entityId.startsWith("vacuum."),
      kind: "switch",
      marker: ({ state }) => ({
        icon: "mdi:robot-vacuum",
        text: state.attributes.battery_level !== undefined ? `${state.state} · ${state.attributes.battery_level} %` : state.state,
        active: state.state === "cleaning",
      }),
    },
  ],

  // 3. Room sections: a small card at the end of every room's panel.
  roomSections: [
    {
      id: "open-windows",
      render: ({ hass, entities }) => {
        const open = entities.filter((id) => id.startsWith("binary_sensor.") && hass.states[id]?.attributes.device_class === "window" && hass.states[id]?.state === "on");
        if (!open.length) return null;
        const p = document.createElement("p");
        p.textContent = `🪟 ${open.length} window(s) open`;
        return p;
      },
    },
  ],
};

// Works whether NextFloor is already running or loads after this script (dashboard resource).
if (window.NextFloor) window.NextFloor.register(plugin);
else (window.__nextfloorPlugins ??= []).push(plugin);

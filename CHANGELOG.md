# Changelog

All notable changes to NextFloor, newest first. Every release lists what is **Added**, **Changed** and **Fixed**. Releases: [GitHub releases](https://github.com/therealMRBK/NextFloor/releases).

## 0.7.0

### Added

- **Three new free furniture packs**, all built from scratch in NextFloor's own part format:
  - **Treppen & Geländer (10):** straight, L-shaped, U-shaped, spiral and space-saving staircases, landing, outdoor steps and railings in metal, glass and wood. The staircases cut their opening into the floor above.
  - **Architektur & Ausbau (10):** round and square columns, ceiling beam, chimney breast, glass partition, sliding wall, raised platform, half wall, shelving divider and pilaster.
  - **Garage & Werkstatt (9):** workbench, tool cabinet and trolley, storage rack, stack of tyres, drill press, compressor, bicycle stand and paint cabinet.
- All three appear in the demo's model showcase.

## 0.6.3

### Added

- **Model showcase in the online demo:** every model of NextFloor, the basic ones and those of all packs, can be looked at live in a room of their own, ten at a time, with the names listed in the order they stand. Open the demo and choose "All models" (bottom right), or use `?showcase`.

### Changed

- **Languages:** NextFloor now comes in German and English only; Home Assistant instances in any other language show English. The 14 further language files were removed.

### Fixed

- The online demo no longer fails to deploy on a release (it deploys when the demo changes on `main`).
- A formatting slip in the Python code that made the checks fail.

## 0.6.2

### Added

- **Glow behind the TV:** a TV, monitor or TV board has a new setting "Glow behind the TV (%)" in the editor. 0 switches the blue ambilight off (handy with LED strips on the TV), 100 is the usual strength, up to 150.

## 0.6.1

### Fixed

- **Camera wall:** the pictures are now tiles of a sensible size (at most 560 px wide, as many per row as fit, centred) instead of one picture stretched over the whole screen when there is a single camera. Tiles lift slightly when you point at them.

## 0.6.0

### Added

- **Upload 3D models in the app:** on the Extensions page every item that takes a model has an "Add a model" button. Choose the `.glb`, turn the front towards you, tick the body paint (guessed for you), pick the level of detail, check the preview and store it on your Home Assistant. NextFloor does the work of `tools/prepare-model.mjs` itself: it merges the parts, makes the model lighter, writes plain glTF without textures and marks the paint. Files that are compressed (Draco, Meshopt) are refused with a hint. You can replace and remove models there too.

### Changed

- The editor, the side panel, the dashboard card and parts of the 3D view were reorganised internally into smaller, tested modules. Behaviour and look are unchanged.
- The README is shorter, with a feature table and a screenshot gallery.

## 0.5.0

- **Twelve Tesla models:** Model 3 (to 2023, 2024 and Performance), Model S and S Plaid, Model X, Model Y (2020 to 2024, 2025 Standard, Premium and Performance, and Model Y L) and the Cybertruck are separate items, each ready for its own 3D model, in the paint colours Tesla offers. Without a model file on your Home Assistant they show the simple shape.
- `tools/prepare-model.mjs` can leave out see-through fade layers and light beams (`--drop-materials`) and finds the front of the car by its charge port (`--rear`).

## 0.4.0

- **Paint colours for vehicles:** every Tesla has the paint colours Tesla offers (Pearl White, Solid Black, Deep Blue, Ultra Red, Quicksilver and more; the Cybertruck its steel and wraps). Pick the colour in the editor, also for a car in a parking spot.
- **Your own 3D models:** put a model you own (`.glb`) on your Home Assistant and NextFloor draws it in place of the simple shape, with the paint colour you picked. The Tesla Model Y is the first item that takes one. NextFloor ships no model files; see [docs/models.md](docs/models.md) for how to prepare and add yours.

## 0.3.0

- **IKEA sizes:** a new furniture pack with 20 popular pieces in their published outer dimensions: bookcases, cube shelves, beds, chests of drawers, wardrobes, sofas, an armchair, a desk, tables and more. They are our own simple models of the sizes, not IKEA's designs or files.

## 0.2.0

- **Tesla models in 3D:** Model S, 3, X, Y, Cybertruck, Roadster and Semi in the vehicles pack, with their real outer dimensions. Put one on a parking spot and the car card follows it.
- **Smooth bodies for packs:** a new part shape, `sweep`, stretches a rounded skin over cross sections along the length. The Teslas are built with it; the format is described in [docs/packs.md](docs/packs.md).

## 0.1.0

The first release.

- Draw your home right inside Home Assistant: floors, rooms, walls, doors, windows, stairs, outdoor areas and a roof, with a 3D view next to the plan.
- Control it in 3D: lamps glow in their colours, blinds and doors follow their state, a room panel lists everything of the area.
- Ten built-in furniture packs (about 100 items) plus your own packs as plain JSON ([docs/packs.md](docs/packs.md)).
- Six live features: weather at the house, energy flow, TV screens, sound, car and cameras (camera wall, detection pins, motion trail).
- A dashboard card with a visual editor, three looks, kiosk mode for wall tablets, warnings for smoke, gas, water and open windows in the rain.
- English and German in the box, fourteen more languages fetched on demand.
- Free and open source, no account, no cloud: NextFloor does not talk to the internet.

# Changelog

All notable changes to NextFloor, newest first. Every release lists what is **Added**, **Changed** and **Fixed**. Releases: [GitHub releases](https://github.com/therealMRBK/NextFloor/releases).

## Unreleased

### Added

- **Effektanimationen je Leuchte konfigurieren:** exakte HA-Programmnamen lassen sich im Leuchteneditor auf statisch, Regenbogen, Pulsieren oder Flackern abbilden. Ein eigener Schalter pausiert alle Animationen der Platzierung, ohne Home Assistant zu verändern.

### Fixed

- **Lichtprogramme werden nicht mehr pauschal zu Regenbogen:** bestehende Pläne ohne Zuordnung und unbekannte Programme bleiben bei HA-Farbe und -Helligkeit. Pulsieren und Flackern erhalten die Grundfarbe; ausgeschaltete oder nicht verfügbare Leuchten animieren nicht. Unsichtbare Ansichten und Etagen halten keinen Effekttakt am Laufen.

## 0.9.1

### Changed

- **A pool cuts itself out of the areas around it:** a pool drawn inside a terrace (or a lawn) now leaves a hole there on its own, so the terrace runs around the pool and not over it. Any other area can still do the same with **Cut out of surrounding areas**. The order the areas were drawn in no longer matters: before, only areas drawn *before* the cutting one got the hole. The hole carries no light of the area around it either. Asked for in discussion #6.

### Fixed

- **A folded room panel no longer hangs in the picture:** on a wide window or in landscape the folded panel stayed at the top right and covered the view. It now drops to the bottom edge, above the switches (and to the bottom of the card), so it is out of the way. Reported in discussion #3.

## 0.9.0

### Added

- **Sloping walls:** every wall in the room's wall list has a new button **Sloping**. It gives the wall a height at its start and another at its end, and the top runs straight between them: a lean-to room, a wall that follows a sloping ceiling, clerestory windows high on the tall side. Both heights may be above the floor height. Windows and doors on such a wall stay under its top, so a window near the high end can be taller than one near the low end. A corner added to a sloping wall splits the slope at the height it has there. Asked for in discussion #4.
- **Outdoor areas can have any shape:** the selected lawn, terrace, pool, fence and so on now shows a **+** in the middle of every edge, like a room. Drag it to add a corner; the corner buttons in the form (**1 ×**, **2 ×** …) take a corner away again. Asked for in discussion #6.
- **Flat roofs can be reshaped the same way:** the **+** on the edges of a flat or parapet roof turns the rectangle into a free shape, and its corners can be added, dragged and removed. (Pitched roofs stay rectangles over their ridge; L- and T-shaped houses are still built from several sections.) Asked for in discussion #6.
- **Turn a solar field on a flat roof:** the solar form has **Rotation** with quick **↺ 90°** and **↻ 90°** buttons. The field turns about its middle, its modules and frames turn with it, and it is kept on the roof. Asked for in discussion #5.
- **Fold the room panel away:** the room panel has a new **−** button next to the ✕. It hides the devices and keeps the room in view, which is what you want on a phone; a tap on the arrow opens it again. The panel starts open for every room. Asked for in discussion #3.

## 0.8.3

### Fixed

- **Real map showed "Access blocked" (403) instead of the map:** Home Assistant asks the browser to send no Referer to other sites, and OpenStreetMap's tile servers refuse requests without one. NextFloor now loads every map tile with an explicit referrer policy (only your Home Assistant's address, not the full page address), in the plan and in 3D. The tiles are kept in the browser while the map is on.

## 0.8.2

### Added

- **Room buttons on the dashboard card:** a new switch *Room buttons* in the card editor puts a row of buttons, one per room, along the top of the card. A tap opens the room (switching to its floor first when needed), a second tap closes it. In the house view the rooms of all floors show, grouped by floor. Asked for in discussion #2.

## 0.8.1

### Fixed

- **Blue light frame around a TV that is on, even with *Glow behind the TV* at 0:** the glow frame that fades out around the screen of a TV that is on ignored the setting. With 0 it is now gone completely, and values below 100 make it weaker. (0.8.0 only removed the bright outline of the TV's body.)

## 0.8.0

### Added

- **Twelve new furniture packs with 417 models, all built from scratch:** Living room (70), Kitchen (66), Bedroom (41), Bathroom (38), Garden & patio (33), Home cinema & hi-fi (36), Smart home & tech (30), Office & gaming (26), Pets (24), Kids' room (18), Utility & building services (18) and Fitness (17).
- **Existing packs grew:** Vehicles now has cars of every class, vans, a pickup, a campervan, a motorhome and a caravan (34); Stairs & railings has floating and winder stairs and a corner railing (13); Architecture & fit-out has steel columns, ceiling beams, niches, a light cove, a window seat and more (21); Garage & workshop has a tool wall, shelving, a mower, wallbox holder and more (22).
- Every model is visible in the demo's showcase.
- **Compass control:** under Settings a dial shows where north lies, with **Swap north ↔ south** (180°) and quarter turns. Turning the compass never moves the drawing, the roof faces or the solar fields; sunlight, wind and the compass directions of roof faces follow it. So a plan drawn the wrong way round is fixed in one tap, without placing the solar fields again.
- **Real map under the plan (off by default):** a dimmed OpenStreetMap (or your own tile address) lies under the plan in the editor and under the house in 3D, turned by the compass. Start at Home Assistant's location, set the visibility and detail level, and move the map with arrow buttons until the house sits on its plot. Nothing is loaded while it is off.

### Fixed

- **TV without glow still had a blue frame:** with *Glow behind the TV* set to 0 the TV's own bright blue outline stayed. It now takes the plain furniture outline, so a TV set to no glow is not lit at all.

### Changed

- **Guide rewritten:** `docs/manual.md` and `docs/anleitung.md` are new, organised by what you do (install, draw, furnish, connect, use) instead of by feature list, and match the current features.
- **Demo of the development version:** the online demo now has a second page under `/dev/` that always shows the latest state of the `dev` branch (marked "DEV"); the normal demo keeps showing the released version.
- **Cameras are gone:** the camera wall, flying into a camera's live picture, the motion trail, detection pins, the field-of-view wedge and the camera device kind were removed. Placed `camera.*` entities are no longer shown.
- **Extensions tab:** it now only holds the upload of your own 3D models and the project links. The feature list and the furniture pack list are gone, and so is the hint box in the furniture library.

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

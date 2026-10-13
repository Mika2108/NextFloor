export const title = { en: "Lights in detail", de: "Leuchten im Detail" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const plan = (x, z) => r.planPoint(x, z);
  const L = (de, en) => (r.lang === "de" ? de : en);

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "Lights in detail", de: "Leuchten im Detail" }, { en: "Lamp types, spots and outdoor lights", de: "Leuchtentypen, Spots und Außenleuchten" });
  r.say(S(
    "Leuchten sind in NextFloor eigene Möbelstücke mit einem Licht dahinter. In der Möbelbibliothek gibt es dafür einen eigenen Bereich mit zwölf Typen: Deckenleuchte, Einbauspot, Aufbauspot, LED-Panel, Pendelleuchte, Stehlampe, Deckenfluter, Tischlampe, Wandleuchte, LED-Streifen, Wegeleuchte und Gartenspot.",
    "In NextFloor lights are pieces of furniture of their own with a light behind them. In the furniture library there is a section of its own with twelve types: ceiling light, downlight, surface spot, LED panel, pendant light, floor lamp, floor uplight, table lamp, wall light, LED strip, path light and garden spot.",
  ));
  await r.click({ key: "tool_furniture" });
  const room = await plan(1, 1);
  await r.click({ x: room.x, y: room.y });
  await r.spotAt({ text: L("Leuchten", "Lights") }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "Jeder Typ hat seine eigene Bauform und leuchtet anders. Die Deckenleuchte und der Spot sitzen an der Decke, die Stehlampe steht auf dem Boden, die Tischlampe auf einem Möbel, die Wandleuchte an der Wand. Pendelleuchten hängen an einer Schnur. Die Höhe stellst du im Formular ein, bei der Pendelleuchte ist sie die Abhängung unter der Decke.",
    "Every type has its own shape and glows differently. The ceiling light and the spot sit on the ceiling, the floor lamp stands on the floor, the table lamp on a piece of furniture, the wall light on the wall. Pendant lights hang on a cord. You set the height in the form; for the pendant light it is the drop below the ceiling.",
  ));
  await r.show(2);

  // ------------------------------------------------------------------ spots
  await r.chapter({ en: "A grid of spots", de: "Ein Raster aus Spots" }, { en: "Many lamps, one light", de: "Viele Leuchten, ein Licht" });
  r.say(S(
    "Oft hängen mehrere Einbauspots an einem Dimmer. Dafür musst du sie nicht einzeln setzen. Wir wählen die Küche aus und klicken auf „Spots setzen“.",
    "Often several downlights hang on one dimmer. You do not have to place them one by one. We select the kitchen and click “Place spots”.",
  ));
  await r.click({ key: "tool_select" });
  const kitchen = await plan(8, 2);
  await r.click({ x: kitchen.x, y: kitchen.y });
  await r.click({ key: "spots_place" });
  await r.show(1);
  r.say(S(
    "Du wählst die Art der Leuchte, die Zahl der Spalten und Reihen und das Licht, dem alle folgen sollen. NextFloor verteilt die Leuchten gleichmäßig im Raum. Wir nehmen Einbauspots, drei Spalten, zwei Reihen und das Küchenlicht.",
    "You choose the kind of lamp, the number of columns and rows, and the light that all of them follow. NextFloor spreads the lamps evenly across the room. We take downlights, three columns, two rows and the kitchen light.",
  ));
  await r.typeInto({ label: "spots_cols" }, "3");
  await r.typeInto({ label: "spots_rows" }, "2");
  await r.pick("furn_entity_light", "Küchenl", L("Küchenlicht · Küche", "Küchenlicht · Küche"));
  await r.show(1);
  await r.click({ text: r.t("spots_add", { n: 6 }) });
  await r.show(1.5);
  r.say(S(
    "Sechs Spots, ein Licht: Schaltest du das Küchenlicht, leuchten alle sechs. Mit „Rückgängig“ nimmst du die Aktion auf einen Schlag zurück, falls das Raster nicht passt.",
    "Six spots, one light: when you switch the kitchen light, all six glow. With “Undo” you take the action back in one go if the grid does not fit.",
  ));
  await r.show(1.5);

  // ------------------------------------------------------------------ outdoor
  await r.chapter({ en: "Outdoor lights", de: "Außenleuchten" }, { en: "Path lights and garden spots", de: "Wegeleuchten und Gartenspots" });
  r.say(S(
    "Außenleuchten gehören nicht zu einem Raum. Wir holen sie über den Raum-Abschnitt „Geräte“ mit dem Reiter „Ohne Bereich“, denn Gartenlichter haben in Home Assistant meist keinen Bereich. Dazu wählen wir einen beliebigen Raum aus, zum Beispiel das Wohnzimmer.",
    "Outdoor lights do not belong to a room. We fetch them through the “Devices” section of the room with the “No area” tab, because garden lights usually have no area in Home Assistant. For that we select any room, for example the living room.",
  ));
  const living = await plan(1, 4);
  await r.click({ x: living.x, y: living.y });
  await r.eval(`(() => { const d = (root) => { for (const el of root.querySelectorAll("*")) { if (el.tagName === "H3" && /^(Devices|Geräte)$/.test(el.textContent.trim())) { el.scrollIntoView({ block: "start" }); return true; } if (el.shadowRoot && d(el.shadowRoot)) return true; } return false; }; return d(document); })()`);
  await r.click({ text: L("Ohne Bereich", "No area") });
  await r.show(1);
  r.say(S(
    "Hier stehen die Wegeleuchten und der Pool-Spot. Wir platzieren die Wegeleuchten und ziehen sie danach an den Weg vor der Haustür.",
    "Here are the path lights and the pool spot. We place the path lights and then drag them to the path in front of the front door.",
  ));
  await r.click({ key: "devices_place", near: "Garten Wegleuchten" });
  await r.show(1);
  await r.show(0.5);
  r.say(S(
    "Außenleuchten beleuchten die Außenflächen und die Fassade. Das ist in 3D besonders schön, wenn es dunkel wird.",
    "Outdoor lights light the outdoor areas and the facade. That looks especially good in 3D when it gets dark.",
  ));
  await r.click({ key: "tool_select" });
  await r.click({ key: "fit" });
  await r.show(2);
}

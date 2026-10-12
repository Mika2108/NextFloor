export const title = { en: "Devices and entities", de: "Geräte und Entities" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const plan = (x, z) => r.planPoint(x, z);
  const L = (de, en) => (r.lang === "de" ? de : en);
  const selectRoom = async () => {
    const p = await plan(1.0, 3.9);
    await r.click({ x: p.x, y: p.y });
  };
  /** Scrolls the side panel until the devices section stands at the top (a person would scroll with the wheel). */
  const toDevices = async () => {
    await r.eval(`(() => { const d = (root) => { for (const el of root.querySelectorAll("*")) { if (el.tagName === "H3" && /^(Devices|Geräte)$/.test(el.textContent.trim())) { el.scrollIntoView({ block: "start" }); return true; } if (el.shadowRoot && d(el.shadowRoot)) return true; } return false; }; return d(document); })()`);
    await r.show(0.6);
  };

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "Devices from Home Assistant", de: "Geräte aus Home Assistant" }, { en: "Lights, blinds, heating and more", de: "Lichter, Rollläden, Heizung und mehr" });
  r.say(S(
    "Jetzt wird das Modell lebendig: Wir bringen die Geräte aus Home Assistant in den Plan. Dazu wählen wir mit „Auswählen“ den Raum, zum Beispiel das Wohnzimmer.",
    "Now the model comes alive: we bring the devices from Home Assistant into the plan. For that we select the room with “Select”, for example the living room.",
  ));
  await r.click({ key: "tool_select" });
  await selectRoom();
  await r.show(0.8);
  r.say(S(
    "Ganz unten im Raum-Formular steht der Abschnitt „Geräte“. Er zeigt die Geräte, die in Home Assistant zu diesem Bereich gehören, hier zwölf.",
    "At the very bottom of the room form is the “Devices” section. It shows the devices that belong to this area in Home Assistant, twelve here.",
  ));
  await toDevices();
  await r.spotAt({ key: "devices_src_area" });
  await r.show(1.5);
  await r.spot(null);
  r.say(S(
    "Mit den Reitern darüber wechselst du die Quelle: „Dieser Bereich“, „Andere Bereiche“ für Geräte, die in einem anderen Raum stehen, und „Ohne Bereich“ für Geräte, die in Home Assistant noch keinem Bereich zugeordnet sind, zum Beispiel die Gartenbeleuchtung. Im Suchfeld findest du ein Gerät über seinen Namen.",
    "With the tabs above you change the source: “This area”, “Other areas” for devices that stand in another room, and “No area” for devices that are not assigned to an area in Home Assistant yet, for example the garden lights. In the search field you find a device by its name.",
  ));
  await r.click({ text: L("Andere Bereiche", "Other areas") });
  await r.show(1.2);
  await r.click({ text: L("Ohne Bereich", "No area") });
  await r.show(1.2);
  await r.click({ key: "devices_src_area" });
  await r.show(0.8);
  r.say(S(
    "Jede Zeile hat vier Knöpfe: Das Auge blendet das Gerät im Raum-Fenster der 3D-Ansicht aus, „Aa“ gibt ihm einen eigenen Namen, der Stern fügt es dem Raum-Fenster hinzu, ohne es zu platzieren, und „Platzieren“ setzt es in den Plan.",
    "Every row has four buttons: the eye hides the device in the room panel of the 3D view, “Aa” gives it a name of its own, the star adds it to the room panel without placing it, and “Place” puts it into the plan.",
  ));
  await r.show(2);

  // ------------------------------------------------------------------ lamps
  await r.chapter({ en: "Placing a light", de: "Eine Leuchte platzieren" }, { en: "Lamps are furniture with a light", de: "Leuchten sind Möbel mit einem Licht" });
  r.say(S(
    "Wir platzieren das Deckenlicht. Ein Klick auf „Platzieren“ neben „Deckenlicht“.",
    "We place the ceiling light. One click on “Place” next to “Deckenlicht”.",
  ));
  await r.click({ key: "devices_place", near: "Deckenlicht" });
  await r.show(1);
  r.say(S(
    "NextFloor hat daraus eine Deckenleuchte gemacht, die mit dem Licht verbunden ist. Wir wählen sie im Plan aus, indem wir sie antippen.",
    "NextFloor has turned it into a ceiling lamp that is connected to the light. We select it in the plan by tapping it.",
  ));
  const lamp = await plan(3, 2.3);
  await r.click({ x: lamp.x, y: lamp.y });
  await r.show(1);
  r.say(S(
    "Im Formular steht bei „Licht oder Schalter“ das verbundene Gerät, das Wohnzimmer-Deckenlicht. Darunter kannst du für Farbe und Helligkeit ein anderes Gerät angeben, falls ein Relais nur ein- und ausschaltet, während die Lampe selbst Farbe und Helligkeit kennt.",
    "In the form, “Light or switch” holds the connected device, the living room ceiling light. Below it you can name another device for colour and brightness, in case a relay only switches on and off while the bulb itself knows colour and brightness.",
  ));
  await r.spotAt({ label: "furn_entity_light" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2);
  await r.spot(null);
  r.say(S(
    "Mit „Leuchten in 3D“ regelst du, wie stark das Licht im Modell glüht. Hundert Prozent sind so hell, wie das Gerät meldet. Wer LED-Streifen hat, die zu hell wirken, stellt hier weniger ein. „Vor dem Schalten fragen“ verhindert, dass ein Antippen in 3D das Licht versehentlich schaltet.",
    "With “Glow in 3D” you set how strongly the light glows in the model. One hundred percent is as bright as the device reports. If you have LED strips that look too bright, set less here. “Ask before switching” prevents a tap in 3D from switching the light by accident.",
  ));
  await r.spotAt({ label: "glow_scale" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2);
  await r.spot(null);
  r.say(S(
    "Die Markierung in 3D bestimmt, ob zusätzlich ein kleines Symbol mit dem Gerätezustand über der Leuchte schwebt: automatisch, immer, ohne Watt oder gar nicht. Du kannst dem Symbol auch ein eigenes Icon geben.",
    "The marker in 3D decides whether a small symbol with the device state also floats above the lamp: automatic, always, without watts, or not at all. You can also give the symbol an icon of your own.",
  ));
  await r.spotAt({ label: "marker_show" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2);
  await r.spot(null);

  r.say(S(
    "Das war die erste Leuchte. Genauso setzen wir die Stehlampe und das LED-Band aus der Liste.",
    "That was the first light. In the same way we place the floor lamp and the LED strip from the list.",
  ));
  await r.click({ text: L("‹ Zurück zu Wohnzimmer", "‹ Back to Living room") }).catch(() => {});
  await toDevices();
  await r.click({ key: "devices_place", near: "Stehlampe" });
  await r.show(1.2);
  await r.click({ key: "devices_place", near: "LED Band" });
  await r.show(1.5);

  await r.click({ key: "tool_select" });
  await r.click({ key: "fit" });
  await r.show(2);

  // ------------------------------------------------------------------ electric furniture
  await r.chapter({ en: "Furniture linked to devices", de: "Möbel mit Geräten verbinden" }, { en: "The TV as an example", de: "Der Fernseher als Beispiel" });
  r.say(S(
    "Nicht nur Leuchten lassen sich verbinden, auch Möbel. Wir wählen das TV-Board im Wohnzimmer aus.",
    "It is not only lights that can be connected, furniture can be too. We select the TV board in the living room.",
  ));
  const board = await plan(4.1, 4.2);
  await r.click({ x: board.x, y: board.y });
  await r.show(1);
  r.say(S(
    "Unter der Position steht „TV, Media Player oder Steckdose“. NextFloor hat im Bereich Wohnzimmer einen Fernseher gefunden und ihn automatisch verbunden, das siehst du an „Automatisch“. Läuft der Fernseher, leuchtet der Bildschirm im Modell in der Farbe der App, etwa Netflix rot oder YouTube, und zeigt Titel oder Cover.",
    "Under the position there is “TV, media player or smart plug”. NextFloor found a TV in the area Wohnzimmer and connected it automatically, you can tell by “Automatic”. While the TV plays, the screen in the model glows in the colour of the app, for example Netflix red or YouTube, and shows the title or cover.",
  ));
  await r.spotAt({ label: "furn_entity_tv" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "„Leuchten hinter dem TV“ ist das Ambilight an der Wand hinter dem Fernseher. Hundert Prozent ist die volle Stärke. Passt es nicht zu deinem Wohnzimmer, zum Beispiel weil du hinter dem Fernseher eigene LED-Streifen hast, senkst du den Wert oder stellst ihn auf null, dann ist das Leuchten ganz aus.",
    "“Glow behind the TV” is the ambilight on the wall behind the television. One hundred percent is full strength. If it does not suit your living room, for example because you have LED strips of your own behind the TV, lower the value or set it to zero, and the glow is off completely.",
  ));
  await r.spotAt({ label: "ambilight" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "Und der Leistungssensor, ebenfalls automatisch gefunden, zeigt später, wie viele Watt der Fernseher gerade zieht. Genauso funktionieren Kühlschränke, Waschmaschinen, Drucker und viele andere Möbel aus den Packs.",
    "And the power sensor, also found automatically, later shows how many watts the TV draws right now. Fridges, washing machines, printers and many other pieces from the packs work the same way.",
  ));
  await r.spotAt({ label: "furn_power" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
}

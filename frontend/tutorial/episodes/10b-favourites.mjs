export const title = { en: "Favourites, own buttons and warnings", de: "Favoriten, eigene Knöpfe und Warnungen" };
export const query = "alerts";

const S = (de, en) => ({ de, en });

export async function run(r) {
  const L = (de, en) => (r.lang === "de" ? de : en);
  const wait = (ms) => new Promise((ok) => setTimeout(ok, ms));

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);
  for (let i = 0; i < 3; i++) {
    const back = await r.locate({ text: "‹" }).catch(() => null);
    if (!back) break;
    await r.quietClick({ text: "‹" });
  }

  await r.chapter({ en: "Favourites and own buttons", de: "Favoriten und eigene Knöpfe" }, { en: "The central menu", de: "Das Zentralmenü" });
  r.say(S(
    "Im Zentralmenü der 3D-Ansicht stehen unter den Sammelschaltern deine Favoriten. Welche das sind, legst du in den Editor-Einstellungen unter „Favoriten“ fest. Wir klappen den Abschnitt auf.",
    "In the central menu of the 3D view your favourites stand below the group switches. Which ones they are you set in the editor settings under “Favourites”. We unfold the section.",
  ));
  await r.click({ key: "favorites" });
  await r.show(1.5, 800);
  r.say(S(
    "Favoriten können Szenen, Skripte, Automationen, Schalter und Buttons sein, zum Beispiel „Gute Nacht“. Du suchst sie im Feld „Favorit hinzufügen“ und klickst auf einen Treffer.",
    "Favourites can be scenes, scripts, automations, switches and buttons, for example “Gute Nacht”. You search for them in the field “Add a favourite” and click a hit.",
  ));
  await r.pick("favorites_add", "Gute", null).catch((e) => console.log("  [skipped]", e.message));
  await r.show(2, 800);
  r.say(S(
    "Mit „Eigener Knopf“ legst du einen Knopf an, der einen Dashboard-Pfad öffnet, die Details einer Entity zeigt, einen Dienst aufruft oder ein browser_mod-Popup mit deiner eigenen Karte öffnet. Du gibst ihm einen Namen, ein Symbol und das Ziel, zum Beispiel einen Pfad zum Rollladen-Dashboard.",
    "With “Own button” you create a button that opens a dashboard path, shows the details of an entity, calls a service or opens a browser_mod popup with your own card. You give it a name, a symbol and the target, for example a path to the blinds dashboard.",
  ));
  await r.click({ text: "+ " + L("Eigener Knopf", "Own button") }).catch((e) => console.log("  [skipped]", e.message));
  await r.show(2.5, 800);
  r.say(S(
    "„Station oder Playlist“ im Abschnitt Klang legt Radiosender und Playlists fest, die im Schnellmenü eines Lautsprechers zum Starten stehen.",
    "“Station or playlist” in the Sound section sets radio stations and playlists that are offered for starting in the quick menu of a speaker.",
  ));
  await r.spotAt({ text: "+ " + L("Sender oder Playlist", "Station or playlist") }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);

  await r.chapter({ en: "Warnings and scenes", de: "Warnungen und Szenen" }, { en: "When something needs your attention", de: "Wenn etwas deine Aufmerksamkeit braucht" });
  await r.click({ text: "3D" });
  await wait(4000);
  r.say(S(
    "Wechseln wir in die 3D-Ansicht. Oben stehen jetzt Warnungen. NextFloor überwacht Rauch, Gas, CO, Wasser, Alarmanlage und Fenster, die bei Regen offen stehen. Hier meldet die Küche Rauch, und mehrere Fenster stehen offen, während es regnet.",
    "Let us switch to the 3D view. Warnings now show at the top. NextFloor watches smoke, gas, CO, water, alarm panel and windows that are open in the rain. Here the kitchen reports smoke, and several windows are open while it rains.",
  ));
  await r.show(4, 2500);
  r.say(S(
    "Der betroffene Raum pulsiert rot. Ein Tippen auf die Warnung springt in den Raum. So siehst du sofort, wo etwas los ist, auch in einem großen Haus.",
    "The room concerned pulses red. A tap on the warning jumps into the room. That way you see at once where something is going on, even in a big house.",
  ));
  await r.show(2.5);
  r.say(S(
    "Im Raum-Fenster stehen außerdem Szenen und Skripte des Bereichs als Knöpfe, zum Beispiel „Kino“ oder „Lesen“ im Wohnzimmer. Ein Klick startet die Szene, und das Haus verändert sich sofort.",
    "In the room panel scenes and scripts of the area also stand as buttons, for example “Kino” or “Lesen” in the living room. One click starts the scene, and the house changes at once.",
  ));
  await r.click({ text: "Erdgeschoss", nth: 0 });
  await r.show(1.5, 1500);
  await r.click({ text: L("Wohnzimmer", "Living room") });
  await r.show(3, 2500);
}

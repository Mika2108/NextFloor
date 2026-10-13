export const title = { en: "The 3D view", de: "Die 3D-Ansicht" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const L = (de, en) => (r.lang === "de" ? de : en);

  await r.chapter({ en: "The 3D view", de: "Die 3D-Ansicht" }, { en: "Your house, alive", de: "Dein Haus, lebendig" });
  r.say(S(
    "Der Plan ist fertig. Wir wechseln jetzt auf den Reiter „3D“ und sehen uns an, was daraus geworden ist.",
    "The plan is done. Now we switch to the “3D” tab and look at what has become of it.",
  ));
  await r.click({ text: "3D" });
  await r.show(3, 3500);
  r.say(S(
    "Das ist dein Haus als lebendiges Modell: das Dach mit den Solarmodulen, die Terrasse, der Pool und der Weg. In den Räumen leuchten die Lampen, und im Wohnzimmer läuft gerade der Fernseher mit einer Serie. Alles, was du in Home Assistant einrichtest, siehst du hier live.",
    "This is your house as a living model: the roof with the solar modules, the terrace, the pool and the path. In the rooms the lamps glow, and in the living room the TV is playing a series right now. Everything you set up in Home Assistant you see here, live.",
  ));
  await r.show(2);

  // ------------------------------------------------------------------ moving around
  await r.chapter({ en: "Moving around", de: "Sich bewegen" }, { en: "Turning, zooming, flying to a room", de: "Drehen, Zoomen, zu einem Raum fliegen" });
  r.say(S(
    "Du bewegst dich mit der Maus. Ziehen mit der linken Taste dreht das Haus. Wir drehen es einmal ein Stück.",
    "You move around with the mouse. Dragging with the left button turns the house. We turn it a little.",
  ));
  await r.drag({ x: 760, y: 520 }, { x: 560, y: 470 }, { frames: 14 });
  await r.show(1);
  r.say(S(
    "Das Mausrad zoomt hinein und heraus, und mit der rechten Maustaste, oder auf dem Touchscreen mit zwei Fingern, verschiebst du die Ansicht. Auf einem Tablet zoomst du mit zwei Fingern.",
    "The mouse wheel zooms in and out, and with the right mouse button, or with two fingers on a touch screen, you move the view. On a tablet you zoom with two fingers.",
  ));
  await r.page.mouse.move(640, 400);
  for (let i = 0; i < 4; i++) {
    await r.page.mouse.wheel({ deltaY: -250 });
    await new Promise((ok) => setTimeout(ok, 500));
    await r.frame();
  }
  await r.show(1);
  for (let i = 0; i < 4; i++) {
    await r.page.mouse.wheel({ deltaY: 250 });
    await new Promise((ok) => setTimeout(ok, 500));
    await r.frame();
  }
  await r.show(0.8);
  r.say(S(
    "Oben stehen die Etagen und Räume als Knöpfe. „Alle Etagen“ zeigt das ganze Haus. Ein Klick auf eine Etage lässt die Kamera dorthin fliegen und blendet die Etagen darüber aus. Wir wählen das Erdgeschoss.",
    "At the top the floors and rooms are shown as buttons. “All floors” shows the whole house. A click on a floor makes the camera fly there and hides the floors above it. We choose the ground floor.",
  ));
  await r.click({ text: "Erdgeschoss", nth: 0, css: undefined });
  await r.show(2.5, 1500);
  r.say(S(
    "Ein Klick auf einen Raum fliegt hinein. Wir nehmen das Wohnzimmer. Rechts öffnet sich das Raum-Fenster mit den Geräten dieses Raums. Dazu gleich mehr.",
    "A click on a room flies in. We take the living room. On the right the room panel opens with the devices of this room. More on that in a moment.",
  ));
  await r.click({ text: L("Wohnzimmer", "Living room") });
  await r.show(3, 2000);
  r.say(S(
    "Links am Rand siehst du kleine Bilder der Etagen. Ein Klick darauf wechselt die Etage, auch ohne die Leiste oben. „Zurück“ unten bringt dich eine Ebene hoch, und die Escape-Taste tut dasselbe.",
    "On the left edge you see small pictures of the floors. A click on them switches the floor, even without the bar at the top. “Back” at the bottom takes you one level up, and the Escape key does the same.",
  ));
  await r.click({ text: L("Zurück", "Back") }).catch(() => {});
  await r.show(2, 1500);
  await r.click({ text: L("Alle Etagen", "All floors"), nth: 0 });
  await r.show(2, 1500);

  // ------------------------------------------------------------------ the looks
  await r.chapter({ en: "Looks and display", de: "Aussehen und Anzeige" }, { en: "Themes, quality and markers", de: "Themen, Qualität und Symbole" });
  r.say(S(
    "Oben rechts stellst du das Aussehen ein. Die Qualität ist „Automatisch“: NextFloor wählt selbst, was dein Gerät schafft. Für Wandtablets gibt es „Tablet“ mit weniger Effekten und für starke Rechner „Hoch“ mit Lichtkegeln und weichen Schatten. Ganz rechts zeigt „FPS“ die Bildrate.",
    "At the top right you set the look. The quality is “Auto”: NextFloor decides by itself what your device can handle. For wall tablets there is “Tablet” with fewer effects, and for powerful computers “High” with light cones and soft shadows. Far right “FPS” shows the frame rate.",
  ));
  await r.spotUnion([{ text: "Auto" }, { text: "High" }]);
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "Daneben die Themen: „Neon“ ist der leuchtende Look, „Blueprint“ wirkt wie ein Bauplan, und „Tag“ ist hell und eignet sich für helle Räume. Der Farbpunkt dahinter ändert die Akzentfarbe. Wir sehen uns alle drei an.",
    "Next to it the themes: “Neon” is the glowing look, “Blueprint” looks like a construction plan, and “Day” is bright and suits light rooms. The colour dot behind it changes the accent colour. We look at all three.",
  ));
  await r.click({ text: "Blueprint" });
  await r.show(2.5, 1200);
  await r.click({ text: "Day" });
  await r.show(2.5, 1200);
  await r.click({ text: "Neon" });
  await r.show(1.5, 1200);
  r.say(S(
    "Die drei Knöpfe daneben bestimmen, welche Symbole über den Geräten schweben. „Keine“ blendet sie aus, „Wichtige“ zeigt nur die wichtigen, zum Beispiel offene Fenster, und „Alle“ zeigt alle Geräte mit ihrem Zustand.",
    "The three buttons next to it decide which symbols float above the devices. “None” hides them, “Important” shows only the important ones, for example open windows, and “All” shows all devices with their state.",
  ));
  await r.click({ text: L("Alle", "All"), nth: 0 });
  await r.show(2.5, 1200);
  await r.click({ text: L("Wichtige", "Important") });
  await r.show(1.2, 1000);

  // ------------------------------------------------------------------ bottom switches
  await r.chapter({ en: "The switches at the bottom", de: "Die Schalter unten" }, { en: "Walls, floors, roof and heat map", de: "Wände, Etagen, Dach und Heatmap" });
  r.say(S(
    "Unten sitzen die wichtigsten Schalter. „Hohe Wände“ und „Schnitt“ legen fest, ob du die Wände ganz siehst oder in Brüsthöhe abgeschnitten, damit du in die Räume hineinsehen kannst.",
    "At the bottom are the most important switches. “Tall walls” and “Cut” decide whether you see the walls complete or cut off at chest height so that you can see into the rooms.",
  ));
  await r.click({ text: "Cut" });
  await r.show(2.5, 1500);
  await r.click({ text: L("Hohe Wände", "Tall walls") });
  await r.show(1.2, 1200);
  r.say(S(
    "„Auseinander“ zieht die Etagen für den Überblick auseinander, „Gestapelt“ setzt sie wieder aufeinander, und „Dach bleibt“ hält das Dach auch dann, wenn du in eine Etage hineinzoomst.",
    "“Apart” pulls the floors apart for an overview, “Stacked” puts them on top of each other again, and “Roof stays” keeps the roof even when you zoom into a floor.",
  ));
  await r.click({ text: "Stacked" });
  await r.show(2.5, 1500);
  await r.click({ text: "Apart" });
  await r.show(1.5, 1500);
  r.say(S(
    "Die Heatmap färbt die Räume nach Messwerten ein: „Temperatur“, „Feuchte“ und „CO₂“. „Werte“ schreibt die Zahlen in die Räume. Eine Legende zeigt die Farbskala. Wir sehen uns die Temperatur an.",
    "The heat map colours the rooms by measured values: “Temp.”, “Humidity” and “CO₂”. “Values” writes the numbers into the rooms. A legend shows the colour scale. We look at the temperature.",
  ));
  await r.click({ text: "Temp." });
  await r.show(3, 1500);
  await r.click({ text: "Normal" });
  await r.show(1, 1000);
  r.say(S(
    "„Raumnamen“ blendet die Namen der Räume ein, und „Wetter“ schaltet die Wettereffekte am Haus ein oder aus. Darauf kommen wir bei den Live-Funktionen zurück.",
    "“Room names” shows the names of the rooms, and “Weather” switches the weather effects at the house on or off. We come back to that with the live features.",
  ));
  await r.click({ text: "Room names" });
  await r.show(2, 1000);
  await r.click({ text: "Room names" });
  await r.show(1, 800);
}

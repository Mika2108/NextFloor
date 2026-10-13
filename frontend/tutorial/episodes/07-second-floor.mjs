export const title = { en: "A second floor, stairs and 3D beside", de: "Obergeschoss, Treppe und 3D daneben" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const plan = (x, z) => r.planPoint(x, z);
  const L = (de, en) => (r.lang === "de" ? de : en);
  const names = { child: L("Kinderzimmer", "Kids' room"), study: L("Arbeitszimmer", "Study"), bath: L("Bad oben", "Upstairs bathroom"), guest: L("Gästezimmer", "Guest room") };
  /** The floor tabs live in the floor form; with a room selected we step back to it first. */
  const floorTab = async (name) => {
    for (let i = 0; i < 4; i++) {
      const tab = await r.locate({ text: name, css: undefined }).catch(() => null);
      if (tab) return r.click({ text: name });
      const back = await r.locate({ text: "‹" }).catch(() => null);
      if (!back) break;
      await r.click({ text: "‹" });
    }
    return r.click({ text: name });
  };
  const rect = async (x1, z1, x2, z2) => {
    await r.click({ key: "tool_rect" });
    await r.drag(await plan(x1, z1), await plan(x2, z2));
  };

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "A second floor", de: "Das Obergeschoss" }, { en: "Floors on top of each other", de: "Etagen übereinander" });
  r.say(S(
    "Ein Haus hat meist mehr als eine Etage. Wir legen das Obergeschoss an: „Etage hinzufügen“ und diesmal das Obergeschoss aus Home Assistant.",
    "A house usually has more than one floor. We add the upper floor: “Add floor” and this time the Obergeschoss from Home Assistant.",
  ));
  await r.click({ key: "add_floor" });
  await r.click({ text: "Obergeschoss" });
  await r.show(1);
  r.say(S(
    "NextFloor stellt die neue Etage automatisch auf die richtige Höhe, hier zwei Komma sieben fünf Meter über dem Erdgeschoss. Im Plan siehst du gestrichelt die Umrisse der Etage darunter. Daran richtest du die neuen Wände aus.",
    "NextFloor puts the new floor at the right height automatically, here two point seven five metres above the ground floor. In the plan you see the outlines of the floor below, dashed. You align the new walls with them.",
  ));
  await r.spotAt({ label: "elevation" });
  await r.show(2);
  await r.spot(null);
  r.say(S(
    "Mit den Etagen-Reitern oben wechselst du zwischen den Etagen. Die Reihenfolge ändern „Nach oben“ und „Nach unten“.",
    "With the floor tabs at the top you switch between the floors. “Move up” and “Move down” change the order.",
  ));
  await floorTab("Erdgeschoss");
  await r.show(1);
  await floorTab("Obergeschoss");
  await r.show(0.8);

  r.say(S(
    "Jetzt zeichnen wir die Räume des Obergeschosses mit dem Rechteck, wie im Erdgeschoss: ein Kinderzimmer oben links, ein Arbeitszimmer daneben, ein Bad und ein Gästezimmer darunter.",
    "Now we draw the rooms of the upper floor with the rectangle, as on the ground floor: a kids' room at the top left, a study next to it, a bathroom and a guest room below.",
  ));
  await rect(0, 0, 4.4, 4.2);
  await r.typeInto({ label: "room_name" }, names.child);
  await r.choose({ label: "area" }, "Kinderzimmer");
  await r.choose({ label: "floor" }, L("Teppich", "Carpet"));
  await rect(4.4, 0, 10, 4.2);
  await r.typeInto({ label: "room_name" }, names.study);
  await r.choose({ label: "area" }, "Arbeitszimmer");
  await r.choose({ label: "floor" }, L("Eiche", "Oak"));
  await rect(0, 4.2, 3.4, 8);
  await r.typeInto({ label: "room_name" }, names.bath);
  await r.choose({ label: "floor" }, L("Fliesen", "Tiles"));
  await rect(3.4, 4.2, 10, 8);
  await r.typeInto({ label: "room_name" }, names.guest);
  await r.show(1);
  r.say(S(
    "Das Bad oben und das Gästezimmer haben in Home Assistant keinen eigenen Bereich. Das ist kein Problem: Räume ohne Bereich funktionieren genauso, du kannst ihnen Geräte aber nur über „Andere Bereiche“ oder „Ohne Bereich“ zuordnen.",
    "The bathroom upstairs and the guest room have no area of their own in Home Assistant. That is no problem: rooms without an area work the same way, you can only assign devices to them through “Other areas” or “No area”.",
  ));
  await r.click({ key: "tool_select" });
  await r.click({ key: "fit" });
  await r.show(1.5);

  // ------------------------------------------------------------------ stairs
  await r.chapter({ en: "Stairs and floor openings", de: "Treppe und Bodenöffnung" }, { en: "Getting from floor to floor", de: "Von Etage zu Etage" });
  r.say(S(
    "Damit man nach oben kommt, brauchen wir eine Treppe. Wir wechseln ins Erdgeschoss, wählen den Flur und öffnen die Möbelbibliothek.",
    "To get upstairs we need a staircase. We switch to the ground floor, choose the hallway and open the furniture library.",
  ));
  await floorTab("Erdgeschoss");
  await r.click({ key: "tool_furniture" });
  const hall = await plan(9.3, 6.6);
  await r.click({ x: hall.x, y: hall.y });
  await r.show(0.8);
  r.say(S(
    "Im Pack „Treppen und Geländer“ finden wir gerade, L-förmige, U-förmige und Wendeltreppen, Raumspartreppen, eine Außentreppe und Geländer aus Metall, Glas und Holz. Wir nehmen die gerade Treppe.",
    "In the pack “Stairs and railings” we find straight, L-shaped, U-shaped and spiral staircases, space-saving stairs, outdoor steps and railings in metal, glass and wood. We take the straight staircase.",
  ));
  await r.click({ text: L("Treppen & Geländer", "Stairs & railings") });
  await r.show(0.8);
  await r.click({ text: L("Gerade Treppe", "Straight staircase") });
  await r.show(1);
  await r.typeInto({ label: "x" }, "9.2");
  await r.typeInto({ label: "z" }, "6.5");
  r.say(S(
    "Die Stufen steigen von der Vorderkante nach hinten an. Reicht die Treppe bis zur Etage darüber, schneidet sie dort die Treppenöffnung automatisch in den Boden. Wir schauen im Obergeschoss nach.",
    "The steps rise from the front edge towards the back. If the stairs reach the floor above, they cut the stairwell into the floor there automatically. We take a look at the upper floor.",
  ));
  await r.click({ key: "tool_select" });
  await floorTab("Obergeschoss");
  await r.show(1.5);
  r.say(S(
    "Ein Loch im Boden brauchst du auch ohne Treppe, zum Beispiel für eine Galerie oder einen Schacht. Dafür gibt es das Werkzeug „Bodenöffnung“: Du ziehst die Öffnung einfach auf, wo der Boden fehlen soll.",
    "You also need a hole in the floor without stairs, for example for a gallery or a shaft. For that there is the “Floor opening” tool: you simply drag out the opening where the floor should be missing.",
  ));
  await r.click({ key: "tool_hole" });
  await r.show(1.5);
  await r.click({ key: "tool_select" });
  await r.show(0.5);

  // ------------------------------------------------------------------ 3D beside
  await r.chapter({ en: "3D beside the plan", de: "3D neben dem Plan" }, { en: "Seeing the model while you draw", de: "Das Modell beim Zeichnen sehen" });
  r.say(S(
    "Wer beim Zeichnen sehen will, wie das Haus in 3D aussieht, schaltet „3D daneben“ ein. Der Editor zeigt dann links den Plan und rechts das 3D-Modell.",
    "If you want to see how the house looks in 3D while you draw, switch on “3D beside”. The editor then shows the plan on the left and the 3D model on the right.",
  ));
  await r.click({ key: "split_3d" });
  await r.show(3);
  r.say(S(
    "Das Modell dreht sich mit der Maus: Ziehen dreht, das Mausrad zoomt, und mit rechter Maustaste oder zwei Fingern verschiebst du die Ansicht. Alles, was du im Plan änderst, siehst du sofort im Modell.",
    "The model turns with the mouse: dragging rotates, the wheel zooms, and with the right mouse button or two fingers you move the view. Whatever you change in the plan you see in the model right away.",
  ));
  await r.show(2.5);
  r.say(S(
    "Mit den Knöpfen „Ansicht als Start der Etage“ und „Ansicht als Start des Raums“ merkst du dir die aktuelle Blickrichtung. Tippst du die Etage oder den Raum später in 3D an, fliegt die Kamera genau dorthin.",
    "With the buttons “View as this floor's start” and “View as this room's start” you remember the current viewing direction. When you tap the floor or the room in 3D later, the camera flies exactly there.",
  ));
  await floorTab("Erdgeschoss");
  await r.show(1.5);
  await r.click({ key: "split_3d" });
  await r.show(1);
}

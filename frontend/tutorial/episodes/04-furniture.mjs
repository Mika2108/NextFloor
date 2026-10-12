export const title = { en: "Furnishing rooms", de: "Räume einrichten" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const plan = (x, z) => r.planPoint(x, z);
  const L = (de, en) => (r.lang === "de" ? de : en);
  /** Picks an item of the library and puts it at a place by typing its position and turn in the form. */
  const place = async (key, x, z, rotation = 0, size) => {
    await r.click({ key });
    await r.typeInto({ label: "x" }, String(x));
    await r.typeInto({ label: "z" }, String(z));
    if (size) {
      await r.typeInto({ label: "width" }, String(size[0]));
      await r.typeInto({ label: "depth" }, String(size[1]));
    }
    if (rotation) await r.typeInto({ label: "rotation" }, String(rotation));
  };

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "Furnishing rooms", de: "Räume einrichten" }, { en: "The furniture library", de: "Die Möbelbibliothek" });
  r.say(S(
    "Ein Raum ohne Möbel wirkt leer, deshalb richten wir ihn jetzt ein. Dafür gibt es das Werkzeug „Möbel“.",
    "A room without furniture looks empty, so now we furnish it. For that there is the “Furniture” tool.",
  ));
  await r.click({ key: "tool_furniture" });
  r.say(S(
    "Der Hinweis unten sagt: Tippe auf einen Raum, dann wähle rechts ein Möbelstück. Wir tippen auf das Wohnzimmer.",
    "The hint at the bottom says: tap a room, then pick an item on the right. We tap the living room.",
  ));
  const room = await plan(1, 1);
  await r.click({ x: room.x, y: room.y });
  await r.show(1);
  r.say(S(
    "Rechts steht jetzt die Möbelbibliothek. Neue Möbel landen in der Mitte des gewählten Raums, das steht oben darüber. Die Bibliothek ist in Bereiche gegliedert: Leuchten, Wohnen, Essen, Küche, Schlafen, Bad und Wäsche, Arbeiten und Sonstiges, Parken. Ein Klick auf eine Überschrift klappt den Bereich auf oder zu.",
    "On the right is now the furniture library. New items land in the middle of the chosen room, as it says above. The library is divided into sections: lights, living, dining, kitchen, sleeping, bath and laundry, work and other, parking. A click on a heading folds the section open or closed.",
  ));
  await r.spotAt({ key: "furniture_add" });
  await r.show(2);
  await r.spot(null);
  r.say(S(
    "Unter den eingebauten Möbeln folgen die mitgelieferten Packs. Das sind große Sammlungen mit hunderten weiteren Möbelstücken, etwa ein Wohnzimmer-Pack, eine Küche oder ein Heimkino. Sie lassen sich genauso benutzen.",
    "Below the built-in furniture follow the packs that come with NextFloor. These are large collections with hundreds more pieces, for example a living room pack, a kitchen or a home cinema. They are used in just the same way.",
  ));
  await r.click({ text: L("Wohnzimmer", "Living room") }).catch((e) => console.log("  [skipped]", e.message));
  await r.show(2);
  await r.click({ text: L("Wohnzimmer", "Living room") }).catch(() => {});
  r.say(S(
    "Wenn du etwas Bestimmtes suchst, tippst du es einfach ins Suchfeld. Die Suche findet deutsche und englische Namen, den Namen des Packs und auch mehrere Wörter in beliebiger Reihenfolge. Wir suchen ein Ecksofa.",
    "If you are looking for something specific, just type it into the search field. The search finds German and English names, the name of the pack, and even several words in any order. We look for a corner sofa.",
  ));
  await r.typeInto({ css: "input[type=search]" }, L("ecksofa", "corner sofa"));
  await r.show(2);
  await r.click({ css: "input[type=search]" });
  await r.key("Escape");
  await r.show(0.8);

  // ------------------------------------------------------------------ the first piece
  await r.chapter({ en: "Placing and moving", de: "Platzieren und verschieben" }, { en: "The sofa", de: "Das Sofa" });
  r.say(S(
    "Wir beginnen mit einem einfachen Sofa aus dem Bereich Wohnen. Ein Klick darauf setzt es in die Mitte des Raums.",
    "We start with a simple sofa from the living section. One click puts it in the middle of the room.",
  ));
  await r.click({ key: "furn_sofa" });
  await r.show(1);
  r.say(S(
    "Das Sofa ist ausgewählt. An den vier Ecken sitzen Griffe, mit denen du die Größe änderst, und unten ein Griff zum Drehen. Wir ziehen das Sofa mit der Maus an die obere Wand unter das Fenster.",
    "The sofa is selected. At its four corners there are handles for changing the size, and at the bottom a handle for turning. We drag the sofa with the mouse to the upper wall under the window.",
  ));
  const centre = await plan(3, 2.3);
  const target = await plan(4, 1);
  await r.drag(centre, target);
  await r.show(1);
  r.say(S(
    "Rechts im Formular siehst du alle Werte des Stücks. Der Name ist optional und hilft dir später bei der Suche. Darunter stehen die Position, die Größe in Metern und die Drehung in Grad. Du kannst jeden Wert eintippen, wenn du es genau haben willst.",
    "In the form on the right you see all values of the piece. The name is optional and helps you search later. Below are the position, the size in metres and the rotation in degrees. You can type any value if you want it exact.",
  ));
  await r.spotAt({ label: "furn_name" });
  await r.show(1.2);
  await r.spotUnion([{ label: "x" }, { label: "rotation" }]);
  await r.show(1.8);
  await r.spot(null);
  r.say(S(
    "Mit den Knöpfen „90° links“ und „90° rechts“ drehst du das Stück in Viertelschritten, „Spiegeln“ vertauscht links und rechts, zum Beispiel bei einem Ecksofa. „Duplizieren“ legt eine Kopie an, und „Löschen“ entfernt das Stück. „Fixieren“ sperrt es gegen versehentliches Verschieben.",
    "With the buttons “90° left” and “90° right” you turn the piece in quarter steps, “Mirror” swaps left and right, for example for a corner sofa. “Duplicate” makes a copy, and “Delete” removes the piece. “Fix” locks it against accidental moves.",
  ));
  await r.spotAt({ key: "ctx_rotate", nth: 0 }).catch(() => {});
  await r.show(1);
  await r.spot(null);
  await r.spotAt({ key: "fix" });
  await r.show(1.2);
  await r.spot(null);

  // ------------------------------------------------------------------ the rest of the room
  await r.chapter({ en: "Finishing the living room", de: "Das Wohnzimmer fertig einrichten" }, { en: "Position by numbers", de: "Position per Zahlen" });
  r.say(S(
    "Den Rest des Wohnzimmers richten wir jetzt zügig ein und geben die Positionen als Zahlen ein. Zuerst der Teppich, damit er unter den anderen Möbeln liegt.",
    "We furnish the rest of the living room quickly now and enter the positions as numbers. First the rug, so that it lies under the other furniture.",
  ));
  await r.click({ key: "tool_furniture" });
  await r.click({ x: room.x, y: room.y });
  await place("furn_rug", 4, 2.4, 0, [2.4, 1.6]);
  r.say(S("Dann der Couchtisch auf dem Teppich.", "Then the coffee table on the rug."));
  await place("furn_coffee_table", 4, 2.4);
  r.say(S(
    "Der Fernseher steht auf einem TV-Board an der gegenüberliegenden Wand. Das Board schaut standardmäßig nach unten, deshalb drehen wir es um hundertachtzig Grad, damit es zum Sofa zeigt.",
    "The TV stands on a TV board against the opposite wall. By default the board faces down, so we turn it by one hundred and eighty degrees to face the sofa.",
  ));
  await place("furn_tv_board", 4.1, 4.2, 180);
  r.say(S("Ein Sessel links vom Couchtisch, zur Mitte gedreht…", "An armchair to the left of the coffee table, turned towards the middle…"));
  await place("furn_armchair", 1.8, 2.4, 270);
  r.say(S("…ein Regal in der Ecke und eine Pflanze am Fenster.", "…a shelf in the corner and a plant by the window."));
  await place("furn_shelf", 0.45, 3.4, 90);
  await place("furn_plant", 0.7, 0.7);
  await r.show(1.5);
  await r.click({ key: "tool_select" });
  await r.click({ key: "fit" });
  await r.show(2);
}

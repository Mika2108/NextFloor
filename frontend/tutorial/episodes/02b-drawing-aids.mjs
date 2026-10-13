export const title = { en: "Drawing aids: partitions, gaps and templates", de: "Zeichenhilfen: Trennwände, Lücken und Vorlagen" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const plan = (x, z) => r.planPoint(x, z);
  const L = (de, en) => (r.lang === "de" ? de : en);

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "Free-standing walls", de: "Freistehende Wände" }, { en: "Partitions and half walls", de: "Trennwände und halbe Wände" });
  r.say(S(
    "Nicht jede Wand gehört zu einem Raum. Eine Trennwand mitten im Wohnzimmer, eine halbe Wand zum Essbereich oder eine Brüstung zeichnest du mit dem Werkzeug „Wand“.",
    "Not every wall belongs to a room. A partition in the middle of the living room, a half wall towards the dining area or a parapet you draw with the “Wall” tool.",
  ));
  await r.click({ key: "tool_wall" });
  r.say(S(
    "Der Hinweis unten: Ziehen, um eine einzelne Wand zu zeichnen. Mit der Umschalt-Taste bleibt sie gerade, mit Alt rastet sie nicht ein. Wir ziehen eine kurze Wand.",
    "The hint at the bottom: drag to draw a single wall. With the Shift key it stays straight, with Alt it does not snap. We drag a short wall.",
  ));
  await r.drag(await plan(1, 2.3), await plan(1, 4.5));
  await r.show(1);
  r.say(S(
    "Die Wand ist ausgewählt. Im Formular stellst du Länge, Dicke und Höhe ein. Eine niedrigere Höhe macht aus ihr eine halbe Wand oder Brüstung. Wo sie auf eine Raumwand trifft, wird die Ecke sauber verbunden. An den Griffen verschiebst du die Enden, und an der Linie die ganze Wand.",
    "The wall is selected. In the form you set length, thickness and height. A lower height turns it into a half wall or parapet. Where it meets a room wall, the corner is joined cleanly. At the handles you move the ends, and at the line the whole wall.",
  ));
  await r.spotUnion([{ label: "wall_thickness" }, { label: "height_m" }]).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "Für unser Haus brauchen wir sie nicht, deshalb löschen wir sie mit „Löschen“ wieder.",
    "We do not need it for our house, so we delete it again with “Delete”.",
  ));
  await r.click({ text: L("Löschen", "Delete") });
  await r.show(1);

  await r.chapter({ en: "Gaps and the lock", de: "Lücken und die Sperre" }, { en: "Keeping the plan tidy", de: "Den Plan sauber halten" });
  r.say(S(
    "Zeichnest du Räume von Hand, bleiben manchmal winzige Lücken zwischen zwei Wänden, die man kaum sieht, in 3D aber als Spalt auftauchen. Dafür gibt es im Etagen-Formular „Lücken schließen“. NextFloor sucht solche Stellen und zieht die Wände zusammen.",
    "If you draw rooms by hand, tiny gaps sometimes remain between two walls, hardly visible but showing up as a slit in 3D. For that there is “Close gaps” in the floor form. NextFloor looks for such places and pulls the walls together.",
  ));
  await r.click({ key: "back_to_floor" }).catch(() => {});
  await r.spotAt({ text: L("Lücken schließen", "Close gaps") }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "Ist der Plan fertig, sperrst du ihn mit dem Schloss „Grundriss“, damit Räume, Wände, Türen, Fenster und Außenflächen nicht aus Versehen verschoben werden. Einzelne Stücke lassen sich auch mit „Fixieren“ sperren.",
    "When the plan is done, you lock it with the “Floor plan” lock so that rooms, walls, doors, windows and outdoor areas are not moved by accident. Single pieces can also be locked with “Fix”.",
  ));
  await r.click({ key: "lock_plan" });
  await r.show(2.5, 800);
  await r.click({ key: "lock_plan" });
  await r.show(1.5, 800);

  await r.chapter({ en: "A floor plan as a template", de: "Ein Grundriss als Vorlage" }, { en: "Tracing a drawing or photo", de: "Eine Zeichnung oder ein Foto nachzeichnen" });
  r.say(S(
    "Hast du schon einen Grundriss als Bild, etwa vom Bauplan oder als Foto, kannst du ihn als Vorlage hinter den Plan legen und nachzeichnen. Das findest du unter „Vorlage“ in der Seitenleiste.",
    "If you already have a floor plan as a picture, say from the building plans or as a photo, you can put it behind the plan as a template and trace it. You find that under “Template” in the side panel.",
  ));
  await r.spotAt({ key: "background" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "Nach dem Hochladen schiebst du das Bild mit der Maus, skalierst es an der Ecke und drehst es am Griff darüber. Mit zwei Punkten richtest du es gerade, und mit einer bekannten Länge, etwa einer Wand, stellst du den Maßstab ein. Dann zeichnest du die Räume direkt darauf.",
    "After uploading, you move the picture with the mouse, scale it at the corner and turn it at the handle above it. With two points you straighten it, and with a known length, such as a wall, you set the scale. Then you draw the rooms right on top.",
  ));
  await r.show(2.5);
}

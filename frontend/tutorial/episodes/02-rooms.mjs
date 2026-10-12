export const title = { en: "Drawing rooms", de: "Räume zeichnen" };

const S = (de, en) => ({ de, en });
const NAMES = {
  en: { living: "Living room", kitchen: "Kitchen", bedroom: "Bedroom", bath: "Bathroom", hall: "Hallway" },
  de: { living: "Wohnzimmer", kitchen: "Küche", bedroom: "Schlafzimmer", bath: "Bad", hall: "Flur" },
};

export async function run(r) {
  const n = NAMES[r.lang];
  const plan = (x, z) => r.planPoint(x, z);
  const rect = async (x1, z1, x2, z2) => r.drag(await plan(x1, z1), await plan(x2, z2));
  const nameIt = (name) => r.typeInto({ label: "room_name" }, name);

  // the previous episode ended in the editor with the floor selected; a new page starts in 3D, so we go back (not filmed)
  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);
  await r.chapter({ en: "Drawing rooms", de: "Räume zeichnen" }, { en: "The rectangle tool", de: "Das Rechteck-Werkzeug" });
  r.say(S(
    "Jetzt zeichnen wir die Räume. Das schnellste Werkzeug ist das Rechteck. Wir wählen es in der Werkzeugleiste aus.",
    "Now we draw the rooms. The fastest tool is the rectangle. We pick it in the toolbar.",
  ));
  await r.click({ key: "tool_rect" });
  await r.show(0.5);
  r.say(S(
    "Unten links steht immer ein kurzer Hinweis zum aktiven Werkzeug. Beim Rechteck heißt er: Ziehen, um ein Rechteck zu zeichnen.",
    "At the bottom left there is always a short hint for the active tool. For the rectangle it says: drag to draw a rectangle.",
  ));
  await r.spotAt({ css: "nf-editor .nf-hint, nf-editor [class*=hint]" }).catch(() => {});
  await r.show(1);
  await r.spot(null);

  r.say(S(
    "Wir beginnen mit dem Wohnzimmer. Wir drücken an der linken oberen Ecke, ziehen zur rechten unteren Ecke und lassen los. Während des Ziehens zeigt NextFloor die Seitenlängen an. Die Maße rasten auf das Raster ein, standardmäßig auf fünf Zentimeter.",
    "We start with the living room. We press at the top left corner, drag to the bottom right corner and let go. While dragging, NextFloor shows the side lengths. The sizes snap to the grid, by default to five centimetres.",
  ));
  await rect(0, 0, 6, 4.6);
  await r.show(1);

  r.say(S(
    "Der Raum ist gezeichnet und gleich ausgewählt. Das Werkzeug ist wieder auf „Auswählen“ gesprungen. Rechts erscheinen die Eigenschaften des Raums. Als Erstes geben wir ihm einen Namen.",
    "The room is drawn and selected right away. The tool has jumped back to “Select”. On the right the properties of the room appear. First we give it a name.",
  ));
  await r.show(0.8);
  await nameIt(n.living);
  r.say(S(
    "Mit dem Bereich verbindest du den Raum mit Home Assistant. Alle Geräte, die in Home Assistant diesem Bereich zugeordnet sind, kann NextFloor dann automatisch in diesem Raum anzeigen. Wir wählen den Bereich Wohnzimmer.",
    "With the area you connect the room to Home Assistant. All devices assigned to this area in Home Assistant can then be shown in this room automatically. We choose the area Wohnzimmer.",
  ));
  await r.choose({ label: "area" }, "Wohnzimmer");
  r.say(S(
    "Das Material bestimmt, wie der Boden in 3D aussieht: Holz, Eiche, Fliesen, Teppich, Stein oder Beton. Das Wohnzimmer bekommt Eichenparkett.",
    "The material decides how the floor looks in 3D: wood, oak, tiles, carpet, stone or concrete. The living room gets oak parquet.",
  ));
  await r.choose({ label: "floor" }, r.lang === "de" ? "Eiche" : "Oak");
  await r.show(0.8);

  r.say(S(
    "Darunter stehen Position und Größe des Raums in Metern. Du kannst die Zahlen direkt eintippen, wenn du es genau haben willst. Wir lassen sie, wie sie sind: sechs mal vier Komma sechs Meter.",
    "Below are the position and size of the room in metres. You can type the numbers directly if you want it exact. We leave them as they are: six by four point six metres.",
  ));
  await r.spotUnion([{ label: "width" }, { label: "depth" }]);
  await r.show(1.2);
  await r.spot(null);

  // ------------------------------------------------------------------ corners
  await r.chapter({ en: "Corners and edges", de: "Ecken und Kanten" }, { en: "Reshaping a room", de: "Einen Raum umformen" });
  r.say(S(
    "Jede Ecke des ausgewählten Raums hat einen Griff. Wenn du an einem Griff ziehst, wandert die Ecke. Probieren wir es aus: Wir ziehen die rechte obere Ecke ein Stück nach oben.",
    "Every corner of the selected room has a handle. Dragging a handle moves the corner. Let us try it: we drag the top right corner up a little.",
  ));
  const corner = await plan(6, 0);
  await r.drag(corner, { x: corner.x + 30, y: corner.y - 40 });
  await r.show(1);
  r.say(S(
    "Das war nur ein Versuch, deshalb machen wir es mit „Rückgängig“ ungeschehen. Fast alles im Editor lässt sich rückgängig machen, auch mit Strg plus Z.",
    "That was only a test, so we undo it with “Undo”. Almost everything in the editor can be undone, also with Ctrl plus Z.",
  ));
  await r.click({ key: "undo" });
  await r.show(1);
  r.say(S(
    "In der Mitte jeder Kante sitzt ein Plus. Ein Klick darauf fügt eine zusätzliche Ecke ein, mit der du Räume mit Nischen oder schrägen Wänden formst. Auch das nehmen wir gleich wieder zurück.",
    "In the middle of every edge there is a plus. A click on it inserts an additional corner, with which you shape rooms with niches or slanted walls. We take that back as well.",
  ));
  const mid = await plan(3, 0);
  await r.click({ x: mid.x, y: mid.y });
  await r.show(1);
  await r.click({ key: "undo" });
  await r.show(0.8);

  // ------------------------------------------------------------------ the next rooms
  await r.chapter({ en: "More rooms", de: "Weitere Räume" }, { en: "Walls are shared", de: "Wände werden geteilt" });
  r.say(S(
    "Jetzt kommt die Küche rechts neben das Wohnzimmer. Wir wählen wieder das Rechteck und ziehen. Die Ecken rasten an den vorhandenen Wänden ein, und die Wand dazwischen gehört beiden Räumen.",
    "Now the kitchen goes to the right of the living room. We pick the rectangle again and drag. The corners snap to the existing walls, and the wall in between belongs to both rooms.",
  ));
  await r.click({ key: "tool_rect" });
  await rect(6, 0, 10, 4.6);
  await nameIt(n.kitchen);
  await r.choose({ label: "area" }, "Küche");
  await r.choose({ label: "floor" }, r.lang === "de" ? "Fliesen" : "Tiles");
  await r.show(0.8);

  r.say(S(
    "Unter dem Wohnzimmer liegt das Schlafzimmer. Es bekommt den Bereich Schlafzimmer und einen Teppichboden.",
    "Below the living room is the bedroom. It gets the area Schlafzimmer and a carpet floor.",
  ));
  await r.click({ key: "tool_rect" });
  await rect(0, 4.6, 4.4, 8);
  await nameIt(n.bedroom);
  await r.choose({ label: "area" }, "Schlafzimmer");
  await r.choose({ label: "floor" }, r.lang === "de" ? "Teppich" : "Carpet");
  await r.show(0.8);

  r.say(S(
    "Daneben das Bad, wieder mit Fliesen.",
    "Next to it the bathroom, with tiles again.",
  ));
  await r.click({ key: "tool_rect" });
  await rect(4.4, 4.6, 6.8, 8);
  await nameIt(n.bath);
  await r.choose({ label: "area" }, "Bad");
  await r.choose({ label: "floor" }, r.lang === "de" ? "Fliesen" : "Tiles");
  await r.show(0.8);

  // ------------------------------------------------------------------ free shape
  await r.chapter({ en: "Free shapes", de: "Freie Form" }, { en: "Rooms that are not rectangles", de: "Räume, die kein Rechteck sind" });
  r.say(S(
    "Nicht jeder Raum ist ein Rechteck. Der Flur bekommt eine L-Form. Dafür gibt es das Werkzeug „Freie Form“.",
    "Not every room is a rectangle. The hallway gets an L shape. For that there is the “Free shape” tool.",
  ));
  await r.click({ key: "tool_polygon" });
  r.say(S(
    "Hier setzt du Punkt für Punkt die Ecken des Raums. Zum Schließen tippst du auf den ersten Punkt oder drückst Enter. Mit Escape brichst du ab.",
    "Here you place the corners of the room one by one. To close it, tap the first corner or press Enter. Escape cancels.",
  ));
  for (const [x, z] of [[6.8, 4.6], [10, 4.6], [10, 8], [8.4, 8], [8.4, 9.2], [6.8, 9.2]]) {
    const p = await plan(x, z);
    await r.click({ x: p.x, y: p.y }, { settle: 300, after: 0.2 });
  }
  await r.key("Enter", { frames: 3 });
  await r.show(1);
  await nameIt(n.hall);
  await r.choose({ label: "area" }, "Flur");
  await r.choose({ label: "floor" }, r.lang === "de" ? "Eiche" : "Oak");
  await r.show(1);

  // ------------------------------------------------------------------ walls
  await r.chapter({ en: "Walls", de: "Wände" }, { en: "Heights and thickness", de: "Höhe und Dicke" });
  r.say(S(
    "Die Wände entstehen automatisch aus den Raumkanten. Außenwände sind standardmäßig vierundzwanzig Zentimeter dick, Innenwände zwölf. Das stellst du unter Einstellungen ein. Für einzelne Wände findest du im Raum-Formular einen Bereich „Wandhöhen“.",
    "The walls are created automatically from the room edges. Exterior walls are twenty-four centimetres thick by default, interior walls twelve. You set that under Settings. For single walls the room form has a section called “Wall heights”.",
  ));
  r.say(S("Zuerst passen wir die Ansicht an: „Alles zeigen“ rückt den ganzen Plan ins Fenster.", "First we adjust the view: “Show all” fits the whole plan into the window."));
  await r.click({ key: "fit" });
  await r.show(0.8);
  const inside = await plan(3, 2.3);
  await r.click({ x: inside.x, y: inside.y });
  await r.show(0.8);
  await r.spotAt({ key: "wall_heights" });
  await r.show(1.5);
  await r.spot(null);
  r.say(S(
    "Dort hat jede Wand eine Höhe, eine Dicke und eine Schere, mit der du eine Wand in Teile schneidest. Setzt du die Höhe niedriger, wird aus der Wand eine Brüstung oder eine Theke. „Keine Wand“ lässt die Kante offen, zum Beispiel zwischen Wohnzimmer und Essbereich.",
    "There every wall has a height, a thickness and a pair of scissors with which you cut a wall into parts. A lower height turns the wall into a parapet or a counter. “No wall” leaves the edge open, for example between living room and dining area.",
  ));
  await r.show(2);
}

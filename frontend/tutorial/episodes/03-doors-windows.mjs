export const title = { en: "Doors and windows", de: "Türen und Fenster" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const plan = (x, z) => r.planPoint(x, z);
  const tap = async (x, z) => {
    const p = await plan(x, z);
    await r.click({ x: p.x, y: p.y }, { settle: 700 });
  };
  const type = (name) => r.click({ text: name });
  const L = (de, en) => (r.lang === "de" ? de : en);

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "Doors and windows", de: "Türen und Fenster" }, { en: "Placing openings in the walls", de: "Öffnungen in die Wände setzen" });
  r.say(S(
    "Unsere Räume haben noch keine Öffnungen. Dafür gibt es das Werkzeug „Türen und Fenster“. Wir wählen es aus.",
    "Our rooms have no openings yet. For that there is the “Doors and windows” tool. We select it.",
  ));
  await r.click({ key: "tool_opening" });
  r.say(S(
    "Der Hinweis unten sagt es schon: Tippe auf eine Wand, um eine Tür oder ein Fenster einzusetzen. Die Art wählst du danach rechts. Wir beginnen mit der Haustür an der unteren Wand des Flurs.",
    "The hint at the bottom says it already: tap a wall to add a door or window. You choose the kind afterwards on the right. We begin with the front door on the lower wall of the hallway.",
  ));
  await r.show(0.8);
  await tap(7.6, 9.2);
  r.say(S(
    "Die Öffnung sitzt in der Wand und ist ausgewählt. Das Werkzeug ist wieder auf „Auswählen“ gesprungen. Rechts siehst du alle Arten: Tür, Haustür, Doppeltür, Fenster, Doppelfenster, Terrassentür, Balkontür, Garagentor und Glaswand. Als Haustür nehmen wir die Haustür.",
    "The opening sits in the wall and is selected. The tool has jumped back to “Select”. On the right you see all kinds: door, front door, double door, window, double window, terrace door, French doors, garage door and glass wall. For the entrance we take the front door.",
  ));
  await r.show(0.8);
  await type(L("Haustür", "Front door"));
  await r.show(1);

  r.say(S(
    "Breite, Position und Höhe stellst du darunter in Metern ein. „Mitte von der Ecke“ ist der Abstand der Türmitte von der Raumecke. Die Haustür soll genau mittig in der Wand sitzen, das sind null Komma acht Meter.",
    "Width, position and height are set below in metres. “Centre from corner” is the distance of the door centre from the room corner. The front door should sit exactly in the middle of the wall, that is zero point eight metres.",
  ));
  await r.spotUnion([{ label: "width" }, { label: "opening_position" }]).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(1.5);
  await r.spot(null);
  r.say(S(
    "Mit „Anschlag wechseln“ drehst du die Seite, an der die Tür angeschlagen ist, und „Öffnungsrichtung umkehren“ lässt sie nach außen statt nach innen aufgehen. Beides siehst du sofort im Plan.",
    "“Swap hinge side” changes the side the door is hinged on, and “Reverse opening direction” makes it open outwards instead of inwards. You see both immediately in the plan.",
  ));
  await r.click({ key: "flip_hinge" });
  await r.show(1);

  // ------------------------------------------------------------------ interior doors
  await r.chapter({ en: "Interior doors", de: "Innentüren" }, { en: "Doors between rooms", de: "Türen zwischen den Räumen" });
  r.say(S(
    "Jetzt die Türen im Haus. Zwischen Flur und Küche setzen wir eine normale Tür. Wir wählen wieder das Werkzeug und tippen auf die gemeinsame Wand.",
    "Now the doors inside the house. Between the hallway and the kitchen we place a normal door. We pick the tool again and tap the shared wall.",
  ));
  await r.click({ key: "tool_opening" });
  await tap(9.2, 4.6);
  await r.show(0.8);
  r.say(S(
    "Standardmäßig wird eine normale Tür eingesetzt. Das passt hier, also lassen wir es dabei. Der Stil steht auf „Automatisch“: In einer Außenwand wird daraus eine Haustür, innen eine Zimmertür.",
    "A normal door is placed by default. That fits here, so we leave it. The style is on “Automatic”: in an exterior wall it becomes a front door, inside a room door.",
  ));
  await r.spotAt({ label: "opening_style" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(1.5);
  await r.spot(null);

  r.say(S("Dasselbe machen wir vom Flur ins Bad…", "We do the same from the hallway into the bathroom…"));
  await r.click({ key: "tool_opening" });
  await tap(6.8, 6.3);
  await r.show(0.6);
  r.say(S("…und vom Wohnzimmer ins Schlafzimmer.", "…and from the living room into the bedroom."));
  await r.click({ key: "tool_opening" });
  await tap(2.2, 4.6);
  await r.show(0.6);

  // ------------------------------------------------------------------ windows
  await r.chapter({ en: "Windows", de: "Fenster" }, { en: "Kinds, sill and blinds", de: "Arten, Brüstung und Rollläden" });
  r.say(S(
    "Fenster funktionieren genauso. Wir setzen ein Doppelfenster in die obere Wand des Wohnzimmers.",
    "Windows work the same way. We place a double window in the upper wall of the living room.",
  ));
  await r.click({ key: "tool_opening" });
  await tap(3, 0);
  await type(L("Doppelfenster", "Double window"));
  await r.show(1);
  r.say(S(
    "Bei Fenstern gibt es zusätzlich die Brüstungshöhe, also wie hoch die Fensterunterkante über dem Boden liegt. Das Doppelfenster hat zwei Flügel, und mit „Hauptflügel wechseln“ bestimmst du, welcher davon der Hauptflügel ist.",
    "Windows also have a sill height, how high the lower edge of the window sits above the floor. The double window has two leaves, and “Swap main leaf” decides which of them is the main leaf.",
  ));
  await r.spotAt({ label: "sill" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(1.5);
  await r.spot(null);

  r.say(S(
    "Jetzt wird es spannend: Weiter unten kannst du dem Fenster Geräte zuordnen. Der Rollladen steht auf „Automatisch“. NextFloor hat im Bereich Wohnzimmer einen Rollladen gefunden und nimmt ihn. Genauso den Fensterkontakt, den Terrassentür-Sensor. Damit bewegt sich der Rollladen im Modell mit, und das Fenster zeigt, ob es offen ist.",
    "Now it gets interesting: further down you can assign devices to the window. The blind is on “Automatic”. NextFloor found a blind in the area Wohnzimmer and uses it. The same for the window contact, the terrace door sensor. With that the blind moves along in the model, and the window shows whether it is open.",
  ));
  await r.spotAt({ css: "input[type=text]", nth: 0 });
  await r.show(2);
  await r.spot(null);
  r.say(S(
    "Willst du ein anderes Gerät zuweisen, klickst du in das Feld und tippst einen Teil des Namens. Die Liste zeigt passende Geräte mit ihrem Bereich und der Entity-ID. Ein Klick wählt das Gerät aus. Wir tippen „Roll“.",
    "To assign a different device, click into the field and type part of its name. The list shows matching devices with their area and entity ID. A click picks the device. We type “Roll”.",
  ));
  await r.click({ css: "input[type=text]", nth: 0 });
  await r.page.keyboard.type("Roll", { delay: 90 });
  await r.show(1.5);
  await r.click({ text: "Wohnzimmer Rollladen" });
  await r.show(1);
  r.say(S(
    "Wichtig: NextFloor schaltet dabei nichts. Die Zuordnung sagt nur, welches Gerät zu diesem Fenster gehört.",
    "Important: NextFloor does not switch anything here. The assignment only says which device belongs to this window.",
  ));
  await r.show(1);

  // ------------------------------------------------------------------ more windows
  r.say(S(
    "Die restlichen Fenster setzen wir ohne viele Worte: ein Fenster in die Küche, eines ins Schlafzimmer und ein kleines ins Bad.",
    "The remaining windows we place without many words: one in the kitchen, one in the bedroom and a small one in the bathroom.",
  ));
  await r.click({ key: "tool_opening" });
  await tap(8, 0);
  await type(L("Fenster", "Window"));
  await r.click({ key: "tool_opening" });
  await tap(0, 6.3);
  await type(L("Fenster", "Window"));
  await r.click({ key: "tool_opening" });
  await tap(5.6, 8);
  await type(L("Fenster", "Window"));
  await r.show(1);

  r.say(S(
    "Eine Tür oder ein Fenster entfernst du, indem du es auswählst und unten auf „Löschen“ klickst oder die Entf-Taste drückst.",
    "To remove a door or window, select it and click “Delete” at the bottom, or press the Delete key.",
  ));
  await r.show(1.5);

  await r.click({ key: "fit" });
  await r.show(1.5);
}

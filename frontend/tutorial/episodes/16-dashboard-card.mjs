export const title = { en: "The dashboard card", de: "Die Dashboard-Karte" };
export const keepState = true;
export const query = "card";

const S = (de, en) => ({ de, en });

export async function run(r) {
  const L = (de, en) => (r.lang === "de" ? de : en);
  const wait = (ms) => new Promise((ok) => setTimeout(ok, ms));

  await r.chapter({ en: "The dashboard card", de: "Die Dashboard-Karte" }, { en: "Your house on any dashboard", de: "Dein Haus auf jedem Dashboard" });
  r.say(S(
    "Das Modell musst du nicht im Panel öffnen: NextFloor bringt eine Dashboard-Karte mit, die das Haus auf jedem Home-Assistant-Dashboard zeigt. Hier siehst du links den visuellen Editor der Karte, so wie ihn Home Assistant im Karten-Dialog zeigt, und rechts die Karte selbst.",
    "You do not have to open the model in the panel: NextFloor brings a dashboard card that shows the house on any Home Assistant dashboard. On the left you see the visual editor of the card, just as Home Assistant shows it in the card dialog, and on the right the card itself.",
  ));
  await r.show(3, 2500);
  r.say(S(
    "Du fügst die Karte in einem Dashboard über „Karte hinzufügen“ hinzu und suchst nach NextFloor. Eine Zeile Konfiguration reicht: Typ „custom:nextfloor-card“. Alles Weitere stellst du bequem im Editor ein, und die Karte rechts folgt sofort.",
    "You add the card to a dashboard with “Add card” and search for NextFloor. One line of configuration is enough: type “custom:nextfloor-card”. Everything else you set conveniently in the editor, and the card on the right follows immediately.",
  ));
  await r.show(2.5);

  r.say(S(
    "Oben legst du fest, was die Karte zeigt. „Etage“ wählt das ganze Haus oder eine einzelne Etage, mit der die Karte startet. „Größe“ legt fest, ob sie eine feste Höhe hat oder den Bildschirm füllt. Wir wählen das ganze Haus.",
    "At the top you decide what the card shows. “Floor” picks the whole house or a single floor that the card starts with. “Size” decides whether it has a fixed height or fills the screen. We choose the whole house.",
  ));
  await r.choose({ label: "card_floor" }, L("Ganzes Haus (Etage antippen öffnet sie)", "Whole house (tap a floor to open it)")).catch((e) => console.log("  [skipped]", e.message));
  await r.show(3, 2500);
  r.say(S(
    "„Aussehen“ wechselt zwischen Neon, Blueprint und Tag, und die Akzentfarbe färbt Linien und Knöpfe um. „Wände“ stellt Hohe Wände oder Schnitt ein, die Qualität kennst du schon, und „Etagen darunter“ bestimmt, ob die Etagen unter der gewählten gedimmt, gestapelt oder ausgeblendet erscheinen.",
    "“Look” switches between Neon, Blueprint and Day, and the accent colour recolours lines and buttons. “Walls” sets Tall walls or Cut, you know the quality already, and “Floors below” decides whether the floors below the chosen one appear dimmed, stacked or hidden.",
  ));
  await r.choose({ label: "theme" }, "Blueprint");
  await r.show(2.5, 2000);
  await r.choose({ label: "theme" }, "Neon");
  await r.show(1.5, 1500);
  r.say(S(
    "Im Abschnitt „Anzeige“ stellst du Symbole, Heatmap, Stromfluss und Karten ein. Stromfluss und Karten können dem Betrachter überlassen werden, mit einem Schalter in der Karte, oder immer an oder immer aus sein. Wir schalten die Symbole auf „Alle“.",
    "In the “Show” section you set markers, heat map, power flow and cards. Power flow and cards can be left to the viewer, with a switch in the card, or be always on or always off. We set the markers to “All”.",
  ));
  await r.choose({ label: "markers" }, L("Alle", "All"));
  await r.show(3, 2500);
  await r.choose({ label: "markers" }, L("Wichtige", "Important"));
  await r.show(1, 1000);
  r.say(S(
    "Darunter sitzen Kästchen für die Schalter in der Karte, den Stern mit dem Zentralmenü, eigene Namen an den Symbolen und die Option, mit versteckten Bedienelementen zu starten, damit nur das 3D-Bild bleibt. Weitere Optionen: Etagen als Miniaturen, Raumnamen, Energiewerte oben, Raumdetails beim Antippen, ein Vollbild-Knopf und das Auseinanderziehen der Etagen.",
    "Below are checkboxes for the switches in the card, the star with the central menu, own names at the markers, and the option to start with the controls hidden so that only the 3D picture remains. More options: floors as miniatures, room names, energy values at the top, room details on tap, a full-screen button and the pulling apart of the floors.",
  ));
  await r.eval(() => {
    const walk = (root) => { for (const el of root.querySelectorAll("*")) { if (el.tagName === "H3" && /Features|Funktionen/.test(el.textContent)) { el.scrollIntoView({ block: "start" }); return true; } if (el.shadowRoot && walk(el.shadowRoot)) return true; } return false; };
    walk(document);
  });
  await r.show(3, 800);
  r.say(S(
    "Unter „Funktionen“ schaltest du Warnungen, den Sprung in den Raum einer neuen Warnung, Szenen-Knöpfe im Raum und das Wetter am Haus ein oder aus. Warnungen zeigen Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen als Banner über der Karte.",
    "Under “Features” you switch warnings, the jump into the room of a new warning, scene buttons in the room and the weather at the house on or off. Warnings show smoke, gas, CO, water, alarm panel and open windows in the rain as a banner over the card.",
  ));
  await r.show(2.5);

  // ------------------------------------------------------------------ kiosk
  await r.chapter({ en: "A wall tablet", de: "Ein Wandtablet" }, { en: "Kiosk mode", de: "Der Kiosk-Modus" });
  r.say(S(
    "Ganz unten steht der Abschnitt „Wandtablet“. Damit wird die Karte zum Dauerbetrieb an der Wand: Nach einer Zeit ohne Berührung kehrt sie von selbst zur Startansicht zurück, damit niemand in einem Raum hängen bleibt.",
    "At the very bottom is the section “Wall tablet”. It turns the card into a permanent display on the wall: after a time without a touch it returns to the start view by itself, so that nobody stays stuck in a room.",
  ));
  await r.eval(() => {
    const walk = (root) => { for (const el of root.querySelectorAll("*")) { if (el.tagName === "H3" && /kiosk|Wandtablet/i.test(el.textContent)) { el.scrollIntoView({ block: "start" }); return true; } if (el.shadowRoot && walk(el.shadowRoot)) return true; } return false; };
    walk(document);
  });
  await r.show(3, 800);
  r.say(S(
    "Die Nachtabdunkelung dimmt die Karte nachts, entweder nach der Sonne oder in einem Zeitraum, den du angibst. Dabei ruhen Farbeffekte, und die Anzeige wird dunkel, damit das Tablet im Schlafzimmer nicht blendet. Als Bildschirmschoner dreht sich nach der Rückkehr die Kamera langsam um das Haus. Ein Knopf kann außerdem zu einem anderen Dashboard führen.",
    "Night dimming darkens the card at night, either by the sun or in a time range you give. Colour effects rest, and the display goes dark so that the tablet in the bedroom does not dazzle. As a screensaver the camera turns slowly around the house after the return. A button can also lead to another dashboard.",
  ));
  await r.show(3);
  r.say(S(
    "Für Tablets stellst du die Qualität auf „Tablet“. Das ist die leichteste Einstellung und ideal für Fire-Tablets und andere Wandtablets.",
    "For tablets you set the quality to “Tablet”. That is the lightest setting and ideal for Fire tablets and other wall tablets.",
  ));
  await r.show(2.5);
}

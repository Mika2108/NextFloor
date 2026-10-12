export const title = { en: "First steps: the interface and the first floor", de: "Erste Schritte: Oberfläche und die erste Etage" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  // ------------------------------------------------------------------ 1. the empty start
  await r.chapter({ en: "Welcome to NextFloor", de: "Willkommen bei NextFloor" }, { en: "Setting up a home from scratch", de: "Ein Zuhause von Grund auf einrichten" });
  r.say(S(
    "Willkommen! In diesem Video richten wir NextFloor komplett von Grund auf ein. Wir starten genau dort, wo du nach der Installation zum ersten Mal das Panel öffnest: Es ist noch nichts gezeichnet, die Seite ist leer.",
    "Welcome! In this video we set up NextFloor completely from scratch. We start exactly where you are after the installation, the first time you open the panel: nothing is drawn yet, the page is empty.",
  ));
  await r.show(1);
  r.say(S(
    "NextFloor zeichnet dein Zuhause direkt in Home Assistant und zeigt es als lebendiges 3D-Modell. Lichter leuchten in ihrer Farbe, Rollläden bewegen sich, und du kannst alles direkt im Modell bedienen. Dafür brauchst du nur deinen Grundriss und ein paar Minuten.",
    "NextFloor draws your home right inside Home Assistant and shows it as a living 3D model. Lights glow in their colours, blinds move, and you can control everything straight in the model. All it needs is your floor plan and a few minutes.",
  ));
  await r.show(1);

  // ------------------------------------------------------------------ 2. the three tabs
  r.say(S(
    "Oben links findest du drei Reiter. Der erste ist die 3D-Ansicht: Das ist das Modell deines Hauses, so wie du es später jeden Tag benutzt.",
    "Top left there are three tabs. The first is the 3D view: the model of your house, the way you will use it every day.",
  ));
  await r.spotAt({ text: "3D" });
  await r.point({ text: "3D" });
  await r.show(0.5);
  r.say(S(
    "Der zweite Reiter ist der Editor. Hier zeichnest du Räume, setzt Türen, Fenster und Möbel und verbindest alles mit deinen Geräten. Den Editor sehen nur Administratoren.",
    "The second tab is the editor. This is where you draw rooms, place doors, windows and furniture, and connect everything to your devices. Only administrators see the editor.",
  ));
  await r.spotAt({ key: "ext_tab" === "" ? "x" : undefined, text: "Editor" });
  await r.point({ text: "Editor" });
  await r.show(0.5);
  r.say(S(
    "Der dritte Reiter heißt Erweiterungen. Dort lädst du später eigene 3D-Modelle hoch, zum Beispiel für dein Auto. Dazu kommen wir in einem eigenen Kapitel.",
    "The third tab is called Extensions. That is where you upload your own 3D models later, for example for your car. We will get to that in a chapter of its own.",
  ));
  await r.spotAt({ text: "✦ Extensions" });
  await r.point({ text: "✦ Extensions" });
  await r.show(0.5);
  await r.spot(null);

  // ------------------------------------------------------------------ 3. open the editor
  r.say(S(
    "Mitten auf der Seite steht der Hinweis, dass es noch keinen Grundriss gibt. Mit einem Klick auf „Editor öffnen“ geht es los.",
    "In the middle of the page a note says there is no floor plan yet. One click on “Open editor” gets us started.",
  ));
  await r.show(0.8);
  await r.click({ key: "open_editor" });
  await r.show(1);

  await r.chapter({ en: "The editor at a glance", de: "Der Editor im Überblick" }, { en: "Tools, floors and settings", de: "Werkzeuge, Etagen und Einstellungen" });
  r.say(S(
    "So sieht der Editor aus. Oben links ist die Werkzeugleiste: Auswählen, Rechteck, Freie Form, Wand, Türen und Fenster, Möbel, Außen, Bodenöffnung, Dach und Energie. Jedes Werkzeug lernen wir der Reihe nach kennen.",
    "This is the editor. Top left is the toolbar: Select, Rectangle, Free shape, Wall, Doors and windows, Furniture, Outdoor, Floor opening, Roof and Energy. We get to know each tool in turn.",
  ));
  await r.spotUnion([{ key: "tool_select" }, { key: "tool_rect" }, { text: "Energy" }]);
  await r.show(1);
  r.say(S(
    "Die zweite Leiste enthält Rückgängig und Wiederholen, „Alles zeigen“ passt den Plan ins Fenster, „3D daneben“ blendet die 3D-Ansicht neben dem Plan ein, und mit dem Schloss sperrst du den Grundriss gegen versehentliches Verschieben.",
    "The second bar holds Undo and Redo; “Show all” fits the plan into the window, “3D beside” shows the 3D view next to the plan, and the lock protects the floor plan against accidental moves.",
  ));
  await r.spotUnion([{ key: "undo" }, { key: "lock_plan" }]);
  await r.show(1);
  await r.spot(null);
  r.say(S(
    "Rechts steht die Seitenleiste. Sie zeigt immer das, was gerade ausgewählt ist, und ganz oben die Etagen deines Hauses. Da der Plan leer ist, sehen wir hier noch nicht viel.",
    "On the right is the side panel. It always shows whatever is selected, and at the very top the floors of your house. Since the plan is empty, there is not much to see yet.",
  ));
  await r.show(1);

  // ------------------------------------------------------------------ 4. the first floor
  await r.chapter({ en: "The first floor", de: "Die erste Etage" }, { en: "Floors from Home Assistant", de: "Etagen aus Home Assistant" });
  r.say(S(
    "Alle Werkzeuge sind noch ausgegraut, denn zuerst brauchen wir eine Etage. Wir klicken auf „Etage hinzufügen“.",
    "All tools are greyed out because we need a floor first. We click “Add floor”.",
  ));
  await r.show(0.6);
  await r.click({ key: "add_floor" });
  await r.show(0.8);
  r.say(S(
    "NextFloor zeigt dir jetzt die Etagen, die in Home Assistant angelegt sind. Wenn du eine davon wählst, bleiben Plan und Home Assistant verbunden: Die Räume können später ihren Bereichen zugeordnet werden. Alternativ legst du mit „Leere Etage“ eine Etage ohne Verbindung an.",
    "NextFloor now lists the floors that exist in Home Assistant. If you pick one of them, the plan and Home Assistant stay connected: rooms can be assigned to their areas later. Alternatively “Empty floor” creates a floor with no connection.",
  ));
  await r.show(1);
  r.say(S(
    "Wir nehmen das Erdgeschoss aus Home Assistant.",
    "We take the ground floor from Home Assistant.",
  ));
  await r.click({ text: "Erdgeschoss" });
  await r.show(1);

  r.say(S(
    "Die Etage ist da, und die Werkzeuge sind jetzt aktiv. Rechts siehst du die Einstellungen der Etage. Oben steht der Name. Du kannst ihn jederzeit ändern, auch wenn er mit dem Namen in Home Assistant übereinstimmt.",
    "The floor is there and the tools are active. On the right you see the settings of the floor. At the top is the name. You can change it any time, even if it matches the name in Home Assistant.",
  ));
  await r.spotAt({ css: "nf-editor input[type=text]", nth: 0 }).catch(() => {});
  await r.show(1);
  await r.spot(null);
  r.say(S(
    "Die Höhe über dem Boden legt fest, wo die Etage im Haus steht. Das Erdgeschoss steht auf null, das Obergeschoss später auf etwa 2,8 Meter. Mit „Etage verschieben“ schiebst du die ganze Etage um einen Betrag, und „90° drehen“ dreht sie.",
    "The elevation sets where the floor stands in the house. The ground floor stands at zero, the upper floor later at about 2.8 metres. “Shift the floor” moves the whole floor by an amount, and “Turn 90°” rotates it.",
  ));
  await r.spotAt({ key: "elevation" });
  await r.show(1.2);
  await r.spotAt({ key: "floor_turn" });
  await r.show(0.8);
  await r.spot(null);
  r.say(S(
    "Die Raumhöhe gilt für alle Wände der Etage. Standard sind zwei Komma fünf Meter. Für einzelne Wände kannst du sie später anpassen.",
    "The ceiling height applies to all walls of the floor. The default is two point five metres. You can adjust it for single walls later.",
  ));
  await r.spotAt({ key: "height" });
  await r.show(1);
  await r.spot(null);
  r.say(S(
    "Mit „Etage in Home Assistant“ legst du fest, zu welcher Etage in Home Assistant diese Etage gehört. Und mit „Räume aus HA-Bereichen anlegen“ erzeugt NextFloor für jeden Bereich einen Raum. Das ist praktisch, wir zeichnen die Räume aber selbst, damit du siehst, wie es geht.",
    "“Floor in Home Assistant” sets which Home Assistant floor this floor belongs to. And “Add rooms from HA areas” creates a room for every area. That is handy, but we will draw the rooms ourselves so you can see how it works.",
  ));
  await r.spotAt({ key: "ha_floor" });
  await r.show(1);
  await r.spotAt({ key: "area_rooms", vars: { n: 6 } });
  await r.show(1);
  await r.spot(null);
}

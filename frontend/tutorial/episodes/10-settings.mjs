export const title = { en: "Settings, compass and map", de: "Einstellungen, Kompass und Karte" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const L = (de, en) => (r.lang === "de" ? de : en);

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);
  const backToFloor = async () => {
    for (let i = 0; i < 3; i++) {
      const back = await r.locate({ text: "‹" }).catch(() => null);
      if (!back) break;
      await r.click({ text: "‹" });
    }
  };
  await backToFloor();

  await r.chapter({ en: "Settings", de: "Einstellungen" }, { en: "Walls, grid, compass and map", de: "Wände, Raster, Kompass und Karte" });
  r.say(S(
    "In der Seitenleiste stehen weiter unten die Einstellungen für das ganze Haus. Wir klappen sie auf.",
    "Further down the side panel are the settings for the whole house. We unfold them.",
  ));
  await r.click({ key: "settings" });
  await r.show(1);
  r.say(S(
    "Zuerst die Wanddicken. Außenwände sind standardmäßig vierundzwanzig Zentimeter dick, Innenwände zwölf. Das Raster ist die Schrittweite, auf die beim Zeichnen eingerastet wird, fünf Zentimeter. Mit der Alt-Taste zeichnest du einmalig ohne Einrasten.",
    "First the wall thicknesses. Exterior walls are twenty-four centimetres thick by default, interior walls twelve. The grid is the step the drawing snaps to, five centimetres. With the Alt key you draw without snapping for a moment.",
  ));
  await r.spotUnion([{ label: "wall_exterior" }, { label: "grid" }]);
  await r.show(2.5);
  await r.spot(null);

  // ------------------------------------------------------------------ compass
  await r.chapter({ en: "The compass", de: "Der Kompass" }, { en: "Fixing north and south", de: "Nord und Süd richtigstellen" });
  r.say(S(
    "Jetzt der Kompass, ein wichtiger Punkt. Die Scheibe zeigt, wo Norden im Plan liegt. Der Plan hat kein eigenes Norden: Standardmäßig zeigt Norden im Plan nach oben. Davon hängen drei Dinge ab: das Sonnenlicht, das durch die Fenster fällt, die Windrichtung bei Wetter und die Himmelsrichtungen der Dachflächen. Und damit auch, wo ein neues Solarfeld hinkommt.",
    "Now the compass, an important point. The dial shows where north lies in the plan. The plan has no north of its own: by default north points up in the plan. Three things depend on it: the sunlight falling through the windows, the wind direction in the weather, and the compass directions of the roof sections. And with that, where a new solar field goes.",
  ));
  await r.spotAt({ css: ".nf-compass" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(3);
  await r.spot(null);
  r.say(S(
    "Hast du den Plan so gezeichnet, dass oben nicht Norden ist, oder stimmen Nord und Süd nicht mit der Wirklichkeit überein, musst du nichts neu zeichnen und keine Solarfelder neu anlegen. Du drehst einfach den Kompass. „Nord und Süd tauschen“ dreht ihn um hundertachtzig Grad. Wir probieren es.",
    "If you drew the plan with north not at the top, or if north and south do not match reality, you do not have to redraw anything or place the solar fields again. You simply turn the compass. “Swap north and south” turns it by one hundred and eighty degrees. We try it.",
  ));
  await r.click({ key: "compass_swap" });
  await r.show(2.5);
  r.say(S(
    "Der Pfeil zeigt jetzt nach unten. Zeichnung, Dachflächen und Solarfelder sind unverändert. Geändert haben sich nur die Himmelsrichtungen: Was eben noch Süden war, ist jetzt Norden. Mit den Knöpfen für neunzig Grad drehst du in kleineren Schritten, und im Feld darüber gibst du jeden beliebigen Winkel ein.",
    "The arrow now points down. The drawing, roof sections and solar fields are unchanged. Only the compass directions have changed: what was south a moment ago is now north. With the ninety degree buttons you turn in smaller steps, and in the field above you enter any angle you like.",
  ));
  await r.show(2);
  await r.click({ key: "compass_swap" });
  await r.show(1.5);
  r.say(S(
    "Wir drehen den Kompass für unser Haus wieder zurück, denn hier stimmt er.",
    "We turn the compass back for our house, because here it is right.",
  ));
  await r.show(0.5);

  // ------------------------------------------------------------------ map
  await r.chapter({ en: "A real map under the plan", de: "Eine echte Karte unter dem Plan" }, { en: "Placing the house on its plot", de: "Das Haus auf sein Grundstück setzen" });
  r.say(S(
    "Darunter kannst du eine echte Landkarte hinter den Plan legen, um das Haus genau auf sein Grundstück zu setzen. Die Karte ist standardmäßig aus und lädt dann auch nichts aus dem Internet. Wir schalten sie ein.",
    "Below that you can put a real map behind the plan, to place the house exactly on its plot. The map is off by default and then loads nothing from the internet. We switch it on.",
  ));
  await r.click({ key: "map_on" });
  await r.show(3);
  r.say(S(
    "Die Karte startet am Standort von Home Assistant, im Plan und im 3D-Modell. Dein Browser lädt die Kartenkacheln direkt vom Kartenserver, standardmäßig OpenStreetMap. Unten rechts steht der Quellenhinweis. Die Karte ist gedimmt, damit der Plan im Vordergrund bleibt.",
    "The map starts at the location of Home Assistant, in the plan and in the 3D model. Your browser loads the map tiles straight from the map server, OpenStreetMap by default. The credit is shown at the bottom right. The map is dimmed so that the plan stays in the foreground.",
  ));
  await r.show(2);
  r.say(S(
    "Mit „Sichtbarkeit“ stellst du ein, wie stark die Karte durchscheint, und die Detailstufe bestimmt die Schärfe. Mit den Pfeilknöpfen verschiebst du die Karte unter dem Plan, bis das Haus auf seinem Grundstück sitzt. Der Schritt darunter legt fest, wie weit ein Klick schiebt. Mit dem Kompass drehst du die Karte, falls das Haus schräg steht.",
    "With “Visibility” you set how much the map shows through, and the detail level decides the sharpness. With the arrow buttons you move the map under the plan until the house sits on its plot. The step below sets how far one click moves it. With the compass you turn the map if the house is at an angle.",
  ));
  await r.spotAt({ key: "map_move" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(1.5);
  await r.spot(null);
  await r.click({ text: "▶" });
  await r.click({ text: "▼" });
  await r.show(1);
  r.say(S(
    "Du kannst auch eine eigene Kachel-Adresse eintragen, wenn du eine andere Kartenquelle nutzen darfst. Für unser Beispiel schalten wir die Karte wieder aus.",
    "You can also enter a tile address of your own if you may use another map source. For our example we switch the map off again.",
  ));
  await r.click({ key: "map_on" });
  await r.show(1.5);

  // ------------------------------------------------------------------ more settings
  await r.chapter({ en: "Roof, weather and more", de: "Dach, Wetter und mehr" }, { en: "The rest of the settings", de: "Der Rest der Einstellungen" });
  r.say(S(
    "Weiter unten wählst du die Dachform für das ganze Haus, kein Dach, Flachdach, Satteldach oder eigene Dachflächen, mit Neigung und Überstand.",
    "Further down you pick the roof shape for the whole house: no roof, flat roof, gable roof or sections of your own, with pitch and overhang.",
  ));
  await r.spotAt({ label: "roof" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2);
  await r.spot(null);
  r.say(S(
    "Das Wetter-Gerät bestimmt, welche Wetter-Entity das Wetter am Haus steuert, und darunter schaltest du die Effekte einzeln ein oder aus: Regen, Schnee, Nebel, Wolken, Blitze, Sonne und Mond. Die Warnung „Fenster offen bei Regen“ und die Sonnenflecken durch die Fenster stellst du hier ebenfalls ein.",
    "The weather entity decides which weather entity drives the weather at the house, and below it you switch the effects on or off one by one: rain, snow, fog, clouds, lightning, sun and moon. The warning “window open while it rains” and the sunlight patches through the windows are also set here.",
  ));
  await r.spotAt({ label: "weather_entity" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
}

export const title = { en: "Outdoor areas", de: "Außenflächen" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const plan = (x, z) => r.planPoint(x, z);
  const t = (key) => r.t(key);
  const area = async (x1, z1, x2, z2, type) => {
    await r.click({ key: "tool_outdoor" });
    await r.drag(await plan(x1, z1), await plan(x2, z2));
    if (type) await r.choose({ label: "outdoor_type" }, t(type));
  };

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "Outdoor areas", de: "Außenflächen" }, { en: "Garden, terrace, path and pool", de: "Garten, Terrasse, Weg und Pool" });
  r.say(S(
    "Ein Haus steht nicht im Leeren. Mit dem Werkzeug „Außen“ zeichnest du die Flächen rund ums Haus: Rasen, Terrasse, Wege, Einfahrt, Pool, Beete, Hecken und Zäune.",
    "A house does not stand in an empty space. With the “Outdoor” tool you draw the areas around the house: lawn, terrace, paths, driveway, pool, flower beds, hedges and fences.",
  ));
  await r.click({ key: "tool_outdoor" });
  r.say(S(
    "Der Hinweis unten: Ziehen, um eine Außenfläche aufzuziehen. Wir beginnen mit dem Rasen links neben dem Haus.",
    "The hint at the bottom: drag to draw an outdoor area. We start with the lawn to the left of the house.",
  ));
  await r.drag(await plan(-3, 0), await plan(-0.4, 8));
  await r.show(0.8);
  r.say(S(
    "Die Fläche ist ausgewählt, und rechts steht ihr Formular. Oben wählst du die Art. Die Standardart ist Rasen, das passt. Darunter stehen Position und Größe.",
    "The area is selected and its form is on the right. At the top you choose the kind. The default kind is lawn, which fits. Below are position and size.",
  ));
  await r.spotAt({ label: "outdoor_type" });
  await r.show(1.5);
  await r.spot(null);
  r.say(S(
    "„Höhenversatz“ senkt eine Fläche unter den Boden oder hebt sie an, zum Beispiel eine Einfahrt, die zu einer tiefer liegenden Garage führt, oder eine erhöhte Terrasse. „Gefälle“ neigt eine Fläche: Du gibst den Höhenunterschied ein und die Richtung, in die sie abfällt. „Umriss zeigen“ blendet die leuchtende Kante ein oder aus, und „Aus den Flächen darunter ausschneiden“ macht aus der Fläche ein Loch in den Flächen darunter, praktisch für einen Teich mitten im Rasen.",
    "“Height offset” lowers an area below the ground or raises it, for example a driveway leading to a lower garage, or a raised terrace. “Slope” tilts an area: you enter the height difference and the direction it falls towards. “Show the outline” turns the glowing edge on or off, and “Cut out of the areas beneath” makes the area a hole in the areas below it, handy for a pond in the middle of a lawn.",
  ));
  await r.spotUnion([{ label: "outdoor_offset" }, { label: "outdoor_slope" }]);
  await r.show(2);
  await r.spot(null);

  r.say(S(
    "Oberhalb des Hauses kommt die Terrasse. Wir ziehen sie auf und stellen die Art um.",
    "Above the house comes the terrace. We drag it out and change the kind.",
  ));
  await area(0.2, -3.2, 6, -0.4, "out_terrace");
  await r.show(0.8);
  r.say(S(
    "Vor der Haustür führt ein Weg entlang. Ein Weg ist schmal, deshalb ziehen wir ihn schmal auf.",
    "In front of the front door a path leads along. A path is narrow, so we draw it narrow.",
  ));
  await area(7.1, 9.3, 8.1, 12, "out_path");
  await r.show(0.8);
  r.say(S(
    "Rechts neben dem Haus legen wir einen Pool an.",
    "To the right of the house we lay out a pool.",
  ));
  await area(10.6, 5.2, 14.6, 9.2, "out_pool");
  await r.show(0.8);
  r.say(S(
    "Außerdem ein Beet vor dem Rasen und eine Hecke, die den Garten begrenzt. Bei Hecken und Zäunen kannst du im Formular die Höhe einstellen, zum Beispiel zweieinhalb Meter für eine Thuja-Hecke.",
    "Also a flower bed in front of the lawn and a hedge that borders the garden. For hedges and fences you can set the height in the form, for example two and a half metres for a thuja hedge.",
  ));
  await area(-2.8, 8.4, -0.6, 9.4, "out_bed");
  await r.show(0.6);
  await r.click({ key: "tool_select" });
  await r.click({ key: "fit" });
  await r.show(1.5);

  r.say(S(
    "Außenflächen werden in 3D mit Rasen, Holz, Wasser und Stein dargestellt. Wie du Außenleuchten, zum Beispiel Wegleuchten und Gartenspots, aus der Möbelbibliothek dazusetzt, siehst du später im Kapitel über Leuchten.",
    "In 3D outdoor areas are shown with grass, wood, water and stone. How to add outdoor lights, for example path lights and garden spots, from the furniture library you will see later in the chapter about lights.",
  ));
  await r.show(2);
}

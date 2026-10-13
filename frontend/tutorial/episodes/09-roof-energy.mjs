export const title = { en: "The roof and solar power", de: "Dach und Solarstrom" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const plan = (x, z) => r.planPoint(x, z);
  const L = (de, en) => (r.lang === "de" ? de : en);

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "The roof", de: "Das Dach" }, { en: "From the rooms to a roof", de: "Von den Räumen zum Dach" });
  r.say(S(
    "Ein Haus braucht ein Dach, und für Solarmodule ganz besonders. Das Werkzeug „Dach“ baut es aus deinen Räumen. Wir wählen es aus.",
    "A house needs a roof, and for solar modules especially. The “Roof” tool builds it from your rooms. We select it.",
  ));
  await r.click({ key: "tool_roof" });
  await r.show(1.2);
  r.say(S(
    "Der Editor schaltet dabei von selbst die 3D-Ansicht daneben dazu, denn ein Dach beurteilt man am besten in 3D. Im Plan sind Räume und Möbel gesperrt, damit du nichts verschiebst: Du bearbeitest nur Dachflächen.",
    "The editor switches on the 3D view beside the plan by itself, because a roof is best judged in 3D. In the plan, rooms and furniture are locked so that you do not move anything: you only edit roof sections.",
  ));
  await r.show(2);
  r.say(S(
    "Wir klicken auf „Dachflächen aus den Räumen erzeugen“. NextFloor schlägt zu jeder zusammenhängenden Gebäudeteil-Fläche ein Dach vor, hier ein großes Satteldach über dem Haus und ein kleines über dem Anbau.",
    "We click “Create roof sections from the rooms”. NextFloor proposes a roof for every connected part of the building, here a large gable roof over the house and a small one over the extension.",
  ));
  await r.click({ key: "roof_sections_start" });
  await r.show(2);
  r.say(S(
    "Jede Dachfläche hat Form, Firstrichtung, Traufhöhe und Neigung. Ein Klick auf einen Eintrag in der Liste wählt sie aus, ziehen verschiebt sie, und an den Ecken änderst du die Größe. Mit „Zurück zu einem Dach“ gehst du zur einfachen Dachform aus den Einstellungen zurück, und „Erneut aus den Räumen erzeugen“ beginnt von vorn.",
    "Every section has a shape, ridge direction, eave height and pitch. A click on an entry in the list selects it, dragging moves it, and at the corners you change the size. “Back to one roof” returns to the simple roof shape from the settings, and “Create again from the rooms” starts over.",
  ));
  await r.spotAt({ key: "roof_sections_off" });
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "Dachfenster setzt du mit „Dachfenster“ auf eine Dachfläche. Sie bekommen wie normale Fenster einen Rollladen und einen Kontakt.",
    "You put roof windows on a roof section with “Roof window”. Like normal windows they get a blind and a contact.",
  ));
  await r.spotAt({ text: "+ Roof window" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2);
  await r.spot(null);

  // ------------------------------------------------------------------ energy
  await r.chapter({ en: "Solar power and energy", de: "Solarstrom und Energie" }, { en: "Fields, meter and inverter", de: "Felder, Zähler und Wechselrichter" });
  r.say(S(
    "Jetzt kommt die Energie. Das Werkzeug „Energie“ zeigt oben eine Einrichtungs-Checkliste: Solarfeld auf das Dach setzen, Zähler hinzufügen, Wechselrichter hinzufügen. Home-Batterie und Netzanschluss sind optional.",
    "Now for the energy. The “Energy” tool shows a setup checklist at the top: put a solar field on the roof, add the meter, add an inverter. Home battery and grid connection are optional.",
  ));
  await r.click({ key: "tool_energy" });
  await r.show(2);
  r.say(S(
    "Wir beginnen mit dem Solarfeld. „Solarfeld“ legt ein Feld auf die am besten passende Dachfläche, nämlich die größte, die nach Süden schaut. Dafür nutzt NextFloor den Kompass aus den Einstellungen. Stimmt der Kompass nicht, wird das Feld auf der falschen Seite angelegt. Dazu kommen wir gleich.",
    "We begin with the solar field. “Solar field” puts a field on the best-fitting roof section, the largest one that looks south. For this NextFloor uses the compass from the settings. If the compass is wrong, the field is placed on the wrong side. We will get to that in a moment.",
  ));
  await r.click({ text: "+ Solar field" });
  await r.show(2.5);
  r.say(S(
    "Das Feld liegt in der Dachneigung. Du ziehst es im Plan an eine andere Stelle, auch auf eine andere Dachfläche. Rechts stellst du Reihen und Spalten, Hoch- oder Querformat und die Zahl der Module ein. Für Felder auf Flachdächern oder im Garten gibt es „Freistehend“ mit Neigung, und „An der Wand“ für Fassadenmodule.",
    "The field lies in the slope of the roof. You drag it in the plan to another place, even onto another roof section. On the right you set rows and columns, portrait or landscape and the number of modules. For fields on flat roofs or in the garden there is “Free-standing” with a tilt, and “On a wall” for facade modules.",
  ));
  await r.show(2.5);
  r.say(S(
    "Jetzt der Stromzähler und der Wechselrichter. Beide sind Geräte und stehen unter „Geräte“ der Energie-Seite. Wir fügen den Zähler und den Wechselrichter hinzu.",
    "Now the electricity meter and the inverter. Both are devices and are listed under “Devices” on the energy page. We add the meter and the inverter.",
  ));
  const back = await r.locate({ text: "‹" }).catch(() => null);
  if (back) await r.click({ text: "‹" });
  await r.click({ text: "+ " + r.t("furn_meter") });
  await r.show(1.5);
  const back2 = await r.locate({ text: "‹" }).catch(() => null);
  if (back2) await r.click({ text: "‹" });
  await r.click({ text: "+ " + r.t("furn_inverter") });
  await r.show(1.5);
  r.say(S(
    "Die Geräte stehen in der Etage, die oben gewählt ist, und lassen sich im Plan verschieben. Mit einem Leistungssensor zeigen sie ihre Watt, der Zähler nimmt den Netzsensor, und ein Wechselrichter bekommt seine Strings.",
    "The devices stand on the floor chosen at the top and can be moved in the plan. With a power sensor they show their watts, the meter takes the grid sensor, and an inverter gets its strings.",
  ));
  await r.show(2);
  r.say(S(
    "Ganz unten steht die Energiebilanz mit Feldern für Netz, Solarproduktion, Batterie, Verbrauch und Tarif. Alle stehen auf „Automatisch“. Mit „Aus dem Energie-Dashboard übernehmen“ liest NextFloor die Sensoren, die du in Home Assistant schon für das Energie-Dashboard eingerichtet hast.",
    "At the bottom is the energy balance with fields for grid, solar production, battery, consumption and tariff. All are on “Automatic”. “Take over from the energy dashboard” reads the sensors you have already set up for the energy dashboard in Home Assistant.",
  ));
  const back3 = await r.locate({ text: "‹" }).catch(() => null);
  if (back3) await r.click({ text: "‹" });
  await r.spotAt({ text: "Take over from the energy dashboard" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "In der 3D-Ansicht fliegen später Energieteilchen von den Solarmodulen zum Wechselrichter, zum Haus, zum Akku und zum Netz, schneller und dichter, je mehr Strom fließt.",
    "In the 3D view, energy particles later fly from the solar modules to the inverter, the house, the battery and the grid, faster and denser the more power flows.",
  ));
  await r.show(2);
  await r.click({ key: "tool_select" });
}

export const title = { en: "Garage, parking spot and the car", de: "Garage, Stellplatz und das Auto" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const plan = (x, z) => r.planPoint(x, z);
  const L = (de, en) => (r.lang === "de" ? de : en);

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "A garage", de: "Eine Garage" }, { en: "One more room and a door", de: "Noch ein Raum und ein Tor" });
  r.say(S(
    "Zum Haus gehört noch eine Garage. Wir zeichnen sie mit dem Rechteck rechts neben die Küche.",
    "The house also has a garage. We draw it with the rectangle to the right of the kitchen.",
  ));
  await r.click({ key: "tool_rect" });
  await r.drag(await plan(10, 0), await plan(13.6, 5.2));
  await r.typeInto({ label: "room_name" }, L("Garage", "Garage"));
  await r.choose({ label: "area" }, "Garage");
  await r.choose({ label: "floor" }, L("Beton", "Concrete"));
  await r.show(1);
  r.say(S(
    "Das Tor setzen wir mit „Türen und Fenster“ an die rechte Außenwand und wählen als Art „Garagentor“. Ein Garagentor kann mit einem Antrieb verbunden werden. In 3D fährt es dann hoch und runter und zeigt, ob es offen ist.",
    "We place the door with “Doors and windows” on the right exterior wall and choose “Garage door” as the kind. A garage door can be connected to a drive. In 3D it then moves up and down and shows whether it is open.",
  ));
  await r.click({ key: "tool_opening" });
  const wall = await plan(13.6, 3.0);
  await r.click({ x: wall.x, y: wall.y });
  await r.click({ text: L("Garagentor", "Garage door") });
  await r.show(2);

  await r.chapter({ en: "The parking spot", de: "Der Stellplatz" }, { en: "Showing the car in 3D", de: "Das Auto in 3D zeigen" });
  r.say(S(
    "Jetzt der Stellplatz. In der Möbelbibliothek gibt es den Bereich „Parken“ mit dem Stellplatz. Wir wählen die Garage aus und setzen den Stellplatz hinein.",
    "Now the parking spot. In the furniture library there is the section “Parking” with the parking spot. We select the garage and put the parking spot into it.",
  ));
  await r.click({ key: "tool_furniture" });
  const garage = await plan(11.8, 2.6);
  await r.click({ x: garage.x, y: garage.y });
  await r.click({ text: L("Parken", "Parking") });
  await r.click({ text: L("Stellplatz", "Parking spot") });
  await r.show(1.5);
  r.say(S(
    "Der Stellplatz zeigt in 3D ein Fahrzeug, solange dein Auto da ist. Du wählst bei „Fahrzeug“ das Modell, zum Beispiel einen Transporter aus dem Pack „Fahrzeuge“, und mit „Größe“ passt du es an. Ohne Fahrzeug-Pack bleibt die Liste leer.",
    "The parking spot shows a vehicle in 3D while your car is there. Under “Vehicle” you choose the model, for example a van from the “Vehicles” pack, and with “Size” you adapt it. Without the vehicle pack the list stays empty.",
  ));
  await r.choose({ label: "parking_vehicle" }, L("Transporter · Fahrzeuge", "Van · Vehicles")).catch(async (e) => {
    console.log("  [vehicle option]", e.message);
  });
  await r.show(2);
  r.say(S(
    "Der Sensor „Auto da“ sagt, wann das Fahrzeug im Stellplatz steht, zum Beispiel ein Ortungssensor oder ein Bewegungsmelder. Erscheint das Auto nicht, stimmt meist dieser Sensor nicht. Ohne Sensor steht das Fahrzeug immer da.",
    "The sensor “car present” says when the vehicle stands in the spot, for example a tracker or a motion sensor. If the car does not appear, this sensor is usually the reason. Without a sensor the vehicle always stands there.",
  ));
  await r.pick("parking_entity", "Auto in", null).catch((e) => console.log("  [car present]", e.message));
  await r.show(2);
  r.say(S(
    "Unten wählst du eine beliebige Entity deines Autos. NextFloor findet über das Gerät des Autos alles andere von selbst: Ladestand, Reichweite, Stecker, Innentemperatur und die Knöpfe für Schloss, Klima und Laden. Daraus entsteht in 3D eine Karte über dem Stellplatz, die wir uns im Kapitel über die Live-Funktionen ansehen.",
    "At the bottom you choose any entity of your car. NextFloor finds everything else by itself through the device of the car: charge level, range, plug, inside temperature and the buttons for lock, climate and charging. From that a card over the parking spot is made in 3D, which we look at in the chapter about the live features.",
  ));
  await r.pick("live_car_device", "Van Lade", null).catch((e) => console.log("  [car entity]", e.message));
  await r.show(2);
  await r.click({ key: "tool_select" });
  await r.click({ key: "fit" });
  await r.show(1.5);
}

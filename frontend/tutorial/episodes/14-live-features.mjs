export const title = { en: "Live features", de: "Live-Funktionen" };
export const query = "pv=5400";

const S = (de, en) => ({ de, en });

export async function run(r) {
  const L = (de, en) => (r.lang === "de" ? de : en);
  const set = (id, state, attrs = {}) => r.eval((a, b, c) => window.nfDemoSet(a, b, c), id, state, attrs);
  const wait = (ms) => new Promise((ok) => setTimeout(ok, ms));

  await r.quietClick({ text: "3D" });
  await wait(3500);

  await r.chapter({ en: "Live features", de: "Live-Funktionen" }, { en: "What happens in the house", de: "Was im Haus passiert" });
  r.say(S(
    "Jetzt kommen die Live-Funktionen. Sie holen in die 3D-Ansicht, was im Haus gerade passiert: das Wetter, den Stromfluss, laufende Fernseher und Musik und das Auto. Sie sind eingebaut, kostenlos und brauchen keine Einrichtung außer den Geräten, die du schon hast.",
    "Now come the live features. They bring into the 3D view what is happening in the house right now: the weather, the power flow, TVs and music that are playing, and the car. They are built in, free, and need no setup beyond the devices you already have.",
  ));
  await r.show(2, 800);

  // ------------------------------------------------------------------ weather
  await r.chapter({ en: "Weather at the house", de: "Wetter am Haus" }, { en: "Rain, snow, fog and lightning", de: "Regen, Schnee, Nebel und Blitze" });
  r.say(S(
    "Mit dem Schalter „Wetter“ unten zeigt die 3D-Ansicht das Wetter über deinem Grundstück. Dafür liest NextFloor eine Wetter-Entity aus Home Assistant. Gerade scheint die Sonne. Wir lassen es regnen.",
    "With the “Weather” switch at the bottom the 3D view shows the weather over your plot. For that NextFloor reads a weather entity from Home Assistant. Right now the sun is shining. We make it rain.",
  ));
  await r.show(2, 1000);
  await set("weather.zuhause", "rainy", { cloud_coverage: 85, wind_speed: 25, wind_speed_unit: "km/h" });
  await r.show(4, 2500);
  r.say(S(
    "Der Regen fällt schräg mit dem echten Wind, die Wolken ziehen mit ihren Schatten über das Grundstück und verdunkeln die Szene. Die Windrichtung hängt vom Kompass ab, den wir vorhin eingestellt haben.",
    "The rain falls at an angle with the real wind, the clouds drift over the plot with their shadows and darken the scene. The wind direction depends on the compass we set earlier.",
  ));
  await r.orbit({ theta: 0.5, frames: 10 });
  await r.show(2, 800);
  await set("weather.zuhause", "snowy", { cloud_coverage: 70, wind_speed: 8, wind_speed_unit: "km/h" });
  await r.show(4, 2500);
  r.say(S(
    "Bei Schnee schneit es leise. Genauso gibt es Hagel, Schneeregen, Nebel, Gewitter mit Blitzen, die neben dem Haus einschlagen, und bei klarem Wetter stehen Sonne und Mond in ihrer echten Richtung am Himmel.",
    "With snow it snows quietly. There is hail, sleet, fog, thunderstorms with lightning that strikes beside the house, and in clear weather the sun and moon stand in the sky in their real direction.",
  ));
  await set("weather.zuhause", "lightning-rainy", { cloud_coverage: 95, wind_speed: 40, wind_speed_unit: "km/h" });
  await r.show(4, 2500);
  await set("weather.zuhause", "sunny", { cloud_coverage: 5, wind_speed: 6, wind_speed_unit: "km/h" });
  await r.show(2.5, 2000);
  r.say(S(
    "Wer es ruhiger mag, schaltet den Schalter „Wetter“ aus oder wählt in den Editor-Einstellungen einzelne Effekte ab.",
    "If you prefer it calmer, switch the “Weather” switch off or pick single effects in the editor settings.",
  ));
  await r.show(1.5);

  // ------------------------------------------------------------------ energy
  await r.chapter({ en: "Energy flow", de: "Energiefluss" }, { en: "Sun, house, battery and grid", de: "Sonne, Haus, Akku und Netz" });
  r.say(S(
    "Der Schalter „Stromfluss“ blendet die Energie ein. Die Solarmodule funkeln mit ihrer Produktion, und Energieteilchen fliegen in Bögen zum Wechselrichter und weiter zu den Verbrauchern.",
    "The “Power flow” switch shows the energy. The solar modules sparkle with their production, and energy particles fly in arcs to the inverter and on to the consumers.",
  ));
  await r.click({ text: "Power flow", css: undefined }).catch((e) => console.log("  [skipped]", e.message));
  await r.show(4, 2500);
  r.say(S(
    "Je mehr Strom fließt, desto schneller und dichter sind die Teilchen. Eine Glaskarte über dem Dach zeigt die Bilanz: Solar, Verbrauch, Akku und Netzbezug, und wie autark das Haus gerade ist.",
    "The more power flows, the faster and denser the particles are. A glass card over the roof shows the balance: solar, consumption, battery and grid draw, and how self-sufficient the house is right now.",
  ));
  await r.orbit({ theta: -0.6, frames: 12 });
  await r.show(2.5, 1500);

  // ------------------------------------------------------------------ TV and sound
  await r.chapter({ en: "TV screens and sound", de: "Fernseher und Klang" }, { en: "What plays, in the model", de: "Was läuft, im Modell" });
  r.say(S(
    "Fliegen wir ins Wohnzimmer. Der Fernseher läuft: Auf dem Bildschirm im Modell steht in der Farbe der App, was gerade läuft, hier Netflix. Dahinter leuchtet ein sanftes Ambilight an der Wand.",
    "Let us fly into the living room. The TV is on: on the screen in the model, in the colour of the app, is what is playing right now, here Netflix. Behind it a soft ambilight glows on the wall.",
  ));
  await r.click({ text: "Erdgeschoss", nth: 0 });
  await r.show(1.5, 1500);
  await r.click({ text: L("Wohnzimmer", "Living room") });
  await r.show(3, 2500);
  await set("media_player.fernseher", "playing", { app_name: "YouTube", media_title: "Rooftop Sessions", media_artist: "Live" });
  await r.show(3, 2000);
  r.say(S(
    "Wechselt der Fernseher die App, wechselt die Farbe und der Titel. Das Ambilight lässt sich pro Fernseher in der Stärke einstellen oder ganz abschalten, wenn du hinter dem Fernseher eigene LED-Streifen hast.",
    "When the TV changes the app, the colour and title change. The ambilight can be set in strength per TV or switched off completely if you have LED strips of your own behind the TV.",
  ));
  await r.show(1.5);
  r.say(S(
    "Laufen Lautsprecher oder Fernseher, schwebt über ihnen eine Karte mit Cover, Titel und Interpret. Antippen gibt dir Zurück, Wiedergabe oder Pause, Weiter und die Lautstärke. Schallringe in der Farbe der App breiten sich aus, lauter heißt weiter.",
    "When speakers or TVs play, a card floats over them with cover, title and artist. Tapping gives you previous, play or pause, next and the volume. Sound rings in the colour of the app spread out, louder reaches further.",
  ));
  await set("media_player.lautsprecher", "playing", { app_name: "Spotify", media_title: "Blue Train", media_artist: "John Coltrane", volume_level: 0.5 });
  await r.click({ text: L("Alle Etagen", "All floors"), nth: 0 });
  await r.show(4, 3000);
  await r.orbit({ theta: 0.4, frames: 8 });
  await r.show(1.5, 800);
  r.say(S(
    "Lautsprecher einer Multiroom-Gruppe verbindet ein leuchtender Faden. Mit dem Schalter „Karten“ blendest du alle schwebenden Karten gemeinsam aus oder ein.",
    "Speakers of a multiroom group are joined by a glowing thread. With the “Cards” switch you hide or show all floating cards together.",
  ));
  await r.show(1.5);

  // ------------------------------------------------------------------ car
  await r.chapter({ en: "The car", de: "Das Auto" }, { en: "Charge, range and controls", de: "Ladestand, Reichweite und Bedienung" });
  r.say(S(
    "Zuletzt das Auto in der Garage. Über dem Stellplatz zeigt eine Glaskarte den Ladestand mit Farbring, die Reichweite, ob und mit wie viel Leistung geladen wird, den Stecker und die Innentemperatur. Dazu kommen Knöpfe für Schloss, Klima und Laden.",
    "Last the car in the garage. Over the parking spot a glass card shows the charge with a colour ring, the range, whether and with how much power it is charging, the plug and the inside temperature. There are also buttons for lock, climate and charging.",
  ));
  await r.click({ text: L("Alle Etagen", "All floors"), nth: 0 });
  await r.show(4, 3000);
  await r.spotAt({ css: ".live-card-car" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(3);
  await r.spot(null);
  r.say(S(
    "Lädt das Auto, fliegen Energieteilchen von der Wallbox hinein. Ist das Auto weg, steht auf der Karte, wo es gerade ist. Die passenden Entitäten findet NextFloor selbst am Gerät des Autos.",
    "While the car charges, energy particles fly into it from the wallbox. When the car is away, the card says where it is. NextFloor finds the matching entities on the device of the car by itself.",
  ));
  await r.show(2.5);
}

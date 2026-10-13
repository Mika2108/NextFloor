export const title = { en: "Controlling the house", de: "Das Haus bedienen" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const L = (de, en) => (r.lang === "de" ? de : en);

  await r.quietClick({ text: "3D" });
  await new Promise((ok) => setTimeout(ok, 3000));
  await r.quietClick({ text: "Erdgeschoss", nth: 0 });
  await new Promise((ok) => setTimeout(ok, 2500));

  await r.chapter({ en: "The room panel", de: "Das Raum-Fenster" }, { en: "Lights, blinds and media of a room", de: "Lichter, Rollläden und Medien eines Raums" });
  r.say(S(
    "Jetzt bedienen wir das Haus. Dazu fliegen wir ins Wohnzimmer.",
    "Now we control the house. To do that we fly into the living room.",
  ));
  await r.click({ text: L("Wohnzimmer", "Living room") });
  await r.show(3, 2500);
  r.say(S(
    "Rechts steht das Raum-Fenster. Es zeigt alle Geräte des Raums nach Art geordnet: Lichter, Rollläden, Medien und Sensoren. Wichtig für dieses Video: Wir arbeiten hier in der Demo mit erfundenen Geräten, deshalb darf alles geschaltet werden. In deinem echten Home Assistant schaltet ein Klick das echte Gerät.",
    "On the right is the room panel. It shows all devices of the room sorted by kind: lights, blinds, media and sensors. Important for this video: here in the demo we work with invented devices, so everything may be switched. In your real Home Assistant a click switches the real device.",
  ));
  await r.show(2);
  r.say(S(
    "Bei den Lichtern schaltet ein Klick auf den Namen das Licht ein oder aus. Wir schalten die Stehlampe aus.",
    "For the lights a click on the name switches the light on or off. We switch the floor lamp off.",
  ));
  await r.click({ css: "button", text: "Stehlampe", nth: 0 });
  await r.show(2, 1200);
  r.say(S(
    "Darunter stellst du die Helligkeit und die Farbtemperatur mit Reglern ein, und die Farbpunkte setzen schnell eine Farbe, vom warmen Orange bis zu Blau, Pink und Grün. Wir schalten die Lampe wieder ein und färben sie.",
    "Below that you set the brightness and the colour temperature with sliders, and the colour dots quickly set a colour, from warm orange to blue, pink and green. We switch the lamp on again and colour it.",
  ));
  await r.click({ css: "button", text: "Stehlampe", nth: 0 });
  await r.show(1, 1000);
  await r.click({ css: "button[title='rgb(91, 124, 255)'], button[aria-label='rgb(91, 124, 255)']", nth: 1 });
  await r.show(2.5, 1500);
  r.say(S(
    "Die Lampe leuchtet im Modell jetzt blau, und der Lichtschein fällt auf Boden und Möbel. „Alle aus“ schaltet alle Lichter des Raums auf einmal aus.",
    "The lamp now glows blue in the model, and the light falls on the floor and the furniture. “All off” switches off all lights of the room at once.",
  ));
  await r.spotAt({ text: L("Alle aus", "All off") });
  await r.show(2);
  await r.spot(null);
  r.say(S(
    "Rollläden haben die Knöpfe Auf, Stopp und Zu und einen Positionsregler. Medien haben Zurück, Wiedergabe oder Pause, Weiter und die Lautstärke. Darunter stehen die Sensoren des Raums, hier der Stromverbrauch des Fernsehers und der Terrassentür-Kontakt.",
    "Blinds have the buttons Open, Stop and Close and a position slider. Media have Previous, Play or Pause, Next and the volume. Below are the sensors of the room, here the power draw of the TV and the terrace door contact.",
  ));
  await r.click({ text: L("Rollladen", "Rollladen"), nth: 0 }).catch(() => {});
  await r.show(2.5, 800);
  r.say(S(
    "Mit „Weitere Geräte des Bereichs“ blendest du die übrigen Geräte ein, die nicht im Plan platziert sind. Welche Geräte im Raum-Fenster erscheinen, steuerst du im Editor mit dem Auge und dem Stern in der Geräteliste.",
    "With “More devices of the area” you show the remaining devices that are not placed in the plan. Which devices appear in the room panel you control in the editor with the eye and the star in the device list.",
  ));
  await r.click({ text: L("Weitere Geräte des Bereichs", "More devices of the area") }).catch((e) => console.log("  [skipped]", e.message));
  await r.show(2.5, 800);

  // ------------------------------------------------------------------ in the model
  await r.chapter({ en: "Controlling in the model", de: "Direkt im Modell bedienen" }, { en: "Tap, long press and the quick menu", de: "Antippen, lange drücken und das Schnellmenü" });
  r.say(S(
    "Du kannst die Geräte auch direkt im 3D-Modell bedienen. Ein Antippen einer Lampe schaltet sie. Wir tippen die Deckenlampe an.",
    "You can also control the devices straight in the 3D model. A tap on a lamp switches it. We tap the ceiling lamp.",
  ));
  await r.click({ text: L("Alle", "All"), nth: 0 });
  await r.show(1, 1000);
  await r.click({ css: ".nf-dev[data-entity='light.wohnzimmer_decke']" }).catch((e) => console.log("  [skipped]", e.message));
  await r.show(2.5, 1200);
  r.say(S(
    "Ein langer Druck öffnet das Schnellmenü: Helligkeit, Farbe und die Details des Geräts, ohne dass du das Raum-Fenster brauchst. Auch bei Rollläden öffnet schon ein Antippen ihr Schnellmenü mit Auf, Zu und Positionen.",
    "A long press opens the quick menu: brightness, colour and the details of the device, without needing the room panel. For blinds a tap is enough to open their quick menu with open, close and positions.",
  ));
  await r.longPress({ css: ".nf-dev[data-entity='light.stehlampe']" }).catch((e) => console.log("  [skipped]", e.message));
  await r.show(3, 800);
  await r.key("Escape");
  await r.show(1, 600);

  // ------------------------------------------------------------------ central
  await r.chapter({ en: "The central menu", de: "Das Zentralmenü" }, { en: "All lights, all blinds, favourites", de: "Alle Lichter, alle Rollläden, Favoriten" });
  r.say(S(
    "Der Stern links unten ist das Zentralmenü: alle Lichter und alle Rollläden der Etage oder des ganzen Hauses auf einmal, dazu deine Favoriten. Favoriten sind Szenen, Skripte, Automationen und Schalter, die du in den Editor-Einstellungen festlegst.",
    "The star at the bottom left is the central menu: all lights and all blinds of the floor or the whole house at once, plus your favourites. Favourites are scenes, scripts, automations and switches that you set in the editor settings.",
  ));
  await r.click({ text: L("Alle Etagen", "All floors"), nth: 0 });
  await r.show(1.5, 1500);
  await r.click({ css: "button[aria-label^='Central'], button[title^='Central'], button[aria-label^='Zentral'], button[title^='Zentral']" }).catch((e) => console.log("  [skipped]", e.message));
  await r.show(3, 800);
  await r.key("Escape");
  await r.show(1);
  // ------------------------------------------------------------------ search
  await r.chapter({ en: "Search", de: "Suche" }, { en: "Where is …?", de: "Wo ist …?" });
  r.say(S(
    "Die Lupe unten links öffnet die Suche „Wo ist …?“. Du tippst den Namen eines Geräts oder Raums, und ein Treffer lässt die Kamera hinfliegen, während das Gerät aufblinkt. Praktisch in großen Häusern.",
    "The magnifier at the bottom left opens the “Where is …?” search. You type the name of a device or room, and a hit makes the camera fly there while the device flashes. Handy in big houses.",
  ));
  await r.click({ text: L("Suche", "Search") }).catch(async () => r.click({ css: "button[aria-label*='earch'], button[title*='earch']" }));
  await r.show(1, 800);
  await r.page.keyboard.type("Fern", { delay: 120 });
  await r.show(2, 800);
  await r.key("Enter");
  await r.show(2.5, 1500);
  await r.key("Escape");

}

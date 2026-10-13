export const title = { en: "Backup, moving and wrap-up", de: "Sicherung, Umzug und Abschluss" };

const S = (de, en) => ({ de, en });

export async function run(r) {
  const L = (de, en) => (r.lang === "de" ? de : en);
  const wait = (ms) => new Promise((ok) => setTimeout(ok, ms));

  await r.quietClick({ text: "Editor" });
  await r.quietClick({ text: "Erdgeschoss" });
  await r.page.mouse.move(640, 360);

  await r.chapter({ en: "Backup and moving", de: "Sicherung und Umzug" }, { en: "Keeping your plan safe", de: "Deinen Plan sicher aufbewahren" });
  r.say(S(
    "Dein Plan ist jetzt viel Arbeit wert. Damit er nicht verloren geht, gibt es im Editor ganz unten den Abschnitt „Sicherung“. Wir klappen ihn auf.",
    "Your plan is worth a lot of work now. So that it is not lost, the editor has a “Backup” section at the very bottom. We unfold it.",
  ));
  await r.click({ key: "backup" });
  await r.show(1.5, 800);
  r.say(S(
    "„Exportieren“ speichert den Plan als Datei, „Importieren“ liest ihn wieder ein, auch in einer anderen Installation. „Als Vorlage teilen“ erzeugt eine Datei ohne persönliche Angaben wie Geräte, die du mit anderen teilen kannst.",
    "“Export” saves the plan as a file, “Import” reads it in again, also in another installation. “Share as template” makes a file without personal details such as devices, which you can share with others.",
  ));
  await r.spotAt({ text: "Export" }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(2.5);
  await r.spot(null);
  r.say(S(
    "„Alles sichern“ packt zusätzlich alle Hintergrund- und Bildschirmbilder und die installierten Packs in eine einzige Datei. Mit „Vollsicherung wiederherstellen“ spielst du sie in dieselbe oder eine andere Installation zurück. Der Plan, die Bilder und die Packs liegen in Home Assistant unter „.storage“, und nichts davon verlässt deine Installation.",
    "“Back up everything” also packs all background and screen pictures and the installed packs into a single file. With “Restore a full backup” you play it back into the same or another installation. The plan, the pictures and the packs live in Home Assistant under “.storage”, and none of it leaves your installation.",
  ));
  await r.spotAt({ text: L("Alles sichern (Plan, Bilder, Packs)", "Back up everything (plan, pictures, packs)") }).catch((e) => console.log("  [skipped spot]", e.message));
  await r.show(3);
  await r.spot(null);
  r.say(S(
    "Vor größeren Änderungen lohnt sich eine Sicherung. Und falls doch etwas schiefgeht: „Rückgängig“ im Editor und die Tastenkombination Strg plus Z machen die letzten Schritte ungeschehen.",
    "Before bigger changes a backup is worth it. And if something does go wrong: “Undo” in the editor and the key combination Ctrl plus Z take back the last steps.",
  ));
  await r.show(2);

  await r.chapter({ en: "That's it", de: "Das war's" }, { en: "Your home, in NextFloor", de: "Dein Zuhause in NextFloor" });
  await r.click({ text: "3D" });
  await wait(3500);
  await r.frame();
  r.say(S(
    "Das war die komplette Einrichtung von NextFloor von Grund auf: Etagen, Räume, Türen und Fenster, Möbel, Geräte, Außenflächen, Treppe, Dach und Solarstrom, Kompass und Karte, und dazu die Bedienung in 3D, die Live-Funktionen, eigene Modelle, die Dashboard-Karte und die Sicherung.",
    "That was the complete setup of NextFloor from scratch: floors, rooms, doors and windows, furniture, devices, outdoor areas, stairs, roof and solar power, compass and map, plus operating it in 3D, the live features, own models, the dashboard card and the backup.",
  ));
  await r.show(3, 1000);
  await r.orbit({ theta: 1.2, frames: 24 });
  await r.show(2, 800);
  r.say(S(
    "Nimm dir für dein eigenes Haus ruhig Zeit. Wichtig sind zuerst die Räume und die Wände, alles Weitere kannst du jederzeit ergänzen. Und denk daran: Rückgängig ist immer nur einen Klick entfernt.",
    "Take your time with your own house. What matters first are the rooms and walls, everything else you can add at any time. And remember: undo is always only a click away.",
  ));
  await r.show(2, 800);
  r.say(S(
    "Wenn du Fragen hast, etwas nicht funktioniert oder dir eine Funktion fehlt, melde dich auf GitHub. Über „Problem melden“ und „Idee vorschlagen“ im Editor kommst du direkt dorthin. NextFloor ist kostenlos und Open Source. Viel Spaß mit deinem Zuhause in 3D!",
    "If you have questions, something does not work or you miss a feature, get in touch on GitHub. “Report a problem” and “Propose an idea” in the editor take you straight there. NextFloor is free and open source. Have fun with your home in 3D!",
  ));
  await r.orbit({ theta: -1.2, frames: 24 });
  await r.show(4, 1500);
}

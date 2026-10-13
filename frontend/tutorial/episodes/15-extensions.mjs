import { DEEP } from "../lib.mjs";
import { writeSampleGlb } from "../sample-model.mjs";

export const title = { en: "Extensions: own models and packs", de: "Erweiterungen: eigene Modelle und Packs" };

export const keepState = true;

const S = (de, en) => ({ de, en });

export async function run(r) {
  const L = (de, en) => (r.lang === "de" ? de : en);
  const glb = writeSampleGlb("/tmp/tutorial-sample.glb");

  await r.chapter({ en: "Your own 3D models", de: "Eigene 3D-Modelle" }, { en: "The Extensions tab", de: "Der Reiter Erweiterungen" });
  r.say(S(
    "Der dritte Reiter heißt Erweiterungen. Hier lädst du eigene 3D-Modelle hoch, ohne etwas von Hand auf den Server kopieren zu müssen.",
    "The third tab is called Extensions. Here you upload 3D models of your own, without having to copy anything to the server by hand.",
  ));
  await r.click({ text: "Extensions" });
  await r.show(3, 1200);
  r.say(S(
    "Für einige Fahrzeuge kann NextFloor ein echtes 3D-Modell zeigen, wenn du eines besitzt, zum Beispiel für dein eigenes Auto. Jede Zeile ist ein Platz: Sie nennt das Fahrzeug und den Dateinamen, und daneben steht, ob schon ein Modell vorhanden ist.",
    "For some vehicles NextFloor can show a real 3D model if you own one, for example of your own car. Every row is a slot: it names the vehicle and the file name, and next to it says whether a model is present already.",
  ));
  await r.show(2.5);
  r.say(S(
    "Wir wählen beim Tesla Model 3 „Modell hinzufügen“ und eine Datei im glb-Format aus. NextFloor bereitet das Modell direkt im Browser auf: Es dreht es richtig herum, macht es leichter, entfernt Texturen und markiert den Lack, damit er sich später umfärben lässt. Dann legt es die Datei auf deinem Home Assistant ab.",
    "For the Tesla Model 3 we choose “Add a model” and a file in glb format. NextFloor prepares the model right in the browser: it turns it the right way round, makes it lighter, removes textures and marks the paint so that it can be recoloured later. Then it stores the file on your Home Assistant.",
  ));
  const at = await r.point({ text: L("Modell hinzufügen …", "Add a model …"), nth: 1 });
  await r.page.evaluate((x, y) => window.__tut.ripple(x, y), at.x, at.y);
  await r.frame();
  // the file dialog of the system cannot be filmed: the chosen file is handed to the page's file field directly
  const input = await r.page.evaluateHandle(`(() => { ${DEEP} return all("input[type=file]")[1]; })()`);
  await input.uploadFile(glb);
  await r.show(3, 3500);
  r.say(S(
    "Fertig: Bei diesem Platz steht jetzt „vorhanden“, und du kannst das Modell ersetzen oder entfernen. Nur Administratoren können Modelle hochladen. Modelle bis zwölf Megabyte werden angenommen. Ein Fahrzeug ohne Modell sieht aus wie bisher.",
    "Done: this slot now says “in place”, and you can replace or remove the model. Only administrators can upload models. Models up to twelve megabytes are accepted. A vehicle without a model looks as it did before.",
  ));
  await r.show(2.5);
  r.say(S(
    "Die Möbel-Packs brauchen keine Einrichtung: Sie sind alle schon da und stehen in der Möbelbibliothek des Editors. Wenn du sehen möchtest, wie jedes einzelne Modell aussieht, gibt es in der Online-Demo eine Modellschau.",
    "The furniture packs need no setup: they are all there already and are listed in the furniture library of the editor. If you want to see what every single model looks like, the online demo has a model showcase.",
  ));
  await r.show(1.5);

  // ------------------------------------------------------------------ showcase
  await r.chapter({ en: "The model showcase", de: "Die Modellschau" }, { en: "Every model, live", de: "Jedes Modell, live" });
  await r.navigate("showcase&set=pack%3Aa_wohnzimmer");
  await r.show(3, 2500);
  r.say(S(
    "Die Modellschau zeigt alle Modelle in einem Raum, zehn pro Seite, in der Reihenfolge, in der sie stehen. Die Namen stehen in der Liste unten links.",
    "The model showcase shows all models in one room, ten per page, in the order in which they stand. The names are listed at the bottom left.",
  ));
  await r.show(2.5);
  r.say(S(
    "Über die Auswahl wechselst du die Gruppe, grundlegende Modelle oder eines der Packs. Mit „weiter“ und „zurück“ blätterst du, und das 3D-Modell lässt sich wie immer drehen und zoomen.",
    "With the selection you change the group, basic models or one of the packs. With “next” and “previous” you page through, and the 3D model can be turned and zoomed as always.",
  ));
  await r.click({ text: L("weiter ›", "next ›") });
  await r.reinject();
  await r.show(3, 3000);
  await r.click({ text: L("weiter ›", "next ›") });
  await r.reinject();
  await r.show(3, 3000);
}

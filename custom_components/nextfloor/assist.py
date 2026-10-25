"""Ask the house: the questions NextFloor answers from the plan and the states, for Assist and automations.

`nextfloor.ask` answers "show the kitchen", "where is the washing machine", "what's open" and "which lights
are on" in German or English. "Show" also tells every open NextFloor view to fly there (websocket
`nextfloor/show/subscribe`). The same answers are offered to Assist as intents; the sentences for them are
written to custom_sentences only when an administrator asks for it.
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re
from typing import Any
import unicodedata

from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse, SupportsResponse, callback
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers import intent
from homeassistant.helpers.dispatcher import async_dispatcher_send
import voluptuous as vol

from .const import DOMAIN

SIGNAL_SHOW = f"{DOMAIN}_show"
SERVICE_ASK = "ask"

_TEXTS = {
    "de": {
        "and": "und",
        "here": "Ich zeige {name}.",
        "where": "{name} ist hier: {room}.",
        "not_found": "Ich finde „{name}“ nicht im Plan.",
        "open": "Offen: {list}.",
        "closed": "Alles ist zu.",
        "lights": "{n} Lichter sind an: {list}.",
        "light": "Ein Licht ist an: {list}.",
        "no_lights": "Alle Lichter sind aus.",
        "unknown": "Das verstehe ich nicht.",
        "window": "Fenster",
        "door": "Tür",
        "garage_door": "Garagentor",
        "opening": "Öffnung",
    },
    "en": {
        "and": "and",
        "here": "Showing {name}.",
        "where": "{name} is here: {room}.",
        "not_found": 'I can\'t find "{name}" in the plan.',
        "open": "Open: {list}.",
        "closed": "Everything is closed.",
        "lights": "{n} lights are on: {list}.",
        "light": "One light is on: {list}.",
        "no_lights": "All lights are off.",
        "unknown": "I don't understand that.",
        "window": "window",
        "door": "door",
        "garage_door": "garage door",
        "opening": "opening",
    },
}

_FILLER = re.compile(
    r"^(?:(?:mir|me|uns|bitte|please|mal|the|a|an|my|mein|meine|meinen|das|den|die|der|dem|ein|eine|einen|zum|zur|in|im|to)\s+)+"
)
_SHOW = re.compile(r"^(?:zeig(?:e)?|zeigt|geh(?:e)?\s+(?:zu|in)|öffne|oeffne|show|go\s+to|open|take\s+me\s+to)\s+(.+)$")
_WHERE = re.compile(r"^(?:wo\s+(?:ist|sind|steht|liegt|hängt|haengt)|where\s+(?:is|are)|where's|finde?|suche?)\s+(.+)$")
_OPEN = re.compile(
    r"^(?:was\s+ist\s+(?:alles\s+)?(?:offen|auf|geöffnet)|welche\s+(?:fenster|türen)\s+(?:sind\s+)?(?:offen|auf)"
    r"|what's\s+open|what\s+is\s+open|which\s+(?:windows|doors)\s+are\s+open|is\s+anything\s+open|ist\s+(?:noch\s+)?(?:etwas|was)\s+(?:offen|auf))$"
)
_LIGHTS = re.compile(
    r"^(?:welche\s+(?:lichter|lampen|leuchten)\s+(?:sind\s+)?an|wo\s+brennt\s+(?:noch\s+)?licht"
    r"|which\s+lights\s+are\s+on|what\s+lights\s+are\s+on|are\s+any\s+lights\s+on)$"
)
_OPENING_CLASSES = {"window", "door", "garage_door", "opening"}


def _fold(text: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFD", text.casefold()) if not unicodedata.combining(c))


def _clean(text: str) -> str:
    text = re.sub(r"[?!.,;:„“\"]+", " ", text.casefold())
    text = re.sub(r"\s+", " ", text).strip()
    return re.sub(r"^(?:nextfloor|haus|house)\s+", "", text)


def _texts(language: str | None) -> dict[str, str]:
    return _TEXTS["de" if (language or "").lower().startswith("de") else "en"]


def _spoken(items: list[str], word: str) -> str:
    if len(items) <= 1:
        return items[0] if items else ""
    return f"{', '.join(items[:-1])} {word} {items[-1]}"


@dataclass
class Answer:
    """What the house says, and where the views should fly (for "show")."""

    speech: str
    floor_id: str | None = None
    room_id: str | None = None


def _rooms(building: dict[str, Any]) -> list[tuple[dict[str, Any], dict[str, Any]]]:
    """Every room of the plan with its floor."""
    return [(floor, room) for floor in building.get("floors", []) for room in floor.get("rooms", [])]


def _entity_areas(hass: HomeAssistant) -> dict[str, str]:
    """The area of every entity: its own, else its device's."""
    ents = er.async_get(hass)
    devs = dr.async_get(hass)
    out: dict[str, str] = {}
    for entry in ents.entities.values():
        area = entry.area_id
        if not area and entry.device_id and (device := devs.async_get(entry.device_id)):
            area = device.area_id
        if area:
            out[entry.entity_id] = area
    return out


def _find(
    hass: HomeAssistant, building: dict[str, Any], name: str
) -> tuple[str, dict[str, Any], dict[str, Any]] | None:
    """A room by its name, else an entity in a room's area by its friendly name: (shown name, floor, room)."""
    wanted = _fold(name)
    rooms = _rooms(building)
    for floor, room in rooms:
        if _fold(room.get("name", "")) == wanted:
            return room["name"], floor, room
    for floor, room in rooms:
        if wanted and wanted in _fold(room.get("name", "")):
            return room["name"], floor, room
    areas = _entity_areas(hass)
    by_area = {room.get("area_id"): (floor, room) for floor, room in rooms if room.get("area_id")}
    best: tuple[int, str, dict[str, Any], dict[str, Any]] | None = None
    for state in hass.states.async_all():
        place = by_area.get(areas.get(state.entity_id))
        if not place:
            continue
        friendly = str(state.attributes.get("friendly_name") or state.entity_id)
        folded = _fold(friendly)
        if wanted and wanted in folded:
            score = 0 if folded == wanted else 1 if folded.startswith(wanted) else 2
            if best is None or score < best[0]:
                best = (score, friendly, *place)
    return (best[1], best[2], best[3]) if best else None


def answer(hass: HomeAssistant, building: dict[str, Any], text: str, language: str | None) -> Answer:
    """The house's answer to one sentence."""
    t = _texts(language)
    sentence = _clean(text)
    rooms = _rooms(building)
    areas = _entity_areas(hass)
    room_of_area = {room.get("area_id"): room for _floor, room in rooms if room.get("area_id")}

    if _OPEN.match(sentence):
        found = []
        for state in hass.states.async_all("binary_sensor"):
            cls = state.attributes.get("device_class")
            room = room_of_area.get(areas.get(state.entity_id))
            if cls in _OPENING_CLASSES and state.state == "on" and room:
                found.append(f"{room.get('name')} ({t[cls]})")
        return Answer(t["open"].format(list=_spoken(found, t["and"])) if found else t["closed"])

    if _LIGHTS.match(sentence):
        on = [
            state
            for state in hass.states.async_all("light")
            if state.state == "on" and room_of_area.get(areas.get(state.entity_id))
        ]
        names = list(dict.fromkeys(room_of_area[areas[s.entity_id]].get("name", "") for s in on))
        return Answer(
            t["light" if len(on) == 1 else "lights"].format(n=len(on), list=_spoken(names, t["and"]))
            if on
            else t["no_lights"]
        )

    for pattern, kind in ((_WHERE, "where"), (_SHOW, "show")):
        if match := pattern.match(sentence):
            what = _FILLER.sub("", match.group(1)).strip()
            hit = _find(hass, building, what)
            if not hit:
                return Answer(t["not_found"].format(name=what))
            shown, floor, room = hit
            if kind == "where":
                return Answer(t["where"].format(name=shown, room=room.get("name", "")), floor.get("id"), room.get("id"))
            return Answer(t["here"].format(name=shown), floor.get("id"), room.get("id"))
    return Answer(t["unknown"])


def _building(hass: HomeAssistant) -> dict[str, Any]:
    data = hass.data.get(DOMAIN)
    return data.building if data is not None else {"floors": []}


def _reply(hass: HomeAssistant, result: Answer) -> None:
    if result.room_id:
        async_dispatcher_send(hass, SIGNAL_SHOW, {"floor_id": result.floor_id, "room_id": result.room_id})


@callback
def async_register_assist(hass: HomeAssistant) -> None:
    """The service `nextfloor.ask` and the Assist intents."""

    async def ask(call: ServiceCall) -> ServiceResponse:
        result = answer(hass, _building(hass), call.data["text"], call.data.get("language") or hass.config.language)
        _reply(hass, result)
        return {"speech": result.speech, "floor_id": result.floor_id, "room_id": result.room_id}

    hass.services.async_register(
        DOMAIN,
        SERVICE_ASK,
        ask,
        schema=vol.Schema({vol.Required("text"): str, vol.Optional("language"): str}),
        supports_response=SupportsResponse.OPTIONAL,
    )
    for handler in (
        _AskIntent("NextFloorShow", "zeig {name}"),
        _AskIntent("NextFloorWhere", "wo ist {name}"),
        _AskIntent("NextFloorOpen", "was ist offen"),
        _AskIntent("NextFloorLights", "welche lichter sind an"),
    ):
        intent.async_register(hass, handler)


class _AskIntent(intent.IntentHandler):
    """An Assist intent that asks the house the sentence it stands for."""

    def __init__(self, intent_type: str, sentence: str) -> None:
        self.intent_type = intent_type
        self._sentence = sentence

    @property
    def slot_schema(self) -> dict | None:
        """The name to show or find, for the intents that take one."""
        return {vol.Optional("name"): intent.non_empty_string} if "{name}" in self._sentence else None

    async def async_handle(self, intent_obj: intent.Intent) -> intent.IntentResponse:
        hass = intent_obj.hass
        slots = self.async_validate_slots(intent_obj.slots)
        name = str(slots.get("name", {}).get("value", "")) if slots else ""
        language = intent_obj.language or hass.config.language
        sentence = (
            self._sentence.format(name=name)
            if language.startswith("de")
            else _ENGLISH[self.intent_type].format(name=name)
        )
        result = answer(hass, _building(hass), sentence, language)
        _reply(hass, result)
        response = intent_obj.create_response()
        response.async_set_speech(result.speech)
        return response


_ENGLISH = {
    "NextFloorShow": "show {name}",
    "NextFloorWhere": "where is {name}",
    "NextFloorOpen": "what is open",
    "NextFloorLights": "which lights are on",
}

# the sentences Assist learns for the intents above, written to custom_sentences on request
SENTENCES = {
    "de": {
        "NextFloorShow": ["(zeig|zeige) [mir] [den|die|das] {name}", "(geh|gehe) (zu|in) [den|die|das] {name}"],
        "NextFloorWhere": ["wo (ist|sind|steht|liegt) [mein|meine|der|die|das] {name}"],
        "NextFloorOpen": ["was ist [alles] (offen|auf)", "welche (fenster|türen) sind (offen|auf)"],
        "NextFloorLights": ["welche (lichter|lampen) sind an", "wo brennt [noch] licht"],
    },
    "en": {
        "NextFloorShow": ["show [me] [the] {name}", "go to [the] {name}"],
        "NextFloorWhere": ["where (is|are) [my|the] {name}"],
        "NextFloorOpen": ["what is open", "what's open", "which (windows|doors) are open"],
        "NextFloorLights": ["which lights are on", "are any lights on"],
    },
}


def sentences_yaml(language: str) -> str:
    """The custom sentences file for one language (YAML written by hand: the format is small and fixed)."""
    lines = [
        "# written by NextFloor (Settings → Assist sentences); delete the file to remove them",
        f'language: "{language}"',
        "intents:",
    ]
    for intent_type, sentences in SENTENCES[language].items():
        lines += [f"  {intent_type}:", "    data:", "      - sentences:"]
        lines += [f'          - "{s}"' for s in sentences]
    lines += ["lists:", "  name:", "    wildcard: true", ""]
    return "\n".join(lines)


async def async_write_sentences(hass: HomeAssistant, languages: list[str]) -> list[str]:
    """Writes custom_sentences/<language>/nextfloor.yaml per language and reloads Assist; returns the paths."""
    written: list[str] = []

    def write() -> None:
        for language in languages:
            if language not in SENTENCES:
                continue
            path = Path(hass.config.path("custom_sentences", language, "nextfloor.yaml"))
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(sentences_yaml(language), encoding="utf-8")
            written.append(str(path))

    await hass.async_add_executor_job(write)
    if written and hass.services.has_service("conversation", "reload"):
        await hass.services.async_call("conversation", "reload", blocking=True)
    return written

"""Ask the house: the nextfloor.ask service, the show subscription, the Assist intents and their sentences."""

from __future__ import annotations

import copy
from pathlib import Path

from homeassistant.core import HomeAssistant
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers import intent
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.nextfloor.assist import SENTENCES, answer, sentences_yaml
from custom_components.nextfloor.const import DOMAIN

from .test_init import BUILDING


async def _house(hass: HomeAssistant) -> None:
    """NextFloor with a kitchen (area) and a hall, a kitchen light, a kitchen window and a washing machine plug."""
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    kitchen = ar.async_get(hass).async_create("Kitchen")
    building = copy.deepcopy(BUILDING)
    building["floors"][0]["background"] = None
    building["floors"][0]["rooms"][0].update({"name": "Küche", "area_id": kitchen.id})
    building["floors"][0]["rooms"].append(
        {**copy.deepcopy(building["floors"][0]["rooms"][0]), "id": "r2", "name": "Flur", "area_id": None}
    )
    hass.data[DOMAIN].building = building
    ents = er.async_get(hass)
    for entity_id in ("light.ceiling", "binary_sensor.kitchen_window", "switch.washing_machine"):
        domain, object_id = entity_id.split(".")
        entry_ = ents.async_get_or_create(domain, "test", object_id, suggested_object_id=object_id)
        ents.async_update_entity(entry_.entity_id, area_id=kitchen.id)
    hass.states.async_set("light.ceiling", "on", {"friendly_name": "Ceiling"})
    hass.states.async_set(
        "binary_sensor.kitchen_window", "on", {"device_class": "window", "friendly_name": "Kitchen window"}
    )
    hass.states.async_set("switch.washing_machine", "off", {"friendly_name": "Waschmaschine"})


async def test_the_house_answers_in_german_and_english(hass: HomeAssistant) -> None:
    await _house(hass)
    b = hass.data[DOMAIN].building
    assert answer(hass, b, "Was ist offen?", "de").speech == "Offen: Küche (Fenster)."
    assert answer(hass, b, "What's open?", "en").speech == "Open: Küche (window)."
    assert answer(hass, b, "Welche Lichter sind an?", "de").speech == "Ein Licht ist an: Küche."
    where = answer(hass, b, "Wo ist die Waschmaschine?", "de")
    assert where.speech == "Waschmaschine ist hier: Küche."
    assert where.room_id == "r1"
    show = answer(hass, b, "Zeig mir den Flur", "de")
    assert (show.floor_id, show.room_id) == ("f1", "r2")
    assert answer(hass, b, "Wo ist das Einhorn", "de").speech == "Ich finde „einhorn“ nicht im Plan."
    assert answer(hass, b, "Wie spät ist es", "de").speech == "Das verstehe ich nicht."
    hass.states.async_set("binary_sensor.kitchen_window", "off", {"device_class": "window"})
    assert answer(hass, b, "what is open", "en").speech == "Everything is closed."


async def test_the_service_answers_and_open_views_fly_there(hass: HomeAssistant, hass_ws_client) -> None:
    await _house(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "nextfloor/show/subscribe"})
    assert (await client.receive_json())["success"]
    result = await hass.services.async_call(
        DOMAIN, "ask", {"text": "show me the hall", "language": "en"}, blocking=True, return_response=True
    )
    assert result["speech"] == 'I can\'t find "hall" in the plan.'
    result = await hass.services.async_call(
        DOMAIN, "ask", {"text": "Zeig die Küche", "language": "de"}, blocking=True, return_response=True
    )
    assert result == {"speech": "Ich zeige Küche.", "floor_id": "f1", "room_id": "r1"}
    event = await client.receive_json()
    assert event["event"] == {"floor_id": "f1", "room_id": "r1"}


async def test_assist_intents_answer_the_same(hass: HomeAssistant) -> None:
    await _house(hass)
    response = await intent.async_handle(hass, "test", "NextFloorOpen", {}, language="de")
    assert response.speech["plain"]["speech"] == "Offen: Küche (Fenster)."
    response = await intent.async_handle(hass, "test", "NextFloorWhere", {"name": {"value": "Ceiling"}}, language="en")
    assert response.speech["plain"]["speech"] == "Ceiling is here: Küche."


def test_sentence_files_name_every_intent() -> None:
    for language in SENTENCES:
        text = sentences_yaml(language)
        assert f'language: "{language}"' in text
        for intent_type in SENTENCES[language]:
            assert f"  {intent_type}:" in text
        assert "wildcard: true" in text


async def test_sentences_are_written_only_on_request_and_by_admins(
    hass: HomeAssistant, hass_ws_client, tmp_path: Path
) -> None:
    await _house(hass)
    hass.config.config_dir = str(tmp_path)
    assert not (tmp_path / "custom_sentences").exists()
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "nextfloor/assist/sentences", "languages": ["de", "en"]})
    result = await client.receive_json()
    assert result["success"]
    assert (
        (tmp_path / "custom_sentences" / "de" / "nextfloor.yaml")
        .read_text(encoding="utf-8")
        .startswith("# written by NextFloor")
    )
    assert (tmp_path / "custom_sentences" / "en" / "nextfloor.yaml").exists()

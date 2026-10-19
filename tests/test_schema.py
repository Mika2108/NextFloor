"""Schema details: start views of the house, a floor and a room (#206, #282), the map, sub-meters."""

import pytest
import voluptuous as vol

from custom_components.nextfloor.schema import (
    ENERGY_SCHEMA,
    FURNITURE_SCHEMA,
    MAP_SCHEMA,
    ROOM_SCHEMA,
    START_VIEW_SCHEMA,
)

ROOM = {"id": "r1", "name": "Bad", "area_id": None, "points": [[0, 0], [2, 0], [2, 2]], "floor_material": "tiles"}


def test_start_view_keeps_its_target() -> None:
    view = START_VIEW_SCHEMA({"theta": 1, "phi": 0.8, "radius": 9, "target": {"x": 1, "y": 0.5, "z": -2}})
    assert view["target"] == {"x": 1.0, "y": 0.5, "z": -2.0}


def test_start_view_without_target() -> None:
    assert "target" not in START_VIEW_SCHEMA({"theta": 1, "phi": 0.8, "radius": 9})


def test_room_start_view() -> None:
    assert ROOM_SCHEMA(ROOM)["start_view"] is None
    view = {"theta": 0.5, "phi": 0.9, "radius": 4, "target": {"x": 1, "y": 0.3, "z": 1}}
    room = ROOM_SCHEMA({**ROOM, "start_view": view})
    assert room["start_view"]["radius"] == 4.0


def test_map_defaults_and_limits() -> None:
    result = MAP_SCHEMA({"on": True, "lat": 50.1, "lon": 8.6})
    assert (result["zoom"], result["opacity"], result["url"]) == (18, 0.5, None)
    for bad in ({"lat": 99}, {"zoom": 25}, {"url": "http://tiles.example/{z}/{x}/{y}.png"}):
        with pytest.raises(vol.Invalid):
            MAP_SCHEMA({"on": True, "lat": 50.1, "lon": 8.6, **bad})


def test_sub_meter_fields_are_optional() -> None:
    meter = {"id": "m2", "type": "meter", "x": 1, "z": 1, "rotation": 0, "w": 0.5, "d": 0.2, "h": 0.8, "variant": None}
    plain = FURNITURE_SCHEMA(meter)
    assert not {"parent_meter", "meter_invert", "meter_floors"} & plain.keys()
    sub = FURNITURE_SCHEMA({**meter, "parent_meter": "m1", "meter_invert": True, "meter_floors": ["og", "dg"]})
    assert (sub["parent_meter"], sub["meter_invert"], sub["meter_floors"]) == ("m1", True, ["og", "dg"])
    with pytest.raises(vol.Invalid):
        FURNITURE_SCHEMA({**meter, "meter_floors": "og"})


def test_advanced_energy_mode_is_optional() -> None:
    assert "advanced" not in ENERGY_SCHEMA({})
    assert ENERGY_SCHEMA({"advanced": True})["advanced"] is True
    assert "show_unmetered" not in ENERGY_SCHEMA({"advanced": True})
    assert ENERGY_SCHEMA({"show_unmetered": True})["show_unmetered"] is True
    with pytest.raises(vol.Invalid):
        ENERGY_SCHEMA({"advanced": "yes"})

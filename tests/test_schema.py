"""Start views of the house, a floor and a room (#206, #282)."""

import pytest
import voluptuous as vol

from custom_components.nextfloor.schema import MAP_SCHEMA, ROOM_SCHEMA, START_VIEW_SCHEMA

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

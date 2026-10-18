"""Standalone validation checks, without importing the Home Assistant integration."""

import importlib.util
import json
from pathlib import Path

import pytest
import voluptuous as vol

spec = importlib.util.spec_from_file_location(
    "nextfloor_schema", Path(__file__).parents[1] / "custom_components/nextfloor/schema.py"
)
schema = importlib.util.module_from_spec(spec)
spec.loader.exec_module(schema)


@pytest.mark.parametrize(
    "validator,base",
    [
        (schema.PLACEMENT_SCHEMA, {"entity_id": "light.demo", "x": 1, "z": 1, "y": None}),
        (
            schema.FURNITURE_SCHEMA,
            {
                "id": "demo",
                "type": "lamp_floor",
                "x": 1,
                "z": 1,
                "rotation": 0,
                "w": 0.3,
                "d": 0.3,
                "h": 1.5,
                "variant": None,
            },
        ),
    ],
)
@pytest.mark.parametrize(
    "name,accepted",
    [
        ("", False),
        ("💡", True),
        ("💡" * 128, True),
        ("💡" * 255, True),
        ("💡" * 256, False),
        ("a" * 127 + "💡" * 128, True),
        ("a" * 128 + "💡" * 128, False),
        (" e\u0301" + "💡" * 251 + " ", True),
        (" e\u0301" + "💡" * 252 + " ", False),
    ],
    ids=[
        "empty",
        "one",
        "128-supplementary",
        "255-supplementary",
        "256-supplementary",
        "255-mixed",
        "256-mixed",
        "255-unmodified",
        "256-unmodified",
    ],
)
def test_effect_names_use_unicode_code_points(validator, base, name, accepted):
    payload = json.loads(json.dumps({**base, "effect_animations": {name: "future"}}))
    if accepted:
        assert validator(payload)["effect_animations"] == {name: "future"}
    else:
        with pytest.raises(vol.Invalid):
            validator(payload)


PLACEMENT = {"entity_id": "light.demo", "x": 1, "z": 1, "y": None}
FURNITURE = {
    "id": "demo",
    "type": "lamp_floor",
    "x": 1,
    "z": 1,
    "rotation": 0,
    "w": 0.3,
    "d": 0.3,
    "h": 1.5,
    "variant": None,
}


@pytest.mark.parametrize("validator,base", [(schema.PLACEMENT_SCHEMA, PLACEMENT), (schema.FURNITURE_SCHEMA, FURNITURE)])
def test_effect_configuration_rejects_invalid_shapes(validator, base):
    for invalid in [[], "rainbow", {"Demo": 42}, {"": "rainbow"}, {"x" * 256: "rainbow"}]:
        with pytest.raises(vol.Invalid):
            validator({**base, "effect_animations": invalid})
    with pytest.raises(vol.Invalid):
        validator({**base, "animations_enabled": "yes"})


@pytest.mark.parametrize("validator,base", [(schema.PLACEMENT_SCHEMA, PLACEMENT), (schema.FURNITURE_SCHEMA, FURNITURE)])
def test_effect_configuration_round_trips_exact_names_and_future_identifiers(validator, base):
    mapping = {"Regenbogen": "rainbow", "Kerzenlicht": "flicker", "Weiß": "none", " White ": "future"}
    result = validator(json.loads(json.dumps({**base, "effect_animations": mapping, "animations_enabled": False})))
    assert result["effect_animations"] == mapping
    assert result["animations_enabled"] is False
    assert "effect_animations" not in validator(base)


@pytest.mark.parametrize("validator,base", [(schema.PLACEMENT_SCHEMA, PLACEMENT), (schema.FURNITURE_SCHEMA, FURNITURE)])
def test_effect_configuration_accepts_limits_and_explicit_prototype_names(validator, base):
    mapping = {str(i): "future" for i in range(96)}
    mapping.update({"x" * 255: "pulse", "__proto__": "rainbow", "constructor": "pulse", "toString": "flicker"})
    assert validator({**base, "effect_animations": mapping})["effect_animations"] == mapping
    with pytest.raises(vol.Invalid):
        validator({**base, "effect_animations": {**mapping, "entry-101": "none"}})

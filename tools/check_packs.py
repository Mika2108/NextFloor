"""Checks every built-in pack with the integration's own validator (needs only voluptuous). Run: python3 tools/check_packs.py"""

import importlib.util
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent / "custom_components" / "nextfloor"
spec = importlib.util.spec_from_file_location("nf_packs", root / "packs.py")
module = importlib.util.module_from_spec(spec)
sys.modules["nf_packs"] = module
spec.loader.exec_module(module)

bad = 0
total = 0
for file in sorted((root / "packs").glob("*.json")):
    try:
        pack = module.parse_pack(file.read_text(encoding="utf-8"))
        total += len(pack["items"])
    except Exception as err:  # noqa: BLE001
        bad += 1
        print(f"{file.name}: {err}")
print(f"{total} items checked, {bad} packs with errors")
sys.exit(1 if bad else 0)

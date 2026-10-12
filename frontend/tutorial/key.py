#!/usr/bin/env python3
"""Finds the i18n keys of UI texts: python3 tutorial/key.py "Add floor" "Rectangle" (case-insensitive, substring)."""
import re,sys
src=open(__file__.replace("tutorial/key.py","src/i18n.ts") if "tutorial/key.py" in __file__ else "/root/claude/nextfloor/frontend/src/i18n.ts").read()
en=src[src.index("const en:"):]
de=src[:src.index("const en:")]
pairs=re.findall(r'^  ([a-z0-9_]+): (?:"((?:[^"\\]|\\.)*)"|`([^`]*)`),?$',en,flags=re.M)
dpairs=dict((k,a or b) for k,a,b in re.findall(r'^  ([a-z0-9_]+): (?:"((?:[^"\\]|\\.)*)"|`([^`]*)`),?$',de,flags=re.M))
for q in sys.argv[1:]:
    for k,a,b in pairs:
        v=a or b
        if q.lower() in v.lower():
            print(f"{k:32} | {v[:60]:60} | {dpairs.get(k,'')[:50]}")

"""Pack Küche (kitchen): base, drawer and wall units, tall units, appliances, islands, dining and small appliances."""

from area_common import make

FRONT = "#e8ecf2"
WORKTOP = "#3a3f4a"


def build(bp):
    W = lambda *a, **k: make(bp, *a, **k)  # noqa: E731
    items = []

    def carcass(m, front=FRONT, plinth=0.1, top=True):
        """Plinth, body and worktop of a 0.9 m high unit."""
        p = [
            m.b(0, -0.02, m.w - 0.04, m.d - 0.06, 0, plinth, "dark"),
            m.b(0, 0, m.w, m.d, plinth, m.h - plinth - 0.04, front, edges="faint"),
        ]
        if top:
            p.append(m.b(0, 0.01, m.w + 0.01, m.d + 0.02, m.h - 0.04, 0.04, WORKTOP))
        return p

    def handle(m, x, y, vertical=False):
        return m.b(x, m.d / 2 + 0.012, 0.015 if vertical else 0.14, 0.02, y, 0.14 if vertical else 0.015, "metal")

    # ---------------------------------------------------------------- base and drawer units
    for w in (30, 40, 50, 60, 80, 90, 100, 120):

        def base(m, w=w):
            p = carcass(m)
            doors = 1 if w <= 60 else 2
            for i in range(doors):
                x = -m.w / 2 + m.w / doors * (i + 0.5)
                p.append(m.b(x, m.d / 2, m.w / doors - 0.01, 0.012, 0.12, 0.72, FRONT))
                p.append(handle(m, x + (m.w / doors) * 0.38 * (1 if i % 2 == 0 else -1), 0.7, True))
            return p

        items.append(W(f"base_{w}", f"Unterschrank {w}", f"Base unit {w}", (w / 100, 0.6, 0.9), base, surface=True))

    for w in (40, 50, 60, 80, 90, 100, 120):

        def drawers(m, w=w):
            p = carcass(m)
            n = 3
            for i in range(n):
                y = 0.13 + i * 0.236
                p.append(m.b(0, m.d / 2, m.w - 0.02, 0.012, y, 0.22, FRONT))
                p.append(handle(m, 0, y + 0.15))
            return p

        items.append(
            W(f"drawer_{w}", f"Schubladenschrank {w}", f"Drawer unit {w}", (w / 100, 0.6, 0.9), drawers, surface=True)
        )

    def sink(m, w):
        p = carcass(m)
        for i in range(2 if w > 60 else 1):
            x = -m.w / 2 + m.w / (2 if w > 60 else 1) * (i + 0.5)
            p.append(m.b(x, m.d / 2, m.w / (2 if w > 60 else 1) - 0.01, 0.012, 0.12, 0.72, FRONT))
        p.append(m.b(-m.w * 0.15 if w > 60 else 0, 0.02, m.w * (0.55 if w > 60 else 0.7), 0.4, 0.88, 0.02, "#b8c0cc"))
        p.append(m.c(0.0 + (m.w * 0.3 if w > 60 else 0), -0.22, 0.05, 0.05, 0.9, 0.2, "metal"))
        p.append(m.l(0.0 + (m.w * 0.3 if w > 60 else 0), -0.16, 0.03, 0.18, 1.08, 0.03, "metal", tz=-0.1, td=0.03))
        return p

    for w in (60, 80, 100):
        items.append(
            W(
                f"sink_{w}",
                f"Spülenschrank {w}",
                f"Sink unit {w}",
                (w / 100, 0.6, 1.15),
                lambda m, w=w: sink(m, w),
                surface=False,
            )
        )

    def hob_unit(m, w):
        p = carcass(m)
        p.append(m.b(0, 0.0, m.w - 0.06, 0.5, 0.9, 0.01, "dark"))
        for sx in (-1, 1):
            for sz in (-1, 1):
                p.append(m.c(sx * m.w * 0.2, sz * 0.13, 0.17, 0.17, 0.905, 0.005, "#7b8594"))
        p.append(m.b(0, m.d / 2, m.w - 0.02, 0.012, 0.12, 0.7, FRONT))
        p.append(handle(m, 0, 0.7))
        return p

    items.append(
        W("hob_60", "Kochfeldschrank 60", "Hob unit 60", (0.6, 0.6, 0.92), lambda m: hob_unit(m, 60), electric=True)
    )
    items.append(
        W("hob_80", "Kochfeldschrank 80", "Hob unit 80", (0.8, 0.6, 0.92), lambda m: hob_unit(m, 80), electric=True)
    )
    items.append(
        W(
            "cooker_60",
            "Herd mit Backofen 60",
            "Cooker with oven 60",
            (0.6, 0.6, 0.92),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, 0.9, "#cfd6e2", edges="faint"),
                m.b(0, 0, m.w, m.d, 0.9, 0.02, "dark"),
                *[m.c(sx * 0.15, sz * 0.13, 0.15, 0.15, 0.92, 0.004, "#7b8594") for sx in (-1, 1) for sz in (-1, 1)],
                m.b(0, m.d / 2 + 0.005, 0.5, 0.012, 0.1, 0.55, "dark"),
                m.b(0, m.d / 2 + 0.01, 0.44, 0.01, 0.2, 0.3, "glass"),
                m.b(0, m.d / 2 + 0.03, 0.5, 0.025, 0.7, 0.025, "metal"),
                *[
                    m.c(x, m.d / 2 + 0.012, 0.035, 0.03, 0.84, 0.035, "metal", axis="z")
                    for x in (-0.2, -0.07, 0.07, 0.2)
                ],
            ],
            electric=True,
        )
    )

    def dishwasher(w):
        def fn(m):
            return [
                m.b(0, 0, m.w, m.d, 0.05, 0.85, "#cfd6e2", edges="faint"),
                m.b(0, m.d / 2 + 0.005, m.w - 0.04, 0.012, 0.1, 0.72, "#bcc4d0"),
                m.b(0, m.d / 2 + 0.012, 0.35 if w == 60 else 0.25, 0.01, 0.8, 0.03, "dark"),
                m.b(0.1, m.d / 2 + 0.014, 0.03, 0.01, 0.805, 0.02, "#7fd0ff", glow=True),
            ]

        return fn

    items.append(
        W(
            "dishwasher_60",
            "Einbaugeschirrspüler 60",
            "Built-in dishwasher 60",
            (0.6, 0.6, 0.9),
            dishwasher(60),
            electric=True,
        )
    )
    items.append(
        W(
            "dishwasher_45",
            "Einbaugeschirrspüler 45",
            "Built-in dishwasher 45",
            (0.45, 0.6, 0.9),
            dishwasher(45),
            electric=True,
        )
    )
    items.append(
        W(
            "base_corner",
            "Eckunterschrank",
            "Corner base unit",
            (0.9, 0.9, 0.9),
            lambda m: [
                m.b(-0.15, -0.15, 0.6, 0.6, 0.1, 0.76, FRONT, edges="faint"),
                m.b(0.15, 0.15, 0.6, 0.6, 0.1, 0.76, FRONT, edges="faint"),
                m.b(0, 0, m.w, m.d, 0.86, 0.04, WORKTOP),
                m.b(0, 0, m.w - 0.04, m.d - 0.04, 0, 0.1, "dark"),
            ],
            surface=True,
        )
    )

    # ---------------------------------------------------------------- wall units
    for w in (40, 50, 60, 80, 90, 100, 120):

        def wall(m, w=w):
            p = [m.b(0, 0, m.w, m.d, 0, m.h, FRONT, edges="faint")]
            doors = 1 if w <= 60 else 2
            for i in range(doors):
                x = -m.w / 2 + m.w / doors * (i + 0.5)
                p.append(m.b(x, m.d / 2, m.w / doors - 0.01, 0.012, 0.03, m.h - 0.06, "#dde2ea"))
                p.append(
                    m.b(
                        x + (m.w / doors) * 0.38 * (1 if i % 2 == 0 else -1),
                        m.d / 2 + 0.012,
                        0.015,
                        0.02,
                        0.05,
                        0.14,
                        "metal",
                    )
                )
            return p

        items.append(
            W(f"wall_{w}", f"Hängeschrank {w}", f"Wall unit {w}", (w / 100, 0.35, 0.7), wall, mount="wall", wall_y=1.4)
        )

    items.append(
        W(
            "wall_glass_80",
            "Glas-Hängeschrank 80",
            "Glass wall unit 80",
            (0.8, 0.35, 0.7),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, FRONT, edges="faint"),
                *[m.b(x, m.d / 2, 0.38, 0.012, 0.04, 0.62, "glass", edges="faint") for x in (-0.2, 0.2)],
                m.b(0, 0, 0.74, 0.3, 0.33, 0.02, FRONT),
            ],
            mount="wall",
            wall_y=1.4,
        )
    )
    items.append(
        W(
            "wall_corner",
            "Eck-Hängeschrank",
            "Corner wall unit",
            (0.6, 0.6, 0.7),
            lambda m: [
                m.b(0, -0.125, m.w, 0.35, 0, m.h, FRONT, edges="faint"),
                m.b(0.125, 0.125, 0.35, 0.25, 0, m.h, FRONT, edges="faint"),
            ],
            mount="wall",
            wall_y=1.4,
        )
    )
    items.append(
        W(
            "hood_wall",
            "Wand-Dunstabzugshaube",
            "Wall cooker hood",
            (0.6, 0.5, 0.8),
            lambda m: [
                m.l(0, 0.0, 0.6, 0.5, 0, 0.1, "#cfd6e2", tw=0.6, td=0.45),
                m.b(0, -0.15, 0.3, 0.2, 0.1, 0.7, "#cfd6e2", edges="faint"),
                m.b(0, 0.2, 0.5, 0.01, 0.02, 0.01, "#7fd0ff", glow=True),
            ],
            mount="wall",
            wall_y=1.5,
            electric=True,
        )
    )
    items.append(
        W(
            "hood_island",
            "Insel-Dunstabzugshaube",
            "Island cooker hood",
            (0.9, 0.5, 1.2),
            lambda m: [
                m.l(0, 0, 0.9, 0.5, 0, 0.12, "metal", tw=0.5, td=0.25),
                m.b(0, 0, 0.2, 0.15, 0.12, 1.08, "metal", edges="faint"),
                m.b(0, 0.0, 0.8, 0.4, 0.01, 0.01, "#ffe7b0", glow=True),
            ],
            mount="ceiling",
            electric=True,
        )
    )

    # ---------------------------------------------------------------- tall units and fridges
    def tall(id_, de, en, w, kind):
        def fn(m):
            p = [
                m.b(0, 0, m.w, m.d, 0.05, m.h - 0.05, FRONT, edges="faint"),
                m.b(0, -0.02, m.w - 0.04, m.d - 0.06, 0, 0.05, "dark"),
            ]
            if kind == "pantry":
                for i in range(2):
                    p.append(m.b(0, m.d / 2, m.w - 0.02, 0.012, 0.1 + i * 1.05, 0.98, "#dde2ea"))
                    p.append(handle(m, m.w * 0.38, 0.3 + i * 1.05 + 0.3, True))
            elif kind == "oven":
                p += [
                    m.b(0, m.d / 2 + 0.01, m.w - 0.06, 0.012, 1.0, 0.6, "dark"),
                    m.b(0, m.d / 2 + 0.014, m.w - 0.1, 0.01, 1.08, 0.4, "glass"),
                    m.b(0, m.d / 2 + 0.01, m.w - 0.06, 0.012, 1.65, 0.38, "dark"),
                    m.b(0, m.d / 2, m.w - 0.02, 0.012, 0.1, 0.85, FRONT),
                    m.b(0, m.d / 2, m.w - 0.02, 0.012, 1.9, 0.28, FRONT),
                ]
            elif kind == "steam":
                p += [
                    m.b(0, m.d / 2 + 0.01, m.w - 0.06, 0.012, 0.9, 0.45, "dark"),
                    m.b(0, m.d / 2 + 0.01, m.w - 0.06, 0.012, 1.4, 0.45, "dark"),
                    m.b(0.1, m.d / 2 + 0.016, 0.04, 0.01, 1.05, 0.03, "#7fd0ff", glow=True),
                    m.b(0, m.d / 2, m.w - 0.02, 0.012, 0.1, 0.75, FRONT),
                    m.b(0, m.d / 2, m.w - 0.02, 0.012, 1.9, 0.28, FRONT),
                ]
            else:  # fridge-freezer in a tall unit
                p += [
                    m.b(0, m.d / 2, m.w - 0.02, 0.012, 1.0, 1.2, "#cfd6e2"),
                    m.b(0, m.d / 2, m.w - 0.02, 0.012, 0.1, 0.88, "#cfd6e2"),
                    m.b(
                        m.w * 0.38,
                        m.d / 2 + 0.02,
                        0.02,
                        0.02,
                        1.15,
                        0.6,
                        "metal",
                    ),
                    m.b(m.w * 0.38, m.d / 2 + 0.02, 0.02, 0.02, 0.5, 0.35, "metal"),
                ]
            return p

        items.append(W(id_, de, en, (w, 0.6, 2.2), fn, electric=kind != "pantry"))

    tall("tall_pantry", "Hochschrank Vorrat", "Tall pantry unit", 0.6, "pantry")
    tall("tall_oven", "Hochschrank Backofen & Mikrowelle", "Tall oven & microwave unit", 0.6, "oven")
    tall("tall_fridge", "Hochschrank Kühl-Gefrier", "Tall fridge-freezer unit", 0.6, "fridge")
    tall("tall_steam", "Hochschrank Dampf & Backofen", "Tall steam & oven unit", 0.6, "steam")

    def fridge(id_, de, en, size, french=False):
        def fn(m):
            p = [
                m.b(0, 0, m.w, m.d, 0.02, m.h - 0.02, "#cfd6e2", edges="faint"),
                m.b(0, 0, m.w - 0.04, m.d - 0.04, 0, 0.02, "dark"),
            ]
            if french:
                p += [
                    m.b(-m.w / 4, m.d / 2, m.w / 2 - 0.01, 0.012, m.h * 0.35, m.h * 0.62, "#bcc4d0"),
                    m.b(m.w / 4, m.d / 2, m.w / 2 - 0.01, 0.012, m.h * 0.35, m.h * 0.62, "#bcc4d0"),
                    m.b(0, m.d / 2, m.w - 0.02, 0.012, 0.05, m.h * 0.28, "#bcc4d0"),
                    m.b(0, m.d / 2 + 0.02, 0.3, 0.02, m.h * 0.92, 0.03, "dark"),
                ]
            else:
                p += [
                    m.b(0, m.d / 2, m.w - 0.02, 0.012, 0.05, m.h * 0.28, "#bcc4d0"),
                    m.b(0, m.d / 2, m.w - 0.02, 0.012, m.h * 0.34, m.h * 0.63, "#bcc4d0"),
                    m.b(m.w * 0.38, m.d / 2 + 0.02, 0.02, 0.02, m.h * 0.45, 0.45, "metal"),
                    m.b(m.w * 0.38, m.d / 2 + 0.02, 0.02, 0.02, m.h * 0.12, 0.3, "metal"),
                ]
            return p

        items.append(W(id_, de, en, size, fn, electric=True))

    fridge("fridge_freezer", "Kühl-Gefrierkombination", "Fridge-freezer", (0.6, 0.65, 1.85))
    fridge("fridge_french", "Side-by-Side-Kühlschrank", "French-door fridge", (0.9, 0.7, 1.8), french=True)
    items.append(
        W(
            "wine_fridge",
            "Weinkühlschrank",
            "Wine fridge",
            (0.6, 0.6, 0.85),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, "#2a303c", edges="faint"),
                m.b(0, m.d / 2, m.w - 0.06, 0.012, 0.05, m.h - 0.1, "glass"),
                *[m.b(0, 0, m.w - 0.12, m.d - 0.12, 0.1 + 0.18 * i, 0.015, "wood") for i in range(4)],
                m.b(0.2, m.d / 2 + 0.01, 0.04, 0.01, m.h - 0.08, 0.02, "#7fd0ff", glow=True),
            ],
            electric=True,
        )
    )
    items.append(
        W(
            "glass_cabinet",
            "Glasvitrine",
            "Glass cabinet",
            (0.6, 0.4, 1.9),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, 0.5, FRONT, edges="faint"),
                m.b(0, 0.01, m.w - 0.04, m.d - 0.04, 0.5, 1.35, "glass", edges="faint"),
                *[m.b(0, 0, m.w - 0.06, m.d - 0.06, 0.5 + 0.4 * i, 0.015, "white") for i in range(1, 4)],
                m.b(0, 0, m.w, m.d, 1.85, 0.05, FRONT),
            ],
        )
    )

    # ---------------------------------------------------------------- rows and islands
    def row(id_, de, en, length):
        def fn(m):
            p = []
            units = [
                (0.6, "base"),
                (0.6, "drawer"),
                (0.8, "sink"),
                (0.6, "base"),
                (0.6, "hob"),
                (0.6, "dish"),
                (0.6, "base"),
                (0.6, "base"),
            ]
            x = -m.w / 2
            used = 0.0
            for wu, kind in units:
                if used + wu > m.w + 0.01:
                    break
                cx = x + used + wu / 2
                p.append(m.b(cx, 0, wu - 0.005, m.d - 0.04, 0.1, 0.76, FRONT, edges="faint"))
                p.append(
                    m.b(cx, m.d / 2 - 0.02, wu - 0.04, 0.012, 0.15, 0.1, "#dde2ea")
                    if kind == "drawer"
                    else m.b(cx + wu * 0.3, m.d / 2 - 0.018, 0.015, 0.012, 0.65, 0.14, "metal")
                )
                used += wu
            p.append(m.b(0, 0, m.w, m.d, 0.86, 0.04, WORKTOP))
            p.append(m.b(0, -0.01, m.w - 0.04, m.d - 0.08, 0, 0.1, "dark"))
            p.append(m.b(-m.w / 2 + 1.5, 0.0, 0.56, 0.4, 0.9, 0.01, "dark"))
            for h in range(0, int(m.w / 0.6)):
                p.append(m.b(-m.w / 2 + 0.3 + 0.6 * h, -0.28, 0.58, 0.32, 1.45, 0.7, "#dde2ea", edges="faint"))
            return p

        items.append(W(id_, de, en, (length, 0.6, 2.15), fn, surface=False))

    row("row_270", "Küchenzeile 270", "Kitchen row 270", 2.7)
    row("row_330", "Küchenzeile 330", "Kitchen row 330", 3.3)

    def island(id_, de, en, hob=False):
        def fn(m):
            p = [
                m.b(-0.2, 0, m.w - 0.5, m.d, 0.1, 0.76, FRONT, edges="faint"),
                m.b(-0.2, 0, m.w - 0.5, m.d, 0.86, 0.04, WORKTOP),
                m.b(-0.2, 0, m.w - 0.54, m.d - 0.06, 0, 0.1, "dark"),
            ]
            p.append(m.b(m.w / 2 - 0.25, 0.0, 0.5, m.d, 0.0, 1.0, "wood", edges="faint"))
            p.append(m.b(m.w / 2 - 0.25, 0.05, 0.54, m.d + 0.04, 1.0, 0.04, WORKTOP))
            if hob:
                p.append(m.b(-0.2, 0, 0.7, 0.5, 0.9, 0.01, "dark"))
                p += [
                    m.c(-0.2 + sx * 0.18, sz * 0.12, 0.16, 0.16, 0.905, 0.005, "#7b8594")
                    for sx in (-1, 1)
                    for sz in (-1, 1)
                ]
            else:
                p.append(m.b(-0.55, 0, 0.5, 0.4, 0.88, 0.02, "#b8c0cc"))
            return p

        items.append(W(id_, de, en, (2.6, 1.0, 1.1), fn, surface=True, electric=hob))

    island("island_bar", "Kücheninsel mit Theke", "Kitchen island with bar")
    island("island_hob", "Kücheninsel mit Kochfeld", "Kitchen island with hob", hob=True)
    items.append(
        W(
            "breakfast_bar",
            "Frühstückstheke (Wand)",
            "Breakfast bar (wall)",
            (1.6, 0.45, 1.05),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.98, 0.04, "wood", edges="faint"),
                *[m.b(sx * (m.w / 2 - 0.05), -0.1, 0.05, 0.05, 0, 0.98, "metal") for sx in (-1, 1)],
                m.b(0, -0.2, m.w, 0.04, 0.4, 0.04, "metal"),
            ],
            surface=True,
        )
    )

    # ---------------------------------------------------------------- dining and furniture
    items.append(
        W(
            "bar_stools_2",
            "Barhocker (2er-Set)",
            "Bar stools (set of 2)",
            (1.0, 0.45, 0.8),
            lambda m: [
                *[m.c(x, 0, 0.36, 0.36, 0.7, 0.06, "fabric") for x in (-0.28, 0.28)],
                *[m.c(x, 0, 0.05, 0.05, 0.04, 0.66, "metal") for x in (-0.28, 0.28)],
                *[m.c(x, 0, 0.34, 0.34, 0, 0.04, "metal") for x in (-0.28, 0.28)],
                *[m.c(x, 0, 0.3, 0.3, 0.3, 0.015, "metal") for x in (-0.28, 0.28)],
            ],
        )
    )
    items.append(
        W(
            "dining_bench_long",
            "Langer Esstisch mit Bank",
            "Long dining table with bench",
            (2.2, 1.5, 0.78),
            lambda m: [
                m.b(0, -0.2, 2.0, 0.9, 0.72, 0.05, "wood", edges="faint"),
                *[m.b(sx * 0.9, sz * 0.12 - 0.2, 0.06, 0.06, 0, 0.72, "wood") for sx in (-1, 1) for sz in (-1, 1)],
                m.b(0, 0.5, 1.9, 0.35, 0.44, 0.05, "wood"),
                *[m.b(sx * 0.85, 0.5, 0.05, 0.3, 0, 0.44, "wood") for sx in (-1, 1)],
                *[m.b(x, -0.78, 0.45, 0.45, 0.45, 0.05, "fabric") for x in (-0.6, 0.6)],
                *[m.b(x, -0.78, 0.45, 0.04, 0.5, 0.35, "fabric") for x in (-0.6, 0.6)],
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "dining_round_4",
            "Runder Esstisch mit 4 Stühlen",
            "Round dining table with 4 chairs",
            (1.6, 1.6, 0.9),
            lambda m: [
                m.c(0, 0, 1.0, 1.0, 0.72, 0.04, "wood", edges="faint"),
                m.c(0, 0, 0.1, 0.1, 0, 0.72, "wood"),
                m.c(0, 0, 0.5, 0.5, 0, 0.03, "wood"),
                *[
                    m.b(sx * 0.62, sz * 0.62, 0.42, 0.42, 0.44, 0.05, "fabric", rot=45)
                    for sx in (-1, 1)
                    for sz in (-1, 1)
                ],
                *[
                    m.b(sx * 0.62 + sx * 0.12, sz * 0.62 + sz * 0.12, 0.42, 0.04, 0.5, 0.4, "fabric", rot=45 * sx * sz)
                    for sx in (-1, 1)
                    for sz in (-1, 1)
                ],
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "high_table_2",
            "Stehtisch mit 2 Hockern",
            "High table with 2 stools",
            (1.2, 0.8, 1.05),
            lambda m: [
                m.b(0, 0, 0.9, 0.5, 0.98, 0.05, "wood", edges="faint"),
                m.c(0, 0, 0.08, 0.08, 0, 0.98, "metal"),
                m.c(0, 0, 0.45, 0.45, 0, 0.03, "metal"),
                *[m.c(x, 0.3, 0.32, 0.32, 0.62, 0.05, "fabric") for x in (-0.35, 0.35)],
                *[m.c(x, 0.3, 0.04, 0.04, 0, 0.62, "metal") for x in (-0.35, 0.35)],
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "kitchen_trolley",
            "Küchenwagen",
            "Kitchen trolley",
            (0.6, 0.4, 0.9),
            lambda m: [
                *[m.b(sx * 0.27, sz * 0.17, 0.03, 0.03, 0.06, 0.8, "metal") for sx in (-1, 1) for sz in (-1, 1)],
                *[m.b(0, 0, m.w, m.d, 0.07 + 0.38 * i, 0.03, "wood") for i in range(3)],
                *[m.c(sx * 0.27, sz * 0.17, 0.05, 0.05, 0, 0.06, "dark") for sx in (-1, 1) for sz in (-1, 1)],
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "pantry_shelf",
            "Vorratsregal",
            "Pantry shelf",
            (0.9, 0.35, 2.0),
            lambda m: [
                *[m.b(sx * 0.44, 0, 0.03, m.d, 0, m.h, "white") for sx in (-1, 1)],
                *[m.b(0, 0, m.w - 0.04, m.d, 0.3 * i, 0.025, "white") for i in range(7)],
                *[
                    m.b(-0.25 + 0.25 * (i % 3), 0, 0.14, 0.14, 0.3 * (i // 3 + 1) + 0.025, 0.2, "#c9a46a")
                    for i in range(9)
                ],
            ],
        )
    )
    items.append(
        W(
            "spice_rack",
            "Wand-Gewürzregal",
            "Wall spice rack",
            (0.6, 0.1, 0.5),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.0, 0.02, "wood"),
                m.b(0, 0, m.w, m.d, 0.24, 0.02, "wood"),
                m.b(0, 0, m.w, m.d, 0.46, 0.02, "wood"),
                *[
                    m.c(-0.25 + 0.1 * i, 0, 0.06, 0.06, 0.02 + 0.24 * j, 0.16, "#c0562e")
                    for i in range(6)
                    for j in range(2)
                ],
            ],
            mount="wall",
            wall_y=1.3,
        )
    )

    # ---------------------------------------------------------------- small appliances and lights
    items.append(
        W(
            "coffee_machine",
            "Kaffeevollautomat",
            "Bean-to-cup coffee machine",
            (0.3, 0.42, 0.4),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"),
                m.b(0, m.d / 2 + 0.01, 0.2, 0.012, 0.18, 0.12, "#7b8594"),
                m.b(0, m.d / 2 + 0.01, 0.1, 0.012, 0.3, 0.05, "#7fd0ff", glow=True),
                m.b(0, 0.0, 0.24, 0.2, 0.0, 0.01, "metal"),
                m.c(0, 0.0, 0.14, 0.14, m.h - 0.001, 0.001, "metal"),
            ],
            electric=True,
            mount="surface",
        )
    )
    items.append(
        W(
            "microwave",
            "Mikrowelle",
            "Microwave",
            (0.46, 0.35, 0.28),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, "#cfd6e2", edges="faint"),
                m.b(-0.05, m.d / 2 + 0.005, 0.28, 0.01, 0.04, 0.2, "dark"),
                m.b(0.17, m.d / 2 + 0.005, 0.08, 0.01, 0.06, 0.16, "#7b8594"),
                m.b(0.17, m.d / 2 + 0.01, 0.05, 0.01, 0.2, 0.03, "#7fd0ff", glow=True),
            ],
            electric=True,
            mount="surface",
        )
    )
    items.append(
        W(
            "stand_mixer",
            "Küchenmaschine",
            "Stand mixer",
            (0.25, 0.35, 0.36),
            lambda m: [
                m.b(0, 0.0, 0.2, 0.3, 0.0, 0.05, "#c0392b"),
                m.l(0, -0.08, 0.14, 0.14, 0.05, 0.26, "#c0392b", tz=-0.1, td=0.1),
                m.l(0, 0.02, 0.18, 0.24, 0.28, 0.08, "#c0392b", tz=0.02, td=0.2),
                m.c(0, 0.05, 0.16, 0.16, 0.05, 0.14, "metal"),
            ],
            electric=True,
            mount="surface",
        )
    )
    items.append(
        W(
            "kettle",
            "Wasserkocher",
            "Kettle",
            (0.2, 0.2, 0.25),
            lambda m: [
                m.c(0, 0, 0.17, 0.17, 0, 0.2, "white"),
                m.l(0, 0, 0.17, 0.17, 0.2, 0.05, "white", tw=0.08, td=0.08),
                m.b(0.09, 0, 0.03, 0.03, 0.03, 0.2, "dark"),
                m.b(0, 0, 0.04, 0.17, 0.0, 0.01, "#7fd0ff", glow=True),
            ],
            electric=True,
            mount="surface",
        )
    )
    items.append(
        W(
            "toaster",
            "Toaster",
            "Toaster",
            (0.3, 0.17, 0.2),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, "#cfd6e2", edges="faint"),
                m.b(0, 0, 0.22, 0.03, m.h - 0.001, 0.001, "dark"),
                m.b(0.14, m.d / 2 + 0.003, 0.03, 0.01, 0.12, 0.03, "dark"),
            ],
            electric=True,
            mount="surface",
        )
    )
    items.append(
        W(
            "herb_garden",
            "Smarter Kräutergarten",
            "Smart herb garden",
            (0.4, 0.2, 0.4),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, 0.12, "white", edges="faint"),
                *[m.c(-0.12 + 0.12 * i, 0, 0.09, 0.09, 0.12, 0.1, "plant") for i in range(3)],
                m.b(0, -0.07, 0.38, 0.03, 0.34, 0.03, "#d98cff", glow=True),
                m.b(0, -0.09, 0.03, 0.03, 0.12, 0.24, "white"),
            ],
            electric=True,
            light="strip",
            mount="surface",
        )
    )
    items.append(
        W(
            "pendant_trio",
            "Trio Pendelleuchten",
            "Trio of pendant lights",
            (1.4, 0.3, 1.2),
            lambda m: [
                *[m.b(x, 0, 0.012, 0.012, 0.35, 0.85, "dark") for x in (-0.5, 0, 0.5)],
                *[m.l(x, 0, 0.3, 0.3, 0.1, 0.25, "#d8dde6", tw=0.08, td=0.08) for x in (-0.5, 0, 0.5)],
                *[m.c(x, 0, 0.12, 0.12, 0.08, 0.05, "#ffe7b0", glow=True) for x in (-0.5, 0, 0.5)],
            ],
            electric=True,
            light="pendant",
            mount="ceiling",
        )
    )
    items.append(
        W(
            "pendant_linear",
            "Lineare Pendelleuchte",
            "Linear pendant light",
            (1.4, 0.12, 1.0),
            lambda m: [
                m.b(-0.55, 0, 0.01, 0.01, 0.15, 0.85, "dark"),
                m.b(0.55, 0, 0.01, 0.01, 0.15, 0.85, "dark"),
                m.b(0, 0, 1.3, 0.1, 0.1, 0.06, "dark", edges="faint"),
                m.b(0, 0, 1.24, 0.08, 0.095, 0.01, "#ffe7b0", glow=True),
            ],
            electric=True,
            light="pendant",
            mount="ceiling",
        )
    )
    for w in (60, 80):
        items.append(
            W(
                f"cabinet_light_{w}",
                f"LED-Unterbauleuchte {w}",
                f"LED under-cabinet light {w}",
                (w / 100, 0.04, 0.02),
                lambda m: [
                    m.b(0, 0, m.w, m.d, 0.0, m.h, "white"),
                    m.b(0, 0, m.w - 0.04, m.d - 0.01, 0.0, 0.002, "#ffe7b0", glow=True),
                ],
                electric=True,
                light="strip",
                mount="wall",
                wall_y=1.38,
            )
        )
    items.append(
        W(
            "range_cooker_90",
            "Standherd 90",
            "Range cooker 90",
            (0.9, 0.65, 0.92),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, 0.9, "#2a303c", edges="faint"),
                m.b(0, 0, m.w, m.d, 0.9, 0.02, "dark"),
                *[
                    m.c(-0.3 + 0.2 * i, sz * 0.13, 0.15, 0.15, 0.92, 0.004, "#7b8594")
                    for i in range(4)
                    for sz in (-1, 1)
                ],
                m.b(-0.22, m.d / 2 + 0.01, 0.4, 0.012, 0.08, 0.6, "glass"),
                m.b(0.22, m.d / 2 + 0.01, 0.4, 0.012, 0.08, 0.6, "glass"),
                m.b(0, m.d / 2 + 0.03, 0.84, 0.025, 0.72, 0.025, "metal"),
                *[m.c(-0.35 + 0.14 * i, m.d / 2 + 0.012, 0.04, 0.03, 0.84, 0.04, "metal", axis="z") for i in range(6)],
            ],
            electric=True,
        )
    )
    return [
        (
            "nextfloor.a_kueche",
            "Küche",
            "Unter-, Schubladen- und Hängeschränke, Hochschränke, Geräte, Inseln, Esstische und Küchenkleingeräte",
            items,
        )
    ]

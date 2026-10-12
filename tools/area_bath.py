"""Pack Bad (bathroom): vanities, tubs, showers, toilets, cabinets, mirrors, radiators, sauna and laundry."""

from area_common import make

CERAMIC = "#f2f5f9"
CABINET = "#dfe4ec"


def build(bp):
    W = lambda *a, **k: make(bp, *a, **k)  # noqa: E731
    items = []

    def basin(m, x, z, w, d, y):
        """A washbasin bowl set into a top: a slightly sunken lighter box with a tap."""
        return [
            m.b(x, z, w, d, y, 0.012, CERAMIC),
            m.c(x, z - d * 0.35, 0.03, 0.03, y, 0.12, "metal"),
            m.b(x, z - d * 0.2, 0.02, 0.1, y + 0.11, 0.02, "metal"),
        ]

    def vanity(id_, de, en, w, double=False, d=0.5):
        def fn(m):
            p = [
                m.b(0, 0, m.w, m.d, 0.12, 0.68, CABINET, edges="faint"),
                m.b(0, 0, m.w - 0.04, m.d - 0.05, 0, 0.12, "dark"),
                m.b(0, 0, m.w + 0.02, m.d + 0.02, 0.8, 0.03, CERAMIC),
            ]
            n = 2 if double else 1
            for i in range(n):
                x = -m.w / 2 + m.w / n * (i + 0.5)
                p += basin(m, x, 0.0, min(0.5, m.w / n - 0.12), 0.34, 0.83)
                p.append(m.b(x, m.d / 2 + 0.01, m.w / n - 0.04, 0.012, 0.15, 0.6, "#e8ecf2"))
                p.append(m.b(x, m.d / 2 + 0.02, 0.18, 0.015, 0.62, 0.015, "metal"))
            return p

        items.append(W(id_, de, en, (w, d, 1.0), fn, surface=False))

    for w in (60, 80, 100):
        vanity(f"vanity_{w}", f"Waschtisch {w} mit Unterschrank", f"Vanity {w} with base cabinet", w / 100)
    vanity("vanity_double_120", "Doppelwaschtisch 120", "Double vanity 120", 1.2, double=True)
    vanity("vanity_double_160", "Doppelwaschtisch", "Double vanity", 1.6, double=True)
    items.append(
        W(
            "pedestal_basin",
            "Standwaschbecken",
            "Pedestal basin",
            (0.55, 0.45, 0.9),
            lambda m: [
                m.l(0, 0.0, 0.55, 0.45, 0.78, 0.12, CERAMIC, tw=0.45, td=0.35),
                m.c(0, -0.08, 0.16, 0.16, 0.0, 0.78, CERAMIC),
                m.c(0, -0.08, 0.28, 0.28, 0.0, 0.03, CERAMIC),
                m.c(0, -0.17, 0.03, 0.03, 0.88, 0.12, "metal"),
            ],
        )
    )

    # ---------------------------------------------------------------- tubs
    def tub_shell(m, inner_w, inner_d, rim=0.06):
        return [
            m.b(0, 0, m.w, m.d, 0, m.h, CERAMIC, edges="faint"),
            m.b(0, 0, inner_w, inner_d, m.h - 0.01, 0.012, "#bfe3f5"),
        ]

    items.append(
        W(
            "bathtub_builtin",
            "Einbaubadewanne",
            "Built-in bathtub",
            (1.7, 0.75, 0.55),
            lambda m: [
                *tub_shell(m, 1.5, 0.55),
                m.c(-0.7, 0, 0.04, 0.04, m.h - 0.01, 0.05, "metal"),
                m.b(0.75, 0, 0.1, 0.1, m.h, 0.1, "metal"),
            ],
        )
    )
    items.append(
        W(
            "bathtub_corner",
            "Eckbadewanne",
            "Corner bathtub",
            (1.5, 1.5, 0.55),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, CERAMIC, edges="faint"),
                m.c(0.1, 0.1, 1.1, 1.1, m.h - 0.01, 0.012, "#bfe3f5"),
                m.c(-0.6, -0.6, 0.05, 0.05, m.h, 0.08, "metal"),
            ],
        )
    )
    items.append(
        W(
            "bathtub_corner_compact",
            "Raumspar-Eckbadewanne",
            "Space-saving corner bathtub",
            (1.4, 1.0, 0.55),
            lambda m: [
                m.l(0, 0, m.w, m.d, 0, m.h, CERAMIC, tx=0.1, tw=1.1, td=0.9),
                m.b(0, 0, 1.1, 0.7, m.h - 0.01, 0.012, "#bfe3f5"),
                m.c(-0.55, -0.4, 0.04, 0.04, m.h, 0.08, "metal"),
            ],
        )
    )
    items.append(
        W(
            "bathtub_free",
            "Freistehende Badewanne",
            "Freestanding bathtub",
            (1.7, 0.8, 0.62),
            lambda m: [
                m.l(0, 0, m.w, m.d, 0.08, m.h - 0.1, CERAMIC, tw=1.7, td=0.8),
                m.b(0, 0, 1.5, 0.6, m.h - 0.02, 0.02, "#bfe3f5"),
                *[m.b(sx * 0.7, sz * 0.28, 0.08, 0.08, 0, 0.08, "metal") for sx in (-1, 1) for sz in (-1, 1)],
                m.c(0.85, 0, 0.04, 0.04, 0.1, 0.6, "metal"),
                m.c(0.85, 0, 0.1, 0.04, 0.68, 0.02, "metal"),
            ],
        )
    )
    items.append(
        W(
            "whirlpool_indoor",
            "Whirlpool innen",
            "Indoor whirlpool",
            (2.0, 2.0, 0.8),
            lambda m: [
                m.c(0, 0, 2.0, 2.0, 0, 0.8, "#cfd6e2", edges="faint"),
                m.c(0, 0, 1.7, 1.7, 0.78, 0.015, "#7fd0ff", glow=True),
                m.c(0, 0, 1.8, 1.8, 0.8, 0.02, CERAMIC),
            ],
            electric=True,
            light="table",
        )
    )

    # ---------------------------------------------------------------- showers
    def shower(id_, de, en, w, d, corner=False, walkin=False):
        def fn(m):
            p = [
                m.b(0, 0, m.w, m.d, 0, 0.05, CERAMIC, edges="faint"),
                m.c(m.w * 0.25, m.d * 0.25, 0.1, 0.1, 0.05, 0.005, "metal"),
            ]
            if walkin:
                p += [
                    m.b(
                        -m.w / 2 + 0.6,
                        m.d / 2 - 0.01,
                        1.2 if m.w > 1.2 else m.w - 0.3,
                        0.012,
                        0.05,
                        1.95,
                        "glass",
                        edges="faint",
                    ),
                    m.b(0, -m.d / 2 + 0.02, m.w, 0.04, 0.05, 2.0, "#cfd6e2"),
                ]
            elif corner:
                p += [
                    m.b(0, m.d / 2 - 0.01, m.w, 0.012, 0.05, 1.95, "glass", edges="faint"),
                    m.b(m.w / 2 - 0.01, 0, 0.012, m.d, 0.05, 1.95, "glass", edges="faint"),
                    m.b(-m.w / 2 + 0.02, -m.d / 2 + 0.02, 0.03, 0.03, 0.05, 2.0, "metal"),
                ]
            else:  # niche: glass front and one side
                p += [
                    m.b(0, m.d / 2 - 0.01, m.w, 0.012, 0.05, 1.95, "glass", edges="faint"),
                    m.b(-m.w / 2 + 0.01, 0, 0.012, m.d, 0.05, 1.95, "glass", edges="faint"),
                ]
            p += [m.c(-m.w / 2 + 0.2, -m.d / 2 + 0.05, 0.04, 0.04, 1.0, 0.1, "metal")]
            return p

        items.append(W(id_, de, en, (w, d, 2.0), fn))

    shower("shower_corner_90", "Eckdusche 90 × 90", "Corner shower 90 × 90", 0.9, 0.9, corner=True)
    shower("shower_niche_120", "Nischendusche 120 × 90", "Niche shower 120 × 90", 1.2, 0.9)
    shower("shower_walkin_140", "Begehbare Dusche 140 × 90", "Walk-in shower 140 × 90", 1.4, 0.9, walkin=True)
    shower("shower_walkin_120", "Walk-in-Dusche", "Walk-in shower", 1.2, 1.2, walkin=True)
    items.append(
        W(
            "shower_rain_led",
            "Regendusche mit LED",
            "Rain shower with LED",
            (1.0, 1.0, 2.2),
            lambda m: [
                m.b(0, -0.46, 0.04, 0.04, 0.0, 2.1, "metal"),
                m.c(0, -0.1, 0.4, 0.4, 2.1, 0.03, "metal"),
                m.b(0, -0.28, 0.04, 0.4, 2.13, 0.03, "metal"),
                m.c(0, -0.1, 0.34, 0.34, 2.09, 0.01, "#7fd0ff", glow=True),
                m.b(0, 0, m.w, m.d, 0, 0.04, CERAMIC),
            ],
            electric=True,
            light="spot",
        )
    )

    # ---------------------------------------------------------------- toilets
    def toilet(id_, de, en, hung=False, bidet=False, compact=False):
        d = 0.5 if compact else 0.65 if not hung else 0.55
        h = 0.78 if not hung else 0.4

        def fn(m):
            p = []
            if hung:
                p += [
                    m.b(0, -0.12, 0.38, 0.12, 0.1, 0.35, CERAMIC),
                    m.l(0, 0.05, 0.36, 0.45, 0.2, 0.1, CERAMIC, tw=0.32, td=0.35),
                    m.c(0, 0.08, 0.34, 0.4, 0.28, 0.04, "white"),
                ]
                if not bidet:
                    p.append(m.b(0, -0.17, 0.2, 0.02, 0.4, 0.03, "metal"))
            elif bidet:
                p += [
                    m.c(0, 0.05, 0.36, 0.5, 0, 0.38, CERAMIC),
                    m.b(0, -0.2, 0.3, 0.2, 0.0, 0.38, CERAMIC),
                    m.c(0, -0.2, 0.03, 0.03, 0.38, 0.08, "metal"),
                ]
            else:
                p += [
                    m.b(0, -0.2, 0.38, 0.22, 0.0, 0.78, CERAMIC, edges="faint"),
                    m.c(0, 0.08, 0.36, 0.48, 0, 0.4, CERAMIC),
                    m.c(0, 0.08, 0.34, 0.44, 0.4, 0.03, "white"),
                    m.b(0, -0.31, 0.14, 0.02, 0.76, 0.02, "metal"),
                ]
            return p

        size = (0.4, d, h if not hung else 1.0)
        items.append(W(id_, de, en, size, fn))

    toilet("toilet_close", "Stand-WC mit Spülkasten", "Close-coupled toilet")
    toilet("toilet_hung", "Wand-WC", "Wall-hung toilet", hung=True)
    toilet("toilet_hung_compact", "Wand-WC kompakt", "Wall-hung toilet (compact)", hung=True, compact=True)
    toilet("bidet", "Bidet", "Bidet", bidet=True)

    # ---------------------------------------------------------------- storage, mirrors, accessories
    def cabinet(id_, de, en, w, h, d=0.3, wall=False):
        def fn(m):
            p = [m.b(0, 0, m.w, m.d, 0, m.h, CABINET, edges="faint")]
            rows = 3 if m.h > 1.2 else 2
            for i in range(rows):
                p.append(
                    m.b(
                        0,
                        m.d / 2,
                        m.w - 0.04,
                        0.012,
                        0.03 + (m.h - 0.06) / rows * i,
                        (m.h - 0.06) / rows - 0.02,
                        "#e8ecf2",
                    )
                )
            p.append(m.b(m.w * 0.35, m.d / 2 + 0.012, 0.015, 0.012, m.h * 0.45, 0.12, "metal"))
            return p

        kw = {"mount": "wall", "wall_y": 0.8} if wall else {}
        items.append(W(id_, de, en, (w, d, h), fn, **kw))

    cabinet("cabinet_tall", "Hochschrank Bad", "Tall bathroom cabinet", 0.4, 1.8)
    cabinet("cabinet_mid", "Halbhochschrank Bad", "Mid-height bathroom cabinet", 0.4, 1.0, wall=True)
    items.append(
        W(
            "mirror_round_light",
            "Runder Spiegel mit Licht",
            "Round mirror with light",
            (0.7, 0.05, 0.7),
            lambda m: [
                m.c(0, 0, 0.7, 0.05, 0, 0.7, "glass", edges="glow", axis="z"),
                m.c(0, 0.02, 0.7, 0.02, 0, 0.7, "#ffe7b0", glow=True, axis="z"),
            ],
            mount="wall",
            wall_y=1.1,
            electric=True,
            light="wall",
        )
    )

    def mirror(id_, de, en, w, h, clock=False):
        def fn(m):
            p = [
                m.b(0, 0, m.w, m.d, 0, m.h, "glass", edges="glow"),
                m.b(0, m.d / 2, m.w - 0.04, 0.01, m.h - 0.04, 0.012, "#ffe7b0", glow=True),
                m.b(0, m.d / 2, m.w - 0.04, 0.01, 0.02, 0.012, "#ffe7b0", glow=True),
            ]
            if clock:
                p.append(m.b(m.w / 2 - 0.12, m.d / 2, 0.14, 0.01, 0.06, 0.05, "#7fd0ff", glow=True))
            return p

        items.append(W(id_, de, en, (w, 0.04, h), fn, mount="wall", wall_y=1.1, electric=True, light="wall"))

    mirror("mirror_80", "Spiegel 80 × 60 mit Licht", "Mirror 80 × 60 with light", 0.8, 0.6)
    mirror("mirror_led_100", "LED-Spiegel 100 × 70 mit Uhr", "LED mirror 100 × 70 with clock", 1.0, 0.7, clock=True)
    items.append(
        W(
            "mirror_cabinet",
            "Spiegelschrank mit Licht",
            "Mirror cabinet with light",
            (0.8, 0.15, 0.7),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, CABINET, edges="faint"),
                m.b(-0.2, m.d / 2, 0.38, 0.01, 0.03, 0.64, "glass"),
                m.b(0.2, m.d / 2, 0.38, 0.01, 0.03, 0.64, "glass"),
                m.b(0, m.d / 2, m.w - 0.04, 0.012, m.h - 0.03, 0.02, "#ffe7b0", glow=True),
            ],
            mount="wall",
            wall_y=1.2,
            electric=True,
            light="wall",
        )
    )
    items.append(
        W(
            "wall_shelf_bath",
            "Badablage",
            "Bathroom wall shelf",
            (0.6, 0.15, 0.06),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.0, 0.015, "glass", edges="faint"),
                *[m.b(sx * 0.27, -0.05, 0.02, 0.05, -0.0, 0.0 + 0.04, "metal") for sx in (-1, 1)],
            ],
            mount="wall",
            wall_y=1.2,
            surface=True,
        )
    )
    items.append(
        W(
            "towel_rail",
            "Handtuchhalter mit Handtuch",
            "Towel rail with towel",
            (0.6, 0.12, 0.8),
            lambda m: [
                *[m.b(sx * 0.29, 0, 0.02, 0.1, 0.0, 0.05, "metal") for sx in (-1, 1)],
                m.c(0, 0.05, 0.02, 0.02, 0.05, 0.02, "metal", axis="x"),
                m.b(0, 0.06, 0.5, 0.02, 0.0, 0.75, "#7aa6c9"),
                m.b(0, 0.08, 0.5, 0.01, 0.0, 0.2, "#e8ecf2"),
            ],
            mount="wall",
            wall_y=0.9,
        )
    )

    def radiator(id_, de, en, electric):
        def fn(m):
            p = [
                *[m.b(-0.25 + 0.1 * i, 0, 0.012, 0.04, 0.0, m.h, "white") for i in range(6)],
                *[m.b(0, 0, 0.5, 0.04, 0.1 + 0.2 * i, 0.012, "white") for i in range(8)],
            ]
            if electric:
                p.append(m.b(0.2, 0.025, 0.04, 0.012, 0.05, 0.02, "#ff7a1a", glow=True))
            return p

        items.append(W(id_, de, en, (0.5, 0.1, 1.5 if electric else 1.7), fn, mount="wall", wall_y=0.2, electric=True))

    radiator("towel_radiator", "Handtuchheizkörper", "Towel radiator", False)
    radiator("towel_heater_electric", "Elektrischer Handtuchwärmer", "Electric towel heater", True)
    items.append(
        W(
            "sauna",
            "Sauna",
            "Sauna",
            (2.0, 1.8, 2.1),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, "#b98d5a", edges="faint"),
                m.b(0, m.d / 2, 0.7, 0.012, 0.0, 1.9, "glass"),
                m.b(-0.4, -0.2, 0.9, 0.5, 0.45, 0.04, "wood"),
                m.b(-0.4, -0.45, 0.9, 0.5, 0.9, 0.04, "wood"),
                m.b(0.7, -0.6, 0.35, 0.35, 0.0, 0.5, "dark"),
                m.b(0.0, m.d / 2, 0.04, 0.012, 1.0, 0.2, "metal"),
            ],
            electric=True,
        )
    )
    items.append(
        W(
            "bath_fan",
            "Badlüfter",
            "Bathroom fan",
            (0.2, 0.2, 0.06),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
                m.c(0, 0, 0.14, 0.14, m.h - 0.001, 0.001, "dark"),
            ],
            mount="ceiling",
            electric=True,
        )
    )
    items.append(
        W(
            "washer_cabinet",
            "Waschmaschinenschrank",
            "Washing machine cabinet",
            (0.7, 0.65, 2.0),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, CABINET, edges="faint"),
                m.b(0, m.d / 2, m.w - 0.04, 0.012, 1.1, 0.85, "#e8ecf2"),
                m.c(0, m.d / 2 + 0.005, 0.46, 0.04, 0.12, 0.46, "glass", axis="z"),
                m.b(0, m.d / 2, m.w - 0.04, 0.012, 0.65, 0.4, "white"),
            ],
            electric=True,
        )
    )
    items.append(
        W(
            "washer_under_vanity",
            "Waschmaschine unter Waschtisch",
            "Washer under the vanity",
            (1.0, 0.6, 0.95),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, 0.82, "white", edges="faint"),
                m.c(-0.15, m.d / 2 + 0.005, 0.38, 0.04, 0.2, 0.38, "glass", axis="z"),
                m.b(0, 0, m.w + 0.02, m.d + 0.02, 0.82, 0.03, CERAMIC),
                *basin(m, 0.2, 0.0, 0.4, 0.3, 0.85),
            ],
            electric=True,
        )
    )
    items.append(
        W(
            "laundry_basket",
            "Wäschekorb",
            "Laundry basket",
            (0.4, 0.4, 0.6),
            lambda m: [m.c(0, 0, 0.4, 0.4, 0, 0.55, "#c9a46a"), m.c(0, 0, 0.42, 0.42, 0.55, 0.03, "#a07c4a")],
        )
    )
    items.append(
        W(
            "laundry_cabinet",
            "Wäscheschrank mit Korb",
            "Laundry cabinet with basket",
            (0.5, 0.4, 0.9),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, 0.9, CABINET, edges="faint"),
                m.b(0, m.d / 2, m.w - 0.04, 0.012, 0.05, 0.38, "#e8ecf2"),
                m.b(0, m.d / 2, m.w - 0.04, 0.012, 0.47, 0.38, "#c9a46a"),
                m.b(0, 0, m.w + 0.02, m.d + 0.02, 0.9, 0.02, "wood"),
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "ladder_shelf",
            "Leiterregal mit Handtüchern",
            "Ladder shelf with towels",
            (0.6, 0.35, 1.7),
            lambda m: [
                m.l(-0.27, 0, 0.03, 0.35, 0.0, 1.7, "wood", tz=-0.14, td=0.03),
                m.l(0.27, 0, 0.03, 0.35, 0.0, 1.7, "wood", tz=-0.14, td=0.03),
                *[m.b(0, 0.12 - 0.017 * i, 0.55, 0.1, 0.3 * i + 0.2, 0.02, "wood") for i in range(5)],
                *[
                    m.b(0, 0.1 - 0.017 * i, 0.4, 0.12, 0.3 * i + 0.22, 0.1, "#7aa6c9" if i % 2 else "#e8ecf2")
                    for i in range(1, 4)
                ],
            ],
        )
    )
    items.append(
        W(
            "plant_stool",
            "Pflanze auf Hocker",
            "Plant on stool",
            (0.35, 0.35, 0.9),
            lambda m: [
                m.c(0, 0, 0.3, 0.3, 0.3, 0.03, "wood"),
                *[m.b(sx * 0.12, sz * 0.12, 0.03, 0.03, 0, 0.3, "wood") for sx in (-1, 1) for sz in (-1, 1)],
                m.c(0, 0, 0.18, 0.18, 0.33, 0.15, "pot"),
                m.c(0, 0, 0.32, 0.32, 0.5, 0.4, "plant"),
            ],
        )
    )
    return [
        (
            "nextfloor.a_bad",
            "Bad",
            "Waschtische, Wannen, Duschen, WCs, Schränke, Spiegel mit Licht, Heizkörper, Sauna und Wäsche",
            items,
        )
    ]

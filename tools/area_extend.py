"""More items for packs that already exist (stairs, fit-out, workshop, vehicles), so they reach the full range of their area."""

from area_common import make


def vehicles(bp):
    items = []
    W = lambda *a, **k: items.append(make(bp, *a, vehicle=True, **k))  # noqa: E731

    def wheels(m, axles, r=0.33, wide=0.22):
        return [
            m.c(sx * (m.w / 2 - wide / 2 + 0.02), z, wide, r * 2, 0, r * 2, "dark", axis="x")
            for sx in (-1, 1)
            for z in axles
        ]

    def lights(m, y=0.62, high=0.12):
        return [
            m.b(0, m.d / 2 - 0.005, m.w * 0.72, 0.012, y, high * 0.6, "#ffffff", glow=True),
            m.b(0, -m.d / 2 + 0.005, m.w * 0.72, 0.012, y, high * 0.6, "#ff2b2b", glow=True),
        ]

    def car(id_, de, en, size, color, cabin, electric=False, sill=0.28, belt=0.9, convertible=False):
        """cabin = (centre z, length, glass height); the lower body runs the whole length."""

        def fn(m):
            cz, cl, ch = cabin
            p = [
                m.l(0, 0, m.w, m.d, sill, belt - sill, color, tw=m.w * 0.97, td=m.d * 0.98, edges=True),
                m.b(0, m.d / 2 - 0.2, m.w * 0.9, 0.03, belt - 0.02, 0.03, color),
                *wheels(m, (m.d * 0.32, -m.d * 0.32)),
                *lights(m, belt - 0.32),
            ]
            if convertible:
                p += [
                    m.l(0, cz + 0.2, m.w * 0.92, 0.12, belt, ch * 0.7, "glass", tz=cz + 0.25, td=0.05),
                    m.b(0, cz - 0.3, m.w * 0.7, 0.5, belt - 0.02, 0.1, "dark"),
                    *[m.b(sx * 0.35, cz - 0.1, 0.4, 0.45, belt - 0.02, 0.18, "fabric") for sx in (-1, 1)],
                ]
            else:
                p.append(m.l(0, cz, m.w * 0.92, cl, belt, ch, "glass", tw=m.w * 0.78, td=cl * 0.62, tz=cz - 0.05))
            return p

        W(id_, de, en, size, fn, **({"electric": True} if electric else {}))

    car("sedan", "Limousine", "Sedan", (1.85, 4.8, 1.45), "#2e3f5e", (-0.25, 2.0, 0.5))
    car("coupe", "Sportcoupé", "Sports coupé", (1.85, 4.5, 1.3), "#c0392b", (-0.35, 1.5, 0.4), sill=0.2, belt=0.82)
    car(
        "convertible",
        "Cabrio (offen)",
        "Convertible (open)",
        (1.8, 4.2, 1.3),
        "#e8ecf2",
        (-0.2, 1.2, 0.4),
        sill=0.2,
        belt=0.85,
        convertible=True,
    )
    car("small_ev", "Kleines E-Auto", "Small EV", (1.65, 3.6, 1.55), "#5aa0c8", (-0.15, 2.0, 0.65), electric=True)
    car("suv", "SUV", "SUV", (1.95, 4.7, 1.7), "#3a3f4a", (-0.3, 2.4, 0.6), sill=0.34, belt=1.08)
    car("family_van", "Familien-Van", "Family van", (1.9, 4.8, 1.8), "#8a96a8", (-0.2, 3.0, 0.7), sill=0.3, belt=1.05)

    def box_van(id_, de, en, size, color, cab=1.3, roof=False, windows=True, bed=False, camper=False):
        def fn(m):
            body_h = m.h - (0.35 if roof else 0.0)
            p = [*wheels(m, (m.d * 0.3, -m.d * 0.32), 0.38, 0.26), *lights(m, 0.6)]
            if bed:  # pickup: cab at the front, open bed behind it
                p += [
                    m.l(
                        0,
                        m.d / 2 - cab / 2,
                        m.w * 0.98,
                        cab,
                        0.4,
                        m.h - 0.4,
                        color,
                        tw=m.w * 0.95,
                        td=cab * 0.9,
                        edges=True,
                    ),
                    m.b(0, m.d / 2 - cab / 2 - 0.2, m.w * 0.9, cab * 0.5, 1.0, 0.7, "glass"),
                    m.b(0, -cab / 2, m.w * 0.98, m.d - cab, 0.4, 0.5, color, edges=True),
                    m.b(0, -cab / 2, m.w * 0.84, m.d - cab - 0.2, 0.9, 0.02, "dark"),
                ]
            else:
                p += [
                    m.b(0, -cab / 2 + 0.05, m.w * 0.98, m.d - cab, 0.4, body_h - 0.4, color, edges=True),
                    m.l(
                        0,
                        m.d / 2 - cab / 2,
                        m.w * 0.98,
                        cab,
                        0.4,
                        body_h - 0.4 - 0.2,
                        color,
                        tw=m.w * 0.94,
                        td=cab * 0.5,
                        tz=0.0,
                        edges=True,
                    ),
                    m.b(0, m.d / 2 - cab * 0.5, m.w * 0.9, cab * 0.4, 1.0, 0.7, "glass"),
                ]
                if windows:
                    p += [
                        m.b(sx * (m.w / 2 - 0.005), -cab / 2, 0.012, (m.d - cab) * 0.7, 1.1, 0.5, "glass")
                        for sx in (-1, 1)
                    ]
            if roof:
                p.append(
                    m.l(
                        0,
                        -cab / 2,
                        m.w * 0.9,
                        m.d - cab - 0.4,
                        body_h,
                        0.35,
                        "#e8dcc4",
                        tw=m.w * 0.8,
                        td=m.d - cab - 0.9,
                    )
                )
            if camper:
                p.append(m.b(m.w / 2 - 0.005, -cab / 2, 0.012, 1.0, 0.9, 0.6, "#bfe3f5"))
            return p

        W(id_, de, en, size, fn)

    box_van("minibus", "Kleinbus", "Minibus", (2.0, 5.9, 2.3), "#e8ecf2", 1.5)
    box_van("panel_van", "Kastenwagen", "Panel van", (2.0, 5.4, 2.1), "#e8ecf2", 1.4, windows=False)
    box_van("pickup", "Pick-up", "Pickup truck", (2.0, 5.3, 1.85), "#3a5a6a", 2.0, bed=True)
    box_van(
        "campervan",
        "Campervan (Aufstelldach)",
        "Campervan (pop-top)",
        (2.0, 5.4, 2.7),
        "#e8ecf2",
        1.4,
        roof=True,
        camper=True,
    )

    def big(id_, de, en, size, cab, wheels_z):
        def fn(m):
            return [
                *wheels(m, wheels_z, 0.45, 0.3),
                m.b(0, -cab / 2, m.w * 0.98, m.d - cab, 0.5, m.h - 0.5, "#e8ecf2", edges=True),
                m.b(0, m.d / 2 - cab / 2, m.w * 0.98, cab, 0.5, 1.9, "#cfd6e2", edges=True),
                m.b(0, m.d / 2 - 0.3, m.w * 0.9, 0.6, 1.2, 0.8, "glass"),
                m.b(m.w / 2 - 0.005, -cab / 2 - 0.4, 0.012, 1.2, 1.2, 0.7, "#bfe3f5"),
                *lights(m, 0.8, 0.2),
                m.b(0, -cab / 2, m.w * 0.9, m.d - cab - 0.4, m.h - 0.02, 0.02, "#bcc4d0"),
            ]

        W(id_, de, en, size, fn)

    big("motorhome", "Wohnmobil", "Motorhome", (2.4, 7.2, 3.2), 2.0, (2.2, -2.3))

    def caravan(m):
        return [
            *[m.c(sx * (m.w / 2 - 0.1), -0.2, 0.2, 0.7, 0, 0.7, "dark", axis="x") for sx in (-1, 1)],
            m.b(0, 0.4, m.w * 0.98, m.d - 1.5, 0.4, m.h - 0.4, "#e8ecf2", edges=True),
            m.l(0, 0.4, m.w * 0.94, m.d - 1.7, m.h - 0.3, 0.3, "#cfd6e2", tw=m.w * 0.8, td=m.d - 2.2),
            m.b(m.w / 2 - 0.005, 0.2, 0.012, 1.4, 1.2, 0.8, "#bfe3f5"),
            m.b(0, m.d / 2 - 0.7, 0.08, 1.4, 0.4, 0.08, "metal"),
            m.b(0, -m.d / 2 + 0.012, m.w * 0.7, 0.012, 0.7, 0.15, "#ff2b2b", glow=True),
        ]

    W("caravan", "Wohnwagen", "Caravan", (2.3, 6.5, 2.6), caravan)
    return items


def stairs(bp):
    items = []
    W = lambda *a, **k: items.append(make(bp, *a, **k))  # noqa: E731

    def steps(m, n, x0, x1, z_front, z_back, rise_total, y0=0.0, color="wood", thick=0.05):
        """Steps from z_front (low) to z_back (high), a block per step down to the floor."""
        run = (z_front - z_back) / n
        return [
            m.b(
                (x0 + x1) / 2,
                z_front - run * (i + 0.5),
                x1 - x0,
                run,
                y0,
                rise_total * (i + 1) / n,
                color,
                edges="faint",
            )
            for i in range(n)
        ]

    W(
        "stairs_floating",
        "Freitragende Treppe",
        "Floating stairs",
        (1.0, 3.0, 2.8),
        lambda m: [
            *[m.b(0, 1.4 - 0.2 * i, 0.9, 0.28, 0.2 * (i + 1) - 0.04, 0.05, "wood", edges="faint") for i in range(14)],
            m.b(0.46, 0, 0.04, 3.0, 0.1, 0.04, "metal"),
        ],
        hole=True,
    )
    W(
        "stairs_u_winder",
        "Offene U-Treppe mit Wendelstufen",
        "Open U-stair with winders",
        (2.2, 2.4, 2.8),
        lambda m: [
            *[
                m.b(-0.55, 1.0 - 0.18 * i, 0.9, 0.2, 0.2 * (i + 1) - 0.04, 0.05, "wood", edges="faint")
                for i in range(5)
            ],
            *[
                m.b(
                    -0.55 + 0.38 * j,
                    -0.85 + 0.3 * (j == 1) * 0,
                    0.36,
                    0.4,
                    1.04 + 0.2 * j,
                    0.05,
                    "wood",
                    rot=15 * (j - 1),
                    edges="faint",
                )
                for j in range(3)
            ],
            *[m.b(0.55, -0.8 + 0.18 * i, 0.9, 0.2, 1.64 + 0.2 * i, 0.05, "wood", edges="faint") for i in range(5)],
            m.b(0.0, 0.0, 0.04, 2.2, 0.0, 0.1, "metal"),
        ],
        hole=True,
    )
    W(
        "rail_corner",
        "Eckgeländer",
        "Corner railing",
        (1.2, 1.2, 1.0),
        lambda m: [
            m.b(0, -0.55, 1.2, 0.04, 0.94, 0.06, "metal"),
            m.b(-0.55, 0, 0.04, 1.2, 0.94, 0.06, "metal"),
            *[m.b(-0.55 + 0.1 * i, -0.55, 0.012, 0.012, 0, 0.94, "metal") for i in range(12)],
            *[m.b(-0.55, -0.55 + 0.1 * i, 0.012, 0.012, 0, 0.94, "metal") for i in range(1, 12)],
            m.b(-0.55, -0.55, 0.06, 0.06, 0, 1.0, "metal"),
        ],
    )
    return items


def fitout(bp):
    items = []
    W = lambda *a, **k: items.append(make(bp, *a, **k))  # noqa: E731
    W(
        "column_steel",
        "Stahlstütze",
        "Steel column",
        (0.2, 0.2, 2.6),
        lambda m: [
            m.b(0, 0, 0.2, 0.2, 0.0, 0.02, "metal"),
            m.b(0, 0, 0.05, 0.2, 0.02, 2.56, "metal"),
            m.b(0, 0, 0.2, 0.05, 0.02, 0.0 + 2.56, "metal"),
            m.b(0, 0, 0.2, 0.2, 2.58, 0.02, "metal"),
        ],
    )
    W(
        "beams_wood_5",
        "Holzdeckenbalken (5)",
        "Wooden ceiling beams (5)",
        (3.0, 3.0, 0.22),
        lambda m: [m.b(0, -1.2 + 0.6 * i, 3.0, 0.14, 0.0, 0.22, "wood", edges="faint") for i in range(5)],
        mount="ceiling",
    )
    W(
        "beam_downstand",
        "Unterzug",
        "Downstand beam",
        (3.0, 0.3, 0.35),
        lambda m: [m.b(0, 0, m.w, m.d, 0.0, 0.35, "white", edges="faint")],
        mount="ceiling",
    )
    W(
        "fireplace_builtin",
        "Einbaukamin",
        "Built-in fireplace",
        (1.1, 0.5, 1.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.1, "dark"),
            m.b(0, 0, m.w, m.d, 0.1, 1.0, "#2a303c", edges="faint"),
            m.b(0, m.d / 2, 0.8, 0.012, 0.2, 0.55, "glass"),
            m.b(0, 0.0, 0.7, 0.3, 0.2, 0.25, "#ff7a1a", glow=True),
            m.b(0, 0, m.w + 0.1, m.d + 0.04, 1.1, 0.06, "wood"),
        ],
        light="floor",
        electric=True,
    )
    W(
        "divider_slats",
        "Lamellen-Raumteiler",
        "Slatted room divider",
        (2.0, 0.1, 2.4),
        lambda m: [
            *[m.b(-0.95 + 0.1 * i, 0, 0.04, 0.06, 0.0, 2.4, "wood") for i in range(20)],
            m.b(0, 0, 2.0, 0.08, 0.0, 0.04, "dark"),
            m.b(0, 0, 2.0, 0.08, 2.36, 0.04, "dark"),
        ],
    )
    W(
        "curtain_motor",
        "Motorisierter Vorhang",
        "Motorised curtain",
        (2.0, 0.2, 2.5),
        lambda m: [
            m.b(0, -0.06, 2.1, 0.06, 2.4, 0.08, "metal"),
            *[m.b(-0.9 + 0.08 * i, 0.0, 0.05, 0.1 + 0.02 * (i % 2), 0.05, 2.35, "#c9c1b2") for i in range(23)],
        ],
        electric=True,
    )
    W(
        "niche_shelf",
        "Einbauregal (Wandnische)",
        "Built-in shelf (wall niche)",
        (1.2, 0.25, 1.6),
        lambda m: [
            m.b(-0.58, 0, 0.04, m.d, 0, 1.6, "white"),
            m.b(0.58, 0, 0.04, m.d, 0, 1.6, "white"),
            *[m.b(0, 0, 1.2, m.d, 0.4 * i, 0.03, "white") for i in range(5)],
            m.b(0, -0.12, 1.2, 0.01, 0, 1.6, "#d8dde6"),
        ],
    )
    W(
        "niche_led",
        "LED-Nische",
        "LED niche",
        (0.8, 0.2, 0.6),
        lambda m: [
            m.b(0, 0.0, 0.8, 0.2, 0.0, 0.03, "dark"),
            m.b(0, 0.0, 0.8, 0.2, 0.57, 0.03, "dark"),
            m.b(-0.39, 0, 0.03, 0.2, 0.0, 0.6, "dark"),
            m.b(0.39, 0, 0.03, 0.2, 0.0, 0.6, "dark"),
            m.b(0, 0.0, 0.7, 0.04, 0.03, 0.01, "#7fd0ff", glow=True),
            m.b(0, 0.0, 0.7, 0.04, 0.56, 0.01, "#7fd0ff", glow=True),
        ],
        mount="wall",
        wall_y=1.0,
        electric=True,
        light="strip",
    )
    W(
        "light_cove",
        "Lichtvoute (Decke)",
        "Light cove (ceiling)",
        (3.0, 0.3, 0.2),
        lambda m: [
            m.b(0, 0.05, m.w, 0.2, 0.05, 0.15, "white", edges="faint"),
            m.b(0, -0.05, m.w - 0.1, 0.04, 0.04, 0.02, "#ffe7b0", glow=True),
        ],
        mount="ceiling",
        electric=True,
        light="strip",
    )
    W(
        "gallery_rail_glass",
        "Galeriegeländer (Glas)",
        "Gallery railing (glass)",
        (3.0, 0.08, 1.0),
        lambda m: [
            m.b(0, 0, m.w, 0.03, 0.08, 0.86, "glass", edges="faint"),
            m.b(0, 0, m.w, 0.06, 0.94, 0.06, "metal"),
            m.b(0, 0, m.w, 0.06, 0.0, 0.08, "metal"),
        ],
    )
    W(
        "window_seat",
        "Fensterbank-Sitz",
        "Window seat",
        (1.6, 0.5, 0.5),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.38, "white", edges="faint"),
            m.b(0, 0.0, m.w, m.d, 0.38, 0.1, "fabric"),
            *[m.b(x, m.d / 2, 0.76, 0.012, 0.04, 0.3, "#e8ecf2") for x in (-0.4, 0.4)],
        ],
        surface=True,
    )
    return items


def workshop(bp):
    items = []
    W = lambda *a, **k: items.append(make(bp, *a, **k))  # noqa: E731
    W(
        "tool_wall",
        "Werkzeugwand",
        "Tool wall",
        (1.6, 0.08, 1.0),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#6a5a4a", edges="faint"),
            *[
                m.b(-0.7 + 0.14 * i, 0.05, 0.02, 0.04, 0.2 + 0.07 * (i % 5), 0.5 - 0.06 * (i % 3), "metal")
                for i in range(11)
            ],
            *[
                m.b(-0.6 + 0.3 * i, 0.05, 0.12, 0.05, 0.75, 0.06, ("#c0392b", "#2e86c1", "#f1c40f", "#27ae60")[i % 4])
                for i in range(5)
            ],
        ],
        mount="wall",
        wall_y=1.0,
    )
    W(
        "heavy_shelf",
        "Schwerlastregal",
        "Heavy-duty shelf",
        (1.8, 0.6, 2.0),
        lambda m: [
            *[m.b(sx * 0.88, sz * 0.27, 0.05, 0.05, 0, 2.0, "#2e6fa8") for sx in (-1, 1) for sz in (-1, 1)],
            *[m.b(0, 0, 1.8, 0.58, 0.15 + 0.45 * i, 0.04, "#c9a46a") for i in range(4)],
            *[m.b(-0.5 + 0.5 * (i % 3), 0.0, 0.4, 0.4, 0.2 + 0.45 * (i // 3), 0.25, "#a07c4a") for i in range(7)],
        ],
    )
    W(
        "chest_freezer_garage",
        "Gefriertruhe",
        "Chest freezer",
        (1.0, 0.7, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.05, 0.85, "white", edges="faint"),
            m.b(0, 0, m.w - 0.06, m.d - 0.06, 0.9, 0.02, "#cfd6e2"),
            m.b(0.3, m.d / 2, 0.08, 0.01, 0.84, 0.02, "#27ae60", glow=True),
            *m.legs(0.03, 0.05, 0.05, "dark"),
        ],
        electric=True,
    )
    W(
        "tyre_rack",
        "Reifenregal",
        "Tyre rack",
        (1.4, 0.6, 1.4),
        lambda m: [
            *[m.b(sx * 0.68, 0, 0.04, 0.5, 0, 1.4, "metal") for sx in (-1, 1)],
            *[m.b(0, 0, 1.4, 0.04, 0.05 + 0.65 * i, 0.04, "metal") for i in range(2)],
            *[
                m.c(-0.45 + 0.3 * j, 0, 0.2, 0.6, 0.08 + 0.65 * i, 0.6, "dark", axis="x")
                for i in range(2)
                for j in range(4)
            ],
        ],
    )
    W(
        "lawn_mower",
        "Rasenmäher",
        "Lawn mower",
        (0.55, 0.9, 1.0),
        lambda m: [
            m.b(0, 0.05, 0.5, 0.6, 0.12, 0.2, "#c0392b", edges="faint"),
            *[m.c(sx * 0.25, sz * 0.28, 0.06, 0.2, 0.0, 0.2, "dark", axis="x") for sx in (-1, 1) for sz in (-1, 1)],
            m.l(0, -0.2, 0.5, 0.04, 0.3, 0.7, "metal", tz=-0.4, td=0.04),
            m.b(0, -0.42, 0.45, 0.04, 0.98, 0.02, "dark"),
            m.b(0, 0.0, 0.3, 0.3, 0.32, 0.12, "#e8ecf2"),
        ],
        electric=True,
    )
    W(
        "bike_stand_2",
        "Fahrradständer mit 2 Rädern",
        "Bike stand with 2 bikes",
        (1.0, 1.8, 1.05),
        lambda m: [
            *[m.c(sx * 0.2, sz * 0.58, 0.04, 0.66, 0.0, 0.66, "dark", axis="z") for sx in (-1, 1) for sz in (0,)],
            *[m.b(sx * 0.2, 0, 0.04, 1.1, 0.4, 0.04, "#2e86c1") for sx in (-1, 1)],
            *[m.b(sx * 0.2, 0.55, 0.4, 0.04, 0.95, 0.03, "metal") for sx in (-1, 1)],
            m.b(0, 0, 0.9, 0.04, 0.0, 0.05, "metal", tz=0.0),
        ],
    )
    W(
        "workshop_light",
        "Werkstattleuchte",
        "Workshop light",
        (1.3, 0.12, 0.08),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "white", edges="faint"),
            m.b(0, 0, m.w - 0.04, m.d - 0.03, 0.0, 0.004, "#cfe6ff", glow=True),
        ],
        mount="ceiling",
        electric=True,
        light="strip",
    )
    W(
        "garage_opener",
        "Garagentorantrieb",
        "Garage door opener",
        (0.2, 0.9, 0.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "#2a303c", edges="faint"),
            m.b(0, 0.35, 0.08, 0.06, 0.0, 0.02, "#ffe7b0", glow=True),
            m.b(0, -0.4, 0.04, 0.2, 0.1, 0.1, "metal"),
        ],
        mount="ceiling",
        electric=True,
    )
    W(
        "wallbox_holder",
        "Wallbox mit Kabelhalter",
        "Wallbox with cable holder",
        (0.28, 0.14, 0.45),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.32, "white", edges="faint"),
            m.b(0, m.d / 2, 0.14, 0.01, 0.2, 0.04, "#27ae60", glow=True),
            m.c(0.0, 0.1, 0.18, 0.16, 0.34, 0.1, "dark"),
            m.b(0.12, 0.08, 0.02, 0.1, 0.1, 0.02, "dark"),
        ],
        mount="wall",
        wall_y=1.0,
        electric=True,
    )
    W(
        "wall_bike_holder",
        "Wand-Fahrradhalter (2)",
        "Wall bike holder (2)",
        (0.9, 0.5, 0.2),
        lambda m: [
            m.b(0, -0.2, m.w, 0.04, 0.0, 0.2, "metal"),
            *[
                m.b(
                    x,
                    0.0,
                    0.02,
                    0.5,
                    0.05,
                    0.04,
                    "metal",
                )
                for x in (-0.2, 0.2)
            ],
            *[m.b(x, 0.2, 0.04, 0.06, 0.0, 0.1, "dark") for x in (-0.2, 0.2)],
        ],
        mount="wall",
        wall_y=1.6,
    )
    W(
        "workshop_vacuum",
        "Werkstattsauger",
        "Workshop vacuum",
        (0.45, 0.45, 0.65),
        lambda m: [
            m.c(0, 0, 0.4, 0.4, 0.08, 0.4, "#f4a53a"),
            m.c(0, 0, 0.42, 0.42, 0.48, 0.1, "dark"),
            m.c(0, 0, 0.45, 0.45, 0.0, 0.08, "dark"),
            m.c(0.1, 0.1, 0.1, 0.1, 0.58, 0.06, "metal"),
        ],
        electric=True,
    )
    W(
        "workshop_cabinet",
        "Werkstattschrank",
        "Workshop cabinet",
        (0.8, 0.5, 1.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#8a96a8", edges="faint"),
            *[m.b(x, m.d / 2, 0.38, 0.012, 0.05, 1.8, "#a6b0c0") for x in (-0.2, 0.2)],
            *[m.b(x * 0.5, m.d / 2 + 0.01, 0.02, 0.012, 0.9, 0.2, "metal") for x in (-0.1, 0.1)],
        ],
    )
    W(
        "printer_enclosed",
        "Geschlossener 3D-Drucker",
        "Enclosed 3D printer",
        (0.45, 0.45, 0.5),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#2a303c", edges="faint"),
            m.b(0, m.d / 2, m.w - 0.04, 0.012, 0.04, m.h - 0.08, "glass"),
        ],
        electric=True,
        mount="surface",
    )
    return items


EXTRA = {
    "nextfloor.fahrzeuge": vehicles,
    "nextfloor.treppen": stairs,
    "nextfloor.ausbau": fitout,
    "nextfloor.werkstatt": workshop,
}

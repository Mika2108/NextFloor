"""Packs Heimkino & Hi-Fi (home cinema), Smart Home & Technik (smart home) and Hauswirtschaft & Haustechnik (utility)."""

from area_common import make

RING = "#7fd0ff"


def build(bp):
    W = lambda *a, **k: make(bp, *a, **k)  # noqa: E731

    # ================================================================ home cinema and hi-fi
    cine = []
    C = lambda *a, **k: cine.append(W(*a, **k))  # noqa: E731
    C(
        "screen_wall",
        "Leinwand (Wand)",
        "Projection screen (wall)",
        (2.6, 0.08, 1.6),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "dark"),
            m.b(0, 0.02, m.w - 0.1, 0.012, 0.05, m.h - 0.1, "white", screen=True),
        ],
        mount="wall",
        wall_y=0.6,
        electric=True,
    )
    C(
        "screen_roll",
        "Rolloleinwand",
        "Roll-down projection screen",
        (2.4, 0.12, 1.8),
        lambda m: [
            m.b(0, 0, m.w, 0.1, m.h - 0.1, 0.1, "dark"),
            m.b(0, 0.03, m.w - 0.06, 0.01, 0.1, m.h - 0.2, "white", screen=True),
            m.b(0, 0.03, m.w - 0.06, 0.03, 0.06, 0.04, "dark"),
        ],
        mount="ceiling",
        electric=True,
    )
    C(
        "projector_ceiling",
        "Beamer (Decke)",
        "Projector (ceiling)",
        (0.4, 0.35, 0.3),
        lambda m: [
            m.b(0, 0, 0.36, 0.3, 0.1, 0.12, "white", edges="faint"),
            m.c(0.1, 0.17, 0.12, 0.05, 0.12, 0.08, "dark", axis="z"),
            m.b(0, 0, 0.04, 0.04, 0.22, 0.08, "metal"),
            m.b(0, 0, 0.2, 0.2, 0.28, 0.01, "metal"),
        ],
        mount="ceiling",
        electric=True,
    )
    C(
        "projector_table",
        "Beamer (Tisch)",
        "Projector (table)",
        (0.35, 0.3, 0.13),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.11, "white", edges="faint"),
            m.c(0.08, m.d / 2, 0.1, 0.03, 0.03, 0.08, "dark", axis="z"),
            m.b(-0.1, m.d / 2, 0.04, 0.01, 0.1, 0.01, "#27ae60", glow=True),
        ],
        mount="surface",
        electric=True,
    )

    def speaker(id_, de, en, size, drivers, legs=False, color="dark"):
        def fn(m):
            p = [m.b(0, 0, m.w, m.d, 0.04 if legs else 0, m.h - (0.04 if legs else 0), color, edges="faint")]
            for i, (y, r) in enumerate(drivers):
                p.append(m.c(0, m.d / 2, r * m.w, r * m.w, y * m.h, r * m.w, "#2b3446", axis="z"))
                p.append(
                    m.c(
                        0,
                        m.d / 2 + 0.005,
                        r * m.w * 0.4,
                        r * m.w * 0.4,
                        (y * m.h) + r * m.w * 0.3,
                        r * m.w * 0.4,
                        "#4a5468",
                        axis="z",
                    )
                )
            if legs:
                p += m.legs(0.05, 0.04, 0.04, "metal")
            return p

        C(id_, de, en, size, fn, electric=True)

    speaker(
        "speaker_floor",
        "Standlautsprecher",
        "Floor-standing speaker",
        (0.25, 0.32, 1.1),
        [(0.18, 0.75), (0.45, 0.75), (0.8, 0.5)],
        legs=True,
    )
    speaker("speaker_shelf", "Regallautsprecher", "Bookshelf speaker", (0.22, 0.25, 0.38), [(0.1, 0.75), (0.65, 0.5)])
    C(
        "speaker_centre",
        "Center-Lautsprecher",
        "Centre speaker",
        (0.6, 0.25, 0.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"),
            *[m.c(x, m.d / 2, 0.14, 0.14, 0.03, 0.14, "#2b3446", axis="z") for x in (-0.18, 0.18)],
            m.c(0, m.d / 2, 0.05, 0.05, 0.08, 0.05, "#4a5468", axis="z"),
        ],
        electric=True,
        mount="surface",
    )
    C(
        "subwoofer",
        "Subwoofer",
        "Subwoofer",
        (0.4, 0.4, 0.45),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.02, 0.43, "dark", edges="faint"),
            m.c(0, m.d / 2, 0.3, 0.3, 0.06, 0.3, "#2b3446", axis="z"),
            m.c(0, m.d / 2 + 0.005, 0.12, 0.12, 0.15, 0.12, "#4a5468", axis="z"),
            *m.legs(0.03, 0.04, 0.02, "metal"),
        ],
        electric=True,
    )
    C(
        "soundbar",
        "Soundbar",
        "Soundbar",
        (1.1, 0.1, 0.07),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"),
            m.b(0, m.d / 2, m.w - 0.06, 0.01, 0.015, 0.04, "#2b3446"),
            m.b(0.45, m.d / 2, 0.04, 0.01, 0.03, 0.01, RING, glow=True),
        ],
        electric=True,
        mount="surface",
    )
    C(
        "soundbar_premium",
        "Premium-Soundbar",
        "Premium soundbar",
        (1.2, 0.12, 0.09),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#2a303c", edges="glow"),
            m.b(0, m.d / 2, m.w - 0.08, 0.01, 0.02, 0.05, "#2b3446"),
            *[m.c(x, m.d / 2, 0.05, 0.05, 0.02, 0.05, "#4a5468", axis="z") for x in (-0.5, -0.2, 0.2, 0.5)],
            m.b(0.5, m.d / 2, 0.04, 0.01, 0.07, 0.01, RING, glow=True),
        ],
        electric=True,
        mount="surface",
    )
    C(
        "speaker_wall",
        "Wandlautsprecher",
        "Wall speaker",
        (0.2, 0.12, 0.3),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
            m.c(0, m.d / 2, 0.16, 0.16, 0.07, 0.16, "#cfd6e2", axis="z"),
        ],
        mount="wall",
        wall_y=1.8,
        electric=True,
    )
    C(
        "speaker_ceiling",
        "Deckenlautsprecher",
        "Ceiling speaker",
        (0.22, 0.22, 0.07),
        lambda m: [m.c(0, 0, 0.22, 0.22, 0.0, 0.07, "white"), m.c(0, 0, 0.18, 0.18, 0.0, 0.01, "#cfd6e2")],
        mount="ceiling",
        electric=True,
    )
    C(
        "av_receiver",
        "AV-Receiver",
        "AV receiver",
        (0.43, 0.38, 0.17),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"),
            m.c(0.15, m.d / 2, 0.06, 0.06, 0.05, 0.06, "metal", axis="z"),
            m.b(-0.05, m.d / 2, 0.16, 0.01, 0.1, 0.04, "#2b3446", screen=True),
        ],
        electric=True,
        mount="surface",
    )
    C(
        "turntable",
        "Plattenspieler",
        "Turntable",
        (0.45, 0.36, 0.15),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.07, "wood", edges="faint"),
            m.c(-0.04, 0.0, 0.3, 0.3, 0.07, 0.015, "dark"),
            m.c(-0.04, 0.0, 0.1, 0.1, 0.085, 0.003, "#c0392b"),
            m.b(0.16, -0.08, 0.02, 0.2, 0.08, 0.02, "metal"),
        ],
        electric=True,
        mount="surface",
    )
    C(
        "record_shelf",
        "Plattenregal",
        "Record shelf",
        (0.9, 0.35, 0.7),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.03, "wood"),
            m.b(0, 0, m.w, m.d, 0.67, 0.03, "wood"),
            *[m.b(sx * 0.44, 0, 0.03, m.d, 0.0, 0.7, "wood") for sx in (-1, 1)],
            m.b(0, 0, m.w, m.d, 0.33, 0.03, "wood"),
            *[
                m.b(-0.4 + 0.035 * i, 0, 0.03, 0.31, 0.03, 0.3, ("#2b3f66", "#8a3a2a", "#6b8a5a", "#c9a46a")[i % 4])
                for i in range(22)
            ],
        ],
    )
    C(
        "game_console",
        "Spielkonsole",
        "Game console",
        (0.3, 0.3, 0.07),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
            m.b(0.1, m.d / 2, 0.04, 0.01, 0.04, 0.01, "#27ae60", glow=True),
        ],
        electric=True,
        mount="surface",
    )
    C(
        "hifi_rack",
        "Hi-Fi-Rack",
        "Hi-fi rack",
        (0.6, 0.45, 1.0),
        lambda m: [
            *[m.b(sx * 0.28, sz * 0.2, 0.03, 0.03, 0.0, 1.0, "metal") for sx in (-1, 1) for sz in (-1, 1)],
            *[m.b(0, 0, m.w, m.d, 0.15 + 0.28 * i, 0.03, "glass") for i in range(4)],
            *[m.b(0, 0, 0.43, 0.35, 0.18 + 0.28 * i, 0.08, "dark") for i in range(3)],
        ],
        surface=True,
    )
    C(
        "cinema_seat",
        "Kinosessel",
        "Cinema seat",
        (0.85, 1.0, 1.1),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.1, 0.35, "#3a1a1a", edges="faint"),
            m.b(0, -0.4, 0.7, 0.2, 0.3, 0.75, "#3a1a1a"),
            *[m.b(s * 0.38, 0, 0.12, 0.9, 0.35, 0.3, "#2a1212") for s in (-1, 1)],
            m.c(0.28, 0.1, 0.08, 0.08, 0.7, 0.08, "metal"),
            m.b(0, 0, 0.4, 0.3, 0.0, 0.1, "dark"),
        ],
    )
    C(
        "cinema_row_3",
        "Kinosessel-Reihe (3)",
        "Row of cinema seats (3)",
        (2.6, 1.0, 1.1),
        lambda m: [
            *[m.b(-0.87 + 0.87 * i, 0, 0.82, 0.9, 0.1, 0.35, "#3a1a1a", edges="faint") for i in range(3)],
            *[m.b(-0.87 + 0.87 * i, -0.4, 0.7, 0.2, 0.3, 0.75, "#3a1a1a") for i in range(3)],
            *[m.b(-1.3 + 0.87 * i, 0, 0.1, 0.9, 0.35, 0.3, "#2a1212") for i in range(4)],
            m.b(0, 0, m.w, 0.3, 0.0, 0.1, "dark"),
        ],
    )
    C(
        "acoustic_panel",
        "Akustikpaneel",
        "Acoustic panel",
        (0.6, 0.06, 1.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#4a5468", edges="faint"),
            *[m.b(-0.25 + 0.1 * i, m.d / 2, 0.02, 0.01, 0.05, m.h - 0.1, "#2b3446") for i in range(6)],
        ],
        mount="wall",
        wall_y=0.8,
    )
    C(
        "bass_trap",
        "Basstrap (Ecke)",
        "Bass trap (corner)",
        (0.4, 0.4, 1.2),
        lambda m: [m.l(-0.1, -0.1, 0.4, 0.4, 0.0, 1.2, "#4a5468", tw=0.4, td=0.4, tx=-0.1, tz=-0.1, edges="faint")],
        surface=False,
    )
    C(
        "popcorn_maker",
        "Popcornmaschine",
        "Popcorn maker",
        (0.5, 0.4, 0.8),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.3, "#c0392b", edges="faint"),
            m.b(0, 0, m.w - 0.04, m.d - 0.04, 0.3, 0.4, "glass"),
            *[m.c(-0.1 + 0.07 * i, 0.0, 0.07, 0.07, 0.32, 0.07, "#fff3c4") for i in range(4)],
            m.l(0, 0, m.w, m.d, 0.7, 0.1, "#c0392b", tw=0.2, td=0.2),
            m.b(0, m.d / 2, 0.3, 0.01, 0.08, 0.1, "#f1c40f", glow=True),
        ],
        electric=True,
        mount="surface",
    )
    C(
        "star_ceiling",
        "Sternenhimmel",
        "Star ceiling",
        (2.0, 2.0, 0.03),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#0b1020", edges="faint"),
            *[
                m.b(
                    -0.8 + 0.4 * (i % 5) + 0.07 * (i // 5),
                    -0.8 + 0.4 * (i // 5) + 0.05 * (i % 3),
                    0.02,
                    0.02,
                    -0.001,
                    0.002,
                    "#cfe6ff",
                    glow=True,
                )
                for i in range(20)
            ],
        ],
        mount="ceiling",
        electric=True,
        light="strip",
    )

    def smart_speaker(id_, de, en, shape):
        sizes = {
            "ball": (0.12, 0.12, 0.12),
            "cylinder": (0.1, 0.1, 0.2),
            "puck": (0.1, 0.1, 0.04),
            "pod": (0.1, 0.1, 0.16),
            "tall": (0.12, 0.12, 0.3),
            "oval": (0.12, 0.08, 0.1),
        }
        size = sizes[shape]

        def fn(m):
            if shape == "ball":
                return [m.c(0, 0, m.w, m.d, 0.0, m.h, "#3a3f4a"), m.c(0, 0, m.w, m.d, 0.045, 0.02, RING, glow=True)]
            if shape == "puck":
                return [
                    m.c(0, 0, m.w, m.d, 0.0, m.h, "#3a3f4a"),
                    m.c(0, 0, m.w - 0.01, m.d - 0.01, m.h - 0.005, 0.005, RING, glow=True),
                ]
            if shape == "pod":
                return [
                    m.l(0, 0, m.w, m.d, 0.0, m.h, "#3a3f4a", tw=0.07, td=0.07),
                    m.c(0, 0, 0.07, 0.07, m.h - 0.004, 0.004, RING, glow=True),
                ]
            if shape == "oval":
                return [
                    m.c(0, 0, m.w, m.d, 0.0, m.h, "#e8ecf2"),
                    m.c(0, 0, m.w - 0.02, m.d - 0.02, m.h - 0.006, 0.006, RING, glow=True),
                ]
            return [m.c(0, 0, m.w, m.d, 0.0, m.h, "#3a3f4a"), m.c(0, 0, m.w, m.d, m.h * 0.78, 0.02, RING, glow=True)]

        C(id_, de, en, size, fn, electric=True, mount="surface")

    for shape, de_n, en_n in (
        ("ball", "Kugel", "ball"),
        ("cylinder", "Zylinder", "cylinder"),
        ("puck", "Puck", "puck"),
        ("pod", "Pod", "pod"),
        ("tall", "hoch", "tall"),
        ("oval", "oval", "oval"),
    ):
        smart_speaker(f"smart_speaker_{shape}", f"Smart Speaker ({de_n})", f"Smart speaker ({en_n})", shape)
    C(
        "multiroom_compact",
        "Kompakter Multiroom-Lautsprecher",
        "Compact multiroom speaker",
        (0.2, 0.12, 0.12),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#e8ecf2", edges="faint"),
            m.b(0, m.d / 2, m.w - 0.04, 0.005, 0.03, 0.06, "#cfd6e2"),
            m.b(0.07, m.d / 2, 0.03, 0.005, 0.1, 0.01, RING, glow=True),
        ],
        electric=True,
        mount="surface",
    )
    C(
        "speaker_portable",
        "Tragbarer Lautsprecher",
        "Portable speaker",
        (0.22, 0.09, 0.09),
        lambda m: [
            m.c(0, 0, 0.22, 0.09, 0.0, 0.09, "#2e6a8a", axis="x"),
            m.b(0, m.d / 2 - 0.005, 0.18, 0.01, 0.02, 0.05, "#2b3446"),
        ],
        electric=True,
        mount="surface",
    )

    def display(id_, de, en, size, wall=False, floating=False):
        def fn(m):
            if floating:
                return [
                    m.b(0, -0.02, m.w, 0.025, 0.06, m.h - 0.06, "dark", screen=True),
                    m.c(0, -0.04, 0.12, 0.08, 0.0, 0.07, "#cfd6e2"),
                ]
            p = [m.b(0, 0, m.w, m.d, 0.0, m.h, "dark", edges="faint", screen=True)]
            if not wall:
                p = [
                    m.b(0, -0.01, m.w, m.d - 0.04, 0.04, m.h - 0.04, "dark", screen=True),
                    m.b(0, 0.0, m.w * 0.5, m.d, 0.0, 0.05, "#cfd6e2"),
                ]
            return p

        kw = {"mount": "wall", "wall_y": 1.2} if wall else {"mount": "surface"}
        C(id_, de, en, size, fn, electric=True, **kw)

    display("display_5", "Smart Display 5″", "Smart display 5″", (0.13, 0.08, 0.1))
    display("display_8", "Smart Display 8″", "Smart display 8″", (0.2, 0.1, 0.16))
    display(
        "display_7_float",
        "Smart Display 7″ (schwebend)",
        "Smart display 7″ (floating)",
        (0.18, 0.1, 0.17),
        floating=True,
    )
    display("display_15_wall", "Smart Display 15″ (Wand)", "Smart display 15″ (wall)", (0.36, 0.03, 0.24), wall=True)
    C(
        "speaker_stand",
        "Lautsprecherständer",
        "Speaker stand",
        (0.25, 0.25, 0.8),
        lambda m: [
            m.b(0, 0, 0.25, 0.25, 0.0, 0.015, "dark"),
            m.c(0, 0, 0.05, 0.05, 0.015, 0.75, "metal"),
            m.b(0, 0, 0.2, 0.2, 0.765, 0.015, "dark"),
        ],
    )

    # ================================================================ smart home and technology
    smart = []
    S = lambda *a, **k: smart.append(W(*a, **k))  # noqa: E731
    S(
        "wallbox",
        "Wallbox",
        "Wallbox",
        (0.25, 0.14, 0.4),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.32, "white", edges="faint"),
            m.b(0, m.d / 2, 0.14, 0.01, 0.2, 0.04, "#27ae60", glow=True),
            m.c(0.0, 0.1, 0.16, 0.16, 0.33, 0.07, "dark"),
        ],
        mount="wall",
        wall_y=1.0,
        electric=True,
    )
    S(
        "electric_car",
        "Elektroauto",
        "Electric car",
        (1.9, 4.7, 1.6),
        lambda m: [
            m.l(0, 0, m.w, m.d, 0.25, 0.62, "#e8ecf2", tw=m.w * 0.97, td=m.d * 0.98, edges=True),
            m.l(0, -0.1, m.w * 0.92, 2.3, 0.87, 0.5, "glass", tw=m.w * 0.78, td=1.4, tz=-0.15),
            *[m.c(sx * 0.82, z, 0.22, 0.66, 0, 0.66, "dark", axis="x") for sx in (-1, 1) for z in (-1.5, 1.5)],
            m.b(0, m.d / 2 - 0.005, 1.3, 0.012, 0.6, 0.08, "#ffffff", glow=True),
        ],
        vehicle=True,
        electric=True,
    )
    S(
        "heat_pump_outdoor",
        "Wärmepumpe (Außengerät)",
        "Heat pump (outdoor unit)",
        (1.1, 0.5, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.05, 0.85, "#cfd6e2", edges="faint"),
            m.c(-0.15, m.d / 2, 0.6, 0.6, 0.15, 0.6, "dark", axis="z"),
            *[m.b(-0.15, m.d / 2 + 0.01, 0.58, 0.012, 0.18 + 0.1 * i, 0.012, "metal") for i in range(5)],
            m.b(0.42, m.d / 2, 0.15, 0.01, 0.5, 0.1, "#2b3446"),
            *m.legs(0.05, 0.06, 0.05, "dark"),
        ],
        electric=True,
    )
    S(
        "home_battery",
        "Heimspeicher",
        "Home battery",
        (0.6, 0.25, 1.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "#2a303c", edges="glow"),
            m.b(0, m.d / 2, 0.4, 0.01, 0.9, 0.05, "#27ae60", glow=True),
            m.b(0, m.d / 2, 0.5, 0.01, 0.1, 0.7, "#1e2430"),
        ],
        electric=True,
    )
    S(
        "inverter_solar",
        "Solar-Wechselrichter",
        "Solar inverter",
        (0.5, 0.2, 0.55),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "white", edges="faint"),
            m.b(0, m.d / 2, 0.3, 0.01, 0.35, 0.12, "#2b3446", screen=True),
            m.b(0.15, m.d / 2, 0.04, 0.01, 0.12, 0.02, "#27ae60", glow=True),
        ],
        mount="wall",
        wall_y=1.1,
        electric=True,
    )
    S(
        "robot_vacuum",
        "Saugroboter mit Station",
        "Robot vacuum with dock",
        (0.45, 0.4, 0.15),
        lambda m: [
            m.b(0, 0, 0.14, 0.3, 0.0, 0.1, "white", edges="faint"),
            m.b(0.2, 0.0, 0.1, 0.38, 0.0, 0.14, "white"),
            m.c(-0.05, 0.0, 0.3, 0.3, 0.0, 0.09, "dark"),
            m.b(0.2, 0.0, 0.1, 0.1, 0.1, 0.02, "#27ae60", glow=True),
        ],
        electric=True,
    )
    S(
        "mower_garage",
        "Mähroboter mit Garage",
        "Robot mower with garage",
        (0.8, 0.6, 0.35),
        lambda m: [
            m.l(0, 0, m.w, m.d, 0.0, m.h, "#4a4f5a", tw=m.w * 0.9, td=m.d * 0.7, edges="faint"),
            m.b(0, m.d / 2, 0.5, 0.01, 0.0, 0.2, "dark"),
            m.c(0, 0.0, 0.3, 0.3, 0.0, 0.14, "#e8a33a"),
        ],
        electric=True,
    )
    S(
        "washer_dryer_stack",
        "Waschturm",
        "Washer-dryer stack",
        (0.6, 0.65, 1.8),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.9, "white", edges="faint"),
            m.b(0, 0, m.w, m.d, 0.9, 0.9, "white", edges="faint"),
            *[m.c(0, m.d / 2 + 0.005, 0.42, 0.04, 0.12 + 0.9 * i, 0.42, "glass", axis="z") for i in range(2)],
            m.b(0, m.d / 2, 0.4, 0.01, 0.78 + 0.9 * 0, 0.06, "#2b3446", screen=True),
            m.b(0, m.d / 2, 0.4, 0.01, 1.68, 0.06, "#2b3446", screen=True),
        ],
        electric=True,
    )
    S(
        "network_rack",
        "Netzwerkschrank",
        "Network rack",
        (0.6, 0.45, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "dark", edges="faint"),
            *[m.b(0, m.d / 2 - 0.02, m.w - 0.1, 0.02, 0.1 + 0.15 * i, 0.12, "#2a303c") for i in range(5)],
            *[m.b(0.2, m.d / 2, 0.02, 0.01, 0.14 + 0.15 * i, 0.02, "#27ae60", glow=True) for i in range(5)],
        ],
        electric=True,
    )
    S(
        "smart_display",
        "Smart Display",
        "Smart display",
        (0.25, 0.04, 0.17),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint", screen=True)],
        mount="wall",
        wall_y=1.4,
        electric=True,
    )
    S(
        "solar_balcony",
        "Balkon-Solarmodul",
        "Balcony solar panel",
        (1.1, 0.06, 1.7),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#1a2a4a", edges="glow"),
            *[m.b(-0.35 + 0.23 * i, m.d / 2, 0.005, 0.005, 0.02, m.h - 0.04, "#4a6a9a") for i in range(4)],
        ],
        mount="wall",
        wall_y=0.3,
        electric=True,
    )
    S(
        "fuse_box",
        "Sicherungskasten",
        "Fuse box",
        (0.4, 0.12, 0.5),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#cfd6e2", edges="faint"),
            *[m.b(-0.15 + 0.04 * i, m.d / 2, 0.03, 0.01, 0.12, 0.12, "dark") for i in range(8)],
            *[m.b(-0.15 + 0.04 * i, m.d / 2, 0.03, 0.01, 0.3, 0.12, "dark") for i in range(8)],
        ],
        mount="wall",
        wall_y=1.2,
        electric=True,
    )
    S(
        "nas_server",
        "NAS-Server",
        "NAS server",
        (0.2, 0.25, 0.25),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"),
            *[m.b(0, m.d / 2, 0.03, 0.01, 0.03 + 0.055 * i, 0.04, "#2b3446") for i in range(4)],
            m.b(0.07, m.d / 2, 0.02, 0.01, 0.23, 0.01, "#27ae60", glow=True),
        ],
        electric=True,
        mount="surface",
    )
    S(
        "hot_water_tank",
        "Warmwasserspeicher",
        "Hot water tank",
        (0.6, 0.6, 1.7),
        lambda m: [
            m.c(0, 0, 0.6, 0.6, 0.1, 1.55, "white", edges="faint"),
            m.c(0, 0, 0.4, 0.4, 0.0, 0.1, "dark"),
            m.c(0, 0, 0.5, 0.5, 1.65, 0.05, "#bcc4d0"),
            m.b(0.2, 0.28, 0.1, 0.04, 1.2, 0.2, "#2b3446", screen=True),
        ],
        electric=True,
    )
    S(
        "light_pillar",
        "Verlaufs-Lichtsäule",
        "Gradient light pillar",
        (0.12, 0.12, 1.4),
        lambda m: [
            m.c(0, 0, 0.12, 0.12, 0.0, 0.03, "dark"),
            m.c(0, 0, 0.08, 0.08, 0.03, 1.35, "#d98cff", glow=True),
            m.c(0, 0, 0.1, 0.1, 1.38, 0.02, "dark"),
        ],
        electric=True,
        light="floor",
    )
    S(
        "light_bars_tv",
        "Lichtleisten-Paar (TV)",
        "Light bar pair (TV)",
        (1.2, 0.1, 0.4),
        lambda m: [
            *[m.b(x, 0, 0.03, 0.04, 0.0, 0.4, "dark") for x in (-0.55, 0.55)],
            *[m.b(x, 0.02, 0.012, 0.012, 0.02, 0.36, "#d98cff", glow=True) for x in (-0.55, 0.55)],
        ],
        electric=True,
        light="strip",
        mount="surface",
    )
    S(
        "orb_lamp",
        "Leuchtkugel-Tischlampe",
        "Glowing orb table lamp",
        (0.2, 0.2, 0.2),
        lambda m: [m.c(0, 0, 0.2, 0.2, 0.0, 0.2, "#ffe7b0", glow=True), m.c(0, 0, 0.1, 0.1, 0.0, 0.01, "dark")],
        electric=True,
        light="table",
        mount="surface",
    )
    S(
        "glow_lamp_portable",
        "Tragbare Leuchte",
        "Portable glow lamp",
        (0.14, 0.14, 0.22),
        lambda m: [
            m.c(0, 0, 0.14, 0.14, 0.0, 0.18, "#ffe7b0", glow=True),
            m.c(0, 0, 0.14, 0.14, 0.18, 0.03, "dark"),
            m.c(0, 0, 0.14, 0.14, 0.0, 0.02, "dark"),
        ],
        electric=True,
        light="table",
        mount="surface",
    )
    S(
        "mood_spot",
        "Stimmungs-Spot",
        "Table mood spot",
        (0.12, 0.12, 0.14),
        lambda m: [
            m.c(0, 0, 0.12, 0.12, 0.0, 0.02, "dark"),
            m.l(0, 0, 0.1, 0.1, 0.02, 0.12, "#d98cff", tw=0.06, td=0.06, glow=True),
        ],
        electric=True,
        light="table",
        mount="surface",
    )
    S(
        "cube_lamp",
        "Würfelleuchte",
        "Cube lamp",
        (0.18, 0.18, 0.18),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#ffe7b0", glow=True, edges="faint")],
        electric=True,
        light="table",
        mount="surface",
    )
    S(
        "ceiling_panel_round",
        "Runde Deckenleuchte",
        "Round ceiling panel",
        (0.6, 0.6, 0.05),
        lambda m: [m.c(0, 0, 0.6, 0.6, 0.0, 0.05, "white"), m.c(0, 0, 0.56, 0.56, 0.0, 0.004, "#fff2c8", glow=True)],
        mount="ceiling",
        electric=True,
        light="ceiling",
    )
    S(
        "garden_spots_3",
        "Gartenspots (3er-Set)",
        "Garden spots (set of 3)",
        (1.2, 0.2, 0.4),
        lambda m: [
            *[m.b(-0.5 + 0.5 * i, 0, 0.02, 0.02, 0.0, 0.3, "dark") for i in range(3)],
            *[m.c(-0.5 + 0.5 * i, 0, 0.1, 0.1, 0.28, 0.1, "#ffe7b0", glow=True) for i in range(3)],
        ],
        electric=True,
        light="garden",
    )
    S(
        "wall_light_updown",
        "Außen-Wandleuchte Up & Down",
        "Outdoor up and down wall light",
        (0.12, 0.12, 0.25),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "dark", edges="faint"),
            m.b(0, 0.0, 0.1, 0.1, m.h - 0.001, 0.001, "#ffe7b0", glow=True),
            m.b(0, 0.0, 0.1, 0.1, 0.0, 0.001, "#ffe7b0", glow=True),
        ],
        mount="wall",
        wall_y=1.9,
        electric=True,
        light="wall",
    )
    S(
        "siren_strobe",
        "Sirene mit Blitzlicht",
        "Siren with strobe",
        (0.2, 0.1, 0.25),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.2, "white", edges="faint"),
            m.c(0, 0.0, 0.1, 0.1, 0.2, 0.05, "#c0392b", glow=True),
        ],
        mount="wall",
        wall_y=2.0,
        electric=True,
    )
    S(
        "access_point",
        "WLAN-Access-Point (Decke)",
        "Wi-Fi access point (ceiling)",
        (0.2, 0.2, 0.04),
        lambda m: [m.c(0, 0, 0.2, 0.2, 0.0, 0.04, "white"), m.c(0, 0, 0.03, 0.03, 0.0, 0.002, "#27ae60", glow=True)],
        mount="ceiling",
        electric=True,
    )
    S(
        "smoke_detector",
        "Rauchmelder",
        "Smoke detector",
        (0.12, 0.12, 0.04),
        lambda m: [
            m.c(0, 0, 0.12, 0.12, 0.0, 0.04, "white"),
            m.c(0.04, 0.04, 0.012, 0.012, 0.0, 0.002, "#c0392b", glow=True),
        ],
        mount="ceiling",
        electric=True,
    )
    S(
        "thermostat_wall",
        "Wandthermostat",
        "Wall thermostat",
        (0.09, 0.02, 0.09),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
            m.b(0, m.d / 2, 0.06, 0.005, 0.015, 0.06, "#2b3446", screen=True),
        ],
        mount="wall",
        wall_y=1.4,
        electric=True,
        climate=True,
    )
    S(
        "dehumidifier",
        "Luftentfeuchter",
        "Dehumidifier",
        (0.35, 0.25, 0.6),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.03, 0.57, "white", edges="faint"),
            m.b(0, m.d / 2, 0.2, 0.01, 0.45, 0.04, "#2b3446", screen=True),
            m.b(0, m.d / 2, 0.25, 0.01, 0.1, 0.25, "#cfd6e2"),
            *m.legs(0.03, 0.04, 0.03, "dark"),
        ],
        electric=True,
    )
    S(
        "ceiling_fan",
        "Deckenventilator",
        "Ceiling fan",
        (1.3, 1.3, 0.4),
        lambda m: [
            m.c(0, 0, 0.06, 0.06, 0.15, 0.25, "metal"),
            m.c(0, 0, 0.18, 0.18, 0.05, 0.12, "dark"),
            *[
                m.b(
                    0.35 * math_x,
                    0.35 * math_z,
                    0.5 if math_z == 0 else 0.12,
                    0.12 if math_z == 0 else 0.5,
                    0.04,
                    0.012,
                    "wood",
                )
                for math_x, math_z in ((1, 0), (-1, 0), (0, 1), (0, -1))
            ],
        ],
        mount="ceiling",
        electric=True,
    )
    S(
        "ceiling_fan_light",
        "Deckenventilator mit Licht",
        "Ceiling fan with light",
        (1.3, 1.3, 0.45),
        lambda m: [
            m.c(0, 0, 0.06, 0.06, 0.2, 0.25, "metal"),
            m.c(0, 0, 0.18, 0.18, 0.1, 0.12, "dark"),
            m.c(0, 0, 0.2, 0.2, 0.04, 0.06, "#ffe7b0", glow=True),
            *[
                m.b(
                    0.35 * math_x,
                    0.35 * math_z,
                    0.5 if math_z == 0 else 0.12,
                    0.12 if math_z == 0 else 0.5,
                    0.1,
                    0.012,
                    "wood",
                )
                for math_x, math_z in ((1, 0), (-1, 0), (0, 1), (0, -1))
            ],
        ],
        mount="ceiling",
        electric=True,
        light="ceiling",
    )

    # ================================================================ utility and building services
    util = []
    U = lambda *a, **k: util.append(W(*a, **k))  # noqa: E731
    U(
        "gas_boiler",
        "Gas-Brennwertkessel",
        "Gas condensing boiler",
        (0.6, 0.45, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "white", edges="faint"),
            m.b(0, m.d / 2, 0.3, 0.01, 0.6, 0.12, "#2b3446", screen=True),
            m.c(-0.15, -0.1, 0.05, 0.05, 0.0, 0.08, "metal"),
            m.c(0.0, -0.1, 0.05, 0.05, 0.0, 0.08, "metal"),
        ],
        electric=True,
    )
    U(
        "heat_pump_tower",
        "Wärmepumpe Innengerät (Hydrotower)",
        "Heat pump indoor unit (hydro tower)",
        (0.6, 0.65, 1.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "white", edges="faint"),
            m.b(0, m.d / 2, 0.3, 0.01, 1.5, 0.12, "#2b3446", screen=True),
            m.b(0, m.d / 2, m.w - 0.04, 0.01, 0.05, 1.2, "#e8ecf2"),
        ],
        electric=True,
    )
    U(
        "buffer_tank",
        "Pufferspeicher",
        "Buffer tank",
        (0.8, 0.8, 1.9),
        lambda m: [
            m.c(0, 0, 0.8, 0.8, 0.1, 1.75, "#c0392b", edges="faint"),
            m.c(0, 0, 0.5, 0.5, 0.0, 0.1, "dark"),
            m.c(0, 0, 0.7, 0.7, 1.85, 0.05, "#8a8f9a"),
            *[m.c(0.35, 0, 0.06, 0.06, 0.3 + 0.4 * i, 0.06, "metal") for i in range(4)],
        ],
    )
    U(
        "heating_manifold",
        "Fußbodenheizungsverteiler",
        "Underfloor heating manifold",
        (0.6, 0.12, 0.5),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "#cfd6e2", edges="faint"),
            m.c(0, 0, 0.5, 0.03, 0.25, 0.03, "#c0392b", axis="x"),
            m.c(0, 0, 0.5, 0.03, 0.15, 0.03, "#2e86c1", axis="x"),
            *[m.c(-0.2 + 0.07 * i, 0.06, 0.02, 0.02, 0.1, 0.2, "metal") for i in range(6)],
        ],
        mount="wall",
        wall_y=1.0,
    )
    U(
        "ventilation_unit",
        "Lüftungsgerät mit Wärmerückgewinnung",
        "Ventilation unit with heat recovery",
        (0.7, 0.5, 0.8),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "white", edges="faint"),
            m.b(0, m.d / 2, 0.3, 0.01, 0.55, 0.1, "#2b3446", screen=True),
            *[m.c(-0.2 + 0.13 * i, -0.0, 0.1, 0.1, m.h - 0.001, 0.12, "metal") for i in range(4)],
        ],
        mount="wall",
        wall_y=1.2,
        electric=True,
    )
    U(
        "radiator_tall",
        "Designheizkörper hoch",
        "Tall designer radiator",
        (0.5, 0.08, 1.8),
        lambda m: [
            *[m.b(-0.22 + 0.075 * i, 0, 0.04, 0.06, 0.0, m.h, "#e8ecf2") for i in range(7)],
            m.b(0, 0, m.w, 0.05, 0.03, 0.03, "metal"),
            m.b(0, 0, m.w, 0.05, m.h - 0.06, 0.03, "metal"),
        ],
        mount="wall",
        wall_y=0.15,
        electric=True,
    )
    U(
        "meter_cabinet",
        "Zählerschrank",
        "Meter cabinet",
        (0.75, 0.2, 1.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "#cfd6e2", edges="faint"),
            *[m.b(-0.18 + 0.18 * i, m.d / 2, 0.14, 0.01, 0.7, 0.35, "#2b3446", screen=True) for i in range(3)],
            m.b(0, m.d / 2, 0.65, 0.01, 0.1, 0.45, "#bcc4d0"),
        ],
        mount="wall",
        wall_y=0.5,
        electric=True,
    )
    U(
        "water_softener",
        "Wasserenthärter",
        "Water softener",
        (0.35, 0.5, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "#2e86c1", edges="faint"),
            m.b(0, m.d / 2, 0.2, 0.01, 0.65, 0.1, "#2b3446", screen=True),
            m.c(0, 0, 0.3, 0.3, m.h - 0.001, 0.001, "white"),
        ],
        electric=True,
    )
    U(
        "water_pump",
        "Hauswasserwerk",
        "Domestic water pump",
        (0.5, 0.35, 0.6),
        lambda m: [
            m.c(-0.1, 0, 0.3, 0.3, 0.2, 0.4, "#2e86c1"),
            m.b(0.15, 0.0, 0.2, 0.25, 0.0, 0.25, "#cfd6e2", edges="faint"),
            m.b(0, 0, m.w, m.d, 0.0, 0.05, "dark"),
        ],
        electric=True,
    )
    U(
        "drip_tray",
        "Auffangwanne mit Leckagesensor",
        "Drip tray with leak sensor",
        (0.7, 0.5, 0.08),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.07, "#8a8f9a", edges="faint"),
            m.b(0, 0, m.w - 0.06, m.d - 0.06, 0.04, 0.03, "#6a6f7a"),
            m.b(0.3, 0.2, 0.04, 0.04, 0.05, 0.02, "#2e86c1", glow=True),
        ],
        electric=True,
    )
    U(
        "chest_freezer",
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
    U(
        "ironing_station",
        "Dampfbügelstation",
        "Steam ironing station",
        (1.2, 0.4, 1.0),
        lambda m: [
            m.b(0, 0, 1.2, 0.35, 0.82, 0.04, "#cfd6e2"),
            *[m.b(sx * 0.5, 0, 0.03, 0.3, 0.0, 0.82, "metal", rot=0) for sx in (-1, 1)],
            m.b(0.5, 0, 0.25, 0.22, 0.86, 0.18, "#2e86c1"),
            m.l(0.2, 0, 0.25, 0.1, 0.86, 0.06, "metal", tw=0.12),
        ],
        electric=True,
    )
    U(
        "drying_rack",
        "Wäscheständer",
        "Clothes drying rack",
        (1.6, 0.6, 1.1),
        lambda m: [
            *[m.b(sx * 0.75, sz * 0.25, 0.02, 0.02, 0.0, 1.0, "metal") for sx in (-1, 1) for sz in (-1, 1)],
            *[m.b(0, -0.25 + 0.1 * i, 1.5, 0.012, 1.0, 0.012, "metal") for i in range(6)],
            *[
                m.b(-0.5 + 0.35 * i, -0.2, 0.18, 0.012, 0.55, 0.45, ("#7aa6c9", "#e8ecf2", "#c0562e", "#6b8a5a")[i % 4])
                for i in range(4)
            ],
        ],
    )
    U(
        "rotary_line",
        "Wäschespinne",
        "Rotary washing line",
        (1.8, 1.8, 1.8),
        lambda m: [
            m.c(0, 0, 0.05, 0.05, 0.0, 1.6, "metal"),
            *[m.l(0, 0, 1.7, 0.03, 1.5, 0.2, "metal", tz=0.0, tw=0.03, rot=45 * i) for i in range(4)],
            *[m.c(0, 0, 1.6, 1.6, 1.6, 0.01, "#bcc4d0")],
        ],
    )
    U(
        "pantry_shelf_util",
        "Vorratsregal",
        "Pantry shelf",
        (0.9, 0.35, 2.0),
        lambda m: [
            *[m.b(sx * 0.44, 0, 0.03, m.d, 0, m.h, "white") for sx in (-1, 1)],
            *[m.b(0, 0, m.w - 0.04, m.d, 0.3 * i, 0.025, "white") for i in range(7)],
            *[m.b(-0.25 + 0.25 * (i % 3), 0, 0.14, 0.14, 0.3 * (i // 3 + 1) + 0.025, 0.2, "#c9a46a") for i in range(9)],
        ],
    )
    U(
        "utility_sink",
        "Ausgussbecken",
        "Utility sink",
        (0.6, 0.5, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.8, "white", edges="faint"),
            m.b(0, 0, 0.5, 0.4, 0.8, 0.1, "#cfd6e2"),
            m.c(0, -0.18, 0.04, 0.04, 0.9, 0.2, "metal"),
            m.b(0, -0.1, 0.02, 0.18, 1.08, 0.02, "metal"),
        ],
    )
    U(
        "laundry_basket_util",
        "Wäschekorb",
        "Laundry basket",
        (0.45, 0.35, 0.55),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.5, "#c9a46a", edges="faint"),
            m.b(0, 0, m.w + 0.02, m.d + 0.02, 0.5, 0.03, "#a07c4a"),
        ],
    )
    U(
        "vacuum_station",
        "Akku-Staubsauger-Station",
        "Cordless vacuum station",
        (0.3, 0.3, 1.2),
        lambda m: [
            m.b(0, -0.1, 0.3, 0.1, 0.0, 1.2, "#cfd6e2", edges="faint"),
            m.c(0, 0.0, 0.1, 0.1, 0.5, 0.65, "#7a4a9a"),
            m.b(0, 0.0, 0.2, 0.1, 0.1, 0.1, "dark"),
            m.b(0, -0.04, 0.04, 0.01, 1.05, 0.02, "#27ae60", glow=True),
        ],
        electric=True,
        mount="wall",
        wall_y=0.1,
    )

    return [
        (
            "nextfloor.a_kino",
            "Heimkino & Hi-Fi",
            "Leinwand, Beamer, Lautsprecher, Soundbars, Smart Speaker und Displays, Kinosessel und Akustik",
            cine,
        ),
        (
            "nextfloor.a_smart",
            "Smart Home & Technik",
            "Wallbox, Speicher, Wechselrichter, Netzwerk, smarte Leuchten, Melder und Ventilatoren",
            smart,
        ),
        (
            "nextfloor.a_haustechnik",
            "Hauswirtschaft & Haustechnik",
            "Heizung, Wärmepumpe, Speicher, Lüftung, Zählerschrank, Wasserenthärter und Hauswirtschaftsraum",
            util,
        ),
    ]

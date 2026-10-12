"""Packs Kinderzimmer (kids' room), Büro & Gaming (office and gaming), Fitness and Haustiere (pets)."""

from area_common import make

SCREEN = "dark"


def build(bp):
    W = lambda *a, **k: make(bp, *a, **k)  # noqa: E731

    # ================================================================ kids' room
    kids = []
    K = lambda *a, **k: kids.append(W(*a, **k))  # noqa: E731
    K(
        "loft_bed_slide",
        "Hochbett mit Rutsche",
        "Loft bed with slide",
        (2.6, 1.0, 1.7),
        lambda m: [
            *[m.b(sx * 0.48 - 0.6, sz * 0.46, 0.06, 0.06, 0, 1.6, "wood") for sx in (-1, 1) for sz in (-1, 1)],
            m.b(-0.6, 0, 1.0, 0.95, 1.2, 0.2, "wood"),
            m.b(-0.6, 0, 0.92, 0.88, 1.4, 0.12, "white"),
            m.b(-0.6, 0.46, 1.0, 0.03, 1.4, 0.3, "wood"),
            m.l(0.7, 0.2, 0.5, 0.9, 0.0, 1.4, "#e8a33a", tx=0.0, tz=0.0, tw=0.5, td=0.1),
            m.b(-0.1, 0.0, 0.04, 0.7, 0.0, 1.35, "wood"),
        ],
    )
    K(
        "teepee",
        "Tipi-Zelt",
        "Teepee tent",
        (1.2, 1.2, 1.5),
        lambda m: [
            m.l(0, 0, 1.2, 1.2, 0, 1.4, "#e8dcc4", tw=0.05, td=0.05),
            m.b(0, m.d / 2 - 0.05, 0.4, 0.02, 0.0, 0.9, "dark"),
        ],
    )
    K(
        "play_kitchen",
        "Spielküche",
        "Play kitchen",
        (0.9, 0.4, 1.0),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.55, "#e8ecf2", edges="faint"),
            m.b(0, -0.1, m.w, 0.2, 0.55, 0.45, "#7aa6c9"),
            m.b(-0.25, 0.05, 0.3, 0.2, 0.55, 0.01, "dark"),
            m.b(0.2, 0.0, 0.3, 0.25, 0.5, 0.05, "#b8c0cc"),
            m.b(0.25, m.d / 2, 0.3, 0.01, 0.1, 0.35, "glass"),
        ],
        surface=True,
    )
    K(
        "kids_desk",
        "Kinderschreibtisch",
        "Kids desk",
        (1.1, 0.6, 0.76),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.7, 0.04, "wood", edges="faint"),
            *m.legs(0.04, 0.04, 0.7, "white"),
            m.b(0.35, 0, 0.35, 0.5, 0.25, 0.4, "white"),
        ],
        surface=True,
    )
    K(
        "toy_shelf",
        "Spielzeugregal mit Boxen",
        "Toy shelf with bins",
        (0.8, 0.35, 0.8),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
            *[
                m.b(x, m.d / 2, 0.22, 0.012, 0.05 + 0.38 * r, 0.3, c)
                for x in (-0.25, 0, 0.25)
                for r, c in ((0, "#e8a33a"), (1, "#5aa0c8"))
            ],
        ],
    )
    K(
        "cosy_corner",
        "Kuschelecke",
        "Cosy corner",
        (1.4, 1.4, 0.5),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.04, "#d8c8b0"),
            m.b(0, -0.55, 1.3, 0.2, 0.04, 0.4, "#7aa6c9"),
            m.b(-0.55, 0, 0.2, 1.0, 0.04, 0.4, "#7aa6c9"),
            *[
                m.c(x, z, 0.35, 0.35, 0.04, 0.12, c)
                for x, z, c in ((0.1, 0.1, "#e8a33a"), (0.4, 0.3, "#c0562e"), (-0.1, 0.4, "#6b8a7a"))
            ],
        ],
    )
    K(
        "rocking_horse",
        "Schaukelpferd",
        "Rocking horse",
        (0.35, 0.9, 0.8),
        lambda m: [
            *[m.b(sx * 0.14, 0, 0.03, 0.9, 0.0, 0.06, "wood") for sx in (-1, 1)],
            m.b(0, 0.0, 0.2, 0.55, 0.3, 0.25, "#c9a46a"),
            m.b(0, 0.32, 0.12, 0.2, 0.5, 0.3, "#c9a46a"),
            m.b(0, 0.4, 0.1, 0.12, 0.7, 0.1, "#c9a46a"),
            *[m.b(sx * 0.1, sz * 0.18, 0.03, 0.03, 0.05, 0.28, "wood") for sx in (-1, 1) for sz in (-1, 1)],
        ],
    )
    K(
        "play_mat_road",
        "Straßen-Spielteppich",
        "Road play mat",
        (1.6, 1.2, 0.01),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 1.0, "#6b8a5a"),
            m.b(0, 0.0, m.w, 0.25, 0.0, 1.0, "#4a4f5a"),
            m.b(0.4, 0, 0.25, m.d, 0.0, 1.0, "#4a4f5a"),
            *[m.b(-0.7 + 0.2 * i, 0, 0.08, 0.02, 0.0, 1.0, "#e8ecf2") for i in range(7)],
        ],
    )
    K(
        "kids_table_2",
        "Kindertisch mit 2 Stühlen",
        "Kids table with 2 chairs",
        (0.9, 0.6, 0.5),
        lambda m: [
            m.b(0, 0, 0.6, 0.5, 0.42, 0.03, "wood"),
            *[m.b(sx * 0.26, sz * 0.2, 0.03, 0.03, 0, 0.42, "wood") for sx in (-1, 1) for sz in (-1, 1)],
            *[m.b(x, 0, 0.22, 0.22, 0.22, 0.03, "#e8a33a") for x in (-0.38, 0.38)],
            *[m.b(x * 1.05, 0, 0.02, 0.22, 0.25, 0.22, "#e8a33a") for x in (-0.4, 0.4)],
        ],
        surface=True,
    )
    K(
        "moon_light",
        "Mond-Nachtlicht",
        "Moon night light",
        (0.25, 0.1, 0.25),
        lambda m: [m.c(0, 0, 0.25, 0.1, 0, 0.25, "#ffe7b0", glow=True, axis="z")],
        electric=True,
        light="table",
        mount="wall",
        wall_y=1.2,
    )
    K(
        "ball_pit",
        "Bällebad",
        "Ball pit",
        (1.2, 1.2, 0.45),
        lambda m: [
            m.c(0, 0, 1.2, 1.2, 0, 0.4, "#7aa6c9", edges="faint"),
            m.c(0, 0, 1.0, 1.0, 0.35, 0.06, "#e8a33a"),
            *[
                m.c(
                    0.3 * ((i * 7) % 5 - 2) / 2,
                    0.3 * ((i * 3) % 5 - 2) / 2,
                    0.14,
                    0.14,
                    0.4,
                    0.14,
                    ("#c0392b", "#2e86c1", "#27ae60", "#f1c40f")[i % 4],
                )
                for i in range(8)
            ],
        ],
    )
    K(
        "house_bed",
        "Hausbett",
        "House bed",
        (1.0, 2.0, 1.5),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.1, 0.25, "wood"),
            m.b(0, 0.05, 0.9, 1.9, 0.35, 0.2, "white"),
            *[m.b(sx * 0.48, sz * 0.96, 0.05, 0.05, 0, 1.2, "wood") for sx in (-1, 1) for sz in (-1, 1)],
            m.l(0, 0.96, 1.0, 0.05, 1.2, 0.3, "wood", tw=0.05),
            m.l(0, -0.96, 1.0, 0.05, 1.2, 0.3, "wood", tw=0.05),
        ],
    )
    K(
        "baby_monitor",
        "Babyphone mit Kamera",
        "Baby monitor with camera",
        (0.1, 0.1, 0.15),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.12, "white", edges="faint"),
            m.c(0, m.d / 2 - 0.02, 0.05, 0.03, 0.06, 0.05, "dark", axis="z"),
            m.b(0, 0, 0.04, 0.04, 0.12, 0.03, "white"),
        ],
        electric=True,
        mount="surface",
    )
    K(
        "star_projector",
        "Sternenprojektor",
        "Star projector",
        (0.2, 0.2, 0.2),
        lambda m: [m.c(0, 0, 0.2, 0.2, 0, 0.12, "#2b3f66"), m.c(0, 0, 0.14, 0.14, 0.12, 0.08, "#ffe7b0", glow=True)],
        electric=True,
        light="table",
        mount="surface",
    )
    K(
        "kids_cot",
        "Babybett",
        "Baby cot",
        (0.7, 1.3, 0.9),
        lambda m: [
            m.b(0, 0, 0.64, 1.24, 0.2, 0.04, "wood"),
            *[
                m.b(s * 0.32, z, 0.02, 0.02, 0.2, 0.65, "wood")
                for s in (-1, 1)
                for z in [-0.6 + 0.1 * i for i in range(13)]
            ],
            *[m.b(0, s * 0.62, 0.64, 0.03, 0.2, 0.65, "wood") for s in (-1, 1)],
            *m.legs(0.03, 0.05, 0.2, "wood"),
        ],
    )
    K(
        "kids_changing_table",
        "Wickeltisch",
        "Changing table",
        (0.9, 0.75, 1.0),
        lambda m: [
            m.b(0, 0.1, m.w, 0.55, 0.0, 0.8, "white", edges="faint"),
            m.b(0, 0, 0.85, 0.7, 0.8, 0.06, "#cfd6e2"),
            *[m.b(sx * 0.4, 0, 0.03, 0.7, 0.86, 0.12, "white") for sx in (-1, 1)],
            m.b(0, -0.34, 0.85, 0.03, 0.86, 0.12, "white"),
        ],
    )
    K(
        "kids_wardrobe",
        "Kinderkleiderschrank",
        "Children's wardrobe",
        (0.9, 0.5, 1.6),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
            *[m.b(x, m.d / 2, 0.43, 0.012, 0.04, 1.52, "#cfe6f5") for x in (-0.22, 0.22)],
            *[m.b(x, m.d / 2 + 0.012, 0.015, 0.012, 0.7, 0.14, "metal") for x in (-0.04, 0.04)],
        ],
    )
    K(
        "toy_boxes_3",
        "Spielzeugkisten (3er-Set)",
        "Toy boxes (3)",
        (1.4, 0.4, 0.4),
        lambda m: [
            *[
                m.b(x, 0, 0.42, 0.36, 0.0, 0.35, c, edges="faint")
                for x, c in ((-0.45, "#e8a33a"), (0, "#5aa0c8"), (0.45, "#6b8a7a"))
            ],
            *[m.b(x, 0, 0.44, 0.38, 0.35, 0.03, "white") for x in (-0.45, 0, 0.45)],
        ],
    )

    # ================================================================ office and gaming
    office = []
    O = lambda *a, **k: office.append(W(*a, **k))  # noqa: E731

    def monitor(m, x, z, w=0.55, h=0.32, y=0.78, tilt=0.0):
        return [
            m.b(x, z, w, 0.03, y, h, SCREEN, screen=True),
            m.b(x, z - 0.03, 0.06, 0.1, 0.74, 0.1, "metal"),
            m.b(x, z - 0.02, 0.22, 0.14, 0.72, 0.015, "metal"),
        ]

    def desk(m, drawers=False, top="wood"):
        p = [m.b(0, 0, m.w, m.d, 0.72, 0.04, top, edges="faint")]
        p += [m.b(sx * (m.w / 2 - 0.05), 0, 0.04, m.d - 0.1, 0, 0.72, "metal") for sx in (-1, 1)]
        p.append(m.b(0, -m.d / 2 + 0.05, m.w - 0.1, 0.02, 0.35, 0.3, "dark"))
        return p

    O(
        "desk_standing",
        "Stehschreibtisch",
        "Standing desk",
        (1.6, 0.8, 1.2),
        lambda m: [
            *desk(m)[:1],
            *[m.b(sx * (m.w / 2 - 0.1), 0, 0.06, 0.6, 0, 0.72, "metal") for sx in (-1, 1)],
            m.b(0, -0.35, m.w - 0.2, 0.04, 0.05, 0.05, "metal"),
            *monitor(m, 0, -0.2, 0.7, 0.4, 0.78),
        ],
        electric=True,
        surface=True,
    )
    O(
        "desk_standing_bare",
        "Stehschreibtisch ohne Monitor",
        "Standing desk without monitor",
        (1.6, 0.8, 1.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.72, 0.04, "wood", edges="faint"),
            *[m.b(sx * (m.w / 2 - 0.1), 0, 0.06, 0.6, 0, 0.72, "metal") for sx in (-1, 1)],
            m.b(0, -0.35, m.w - 0.2, 0.04, 0.05, 0.05, "metal"),
        ],
        electric=True,
        surface=True,
    )

    def chair(id_, de, en, color, tall=True, racing=False):
        def fn(m):
            p = [
                m.c(0, 0, 0.6, 0.6, 0, 0.06, "metal"),
                m.c(0, 0, 0.06, 0.06, 0.06, 0.38, "metal"),
                m.b(0, 0.04, 0.5, 0.5, 0.44, 0.1, color),
                m.b(0, -0.24, 0.5, 0.08, 0.5, 0.45 if not racing else 0.58, color),
            ]
            if racing:
                p += [
                    m.b(0, -0.25, 0.3, 0.08, 1.05, 0.2, color),
                    *[m.b(s * 0.3, 0.0, 0.06, 0.3, 0.6, 0.05, "dark") for s in (-1, 1)],
                ]
            else:
                p += [*[m.b(s * 0.27, 0.0, 0.04, 0.3, 0.62, 0.04, "dark") for s in (-1, 1)]]
            return p

        O(id_, de, en, (0.65, 0.65, 1.3 if racing else 1.1), fn)

    chair("chair_gaming", "Gaming-Stuhl", "Gaming chair", "#c0392b", racing=True)
    chair("chair_office", "Ergonomischer Bürostuhl", "Ergonomic office chair", "#3a3f4a")

    O(
        "sim_cockpit",
        "Sim-Racing-Cockpit",
        "Sim racing cockpit",
        (0.7, 1.5, 1.2),
        lambda m: [
            m.b(0, 0.0, 0.05, 1.4, 0.0, 0.05, "metal"),
            *[m.b(sx * 0.3, 0, 0.05, 1.4, 0.0, 0.05, "metal") for sx in (-1, 1)],
            m.b(0, 0.4, 0.5, 0.5, 0.28, 0.1, "#c0392b"),
            m.b(0, 0.62, 0.5, 0.1, 0.32, 0.5, "#c0392b"),
            m.c(0, -0.35, 0.3, 0.3, 0.7, 0.03, "dark", axis="z"),
            m.b(0, -0.55, 0.5, 0.35, 0.55, 0.3, "dark", screen=True),
            m.b(0, -0.2, 0.3, 0.1, 0.0, 0.3, "metal"),
        ],
        electric=True,
    )
    O(
        "server_rack_42u",
        "Serverschrank (42 HE)",
        "Server rack (42U)",
        (0.6, 1.0, 2.0),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "dark", edges="faint"),
            m.b(0, m.d / 2 + 0.005, m.w - 0.06, 0.012, 0.05, m.h - 0.1, "glass"),
            *[m.b(0, m.d / 2 - 0.02, m.w - 0.12, 0.02, 0.1 + 0.15 * i, 0.12, "#2a303c") for i in range(12)],
            *[m.b(0.2, m.d / 2 - 0.005, 0.02, 0.01, 0.14 + 0.15 * i, 0.02, "#27ae60", glow=True) for i in range(12)],
        ],
        electric=True,
    )
    O(
        "filing_cabinet",
        "Aktenschrank",
        "Filing cabinet",
        (0.45, 0.6, 1.3),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#8a96a8", edges="faint"),
            *[m.b(0, m.d / 2, m.w - 0.04, 0.012, 0.05 + 0.31 * i, 0.28, "#a6b0c0") for i in range(4)],
            *[m.b(0, m.d / 2 + 0.01, 0.15, 0.012, 0.2 + 0.31 * i, 0.02, "metal") for i in range(4)],
        ],
    )
    O(
        "whiteboard",
        "Whiteboard",
        "Whiteboard",
        (1.5, 0.04, 1.0),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "metal", edges="faint"),
            m.b(0, 0.01, m.w - 0.06, 0.012, 0.03, m.h - 0.06, "white"),
        ],
        mount="wall",
        wall_y=0.9,
    )
    O(
        "triple_monitor",
        "Dreifach-Monitor-Setup",
        "Triple monitor setup",
        (1.8, 0.3, 0.55),
        lambda m: [
            m.b(0, -0.05, 0.6, 0.03, 0.15, 0.36, SCREEN, screen=True),
            m.b(-0.6, 0.0, 0.6, 0.03, 0.15, 0.36, SCREEN, screen=True, rot=25),
            m.b(0.6, 0.0, 0.6, 0.03, 0.15, 0.36, SCREEN, screen=True, rot=-25),
            *[m.b(x, -0.08, 0.06, 0.08, 0.0, 0.15, "metal") for x in (-0.6, 0, 0.6)],
        ],
        electric=True,
        mount="surface",
    )
    O(
        "bookcase_wall",
        "Bücherwand",
        "Bookcase wall",
        (3.0, 0.35, 2.4),
        lambda m: [
            *[m.b(x, 0, 0.03, m.d, 0, m.h, "wood") for x in (-1.5, -0.5, 0.5, 1.5)],
            *[m.b(0, 0, m.w, m.d, 0.4 * i, 0.03, "wood") for i in range(7)],
            *[
                m.b(
                    -1.3 + 0.1 * j + 0.02 * (i % 3),
                    0,
                    0.07,
                    0.25,
                    0.4 * i + 0.03,
                    0.3 + 0.03 * (j % 3),
                    ("#8a3a2a", "#2b3f66", "#6b8a5a", "#c9a46a")[(i + j) % 4],
                )
                for i in range(1, 6)
                for j in range(6)
            ],
        ],
    )
    O(
        "desk_lamp",
        "Schreibtischlampe",
        "Desk lamp",
        (0.25, 0.3, 0.5),
        lambda m: [
            m.c(-0.05, 0.05, 0.14, 0.14, 0.0, 0.02, "dark"),
            m.b(-0.05, 0.05, 0.02, 0.02, 0.02, 0.3, "metal"),
            m.l(0.02, 0.0, 0.2, 0.06, 0.34, 0.14, "#ffe7b0", glow=True, tx=0.0),
        ],
        electric=True,
        light="table",
        mount="surface",
    )
    O(
        "desk_lamp_led",
        "LED-Schreibtischlampe",
        "LED desk lamp",
        (0.5, 0.2, 0.45),
        lambda m: [
            m.b(-0.15, 0, 0.12, 0.12, 0.0, 0.02, "dark"),
            m.b(-0.15, 0, 0.02, 0.02, 0.02, 0.4, "metal"),
            m.b(0.05, 0, 0.4, 0.04, 0.4, 0.02, "dark"),
            m.b(0.05, 0, 0.38, 0.03, 0.398, 0.002, "#cfe6ff", glow=True),
        ],
        electric=True,
        light="table",
        mount="surface",
    )
    O(
        "arcade_cabinet",
        "Arcade-Automat",
        "Arcade cabinet",
        (0.7, 0.9, 1.8),
        lambda m: [
            m.b(0, 0.0, m.w, 0.7, 0.0, 1.8, "#2a303c", edges="faint"),
            m.b(0, 0.2, 0.55, 0.05, 1.0, 0.45, SCREEN, screen=True),
            m.b(0, 0.42, 0.6, 0.35, 0.82, 0.05, "#c0392b"),
            m.c(-0.12, 0.42, 0.06, 0.06, 0.87, 0.08, "dark"),
            *[
                m.c(0.08 + 0.07 * i, 0.44, 0.05, 0.05, 0.87, 0.02, ("#f1c40f", "#2e86c1", "#27ae60")[i])
                for i in range(3)
            ],
            m.b(0, 0.05, 0.6, 0.1, 1.6, 0.18, "#ffe7b0", glow=True),
        ],
        electric=True,
        light="strip",
    )
    O(
        "office_lounge_sofa",
        "Büro-Lounge-Sofa",
        "Office lounge sofa",
        (2.0, 0.9, 0.8),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.1, 0.3, "#3a5a6a"),
            m.b(0, -0.36, m.w, 0.18, 0.1, 0.7, "#3a5a6a"),
            *[m.b(s * 0.94, 0, 0.12, m.d, 0.1, 0.5, "#3a5a6a") for s in (-1, 1)],
            *[m.b(x, 0.05, 0.85, 0.6, 0.4, 0.1, "#4a6a7a") for x in (-0.45, 0.45)],
            *m.legs(0.06, 0.05, 0.1, "dark"),
        ],
    )
    O(
        "monitor_light_bar",
        "Monitor mit Lichtleiste",
        "Monitor with light bar",
        (0.7, 0.25, 0.55),
        lambda m: [
            *monitor(m, 0, 0, 0.65, 0.38, 0.12),
            m.b(0, 0.0, 0.4, 0.04, 0.5, 0.025, "dark"),
            m.b(0, 0.02, 0.38, 0.02, 0.499, 0.002, "#ffe7b0", glow=True),
        ],
        electric=True,
        light="table",
        mount="surface",
    )
    O(
        "printer_laser",
        "Laserdrucker",
        "Laser printer",
        (0.42, 0.4, 0.3),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.2, "#cfd6e2", edges="faint"),
            m.b(0, 0, m.w - 0.04, m.d - 0.04, 0.2, 0.08, "#bcc4d0"),
            m.b(0, m.d / 2, 0.3, 0.01, 0.04, 0.03, "dark"),
            m.b(0.14, m.d / 2 + 0.005, 0.04, 0.01, 0.15, 0.02, "#7fd0ff", glow=True),
        ],
        electric=True,
        mount="surface",
    )
    O(
        "wifi_router",
        "WLAN-Router",
        "Wi-Fi router",
        (0.2, 0.15, 0.18),
        lambda m: [
            m.b(0, 0, 0.18, 0.12, 0.0, 0.04, "white", edges="faint"),
            *[m.b(sx * 0.07, -0.04, 0.01, 0.01, 0.04, 0.14, "dark") for sx in (-1, 0, 1)],
            m.b(0, 0.06, 0.04, 0.005, 0.02, 0.01, "#27ae60", glow=True),
        ],
        electric=True,
        mount="surface",
    )
    O(
        "phone_booth",
        "Telefonbox",
        "Phone booth",
        (1.0, 1.0, 2.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.05, "dark"),
            *[m.b(sx * 0.48, sz * 0.48, 0.04, 0.04, 0.05, 2.1, "dark") for sx in (-1, 1) for sz in (-1, 1)],
            m.b(0, 0.49, 0.9, 0.012, 0.05, 2.1, "glass"),
            m.b(0.49, 0, 0.012, 0.95, 0.05, 2.1, "glass"),
            m.b(-0.49, 0, 0.012, 0.95, 0.05, 2.1, "glass"),
            m.b(0, -0.49, 0.9, 0.04, 0.05, 2.1, "#5a6a7a"),
            m.b(0, 0, 1.0, 1.0, 2.15, 0.05, "dark"),
            m.b(0, -0.3, 0.6, 0.35, 0.72, 0.03, "wood"),
            m.b(0, 0, 0.9, 0.9, 2.14, 0.005, "#ffe7b0", glow=True),
        ],
        electric=True,
        light="ceiling",
    )

    def printer3d(id_, de, en, size, kind):
        def fn(m):
            p = []
            if kind in ("cube", "multi", "large"):
                p += [
                    m.b(0, 0, m.w, m.d, 0, m.h, "#2a303c", edges="faint"),
                    m.b(0, m.d / 2, m.w - 0.04, 0.012, 0.04, m.h - 0.08, "glass"),
                    m.b(0, 0, m.w - 0.06, m.d - 0.06, 0.04, 0.012, "#cfd6e2"),
                ]
                if kind == "multi":
                    p.append(m.b(m.w / 2 - 0.04, 0.0, 0.06, 0.2, m.h * 0.2, m.h * 0.5, "#c0562e"))
                if kind == "large":
                    p += [
                        m.b(-m.w * 0.15, 0, 0.04, 0.04, m.h * 0.6, 0.05, "#c0392b"),
                        m.b(m.w * 0.15, 0, 0.04, 0.04, m.h * 0.6, 0.05, "#2e86c1"),
                    ]
            elif kind == "open":
                p += [
                    m.b(0, 0, m.w, m.d, 0, 0.03, "#2a303c"),
                    *[m.b(sx * (m.w / 2 - 0.02), 0, 0.03, 0.03, 0, m.h, "metal") for sx in (-1, 1)],
                    m.b(0, 0, m.w, 0.03, m.h - 0.03, 0.03, "metal"),
                    m.b(0, 0, m.w - 0.1, m.d - 0.1, 0.05, 0.012, "#cfd6e2"),
                    m.b(0, 0, 0.06, 0.06, m.h * 0.5, 0.06, "#c0392b"),
                ]
            else:  # resin
                p += [
                    m.b(0, 0, m.w, m.d, 0, m.h * 0.4, "#2a303c", edges="faint"),
                    m.b(0, 0, m.w, m.d, m.h * 0.4, m.h * 0.6, "#f4a53a"),
                    m.b(0, m.d / 2, m.w - 0.04, 0.012, m.h * 0.42, m.h * 0.55, "glass"),
                ]
            return p

        O(id_, de, en, size, fn, electric=True, mount="surface")

    printer3d("printer_3d", "3D-Drucker", "3D printer", (0.45, 0.45, 0.45), "open")
    printer3d("printer_cube", "Geschlossener Würfel-3D-Drucker", "Enclosed cube 3D printer", (0.4, 0.4, 0.4), "cube")
    printer3d(
        "printer_multi",
        "Würfel-3D-Drucker mit Mehrfarbeinheit",
        "Cube 3D printer with multi-colour unit",
        (0.5, 0.4, 0.4),
        "multi",
    )
    printer3d(
        "printer_large", "Großer 3D-Drucker mit Doppeldüse", "Large dual-nozzle 3D printer", (0.6, 0.6, 0.65), "large"
    )
    printer3d("printer_open", "Kompakter offener 3D-Drucker", "Compact open 3D printer", (0.35, 0.35, 0.4), "open")
    printer3d("printer_resin", "Resin-3D-Drucker", "Resin 3D printer", (0.3, 0.3, 0.45), "resin")
    O(
        "filament_dryer",
        "Filamenttrockner",
        "Filament dryer",
        (0.3, 0.3, 0.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
            m.c(0, 0, 0.22, 0.22, m.h - 0.001, 0.001, "dark"),
            m.b(0.1, m.d / 2, 0.06, 0.01, 0.08, 0.04, "#ff7a1a", glow=True),
        ],
        electric=True,
        mount="surface",
    )
    O(
        "filament_rack",
        "Filament-Wandregal",
        "Filament wall rack",
        (0.8, 0.2, 0.5),
        lambda m: [
            m.b(0, -0.08, m.w, 0.03, 0, m.h, "wood"),
            *[m.c(x, 0.0, 0.015, 0.015, 0.1 + 0.2 * r, 0.0 + 0.15, "metal") for x in (-0.3, 0, 0.3) for r in (0, 1)],
            *[
                m.c(x, 0.04, 0.2, 0.06, 0.05 + 0.2 * r, 0.2, c, axis="z")
                for x, c in ((-0.3, "#c0392b"), (0, "#2e86c1"), (0.3, "#27ae60"))
                for r in (0, 1)
            ],
        ],
        mount="wall",
        wall_y=1.2,
    )

    # ================================================================ fitness
    fit = []
    F = lambda *a, **k: fit.append(W(*a, **k))  # noqa: E731
    F(
        "treadmill",
        "Laufband",
        "Treadmill",
        (0.9, 1.9, 1.4),
        lambda m: [
            m.b(0, 0.0, 0.8, 1.6, 0.12, 0.1, "dark"),
            m.b(0, 0.0, 0.5, 1.4, 0.22, 0.01, "#3a3f4a"),
            *[m.b(sx * 0.4, 0.2, 0.04, 0.04, 0.12, 1.0, "metal") for sx in (-1, 1)],
            m.b(0, -0.75, 0.8, 0.12, 0.9, 0.3, "dark", screen=True),
            m.b(0, -0.75, 0.8, 0.05, 0.75, 0.15, "metal"),
        ],
        electric=True,
    )
    F(
        "power_rack",
        "Kraftstation mit Hantelbank",
        "Power rack with bench",
        (1.8, 1.8, 2.3),
        lambda m: [
            *[m.b(sx * 0.4 - 0.45, sz * 0.4, 0.06, 0.06, 0, 2.2, "dark") for sx in (-1, 1) for sz in (-1, 1)],
            m.b(-0.45, 0, 0.9, 0.06, 1.3, 0.04, "metal"),
            m.c(-0.45, 0, 1.4, 0.03, 1.32, 0.03, "metal", axis="x"),
            m.b(0.55, 0.1, 0.35, 1.2, 0.35, 0.12, "dark"),
            *[m.b(0.55 + sx * 0.14, sz * 0.5 + 0.1, 0.04, 0.04, 0, 0.35, "metal") for sx in (-1, 1) for sz in (-1, 1)],
        ],
    )
    F(
        "rowing_machine",
        "Rudergerät",
        "Rowing machine",
        (0.6, 2.1, 0.9),
        lambda m: [
            m.b(0, 0, 0.12, 2.0, 0.2, 0.06, "metal"),
            m.c(0, -0.85, 0.5, 0.5, 0.3, 0.45, "dark"),
            m.b(0, 0.35, 0.3, 0.3, 0.35, 0.08, "dark"),
            m.b(0, 0.9, 0.5, 0.06, 0.0, 0.2, "metal"),
            m.b(0, -0.5, 0.3, 0.08, 0.5, 0.05, "metal", screen=True),
        ],
        electric=True,
    )
    F(
        "spin_bike",
        "Indoor-Bike",
        "Spin bike",
        (0.55, 1.2, 1.2),
        lambda m: [
            m.b(0, 0, 0.1, 1.0, 0.0, 0.06, "metal"),
            m.c(0, -0.35, 0.5, 0.15, 0.1, 0.5, "#c0392b", axis="z"),
            m.b(0, 0.0, 0.05, 0.05, 0.1, 0.9, "metal"),
            m.b(0, -0.1, 0.2, 0.3, 0.9, 0.08, "dark"),
            m.b(0, 0.45, 0.4, 0.05, 1.0, 0.04, "metal"),
            m.b(0, 0.45, 0.05, 0.05, 0.7, 0.3, "metal"),
            m.b(0, 0.45, 0.2, 0.08, 1.04, 0.1, "dark", screen=True),
        ],
        electric=True,
    )
    F(
        "dumbbell_rack",
        "Hantelständer",
        "Dumbbell rack",
        (1.3, 0.5, 0.9),
        lambda m: [
            *[m.b(sx * 0.6, 0, 0.05, 0.4, 0, 0.7, "dark") for sx in (-1, 1)],
            m.b(0, 0, m.w, 0.4, 0.3, 0.04, "dark"),
            m.b(0, 0, m.w, 0.4, 0.6, 0.04, "dark"),
            *[m.c(-0.5 + 0.2 * i, 0, 0.18, 0.12, 0.34, 0.12, "#3a3f4a", axis="x") for i in range(6)],
            *[m.c(-0.5 + 0.2 * i, 0, 0.14, 0.1, 0.64, 0.1, "#3a3f4a", axis="x") for i in range(6)],
        ],
    )
    F(
        "punching_bag",
        "Boxsack",
        "Punching bag",
        (0.5, 0.5, 1.8),
        lambda m: [
            m.b(0, 0, 0.04, 0.04, 1.65, 0.15, "metal"),
            m.c(0, 0, 0.35, 0.35, 0.2, 1.45, "#c0392b"),
            m.c(0, 0, 0.36, 0.36, 0.19, 0.04, "dark"),
        ],
        mount="ceiling",
    )
    F(
        "yoga_mat",
        "Yogamatte mit Block",
        "Yoga mat with block",
        (0.7, 1.9, 0.12),
        lambda m: [m.b(0, 0, 0.62, 1.8, 0.0, 0.01, "#6b8aa8"), m.b(0, -0.7, 0.23, 0.15, 0.0, 0.1, "#c9a46a")],
    )
    F(
        "elliptical",
        "Crosstrainer",
        "Elliptical trainer",
        (0.7, 1.6, 1.6),
        lambda m: [
            m.b(0, 0.0, 0.5, 1.4, 0.05, 0.1, "dark"),
            m.c(0, -0.55, 0.45, 0.4, 0.2, 0.3, "dark", axis="x"),
            *[m.b(sx * 0.28, -0.35, 0.04, 0.04, 0.15, 1.3, "metal") for sx in (-1, 1)],
            m.b(0, -0.7, 0.4, 0.1, 1.2, 0.2, "dark", screen=True),
        ],
        electric=True,
    )
    F(
        "mirror_wall_gym",
        "Spiegelwand",
        "Mirror wall",
        (2.4, 0.04, 2.0),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "glass", edges="glow")],
        mount="wall",
        wall_y=0.2,
    )
    F(
        "exercise_ball",
        "Gymnastikball",
        "Exercise ball",
        (0.65, 0.65, 0.65),
        lambda m: [m.c(0, 0, 0.65, 0.65, 0, 0.65, "#6b8aa8")],
    )
    F(
        "wall_bars",
        "Sprossenwand",
        "Wall bars",
        (0.9, 0.12, 2.3),
        lambda m: [
            *[m.b(sx * 0.42, 0, 0.05, 0.08, 0, m.h, "wood") for sx in (-1, 1)],
            *[m.c(0, 0.0, 0.82, 0.04, 0.12 + 0.2 * i, 0.04, "wood", axis="x") for i in range(10)],
        ],
    )
    F(
        "fitness_mirror_smart",
        "Smarter Fitnessspiegel",
        "Smart fitness mirror",
        (0.6, 0.08, 1.6),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="glow", screen=True)],
        mount="wall",
        wall_y=0.3,
        electric=True,
    )
    F(
        "bike_trainer",
        "Fahrrad auf Smart-Trainer",
        "Bike on a smart trainer",
        (0.6, 1.8, 1.1),
        lambda m: [
            m.b(0, 0, 0.4, 0.5, 0.0, 0.08, "dark"),
            m.c(0, 0.6, 0.65, 0.04, 0.08, 0.65, "dark", axis="z"),
            m.c(0, -0.6, 0.65, 0.04, 0.08, 0.65, "dark", axis="z"),
            m.b(0, 0, 0.04, 1.2, 0.5, 0.04, "#2e86c1"),
            m.b(0, -0.45, 0.04, 0.04, 0.4, 0.45, "#2e86c1"),
            m.b(0, 0.55, 0.45, 0.04, 0.95, 0.04, "dark"),
        ],
        electric=True,
    )
    F(
        "sauna_cabin",
        "Saunakabine",
        "Sauna cabin",
        (1.2, 1.0, 2.0),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#b98d5a", edges="faint"),
            m.b(0.2, m.d / 2, 0.55, 0.012, 0, 1.85, "glass"),
            m.b(-0.3, -0.2, 0.5, 0.5, 0.45, 0.04, "wood"),
            m.b(0.0, -0.45, 1.1, 0.04, 1.0, 0.04, "#ff7a1a", glow=True),
        ],
        electric=True,
        light="strip",
    )
    F(
        "massage_chair",
        "Massagesessel",
        "Massage chair",
        (0.8, 1.5, 1.2),
        lambda m: [
            m.b(0, 0, 0.75, 1.2, 0.12, 0.25, "#3a3f4a"),
            m.b(0, -0.55, 0.7, 0.2, 0.25, 0.9, "#3a3f4a"),
            m.b(0, 0.55, 0.6, 0.45, 0.12, 0.3, "#3a3f4a"),
            *[m.b(sx * 0.37, 0.0, 0.1, 1.0, 0.3, 0.3, "#2a2f38") for sx in (-1, 1)],
            m.b(0, 0.0, 0.5, 0.5, 0.0, 0.12, "dark"),
        ],
        electric=True,
    )
    F(
        "kettlebells",
        "Kettlebell-Set",
        "Kettlebell set",
        (0.9, 0.35, 0.3),
        lambda m: [
            *[
                m.c(-0.3 + 0.3 * i, 0, 0.2 + 0.03 * i, 0.2 + 0.03 * i, 0.0, 0.17 + 0.03 * i, "#3a3f4a")
                for i in range(3)
            ],
            *[m.b(-0.3 + 0.3 * i, 0, 0.12, 0.03, 0.17 + 0.03 * i, 0.08, "#3a3f4a") for i in range(3)],
        ],
    )
    F(
        "water_cooler",
        "Wasserspender",
        "Water cooler",
        (0.35, 0.4, 1.1),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.85, "white", edges="faint"),
            m.c(0, 0, 0.28, 0.28, 0.85, 0.25, "#7fb8d8"),
            m.b(0, m.d / 2, 0.2, 0.01, 0.5, 0.05, "#2e86c1"),
            m.b(0.07, m.d / 2, 0.06, 0.01, 0.5, 0.05, "#c0392b"),
        ],
        electric=True,
    )

    # ================================================================ pets
    pets = []
    P = lambda *a, **k: pets.append(W(*a, **k))  # noqa: E731
    P(
        "cat_tree_large",
        "Kratzbaum groß",
        "Cat tree (large)",
        (0.6, 0.6, 1.6),
        lambda m: [
            m.b(0, 0, 0.6, 0.6, 0, 0.06, "#c9b99a"),
            *[m.c(sx * 0.12, sz * 0.1, 0.1, 0.1, 0.06, 1.3 - 0.0, "#d8c8a0") for sx, sz in ((-1, -1), (1, 1))],
            m.b(-0.1, 0.0, 0.4, 0.4, 0.5, 0.04, "#c9b99a"),
            m.b(0.1, 0.05, 0.4, 0.4, 0.9, 0.04, "#c9b99a"),
            m.b(0, 0, 0.55, 0.45, 1.5, 0.05, "#c9b99a"),
            m.b(-0.08, -0.1, 0.3, 0.3, 0.06, 0.4, "#b8a888"),
        ],
    )
    P(
        "scratch_post",
        "Kratzsäule",
        "Scratching post",
        (0.4, 0.4, 0.8),
        lambda m: [
            m.b(0, 0, 0.4, 0.4, 0, 0.04, "#c9b99a"),
            m.c(0, 0, 0.12, 0.12, 0.04, 0.72, "#d8c8a0"),
            m.c(0, 0, 0.3, 0.3, 0.76, 0.04, "#c9b99a"),
        ],
    )
    P(
        "scratch_board_wall",
        "Kratzbrett (Wand)",
        "Scratching board (wall)",
        (0.2, 0.06, 0.6),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#d8c8a0", edges="faint")],
        mount="wall",
        wall_y=0.3,
    )
    P(
        "cat_cave",
        "Katzenhöhle",
        "Cat cave",
        (0.45, 0.4, 0.4),
        lambda m: [
            m.c(0, 0, 0.45, 0.4, 0, 0.3, "#9a8a7a"),
            m.c(0, 0.1, 0.22, 0.2, 0.0, 0.22, "dark"),
            m.c(0, 0, 0.35, 0.3, 0.3, 0.02, "#b8a898"),
        ],
    )
    P(
        "cat_bed_round",
        "Katzenbett rund",
        "Round cat bed",
        (0.5, 0.5, 0.15),
        lambda m: [m.c(0, 0, 0.5, 0.5, 0, 0.14, "#8a6a5a"), m.c(0, 0, 0.36, 0.36, 0.06, 0.09, "#d8c8b0")],
    )
    P(
        "cat_wall_shelf",
        "Katzen-Wandliege",
        "Cat wall shelf",
        (0.6, 0.3, 0.1),
        lambda m: [m.b(0, 0, m.w, m.d, 0.0, 0.04, "wood"), m.b(0, 0, 0.5, 0.25, 0.04, 0.04, "#d8c8b0")],
        mount="wall",
        wall_y=1.3,
    )
    P(
        "cat_steps",
        "Katzen-Kletterstufen",
        "Cat climbing steps",
        (0.6, 0.3, 1.2),
        lambda m: [
            *[m.b(0, 0, 0.5, 0.25, 0.25 * i, 0.04, "wood") for i in range(1, 5)],
            *[m.b(0.1 * (-1) ** i, 0, 0.03, 0.04, 0.0, 0.25 * i, "metal") for i in range(1, 5)],
        ],
        mount="wall",
        wall_y=0.1,
    )
    P(
        "litter_covered",
        "Katzenklo mit Haube",
        "Covered litter box",
        (0.45, 0.55, 0.45),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.18, "#cfd6e2", edges="faint"),
            m.c(0, 0, 0.45, 0.55, 0.12, 0.3, "#cfd6e2"),
            m.c(0, m.d / 2 - 0.02, 0.2, 0.05, 0.1, 0.2, "dark", axis="z"),
        ],
    )
    P(
        "litter_auto",
        "Katzenklo selbstreinigend",
        "Self-cleaning litter box",
        (0.6, 0.65, 0.65),
        lambda m: [
            m.c(0, 0, 0.6, 0.65, 0.0, 0.62, "#e8ecf2", edges="faint"),
            m.c(0, m.d / 2 - 0.02, 0.28, 0.05, 0.15, 0.3, "dark", axis="z"),
            m.b(0.2, m.d / 2, 0.06, 0.01, 0.52, 0.03, "#7fd0ff", glow=True),
        ],
        electric=True,
    )
    P(
        "dog_bed",
        "Hundebett",
        "Dog bed",
        (0.9, 0.65, 0.2),
        lambda m: [m.b(0, 0, m.w, m.d, 0, 0.18, "#6a7a8a", edges="faint"), m.b(0, 0, 0.7, 0.45, 0.06, 0.1, "#d8c8b0")],
    )
    P(
        "dog_basket",
        "Hundekorb",
        "Dog basket",
        (0.8, 0.6, 0.3),
        lambda m: [m.c(0, 0, 0.8, 0.6, 0, 0.25, "#c9a46a"), m.c(0, 0, 0.64, 0.46, 0.05, 0.2, "#d8c8b0")],
    )
    P(
        "dog_house",
        "Hundehütte",
        "Dog house",
        (0.8, 1.0, 0.8),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.5, "#b98d5a", edges="faint"),
            m.l(0, 0, 0.9, 1.1, 0.5, 0.3, "#8a4a3a", tw=0.1),
            m.b(0, m.d / 2, 0.4, 0.012, 0.0, 0.45, "dark"),
        ],
    )
    P(
        "pet_bowls",
        "Futter- und Wassernapf",
        "Food and water bowls",
        (0.5, 0.25, 0.08),
        lambda m: [
            m.c(-0.12, 0, 0.2, 0.2, 0, 0.07, "metal"),
            m.c(0.12, 0, 0.2, 0.2, 0, 0.07, "#7aa6c9"),
            m.c(0.12, 0, 0.16, 0.16, 0.05, 0.01, "#7fd0ff"),
        ],
        mount="surface",
    )
    P(
        "pet_feeder",
        "Futterautomat",
        "Automatic pet feeder",
        (0.25, 0.3, 0.4),
        lambda m: [
            m.b(0, 0.05, 0.2, 0.18, 0.1, 0.3, "#cfd6e2"),
            m.b(0, 0.0, 0.25, 0.3, 0.0, 0.1, "white", edges="faint"),
            m.c(0, 0.1, 0.12, 0.1, 0.0, 0.06, "metal"),
            m.b(0, 0.1, 0.06, 0.01, 0.32, 0.03, "#7fd0ff", glow=True),
        ],
        electric=True,
        mount="surface",
    )
    P(
        "pet_fountain",
        "Trinkbrunnen",
        "Pet water fountain",
        (0.25, 0.25, 0.25),
        lambda m: [
            m.c(0, 0, 0.25, 0.25, 0, 0.1, "white"),
            m.c(0, 0, 0.2, 0.2, 0.08, 0.02, "#7fd0ff", glow=True),
            m.c(0, 0, 0.08, 0.08, 0.1, 0.14, "#cfd6e2"),
        ],
        electric=True,
        mount="surface",
    )
    P(
        "pet_gate",
        "Tier-Absperrgitter",
        "Pet gate",
        (0.8, 0.05, 0.75),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.03, "wood"),
            m.b(0, 0, m.w, m.d, 0.7, 0.03, "wood"),
            *[m.b(-0.35 + 0.07 * i, 0, 0.015, 0.02, 0.03, 0.67, "wood") for i in range(11)],
        ],
    )
    P(
        "pet_stairs",
        "Haustiertreppe",
        "Pet stairs",
        (0.4, 0.7, 0.5),
        lambda m: [
            *[m.b(0, 0.25 - 0.22 * i, 0.4, 0.22, 0.0, 0.5 - 0.15 * i, "#d8c8b0", edges="faint") for i in range(3)]
        ],
    )
    P(
        "hamster_cage",
        "Hamsterkäfig",
        "Hamster cage",
        (0.6, 0.35, 0.4),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.08, "#2e86c1"),
            m.b(0, 0, m.w, m.d, 0.08, m.h - 0.08, "glass", edges="faint"),
            m.b(0, 0, m.w, m.d, m.h - 0.02, 0.02, "#2e86c1"),
            m.c(-0.15, 0, 0.18, 0.04, 0.12, 0.18, "#c0392b", axis="z"),
        ],
    )
    P(
        "small_animal_cage",
        "Kleintierkäfig",
        "Small animal cage",
        (1.0, 0.55, 0.55),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.12, "#7aa6c9"),
            *[m.b(-0.48 + 0.06 * i, m.d / 2 - 0.01, 0.01, 0.01, 0.12, 0.4, "metal") for i in range(17)],
            m.b(0, 0, m.w, m.d, 0.52, 0.03, "#7aa6c9"),
            m.b(0.3, 0, 0.25, 0.25, 0.12, 0.2, "wood"),
        ],
    )
    P(
        "rabbit_run",
        "Kaninchengehege (außen)",
        "Rabbit run (outdoor)",
        (1.8, 1.0, 0.8),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.02, "#6b8a5a"),
            *[m.b(sx * 0.88, sz * 0.48, 0.03, 0.03, 0, 0.75, "wood") for sx in (-1, 1) for sz in (-1, 1)],
            m.b(0, 0, m.w, m.d, 0.75, 0.03, "wood"),
            m.b(0, m.d / 2, m.w - 0.06, 0.012, 0.03, 0.7, "glass"),
            m.b(-0.5, -0.1, 0.5, 0.6, 0.02, 0.45, "#b98d5a", edges="faint"),
        ],
    )
    P(
        "bird_cage",
        "Vogelkäfig",
        "Bird cage",
        (0.5, 0.4, 1.4),
        lambda m: [
            m.c(0, 0, 0.3, 0.3, 0.0, 0.05, "metal"),
            m.c(0, 0, 0.04, 0.04, 0.05, 0.75, "metal"),
            m.c(0, 0, 0.5, 0.4, 0.8, 0.5, "glass", edges="faint"),
            m.c(0, 0, 0.5, 0.4, 0.8, 0.03, "#2a303c"),
            m.l(0, 0, 0.5, 0.4, 1.3, 0.08, "metal", tw=0.06, td=0.06),
        ],
    )
    P(
        "aquarium_100",
        "Aquarium 100 l",
        "Aquarium 100 l",
        (0.8, 0.4, 0.95),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.55, "wood", edges="faint"),
            m.b(0, 0, m.w, m.d, 0.55, 0.38, "glass", edges="glow"),
            m.b(0, 0, m.w - 0.04, m.d - 0.04, 0.58, 0.3, "#2e86c1", glow=True),
            m.b(0.0, 0.0, m.w - 0.04, m.d - 0.04, 0.57, 0.03, "#c9b99a"),
            m.c(-0.2, 0, 0.12, 0.12, 0.6, 0.18, "plant"),
        ],
        electric=True,
        light="table",
    )
    P(
        "aquarium_240",
        "Aquarium 240 l mit Unterschrank",
        "Aquarium 240 l with cabinet",
        (1.2, 0.5, 1.5),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.75, "wood", edges="faint"),
            m.b(0, m.d / 2, 0.55, 0.012, 0.05, 0.65, "#e8ecf2"),
            m.b(0, 0, m.w, m.d, 0.75, 0.6, "glass", edges="glow"),
            m.b(0, 0, m.w - 0.04, m.d - 0.04, 0.8, 0.5, "#2e86c1", glow=True),
            m.b(0, 0, m.w - 0.04, m.d - 0.04, 0.78, 0.04, "#c9b99a"),
            m.c(-0.3, 0, 0.18, 0.18, 0.82, 0.3, "plant"),
            m.b(0, 0, m.w, m.d, 1.35, 0.03, "dark"),
        ],
        electric=True,
        light="table",
    )
    P(
        "terrarium",
        "Terrarium",
        "Terrarium",
        (0.9, 0.5, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.35, "dark", edges="faint"),
            m.b(0, 0, m.w, m.d, 0.35, 0.5, "glass", edges="glow"),
            m.b(0, 0, m.w - 0.04, m.d - 0.04, 0.36, 0.04, "#8a6a4a"),
            m.c(-0.2, 0, 0.2, 0.2, 0.4, 0.3, "plant"),
            m.b(0, 0, m.w - 0.1, 0.06, 0.82, 0.02, "#ffb347", glow=True),
            m.b(0.2, 0.0, 0.3, 0.2, 0.4, 0.1, "#b98d5a"),
        ],
        electric=True,
        light="table",
    )

    return [
        (
            "nextfloor.a_kinderzimmer",
            "Kinderzimmer",
            "Hochbett, Tipi, Spielküche, Kindermöbel, Nachtlichter und Babymöbel",
            kids,
        ),
        (
            "nextfloor.a_buero",
            "Büro & Gaming",
            "Schreibtische, Stühle, Sim-Cockpit, Serverschrank, 3D-Drucker und Arcade-Automat",
            office,
        ),
        ("nextfloor.a_fitness", "Fitness", "Laufband, Kraftstation, Rudergerät, Hanteln, Sauna und Massagesessel", fit),
        (
            "nextfloor.a_haustiere",
            "Haustiere",
            "Kratzbäume, Betten, Futterautomaten, Käfige, Aquarien und Terrarium",
            pets,
        ),
    ]

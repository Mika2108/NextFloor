"""Packs Wohnzimmer (living room) and Schlafzimmer (bedroom)."""

from area_common import make


def build(bp):
    W = lambda *a, **k: make(bp, *a, **k)  # noqa: E731
    items = []

    # ---------------------------------------------------------------- sofas
    def sofa(id_, de, en, seats, color="fabric", arms=True, depth=0.92, back=0.16, chaise=0.0, corner=None):
        w = 0.7 * seats + (0.22 if arms else 0.05) + (chaise if corner is None else 0)
        size = (round(w, 2), depth, 0.85)

        def fn(m):
            p = [m.b(0, 0, m.w, m.d, 0.1, 0.3, color), m.b(0, -m.d / 2 + back / 2, m.w, back, 0.1, 0.75, color)]
            inner = m.w - (0.22 if arms else 0.05)
            seat_w = inner / seats if not chaise else (inner - chaise) / seats
            x0 = -m.w / 2 + (0.11 if arms else 0.025)
            for i in range(seats):
                p.append(m.b(x0 + seat_w * (i + 0.5), 0.05, seat_w - 0.02, m.d - back - 0.12, 0.4, 0.12, "cushion"))
            if arms:
                for s in (-1, 1):
                    p.append(m.b(s * (m.w / 2 - 0.055), 0, 0.11, m.d, 0.1, 0.52, color))
            if chaise:
                p.append(m.b(m.w / 2 - chaise / 2 - 0.11, m.d * 0.1, chaise, m.d * 0.78, 0.4, 0.12, "cushion"))
            p += m.legs(0.06, 0.05, 0.1, "dark")
            return p

        items.append(W(id_, de, en, size, fn))

    sofa("sofa_2", "2-Sitzer-Sofa", "2-seater sofa", 2)
    sofa("sofa_3", "3-Sitzer-Sofa", "3-seater sofa", 3)
    sofa("sofa_4", "4-Sitzer Big Sofa", "4-seater big sofa", 4, depth=1.05)
    sofa("sofa_velvet", "Samt-Sofa 3-Sitzer", "Velvet 3-seater", 3, color="#2e5b6a")
    sofa("sofa_armless", "Sofa ohne Armlehnen", "Armless sofa", 3, arms=False)
    sofa("sofa_chaise", "Sofa mit Récamière", "Sofa with chaise", 2, chaise=0.8)

    items.append(
        W(
            "sofa_chesterfield",
            "Chesterfield-Sofa",
            "Chesterfield sofa",
            (2.1, 0.9, 0.78),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.1, 0.25, "#6b3a2a"),
                m.b(0, -0.36, m.w, 0.18, 0.1, 0.68, "#6b3a2a"),
                *[m.b(s * 1.0, 0, 0.18, m.d, 0.1, 0.5, "#6b3a2a") for s in (-1, 1)],
                m.b(0, 0.06, 1.7, 0.6, 0.35, 0.12, "#7b4a38"),
                *[m.b(x, -0.26, 0.5, 0.06, 0.45, 0.28, "#7b4a38") for x in (-0.6, 0, 0.6)],
                *m.legs(0.06, 0.06, 0.1, "wood"),
            ],
        )
    )
    items.append(
        W(
            "sofa_bed",
            "Schlafsofa",
            "Sofa bed",
            (1.9, 0.95, 0.85),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.12, 0.28, "fabric"),
                m.b(0, -0.38, m.w, 0.16, 0.12, 0.7, "fabric"),
                *[m.b(s * 0.88, 0, 0.14, m.d, 0.12, 0.45, "fabric") for s in (-1, 1)],
                m.b(0, 0.05, 1.6, 0.62, 0.4, 0.1, "cushion"),
                m.b(0, 0.47, 1.6, 0.02, 0.2, 0.15, "dark"),
                *m.legs(0.06, 0.05, 0.12, "metal"),
            ],
        )
    )

    def corner_sofa(id_, de, en, right, big=False, u=False):
        w, d = (3.4 if big else 2.7), (2.6 if big else 1.7)
        if u:
            w, d = 3.2, 2.2
        s = 1 if right else -1

        def fn(m):
            p = [
                m.b(0, -m.d / 2 + 0.45, m.w, 0.9, 0.1, 0.3, "fabric"),
                m.b(0, -m.d / 2 + 0.08, m.w, 0.16, 0.1, 0.75, "fabric"),
            ]
            p.append(m.b(s * (m.w / 2 - 0.45), 0.1, 0.9, m.d - 0.9, 0.1, 0.3, "fabric"))
            if u:
                p.append(m.b(-s * (m.w / 2 - 0.45), 0.1, 0.9, m.d - 0.9, 0.1, 0.3, "fabric"))
            p.append(m.b(s * (m.w / 2 - 0.08), 0, 0.16, m.d, 0.1, 0.75, "fabric"))
            for i in range(3 if not big else 4):
                p.append(m.b(-s * 0.1 + (i - 1) * 0.6 - s * 0.2, -m.d / 2 + 0.5, 0.58, 0.7, 0.4, 0.12, "cushion"))
            p.append(m.b(s * (m.w / 2 - 0.45), 0.2, 0.7, m.d - 1.3, 0.4, 0.12, "cushion"))
            p += m.legs(0.08, 0.05, 0.1, "dark")
            return p

        items.append(W(id_, de, en, (w, d, 0.85), fn))

    corner_sofa("sofa_corner_l", "Ecksofa links", "Corner sofa (left)", False)
    corner_sofa("sofa_corner_r", "Ecksofa rechts", "Corner sofa (right)", True)
    corner_sofa("sofa_corner_xl", "Großes Ecksofa (L-Form)", "Large corner sofa (L-shape)", True, big=True)
    corner_sofa("sofa_u", "U-Sofa", "U-shaped sofa", True, u=True)
    items.append(
        W(
            "chaise_longue",
            "Chaiselongue",
            "Chaise longue",
            (0.8, 1.7, 0.8),
            lambda m: [
                m.b(0, 0.1, m.w, 1.45, 0.12, 0.28, "fabric"),
                m.l(0, -0.7, m.w, 0.3, 0.12, 0.66, "fabric", tz=-0.78, td=0.12),
                m.b(0, 0.15, 0.7, 1.2, 0.4, 0.1, "cushion"),
                *m.legs(0.06, 0.05, 0.12, "wood"),
            ],
        )
    )
    items.append(
        W(
            "modular_sofa",
            "Modulsofa (5 Teile)",
            "Modular sofa (5 parts)",
            (3.0, 1.0, 0.8),
            lambda m: [
                *[m.b(-1.2 + 0.6 * i + 0.3 * 0, 0.0, 0.58, 0.95, 0.1, 0.32, "fabric") for i in range(5)],
                *[m.b(-1.2 + 0.6 * i, -0.4, 0.58, 0.16, 0.42, 0.38, "fabric") for i in range(5)],
                *[m.b(-1.2 + 0.6 * i, 0.04, 0.5, 0.6, 0.42, 0.1, "cushion") for i in range(5)],
            ],
        )
    )

    # ---------------------------------------------------------------- chairs
    def armchair(id_, de, en, size, color="fabric", wings=False, legs="wood", arms=0.12):
        def fn(m):
            p = [
                m.b(0, 0.02, m.w, m.d - 0.04, 0.2, 0.24, color),
                m.b(0, -m.d / 2 + 0.1, m.w, 0.2, 0.2, m.h - 0.2, color),
            ]
            p += [m.b(s * (m.w / 2 - arms / 2), 0.05, arms, m.d - 0.2, 0.2, 0.3, color) for s in (-1, 1)]
            p.append(m.b(0, 0.08, m.w - 2 * arms - 0.04, m.d - 0.4, 0.44, 0.1, "cushion"))
            if wings:
                p += [
                    m.b(s * (m.w / 2 - 0.06), -m.d / 2 + 0.2, 0.12, 0.3, m.h * 0.6, m.h * 0.4 - 0.02, color)
                    for s in (-1, 1)
                ]
            p += m.legs(0.06, 0.05, 0.2, legs)
            return p

        items.append(W(id_, de, en, size, fn))

    armchair("armchair", "Sessel", "Armchair", (0.8, 0.85, 0.85))
    armchair("club_chair", "Clubsessel", "Club chair", (0.9, 0.85, 0.75), color="#6b3a2a", arms=0.18)
    armchair("wingback", "Ohrensessel", "Wingback chair", (0.8, 0.85, 1.05), wings=True, color="#3f5a6e")
    items.append(
        W(
            "cocktail_chair",
            "Cocktailsessel",
            "Cocktail chair",
            (0.7, 0.7, 0.75),
            lambda m: [
                m.c(0, 0.05, 0.6, 0.6, 0.3, 0.14, "fabric"),
                m.l(0, -0.2, 0.62, 0.2, 0.3, 0.42, "fabric", tz=-0.3, td=0.1),
                *[m.b(sx * 0.22, sz * 0.2, 0.04, 0.04, 0, 0.3, "wood") for sx in (-1, 1) for sz in (-1, 1)],
            ],
        )
    )
    items.append(
        W(
            "recliner",
            "Relaxsessel mit Fußhocker",
            "Recliner with footstool",
            (0.85, 1.5, 1.0),
            lambda m: [
                m.b(0, -0.3, m.w, 0.85, 0.15, 0.35, "#4a3a32"),
                m.l(0, -0.62, m.w, 0.22, 0.15, 0.85, "#4a3a32", tz=-0.7, td=0.14),
                *[m.b(s * 0.38, -0.3, 0.14, 0.8, 0.15, 0.5, "#4a3a32") for s in (-1, 1)],
                m.b(0, 0.55, 0.55, 0.5, 0.15, 0.3, "#4a3a32"),
                m.c(0, -0.3, 0.3, 0.3, 0, 0.15, "metal"),
            ],
        )
    )
    items.append(
        W(
            "bean_bag",
            "Sitzsack",
            "Bean bag",
            (0.9, 0.9, 0.7),
            lambda m: [
                m.c(0, 0, 0.9, 0.9, 0, 0.3, "#c0562e"),
                m.c(0, 0, 0.78, 0.78, 0.3, 0.25, "#c0562e"),
                m.l(0, -0.2, 0.6, 0.35, 0.3, 0.4, "#c0562e", tz=-0.3, td=0.2),
            ],
        )
    )
    items.append(
        W(
            "pouf",
            "Pouf",
            "Pouf",
            (0.5, 0.5, 0.4),
            lambda m: [m.c(0, 0, 0.5, 0.5, 0.02, 0.36, "fabric"), m.c(0, 0, 0.46, 0.46, 0.38, 0.02, "cushion")],
        )
    )
    items.append(
        W(
            "rocking_chair",
            "Schaukelstuhl",
            "Rocking chair",
            (0.65, 0.95, 1.0),
            lambda m: [
                m.b(0, 0, 0.5, 0.5, 0.35, 0.06, "wood"),
                m.l(0, -0.25, 0.5, 0.06, 0.4, 0.6, "wood", tz=-0.33, td=0.05),
                *[m.b(s * 0.28, 0, 0.04, 0.9, 0, 0.06, "wood") for s in (-1, 1)],
                *[m.b(s * 0.25, sz * 0.2, 0.04, 0.04, 0.05, 0.32, "wood") for s in (-1, 1) for sz in (-1, 1)],
                m.b(0, 0, 0.44, 0.44, 0.41, 0.05, "cushion"),
            ],
        )
    )

    # ---------------------------------------------------------------- tables
    def table(id_, de, en, size, top="wood", legs="wood", surface=True, glass=False, thick=0.04):
        def fn(m):
            c = "glass" if glass else top
            return [m.b(0, 0, m.w, m.d, m.h - thick, thick, c, edges="faint"), *m.legs(0.06, 0.05, m.h - thick, legs)]

        items.append(W(id_, de, en, size, fn, surface=surface))

    table("coffee_rect", "Couchtisch rechteckig", "Rectangular coffee table", (1.1, 0.6, 0.42))
    table("coffee_glass", "Glas-Couchtisch", "Glass coffee table", (1.0, 0.55, 0.4), glass=True, legs="metal")
    items.append(
        W(
            "coffee_round",
            "Runder Couchtisch",
            "Round coffee table",
            (0.8, 0.8, 0.4),
            lambda m: [
                m.c(0, 0, 0.8, 0.8, 0.36, 0.04, "wood", edges="faint"),
                m.c(0, 0, 0.1, 0.1, 0, 0.36, "metal"),
                m.c(0, 0, 0.45, 0.45, 0, 0.03, "metal"),
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "coffee_nesting",
            "Satztische",
            "Nesting coffee tables",
            (0.9, 0.6, 0.45),
            lambda m: [
                m.b(-0.1, 0, 0.6, 0.5, 0.4, 0.04, "wood"),
                *[m.b(-0.1 + sx * 0.26, sz * 0.2, 0.03, 0.03, 0, 0.4, "metal") for sx in (-1, 1) for sz in (-1, 1)],
                m.b(0.25, 0.05, 0.4, 0.4, 0.3, 0.04, "walnut" if False else "#6b4a32"),
                *[
                    m.b(0.25 + sx * 0.17, 0.05 + sz * 0.17, 0.03, 0.03, 0, 0.3, "metal")
                    for sx in (-1, 1)
                    for sz in (-1, 1)
                ],
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "side_round",
            "Runder Beistelltisch",
            "Round side table",
            (0.45, 0.45, 0.55),
            lambda m: [
                m.c(0, 0, 0.45, 0.45, 0.52, 0.03, "wood"),
                m.c(0, 0, 0.04, 0.04, 0, 0.52, "metal"),
                m.c(0, 0, 0.3, 0.3, 0, 0.02, "metal"),
            ],
            surface=True,
        )
    )
    table("console", "Konsolentisch", "Console table", (1.2, 0.35, 0.8), legs="metal")
    for w, d, de_n, en_n, wood in (
        (1.2, 0.9, "Esstisch 120 × 90", "Dining table 120 × 90", "wood"),
        (1.6, 0.9, "Esstisch 160 × 90", "Dining table 160 × 90", "wood"),
        (2.0, 0.9, "Esstisch 200 × 90", "Dining table 200 × 90", "wood"),
        (2.2, 1.0, "Massivholz-Esstisch 220 × 100", "Solid wood dining table 220 × 100", "#8a6040"),
    ):
        table(f"dining_{int(w * 100)}", de_n, en_n, (w, d, 0.76), top=wood, thick=0.05 if w > 2.1 else 0.04)

    def chair(id_, de, en, seat="wood", back="wood", shell=False, cush=False):
        def fn(m):
            p = [m.b(0, 0.02, 0.42, 0.42, 0.44, 0.04, seat), *m.legs(0.05, 0.04, 0.44, "wood")]
            if shell:
                p = [
                    m.c(0, 0.02, 0.5, 0.45, 0.4, 0.06, seat),
                    m.l(0, -0.2, 0.5, 0.1, 0.42, 0.45, back, tz=-0.24, td=0.06),
                    *[m.b(sx * 0.17, sz * 0.15, 0.03, 0.03, 0, 0.4, "wood") for sx in (-1, 1) for sz in (-1, 1)],
                ]
            else:
                p.append(m.b(0, -0.2, 0.42, 0.04, 0.48, 0.4, back))
            if cush:
                p.append(m.b(0, 0.02, 0.4, 0.4, 0.48, 0.05, "fabric"))
            return p

        items.append(W(id_, de, en, (0.5, 0.5, 0.9), fn))

    chair("chair_wood", "Holzstuhl", "Wooden chair")
    chair("chair_upholstered", "Polsterstuhl", "Upholstered chair", cush=True)
    chair("chair_shell", "Schalenstuhl", "Shell chair", seat="#e8ecf2", back="#e8ecf2", shell=True)
    items.append(
        W(
            "dining_bench",
            "Esszimmerbank 160",
            "Dining bench 160",
            (1.6, 0.38, 0.46),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.42, 0.04, "wood"),
                *m.legs(0.05, 0.05, 0.42, "wood"),
                m.b(0, 0, m.w - 0.2, 0.03, 0.15, 0.03, "wood"),
            ],
        )
    )

    # ---------------------------------------------------------------- storage
    def board(id_, de, en, w, d, h, doors, legs=True, color="wood", **kw):
        def fn(m):
            base = 0.12 if legs else 0.0
            p = [m.b(0, 0, m.w, m.d, base, m.h - base, color, edges="faint")]
            for i in range(doors):
                x = -m.w / 2 + m.w / doors * (i + 0.5)
                p.append(
                    m.b(
                        x,
                        m.d / 2 - 0.005,
                        m.w / doors - 0.02,
                        0.012,
                        base + 0.03,
                        m.h - base - 0.06,
                        "#00000022" if False else "dark",
                    )
                )
                p.append(
                    m.b(x + (m.w / doors) * 0.38, m.d / 2 + 0.004, 0.02, 0.012, base + (m.h - base) * 0.5, 0.1, "metal")
                )
            if legs:
                p += m.legs(0.06, 0.04, base, "dark")
            return p

        items.append(W(id_, de, en, (w, d, h), fn, **kw))

    board("lowboard_120", "Lowboard 120", "Lowboard 120", 1.2, 0.4, 0.5, 3, surface=True)
    board("lowboard_160", "Lowboard 160", "Lowboard 160", 1.6, 0.4, 0.5, 4, surface=True)
    board("lowboard_200", "Lowboard 200", "Lowboard 200", 2.0, 0.4, 0.5, 5, surface=True)
    board("sideboard_160", "Sideboard 160", "Sideboard 160", 1.6, 0.45, 0.8, 4, surface=True)
    board("highboard", "Highboard", "Highboard", 1.0, 0.4, 1.4, 3, surface=True)
    items.append(
        W(
            "display_cabinet",
            "Vitrine",
            "Display cabinet",
            (0.9, 0.4, 1.9),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, 0.6, "wood", edges="faint"),
                m.b(0, 0.005, m.w - 0.06, m.d - 0.06, 0.6, 1.25, "glass", edges="faint"),
                *[m.b(0, 0, m.w - 0.08, m.d - 0.08, 0.6 + 0.4 * i, 0.02, "wood") for i in range(1, 4)],
                m.b(0, 0, m.w, m.d, 1.85, 0.05, "wood"),
            ],
        )
    )
    items.append(
        W(
            "chest_3",
            "Kommode mit 3 Schubladen",
            "Chest of 3 drawers",
            (0.9, 0.45, 0.85),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.1, 0.75, "wood", edges="faint"),
                *[m.b(0, m.d / 2, 0.8, 0.012, 0.15 + 0.22 * i, 0.19, "dark") for i in range(3)],
                *m.legs(0.05, 0.04, 0.1, "wood"),
            ],
            surface=True,
        )
    )

    def shelf(id_, de, en, w, h, shelves, d=0.35, cols=1, cube=False):
        def fn(m):
            p = [m.b(s * (m.w / 2 - 0.0125), 0, 0.025, m.d, 0, m.h, "white") for s in (-1, 1)]
            p += [m.b(0, 0, m.w - 0.05, m.d, (m.h - 0.025) * i / shelves, 0.025, "white") for i in range(shelves + 1)]
            for c in range(1, cols):
                p.append(m.b(-m.w / 2 + m.w * c / cols, 0, 0.025, m.d, 0, m.h, "white"))
            p.append(m.b(0, -m.d / 2 + 0.005, m.w - 0.05, 0.01, 0, m.h, "#d8dde6"))
            for i in range(min(shelves, 4)):
                p.append(
                    m.b(
                        -m.w * 0.18,
                        0,
                        0.28 if not cube else 0.2,
                        d - 0.1,
                        (m.h - 0.025) * i / shelves + 0.025,
                        0.24 if not cube else 0.2,
                        "#a07c4a",
                    )
                )
            return p

        items.append(W(id_, de, en, (w, d, h), fn))

    shelf("bookshelf_tall", "Hohes Bücherregal", "Tall bookshelf", 0.8, 2.0, 5)
    shelf("bookshelf_wide", "Breites Bücherregal", "Wide bookshelf", 1.6, 1.2, 3, cols=2)
    shelf("cube_2x2", "Würfelregal 2 × 2", "Cube shelf 2 × 2", 0.8, 0.8, 2, cols=2, cube=True)
    shelf("cube_4x2", "Würfelregal 4 × 2", "Cube shelf 4 × 2", 1.6, 0.8, 2, cols=4, cube=True)
    shelf("cube_4x4", "Würfelregal 4 × 4", "Cube shelf 4 × 4", 1.6, 1.6, 4, cols=4, cube=True)
    items.append(
        W(
            "divider_open",
            "Raumteiler-Regal",
            "Room divider shelf",
            (1.6, 0.35, 1.8),
            lambda m: [
                *[m.b(-0.8 + 0.4 * i, 0, 0.03, m.d, 0, m.h, "wood") for i in range(5)],
                *[m.b(0, 0, m.w, m.d, 0.35 * i, 0.03, "wood") for i in range(6)],
            ],
        )
    )
    items.append(
        W(
            "wall_shelf",
            "Wandboard",
            "Floating wall shelf",
            (1.0, 0.25, 0.05),
            lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "wood", edges="faint")],
            mount="wall",
            wall_y=1.4,
            surface=True,
        )
    )
    items.append(
        W(
            "coat_stand",
            "Garderobenständer",
            "Coat stand",
            (0.5, 0.5, 1.8),
            lambda m: [
                m.c(0, 0, 0.5, 0.5, 0, 0.03, "metal"),
                m.c(0, 0, 0.04, 0.04, 0.03, 1.77, "wood"),
                *[
                    m.b(sx * 0.12, sz * 0.12, 0.2, 0.03, 1.55 + 0.08 * (sx * sz > 0), 0.03, "wood", rot=45 * sx * sz)
                    for sx in (-1, 1)
                    for sz in (-1, 1)
                ],
            ],
        )
    )
    items.append(
        W(
            "wall_unit_vitrines",
            "Wohnwand mit Vitrinen",
            "Wall unit with vitrines",
            (3.0, 0.45, 2.2),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, 0.6, "#e8ecf2", edges="faint"),
                *[m.b(x, 0, 0.9, m.d, 0.6, 1.5, "#e8ecf2", edges="faint") for x in (-1.05, 1.05)],
                *[m.b(x, 0.01, 0.8, m.d - 0.04, 0.7, 1.3, "glass") for x in (-1.05, 1.05)],
                *[
                    m.b(x, 0.0, 0.76, 0.3, 0.7 + 0.43 * i, 0.4, "#ffe7b0", glow=True)
                    for x in (-1.05, 1.05)
                    for i in range(3)
                ],
                m.b(0, 0, 1.2, m.d, 1.2, 0.04, "#e8ecf2"),
            ],
            light="strip",
            electric=True,
        )
    )
    items.append(
        W(
            "wall_unit_tv",
            "Wohnwand mit Fernseher",
            "Wall unit with TV",
            (3.0, 0.45, 2.2),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, 0.6, "#e8ecf2", edges="faint"),
                *[m.b(x, 0, 0.9, m.d, 0.6, 1.5, "#e8ecf2", edges="faint") for x in (-1.05, 1.05)],
                m.b(0, -0.2, 1.2, 0.04, 0.6, 1.5, "#2a303c"),
                m.b(0, 0.0, 1.1, 0.04, 0.9, 0.62, "dark", screen=True),
            ],
            electric=True,
        )
    )

    # ---------------------------------------------------------------- media, lights, deco
    items.append(
        W(
            "tv_on_stand",
            "Fernseher auf Standfuß",
            "TV on a stand",
            (1.3, 0.35, 1.0),
            lambda m: [
                m.b(0, 0, 0.5, 0.3, 0, 0.03, "dark"),
                m.b(0, -0.05, 0.06, 0.06, 0.03, 0.3, "dark"),
                m.b(0, 0, m.w, 0.05, 0.3, 0.7, "dark", screen=True),
            ],
            electric=True,
        )
    )
    items.append(
        W(
            "media_wall",
            "Medienwand mit Fernseher",
            "Media wall with TV",
            (3.2, 0.3, 2.4),
            lambda m: [
                m.b(0, -0.1, m.w, 0.1, 0, m.h, "#3a3f4a"),
                m.b(0, 0.0, 1.5, 0.05, 0.9, 0.9, "dark", screen=True),
                m.b(0, 0, 2.2, 0.3, 0.1, 0.5, "wood", edges="faint"),
                m.b(0, 0.14, 2.4, 0.01, 0.04, 0.02, "#7fd0ff", glow=True),
                *[m.b(x, 0, 0.35, 0.25, 1.1, 0.8, "wood") for x in (-1.2, 1.2)],
            ],
            electric=True,
        )
    )
    items.append(
        W(
            "wood_stove",
            "Kaminofen",
            "Wood stove",
            (0.6, 0.5, 1.2),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.15, 0.7, "dark", edges="faint"),
                m.b(0, m.d / 2, 0.4, 0.01, 0.3, 0.3, "#ff7a1a", glow=True),
                m.c(0, -0.1, 0.18, 0.18, 0.85, 0.35, "metal"),
                *m.legs(0.05, 0.05, 0.15, "metal"),
            ],
            electric=True,
            light="floor",
        )
    )
    items.append(
        W(
            "fireplace_wall",
            "Elektrischer Wandkamin",
            "Electric wall fireplace",
            (1.2, 0.18, 0.5),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"),
                m.b(0, 0.08, 1.0, 0.02, 0.06, 0.38, "#ff7a1a", glow=True),
            ],
            mount="wall",
            wall_y=0.9,
            electric=True,
            light="wall",
        )
    )
    items.append(
        W(
            "piano",
            "Klavier mit Hocker",
            "Upright piano with bench",
            (1.55, 1.1, 1.25),
            lambda m: [
                m.b(0, -0.3, m.w, 0.45, 0.0, 1.25, "dark", edges="faint"),
                m.b(0, 0.0, m.w, 0.25, 0.7, 0.04, "dark"),
                m.b(0, 0.0, m.w - 0.1, 0.22, 0.74, 0.02, "white"),
                *[m.b(-0.65 + 0.1 * i, 0.04, 0.03, 0.12, 0.76, 0.02, "dark") for i in range(14) if i % 7 not in (2, 6)],
                m.b(0, 0.43, 0.6, 0.3, 0.42, 0.06, "cushion"),
                *[m.b(sx * 0.25, 0.43 + sz * 0.1, 0.03, 0.03, 0, 0.42, "dark") for sx in (-1, 1) for sz in (-1, 1)],
            ],
        )
    )
    items.append(
        W(
            "floor_lamp_arc",
            "Bogenlampe",
            "Arc floor lamp",
            (1.2, 0.4, 2.1),
            lambda m: [
                m.c(-0.5, 0, 0.35, 0.35, 0, 0.04, "metal"),
                m.b(-0.5, 0, 0.04, 0.04, 0.04, 1.6, "metal"),
                m.l(-0.2, 0, 0.7, 0.04, 1.95, 0.08, "metal", tx=0.2),
                m.c(0.5, 0, 0.4, 0.4, 1.75, 0.3, "#ffe7b0", glow=True),
            ],
            electric=True,
            light="floor",
        )
    )
    items.append(
        W(
            "floor_lamp_tripod",
            "Dreibein-Stehlampe",
            "Tripod floor lamp",
            (0.6, 0.6, 1.6),
            lambda m: [
                *[
                    m.l(math_x * 0.15, math_z * 0.15, 0.04, 0.04, 0, 1.2, "wood", tx=-math_x * 0.14 * 0, tz=0)
                    for math_x, math_z in ((-1, 1), (1, 1), (0, -1))
                ],
                m.c(0, 0, 0.5, 0.5, 1.2, 0.35, "#ffe7b0", glow=True),
            ],
            electric=True,
            light="floor",
        )
    )
    items.append(
        W(
            "table_lamp_ceramic",
            "Keramik-Tischlampe",
            "Ceramic table lamp",
            (0.3, 0.3, 0.55),
            lambda m: [
                m.c(0, 0, 0.18, 0.18, 0, 0.3, "#d8dde6"),
                m.l(0, 0, 0.3, 0.3, 0.3, 0.25, "#ffe7b0", tw=0.2, td=0.2, glow=True),
            ],
            electric=True,
            light="table",
            mount="surface" if False else None,
        )
    )
    items.append(
        W(
            "vase_pampas",
            "Bodenvase mit Pampasgras",
            "Floor vase with pampas grass",
            (0.4, 0.4, 1.3),
            lambda m: [
                m.c(0, 0, 0.3, 0.3, 0, 0.5, "#d8dde6"),
                *[
                    m.l(0.0, 0.0, 0.06, 0.06, 0.5, 0.8, "#e3d2a8", tx=dx, tz=dz, tw=0.2, td=0.2)
                    for dx, dz in ((-0.1, 0), (0.1, 0.05), (0, -0.1))
                ],
            ],
        )
    )
    items.append(
        W(
            "monstera",
            "Große Monstera",
            "Large monstera",
            (0.9, 0.9, 1.5),
            lambda m: [
                m.c(0, 0, 0.4, 0.4, 0, 0.35, "pot"),
                m.c(0, 0, 0.06, 0.06, 0.35, 0.6, "plant"),
                m.c(0, 0, 0.9, 0.9, 0.9, 0.4, "plant"),
                m.c(0.1, 0.05, 0.6, 0.6, 0.65, 0.3, "plant"),
            ],
        )
    )
    items.append(
        W(
            "rug_round",
            "Runder Teppich",
            "Round rug",
            (2.0, 2.0, 0.02),
            lambda m: [m.c(0, 0, 2.0, 2.0, 0, 0.02, "#c9c1b2"), m.c(0, 0, 1.4, 1.4, 0.012, 0.01, "#b0a592")],
        )
    )
    items.append(
        W(
            "rug_240",
            "Teppich 240 × 170",
            "Rug 240 × 170",
            (2.4, 1.7, 0.02),
            lambda m: [m.b(0, 0, m.w, m.d, 0, 0.02, "#b8b0a0"), m.b(0, 0, 2.1, 1.4, 0.012, 0.01, "#9a927f")],
        )
    )
    items.append(
        W(
            "painting_light",
            "Bild mit Bilderleuchte",
            "Painting with picture light",
            (1.0, 0.08, 0.8),
            lambda m: [
                m.b(0, 0, m.w, 0.04, 0, 0.7, "wood", edges="faint"),
                m.b(0, 0.01, 0.9, 0.02, 0.05, 0.6, "#4a7a9a"),
                m.b(0, 0.03, 0.4, 0.05, 0.72, 0.03, "#ffe7b0", glow=True),
            ],
            mount="wall",
            wall_y=1.2,
            electric=True,
            light="wall",
        )
    )
    items.append(
        W(
            "shelf_led",
            "Regal mit LED-Böden",
            "Shelf with LED shelves",
            (0.9, 0.3, 1.8),
            lambda m: [
                *[m.b(s * 0.435, 0, 0.03, m.d, 0, m.h, "dark") for s in (-1, 1)],
                *[m.b(0, 0, m.w - 0.06, m.d, 0.35 * i, 0.03, "dark") for i in range(6)],
                *[m.b(0, 0.08, m.w - 0.08, 0.02, 0.35 * i - 0.02, 0.015, "#7fd0ff", glow=True) for i in range(1, 6)],
            ],
            electric=True,
            light="strip",
        )
    )
    items.append(
        W(
            "air_purifier",
            "Luftreiniger",
            "Air purifier",
            (0.35, 0.25, 0.65),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
                m.b(0, m.d / 2, 0.25, 0.01, 0.5, 0.03, "#7fd0ff", glow=True),
            ],
            electric=True,
        )
    )
    items.append(
        W(
            "tower_fan",
            "Turmventilator",
            "Tower fan",
            (0.25, 0.25, 1.05),
            lambda m: [
                m.c(0, 0, 0.25, 0.25, 0, 0.03, "dark"),
                m.b(0, 0, 0.18, 0.18, 0.03, 1.0, "white", edges="faint"),
                m.b(0, 0.09, 0.14, 0.01, 0.2, 0.7, "dark"),
            ],
            electric=True,
        )
    )
    items.append(
        W(
            "smart_speaker_living",
            "Smart Speaker",
            "Smart speaker",
            (0.12, 0.12, 0.2),
            lambda m: [
                m.c(0, 0, 0.12, 0.12, 0, 0.2, "#3a3f4a"),
                m.c(0, 0, 0.12, 0.12, 0.17, 0.03, "#7fd0ff", glow=True),
            ],
            electric=True,
            mount="surface",
        )
    )

    # ================================================================ bedroom
    bed = []

    def bed_(id_, de, en, w, kind="plain", color="fabric", d=2.1):
        h = 1.0 if kind in ("upholstered", "canopy") else 0.85 if kind != "futon" else 0.35

        def fn(m):
            frame = 0.3 if kind == "storage" else 0.22 if kind != "futon" else 0.15
            p = [
                m.b(
                    0,
                    0,
                    m.w,
                    m.d,
                    0.1,
                    frame,
                    "wood" if kind not in ("upholstered", "boxspring") else color,
                    edges="faint",
                )
            ]
            if kind == "boxspring":
                p = [m.b(0, 0, m.w, m.d, 0, 0.4, color, edges="faint"), m.b(0, 0, m.w + 0.0, m.d, 0.4, 0.04, "#444c5a")]
                frame = 0.44
            else:
                p += m.legs(0.04, 0.06, 0.1, "wood") if kind != "futon" else []
            p.append(m.b(0, 0.05, m.w - 0.1, m.d - 0.2, 0.1 + frame, 0.22, "white" if kind != "futon" else "#cfd6e2"))
            if kind != "futon":
                p.append(
                    m.b(
                        0,
                        -m.d / 2 + 0.05,
                        m.w,
                        0.08,
                        0.1,
                        m.h - 0.1 if kind != "upholstered" else m.h - 0.1,
                        "wood" if kind not in ("upholstered", "boxspring") else color,
                    )
                )
                pillows = 2 if w >= 1.4 else 1
                for i in range(pillows):
                    p.append(
                        m.b(
                            (i - (pillows - 1) / 2) * (m.w / 2.3),
                            -m.d / 2 + 0.3,
                            min(0.55, m.w / pillows - 0.15),
                            0.35,
                            0.1 + frame + 0.22,
                            0.12,
                            "#f4f6fa",
                        )
                    )
            if kind == "canopy":
                p += [
                    m.b(sx * (m.w / 2 - 0.03), sz * (m.d / 2 - 0.03), 0.05, 0.05, 0, m.h, "wood")
                    for sx in (-1, 1)
                    for sz in (-1, 1)
                ]
                p.append(m.b(0, 0, m.w, m.d, m.h - 0.05, 0.05, "white", edges="faint"))
            return p

        items.append(W(id_, de, en, (round(w + 0.1, 2), d + 0.1, h), fn))

    for w in (0.9, 1.4, 1.6, 1.8, 2.0):
        bed_(f"bed_{int(w * 100)}", f"Bett {int(w * 100)} × 200", f"Bed {int(w * 100)} × 200", w)
    bed_("bed_upholstered_180", "Polsterbett 180 × 200", "Upholstered bed 180 × 200", 1.8, "upholstered", "#7b8594")
    bed_("bed_upholstered_140", "Polsterbett 140 × 200", "Upholstered bed 140 × 200", 1.4, "upholstered", "#7b8594")
    bed_("bed_boxspring", "Boxspringbett 180 × 200", "Box-spring bed 180 × 200", 1.8, "boxspring", "#6c7686")
    bed_("bed_futon", "Futonbett 160 × 200", "Futon bed 160 × 200", 1.6, "futon")
    bed_("bed_storage", "Stauraumbett 90 × 200", "Storage bed 90 × 200", 0.9, "storage")
    bed_("bed_canopy", "Himmelbett", "Canopy bed", 1.6, "canopy")
    items.append(
        W(
            "bed_ambient",
            "Bett 180 mit Ambientelicht",
            "Bed 180 with ambient light",
            (1.9, 2.2, 0.9),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.1, 0.24, "wood", edges="faint"),
                m.b(0, 0.05, 1.75, 2.0, 0.34, 0.22, "white"),
                m.b(0, -1.05, m.w, 0.08, 0.1, 0.8, "wood"),
                m.b(0, 0, m.w + 0.02, m.d + 0.02, 0.02, 0.03, "#7fd0ff", glow=True),
                *[m.b(x, -0.75, 0.55, 0.35, 0.56, 0.12, "#f4f6fa") for x in (-0.45, 0.45)],
            ],
            electric=True,
            light="strip",
        )
    )
    items.append(
        W(
            "bed_bench",
            "Bettbank",
            "Bed bench",
            (1.4, 0.4, 0.48),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.3, 0.12, "fabric"),
                m.b(0, 0, m.w, m.d, 0.42, 0.06, "cushion"),
                *m.legs(0.05, 0.05, 0.3, "wood"),
            ],
        )
    )
    items.append(
        W(
            "shoe_bench",
            "Schuhbank",
            "Shoe bench",
            (1.0, 0.35, 0.5),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.0, 0.42, "wood", edges="faint"),
                m.b(0, 0, m.w, m.d, 0.42, 0.06, "cushion"),
                *[m.b(x, m.d / 2, 0.45, 0.01, 0.05, 0.3, "dark") for x in (-0.25, 0.25)],
            ],
        )
    )

    def wardrobe(id_, de, en, w, doors, h=2.2, mirror=False, sliding=False, light=False):
        def fn(m):
            p = [m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint")]
            for i in range(doors):
                x = -m.w / 2 + m.w / doors * (i + 0.5)
                color = "glass" if (mirror and i == doors - 1) else "#d8dde6"
                z = m.d / 2 + (0.0 if not sliding else -0.02 + 0.03 * (i % 2))
                p.append(m.b(x, z, m.w / doors - 0.01, 0.012, 0.04, m.h - 0.08, color))
                p.append(
                    m.b(x + m.w / doors * 0.38 * (1 if i % 2 else -1), z + 0.01, 0.015, 0.01, m.h * 0.45, 0.2, "metal")
                )
            if light:
                p.append(m.b(0, 0.0, m.w - 0.1, 0.03, m.h - 0.1, 0.02, "#ffe7b0", glow=True))
            return p

        items.append(W(id_, de, en, (w, 0.6, h), fn, **({"electric": True, "light": "strip"} if light else {})))

    wardrobe("wardrobe_2", "Kleiderschrank 2-türig", "2-door wardrobe", 1.0, 2)
    wardrobe("wardrobe_3", "Kleiderschrank 3-türig", "3-door wardrobe", 1.5, 3)
    wardrobe("wardrobe_4", "Kleiderschrank 4-türig", "4-door wardrobe", 2.0, 4)
    wardrobe("wardrobe_6", "Kleiderschrank 6-türig", "6-door wardrobe", 3.0, 6, h=2.4)
    wardrobe("wardrobe_mirror", "Kleiderschrank mit Spiegeltür", "Wardrobe with mirror door", 1.5, 3, mirror=True)
    wardrobe("wardrobe_sliding", "Schwebetürenschrank", "Sliding door wardrobe", 2.0, 2, sliding=True, h=2.4)
    wardrobe("wardrobe_light", "Kleiderschrank mit Innenbeleuchtung", "Wardrobe with inside light", 1.5, 3, light=True)
    items.append(
        W(
            "wardrobe_corner",
            "Eckkleiderschrank",
            "Corner wardrobe",
            (1.6, 1.6, 2.2),
            lambda m: [
                m.b(0, -0.5, m.w, 0.6, 0, m.h, "white", edges="faint"),
                m.b(0.5, 0.3, 0.6, 1.0, 0, m.h, "white", edges="faint"),
                *[m.b(x, -0.19, 0.33, 0.012, 0.04, 2.1, "#d8dde6") for x in (-0.5, -0.17, 0.17, 0.5)],
                m.b(0.19, 0.3, 0.012, 0.9, 0.04, 2.1, "#d8dde6"),
            ],
        )
    )
    items.append(
        W(
            "walk_in_closet",
            "Offener begehbarer Schrank",
            "Open walk-in closet",
            (2.4, 0.6, 2.2),
            lambda m: [
                *[m.b(x, 0, 0.03, m.d, 0, m.h, "white") for x in (-1.2, -0.4, 0.4, 1.2)],
                *[m.b(x, 0, 0.8, m.d, y, 0.025, "white") for x in (-0.8, 0.8) for y in (0.4, 0.9, 1.4, 2.1)],
                *[m.c(x, 0, 0.8, 0.02, 1.8, 0.02, "metal", axis="x") for x in (0.0,)],
                *[m.b(0.0 + dx, 0, 0.012, 0.012, 1.1, 0.7, "#6b4a32") for dx in (-0.3, -0.1, 0.1, 0.3)],
            ],
        )
    )
    items.append(
        W(
            "clothes_rail",
            "Kleiderstange",
            "Clothes rail",
            (1.0, 0.5, 1.6),
            lambda m: [
                m.c(0, 0, 0.02, 0.02, 1.5, 0.02, "metal", axis="x"),
                m.b(-0.48, 0, 0.03, 0.5, 0, 1.5, "metal"),
                m.b(0.48, 0, 0.03, 0.5, 0, 1.5, "metal"),
                *[m.b(0.05 * i - 0.35, 0, 0.012, 0.3, 0.7, 0.8, "#6b4a32" if i % 2 else "#2b3f66") for i in range(15)],
            ],
        )
    )

    def nightstand(id_, de, en, w, d, h, drawers=1, floating=False):
        def fn(m):
            base = 0.0 if floating else 0.15
            p = [m.b(0, 0, m.w, m.d, base, m.h - base, "wood", edges="faint")]
            p += [
                m.b(
                    0,
                    m.d / 2,
                    m.w - 0.06,
                    0.012,
                    base + 0.04 + (m.h - base) * i / drawers,
                    (m.h - base) / drawers - 0.06,
                    "dark",
                )
                for i in range(drawers)
            ]
            if not floating:
                p += m.legs(0.04, 0.03, base, "wood")
            return p

        kw = {"mount": "wall", "wall_y": 0.3} if floating else {}
        items.append(W(id_, de, en, (w, d, h), fn, surface=True, **kw))

    nightstand("nightstand", "Nachttisch mit Schublade", "Nightstand with drawer", 0.45, 0.4, 0.5)
    nightstand("nightstand_slim", "Schmaler Nachttisch", "Slim nightstand", 0.3, 0.35, 0.55, 2)
    nightstand("nightstand_floating", "Schwebender Nachttisch", "Floating nightstand", 0.45, 0.32, 0.22, floating=True)
    items.append(
        W(
            "dresser_6",
            "Kommode 6 Schubladen 140",
            "6-drawer dresser 140",
            (1.4, 0.5, 0.85),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.1, 0.75, "wood", edges="faint"),
                *[m.b(x, m.d / 2, 0.64, 0.012, 0.15 + 0.33 * r, 0.28, "dark") for x in (-0.33, 0.33) for r in range(2)],
                *[m.b(x, m.d / 2, 0.64, 0.012, 0.81, 0.0 + 0.001, "dark") for x in ()],
                *m.legs(0.05, 0.04, 0.1, "wood"),
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "chest_tall_5",
            "Hohe Kommode 5 Schubladen",
            "Tall 5-drawer chest",
            (0.8, 0.45, 1.25),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.08, 1.17, "wood", edges="faint"),
                *[m.b(0, m.d / 2, 0.7, 0.012, 0.12 + 0.22 * i, 0.19, "dark") for i in range(5)],
                *m.legs(0.05, 0.04, 0.08, "wood"),
            ],
        )
    )
    items.append(
        W(
            "chest_tall",
            "Hohe Kommode",
            "Tall chest of drawers",
            (0.9, 0.45, 1.4),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.08, 1.32, "white", edges="faint"),
                *[m.b(0, m.d / 2, 0.8, 0.012, 0.12 + 0.2 * i, 0.17, "#d8dde6") for i in range(6)],
                *m.legs(0.05, 0.04, 0.08, "wood"),
            ],
        )
    )
    items.append(
        W(
            "chest_80",
            "Kommode mit 3 Schubladen 80",
            "Chest of 3 drawers 80",
            (0.8, 0.45, 0.8),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.1, 0.7, "wood", edges="faint"),
                *[m.b(0, m.d / 2, 0.7, 0.012, 0.14 + 0.21 * i, 0.18, "dark") for i in range(3)],
                *m.legs(0.05, 0.04, 0.1, "wood"),
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "vanity_table",
            "Schminktisch mit Spiegel",
            "Vanity with mirror",
            (1.0, 0.45, 1.5),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.72, 0.04, "white"),
                *m.legs(0.04, 0.04, 0.72, "white"),
                m.b(0, -0.2, 0.7, 0.02, 0.8, 0.65, "glass", edges="glow"),
                m.b(0.3, 0.0, 0.3, 0.3, 0.1, 0.62, "white"),
            ],
            surface=True,
        )
    )
    items.append(
        W(
            "dressing_table_light",
            "Frisiertisch mit Spiegelleuchte",
            "Dressing table with mirror light",
            (1.0, 0.45, 1.5),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0.72, 0.04, "white"),
                *m.legs(0.04, 0.04, 0.72, "white"),
                m.b(0, -0.2, 0.7, 0.02, 0.8, 0.65, "glass"),
                m.b(-0.37, -0.2, 0.03, 0.03, 0.8, 0.65, "#ffe7b0", glow=True),
                m.b(0.37, -0.2, 0.03, 0.03, 0.8, 0.65, "#ffe7b0", glow=True),
            ],
            surface=True,
            electric=True,
            light="table",
        )
    )
    items.append(
        W(
            "cot",
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
    )
    items.append(
        W(
            "changing_table",
            "Wickelkommode",
            "Changing table",
            (0.9, 0.75, 1.0),
            lambda m: [
                m.b(0, 0.1, m.w, 0.55, 0.0, 0.8, "white", edges="faint"),
                m.b(0, 0, 0.85, 0.7, 0.8, 0.06, "#cfd6e2"),
                *[m.b(sx * 0.4, 0, 0.03, 0.7, 0.86, 0.12, "white") for sx in (-1, 1)],
                m.b(0, -0.34, 0.85, 0.03, 0.86, 0.12, "white"),
            ],
        )
    )
    items.append(
        W(
            "standing_mirror",
            "Standspiegel",
            "Standing mirror",
            (0.6, 0.35, 1.7),
            lambda m: [
                m.l(0, 0, 0.5, 0.03, 0.0, 1.6, "glass", edges="glow", tz=-0.12, td=0.03),
                m.b(0, 0.0, 0.04, 0.3, 0, 0.9, "wood", rot=0)
                if False
                else m.b(0.0, -0.1, 0.55, 0.04, 0.02, 0.04, "wood"),
            ],
        )
    )
    items.append(
        W(
            "reading_nook",
            "Leseecke mit Sessel",
            "Reading nook with chair",
            (1.4, 1.0, 1.9),
            lambda m: [
                m.b(0.3, 0.1, 0.8, 0.8, 0.2, 0.26, "#6b8a7a"),
                m.b(0.3, -0.25, 0.8, 0.15, 0.2, 0.7, "#6b8a7a"),
                m.b(0.3, 0.1, 0.55, 0.5, 0.46, 0.1, "cushion"),
                m.c(-0.5, 0.2, 0.04, 0.04, 0, 1.9, "metal"),
                m.c(-0.5, 0.2, 0.3, 0.3, 1.55, 0.3, "#ffe7b0", glow=True),
                *m.legs(0.1, 0.05, 0.2, "wood"),
            ],
            electric=True,
            light="floor",
        )
    )
    items.append(
        W(
            "bedside_lamp",
            "Nachttischlampe",
            "Bedside lamp",
            (0.25, 0.25, 0.4),
            lambda m: [
                m.c(0, 0, 0.14, 0.14, 0, 0.18, "metal"),
                m.l(0, 0, 0.25, 0.25, 0.18, 0.2, "#ffe7b0", tw=0.18, td=0.18, glow=True),
            ],
            electric=True,
            light="table",
            mount="surface",
        )
    )
    items.append(
        W(
            "touch_lamp",
            "Touch-Nachttischlampe",
            "Touch bedside lamp",
            (0.18, 0.18, 0.28),
            lambda m: [m.c(0, 0, 0.18, 0.18, 0, 0.03, "dark"), m.c(0, 0, 0.12, 0.12, 0.03, 0.25, "#ffe7b0", glow=True)],
            electric=True,
            light="table",
            mount="surface",
        )
    )
    items.append(
        W(
            "humidifier",
            "Luftbefeuchter",
            "Humidifier",
            (0.22, 0.22, 0.3),
            lambda m: [
                m.c(0, 0, 0.22, 0.22, 0, 0.3, "white"),
                m.c(0, 0, 0.08, 0.08, 0.3 - 0.001, 0.001, "#7fd0ff", glow=True),
            ],
            electric=True,
            mount="surface",
        )
    )
    items.append(
        W(
            "sunrise_clock",
            "Lichtwecker",
            "Sunrise alarm clock",
            (0.2, 0.15, 0.2),
            lambda m: [
                m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
                m.b(0, 0.07, 0.15, 0.01, 0.04, 0.12, "#ffd9a0", glow=True),
            ],
            electric=True,
            light="table",
            mount="surface",
        )
    )

    living = [
        i
        for i in items
        if not i["id"].startswith(
            (
                "bed",
                "wardrobe",
                "walk",
                "clothes",
                "night",
                "dresser",
                "chest_tall",
                "chest_80",
                "vanity",
                "dressing",
                "cot",
                "changing",
                "standing",
                "reading",
                "bedside",
                "touch",
                "humid",
                "sunrise",
                "shoe",
            )
        )
    ]
    sleeping = [i for i in items if i not in living]
    return [
        (
            "nextfloor.a_wohnzimmer",
            "Wohnzimmer",
            "Sofas, Sessel, Tische, Stauraum, Wohnwände, Kaminöfen, Klavier, Leuchten und Deko",
            living,
        ),
        (
            "nextfloor.a_schlafzimmer",
            "Schlafzimmer",
            "Betten, Kleiderschränke, Nachttische, Kommoden, Frisiertische und Babymöbel",
            sleeping,
        ),
    ]

"""Pack Garten & Terrasse (garden and patio): grills, lounges, pergola, pools, play, sheds and trees."""

from area_common import make

LEAF = "#3f7a4a"


def build(bp):
    W = lambda *a, **k: make(bp, *a, **k)  # noqa: E731
    items = []

    def add(*a, **k):
        items.append(W(*a, **k))

    add(
        "grill_gas",
        "Gasgrill",
        "Gas grill",
        (1.4, 0.6, 1.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.1, "dark"),
            m.b(-0.1, 0, 1.0, m.d, 0.1, 0.7, "#2a303c", edges="faint"),
            m.b(0.6, 0, 0.3, m.d, 0.8, 0.04, "metal"),
            m.l(-0.1, 0, 1.0, m.d, 0.8, 0.25, "#2a303c", tw=0.9, td=0.5),
            m.b(-0.1, m.d / 2, 0.8, 0.02, 0.9, 0.03, "metal"),
            *[m.c(-0.4 + 0.15 * i, m.d / 2 + 0.01, 0.05, 0.03, 0.6, 0.05, "metal", axis="z") for i in range(5)],
            *[m.c(sx * 0.55, sz * 0.2, 0.08, 0.08, 0.0, 0.08, "dark") for sx in (-1, 1) for sz in (-1, 1)],
        ],
        electric=False,
        surface=False,
    )
    add(
        "lounge_set",
        "Lounge-Set",
        "Lounge set",
        (2.4, 2.4, 0.8),
        lambda m: [
            m.b(0, -0.8, 2.2, 0.8, 0.15, 0.3, "#6b7a8a"),
            m.b(-0.8, 0, 0.8, 2.0, 0.15, 0.3, "#6b7a8a"),
            m.b(0, -1.1, 2.2, 0.2, 0.15, 0.6, "#6b7a8a"),
            m.b(-1.1, 0, 0.2, 2.2, 0.15, 0.6, "#6b7a8a"),
            m.b(0.2, 0.2, 0.9, 0.9, 0.15, 0.3, "wood", edges="faint"),
            m.b(0.2, 0.2, 0.85, 0.85, 0.45, 0.02, "glass"),
            *[m.b(sx, sz, 0.55, 0.55, 0.45, 0.12, "#e8dcc4") for sx, sz in ((-0.5, -0.8), (0.2, -0.8), (-0.8, 0.0))],
        ],
    )
    add(
        "sun_lounger_adj",
        "Sonnenliege",
        "Sun lounger",
        (0.7, 2.0, 0.9),
        lambda m: [
            m.b(0, 0.15, 0.7, 1.2, 0.3, 0.08, "wood", edges="faint"),
            m.l(0, -0.7, 0.7, 0.7, 0.35, 0.55, "wood", tz=-0.95, td=0.1),
            m.b(0, 0.15, 0.6, 1.1, 0.38, 0.06, "#e8dcc4"),
            *m.legs(0.05, 0.05, 0.3, "metal"),
        ],
    )
    add(
        "parasol",
        "Sonnenschirm",
        "Parasol",
        (2.4, 2.4, 2.6),
        lambda m: [
            m.c(0, 0, 0.35, 0.35, 0.0, 0.05, "dark"),
            m.c(0, 0, 0.05, 0.05, 0.05, 2.3, "metal"),
            m.l(0, 0, 2.4, 2.4, 2.1, 0.5, "#e8dcc4", tw=0.1, td=0.1),
        ],
    )
    add(
        "pergola",
        "Pergola",
        "Pergola",
        (4.0, 3.0, 2.6),
        lambda m: [
            *[m.b(sx * 1.9, sz * 1.4, 0.14, 0.14, 0, 2.5, "wood") for sx in (-1, 1) for sz in (-1, 1)],
            *[m.b(sx * 1.9, 0, 0.12, 3.0, 2.4, 0.15, "wood") for sx in (-1, 1)],
            *[m.b(0, -1.4 + 0.35 * i, 4.0, 0.08, 2.52, 0.08, "wood") for i in range(9)],
        ],
    )
    add(
        "raised_bed",
        "Hochbeet",
        "Raised bed",
        (1.2, 0.8, 0.8),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.75, "wood", edges="faint"),
            m.b(0, 0, 1.1, 0.7, 0.7, 0.06, "#5a4030"),
            *[m.c(-0.4 + 0.27 * i, -0.15 + 0.3 * (i % 2), 0.18, 0.18, 0.75, 0.2, "plant") for i in range(4)],
        ],
        surface=False,
    )
    add(
        "greenhouse",
        "Gewächshaus",
        "Greenhouse",
        (2.4, 3.0, 2.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.3, "#cfd6e2", edges="faint"),
            m.b(0, 0, m.w - 0.04, m.d - 0.04, 0.3, 1.4, "glass", edges="faint"),
            m.l(0, 0, m.w, m.d, 1.7, 0.5, "glass", tw=0.12, td=m.d, edges="faint"),
            *[m.b(sx * 1.1, 0, 0.05, m.d - 0.2, 0.35, 0.05, "wood") for sx in (-1, 1)],
        ],
    )
    add(
        "hot_tub",
        "Outdoor-Whirlpool",
        "Outdoor hot tub",
        (2.0, 2.0, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.85, "#6a5a4a", edges="faint"),
            m.b(0, 0, 1.7, 1.7, 0.84, 0.02, "#7fd0ff", glow=True),
            m.b(0, 0, 1.9, 1.9, 0.85, 0.03, "#cfd6e2"),
        ],
        electric=True,
        light="table",
    )
    add(
        "fire_bowl",
        "Feuerschale",
        "Fire bowl",
        (0.7, 0.7, 0.5),
        lambda m: [
            m.c(0, 0, 0.7, 0.7, 0.25, 0.2, "#4a4f5a"),
            *[m.b(sx * 0.25, sz * 0.25, 0.04, 0.04, 0.0, 0.3, "dark", rot=15) for sx in (-1, 1) for sz in (-1, 1)],
            m.c(0, 0, 0.4, 0.4, 0.43, 0.04, "#ff7a1a", glow=True),
        ],
        electric=True,
        light="garden",
    )
    add(
        "garden_torch",
        "Gartenfackel",
        "Garden torch",
        (0.15, 0.15, 1.2),
        lambda m: [
            m.b(0, 0, 0.03, 0.03, 0.0, 1.0, "metal"),
            m.c(0, 0, 0.12, 0.12, 1.0, 0.1, "#4a4f5a"),
            m.c(0, 0, 0.07, 0.07, 1.1, 0.1, "#ff7a1a", glow=True),
        ],
        electric=True,
        light="garden",
    )
    add(
        "play_tower",
        "Spielturm mit Rutsche",
        "Play tower with slide",
        (3.2, 1.6, 2.6),
        lambda m: [
            *[m.b(sx * 0.5 - 0.7, sz * 0.5, 0.1, 0.1, 0, 2.0, "wood") for sx in (-1, 1) for sz in (-1, 1)],
            m.b(-0.7, 0, 1.1, 1.1, 1.2, 0.06, "wood"),
            m.l(-0.7, 0, 1.3, 1.3, 2.0, 0.55, "#c0392b", tw=0.1, td=0.1),
            m.l(0.9, 0, 1.4, 0.45, 0.0, 1.2, "#2e86c1", tx=-0.7, tw=0.45),
            m.b(-0.7, 0.58, 1.1, 0.04, 1.2, 0.5, "wood"),
        ],
    )
    add(
        "garden_shed",
        "Gartenhaus",
        "Garden shed",
        (2.4, 2.0, 2.4),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 2.0, "#b98d5a", edges="faint"),
            m.l(0, 0, 2.6, 2.2, 2.0, 0.4, "#6a4a3a", tw=2.6, td=0.3),
            m.b(-0.3, m.d / 2, 0.8, 0.012, 0.05, 1.8, "#8a6a4a"),
            m.b(0.7, m.d / 2, 0.6, 0.012, 1.0, 0.7, "glass"),
        ],
    )
    add(
        "trampoline",
        "Trampolin",
        "Trampoline",
        (3.0, 3.0, 0.95),
        lambda m: [
            m.c(0, 0, 3.0, 3.0, 0.7, 0.04, "dark"),
            m.c(0, 0, 2.5, 2.5, 0.72, 0.01, "#2e86c1"),
            *[
                m.c(math_x * 1.4, math_z * 1.4, 0.05, 0.05, 0.0, 0.7, "metal")
                for math_x, math_z in (
                    (1, 0),
                    (-1, 0),
                    (0, 1),
                    (0, -1),
                    (0.7, 0.7),
                    (-0.7, -0.7),
                    (0.7, -0.7),
                    (-0.7, 0.7),
                )
            ],
        ],
    )
    add(
        "flower_pots",
        "Blumentöpfe (3er-Set)",
        "Flower pots (set of 3)",
        (1.2, 0.5, 0.7),
        lambda m: [
            *[m.c(-0.4 + 0.4 * i, 0, 0.3 - 0.03 * i, 0.3 - 0.03 * i, 0.0, 0.3 + 0.05 * i, "#c0562e") for i in range(3)],
            *[
                m.c(
                    -0.4 + 0.4 * i,
                    0,
                    0.32,
                    0.32,
                    0.3 + 0.05 * i,
                    0.3 + 0.05 * (2 - i),
                    ("plant", "#c0392b", "#f1c40f")[i],
                )
                for i in range(3)
            ],
        ],
    )
    add(
        "sprinkler",
        "Rasensprenger",
        "Lawn sprinkler",
        (0.15, 0.15, 0.2),
        lambda m: [
            m.c(0, 0, 0.12, 0.12, 0.0, 0.05, "#2e86c1"),
            m.c(0, 0, 0.04, 0.04, 0.05, 0.12, "dark"),
            m.c(0, 0, 0.1, 0.02, 0.17, 0.02, "metal"),
        ],
        electric=True,
    )
    add(
        "valve_box",
        "Ventilkasten Bewässerung",
        "Irrigation valve box",
        (0.4, 0.3, 0.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, m.h, "#2e6a3a", edges="faint"),
            m.b(0, 0, 0.3, 0.2, m.h - 0.001, 0.001, "dark"),
        ],
        electric=True,
    )
    add(
        "rain_barrel",
        "Regentonne",
        "Rain barrel",
        (0.6, 0.6, 0.95),
        lambda m: [
            m.c(0, 0, 0.6, 0.6, 0.0, 0.9, "#3a6a8a"),
            m.c(0, 0, 0.62, 0.62, 0.88, 0.05, "#2a5a7a"),
            m.c(0, 0, 0.62, 0.62, 0.0, 0.04, "#2a5a7a"),
            m.c(0.3, 0, 0.05, 0.05, 0.2, 0.06, "metal"),
        ],
    )
    add(
        "garden_lantern",
        "Gartenlaterne",
        "Garden lantern",
        (0.25, 0.25, 0.5),
        lambda m: [
            m.b(0, 0, 0.18, 0.18, 0.0, 0.03, "dark"),
            m.b(0, 0, 0.16, 0.16, 0.03, 0.34, "#ffe7b0", glow=True),
            *[m.b(sx * 0.08, sz * 0.08, 0.02, 0.02, 0.03, 0.34, "dark") for sx in (-1, 1) for sz in (-1, 1)],
            m.l(0, 0, 0.22, 0.22, 0.37, 0.1, "dark", tw=0.04, td=0.04),
        ],
        electric=True,
        light="garden",
        mount="surface",
    )
    add(
        "outdoor_kitchen",
        "Outdoor-Küche",
        "Outdoor kitchen",
        (2.6, 0.7, 1.0),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.0, 0.9, "#6a6f7a", edges="faint"),
            m.b(0, 0, m.w + 0.03, m.d + 0.03, 0.9, 0.05, "#3a3f4a"),
            m.b(-0.6, 0, 0.8, 0.5, 0.95, 0.12, "#2a303c"),
            m.l(-0.6, 0, 0.8, 0.5, 1.07, 0.1, "#2a303c", tw=0.7, td=0.3),
            m.b(0.6, 0, 0.5, 0.4, 0.95, 0.01, "#b8c0cc"),
            *[m.b(x, m.d / 2, 0.55, 0.012, 0.1, 0.7, "#8a8f9a") for x in (-0.6, 0.6)],
        ],
        surface=True,
        electric=True,
    )
    add(
        "hammock",
        "Hängematte mit Gestell",
        "Hammock with stand",
        (0.8, 3.4, 1.2),
        lambda m: [
            *[m.b(0, sz * 1.5, 0.05, 0.05, 0.0, 1.1, "wood", rot=0) for sz in (-1, 1)],
            m.b(0, 0, 0.1, 3.2, 1.05, 0.04, "wood"),
            m.l(0, 0, 0.7, 2.8, 0.35, 0.3, "#e8dcc4", tw=0.65, td=2.6),
            m.b(0, 0, 0.08, 3.2, 0.0, 0.05, "wood"),
        ],
    )
    add(
        "patio_heater",
        "Heizpilz",
        "Patio heater",
        (0.8, 0.8, 2.2),
        lambda m: [
            m.c(0, 0, 0.45, 0.45, 0.0, 0.05, "#4a4f5a"),
            m.c(0, 0, 0.1, 0.1, 0.05, 1.9, "metal"),
            m.l(0, 0, 0.8, 0.8, 1.95, 0.25, "#8a8f9a", tw=0.2, td=0.2),
            m.c(0, 0, 0.18, 0.18, 1.9, 0.05, "#ff7a1a", glow=True),
        ],
        electric=True,
        light="garden",
    )

    # ---------------------------------------------------------------- trees and shrubs
    def tree(id_, de, en, size, crowns, trunk="#6a4a32", trunk_w=0.4, trunk_h=0.4):
        def fn(m):
            p = [m.c(0, 0, 0.12 * m.w * trunk_w, 0.12 * m.d * trunk_w, 0.0, trunk_h * m.h, trunk)]
            for kind, x, z, w, y, h, color in crowns:
                if kind == "ball":
                    p.append(m.c(x * m.w, z * m.d, w * m.w, w * m.d, y * m.h, h * m.h, color))
                elif kind == "cone":
                    p.append(
                        m.l(x * m.w, z * m.d, w * m.w, w * m.d, y * m.h, h * m.h, color, tw=0.02 * m.w, td=0.02 * m.d)
                    )
                elif kind == "dot":
                    p.append(m.c(x * m.w, z * m.d, w * m.w, w * m.d, y * m.h, h * m.h, color))
            return p

        items.append(W(id_, de, en, size, fn))

    G, G2, G3 = "#3f7a4a", "#4a8a52", "#2f6a3a"
    tree(
        "tree_oak",
        "Eiche",
        "Oak",
        (6.0, 6.0, 8.0),
        [
            ("ball", 0, 0, 0.9, 0.38, 0.5, G),
            ("ball", 0.2, 0.1, 0.6, 0.55, 0.4, G2),
            ("ball", -0.2, -0.15, 0.6, 0.5, 0.4, G3),
        ],
        trunk_h=0.45,
    )
    tree(
        "tree_lime",
        "Linde",
        "Lime tree",
        (5.0, 5.0, 9.0),
        [("ball", 0, 0, 0.75, 0.35, 0.6, G2), ("ball", 0, 0, 0.5, 0.7, 0.28, G)],
        trunk_h=0.4,
    )
    tree(
        "tree_birch",
        "Birke",
        "Birch",
        (3.5, 3.5, 9.0),
        [("ball", 0, 0, 0.6, 0.45, 0.45, "#6aa05a"), ("ball", 0.1, 0.1, 0.4, 0.75, 0.22, "#7ab06a")],
        trunk="#e8ecf2",
        trunk_w=0.3,
        trunk_h=0.55,
    )
    tree(
        "tree_maple",
        "Ahorn",
        "Maple",
        (5.0, 5.0, 8.0),
        [("ball", 0, 0, 0.85, 0.35, 0.5, "#c0562e"), ("ball", 0.1, 0.05, 0.55, 0.62, 0.3, "#d8742e")],
        trunk_h=0.4,
    )
    tree(
        "tree_fruit",
        "Obstbaum",
        "Fruit tree",
        (4.0, 4.0, 4.5),
        [
            ("ball", 0, 0, 0.9, 0.4, 0.55, G2),
            *[
                ("dot", 0.3 * a, 0.3 * b, 0.07, 0.5 + 0.05 * (a + b), 0.07, "#c0392b")
                for a, b in ((1, 1), (-1, 0.5), (0.3, -1), (-0.7, -0.8))
            ],
        ],
        trunk_h=0.45,
    )
    tree(
        "tree_spruce",
        "Fichte",
        "Spruce",
        (4.0, 4.0, 10.0),
        [
            ("cone", 0, 0, 1.0, 0.1, 0.35, G3),
            ("cone", 0, 0, 0.8, 0.32, 0.33, G3),
            ("cone", 0, 0, 0.6, 0.55, 0.3, G3),
            ("cone", 0, 0, 0.4, 0.75, 0.25, G3),
        ],
        trunk_h=0.2,
    )
    tree(
        "tree_pine",
        "Kiefer",
        "Pine",
        (5.0, 5.0, 10.0),
        [
            ("ball", -0.1, 0.0, 0.7, 0.55, 0.12, G3),
            ("ball", 0.15, 0.1, 0.6, 0.72, 0.1, G3),
            ("ball", 0, -0.1, 0.5, 0.88, 0.1, G3),
        ],
        trunk="#8a5a3a",
        trunk_w=0.35,
        trunk_h=0.85,
    )
    tree(
        "tree_thuja",
        "Thuja (Lebensbaum)",
        "Thuja (arborvitae)",
        (1.2, 1.2, 4.0),
        [("cone", 0, 0, 1.0, 0.0, 0.95, G3)],
        trunk_h=0.05,
    )
    tree(
        "shrub",
        "Strauch",
        "Shrub",
        (1.4, 1.4, 1.2),
        [("ball", 0, 0, 1.0, 0.1, 0.9, G2), ("ball", 0.2, 0.1, 0.6, 0.5, 0.5, G)],
        trunk_h=0.1,
    )
    tree(
        "shrub_flowering",
        "Blühstrauch",
        "Flowering shrub",
        (1.4, 1.4, 1.3),
        [
            ("ball", 0, 0, 1.0, 0.1, 0.85, G2),
            *[
                ("dot", 0.35 * a, 0.35 * b, 0.12, 0.35 + 0.1 * (a + b), 0.12, "#e84a8a")
                for a, b in ((1, 0.5), (-1, 0), (0, 1), (0.5, -1), (-0.6, -0.7), (0.2, 0.2))
            ],
        ],
        trunk_h=0.1,
    )
    tree(
        "brush_wild",
        "Gestrüpp (Wildfläche)",
        "Brush (wild patch)",
        (2.0, 2.0, 0.9),
        [
            ("ball", -0.3, 0.1, 0.5, 0.0, 0.8, "#5a7a3a"),
            ("ball", 0.3, -0.2, 0.55, 0.0, 0.7, "#6a8a3a"),
            ("ball", 0.1, 0.35, 0.4, 0.0, 0.6, "#4a6a30"),
        ],
        trunk_h=0.02,
    )
    tree(
        "tree_group_3",
        "Baumgruppe (3)",
        "Group of trees (3)",
        (9.0, 7.0, 8.0),
        [
            ("ball", -0.25, 0.1, 0.5, 0.42, 0.5, G),
            ("ball", 0.25, -0.1, 0.45, 0.4, 0.5, G2),
            ("ball", 0.0, 0.3, 0.4, 0.42, 0.45, G3),
        ],
        trunk_h=0.4,
    )
    # awnings over a terrace: the cassette stays on the wall, the striped cloth, the arms and the front bar reach out with the cover
    for width in (3.0, 4.0, 5.0):

        def awning(m):
            strips = 7
            parts = [m.b(0, -m.d / 2 + 0.11, m.w, 0.22, m.h - 0.22, 0.22, "#d8dde6", edges="faint")]
            for i in range(strips):
                depth = (m.d - 0.22) / strips
                z = -m.d / 2 + 0.22 + depth * (i + 0.5)
                y = m.h - 0.26 - i * 0.045
                parts.append(
                    m.b(0, z, m.w - 0.06, depth + 0.01, y, 0.025, "#c9553f" if i % 2 else "#ece4d6", move="out")
                )
            for sx in (-1, 1):
                parts.append(m.b(sx * (m.w / 2 - 0.12), 0, 0.04, m.d - 0.3, m.h - 0.5, 0.03, "metal", move="out"))
            parts.append(m.b(0, m.d / 2 - 0.04, m.w, 0.08, m.h - 0.26 - strips * 0.045, 0.12, "#d8dde6", move="out"))
            return parts

        add(
            f"awning_{round(width * 100)}",
            f"Markise {width:g} m".replace(".", ","),
            f"Awning {width:g} m",
            (width, 2.5, 0.6),
            awning,
            mount="wall",
            wall_y=2.2,
            cover="extends",
            cover_rest=0,
        )
    # a sliding gate: the posts stay, the gate slides away along the fence as the cover opens
    add(
        "sliding_gate",
        "Schiebetor",
        "Sliding gate",
        (4.0, 0.12, 1.4),
        lambda m: [
            m.b(-m.w / 2 + 0.06, 0, 0.12, 0.12, 0, m.h, "dark", edges="faint"),
            m.b(m.w / 2 - 0.06, 0, 0.12, 0.12, 0, m.h, "dark", edges="faint"),
            m.b(0, 0, m.w - 0.24, 0.05, 0.06, 0.06, "metal", move="slide_left"),
            m.b(0, 0, m.w - 0.24, 0.05, m.h - 0.12, 0.06, "metal", move="slide_left"),
            *[
                m.b(-m.w / 2 + 0.2 + 0.12 * i, 0, 0.03, 0.03, 0.12, m.h - 0.24, "metal", move="slide_left")
                for i in range(30)
            ],
        ],
        cover="retracts",
        cover_rest=1,
    )

    return [
        (
            "nextfloor.a_garten",
            "Garten & Terrasse",
            "Grill, Lounge, Pergola, Gewächshaus, Pool, Spielturm, Gartenhaus, Bäume und Sträucher",
            items,
        )
    ]

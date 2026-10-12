"""Helpers for the area packs (tools/area_*.py): parts are written in metres, relative to the item's centre.

`M(w, d, h)` turns metres into the fractions the pack format wants: x/z are the centre of a part measured from the
item's centre (front is +z), w/d its width/depth, y its bottom and h its height above the floor.
"""

COLOR = {"white": "#e8ecf2", "oak": "#b98d5a", "walnut": "#6b4a32", "grey": "#7b8594", "navy": "#2b3f66"}


class M:
    def __init__(self, bp, w, d, h):
        self.bp, self.w, self.d, self.h = bp, w, d, h

    def _k(self, kw):
        out = dict(kw)
        for k, div in (("tx", self.w), ("tz", self.d), ("tw", self.w), ("td", self.d)):
            if k in out:
                out[k] = out[k] / div
        return out

    def b(self, x, z, w, d, y, h, color="body", **kw):
        return self.bp.B(x / self.w, z / self.d, w / self.w, d / self.d, y / self.h, h / self.h, color, **self._k(kw))

    def c(self, x, z, w, d, y, h, color="metal", **kw):
        return self.bp.C(x / self.w, z / self.d, w / self.w, d / self.d, y / self.h, h / self.h, color, **self._k(kw))

    def l(self, x, z, w, d, y, h, color="body", **kw):
        return self.bp.L(x / self.w, z / self.d, w / self.w, d / self.d, y / self.h, h / self.h, color, **self._k(kw))

    def legs(self, inset=0.05, size=0.05, h=0.15, color="metal", y=0.0):
        px, pz = self.w / 2 - inset, self.d / 2 - inset
        return [self.b(sx * px, sz * pz, size, size, y, h, color) for sx in (-1, 1) for sz in (-1, 1)]


def make(bp, id_, de, en, size, fn, **kw):
    """One item: fn(m) returns its parts."""
    m = M(bp, *size)
    return bp.item(id_, de, en, list(size), fn(m), **kw)

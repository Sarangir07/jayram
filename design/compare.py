"""
Measure the rendered hero against the reference artwork.

  python design/compare.py <screenshot.png>

Reports the bounding box of each key element in both images so positions can be
corrected numerically instead of by eye, and writes an overlay (reference in
magenta over the render) next to the screenshot.
"""

import sys
from pathlib import Path

import numpy as np
from PIL import Image

REF = Path(__file__).parent / "reference" / "hero_reference_full.png"

# name -> (search window x0, y0, x1, y1, threshold, mode)
#   mode "dark"  : ink darker than the threshold
#   mode "light" : pixels brighter than the threshold
PROBES = {
    "logo lockup":   (40, 20, 400, 140, 150, "dark"),
    "nav links":     (420, 40, 1000, 92, 150, "dark"),
    "location":      (1000, 40, 1225, 92, 150, "dark"),
    "eyebrow":       (40, 175, 460, 210, 170, "dark"),
    "headline L1":   (40, 210, 520, 292, 150, "dark"),
    "headline L3":   (40, 352, 520, 432, 170, "dark"),
    "lede":          (40, 440, 540, 600, 170, "dark"),
    "cta primary":   (40, 535, 320, 610, 999, "red"),
    "feature strip": (40, 618, 450, 752, 178, "dark"),
    "lower strap":   (40, 780, 340, 850, 170, "dark"),
    "scroll cue":    (40, 860, 230, 935, 170, "dark"),
    "vertical tag":  (560, 315, 760, 440, 170, "dark"),
    "stat card":     (1150, 862, 1520, 985, 200, "light"),
}


def bbox(img: np.ndarray, probe) -> tuple[int, int, int, int] | None:
    x0, y0, x1, y1, thr, mode = probe
    seg = img[y0:y1, x0:x1].astype(int)
    if mode == "dark":
        m = seg.mean(axis=2) < thr
    elif mode == "light":
        m = seg.mean(axis=2) > thr
    else:  # red
        r, g, b = seg[..., 0], seg[..., 1], seg[..., 2]
        m = (r > 110) & (r - g > 55) & (r - b > 55)
    ys, xs = np.nonzero(m)
    if len(xs) < 12:
        return None
    return (x0 + xs.min(), y0 + ys.min(), x0 + xs.max(), y0 + ys.max())


def main() -> None:
    shot_path = Path(sys.argv[1])
    ref = np.array(Image.open(REF).convert("RGB"))
    shot = np.array(Image.open(shot_path).convert("RGB").resize((1536, 1024)))

    print(f"{'element':16s} {'reference (x0,y0,x1,y1)':>26s} {'render':>26s}   {'delta':>16s}")
    print("-" * 92)
    for name, probe in PROBES.items():
        a, b = bbox(ref, probe), bbox(shot, probe)
        if a is None or b is None:
            print(f"{name:16s} {str(a):>26s} {str(b):>26s}   {'-':>16s}")
            continue
        d = tuple(int(q - p) for p, q in zip(a, b))
        flag = "  <<<" if max(abs(v) for v in d) > 6 else ""
        print(f"{name:16s} {str(a):>26s} {str(b):>26s}   {str(d):>16s}{flag}")

    # overlay: reference edges in magenta on top of the render
    out = shot.copy()
    refg = np.array(Image.open(REF).convert("L")).astype(int)
    edge = np.abs(np.gradient(refg)[0]) + np.abs(np.gradient(refg)[1])
    mask = edge > 42
    out[mask] = (255, 0, 200)
    dest = shot_path.with_name(shot_path.stem + "_overlay.png")
    Image.fromarray(out).save(dest)
    print(f"\noverlay -> {dest}")


if __name__ == "__main__":
    main()

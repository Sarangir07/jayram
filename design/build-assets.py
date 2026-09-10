"""
JAYAM Technical Services - asset pipeline.

Turns the supplied reference artwork in design/reference/ into clean, correctly
sized, correctly cropped layers under public/assets/jayam/.

Run:  python design/build-assets.py

Why this exists
---------------
The supplied "assets" are overlapping rectangular crops of one flattened
composition (PNG colour type 2 = RGB, no alpha), with UI text baked into the
pixels. They are references, not layers. This script reconstructs genuine
layers from them so the website can be built out of real HTML/CSS with the
photography behind it:

  * logo      - split into its two intact pieces (mark + JAYAM wordmark).
                The supplied logo file is truncated at the bottom edge, so the
                two strap lines are typeset in Logo.tsx instead. See NOTE below.
  * hero      - the central photographic plate with the two baked script/eyebrow
                taglines painted out, so they can be set as real text.
  * services  - the photo thumbnail from each service card, with the baked
                arrow disc excluded so the real button can sit on top.

NOTE on the logo: logo_jayam_technical_services_exact.png is 1035x1295 and its
"TECHNICAL SERVICES LLC" line runs off the bottom edge of the canvas mid-glyph
(pixel content continues to row 1294 of 1295). The J mark and the JAYAM
wordmark are intact and are used exactly as supplied - not redrawn, recoloured
or distorted. Replace the source file with a complete lockup and re-run to have
the strap lines come from the artwork too.
"""

from __future__ import annotations

import shutil
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "design" / "reference"
OUT = ROOT / "public" / "assets" / "jayam"

REF = "hero_reference_full.png"          # 1536 x 1024 flattened design
LOGO = "logo_jayam_technical_services_exact.png"


# --------------------------------------------------------------------------
# helpers
# --------------------------------------------------------------------------

def ensure_dirs() -> None:
    for sub in ("logo", "hero", "services"):
        (OUT / sub).mkdir(parents=True, exist_ok=True)


def save(im: Image.Image, path: Path, *, optimise: bool = True) -> None:
    im.save(path, optimize=optimise)
    kb = path.stat().st_size / 1024
    print(f"  -> {path.relative_to(ROOT)}  {im.width}x{im.height}  {kb:.0f} KB")


def trim_alpha(im: Image.Image, pad: int = 0) -> Image.Image:
    """Crop an RGBA image to its opaque bounding box."""
    alpha = np.array(im.getchannel("A"))
    ys, xs = np.nonzero(alpha > 8)
    y0, y1 = ys.min(), ys.max() + 1
    x0, x1 = xs.min(), xs.max() + 1
    y0, x0 = max(0, y0 - pad), max(0, x0 - pad)
    y1, x1 = min(im.height, y1 + pad), min(im.width, x1 + pad)
    return im.crop((x0, y0, x1, y1))


def inpaint_rect(arr: np.ndarray, box: tuple[int, int, int, int], feather: int = 6) -> None:
    """
    Paint out a rectangle of baked-in text, in place.

    Every region we remove sits on a smooth sky / water / haze gradient, so a
    bilinear blend of the four clean borders reconstructs it convincingly.
    The seam is then feathered by blurring a slightly larger window and
    cross-fading it back in at the edges.
    """
    x0, y0, x1, y1 = box
    h, w = y1 - y0, x1 - x0
    if h <= 0 or w <= 0:
        return

    m = 3  # sample this many clean pixels just outside each edge
    top = arr[max(0, y0 - m):y0, x0:x1].mean(axis=0)
    bot = arr[y1:y1 + m, x0:x1].mean(axis=0)
    left = arr[y0:y1, max(0, x0 - m):x0].mean(axis=1)
    right = arr[y0:y1, x1:x1 + m].mean(axis=1)

    wy = np.linspace(0.0, 1.0, h)[:, None, None]
    wx = np.linspace(0.0, 1.0, w)[None, :, None]

    vertical = top[None, :, :] * (1 - wy) + bot[None, :, :] * wy
    horizontal = left[:, None, :] * (1 - wx) + right[:, None, :] * wx
    arr[y0:y1, x0:x1] = (vertical + horizontal) / 2.0

    if feather:
        pad = feather * 3
        sx0, sy0 = max(0, x0 - pad), max(0, y0 - pad)
        sx1, sy1 = min(arr.shape[1], x1 + pad), min(arr.shape[0], y1 + pad)
        window = arr[sy0:sy1, sx0:sx1]
        soft = np.array(
            Image.fromarray(window.astype(np.uint8)).filter(
                ImageFilter.GaussianBlur(feather)
            ),
            dtype=float,
        )
        # cross-fade: fully soft over the patch, falling off across the padding
        yy, xx = np.meshgrid(
            np.arange(sy0, sy1), np.arange(sx0, sx1), indexing="ij"
        )
        dist = np.maximum.reduce([
            (y0 - yy) / pad, (yy - (y1 - 1)) / pad,
            (x0 - xx) / pad, (xx - (x1 - 1)) / pad,
        ])
        k = np.clip(1.0 - np.clip(dist, 0, 1), 0, 1)[..., None]
        arr[sy0:sy1, sx0:sx1] = window * (1 - k) + soft * k


def edge_mask(size: tuple[int, int], *, left=0, right=0, top=0, bottom=0) -> Image.Image:
    """Alpha mask with linear fades on the requested edges."""
    w, h = size
    a = np.ones((h, w), dtype=float)
    if left:
        a[:, :left] *= np.linspace(0, 1, left)[None, :]
    if right:
        a[:, w - right:] *= np.linspace(1, 0, right)[None, :]
    if top:
        a[:top, :] *= np.linspace(0, 1, top)[:, None]
    if bottom:
        a[h - bottom:, :] *= np.linspace(1, 0, bottom)[:, None]
    return Image.fromarray((a * 255).astype(np.uint8), "L")


# --------------------------------------------------------------------------
# 1. logo
# --------------------------------------------------------------------------

def build_logo() -> None:
    print("logo")
    src = Image.open(SRC / LOGO).convert("RGBA")

    # measured content bands in the supplied file:
    #   y    5..1005  red-bordered J mark      (intact)
    #   y 1051..1252  JAYAM wordmark           (intact)
    #   y 1266..1294  TECHNICAL SERVICES LLC   (truncated by the canvas edge)
    mark = trim_alpha(src.crop((0, 0, src.width, 1012)))
    word = trim_alpha(src.crop((0, 1040, src.width, 1256)))

    save(mark, OUT / "logo" / "jayam-mark.png")
    save(word, OUT / "logo" / "jayam-wordmark.png")

    # square favicon / social mark on the brand red frame
    icon = mark.copy()
    side = max(icon.size)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(icon, ((side - icon.width) // 2, (side - icon.height) // 2), icon)
    save(canvas.resize((512, 512), Image.LANCZOS), OUT / "logo" / "jayam-mark-square.png")


# --------------------------------------------------------------------------
# 2. hero photography
# --------------------------------------------------------------------------

# Flat-background UI text: the surrounding gradient reconstructs it exactly,
# so these are filled wholesale.
BAKED_TEXT = [
    (578, 322, 706, 412),    # "PEOPLE / SPACES / A BETTER / TOMORROW"
    (578, 418, 642, 432),    # the red rule beneath it
]

# "Building Comfort Enhancing Lives" is brush script laid over a sky gradient.
# Filling its bounding box would destroy the palm fronds and the J-swoosh edge
# that pass through it, so only the lettering itself is lifted out. This window
# is tight enough to contain the script and nothing else.
SCRIPT_TAGLINE = (1010, 116, 1230, 342)

# The left-hand column's own UI is baked into the artwork too, and it bleeds
# into both photographic crops: the plate starts at x=452 but the headline,
# lede and CTA run to x~500, and the planting band starts at y=700 while the
# strapline and scroll cue sit at y 780-940. Left in, they reappear as faint
# doubled text under the live copy. Same ink-lift treatment.
LIFT_UI = [
    (46, 646, 508, 734),    # feature icons and their labels
    (46, 780, 322, 854),    # red rule + "ENGINEERING COMFORT / ENHANCING LIVES"
    (46, 894, 218, 946),    # scroll cue
    (442, 182, 510, 438),   # eyebrow rule + headline tails inside the plate
    (442, 446, 510, 608),   # lede and secondary-CTA tails inside the plate
]

# Glass UI that is rebuilt in HTML and must not show through from behind it.
# Both sit on dark, already-defocused planting, so a heavy blur reads as
# natural bokeh rather than a patch.
BLUR_OUT = [
    ((1140, 700, 1536, 1005), 34),   # lower service cards + stats card
]

# the central photographic composition: J-swoosh, skyline, pool, palms,
# engineer, wall and planting. Stops short of the service panel; both outer
# edges feather into the page gradient.
PLATE = (452, 96, 1232, 1024)

# the defocused planting that runs along the bottom of the full hero width
PLANTS = (0, 700, 1536, 1024)


def lift_ink(arr: np.ndarray, box: tuple[int, int, int, int]) -> None:
    """
    Remove dark lettering from a region without touching what surrounds it.

    The local background is estimated with a median + blur (which closes over
    thin strokes), pixels darker than that estimate are scored into a soft
    mask, and the estimate is composited back in through that mask only.
    """
    x0, y0, x1, y1 = box
    region = Image.fromarray(arr[y0:y1, x0:x1].astype(np.uint8), "RGB")
    estimate = region.filter(ImageFilter.MedianFilter(size=9)).filter(
        ImageFilter.GaussianBlur(9)
    )
    a = np.array(region, dtype=float)
    b = np.array(estimate, dtype=float)
    ink = np.clip(((b - a).mean(axis=2) - 1.5) / 7.0, 0, 1)
    # grow the mask slightly so stroke antialiasing goes with it
    ink = np.array(
        Image.fromarray((ink * 255).astype(np.uint8)).filter(
            ImageFilter.MaxFilter(5)
        ).filter(ImageFilter.GaussianBlur(2)),
        dtype=float,
    )[..., None] / 255.0
    arr[y0:y1, x0:x1] = a * (1 - ink) + b * ink


def build_hero() -> None:
    print("hero")
    ref = Image.open(SRC / REF).convert("RGB")
    arr = np.array(ref, dtype=float)

    for box in BAKED_TEXT:
        inpaint_rect(arr, box)
    for _ in range(3):          # thin script needs a few passes to fully clear
        lift_ink(arr, SCRIPT_TAGLINE)
    for box in LIFT_UI:
        for _ in range(3):
            lift_ink(arr, box)

    for (x0, y0, x1, y1), radius in BLUR_OUT:
        patch = Image.fromarray(arr[y0:y1, x0:x1].astype(np.uint8), "RGB")
        blurred = np.array(patch.filter(ImageFilter.GaussianBlur(radius)), dtype=float)
        # cross-fade the blur in, or its rectangle reads as a panel of its own
        k = np.array(
            edge_mask((x1 - x0, y1 - y0), left=170, top=150, bottom=120),
            dtype=float,
        )[..., None] / 255.0
        arr[y0:y1, x0:x1] = arr[y0:y1, x0:x1] * (1 - k) + blurred * k

    clean = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")
    clean.save(OUT / "hero" / "_clean-plate.png")  # intermediate, useful for QA

    # --- main visual -----------------------------------------------------
    plate = clean.crop(PLATE).convert("RGBA")
    plate.putalpha(edge_mask(plate.size, left=155, top=70, right=50))
    save(plate, OUT / "hero" / "hero-main-visual.png")

    # --- foreground planting --------------------------------------------
    plants = clean.crop(PLANTS).convert("RGBA")
    plants.putalpha(edge_mask(plants.size, top=170))
    save(plants, OUT / "hero" / "hero-foreground-plants.png")

    # --- Dubai skyline, used small in later sections ---------------------
    skyline = clean.crop((520, 470, 800, 640)).convert("RGBA")
    skyline.putalpha(edge_mask(skyline.size, left=40, right=40, bottom=30))
    save(skyline, OUT / "hero" / "hero-skyline.png")

    # --- mobile crop: engineer + pool, tighter and taller -----------------
    mob = clean.crop((640, 150, 1240, 1024))
    save(mob.convert("RGB"), OUT / "hero" / "hero-mobile.jpg")

    # --- editorial stills reused by later sections ------------------------
    # Crops chosen to sit clear of the large white J letterform, which reads as
    # an accidental shape once it is cut out of the hero composition.
    save(clean.crop((640, 545, 1000, 790)).convert("RGB"), OUT / "hero" / "still-pool.jpg")
    save(clean.crop((596, 700, 1000, 940)).convert("RGB"), OUT / "hero" / "still-landscape.jpg")
    save(clean.crop((958, 376, 1252, 922)).convert("RGB"), OUT / "hero" / "still-engineer.jpg")


# --------------------------------------------------------------------------
# 3. service card thumbnails
# --------------------------------------------------------------------------

# Each supplied service_NN crop is one glass card. The photo sits on the right,
# and the circular arrow is baked over its right end - so we stop the crop short
# of the arrow and let the real button render on top in HTML.
# filename, slug, and where that card's title ends as a fraction of the card
# width - the photograph is only clean to the right of it, and the baked arrow
# disc starts at 0.86.
SERVICES = [
    ("service_01_electromechanical.png",     "electro-mechanical",   0.54),
    ("service_02_air_conditioning.png",      "air-conditioning",     0.62),
    ("service_03_plumbing_sanitary.png",     "plumbing-sanitary",    0.74),
    ("service_04_gypsum_false_ceiling.png",  "gypsum-ceiling",       0.75),
    ("service_05_aluminum_glass.png",        "aluminium-glass",      0.67),
    ("service_06_landscaping.png",           "landscaping",          0.57),
    ("service_07_pools_water_features.png",  "pools-water-features", 0.69),
    ("service_08_lifts_escalators.png",      "lifts-escalators",     0.70),
]

ARROW_DISC_X = 0.858   # left edge of the baked arrow disc


def card_bounds(im: Image.Image) -> tuple[int, int]:
    """Find the card's top and bottom edge inside its crop."""
    g = np.array(im.convert("L"), dtype=float)
    # the card is brighter than the gap between cards; use the column through
    # the icon area, which is always card interior
    col = g[:, int(im.width * 0.25)]
    thr = (col.max() + col.min()) / 2
    on = np.nonzero(col > thr)[0]
    if len(on) < 4:
        return 0, im.height
    return int(on[0]), int(on[-1] + 1)


def build_services() -> None:
    print("services")
    for filename, slug, title_end in SERVICES:
        im = Image.open(SRC / filename).convert("RGB")
        top, bottom = card_bounds(im)

        # Take the strip of photograph between the end of the card's title and
        # the baked-in arrow disc; the real arrow is rendered over that spot in
        # HTML, and object-fit: cover spreads this back across the card's photo
        # zone. Cards with long titles leave a narrower strip and read softer -
        # that is all the artwork contains.
        x0 = int(im.width * (title_end + 0.02))
        x1 = int(im.width * ARROW_DISC_X)
        thumb = im.crop((x0, top, x1, bottom))

        scale = max(2, round(300 / max(thumb.width, 1)))
        thumb = thumb.resize((thumb.width * scale, thumb.height * scale), Image.LANCZOS)
        # these strips are narrow at source, so a light unsharp pass keeps the
        # upscale from reading as mush behind the card's glass
        thumb = thumb.filter(ImageFilter.UnsharpMask(radius=3, percent=70, threshold=2))
        thumb.save(OUT / "services" / f"{slug}.jpg", quality=88, optimize=True)
        kb = (OUT / "services" / f"{slug}.jpg").stat().st_size / 1024
        print(f"  -> services/{slug}.jpg  {thumb.width}x{thumb.height}  {kb:.0f} KB")


# --------------------------------------------------------------------------

def cleanup_scaffold() -> None:
    """Remove the create-next-app placeholder SVGs."""
    for name in ("file.svg", "globe.svg", "next.svg", "vercel.svg", "window.svg"):
        p = ROOT / "public" / name
        if p.exists():
            p.unlink()


def main() -> None:
    if not (SRC / REF).exists():
        raise SystemExit(f"reference artwork not found in {SRC}")
    ensure_dirs()
    build_logo()
    build_hero()
    build_services()
    cleanup_scaffold()
    print("\ndone")


if __name__ == "__main__":
    main()

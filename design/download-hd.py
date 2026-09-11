from pathlib import Path
from urllib.request import Request, urlopen

DEST = Path(r"c:\Users\saran\Desktop\muneveer\public\assets\jayam\hd")
DEST.mkdir(parents=True, exist_ok=True)

# High-res Unsplash / Pexels URLs chosen to match JAYAM trades (not hero artwork).
IMAGES = {
    "mep.jpg": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1800&q=80",
    "hvac.jpg": "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1800",
    "plumbing.jpg": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1800&q=80",
    "interior.jpg": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    "glass.jpg": "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80",
    "landscape.jpg": "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1800&q=80",
    "hardscape.jpg": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    "pool.jpg": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=80",
    "water.jpg": "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1800",
    "pergola.jpg": "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=80",
    "play.jpg": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=80",
    "industrial.jpg": "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1800",
    "hospitality.jpg": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1800&q=80",
    "dubai.jpg": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80",
    "villa.jpg": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
    "restaurant.jpg": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80",
    "dining.jpg": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80",
    "golf.jpg": "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1800&q=80",
    "tower.jpg": "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1800",
    "plants.jpg": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1800&q=80",
    "green.jpg": "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80",
    "evening.jpg": "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=2000",
    "engineer.jpg": "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1800",
    "escalator.jpg": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1800&q=80",
}

ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

for name, url in IMAGES.items():
    out = DEST / name
    try:
        req = Request(url, headers={"User-Agent": ua, "Accept": "image/jpeg,image/*,*/*"})
        with urlopen(req, timeout=40) as r:
            data = r.read()
        if len(data) < 20000:
            print("SMALL", name, len(data))
            continue
        out.write_bytes(data)
        print("OK", name, len(data))
    except Exception as e:
        print("FAIL", name, e)

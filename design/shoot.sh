#!/usr/bin/env bash
# Screenshot the running dev server at a given size.
#   design/shoot.sh <out.png> <width> <height> [path]
#
# Reduced motion is forced so captures are deterministic — without it the
# shot can land mid-animation and blend two frames.
set -euo pipefail

CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
OUT="$1"; W="${2:-1536}"; H="${3:-1024}"; PATH_="${4:-/}"
PROFILE="$(mktemp -d)"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --force-prefers-reduced-motion \
  --force-device-scale-factor=1 \
  --user-data-dir="$PROFILE" \
  --virtual-time-budget=14000 \
  --window-size="${W},${H}" \
  --screenshot="$(cygpath -w "$OUT")" \
  "http://localhost:3000${PATH_}" >/dev/null 2>&1

rm -rf "$PROFILE"
echo "shot $OUT ${W}x${H}"

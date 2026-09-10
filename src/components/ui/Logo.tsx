import Image from "next/image";

import mark from "@/../public/assets/jayam/logo/jayam-mark.png";
import wordmark from "@/../public/assets/jayam/logo/jayam-wordmark.png";

/**
 * The JAYAM lockup, assembled at the proportions measured from the reference
 * artwork: mark 84 x 97, text column 214 wide, 8px between them, with the
 * wordmark, "TECHNICAL SERVICES LLC" and the strapline stacked in the column.
 *
 * The J mark and the JAYAM wordmark are the supplied artwork used as-is — not
 * redrawn, recoloured or distorted. The two strap lines are typeset because the
 * supplied logo file is cropped at its bottom edge and cuts "TECHNICAL SERVICES
 * LLC" in half. See design/build-assets.py.
 *
 * `height` may be any CSS length (including a calc()), and every internal
 * measurement derives from it, so the lockup always scales as one piece.
 */
export default function Logo({
  height = "58px",
  variant = "dark",
  className = "",
  priority = false,
}: {
  height?: string;
  /** `light` lifts the strap lines for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const light = variant === "light";
  const h = (factor: number) => `calc(${height} * ${factor})`;

  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ height, gap: h(0.082) }}
    >
      <Image
        src={mark}
        alt=""
        aria-hidden
        priority={priority}
        style={{ height, width: h(0.758) }}
        className="object-contain object-left"
        sizes="140px"
      />
      <span
        className="flex flex-col justify-center"
        style={{ height, width: h(2.35) }}
      >
        <Image
          src={wordmark}
          alt=""
          aria-hidden
          priority={priority}
          style={{ height: h(0.402), width: "100%" }}
          className="object-contain object-left"
          sizes="320px"
        />
        <span
          style={{
            fontSize: h(0.198),
            marginTop: h(0.05),
            letterSpacing: h(-0.001),
            color: light ? "#ff6167" : "#a8121a",
            /* condensed to the reference's text-column width */
            transform: "scaleX(0.9)",
          }}
          className="origin-left leading-none font-extrabold whitespace-nowrap"
        >
          TECHNICAL SERVICES LLC
        </span>
        <span
          style={{
            fontSize: h(0.088),
            marginTop: h(0.056),
            letterSpacing: h(0.0044),
            color: light ? "rgba(255,255,255,0.8)" : "#0d1420",
            transform: "scaleX(0.96)",
          }}
          className="origin-left leading-none font-bold whitespace-nowrap"
        >
          THE EXPERTISE YOUR FUTURE FACILITY NEEDS
        </span>
      </span>
      <span className="sr-only">JAYAM Technical Services LLC</span>
    </span>
  );
}

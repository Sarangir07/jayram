import Image from "next/image";

import logo from "@/../public/assets/jayam/logo/jayam-logo.png";

/**
 * The JAYAM lockup — the supplied "Jayam Logo Corrected Final-05" artwork
 * (Arabic name, JAYAM wordmark, TECHNICAL SERVICES and the strapline) used
 * as-is, trimmed of its transparent padding. Aspect ratio 2288 x 1145.
 *
 * `height` may be any CSS length (including a calc()); the width follows the
 * artwork's aspect ratio so it always scales as one piece.
 */
export default function Logo({
  height = "58px",
  variant = "dark",
  className = "",
  priority = false,
}: {
  height?: string;
  /** `light` adds a soft white halo so the artwork stays legible on dark photography. */
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const light = variant === "light";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={logo}
        alt=""
        aria-hidden
        priority={priority}
        style={{
          height,
          width: `calc(${height} * ${logo.width / logo.height})`,
          filter: light
            ? "drop-shadow(0 0 1px rgba(255,255,255,0.95)) drop-shadow(0 0 10px rgba(255,255,255,0.75)) drop-shadow(0 4px 18px rgba(255,255,255,0.5))"
            : undefined,
        }}
        className="object-contain object-left"
        sizes="320px"
      />
      <span className="sr-only">JAYAM Technical Services LLC</span>
    </span>
  );
}

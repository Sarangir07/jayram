import Image from "next/image";

import logo from "@/../public/assets/jayam/logo/jayam-logo.png";
import logoLight from "@/../public/assets/jayam/logo/jayam-logo-light.png";

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
  /** `light` brightens the artwork for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const light = variant === "light";
  const src = light ? logoLight : logo;

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt=""
        aria-hidden
        priority={priority}
        style={{
          height,
          width: `calc(${height} * ${src.width / src.height})`,
        }}
        className="object-contain object-left"
        sizes="320px"
      />
      <span className="sr-only">JAYAM Technical Services LLC</span>
    </span>
  );
}

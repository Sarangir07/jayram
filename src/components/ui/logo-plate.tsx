import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * A white plate that holds a client logo at a balanced size regardless of the
 * artwork's aspect ratio: the image fills the padded box with object-contain,
 * so wide wordmarks and square marks read at the same visual weight, and the
 * supplied per-client `scale` fine-tunes from there.
 */
export default function LogoPlate({
  name,
  logo,
  scale = 1,
  sizes,
  preload = false,
  alt,
  className,
  imgClassName,
}: {
  name: string;
  logo: string;
  scale?: number;
  sizes: string;
  preload?: boolean;
  /** Defaults to "<name> logo"; pass "" when a visible name already labels it. */
  alt?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span className={cn("relative block", className)}>
      <Image
        src={logo}
        alt={alt ?? `${name} logo`}
        fill
        preload={preload}
        loading={preload ? undefined : "lazy"}
        sizes={sizes}
        className={cn("object-contain", imgClassName)}
        style={{ transform: `scale(${scale})` }}
      />
    </span>
  );
}

import Image from "next/image";

/** Fill-parent photograph with a light navy grade so mixed sources sit in one campaign. */
export default function FrameImage({
  src,
  alt,
  sizes,
  className = "",
  priority = false,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  return (
    <span className={`absolute inset-0 block overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={85}
        priority={priority}
        className="object-cover"
        style={{ objectPosition }}
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,23,51,0.06)_0%,rgba(6,23,51,0.22)_100%)] mix-blend-multiply"
      />
    </span>
  );
}

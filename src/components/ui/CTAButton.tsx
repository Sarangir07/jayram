import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "light";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full " +
  "font-bold whitespace-nowrap transition-[transform,box-shadow,background-color,color] " +
  "duration-300 ease-[var(--ease-out-quint)] will-change-transform " +
  "hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-[linear-gradient(180deg,#cf1319_0%,#ab0b10_100%)] " +
    "shadow-[0_12px_28px_-12px_rgba(176,13,18,0.75)] " +
    "hover:shadow-[0_18px_38px_-12px_rgba(176,13,18,0.85)] " +
    "hover:bg-[linear-gradient(180deg,#dd171d_0%,#b60d13_100%)]",
  outline:
    "text-navy border border-hairline bg-white/70 backdrop-blur-sm " +
    "hover:border-blue hover:text-blue hover:bg-white " +
    "shadow-[0_8px_22px_-16px_rgba(6,23,51,0.5)]",
  light:
    "text-navy bg-white hover:bg-blue-50 " +
    "shadow-[0_14px_32px_-16px_rgba(0,0,0,0.6)]",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  style,
  withArrow = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
  withArrow?: boolean;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} style={style}>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          aria-hidden
          strokeWidth={2.4}
          className="size-[1.15em] shrink-0 transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}

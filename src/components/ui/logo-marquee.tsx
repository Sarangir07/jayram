import LogoPlate from "@/components/ui/logo-plate";
import { cn } from "@/lib/utils";

export type MarqueeLogo = { name: string; logo: string; scale?: number };

/**
 * Slow, seamless horizontal strip of client logos on white tiles. The list is
 * rendered twice for the loop; the visible copy is aria-hidden and the names
 * are exposed once for screen readers. Pauses on hover / focus, and is
 * disabled under prefers-reduced-motion by the rules in globals.css.
 */
export default function LogoMarquee({
  logos,
  label,
  reverse = false,
  className = "",
}: {
  logos: MarqueeLogo[];
  label?: string;
  /** Run right-to-left so two stacked rows can counter-scroll. */
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("overflow-hidden", className)}
      aria-label={label ?? "Client logos"}
    >
      <ul className="sr-only">
        {logos.map((l) => (
          <li key={l.name}>{l.name}</li>
        ))}
      </ul>
      <div
        aria-hidden
        className="a-marquee-pause flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      >
        <div
          className={cn(
            "a-marquee flex w-max shrink-0 items-center gap-8 pr-8",
            reverse && "[animation-direction:reverse]",
          )}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-8">
              {logos.map((l) => (
                <span
                  key={`${copy}-${l.name}`}
                  className="grid h-24 w-44 shrink-0 place-items-center rounded-md border border-navy/10 bg-white p-6 shadow-[0_1px_0_rgba(6,23,51,0.04)] sm:h-28 sm:w-52 lg:h-32 lg:w-60 lg:p-8"
                >
                  <LogoPlate
                    name={l.name}
                    logo={l.logo}
                    scale={l.scale}
                    alt=""
                    sizes="240px"
                    className="h-full w-full"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

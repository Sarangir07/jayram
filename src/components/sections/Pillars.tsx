import Reveal from "@/components/ui/Reveal";
import { PILLARS } from "@/data/site";

export default function Pillars() {
  return (
    <section id="pillars" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-y-0 left-[12%] hidden w-px bg-navy/10 lg:block" />
      <div className="u-container py-[clamp(4.5rem,8vw,9rem)]">
        <p className="u-coord">Sec 03 — Intent</p>
        <Reveal>
          <h2 className="u-display mt-8 max-w-[18ch] text-[clamp(2rem,3.8vw,3.6rem)]">
            How the work is held.
          </h2>
        </Reveal>

        <ol className="mt-16">
          {PILLARS.map((pillar, i) => (
            <li
              key={pillar.key}
              className="grid gap-6 border-t border-navy/12 py-10 last:border-b md:grid-cols-[7rem_14rem_1fr] md:items-start md:gap-10 lg:py-14"
            >
              <Reveal delay={i * 80}>
                <span className="block font-extrabold tracking-[-0.06em] text-navy/20" style={{ fontSize: "clamp(2.8rem,5vw,4.4rem)", lineHeight: 0.9 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Reveal>
              <Reveal delay={i * 80 + 40}>
                <p className="text-[0.68rem] font-bold tracking-[0.32em] text-red uppercase">{pillar.key}</p>
                <span aria-hidden className="mt-5 block h-10 w-px bg-navy/20" />
              </Reveal>
              <Reveal delay={i * 80 + 80}>
                <h3 className="max-w-[22ch] text-[clamp(1.35rem,2.2vw,2rem)] font-extrabold tracking-[-0.03em] text-navy">
                  {pillar.title}
                </h3>
                <p className="u-lede mt-4 max-w-[40rem] text-[1.02rem]">{pillar.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

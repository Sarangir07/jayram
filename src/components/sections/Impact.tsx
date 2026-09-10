import FrameImage from "@/components/ui/FrameImage";
import Reveal from "@/components/ui/Reveal";
import { COMPANY, HERO, IMPACT, IMPACT_NOTES } from "@/data/site";

export default function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <FrameImage
          src="/assets/jayam/editorial/dubai-architecture.jpg"
          alt="Dubai skyline at dusk"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,16,34,0.72)_0%,rgba(4,16,34,0.88)_100%)]" />
      </div>
      <div className="u-eng-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="u-container relative py-[clamp(5rem,10vw,9.5rem)]">
        <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
          Sec 08 — Record
        </p>
        <Reveal>
          <h2 className="u-display mt-6 max-w-[16ch] text-[clamp(2rem,4vw,3.6rem)] text-white">
            A practice built in {COMPANY.location}.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.map((item, i) => (
            <Reveal key={item.label} delay={i * 80} className="bg-[#061733]/80 px-6 py-10">
              <p className="text-[0.62rem] font-semibold tracking-[0.24em] text-teal-400 uppercase">
                {item.label}
              </p>
              <p className="mt-4 text-[clamp(2.4rem,4.5vw,3.6rem)] font-extrabold tracking-[-0.05em] text-white">
                {item.value}
              </p>
              {item.label === "Delivery" && (
                <p className="mt-2 text-[0.72rem] font-semibold tracking-[0.16em] text-white/55 uppercase">
                  {HERO.stat.line1}
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <ul className="mt-12 grid gap-6 border-t border-white/12 pt-10 sm:grid-cols-3">
          {IMPACT_NOTES.map((note) => (
            <li key={note.k}>
              <p className="text-[0.62rem] font-bold tracking-[0.28em] text-red-bright uppercase">{note.k}</p>
              <p className="mt-3 text-[1.05rem] font-semibold tracking-[-0.02em] text-white">{note.t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

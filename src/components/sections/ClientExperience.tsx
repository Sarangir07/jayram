import FrameImage from "@/components/ui/FrameImage";
import Reveal from "@/components/ui/Reveal";
import { CLIENT_JOURNEY } from "@/data/site";

export default function ClientExperience() {
  return (
    <section id="clients" className="relative overflow-hidden bg-[var(--off-white)]">
      <div className="u-container py-[clamp(4.5rem,8vw,8.5rem)]">
        <p className="u-coord">Sec 11 — Client</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <h2 className="u-display text-[clamp(2.2rem,4.4vw,4.1rem)]">
              Built around
              <span className="u-display-gradient block">the client.</span>
            </h2>
            <p className="u-lede mt-6 max-w-[32rem] text-[1.05rem]">
              No published testimonials are listed here. The working relationship
              is the record — understanding, planning, execution and support.
            </p>
          </Reveal>

          <div className="relative min-h-[20rem] overflow-hidden lg:min-h-[28rem]">
            <FrameImage
              src="/assets/jayam/editorial/interior.jpg"
              alt="Refined interior volume"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>

        <ol className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {CLIENT_JOURNEY.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className="bg-[var(--off-white)] px-6 py-8">
              <p className="text-[0.62rem] font-bold tracking-[0.28em] text-red uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-[1.15rem] font-extrabold tracking-[-0.02em] text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

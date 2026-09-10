import FrameImage from "@/components/ui/FrameImage";
import Reveal from "@/components/ui/Reveal";

export default function ProjectStory() {
  return (
    <section id="approach" className="relative min-h-[85vh] overflow-hidden">
      <FrameImage
        src="/assets/jayam/hd/evening.jpg"
        alt="Aerial view of Dubai architecture at the coast"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,32,0.35)_0%,rgba(5,16,32,0.78)_100%)]" />

      <div className="u-container relative flex min-h-[85vh] flex-col justify-end py-16 lg:py-24">
        <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">
          Sec 06 — Approach
        </p>
        <Reveal>
          <h2 className="u-display mt-6 max-w-[16ch] text-[clamp(2.3rem,5.6vw,5rem)] text-white">
            From systems to spaces,
            <span className="block text-blue-200">every detail matters.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid max-w-[52rem] gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
          {[
            { n: "01", t: "Specify", d: "Systems chosen for the way the building will actually run." },
            { n: "02", t: "Coordinate", d: "Trades sequenced so finishes and plant do not fight each other." },
            { n: "03", t: "Remain", d: "The same team stays with the asset after the site is quiet." },
          ].map((item) => (
            <Reveal key={item.n} delay={Number(item.n) * 70}>
              <p className="text-[0.62rem] font-bold tracking-[0.28em] text-red-bright uppercase">{item.n}</p>
              <p className="mt-3 text-[1.05rem] font-extrabold tracking-[-0.02em] text-white">{item.t}</p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-white/70">{item.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

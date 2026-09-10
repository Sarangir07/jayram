import FrameImage from "@/components/ui/FrameImage";
import Reveal from "@/components/ui/Reveal";

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative overflow-hidden bg-white">
      <div className="u-container py-[clamp(4.5rem,8vw,8.5rem)]">
        <p className="u-coord">Sec 09 — Landscape</p>
        <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="u-display text-[clamp(2.2rem,4.8vw,4.6rem)]">
              Better spaces.
              <span className="u-display-gradient block">Responsible futures.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="u-lede max-w-[32rem] text-[1.05rem]">
              Landscape, water and efficient systems are part of how a building
              is lived in — not a separate claim. We specify for climate, use
              and the life of the asset.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2">
          <Reveal className="relative min-h-[18rem] overflow-hidden md:col-span-7 md:row-span-2 md:min-h-[36rem]">
            <FrameImage
              src="/assets/jayam/hd/green.jpg"
              alt="Planted architecture and landscape"
              sizes="(min-width: 768px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,23,51,0)_40%,rgba(6,23,51,0.55)_100%)]" />
            <p className="absolute bottom-6 left-6 max-w-[16rem] text-[0.92rem] font-semibold text-white">
              Planting and shade specified for the climate they serve.
            </p>
          </Reveal>
          <Reveal delay={80} className="relative min-h-[14rem] overflow-hidden md:col-span-5">
            <FrameImage
              src="/assets/jayam/hd/landscape.jpg"
              alt="Formal landscape planting"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </Reveal>
          <Reveal delay={140} className="relative min-h-[14rem] overflow-hidden md:col-span-5">
            <FrameImage
              src="/assets/jayam/hd/water.jpg"
              alt="Water in a landscaped setting"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-navy/25" />
            <p className="absolute right-5 bottom-5 left-5 text-[0.82rem] font-semibold tracking-[0.08em] text-white">
              Water features as systems — hydraulics, finish, ongoing care.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

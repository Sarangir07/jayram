import FrameImage from "@/components/ui/FrameImage";
import { ABOUT_COPY, COMMITMENT, PROCESS, WHY_JAYAM } from "@/data/inner";
import { HD } from "@/data/photos";

export default function AboutView() {
  return (
    <>
      <section className="bg-white">
        <div className="u-container grid gap-10 py-[clamp(3.5rem,7vw,7.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-teal uppercase">Established</p>
            <p
              aria-hidden
              className="mt-2 font-black tracking-[-0.08em] text-navy/[0.08]"
              style={{ fontSize: "clamp(7rem, 18vw, 14rem)", lineHeight: 0.8 }}
            >
              2021
            </p>
            <h2 className="u-display mt-6 max-w-[14ch] text-[clamp(1.8rem,3.2vw,3rem)]">
              Company story.
            </h2>
          </div>
          <div className="space-y-5 pt-4">
            {ABOUT_COPY.story.map((p) => (
              <p key={p.slice(0, 24)} className="text-[1.02rem] leading-[1.75] text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden">
        <FrameImage
          src={HD.green}
          alt="Architectural landscape context"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,14,30,0.78)_10%,rgba(4,14,30,0.28)_100%)]" />
        <div className="u-container relative flex min-h-[70vh] items-end py-16">
          <div className="max-w-[38rem]">
            <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">What we do</p>
            <p className="mt-4 text-[clamp(1.2rem,2vw,1.55rem)] font-semibold leading-snug text-white">
              {ABOUT_COPY.whatWeDo}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--off-white)]">
        <div className="u-container grid gap-12 py-[clamp(3.5rem,7vw,7rem)] lg:grid-cols-2">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-teal uppercase">Our approach</p>
            <p className="mt-5 text-[1.12rem] leading-[1.75] text-navy">{ABOUT_COPY.approach}</p>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden">
            <FrameImage
              src={HD.engineer}
              alt="Engineer reviewing facility drawings"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section className="u-deep text-white">
        <div className="u-container grid gap-16 py-[clamp(3.5rem,7vw,7.5rem)] lg:grid-cols-2">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">Vision</p>
            <h2 className="mt-4 text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold tracking-[-0.03em]">
              {ABOUT_COPY.visionTitle}
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-white/72">{ABOUT_COPY.vision}</p>
          </div>
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">Mission</p>
            <h2 className="mt-4 text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold tracking-[-0.03em]">
              {ABOUT_COPY.missionTitle}
            </h2>
            <div className="mt-5 space-y-4">
              {ABOUT_COPY.mission.map((p) => (
                <p key={p.slice(0, 20)} className="text-[0.98rem] leading-relaxed text-white/72">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="u-container py-[clamp(3.5rem,7vw,7rem)]">
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-teal uppercase">Why Jayam</p>
          <h2 className="u-display mt-4 max-w-[16ch] text-[clamp(1.8rem,3.2vw,3rem)]">
            One company for multiple technical requirements.
          </h2>
          <ol className="mt-12">
            {WHY_JAYAM.map((item, i) => (
              <li
                key={item.title}
                className="grid gap-3 border-t border-navy/12 py-8 last:border-b md:grid-cols-[5.5rem_minmax(0,18rem)_1fr] md:items-baseline"
              >
                <span className="text-[1.6rem] font-extrabold tracking-[-0.04em] text-navy/18">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-extrabold text-navy">{item.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--off-white)]">
        <div className="u-container py-[clamp(3.5rem,7vw,7rem)]">
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-teal uppercase">Work process</p>
          <h2 className="u-display mt-4 text-[clamp(1.8rem,3.2vw,3rem)]">Simple, professional and customer-focused.</h2>
          <ol className="relative mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            <span aria-hidden className="pointer-events-none absolute top-4 right-[6%] left-[6%] hidden h-px bg-navy/15 lg:block" />
            {PROCESS.map((step) => (
              <li key={step.n}>
                <span className="relative z-10 grid size-8 place-items-center rounded-full border border-navy/20 bg-white text-[0.65rem] font-bold">
                  {step.n}
                </span>
                <h3 className="mt-5 text-[0.78rem] font-extrabold tracking-[0.18em] text-navy uppercase">{step.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="u-deep text-white">
        <div className="u-container py-[clamp(3.5rem,7vw,6.5rem)]">
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-blue-200 uppercase">Commitment</p>
          <h2 className="u-display mt-4 text-[clamp(1.8rem,3.2vw,3rem)] text-white">
            Quality, reliability and customer satisfaction.
          </h2>
          <ul className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {COMMITMENT.map((item) => (
              <li key={item.title} className="bg-[#061733] px-5 py-8">
                <h3 className="font-extrabold">{item.title}</h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-white/65">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

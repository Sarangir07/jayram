import FrameImage from "@/components/ui/FrameImage";
import { ARCHIVE_PROJECTS } from "@/data/inner";

export default function ProjectsArchive() {
  return (
    <section className="bg-[#04101f] text-white">
      <div className="u-container py-8">
        <p className="text-[0.62rem] tracking-[0.22em] text-white/45 uppercase">
          Imagery is contextual. It is not labelled as a photograph of the named project.
        </p>
      </div>
      {ARCHIVE_PROJECTS.map((project, i) => {
        const flip = i % 2 === 1;
        return (
          <article
            key={project.id}
            data-cursor="View"
            className={`relative min-h-[70vh] overflow-hidden lg:min-h-[78vh] ${flip ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="absolute inset-0">
              <FrameImage src={project.image} alt="" sizes="100vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,30,0.2)_0%,rgba(4,14,30,0.78)_100%)]" />
            </div>
            <div className="u-container relative flex min-h-[70vh] flex-col justify-end py-12 lg:min-h-[78vh] lg:py-16">
              <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-blue-200 uppercase">
                Project {String(project.id).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-[clamp(2rem,5vw,4.4rem)] font-extrabold tracking-[-0.04em]">
                {project.title}
              </h2>
              <p className="mt-2 text-[0.82rem] font-semibold tracking-[0.18em] text-white/70 uppercase">
                {project.place}
              </p>
              <p className="mt-6 inline-flex border border-white/25 px-3 py-1 text-[0.72rem] font-bold tracking-[0.16em] uppercase">
                {project.scope}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

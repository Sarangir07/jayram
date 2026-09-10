import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { PROJECTS } from "@/data/site";

const FEATURED = [PROJECTS[0], PROJECTS[2], PROJECTS[5], PROJECTS[8]];

export default function Projects({ all = false }: { all?: boolean }) {
  const list = all ? PROJECTS : FEATURED;
  return (
    <section id="projects" className="relative bg-[#f7fafc]">
      <div className="u-container py-[clamp(3.5rem,6.5vw,6.5rem)]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="text-[0.72rem] font-bold tracking-[0.28em] text-teal uppercase">
              {all ? "Projects" : "Featured Projects"}
            </p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3.1rem)] font-extrabold tracking-[-0.035em] text-navy">
              Delivered with <span className="text-blue">Excellence</span>
            </h2>
          </Reveal>
          {!all && (
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-navy hover:text-blue"
            >
              View All Projects
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          )}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {list.map((project, i) => (
            <li key={project.id}>
              <Reveal delay={i * 70}>
                <article className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_16px_40px_-24px_rgba(6,23,51,0.4)]">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title}, ${project.place}`}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="text-[1.05rem] font-extrabold tracking-[-0.02em] text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[0.8rem] text-muted">{project.place}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

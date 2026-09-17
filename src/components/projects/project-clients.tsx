import Image from "next/image";

import Reveal from "@/components/ui/Reveal";
import { CLIENTS } from "@/data/clients";
import { PROJECTS, projectNumber } from "@/data/projects";

/** Client → projects, for the clients the profile names against a project. Text first; a small logo only where one exists. */
export default function ProjectClients() {
  const linked = CLIENTS.map((c) => ({
    client: c,
    projects: PROJECTS.filter((p) => p.client === c.id),
  })).filter((x) => x.projects.length > 0);

  return (
    <section className="bg-white" aria-labelledby="clients-heading">
      <div className="u-container py-[clamp(4.5rem,8vw,8rem)]">
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="u-coord">
              <span className="text-red">10</span> — Clients
            </p>
            <h2
              id="clients-heading"
              className="mt-5 text-[clamp(2.2rem,5vw,4.8rem)] leading-[0.94] font-black tracking-[-0.045em] text-navy uppercase"
            >
              <span className="block">The clients</span>
              <span className="block text-blue">behind the projects.</span>
            </h2>
          </div>
          <div className="self-end lg:col-span-4 lg:col-start-9">
            <p className="u-lede text-[0.98rem]">
              Where the company profile names the client, it is listed here
              against the project delivered.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 border-t border-navy">
          {linked.map(({ client, projects }, i) => (
            <Reveal
              key={client.id}
              as="li"
              delay={i * 60}
              className="group grid grid-cols-[3rem_1fr] gap-x-4 border-b border-navy/10 py-8 sm:grid-cols-[4.5rem_1fr] lg:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-x-8 lg:py-10"
            >
              <span className="pt-1.5 text-[0.72rem] font-bold tracking-[0.22em] text-red tabular-nums">
                {projectNumber(i + 1)}
              </span>
              <div className="flex items-center gap-5">
                <h3 className="text-[clamp(1.6rem,3.4vw,3rem)] leading-[0.96] font-black tracking-[-0.04em] text-navy uppercase transition-colors group-hover:text-blue">
                  {client.name}
                </h3>
                <span className="relative hidden h-7 w-16 shrink-0 opacity-70 transition-opacity group-hover:opacity-100 sm:block">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="64px"
                    className="object-contain object-left"
                  />
                </span>
              </div>
              <ul className="col-start-2 mt-4 grid gap-y-2 lg:col-start-3 lg:mt-1">
                {projects.map((p) => (
                  <li
                    key={p.id}
                    className="flex flex-wrap items-baseline gap-x-3 text-[0.92rem] leading-snug font-semibold text-ink transition-colors group-hover:text-navy"
                  >
                    <span aria-hidden className="text-blue">→</span>
                    {p.title}
                    <span className="text-[0.62rem] font-bold tracking-[0.2em] text-muted uppercase">
                      {p.service}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

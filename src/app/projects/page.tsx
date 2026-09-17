import type { Metadata } from "next";

import InnerShell from "@/components/inner/InnerShell";
import ArchiveCta from "@/components/projects/archive-cta";
import ArchiveHero from "@/components/projects/archive-hero";
import ProjectArchive from "@/components/projects/project-archive";
import ProjectClients from "@/components/projects/project-clients";
import ProjectLocations from "@/components/projects/project-locations";
import ProjectNumbers from "@/components/projects/project-numbers";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The JAYAM Technical Services project register — selected MEP, fit-out, plumbing, chilled water, landscaping, indoor plantation and swimming pool projects across the UAE.",
  openGraph: {
    title: "Project Archive | JAYAM Technical Services LLC",
    description:
      "Projects that speak through delivery — a register of selected MEP, fit-out, plumbing, landscaping and pool projects across Dubai and the UAE.",
  },
};

/**
 * The project archive: a text-first register of the company's selected
 * projects. Sections 02–07 share state and live in <ProjectArchive>.
 */
export default function ProjectsPage() {
  return (
    <InnerShell>
      <ArchiveHero />
      <ProjectArchive />
      <ProjectNumbers />
      <ProjectLocations />
      <ProjectClients />
      <ArchiveCta />
    </InnerShell>
  );
}

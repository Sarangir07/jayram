import type { Metadata } from "next";

import Projects from "@/components/sections/Projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main id="main" className="pt-[calc(var(--nav-pad)+4.5rem)] lg:pt-[calc(var(--nav-pad)+6.2rem)]">
      <Projects all />
    </main>
  );
}

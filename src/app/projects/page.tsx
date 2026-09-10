import type { Metadata } from "next";

import Projects from "@/components/sections/Projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main id="main" className="pt-[4.75rem]">
      <Projects all />
    </main>
  );
}

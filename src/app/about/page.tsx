import type { Metadata } from "next";

import About from "@/components/sections/About";
import Careers from "@/components/sections/Careers";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main id="main" className="pt-[calc(var(--nav-pad)+4.5rem)] lg:pt-[calc(var(--nav-pad)+6.2rem)]">
      <About />
      <Careers />
    </main>
  );
}

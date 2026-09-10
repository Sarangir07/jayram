import type { Metadata } from "next";

import About from "@/components/sections/About";
import Careers from "@/components/sections/Careers";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main id="main" className="pt-[4.75rem]">
      <About />
      <Careers />
    </main>
  );
}

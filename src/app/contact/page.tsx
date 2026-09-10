import type { Metadata } from "next";

import Contact from "@/components/sections/Contact";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main id="main" className="pt-[calc(var(--nav-pad)+4.5rem)] lg:pt-[calc(var(--nav-pad)+6.2rem)]">
      <Contact />
    </main>
  );
}

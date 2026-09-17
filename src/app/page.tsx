import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import CallToAction from "@/components/sections/CallToAction";
import Contact from "@/components/sections/Contact";
import Careers from "@/components/sections/Careers";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <Clients />
      <WaveDivider from="#f3f7fb" to="#ffffff" />
      <About />
      <Projects />
      <CallToAction />
      <Contact />
      <Careers />
    </main>
  );
}

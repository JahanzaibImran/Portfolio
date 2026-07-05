import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { AIExperience } from "@/components/sections/ai-experience";
import { CloudExperience } from "@/components/sections/cloud-experience";
import { WorkExperience } from "@/components/sections/work-experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { OpenSource } from "@/components/sections/open-source";
import { TerminalShowcase } from "@/components/sections/terminal-showcase";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIExperience />
        <CloudExperience />
        <WorkExperience />
        <Testimonials />
        <TerminalShowcase />
        <Blog />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

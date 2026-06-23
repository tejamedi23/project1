import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Trust } from "@/components/sections/Trust";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-brand-blue/30 selection:text-white">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />
      <div className="fixed inset-0 z-[-2] bg-dark-charcoal" />
      
      <Navbar />
      
      <main className="flex-1 flex flex-col w-full relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Trust />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

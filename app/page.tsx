import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9ff]">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Projects />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

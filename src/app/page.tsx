import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Workshops from "@/components/Workshops";
import Leadership from "@/components/Leadership";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Workshops />
        <Leadership />
      </main>
      <Footer />
    </>
  );
}

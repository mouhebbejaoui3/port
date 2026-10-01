"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Languages from "@/sections/Languages";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Languages />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </SmoothScroll>
    </ThemeProvider>
  );
}

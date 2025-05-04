"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/intro/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-1000">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

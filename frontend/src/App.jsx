import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationExperience from "./components/EducationExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% of section must be visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="App scroll-smooth">
        <Navigation activeSection={activeSection} />

        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="education-experience" className="min-h-screen flex items-center justify-center">
          <EducationExperience />
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
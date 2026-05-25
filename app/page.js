import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";

import dynamic from "next/dynamic";

const Skills = dynamic(() => import("./components/homepage/skills"), {
  ssr: false,
});

const ContactSection = dynamic(
  () => import("./components/homepage/contact"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      
      <ContactSection />
    </>
  )
};
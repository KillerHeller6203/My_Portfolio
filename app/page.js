import { personalData } from "@/utils/data/personal-data";
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


async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

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
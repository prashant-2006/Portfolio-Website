import React from "react";
import SkillsSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <>
    <HomeSection />
    <SkillsSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
    </>
  );
}

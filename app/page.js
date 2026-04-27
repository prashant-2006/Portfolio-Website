import React from "react";
import HomeSection from "./components/HomeSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

// Beautiful fading divider component
const SectionDivider = () => (
  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
);

export default function Home() {
  return (
    <>
      <HomeSection />
      <SectionDivider />
      
      <ExperienceSection />
      <SectionDivider />
      
      <SkillsSection />
      <SectionDivider />
      
      <ProjectsSection />
      <SectionDivider />
      
      <AboutSection />
      <SectionDivider />
      
      <ContactSection />
    </>
  );
}
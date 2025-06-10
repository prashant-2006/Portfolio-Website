'use client'
import React from "react";
import SkillCard from "./SkillCard";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiCplusplus,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiC,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  { name: "C", icon: <SiC className="text-gray-700 dark:text-gray-300" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
];

const SkillsSection = () => (
  <section id="skills" className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-12 px-6 transition-colors duration-300 scroll-mt-10 -mt-14">
    <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent font-bold">
            My Skills
          </span>
        </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

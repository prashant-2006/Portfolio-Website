'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const aboutData = [
  {
    title: "Areas of Interest",
    icon: <FaCode className="text-rose-500 text-4xl mb-4" />,
    content: [
      "Web Development",
      "DSA",
      "Competitive Programming",
      "Game Development",
      "Machine Learning",
    ],
  },
  {
    title: "Education",
    icon: <FaGraduationCap className="text-rose-500 text-4xl mb-4" />,
    content: [
      "B.Tech in Computer Science",
      "IIT Bhubaneshwar, Odisha",
      "2024 - 2028",
      "Intermediate - 94% (CBSE Board)",
      "High School - 97.16% (CBSE Board)"
    ],
  },
  {
    title: "Profession",
    icon: <FaBriefcase className="text-rose-500 text-4xl mb-4" />,
    content: [
      "Frontend Developer",
      "Freelancer / Open Source Contributor",
    ],
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 px-6 transition-colors duration-300 scroll-mt-10 -mt-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent font-bold">
            About Me
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed"
        >
          I&apos;m a passionate and curious tech enthusiast, currently pursuing my B.Tech in Computer Science from IIT Bhubaneshwar. I thrive on solving real-world problems through code and enjoy diving deep into web technologies, competitive programming, and machine learning. With a strong foundation in DSA and modern frontend frameworks, I love turning ideas into clean, interactive digital experiences.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-rose-600/20 transition duration-300"
            >
              {section.icon}
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                {section.content.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

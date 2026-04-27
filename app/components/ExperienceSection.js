'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDiamond } from "react-icons/fa6";

const experienceData = [
  {
    id: 1,
    company: "Flash Analytics",
    type: "Internship",
    role: "Web Development Intern",
    duration: "Apr 2026 - Present · 1 mo",
    location: "Remote",
    skills: "Front-End Development, API Testing and +2 skills",
    logoImage: "/flash.jpg",
  },
  {
    id: 2,
    company: "Web and Design Society - IIT Bhubaneswar",
    totalDuration: "1 yr 6 mos",
    logoImage: "/webnd.jpg",
    roles: [
      {
        role: "Governor",
        duration: "Apr 2026 - Present · 1 mo",
        skills: "Team Leadership and Project Management",
      },
      {
        role: "Member",
        duration: "Nov 2024 - Present · 1 yr 6 mos",
        location: "Bhubaneswar, Odisha, India",
        skills: "Tailwind CSS, Next.js and +7 skills",
      }
    ]
  },
  {
    id: 3,
    company: "Neuromancers - IIT Bhubaneswar",
    role: "Member",
    duration: "Mar 2025 - Present · 1 yr 2 mos",
    location: "Bhubaneswar, Odisha, India",
    skills: "C++ and Competitive Programming",
    logoImage: "/neuro.jpg",
  }
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-white dark:bg-gray-900 text-black dark:text-white py-20 px-6 transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent font-bold">
            Experience
          </span>
        </motion.h2>

        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex gap-4 md:gap-6 relative"
            >
              {/* Vertical line connection for items */}
              {idx !== experienceData.length - 1 && (
                <div className="absolute left-6 md:left-8 top-16 bottom-[-3rem] w-[2px] bg-gray-300 dark:bg-gray-700" />
              )}

              {/* Logo / Avatar using Next.js Image */}
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 relative z-10 rounded-md shadow-md overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <Image
                  src={exp.logoImage}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                {exp.roles ? (
                  // Multi-role experience (e.g., Web and Design Society)
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                      {exp.company}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.totalDuration}</p>
                    
                    <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-2 pl-6 md:ml-3 space-y-6">
                      {exp.roles.map((role, rIdx) => (
                        <div key={rIdx} className="relative">
                          {/* Inner timeline dot */}
                          <div className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-500 ring-4 ring-white dark:ring-gray-950"></div>
                          <h4 className="text-md md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {role.role}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{role.duration}</p>
                          {role.location && <p className="text-gray-500 dark:text-gray-400 text-sm">{role.location}</p>}
                          {role.skills && (
                            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mt-2 flex items-center gap-2">
                              <FaDiamond className="text-rose-500 text-[10px]" /> {role.skills}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Single role experience
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-md text-gray-800 dark:text-gray-300 font-medium mt-1">
                      {exp.company} {exp.type && `· ${exp.type}`}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.duration}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</p>
                    {exp.skills && (
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mt-3 flex items-center gap-2">
                        <FaDiamond className="text-rose-500 text-[10px]" /> {exp.skills}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
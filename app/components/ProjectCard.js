'use client'

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-rose-500/30 transition duration-300 relative"
  >
    {/* Image with always-visible icons */}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-52 object-cover"
      />
      <div className="absolute top-2 right-2 flex gap-2">
        <a
          href={project.gitRepo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="bg-black/70 text-white p-2 rounded-full hover:bg-rose-600 transition"
        >
          <FaGithub className="text-lg" />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Demo"
          className="bg-black/70 text-white p-2 rounded-full hover:bg-rose-600 transition"
        >
          <FaExternalLinkAlt className="text-lg" />
        </a>
      </div>
    </div>

    {/* Project Info */}
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {project.name}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-rose-700 text-white text-xs font-medium px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;

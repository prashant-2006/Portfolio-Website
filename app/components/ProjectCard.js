import React from "react";

const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-rose-500/30 transition duration-300">
    {/* eslint-disable react/no-unescaped-entities */}
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-auto object-contain"
    />
    {/* eslint-disable react/no-unescaped-entities */}
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
  </div>
);

export default ProjectCard;

'use client'
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    name: "GameShelf",
    description:
      "A full stack personal game tracker website with user auth. Browse games, save progress, keep track of games played.",
    image: "/gameTracker.png",
    techStack: ["Next.js", "Tailwind", "React"],
    gitRepo: "https://github.com/prashant-2006/Personalized-Game-Tracker",
    live: "https://personalized-game-tracker.vercel.app/"
  },
  {
    name: "MovieDB",
    description:
      "A full-stack movie database website with user auth. Browse movies, maintain a watchlist.",
    image: "/movieDB.png",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind", "JWT"],
    gitRepo: "https://github.com/prashant-2006/movieDB-React",
    live: "https://moviedbbyprashantsharma.netlify.app/"
  },
  {
    name: "Heavenly Cabins",
    description:
      "A full-stack cabin management system with user auth, guest and cabin management, real-time data visualization, built with Supabase.",
    image: "/heavenlyCabins.png",
    techStack: ["React", "Supabase", "Tailwind CSS", "Recharts"],
    gitRepo: "https://github.com/prashant-2006/Heavenly-Cabins",
    live: "https://heavenly-cabins.vercel.app/"
  },
  {
    name: "Airbnb Clone",
    description:
      "A responsive Airbnb clone UI built with modern design and layout features.",
    image: "/airbnb.png",
    techStack: ["React", "Tailwind CSS"],
    gitRepo: "https://github.com/prashant-2006/Airbnb-Clone",
    live: "https://airbnb-clone-gamma-rust.vercel.app/"
  },
  {
    name: "React Quiz",
    description:
      "Interactive React quiz app with questions fetched from an API and focused on ReactJS concepts.",
    image: "/quiz.png",
    techStack: ["React", "API", "Tailwind CSS"],
    gitRepo: "https://github.com/prashant-2006/quizApp-React",
    live: "https://reactquizbyprashantsharma.netlify.app/"
  },
];

const ProjectsSection = () => (
  <section
    id="projects"
    className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 px-6 transition-colors duration-300 scroll-mt-10 -mt-10"
  >
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent font-bold">
          My Projects
        </span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;


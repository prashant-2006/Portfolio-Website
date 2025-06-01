import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "GameShelf",
    description:
      "A full stack personal game tracker website with user auth. Browse games, save progress, keep track of games played.",
    image: "/gameTracker.png",
    techStack: ["Next.js", "Tailwind", "React"],
  },
  {
    name: "MovieDB",
    description:
      "A full-stack movie database website with user auth. Browse movies, maintain a watchlist.",
    image: "/movieDB.png",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind", "JWT"],
  },
  {
    name: "Heavenly Cabins",
    description:
      "A full-stack cabin management system with user auth, guest and cabin management, real-time data visualization, built with Supabase.",
    image: "/heavenlyCabins.png",
    techStack: ["React", "Supabase", "Tailwind CSS", "Recharts"],
  },
  {
    name: "Airbnb Clone",
    description:
      "A responsive Airbnb clone UI built with modern design and layout features.",
    image: "/airbnb.png",
    techStack: ["React", "Tailwind CSS"],
  },
  {
    name: "React Quiz",
    description:
      "Interactive React quiz app with questions fetched from an API and focused on ReactJS concepts.",
    image: "/quiz.png",
    techStack: ["React", "API", "Tailwind CSS"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 px-6 transition-colors duration-300 scroll-mt-10">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent font-bold">
          My Projects
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

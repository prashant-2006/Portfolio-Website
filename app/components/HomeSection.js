"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 scroll-mt-12">
      {/* Left content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I&apos;m <span className="text-rose-600">Prashant</span>
        </h1>

        <TypeAnimation
          sequence={[
            "a Full Stack Developer.",
            2000,
            "a Problem Solver.",
            2000,
            "a Tech Enthusiast.",
            2000,
            "a Lifelong Learner.",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
        />

        <p className="mt-6 text-gray-700 dark:text-gray-400 max-w-md">
          I build fast, responsive, and accessible websites using modern tech stacks like React, Next.js, Node.js, and MongoDB. Let&apos;s create something awesome together.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 mb-10 md:mb-0 flex justify-center">
        <div className="w-44 h-44 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-lg ring-4 ring-rose-600/70">
          <Image
            src="/me.jpg" // <-- Replace with your image path
            alt="Prashant"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
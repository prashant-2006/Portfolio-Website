'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/prashant-2006",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/prashant-sharma-61b0b8338",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/prashant2938sharma",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    href: "mailto:prashantsharma220806@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 px-6 transition-colors duration-300 scroll-mt-10 -mt-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent font-bold">
            Contact Me
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Whether you&apos;re looking to collaborate on a project, need a frontend developer, or just want to network — feel free to reach out. I&apos;m always open to exciting opportunities and meaningful connections.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center flex-wrap gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
          viewport={{ once: true }}
        >
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center space-x-2 text-sm bg-white dark:bg-gray-800 hover:bg-rose-600 dark:hover:bg-rose-600 text-black dark:text-white hover:text-white transition px-4 py-2 rounded-full shadow-md"
            >
              <span className="text-lg">{social.icon}</span>
              <span>{social.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="mailto:prashantsharma220806@gmail.com"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block bg-rose-600 hover:bg-rose-500 text-white font-semibold py-3 px-8 rounded-full transition shadow-lg hover:shadow-rose-600/40"
        >
          Hire Me
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;

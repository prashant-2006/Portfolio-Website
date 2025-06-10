'use client';
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ name, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:scale-105"
  >
    <div className="text-5xl mb-2 text-gray-900 dark:text-white">{icon}</div>
    <p className="text-gray-900 dark:text-white text-lg font-medium">{name}</p>
  </motion.div>
);

export default SkillCard;

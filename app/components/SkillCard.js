import React from "react";

const SkillCard = ({ name, icon }) => (
  <div className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:scale-105">
    <div className="text-5xl mb-2 text-gray-900 dark:text-white">{icon}</div>
    <p className="text-gray-900 dark:text-white text-lg font-medium">{name}</p>
  </div>
);

export default SkillCard;

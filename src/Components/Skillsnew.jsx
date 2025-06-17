import React from "react";
import {
  java,
  python,
  js,
  html,
  css,
  git,
  github,
  react,
  C,
  figma,
  docker,
} from "../assets/Skills/Skills.js";

const Skills = () => {
  const skills = [
    { name: "Java", image: java },
    { name: "C/C++", image: C },
    { name: "Python", image: python },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "React", image: react },
    { name: "Figma", image: figma },
    { name: "GitHub", image: github },
    { name: "Git", image: git },
    { name: "Docker", image: docker }, // Corrected spelling
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1F252E] px-6 py-16">
      <h2 className="text-4xl font-bold text-white mb-10">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#27293d] text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-12 h-12 mb-3"
            />
            <p className="text-center text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

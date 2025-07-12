import { Github, ExternalLink } from "lucide-react";
import {
  Portfolio,
  atal,
  drone,
  bug,
  nostra,
} from "../assets/Portfolio/Projects.js";
import { techIconMap } from "../utils/techIcons.jsx";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Vite to showcase my skills, resume, and projects.",
    technologies: ["React", "Vite", "CSS", "JavaScript","Tailwind"],
    github: "https://github.com/nanda561/New-portfolio",
    live: "https://dnk-portfolio.netlify.app/",
    image: Portfolio,
  },
  {
    title: "Enhancing Inventory Counting using Drone",
    description:
      "Final year project using Raspberry Pi-powered drones for automated inventory cycle counting with real-time QR scanning.",
    technologies: ["React", "Flask", "MySQL", "Python", "OpenCV"],
    github: "https://github.com/nanda0311/warehouse",
    live: "#",
    image: drone,
  },
  {
    title: "AIC-PECF Official Website",
    description:
      "Developed the official website frontend for Atal Incubation Centre – PEC Foundation with React and Tailwind CSS.",
    technologies: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/nanda0311/aic-pecf-website",
    live: "https://aic-project.netlify.app/",
    image: atal,
  },
  {
    title: "Bug Tracking System",
    description:
      "Developed a web-based Bug Tracking System using Java, JSP, Servlets, and MySQL to streamline bug reporting and resolution in software projects.",
    technologies: [
      "Java",
      "JSP",
      "Servlets",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    github: "https://github.com/nanda0311/BugTracking-System",
    live: "#",
    image: bug,
  },
  {
    title: "Nostra E-Commerce Website",
    description:
      "Designed and developed a modern e-commerce website using HTML, CSS, and JavaScript. Features include responsive design, smooth user experience, product pages, and interactive UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nanda0311/Nostra-E-commerce",
    live: "#",
    image: nostra,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-4 text-white"
      style={{ backgroundColor: "#1F252E" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-orange-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-[200px] object-cover object-center rounded-t-xl"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-orange-500 transition"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>

                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-orange-500 transition"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center text-gray-400 cursor-not-allowed">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      No Live Demo
                    </span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs"
                    >
                      {techIconMap[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

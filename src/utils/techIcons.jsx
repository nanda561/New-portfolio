import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import {
  SiMysql,
  SiVite,
  SiTailwindcss,
  SiFlask,
  SiOpencv,
} from "react-icons/si";

// Mapping tech names to their icon components
export const techIconMap = {
  React: <FaReact className="text-blue-400" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  Java: <FaJava className="text-red-500" />,
  Bootstrap: <FaBootstrap className="text-purple-500" />,
  MySQL: <SiMysql className="text-blue-600" />,
  Python: <FaPython className="text-yellow-500" />,
  Flask: <SiFlask className="text-gray-400" />,
  OpenCV: <SiOpencv className="text-green-500" />,
  Tailwind: <SiTailwindcss className="text-teal-400" />,
  Vite: <SiVite className="text-purple-400" />,
};

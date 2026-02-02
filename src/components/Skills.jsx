import React, { useEffect, useState } from "react";

// ===== ICON IMPORTS =====
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiGithub,
  SiGo,
} from "react-icons/si";

import { FaJava, FaServer, FaTools, FaMobile, FaLayerGroup, FaPalette } from "react-icons/fa";

export default function Skills() {
  const [animatedValues, setAnimatedValues] = useState({});

  /* ================= ICON MAP ================= */
  const iconMap = {
    HTML: <SiHtml5 className="text-orange-400 text-xl" />,
    CSS: <SiCss3 className="text-blue-400 text-xl" />,
    JavaScript: <SiJavascript className="text-yellow-400 text-xl" />,

    "Node.js": <SiNodedotjs className="text-green-500 text-xl" />,
    "Express.js": <FaServer className="text-gray-300 text-xl" />,
    PHP: <SiPhp className="text-indigo-300 text-xl" />,
    Java: <FaJava className="text-red-400 text-xl" />,

    MongoDB: <SiMongodb className="text-green-400 text-xl" />,
    MySQL: <SiMysql className="text-blue-300 text-xl" />,
    PostgreSQL: <SiPostgresql className="text-blue-400 text-xl" />,

    Flutter: <SiFlutter className="text-blue-400 text-xl" />,

    "React.js": <SiReact className="text-cyan-400 text-xl" />,
    "Vue.js": <SiVuedotjs className="text-green-400 text-xl" />,
    "Next.js": <SiNextdotjs className="text-white text-xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-300 text-xl" />,
    TypeScript: <SiTypescript className="text-blue-400 text-xl" />,

    Git: <SiGithub className="text-gray-300 text-xl" />,
    GitHub: <SiGithub className="text-gray-300 text-xl" />,

    "Spring Boot": <SiSpringboot className="text-green-400 text-xl" />,
    Go: <SiGo className="text-cyan-400 text-xl" />,
  };

  /* ================= SKILL CATEGORIES ================= */
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <FaPalette className="text-purple-400 text-3xl" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 80 },
      ],
    },

    {
      title: "Backend Development",
      icon: <FaServer className="text-purple-400 text-3xl" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "PHP", level: 75 },
        { name: "Java", level: 80 },
      ],
    },

    {
      title: "Databases",
      icon: <FaLayerGroup className="text-purple-400 text-3xl" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 95 },
        { name: "PostgreSQL", level: 70 },
      ],
    },

    {
      title: "Mobile App Development",
      icon: <FaMobile className="text-purple-400 text-3xl" />,
      skills: [{ name: "Flutter", level: 65 }],
    },

    {
      title: "Frameworks & Libraries",
      icon: <FaLayerGroup className="text-purple-400 text-3xl" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "TypeScript", level: 75 },
      ],
    },

    {
      title: "Tools",
      icon: <FaTools className="text-purple-400 text-3xl" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
      ],
    },

    {
      title: "Currently Learning",
      icon: <FaLayerGroup className="text-purple-400 text-3xl" />,
      skills: [
        { name: "Spring Boot", level: 75 },
        { name: "Go", level: 50 },
      ],
    },
  ];

  /* ================= ANIMATION ================= */
  useEffect(() => {
    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        let start = 0;
        const end = skill.level;

        const timer = setInterval(() => {
          start += 1;
          setAnimatedValues((prev) => ({
            ...prev,
            [skill.name]: start,
          }));
          if (start >= end) clearInterval(timer);
        }, 20);
      });
    });
  }, []);

  /* ================= UI ================= */
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white"
    >
      <header className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold">
          Technical <span className="text-purple-400">Skills</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Technologies, frameworks, databases & tools I work with.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-[#1d1b26] p-8 rounded-3xl border border-purple-500/20 
                       shadow-lg shadow-purple-900/20 hover:shadow-purple-500/40 
                       transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={150 * index}
          >
            <div className="flex items-center space-x-3 mb-5">
              {category.icon}
              <h2 className="text-2xl font-semibold">{category.title}</h2>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="flex items-center gap-2 font-medium">
                      {iconMap[skill.name]} {skill.name}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-purple-600/30 text-purple-300 text-xs font-semibold">
                      {animatedValues[skill.name] || 0}%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-3 bg-linear-to-r from-purple-400 to-purple-600 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

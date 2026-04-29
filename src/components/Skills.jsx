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
  SiPython,
  SiDocker,
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
    Python: <SiPython className="text-yellow-400 text-xl" />,
    Docker: <SiDocker className="text-blue-400 text-xl" />,
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
        { name: "Spring Boot", level: 80 },
        { name: "Go", level: 80 },
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
        { name: "Python", level: 50 },
        { name: "Docker", level: 50 },
        
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
      className="relative min-h-screen px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.2),transparent_55%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-14 text-center" data-aos="fade-up">
          <p className="mb-3 inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            My Expertise
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Technical <span className="text-purple-400">Skills</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 md:text-base">
            Technologies, frameworks, databases, and tools I use to build scalable and polished products.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-purple-500/20"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-purple-500/15 p-2">
                    {category.icon}
                  </span>
                  <h2 className="text-xl font-semibold md:text-2xl">{category.title}</h2>
                </div>
                <span className="rounded-full border border-purple-300/20 bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-300">
                  {category.skills.length} Skills
                </span>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-medium md:text-base">
                        {iconMap[skill.name]} {skill.name}
                      </span>
                      <span className="rounded-md bg-purple-600/20 px-2 py-1 text-xs font-semibold text-purple-200">
                        {animatedValues[skill.name] || 0}%
                      </span>
                    </div>

                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-700/70">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-purple-400 via-fuchsia-400 to-purple-600 transition-all duration-300"
                        style={{ width: `${animatedValues[skill.name] || 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

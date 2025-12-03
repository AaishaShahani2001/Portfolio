import React, { useEffect, useState } from "react";
import { SiReact, SiNodedotjs, SiFlutter, SiGithub } from "react-icons/si";

export default function Skills() {
  // For percentage counting animation
  const [animatedValues, setAnimatedValues] = useState({});

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <SiReact className="text-purple-400 text-3xl" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },

    {
      title: "Backend Development",
      icon: <SiNodedotjs className="text-purple-400 text-3xl" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PHP", level: 70 },
        { name: "MySQL", level: 85 },
        { name: "Java", level: 70 },
        { name: "Spring Boot", level: 65 },
      ],
    },

    {
      title: "Mobile Development",
      icon: <SiFlutter className="text-purple-400 text-3xl" />,
      skills: [
        { name: "Flutter", level: 60 },
        { name: "React Native", level: 65 },
      ],
    },

    {
      title: "Tools & Cloud",
      icon: <SiGithub className="text-purple-400 text-3xl" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "AWS", level: 55 },
      ],
    },
  ];

  // % counter animation
  useEffect(() => {
    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        let start = 0;
        const end = skill.level;
        const speed = 20;

        const counter = setInterval(() => {
          start += 1;
          setAnimatedValues((prev) => ({
            ...prev,
            [skill.name]: start,
          }));

          if (start >= end) clearInterval(counter);
        }, speed);
      });
    });
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white"
    >
      {/* Header */}
      <header className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold">
          Technical <span className="text-purple-400">Skills</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Technologies I work with across frontend, backend, mobile & cloud.
        </p>
      </header>

      {/* Cards */}
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
            {/* Category Title */}
            <div className="flex items-center space-x-3 mb-5">
              {category.icon}
              <h2 className="text-2xl font-semibold">{category.title}</h2>
            </div>

            {/* Skill Bars */}
            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  {/* Name + Percentage */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-100 font-medium">{skill.name}</span>

                    <span className="px-2 py-1 rounded-md bg-purple-600/30 
                      text-purple-300 font-semibold text-xs">
                      {animatedValues[skill.name] || 0}%
                    </span>
                  </div>

                  {/* Gradient Progress Bar */}
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden relative">
                    <div
                      className="h-3 rounded-full bg-linear-to-r from-purple-400 to-purple-600 
                        shadow-[0_0_10px_rgba(168,85,247,0.7)] transition-all duration-700"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>

                    {/* Glow Dot at End */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full 
                        shadow-[0_0_15px_rgba(168,85,247,0.9)] transition-all duration-700"
                      style={{
                        left: `calc(${skill.level}% - 8px)`,
                      }}
                    ></div>
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

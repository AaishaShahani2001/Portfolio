import React, { useState } from "react";
import img_vue from "../assets/img_vue.jpg";
import img_flutter from "../assets/img_vue.jpg";
import img_next from "../assets/img_vue.jpg";

const ProjectCard = ({ image, title, description, live, github, tech }) => {
  return (
    <article
      className="relative w-full max-w-sm p-5 rounded-3xl overflow-hidden
      backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg
      hover:shadow-purple-500/40 transition-all duration-300 group
      transform hover:-translate-y-1 hover:scale-[1.01] cursor-pointer"
      data-aos="fade-up"
    >
      {/* Glow */}
      <div className="absolute z-0 w-48 h-48 bg-purple-600/40 blur-3xl rounded-full -top-10 left-5 opacity-30"></div>

      <div className="relative z-10">

        <figure className="relative rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-44 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover Buttons */}
          <div
            className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 
            opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"
          >
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500/80 text-white px-4 py-2 rounded-xl 
              hover:bg-purple-600 transition-all"
            >
              Live Demo
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-xl 
              hover:bg-purple-300 transition-all"
            >
              GitHub
            </a>
          </div>
        </figure>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/40"
            >
              {t}
            </span>
          ))}
        </div>

        <header>
          <h3 className="text-lg font-bold mt-3 text-white">{title}</h3>
        </header>

        <p className="text-gray-300 text-sm mt-1">{description}</p>
      </div>
    </article>
  );
};

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [fade, setFade] = useState(true);

  const allProjects = [
    {
      image: img_next,
      title: "Next.js Health Tracker",
      description: "Full-stack fitness tracker with charts & API routes.",
      live: "",
      github: "",
      type: "Web",
      tech: ["Next.js", "Tailwind", "Node"],
    },
    {
      image: img_vue,
      title: "Vue 3 Portfolio",
      description: "Modern animated portfolio built with Vue & GSAP.",
      live: "",
      github: "",
      type: "Web",
      tech: ["Vue", "AOS", "Tailwind"],
    },
    {
      image: img_flutter,
      title: "Flutter Habit Tracker",
      description: "Mobile app for daily habit tracking with smooth UI.",
      live: "",
      github: "",
      type: "Mobile",
      tech: ["Flutter", "Dart"],
    },
  ];

  const handleFilter = (cat) => {
    setFade(false);
    setTimeout(() => {
      setCategory(cat);
      setFade(true);
    }, 250);
  };

  const filtered =
    category === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === category);

  return (
    <main className="p-4">

      {/* Header */}
      <section id="projects" data-aos="fade-up">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-4">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Explore my best Web & Mobile apps.
          </p>
        </header>
      </section>

      {/* Category Filter */}
      <div className="flex justify-center gap-3 mt-6 mb-8 relative">

        {/* Sliding highlight */}
        <div
          className="absolute h-8 w-20 bg-purple-500/20 rounded-xl transition-all duration-300 -z-10"
          style={{
            left:
              category === "All"
                ? "calc(50% - 110px)"
                : category === "Web"
                ? "calc(50% - 35px)"
                : "calc(50% + 40px)",
          }}
        ></div>

        {["All", "Web", "Mobile"].map((c) => (
          <button
            key={c}
            onClick={() => handleFilter(c)}
            className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all border 
            ${
              category === c
                ? "text-purple-400 border-purple-500"
                : "text-white border-white/20 hover:bg-white/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Project Grid - gaps reduced */}
      <section
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {filtered.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            live={project.live}
            github={project.github}
            tech={project.tech}
          />
        ))}
      </section>
    </main>
  );
}

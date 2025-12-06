import React, { useState } from "react";
import img_flutter from "../assets/img_vue.jpg";
import img_bmi from "../assets/bmi_calculator.png";
import img_atlasVue from "../assets/altasVue.png";
import img_bookhive from "../assets/bookhive.png";
import img_snakegame from "../assets/snakeGame.png";
import img_cleanearth from "../assets/cleanEarth.png";

const ProjectCard = ({ image, title, description, live, github, tech, status }) => {
  return (
    <article
      className="relative w-full max-w-sm p-5 rounded-3xl overflow-hidden
      backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg
      hover:shadow-purple-500/40 transition-all duration-300 group
      hover:-translate-y-1 hover:scale-[1.01] mx-auto"
      data-aos="fade-up"
    >
      {/* Status Badge */}
      <span
        className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full z-20
        ${status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-400 text-black"}`}
      >
        {status}
      </span>

      {/* Glow */}
      <div className="absolute z-0 w-48 h-48 bg-purple-600/40 blur-3xl rounded-full -top-10 left-5 opacity-30"></div>

      <div className="relative z-10">

        {/* Image */}
        <figure className="relative rounded-xl overflow-hidden h-48 mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
        </figure>

        {/* Title */}
        <h3 className="text-xl font-bold text-white">{title}</h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mt-1">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300
              rounded-lg border border-purple-500/40"
            >
              {t}
            </span>
          ))}
        </div>

        {/* --- ALWAYS VISIBLE BUTTONS --- */}

        <div className="flex flex-col gap-3 mt-4">

          {/* GitHub button - Purple Outline */}
          <a
            href={github || "#"}
            target="_blank"
            className="w-full text-center py-2 rounded-lg 
              border border-purple-500/50 text-purple-300 
            hover:bg-purple-500/10 hover:border-purple-500 
            hover:text-white transition font-medium"
          >
            GitHub
          </a>

          {/* Live Demo button */}
          <a
            href={live || "#"}
            target="_blank"
            className="w-full text-center py-2 rounded-lg 
              bg-linear-to-r from-purple-500 to-purple-700 
            text-white font-semibold hover:opacity-90 transition"
          >
            Live Demo
          </a>

        </div>


      </div>
    </article>
  );
};

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [fade, setFade] = useState(true);

  const allProjects = [
    {
      image: img_bookhive,
      title: "BookHive",
      description: "Full-stack book management web app.",
      live: "",
      github: "",
      type: "Web",
      tech: ["React", "Tailwind", "Node", "Express", "MongoDB"],
      status: "Completed",
    },
    {
      image: img_atlasVue,
      title: "AtlasVue",
      description: "Modern animated portfolio built with Vue & GSAP.",
      live: "",
      github: "",
      type: "Web",
      tech: ["Vue", "AOS", "Tailwind"],
      status: "Completed",
    },
    {
      image: img_flutter,
      title: "Flutter Habit Tracker",
      description: "Mobile app for daily habit tracking with smooth UI.",
      live: "",
      github: "",
      type: "Mobile",
      tech: ["Flutter", "Dart"],
      status: "In Progress",
    },
    {
      image: img_bmi,
      title: "BMI Calculator",
      description: "Simple BMI calculator built using HTML/CSS/JS.",
      live: "",
      github: "",
      type: "Web",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
    },
    {
      image: img_cleanearth,
      title: "CleanEarth",
      description: "Simple clean earth built using HTML/CSS/JS.",
      live: "",
      github: "",
      type: "Web",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
    },
    {
      image: img_snakegame,
      title: "Snake Game",
      description: "Simple Snake Game built using HTML/CSS/JS.",
      live: "",
      github: "",
      type: "Web",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
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
    <main className="p-6 sm:p-10">
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
      <div className="flex justify-center gap-3 mt-6 mb-8 relative cursor-pointer">

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
            className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all border cursor-pointer
            ${category === c
                ? "text-purple-400 border-purple-500"
                : "text-white border-white/20 hover:bg-white/10"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <section
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"
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
            status={project.status}
          />
        ))}
      </section>
    </main>
  );
}

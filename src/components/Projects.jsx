import React, { useState } from "react";
import img_employee from "../assets/java.png";
import img_bmi from "../assets/bmi_calculator.png";
import img_atlasVue from "../assets/altasVue.png";
import img_bookhive from "../assets/bookhive.png";
import img_petpulse from "../assets/petpulse.png";
import img_medimate from "../assets/img_medimate.png";
import img_cleanearth from "../assets/cleanEarth.png";
import img_nexttick from "../assets/nexttick.png";
import img_travel from "../assets/traveller.png";
import img_expense from "../assets/expense.png";
import DetailModel from "./DetailModel";
import projectDetailMap from "./ProjectDetailMap";

const ProjectCard = ({
  image,
  title,
  description,
  live,
  github,
  tech,
  status,
  onOpenDetails,
}) => {
  return (
    <article
      className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-purple-500/40 group"
      data-aos="fade-up"
      onClick={onOpenDetails}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpenDetails();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <span
        className={`absolute top-4 right-4 z-20 rounded-full px-3 py-1 text-xs font-semibold ${
          status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-400 text-black"
        }`}
      >
        {status}
      </span>

      <div className="absolute -top-10 left-5 z-0 h-48 w-48 rounded-full bg-purple-600/40 opacity-30 blur-3xl"></div>

      <div className="relative z-10">
        <figure className="relative mb-4 h-48 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </figure>

        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-300">{description}</p>

        <div className="mt-4 mb-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="rounded-lg border border-purple-500/40 bg-purple-500/20 px-2 py-1 text-xs text-purple-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <a
            href={github || "#"}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="w-full rounded-lg border border-purple-500/50 py-2 text-center font-medium text-purple-300 transition hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
          >
            GitHub
          </a>

          <a
            href={live || "#"}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="bg-linear-to-r from-purple-500 to-purple-700 w-full rounded-lg py-2 text-center font-semibold text-white transition hover:opacity-90"
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
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const allProjects = [
    {
      image: img_cleanearth,
      title: "Smart Campus Operations",
      description:
        "Spring Boot based smart campus operations platform for handling campus workflows, service requests, and management modules.",
      live: "",
      github: "",
      type: "Web",
      tech: ["Spring Boot", "React", "Posgresql"],
      status: "Completed",
    },
    {
      image: img_bookhive,
      title: "ITPM MindBridge",
      description:
        "IT project management solution focused on planning, collaboration, and progress tracking for team-based software projects.",
      live: "",
      github: "",
      type: "Web",
      tech: ["React", "Go", "Gin", "Gorm", "Postgresql"],
      status: "Completed",
    },
    {
      image: img_nexttick,
      title: "ChronoLux",
      description: "Luxury watch store with variants, cart, checkout, admin dashboard.",
      live: "",
      github: "https://github.com/AaishaShahani2001/NextTick.git",
      type: "Web",
      tech: ["Next.js", "Typescript", "Tailwind CSS", "Node", "Express", "MongoDB"],
      status: "In Progress",
    },
    {
      image: img_medimate,
      title: "MediMate",
      description:
        "MediMate is a full-stack telemedicine web app for booking doctor appointments and managing health records.",
      live: "",
      github: "https://github.com/AaishaShahani2001/MediMate.git",
      type: "Web",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.io"],
      status: "Completed",
    },
    {
      image: img_petpulse,
      title: "PetPulse",
      description:
        "PetPulse is a full-stack web app for managing pet health records, adoptions, appointments, profiles, analytics dashboard.",
      live: "https://itp-frontend.onrender.com/",
      github: "https://github.com/AaishaShahani2001/Y2S2-ITP.git",
      type: "Web",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      status: "Completed",
    },
    {
      image: img_bookhive,
      title: "BookHive",
      description: "Full-stack book management web app.",
      live: "https://bookstoremanagement-bookhive-7b8798.netlify.app/",
      github: "https://github.com/AaishaShahani2001/BookHive.git",
      type: "Web",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      status: "Completed",
    },
    {
      image: img_atlasVue,
      title: "AtlasVue",
      description: "Animated country exploration web app built with Vue and modern UI libraries.",
      live: "https://country-explorer-atlasvue.netlify.app/",
      github: "https://github.com/AaishaShahani2001/AtlasVue.git",
      type: "Web",
      tech: ["Vue", "AOS", "Tailwind CSS"],
      status: "Completed",
    },
    {
      image: img_expense,
      title: "Expense Tracker",
      description: "Mobile app for tracking daily expenses with real-time summaries and analytics.",
      live: "",
      github: "https://github.com/AaishaShahani2001/ExpenseTracker.git",
      type: "Mobile",
      tech: ["Flutter", "Dart", "Firebase"],
      status: "In Progress",
    },
    {
      image: img_employee,
      title: "Employee Payroll and Leave Management System",
      description:
        "Built an Employee Payroll & Leave Management System implementing payroll processing, leave approval workflows, and role-based admin dashboards.",
      live: "",
      github: "https://github.com/AaishaShahani2001/Employee-Payroll-and-Leave-Management-System.git",
      type: "Web",
      tech: ["Java", "Jsp", "Servlets", "MySQL"],
      status: "Completed",
    },
    {
      image: img_travel,
      title: "Travel Booking Management System",
      description: "Web app for managing travel bookings and reservations.",
      live: "",
      github: "https://github.com/AaishaShahani2001/mr.traveller.git",
      type: "Web",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      status: "Completed",
    },
    {
      image: img_bmi,
      title: "BMI Calculator",
      description:
        "Developed a BMI Calculator web app with real-time input validation and health classification logic using HTML, CSS, and JavaScript.",
      live: "https://aaishashahani2001.github.io/BMI_Calculator/",
      github: "https://github.com/AaishaShahani2001/BMI_Calculator.git",
      type: "Web",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
    },
    {
      image: img_cleanearth,
      title: "CleanEarth",
      description:
        "Built CleanEarth, a sustainability-focused web platform for waste reporting, recycling awareness, and service management using modern web technologies.",
      live: "https://aaishashahani2001.github.io/CleanEarth/",
      github: "https://github.com/AaishaShahani2001/CleanEarth.git",
      type: "Web",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
    },
  ];

  const handleFilter = (cat) => {
    setFade(false);
    setTimeout(() => {
      setCategory(cat);
      setShowAll(false);
      setFade(true);
    }, 250);
  };

  const filtered =
    category === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === category);
  const visibleProjects = showAll ? filtered : filtered.slice(0, 3);

  return (
    <main className="p-6 sm:p-10">
      <section id="projects" data-aos="fade-up">
        <header className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-sm text-gray-400 sm:text-base">Explore my best Web & Mobile apps.</p>
        </header>
      </section>

      <div className="relative mt-6 mb-8 flex cursor-pointer justify-center gap-3">
        <div
          className="absolute -z-10 h-8 w-20 rounded-xl bg-purple-500/20 transition-all duration-300"
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
            className={`cursor-pointer rounded-xl border px-4 py-1.5 text-sm font-medium transition-all ${
              category === c
                ? "border-purple-500 text-purple-400"
                : "border-white/20 text-white hover:bg-white/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <section
        className={`grid grid-cols-1 gap-6 transition-opacity duration-300 sm:grid-cols-2 lg:grid-cols-3 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            live={project.live}
            github={project.github}
            tech={project.tech}
            status={project.status}
            onOpenDetails={() =>
              setSelectedProject({
                ...project,
                keyComponents: projectDetailMap[project.title] || project.tech || [],
              })
            }
          />
        ))}
      </section>

      {filtered.length > 3 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-xl border border-purple-500/50 px-6 py-2.5 text-sm font-semibold text-purple-300 transition hover:bg-purple-500/15 hover:text-white"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}

      <DetailModel
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

import React from "react";
import { FiCode, FiServer, FiGithub, FiLayers } from "react-icons/fi";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 text-white py-20"
    >
      <div className="max-w-5xl w-full">

        {/* Section Title */}
        <h2
          className="text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          About Me
        </h2>

        {/* CARD LAYOUT */}
        <div
          className="grid md:grid-cols-2 gap-10"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {/* CARD 1 - WHO I AM */}
          <div className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-white/10 hover:border-purple-500/40 transition duration-300">
            <div className="flex items-center space-x-4 mb-5">
              <FaLaptopCode className="text-purple-400 text-4xl" />
              <h3 className="text-2xl font-semibold">Who I Am</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              A dedicated Fullstack Developer who enjoys crafting modern and
              scalable digital solutions with clean UI, structured architecture,
              and cloud-ready development workflows.
            </p>
          </div>

          {/* CARD 2 - SKILLS OVERVIEW */}
          <div className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-white/10 hover:border-purple-500/40 transition duration-300">
            <div className="flex items-center space-x-4 mb-5">
              <FiLayers className="text-purple-400 text-4xl" />
              <h3 className="text-2xl font-semibold">What I Do</h3>
            </div>

            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <FiCode className="text-purple-300" /> Frontend Development — React, Tailwind
              </li>
              <li className="flex items-center gap-2">
                <FiServer className="text-purple-300" /> Backend APIs — Node.js, Express, MongoDB
              </li>
              <li className="flex items-center gap-2">
                <FiGithub className="text-purple-300" /> Git, GitHub workflows, Version control
              </li>
            </ul>
          </div>
        </div>

        {/* TIMELINE */}
        <h3
          className="text-3xl font-bold mt-16 mb-6 text-center"
          data-aos="fade-up"
        >
          My Journey
        </h3>

        <div className="relative border-l border-purple-500/40 ml-6 space-y-10">

          {/* Step 1 */}
          <div
            className="relative pl-10"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="absolute -left-4 top-1 bg-purple-500 w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-white text-lg" />
            </div>
            <h4 className="text-xl font-semibold">Undergraduate – IT</h4>
            <p className="text-gray-300 text-sm">
              Started my tech journey and built strong fundamentals in software
              engineering.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="relative pl-10"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="absolute -left-4 top-1 bg-purple-500 w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
              <FiCode className="text-white text-lg" />
            </div>
            <h4 className="text-xl font-semibold">Frontend & Backend Skills</h4>
            <p className="text-gray-300 text-sm">
              Improved my skills by building real-world MERN stack applications.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="relative pl-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="absolute -left-4 top-1 bg-purple-500 w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
              <FiGithub className="text-white text-lg" />
            </div>
            <h4 className="text-xl font-semibold">Projects & Portfolio</h4>
            <p className="text-gray-300 text-sm">
              Built multiple systems including PetPulse, CleanEarth, BookHive,
              DailyFlow, and Country Explorer.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import sliitLogo from "../assets/sliit-logo.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 text-white py-20"
    >
      <div className="max-w-7xl w-full">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          About Me
        </h2>

        {/* TWO CARD GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ============================
               CARD 1 – WHO I AM
          ============================ */}
          <div
            className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-white/10
                       hover:border-purple-500/40 transition duration-300"
            data-aos="fade-right"
          >
            <div className="flex items-center space-x-4 mb-5">
              <FaLaptopCode className="text-purple-400 text-4xl" />
              <h3 className="text-2xl font-semibold">Who I Am</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I am a 3rd-year Software Engineering student at SLIIT with a strong
              passion for building modern, intuitive, and performance-driven digital
              experiences. I enjoy turning ideas into clean, scalable applications
              using technologies like React, Node.js, MongoDB, Tailwind, and cloud
              deployment workflows.
            </p>

            <p className="text-gray-300 leading-relaxed mt-3">
              Over the past few years, I have developed multiple real-world projects
              including PetPulse, BookHive, DailyFlow, CleanEarth, and AtlasVue.  
              Each project helped me improve my UI/UX thinking, architecture planning,
              database structuring, and problem-solving ability.
            </p>

            <p className="text-gray-300 leading-relaxed mt-3">
              I am currently focused on sharpening my full-stack skills, exploring
              mobile development, and preparing for industry-level opportunities.  
              My long-term goal is to build impactful applications while growing as a
              versatile and creative engineer.
            </p>
          </div>

          {/* ============================
               CARD 2 – EDUCATION (SLIIT)
          ============================ */}
          <div
            className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-white/10
                       hover:border-purple-500/40 transition duration-300"
            data-aos="fade-left"
          >
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={sliitLogo}
                alt="SLIIT Logo"
                className="w-14 h-14 rounded-xl object-cover border border-white/10"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  BSc (Hons) in Information Technology
                </h3>
                <p className="text-purple-300 text-sm">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
              </div>
            </div>

            {/* YEAR BADGE */}
            <span
              className="bg-purple-700/30 text-purple-300 px-4 py-1 rounded-full 
                         text-sm font-medium tracking-wide"
            >
              2023 – 2027
            </span>

            {/* EDUCATION TEXT */}
            <p className="text-gray-300 mt-4 leading-relaxed">
              Currently in my 3rd year of studies, focusing on strengthening my
              technical foundation in software engineering, full-stack
              development, and mobile technologies.
            </p>

            <p className="text-gray-300 mt-2 leading-relaxed">
              I actively participate in university activities and continuously
              work on improving my development, analytical, and problem-solving
              skills through hands-on projects and self-learning.
            </p>

            {/* KEY COURSES */}
            <h4 className="text-lg font-semibold mt-5 mb-2">Key Courses</h4>

            <div className="text-gray-300 space-y-1">
              <p>• Web Development</p>
              <p>• Mobile App Development</p>
              <p>• Database Systems</p>
              <p>• Software Engineering Principles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

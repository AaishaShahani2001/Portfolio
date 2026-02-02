import React from "react";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import sliitLogo from "../assets/sliit-logo.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 text-white"
    >
      <div className="max-w-7xl w-full">

        {/* TITLE */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-14 text-center"
          data-aos="fade-up"
        >
          About <span className="text-purple-400">Me</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ================= LEFT : ABOUT ================= */}
          <div
            className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-white/10
                       hover:border-purple-500/40 transition duration-300"
            data-aos="fade-right"
          >
            <div className="flex items-center space-x-4 mb-6">
              <FaLaptopCode className="text-purple-400 text-4xl" />
              <h3 className="text-2xl font-semibold">
                Passionate{" "}
                <span className="text-purple-400">
                  <TypeAnimation
                    sequence={[
                      "Software Engineer",
                      2000,
                      "Full Stack Developer",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I’m an enthusiastic and dedicated undergraduate in Information
              Technology at SLIIT with a strong passion for full-stack
              development and building practical, real-world applications.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              I enjoy creating solutions that are both functional and
              user-friendly, combining clean UI with scalable backend
              architectures. Through hands-on projects, I continuously improve
              my problem-solving and development skills.
            </p>

            <p className="text-gray-300 leading-relaxed mt-4">
              I am currently seeking an <span className="text-purple-300 font-medium">
                internship opportunity</span> where I can apply my technical
              skills, gain industry exposure, and contribute meaningfully to a
              dynamic development team.
            </p>
          </div>

          {/* ================= RIGHT : EDUCATION ================= */}
          <div
            className="bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-white/10
             hover:border-purple-500/40 transition duration-300"
            data-aos="fade-left"
          >
            <div className="flex items-center space-x-4 mb-8">
              <FaGraduationCap className="text-purple-400 text-4xl" />
              <h3 className="text-2xl font-semibold">Education Path</h3>
            </div>

            {/* ===== EDUCATION ITEM 1 ===== */}
            <div className="flex items-start space-x-4 mb-7">
              <img
                src={sliitLogo}
                alt="SLIIT"
                className="w-12 h-12 rounded-xl object-cover border border-white/10"
              />
              <div>
                <h4 className="text-lg font-semibold">
                  BSc in Information Technology
                </h4>
                <p className="text-purple-300 text-sm">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
                <span className="inline-block mt-2 text-xs bg-purple-700/30
                       text-purple-300 px-3 py-1 rounded-full">
                  2023 – Present
                </span>
              </div>
            </div>

            {/* ===== EDUCATION ITEM 2 ===== */}
            <div className="flex items-start space-x-4 mb-7">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl
                 bg-purple-700/20 text-purple-300 font-bold"
              >
                A/L
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  GCE Advanced Level – Bio Science
                </h4>
                <p className="text-gray-400 text-sm">
                  KM/AL-Mazhar Girls’ High School
                </p>
                <span className="inline-block mt-2 text-xs bg-purple-700/30
                       text-purple-300 px-3 py-1 rounded-full">
                  2018 – 2020
                </span>
              </div>
            </div>

            {/* ===== EDUCATION ITEM 3 ===== */}
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl
                 bg-purple-700/20 text-purple-300 font-bold"
              >
                O/L
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  GCE Ordinary Level
                </h4>
                <p className="text-gray-400 text-sm">
                  KM/AL-Mazhar Girls’ High School
                </p>
                <span className="inline-block mt-2 text-xs bg-purple-700/30
                       text-purple-300 px-3 py-1 rounded-full">
                  2017
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

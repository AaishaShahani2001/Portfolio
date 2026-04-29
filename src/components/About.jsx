import React from "react";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import sliitLogo from "../assets/sliit-logo.jpg";

export default function About() {
  const strengths = [
    "Full Stack Development",
    "Clean, Scalable Architecture",
    "Responsive UI Engineering",
    "API & Database Integration",
    "Problem Solving Mindset",
    "Team Collaboration",
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center px-6 py-24 text-white"
    >
      <div className="w-full max-w-7xl">
        <h2
          className="mb-4 text-center text-4xl font-bold md:text-5xl"
          data-aos="fade-up"
        >
          About <span className="text-purple-400">Me</span>
        </h2>
        <p
          className="mx-auto mb-14 max-w-3xl text-center text-sm leading-7 text-gray-300 md:text-base"
          data-aos="fade-up"
        >
          Building modern digital products with strong engineering fundamentals, user-first thinking,
          and a clear focus on delivering business value.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div
            className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:border-purple-500/40"
            data-aos="fade-right"
          >
            <div className="mb-6 flex items-center space-x-4">
              <FaLaptopCode className="text-purple-400 text-4xl" />
              <h3 className="text-2xl font-semibold text-white">
                Future-Ready{" "}
                <span className="text-purple-300">
                  <TypeAnimation
                    sequence={[
                      "Software Engineer",
                      2000,
                      "Full Stack Developer",
                      2000,
                      "Product Builder",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h3>
            </div>

            <p className="leading-relaxed text-gray-300">
              I am an Information Technology undergraduate at SLIIT with hands-on experience building
              web and mobile applications across full project lifecycles from planning to deployment.
            </p>

            <p className="mt-4 leading-relaxed text-gray-300">
              My focus is on building scalable backends, clean interfaces, and maintainable systems
              that solve real user and business problems.
            </p>

            <p className="mt-4 leading-relaxed text-gray-300">
              I am actively seeking a{" "}
              <span className="font-semibold text-purple-200">Software Engineering Internship</span>{" "}
              where I can contribute to high-impact teams, learn from production environments, and
              grow as an engineer.
            </p>

            <div className="mt-7">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
                Core Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {strengths.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-purple-400/30 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:border-purple-500/40"
            data-aos="fade-left"
          >
            <div className="mb-8 flex items-center space-x-4">
              <FaGraduationCap className="text-purple-400 text-4xl" />
              <h3 className="text-2xl font-semibold">Education Path</h3>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <img
                  src={sliitLogo}
                  alt="SLIIT"
                  className="h-12 w-12 rounded-xl border border-white/10 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold">BSc in Information Technology</h4>
                  <p className="text-sm text-purple-300">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-purple-700/30 px-3 py-1 text-xs text-purple-300">
                    2023 - Present
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700/20 font-bold text-purple-300">
                  A/L
                </div>
                <div>
                  <h4 className="text-lg font-semibold">GCE Advanced Level - Bio Science</h4>
                  <p className="text-sm text-gray-400">KM/AL-Mazhar Girls&apos; High School</p>
                  <span className="mt-2 inline-block rounded-full bg-purple-700/30 px-3 py-1 text-xs text-purple-300">
                    2018 - 2020
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700/20 font-bold text-purple-300">
                  O/L
                </div>
                <div>
                  <h4 className="text-lg font-semibold">GCE Ordinary Level</h4>
                  <p className="text-sm text-gray-400">KM/AL-Mazhar Girls&apos; High School</p>
                  <span className="mt-2 inline-block rounded-full bg-purple-700/30 px-3 py-1 text-xs text-purple-300">
                    2017
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

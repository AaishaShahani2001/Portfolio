import React from "react";
import Navbar from "./Navbar";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import imgHero from "../assets/imgHero.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="relative flex min-h-[700px] flex-col items-center overflow-hidden">
      <Navbar />

      <main
        id="home"
        className="z-10 mt-10 flex w-full max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-12 md:flex-row md:px-12 md:pb-24 lg:px-20"
      >
        <section
          className="relative mt-10 flex-1 md:mt-0 md:text-left"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="absolute -top-8 -left-12 -z-10 h-64 w-64 rounded-full bg-[#cd3cf5] opacity-40 blur-3xl" />

          <header>
            <p className="mb-4 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
              Open To Opportunities
            </p>
            <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              <span className="font-semibold text-purple-300">Hi, I&apos;m </span>
              Aaisha Shahani
            </h1>

            <h2 className="text-xl font-semibold text-purple-300 md:text-2xl">
              I&apos;m a{" "}
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1500,
                  "Full Stack Developer",
                  1500,
                  "Problem Solver",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </header>

          <p className="mt-5 mb-7 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Information Technology undergraduate at SLIIT building production-ready web and mobile
            applications with clean architecture, strong UX, and real-world business outcomes.
          </p>

          <div className="mb-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-gray-200 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xl font-bold text-white">12+</p>
              <p className="text-xs uppercase tracking-wider text-purple-200">Projects Built</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xl font-bold text-white">Full Stack</p>
              <p className="text-xs uppercase tracking-wider text-purple-200">Development Focus</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xl font-bold text-white">Web + Mobile</p>
              <p className="text-xs uppercase tracking-wider text-purple-200">Delivery Experience</p>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap items-center gap-3 md:flex-nowrap">
            <a
              href="#projects"
              className="rounded-xl bg-linear-to-r from-purple-500 to-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="/Portfolio/cv/Aaisha_Shahani_CV.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-purple-400/40 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-100 transition hover:bg-purple-500/20"
            >
              Download CV
            </a>
            <a
              href="https://github.com/AaishaShahani2001"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900/80 px-5 py-3 text-white shadow-md transition hover:-translate-y-0.5 hover:border-purple-400/40"
            >
              <FiGithub className="text-2xl" />
              <span className="font-semibold">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aaishashahani/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-600/90 px-5 py-3 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              <FiLinkedin className="text-2xl" />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>
        </section>

        <figure
          data-aos="fade-up"
          data-aos-duration="700"
          className="mt-12 flex flex-1 justify-center md:mt-0 md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-purple-500/40 to-fuchsia-500/20 blur-2xl" />
            <img
              src={imgHero}
              alt="Aaisha Shahani portrait"
              className="relative h-80 w-[260px] rounded-3xl border border-white/10 object-cover shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-[0px_0px_50px_rgba(205,60,245,0.5)] sm:h-[420px] sm:w-[350px] md:h-[500px] md:w-[420px]"
            />
          </div>
        </figure>
      </main>
    </div>
  );
}

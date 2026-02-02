import React from "react";
import Navbar from "./Navbar";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import imgHero from "../assets/imgHero.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[650px] flex flex-col items-center">
      <Navbar />

      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-32 pb-10 md:pb-24 pt-32 mt-10 z-10"
      >
        {/* LEFT CONTENT */}
        <section
          className="flex-1 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          {/* Background Glow */}
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12" />

          {/* INTRO + NAME */}
          <header>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              <span className="text-purple-300 font-semibold">Hi, I&apos;m </span>
              Aaisha Shahani
            </h1>


            {/* I’M A + Typing */}
            <h2 className="text-xl md:text-2xl font-semibold text-purple-300">
              I&apos;m a{" "}
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1500,
                  "Full Stack Developer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </header>

          {/* PROFESSIONAL PARAGRAPH */}
          <p className="text-base md:text-lg text-gray-300 mt-4 mb-6 leading-relaxed max-w-xl">
            3rd Year Information Technology Student at SLIIT | Passionate about
            building innovative web and mobile applications
          </p>

          {/* SOCIAL BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* GitHub BUTTON */}
            <a
              href="https://github.com/AaishaShahani2001"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 
                        text-white px-6 py-3 rounded-xl shadow-md 
                        transition-transform hover:scale-[1.03]"
            >
              <FiGithub className="text-2xl" />
              <span className="font-semibold">GitHub</span>
            </a>

            {/* LinkedIn BUTTON */}
            <a
              href="https://www.linkedin.com/in/aaishashahani/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 
                        text-white px-6 py-3 rounded-xl shadow-md
                        transition-transform hover:scale-[1.03]"
            >
              <FiLinkedin className="text-2xl" />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>

          
          {/* CV BUTTON */}
          <a
            href="/Portfolio/cv/Aaisha_Shahani_CV.pdf"
            download
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 
               text-white px-6 py-3 rounded-xl shadow-md 
               transition-transform hover:scale-[1.03]"
            >
              <span className="font-semibold">Download CV</span>
            </button>
          </a>

        </section>

        {/* HERO IMAGE */}
        <figure
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <img
            src={imgHero}
            alt="Hero Image"
            className="h-80 sm:h-[420px] md:h-[500px] w-[260px] sm:w-[350px] md:w-[430px] 
                      object-cover rounded-3xl shadow-xl 
                      transition duration-300 hover:scale-105 
                      hover:shadow-[0px_0px_40px_rgba(205,60,245,0.6)]"
          />
        </figure>
      </main>
    </div>
  );
}

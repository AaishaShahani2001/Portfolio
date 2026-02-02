import React from "react";
import { FiEye, FiAward } from "react-icons/fi";
import sqlImg from "../assets/SQL-bootcamp.jpg";
import gitImg from "../assets/git-github-bootcamp.jpg";

export default function Achievements() {
  const achievements = [
    {
      title: "SQL Bootcamp Certificate",
      image: sqlImg,
    },
    {
      title: "Git & GitHub Bootcamp Certificate",
      image: gitImg,
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen px-6 py-20 text-white flex items-center justify-center"
    >
      <div className="max-w-5xl w-full">

        {/* TITLE */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-14 text-center"
          data-aos="fade-up"
        >
          My <span className="text-purple-400">Achievements</span>
        </h2>

        {/* LIST */}
        <div className="space-y-6">

          {achievements.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="flex flex-col sm:flex-row items-center justify-between
                         bg-[#1a1a1a] px-6 py-5 rounded-2xl
                         border border-white/10 shadow-lg
                         hover:border-purple-500/40
                         transition duration-300"
            >
              {/* LEFT : ICON + TITLE */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center
                             bg-purple-700/20 text-purple-400"
                >
                  <FiAward className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* VIEW BUTTON */}
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="mt-4 sm:mt-0 flex items-center gap-2
                           bg-purple-700 hover:bg-purple-800
                           text-white px-5 py-2 rounded-xl
                           shadow-md transition-transform hover:scale-[1.03]"
              >
                <FiEye className="text-lg" />
                View
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

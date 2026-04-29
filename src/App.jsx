import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiFlutter,
  SiGithub,
  SiGo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Achievements from "./components/Achievements.jsx";

const floatingIcons = [
  { Icon: SiHtml5, pos: "top-[8%] left-[6%] md:top-[9%] md:left-[5%]", size: "text-2xl md:text-4xl", color: "text-orange-300/20", delay: "0s" },
  { Icon: SiCss3, pos: "top-[15%] left-[82%] md:top-[14%] md:left-[90%]", size: "text-2xl md:text-4xl", color: "text-blue-300/20", delay: "0.4s" },
  { Icon: SiJavascript, pos: "top-[27%] left-[10%] md:top-[26%] md:left-[15%]", size: "text-2xl md:text-4xl", color: "text-yellow-300/20", delay: "0.8s" },
  { Icon: SiTypescript, pos: "top-[25%] left-[72%] md:top-[30%] md:left-[82%]", size: "text-2xl md:text-4xl", color: "text-blue-300/25", delay: "1.2s" },
  { Icon: SiReact, pos: "top-[38%] left-[6%] md:top-[12%] md:left-[38%]", size: "text-3xl md:text-5xl", color: "text-cyan-300/25", delay: "0.3s" },
  { Icon: SiVuedotjs, pos: "top-[47%] left-[80%] md:top-[46%] md:left-[92%]", size: "text-2xl md:text-4xl", color: "text-green-300/20", delay: "1.6s" },
  { Icon: SiNextdotjs, pos: "top-[58%] left-[12%] md:top-[57%] md:left-[7%]", size: "text-2xl md:text-4xl", color: "text-slate-200/20", delay: "2s" },
  { Icon: SiTailwindcss, pos: "top-[68%] left-[74%] md:top-[39%] md:left-[22%]", size: "text-2xl md:text-4xl", color: "text-cyan-200/25", delay: "1.8s" },
  { Icon: SiNodedotjs, pos: "top-[76%] left-[8%] md:top-[22%] md:left-[88%]", size: "text-2xl md:text-5xl", color: "text-green-400/25", delay: "1s" },
  { Icon: SiPhp, pos: "top-[84%] left-[64%] md:top-[74%] md:left-[86%]", size: "text-2xl md:text-4xl", color: "text-indigo-200/20", delay: "2.2s" },
  { Icon: SiSpringboot, pos: "top-[42%] left-[50%] md:top-[64%] md:left-[12%]", size: "text-2xl md:text-4xl", color: "text-lime-300/20", delay: "0.6s" },
  { Icon: SiMongodb, pos: "top-[88%] left-[22%] md:top-[58%] md:left-[22%]", size: "text-2xl md:text-4xl", color: "text-emerald-400/25", delay: "2s" },
  { Icon: SiMysql, pos: "top-[18%] left-[45%] md:top-[80%] md:left-[29%]", size: "text-2xl md:text-4xl", color: "text-blue-200/20", delay: "2.7s" },
  { Icon: SiPostgresql, pos: "top-[72%] left-[88%] md:top-[71%] md:left-[80%]", size: "text-2xl md:text-5xl", color: "text-sky-300/25", delay: "0.8s" },
  { Icon: SiPython, pos: "top-[52%] left-[58%] md:top-[18%] md:left-[64%]", size: "text-2xl md:text-4xl", color: "text-yellow-200/20", delay: "1.4s" },
  { Icon: SiDocker, pos: "top-[33%] left-[32%] md:top-[52%] md:left-[70%]", size: "text-2xl md:text-4xl", color: "text-sky-200/20", delay: "2.5s" },
  { Icon: SiFlutter, pos: "top-[90%] left-[84%] md:top-[86%] md:left-[62%]", size: "text-2xl md:text-4xl", color: "text-cyan-200/20", delay: "1.1s" },
  { Icon: SiGithub, pos: "top-[7%] left-[62%] md:top-[14%] md:left-[48%]", size: "text-2xl md:text-4xl", color: "text-slate-200/20", delay: "1.5s" },
  { Icon: SiGo, pos: "top-[61%] left-[38%] md:top-[36%] md:left-[45%]", size: "text-2xl md:text-4xl", color: "text-cyan-200/20", delay: "2.9s" },
  { Icon: FaJava, pos: "top-[80%] left-[48%] md:top-[63%] md:left-[56%]", size: "text-2xl md:text-4xl", color: "text-red-300/20", delay: "2.4s" },
];

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="relative overflow-hidden bg-gray-950">
      <div className="pointer-events-none fixed inset-0 z-0">
        {floatingIcons.map(({ Icon, pos, size, color, delay }, index) => (
          <span
            key={index}
            className={`absolute ${pos} ${size} ${color} app-float`}
            style={{ animationDelay: delay }}
          >
            <Icon />
          </span>
        ))}
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <ScrollToTop />
      <style>{`
        @keyframes appFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .app-float {
          animation: appFloat 6.5s ease-in-out infinite;
          filter: drop-shadow(0 0 16px rgba(168, 85, 247, 0.25));
        }
      `}</style>
    </main>
  );
}

export default App;
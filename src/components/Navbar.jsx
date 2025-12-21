import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const NavBarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Achievements", link: "#achievements" },
    { id: 5, name: "Projects", link: "#projects" },
  ];

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      if (window.scrollY > 10) setScroll(true);
      else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scroll ? "backdrop-blur-lg bg-black/40 shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-4xl font-bold italic tracking-wide text-white hover:text-purple-300 transition"
        >
          Portfolio
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu className="w-7 h-7" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {NavBarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-white/90 hover:text-purple-300 tracking-wide transition font-medium"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full shadow-md transition"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-8 text-white text-xl">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="w-8 h-8" />
          </button>

          {NavBarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-300 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

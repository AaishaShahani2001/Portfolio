import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4">

        {/* Brand */}
        <h1 className="text-2xl font-extrabold italic tracking-wide hover:text-purple-300 transition-all">
          Portfolio
        </h1>

        {/* Copyright */}
        <p className="text-sm mt-3 md:mt-0 opacity-90">
          &copy; 2025 Aaisha Shahani — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

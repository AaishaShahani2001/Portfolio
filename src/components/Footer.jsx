import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-14 border-t border-white/10 bg-slate-950/90 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-white">
            Aaisha <span className="text-purple-300">Shahani</span>
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-300">
            Software Engineer focused on building reliable, user-centered web and mobile products.
            Open to internship and full-time opportunities.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 text-sm text-gray-200 md:items-end">
          <a href="#home" className="transition hover:text-purple-300">
            Back to top
          </a>
          <p className="pt-1 text-xs text-gray-400">
            &copy; {currentYear} Aaisha Shahani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

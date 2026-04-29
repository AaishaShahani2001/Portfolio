import React, { useEffect } from "react";

export default function DetailModel({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const keyDetails =
    project.keyComponents && project.keyComponents.length > 0
      ? project.keyComponents
      : project.tech || [];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="border-b border-white/10 bg-gradient-to-r from-purple-600/20 via-fuchsia-500/10 to-transparent px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-200">
                {project.type} Project
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-semibold text-gray-200 transition hover:border-purple-300/40 hover:bg-purple-500/15 hover:text-white"
            >
              Close
            </button>
          </div>
        </header>

        <div className="space-y-6 px-6 py-6">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
              Project Summary
            </h3>
            <p className="text-sm leading-7 text-gray-200">
              {project.longDescription || project.description}
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
              Core Components
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {keyDetails.map((detail, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-sm text-gray-100"
                >
                  {detail}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project.tech || []).map((item, index) => (
                <span
                  key={`${project.title}-tech-${index}`}
                  className="rounded-lg border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

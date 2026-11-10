"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { Globe } from "lucide-react";

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Websites"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeFilter === category
                ? "bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.45)] border border-purple-400/50"
                : "bg-purple-950/30 hover:bg-purple-900/40 text-zinc-300 hover:text-white border border-purple-500/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Detailed Projects List */}
      <div className="space-y-12">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="p-8 sm:p-10 rounded-3xl border border-purple-500/25 bg-[#0D0720]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] scroll-mt-28 space-y-6"
          >
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-900/30 pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-purple-300 uppercase tracking-wider font-semibold">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.client}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  {project.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === "Live"
                      ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
                      : "bg-amber-950/60 border-amber-500/40 text-amber-300"
                  }`}
                >
                  ● {project.status}
                </span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-400/40 text-purple-200 hover:bg-purple-900/60 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>
                      {project.status === "Live"
                        ? "Visit Live Website"
                        : "Open Staging Preview"}
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Challenge vs Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#080314] border border-purple-500/20 space-y-2">
                <h3 className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
                  The Challenge
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#080314] border border-purple-500/20 space-y-2">
                <h3 className="text-xs text-purple-300 font-semibold uppercase tracking-wider">
                  The Solution
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap gap-2 border-t border-purple-900/30">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


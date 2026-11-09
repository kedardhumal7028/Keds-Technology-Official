"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData, ProjectItem } from "@/data/projects";
import { ExternalLink, Globe, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterCategories = ["All", "Websites"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative z-20 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Engineering Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected Works & <span className="text-gradient-purple">Flagship Deployments</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Explore how we engineered high-availability solutions for healthcare, sports entertainment, and travel logistics.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] border border-purple-400/50"
                  : "bg-purple-950/30 hover:bg-purple-900/40 text-zinc-300 hover:text-white border border-purple-500/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl border border-purple-500/25 bg-[#0D0720]/85 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
            >
              {/* Floating Browser Mockup Header */}
              <div className="px-4 py-3 bg-[#080d22] border-b border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded-full bg-[#06020E] text-[10px] text-zinc-400 truncate max-w-[160px] font-medium">
                  {project.liveUrl ? project.liveUrl.replace("https://", "") : project.title}
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              </div>

              {/* Browser Preview Canvas / Mockup Banner */}
              <div
                className="relative h-44 sm:h-48 w-full p-6 flex flex-col justify-end overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(11, 16, 35, 0.95) 0%, ${project.accentColor}25 100%)`,
                }}
              >
                {/* Glow Orb in card */}
                <div
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity"
                  style={{ background: project.accentColor }}
                />

                <div className="relative z-10 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-cyan-300 font-semibold">
                    {project.client} • {project.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[#0e152e] border border-purple-500/20 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                  <Link
                    href={`/portfolio#${project.id}`}
                    className="text-xs font-semibold text-purple-300 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-900/60 text-[11px] font-medium flex items-center gap-1.5 transition-all"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Dedicated Portfolio Button */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-purple-500/40 bg-purple-950/30 hover:bg-purple-900/50 text-purple-200 hover:text-white text-sm font-semibold backdrop-blur-md transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            <span>Explore All Projects & Architecture Blueprints</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { Globe, Activity, CheckCircle2, ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Deployed Projects | Production Web & App Platforms",
  description:
    "Verify live, active production web applications and portals engineered by Keds Technology serving real users, transactions, and businesses worldwide.",
  keywords: [
    "Keds Technology Live Projects",
    "Live Production Apps",
    "Web Development Work",
    "Verified Client Portals",
  ],
  alternates: {
    canonical: "https://kedstechnology.com/live-projects",
  },
};

export default function LiveProjectsPage() {
  const liveProjects = projectsData.filter((p) => p.status === "Live");

  return (
    <main className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-xs text-emerald-300 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active Production Environments</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Live <span className="text-gradient-purple">Deployed Projects</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Verify real-world production deployments serving live customers, processing real-time payments, and operating at high concurrency.
          </p>
        </div>

        {/* Live Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveProjects.map((project) => (
            <div
              key={project.id}
              className="p-7 rounded-3xl border border-purple-500/30 bg-[#0D0720]/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live In Production</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-xs text-zinc-400 font-medium mb-3">
                  Client: {project.client}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-5 space-y-2">
                  <div className="text-[11px] font-medium text-purple-300 uppercase tracking-wider">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] rounded bg-purple-950/40 border border-purple-500/20 text-zinc-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                <span className="text-xs text-zinc-400 truncate">
                  {project.liveUrl?.replace("https://", "")}
                </span>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
                  >
                    <span>Open Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

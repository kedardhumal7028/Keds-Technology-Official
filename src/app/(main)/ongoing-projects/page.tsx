"use client";

import React, { useState } from "react";
import { ongoingProjectsData, OngoingProjectItem } from "@/data/ongoingProjects";
import { Sparkles, CheckCircle2, Clock, PlayCircle, Rocket, ArrowRight } from "lucide-react";

export default function OngoingProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<OngoingProjectItem>(
    ongoingProjectsData[0]
  );

  return (
    <main className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Active Engineering Sprints</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Ongoing <span className="text-gradient-purple">Project Roadmap</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Transparent milestones. Track our in-flight development sprints across 5 structured stages: Discovery, Design, Development, Testing, and Production Launch.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {ongoingProjectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedProject.id === project.id
                  ? "bg-[#0e1635] border border-cyan-400/60 text-white shadow-[0_0_25px_rgba(0,212,255,0.25)]"
                  : "bg-purple-950/20 border border-purple-500/20 text-zinc-300 hover:text-white"
              }`}
            >
              <span>{project.client}</span>
              <span className="ml-2 text-[10px] text-purple-300 font-medium">
                ({project.currentStage})
              </span>
            </button>
          ))}
        </div>

        {/* Master Animated Roadmap Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-purple-500/30 bg-[#0B1023]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-10">
          {/* Project Overview Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-purple-900/30 pb-8">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-cyan-300 uppercase tracking-wider font-semibold">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>Team: {selectedProject.leadArchitect}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                {selectedProject.synopsis}
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 shrink-0">
              <span className="text-xs text-zinc-400 font-medium">Target Rollout</span>
              <span className="text-xl font-bold text-emerald-400">
                {selectedProject.targetLaunch}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 border border-purple-400/30 text-purple-200">
                {selectedProject.completionPercent}% Completed
              </span>
            </div>
          </div>

          {/* 5-Stage Animated Roadmap */}
          <div className="space-y-6">
            <h3 className="text-xs text-purple-300 uppercase tracking-widest font-semibold">
              Project Development Stages
            </h3>

            {/* Glowing Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {selectedProject.stages.map((st) => {
                const isCompleted = st.status === "completed";
                const isInProgress = st.status === "in-progress";

                return (
                  <div
                    key={st.name}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      isInProgress
                        ? "border-cyan-400 bg-cyan-950/20 shadow-[0_0_30px_rgba(0,212,255,0.25)] -translate-y-1"
                        : isCompleted
                        ? "border-purple-500/40 bg-purple-950/20"
                        : "border-purple-900/20 bg-[#070b1a]/80 opacity-60"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-zinc-400 font-bold">
                          0{st.stepNumber}
                        </span>
                        {isCompleted && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        )}
                        {isInProgress && (
                          <div className="flex items-center gap-1 text-[10px] text-cyan-300 font-medium">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                            <span>Active</span>
                          </div>
                        )}
                        {!isCompleted && !isInProgress && (
                          <Clock className="w-4 h-4 text-zinc-600" />
                        )}
                      </div>

                      <h4 className="text-base font-bold text-white mb-2">
                        {st.name}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        {st.details}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-purple-900/30 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                      {st.status.replace("-", " ")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Sprint Deliverables */}
          <div className="p-6 rounded-2xl bg-[#060a1d] border border-purple-500/20 space-y-3">
            <h4 className="text-xs text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-2">
              <PlayCircle className="w-4 h-4" />
              <span>Current Sprint Deliverables</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedProject.deliverablesInThisSprint.map((d, dIdx) => (
                <div
                  key={dIdx}
                  className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-zinc-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

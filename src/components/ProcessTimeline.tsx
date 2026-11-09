"use client";

import React from "react";
import { Compass, Palette, Code2, Rocket, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Blueprint",
      desc: "We analyze your business model, customer workflows, and architectural requirements to craft an actionable PRD.",
      icon: Compass,
      tag: "Day 1-5",
    },
    {
      num: "02",
      title: "UI/UX Design System",
      desc: "Pixel-perfect modern designs with dark mode luxury, interactive prototypes, and design tokens validated with users.",
      icon: Palette,
      tag: "Sprint 1",
    },
    {
      num: "03",
      title: "Agile Sprint Build",
      desc: "Rapid bi-weekly development cycles with clean modular code and weekly live demo reviews on staging.",
      icon: Code2,
      tag: "Sprints 2-4",
    },
    {
      num: "04",
      title: "Launch & Scale",
      desc: "Zero-downtime deployment, edge CDN routing, automated backups, and 24/7 proactive telemetry monitoring.",
      icon: Rocket,
      tag: "Production",
    },
  ];

  return (
    <section className="relative z-20 py-20 md:py-28 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium">
            <span>Engineering Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How We <span className="text-gradient-purple">Deliver</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light">
            A battle-tested 4-step framework guaranteeing predictable delivery, zero bugs, and radical transparency.
          </p>
        </div>

        {/* 4 Clean Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="group p-6 sm:p-7 rounded-3xl border border-purple-500/20 bg-[#0D0720]/70 hover:bg-[#160B2E] hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-purple-400/60 group-hover:text-cyan-400 transition-colors">
                      {st.num}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300">
                      {st.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs text-purple-300">
                  <span>Milestone Sign-off</span>
                  <Icon className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

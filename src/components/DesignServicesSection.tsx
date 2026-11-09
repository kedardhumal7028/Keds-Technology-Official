"use client";

import React from "react";
import { Palette, Eye, Layout, Component, Sparkles, Compass, CheckCircle } from "lucide-react";

export default function DesignServicesSection() {
  const designCapabilities = [
    {
      title: "UI Design",
      desc: "Pixel-perfect visual design with rich cyber dark modes, refined typography, and sleek glass surfaces.",
      icon: Palette,
      highlight: "Apple / Linear Grade",
    },
    {
      title: "UX Research & Journeys",
      desc: "Mapping intuitive user flows, user persona interviews, and friction-free conversion funnel architectures.",
      icon: Eye,
      highlight: "Data-Driven Ergonomics",
    },
    {
      title: "Branding & Visual Identity",
      desc: "Distinctive logo design, color harmony systems, typography pairings, and complete brand bibles.",
      icon: Sparkles,
      highlight: "Memorable & Scalable",
    },
    {
      title: "Wireframes & Information Architecture",
      desc: "Rapid low-fidelity blueprinting to validate content hierarchy and workflow logic before any code is written.",
      icon: Layout,
      highlight: "Rapid Structural Validation",
    },
    {
      title: "Interactive Prototypes",
      desc: "High-fidelity clickable Figma prototypes simulating real micro-interactions, gestures, and fluid physics.",
      icon: Compass,
      highlight: "Stakeholder Alignment",
    },
    {
      title: "Design Systems & Token Libraries",
      desc: "Reusable component libraries, variable tokens, and accessibility standards ensuring seamless developer handoff.",
      icon: Component,
      highlight: "Zero Design Debt",
    },
  ];

  return (
    <section className="relative z-20 py-24 border-t border-purple-900/20 bg-[#060a1d]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Design Philosophy & Illustration */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-pink-500/30 bg-pink-950/30 text-xs text-pink-300 font-medium">
              <Palette className="w-3.5 h-3.5 text-pink-400" />
              <span>Dedicated Product Design Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Design That <span className="text-gradient-purple">Captivates</span> & Converts
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              We reject lazy templates. Our senior design team crafts bespoke visual languages that turn complex enterprise software into intuitive, joyful consumer-grade experiences.
            </p>

            {/* Custom Interactive Design Canvas Illustration */}
            <div className="relative p-6 rounded-3xl border border-purple-500/30 bg-[#0D0720]/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-purple-500/20 pb-3">
                <span className="font-mono text-purple-300">keds-design-system.fig</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Synced
                </span>
              </div>

              {/* Design Token Preview */}
              <div className="grid grid-cols-4 gap-2">
                <div className="p-2.5 rounded-xl bg-[#06020E] border border-purple-500/30 text-center">
                  <div className="w-full h-6 rounded bg-[#06020E] border border-zinc-700 mb-1" />
                  <span className="text-[10px] font-mono text-zinc-400">#06020E</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0D0720] border border-purple-500/30 text-center">
                  <div className="w-full h-6 rounded bg-[#0D0720] mb-1" />
                  <span className="text-[10px] font-mono text-zinc-400">#0D0720</span>
                </div>
                <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-500/30 text-center">
                  <div className="w-full h-6 rounded bg-[#7C3AED] mb-1 shadow-[0_0_10px_#7C3AED]" />
                  <span className="text-[10px] font-mono text-purple-300">#7C3AED</span>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-center">
                  <div className="w-full h-6 rounded bg-[#00D4FF] mb-1 shadow-[0_0_10px_#00D4FF]" />
                  <span className="text-[10px] font-mono text-cyan-300">#00D4FF</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200 flex items-center justify-between">
                <span>Accessibility Contrast Ratio</span>
                <span className="font-mono text-emerald-400 font-bold">14.8:1 (AAA)</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Design Capabilities Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {designCapabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 sm:p-6 rounded-2xl border border-purple-500/20 bg-[#0D0720]/80 hover:bg-[#160B2E] hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

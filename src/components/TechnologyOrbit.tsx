"use client";

import React from "react";
import Image from "next/image";
import { orbitTechnologies, allTechnologiesByCategory } from "@/data/technologies";
import { Cpu, Sparkles } from "lucide-react";

export default function TechnologyOrbit() {
  return (
    <section className="relative z-20 py-24 md:py-32 overflow-hidden border-t border-purple-900/20 bg-[#06020E]">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, #00d4ff 50%, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Modern Technology Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Concentric <span className="text-gradient-purple">Technology Matrix</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            The core Keds Technology engine orbits around battle-tested, high-concurrency frameworks that scale effortlessly from day one.
          </p>
        </div>

        {/* Orbit Canvas System */}
        <div className="relative w-full max-w-2xl aspect-square mx-auto flex items-center justify-center mb-20 select-none">
          {/* Concentric Rings */}
          <div className="absolute w-[85%] h-[85%] rounded-full border border-purple-500/20" />
          <div className="absolute w-[65%] h-[65%] rounded-full border border-dashed border-purple-500/30" />
          <div className="absolute w-[45%] h-[45%] rounded-full border border-purple-400/20" />

          {/* Center Hub: Keds Technology Core Logo */}
          <div className="relative z-20 w-32 sm:w-44 aspect-[8866/1066] p-3 rounded-2xl border border-purple-500/40 bg-[#0D0720]/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(124,58,237,0.5)] flex items-center justify-center">
            <Image
              src="/images/keds-title-only.png"
              alt="Keds Technology Core Center"
              fill
              className="object-contain p-2 drop-shadow-[0_0_20px_#a855f7]"
            />
          </div>

          {/* Rotating Planetary Tech Badges */}
          <div className="absolute inset-0 animate-orbit flex items-center justify-center pointer-events-none">
            {orbitTechnologies.map((tech, idx) => {
              const count = orbitTechnologies.length;
              const angleDeg = (idx / count) * 360;
              const radiusPercent = idx % 2 === 0 ? 38 : 46; // Staggered concentric orbit

              return (
                <div
                  key={tech.name}
                  className="absolute pointer-events-auto group"
                  style={{
                    transform: `rotate(${angleDeg}deg) translate(${radiusPercent}vw) rotate(-${angleDeg}deg)`,
                    maxWidth: "280px",
                  }}
                >
                  <div className="animate-orbit-reverse">
                    <div
                      className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl border bg-[#0D0720]/95 backdrop-blur-xl flex items-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:scale-110 cursor-pointer"
                      style={{
                        borderColor: `${tech.glow}50`,
                        boxShadow: `0 0 15px ${tech.glow}30`,
                      }}
                    >
                      <span className="text-sm sm:text-base">{tech.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Categorized Tech Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allTechnologiesByCategory.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-3xl border border-purple-500/20 bg-[#0D0720]/70 backdrop-blur-xl space-y-4 shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
            >
              <h3 className="text-base font-bold text-white border-b border-purple-900/30 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>{category.category}</span>
              </h3>
              <div className="space-y-2.5">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-zinc-200">{tech.name}</span>
                    <span className="text-[10px] font-mono text-purple-300">
                      {tech.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

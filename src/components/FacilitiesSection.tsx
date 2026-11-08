"use client";

import React from "react";
import { facilitiesData, FacilityItem } from "@/data/facilities";
import { ShieldAlert, Server, Workflow, CheckCircle2, Headphones, Users2, Check } from "lucide-react";

export default function FacilitiesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return ShieldAlert;
      case "Server":
        return Server;
      case "Workflow":
        return Workflow;
      case "CheckCircle2":
        return CheckCircle2;
      case "Headphones":
        return Headphones;
      case "Users2":
        return Users2;
      default:
        return Server;
    }
  };

  return (
    <section className="relative z-20 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Infrastructure & Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our High-Tech <span className="text-gradient-purple">Operational Facilities</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            We don't rely on generic stock photos of desks. We show the real technological infrastructure, security compliance, and engineering rigor powering your software.
          </p>
        </div>

        {/* 6 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.map((facility) => {
            const Icon = getIcon(facility.icon);

            return (
              <div
                key={facility.id}
                className="group p-6 sm:p-7 rounded-3xl border border-purple-500/20 bg-[#0B1023]/80 hover:bg-[#0e1635] hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon Badge */}
                  <div
                    className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `rgba(${
                        facility.accent === "#00D4FF"
                          ? "0, 212, 255, 0.15"
                          : facility.accent === "#7C3AED"
                          ? "124, 58, 237, 0.2"
                          : facility.accent === "#10B981"
                          ? "16, 185, 129, 0.15"
                          : facility.accent === "#F59E0B"
                          ? "245, 158, 11, 0.15"
                          : "236, 72, 153, 0.15"
                      })`,
                      border: `1px solid ${facility.accent}40`,
                      color: facility.accent,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {facility.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-1">
                    {facility.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="mt-6 pt-5 border-t border-purple-900/30 space-y-2">
                  {facility.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import ConsultationModal from "./ConsultationModal";
import {
  Globe,
  Smartphone,
  Users,
  BarChart3,
  Layers,
  Code2,
  Palette,
  ShieldCheck,
  Cpu,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

export default function ServicesSection() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeConsultationService, setActiveConsultationService] = useState("Website Development");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return Globe;
      case "Smartphone":
        return Smartphone;
      case "Users":
        return Users;
      case "BarChart3":
        return BarChart3;
      case "Layers":
        return Layers;
      case "Code2":
        return Code2;
      case "Palette":
        return Palette;
      case "ShieldCheck":
        return ShieldCheck;
      case "Cpu":
        return Cpu;
      default:
        return Sparkles;
    }
  };

  const handleOpenConsultation = (serviceName: string) => {
    setActiveConsultationService(serviceName);
    setIsConsultationOpen(true);
  };

  return (
    <section id="services" className="relative z-20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What We <span className="text-gradient-purple">Engineer</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light">
            High-velocity software architectures built for scale, speed, and real commercial impact.
          </p>
        </div>

        {/* Services Grid (Clean, punchy cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="group relative p-6 sm:p-7 rounded-3xl border border-purple-500/20 bg-[#0D0720]/75 hover:bg-[#160B2E] hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-cyan-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.35)] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-purple-900/40 border border-purple-400/20 text-purple-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-light">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] rounded bg-purple-950/30 border border-purple-500/20 text-zinc-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-900/30 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-medium">
                    Tailored Solution
                  </span>
                  <button
                    onClick={() => handleOpenConsultation(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={activeConsultationService}
      />
    </section>
  );
}

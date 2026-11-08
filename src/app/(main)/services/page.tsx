import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
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
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services | Keds Technology",
  description:
    "Explore Keds Technology's 10 core engineering services: Custom Web Development, Mobile Apps, Enterprise HRMS, CRM, Manufacturing ERP, and Cloud AI.",
};

export default function ServicesPage() {
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

  return (
    <main className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full-Spectrum IT Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our <span className="text-gradient-purple">Engineering Services</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            From consumer-grade mobile and web applications to complex enterprise workflows. Every service is backed by guaranteed SLAs, rigorous security, and modern tech stacks.
          </p>
        </div>

        {/* Detailed Services Catalog */}
        <div className="space-y-12 mb-20">
          {servicesData.map((service) => {
            const Icon = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-10 rounded-3xl border border-purple-500/25 bg-[#0B1023]/80 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left: Service Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-cyan-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs text-purple-300 uppercase tracking-wider font-semibold">
                          {service.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Right: Capabilities + CTA */}
                  <div className="p-6 rounded-2xl bg-[#060a1d] border border-purple-500/20 space-y-5">
                    <div>
                      <h3 className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-3">
                        Key Deliverables
                      </h3>
                      <div className="space-y-2">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-purple-900/30">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_28px_rgba(0,212,255,0.3)] transition-all"
                      >
                        <span>Get a Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "./ConsultationModal";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Code2,
  CheckCircle2,
  Terminal,
  Globe,
  Smartphone,
  Database,
} from "lucide-react";

export default function CompanyHero() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"web" | "mobile" | "enterprise">("web");

  const techHighlights = {
    web: {
      title: "Full-Stack Web Engineering",
      badge: "High-Performance Cloud",
      desc: "Sub-second web applications, modern headless commerce, and scalable portals crafted with pixel perfection.",
      specs: ["Sub-Second Core Speed", "High-Concurrency Engine", "Zero-Latency Cloud Delivery", "99+ Performance Score"],
    },
    mobile: {
      title: "Cross-Platform Mobile Apps",
      badge: "Mobile Ecosystems • Offline First",
      desc: "Native-feel applications featuring fluid 120fps animations, local biometric security, and instant sync.",
      specs: ["Native & Cross-Platform", "Biometric Authentication", "Offline-Ready Cache", "Push Automation"],
    },
    enterprise: {
      title: "Enterprise ERP & Automation",
      badge: "Cloud Scale • High Concurrency",
      desc: "Mission-critical architectures uniting automated supply chain, multi-plant inventory, and real-time analytics.",
      specs: ["High-Throughput Databases", "Role-Based Access Control", "Automated Workflows", "99.95% SLA Uptime"],
    },
  };

  return (
    <section className="relative z-20 w-full min-h-[calc(100dvh-4.5rem)] flex flex-col justify-center pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Soft Purple Aurora Glow (Vercel/Linear Style, No Clutter) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] lg:w-[1200px] h-[350px] sm:h-[480px] pointer-events-none opacity-35 blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.45) 0%, rgba(99, 102, 241, 0.25) 45%, transparent 75%)",
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clear, High-Impact Company Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-200 shadow-[0_0_20px_rgba(124,58,237,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="font-semibold tracking-wide">
                Keds Technology • Software & Digital Engineering
              </span>
            </div>

            {/* Main Headline (Concise, Powerful, Beautiful) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12]">
              We Engineer Software That{" "}
              <span className="text-gradient-purple">Scales Businesses</span>{" "}
              Without Limits.
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
              From high-velocity web platforms and mobile apps to custom ERPs and intelligent digital systems — we build robust, state-of-the-art technology tailored to your exact business vision.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-1 max-w-lg">
              <div className="p-3 rounded-2xl bg-purple-950/30 border border-purple-500/20">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-white">
                  99.9%
                </div>
                <div className="text-[11px] sm:text-xs text-purple-300">
                  Uptime & Reliability
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-purple-950/30 border border-purple-500/20">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-cyan-300">
                  0.6s
                </div>
                <div className="text-[11px] sm:text-xs text-purple-300">
                  Sub-Second Speed
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-purple-950/30 border border-purple-500/20">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-300">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-purple-300">
                  Custom Architecture
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95 group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#expertise"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-purple-500/30 hover:border-purple-400 bg-[#0B1023]/80 hover:bg-[#121833] text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Our Expertise</span>
                <span className="text-purple-400">↓</span>
              </a>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-purple-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Schedule Consultation</span>
              </button>
            </div>

          </div>

          {/* Right Column: Holographic Glass Architecture Engine */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-3xl border border-purple-500/30 bg-[#070b1a]/90 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-4">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-zinc-400 ml-1.5">
                    keds-core-architecture
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <button
                  onClick={() => setActiveTab("web")}
                  className={`py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                    activeTab === "web"
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Web App
                </button>
                <button
                  onClick={() => setActiveTab("mobile")}
                  className={`py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                    activeTab === "mobile"
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Mobile
                </button>
                <button
                  onClick={() => setActiveTab("enterprise")}
                  className={`py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                    activeTab === "enterprise"
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Enterprise
                </button>
              </div>

              {/* Active Tab Content Card */}
              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-300">
                    {techHighlights[activeTab].badge}
                  </span>
                  <Terminal className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {techHighlights[activeTab].title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {techHighlights[activeTab].desc}
                </p>

                {/* Specs List */}
                <div className="pt-2 space-y-1.5 border-t border-purple-900/30">
                  {techHighlights[activeTab].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-purple-200/90 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal Code Snapshot */}
              <div className="p-3 rounded-xl bg-[#030611] border border-white/[0.05] font-mono text-[11px] text-zinc-400 flex items-center justify-between">
                <div>
                  <span className="text-purple-400">$</span> kedstech deploy --env=production
                </div>
                <span className="text-emerald-400 text-[10px]">READY (0.4s)</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService="Custom Software Architecture"
      />
    </section>
  );
}

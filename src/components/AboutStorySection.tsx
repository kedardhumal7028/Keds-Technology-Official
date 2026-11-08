"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Target, Eye, Gem, Shield, HeartHandshake, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function AboutStorySection() {
  const pillars = [
    {
      title: "Bespoke Architecture",
      desc: "Zero generic templates. Handcrafted code designed for your unique business logic and high concurrency.",
      icon: Gem,
      color: "#00D4FF",
    },
    {
      title: "Sub-Second Performance",
      desc: "Optimized server architecture and distributed CDNs ensuring lightning-fast interactions and 95+ performance vitals.",
      icon: Zap,
      color: "#7C3AED",
    },
    {
      title: "Radical Transparency",
      desc: "Live weekly sprint demos, direct access to senior architects, and zero intermediate communication layers.",
      icon: Shield,
      color: "#10B981",
    },
    {
      title: "Commercial Impact",
      desc: "We don't just ship lines of code; we build digital systems that multiply revenue, leads, and operational efficiency.",
      icon: HeartHandshake,
      color: "#EC4899",
    },
  ];

  return (
    <section className="relative z-20 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Keds Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-gradient-purple">Excellence</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light">
            We partner with forward-thinking leaders who refuse to compromise on design, speed, and engineering precision.
          </p>
        </div>

        {/* 4 Sleek Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-6 sm:p-7 rounded-3xl border border-purple-500/20 bg-[#0B1023]/70 hover:bg-[#0e1635] hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-2xl mb-5 flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      background: `rgba(${
                        item.color === "#00D4FF"
                          ? "0, 212, 255, 0.15"
                          : item.color === "#7C3AED"
                          ? "124, 58, 237, 0.2"
                          : item.color === "#10B981"
                          ? "16, 185, 129, 0.15"
                          : "236, 72, 153, 0.15"
                      })`,
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-900/30 flex items-center gap-1.5 text-xs font-mono text-purple-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Guaranteed SLA</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

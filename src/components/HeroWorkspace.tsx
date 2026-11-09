"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Sparkles, Database, CheckCircle, Flame, Layers } from "lucide-react";

export default function HeroWorkspace() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"architecture" | "deployment">("architecture");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse offset (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full max-w-[620px] aspect-[4/3] sm:aspect-square flex items-center justify-center select-none perspective-[1000px]">
      {/* 1. Neon Energy Ring & Glowing Aura */}
      <div
        className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border border-purple-500/20 shadow-[0_0_80px_rgba(124,58,237,0.35)] animate-spin pointer-events-none"
        style={{
          animationDuration: "40s",
          borderTopColor: "rgba(0, 212, 255, 0.7)",
          borderRightColor: "rgba(147, 51, 234, 0.5)",
        }}
      />
      <div
        className="absolute w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full border border-dashed border-cyan-400/20 animate-spin pointer-events-none"
        style={{
          animationDuration: "25s",
          animationDirection: "reverse",
        }}
      />

      {/* 2. Floating AI Orb with Cyan & Purple Plasma Glow */}
      <div
        className="absolute z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-transform duration-300"
        style={{
          transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
          background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #00d4ff 40%, #7c3aed 80%, #06020E 100%)",
          boxShadow: "0 0 50px rgba(0, 212, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.8)",
        }}
      >
        <Sparkles className="w-8 h-8 text-white animate-pulse" />
        <span className="sr-only">Keds AI Core</span>
      </div>

      {/* 3. Developer Workspace Terminal (Main Holographic Window) */}
      <div
        className="relative z-10 w-[92%] sm:w-[86%] rounded-2xl border border-purple-500/30 bg-[#0D0720]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(124,58,237,0.2)] overflow-hidden transition-transform duration-500 ease-out"
        style={{
          transform: `rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
        }}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-[#070b1a] border-b border-purple-500/20 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono text-zinc-400 text-[11px] flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-purple-400" />
              keds-core-engine.ts
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Prod Ready
            </span>
          </div>
        </div>

        {/* Code Snippet Editor Content */}
        <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-zinc-300 space-y-1.5 leading-relaxed bg-[#060918]/95">
          <div className="text-zinc-500">// Enterprise Software Architecture by Keds Technology</div>
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-cyan-300">kedsPlatform</span> ={" "}
            <span className="text-purple-400">new</span>{" "}
            <span className="text-amber-300">DigitalEcosystem</span>({"{"}
          </div>
          <div className="pl-4">
            <span className="text-zinc-400">speed:</span>{" "}
            <span className="text-emerald-400">"sub-second"</span>,
          </div>
          <div className="pl-4">
            <span className="text-zinc-400">architecture:</span>{" "}
            <span className="text-emerald-400">"High-Velocity Cloud Microservices"</span>,
          </div>
          <div className="pl-4">
            <span className="text-zinc-400">reliability:</span>{" "}
            <span className="text-cyan-300">99.95%</span>,
          </div>
          <div className="pl-4">
            <span className="text-zinc-400">solutions:</span> [
            <span className="text-amber-200">"ERP"</span>,{" "}
            <span className="text-amber-200">"CRM"</span>,{" "}
            <span className="text-amber-200">"HRMS"</span>,{" "}
            <span className="text-amber-200">"Mobile"</span>]
          </div>
          <div>{"});"}</div>

          <div className="pt-2 text-emerald-400 flex items-center gap-1.5 text-[10px]">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>✓ Verified Core Performance: 98 Speed • 100 SEO</span>
          </div>
        </div>

        {/* Real-time Telemetry Bar */}
        <div className="px-4 py-2 bg-[#090e24] border-t border-purple-500/20 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-purple-300">
              <Cpu className="w-3 h-3" /> 12ms latency
            </span>
            <span className="hidden sm:flex items-center gap-1 text-cyan-300">
              <Database className="w-3 h-3" /> Cache Synced
            </span>
          </div>
          <span className="text-zinc-400">Branch: <strong className="text-white">main</strong></span>
        </div>
      </div>

      {/* 4. Top-Left Floating Holographic Card: Ath Elite Sports Metrics */}
      <div
        className="absolute -top-3 -left-3 sm:-left-6 z-30 p-3 sm:p-3.5 rounded-2xl border border-cyan-400/40 bg-[#0D0720]/95 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,212,255,0.2)] animate-float"
        style={{
          transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
        }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-zinc-400 font-medium">Ath Elite Booking Engine</div>
            <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
              <span>+340% Traffic Lift</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Bottom-Right Floating Holographic Card: HeartPhysio Tele-Rehab */}
      <div
        className="absolute -bottom-4 -right-3 sm:-right-6 z-30 p-3 sm:p-3.5 rounded-2xl border border-purple-500/40 bg-[#0D0720]/95 backdrop-blur-xl shadow-[0_10px_25px_rgba(124,58,237,0.3)] animate-float"
        style={{
          animationDelay: "2s",
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
        }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-400/50 flex items-center justify-center text-purple-300">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-zinc-400 font-medium">Enterprise HRMS & Cloud ERP</div>
            <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
              <span>99.99% Consistency</span>
              <span className="text-[10px] text-purple-300 font-mono">ACID</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Orbiting Technology Icon Badges */}
      <div
        className="absolute -top-6 right-8 z-20 px-2.5 py-1 rounded-full border border-purple-500/40 bg-[#0e152e]/90 text-[10px] font-mono text-purple-200 flex items-center gap-1.5 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
        style={{ transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)` }}
      >
        <span className="text-cyan-400">★</span> Cloud Scale
      </div>
      <div
        className="absolute bottom-6 -left-4 z-20 px-2.5 py-1 rounded-full border border-cyan-500/40 bg-[#0e152e]/90 text-[10px] font-mono text-cyan-200 flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,212,255,0.3)]"
        style={{ transform: `translate(${mousePos.x * -7}px, ${mousePos.y * -7}px)` }}
      >
        <span className="text-purple-400">⚡</span> High Velocity
      </div>
    </div>
  );
}

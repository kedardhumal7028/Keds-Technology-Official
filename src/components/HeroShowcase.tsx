"use client";

import React, { useState } from "react";
import {
  Car,
  Trophy,
  Activity,
  Layers,
  Sparkles,
  Calendar,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<"athelite" | "heartphysio" | "bhilare">("athelite");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 sm:mt-16 select-none">
      {/* Ambient background glow behind the showcase */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-40 blur-3xl pointer-events-none"
        style={{
          background:
            activeTab === "athelite"
              ? "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.35) 0%, rgba(124, 58, 237, 0.25) 50%, transparent 70%)"
              : activeTab === "heartphysio"
              ? "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.35) 0%, rgba(124, 58, 237, 0.25) 50%, transparent 70%)"
              : "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.35) 0%, rgba(124, 58, 237, 0.25) 50%, transparent 70%)",
        }}
      />

      {/* Main Glass Device Container */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-purple-500/30 bg-[#0B1023]/90 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(124,58,237,0.15)] overflow-hidden">
        {/* Top Browser / App Chrome Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#070b1a] border-b border-purple-500/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 text-zinc-400 text-xs hidden sm:inline">
              kedstechnology.com
            </span>
          </div>

          {/* Interactive Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-purple-950/30 border border-purple-500/20">
            <button
              onClick={() => setActiveTab("athelite")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "athelite"
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-cyan-300" />
              <span>Ath Elite Sports</span>
            </button>

            <button
              onClick={() => setActiveTab("heartphysio")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "heartphysio"
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-pink-300" />
              <span>HeartPhysio</span>
            </button>

            <button
              onClick={() => setActiveTab("bhilare")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "bhilare"
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Car className="w-3.5 h-3.5 text-amber-300" />
              <span>Bhilare Tour &amp; Travel</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-300">Live Project</span>
          </div>
        </div>

        {/* Tab 1: Ath Elite Sports Complex Interface */}
        {activeTab === "athelite" && (
          <div className="p-5 sm:p-8 space-y-6 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 uppercase tracking-wider">
                <span>Sports Tech Ecosystem</span>
                <span>•</span>
                <span>Real-Time Scheduling &amp; Booking Engine</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Ath Elite Sports Complex &amp; Academy
              </h3>
            </div>
          </div>
        )}

        {/* Tab 2: HeartPhysio Health Interface */}
        {activeTab === "heartphysio" && (
          <div className="p-5 sm:p-8 space-y-6 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-pink-400 uppercase tracking-wider">
                <span>Tele-Health &amp; Clinical Rehab</span>
                <span>•</span>
                <span>HIPAA-Ready Portal</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                HeartPhysio Clinical Rehabilitation
              </h3>
            </div>
          </div>
        )}

        {/* Tab 3: Bhilare Tour & Travel Interface */}
        {activeTab === "bhilare" && (
          <div className="p-5 sm:p-8 space-y-6 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-amber-400 uppercase tracking-wider">
                <span>Travel Logistics &amp; Booking</span>
                <span>•</span>
                <span>Automated WhatsApp API</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Bhilare Tour &amp; Travel Platform
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

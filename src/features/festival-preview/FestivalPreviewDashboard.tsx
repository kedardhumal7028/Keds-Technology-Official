"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutCompanySection from "@/components/AboutCompanySection";
import OurExpertiseSection from "@/components/OurExpertiseSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import { FestivalGreetingModal } from "./FestivalGreetingModal";
import {
  FestivalId,
  FESTIVALS_MAP,
  FESTIVAL_LIST,
  FESTIVAL_ICONS,
} from "./festivalData";
import { Gift, Calendar, Sparkles } from "lucide-react";

export function FestivalPreviewDashboard() {
  const [selectedFestivalId, setSelectedFestivalId] = useState<FestivalId>("diwali");
  const [showGreetingPoster, setShowGreetingPoster] = useState<boolean>(false);

  const currentFestival = FESTIVALS_MAP[selectedFestivalId] || FESTIVALS_MAP.diwali;

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans relative">
      {/* AI FESTIVAL GREETING POSTER MODAL (पॉपअप) */}
      <FestivalGreetingModal
        festival={currentFestival}
        year="2026"
        isOpen={showGreetingPoster}
        onClose={() => setShowGreetingPoster(false)}
      />

      {/* CLEAN FESTIVAL SWITCHER BAR (सर्व अनावश्यक टॅब्स काढून फक्त सण निवडणारा साधा बार) */}
      <div className="sticky top-0 z-50 bg-[#0c0817]/95 backdrop-blur-xl border-b border-purple-500/30 px-3 py-2.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* Title & 5-Day Automation Rule Indicator */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs sm:text-sm font-extrabold text-white">
              Keds Festival Studio
            </span>
            <span className="text-[11px] font-medium text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2.5 py-0.5 rounded-full hidden sm:inline-flex items-center gap-1">
              <Calendar className="w-3 h-3 text-amber-400" />
              ५ दिवस आधी ते ५ दिवस नंतर (१०-११ दिवस) ➔ नंतर मूळ नॉर्मल
            </span>
          </div>

          {/* Greeting Poster Button */}
          <div className="flex items-center gap-2">
            {selectedFestivalId !== "original" && (
              <button
                onClick={() => setShowGreetingPoster(true)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black shadow-md cursor-pointer transition-transform active:scale-95"
              >
                <Gift className="w-3.5 h-3.5 text-black" />
                <span>शुभेच्छा पोस्टर बघा</span>
              </button>
            )}
          </div>
        </div>

        {/* Clean 1-Click Festival Selector Ribbon (कोणतेही किचकट टॅब्स नाहीत) */}
        <div className="max-w-7xl mx-auto mt-2 pt-1.5 border-t border-white/[0.08] flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {FESTIVAL_LIST.map((fest) => {
            const isSelected = selectedFestivalId === fest.id;
            const icon = FESTIVAL_ICONS[fest.id] || "🎉";

            return (
              <button
                key={fest.id}
                onClick={() => setSelectedFestivalId(fest.id as FestivalId)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 text-white font-bold shadow-lg scale-[1.03] ring-1 ring-amber-300"
                    : "bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10"
                }`}
              >
                <span>{icon}</span>
                <span>{fest.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTUAL WEBSITE PREVIEW (तंतोतंत खरीखुरी वेबसाईट - Navbar + Themed Hero + Content) */}
      <div className="w-full relative">
        {/* Themed Navbar */}
        <Navbar overrideFestivalId={selectedFestivalId} />

        {/* Themed Hero Section (Dynamic Greeting Badge, Fireworks/Particles, Theme Colors) */}
        <main className="w-full overflow-hidden">
          <HeroSection overrideFestivalId={selectedFestivalId} />
          <AboutCompanySection />
          <OurExpertiseSection />
          <ContactFormSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default FestivalPreviewDashboard;

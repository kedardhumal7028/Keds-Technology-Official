"use client";

import React, { useState, useEffect } from "react";
import FestivalDecoratedLogo from "./FestivalDecoratedLogo";
import {
  FestivalThemeConfig,
  YearEdition,
  getActiveConcept,
  FESTIVAL_ICONS,
  FestivalId,
} from "./festivalData";

import { FESTIVAL_GREETINGS_MAP } from "./festivalCalendarEngine";
import { X, Sparkles, ArrowRight, Heart, Share2, Check } from "lucide-react";

interface FestivalGreetingModalProps {
  festival: FestivalThemeConfig;
  year: YearEdition;
  isOpen: boolean;
  onClose: () => void;
  onConsultationClick?: () => void;
}

export function FestivalGreetingModal({
  festival,
  year,
  isOpen,
  onClose,
  onConsultationClick,
}: FestivalGreetingModalProps) {
  const [copied, setCopied] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || festival.id === "original") return null;

  const concept = getActiveConcept(festival, year);
  const icon = FESTIVAL_ICONS[festival.id] || "🎉";
  const greetingData = FESTIVAL_GREETINGS_MAP[festival.id as FestivalId] || {
    nativeGreeting: festival.nativeGreeting,
    shubhechhaMarathi: `Keds Technology कडून ${festival.name}च्या हार्दिक शुभेच्छा!`,
    shubhechhaEnglish: `Wishing you prosperity and joy on ${festival.name}!`,
    tagline: festival.tagline,
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${greetingData.nativeGreeting} from Keds Technology`,
        text: greetingData.shubhechhaMarathi,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${greetingData.shubhechhaMarathi} - Keds Technology`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background radial glow matching the festival */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(circle, ${concept.primaryColor} 0%, ${concept.secondaryColor} 60%, transparent 80%)`,
        }}
      />

      {/* Main AI Festive Poster Card */}
      <div
        className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl overflow-hidden flex flex-col items-center text-center transition-all duration-300 scale-100"
        style={{
          background: "linear-gradient(180deg, #120924 0%, #080312 100%)",
          borderColor: `${concept.accentColor}60`,
          boxShadow: `0 0 50px ${concept.buttonShadow}, 0 25px 50px rgba(0,0,0,0.9)`,
        }}
      >
        {/* Top Gold Filigree Corner Accents */}
        <div className="absolute top-2 left-3 text-xs opacity-60 text-amber-300 font-serif">✦</div>
        <div className="absolute top-2 right-12 text-xs opacity-60 text-amber-300 font-serif">✦</div>
        <div className="absolute bottom-3 left-3 text-xs opacity-60 text-amber-300 font-serif">✦</div>
        <div className="absolute bottom-3 right-3 text-xs opacity-60 text-amber-300 font-serif">✦</div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors z-20 cursor-pointer"
          title="Close Greeting Poster"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Festive Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
          style={{
            backgroundColor: `${concept.primaryColor}25`,
            borderColor: `${concept.accentColor}50`,
            color: concept.accentColor,
            borderWidth: "1px",
          }}
        >
          <span>{icon}</span>
          <span>{greetingData.nativeGreeting}</span>
          <span>{icon}</span>
        </div>

        {/* Keds Decorated Logo */}
        <div className="py-2 mb-3">
          <FestivalDecoratedLogo
            festivalId={festival.id}
            year={year}
            size="default"
            showTagline={false}
          />
        </div>

        {/* Marathi Shubhechha Text (Heart of the request) */}
        <h3 className="font-serif text-lg sm:text-2xl font-extrabold text-white leading-snug tracking-tight max-w-md">
          {greetingData.shubhechhaMarathi}
        </h3>

        {/* English Festive Blessing */}
        <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm font-light">
          {greetingData.shubhechhaEnglish}
        </p>

        {/* Auspicious Tagline */}
        <div
          className="mt-4 p-3 rounded-2xl w-full text-xs font-medium border"
          style={{
            backgroundColor: `${concept.primaryColor}15`,
            borderColor: `${concept.primaryColor}30`,
            color: concept.accentColor,
          }}
        >
          ✨ {greetingData.tagline}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 w-full flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onClose}
            className={`w-full sm:flex-1 py-3 px-5 rounded-full text-white font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 bg-gradient-to-r ${concept.buttonGradient}`}
            style={{
              boxShadow: `0 0 20px ${concept.buttonShadow}`,
            }}
          >
            <span>वेबसाईट पहा (Explore Website)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => {
              onClose();
              if (onConsultationClick) onConsultationClick();
            }}
            className="w-full sm:w-auto py-3 px-4 rounded-full border text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
            style={{ borderColor: `${concept.primaryColor}50` }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: concept.accentColor }} />
            <span>सल्लामसलत (Consultation)</span>
          </button>
        </div>

        {/* Footer: Share & Don't Show Again */}
        <div className="mt-5 pt-4 border-t border-white/10 w-full flex items-center justify-between text-[11px] text-zinc-400">
          <label className="flex items-center gap-1.5 cursor-pointer select-none hover:text-zinc-200">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="rounded border-zinc-700 bg-zinc-900 text-purple-600 focus:ring-0 cursor-pointer w-3.5 h-3.5"
            />
            <span>आज पुन्हा दाखवू नका (Don't show again today)</span>
          </label>

          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-purple-300 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-300">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3 h-3" />
                <span>शुभेच्छा शेअर करा</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FestivalGreetingModal;

"use client";

import React from "react";
import {
  FestivalThemeConfig,
  YearEdition,
  getActiveConcept,
  FESTIVAL_ICONS,
} from "./festivalData";
import { Sparkles, Palette, CheckCircle2, Layers, Compass, Zap } from "lucide-react";

interface FestivalDesignTokensProps {
  festival: FestivalThemeConfig;
  year: YearEdition;
  onYearChange: (y: YearEdition) => void;
}

export function FestivalDesignTokens({
  festival,
  year,
  onYearChange,
}: FestivalDesignTokensProps) {
  const currentConcept = getActiveConcept(festival, year);
  const isThemed = festival.id !== "original";
  const icon = FESTIVAL_ICONS[festival.id] || "🎉";

  return (
    <div className="space-y-8 text-white">
      {/* Annual Theme Strategy Banner */}
      <div
        className="p-6 rounded-2xl border backdrop-blur-xl relative overflow-hidden"
        style={{
          background: isThemed
            ? `linear-gradient(135deg, ${currentConcept.primaryColor}22, rgba(13, 7, 32, 0.95))`
            : "rgba(13, 7, 32, 0.95)",
          borderColor: isThemed ? `${currentConcept.primaryColor}50` : "rgba(168, 85, 247, 0.3)",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{icon}</span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {festival.name} Branding Strategy
              </h3>
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: `${currentConcept.accentColor}25`,
                  color: currentConcept.accentColor,
                  border: `1px solid ${currentConcept.accentColor}60`,
                }}
              >
                {year} Edition
              </span>
            </div>
            <p className="text-sm text-zinc-300 max-w-2xl">
              {currentConcept ? currentConcept.themeName : festival.tagline}
            </p>
          </div>

          {/* Year Switcher Pills */}
          {isThemed && (
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-black/50 border border-white/10 shrink-0">
              {(["2026", "2027"] as YearEdition[]).map((y) => (
                <button
                  key={y}
                  onClick={() => onYearChange(y)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    year === y
                      ? `bg-gradient-to-r ${currentConcept.buttonGradient} text-white shadow-lg`
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {y} Theme
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detailed Concept Narrative */}
        {currentConcept && (
          <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-400" />
                Aesthetic Direction
              </span>
              <p className="text-xs text-zinc-200 leading-relaxed">
                {currentConcept.description}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Logo Decoration Motif
              </span>
              <p className="text-xs text-zinc-200 leading-relaxed">
                {currentConcept.logoDecorTitle} ({currentConcept.logoDecorType})
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Side-by-Side 2026 vs 2027 Annual Evolution Comparison */}
      {isThemed && (
        <div className="p-6 rounded-2xl border border-white/10 bg-[#0c0817]/90 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Annual Trending Theme Evolution (2026 vs 2027)
            </h4>
            <span className="text-xs text-zinc-400">
              Fresh bespoke design every year
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 2026 Card */}
            <div
              onClick={() => onYearChange("2026")}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                year === "2026"
                  ? "ring-2 ring-purple-400/80 bg-purple-950/30"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  2026 Collection
                </span>
                {year === "2026" && (
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active Preview
                  </span>
                )}
              </div>
              <h5 className="text-sm font-bold text-white mb-1">
                {festival.concept2026.themeName}
              </h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {festival.concept2026.description}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[11px] font-semibold text-zinc-400">Motif:</span>
                <span className="text-[11px] text-zinc-300">
                  {festival.concept2026.logoDecorTitle}
                </span>
              </div>
            </div>

            {/* 2027 Card */}
            <div
              onClick={() => onYearChange("2027")}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                year === "2027"
                  ? "ring-2 ring-purple-400/80 bg-purple-950/30"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  2027 Collection
                </span>
                {year === "2027" && (
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active Preview
                  </span>
                )}
              </div>
              <h5 className="text-sm font-bold text-white mb-1">
                {festival.concept2027.themeName}
              </h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {festival.concept2027.description}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[11px] font-semibold text-zinc-400">Motif:</span>
                <span className="text-[11px] text-zinc-300">
                  {festival.concept2027.logoDecorTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Color Tokens Palette */}
      <div className="p-6 rounded-2xl border border-white/10 bg-[#0c0817]/90 space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-2">
          <Palette className="w-4 h-4 text-purple-400" />
          Color Palette &amp; Token Breakdown
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Primary */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
            <div
              className="h-10 rounded-lg shadow-inner border border-white/20 flex items-center justify-center text-[10px] font-mono font-bold"
              style={{ backgroundColor: currentConcept.primaryColor, color: "#fff" }}
            >
              {currentConcept.primaryColor}
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Primary Brand</p>
              <p className="text-[10px] text-zinc-400">Core festive accent</p>
            </div>
          </div>

          {/* Secondary */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
            <div
              className="h-10 rounded-lg shadow-inner border border-white/20 flex items-center justify-center text-[10px] font-mono font-bold"
              style={{ backgroundColor: currentConcept.secondaryColor, color: "#fff" }}
            >
              {currentConcept.secondaryColor}
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Secondary</p>
              <p className="text-[10px] text-zinc-400">Supportive highlight</p>
            </div>
          </div>

          {/* Accent */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
            <div
              className="h-10 rounded-lg shadow-inner border border-white/20 flex items-center justify-center text-[10px] font-mono font-bold text-black"
              style={{ backgroundColor: currentConcept.accentColor }}
            >
              {currentConcept.accentColor}
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Luminous Accent</p>
              <p className="text-[10px] text-zinc-400">Glow &amp; particles</p>
            </div>
          </div>

          {/* Button Gradient */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
            <div
              className={`h-10 rounded-lg shadow-inner border border-white/20 flex items-center justify-center text-[10px] font-mono font-bold text-white text-center bg-gradient-to-r ${currentConcept.buttonGradient}`}
            >
              CTA Gradient
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Action Button</p>
              <p className="text-[10px] text-zinc-400">Interactive controls</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Integrity Guarantee */}
      <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h5 className="text-xs font-bold text-emerald-200 uppercase tracking-wide">
            100% Brand Integrity Guarantee
          </h5>
          <p className="text-xs text-emerald-100/80 leading-relaxed">
            The original Keds Technology logo graphic, typography, aspect ratio, and letterforms remain <strong>100% intact and uncompressed</strong>. Festival decorations are applied via non-destructive SVG vector overlays around the bounding box, ensuring optimal brand recognition across all devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FestivalDesignTokens;

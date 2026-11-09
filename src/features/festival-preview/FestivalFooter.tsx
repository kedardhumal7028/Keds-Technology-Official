"use client";

import React from "react";
import FestivalDecoratedLogo from "./FestivalDecoratedLogo";
import {
  FestivalThemeConfig,
  YearEdition,
  getActiveConcept,
  FESTIVAL_ICONS,
} from "./festivalData";
import { Shield, Heart } from "lucide-react";

interface FestivalFooterProps {
  festival: FestivalThemeConfig;
  year: YearEdition;
}

export function FestivalFooter({ festival, year }: FestivalFooterProps) {
  const currentYear = new Date().getFullYear();
  const concept = getActiveConcept(festival, year);
  const isThemed = festival.id !== "original";
  const icon = FESTIVAL_ICONS[festival.id] || "🎉";

  return (
    <footer
      className="relative z-20 border-t bg-[#000000] text-white pt-16 pb-12 overflow-hidden transition-all duration-300"
      style={{
        borderColor: isThemed ? `${concept.primaryColor}30` : "rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Top subtle glow with festival color */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px]"
        style={{
          background: isThemed
            ? `linear-gradient(90deg, transparent, ${concept.accentColor}, transparent)`
            : "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b"
          style={{
            borderColor: isThemed ? `${concept.primaryColor}20` : "rgba(124, 58, 237, 0.15)",
          }}
        >
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start">
              <FestivalDecoratedLogo
                festivalId={festival.id}
                year={year}
                size="default"
                showTagline={true}
              />
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm font-light">
              Keds Technology is a senior digital engineering firm. We engineer high-velocity web, mobile, HRMS, CRM, and ERP systems with complete code ownership.
            </p>

            {isThemed && (
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium"
                style={{
                  backgroundColor: `${concept.primaryColor}15`,
                  borderColor: `${concept.primaryColor}40`,
                  color: concept.accentColor,
                }}
              >
                <span>{icon}</span>
                <span>
                  Wishing you a joyous {festival.name} from Team Keds
                </span>
              </div>
            )}
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="hover:text-white transition-colors cursor-pointer">Website Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mobile Applications</li>
              <li className="hover:text-white transition-colors cursor-pointer">HRMS Solutions</li>
              <li className="hover:text-white transition-colors cursor-pointer">CRM Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">Custom ERP Systems</li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Engineering Office
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              📍 Pune, Maharashtra, India
            </p>
            <p className="text-xs text-zinc-400">
              📧 contact@kedstechnology.com
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] text-emerald-300 font-medium">
                Active Client Engineering Sprints
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Festival Branding
            </h4>
            <div
              className="p-3 rounded-xl border space-y-1.5 text-xs text-zinc-300"
              style={{
                backgroundColor: isThemed ? `${concept.primaryColor}10` : "rgba(255, 255, 255, 0.03)",
                borderColor: isThemed ? `${concept.primaryColor}30` : "rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="font-semibold text-white flex items-center gap-1.5">
                <span>{icon}</span>
                <span>{isThemed ? `${festival.name} (${year})` : "Standard Theme"}</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                {isThemed
                  ? concept.themeName
                  : "Original Keds Technology Deep Purple & Cyan brand identity"}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Keds Technology. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-zinc-400">
              <Shield className="w-3.5 h-3.5 text-purple-400" /> Secure Architecture
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-zinc-400">
              Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Pune
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FestivalFooter;

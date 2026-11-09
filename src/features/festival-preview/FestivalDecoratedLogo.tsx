"use client";

import React from "react";
import Image from "next/image";
import { FESTIVALS_MAP, YearEdition, getActiveConcept, FestivalId } from "./festivalData";

export interface FestivalDecoratedLogoProps {
  decorType?: string;
  festivalId?: FestivalId | string;
  size?: "small" | "default" | "large";
  year?: YearEdition;
  showTagline?: boolean;
}

export function FestivalDecoratedLogo({
  decorType: customDecorType,
  festivalId,
  size = "default",
  year = "2026",
  showTagline = true,
}: FestivalDecoratedLogoProps) {
  const isLarge = size === "large";
  const isSmall = size === "small";

  let decorType = customDecorType;
  if (!decorType && festivalId) {
    const festConfig = FESTIVALS_MAP[festivalId as FestivalId];
    if (festConfig) {
      const concept = getActiveConcept(festConfig, year);
      decorType = concept.logoDecorType;
    }
  }


  return (
    <div className="relative inline-flex flex-col items-center justify-center select-none group">
      {/* ================= FESTIVAL LOGO DECORATIONS (OVERLAYS) ================= */}

      {/* 1. DIWALI 2026: AKASH KANDIL & TWIN DIYAS */}
      {decorType === "diwali-akash-kandil" && (
        <>
          {/* Hanging Akash Kandil on Left/Top */}
          <div className="absolute -top-7 -left-5 sm:-top-8 sm:-left-7 z-20 pointer-events-none animate-bounce duration-1000">
            <svg
              className="w-8 h-12 sm:w-10 sm:h-14 drop-shadow-[0_0_12px_#F59E0B]"
              viewBox="0 0 40 60"
              fill="none"
            >
              {/* Hanging string */}
              <line x1="20" y1="0" x2="20" y2="10" stroke="#F59E0B" strokeWidth="1.5" />
              {/* Kandil diamond body */}
              <polygon points="20,10 32,24 20,38 8,24" fill="#D97706" stroke="#FDE047" strokeWidth="1.5" />
              <polygon points="20,16 26,24 20,32 14,24" fill="#FEF08A" />
              {/* Center glow light */}
              <circle cx="20" cy="24" r="3" fill="#FFFFFF" />
              {/* Hanging Frills */}
              <path d="M12 38 L10 54 M16 38 L16 58 M20 38 L20 60 M24 38 L24 58 M28 38 L30 54" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Diya on Top Right of Logo */}
          <div className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-20 pointer-events-none">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_0_10px_#F59E0B]" viewBox="0 0 32 32" fill="none">
              {/* Flame with pulse */}
              <path d="M16 2 C16 2 20 8 20 12 C20 15 18 17 16 17 C14 17 12 15 12 12 C12 8 16 2 16 2 Z" fill="#FDE047" className="animate-pulse" />
              <path d="M16 5 C16 5 18 9 18 12 C18 13.5 17 15 16 15 C15 15 14 13.5 14 12 C14 9 16 5 16 5 Z" fill="#FFFFFF" />
              {/* Diya base */}
              <path d="M6 16 C8 24 24 24 26 16 Z" fill="#B45309" stroke="#FDE047" strokeWidth="1.2" />
              <ellipse cx="16" cy="16" rx="10" ry="2.5" fill="#78350F" />
            </svg>
          </div>
        </>
      )}

      {/* 2. DIWALI 2027: NEON HOLOGRAPHIC PRISM DIYA */}
      {decorType === "diwali-neon-prism" && (
        <>
          <div className="absolute -top-6 -right-4 z-20 pointer-events-none">
            <svg className="w-8 h-8 drop-shadow-[0_0_15px_#E040FB]" viewBox="0 0 36 36" fill="none">
              <polygon points="18,2 26,16 18,22 10,16" fill="url(#neonDiyaGrad)" stroke="#FFD700" strokeWidth="1.5" />
              <circle cx="18" cy="12" r="3" fill="#FFFFFF" className="animate-ping" />
              <path d="M8 20 L18 28 L28 20" stroke="#E040FB" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id="neonDiyaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#E040FB" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </>
      )}

      {/* 3. GANESH CHATURTHI 2026: MARIGOLD TORAN & GOLDEN MODAK */}
      {decorType === "ganesh-marigold" && (
        <>
          {/* Top Marigold Garlands arching over the logo */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-[90%] flex justify-between z-20 pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 shadow-[0_0_8px_#F97316] animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>

          {/* Golden Modak on Top-Right */}
          <div className="absolute -top-6 -right-4 z-20 pointer-events-none">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-[0_0_12px_#EA580C]" viewBox="0 0 36 36" fill="none">
              {/* Modak Swirl */}
              <path d="M18 3 C22 10 28 18 28 25 C28 30 23 33 18 33 C13 33 8 30 8 25 C8 18 14 10 18 3 Z" fill="url(#modakGrad)" stroke="#FDE047" strokeWidth="1.5" />
              <path d="M18 6 L18 32 M13 14 Q18 22 23 14" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" />
              <circle cx="18" cy="4" r="2" fill="#FFFFFF" />
              <defs>
                <linearGradient id="modakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </>
      )}

      {/* 4. GANESH CHATURTHI 2027: SACRED GEOMETRY GANESHA */}
      {decorType === "ganesh-geometric" && (
        <div className="absolute -top-7 -right-3 z-20 pointer-events-none">
          <svg className="w-8 h-8 drop-shadow-[0_0_14px_#F97316]" viewBox="0 0 36 36" fill="none">
            <path d="M18 4 L26 12 L22 24 L18 28 L14 24 L10 12 Z" stroke="#F97316" strokeWidth="1.5" fill="none" />
            <circle cx="18" cy="8" r="2.5" fill="#FBBF24" />
            <path d="M18 14 Q23 20 18 26" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* 5. NAVRATRI 2026: DANDIYA STICKS */}
      {decorType === "navratri-dandiya" && (
        <div className="absolute -top-7 -left-3 sm:-left-5 z-20 pointer-events-none">
          <svg className="w-9 h-9 drop-shadow-[0_0_12px_#E11D48]" viewBox="0 0 40 40" fill="none">
            {/* Crossed Dandiya sticks */}
            <line x1="6" y1="34" x2="34" y2="6" stroke="#FB7185" strokeWidth="3" strokeLinecap="round" />
            <line x1="6" y1="6" x2="34" y2="34" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
            <circle cx="20" cy="20" r="4" fill="#FDE047" stroke="#BE123C" strokeWidth="1.5" />
            {/* Dandiya decorative bells */}
            <circle cx="8" cy="32" r="2" fill="#FDE047" />
            <circle cx="32" cy="8" r="2" fill="#FDE047" />
          </svg>
        </div>
      )}

      {/* 6. NAVRATRI 2027: PRISMATIC SHAKTI LOTUS */}
      {decorType === "navratri-lotus" && (
        <div className="absolute -top-6 -right-3 z-20 pointer-events-none">
          <svg className="w-8 h-8 drop-shadow-[0_0_15px_#EC4899]" viewBox="0 0 36 36" fill="none">
            <path d="M18 4 C12 12 8 20 18 30 C28 20 24 12 18 4 Z" fill="url(#shaktiGrad)" />
            <path d="M10 16 C6 22 10 28 18 30" stroke="#FDA4AF" strokeWidth="1.5" />
            <path d="M26 16 C30 22 26 28 18 30" stroke="#FDA4AF" strokeWidth="1.5" />
            <defs>
              <linearGradient id="shaktiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* 7. DUSSEHRA 2026: GOLDEN BOW & ARROW */}
      {decorType === "dussehra-bow" && (
        <div className="absolute -top-7 -right-5 z-20 pointer-events-none">
          <svg className="w-10 h-10 drop-shadow-[0_0_14px_#D97706]" viewBox="0 0 44 44" fill="none">
            {/* Curved bow */}
            <path d="M8 36 C18 20 20 14 36 8" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
            {/* Bow string */}
            <line x1="8" y1="36" x2="36" y2="8" stroke="#FEF08A" strokeWidth="1" strokeDasharray="2 2" />
            {/* Arrow */}
            <line x1="12" y1="32" x2="38" y2="6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            <polygon points="38,6 30,8 36,14" fill="#EF4444" />
          </svg>
        </div>
      )}

      {/* 8. DUSSEHRA 2027: ASTRAL VICTORY ARROW */}
      {decorType === "dussehra-astral" && (
        <div className="absolute -top-6 -right-4 z-20 pointer-events-none">
          <svg className="w-9 h-9 drop-shadow-[0_0_15px_#F59E0B]" viewBox="0 0 36 36" fill="none">
            <line x1="6" y1="30" x2="30" y2="6" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <polygon points="30,6 20,8 28,16" fill="#FDE047" />
            <circle cx="30" cy="6" r="3" fill="#FFFFFF" className="animate-ping" />
          </svg>
        </div>
      )}

      {/* 9. HOLI 2026: GULAL COLOR SPLASH */}
      {decorType === "holi-splash" && (
        <>
          <div className="absolute -top-5 -left-5 z-20 pointer-events-none">
            <svg className="w-12 h-12 opacity-90" viewBox="0 0 50 50" fill="none">
              {/* Organic color drops */}
              <circle cx="15" cy="18" r="8" fill="#EC4899" className="blur-[1px]" />
              <circle cx="28" cy="12" r="6" fill="#06B6D4" className="blur-[1px]" />
              <circle cx="35" cy="24" r="5" fill="#FACC15" className="blur-[1px]" />
              <circle cx="20" cy="30" r="4" fill="#10B981" />
            </svg>
          </div>
          <div className="absolute -bottom-4 -right-4 z-20 pointer-events-none">
            <svg className="w-10 h-10 opacity-85" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="7" fill="#8B5CF6" />
              <circle cx="28" cy="14" r="5" fill="#F43F5E" />
              <circle cx="12" cy="26" r="4" fill="#38BDF8" />
            </svg>
          </div>
        </>
      )}

      {/* 10. HOLI 2027: HOLOGRAPHIC COLOR RING */}
      {decorType === "holi-holo" && (
        <div className="absolute -inset-2 rounded-full border-2 border-dashed border-cyan-400 animate-spin duration-7000 pointer-events-none opacity-50 shadow-[0_0_20px_#00D4FF]" />
      )}

      {/* 11. GUDI PADWA 2026: TRADITIONAL MAHARASHTRIAN GUDI */}
      {decorType === "gudi-traditional" && (
        <div className="absolute -top-10 -right-5 sm:-right-7 z-20 pointer-events-none">
          <svg className="w-9 h-14 sm:w-11 sm:h-16 drop-shadow-[0_0_12px_#EA580C]" viewBox="0 0 40 70" fill="none">
            {/* Bamboo stick */}
            <line x1="20" y1="20" x2="20" y2="70" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
            {/* Copper Kalash (inverted pot) */}
            <path d="M13 14 C13 8 27 8 27 14 L29 18 L11 18 Z" fill="#B45309" stroke="#FDE047" strokeWidth="1.2" />
            <ellipse cx="20" cy="18" rx="8" ry="2" fill="#D97706" />
            {/* Silk Zari Cloth */}
            <polygon points="12,20 28,20 32,46 8,46" fill="#EA580C" stroke="#FDE047" strokeWidth="1" />
            <polygon points="12,20 28,20 24,44 16,44" fill="#15803D" />
            {/* Sugar candy garland & neem leaves */}
            <circle cx="15" cy="24" r="2" fill="#FFFFFF" />
            <circle cx="20" cy="25" r="2" fill="#FFFFFF" />
            <circle cx="25" cy="24" r="2" fill="#FFFFFF" />
            <path d="M10 24 L6 26 M30 24 L34 26" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* 12. GUDI PADWA 2027: MODERN SUN-CREST GUDI */}
      {decorType === "gudi-modern" && (
        <div className="absolute -top-7 -right-4 z-20 pointer-events-none">
          <svg className="w-8 h-8 drop-shadow-[0_0_14px_#F97316]" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="18,6 24,18 18,30 12,18" fill="#FBBF24" />
            <circle cx="18" cy="18" r="4" fill="#FFFFFF" />
          </svg>
        </div>
      )}

      {/* 13. MAKAR SANKRANTI 2026: FLYING KITES & SPOOL */}
      {decorType === "sankranti-kites" && (
        <>
          <div className="absolute -top-8 -right-6 sm:-right-8 z-20 pointer-events-none">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_12px_#0284C7]" viewBox="0 0 44 44" fill="none">
              {/* Diamond Kite */}
              <polygon points="22,4 38,20 22,36 6,20" fill="#0284C7" stroke="#FDE047" strokeWidth="1.5" />
              <polygon points="22,4 38,20 22,20" fill="#38BDF8" />
              <polygon points="22,20 22,36 6,20" fill="#F59E0B" />
              {/* Kite spine & bow */}
              <line x1="22" y1="4" x2="22" y2="36" stroke="#FFFFFF" strokeWidth="1" />
              <path d="M6 20 Q22 14 38 20" stroke="#FFFFFF" strokeWidth="1" />
              {/* Tail */}
              <polygon points="22,36 18,42 26,42" fill="#EF4444" />
            </svg>
          </div>
        </>
      )}

      {/* 14. MAKAR SANKRANTI 2027: GEOMETRIC KITE DUO */}
      {decorType === "sankranti-modern" && (
        <div className="absolute -top-7 -right-5 z-20 pointer-events-none">
          <svg className="w-8 h-8 drop-shadow-[0_0_12px_#0EA5E9]" viewBox="0 0 36 36" fill="none">
            <polygon points="18,2 32,16 18,30 4,16" stroke="#0EA5E9" strokeWidth="1.5" fill="none" />
            <polygon points="18,8 26,16 18,24 10,16" fill="#F59E0B" />
          </svg>
        </div>
      )}

      {/* 15. INDEPENDENCE DAY 2026: TIRANGA SILK RIBBON & ASHOKA CHAKRA */}
      {decorType === "independence-tiranga" && (
        <>
          {/* Elegant Tricolor Ribbon draped over top left */}
          <div className="absolute -top-3.5 -left-4 sm:-left-6 z-20 pointer-events-none">
            <div className="flex flex-col gap-0.5 shadow-[0_0_12px_rgba(255,153,51,0.5)]">
              <div className="w-8 sm:w-10 h-1.5 rounded-full bg-[#FF9933]" />
              <div className="w-8 sm:w-10 h-1.5 rounded-full bg-[#FFFFFF]" />
              <div className="w-8 sm:w-10 h-1.5 rounded-full bg-[#138808]" />
            </div>
          </div>

          {/* Rotating 24-spoke Ashoka Chakra on Top-Right */}
          <div className="absolute -top-6 -right-4 sm:-right-5 z-20 pointer-events-none">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 animate-spin drop-shadow-[0_0_10px_#38BDF8]"
              style={{ animationDuration: "12s" }}
              viewBox="0 0 36 36"
              fill="none"
            >
              <circle cx="18" cy="18" r="14" stroke="#000080" strokeWidth="2" />
              <circle cx="18" cy="18" r="3" fill="#000080" />
              {/* 24 spokes */}
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="18"
                  y1="4"
                  x2="18"
                  y2="32"
                  stroke="#000080"
                  strokeWidth="0.8"
                  transform={`rotate(${i * 15} 18 18)`}
                />
              ))}
            </svg>
          </div>
        </>
      )}

      {/* 16. INDEPENDENCE DAY 2027: AEROSPACE AURORA STREAMER */}
      {decorType === "independence-aurora" && (
        <div className="absolute -top-5 -left-3 sm:-left-5 z-20 pointer-events-none flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#FF9933] shadow-[0_0_8px_#FF9933] animate-ping" />
          <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          <span className="w-3 h-3 rounded-full bg-[#138808] shadow-[0_0_8px_#138808] animate-ping" />
        </div>
      )}

      {/* 17. REPUBLIC DAY 2026: CONSTITUTIONAL CREST */}
      {decorType === "republic-crest" && (
        <div className="absolute -top-7 -right-4 z-20 pointer-events-none">
          <svg className="w-8 h-8 drop-shadow-[0_0_12px_#0284C7]" viewBox="0 0 36 36" fill="none">
            <polygon points="18,3 30,8 30,22 18,33 6,22 6,8" fill="#060A14" stroke="#0284C7" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="6" stroke="#FF9933" strokeWidth="1.2" />
            <circle cx="18" cy="18" r="2" fill="#138808" />
          </svg>
        </div>
      )}

      {/* 18. REPUBLIC DAY 2027: QUANTUM DIGITAL TRICOLOR */}
      {decorType === "republic-digital" && (
        <div className="absolute -top-5 -right-3 z-20 pointer-events-none flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#FF9933] shadow-[0_0_8px_#FF9933]" />
          <span className="w-2.5 h-2.5 rounded-sm bg-white shadow-[0_0_8px_#ffffff]" />
          <span className="w-2.5 h-2.5 rounded-sm bg-[#138808] shadow-[0_0_8px_#138808]" />
        </div>
      )}

      {/* 19. KRISHNA JANMASTHAMI 2026: PEACOCK FEATHER & BANSURI */}
      {decorType === "janmashtami-feather" && (
        <div className="absolute -top-9 -left-4 sm:-left-6 z-20 pointer-events-none">
          <svg className="w-10 h-12 sm:w-12 sm:h-14 drop-shadow-[0_0_15px_#2563EB]" viewBox="0 0 44 54" fill="none">
            {/* Peacock Feather Plume */}
            <path d="M22 4 C32 12 36 24 30 36 C26 44 18 52 14 52 C12 52 16 42 16 34 C16 22 14 12 22 4 Z" fill="url(#peacockGrad)" stroke="#10B981" strokeWidth="1" />
            {/* Eye of the feather (Mor-Pankh center) */}
            <ellipse cx="23" cy="22" rx="7" ry="9" fill="#059669" />
            <ellipse cx="23" cy="22" rx="4.5" ry="6" fill="#2563EB" />
            <ellipse cx="23" cy="22" rx="2" ry="3" fill="#FBBF24" />
            {/* Bansuri Flute angled beneath */}
            <line x1="6" y1="44" x2="38" y2="44" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="16" cy="44" r="1" fill="#78350F" />
            <circle cx="22" cy="44" r="1" fill="#78350F" />
            <circle cx="28" cy="44" r="1" fill="#78350F" />
            <defs>
              <linearGradient id="peacockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* 20. KRISHNA JANMASTHAMI 2027: ASTRAL FEATHER */}
      {decorType === "janmashtami-cosmic" && (
        <div className="absolute -top-7 -left-3 z-20 pointer-events-none">
          <svg className="w-8 h-8 drop-shadow-[0_0_14px_#3B82F6]" viewBox="0 0 36 36" fill="none">
            <ellipse cx="18" cy="18" rx="8" ry="12" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="4" fill="#10B981" />
            <circle cx="18" cy="18" r="1.5" fill="#FBBF24" className="animate-ping" />
          </svg>
        </div>
      )}

      {/* 21. RAM NAVAMI 2026: SURYA VANSH HALO */}
      {decorType === "ram-surya" && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <svg className="w-16 h-10 drop-shadow-[0_0_15px_#EA580C]" viewBox="0 0 60 40" fill="none">
            {/* Semi-circular rising sun */}
            <path d="M12 36 A18 18 0 0 1 48 36 Z" fill="url(#suryaGrad)" stroke="#FDE047" strokeWidth="1.5" />
            {/* Sun rays */}
            {[0, 30, 60, 90, 120, 150, 180].map((deg) => (
              <line
                key={deg}
                x1="30"
                y1="36"
                x2="30"
                y2="12"
                stroke="#FDE047"
                strokeWidth="1.5"
                transform={`rotate(${deg - 90} 30 36)`}
              />
            ))}
            <defs>
              <linearGradient id="suryaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* 22. RAM NAVAMI 2027: CELESTIAL DHARMA ARROW */}
      {decorType === "ram-celestial" && (
        <div className="absolute -top-7 -right-3 z-20 pointer-events-none">
          <svg className="w-8 h-8 drop-shadow-[0_0_14px_#F97316]" viewBox="0 0 36 36" fill="none">
            <line x1="8" y1="28" x2="28" y2="8" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="28,8 20,10 26,16" fill="#FDE68A" />
            <circle cx="28" cy="8" r="2.5" fill="#FFFFFF" className="animate-ping" />
          </svg>
        </div>
      )}

      {/* ================= ACTUAL KEDS TECHNOLOGY LOGO (PRESERVED 100%) ================= */}
      <div
        className={`relative transition-all duration-300 ${
          isLarge
            ? "w-[260px] sm:w-[440px] md:w-[600px] aspect-[8866/1066]"
            : isSmall
            ? "w-[130px] sm:w-[155px] aspect-[8866/1066]"
            : "w-[170px] sm:w-[220px] aspect-[8866/1066]"
        }`}
      >
        <Image
          src="/images/keds-title-only.png"
          alt="Keds Technology - Official Logo"
          fill
          priority
          sizes="(max-width: 768px) 220px, 600px"
          className="object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.45)] group-hover:drop-shadow-[0_0_35px_rgba(192,132,252,0.6)] transition-all duration-300"
        />
      </div>

      {/* Tagline: Innovate • Build • Scale */}
      {showTagline && !isSmall && (
        <div
          className={`mt-2 flex items-center justify-center space-x-2.5 text-purple-200/90 font-light tracking-[0.25em] ${
            isLarge ? "text-xs sm:text-sm tracking-[0.3em]" : "text-[10px] tracking-[0.22em]"
          }`}
          style={{ textShadow: "0 0 12px rgba(168, 85, 247, 0.4)" }}
        >
          <span>Innovate</span>
          <span className="text-purple-400/40 font-extralight">•</span>
          <span>Build</span>
          <span className="text-purple-400/40 font-extralight">•</span>
          <span>Scale</span>
        </div>
      )}
    </div>
  );
}

export default FestivalDecoratedLogo;


"use client";

import React, { useEffect, useState } from "react";
import { evaluateFestivalWindow, ActiveFestivalResult } from "./festivalCalendarEngine";
import { FestivalId } from "./festivalData";

interface NavbarFestivalDecorationProps {
  overrideFestivalId?: FestivalId;
}

export function NavbarFestivalDecoration({ overrideFestivalId }: NavbarFestivalDecorationProps) {
  const [activeFestival, setActiveFestival] = useState<ActiveFestivalResult | null>(null);

  useEffect(() => {
    // If override is provided (e.g. from preview), use it; otherwise check real-time system date
    if (overrideFestivalId) {
      if (overrideFestivalId === "original") {
        setActiveFestival(null);
      } else {
        setActiveFestival({
          isFestivalActive: true,
          festivalId: overrideFestivalId,
          festivalName: overrideFestivalId,
          festivalDate: "",
          year: "2026",
          daysDifference: 0,
          statusDescription: "Preview Mode",
          windowStartDate: "",
          windowEndDate: "",
          greetings: {} as any,
        });
      }
    } else {
      const result = evaluateFestivalWindow(new Date());
      setActiveFestival(result);
    }
  }, [overrideFestivalId]);

  if (!activeFestival || !activeFestival.isFestivalActive || activeFestival.festivalId === "original") {
    return null;
  }

  const { festivalId } = activeFestival;

  return (
    <>
      <style>{`
        @keyframes kandilSway {
          0% { transform: rotate(-7deg); }
          50% { transform: rotate(7deg); }
          100% { transform: rotate(-7deg); }
        }
        @keyframes sparkPulse {
          0%, 100% { transform: scale(0.7) rotate(0deg); opacity: 0.5; }
          50% { transform: scale(1.25) rotate(180deg); opacity: 1; }
        }
        @keyframes burstShoot {
          0% { transform: scale(0.2) translateY(8px); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: scale(1.3) translateY(-14px); opacity: 0; }
        }
        @keyframes diyaFlicker {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
          25% { transform: scaleY(1.15) scaleX(0.92); opacity: 1; }
          50% { transform: scaleY(0.92) scaleX(1.08); opacity: 0.85; }
          75% { transform: scaleY(1.1) scaleX(0.95); opacity: 1; }
        }
        @keyframes kiteFloat {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50% { transform: translateY(-6px) rotate(4deg); }
        }
        @keyframes colorPuff {
          0%, 100% { transform: scale(0.85); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.95; }
        }
        .animate-kandilSway {
          animation: kandilSway 4s ease-in-out infinite;
          transform-origin: top center;
          will-change: transform;
        }
        .animate-sparkPulse {
          animation: sparkPulse 2s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .animate-burstShoot {
          animation: burstShoot 2.6s ease-out infinite;
          will-change: transform, opacity;
        }
        .animate-diyaFlicker {
          animation: diyaFlicker 1.4s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .animate-kiteFloat {
          animation: kiteFloat 3s ease-in-out infinite;
        }
        .animate-colorPuff {
          animation: colorPuff 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* ================= 🪔 1. DIWALI THEMED NAVBAR ================= */}
      {festivalId === "diwali" && (
        <div className="pointer-events-none select-none">
          {/* Swaying Akash Kandil beside Logo */}
          <div className="absolute -top-1 left-2 sm:left-5 z-40 animate-kandilSway origin-top">
            <svg className="w-9 h-16 sm:w-12 sm:h-20 drop-shadow-[0_0_16px_rgba(245,158,11,0.95)]" viewBox="0 0 60 110" fill="none">
              <line x1="30" y1="0" x2="30" y2="16" stroke="#FEF08A" strokeWidth="1.5" strokeDasharray="2 1" />
              <circle cx="30" cy="16" r="3" fill="#F59E0B" stroke="#FEF08A" strokeWidth="1" />
              <polygon points="30,20 14,36 46,36" fill="url(#kTop)" stroke="#FEF08A" strokeWidth="0.8" />
              <polygon points="14,36 30,58 46,36" fill="url(#kBot)" stroke="#FDE68A" strokeWidth="0.8" />
              <polygon points="30,26 18,36 30,48 42,36" fill="#FDE047" opacity="0.9" className="animate-pulse" />
              <circle cx="30" cy="36" r="3.5" fill="#FFFFFF" opacity="0.9" />
              <path d="M16,36 Q14,75 12,94" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M23,46 Q22,80 21,102" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M30,58 L30,110" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
              <path d="M37,46 Q38,80 39,102" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M44,36 Q46,75 48,94" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="30" cy="110" r="2.5" fill="#FFFFFF" className="animate-pulse" />
              <defs>
                <linearGradient id="kTop" x1="14" y1="20" x2="46" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EA580C" />
                  <stop offset="0.5" stopColor="#F59E0B" />
                  <stop offset="1" stopColor="#D97706" />
                </linearGradient>
                <linearGradient id="kBot" x1="14" y1="36" x2="46" y2="58" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F59E0B" />
                  <stop offset="0.5" stopColor="#E11D48" />
                  <stop offset="1" stopColor="#EA580C" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bursting Crackers & Sparklers on right (Tablet & Desktop) */}
          <div className="hidden sm:flex absolute top-1 right-6 z-30 items-center gap-2">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 animate-burstShoot">
              <svg className="w-full h-full drop-shadow-[0_0_12px_#F59E0B]" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="3" fill="#FFFFFF" />
                <circle cx="25" cy="25" r="6" fill="#FDE047" opacity="0.8" />
                <line x1="25" y1="10" x2="25" y2="4" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
                <line x1="25" y1="40" x2="25" y2="46" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
                <line x1="10" y1="25" x2="4" y2="25" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                <line x1="40" y1="25" x2="46" y2="25" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                <line x1="14" y1="14" x2="8" y2="8" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="36" y1="36" x2="42" y2="42" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 animate-sparkPulse">
              <svg className="w-full h-full drop-shadow-[0_0_10px_#FDE047]" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="3" fill="#FFFFFF" />
                <line x1="20" y1="7" x2="20" y2="13" stroke="#FEF08A" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="27" x2="20" y2="33" stroke="#FEF08A" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="7" y1="20" x2="13" y2="20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="27" y1="20" x2="33" y2="20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          {/* Golden Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_18px_#F59E0B] opacity-95" />
        </div>
      )}

      {/* ================= 🎨 2. HOLI THEMED NAVBAR ================= */}
      {festivalId === "holi" && (
        <div className="pointer-events-none select-none">
          {/* Color Splash on left */}
          <div className="absolute top-1 left-2 sm:left-5 z-40 animate-colorPuff">
            <svg className="w-9 h-9 drop-shadow-[0_0_12px_#EC4899]" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="14" fill="#EC4899" opacity="0.8" />
              <circle cx="33" cy="18" r="8" fill="#06B6D4" opacity="0.75" />
              <circle cx="18" cy="31" r="7" fill="#EAB308" opacity="0.8" />
              <circle cx="31" cy="32" r="6" fill="#8B5CF6" opacity="0.75" />
            </svg>
          </div>
          {/* Color Splash on right */}
          <div className="absolute top-1 right-4 sm:right-10 z-40 animate-colorPuff">
            <svg className="w-8 h-8 drop-shadow-[0_0_12px_#06B6D4]" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="12" fill="#06B6D4" opacity="0.8" />
              <circle cx="18" cy="19" r="7" fill="#EC4899" opacity="0.75" />
              <circle cx="31" cy="28" r="6" fill="#10B981" opacity="0.8" />
            </svg>
          </div>
          {/* Rainbow Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 via-yellow-400 to-emerald-400 shadow-[0_0_16px_rgba(236,72,153,0.8)] opacity-95" />
        </div>
      )}

      {/* ================= 🌺 3. GANESH CHATURTHI THEMED NAVBAR ================= */}
      {festivalId === "ganesh-chaturthi" && (
        <div className="pointer-events-none select-none">
          {/* Marigold Flower Garland & Modak on left */}
          <div className="absolute top-1.5 left-2 sm:left-6 z-40 flex items-center gap-1.5 animate-pulse">
            <svg className="w-7 h-7 drop-shadow-[0_0_12px_#EA580C]" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="14" fill="#EA580C" />
              <circle cx="20" cy="20" r="10" fill="#F59E0B" />
              <circle cx="20" cy="20" r="5" fill="#FEF08A" />
            </svg>
            <span className="text-xl sm:text-2xl drop-shadow-[0_0_10px_#F59E0B]">🪙</span>
          </div>
          {/* Temple Bell & Marigold on right */}
          <div className="absolute top-2 right-4 sm:right-10 z-40 flex items-center gap-1.5">
            <span className="text-lg sm:text-xl animate-bounce">🔔</span>
            <span className="text-lg sm:text-xl drop-shadow-[0_0_8px_#EA580C]">🌺</span>
          </div>
          {/* Saffron Marigold Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-orange-600 via-amber-400 to-orange-600 shadow-[0_0_16px_#EA580C] opacity-95" />
        </div>
      )}

      {/* ================= 🇮🇳 4. INDEPENDENCE / REPUBLIC DAY ================= */}
      {(festivalId === "independence-day" || festivalId === "republic-day") && (
        <div className="pointer-events-none select-none">
          {/* Tiranga Ribbon & Ashoka Chakra on left */}
          <div className="absolute top-2 left-2 sm:left-6 z-40 flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full border-2 border-blue-600 bg-white/95 flex items-center justify-center animate-spin duration-6000 shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              <span className="text-blue-800 text-[10px] font-bold">☸</span>
            </div>
            <span className="text-sm">🇮🇳</span>
          </div>
          {/* Tiranga on right */}
          <div className="absolute top-2.5 right-4 sm:right-10 z-40 flex items-center gap-1.5">
            <span className="text-sm">🇮🇳</span>
          </div>
          {/* Tricolor Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 via-white to-emerald-500 shadow-[0_0_16px_rgba(255,255,255,0.8)] opacity-95" />
        </div>
      )}

      {/* ================= 🪁 5. MAKAR SANKRANTI ================= */}
      {festivalId === "makar-sankranti" && (
        <div className="pointer-events-none select-none">
          {/* Flying Kites */}
          <div className="absolute top-1 left-2 sm:left-6 z-40 animate-kiteFloat">
            <svg className="w-8 h-8 drop-shadow-[0_0_10px_#06B6D4]" viewBox="0 0 40 40" fill="none">
              <polygon points="20,4 34,20 20,36 6,20" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="20" y1="4" x2="20" y2="36" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="6" y1="20" x2="34" y2="20" stroke="#FFFFFF" strokeWidth="1" />
              <polygon points="20,36 24,40 16,40" fill="#EC4899" />
            </svg>
          </div>
          <div className="absolute top-1.5 right-4 sm:right-10 z-40 animate-kiteFloat">
            <svg className="w-7 h-7 drop-shadow-[0_0_10px_#F59E0B]" viewBox="0 0 40 40" fill="none">
              <polygon points="20,4 34,20 20,36 6,20" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
              <polygon points="20,36 24,40 16,40" fill="#10B981" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-500 via-amber-400 to-pink-500 shadow-[0_0_14px_#06B6D4] opacity-90" />
        </div>
      )}

      {/* ================= 🚩 6. GUDI PADWA ================= */}
      {festivalId === "gudi-padwa" && (
        <div className="pointer-events-none select-none">
          <div className="absolute top-1 left-2 sm:left-6 z-40 flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl drop-shadow-[0_0_10px_#10B981]">🚩</span>
            <span className="text-lg">🌿</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-amber-400 to-orange-500 shadow-[0_0_15px_#10B981] opacity-95" />
        </div>
      )}

      {/* ================= ☀️ 7. RAM NAVAMI ================= */}
      {festivalId === "ram-navami" && (
        <div className="pointer-events-none select-none">
          <div className="absolute top-1 left-2 sm:left-6 z-40 flex items-center gap-1.5 animate-pulse">
            <svg className="w-8 h-8 drop-shadow-[0_0_14px_#F59E0B]" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="10" fill="#F59E0B" />
              <circle cx="20" cy="20" r="6" fill="#FEF08A" />
              <line x1="20" y1="2" x2="20" y2="8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="32" x2="20" y2="38" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="2" y1="20" x2="8" y2="20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
              <line x1="32" y1="20" x2="38" y2="20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute top-2 right-4 sm:right-10 z-40">
            <span className="text-lg sm:text-xl drop-shadow-[0_0_8px_#F59E0B]">🏹</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-yellow-300 to-orange-500 shadow-[0_0_16px_#F59E0B] opacity-95" />
        </div>
      )}

      {/* ================= 🦚 8. JANMAASHTAMI ================= */}
      {festivalId === "janmashtami" && (
        <div className="pointer-events-none select-none">
          <div className="absolute top-1.5 left-2 sm:left-6 z-40 flex items-center gap-1.5 animate-pulse">
            <span className="text-xl sm:text-2xl drop-shadow-[0_0_10px_#06B6D4]">🪶</span>
            <span className="text-lg">🪈</span>
          </div>
          <div className="absolute top-2 right-4 sm:right-10 z-40">
            <span className="text-lg sm:text-xl drop-shadow-[0_0_8px_#F59E0B]">🍯</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 shadow-[0_0_16px_#06B6D4] opacity-95" />
        </div>
      )}

      {/* ================= 💃 9. NAVRATRI & DUSSEHRA ================= */}
      {(festivalId === "navratri" || festivalId === "dussehra") && (
        <div className="pointer-events-none select-none">
          <div className="absolute top-1.5 left-2 sm:left-6 z-40 flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl drop-shadow-[0_0_10px_#EC4899]">{festivalId === "navratri" ? "🪘" : "🏹"}</span>
          </div>
          <div className="absolute top-2 right-4 sm:right-10 z-40">
            <span className="text-lg sm:text-xl drop-shadow-[0_0_8px_#F59E0B]">⭐</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-pink-500 via-amber-400 to-rose-600 shadow-[0_0_16px_#EC4899] opacity-95" />
        </div>
      )}
    </>
  );
}

export default NavbarFestivalDecoration;

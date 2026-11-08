"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface KedsLogoProps {
  size?: "small" | "default" | "large";
  showTagline?: boolean;
  linkToHome?: boolean;
}

export default function KedsLogo({
  size = "default",
  showTagline = true,
  linkToHome = true,
}: KedsLogoProps) {
  const content = (
    <div className="flex flex-col items-center justify-center select-none text-center bg-transparent group cursor-pointer">
      {/* Official Master Logo (100% Transparent PNG, Zero Distortion, Holographic Glow) */}
      <div
        className={`relative transition-all duration-300 group-hover:scale-[1.02] ${size === "large"
            ? "w-[280px] sm:w-[460px] md:w-[640px] lg:w-[740px] aspect-[8866/1066]"
            : size === "small"
              ? "w-[130px] sm:w-[160px] aspect-[8866/1066]"
              : "w-[180px] sm:w-[240px] aspect-[8866/1066]"
          }`}
      >
        <Image
          src="/images/keds-title-only.png"
          alt="Keds Technology - Official Logo"
          fill
          priority
          sizes="(max-width: 768px) 240px, 740px"
          className="object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.45)] group-hover:drop-shadow-[0_0_35px_rgba(0,212,255,0.6)] transition-all duration-300"
        />
      </div>

      {/* Official Tagline: Innovate | Build | Scale */}
      {showTagline && size !== "small" && (
        <div
          className={`mt-2 flex items-center justify-center space-x-2.5 sm:space-x-3 text-purple-200/90 font-light tracking-[0.25em] ${size === "large"
              ? "text-xs sm:text-sm md:text-base tracking-[0.32em]"
              : "text-[10px] tracking-[0.22em]"
            }`}
          style={{
            textShadow: "0 0 12px rgba(168, 85, 247, 0.4)",
          }}
        >
          <span className="hover:text-cyan-300 transition-colors">Innovate</span>
          <span className="text-purple-400/40 font-extralight">•</span>
          <span className="hover:text-purple-300 transition-colors">Build</span>
          <span className="text-purple-400/40 font-extralight">•</span>
          <span className="hover:text-cyan-300 transition-colors">Scale</span>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" aria-label="Keds Technology Home">
        {content}
      </Link>
    );
  }

  return content;
}

"use client";

import React from "react";
import Image from "next/image";

interface KedsLogoProps {
  size?: "default" | "large";
  showTagline?: boolean;
}

export default function KedsLogo({
  size = "large",
  showTagline = true,
}: KedsLogoProps) {
  const isLarge = size === "large";

  return (
    <div className="flex flex-col items-center justify-center select-none text-center bg-transparent">
      {/* Official Master Logo (100% Transparent PNG, Zero Crop, Zero Distortion) */}
      <div
        className={`relative transition-transform duration-500 hover:scale-[1.01] ${
          isLarge
            ? "w-[320px] sm:w-[520px] md:w-[700px] lg:w-[820px] aspect-[8866/1066]"
            : "w-[180px] sm:w-[260px] aspect-[8866/1066]"
        }`}
      >
        <Image
          src="/images/keds-title-only.png"
          alt="Keds Technology"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 820px"
          className="object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]"
        />
      </div>

      {/* Official Tagline: Innovate | Build | Scale */}
      {showTagline && (
        <div
          className={`mt-2 sm:mt-3 flex items-center justify-center space-x-3 sm:space-x-4 text-purple-200/85 font-light ${
            isLarge
              ? "text-xs sm:text-sm md:text-base tracking-[0.28em] sm:tracking-[0.35em]"
              : "text-[10px] tracking-[0.2em]"
          }`}
          style={{
            textShadow: "0 0 12px rgba(168, 85, 247, 0.4)",
          }}
        >
          <span>Innovate</span>
          <span className="text-purple-400/50 font-extralight">|</span>
          <span>Build</span>
          <span className="text-purple-400/50 font-extralight">|</span>
          <span>Scale</span>
        </div>
      )}
    </div>
  );
}

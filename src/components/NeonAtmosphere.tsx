"use client";

import React from "react";

export default function NeonAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#000000]">
      {/* 1. Vercel & Linear Master Top Aurora Beam */}
      <div
        className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[850px] md:w-[1250px] h-[520px] md:h-[680px] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(124, 58, 237, 0.42) 0%, rgba(99, 102, 241, 0.22) 40%, rgba(147, 51, 234, 0.08) 65%, transparent 100%)",
          filter: "blur(60px)",
        }}
      />

      {/* 2. Soft Mid-Screen Ambient Spotlight */}
      <div
        className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[450px] pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(147, 51, 234, 0.25) 0%, rgba(124, 58, 237, 0.1) 50%, transparent 85%)",
          filter: "blur(90px)",
        }}
      />

      {/* 3. Subtle Cyan Energy Accent at Bottom Edge */}
      <div
        className="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0, 212, 255, 0.3) 0%, rgba(124, 58, 237, 0.15) 50%, transparent 80%)",
          filter: "blur(100px)",
        }}
      />

      {/* 4. Crisp Top Linear Laser Horizon Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </div>
  );
}

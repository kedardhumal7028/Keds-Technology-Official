import React from "react";

export default function NeonAtmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#000000]"
      style={{ transform: "translateZ(0)" }}
    >
      {/* 1. Master Top Aurora Beam - Hardware Accelerated */}
      <div
        className="absolute -top-[120px] sm:-top-[160px] left-1/2 -translate-x-1/2 w-[360px] sm:w-[850px] md:w-[1250px] h-[340px] sm:h-[520px] md:h-[680px] pointer-events-none opacity-40 sm:opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(124, 58, 237, 0.38) 0%, rgba(99, 102, 241, 0.2) 35%, rgba(147, 51, 234, 0.05) 60%, transparent 80%)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      {/* 2. Soft Mid-Screen Ambient Spotlight */}
      <div
        className="hidden sm:block absolute top-[32%] left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[450px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(147, 51, 234, 0.2) 0%, rgba(124, 58, 237, 0.08) 45%, transparent 75%)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      {/* 3. Subtle Cyan Energy Accent at Bottom Edge */}
      <div
        className="hidden sm:block absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0, 212, 255, 0.25) 0%, rgba(124, 58, 237, 0.1) 45%, transparent 75%)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      {/* 4. Crisp Top Linear Laser Horizon Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] md:w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </div>
  );
}

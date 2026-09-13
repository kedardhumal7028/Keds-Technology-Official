"use client";

import React from "react";
import Image from "next/image";

export default function NeonAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#05020c]">
      {/* 1. Modern Enterprise IT Dark Background (Digital Grid + Soft Aurora Nebula) */}
      <div className="absolute inset-0">
        <Image
          src="/images/keds-bg-modern.jpg"
          alt="Keds Technology Modern IT Environment"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
      </div>

      {/* 2. Soft Ambient Purple Light Gradient from Top & Center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(147, 51, 234, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* 3. Subtle Vignette for Depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 45%, rgba(4, 1, 9, 0.6) 100%)",
        }}
      />
    </div>
  );
}

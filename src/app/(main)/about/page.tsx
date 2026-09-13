import React from "react";
import KedsLogo from "@/components/KedsLogo";
import NeonAtmosphere from "@/components/NeonAtmosphere";
import Link from "next/link";

export const metadata = {
  title: "About | Keds Technology",
  description: "Wait and watch. Something revolutionary is taking shape at Keds Technology.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#05020c] text-white px-6 py-16 flex flex-col items-center justify-between overflow-hidden">
      {/* Background Atmosphere */}
      <NeonAtmosphere />

      {/* Header Back Link */}
      <header className="relative z-20 w-full max-w-4xl flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs font-medium text-purple-200 hover:text-white hover:border-purple-400 backdrop-blur-md transition-all duration-300"
        >
          ← Back to Home
        </Link>
        <span className="text-xs text-purple-400/50 tracking-widest uppercase">
          Confidential
        </span>
      </header>

      {/* Center Mystery / Wait and Watch Showcase */}
      <div className="relative z-20 max-w-3xl w-full text-center my-auto py-10">
        <KedsLogo size="large" showTagline={true} />

        <div className="mt-14 sm:mt-18 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 backdrop-blur-md text-xs text-purple-300 tracking-wider uppercase font-medium">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>Stealth Phase • Operations Classified</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white"
            style={{
              textShadow:
                "0 0 25px rgba(255, 255, 255, 0.4), 0 0 50px rgba(168, 85, 247, 0.6)",
            }}
          >
            WAIT & WATCH
          </h1>

          <p
            className="text-base sm:text-xl md:text-2xl font-light text-purple-200/80 tracking-wide max-w-xl mx-auto"
            style={{
              textShadow: "0 0 15px rgba(192, 132, 252, 0.4)",
            }}
          >
            Something extraordinary is taking shape behind the scenes.
          </p>

          <p className="text-xs sm:text-sm text-purple-400/60 font-mono tracking-widest pt-4">
            [ DETAILS CLASSIFIED UNTIL OFFICIAL LAUNCH ]
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 text-xs text-purple-400/50 tracking-wider">
        © {new Date().getFullYear()} Keds Technology. All rights reserved.
      </footer>
    </main>
  );
}

import React from "react";
import KedsLogo from "@/components/KedsLogo";
import NeonAtmosphere from "@/components/NeonAtmosphere";
import Link from "next/link";

export const metadata = {
  title: "Contact | Keds Technology",
  description: "Official contact portal for Keds Technology.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#05020c] text-white px-6 py-16 flex flex-col items-center justify-between overflow-hidden">
      {/* Modern Background */}
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
          Official Contact
        </span>
      </header>

      {/* Center Box */}
      <div className="relative z-20 max-w-2xl w-full text-center my-auto py-10">
        <KedsLogo size="large" showTagline={true} />

        <div className="mt-12 sm:mt-16 p-8 sm:p-10 rounded-3xl border border-purple-500/30 bg-[#0b0518]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.25)]">
          <p className="text-xs sm:text-sm font-semibold text-purple-300 tracking-[0.25em] uppercase">
            Official Correspondence
          </p>

          <a
            href="mailto:kedstechnology@gmail.com"
            className="mt-6 inline-block text-xl sm:text-3xl md:text-4xl font-mono font-bold text-white hover:text-purple-300 transition-colors duration-300 tracking-wide break-all"
            style={{
              textShadow: "0 0 25px rgba(192, 132, 252, 0.5)",
            }}
          >
            kedstechnology@gmail.com
          </a>

          <p className="mt-4 text-xs sm:text-sm text-purple-300/60 font-light">
            For official communications and general inquiries. All developments remain confidential.
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

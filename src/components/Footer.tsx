"use client";

import React from "react";
import Link from "next/link";
import KedsLogo from "./KedsLogo";
import { ArrowUpRight, Shield, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-white/[0.08] bg-[#000000] text-white pt-16 pb-12 overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-purple-900/30">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start">
              <KedsLogo size="default" showTagline={true} />
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm font-light">
              Keds Technology is a senior digital engineering and product design firm. We partner with ambitious enterprises and startups to engineer high-velocity web, mobile, HRMS, CRM, and ERP systems.
            </p>

            {/* Social Icons with Neon Glow using SVG */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-zinc-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.85 18.5V10.13H5.06V18.5h2.79Z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-zinc-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-zinc-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-zinc-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 20c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 4c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-zinc-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation / Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-purple-300 font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  About Keds
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-300 transition-colors">
                  Portfolio &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-purple-300 font-semibold">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="/services#web-dev" className="hover:text-cyan-300 transition-colors">
                  Website Development &amp; Portals
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-dev" className="hover:text-cyan-300 transition-colors">
                  Mobile Application Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#hrms" className="hover:text-cyan-300 transition-colors">
                  Enterprise HRMS Suite
                </Link>
              </li>
              <li>
                <Link href="/services#crm" className="hover:text-cyan-300 transition-colors">
                  Intelligent CRM Systems
                </Link>
              </li>
              <li>
                <Link href="/services#erp" className="hover:text-cyan-300 transition-colors">
                  Manufacturing &amp; Supply ERP
                </Link>
              </li>
              <li>
                <Link href="/services#ui-ux" className="hover:text-cyan-300 transition-colors">
                  UI/UX Product Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Projects & Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-purple-300 font-semibold">
              Showcase
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="/portfolio" className="hover:text-cyan-300 transition-colors">
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link href="/live-projects" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>Live Deployed Sites</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </Link>
              </li>
              <li>
                <Link href="/ongoing-projects" className="hover:text-cyan-300 transition-colors">
                  Animated Project Roadmap
                </Link>
              </li>
              <li>
                <Link href="/portfolio#ath-elite" className="hover:text-cyan-300 transition-colors">
                  Ath Elite Sports Case Study
                </Link>
              </li>
              <li>
                <Link href="/portfolio#heart-physio" className="hover:text-cyan-300 transition-colors">
                  HeartPhysio Healthcare Case Study
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Keds Technology. All rights reserved.</span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="text-purple-300/80">Innovate • Build • Scale</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-zinc-400 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" /> in Pune, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

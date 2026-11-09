"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ConsultationModal from "./ConsultationModal";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      // The track contains two identical groups, so one full translation
      // lands on the exact starting frame before GSAP repeats.
      gsap.fromTo(
        track,
        { yPercent: 0 },
        {
          yPercent: -50,
          duration: 100,
          ease: "none",
          repeat: -1,

        }
      );
    }, track);

    return () => ctx.revert();
  }, []);

  const heroCards = [
    {
      id: 1,
      image: "/images/hero/hero-ai-1.jpg",
      title: "Enterprise Web Applications",
      tag: "Web Platforms",
      color: "#bd82b0",
    },
    {
      id: 2,
      image: "/images/hero/hero-ai-2.jpg",
      title: "Intelligent AI Automation",
      tag: "AI Solutions",
      color: "#00d4ff",
    },
    {
      id: 3,
      image: "/images/hero/hero-ai-3.jpg",
      title: "Custom Mobile Applications",
      tag: "Mobile Apps",
      color: "#a855f7",
    },
    {
      id: 4,
      image: "/images/hero/hero-ai-4.jpg",
      title: "Cloud & ERP Infrastructure",
      tag: "Enterprise Systems",
      color: "#10b981",
    },
    {
      id: 5,
      image: "/images/hero/hero-ai-5.jpg",
      title: "Custom Software Solutions",
      tag: "Product Engineering",
      color: "#f59e0b",
    },
    {
      id: 6,
      image: "/images/hero/hero-ai-6.jpg",
      title: "Data Security & Governance",
      tag: "Cyber Security",
      color: "#ec4899",
    },
    {
      id: 7,
      image: "/images/hero/hero-ai-1.jpg",
      title: "Business Intelligence & Analytics",
      tag: "Data Solutions",
      color: "#06b6d4",
    },
    {
      id: 8,
      image: "/images/hero/hero-ai-3.jpg",
      title: "Digital Commerce & Portals",
      tag: "Digital Solutions",
      color: "#8b5cf6",
    },
  ];

  return (
    <section className="relative flex min-h-[100dvh] w-full items-center overflow-hidden border-b border-purple-900/30 bg-[#000000] text-white pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-16">
      {/* Background Soft Purple Aurora Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] md:w-[900px] lg:w-[1200px] h-[300px] sm:h-[480px] pointer-events-none opacity-35 blur-[100px] sm:blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.45) 0%, rgba(99, 102, 241, 0.25) 45%, transparent 75%)",
        }}
      />

      {/* FIXED LEFT CONTENT */}
      <div className="relative z-10 w-full max-w-[580px] lg:max-w-[620px] px-4 sm:px-6 md:px-8 lg:pl-8 xl:pl-12 lg:pr-4 my-auto">

        {/* Top Minimalist Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-4 border border-purple-500/40 bg-purple-950/60 text-purple-200 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#a855f7] shrink-0" />
          <span className="font-semibold text-white">
            Keds Technology • IT &amp; Digital Solutions
          </span>
        </div>

        {/* Grand IT Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.08] sm:leading-[1.05] tracking-tight text-white">
          Innovate.{" "}
          <span className="text-gradient-purple font-serif">Build.</span>{" "}
          <span className="text-gradient-purple font-serif">Scale.</span>
        </h1>

        {/* IT Company Value Proposition Paragraph */}
        <p className="mt-4 sm:mt-5 max-w-[500px] text-xs sm:text-sm md:text-base leading-relaxed font-light text-zinc-300">
          We are <strong className="text-white font-medium">Keds Technology</strong> — a software engineering company specializing in high-performance website development, mobile apps, and custom software systems designed to scale your business.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-6 sm:mt-7 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
          <button
            type="button"
            onClick={() => setIsConsultationOpen(true)}
            className="px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(192,132,252,0.6)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 group"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#expertise"
            className="px-5 sm:px-6 py-3 rounded-full border border-purple-500/30 hover:border-purple-400 bg-purple-950/20 hover:bg-purple-900/30 text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer text-center"
          >
            <span>Our Services</span>
            <span className="text-purple-400">↓</span>
          </a>
        </div>

        {/* Value Highlights */}
        <div className="mt-7 sm:mt-8 pt-4 sm:pt-5 border-t border-purple-900/30 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-extrabold text-white">3+</span>
            <span className="text-[10px] sm:text-xs text-zinc-400 mt-0.5">Projects Delivered</span>
          </div>
          <div className="flex flex-col border-l border-purple-900/30 pl-2.5 sm:pl-4">
            <span className="text-base sm:text-xl font-extrabold text-purple-300">100%</span>
            <span className="text-[10px] sm:text-xs text-zinc-400 mt-0.5">Code Ownership</span>
          </div>
          <div className="flex flex-col border-l border-purple-900/30 pl-2.5 sm:pl-4">
            <span className="text-base sm:text-xl font-extrabold text-violet-300">Direct</span>
            <span className="text-[10px] sm:text-xs text-zinc-400 mt-0.5">Pune, India</span>
          </div>
        </div>

      </div>

      {/* DIAGONAL CARD ANIMATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25 sm:opacity-40 lg:opacity-100">
        <div className="absolute left-[55%] sm:left-[58%] md:left-[62%] lg:left-[64%] top-[-50%] w-[900px] h-[200%] origin-center -rotate-[30deg] will-change-transform">
          <div
            ref={trackRef}
            className="flex flex-col will-change-transform"
          >
            {/* Duplicate the cards to create an infinite loop */}
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 flex-col gap-5 pb-5 sm:gap-6 sm:pb-6"
              >
                {heroCards.map((card, cardIndex) => {
                  const index = groupIndex * heroCards.length + cardIndex;

                  return (
                    <div
                      key={index}
                      className="relative aspect-[1.32/1] w-[200px] sm:w-[235px] lg:w-[350px] shrink-0 overflow-hidden border-[4px] border-[#2b1b36] bg-[#171219] shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all duration-300 rounded-xl group"
                    >
                      {/* AI Showcase Image */}
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 200px, 255px"
                        priority={index < 4}
                      />

                      {/* Subtle gradient vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

                      {/* Top window navigation bar */}
                      <div className="absolute top-2 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
                        <div className="flex gap-1.5 items-center">
                          <span
                            className="h-1.5 w-1.5 rounded-full shadow-[0_0_6px_rgba(189,130,176,0.8)]"
                            style={{ backgroundColor: card.color }}
                          />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                        </div>

                        <span className="text-[9px] font-medium uppercase tracking-wider text-white/90 bg-black/60 px-2 py-0.5 rounded-full border border-white/15 backdrop-blur-md">
                          {card.tag}
                        </span>
                      </div>

                      {/* Bottom title caption */}
                      <div className="absolute bottom-2 left-3 right-3 z-10 pointer-events-none">
                        <p className="text-[11px] sm:text-xs font-semibold text-white drop-shadow-md truncate">
                          {card.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService="Custom Software Architecture"
      />
    </section>
  );
}

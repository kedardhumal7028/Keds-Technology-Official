"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ConsultationModal from "./ConsultationModal";
import { Sparkles, ArrowRight } from "lucide-react";
import { evaluateFestivalWindow, ActiveFestivalResult, FESTIVAL_GREETINGS_MAP } from "@/features/festival-preview/festivalCalendarEngine";
import { FireworksCanvas } from "@/features/festival-preview/FireworksCanvas";
import { FestivalAnimationCanvas } from "@/features/festival-preview/FestivalAnimationCanvas";
import { FestivalId, FESTIVALS_MAP, getActiveConcept, FESTIVAL_ICONS } from "@/features/festival-preview/festivalData";

interface HeroSectionProps {
  overrideFestivalId?: FestivalId;
}

export default function HeroSection({ overrideFestivalId }: HeroSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeFestival, setActiveFestival] = useState<ActiveFestivalResult | null>(null);

  useEffect(() => {
    if (overrideFestivalId) {
      if (overrideFestivalId === "original") {
        setActiveFestival(null);
      } else {
        const greetings = FESTIVAL_GREETINGS_MAP[overrideFestivalId] || FESTIVAL_GREETINGS_MAP.diwali;
        setActiveFestival({
          isFestivalActive: true,
          festivalId: overrideFestivalId,
          festivalName: greetings.name,
          festivalDate: "",
          year: "2026",
          daysDifference: 0,
          statusDescription: "Preview Mode",
          windowStartDate: "",
          windowEndDate: "",
          greetings,
        });
      }
    } else {
      const result = evaluateFestivalWindow(new Date());
      setActiveFestival(result);
    }
  }, [overrideFestivalId]);

  const isFestive = Boolean(activeFestival && activeFestival.isFestivalActive && activeFestival.festivalId !== "original");
  const currentFestId = activeFestival?.festivalId || "original";
  const festConfig = FESTIVALS_MAP[currentFestId] || FESTIVALS_MAP.original;
  const concept = getActiveConcept(festConfig, "2026");
  const icon = FESTIVAL_ICONS[currentFestId] || "✨";



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

  const isPreview = Boolean(overrideFestivalId);

  return (
    <section className={`relative flex flex-col justify-center min-h-[92vh] sm:min-h-screen w-full overflow-hidden border-b border-purple-900/30 bg-[#000000] text-white ${
      isPreview ? "pt-8 sm:pt-10" : "pt-24 sm:pt-28 lg:pt-28"
    } pb-10 sm:pb-14`}>
      {/* Real Festive Fireworks Bursting Canvas during Diwali */}
      {isFestive && currentFestId === "diwali" && (
        <FireworksCanvas />
      )}

      {/* Dynamic Festival Particles (Gulal for Holi, Marigold petals for Ganesh Chaturthi, Kites for Makar Sankranti, etc.) */}
      {isFestive && currentFestId !== "diwali" && (
        <FestivalAnimationCanvas festivalId={currentFestId} year="2026" />
      )}

      {/* Background Aurora Glow - Harmonizes with the active festival's color palette */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] md:w-[900px] lg:w-[1200px] h-[300px] sm:h-[480px] pointer-events-none opacity-40 blur-[100px] sm:blur-[140px] transition-all duration-700"
        style={{
          background: isFestive
            ? `radial-gradient(ellipse at center, ${concept.primaryColor}66 0%, ${concept.secondaryColor}40 45%, transparent 75%)`
            : "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.45) 0%, rgba(99, 102, 241, 0.25) 45%, transparent 75%)",
        }}
      />

      {/* FIXED LEFT CONTENT - Fills the available space gracefully (trapezoid clearance) */}
      <div className="relative z-10 w-full max-w-[660px] lg:max-w-[740px] xl:max-w-[800px] px-4 sm:px-6 md:px-8 lg:pl-10 xl:pl-16 lg:pr-4 my-auto py-4 sm:py-6">

        {/* Top Minimalist Pill Badge - Dynamic Festive Greeting when Festival is Active */}
        {isFestive ? (
          <div
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-[14px] font-semibold tracking-wide mb-3.5 sm:mb-5 border backdrop-blur-md shadow-lg transition-all"
            style={{
              borderColor: `${concept.accentColor}80`,
              backgroundColor: `${concept.primaryColor}25`,
              boxShadow: `0 0 25px ${concept.buttonShadow}`,
            }}
          >
            <span className="text-base sm:text-lg animate-bounce">{icon}</span>
            <span className="font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
              {currentFestId === "diwali"
                ? "शुभ दीपावली • Keds Technology कडून दिवाळीच्या हार्दिक शुभेच्छा!"
                : `${activeFestival?.greetings.nativeGreeting || "सण उत्सव"} • Keds Technology कडून हार्दिक शुभेच्छा!`}
            </span>
            <span className="text-base sm:text-lg animate-pulse">✨</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-3.5 sm:mb-5 border border-purple-500/40 bg-purple-950/60 text-purple-200 shadow-[0_0_20px_rgba(124,58,237,0.3)] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#a855f7] shrink-0" />
            <span className="font-semibold text-white">
              Keds Technology • IT &amp; Digital Solutions
            </span>
          </div>
        )}

        {/* Grand IT Headline with Active Festival Color Glow */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.35rem] leading-[1.08] sm:leading-[1.05] tracking-tight text-white mb-3 sm:mb-4">
          Innovate.{" "}
          <span
            className={`font-serif ${
              isFestive
                ? "bg-clip-text text-transparent font-extrabold"
                : "text-gradient-purple"
            }`}
            style={{
              backgroundImage: isFestive
                ? `linear-gradient(135deg, #ffffff 10%, ${concept.accentColor} 60%, ${concept.primaryColor} 100%)`
                : undefined,
              filter: isFestive ? `drop-shadow(0 0 20px ${concept.primaryColor}60)` : undefined,
            }}
          >
            Build.
          </span>{" "}
          <span
            className={`font-serif ${
              isFestive
                ? "bg-clip-text text-transparent font-extrabold"
                : "text-gradient-purple"
            }`}
            style={{
              backgroundImage: isFestive
                ? `linear-gradient(135deg, ${concept.accentColor} 0%, ${concept.primaryColor} 60%, #ffffff 100%)`
                : undefined,
              filter: isFestive ? `drop-shadow(0 0 20px ${concept.primaryColor}60)` : undefined,
            }}
          >
            Scale.
          </span>
        </h1>

        {/* IT Company Value Proposition Paragraph */}
        <p className="max-w-[560px] lg:max-w-[620px] text-sm sm:text-base lg:text-[17px] leading-relaxed font-light text-zinc-300 mb-6 sm:mb-7">
          We are <strong className="text-white font-medium">Keds Technology</strong> — a software engineering company specializing in high-performance website development, mobile apps, and custom software systems designed to scale your business.
        </p>

        {/* Call to Action Buttons - Generous length, side-by-side in 1 line on desktop, stacked on mobile */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4.5 mb-7 sm:mb-9 max-w-[620px]">
          <button
            type="button"
            onClick={() => setIsConsultationOpen(true)}
            className={`min-w-[200px] sm:min-w-[240px] px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-white font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer active:scale-95 group shadow-xl shrink-0 ${
              isFestive
                ? `bg-gradient-to-r ${concept.buttonGradient}`
                : "bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(192,132,252,0.6)]"
            }`}
            style={{
              boxShadow: isFestive ? `0 0 30px ${concept.buttonShadow}` : undefined,
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#expertise"
            className="min-w-[170px] sm:min-w-[200px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-purple-500/35 hover:border-purple-400 bg-purple-950/30 hover:bg-purple-900/40 text-zinc-200 hover:text-white text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center shrink-0"
          >
            <span>Our Services</span>
            <span className="text-purple-400">↓</span>
          </a>
        </div>

        {/* Value Highlights - Spans across the wider bottom clearance */}
        <div className="pt-5 sm:pt-6 border-t border-purple-900/40 grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-[620px] lg:max-w-[680px]">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white">3+</span>
            <span className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">Projects Delivered</span>
          </div>
          <div className="flex flex-col border-l border-purple-900/40 pl-3 sm:pl-6">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-purple-300">100%</span>
            <span className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">Code Ownership</span>
          </div>
          <div className="flex flex-col border-l border-purple-900/40 pl-3 sm:pl-6">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-violet-300">Direct</span>
            <span className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">Pune, India</span>
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

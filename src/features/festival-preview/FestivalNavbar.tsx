"use client";

import React, { useState } from "react";
import FestivalDecoratedLogo from "./FestivalDecoratedLogo";
import {
  FestivalThemeConfig,
  YearEdition,
  getActiveConcept,
  FESTIVAL_ICONS,
} from "./festivalData";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface FestivalNavbarProps {
  festival: FestivalThemeConfig;
  year: YearEdition;
  onOpenConsultation?: () => void;
  showFestiveBanner?: boolean;
}

export function FestivalNavbar({
  festival,
  year,
  onOpenConsultation,
  showFestiveBanner = true,
}: FestivalNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  const concept = getActiveConcept(festival, year);
  const isThemed = festival.id !== "original";
  const icon = FESTIVAL_ICONS[festival.id] || "🎉";

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    {
      name: "Projects",
      href: "#projects",
      hasDropdown: true,
      children: [
        { name: "All Portfolio Showcase", href: "#portfolio", desc: "Filterable gallery of completed work" },
        { name: "Live Deployed Projects", href: "#live", desc: "Active client production systems", badge: "Live" },
        { name: "Ongoing Roadmap", href: "#roadmap", desc: "5-stage animated project tracking", badge: "Roadmap" },
      ],
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Optional Festival Announcement Top Bar */}
      {isThemed && showFestiveBanner && !bannerDismissed && (
        <div
          className="relative py-1.5 px-4 text-xs font-medium text-white flex items-center justify-center gap-2 overflow-hidden shadow-inner border-b transition-all duration-300"
          style={{
            background: `linear-gradient(90deg, ${concept.primaryColor}99, ${concept.secondaryColor}99)`,
            borderColor: `${concept.primaryColor}50`,
          }}
        >
          <span className="text-sm">{icon}</span>
          <span className="tracking-wide">
            <strong>{festival.nativeGreeting}</strong> • {concept.themeName} ({year} Edition)
          </span>
          <button
            onClick={() => setBannerDismissed(true)}
            className="ml-3 text-white/70 hover:text-white p-0.5 rounded-full hover:bg-black/20 transition-colors"
            title="Dismiss banner"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <div
        className="w-full backdrop-blur-xl transition-all duration-300 py-3.5 border-b"
        style={{
          background: isThemed
            ? "rgba(10, 6, 22, 0.88)"
            : "rgba(7, 2, 16, 0.88)",
          borderColor: isThemed
            ? `${concept.primaryColor}40`
            : "rgba(168, 85, 247, 0.2)",
          boxShadow: isThemed
            ? `0 10px 30px ${concept.primaryColor}20`
            : "0 10px 30px rgba(0,0,0,0.8)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Festival Overlay */}
          <div className="flex items-center gap-3">
            <FestivalDecoratedLogo
              festivalId={festival.id}
              year={year}
              size="small"
              showTagline={false}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setProjectsDropdownOpen(true)}
                    onMouseLeave={() => setProjectsDropdownOpen(false)}
                  >
                    <button
                      className="relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          projectsDropdownOpen ? "rotate-180" : ""
                        }`}
                        style={{
                          color: projectsDropdownOpen ? concept.accentColor : undefined,
                        }}
                      />
                      <span
                        className="absolute bottom-0 left-3 right-3 h-[2px] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                        style={{
                          background: `linear-gradient(90deg, ${concept.primaryColor}, ${concept.accentColor})`,
                        }}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-72 pt-2 transition-all duration-200 ${
                        projectsDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div
                        className="p-2 rounded-2xl border backdrop-blur-2xl shadow-2xl space-y-1"
                        style={{
                          backgroundColor: "rgba(13, 7, 32, 0.95)",
                          borderColor: `${concept.primaryColor}40`,
                        }}
                      >
                        {link.children?.map((child) => (
                          <div
                            key={child.name}
                            className="block p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-zinc-100 group-hover/item:text-white transition-colors">
                                {child.name}
                              </span>
                              {child.badge && (
                                <span
                                  className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                                  style={{
                                    backgroundColor: `${concept.primaryColor}30`,
                                    borderColor: `${concept.primaryColor}60`,
                                    color: concept.accentColor,
                                  }}
                                >
                                  {child.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                              {child.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={link.name}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors group cursor-pointer ${
                    link.active ? "text-white" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] transition-transform duration-300 origin-left ${
                      link.active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    style={{
                      background: `linear-gradient(90deg, ${concept.primaryColor}, ${concept.accentColor})`,
                    }}
                  />
                </div>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white border transition-all duration-300 cursor-pointer active:scale-95 group shadow-lg bg-gradient-to-r ${concept.buttonGradient}`}
              style={{
                borderColor: `${concept.accentColor}60`,
                boxShadow: `0 0 20px ${concept.buttonShadow}`,
              }}
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-white/90" />
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 hover:text-white border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden px-4 pt-4 pb-6 border-t mt-3 space-y-2 backdrop-blur-2xl"
            style={{
              borderColor: `${concept.primaryColor}30`,
              backgroundColor: "rgba(10, 6, 22, 0.98)",
            }}
          >
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </div>
            ))}
            <div className="pt-3">
              <button
                onClick={onOpenConsultation}
                className={`w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg bg-gradient-to-r ${concept.buttonGradient}`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default FestivalNavbar;

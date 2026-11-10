"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import KedsLogo from "./KedsLogo";
import { NavbarFestivalDecoration } from "@/features/festival-preview/NavbarFestivalDecoration";
import { FestivalId } from "@/features/festival-preview/festivalData";
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const ConsultationModal = dynamic(() => import("./ConsultationModal"), {
  ssr: false,
});

interface NavbarProps {
  overrideFestivalId?: FestivalId;
}

export default function Navbar({ overrideFestivalId }: NavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    {
      name: "Projects",
      href: "/portfolio",
      hasDropdown: true,
      children: [
        { name: "All Portfolio Showcase", href: "/portfolio", desc: "Filterable gallery of completed work" },
        { name: "Live Deployed Projects", href: "/live-projects", desc: "Active client production systems", badge: "Live" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#000000]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-[#070210]/85 backdrop-blur-md border-b border-purple-500/20 py-3.5 sm:py-4 shadow-[0_4px_20px_rgba(124,58,237,0.15)]"
        }`}
      >
        {/* Dynamic Multi-Year Festival Decoration (Akash Kandil & Firecracker Sparklers) */}
        <NavbarFestivalDecoration overrideFestivalId={overrideFestivalId} />


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <KedsLogo size="small" showTagline={false} />
          </div>


          {/* Desktop Navigation Links - Right Aligned */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 ml-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setProjectsDropdownOpen(true)}
                    onMouseLeave={() => setProjectsDropdownOpen(false)}
                  >
                    <button
                      className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${
                        pathname.startsWith("/portfolio") ||
                        pathname.startsWith("/live-projects")
                          ? "text-white"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          projectsDropdownOpen ? "rotate-180 text-purple-400" : ""
                        }`}
                      />
                      {/* Purple underline slide */}
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full right-0 w-72 pt-2 transition-all duration-200 ${
                        projectsDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="p-2 rounded-2xl border border-purple-500/25 bg-[#0D0720]/95 backdrop-blur-2xl shadow-[0_15px_40px_rgba(124,58,237,0.25)] space-y-1">
                        {link.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-2.5 rounded-xl hover:bg-purple-950/40 border border-purple-500/0 hover:border-purple-500/20 transition-all group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-zinc-100 group-hover/item:text-purple-300 transition-colors">
                                {child.name}
                              </span>
                              {child.badge && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-900/60 border border-purple-400/30 text-purple-200 font-medium">
                                  {child.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                              {child.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
                    isActive ? "text-white" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Purple underline slide hover animation */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-400 transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-zinc-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto bg-[#000000]/95 backdrop-blur-2xl border-b border-white/[0.08] animate-in slide-in-from-top-4 duration-300">
            <div className="space-y-1.5">
              <Link
                href="/"
                className="block px-4 py-2.5 rounded-xl hover:bg-purple-900/30 text-sm font-medium text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2.5 rounded-xl hover:bg-purple-900/30 text-sm font-medium text-white"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2.5 rounded-xl hover:bg-purple-900/30 text-sm font-medium text-white"
              >
                Services
              </Link>
              <div className="pl-4 py-1 space-y-1 border-l-2 border-purple-500/40 ml-4">
                <Link
                  href="/portfolio"
                  className="block py-1 text-xs text-zinc-300 hover:text-purple-300"
                >
                  Portfolio Showcase
                </Link>
                <Link
                  href="/live-projects"
                  className="block py-1 text-xs text-zinc-300 hover:text-purple-300"
                >
                  Live Deployed Projects
                </Link>
              </div>
              <Link
                href="/contact"
                className="block px-4 py-2.5 rounded-xl hover:bg-purple-900/30 text-sm font-medium text-white"
              >
                Contact
              </Link>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsConsultationOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>Get Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Consultation Modal - loaded on demand */}
      {isConsultationOpen && (
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      )}
    </>
  );
}

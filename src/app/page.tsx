"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutCompanySection from "@/components/AboutCompanySection";
import OurExpertiseSection from "@/components/OurExpertiseSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      {/* 1. Hero Section: Diagonal Infinite Cards Stream with AI Images */}
      <HeroSection />

      {/* 2. About Section: Who We Are, Mission & Why Choose Keds Technology */}
      <AboutCompanySection />

      {/* 3. Our Expertise Section: Core Engineering Services (Web, Mobile, HRMS, CRM, ERP, etc.) */}
      <OurExpertiseSection />

      {/* 4. Contact Section: Get In Touch (Direct Inquiries, WhatsApp, Form) */}
      <ContactFormSection />
    </main>
  );
}

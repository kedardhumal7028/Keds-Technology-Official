import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutCompanySection from "@/components/AboutCompanySection";
import OurExpertiseSection from "@/components/OurExpertiseSection";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Keds Technology | Custom Website, Mobile App & Software Development",
  description:
    "Keds Technology is a premier software development company in Pune, India. We engineer high-performance websites, mobile apps (iOS & Android), enterprise HRMS, CRM, and custom software systems designed to scale your business.",
  keywords: [
    "Keds Technology",
    "Keds",
    "Technology",
    "Keds Tech",
    "Keds Technology Pune",
    "Website Development",
    "Web App Development",
    "Mobile App Development",
    "Custom Software Development",
    "Software Development Company",
    "App Development Pune",
    "IT Company in Pune",
    "HRMS Development",
    "ERP Software Development",
    "CRM System Development",
    "UI/UX Design Studio",
  ],
  alternates: {
    canonical: "https://kedstechnology.com",
  },
  openGraph: {
    title: "Keds Technology | Custom Website, Mobile App & Software Development",
    description:
      "Premier software development company in Pune, India. Custom websites, iOS/Android apps, ERP, HRMS, and enterprise software.",
    url: "https://kedstechnology.com",
    siteName: "Keds Technology",
    images: [
      {
        url: "/images/keds-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Keds Technology - Website, App & Software Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keds Technology | Custom Website, Mobile App & Software Development",
    description:
      "Premier software development company in Pune, India. Custom websites, iOS/Android apps, ERP, HRMS, and enterprise software.",
    images: ["/images/keds-banner.jpeg"],
  },
};

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

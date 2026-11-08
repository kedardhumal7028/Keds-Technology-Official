import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonAtmosphere from "@/components/NeonAtmosphere";
import ParticleCanvas from "@/components/ParticleCanvas";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import JsonLd from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kedstechnology.com"),
  title: {
    default: "Keds Technology | Innovate • Build • Scale",
    template: "%s | Keds Technology",
  },
  description:
    "Production-grade digital engineering studio crafting high-velocity web platforms, mobile apps, HRMS, CRM, and ERP systems for global leaders.",
  keywords: [
    "Keds Technology",
    "IT Company",
    "Custom Web Development",
    "Mobile App Development",
    "HRMS Solutions",
    "Enterprise ERP",
    "CRM Systems",
    "Custom Software Architecture",
    "UI/UX Design Studio",
    "Pune IT Company",
  ],
  authors: [{ name: "Keds Technology", url: "https://kedstechnology.com" }],
  creator: "Keds Technology",
  publisher: "Keds Technology",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    title: "Keds Technology | Innovate • Build • Scale",
    description:
      "Production-grade digital engineering studio crafting high-velocity web platforms, mobile apps, HRMS, CRM, and ERP systems.",
    url: "https://kedstechnology.com",
    siteName: "Keds Technology",
    images: [
      {
        url: "/images/keds-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Keds Technology - Innovate • Build • Scale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keds Technology | Innovate • Build • Scale",
    description:
      "Production-grade digital engineering studio crafting high-velocity web platforms, mobile apps, HRMS, CRM, and ERP systems.",
    images: ["/images/keds-banner.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kedstechnology.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} dark scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#000000] text-white min-h-screen selection:bg-purple-600 selection:text-white antialiased flex flex-col justify-between">
        {/* Cinematic Universe Atmosphere & Stardust */}
        <NeonAtmosphere />
        <ParticleCanvas />

        {/* Sticky Glass Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <div className="relative z-20 flex-1 flex flex-col">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Trigger */}
        <WhatsAppFloating />
      </body>
    </html>
  );
}

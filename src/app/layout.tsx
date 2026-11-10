import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonAtmosphere from "@/components/NeonAtmosphere";
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
  themeColor: "#070210",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kedstechnology.com"),
  title: {
    default: "Keds Technology | Custom Website, Mobile App & Software Development",
    template: "%s | Keds Technology",
  },
  description:
    "Keds Technology is a leading software engineering company in Pune, India. We engineer custom websites, iOS/Android mobile apps, enterprise HRMS, CRM, and ERP software solutions. Partner with Keds Technology to Innovate, Build, and Scale.",
  keywords: [
    "Keds Technology",
    "Keds",
    "Technology",
    "Keds Tech",
    "kedstechnology",
    "kedstechnology.com",
    "Keds Technology Pune",
    "Website Development",
    "Website Development Company",
    "Web App Development",
    "Web Development Pune",
    "Mobile App Development",
    "Mobile App Development Company",
    "App Development Pune",
    "iOS App Development",
    "Android App Development",
    "Custom Software Development",
    "Software Development Company",
    "Software Company Pune",
    "Best IT Company in Pune",
    "HRMS Software Development",
    "Enterprise ERP Development",
    "CRM System Development",
    "UI/UX Design Studio",
    "Full Stack Development",
    "React Nextjs Developers",
    "Pune IT Company",
  ],
  authors: [{ name: "Keds Technology", url: "https://kedstechnology.com" }],
  creator: "Keds Technology",
  publisher: "Keds Technology",
  category: "technology",
  classification: "Software & Technology Services",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    title: "Keds Technology | Custom Website, Mobile App & Software Development",
    description:
      "Leading software engineering company in Pune, India. Custom websites, iOS/Android mobile apps, HRMS, CRM, and enterprise ERP solutions.",
    url: "https://kedstechnology.com",
    siteName: "Keds Technology",
    images: [
      {
        url: "/images/keds-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Keds Technology - Custom Website, Mobile App & Software Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keds Technology | Custom Website, Mobile App & Software Development",
    description:
      "Leading software engineering company in Pune, India. Custom websites, iOS/Android mobile apps, HRMS, CRM, and enterprise ERP solutions.",
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
  icons: {
    icon: [
      { url: "/icon.png?v=5", sizes: "any", type: "image/png" },
      { url: "/favicon.ico?v=5", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png?v=5", sizes: "any", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=5",
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
        <link rel="icon" href="/icon.png?v=5" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=5" />
      </head>
      <body className="bg-[#000000] text-white min-h-screen selection:bg-purple-600 selection:text-white antialiased flex flex-col justify-between">
        {/* Cinematic Universe Atmosphere & Stardust */}
        <NeonAtmosphere />

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

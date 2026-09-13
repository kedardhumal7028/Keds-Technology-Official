import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Keds Technology | Innovate • Build • Scale",
  description:
    "Official website for Keds Technology. Innovate, Build, Scale. Something new is taking shape.",
  keywords: [
    "Keds Technology",
    "Innovate",
    "Build",
    "Scale",
    "Official Website",
  ],
  authors: [{ name: "Keds Technology" }],
  creator: "Keds Technology",
  openGraph: {
    title: "Keds Technology | Innovate • Build • Scale",
    description:
      "Something new is taking shape. Keds Technology official website coming soon.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keds Technology | Innovate • Build • Scale",
    description: "Something new is taking shape. Official website coming soon.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} dark`}>
      <body className="bg-[#05020a] text-white min-h-screen selection:bg-purple-600 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}

import React from "react";
import type { Metadata } from "next";
import ContactFormSection from "@/components/ContactFormSection";
import { Sparkles, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Hire Keds Technology for Web & App Development",
  description:
    "Get in touch with Keds Technology in Pune, India. Contact us for custom website development, mobile application development, HRMS, and enterprise software consultations. Email: kedstechnology@gmail.com, Phone: +91 95112 73939.",
  keywords: [
    "Contact Keds Technology",
    "Hire Web Developers Pune",
    "Hire App Developers",
    "Keds Technology Phone Number",
    "Keds Technology Email",
    "Software Development Inquiry",
  ],
  alternates: {
    canonical: "https://kedstechnology.com/contact",
  },
};

export default function ContactPage() {
  const faqs = [
    {
      q: "How fast do you respond to project inquiries?",
      a: "Our founding architects review and reply to every qualified technical inquiry within 24 hours. Urgent requests can be discussed immediately on our direct WhatsApp channel.",
    },
    {
      q: "Do you sign Non-Disclosure Agreements (NDAs)?",
      a: "Yes. Confidentiality is paramount. We gladly execute mutual NDAs prior to reviewing proprietary business logic, schemas, or product specs.",
    },
    {
      q: "What engagement models do you offer?",
      a: "We offer both fixed-price milestone delivery for well-defined projects, and dedicated senior engineering squads on flexible monthly retainers.",
    },
    {
      q: "Who owns the intellectual property (IP) and source code?",
      a: "You do. 100% of the repository, design tokens, databases, and deployment scripts belong exclusively to you upon milestone signoff.",
    },
  ];

  return (
    <main className="w-full pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form Section */}
        <ContactFormSection />

        {/* Consultation FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium">
              <HelpCircle className="w-3.5 h-3.5 text-purple-300" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Working with Keds Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-purple-500/20 bg-[#0D0720]/80 backdrop-blur-md space-y-2"
              >
                <h3 className="text-base font-bold text-white">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

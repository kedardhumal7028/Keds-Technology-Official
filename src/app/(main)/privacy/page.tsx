import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Keds Technology",
  description:
    "Privacy Policy of Keds Technology. Transparent data protection, confidentiality, and client intellectual property standards.",
  alternates: {
    canonical: "https://kedstechnology.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl border border-purple-500/25 bg-[#0D0720]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8">
          <div className="border-b border-purple-900/30 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                Legal &amp; Compliance
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-zinc-400 mt-2">
              Last Updated: November 6, 2026 &nbsp;•&nbsp; Keds Technology
            </p>
          </div>

          <div className="space-y-6 text-sm text-zinc-300 font-light leading-relaxed">
            <p>
              Welcome to Keds Technology (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). We respect your privacy and are committed to protecting the personal information you share with us through our website,{" "}
              <a href="https://kedstechnology.com" className="text-cyan-300 underline">https://kedstechnology.com</a>.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, protect and manage your personal information when you visit our website, contact us, request our services or interact with our business. By using our website, you agree to the practices described in this Privacy Policy.
            </p>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
              <h3 className="text-base font-semibold text-purple-200">1.1 Personal Information</h3>
              <p>When you contact us or request our services, we may collect:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company or organization name</li>
                <li>Project requirements and service inquiries</li>
              </ul>
              <h3 className="text-base font-semibold text-purple-200">1.2 Technical Information</h3>
              <p>When you visit our website, certain technical data may be collected automatically, including IP address, browser type, device information, pages visited, and date/time of visits.</p>
              <h3 className="text-base font-semibold text-purple-200">1.3 Cookies</h3>
              <p>Our website may use cookies to improve functionality and understand visitor behavior. You can manage or disable cookies through your browser settings.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-2">
                <li>To respond to inquiries and service requests</li>
                <li>To communicate about projects, proposals and quotations</li>
                <li>To improve our website and customer experience</li>
                <li>To maintain website security and prevent unauthorized activities</li>
                <li>To comply with applicable legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Sharing of Information</h2>
              <p>
                Keds Technology does not sell, rent or trade your personal information to third parties. We may share information only with trusted service providers who support our operations, or when required by law.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, or loss. No method of internet transmission is completely secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes described in this policy, meet legal obligations, and complete contractual requirements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">6. Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. Keds Technology is not responsible for the privacy practices or content of those external sites.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">7. Your Privacy Rights</h2>
              <p>
                Subject to applicable laws, you may request access to, correction of, or deletion of your personal information. To exercise these rights, contact us using the details below.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">8. Children&apos;s Privacy</h2>
              <p>
                Our website and services are intended for general business and professional audiences. We do not knowingly collect personal information from children in violation of applicable laws.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">9. Changes to This Policy</h2>
              <p>
                Keds Technology reserves the right to update this Privacy Policy at any time. Updates will be published on this page with the revised &quot;Last Updated&quot; date.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">10. Contact Us</h2>
              <p>
                If you have questions or requests regarding this Privacy Policy, please contact us:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 space-y-1">
                <p className="font-semibold text-white">Keds Technology</p>
                <p>Website: <a href="https://kedstechnology.com" className="text-cyan-300 underline">kedstechnology.com</a></p>
                <p>Email: <a href="mailto:kedstechnology@gmail.com" className="text-cyan-300 underline">kedstechnology@gmail.com</a></p>
                <p>Location: Pune, Maharashtra, India</p>
              </div>
            </section>

            <p className="text-xs text-zinc-500 pt-4 border-t border-purple-900/30">
              © 2026 Keds Technology. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

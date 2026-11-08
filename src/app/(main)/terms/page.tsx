import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Keds Technology",
  description:
    "Terms of Service governing engineering contracts, project delivery, and digital consulting at Keds Technology.",
};

export default function TermsOfServicePage() {
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

        <div className="p-8 sm:p-12 rounded-3xl border border-purple-500/25 bg-[#0B1023]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8">
          <div className="border-b border-purple-900/30 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                Legal Agreement
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Terms of Service
            </h1>
            <p className="text-xs text-zinc-400 mt-2">
              Last Updated: November 6, 2026 &nbsp;•&nbsp; Keds Technology
            </p>
          </div>

          <div className="space-y-6 text-sm text-zinc-300 font-light leading-relaxed">
            <p>
              Welcome to Keds Technology. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website,{" "}
              <a href="https://kedstechnology.com" className="text-cyan-300 underline">https://kedstechnology.com</a>,
              and the services provided by Keds Technology. By accessing our website or engaging our services, you acknowledge that you have read, understood and agreed to these Terms.
            </p>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. About Keds Technology</h2>
              <p>Keds Technology provides technology and software development services including:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-2">
                <li>Website Design and Development</li>
                <li>Mobile Application Development</li>
                <li>ERP and HRMS Solutions</li>
                <li>Custom CRM Development</li>
                <li>Custom Software Development</li>
                <li>UI/UX Design</li>
                <li>IT Consulting and Technical Support</li>
                <li>Website Maintenance and Support</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Use of Our Website</h2>
              <p>By using our website, you agree to provide accurate information, use the website only for lawful purposes, and not attempt to damage, disrupt, or interfere with website functionality or our systems.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Service Inquiries and Project Engagement</h2>
              <p>
                Submitting an inquiry does not automatically create a contractual relationship. A project engagement begins only after both parties agree upon requirements, scope, pricing, and timelines — documented through proposals, agreements, or statements of work.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Pricing and Payments</h2>
              <p>
                All project costs will be communicated before work begins. Advance or milestone-based payments may be required. Additional features outside the agreed scope may involve additional charges. Applicable taxes, including GST where required, will be communicated in the relevant invoice.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Project Scope and Changes</h2>
              <p>
                Any additional features or modifications requested after project approval may require additional development time, revised timelines, or additional charges. We will communicate and obtain approval before proceeding with any scope changes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">6. Project Delivery and Timelines</h2>
              <p>
                We make reasonable efforts to deliver within agreed timelines. Delays may occur due to changes in requirements, delayed client approvals, third-party interruptions, or events beyond our reasonable control.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">7. Intellectual Property Rights</h2>
              <p>
                Unless otherwise agreed in writing, client-specific deliverables will be handled per the ownership terms in the applicable project agreement. Third-party libraries and frameworks remain subject to their respective licenses.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">8. Client Responsibilities</h2>
              <p>
                Clients are responsible for providing accurate project requirements, necessary content and materials, timely feedback, required system access, and payments per the agreed schedule.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">9. Third-Party Services</h2>
              <p>
                Our solutions may integrate third-party platforms and APIs. Keds Technology is not responsible for third-party outages, policy changes, or pricing modifications beyond our reasonable control.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">10. Maintenance and Support</h2>
              <p>
                Ongoing maintenance, hosting, domain renewals, and additional development are not automatically included in the initial project cost unless explicitly stated in the project agreement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">11. Confidentiality</h2>
              <p>
                We will take reasonable steps to protect confidential business information shared during project discussions. Additional confidentiality obligations may be established through a separate NDA.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">12. Disclaimer of Warranties</h2>
              <p>
                Our website is provided on an &quot;as available&quot; basis. We do not guarantee uninterrupted availability or that the website will be free from technical errors. Project-specific warranties are governed by the applicable project agreement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">13. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Keds Technology will not be liable for indirect, incidental, or consequential losses arising from the use of our website or services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">14. Termination of Services</h2>
              <p>
                Either party may terminate a project engagement per the conditions in the applicable agreement. Outstanding payments, IP obligations, and confidentiality requirements remain in effect after termination.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">15. Changes to These Terms</h2>
              <p>
                Keds Technology reserves the right to update these Terms at any time. Updated Terms will be published on this page with a revised &quot;Last Updated&quot; date.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">16. Governing Law and Jurisdiction</h2>
              <p>
                These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of the competent courts in Pune, Maharashtra, India.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">17. Contact Information</h2>
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

"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-20 py-24 md:py-32 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs text-purple-300 font-medium tracking-wide">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Let&apos;s Build Something <span className="text-gradient-purple">Extraordinary</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Have a project in mind? Reach out and our team will respond within 24 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              <a
                href="mailto:kedstechnology@gmail.com"
                className="p-4 rounded-2xl border border-purple-500/20 bg-[#0D0720]/80 backdrop-blur-md flex items-center gap-4 hover:border-purple-400/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-purple-200 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Email Us</div>
                  <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    kedstechnology@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+919511273939"
                className="p-4 rounded-2xl border border-purple-500/20 bg-[#0D0720]/80 backdrop-blur-md flex items-center gap-4 hover:border-purple-400/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-purple-200 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Call / WhatsApp</div>
                  <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    +91 95112 73939
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-2xl border border-purple-500/20 bg-[#0D0720]/80 backdrop-blur-md flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Location</div>
                  <div className="text-sm font-semibold text-white">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>

            {/* Trust Box */}
            <div className="p-5 rounded-2xl border border-purple-500/30 bg-purple-950/20 backdrop-blur-md space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Our Partnership Guarantee</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every project inquiry is protected by strict Non-Disclosure Agreements. We guarantee 100% intellectual property ownership to you from day one.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl border border-purple-500/30 bg-[#0D0720]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Joshi"
                        className="w-full px-4 py-3 rounded-xl bg-[#080314] border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-[#080314] border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#080314] border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 95112 73939"
                        className="w-full px-4 py-3 rounded-xl bg-[#080314] border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080314] border border-purple-500/30 text-white focus:outline-none focus:border-purple-400 text-sm transition-all"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="HRMS Solutions">HRMS Solutions</option>
                      <option value="CRM Systems">CRM Systems</option>
                      <option value="ERP Systems">ERP Systems</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="UI/UX Product Design">UI/UX Product Design</option>
                      <option value="Cloud & AI Solutions">Cloud &amp; AI Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, goals, or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl bg-[#080314] border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 text-sm transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400 bg-red-900/20 border border-red-500/30 rounded-xl px-4 py-3">
                      ⚠️ {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Sending your message...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-purple-200" />
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-16 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-purple-950/60 border border-cyan-400/50 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_30px_rgba(0,212,255,0.4)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Message Sent Successfully! 🎉
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>! Your inquiry has been received. We&apos;ll get back to you at{" "}
                      <strong className="text-cyan-300">{formData.email}</strong> within 24 hours.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", company: "", email: "", phone: "", service: "Website Development", message: "" });
                      }}
                      className="px-6 py-2.5 rounded-full border border-purple-500/30 text-purple-200 hover:text-white text-xs font-semibold transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`https://wa.me/919511273939?text=${encodeURIComponent(`Hello Keds Technology! I just submitted an inquiry. My name is ${formData.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2.5 rounded-full bg-green-600/20 border border-green-500/40 text-green-300 hover:text-white text-xs font-semibold transition-colors"
                    >
                      💬 Also chat on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle2, Send, Sparkles, MessageSquare } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "Website Development",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Send form data to API to notify owner by email
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#7C3AED", "#9333EA", "#00D4FF", "#FFFFFF"],
        });
      } catch {
        // Confetti fallback
      }

      setSubmitted(true);
    } catch {
      setError("Unable to submit. Please contact us directly at kedstechnology@gmail.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050816]/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border border-purple-500/30 bg-[#0B1023]/95 shadow-[0_0_60px_rgba(124,58,237,0.35)] text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-800/60 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/30 text-xs text-purple-300 font-medium tracking-wide w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Free Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Request a <span className="text-gradient-purple">Consultation</span>
            </h2>
            <p className="mt-1 text-sm text-zinc-300 font-light">
              Share your project requirements and our team will get in touch with an estimate within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 text-sm transition-all"
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
                    placeholder="e.g. Acme Enterprises"
                    className="w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 text-sm transition-all"
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
                    placeholder="rahul@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 text-sm transition-all"
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
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                  Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0e152e] border border-purple-500/30 text-white focus:outline-none focus:border-cyan-400 text-sm transition-all"
                >
                  <option value="Website Development">Website Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="HRMS Solutions">HRMS Solutions</option>
                  <option value="CRM Systems">CRM Systems</option>
                  <option value="ERP Systems">ERP Systems</option>
                  <option value="Custom Software">Custom Software Architecture</option>
                  <option value="UI/UX Product Design">UI/UX Product Design</option>
                  <option value="Cloud & AI Solutions">Cloud &amp; AI Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                  Project Details *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you want to build or your primary goals..."
                  className="w-full px-4 py-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 text-sm transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-red-400 bg-red-900/20 border border-red-500/30 rounded-xl px-4 py-2.5">
                  {error}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98 disabled:opacity-70"
                >
                  {submitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-zinc-400">
                🔒 Your information is confidential and protected by NDA.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-900/40 border border-cyan-400/50 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_25px_rgba(0,212,255,0.4)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. We have received your request for <span className="text-cyan-300 font-medium">{formData.service}</span>. Our team will contact you within 24 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919511273939?text=${encodeURIComponent(
                  `Hello Keds Technology, I submitted a consultation request for ${formData.service}. My name is ${formData.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 95112 73939)</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-purple-500/40 hover:bg-purple-900/30 text-purple-200 text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

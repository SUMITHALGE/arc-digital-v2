"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";

// ── Nav link data matching the Navbar routes ──────────────────────────────────
const services = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Redesign", href: "/services/website-redesign" },
  { label: "SEO Optimization", href: "/services/seo-services" },
  { label: "Application Development", href: "/services/application-development" },
  { label: "All Services", href: "/services" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

// ── Social icons ──────────────────────────────────────────────────────────────
const socials = [
  {
    label: "Twitter / X",
    href: "https://twitter.com/arcdigital",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/arcdigital",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/arcdigital",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/arcdigital",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e2e8f0",
      }}
    >
      {/* ── Top CTA band ── */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid var(--gray-200)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-1"
              style={{ color: 'var(--color-webflow-blue)' }}
            >
              Ready to grow?
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'var(--color-ink-black)', letterSpacing: 'var(--tracking-heading-lg)' }}
            >
              Let&apos;s build something{" "}
              <span style={{ color: 'var(--color-webflow-blue)' }}>
                exceptional
              </span>
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--color-slate-gray)' }}>
              Premium websites · Scalable apps · SEO growth
            </p>
          </div>
          <a
            href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shrink-0"
            style={{
              background: "linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-cyan) 100%)",
              boxShadow: "0 8px 24px rgba(47,101,246,0.25)",
            }}
          >
            Start a Project
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.8fr] gap-12 mb-14">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Arc Digital Solutions home">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/assets/logo.svg"
                  alt="Arc Digital Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              <span
                className="text-xl font-semibold tracking-tight"
                style={{ color: 'var(--color-ink-black)' }}
              >
                Arc Digital
              </span>
              <span
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-webflow-blue)' }}
              >
                Solution
              </span>
            </div>
            </Link>

            {/* Tagline */}
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--gray-500)" }}
            >
              We engineer high-performance, SEO-first digital experiences — websites, apps, and growth strategies that convert visitors into loyal customers.
            </p>

            {/* Contact snippets */}
            <ul className="flex flex-col gap-3 text-sm" style={{ color: "var(--gray-500)" }}>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent-blue)" }} />
                <a
                  href="mailto:hello@arcdigitalsolutions.in"
                  className="transition-colors duration-200 hover:underline"
                  style={{ color: "var(--gray-500)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
                >
                  hello@arcdigitalsolutions.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent-blue)" }} />
                <a
                  href="https://wa.me/917719902074"
                  className="transition-colors duration-200"
                  style={{ color: "var(--gray-500)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
                >
                  +91 7719902074
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "var(--accent-blue)" }} />
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-2.5 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--gray-100)",
                    border: "1px solid var(--gray-200)",
                    color: "var(--gray-500)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--accent-blue)";
                    el.style.borderColor = "var(--accent-blue)";
                    el.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--gray-100)";
                    el.style.borderColor = "var(--gray-200)";
                    el.style.color = "var(--gray-500)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Services column ── */}
          <div>
            <h3
              className="text-xs font-extrabold uppercase tracking-widest mb-6"
              style={{ color: "var(--gray-400)" }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm flex items-center gap-2 transition-all duration-200"
                    style={{ color: "var(--gray-600)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--accent-blue)";
                      el.style.paddingLeft = "4px";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--gray-600)";
                      el.style.paddingLeft = "0";
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "var(--accent-blue)" }}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company column ── */}
          <div>
            <h3
              className="text-xs font-extrabold uppercase tracking-widest mb-6"
              style={{ color: "var(--gray-400)" }}
            >
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm flex items-center gap-2 transition-all duration-200"
                    style={{ color: "var(--gray-600)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--accent-blue)";
                      el.style.paddingLeft = "4px";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--gray-600)";
                      el.style.paddingLeft = "0";
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "var(--accent-blue)" }}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Newsletter column ── */}
          <div className="flex flex-col gap-5">
            <div>
              <h3
                className="text-xs font-extrabold uppercase tracking-widest mb-2"
                style={{ color: "var(--gray-400)" }}
              >
                Newsletter
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray-500)" }}>
                Get the latest insights on web performance, SEO strategy, and digital growth — straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 min-w-0 text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200"
                  style={{
                    background: "var(--gray-100)",
                    border: "1px solid var(--gray-200)",
                    color: "var(--primary-navy)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-blue)";
                    e.currentTarget.style.background = "rgba(47,101,246,0.04)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(47,101,246,0.08)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--gray-200)";
                    e.currentTarget.style.background = "var(--gray-100)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl text-white font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-cyan) 100%)",
                  }}
                  aria-label="Subscribe"
                >
                  {status === "loading" ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>

              {status === "success" && (
                <p
                  className="text-xs font-semibold flex items-center gap-1.5"
                  style={{ color: "var(--accent-blue)" }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  You&apos;re in! Check your inbox shortly.
                </p>
              )}
            </form>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-1">
              {["200+ Projects", "98 Lighthouse Score", "SEO-First"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1"
                  style={{
                    background: "rgba(47,101,246,0.07)",
                    border: "1px solid rgba(47,101,246,0.18)",
                    color: "var(--accent-blue)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "var(--gray-200)" }}
        />

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "var(--gray-400)" }}
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold" style={{ color: 'var(--color-ink-black)' }}>
              Arc Digital Solution
            </span>
            . All rights reserved. Built with Next.js & ❤️ in India.
          </p>
          <div className="flex items-center gap-5">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-200"
                style={{ color: "var(--gray-400)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-400)")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

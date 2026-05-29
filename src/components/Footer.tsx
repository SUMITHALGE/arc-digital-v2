"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";



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
    label: "WhatsApp",
    href: "https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.557 4.121 1.532 5.854L.057 23.882a.5.5 0 0 0 .61.61l6.083-1.49A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.371l-.361-.214-3.737.915.944-3.64-.235-.374A9.861 9.861 0 0 1 2.1 12c0-5.468 4.432-9.9 9.9-9.9 5.468 0 9.9 4.432 9.9 9.9 0 5.468-4.432 9.9-9.9 9.9z" />
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
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Footer() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-6">
            {/* Logo — identical to Navbar */}
            <Link
              href="/"
              aria-label="Arc Digital Solution"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                textDecoration: 'none',
                userSelect: 'none',
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-barlow-condensed), 'Arial Narrow', Arial, sans-serif",
                  fontSize: '32px',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-ink-black)',
                  textTransform: 'uppercase',
                }}
              >
                ARC
              </span>
              <span
                aria-hidden="true"
                style={{
                  display: 'block',
                  width: '1px',
                  height: '28px',
                  background: 'var(--color-outline-gray)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
                  fontSize: '9px',
                  fontWeight: 600,
                  lineHeight: 1.5,
                  color: 'var(--color-ink-black)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  opacity: 0.45,
                }}
              >
                Digital<br />Solution
              </span>
            </Link>

            {/* Tagline */}
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--gray-500)" }}
            >
              We engineer high-performance, SEO-first digital experiences websites, apps, and growth strategies that convert visitors into loyal customers.
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

"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 85 L45 15 C47 11 53 11 55 15 L85 85"
                  stroke="#ffffff"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 60 C40 45, 60 45, 67 60"
                  stroke="var(--accent-blue)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="35" r="8" fill="var(--accent-yellow)" />
              </svg>
              <div className={styles.logoText}>
                <span>Arc Digital</span>
                <span className={styles.logoSub}>Solutions</span>
              </div>
            </Link>
            <p className={styles.desc}>
              Building high-performance, premium, and SEO-first digital experiences designed to drive traffic and convert customers.
            </p>
            <div className={styles.socials}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className={styles.title}>Services</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/services/website-development" className={styles.link}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/website-redesign" className={styles.link}>
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link href="/services/seo-services" className={styles.link}>
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.link}>
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className={styles.title}>Company</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className={styles.link}>
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/process" className={styles.link}>
                  Process
                </Link>
              </li>
              <li>
                <Link href="/faq" className={styles.link}>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.newsletterCol}>
            <h3 className={styles.title}>Newsletter</h3>
            <p className={styles.desc}>
              Stay updated with the latest digital growth strategies and web trends.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subbing..." : "Subscribe"}
              </button>
            </form>
            {status === "success" && (
              <p className={`${styles.formStatus} text-accent-yellow`}>
                Thank you! You have subscribed successfully.
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Arc Digital Solutions. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import "./hero.css";

/* ── Portfolio showcase data ─────────────────────── */
const portfolioCards = [
  {
    src: "/assets/portfolio/saas-dashboard.png",
    label: "SaaS Dashboard",
    alt: "SaaS dashboard web application built by ARC Digital Solutions",
  },
  {
    src: "/assets/portfolio/carousel-ecommerce.png",
    label: "E-Commerce Store",
    alt: "E-commerce website developed by ARC Digital Solutions",
  },
  {
    src: "/assets/portfolio/restaurant.png",
    label: "Restaurant Website",
    alt: "Restaurant website designed by ARC Digital Solutions",
  },
];

/* ── Framer Motion variants ──────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const cardVariants = [
  {
    hidden: { opacity: 0, y: 60, rotate: 2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 2,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.5 },
    },
  },
  {
    hidden: { opacity: 0, y: 50, rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: -3,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.65 },
    },
  },
  {
    hidden: { opacity: 0, y: 70, rotate: 1 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.8 },
    },
  },
];


export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  /* ── Mouse glow tracker ────────────────────────── */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!glowRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    },
    []
  );

  return (
    <section
      ref={heroRef}
      className="hero"
      onMouseMove={handleMouseMove}
    >
      {/* ── Ambient mesh gradient blobs ──────────────── */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />

      {/* ── Mouse-reactive glow ──────────────────────── */}
      <div ref={glowRef} className="hero__glow" aria-hidden="true" />

      {/* ── Film grain texture ───────────────────────── */}
      <div className="hero__grain" aria-hidden="true" />

      {/* ── Main Content ─────────────────────────────── */}
      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Left: Text Content ─────────────────────── */}
        <div className="hero__text">
          {/* Badge */}
          <motion.div className="hero__badge" variants={fadeUp}>
            <span className="hero__badge-dot" />
            Available for Projects
          </motion.div>

          {/* Headline */}
          <motion.h1 className="hero__headline" variants={fadeUp}>
            We build websites that don&apos;t just look premium —{" "}
            <span className="hero__headline-accent">
              they drive revenue
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p className="hero__sub" variants={fadeUp}>
            ARC Digital Solutions engineers fast, SEO-first websites and
            applications for Mumbai &amp; Pune businesses. Custom React.js,
            Spring Boot, and digital marketing that converts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero__ctas" variants={fadeUp}>
            <a
              href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn-primary"
            >
              Start Project <ArrowRight size={16} />
            </a>
            <Link href="/work" className="hero__btn-secondary">
              View Work <ExternalLink size={14} />
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div className="hero__trust" variants={fadeIn}>
            <div className="hero__trust-item">
              <span className="hero__trust-value">20+</span> Projects
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-value">4.9★</span> Rating
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-value">Mumbai</span> &amp;{" "}
              <span className="hero__trust-value">Pune</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right: Floating Portfolio Cards ────────── */}
        <div className="hero__showcase">
          {portfolioCards.map((card, i) => (
            <motion.div
              key={card.label}
              className={`hero__card hero__card--${i + 1}`}
              variants={cardVariants[i]}
              whileHover={{
                scale: 1.04,
                rotate: 0,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="hero__card-img"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 280px"
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
                style={{ objectFit: "cover" }}
              />
              <span className="hero__card-label">{card.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Bottom fade into cream content area ──────── */}
      <div className="hero__fade" aria-hidden="true" />
    </section>
  );
}

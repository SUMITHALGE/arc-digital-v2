"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Side Copy */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            SEO Driven • Web Development • Digital Growth
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.title}>
            Build websites that look premium and generate real business growth
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.description}>
            Arc Digital Solutions creates fast, SEO-first websites designed to
            attract traffic, convert leads, and help businesses grow.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.btnGroup}>
            <Link href="/contact" className={styles.primaryBtn}>
              Start Project
            </Link>
            <Link href="/work" className={styles.secondaryBtn}>
              View Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side Visual — Interlocking Fluid Blob Design */}
        <motion.div
          className={`${styles.visualWrapper} ${styles.floating}`}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {/* SVG Blob Artwork */}
          <svg
            className={styles.blobSvg}
            viewBox="0 0 520 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ===== Yellow Blob Group (top-left) ===== */}
            <circle cx="105" cy="100" r="78" fill="#FFC01E" />
            <circle cx="245" cy="100" r="78" fill="#FFC01E" />
            <circle cx="175" cy="225" r="60" fill="#FFC01E" />
            {/* Bridge between yellow circles — fills gap to merge them */}
            <rect x="105" y="40" width="140" height="120" fill="#FFC01E" rx="10" />
            {/* Bridge between top-right yellow and bottom yellow */}
            <path
              d="M210,145 C240,170 230,190 210,215 C195,235 175,235 155,225 C135,215 130,195 145,170 C155,155 180,140 210,145Z"
              fill="#FFC01E"
            />

            {/* ===== Navy Blob Group (center S-curve) ===== */}
            <circle cx="355" cy="100" r="70" fill="#0B1A2E" />
            {/* S-curve connector flowing down */}
            <path
              d="M355,170 C355,220 280,230 280,285 C280,340 355,350 355,400"
              stroke="#0B1A2E"
              strokeWidth="72"
              strokeLinecap="round"
              fill="none"
            />

            {/* ===== Blue Blob Group (bottom-left to center) ===== */}
            <circle cx="105" cy="355" r="78" fill="#2F65F6" />
            <circle cx="260" cy="360" r="78" fill="#2F65F6" />
            {/* Bridge between blue circles */}
            <rect x="105" y="300" width="155" height="120" fill="#2F65F6" rx="10" />

            {/* ===== Cyan Vertical Pill (right column) ===== */}
            <rect x="415" y="50" width="82" height="440" rx="41" fill="#3FA9F5" />

            {/* Small cyan accent circles at bottom of pill */}
            <circle cx="456" cy="498" r="22" fill="#52D4F7" />
          </svg>

          {/* ===== Overlaid Foreground Elements ===== */}

          {/* Member 1 — Woman on pink bg (left, between rows 1-2) */}
          <div className={`${styles.overlayCircle} ${styles.member1Pos}`}>
            <div className={styles.photoFrame} style={{ backgroundColor: "#e45373" }}>
              <Image
                src="/assets/member1.png"
                alt="Creative Director"
                fill
                sizes="120px"
                className={styles.photoImg}
                priority
              />
            </div>
          </div>

          {/* Member 2 — Man on yellow bg (top of cyan pill) */}
          <div className={`${styles.overlayCircle} ${styles.member2Pos}`}>
            <div className={styles.photoFrame} style={{ backgroundColor: "#ffc01e" }}>
              <Image
                src="/assets/member2.png"
                alt="Lead Systems Architect"
                fill
                sizes="110px"
                className={styles.photoImg}
                priority
              />
            </div>
          </div>

          {/* Member 3 — Smiling woman on blue bg (bottom center) */}
          <div className={`${styles.overlayCircle} ${styles.member3Pos}`}>
            <div className={styles.photoFrame} style={{ backgroundColor: "#2f65f6" }}>
              <Image
                src="/assets/member3.png"
                alt="SEO Strategist"
                fill
                sizes="120px"
                className={styles.photoImg}
                priority
              />
            </div>
          </div>

          {/* Camera Icon Widget (in cyan pill, upper-middle) */}
          <div className={`${styles.overlayCircle} ${styles.cameraPosWidget}`}>
            <div className={styles.cameraWidget}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.widgetIcon}>
                <circle cx="12" cy="13" r="4" />
                <path d="M9 2L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.17L15 2H9z" />
              </svg>
            </div>
          </div>

          {/* White 3D Circle Widget (in cyan pill, lower-middle) */}
          <div className={`${styles.overlayCircle} ${styles.whitePosWidget}`}>
            <div className={styles.whiteCircleWidget} />
          </div>

          {/* Concentric Target Rings (bottom-left) */}
          <div className={`${styles.overlayCircle} ${styles.targetPosWidget}`}>
            <div className={styles.targetWidget}>
              <div className={styles.targetMid}>
                <div className={styles.targetCore} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

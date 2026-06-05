import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us | Arc Digital Solutions",
  description:
    "Learn more about Arc Digital Solutions. Our experienced developers and SEO strategists craft top-performing, secure Next.js applications.",
};

const values = [
  {
    title: "Technical Excellence",
    desc: "We build Next.js applications that load in milliseconds and perform flawlessly. We leverage server-side architectures to eliminate bundle bloat.",
  },
  {
    title: "Security-First Focus",
    desc: "We write clean, audit-ready code. From secure routing to sanitizing user form inputs, we keep our systems compliant with top OWASP parameters.",
  },
  {
    title: "Data-Driven Results",
    desc: "We do not believe in superficial designs. Every component we draft is built to multiply organic search impressions and drive active leads.",
  },
];

const team = [
  {
    name: "Sumit Halge",
    role: "Founder & Software Engineer",
    image: "/testimonials/sumit.png",
    bio: "Established a technology-driven digital solutions company focused on web development, software engineering, and cloud technologies. Leading business strategy, client engagement, and product delivery while building innovative solutions that help organizations accelerate their digital growth.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Who We Are</span>
          <h1 className={styles.title}>
            Engineering state-of-the-art web products for growth-oriented brands
          </h1>
          <p className={styles.subtitle}>
            Arc Digital Solutions is a premium digital agency. We specialize in
            speed-optimized Next.js web applications, security-first backend integrations,
            and data-proven search engine optimization strategies.
          </p>
        </div>

        {/* Core Values */}
        <div className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Our Core Pillars</h2>
          <div className={styles.grid}>
            {values.map((val, idx) => (
              <div key={idx} className={styles.card}>
                <h3 className={styles.cardTitle}>{val.title}</h3>
                <p className={styles.cardDesc}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Meet Our Leadership</h2>
          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <div key={idx} className={styles.teamCard}>
                <div className={styles.teamHeader}>
                  <div className={styles.avatar}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center 20%" }}
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className={styles.teamName}>{member.name}</h3>
                    <p className={styles.teamRole}>{member.role}</p>
                  </div>
                </div>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Metadata } from "next";
import styles from "./process.module.css";

export const metadata: Metadata = {
  title: "Our Process | Arc Digital Solutions",
  description:
    "Learn about our SEO-first, agile web development workflow. We follow a detailed plan from discovery through design, build, and search ranking launch.",
};

const steps = [
  {
    step: "1",
    title: "Discovery & Competitive Audit",
    desc: "We research keyword opportunities, page performance issues, and UI conversion leaks on your legacy site. We map out an exact layout roadmap to beat search competitors.",
  },
  {
    step: "2",
    title: "UX/UI Blueprinting",
    desc: "We mockup high-fidelity wireframes following premium, modern aesthetics. We establish balanced color palettes, curated Google Fonts settings, and glassmorphic designs.",
  },
  {
    step: "3",
    title: "SEO-First Next.js Coding",
    desc: "Our web engineering team hardcodes custom Next.js configurations. We write clean CSS Modules, load lightweight SVGs, and avoid bundle bloat to guarantee millisecond load times.",
  },
  {
    step: "4",
    title: "Search Console Deployment",
    desc: "We launch with automated sitemap scripts and custom JSON-LD schema files injected on every page. We monitor Core Web Vitals to secure immediate search index gains.",
  },
];

export default function ProcessPage() {
  return (
    <div className={styles.processPage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>How We Work</span>
          <h1 className={styles.title}>
            A structured workflow engineered for fast, premium deployments
          </h1>
          <p className={styles.subtitle}>
            We combine detailed wireframing, high-performance Next.js builds, and
            technical SEO audits to deliver products that generate actual business revenue.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {steps.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>{item.step}</div>
              <div className={styles.timelineContent}>
                <h2 className={styles.timelineTitle}>{item.title}</h2>
                <p className={styles.timelineDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Metadata } from "next";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Our Work | Arc Digital Solutions",
  description:
    "Explore how Arc Digital Solutions has engineered high-performing Next.js web systems and technical SEO strategies for top MNCs and fast-growing startups.",
};

const projects = [
  {
    title: "Alpha Growth Platform",
    desc: "A custom data analytics dashboard and speed revamp for a leading SaaS provider, focusing on layout core web vitals and metadata structuring.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    metrics: [
      { val: "+115%", label: "Organic Search Traffic" },
      { val: "+40%", label: "Dashboard Page Speed" },
    ],
  },
  {
    title: "Sora Creative Showcase",
    desc: "A modern architectural showcase layout built with smooth custom Framer Motion transitions and CSS Modules, optimizing interactive lead collection flow.",
    tags: ["React.js", "Framer Motion", "CSS Modules"],
    metrics: [
      { val: "+150%", label: "Inquiry Conversions" },
      { val: "99/100", label: "Mobile Speed Index" },
    ],
  },
  {
    title: "ReliaQuest Secure Portal",
    desc: "A secure, enterprise-grade client portal featuring JWT authorizations, Kafka integration stubs, and strict compliance with OWASP Top 10 guidelines.",
    tags: ["Java / Spring Boot", "Next.js", "Kafka"],
    metrics: [
      { val: "-30%", label: "Server-side Latency" },
      { val: "100%", label: "OWASP Compliance Audited" },
    ],
  },
  {
    title: "Autodesk Design Hub",
    desc: "A high-fidelity layout restructure for collaboration, utilizing robust Tailwind styles, custom React rendering paths, and Google Fonts settings.",
    tags: ["TypeScript", "Next.js", "Tailwind v4"],
    metrics: [
      { val: "+80%", label: "User Interaction Rates" },
      { val: "98/100", label: "Google SEO Score" },
    ],
  },
];

export default function WorkPage() {
  return (
    <div className={styles.workPage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Case Studies</span>
          <h1 className={styles.title}>
            Real client projects. Measured business growth.
          </h1>
          <p className={styles.subtitle}>
            Explore our portfolio of high-speed websites, secure web portals, and
            focused SEO architectures built for Autodesk, ReliaQuest, and SaaS leaders.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              {/* Visual Frame */}
              <div className={styles.imageWrapper}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-navy to-accent-blue opacity-90 flex items-center justify-center p-8">
                  <div className="text-center">
                    <span className="text-accent-yellow font-heading text-sm font-bold tracking-wider uppercase block mb-2">
                      Case Study
                    </span>
                    <span className="text-white text-3xl font-extrabold font-heading">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Copy & Metrics */}
              <div className={styles.cardContent}>
                <div className={styles.tags}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.desc}</p>

                {/* Key Metrics */}
                <div className={styles.results}>
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div className={styles.resultVal}>{metric.val}</div>
                      <div className={styles.resultLabel}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

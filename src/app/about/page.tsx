import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About ARC Digital Solutions | Sumit Halge | Web Dev Company Mumbai & Pune",
  description:
    "ARC Digital Solutions, founded by Sumit Halge, is a web development and digital marketing company in Mumbai and Pune. Expert React.js, Spring Boot, SEO, and custom website development across Maharashtra.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/about",
  },
  openGraph: {
    title: "About ARC Digital Solutions | Sumit Halge | Mumbai & Pune",
    description:
      "Meet Sumit Halge, founder of ARC Digital Solutions — a web development company in Mumbai and Pune. Expert React.js, Spring Boot, SEO services, and digital marketing.",
    url: "https://www.arcdigitalsolution.in/about",
    type: "website",
    locale: "en_IN",
  },
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.arcdigitalsolution.in/about#sumit-halge",
    name: "Sumit Halge",
    jobTitle: "Founder & Software Engineer",
    description:
      "Sumit Halge is the founder of ARC Digital Solutions, a web development and digital marketing company in Mumbai and Pune. He specializes in React.js, Spring Boot, Next.js, SEO, and cloud technologies.",
    url: "https://www.arcdigitalsolution.in/about",
    image: "https://www.arcdigitalsolution.in/testimonials/sumit.png",
    worksFor: {
      "@type": "Organization",
      "@id": "https://www.arcdigitalsolution.in/#business",
      name: "ARC Digital Solutions",
    },
    address: [
      { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
      { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
    ],
    knowsAbout: [
      "React.js", "Next.js", "Spring Boot", "Java", "JavaScript", "TypeScript",
      "SEO", "Digital Marketing", "Web Development", "Microservices",
      "AWS", "Docker", "UI/UX Design", "E-Commerce Development",
    ],
    sameAs: [
      "https://www.linkedin.com/in/sumithalge/",
      "https://github.com/sumithalge",
    ],
  };

  const orgBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.arcdigitalsolution.in/about" },
    ],
  };
  return (
    <>
      {/* Person Schema — Sumit Halge entity for Google Knowledge Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgBreadcrumb) }}
      />
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8 mt-4">
          <a href="/" className="hover:underline">Home</a>
          <span>/</span>
          <span className="font-medium text-primary-navy">About Us</span>
        </nav>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Who We Are — Mumbai & Pune</span>
          <h1 className={styles.title}>
            Web Development Company in Mumbai & Pune — ARC Digital Solutions
          </h1>
          <p className={styles.subtitle}>
            ARC Digital Solutions, founded by Sumit Halge, is a premium web development and digital marketing company
            serving businesses across Mumbai, Pune, Navi Mumbai, and Maharashtra. We specialize in
            React.js, Next.js, Spring Boot, and data-driven SEO strategies that deliver real business growth.
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
    </>
  );
}

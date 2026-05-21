"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./faq.module.css";

const faqData = [
  {
    question: "Why should we use a Next.js framework for our digital agency website?",
    answer: "Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG) out of the box. This translates to incredibly fast page loads, optimal Google Search indexes, better performance, and seamless client-side user experience using React.",
  },
  {
    question: "Do you integrate SEO schemas automatically?",
    answer: "Yes, every website we build features custom JSON-LD schemas (Organization, Services, FAQPage, etc.) using industry-standard schema-dts and dynamic Metadata API structures to maximize search appearance visibility.",
  },
  {
    question: "What is the typical timeframe for a full project delivery?",
    answer: "A standard landing page or portfolio launch takes between 3 to 5 weeks from discovery to wireframes and development. More complex Next.js SaaS applications take 6 to 10 weeks.",
  },
  {
    question: "How do you optimize page speed and Core Web Vitals?",
    answer: "We focus on clean Next.js architecture: image optimization (`next/image`), font self-hosting, lightweight styling modules, minimizing third-party script blockages, and utilizing content delivery network (CDN) distributions.",
  },
  {
    question: "Do you offer post-launch support and hosting guidance?",
    answer: "Yes, we support our clients with full Vercel or AWS deployment configuration, security-first environment controls, and monthly technical audit checks to maintain search presence metrics.",
  },
];

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.faqPage}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.label}>Support & QA</span>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <p className={styles.subtitle}>
              Find answers to common questions about our technical stacks, Next.js setups,
              SEO configurations, and custom layout delivery options.
            </p>
          </div>

          {/* Accordion container */}
          <div className={styles.faqContainer}>
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={styles.faqHeader}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <ChevronDown
                      className="w-5 h-5"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <div
                    className={`${styles.faqAnswer} ${
                      isOpen ? styles.faqAnswerOpen : ""
                    }`}
                  >
                    <p className={styles.faqText}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

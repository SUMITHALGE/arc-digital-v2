"use client";

import React from "react";
import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero-component";

// Development & tech-themed images from Unsplash (verified working URLs)
const devImages = [
  // Code / programming
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop",
  // Dashboard / analytics
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
  // Web design mockup
  "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=400&auto=format&fit=crop",
  // Developer workspace
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop",
  // Server / infrastructure
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop",
  // Mobile development
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop",
  // Team collaboration
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
  // Creative UI design
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&auto=format&fit=crop",
  // SEO / search
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=400&auto=format&fit=crop",
  // Website on laptop
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
  // Performance metrics
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=400&auto=format&fit=crop",
  // Modern office tech
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop",
];

export default function Hero() {
  return (
    <ArcGalleryHero
      images={devImages}
      headline="Build websites that look premium and generate real business growth"
      subheadline="Arc Digital Solutions creates fast, SEO-first websites designed to attract traffic, convert leads, and help businesses grow."
      primaryBtnText="Start Project"
      primaryBtnHref="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions"
      secondaryBtnText="View Work"
      secondaryBtnHref="/work"
      badge="SEO Driven • Web Development • Digital Growth"
    />
  );
}

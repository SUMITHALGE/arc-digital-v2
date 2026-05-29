'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// --- The ArcGalleryHero Component ---
type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  // radius for different screen sizes
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  // size of each card for different screen sizes
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  // optional extra class on outer section
  className?: string;
  // content customization
  headline?: string;
  subheadline?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  badge?: string;
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = '',
  headline = 'Build websites that look premium and generate real business growth',
  subheadline = 'Arc Digital Solutions creates fast, SEO-first websites designed to attract traffic, convert leads, and help businesses grow.',
  primaryBtnText = 'Start Project',
  primaryBtnHref = 'https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions',
  secondaryBtnText = 'View Work',
  secondaryBtnHref = '/work',
  badge = 'SEO Driven • Web Development • Digital Growth',
}) => {
  // Always start with the large (default) dimensions so SSR and client initial render match
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });
  const hasMounted = useRef(false);

  // Effect to handle responsive resizing of the arc and cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    // Only update on mount after first paint to avoid hydration mismatch
    if (!hasMounted.current) {
      hasMounted.current = true;
      // Use requestAnimationFrame to defer the resize check past hydration
      requestAnimationFrame(() => {
        handleResize();
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  // Ensure at least 2 points to distribute angles for the arc calculation
  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section className={`relative overflow-hidden bg-[var(--color-canvas-white)] text-[var(--color-ink-black)] min-h-screen flex flex-col ${className}`}>
      {/* Background ring container that controls geometry */}
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          // Give it a bit more height to prevent clipping
          height: `${Math.round(dimensions.radius * 1.2)}px`,
        }}
      >
        {/* Center pivot for transforms - positioned at bottom center */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {/* Each image is positioned on the circle and rotated to face outward */}
          {images.map((src, i) => {
            const angle = startAngle + step * i; // degrees
            const angleRad = (angle * Math.PI) / 180;

            // Calculate x and y positions on the arc - round to 3 decimal places for consistency
            const x = Math.round(Math.cos(angleRad) * dimensions.radius * 1000) / 1000;
            const y = Math.round(Math.sin(angleRad) * dimensions.radius * 1000) / 1000;

            return (
              <div
                key={i}
                className="absolute opacity-0 arc-fade-in-up"
                style={{
                  width: `${dimensions.cardSize}px`,
                  height: `${dimensions.cardSize}px`,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: 'translate(-50%, 50%)',
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'forwards',
                  zIndex: `${count - i}`,
                }}
              >
                <div
                  className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-[var(--gray-200)] bg-white transition-transform hover:scale-105 w-full h-full"
                  style={{ transform: `rotate(${angle / 4}deg)`, position: 'relative' }}
                >
                  <Image
                    src={src}
                    alt={`Project showcase ${i + 1}`}
                    fill
                    className="block w-full h-full object-cover"
                    draggable={false}
                    sizes="120px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content positioned below the arc */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-40 md:-mt-52 lg:-mt-64">
        <div className="text-center max-w-2xl px-6 opacity-0 arc-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          {/* Badge — Outline style (Webflow) */}
          <div
            className="inline-flex items-center mb-8 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase"
            style={{
              border: '1px solid var(--color-outline-gray)',
              borderRadius: '4px',
              color: 'var(--color-slate-gray)',
              backgroundColor: 'transparent',
            }}
          >
            {badge}
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, var(--text-heading-lg))',
              fontWeight: '600',
              color: 'var(--color-ink-black)',
              lineHeight: 'var(--leading-heading-lg)',
              letterSpacing: 'var(--tracking-heading-lg)',
              fontFamily: 'var(--font-inter), sans-serif',
              margin: '0 0 20px',
            }}
          >
            {headline}
          </h1>
          <p
            style={{
              fontSize: 'var(--text-subheading)',
              color: 'var(--color-webflow-blue)',
              lineHeight: 'var(--leading-subheading)',
              margin: '0 0 36px',
            }}
          >
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Primary CTA — Webflow Blue, 4px radius */}
            <a
              href={primaryBtnHref}
              style={{
                backgroundColor: 'var(--color-webflow-blue)',
                color: 'var(--color-canvas-white)',
                padding: '10px 20px',
                borderRadius: 'var(--radius-buttons)',
                fontSize: 'var(--text-body)',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1px solid var(--color-webflow-blue)',
                transition: 'background-color 0.15s ease',
              }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0f5fd4'; e.currentTarget.style.borderColor = '#0f5fd4'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-webflow-blue)'; e.currentTarget.style.borderColor = 'var(--color-webflow-blue)'; }}
            >
              {primaryBtnText}
            </a>
            {/* Ghost CTA — Webflow Blue hover */}
            <a
              href={secondaryBtnHref}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-ink-black)',
                padding: '10px 20px',
                borderRadius: 'var(--radius-buttons)',
                fontSize: 'var(--text-body)',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1px solid var(--color-ink-black)',
                transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-ink-black)';
                e.currentTarget.style.color = 'var(--color-canvas-white)';
                e.currentTarget.style.borderColor = 'var(--color-webflow-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-ink-black)';
                e.currentTarget.style.borderColor = 'var(--color-ink-black)';
              }}
            >
              {secondaryBtnText}
            </a>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes arc-fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 50%);
          }
        }
        @keyframes arc-fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .arc-fade-in-up {
          animation-name: arc-fade-in-up;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
        .arc-fade-in {
          animation-name: arc-fade-in;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
      `}</style>
    </section>
  );
};



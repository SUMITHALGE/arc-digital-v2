'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
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
  radiusMd = 340,
  radiusSm = 220,
  cardSizeLg = 120,
  cardSizeMd = 90,
  cardSizeSm = 68,
  className = '',
  headline = 'Build websites that look premium and generate real business growth',
  subheadline = 'Arc Digital Solutions creates fast, SEO-first websites designed to attract traffic, convert leads, and help businesses grow.',
  primaryBtnText = 'Start Project',
  primaryBtnHref = 'https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions',
  secondaryBtnText = 'View Work',
  secondaryBtnHref = '/work',
  badge = 'SEO Driven • Web Development • Digital Growth',
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });
  const hasMounted = useRef(false);

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

    if (!hasMounted.current) {
      hasMounted.current = true;
      requestAnimationFrame(() => {
        handleResize();
      });
    }

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section className={`relative overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink-black)] min-h-screen flex flex-col ${className}`}>
      {/* Arc image ring */}
      <div
        className="relative mx-auto w-full"
        style={{ height: `${Math.round(dimensions.radius * 1.2)}px` }}
      >
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {images.map((src, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.round(Math.cos(angleRad) * dimensions.radius * 1000) / 1000;
            const y = Math.round(Math.sin(angleRad) * dimensions.radius * 1000) / 1000;
            const isAboveFold = i < 3;

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
                  animationDelay: `${i * 80}ms`,
                  animationFillMode: 'forwards',
                  zIndex: `${count - i}`,
                  willChange: 'opacity, transform',
                }}
              >
                <div
                  className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-[var(--gray-200)] bg-[var(--color-canvas-white)] w-full h-full"
                  style={{ transform: `rotate(${angle / 4}deg)`, position: 'relative' }}
                >
                  <Image
                    src={src}
                    alt={`Project showcase ${i + 1}`}
                    fill
                    className="block w-full h-full object-cover"
                    draggable={false}
                    sizes="(max-width: 640px) 68px, (max-width: 1024px) 90px, 120px"
                    priority={isAboveFold}
                    loading={isAboveFold ? undefined : 'lazy'}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content below arc */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 -mt-40 md:-mt-52 lg:-mt-64">
        <div
          className="text-center max-w-2xl w-full px-4 sm:px-6 opacity-0 arc-fade-in"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center mb-6 sm:mb-8 px-3 py-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase"
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
              fontSize: 'clamp(1.6rem, 4.5vw, var(--text-heading-lg))',
              fontWeight: '600',
              color: 'var(--color-ink-black)',
              lineHeight: 'var(--leading-heading-lg)',
              letterSpacing: 'var(--tracking-heading-lg)',
              fontFamily: 'var(--font-inter), sans-serif',
              margin: '0 0 16px',
            }}
          >
            {headline}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, var(--text-subheading))',
              color: 'var(--color-starbucks-green)',
              lineHeight: 'var(--leading-subheading)',
              margin: '0 0 28px',
            }}
          >
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={primaryBtnHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--color-starbucks-green)',
                color: '#ffffff',
                padding: '11px 24px',
                borderRadius: 'var(--radius-buttons)',
                fontSize: 'var(--text-body)',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1px solid var(--color-starbucks-green)',
                transition: 'background-color 0.15s ease',
                width: '100%',
                maxWidth: '220px',
                textAlign: 'center' as const,
              }}
            >
              {primaryBtnText}
            </a>
            <a
              href={secondaryBtnHref}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-ink-black)',
                padding: '11px 24px',
                borderRadius: 'var(--radius-buttons)',
                fontSize: 'var(--text-body)',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1px solid var(--color-ink-black)',
                transition: 'background-color 0.2s ease, color 0.2s ease',
                width: '100%',
                maxWidth: '220px',
                textAlign: 'center' as const,
              }}
            >
              {secondaryBtnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

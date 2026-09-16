"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Show after 2 seconds
    const showTimer = setTimeout(() => setVisible(true), 2000);
    // Stop pulse after 6 seconds
    const pulseTimer = setTimeout(() => setPulse(false), 6000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <a
      href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20ARC%20Digital%20Solutions"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ARC Digital Solutions on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "50px",
        padding: "12px 20px 12px 14px",
        boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "14px",
        fontFamily: "var(--font-inter), sans-serif",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform: visible ? "scale(1) translateY(0)" : "scale(0.5) translateY(40px)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.07) translateY(-2px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.55)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1) translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(37,211,102,0.45)";
      }}
    >
      {/* Pulse ring */}
      {pulse && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50px",
            border: "2px solid #25D366",
            animation: "wa-pulse 1.5s ease-out infinite",
            pointerEvents: "none",
          }}
        />
      )}

      {/* WhatsApp Icon */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.557 4.121 1.532 5.854L.057 23.882a.5.5 0 0 0 .61.61l6.083-1.49A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.371l-.361-.214-3.737.915.944-3.64-.235-.374A9.861 9.861 0 0 1 2.1 12c0-5.468 4.432-9.9 9.9-9.9 5.468 0 9.9 4.432 9.9 9.9 0 5.468-4.432 9.9-9.9 9.9z" />
      </svg>

      {/* Label */}
      <span>Free Consultation</span>

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </a>
  );
}

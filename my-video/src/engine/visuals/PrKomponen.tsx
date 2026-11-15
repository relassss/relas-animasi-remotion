import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { tema } from "../tema";

export const PR = {
  oranye: "#F0592F",
  teal: "#19B394",
  kuning: "#F2B83B",
  navy: "#1B2538",
  navy2: "#27334D",
};

const k = (v: number) => Math.max(0, Math.min(1, v));

export const useMasuk = (delay = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 110 } });
};

export const Aks: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ color: PR.oranye }}>{children}</span>
);

export const Judul: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const m = useMasuk(delay);
  return (
    <div
      style={{
        position: "absolute", left: 110, top: 300, width: 520,
        fontFamily: tema.font, fontSize: 84, fontWeight: 800, lineHeight: 1.08,
        color: "#fff", textShadow: "0 4px 14px rgba(0,0,0,0.35)",
        opacity: k(m), transform: `translateY(${(1 - k(m)) * 40}px)`,
      }}
    >
      {children}
    </div>
  );
};

export const Pill: React.FC<{
  x: number; y: number; tx: number; ty: number; teks: string; delay?: number; gelap?: boolean;
}> = ({ x, y, tx, ty, teks, delay = 0, gelap = true }) => {
  const m = k(useMasuk(delay));
  const w = teks.length * 18 + 44;
  return (
    <>
      <svg viewBox="0 0 1080 1920" style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1920, opacity: m }}>
        <line x1={x + w / 2} y1={y + 30} x2={tx} y2={ty} stroke="#fff" strokeWidth={3} />
        <circle cx={tx} cy={ty} r={9} fill="#fff" stroke={PR.navy} strokeWidth={4} />
      </svg>
      <div
        style={{
          position: "absolute", left: x, top: y, padding: "10px 22px", borderRadius: 14,
          fontFamily: tema.font, fontSize: 30, fontWeight: 700,
          background: gelap ? "#14181f" : "#fff", color: gelap ? "#fff" : PR.navy,
          opacity: m, transform: `scale(${0.8 + 0.2 * m})`, transformOrigin: "left center",
        }}
      >
        {teks}
      </div>
    </>
  );
};

export const Sumber: React.FC<{ x: number; y: number; teks: string; delay?: number }> = ({ x, y, teks, delay = 0 }) => {
  const m = k(useMasuk(delay));
  return (
    <div
      style={{
        position: "absolute", left: x, top: y, padding: "6px 14px", borderRadius: 8,
        fontFamily: "Menlo, Consolas, 'Courier New', monospace", fontSize: 26,
        background: "rgba(255,255,255,0.88)", color: "#444", opacity: m,
      }}
    >
      {teks}
    </div>
  );
};

export const LatarDiagram: React.FC = () => (
  <svg viewBox="0 0 1080 1920" style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1920 }}>
    <defs>
      <linearGradient id="prNavy" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={PR.navy} />
        <stop offset="1" stopColor={PR.navy2} />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="1080" height="1920" fill="url(#prNavy)" />
  </svg>
);

export const RuangLatar: React.FC = () => (
  <svg viewBox="0 0 1080 1920" style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1920 }}>
    <defs>
      <linearGradient id="prDinding" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#8DB7D6" />
        <stop offset="1" stopColor="#6F9CBF" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="1080" height="1000" fill="url(#prDinding)" />
    <rect x="660" y="330" width="320" height="380" rx="8" fill="#F5F7FA" />
    <rect x="676" y="346" width="288" height="348" fill="#BFE0F5" />
    <circle cx="900" cy="410" r="30" fill="#F7D154" />
    <path d="M676 694 L676 600 Q760 540 820 600 Q880 650 964 590 L964 694 Z" fill="#9AD3A0" />
    <rect x="816" y="346" width="8" height="348" fill="#F5F7FA" />
    <rect x="676" y="516" width="288" height="8" fill="#F5F7FA" />
    <rect x="60" y="760" width="300" height="14" fill="#7C4624" />
    <rect x="84" y="690" width="36" height="70" rx="4" fill="#F0592F" />
    <rect x="126" y="710" width="30" height="50" rx="4" fill="#F2B83B" />
    <rect x="162" y="700" width="34" height="60" rx="4" fill="#19B394" />
    <rect x="260" y="720" width="60" height="40" rx="8" fill="#E8DCC8" />
    <path d="M290 720 Q270 680 262 668 M290 720 Q292 676 296 660 M290 720 Q310 684 326 672" stroke="#4E9E5C" strokeWidth="8" fill="none" strokeLinecap="round" />
    <rect x="0" y="1000" width="1080" height="40" fill="#B5733F" />
    <rect x="0" y="1040" width="1080" height="880" fill="#8A5028" />
    <rect x="30" y="1070" width="505" height="380" rx="10" fill="#9A5B30" />
    <rect x="545" y="1070" width="505" height="380" rx="10" fill="#9A5B30" />
    <rect x="30" y="1470" width="505" height="380" rx="10" fill="#9A5B30" />
    <rect x="545" y="1470" width="505" height="380" rx="10" fill="#9A5B30" />
    <rect x="220" y="1100" width="120" height="14" rx="7" fill="#E5C9A0" />
    <rect x="740" y="1100" width="120" height="14" rx="7" fill="#E5C9A0" />
    <rect x="220" y="1500" width="120" height="14" rx="7" fill="#E5C9A0" />
    <rect x="740" y="1500" width="120" height="14" rx="7" fill="#E5C9A0" />
  </svg>
);

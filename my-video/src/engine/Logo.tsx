import React from "react";

export const LogoIsi: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="ltGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#7FE8D5" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="#0A1224" />
    <g transform="translate(50 50)">
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x="-4.5" y="-41" width="9" height="12" rx="1.5" fill="url(#ltGrad)" transform={`rotate(${i * 30})`} />
      ))}
      <circle r="35" fill="url(#ltGrad)" />
      <circle r="26" fill="#0A1224" />
      {[0, 60, 120].map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <ellipse rx="21" ry="8.5" fill="none" stroke="#fff" strokeWidth="1.8" />
          <circle cx="21" cy="0" r="2.6" fill="#fff" />
        </g>
      ))}
      <circle r="7.5" fill="#0A1224" stroke="#fff" strokeWidth="1.5" />
      <text y="3.6" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" fontFamily="Inter, Arial, sans-serif">?</text>
    </g>
  </g>
);

export const Logo: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: "block" }}>
    <LogoIsi />
  </svg>
);

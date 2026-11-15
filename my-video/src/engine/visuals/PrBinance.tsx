import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { tema } from "../tema";
import { Aks, Judul, Pill, PR, RuangLatar, useMasuk } from "./PrKomponen";

const k = (v: number) => Math.max(0, Math.min(1, v));

export const PrLowonganPalsu: React.FC = () => {
  const frame = useCurrentFrame();
  const mCard = k(useMasuk(6));
  const mFile = useMasuk(45);
  const s = 0.92 + 0.08 * mCard;
  const fileY = interpolate(k(mFile), [0, 1], [-140, 0]);
  const goyang = Math.sin(frame / 7) * 8;
  const f = tema.font;
  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1920, overflow: "hidden" }}>
      <RuangLatar />
      <Judul>
        Tawaran kerja
        <br />
        <Aks>bagus</Aks>?
      </Judul>
      <svg viewBox="0 0 1080 1920" style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1920 }}>
        <rect x="340" y="580" width="400" height="380" rx="24" fill="#2B3445" />
        <rect x="356" y="596" width="368" height="348" rx="10" fill="#F6F8FB" />
        <rect x="300" y="960" width="480" height="40" rx="12" fill="#D9DEE4" />
        <g opacity={mCard} transform={`translate(540 770) scale(${s}) translate(-540 -770)`}>
          <rect x="356" y="596" width="368" height="48" rx="10" fill="#E9EEF5" />
          <circle cx="382" cy="620" r="7" fill="#F0592F" />
          <circle cx="404" cy="620" r="7" fill="#F2B83B" />
          <circle cx="426" cy="620" r="7" fill="#19B394" />
          <text x="380" y="706" fontFamily={f} fontSize="32" fontWeight="800" fill={PR.navy}>Tawaran Kerja</text>
          <text x="380" y="752" fontFamily={f} fontSize="28" fontWeight="600" fill="#55607A">Senior Developer</text>
          <text x="380" y="792" fontFamily={f} fontSize="26" fill="#55607A">Remote, gaji besar</text>
          <rect x="650" y="672" width="60" height="42" rx="8" fill={PR.oranye} />
          <path d="M650 680 L680 702 L710 680" stroke="#fff" strokeWidth="5" fill="none" strokeLinejoin="round" />
          <rect x="380" y="830" width="150" height="56" rx="14" fill={PR.teal} />
          <text x="455" y="868" textAnchor="middle" fontFamily={f} fontSize="30" fontWeight="700" fill="#fff">Lamar</text>
        </g>
        <g transform={`translate(800 ${760 + fileY})`} opacity={k(mFile)}>
          <path d="M0 0 H90 L130 40 V170 H0 Z" fill="#fff" stroke={PR.navy} strokeWidth="5" strokeLinejoin="round" />
          <path d="M90 0 V40 H130" fill="none" stroke={PR.navy} strokeWidth="5" strokeLinejoin="round" />
          <text x="65" y="80" textAnchor="middle" fontFamily={f} fontSize="40" fontWeight="800" fill={PR.navy}>{"</>"}</text>
          <rect x="20" y="104" width="90" height="38" rx="8" fill={PR.oranye} />
          <text x="65" y="132" textAnchor="middle" fontFamily={f} fontSize="26" fontWeight="700" fill="#fff">.zip</text>
          <path d={`M65 ${196 + goyang} V${250 + goyang} M40 ${226 + goyang} L65 ${253 + goyang} L90 ${226 + goyang}`} stroke={PR.teal} strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
      <Pill x={715} y={690} tx={840} ty={762} teks="tugas coding" delay={70} />
    </div>
  );
};

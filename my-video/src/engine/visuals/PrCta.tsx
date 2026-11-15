import { LogoIsi } from "../Logo";
import React from "react";
import { useCurrentFrame } from "remotion";
import { tema } from "../tema";
import { LatarDiagram, Pill, PR, useMasuk, Isi } from "./PrKomponen";

const k = (v: number) => Math.max(0, Math.min(1, v));
const S: React.CSSProperties = { position: "absolute", left: 0, top: 0, width: 1080, height: 1920 };

export const PrCta: React.FC = () => {
  const frame = useCurrentFrame();
  const m = k(useMasuk(8));
  const sudah = frame >= 60;
  const ring = k((frame - 60) / 14);
  const bel = sudah ? Math.sin(frame / 3) * 16 * (1 - k((frame - 120) / 60)) : 0;
  const f = tema.font;
  return (
    <div style={{ ...S, overflow: "hidden" }}>
      <LatarDiagram />
      <Isi skala={1.1} oy={40}>
        <svg viewBox="0 0 1080 1920" style={S}>
          <g opacity={m} transform={`translate(0 ${(1 - m) * 40})`}>
            <rect x="140" y="640" width="800" height="300" rx="28" fill="#F6F8FB" />
            <g transform="translate(190 690) scale(1.4)"><LogoIsi /></g>
            <text x="360" y="750" fontFamily={f} fontSize="46" fontWeight="800" fill={PR.navy}>Yakali Lu Tau</text>
            <text x="360" y="796" fontFamily={f} fontSize="30" fill="#55607A">Channel YouTube</text>
            <rect x="360" y="830" width="270" height="64" rx="32" fill={sudah ? "#D9DEE4" : "#E5484D"} />
            <text x="495" y="873" textAnchor="middle" fontFamily={f} fontSize="30" fontWeight="700" fill={sudah ? PR.navy : "#fff"}>{sudah ? "Terdaftar" : "Berlangganan"}</text>
            {sudah ? <circle cx="495" cy="862" r={30 + ring * 70} fill="none" stroke={PR.teal} strokeWidth="6" opacity={1 - ring} /> : null}
          </g>
          <g transform={`translate(830 862) rotate(${bel})`} opacity={m}>
            <path d="M-26 20 Q-26 -6 -16 -16 Q-12 -30 0 -32 Q12 -30 16 -16 Q26 -6 26 20 Z" fill={PR.kuning} stroke="#fff" strokeWidth="4" />
            <circle cx="0" cy="32" r="8" fill={PR.kuning} />
          </g>
        </svg>
      </Isi>
      <Pill x={640} y={1000} tx={859} ty={925} teks="aktifkan lonceng" delay={90} />
    </div>
  );
};

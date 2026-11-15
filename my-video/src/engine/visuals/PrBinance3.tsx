import React from "react";
import { useCurrentFrame } from "remotion";
import { tema } from "../tema";
import { Aks, Judul, LatarDiagram, Pill, PR, useMasuk } from "./PrKomponen";

const k = (v: number) => Math.max(0, Math.min(1, v));
const W: React.CSSProperties = { position: "absolute", left: 0, top: 0, width: 1080, height: 1920, overflow: "hidden" };
const S: React.CSSProperties = { position: "absolute", left: 0, top: 0, width: 1080, height: 1920 };

const Berkas: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x} ${y}) scale(0.9)`}>
    <path d="M0 0 H70 L100 30 V130 H0 Z" fill="#fff" stroke={PR.navy} strokeWidth="5" strokeLinejoin="round" />
    <rect x="12" y="78" width="76" height="30" rx="7" fill={PR.oranye} />
    <text x="50" y="100" textAnchor="middle" fontFamily={tema.font} fontSize="22" fontWeight="700" fill="#fff">.zip</text>
  </g>
);

export const PrTugasMalware: React.FC = () => {
  const frame = useCurrentFrame();
  const m = k(useMasuk(8));
  const l = k(useMasuk(35));
  const g = Math.sin(frame / 5) * 10;
  const f = tema.font;
  return (
    <div style={W}>
      <LatarDiagram />
      <Judul>
        Isinya
        <br />
        <Aks>malware</Aks>
      </Judul>
      <svg viewBox="0 0 1080 1920" style={S}>
        <g opacity={m}>
          <Berkas x={160} y={720} />
        </g>
        <g opacity={l}>
          <path d="M300 790 H380 M358 766 L384 790 L358 814" stroke={PR.kuning} strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="420" y="640" width="420" height="300" rx="22" fill={PR.navy2} stroke="#fff" strokeWidth="6" />
          <rect x="380" y="950" width="500" height="28" rx="12" fill="#D9DEE4" />
          <path d="M630 700 L720 860 H540 Z" fill="#E5484D" stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
          <text x="630" y="842" textAnchor="middle" fontFamily={f} fontSize="80" fontWeight="800" fill="#fff">!</text>
          <circle cx={480 + g} cy="900" r="10" fill="#E5484D" />
          <circle cx={790 - g} cy="700" r="10" fill="#E5484D" />
          <circle cx={770 + g} cy="900" r="10" fill="#E5484D" />
        </g>
      </svg>
      <Pill x={600} y={1020} tx={630} ty={830} teks="program jahat" delay={70} />
    </div>
  );
};

export const PrPerangkatTerpisah: React.FC = () => {
  const a = k(useMasuk(8));
  const b = k(useMasuk(32));
  const c = k(useMasuk(52));
  return (
    <div style={W}>
      <LatarDiagram />
      <Judul>
        Uji di
        <br />
        perangkat
        <br />
        <Aks>terpisah</Aks>
      </Judul>
      <svg viewBox="0 0 1080 1920" style={S}>
        <g opacity={a}>
          <rect x="130" y="700" width="340" height="240" rx="18" fill={PR.navy2} stroke="#fff" strokeWidth="6" />
          <rect x="100" y="950" width="400" height="26" rx="12" fill="#D9DEE4" />
          <Berkas x={255} y={770} />
        </g>
        <g opacity={b}>
          <rect x="610" y="700" width="340" height="240" rx="18" fill={PR.navy2} stroke="#fff" strokeWidth="6" />
          <rect x="580" y="950" width="400" height="26" rx="12" fill="#D9DEE4" />
          <Berkas x={735} y={770} />
        </g>
        <g opacity={c} transform={`translate(440 712) scale(${0.7 + 0.3 * c})`}>
          <circle cx="0" cy="0" r="36" fill="#E5484D" />
          <path d="M-14 -14 L14 14 M14 -14 L-14 14" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
        </g>
        <g opacity={c} transform={`translate(920 712) scale(${0.7 + 0.3 * c})`}>
          <circle cx="0" cy="0" r="36" fill={PR.teal} />
          <path d="M-16 0 L-5 12 L16 -12" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
      <Pill x={130} y={1010} tx={300} ty={955} teks="laptop kerja" delay={60} />
      <Pill x={640} y={1010} tx={780} ty={955} teks="perangkat uji" delay={75} />
    </div>
  );
};

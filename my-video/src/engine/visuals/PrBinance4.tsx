import React from "react";
import { tema } from "../tema";
import { Aks, Judul, LatarDiagram, Pill, PR, useMasuk } from "./PrKomponen";

const k = (v: number) => Math.max(0, Math.min(1, v));
const W: React.CSSProperties = { position: "absolute", left: 0, top: 0, width: 1080, height: 1920, overflow: "hidden" };
const S: React.CSSProperties = { position: "absolute", left: 0, top: 0, width: 1080, height: 1920 };

export const PrCekResmi: React.FC = () => {
  const m = k(useMasuk(8));
  const r1 = k(useMasuk(30));
  const r2 = k(useMasuk(46));
  const r3 = k(useMasuk(62));
  const f = tema.font;
  const baris = [
    { t: "Alamat situs", v: r1, y: 740 },
    { t: "Akun resmi", v: r2, y: 830 },
    { t: "Lowongan terdaftar", v: r3, y: 920 },
  ];
  return (
    <div style={W}>
      <LatarDiagram />
      <Judul>
        Cek jalur
        <br />
        <Aks>resmi</Aks>
      </Judul>
      <svg viewBox="0 0 1080 1920" style={S}>
        <g opacity={m} transform={`translate(0 ${(1 - m) * 40})`}>
          <rect x="140" y="600" width="800" height="420" rx="28" fill="#F6F8FB" />
          <rect x="140" y="600" width="800" height="64" rx="28" fill="#E9EEF5" />
          <circle cx="184" cy="632" r="8" fill={PR.oranye} />
          <circle cx="208" cy="632" r="8" fill={PR.kuning} />
          <circle cx="232" cy="632" r="8" fill={PR.teal} />
          <rect x="260" y="614" width="560" height="38" rx="19" fill="#fff" />
          <rect x="282" y="628" width="18" height="14" rx="3" fill={PR.teal} />
          <path d="M285 628 V623 a6 6 0 0 1 12 0 V628" stroke={PR.teal} strokeWidth="3" fill="none" />
          <text x="318" y="641" fontFamily={f} fontSize="22" fill="#55607A">https://...</text>
        </g>
        {baris.map((b) => (
          <g key={b.t} opacity={b.v} transform={`translate(${(1 - b.v) * -30} 0)`}>
            <circle cx="200" cy={b.y} r="24" fill={PR.teal} />
            <path d={`M188 ${b.y} L197 ${b.y + 9} L214 ${b.y - 10}`} stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="250" y={b.y + 12} fontFamily={f} fontSize="34" fontWeight="700" fill={PR.navy}>{b.t}</text>
          </g>
        ))}
      </svg>
      <Pill x={640} y={520} tx={790} ty={633} teks="jalur resmi" delay={80} gelap={false} />
    </div>
  );
};

export const PrRisiko: React.FC = () => {
  const m = k(useMasuk(8));
  const s = k(useMasuk(40));
  const f = tema.font;
  return (
    <div style={W}>
      <LatarDiagram />
      <Judul>
        Bukan
        <br />
        <Aks>jaminan</Aks>
      </Judul>
      <svg viewBox="0 0 1080 1920" style={S}>
        <g opacity={m} transform={`translate(540 800) scale(${0.85 + 0.15 * m}) translate(-540 -800)`}>
          <path d="M540 600 L710 668 V820 Q710 930 540 1010 Q370 930 370 820 V668 Z" fill={PR.teal} stroke="#fff" strokeWidth="6" strokeLinejoin="round" />
          <text x="540" y="830" textAnchor="middle" fontFamily={f} fontSize="84" fontWeight="800" fill="#fff">100%</text>
        </g>
        <path d="M430 770 L650 880" stroke="#E5484D" strokeWidth="14" strokeLinecap="round" opacity={s} strokeDasharray="260" strokeDashoffset={(1 - s) * 260} />
      </svg>
      <Pill x={640} y={1040} tx={600} ty={850} teks="kurangi risiko" delay={70} />
    </div>
  );
};

import React from "react";
import { tema } from "../tema";
import { Aks, Judul, LatarDiagram, Pill, PR, useMasuk } from "./PrKomponen";

const k = (v: number) => Math.max(0, Math.min(1, v));
const W: React.CSSProperties = { position: "absolute", left: 0, top: 0, width: 1080, height: 1920, overflow: "hidden" };
const S: React.CSSProperties = { position: "absolute", left: 0, top: 0, width: 1080, height: 1920 };

export const PrRekruterPalsu: React.FC = () => {
  const m = k(useMasuk(8));
  const c = k(useMasuk(40));
  const f = tema.font;
  return (
    <div style={W}>
      <LatarDiagram />
      <Judul>
        Rekruter
        <br />
        <Aks>palsu</Aks>?
      </Judul>
      <svg viewBox="0 0 1080 1920" style={S}>
        <g opacity={m} transform={`translate(0 ${(1 - m) * 40})`}>
          <rect x="140" y="600" width="760" height="330" rx="28" fill="#F6F8FB" />
          <circle cx="260" cy="740" r="70" fill={PR.teal} />
          <circle cx="260" cy="722" r="26" fill="#fff" />
          <path d="M214 790 Q260 740 306 790 Z" fill="#fff" />
          <text x="360" y="720" fontFamily={f} fontSize="44" fontWeight="800" fill={PR.navy}>Rina, HR</text>
          <text x="360" y="770" fontFamily={f} fontSize="30" fill="#55607A">Talent Recruiter</text>
          <rect x="360" y="800" width="220" height="56" rx="14" fill={PR.teal} />
          <text x="470" y="838" textAnchor="middle" fontFamily={f} fontSize="28" fontWeight="700" fill="#fff">Terhubung</text>
        </g>
        <g opacity={c} transform={`translate(790 ${660 - (1 - c) * 20})`}>
          <circle cx="0" cy="0" r="34" fill={PR.kuning} />
          <path d="M-16 0 L-5 12 L16 -12" stroke={PR.navy} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
      <Pill x={640} y={520} tx={790} ty={660} teks="tampak nyata" delay={55} gelap={false} />
    </div>
  );
};

export const PrCeoPalsuChat: React.FC = () => {
  const m = k(useMasuk(8));
  const b1 = k(useMasuk(30));
  const b2 = k(useMasuk(55));
  const f = tema.font;
  return (
    <div style={W}>
      <LatarDiagram />
      <Judul>
        <Aks>CEO</Aks>
        <br />
        dadakan
      </Judul>
      <svg viewBox="0 0 1080 1920" style={S}>
        <g opacity={m} transform={`translate(0 ${(1 - m) * 40})`}>
          <rect x="330" y="580" width="420" height="540" rx="44" fill="#0F1626" stroke="#fff" strokeWidth="6" />
          <rect x="350" y="600" width="380" height="80" rx="24" fill={PR.navy2} />
          <circle cx="392" cy="640" r="24" fill={PR.kuning} />
          <text x="432" y="652" fontFamily={f} fontSize="30" fontWeight="700" fill="#fff">CEO</text>
        </g>
        <g opacity={b1} transform={`translate(0 ${(1 - b1) * 24})`}>
          <rect x="360" y="710" width="320" height="84" rx="22" fill="#E9EEF5" />
          <text x="382" y="762" fontFamily={f} fontSize="26" fontWeight="600" fill={PR.navy}>Tolong unduh ini ya</text>
        </g>
        <g opacity={b2} transform={`translate(0 ${(1 - b2) * 24})`}>
          <rect x="360" y="820" width="300" height="110" rx="22" fill="#E9EEF5" />
          <rect x="384" y="838" width="56" height="74" rx="8" fill="#fff" stroke={PR.navy} strokeWidth="4" />
          <text x="412" y="884" textAnchor="middle" fontFamily={f} fontSize="22" fontWeight="800" fill={PR.navy}>{"</>"}</text>
          <text x="460" y="886" fontFamily={f} fontSize="30" fontWeight="700" fill={PR.navy}>tugas.zip</text>
        </g>
      </svg>
      <Pill x={700} y={520} tx={690} ty={640} teks="CEO palsu" delay={75} gelap={false} />
    </div>
  );
};

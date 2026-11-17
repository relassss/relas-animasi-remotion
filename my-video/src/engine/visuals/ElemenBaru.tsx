import React from "react";
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing} from "remotion";

const W = {latar: "#0b1220", teks: "#f4f6fa", redup: "#8892a6", aksen: "#2de2e6", garis: "#1c2a44"};

export const PenandaTetap: React.FC<{kategori?: string; sub?: string; aksen?: string}> = ({
  kategori = "KAS NEGARA", sub = "tanpa pajak", aksen = W.aksen,
}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 12], [0, 1], {extrapolateRight: "clamp"});
  return (
    <AbsoluteFill style={{opacity: o, pointerEvents: "none"}}>
      <div style={{position: "absolute", left: 40, top: 30}}>
        <div style={{fontSize: 22, color: W.redup, letterSpacing: 2}}>{sub}</div>
        <div style={{fontSize: 34, fontWeight: 800, color: W.teks, letterSpacing: 1}}>{kategori}</div>
        <div style={{width: 60, height: 4, background: aksen, marginTop: 8, borderRadius: 2}} />
      </div>
      <svg width="64" height="64" viewBox="0 0 64 64" style={{position: "absolute", left: 36, bottom: 24}}>
        <circle cx="32" cy="32" r="29" fill="#2a3550" stroke={W.redup} strokeWidth="3" />
        <text x="32" y="40" textAnchor="middle" fontSize="22" fontWeight="800" fill={W.teks}>Rp</text>
      </svg>
      <svg width="40" height="40" viewBox="0 0 40 40" style={{position: "absolute", right: 36, bottom: 30}}>
        <circle cx="20" cy="20" r="18" fill={aksen} />
        <text x="20" y="27" textAnchor="middle" fontSize="24" fontWeight="900" fill={W.latar}>?</text>
      </svg>
    </AbsoluteFill>
  );
};

export type BarItem = {label: string; nilai: number; aksen?: boolean};
export const BarTumpuk: React.FC<{angka?: string; kata?: string; bar?: BarItem[]; kategori?: string}> = ({
  angka = "85%", kata = "pendapatan negara dari pajak",
  bar = [{label: "PAJAK", nilai: 85, aksen: true}, {label: "LAINNYA", nilai: 15}],
  kategori = "KAS NEGARA",
}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const maks = Math.max(...bar.map((b) => b.nilai));
  const gA = spring({frame: f, fps, config: {damping: 14, stiffness: 90}});
  return (
    <AbsoluteFill style={{background: W.latar, fontFamily: "Inter, Arial, sans-serif"}}>
      <PenandaTetap kategori={kategori} />
      <div style={{position: "absolute", top: 110, width: "100%", textAlign: "center",
        fontSize: 150, fontWeight: 900, color: W.aksen,
        transform: `translateY(${(1 - gA) * 80}px) scale(${0.8 + 0.2 * gA})`, opacity: gA}}>
        {angka}
      </div>
      <div style={{position: "absolute", top: 290, width: "100%", textAlign: "center", fontSize: 30, color: W.teks}}>{kata}</div>
      <div style={{position: "absolute", top: 350, left: 80, right: 80}}>
        {bar.map((b, i) => {
          const s = spring({frame: f - 14 - i * 8, fps, config: {damping: 16, stiffness: 110}});
          return (
            <div key={i} style={{display: "flex", alignItems: "center", marginBottom: 14, opacity: s}}>
              <div style={{width: 130, fontSize: 22, color: W.redup, fontWeight: 700}}>{b.label}</div>
              <div style={{height: 34, width: `${(b.nilai / maks) * 100 * s * 0.75}%`, borderRadius: 6,
                background: b.aksen ? W.aksen : W.garis}} />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export const TeksHurufPerHuruf: React.FC<{teks?: string; kataAksen?: number; kategori?: string}> = ({
  teks = "tanpa pajak sisa Rp460 T", kataAksen = 2, kategori = "KAS NEGARA",
}) => {
  const f = useCurrentFrame();
  const kata = teks.split(" ");
  let idx = 0;
  const acak = "ABCDEFGHJKLMNPRSTUWY";
  return (
    <AbsoluteFill style={{background: W.latar, fontFamily: "Inter, Arial, sans-serif"}}>
      <PenandaTetap kategori={kategori} />
      <div style={{position: "absolute", top: 160, left: 60, right: 60, textAlign: "center",
        fontSize: 84, fontWeight: 900, lineHeight: 1.1, color: W.teks}}>
        {kata.map((k, ki) => (
          <span key={ki} style={{color: ki === kataAksen ? W.aksen : W.teks, marginRight: 22, display: "inline-block"}}>
            {k.split("").map((c) => {
              const mulai = 4 + idx * 2;
              idx++;
              const t = f - mulai;
              if (t < 0) return <span key={idx} style={{opacity: 0}}>{c}</span>;
              const jadi = t >= 5;
              const ch = jadi ? c : acak[(idx * 7 + f * 13) % acak.length];
              const y = interpolate(t, [0, 6], [30, 0], {extrapolateRight: "clamp", easing: Easing.out(Easing.cubic)});
              return <span key={idx} style={{display: "inline-block", transform: `translateY(${y}px)`}}>{ch}</span>;
            })}
          </span>
        ))}
      </div>
    </AbsoluteFill>
  );
};

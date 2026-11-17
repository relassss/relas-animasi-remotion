import React from "react";
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";

export const PilihanAkhir: React.FC<{pertanyaan?: string; pilihan?: string[]}> = ({
  pertanyaan = "Menurut kamu, mana yang paling penting?",
  pilihan = ["Pilihan A", "Pilihan B", "Pilihan C"],
}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const gT = spring({frame: f, fps, config: {damping: 14, stiffness: 90}});
  const denyut = 1 + 0.03 * Math.sin(f / 6);
  return (
    <AbsoluteFill style={{background: "#0b1220", fontFamily: "Inter, Arial, sans-serif"}}>
      <div style={{position: "absolute", top: 70, left: 50, right: 50, textAlign: "center",
        fontSize: 52, fontWeight: 900, lineHeight: 1.15, color: "#f4f6fa",
        opacity: gT, transform: `translateY(${(1 - gT) * 60}px)`}}>
        {pertanyaan}
      </div>
      <div style={{position: "absolute", top: 270, left: 60, right: 60}}>
        {pilihan.map((p, i) => {
          const s = spring({frame: f - 20 - i * 10, fps, config: {damping: 15, stiffness: 120}});
          return (
            <div key={i} style={{display: "flex", alignItems: "center", marginBottom: 18,
              padding: "14px 20px", borderRadius: 16, background: "#14203a", border: "2px solid #1c2a44",
              opacity: s, transform: `translateX(${(1 - s) * -120}px)`}}>
              <div style={{width: 52, height: 52, borderRadius: 26, background: "#2de2e6", color: "#0b1220",
                fontSize: 30, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center",
                marginRight: 20, transform: `scale(${denyut})`}}>
                {String.fromCharCode(65 + i)}
              </div>
              <div style={{fontSize: 34, fontWeight: 700, color: "#f4f6fa"}}>{p}</div>
            </div>
          );
        })}
      </div>
      <div style={{position: "absolute", bottom: 40, width: "100%", textAlign: "center", fontSize: 26,
        color: "#8892a6", opacity: interpolate(f, [50, 70], [0, 1], {extrapolateRight: "clamp"})}}>
        jawab di komentar
      </div>
    </AbsoluteFill>
  );
};

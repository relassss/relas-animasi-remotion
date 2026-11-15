import React from "react";
import { Logo } from "./Logo";

export const Watermark: React.FC = () => (
  <div
    style={{
      position: "absolute", top: 170, right: 56, display: "flex", alignItems: "center", gap: 12,
      opacity: 0.9, fontFamily: "Poppins, Inter, 'Segoe UI', Arial, sans-serif",
      fontSize: 30, fontWeight: 600, color: "#fff", textShadow: "0 2px 6px rgba(0,0,0,0.5)",
    }}
  >
    <Logo size={44} />
    @yakalilutau
  </div>
);

import React from "react";

export const Watermark: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 170,
      right: 56,
      display: "flex",
      alignItems: "center",
      gap: 12,
      opacity: 0.85,
      fontFamily: "Poppins, Inter, 'Segoe UI', Arial, sans-serif",
      fontSize: 30,
      fontWeight: 600,
      color: "#fff",
      textShadow: "0 2px 6px rgba(0,0,0,0.5)",
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        background: "#fff",
        color: "#1b2538",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        fontWeight: 800,
      }}
    >
      Y
    </div>
    @yakalilutau
  </div>
);

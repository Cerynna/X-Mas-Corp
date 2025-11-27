import React from "react";

export const PandarenMaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage rond panda */}
    <ellipse cx="24" cy="24" rx="13" ry="13" fill="#F3F4F6" stroke="#222" strokeWidth="2" />
    {/* Taches yeux */}
    <ellipse cx="18" cy="24" rx="4" ry="5" fill="#222" opacity="0.7" />
    <ellipse cx="30" cy="24" rx="4" ry="5" fill="#222" opacity="0.7" />
    {/* Yeux verts */}
    <ellipse cx="20" cy="24" rx="1.2" ry="1.5" fill="#22C55E" />
    <ellipse cx="28" cy="24" rx="1.2" ry="1.5" fill="#22C55E" />
    {/* Nez rond */}
    <ellipse cx="24" cy="30" rx="2" ry="1.2" fill="#222" />
    {/* Bouche souriante */}
    <path d="M21 34 Q24 36 27 34" stroke="#222" strokeWidth="1.5" fill="none" />
    {/* Oreilles rondes */}
    <ellipse cx="10" cy="14" rx="3" ry="3" fill="#222" />
    <ellipse cx="38" cy="14" rx="3" ry="3" fill="#222" />
  </svg>
)
import React from "react";

export const BloodElfFemaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage pâle et fin */}
    <ellipse cx="24" cy="24" rx="12" ry="15" fill="#F3E1C7" stroke="#F59E42" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="10" ry="13" fill="#FDE68A" opacity="0.5" />
    {/* Cheveux blonds longs */}
    <path d="M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16" fill="#FDE047" stroke="#F59E42" strokeWidth="1" />
    {/* Sourcils fins */}
    <rect x="16" y="19" width="5" height="1" rx="0.5" fill="#F59E42" />
    <rect x="27" y="19" width="5" height="1" rx="0.5" fill="#F59E42" />
    {/* Yeux verts */}
    <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#22C55E" />
    <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#22C55E" />
    {/* Nez fin */}
    <rect x="23" y="26" width="2" height="3" rx="1" fill="#FDE68A" />
    {/* Bouche souriante */}
    <path d="M21 32 Q24 35 27 32" stroke="#F59E42" strokeWidth="1.5" fill="none" />
    {/* Oreilles pointues */}
    <ellipse cx="8" cy="20" rx="3" ry="7" fill="#F3E1C7" stroke="#F59E42" strokeWidth="1" />
    <ellipse cx="40" cy="20" rx="3" ry="7" fill="#F3E1C7" stroke="#F59E42" strokeWidth="1" />
  </svg>
)
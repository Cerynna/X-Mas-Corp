import React from "react";

export const GoblinFemaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage vert pointu */}
    <ellipse cx="24" cy="24" rx="12" ry="13" fill="#22C55E" stroke="#166534" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="10" ry="11" fill="#A3E635" opacity="0.5" />
    {/* Cheveux violets */}
    <path d="M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16" fill="#A78BFA" stroke="#166534" strokeWidth="1" />
    {/* Sourcils fins */}
    <rect x="16" y="19" width="4" height="1" rx="0.5" fill="#166534" />
    <rect x="28" y="19" width="4" height="1" rx="0.5" fill="#166534" />
    {/* Yeux oranges */}
    <ellipse cx="20" cy="24" rx="1.2" ry="1.7" fill="#F97316" />
    <ellipse cx="28" cy="24" rx="1.2" ry="1.7" fill="#F97316" />
    {/* Nez pointu */}
    <rect x="23" y="26" width="2" height="4" rx="1" fill="#A3E635" />
    {/* Bouche souriante */}
    <path d="M21 32 Q24 35 27 32" stroke="#166534" strokeWidth="1.5" fill="none" />
    {/* Oreilles pointues */}
    <ellipse cx="8" cy="20" rx="3" ry="7" fill="#22C55E" stroke="#166534" strokeWidth="1" />
    <ellipse cx="40" cy="20" rx="3" ry="7" fill="#22C55E" stroke="#166534" strokeWidth="1" />
  </svg>
)
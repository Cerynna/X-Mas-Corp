import React from "react";

export const DwarfMaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage rond */}
    <ellipse cx="24" cy="24" rx="12" ry="13" fill="#E7C9A9" stroke="#A67C52" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="10" ry="11" fill="#D1B08A" opacity="0.5" />
    {/* Cheveux et sourcils épais */}
    <path d="M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16" fill="#7C4A03" stroke="#4B2E09" strokeWidth="1" />
    <rect x="16" y="19" width="5" height="2" rx="1" fill="#7C4A03" />
    <rect x="27" y="19" width="5" height="2" rx="1" fill="#7C4A03" />
    {/* Yeux */}
    <ellipse cx="20" cy="24" rx="1.2" ry="1.7" fill="#222" />
    <ellipse cx="28" cy="24" rx="1.2" ry="1.7" fill="#222" />
    <ellipse cx="20" cy="25" rx="0.4" ry="0.5" fill="#fff" />
    <ellipse cx="28" cy="25" rx="0.4" ry="0.5" fill="#fff" />
    {/* Nez large */}
    <rect x="22" y="26" width="4" height="3" rx="2" fill="#D1B08A" />
    {/* Bouche moustache */}
    <path d="M19 32 Q24 30 29 32" stroke="#7C4A03" strokeWidth="2" fill="none" />
    {/* Barbe épaisse */}
    <ellipse cx="24" cy="36" rx="7" ry="4" fill="#7C4A03" stroke="#4B2E09" strokeWidth="1" />
  </svg>
)
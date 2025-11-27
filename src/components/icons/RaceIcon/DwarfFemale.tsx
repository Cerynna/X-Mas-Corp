import React from "react";

export const DwarfFemaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage rond */}
    <ellipse cx="24" cy="24" rx="12" ry="13" fill="#E7C9A9" stroke="#A67C52" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="10" ry="11" fill="#D1B08A" opacity="0.5" />
    {/* Cheveux longs et épais */}
    <path d="M12 16 Q24 4 36 16 Q34 12 24 14 Q14 12 12 16" fill="#A67C52" stroke="#7C4A03" strokeWidth="1" />
    {/* Sourcils épais */}
    <rect x="16" y="19" width="5" height="2" rx="1" fill="#7C4A03" />
    <rect x="27" y="19" width="5" height="2" rx="1" fill="#7C4A03" />
    {/* Yeux */}
    <ellipse cx="20" cy="24" rx="1.2" ry="1.7" fill="#222" />
    <ellipse cx="28" cy="24" rx="1.2" ry="1.7" fill="#222" />
    <ellipse cx="20" cy="25" rx="0.4" ry="0.5" fill="#fff" />
    <ellipse cx="28" cy="25" rx="0.4" ry="0.5" fill="#fff" />
    {/* Nez large */}
    <rect x="22" y="26" width="4" height="3" rx="2" fill="#D1B08A" />
    {/* Bouche souriante */}
    <path d="M21 32 Q24 35 27 32" stroke="#A67C52" strokeWidth="1.5" fill="none" />
    {/* Tresses */}
    <ellipse cx="18" cy="38" rx="2" ry="1.5" fill="#A67C52" />
    <ellipse cx="30" cy="38" rx="2" ry="1.5" fill="#A67C52" />
  </svg>
)
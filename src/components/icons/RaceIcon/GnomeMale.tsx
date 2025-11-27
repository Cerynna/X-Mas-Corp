import React from "react";

export const GnomeMaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage rond et petit */}
    <ellipse cx="24" cy="24" rx="10" ry="11" fill="#F3E1C7" stroke="#BCA37F" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="8" ry="9" fill="#E2CFA3" opacity="0.5" />
    {/* Cheveux touffus */}
    <path d="M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16" fill="#EAB308" stroke="#B45309" strokeWidth="1" />
    {/* Sourcils épais */}
    <rect x="16" y="19" width="4" height="1" rx="0.5" fill="#B45309" />
    <rect x="28" y="19" width="4" height="1" rx="0.5" fill="#B45309" />
    {/* Yeux ronds */}
    <ellipse cx="20" cy="24" rx="1.2" ry="1.2" fill="#222" />
    <ellipse cx="28" cy="24" rx="1.2" ry="1.2" fill="#222" />
    <ellipse cx="20" cy="25" rx="0.4" ry="0.4" fill="#fff" />
    <ellipse cx="28" cy="25" rx="0.4" ry="0.4" fill="#fff" />
    {/* Nez rond */}
    <ellipse cx="24" cy="27" rx="1.5" ry="1" fill="#E2CFA3" />
    {/* Bouche souriante */}
    <path d="M21 32 Q24 34 27 32" stroke="#BCA37F" strokeWidth="1.5" fill="none" />
    {/* Oreilles petites */}
    <ellipse cx="12" cy="24" rx="2" ry="3" fill="#F3E1C7" stroke="#BCA37F" strokeWidth="1" />
    <ellipse cx="36" cy="24" rx="2" ry="3" fill="#F3E1C7" stroke="#BCA37F" strokeWidth="1" />
  </svg>
)
import React from "react";

export const OrcFemaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage vert massif */}
    <ellipse cx="24" cy="24" rx="13" ry="14" fill="#65A30D" stroke="#365314" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="11" ry="12" fill="#A3E635" opacity="0.5" />
    {/* Cheveux noirs longs */}
    <path d="M12 16 Q24 6 36 16 Q34 12 24 14 Q14 12 12 16" fill="#222" stroke="#365314" strokeWidth="1" />
    {/* Sourcils épais */}
    <rect x="16" y="19" width="5" height="2" rx="1" fill="#222" />
    <rect x="27" y="19" width="5" height="2" rx="1" fill="#222" />
    {/* Yeux rouges */}
    <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#DC2626" />
    <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#DC2626" />
    {/* Nez large */}
    <rect x="22" y="26" width="4" height="3" rx="2" fill="#A3E635" />
    {/* Bouche avec crocs */}
    <path d="M21 32 Q24 35 27 32" stroke="#365314" strokeWidth="1.5" fill="none" />
    <rect x="22" y="34" width="2" height="2" rx="1" fill="#fff" />
    <rect x="24" y="34" width="2" height="2" rx="1" fill="#fff" />
    {/* Menton massif */}
    <ellipse cx="24" cy="36" rx="3" ry="2" fill="#A3E635" />
  </svg>
)
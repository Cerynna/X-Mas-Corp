import React from "react";

export const TrollMaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage bleu allongé */}
    <ellipse cx="24" cy="24" rx="13" ry="15" fill="#38BDF8" stroke="#0EA5E9" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="11" ry="13" fill="#7DD3FC" opacity="0.5" />
    {/* Cheveux orange */}
    <path d="M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16" fill="#F97316" stroke="#EA580C" strokeWidth="1" />
    {/* Sourcils fins */}
    <rect x="16" y="19" width="5" height="1" rx="0.5" fill="#EA580C" />
    <rect x="27" y="19" width="5" height="1" rx="0.5" fill="#EA580C" />
    {/* Yeux jaunes */}
    <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#FBBF24" />
    <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#FBBF24" />
    {/* Nez long */}
    <rect x="23" y="26" width="2" height="5" rx="1" fill="#7DD3FC" />
    {/* Bouche avec crocs */}
    <path d="M21 32 Q24 35 27 32" stroke="#0EA5E9" strokeWidth="1.5" fill="none" />
    <rect x="22" y="34" width="2" height="2" rx="1" fill="#fff" />
    <rect x="24" y="34" width="2" height="2" rx="1" fill="#fff" />
    {/* Menton */}
    <ellipse cx="24" cy="36" rx="2" ry="1" fill="#7DD3FC" />
  </svg>
)
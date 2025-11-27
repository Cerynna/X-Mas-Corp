import React from "react";

export const UndeadMaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage gris cadavérique */}
    <ellipse cx="24" cy="24" rx="13" ry="14" fill="#D1D5DB" stroke="#6B7280" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="11" ry="12" fill="#9CA3AF" opacity="0.5" />
    {/* Cheveux verts */}
    <path d="M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16" fill="#22C55E" stroke="#6B7280" strokeWidth="1" />
    {/* Sourcils fins */}
    <rect x="16" y="19" width="5" height="1" rx="0.5" fill="#6B7280" />
    <rect x="27" y="19" width="5" height="1" rx="0.5" fill="#6B7280" />
    {/* Yeux jaunes */}
    <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#FBBF24" />
    <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#FBBF24" />
    {/* Nez */}
    <rect x="23" y="26" width="2" height="3" rx="1" fill="#9CA3AF" />
    {/* Bouche décharnée */}
    <path d="M21 32 Q24 30 27 32" stroke="#6B7280" strokeWidth="1.5" fill="none" />
    {/* Menton */}
    <ellipse cx="24" cy="36" rx="2" ry="1" fill="#9CA3AF" />
    {/* Cicatrice */}
    <path d="M18 28 Q20 30 22 28" stroke="#DC2626" strokeWidth="1" fill="none" />
  </svg>
)
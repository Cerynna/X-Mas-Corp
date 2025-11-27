import React from "react";

export const HumanFemaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage cartoon détaillé */}
    {/* Tête */}
    <ellipse cx="24" cy="24" rx="12" ry="14" fill="#FBE9D0" stroke="#A67C52" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="10" ry="12" fill="#EAD2B7" opacity="0.5" />
    {/* Cheveux longs stylisés */}
    <path d="M12 16 Q24 2 36 16 Q34 10 24 12 Q14 10 12 16" fill="#C19A6B" stroke="#A67C52" strokeWidth="1" />
    {/* Frange */}
    <ellipse cx="24" cy="16" rx="8" ry="3" fill="#C19A6B" />
    {/* Sourcils */}
    <rect x="18" y="19" width="4" height="1" rx="0.5" fill="#A67C52" />
    <rect x="26" y="19" width="4" height="1" rx="0.5" fill="#A67C52" />
    {/* Yeux expressifs */}
    <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#222" />
    <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#222" />
    <ellipse cx="20" cy="25" rx="0.5" ry="0.7" fill="#fff" />
    <ellipse cx="28" cy="25" rx="0.5" ry="0.7" fill="#fff" />
    {/* Nez */}
    <rect x="23" y="26" width="2" height="3" rx="1" fill="#EAD2B7" />
    {/* Bouche souriante */}
    <path d="M21 32 Q24 35 27 32" stroke="#A67C52" strokeWidth="1.5" fill="none" />
    {/* Menton */}
    <ellipse cx="24" cy="36" rx="2" ry="1" fill="#EAD2B7" opacity="0.7" />
  </svg>
);
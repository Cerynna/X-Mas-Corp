import React from "react";

export const HumanMaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage cartoon détaillé */}
    {/* Tête */}
    <ellipse cx="24" cy="24" rx="12" ry="14" fill="#FBE9D0" stroke="#A67C52" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="10" ry="12" fill="#EAD2B7" opacity="0.5" />
    {/* Cheveux stylisés */}
    <path d="M14 16 Q24 4 34 16 Q32 10 24 12 Q16 10 14 16" fill="#6B4F1D" stroke="#4B2E09" strokeWidth="1" />
    {/* Sourcils */}
    <rect x="18" y="19" width="4" height="1" rx="0.5" fill="#4B2E09" />
    <rect x="26" y="19" width="4" height="1" rx="0.5" fill="#4B2E09" />
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
import React from "react";

export const DraeneiMaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage bleu, menton carré */}
    <ellipse cx="24" cy="24" rx="12" ry="14" fill="#A7C7E7" stroke="#3B82F6" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="10" ry="12" fill="#60A5FA" opacity="0.5" />
    {/* Cornes */}
    <path d="M16 10 Q12 2 20 12" stroke="#64748B" strokeWidth="2" fill="none" />
    <path d="M32 10 Q36 2 28 12" stroke="#64748B" strokeWidth="2" fill="none" />
    {/* Cheveux blancs */}
    <path d="M14 16 Q24 6 34 16 Q32 12 24 14 Q16 12 14 16" fill="#F3F4F6" stroke="#64748B" strokeWidth="1" />
    {/* Sourcils */}
    <rect x="18" y="19" width="4" height="1" rx="0.5" fill="#64748B" />
    <rect x="26" y="19" width="4" height="1" rx="0.5" fill="#64748B" />
    {/* Yeux lumineux */}
    <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#FBBF24" />
    <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#FBBF24" />
    {/* Nez */}
    <rect x="23" y="26" width="2" height="3" rx="1" fill="#60A5FA" />
    {/* Bouche neutre */}
    <path d="M21 32 Q24 33 27 32" stroke="#64748B" strokeWidth="1.5" fill="none" />
    {/* Menton carré */}
    <rect x="22" y="36" width="4" height="2" rx="1" fill="#60A5FA" />
  </svg>
)
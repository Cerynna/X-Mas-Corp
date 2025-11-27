import React from "react";

export const NightElfMaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage allongé */}
    <ellipse cx="24" cy="24" rx="12" ry="15" fill="#B6D1C2" stroke="#3A6351" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="10" ry="13" fill="#8DB7A2" opacity="0.5" />
    {/* Cheveux violets */}
    <path d="M14 16 Q24 2 34 16 Q32 10 24 12 Q16 10 14 16" fill="#7C3AED" stroke="#4B2E09" strokeWidth="1" />
    {/* Sourcils très longs */}
    <rect x="14" y="18" width="8" height="1" rx="0.5" fill="#3A6351" />
    <rect x="26" y="18" width="8" height="1" rx="0.5" fill="#3A6351" />
    {/* Yeux brillants */}
    <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#A7F3D0" />
    <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#A7F3D0" />
    {/* Nez fin */}
    <rect x="23" y="26" width="2" height="3" rx="1" fill="#8DB7A2" />
    {/* Bouche neutre */}
    <path d="M21 32 Q24 33 27 32" stroke="#3A6351" strokeWidth="1.5" fill="none" />
    {/* Oreilles pointues */}
    <ellipse cx="8" cy="20" rx="3" ry="7" fill="#B6D1C2" stroke="#3A6351" strokeWidth="1" />
    <ellipse cx="40" cy="20" rx="3" ry="7" fill="#B6D1C2" stroke="#3A6351" strokeWidth="1" />
  </svg>
)
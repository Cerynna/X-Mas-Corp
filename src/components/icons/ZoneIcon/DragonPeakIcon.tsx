import React from "react";

const DragonPeakIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="64" height="64" rx="12" fill="#A1B6E2" />
    {/* Montagne */}
    <polygon points="16,54 32,18 48,54" fill="#7A8CA6" stroke="#4F3A6B" strokeWidth="2" />
    {/* Dragon stylisé */}
    <path d="M32 32 Q36 28 40 32 Q44 36 40 40 Q36 44 32 40 Q28 36 32 32" fill="#E2A147" stroke="#FFD700" strokeWidth="1.5" />
    {/* Ailes du dragon */}
    <path d="M32 32 Q30 28 28 32 Q26 36 28 40 Q30 44 32 40" fill="#E2A147" opacity="0.7" />
    {/* Trésor */}
    <ellipse cx="32" cy="50" rx="8" ry="3" fill="#FFD700" />
    <ellipse cx="32" cy="50" rx="4" ry="1.5" fill="#FFB347" />
    {/* Pièces d'or */}
    <ellipse cx="36" cy="52" rx="1" ry="0.5" fill="#FFD700" />
    <ellipse cx="28" cy="52" rx="1" ry="0.5" fill="#FFD700" />
    {/* Nuages */}
    <ellipse cx="24" cy="24" rx="6" ry="2" fill="#E2E2E2" />
    <ellipse cx="44" cy="22" rx="5" ry="2" fill="#E2E2E2" />
    {/* Effet magique */}
    <ellipse cx="32" cy="16" rx="8" ry="3" fill="#FFD700" opacity="0.2" />
  </svg>
);

export default DragonPeakIcon;

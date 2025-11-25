import React from "react";

const ElementalPlainsIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="64" height="64" rx="12" fill="#A1D7E2" />
    {/* Sol */}
    <ellipse cx="32" cy="54" rx="22" ry="7" fill="#7FC0C4" />
    {/* Rocher élémentaire */}
    <ellipse cx="32" cy="38" rx="10" ry="6" fill="#E2E2E2" stroke="#B0B0B0" strokeWidth="2" />
    {/* Flammes */}
    <path d="M28 38 Q29 34 32 36 Q33 34 36 38" fill="#FFB347" stroke="#E2A147" strokeWidth="1" />
    {/* Goutte d'eau */}
    <ellipse cx="40" cy="32" rx="2" ry="4" fill="#47B3FF" stroke="#A1D7E2" strokeWidth="1" />
    {/* Vent */}
    <path d="M20 30 Q24 28 28 30" stroke="#B6E2F2" strokeWidth="2" fill="none" />
    {/* Fleurs */}
    <ellipse cx="24" cy="48" rx="5" ry="2" fill="#7CC47F" />
    <ellipse cx="26" cy="50" rx="1" ry="0.5" fill="#FFD700" />
    <ellipse cx="22" cy="50" rx="1" ry="0.5" fill="#FFB347" />
    {/* Cailloux */}
    <ellipse cx="40" cy="57" rx="1.5" ry="0.8" fill="#B0B0B0" />
    {/* Effet magique */}
    <ellipse cx="32" cy="24" rx="6" ry="2" fill="#FFD700" opacity="0.3" />
  </svg>
);

export default ElementalPlainsIcon;

import React from "react";

const OccultMansionIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="64" height="64" rx="12" fill="#C1B6E2" />
    {/* Sol */}
    <ellipse cx="32" cy="54" rx="22" ry="7" fill="#A7A1BC" />
    {/* Manoir */}
    <rect x="18" y="28" width="28" height="18" rx="3" fill="#6B4F7A" stroke="#4F3A6B" strokeWidth="2" />
    <rect x="26" y="36" width="12" height="10" rx="2" fill="#8C7AA6" />
    {/* Porte mystique */}
    <rect x="30" y="44" width="4" height="6" rx="1.5" fill="#FFD700" />
    {/* Toit pointu */}
    <polygon points="18,28 32,14 46,28" fill="#4F3A6B" stroke="#6B4F7A" strokeWidth="2" />
    {/* Fenêtres */}
    <rect x="22" y="32" width="4" height="6" rx="1" fill="#E2E2E2" />
    <rect x="38" y="32" width="4" height="6" rx="1" fill="#E2E2E2" />
    {/* Arbres tordus */}
    <ellipse cx="12" cy="38" rx="3" ry="6" fill="#4F3A6B" />
    <ellipse cx="52" cy="38" rx="3" ry="6" fill="#4F3A6B" />
    {/* Buissons */}
    <ellipse cx="32" cy="50" rx="10" ry="3" fill="#7CC47F" />
    {/* Pierres */}
    <ellipse cx="24" cy="56" rx="2" ry="1" fill="#D9D9D9" />
    <ellipse cx="40" cy="57" rx="1.5" ry="0.8" fill="#B0B0B0" />
    {/* Effet mystique */}
    <ellipse cx="32" cy="24" rx="6" ry="2" fill="#B6E2F2" opacity="0.5" />
  </svg>
);

export default OccultMansionIcon;

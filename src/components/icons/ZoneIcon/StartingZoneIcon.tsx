import React from "react";

// Illustration simple, cartoon, forêt, sans texte
const StartingZoneIcon: React.FC = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fond vert clair */}
    <rect x="0" y="0" width="64" height="64" rx="12" fill="#B6E2A1" />
    {/* Sol */}
    <ellipse cx="32" cy="54" rx="22" ry="7" fill="#8DC07F" />
    {/* Arbre principal */}
    <ellipse cx="20" cy="32" rx="8" ry="10" fill="#4C9A2A" stroke="#2E6B1A" strokeWidth="2" />
    <rect x="17" y="38" width="6" height="12" rx="2" fill="#A67C52" />
    {/* Arbre secondaire */}
    <ellipse cx="44" cy="28" rx="6" ry="8" fill="#5CB85C" stroke="#4C9A2A" strokeWidth="1.5" />
    <rect x="41" y="34" width="5" height="8" rx="1.5" fill="#A67C52" />
    {/* Petit arbre */}
    <ellipse cx="12" cy="40" rx="4" ry="6" fill="#7CC47F" />
    <rect x="10" y="46" width="3" height="6" rx="1" fill="#A67C52" />
    {/* Buissons */}
    <ellipse cx="32" cy="44" rx="10" ry="4" fill="#7CC47F" />
    <ellipse cx="28" cy="50" rx="5" ry="2" fill="#7CC47F" />
    <ellipse cx="38" cy="50" rx="4" ry="2" fill="#7CC47F" />
    {/* Champignons */}
    <ellipse cx="24" cy="52" rx="1.2" ry="0.7" fill="#FFB347" />
    <ellipse cx="26" cy="53" rx="0.7" ry="0.4" fill="#FFD700" />
    {/* Fleurs */}
    <ellipse cx="40" cy="52" rx="1" ry="0.5" fill="#FFD700" />
    <ellipse cx="42" cy="53" rx="0.7" ry="0.4" fill="#FFB347" />
    {/* Quelques cailloux */}
    <ellipse cx="24" cy="56" rx="2" ry="1" fill="#D9D9D9" />
    <ellipse cx="40" cy="57" rx="1.5" ry="0.8" fill="#B0B0B0" />
    {/* Effet lumineux */}
    <ellipse cx="32" cy="20" rx="10" ry="3" fill="#FFD700" opacity="0.2" />
  </svg>
);

export default StartingZoneIcon;

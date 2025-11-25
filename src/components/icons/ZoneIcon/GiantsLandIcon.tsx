import React from "react";

const GiantsLandIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="64" height="64" rx="12" fill="#E2D6A1" />
    {/* Sol */}
    <ellipse cx="32" cy="54" rx="22" ry="7" fill="#C0B77F" />
    {/* Rocher géant fissuré */}
    <ellipse cx="32" cy="38" rx="12" ry="8" fill="#B0B0B0" stroke="#8C7AA6" strokeWidth="2" />
    <path d="M32 30 Q34 34 32 38 Q30 42 32 46" stroke="#8C7AA6" strokeWidth="1.5" />
    {/* Arbre géant */}
    <ellipse cx="48" cy="28" rx="7" ry="10" fill="#4C9A2A" stroke="#A67C52" strokeWidth="2" />
    <rect x="45" y="38" width="6" height="12" rx="2" fill="#A67C52" />
    {/* Champignons */}
    <ellipse cx="24" cy="50" rx="2" ry="1" fill="#FFB347" />
    <ellipse cx="22" cy="52" rx="1" ry="0.5" fill="#FFD700" />
    {/* Buissons */}
    <ellipse cx="20" cy="48" rx="6" ry="2" fill="#7CC47F" />
    {/* Cailloux */}
    <ellipse cx="40" cy="57" rx="1.5" ry="0.8" fill="#B0B0B0" />
    {/* Effet imposant */}
    <ellipse cx="32" cy="24" rx="8" ry="3" fill="#BCA77B" opacity="0.3" />
  </svg>
);

export default GiantsLandIcon;

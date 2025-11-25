import React from "react";

const BanditCampIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="64" height="64" rx="12" fill="#E2C6A1" />
    {/* Sol */}
    <ellipse cx="32" cy="54" rx="22" ry="7" fill="#BCA77B" />
    {/* Tente bandit principale */}
    <polygon points="20,40 32,20 44,40" fill="#A63A2B" stroke="#7C4A2A" strokeWidth="2" />
    <rect x="27" y="40" width="10" height="10" rx="2" fill="#7C4A2A" />
    {/* Détail tente : ficelle */}
    <line x1="32" y1="20" x2="32" y2="40" stroke="#E2C6A1" strokeWidth="1.5" />
    {/* Tente secondaire */}
    <polygon points="12,44 18,32 24,44" fill="#BCA77B" stroke="#A67C52" strokeWidth="1" />
    {/* Feu de camp */}
    <ellipse cx="32" cy="50" rx="4" ry="2" fill="#FFB347" />
    <rect x="30" y="52" width="4" height="2" rx="1" fill="#A67C52" />
    {/* Arbre sombre */}
    <ellipse cx="50" cy="32" rx="6" ry="8" fill="#4C5A2A" />
    <rect x="48" y="38" width="4" height="8" rx="1.5" fill="#A67C52" />
    {/* Buissons */}
    <ellipse cx="16" cy="48" rx="5" ry="2" fill="#7CC47F" />
    {/* Cailloux */}
    <ellipse cx="40" cy="57" rx="1.5" ry="0.8" fill="#B0B0B0" />
    {/* Sac de butin */}
    <ellipse cx="38" cy="46" rx="2" ry="1.2" fill="#FFD700" />
    <ellipse cx="36" cy="47" rx="1" ry="0.6" fill="#A67C52" />
  </svg>
);

export default BanditCampIcon;

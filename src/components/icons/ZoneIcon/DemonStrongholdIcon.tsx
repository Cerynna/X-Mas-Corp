import React from "react";

const DemonStrongholdIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="64" height="64" rx="12" fill="#E2A1A1" />
    {/* Sol */}
    <ellipse cx="32" cy="54" rx="22" ry="7" fill="#C07F7F" />
    {/* Forteresse */}
    <rect x="20" y="30" width="24" height="14" rx="2" fill="#7A2A2A" stroke="#A63A2B" strokeWidth="2" />
    {/* Tours */}
    <rect x="16" y="34" width="6" height="10" rx="1" fill="#A63A2B" />
    <rect x="42" y="34" width="6" height="10" rx="1" fill="#A63A2B" />
    {/* Portes */}
    <rect x="30" y="38" width="4" height="6" rx="1" fill="#E2E2E2" />
    {/* Flammes sur les tours */}
    <ellipse cx="19" cy="34" rx="2" ry="1" fill="#FFB347" />
    <ellipse cx="45" cy="34" rx="2" ry="1" fill="#FFB347" />
    {/* Crânes devant la porte */}
    <ellipse cx="32" cy="50" rx="1.2" ry="0.8" fill="#E2E2E2" />
    <ellipse cx="34" cy="50" rx="1" ry="0.6" fill="#E2E2E2" />
    {/* Fissures */}
    <path d="M24 38 Q26 40 28 38" stroke="#A63A2B" strokeWidth="1" />
    <path d="M40 38 Q42 40 44 38" stroke="#A63A2B" strokeWidth="1" />
    {/* Effet sombre */}
    <ellipse cx="32" cy="24" rx="6" ry="2" fill="#7A2A2A" opacity="0.3" />
  </svg>
);

export default DemonStrongholdIcon;

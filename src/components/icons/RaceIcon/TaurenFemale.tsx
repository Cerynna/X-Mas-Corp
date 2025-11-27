import React from "react";

export const TaurenFemaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage marron massif */}
    <ellipse cx="24" cy="24" rx="14" ry="15" fill="#A0522D" stroke="#4B2E09" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="12" ry="13" fill="#C68642" opacity="0.5" />
    {/* Cornes */}
    <ellipse cx="10" cy="12" rx="4" ry="8" fill="#F3F4F6" stroke="#4B2E09" strokeWidth="1" />
    <ellipse cx="38" cy="12" rx="4" ry="8" fill="#F3F4F6" stroke="#4B2E09" strokeWidth="1" />
    {/* Nez large */}
    <ellipse cx="24" cy="32" rx="4" ry="2" fill="#4B2E09" />
    {/* Yeux noirs */}
    <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#222" />
    <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#222" />
    {/* Bouche souriante */}
    <path d="M21 34 Q24 37 27 34" stroke="#4B2E09" strokeWidth="1.5" fill="none" />
    {/* Menton */}
    <ellipse cx="24" cy="38" rx="3" ry="1.5" fill="#C68642" />
    {/* Fleur rose sur l'oreille gauche */}
    <ellipse cx="10" cy="10" rx="1.2" ry="1.2" fill="#F472B6" />
    <ellipse cx="10" cy="10" rx="0.5" ry="0.5" fill="#BE185D" />
  </svg>
)
import React from "react";

export const WorgenFemaleIcon: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Visage loup */}
    <ellipse cx="24" cy="24" rx="13" ry="14" fill="#A3A3A3" stroke="#222" strokeWidth="2" />
    {/* Ombrage */}
    <ellipse cx="24" cy="26" rx="11" ry="12" fill="#6B7280" opacity="0.5" />
    {/* Museau */}
    <ellipse cx="24" cy="32" rx="6" ry="3" fill="#F3F4F6" stroke="#222" strokeWidth="1" />
    {/* Nez noir */}
    <ellipse cx="24" cy="33" rx="2" ry="1" fill="#222" />
    {/* Oreilles pointues */}
    <ellipse cx="10" cy="14" rx="3" ry="6" fill="#A3A3A3" stroke="#222" strokeWidth="1" />
    <ellipse cx="38" cy="14" rx="3" ry="6" fill="#A3A3A3" stroke="#222" strokeWidth="1" />
    {/* Yeux jaunes */}
    <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#FBBF24" />
    <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#FBBF24" />
    {/* Crocs */}
    <rect x="21" y="35" width="2" height="2" rx="1" fill="#fff" />
    <rect x="25" y="35" width="2" height="2" rx="1" fill="#fff" />
    {/* Sourcils fins */}
    <rect x="18" y="19" width="4" height="1" rx="0.5" fill="#6B7280" />
    <rect x="26" y="19" width="4" height="1" rx="0.5" fill="#6B7280" />
  </svg>
)
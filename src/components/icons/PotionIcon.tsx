import React from 'react';

interface PotionIconProps {
  liquidColor?: string;
  glassColor?: string;
  size?: number;
}

export const HealthPotionIcon: React.FC<PotionIconProps> = ({
  liquidColor = '#DC143C',
  glassColor = '#87CEEB',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bouteille en verre */}
    <path
      d="M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z"
      fill={glassColor}
      fillOpacity="0.3"
      stroke={glassColor}
      strokeWidth="0.8"
    />
    {/* Liquide rouge */}
    <path
      d="M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z"
      fill={liquidColor}
      opacity="0.8"
    />
    {/* Reflet sur le liquide */}
    <ellipse cx="12" cy="13" rx="2" ry="1" fill={liquidColor} opacity="0.4" />
    {/* Bouchon */}
    <rect x="10" y="2" width="4" height="1.5" fill="#8B4513" rx="0.5" />
    <rect x="10.5" y="3" width="3" height="0.5" fill="#654321" />
    {/* Reflet sur le verre */}
    <path
      d="M9 8L9 16"
      stroke="white"
      strokeWidth="0.5"
      opacity="0.5"
    />
  </svg>
);

export const ManaPotionIcon: React.FC<PotionIconProps> = ({
  liquidColor = '#4169E1',
  glassColor = '#87CEEB',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bouteille en verre */}
    <path
      d="M10 3L10 6L8 8L8 18C8 19 9 20 10 20L14 20C15 20 16 19 16 18L16 8L14 6L14 3L10 3Z"
      fill={glassColor}
      fillOpacity="0.3"
      stroke={glassColor}
      strokeWidth="0.8"
    />
    {/* Liquide bleu */}
    <path
      d="M8.5 12L8.5 18C8.5 18.5 9 19 10 19L14 19C15 19 15.5 18.5 15.5 18L15.5 12L8.5 12Z"
      fill={liquidColor}
      opacity="0.8"
    />
    {/* Particules magiques */}
    <circle cx="10" cy="14" r="0.5" fill="#E0FFFF" opacity="0.8" />
    <circle cx="13" cy="15" r="0.4" fill="#E0FFFF" opacity="0.8" />
    <circle cx="11.5" cy="16.5" r="0.3" fill="#E0FFFF" opacity="0.8" />
    {/* Bouchon */}
    <rect x="10" y="2" width="4" height="1.5" fill="#8B4513" rx="0.5" />
    <rect x="10.5" y="3" width="3" height="0.5" fill="#654321" />
    {/* Reflet sur le verre */}
    <path
      d="M9 8L9 16"
      stroke="white"
      strokeWidth="0.5"
      opacity="0.5"
    />
  </svg>
);

export const GenericPotionIcon: React.FC<PotionIconProps> = ({
  liquidColor = '#9370DB',
  glassColor = '#87CEEB',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bouteille en verre - forme ronde */}
    <ellipse
      cx="12"
      cy="13"
      rx="5"
      ry="6"
      fill={glassColor}
      fillOpacity="0.3"
      stroke={glassColor}
      strokeWidth="0.8"
    />
    {/* Liquide */}
    <ellipse
      cx="12"
      cy="14.5"
      rx="4.5"
      ry="4.5"
      fill={liquidColor}
      opacity="0.8"
    />
    {/* Col de la bouteille */}
    <rect x="11" y="6" width="2" height="2" fill={glassColor} fillOpacity="0.3" stroke={glassColor} strokeWidth="0.6" />
    {/* Bouchon */}
    <rect x="10.5" y="4.5" width="3" height="1.8" fill="#8B4513" rx="0.5" />
    {/* Reflet */}
    <ellipse cx="10" cy="12" rx="1.5" ry="2" fill="white" opacity="0.4" />
  </svg>
);

import React from 'react';

interface ArmorIconProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  size?: number;
}

export const HelmetIcon: React.FC<ArmorIconProps> = ({
  primaryColor = '#C0C0C0',
  secondaryColor = '#A9A9A9',
  accentColor = '#FFD700',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base du casque */}
    <path
      d="M8 12Q8 6 12 6Q16 6 16 12L16 16L8 16L8 12Z"
      fill={primaryColor}
      stroke={accentColor}
      strokeWidth="0.5"
    />
    {/* Visière */}
    <path
      d="M9 14L15 14"
      stroke={secondaryColor}
      strokeWidth="1"
    />
    {/* Décoration */}
    <circle cx="12" cy="9" r="1" fill={accentColor} />
    {/* Protège-nuque */}
    <path
      d="M8 16L8 18L16 18L16 16"
      fill={secondaryColor}
      stroke={accentColor}
      strokeWidth="0.3"
    />
  </svg>
);

export const ChestplateIcon: React.FC<ArmorIconProps> = ({
  primaryColor = '#C0C0C0',
  secondaryColor = '#A9A9A9',
  accentColor = '#FFD700',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps du plastron */}
    <path
      d="M9 6L9 18L15 18L15 6L12 4L9 6Z"
      fill={primaryColor}
      stroke={accentColor}
      strokeWidth="0.5"
    />
    {/* Épaulières */}
    <ellipse cx="8" cy="7" rx="2" ry="1.5" fill={secondaryColor} stroke={accentColor} strokeWidth="0.3" />
    <ellipse cx="16" cy="7" rx="2" ry="1.5" fill={secondaryColor} stroke={accentColor} strokeWidth="0.3" />
    {/* Détails centraux */}
    <line x1="12" y1="8" x2="12" y2="16" stroke={accentColor} strokeWidth="0.5" />
    <circle cx="12" cy="10" r="0.8" fill={accentColor} />
  </svg>
);

export const LeggingsIcon: React.FC<ArmorIconProps> = ({
  primaryColor = '#8B7355',
  secondaryColor = '#654321',
  accentColor = '#D4AF37',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ceinture */}
    <rect x="8" y="6" width="8" height="1.5" fill={accentColor} />
    {/* Jambe gauche */}
    <path
      d="M8 7.5L9 18L11 18L10 7.5L8 7.5Z"
      fill={primaryColor}
      stroke={secondaryColor}
      strokeWidth="0.3"
    />
    {/* Jambe droite */}
    <path
      d="M14 7.5L13 18L15 18L16 7.5L14 7.5Z"
      fill={primaryColor}
      stroke={secondaryColor}
      strokeWidth="0.3"
    />
    {/* Genouillères */}
    <ellipse cx="9.5" cy="13" rx="1" ry="1.5" fill={secondaryColor} />
    <ellipse cx="14.5" cy="13" rx="1" ry="1.5" fill={secondaryColor} />
  </svg>
);

export const BootsIcon: React.FC<ArmorIconProps> = ({
  primaryColor = '#8B4513',
  secondaryColor = '#654321',
  accentColor = '#D2691E',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Botte gauche */}
    <path
      d="M8 10L8 16L7 18L10 18L10 16L9 10L8 10Z"
      fill={primaryColor}
      stroke={secondaryColor}
      strokeWidth="0.5"
    />
    {/* Botte droite */}
    <path
      d="M14 10L14 16L13 18L16 18L16 16L15 10L14 10Z"
      fill={primaryColor}
      stroke={secondaryColor}
      strokeWidth="0.5"
    />
    {/* Lacets/détails */}
    <line x1="8.5" y1="12" x2="9.5" y2="12" stroke={accentColor} strokeWidth="0.3" />
    <line x1="8.5" y1="14" x2="9.5" y2="14" stroke={accentColor} strokeWidth="0.3" />
    <line x1="14.5" y1="12" x2="15.5" y2="12" stroke={accentColor} strokeWidth="0.3" />
    <line x1="14.5" y1="14" x2="15.5" y2="14" stroke={accentColor} strokeWidth="0.3" />
  </svg>
);

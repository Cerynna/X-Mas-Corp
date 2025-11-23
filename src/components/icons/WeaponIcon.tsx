import React from 'react';

interface WeaponIconProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  size?: number;
}

export const SwordIcon: React.FC<WeaponIconProps> = ({
  primaryColor = '#C0C0C0',
  secondaryColor = '#8B4513',
  accentColor = '#FFD700',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lame */}
    <path
      d="M19 3L5 17L7 19L21 5L19 3Z"
      fill={primaryColor}
      stroke={accentColor}
      strokeWidth="0.5"
    />
    {/* Garde */}
    <rect
      x="4"
      y="16"
      width="6"
      height="1.5"
      fill={accentColor}
      transform="rotate(45 4 16)"
    />
    {/* Poignée */}
    <path
      d="M3 19L5 17L4 18L3 19Z"
      fill={secondaryColor}
      stroke={accentColor}
      strokeWidth="0.3"
    />
    {/* Pommeau */}
    <circle cx="2.5" cy="19.5" r="1.2" fill={accentColor} />
  </svg>
);

export const StaffIcon: React.FC<WeaponIconProps> = ({
  primaryColor = '#8B4513',
  secondaryColor = '#4B0082',
  accentColor = '#9370DB',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bâton */}
    <line
      x1="6"
      y1="20"
      x2="18"
      y2="4"
      stroke={primaryColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Cristal au sommet */}
    <path
      d="M18 4L19.5 2.5L18 1L16.5 2.5L18 4Z"
      fill={accentColor}
      stroke={secondaryColor}
      strokeWidth="0.5"
    />
    {/* Effet magique */}
    <circle cx="18" cy="3" r="2.5" fill={accentColor} opacity="0.3" />
    <circle cx="18" cy="3" r="1.5" fill={accentColor} opacity="0.5" />
  </svg>
);

export const DaggerIcon: React.FC<WeaponIconProps> = ({
  primaryColor = '#696969',
  secondaryColor = '#2F4F4F',
  accentColor = '#A9A9A9',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lame courte */}
    <path
      d="M15 3L7 11L9 13L17 5L15 3Z"
      fill={primaryColor}
      stroke={accentColor}
      strokeWidth="0.5"
    />
    {/* Garde */}
    <rect
      x="6"
      y="11"
      width="4"
      height="1"
      fill={accentColor}
      transform="rotate(45 6 11)"
    />
    {/* Poignée */}
    <line
      x1="5.5"
      y1="13.5"
      x2="4"
      y2="15"
      stroke={secondaryColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const AxeIcon: React.FC<WeaponIconProps> = ({
  primaryColor = '#8B4513',
  secondaryColor = '#A9A9A9',
  accentColor = '#FFD700',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Manche */}
    <line
      x1="6"
      y1="20"
      x2="15"
      y2="8"
      stroke={primaryColor}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Lame de hache */}
    <path
      d="M14 8L18 5L20 8L17 11L14 8Z"
      fill={secondaryColor}
      stroke={accentColor}
      strokeWidth="0.5"
    />
    <path
      d="M15 8L19 10L18 12L14 10L15 8Z"
      fill={secondaryColor}
      stroke={accentColor}
      strokeWidth="0.5"
    />
  </svg>
);

export const BowIcon: React.FC<WeaponIconProps> = ({
  primaryColor = '#8B4513',
  secondaryColor = '#F5DEB3',
  accentColor = '#D2691E',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Arc */}
    <path
      d="M18 4Q20 12 18 20"
      stroke={primaryColor}
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Corde */}
    <path
      d="M18 4L16 12L18 20"
      stroke={secondaryColor}
      strokeWidth="0.5"
      fill="none"
    />
    {/* Flèche */}
    <line
      x1="4"
      y1="12"
      x2="16"
      y2="12"
      stroke={accentColor}
      strokeWidth="1"
    />
    <path
      d="M4 12L6 11L6 13L4 12Z"
      fill={accentColor}
    />
  </svg>
);

import React from 'react';

interface JewelryIconProps {
  primaryColor?: string;
  secondaryColor?: string;
  gemColor?: string;
  size?: number;
}

export const RingIcon: React.FC<JewelryIconProps> = ({
  primaryColor = '#FFD700',
  secondaryColor = '#DAA520',
  gemColor = '#4169E1',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Anneau */}
    <circle
      cx="12"
      cy="13"
      r="5"
      fill="none"
      stroke={primaryColor}
      strokeWidth="1.5"
    />
    <circle
      cx="12"
      cy="13"
      r="3.5"
      fill="none"
      stroke={secondaryColor}
      strokeWidth="0.5"
    />
    {/* Gemme */}
    <path
      d="M12 6L14 9L12 11L10 9L12 6Z"
      fill={gemColor}
      stroke={primaryColor}
      strokeWidth="0.5"
    />
    {/* Reflet de la gemme */}
    <path
      d="M11.5 7L12 8L11.5 8.5"
      stroke="white"
      strokeWidth="0.5"
      opacity="0.6"
    />
  </svg>
);

export const AmuletIcon: React.FC<JewelryIconProps> = ({
  primaryColor = '#FFD700',
  secondaryColor = '#DAA520',
  gemColor = '#8B008B',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Chaîne */}
    <path
      d="M8 4Q12 6 16 4"
      stroke={primaryColor}
      strokeWidth="1"
      fill="none"
    />
    <line x1="8" y1="4" x2="10" y2="10" stroke={primaryColor} strokeWidth="0.8" />
    <line x1="16" y1="4" x2="14" y2="10" stroke={primaryColor} strokeWidth="0.8" />
    {/* Pendentif */}
    <path
      d="M10 10L12 16L14 10L10 10Z"
      fill={secondaryColor}
      stroke={primaryColor}
      strokeWidth="0.5"
    />
    {/* Gemme centrale */}
    <ellipse cx="12" cy="12" rx="1.5" ry="2" fill={gemColor} />
    {/* Reflet */}
    <ellipse cx="11.5" cy="11.5" rx="0.5" ry="0.7" fill="white" opacity="0.6" />
  </svg>
);

export const NecklaceIcon: React.FC<JewelryIconProps> = ({
  primaryColor = '#C0C0C0',
  secondaryColor = '#A9A9A9',
  gemColor = '#FF1493',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Collier */}
    <path
      d="M6 8Q12 12 18 8"
      stroke={primaryColor}
      strokeWidth="1.2"
      fill="none"
    />
    <circle cx="6" cy="8" r="1" fill={secondaryColor} />
    <circle cx="12" cy="11" r="1" fill={secondaryColor} />
    <circle cx="18" cy="8" r="1" fill={secondaryColor} />
    {/* Gemme principale */}
    <circle cx="12" cy="14" r="2.5" fill={gemColor} stroke={primaryColor} strokeWidth="0.5" />
    {/* Reflet */}
    <circle cx="11.5" cy="13.5" r="0.8" fill="white" opacity="0.5" />
  </svg>
);

export const BraceletIcon: React.FC<JewelryIconProps> = ({
  primaryColor = '#FFD700',
  secondaryColor = '#DAA520',
  gemColor = '#00CED1',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bracelet */}
    <ellipse
      cx="12"
      cy="12"
      rx="6"
      ry="4"
      fill="none"
      stroke={primaryColor}
      strokeWidth="1.5"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="5"
      ry="3"
      fill="none"
      stroke={secondaryColor}
      strokeWidth="0.5"
    />
    {/* Gemmes incrustées */}
    <circle cx="12" cy="8" r="1" fill={gemColor} />
    <circle cx="8" cy="11" r="0.8" fill={gemColor} />
    <circle cx="16" cy="11" r="0.8" fill={gemColor} />
    <circle cx="12" cy="16" r="1" fill={gemColor} />
  </svg>
);

export const CrownIcon: React.FC<JewelryIconProps> = ({
  primaryColor = '#FFD700',
  secondaryColor = '#DAA520',
  gemColor = '#FF0000',
  size = 24,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base de la couronne */}
    <path
      d="M6 14L6 16L18 16L18 14L16 10L14 12L12 8L10 12L8 10L6 14Z"
      fill={primaryColor}
      stroke={secondaryColor}
      strokeWidth="0.5"
    />
    {/* Pointes */}
    <circle cx="8" cy="10" r="0.8" fill={secondaryColor} />
    <circle cx="12" cy="8" r="0.8" fill={secondaryColor} />
    <circle cx="16" cy="10" r="0.8" fill={secondaryColor} />
    {/* Gemmes */}
    <circle cx="9" cy="14" r="1" fill={gemColor} />
    <circle cx="12" cy="13" r="1.2" fill={gemColor} />
    <circle cx="15" cy="14" r="1" fill={gemColor} />
  </svg>
);

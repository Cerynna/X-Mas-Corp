import React from 'react';

interface MonsterIconProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  size?: number;
}

export const SkeletonIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#E8E8E8',
  secondaryColor = '#D3D3D3',
  accentColor = '#A9A9A9',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Crâne détaillé */}
    <ellipse cx="24" cy="16" rx="9" ry="10" fill={primaryColor} stroke={accentColor} strokeWidth="1.5" />
    
    {/* Structure osseuse du crâne */}
    <path d="M17 14Q24 13 31 14" stroke={accentColor} strokeWidth="0.8" opacity="0.5" />
    <path d="M16 18Q24 17 32 18" stroke={accentColor} strokeWidth="0.8" opacity="0.5" />
    
    {/* Orbites des yeux profondes */}
    <ellipse cx="20" cy="15" rx="2.5" ry="3.5" fill="black" />
    <ellipse cx="28" cy="15" rx="2.5" ry="3.5" fill="black" />
    {/* Lueur rouge maléfique dans les orbites */}
    <circle cx="20" cy="14.5" r="1.2" fill="#DC2626" opacity="0.9" />
    <circle cx="28" cy="14.5" r="1.2" fill="#DC2626" opacity="0.9" />
    <circle cx="20.5" cy="14" r="0.5" fill="#FCA5A5" opacity="0.8" />
    <circle cx="28.5" cy="14" r="0.5" fill="#FCA5A5" opacity="0.8" />
    
    {/* Fissures sur le crâne */}
    <line x1="17" y1="12" x2="19" y2="14" stroke={accentColor} strokeWidth="0.6" opacity="0.6" />
    <line x1="29" y1="12" x2="31" y2="14" stroke={accentColor} strokeWidth="0.6" opacity="0.6" />
    
    {/* Cavité nasale triangulaire */}
    <path d="M24 18L22 21L26 21Z" fill="black" />
    <path d="M23 21L22.5 22M25 21L25.5 22" stroke={accentColor} strokeWidth="0.5" opacity="0.5" />
    
    {/* Mâchoire avec dents détaillées */}
    <path d="M18 22Q24 23 30 22" stroke={accentColor} strokeWidth="1" fill="none" />
    {/* Dents supérieures */}
    <rect x="19" y="22" width="1.2" height="2.5" rx="0.2" fill={secondaryColor} stroke={accentColor} strokeWidth="0.3" />
    <rect x="21" y="22" width="1.2" height="2.5" rx="0.2" fill={secondaryColor} stroke={accentColor} strokeWidth="0.3" />
    <rect x="23" y="22" width="1.2" height="2.8" rx="0.2" fill={primaryColor} stroke={accentColor} strokeWidth="0.3" />
    <rect x="25" y="22" width="1.2" height="2.8" rx="0.2" fill={primaryColor} stroke={accentColor} strokeWidth="0.3" />
    <rect x="27" y="22" width="1.2" height="2.5" rx="0.2" fill={secondaryColor} stroke={accentColor} strokeWidth="0.3" />
    {/* Dents inférieures */}
    <rect x="20" y="24.5" width="1" height="2" rx="0.2" fill={secondaryColor} opacity="0.7" />
    <rect x="22" y="24.5" width="1" height="2" rx="0.2" fill={secondaryColor} opacity="0.7" />
    <rect x="26" y="24.5" width="1" height="2" rx="0.2" fill={secondaryColor} opacity="0.7" />
    
    {/* Colonne vertébrale articulée */}
    <rect x="22.5" y="26" width="3" height="2" rx="0.5" fill={primaryColor} stroke={accentColor} strokeWidth="0.5" />
    <circle cx="24" cy="27" r="1" fill={secondaryColor} />
    <rect x="22.5" y="28" width="3" height="2" rx="0.5" fill={primaryColor} stroke={accentColor} strokeWidth="0.5" />
    <circle cx="24" cy="29" r="1" fill={secondaryColor} />
    <rect x="22.5" y="30" width="3" height="2" rx="0.5" fill={primaryColor} stroke={accentColor} strokeWidth="0.5" />
    <circle cx="24" cy="31" r="1" fill={secondaryColor} />
    
    {/* Cage thoracique détaillée */}
    <ellipse cx="24" cy="35" rx="7" ry="6" fill="none" stroke={primaryColor} strokeWidth="1.8" />
    {/* Sternum */}
    <line x1="24" y1="30" x2="24" y2="40" stroke={primaryColor} strokeWidth="1.8" />
    {/* Côtes */}
    <path d="M19 32Q24 31 29 32" stroke={primaryColor} strokeWidth="1.2" fill="none" />
    <path d="M18 34Q24 33 30 34" stroke={primaryColor} strokeWidth="1.2" fill="none" />
    <path d="M18 36Q24 35 30 36" stroke={primaryColor} strokeWidth="1.2" fill="none" />
    <path d="M19 38Q24 37 29 38" stroke={primaryColor} strokeWidth="1.2" fill="none" />
    
    {/* Clavicules */}
    <line x1="18" y1="27" x2="24" y2="26" stroke={primaryColor} strokeWidth="1.5" />
    <line x1="30" y1="27" x2="24" y2="26" stroke={primaryColor} strokeWidth="1.5" />
    
    {/* Bras osseux avec articulations */}
    <line x1="18" y1="28" x2="14" y2="33" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="33" r="1.2" fill={secondaryColor} stroke={accentColor} strokeWidth="0.5" />
    <line x1="14" y1="33" x2="11" y2="38" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />
    
    <line x1="30" y1="28" x2="34" y2="33" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
    <circle cx="34" cy="33" r="1.2" fill={secondaryColor} stroke={accentColor} strokeWidth="0.5" />
    <line x1="34" y1="33" x2="37" y2="38" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />
    
    {/* Mains squelettiques */}
    <path d="M10 38L9 40M11 38L11 41M12 38L13 40" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M36 38L35 40M37 38L37 41M38 38L39 40" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
    
    {/* Bassin */}
    <ellipse cx="24" cy="41" rx="5" ry="3" fill="none" stroke={primaryColor} strokeWidth="1.5" />
    
    {/* Jambes */}
    <line x1="21" y1="42" x2="19" y2="46" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="27" y1="42" x2="29" y2="46" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />
    
    {/* Aura nécromantique */}
    <circle cx="24" cy="30" r="16" fill="#DC2626" opacity="0.05" />
    <circle cx="15" cy="20" r="1" fill="#DC2626" opacity="0.3" />
    <circle cx="33" cy="20" r="1" fill="#DC2626" opacity="0.3" />
  </svg>
);

export const GoblinIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#8FBC8F',
  secondaryColor = '#556B2F',
  accentColor = '#FFEB3B',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps */}
    <ellipse cx="24" cy="32" rx="9" ry="10" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Tête */}
    <circle cx="24" cy="18" r="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Grandes oreilles pointues */}
    <ellipse cx="15" cy="18" rx="3" ry="5" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
    <ellipse cx="33" cy="18" rx="3" ry="5" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
    {/* Yeux jaunes méchants */}
    <ellipse cx="21" cy="17" rx="2" ry="2.5" fill={accentColor} />
    <ellipse cx="27" cy="17" rx="2" ry="2.5" fill={accentColor} />
    <circle cx="21.5" cy="17" r="1" fill="black" />
    <circle cx="27.5" cy="17" r="1" fill="black" />
    {/* Nez crochu */}
    <path d="M24 18L24 21L25 21" fill={secondaryColor} />
    {/* Bouche méchante */}
    <path d="M20 22Q24 24 28 22" stroke={secondaryColor} strokeWidth="1" fill="none" />
    {/* Petites dents pointues */}
    <path d="M21 22L21 23" stroke="white" strokeWidth="0.5" />
    <path d="M27 22L27 23" stroke="white" strokeWidth="0.5" />
    {/* Bras courts */}
    <ellipse cx="16" cy="30" rx="2.5" ry="5" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
    <ellipse cx="32" cy="30" rx="2.5" ry="5" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
    {/* Taches/verrues */}
    <circle cx="20" cy="15" r="0.8" fill={secondaryColor} opacity="0.5" />
    <circle cx="26" cy="20" r="0.6" fill={secondaryColor} opacity="0.5" />
  </svg>
);

export const OrcIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#6B8E23',
  secondaryColor = '#556B2F',
  accentColor = '#FFD700',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps massif */}
    <ellipse cx="24" cy="34" rx="11" ry="10" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    {/* Tête large */}
    <ellipse cx="24" cy="17" rx="9" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    {/* Front proéminent */}
    <path d="M17 14Q24 12 31 14" fill={secondaryColor} opacity="0.3" />
    {/* Yeux rouges féroces */}
    <ellipse cx="20" cy="16" rx="2" ry="2.5" fill="#8B0000" />
    <ellipse cx="28" cy="16" rx="2" ry="2.5" fill="#8B0000" />
    <circle cx="20.5" cy="15.5" r="0.5" fill="#FF0000" />
    <circle cx="28.5" cy="15.5" r="0.5" fill="#FF0000" />
    {/* Défenses */}
    <path d="M20 21L19 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 21L29 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Bouche large */}
    <path d="M18 22Q24 25 30 22" stroke={secondaryColor} strokeWidth="1.5" fill="none" />
    {/* Cicatrices */}
    <line x1="26" y1="13" x2="29" y2="15" stroke={secondaryColor} strokeWidth="0.8" />
    <line x1="15" y1="18" x2="17" y2="20" stroke={secondaryColor} strokeWidth="0.8" />
    {/* Bras musclés */}
    <ellipse cx="14" cy="32" rx="3" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    <ellipse cx="34" cy="32" rx="3" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Armure/pendentif */}
    <circle cx="24" cy="28" r="2" fill={accentColor} stroke={secondaryColor} strokeWidth="0.5" />
  </svg>
);

export const StoneGiantIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#78716C',
  secondaryColor = '#57534E',
  accentColor = '#A8A29E',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps massif en pierre */}
    <rect x="16" y="26" width="16" height="18" rx="2" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    
    {/* Texture de pierre sur le corps (fissures) */}
    <line x1="18" y1="30" x2="22" y2="28" stroke={secondaryColor} strokeWidth="1" opacity="0.6" />
    <line x1="24" y1="32" x2="28" y2="30" stroke={secondaryColor} strokeWidth="1" opacity="0.6" />
    <line x1="20" y1="36" x2="24" y2="34" stroke={secondaryColor} strokeWidth="1" opacity="0.6" />
    <line x1="26" y1="38" x2="30" y2="36" stroke={secondaryColor} strokeWidth="1" opacity="0.6" />
    
    {/* Rochers/cristaux incrustés dans le torse */}
    <path d="M20 32L18 30L20 28L22 30Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.8" />
    <path d="M28 36L26 34L28 32L30 34Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.8" />
    
    {/* Tête massive rectangulaire en pierre */}
    <rect x="18" y="10" width="12" height="14" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2.5" />
    
    {/* Fissures sur la tête */}
    <line x1="20" y1="12" x2="23" y2="15" stroke={secondaryColor} strokeWidth="1.2" opacity="0.6" />
    <line x1="26" y1="13" x2="28" y2="16" stroke={secondaryColor} strokeWidth="1.2" opacity="0.6" />
    
    {/* Yeux lumineux dans les cavités */}
    <rect x="20" y="15" width="2.5" height="4" rx="0.5" fill="black" opacity="0.7" />
    <rect x="25.5" y="15" width="2.5" height="4" rx="0.5" fill="black" opacity="0.7" />
    <circle cx="21" cy="17" r="1" fill="#FCD34D" opacity="0.8" />
    <circle cx="26.5" cy="17" r="1" fill="#FCD34D" opacity="0.8" />
    <circle cx="21.3" cy="16.7" r="0.4" fill="#FEF3C7" />
    <circle cx="26.8" cy="16.7" r="0.4" fill="#FEF3C7" />
    
    {/* Bouche - simple fissure */}
    <rect x="21" y="21" width="6" height="1.5" rx="0.3" fill="black" opacity="0.6" />
    
    {/* Crête rocheuse sur la tête */}
    <path d="M22 10L20 7L22 8L24 6L26 8L28 7L26 10" fill={accentColor} stroke={secondaryColor} strokeWidth="1" />
    <path d="M20 7L19 5M24 6L24 4M28 7L29 5" stroke={secondaryColor} strokeWidth="1.2" strokeLinecap="round" />
    
    {/* Épaules massives en roche */}
    <rect x="12" y="24" width="6" height="8" rx="1" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    <rect x="30" y="24" width="6" height="8" rx="1" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    {/* Cristaux sur les épaules */}
    <path d="M14 26L13 24L15 25Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.5" />
    <path d="M34 26L35 24L33 25Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.5" />
    
    {/* Bras massifs en pierre */}
    <rect x="10" y="30" width="5" height="12" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    <rect x="33" y="30" width="5" height="12" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    {/* Fissures sur les bras */}
    <line x1="11" y1="34" x2="13" y2="36" stroke={secondaryColor} strokeWidth="0.8" opacity="0.5" />
    <line x1="35" y1="34" x2="37" y2="36" stroke={secondaryColor} strokeWidth="0.8" opacity="0.5" />
    
    {/* Poings massifs */}
    <rect x="8" y="40" width="8" height="6" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    <rect x="32" y="40" width="8" height="6" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    {/* Jointures rocheuses */}
    <line x1="10" y1="42" x2="10" y2="44" stroke={secondaryColor} strokeWidth="1" />
    <line x1="12" y1="42" x2="12" y2="44" stroke={secondaryColor} strokeWidth="1" />
    <line x1="14" y1="42" x2="14" y2="44" stroke={secondaryColor} strokeWidth="1" />
    <line x1="34" y1="42" x2="34" y2="44" stroke={secondaryColor} strokeWidth="1" />
    <line x1="36" y1="42" x2="36" y2="44" stroke={secondaryColor} strokeWidth="1" />
    <line x1="38" y1="42" x2="38" y2="44" stroke={secondaryColor} strokeWidth="1" />
    
    {/* Jambes massives en colonnes de pierre */}
    <rect x="18" y="42" width="5" height="5" rx="0.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    <rect x="25" y="42" width="5" height="5" rx="0.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    
    {/* Rochers/débris tombant du géant */}
    <circle cx="10" cy="38" r="1.2" fill={accentColor} opacity="0.6" />
    <circle cx="38" cy="38" r="1.2" fill={accentColor} opacity="0.6" />
    <circle cx="16" cy="44" r="0.8" fill={secondaryColor} opacity="0.5" />
    <circle cx="32" cy="44" r="0.8" fill={secondaryColor} opacity="0.5" />
    
    {/* Aura de poussière de pierre */}
    <ellipse cx="24" cy="44" rx="14" ry="2" fill={secondaryColor} opacity="0.2" />
  </svg>
);

export const DragonIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#DC2626',
  secondaryColor = '#991B1B',
  accentColor = '#FCD34D',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps puissant du dragon */}
    <ellipse cx="24" cy="32" rx="11" ry="10" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    
    {/* Écailles détaillées sur le corps */}
    <path d="M16 28Q18 26 20 28Q22 26 24 28Q26 26 28 28Q30 26 32 28" 
          stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.4" />
    <path d="M16 32Q18 30 20 32Q22 30 24 32Q26 30 28 32Q30 30 32 32" 
          stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.4" />
    <path d="M18 36Q20 34 22 36Q24 34 26 36Q28 34 30 36" 
          stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.4" />
    
    {/* Tête majestueuse */}
    <ellipse cx="24" cy="16" rx="8" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    
    {/* Museau puissant */}
    <ellipse cx="24" cy="20" rx="6" ry="4" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    <path d="M20 21Q24 23 28 21" stroke={secondaryColor} strokeWidth="1" fill="none" />
    
    {/* Narines fumantes */}
    <ellipse cx="22" cy="21" rx="1" ry="1.5" fill="black" />
    <ellipse cx="26" cy="21" rx="1" ry="1.5" fill="black" />
    {/* Fumée */}
    <circle cx="21" cy="20" r="0.8" fill="#9CA3AF" opacity="0.5" />
    <circle cx="27" cy="20" r="0.8" fill="#9CA3AF" opacity="0.5" />
    
    {/* Yeux reptiliens féroces */}
    <ellipse cx="20" cy="14" rx="2.5" ry="3.5" fill={accentColor} />
    <ellipse cx="28" cy="14" rx="2.5" ry="3.5" fill={accentColor} />
    <ellipse cx="20" cy="14" rx="1" ry="2.5" fill="black" />
    <ellipse cx="28" cy="14" rx="1" ry="2.5" fill="black" />
    <circle cx="20" cy="13" r="0.5" fill="#FEF3C7" />
    <circle cx="28" cy="13" r="0.5" fill="#FEF3C7" />
    
    {/* Cornes imposantes */}
    <path d="M18 10L16 6Q15 5 16 6" stroke={secondaryColor} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 10L32 6Q33 5 32 6" stroke={secondaryColor} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="16" cy="6" r="1.2" fill={secondaryColor} />
    <circle cx="32" cy="6" r="1.2" fill={secondaryColor} />
    
    {/* Petites cornes supplémentaires */}
    <path d="M17 11L15 9" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M31 11L33 9" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Ailes déployées majestueuses */}
    <path d="M13 30Q8 24 6 28Q5 32 8 36Q10 38 13 36" 
          fill={secondaryColor} stroke={secondaryColor} strokeWidth="1.5" opacity="0.8" />
    <path d="M35 30Q40 24 42 28Q43 32 40 36Q38 38 35 36" 
          fill={secondaryColor} stroke={secondaryColor} strokeWidth="1.5" opacity="0.8" />
    {/* Membranes des ailes */}
    <path d="M10 30L8 34" stroke={primaryColor} strokeWidth="1" opacity="0.6" />
    <path d="M12 30L10 35" stroke={primaryColor} strokeWidth="1" opacity="0.6" />
    <path d="M38 30L40 34" stroke={primaryColor} strokeWidth="1" opacity="0.6" />
    <path d="M36 30L38 35" stroke={primaryColor} strokeWidth="1" opacity="0.6" />
    
    {/* Crêtes dorsales épineuses */}
    <path d="M24 22L23 24L24 24L25 24Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.5" />
    <path d="M24 25L23 28L24 27L25 28Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.5" />
    <path d="M24 29L23 32L24 31L25 32Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.5" />
    <path d="M24 33L23 36L24 35L25 36Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.5" />
    
    {/* Pattes puissantes */}
    <path d="M18 40Q16 42 14 44" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
    <path d="M30 40Q32 42 34 44" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
    {/* Griffes */}
    <path d="M13 44L12 46M14 44L14 46M15 44L16 46" stroke={secondaryColor} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M33 44L32 46M34 44L34 46M35 44L36 46" stroke={secondaryColor} strokeWidth="1.2" strokeLinecap="round" />
    
    {/* Queue serpentine puissante */}
    <path d="M24 40Q26 44 28 46Q30 46 29 44" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
    {/* Pointe de la queue */}
    <path d="M28 46L30 44L28 42" fill={secondaryColor} stroke={secondaryColor} strokeWidth="1" />
    
    {/* Flammes sortant de la bouche */}
    <circle cx="24" cy="24" r="1.5" fill="#F97316" opacity="0.7" />
    <circle cx="22" cy="25" r="1" fill="#FBBF24" opacity="0.6" />
    <circle cx="26" cy="25" r="1" fill="#FBBF24" opacity="0.6" />
  </svg>
);

export const WhelpIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#EF4444',
  secondaryColor = '#DC2626',
  accentColor = '#FBBF24',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps de jeune dragon (plus petit et mignon) */}
    <ellipse cx="24" cy="30" rx="9" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    
    {/* Écailles naissantes */}
    <path d="M18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28" 
          stroke={secondaryColor} strokeWidth="0.8" fill="none" opacity="0.3" />
    <path d="M18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32" 
          stroke={secondaryColor} strokeWidth="0.8" fill="none" opacity="0.3" />
    
    {/* Petite tête mignonne */}
    <ellipse cx="24" cy="17" rx="6.5" ry="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    
    {/* Petit museau */}
    <ellipse cx="24" cy="20" rx="4.5" ry="3" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    
    {/* Petites narines */}
    <circle cx="22.5" cy="20.5" r="0.6" fill="black" />
    <circle cx="25.5" cy="20.5" r="0.6" fill="black" />
    
    {/* Grands yeux curieux de bébé dragon */}
    <ellipse cx="21" cy="15" rx="2.5" ry="3" fill={accentColor} />
    <ellipse cx="27" cy="15" rx="2.5" ry="3" fill={accentColor} />
    <circle cx="21" cy="15" r="1.5" fill="black" />
    <circle cx="27" cy="15" r="1.5" fill="black" />
    <circle cx="21.5" cy="14.5" r="0.7" fill="white" />
    <circle cx="27.5" cy="14.5" r="0.7" fill="white" />
    
    {/* Petites cornes bourgeonnantes */}
    <path d="M19 12L18 9" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M29 12L30 9" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="9" r="0.8" fill={secondaryColor} />
    <circle cx="30" cy="9" r="0.8" fill={secondaryColor} />
    
    {/* Petites ailes pas encore développées */}
    <path d="M15 28Q12 26 13 32" fill={secondaryColor} opacity="0.5" />
    <path d="M33 28Q36 26 35 32" fill={secondaryColor} opacity="0.5" />
    {/* Membranes */}
    <line x1="14" y1="29" x2="13" y2="31" stroke={primaryColor} strokeWidth="0.5" opacity="0.4" />
    <line x1="34" y1="29" x2="35" y2="31" stroke={primaryColor} strokeWidth="0.5" opacity="0.4" />
    
    {/* Petites crêtes dorsales */}
    <path d="M24 22L23.5 24L24.5 24Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.3" />
    <path d="M24 25L23.5 27L24.5 27Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.3" />
    <path d="M24 28L23.5 30L24.5 30Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.3" />
    
    {/* Petites pattes maladroites */}
    <path d="M19 36Q18 38 17 40" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M29 36Q30 38 31 40" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
    {/* Petites griffes */}
    <path d="M16 40L15.5 41M17 40L17 41M18 40L18.5 41" stroke={secondaryColor} strokeWidth="0.8" strokeLinecap="round" />
    <path d="M30 40L29.5 41M31 40L31 41M32 40L32.5 41" stroke={secondaryColor} strokeWidth="0.8" strokeLinecap="round" />
    
    {/* Petite queue qui remue */}
    <path d="M24 37Q25 40 26 42Q27 43 26.5 42" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M26 42L27 41L26 40" fill={secondaryColor} />
    
    {/* Petites flammes qui s'échappent (il apprend) */}
    <circle cx="24" cy="23" r="0.8" fill="#F97316" opacity="0.5" />
    <circle cx="22.5" cy="24" r="0.6" fill="#FBBF24" opacity="0.4" />
  </svg>
);

export const AncientDragonIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#7C3AED',
  secondaryColor = '#5B21B6',
  accentColor = '#A78BFA',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps massif et ancien */}
    <ellipse cx="24" cy="32" rx="13" ry="11" fill={primaryColor} stroke={secondaryColor} strokeWidth="2.5" />
    
    {/* Écailles anciennes et épaisses */}
    <path d="M14 28Q16 26 18 28Q20 26 22 28Q24 26 26 28Q28 26 30 28Q32 26 34 28" 
          stroke={secondaryColor} strokeWidth="1.5" fill="none" opacity="0.5" />
    <path d="M14 32Q16 30 18 32Q20 30 22 32Q24 30 26 32Q28 30 30 32Q32 30 34 32" 
          stroke={secondaryColor} strokeWidth="1.5" fill="none" opacity="0.5" />
    <path d="M14 36Q16 34 18 36Q20 34 22 36Q24 34 26 36Q28 34 30 36Q32 34 34 36" 
          stroke={secondaryColor} strokeWidth="1.5" fill="none" opacity="0.5" />
    {/* Cicatrices anciennes */}
    <line x1="18" y1="30" x2="22" y2="32" stroke={accentColor} strokeWidth="1" opacity="0.4" />
    <line x1="26" y1="30" x2="30" y2="33" stroke={accentColor} strokeWidth="1" opacity="0.4" />
    
    {/* Tête massive et sage */}
    <ellipse cx="24" cy="15" rx="9" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="2.5" />
    
    {/* Museau ancien avec crocs visibles */}
    <ellipse cx="24" cy="19" rx="7" ry="4.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    <path d="M19 20Q24 23 29 20" stroke={secondaryColor} strokeWidth="1.5" fill="none" />
    {/* Crocs dépassant */}
    <path d="M20 20L19 23" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 20L29 23" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Narines anciennes */}
    <ellipse cx="21.5" cy="20" rx="1.2" ry="1.8" fill="black" />
    <ellipse cx="26.5" cy="20" rx="1.2" ry="1.8" fill="black" />
    {/* Fumée mystique */}
    <circle cx="20.5" cy="19" r="1" fill={accentColor} opacity="0.4" />
    <circle cx="27.5" cy="19" r="1" fill={accentColor} opacity="0.4" />
    
    {/* Yeux anciens et sages */}
    <ellipse cx="20" cy="13" rx="3" ry="4" fill={accentColor} />
    <ellipse cx="28" cy="13" rx="3" ry="4" fill={accentColor} />
    <ellipse cx="20" cy="13" rx="1.2" ry="3" fill="#5B21B6" />
    <ellipse cx="28" cy="13" rx="1.2" ry="3" fill="#5B21B6" />
    <circle cx="20" cy="12" r="0.7" fill="#DDD6FE" />
    <circle cx="28" cy="12" r="0.7" fill="#DDD6FE" />
    
    {/* Cornes majestueuses et anciennes */}
    <path d="M17 9L14 4Q13 2 14 3" stroke={secondaryColor} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M31 9L34 4Q35 2 34 3" stroke={secondaryColor} strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="14" cy="4" r="1.5" fill={secondaryColor} />
    <circle cx="34" cy="4" r="1.5" fill={secondaryColor} />
    {/* Cornes supplémentaires multiples */}
    <path d="M16 9L14 7" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M18 10L17 7" stroke={secondaryColor} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M32 9L34 7" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M30 10L31 7" stroke={secondaryColor} strokeWidth="1.8" strokeLinecap="round" />
    
    {/* Ailes anciennes massives et déchirées */}
    <path d="M11 30Q5 22 3 26Q2 30 4 36Q6 40 10 38Q12 36 11 34" 
          fill={secondaryColor} stroke={secondaryColor} strokeWidth="2" opacity="0.9" />
    <path d="M37 30Q43 22 45 26Q46 30 44 36Q42 40 38 38Q36 36 37 34" 
          fill={secondaryColor} stroke={secondaryColor} strokeWidth="2" opacity="0.9" />
    {/* Déchirures dans les ailes */}
    <path d="M8 32L6 34" stroke={primaryColor} strokeWidth="1.5" opacity="0.7" />
    <path d="M10 34L8 36" stroke={primaryColor} strokeWidth="1.5" opacity="0.7" />
    <path d="M40 32L42 34" stroke={primaryColor} strokeWidth="1.5" opacity="0.7" />
    <path d="M38 34L40 36" stroke={primaryColor} strokeWidth="1.5" opacity="0.7" />
    
    {/* Crêtes dorsales massives et anciennes */}
    <path d="M24 21L22.5 24L25.5 24Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.8" />
    <path d="M24 25L22.5 28L25.5 28Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.8" />
    <path d="M24 29L22.5 32L25.5 32Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.8" />
    <path d="M24 33L22.5 36L25.5 36Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.8" />
    <path d="M24 37L22.5 40L25.5 40Z" fill={accentColor} stroke={secondaryColor} strokeWidth="0.8" />
    
    {/* Pattes anciennes et puissantes */}
    <path d="M17 41Q15 43 13 45" stroke={primaryColor} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M31 41Q33 43 35 45" stroke={primaryColor} strokeWidth="3.5" strokeLinecap="round" />
    {/* Griffes anciennes massives */}
    <path d="M11 45L10 47M13 45L13 47M15 45L16 47" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M33 45L32 47M35 45L35 47M37 45L38 47" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Queue massive avec plusieurs pointes */}
    <path d="M24 41Q26 44 28 46Q30 47 29.5 45" stroke={primaryColor} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M28 46L30 44L28 42" fill={secondaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    <path d="M27 45L28 43L27 42" fill={accentColor} />
    
    {/* Aura mystique ancienne */}
    <circle cx="24" cy="32" r="15" fill={accentColor} opacity="0.1" />
    <circle cx="12" cy="24" r="2" fill={accentColor} opacity="0.3" />
    <circle cx="36" cy="24" r="2" fill={accentColor} opacity="0.3" />
    <circle cx="18" cy="16" r="1.5" fill={accentColor} opacity="0.4" />
    <circle cx="30" cy="16" r="1.5" fill={accentColor} opacity="0.4" />
  </svg>
);

export const SlimeIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#32CD32',
  secondaryColor = '#228B22',
  accentColor = '#90EE90',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps gélatineux */}
    <ellipse cx="24" cy="30" rx="14" ry="12" fill={primaryColor} opacity="0.8" stroke={secondaryColor} strokeWidth="1.5" />
    {/* Base qui s'étale */}
    <ellipse cx="24" cy="38" rx="15" ry="4" fill={secondaryColor} opacity="0.4" />
    {/* Reflets de gelée */}
    <ellipse cx="18" cy="26" rx="4" ry="5" fill={accentColor} opacity="0.5" />
    <ellipse cx="28" cy="24" rx="3" ry="4" fill={accentColor} opacity="0.5" />
    {/* Yeux simples flottants */}
    <circle cx="20" cy="28" r="3" fill="white" opacity="0.9" />
    <circle cx="28" cy="28" r="3" fill="white" opacity="0.9" />
    <circle cx="20.5" cy="28" r="1.5" fill="black" />
    <circle cx="28.5" cy="28" r="1.5" fill="black" />
    {/* Reflets brillants sur les yeux */}
    <circle cx="19.5" cy="27" r="0.8" fill="white" />
    <circle cx="27.5" cy="27" r="0.8" fill="white" />
    {/* Bulles dans le slime */}
    <circle cx="16" cy="32" r="1.5" fill={accentColor} opacity="0.6" />
    <circle cx="24" cy="34" r="1" fill={accentColor} opacity="0.6" />
    <circle cx="30" cy="30" r="1.2" fill={accentColor} opacity="0.6" />
    <circle cx="26" cy="36" r="0.8" fill={accentColor} opacity="0.6" />
    {/* Bouche simple */}
    <path d="M22 32Q24 33 26 32" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.7" />
  </svg>
);

export const ZombieIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#6B7C59',
  secondaryColor = '#4A5842',
  accentColor = '#8B4513',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps décharné et décomposé */}
    <ellipse cx="24" cy="34" rx="10" ry="11" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" opacity="0.95" />
    
    {/* Déchirures sur le corps */}
    <path d="M18 30L20 32" stroke="#8B0000" strokeWidth="1.5" opacity="0.7" />
    <path d="M28 32L30 34" stroke="#8B0000" strokeWidth="1.5" opacity="0.7" />
    
    {/* Chair en décomposition */}
    <ellipse cx="20" cy="32" rx="2" ry="3" fill="#4A5842" opacity="0.6" />
    <ellipse cx="28" cy="35" rx="2.5" ry="3" fill="#4A5842" opacity="0.6" />
    
    {/* Côtes apparentes */}
    <path d="M20 34Q24 33 28 34" stroke="#D3D3D3" strokeWidth="0.8" opacity="0.4" />
    <path d="M20 36Q24 35 28 36" stroke="#D3D3D3" strokeWidth="0.8" opacity="0.4" />
    
    {/* Tête en décomposition */}
    <ellipse cx="24" cy="16" rx="8.5" ry="9" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    
    {/* Peau décomposée sur le crâne */}
    <path d="M17 14Q24 13 31 14" stroke={secondaryColor} strokeWidth="1" opacity="0.5" />
    <ellipse cx="19" cy="12" rx="1.5" ry="2" fill="#4A5842" opacity="0.5" />
    <ellipse cx="29" cy="13" rx="1.5" ry="2" fill="#4A5842" opacity="0.5" />
    
    {/* Cheveux décharnés et sales */}
    <path d="M17 9L16 6" stroke={accentColor} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    <path d="M20 8L19 5" stroke={accentColor} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
    <path d="M24 7L24 4" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M28 8L29 5" stroke={accentColor} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
    <path d="M31 10L32 7" stroke={accentColor} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    
    {/* Yeux morts et blancs */}
    <ellipse cx="20" cy="15" rx="2.5" ry="3" fill="#F5F5DC" opacity="0.9" />
    <ellipse cx="28" cy="15" rx="2.5" ry="3" fill="#F5F5DC" opacity="0.9" />
    {/* Pupilles dilatées mortes */}
    <circle cx="20" cy="15.5" r="1.5" fill="#696969" opacity="0.6" />
    <circle cx="28" cy="15.5" r="1.5" fill="#696969" opacity="0.6" />
    {/* Vaisseaux éclatés */}
    <line x1="18" y1="14" x2="17" y2="15" stroke="#8B0000" strokeWidth="0.5" opacity="0.6" />
    <line x1="30" y1="14" x2="31" y2="15" stroke="#8B0000" strokeWidth="0.5" opacity="0.6" />
    
    {/* Bouche béante avec chair pourrie */}
    <ellipse cx="24" cy="21" rx="4" ry="2.5" fill="black" opacity="0.7" />
    <path d="M21 20Q24 22 27 20" stroke="#4A5842" strokeWidth="1" fill="none" />
    {/* Dents cassées et pourries */}
    <rect x="21" y="19.5" width="1.2" height="2" rx="0.2" fill="#D2B48C" opacity="0.8" />
    <rect x="23.5" y="19.5" width="1" height="1.5" rx="0.2" fill="#D2B48C" opacity="0.7" />
    <rect x="25.5" y="19.5" width="1.2" height="2" rx="0.2" fill="#D2B48C" opacity="0.8" />
    
    {/* Plaies et blessures sur le visage */}
    <ellipse cx="28" cy="18" rx="1.5" ry="1" fill="#8B0000" opacity="0.6" />
    <path d="M17 18L19 20" stroke="#8B0000" strokeWidth="1.2" opacity="0.6" />
    <circle cx="26" cy="12" r="0.8" fill="#8B0000" opacity="0.5" />
    
    {/* Nez en décomposition */}
    <path d="M24 17L23 19L25 19Z" fill="#4A5842" opacity="0.6" />
    
    {/* Bras tendus en avant (posture de zombie) */}
    <path d="M15 30Q12 32 10 35" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
    <path d="M33 30Q36 32 38 35" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
    {/* Chair pendante sur les bras */}
    <path d="M12 33L11 34" stroke="#4A5842" strokeWidth="1.5" opacity="0.5" />
    <path d="M36 33L37 34" stroke="#4A5842" strokeWidth="1.5" opacity="0.5" />
    
    {/* Mains décharnées */}
    <ellipse cx="10" cy="35" rx="2" ry="2.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    <ellipse cx="38" cy="35" rx="2" ry="2.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Doigts griffus */}
    <path d="M9 36L8 38M10 36L10 39M11 36L12 38" stroke={secondaryColor} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M37 36L36 38M38 36L38 39M39 36L40 38" stroke={secondaryColor} strokeWidth="1.2" strokeLinecap="round" />
    {/* Ongles noirs */}
    <circle cx="8" cy="38" r="0.4" fill="black" />
    <circle cx="10" cy="39" r="0.4" fill="black" />
    <circle cx="12" cy="38" r="0.4" fill="black" />
    <circle cx="36" cy="38" r="0.4" fill="black" />
    <circle cx="38" cy="39" r="0.4" fill="black" />
    <circle cx="40" cy="38" r="0.4" fill="black" />
    
    {/* Lambeaux de vêtements déchirés */}
    <path d="M18 40Q20 42 22 41" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.6" />
    <path d="M26 40Q28 42 30 41" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.6" />
    
    {/* Taches de sang et fluides */}
    <circle cx="22" cy="28" r="1.2" fill="#8B0000" opacity="0.5" />
    <circle cx="26" cy="31" r="1" fill="#8B0000" opacity="0.5" />
    <circle cx="24" cy="36" r="0.8" fill="#4A5842" opacity="0.4" />
    <ellipse cx="20" cy="38" rx="1.5" ry="1" fill="#4A5842" opacity="0.3" />
    
    {/* Jambes chancelantes */}
    <path d="M20 42Q19 44 18 46" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M28 42Q29 44 30 46" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Mouches autour (décomposition) */}
    <circle cx="14" cy="20" r="0.6" fill="black" opacity="0.4" />
    <circle cx="34" cy="22" r="0.6" fill="black" opacity="0.4" />
    <circle cx="18" cy="26" r="0.5" fill="black" opacity="0.4" />
    
    {/* Aura de putréfaction */}
    <ellipse cx="24" cy="30" rx="14" ry="18" fill="#4A5842" opacity="0.08" />
  </svg>
);

export const DemonIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#8B0000',
  secondaryColor = '#DC143C',
  accentColor = '#FFD700',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps démoniaque */}
    <ellipse cx="24" cy="32" rx="10" ry="10" fill={primaryColor} stroke="black" strokeWidth="1.5" />
    {/* Tête */}
    <ellipse cx="24" cy="16" rx="8" ry="7" fill={primaryColor} stroke="black" strokeWidth="1.5" />
    {/* Grandes cornes recourbées */}
    <path d="M18 12Q16 8 14 10" stroke="black" strokeWidth="2" fill={secondaryColor} strokeLinecap="round" />
    <path d="M30 12Q32 8 34 10" stroke="black" strokeWidth="2" fill={secondaryColor} strokeLinecap="round" />
    {/* Yeux enflammés */}
    <ellipse cx="21" cy="15" rx="2.5" ry="3" fill={accentColor} />
    <ellipse cx="27" cy="15" rx="2.5" ry="3" fill={accentColor} />
    <circle cx="21" cy="15" r="1" fill="#FF4500" />
    <circle cx="27" cy="15" r="1" fill="#FF4500" />
    {/* Flammes dans les yeux */}
    <circle cx="21" cy="14.5" r="0.5" fill="white" opacity="0.8" />
    <circle cx="27" cy="14.5" r="0.5" fill="white" opacity="0.8" />
    {/* Nez pointu */}
    <path d="M24 17L23 19L25 19Z" fill="black" />
    {/* Bouche méchante avec crocs */}
    <path d="M20 20Q24 23 28 20" stroke="black" strokeWidth="1.5" fill={secondaryColor} />
    <path d="M22 20L21 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M26 20L27 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Ailes de chauve-souris */}
    <path d="M13 30Q8 26 10 35" fill={secondaryColor} stroke="black" strokeWidth="1" />
    <path d="M35 30Q40 26 38 35" fill={secondaryColor} stroke="black" strokeWidth="1" />
    {/* Queue fourchue */}
    <path d="M24 40Q26 44 28 42" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M28 42L30 44" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 42L26 44" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
    {/* Symbole démoniaque sur le torse */}
    <circle cx="24" cy="28" r="2.5" fill={accentColor} opacity="0.6" />
    <path d="M24 26L24 30M22 28L26 28" stroke={secondaryColor} strokeWidth="0.8" />
  </svg>
);

export const ImpIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#DC2626',
  secondaryColor = '#991B1B',
  accentColor = '#FBBF24',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Petite tête espiègle */}
    <ellipse cx="24" cy="18" rx="7" ry="6.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    
    {/* Petites cornes pointues */}
    <path d="M19 13L17 9" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M29 13L31 9" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="9" r="1.5" fill={secondaryColor} />
    <circle cx="31" cy="9" r="1.5" fill={secondaryColor} />
    
    {/* Grandes oreilles pointues (comme une chauve-souris) */}
    <path d="M16 16L12 14L15 18Z" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    <path d="M32 16L36 14L33 18Z" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    
    {/* Yeux malicieux et brillants */}
    <circle cx="21" cy="17" r="2.5" fill={accentColor} />
    <circle cx="27" cy="17" r="2.5" fill={accentColor} />
    <circle cx="21" cy="17" r="1.5" fill="black" />
    <circle cx="27" cy="17" r="1.5" fill="black" />
    <circle cx="21.5" cy="16.5" r="0.7" fill={accentColor} opacity="0.9" />
    <circle cx="27.5" cy="16.5" r="0.7" fill={accentColor} opacity="0.9" />
    
    {/* Sourire espiègle avec petits crocs */}
    <path d="M20 21Q24 23 28 21" stroke={secondaryColor} strokeWidth="1.5" fill="none" />
    <path d="M22 21L21.5 23" stroke="white" strokeWidth="1" strokeLinecap="round" />
    <path d="M26 21L26.5 23" stroke="white" strokeWidth="1" strokeLinecap="round" />
    
    {/* Corps petit et fin */}
    <ellipse cx="24" cy="30" rx="6" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    
    {/* Ventre */}
    <ellipse cx="24" cy="31" rx="4" ry="4.5" fill={secondaryColor} opacity="0.3" />
    
    {/* Petites ailes de chauve-souris */}
    <path d="M18 28Q14 26 13 30Q13 32 16 32" fill={secondaryColor} stroke={secondaryColor} strokeWidth="1" opacity="0.8" />
    <path d="M30 28Q34 26 35 30Q35 32 32 32" fill={secondaryColor} stroke={secondaryColor} strokeWidth="1" opacity="0.8" />
    {/* Nervures des ailes */}
    <line x1="14" y1="28" x2="15" y2="31" stroke={primaryColor} strokeWidth="0.5" opacity="0.6" />
    <line x1="34" y1="28" x2="33" y2="31" stroke={primaryColor} strokeWidth="0.5" opacity="0.6" />
    
    {/* Bras fins tenant un trident */}
    <path d="M18 30Q15 32 14 35" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M30 30Q33 32 34 35" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
    
    {/* Petit trident dans la main droite */}
    <line x1="34" y1="35" x2="36" y2="38" stroke="#D97706" strokeWidth="1.5" />
    <path d="M35 38L35 40M36 38L36 40M37 38L37 40" stroke="#D97706" strokeWidth="0.8" />
    <circle cx="36" cy="38" r="0.8" fill={accentColor} />
    
    {/* Jambes courtes */}
    <rect x="20" y="36" width="2" height="6" rx="1" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
    <rect x="26" y="36" width="2" height="6" rx="1" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
    
    {/* Pieds avec griffes */}
    <ellipse cx="21" cy="42" rx="1.5" ry="1" fill={secondaryColor} />
    <ellipse cx="27" cy="42" rx="1.5" ry="1" fill={secondaryColor} />
    <path d="M20 42L19 43M21 42L21 43M22 42L23 43" stroke={secondaryColor} strokeWidth="0.5" />
    <path d="M26 42L25 43M27 42L27 43M28 42L29 43" stroke={secondaryColor} strokeWidth="0.5" />
    
    {/* Queue fourchue et énergique */}
    <path d="M24 36Q26 40 27 43" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
    <path d="M27 43L28 45" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M27 43L26 45" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M28 45L29 46M26 45L25 46" stroke={accentColor} strokeWidth="0.8" strokeLinecap="round" />
    
    {/* Flammes autour (aura démoniaque) */}
    <circle cx="12" cy="20" r="1" fill="#F97316" opacity="0.6" />
    <circle cx="36" cy="20" r="1" fill="#F97316" opacity="0.6" />
    <circle cx="16" cy="34" r="0.8" fill="#FBBF24" opacity="0.5" />
  </svg>
);

export const FelguardIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#065F46',
  secondaryColor = '#047857',
  accentColor = '#10B981',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tête massive et carrée */}
    <rect x="17" y="12" width="14" height="12" rx="2" fill={primaryColor} stroke="black" strokeWidth="1.5" />
    
    {/* Cornes massives recourbées */}
    <path d="M18 14Q14 12 12 16Q11 18 13 18" stroke="black" strokeWidth="2.5" fill={secondaryColor} strokeLinecap="round" />
    <path d="M30 14Q34 12 36 16Q37 18 35 18" stroke="black" strokeWidth="2.5" fill={secondaryColor} strokeLinecap="round" />
    {/* Pointes sur les cornes */}
    <circle cx="12.5" cy="16" r="1.2" fill="#1F2937" />
    <circle cx="35.5" cy="16" r="1.2" fill="#1F2937" />
    
    {/* Crête osseuse */}
    <rect x="23" y="10" width="2" height="3" fill={secondaryColor} />
    <path d="M22 10L24 8L26 10" fill={secondaryColor} stroke="black" strokeWidth="0.5" />
    
    {/* Yeux gangreneux brillants */}
    <rect x="19" y="17" width="3" height="4" rx="0.5" fill={accentColor} opacity="0.9" />
    <rect x="26" y="17" width="3" height="4" rx="0.5" fill={accentColor} opacity="0.9" />
    <rect x="20" y="18" width="1" height="2" fill="#047857" />
    <rect x="27" y="18" width="1" height="2" fill="#047857" />
    {/* Lueur gangréneuse */}
    <circle cx="20.5" cy="19" r="0.5" fill="#D1FAE5" />
    <circle cx="27.5" cy="19" r="0.5" fill="#D1FAE5" />
    
    {/* Bouche avec dents monstrueuses */}
    <rect x="20" y="22" width="8" height="2" fill="black" opacity="0.8" />
    <rect x="20" y="22" width="1" height="3" fill="white" />
    <rect x="22" y="22" width="1" height="3" fill="white" />
    <rect x="25" y="22" width="1" height="3" fill="white" />
    <rect x="27" y="22" width="1" height="3" fill="white" />
    
    {/* Cicatrices sur le visage */}
    <line x1="17" y1="16" x2="15" y2="18" stroke="#047857" strokeWidth="1" strokeLinecap="round" />
    <line x1="31" y1="16" x2="33" y2="18" stroke="#047857" strokeWidth="1" strokeLinecap="round" />
    
    {/* Armure massive sur les épaules */}
    <path d="M14 24L12 26L12 30L16 32" fill="#1F2937" stroke="black" strokeWidth="1" />
    <path d="M34 24L36 26L36 30L32 32" fill="#1F2937" stroke="black" strokeWidth="1" />
    {/* Pointes d'armure */}
    <path d="M12 26L10 25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 28L10 28" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M36 26L38 25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M36 28L38 28" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Torse musclé et gangreneux */}
    <rect x="16" y="24" width="16" height="14" rx="2" fill={primaryColor} stroke="black" strokeWidth="1.5" />
    {/* Plaques d'armure sur le torse */}
    <rect x="18" y="26" width="12" height="3" rx="0.5" fill="#1F2937" opacity="0.6" />
    <rect x="18" y="31" width="12" height="3" rx="0.5" fill="#1F2937" opacity="0.6" />
    {/* Énergie gangréneuse qui pulse */}
    <circle cx="24" cy="30" r="2" fill={accentColor} opacity="0.4" />
    <path d="M24 28L24 32M22 30L26 30" stroke={accentColor} strokeWidth="0.8" opacity="0.6" />
    
    {/* Bras massifs avec gantelets */}
    <rect x="12" y="28" width="4" height="10" rx="1" fill={primaryColor} stroke="black" strokeWidth="1" />
    <rect x="32" y="28" width="4" height="10" rx="1" fill={primaryColor} stroke="black" strokeWidth="1" />
    {/* Gantelets */}
    <rect x="11" y="36" width="6" height="4" rx="0.5" fill="#374151" stroke="black" strokeWidth="1" />
    <rect x="31" y="36" width="6" height="4" rx="0.5" fill="#374151" stroke="black" strokeWidth="1" />
    
    {/* Épée gangréneuse massive dans la main droite */}
    <rect x="36" y="32" width="2" height="12" rx="0.3" fill="#6B7280" stroke="black" strokeWidth="0.8" />
    <path d="M35 32L39 32L37 28Z" fill="#4B5563" stroke="black" strokeWidth="0.8" />
    <rect x="36.5" y="44" width="1" height="2" fill="#8B4513" />
    {/* Aura gangréneuse sur l'épée */}
    <line x1="37" y1="34" x2="37" y2="42" stroke={accentColor} strokeWidth="0.5" opacity="0.6" />
    <circle cx="37" cy="36" r="1" fill={accentColor} opacity="0.3" />
    
    {/* Jambes puissantes */}
    <rect x="18" y="38" width="4" height="7" rx="1" fill={primaryColor} stroke="black" strokeWidth="1" />
    <rect x="26" y="38" width="4" height="7" rx="1" fill={primaryColor} stroke="black" strokeWidth="1" />
    
    {/* Bottes lourdes */}
    <rect x="17" y="43" width="6" height="3" rx="0.5" fill="#1F2937" stroke="black" strokeWidth="1" />
    <rect x="25" y="43" width="6" height="3" rx="0.5" fill="#1F2937" stroke="black" strokeWidth="1" />
    
    {/* Aura gangréneuse autour */}
    <circle cx="10" cy="32" r="1.5" fill={accentColor} opacity="0.3" />
    <circle cx="38" cy="24" r="1.5" fill={accentColor} opacity="0.3" />
    <circle cx="16" cy="42" r="1" fill={accentColor} opacity="0.4" />
  </svg>
);

export const WolfIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#6B7280',
  secondaryColor = '#4B5563',
  accentColor = '#F59E0B',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Oreilles */}
    <path d="M16 12L14 8L18 10Z" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    <path d="M32 12L34 8L30 10Z" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Tête */}
    <ellipse cx="24" cy="18" rx="9" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Museau */}
    <ellipse cx="24" cy="22" rx="6" ry="4" fill={secondaryColor} />
    <ellipse cx="24" cy="23" rx="3" ry="2" fill="#1F2937" />
    {/* Truffe */}
    <ellipse cx="24" cy="23" rx="1.5" ry="1" fill="black" />
    {/* Yeux */}
    <ellipse cx="20" cy="16" rx="1.5" ry="2" fill={accentColor} />
    <ellipse cx="28" cy="16" rx="1.5" ry="2" fill={accentColor} />
    <circle cx="20" cy="16" r="0.8" fill="black" />
    <circle cx="28" cy="16" r="0.8" fill="black" />
    {/* Reflets dans les yeux */}
    <circle cx="20.5" cy="15.5" r="0.4" fill="white" opacity="0.8" />
    <circle cx="28.5" cy="15.5" r="0.4" fill="white" opacity="0.8" />
    {/* Crocs */}
    <path d="M22 24L21.5 26" stroke="white" strokeWidth="1" strokeLinecap="round" />
    <path d="M26 24L26.5 26" stroke="white" strokeWidth="1" strokeLinecap="round" />
    {/* Corps */}
    <ellipse cx="24" cy="32" rx="8" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Fourrure du ventre */}
    <ellipse cx="24" cy="33" rx="5" ry="4" fill="#9CA3AF" opacity="0.5" />
    {/* Pattes avant */}
    <rect x="18" y="36" width="2.5" height="8" rx="1" fill={secondaryColor} />
    <rect x="27.5" y="36" width="2.5" height="8" rx="1" fill={secondaryColor} />
    {/* Pattes */}
    <ellipse cx="19.25" cy="43" rx="1.5" ry="1" fill="#1F2937" />
    <ellipse cx="28.75" cy="43" rx="1.5" ry="1" fill="#1F2937" />
    {/* Griffes */}
    <line x1="18" y1="43.5" x2="17.5" y2="44.5" stroke={secondaryColor} strokeWidth="0.5" />
    <line x1="19.25" y1="43.5" x2="19.25" y2="44.5" stroke={secondaryColor} strokeWidth="0.5" />
    <line x1="20.5" y1="43.5" x2="21" y2="44.5" stroke={secondaryColor} strokeWidth="0.5" />
    {/* Queue */}
    <path d="M32 32Q36 30 38 26" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const BoarIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#8B4513',
  secondaryColor = '#5D2E0F',
  accentColor = '#D2691E',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tête massive */}
    <ellipse cx="24" cy="20" rx="10" ry="9" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    {/* Oreilles */}
    <ellipse cx="17" cy="14" rx="2" ry="3" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    <ellipse cx="31" cy="14" rx="2" ry="3" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Museau large */}
    <ellipse cx="24" cy="24" rx="7" ry="5" fill={accentColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Groin */}
    <ellipse cx="24" cy="25" rx="4" ry="3" fill={secondaryColor} />
    <ellipse cx="22" cy="25" rx="1" ry="1.5" fill="black" />
    <ellipse cx="26" cy="25" rx="1" ry="1.5" fill="black" />
    {/* Yeux petits et agressifs */}
    <circle cx="19" cy="18" r="1.5" fill="black" />
    <circle cx="29" cy="18" r="1.5" fill="black" />
    <circle cx="19.5" cy="17.5" r="0.5" fill="#DC2626" opacity="0.8" />
    <circle cx="29.5" cy="17.5" r="0.5" fill="#DC2626" opacity="0.8" />
    {/* Défenses */}
    <path d="M20 26Q18 28 17 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 26Q30 28 31 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
    {/* Poils hérissés sur le dos */}
    <line x1="20" y1="13" x2="19" y2="10" stroke={secondaryColor} strokeWidth="1" />
    <line x1="23" y1="12" x2="23" y2="9" stroke={secondaryColor} strokeWidth="1" />
    <line x1="26" y1="12" x2="26" y2="9" stroke={secondaryColor} strokeWidth="1" />
    <line x1="29" y1="13" x2="30" y2="10" stroke={secondaryColor} strokeWidth="1" />
    {/* Corps musclé */}
    <ellipse cx="24" cy="34" rx="11" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    {/* Pattes courtes et épaisses */}
    <rect x="16" y="38" width="3" height="7" rx="1.5" fill={secondaryColor} />
    <rect x="29" y="38" width="3" height="7" rx="1.5" fill={secondaryColor} />
    {/* Sabots */}
    <rect x="16" y="43" width="3" height="2" fill="#1F2937" />
    <rect x="29" y="43" width="3" height="2" fill="#1F2937" />
    {/* Queue en tire-bouchon */}
    <path d="M34 32Q36 31 37 30Q38 29 37 28" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const MurlocIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#4ADE80',
  secondaryColor = '#22C55E',
  accentColor = '#FDE047',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tête en forme d'amphibien */}
    <ellipse cx="24" cy="20" rx="9" ry="10" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    {/* Crête dorsale */}
    <path d="M24 10L22 13L24 12L26 13Z" fill="#EF4444" stroke="#DC2626" strokeWidth="0.5" />
    <path d="M24 12L22.5 15L24 14L25.5 15Z" fill="#F97316" stroke="#EA580C" strokeWidth="0.5" />
    <path d="M24 14L23 17L24 16L25 17Z" fill="#FBBF24" stroke="#F59E0B" strokeWidth="0.5" />
    {/* Grands yeux globuleux */}
    <circle cx="20" cy="18" r="3.5" fill={accentColor} stroke={secondaryColor} strokeWidth="1" />
    <circle cx="28" cy="18" r="3.5" fill={accentColor} stroke={secondaryColor} strokeWidth="1" />
    <circle cx="20" cy="18" r="2" fill="black" />
    <circle cx="28" cy="18" r="2" fill="black" />
    <circle cx="20.8" cy="17.2" r="0.8" fill="white" />
    <circle cx="28.8" cy="17.2" r="0.8" fill="white" />
    {/* Bouche large */}
    <path d="M24 24Q20 26 18 25Q20 27 24 27Q28 27 30 25Q28 26 24 24Z" 
          fill={secondaryColor} stroke={secondaryColor} strokeWidth="1" />
    {/* Dents pointues */}
    <path d="M20 25L19.5 26.5L20 26Z" fill="white" />
    <path d="M22 25L21.5 27L22 26Z" fill="white" />
    <path d="M26 25L26.5 27L26 26Z" fill="white" />
    <path d="M28 25L28.5 26.5L28 26Z" fill="white" />
    {/* Nageoires latérales (comme des oreilles) */}
    <ellipse cx="14" cy="20" rx="3" ry="4" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" 
             transform="rotate(-20 14 20)" />
    <ellipse cx="34" cy="20" rx="3" ry="4" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" 
             transform="rotate(20 34 20)" />
    {/* Texture d'écailles sur les nageoires */}
    <path d="M14 18Q12 20 14 22" stroke={secondaryColor} strokeWidth="0.5" fill="none" opacity="0.5" />
    <path d="M34 18Q36 20 34 22" stroke={secondaryColor} strokeWidth="0.5" fill="none" opacity="0.5" />
    {/* Corps trapu */}
    <ellipse cx="24" cy="34" rx="7" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
    {/* Ventre */}
    <ellipse cx="24" cy="35" rx="4.5" ry="5" fill={accentColor} opacity="0.3" />
    {/* Bras avec mains palmées */}
    <path d="M17 30Q14 32 13 36" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M31 30Q34 32 35 36" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
    {/* Mains palmées */}
    <circle cx="13" cy="36" r="2" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
    <circle cx="35" cy="36" r="2" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
    <path d="M12 35L11 34M13 35L13 34M14 35L15 34" stroke={secondaryColor} strokeWidth="0.5" />
    <path d="M36 35L37 34M35 35L35 34M34 35L33 34" stroke={secondaryColor} strokeWidth="0.5" />
    {/* Pieds palmés */}
    <ellipse cx="20" cy="42" rx="2.5" ry="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
    <ellipse cx="28" cy="42" rx="2.5" ry="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.8" />
  </svg>
);

export const BanditIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#4B5563',
  secondaryColor = '#1F2937',
  accentColor = '#DC2626',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Capuche */}
    <path d="M24 10Q16 12 14 18L34 18Q32 12 24 10Z" fill={secondaryColor} stroke="black" strokeWidth="1" />
    <path d="M14 18L12 22L24 24L36 22L34 18Z" fill={secondaryColor} stroke="black" strokeWidth="1" />
    {/* Ombre de la capuche sur le visage */}
    <ellipse cx="24" cy="20" rx="7" ry="5" fill="black" opacity="0.4" />
    {/* Masque/bandana sur le visage */}
    <rect x="16" y="18" width="16" height="5" rx="1" fill={secondaryColor} stroke="black" strokeWidth="0.8" />
    {/* Yeux menaçants sous la capuche */}
    <ellipse cx="20" cy="20" rx="2" ry="1.5" fill={accentColor} opacity="0.8" />
    <ellipse cx="28" cy="20" rx="2" ry="1.5" fill={accentColor} opacity="0.8" />
    <circle cx="20" cy="20" r="0.8" fill="black" />
    <circle cx="28" cy="20" r="0.8" fill="black" />
    {/* Visage partiellement visible */}
    <ellipse cx="24" cy="24" rx="6" ry="5" fill="#D1A684" stroke="black" strokeWidth="0.5" />
    {/* Cicatrice */}
    <path d="M26 22L28 25" stroke={accentColor} strokeWidth="0.8" strokeLinecap="round" />
    {/* Torse avec vêtements sombres */}
    <path d="M18 28Q16 30 16 35L32 35Q32 30 30 28Z" fill={secondaryColor} stroke="black" strokeWidth="1" />
    {/* Ceinture */}
    <rect x="16" y="34" width="16" height="2" fill="#8B4513" stroke="black" strokeWidth="0.5" />
    <rect x="23" y="33.5" width="2" height="3" fill={accentColor} stroke="black" strokeWidth="0.3" />
    {/* Bandoulière */}
    <path d="M18 28L28 35" stroke="#6B4423" strokeWidth="2" />
    <path d="M18 28L28 35" stroke="#8B6F47" strokeWidth="1.2" />
    {/* Bras avec dague */}
    <path d="M16 30Q12 32 10 36" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 30Q36 32 38 36" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
    {/* Dague dans la main droite */}
    <line x1="38" y1="36" x2="42" y2="38" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M42 38L44 40" stroke="#6B4423" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="42" cy="38" r="0.8" fill={accentColor} />
    {/* Bourse d'or à la ceinture */}
    <circle cx="20" cy="36" r="1.5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="0.5" />
    <path d="M20 34.5L20 35.5" stroke="#F59E0B" strokeWidth="0.5" />
    {/* Jambes */}
    <rect x="18" y="36" width="3" height="8" fill={secondaryColor} stroke="black" strokeWidth="0.8" />
    <rect x="27" y="36" width="3" height="8" fill={secondaryColor} stroke="black" strokeWidth="0.8" />
    {/* Bottes */}
    <rect x="17.5" y="42" width="4" height="3" rx="0.5" fill="#4B5563" stroke="black" strokeWidth="0.5" />
    <rect x="26.5" y="42" width="4" height="3" rx="0.5" fill="#4B5563" stroke="black" strokeWidth="0.5" />
  </svg>
);

export const FireElementalIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#EF4444',
  secondaryColor = '#DC2626',
  accentColor = '#FBBF24',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps de flammes - forme ondulante */}
    <path d="M24 44Q18 44 15 38Q12 32 14 26Q16 20 20 16Q22 12 24 8Q26 12 28 16Q32 20 34 26Q36 32 33 38Q30 44 24 44Z" 
          fill="url(#fireGradient)" stroke={secondaryColor} strokeWidth="1" />
    
    {/* Définition du gradient de feu */}
    <defs>
      <linearGradient id="fireGradient" x1="24" y1="8" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="30%" stopColor="#F97316" />
        <stop offset="60%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
      <radialGradient id="fireCore" cx="24" cy="24" r="12" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.9" />
        <stop offset="40%" stopColor="#FBBF24" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#F97316" stopOpacity="0.3" />
      </radialGradient>
    </defs>
    
    {/* Flammes internes animées */}
    <path d="M24 38Q21 38 19 34Q17 30 18 26Q19 22 21 20Q22 16 24 12Q26 16 27 20Q29 22 30 26Q31 30 29 34Q27 38 24 38Z" 
          fill="url(#fireCore)" opacity="0.8" />
    
    {/* Flammes dansantes sur les côtés */}
    <path d="M18 28Q16 26 15 24Q14 22 15 20Q16 18 18 18" 
          stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M30 28Q32 26 33 24Q34 22 33 20Q32 18 30 18" 
          stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
    
    {/* Yeux de braise */}
    <ellipse cx="20" cy="22" rx="2" ry="3" fill="#FFF7ED" opacity="0.9" />
    <ellipse cx="28" cy="22" rx="2" ry="3" fill="#FFF7ED" opacity="0.9" />
    <circle cx="20" cy="22" r="1.2" fill="#DC2626" />
    <circle cx="28" cy="22" r="1.2" fill="#DC2626" />
    <circle cx="20.5" cy="21.5" r="0.5" fill="#FBBF24" />
    <circle cx="28.5" cy="21.5" r="0.5" fill="#FBBF24" />
    
    {/* Bouche de flammes */}
    <path d="M20 28Q24 30 28 28" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    
    {/* Flammes en haut (tête) */}
    <path d="M20 12Q18 10 18 8Q18 6 20 6" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M24 8Q24 6 24 4Q24 2 25 2" stroke="#FFF7ED" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M28 12Q30 10 30 8Q30 6 28 6" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    
    {/* Étincelles autour */}
    <circle cx="12" cy="24" r="1" fill="#FBBF24" opacity="0.8" />
    <circle cx="36" cy="24" r="1" fill="#FBBF24" opacity="0.8" />
    <circle cx="16" cy="16" r="0.8" fill="#F97316" opacity="0.7" />
    <circle cx="32" cy="16" r="0.8" fill="#F97316" opacity="0.7" />
    <circle cx="18" cy="36" r="1.2" fill="#EF4444" opacity="0.6" />
    <circle cx="30" cy="36" r="1.2" fill="#EF4444" opacity="0.6" />
    
    {/* Lueur autour */}
    <ellipse cx="24" cy="28" rx="14" ry="18" fill={primaryColor} opacity="0.1" />
  </svg>
);

export const IceElementalIcon: React.FC<MonsterIconProps> = ({
  primaryColor = '#60A5FA',
  secondaryColor = '#3B82F6',
  accentColor = '#DBEAFE',
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corps cristallin */}
    <path d="M24 6L32 14L34 24L32 34L24 42L16 34L14 24L16 14Z" 
          fill="url(#iceGradient)" stroke={secondaryColor} strokeWidth="1.5" />
    
    {/* Définition du gradient de glace */}
    <defs>
      <linearGradient id="iceGradient" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#DBEAFE" />
        <stop offset="50%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
      <radialGradient id="iceCrystal" cx="24" cy="24" r="12" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F0F9FF" stopOpacity="0.9" />
        <stop offset="60%" stopColor="#DBEAFE" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.2" />
      </radialGradient>
    </defs>
    
    {/* Cristaux internes */}
    <path d="M24 10L28 18L30 24L28 30L24 38L20 30L18 24L20 18Z" 
          fill="url(#iceCrystal)" stroke={accentColor} strokeWidth="0.8" opacity="0.8" />
    
    {/* Structure cristalline (lignes) */}
    <line x1="24" y1="6" x2="24" y2="42" stroke={accentColor} strokeWidth="0.8" opacity="0.6" />
    <line x1="14" y1="24" x2="34" y2="24" stroke={accentColor} strokeWidth="0.8" opacity="0.6" />
    <line x1="16" y1="14" x2="32" y2="34" stroke={accentColor} strokeWidth="0.6" opacity="0.4" />
    <line x1="32" y1="14" x2="16" y2="34" stroke={accentColor} strokeWidth="0.6" opacity="0.4" />
    
    {/* Points de connexion cristalline */}
    <circle cx="24" cy="6" r="1.5" fill="#F0F9FF" stroke={secondaryColor} strokeWidth="0.5" />
    <circle cx="32" cy="14" r="1.5" fill="#F0F9FF" stroke={secondaryColor} strokeWidth="0.5" />
    <circle cx="34" cy="24" r="1.5" fill="#F0F9FF" stroke={secondaryColor} strokeWidth="0.5" />
    <circle cx="32" cy="34" r="1.5" fill="#F0F9FF" stroke={secondaryColor} strokeWidth="0.5" />
    <circle cx="24" cy="42" r="1.5" fill="#F0F9FF" stroke={secondaryColor} strokeWidth="0.5" />
    <circle cx="16" cy="34" r="1.5" fill="#F0F9FF" stroke={secondaryColor} strokeWidth="0.5" />
    <circle cx="14" cy="24" r="1.5" fill="#F0F9FF" stroke={secondaryColor} strokeWidth="0.5" />
    <circle cx="16" cy="14" r="1.5" fill="#F0F9FF" stroke={secondaryColor} strokeWidth="0.5" />
    
    {/* Yeux glacials */}
    <ellipse cx="20" cy="20" rx="2.5" ry="3" fill="#F0F9FF" opacity="0.9" />
    <ellipse cx="28" cy="20" rx="2.5" ry="3" fill="#F0F9FF" opacity="0.9" />
    <circle cx="20" cy="20" r="1.5" fill={secondaryColor} />
    <circle cx="28" cy="20" r="1.5" fill={secondaryColor} />
    <circle cx="20.5" cy="19.5" r="0.6" fill="#DBEAFE" />
    <circle cx="28.5" cy="19.5" r="0.6" fill="#DBEAFE" />
    
    {/* Bouche cristalline */}
    <path d="M20 28Q24 26 28 28" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    
    {/* Stalactites sur la tête */}
    <path d="M20 8L19 4" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 6L24 2" stroke="#F0F9FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 8L29 4" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Stalactites sur les côtés */}
    <path d="M14 20L10 19" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M14 28L10 29" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M34 20L38 19" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M34 28L38 29" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
    
    {/* Cristaux de glace flottants */}
    <path d="M10 12L11 11L12 12L11 13Z" fill={accentColor} opacity="0.7" />
    <path d="M38 12L39 11L40 12L39 13Z" fill={accentColor} opacity="0.7" />
    <path d="M10 36L11 35L12 36L11 37Z" fill={accentColor} opacity="0.7" />
    <path d="M38 36L39 35L40 36L39 37Z" fill={accentColor} opacity="0.7" />
    
    {/* Aura givrée */}
    <ellipse cx="24" cy="24" rx="16" ry="20" fill={primaryColor} opacity="0.1" />
    
    {/* Éclats de lumière sur les facettes */}
    <circle cx="26" cy="14" r="1" fill="#F0F9FF" opacity="0.8" />
    <circle cx="30" cy="24" r="1.2" fill="#F0F9FF" opacity="0.8" />
    <circle cx="22" cy="32" r="0.8" fill="#F0F9FF" opacity="0.8" />
  </svg>
);

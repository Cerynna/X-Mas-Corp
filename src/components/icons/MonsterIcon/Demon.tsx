import type { MonsterIconProps } from "./MonsterIcon";

// Démon
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

// Diablotin
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

// Garde funeste
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

// Succube
export const SuccubusIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#F472B6', secondaryColor = '#BE185D', accentColor = '#FBBF24', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps */}
        <ellipse cx="24" cy="32" rx="8" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête */}
        <ellipse cx="24" cy="18" rx="7" ry="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Yeux */}
        <ellipse cx="21" cy="16" rx="1.2" ry="2" fill={accentColor} />
        <ellipse cx="27" cy="16" rx="1.2" ry="2" fill={accentColor} />
        {/* Lèvres */}
        <ellipse cx="24" cy="20" rx="2" ry="1" fill="#BE185D" />
        {/* Ailes */}
        <ellipse cx="14" cy="28" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
        <ellipse cx="34" cy="28" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
    </svg>
);

// Démon Mineur
export const MinorDemonIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#DC2626', secondaryColor = '#991B1B', accentColor = '#FBBF24', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps */}
        <ellipse cx="24" cy="32" rx="8" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête */}
        <ellipse cx="24" cy="18" rx="7" ry="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Yeux */}
        <ellipse cx="21" cy="16" rx="1.2" ry="2" fill={accentColor} />
        <ellipse cx="27" cy="16" rx="1.2" ry="2" fill={accentColor} />
        {/* Cornes */}
        <path d="M19 13L17 9" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M29 13L31 9" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
        {/* Griffes */}
        <rect x="21" y="38" width="2" height="4" rx="0.5" fill={secondaryColor} />
        <rect x="25" y="38" width="2" height="4" rx="0.5" fill={secondaryColor} />
    </svg>
);
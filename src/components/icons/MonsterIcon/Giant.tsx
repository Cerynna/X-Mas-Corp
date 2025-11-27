import type { MonsterIconProps } from ".";

// Géant de Glace
export const IceGiantIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#60A5FA', secondaryColor = '#3B82F6', accentColor = '#DBEAFE', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps massif */}
        <rect x="16" y="26" width="16" height="18" rx="2" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête */}
        <rect x="18" y="10" width="12" height="14" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2.5" />
        {/* Yeux */}
        <rect x="21" y="15" width="2.5" height="4" rx="0.5" fill={accentColor} />
        <rect x="25.5" y="15" width="2.5" height="4" rx="0.5" fill={accentColor} />
        {/* Bouche */}
        <rect x="21" y="21" width="6" height="1.5" rx="0.3" fill="black" opacity="0.6" />
        {/* Épaules */}
        <rect x="12" y="24" width="6" height="8" rx="1" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        <rect x="30" y="24" width="6" height="8" rx="1" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Bras */}
        <rect x="10" y="30" width="5" height="12" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        <rect x="33" y="30" width="5" height="12" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Poings */}
        <rect x="8" y="40" width="8" height="6" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        <rect x="32" y="40" width="8" height="6" rx="1.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Jambes */}
        <rect x="18" y="42" width="5" height="5" rx="0.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        <rect x="25" y="42" width="5" height="5" rx="0.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    </svg>
);

// Troll Massif
export const TrollBruteIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#A7F3D0', secondaryColor = '#065F46', accentColor = '#FBBF24', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps massif */}
        <ellipse cx="24" cy="32" rx="10" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête */}
        <ellipse cx="24" cy="18" rx="8" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Yeux */}
        <ellipse cx="21" cy="16" rx="1.5" ry="2" fill={accentColor} />
        <ellipse cx="27" cy="16" rx="1.5" ry="2" fill={accentColor} />
        {/* Bouche */}
        <ellipse cx="24" cy="22" rx="4" ry="2" fill="#065F46" />
        {/* Dents */}
        <rect x="23" y="23" width="2" height="1.2" rx="0.3" fill="white" />
        {/* Massue */}
        <rect x="32" y="36" width="8" height="2" rx="0.5" fill="#A6531B" />
    </svg>
);

// Géant de Pierre
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

import type { MonsterIconProps } from "./MonsterIcon";

// Voleur
export const ThiefIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#4B5563', secondaryColor = '#1F2937', accentColor = '#FBBF24', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Capuche sombre, plus anguleuse que Bandit */}
        <path d="M24 8Q16 14 14 22L34 22Q32 14 24 8Z" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.2" />
        {/* Visage masqué, plus étroit */}
        <ellipse cx="24" cy="24" rx="7" ry="5.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.7" />
        {/* Masque plus anguleux */}
        <rect x="17" y="20" width="14" height="5" rx="1" fill={secondaryColor} opacity="0.7" />
        {/* Yeux perçants gris */}
        <ellipse cx="21" cy="23" rx="1.2" ry="1" fill={accentColor} opacity="0.7" />
        <ellipse cx="27" cy="23" rx="1.2" ry="1" fill={accentColor} opacity="0.7" />
        {/* Cicatrice sur la joue */}
        <path d="M26 25L28 27" stroke={accentColor} strokeWidth="0.7" strokeLinecap="round" />
        {/* Torse sombre, posture furtive */}
        <path d="M18 29Q15 33 16 38L32 38Q33 33 30 29Z" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.7" />
        {/* Ceinture discrète */}
        <rect x="17" y="37" width="14" height="2" fill={secondaryColor} opacity="0.5" />
        {/* Bandoulière subtile */}
        <path d="M19 29L29 38" stroke={secondaryColor} strokeWidth="0.7" />
        {/* Bras repliés, prêt à agir */}
        <path d="M16 33Q13 36 13 41" stroke={secondaryColor} strokeWidth="1" strokeLinecap="round" />
        <path d="M32 33Q35 36 35 41" stroke={secondaryColor} strokeWidth="1" strokeLinecap="round" />
        {/* Dague sombre, simple */}
        <path d="M35 41Q39 39 36 36Q33 33 35 41Z" fill={secondaryColor} stroke={primaryColor} strokeWidth="0.7" />
        {/* Bourse à la ceinture */}
        <ellipse cx="21" cy="39" rx="1" ry="0.7" fill={secondaryColor} opacity="0.7" />
        {/* Jambes */}
        <rect x="19" y="39" width="3" height="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.3" />
        <rect x="26" y="39" width="3" height="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="0.3" />
        {/* Bottes sombres */}
        <rect x="18.5" y="45" width="3.5" height="2.5" rx="0.5" fill={secondaryColor} opacity="0.7" />
        <rect x="26.5" y="45" width="3.5" height="2.5" rx="0.5" fill={secondaryColor} opacity="0.7" />
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

// Murloc
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


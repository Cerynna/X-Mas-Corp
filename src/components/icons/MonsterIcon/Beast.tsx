import type { MonsterIconProps } from ".";

// Hibou
export const OwlIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#A3A3A3', secondaryColor = '#6B7280', accentColor = '#FBBF24', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps rond */}
        <ellipse cx="24" cy="30" rx="10" ry="12" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête */}
        <ellipse cx="24" cy="16" rx="8" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Yeux */}
        <ellipse cx="20" cy="16" rx="2.5" ry="2.5" fill={accentColor} stroke={secondaryColor} strokeWidth="1" />
        <ellipse cx="28" cy="16" rx="2.5" ry="2.5" fill={accentColor} stroke={secondaryColor} strokeWidth="1" />
        <circle cx="20" cy="16" r="1" fill="black" />
        <circle cx="28" cy="16" r="1" fill="black" />
        {/* Bec */}
        <polygon points="24,19 22,22 26,22" fill="#FBBF24" stroke={secondaryColor} strokeWidth="0.5" />
        {/* Ailes */}
        <ellipse cx="14" cy="30" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
        <ellipse cx="34" cy="30" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
        {/* Serres */}
        <rect x="21" y="40" width="2" height="4" rx="0.5" fill={accentColor} />
        <rect x="25" y="40" width="2" height="4" rx="0.5" fill={accentColor} />
    </svg>
);

// Renard
export const FoxIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#F59E42', secondaryColor = '#A16207', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps ovale orange */}
        <ellipse cx="24" cy="32" rx="8" ry="10" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête ronde orange */}
        <ellipse cx="24" cy="18" rx="7" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Oreilles triangulaires */}
        <polygon points="18,10 15,4 22,10" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
        <polygon points="30,10 33,4 26,10" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
        {/* Face blanche */}
        <ellipse cx="24" cy="20" rx="3.2" ry="2.7" fill="#fff" />
        {/* Yeux noirs */}
        <ellipse cx="22" cy="18" rx="0.7" ry="1" fill="#222" />
        <ellipse cx="26" cy="18" rx="0.7" ry="1" fill="#222" />
        {/* Nez noir */}
        <ellipse cx="24" cy="21.5" rx="0.5" ry="0.4" fill="#222" />
        {/* Queue orange */}
        <ellipse cx="36" cy="40" rx="3.5" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Bout de queue blanc */}
        <ellipse cx="36" cy="46" rx="2.2" ry="2.2" fill="#fff" stroke={secondaryColor} strokeWidth="1" />
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

// Rat Géant
export const GiantRatIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#A8A29E', secondaryColor = '#57534E', accentColor = '#F59E0B', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps massif, poil rugueux */}
        <ellipse cx="24" cy="33" rx="11" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="2.2" />
        {/* Poils hérissés */}
        <line x1="18" y1="27" x2="16" y2="24" stroke={secondaryColor} strokeWidth="1.2" />
        <line x1="22" y1="26" x2="21" y2="22" stroke={secondaryColor} strokeWidth="1.2" />
        <line x1="26" y1="27" x2="28" y2="24" stroke={secondaryColor} strokeWidth="1.2" />
        <line x1="30" y1="28" x2="32" y2="25" stroke={secondaryColor} strokeWidth="1.2" />
        {/* Tête allongée, museau pointu */}
        <ellipse cx="24" cy="16" rx="8" ry="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        <ellipse cx="24" cy="20" rx="5" ry="2.5" fill="#B6A28B" stroke={secondaryColor} strokeWidth="1" />
        {/* Narines */}
        <ellipse cx="22.5" cy="20.5" rx="0.5" ry="0.8" fill="black" />
        <ellipse cx="25.5" cy="20.5" rx="0.5" ry="0.8" fill="black" />
        {/* Yeux rouges menaçants */}
        <ellipse cx="20" cy="15" rx="1.2" ry="2" fill="#DC2626" />
        <ellipse cx="28" cy="15" rx="1.2" ry="2" fill="#DC2626" />
        <ellipse cx="20" cy="15" rx="0.7" ry="1.2" fill="black" />
        <ellipse cx="28" cy="15" rx="0.7" ry="1.2" fill="black" />
        {/* Cicatrices */}
        <line x1="22" y1="13" x2="24" y2="15" stroke="#B91C1C" strokeWidth="0.7" />
        <line x1="26" y1="14" x2="28" y2="16" stroke="#B91C1C" strokeWidth="0.7" />
        {/* Oreilles déchirées */}
        <ellipse cx="16" cy="12" rx="2.2" ry="3" fill={accentColor} stroke={secondaryColor} strokeWidth="1" />
        <path d="M15 10Q14 8 16 9Q17 10 16 12" stroke={secondaryColor} strokeWidth="0.8" />
        <ellipse cx="32" cy="12" rx="2.2" ry="3" fill={accentColor} stroke={secondaryColor} strokeWidth="1" />
        <path d="M33 10Q34 8 32 9Q31 10 32 12" stroke={secondaryColor} strokeWidth="0.8" />
        {/* Dents proéminentes */}
        <rect x="22" y="21.5" width="1.2" height="2.5" rx="0.2" fill="white" stroke={secondaryColor} strokeWidth="0.3" />
        <rect x="24.8" y="21.5" width="1.2" height="2.5" rx="0.2" fill="white" stroke={secondaryColor} strokeWidth="0.3" />
        {/* Crocs inférieurs */}
        <rect x="23.2" y="24" width="1" height="1.5" rx="0.2" fill="#B6A28B" stroke={secondaryColor} strokeWidth="0.2" />
        {/* Queue rugueuse, cicatrisée */}
        <path d="M34 33Q39 37 41 44Q39 45 37 43Q36 41 38 40" stroke={accentColor} strokeWidth="2.2" />
        <ellipse cx="41" cy="44" rx="1.2" ry="0.7" fill="#F59E0B" opacity="0.7" />
        {/* Pattes griffues */}
        <rect x="18" y="38" width="2.2" height="6" rx="0.7" fill={secondaryColor} />
        <rect x="27.8" y="38" width="2.2" height="6" rx="0.7" fill={secondaryColor} />
        <ellipse cx="19" cy="44" rx="1" ry="0.6" fill="#B6A28B" />
        <ellipse cx="29" cy="44" rx="1" ry="0.6" fill="#B6A28B" />
        {/* Griffes */}
        <line x1="18.5" y1="44.5" x2="18" y2="45.5" stroke={secondaryColor} strokeWidth="0.5" />
        <line x1="19" y1="44.5" x2="19" y2="45.5" stroke={secondaryColor} strokeWidth="0.5" />
        <line x1="19.5" y1="44.5" x2="20" y2="45.5" stroke={secondaryColor} strokeWidth="0.5" />
        <line x1="28.5" y1="44.5" x2="28" y2="45.5" stroke={secondaryColor} strokeWidth="0.5" />
        <line x1="29" y1="44.5" x2="29" y2="45.5" stroke={secondaryColor} strokeWidth="0.5" />
        <line x1="29.5" y1="44.5" x2="30" y2="45.5" stroke={secondaryColor} strokeWidth="0.5" />
        {/* Aura de saleté */}
        <ellipse cx="24" cy="33" rx="13" ry="10" fill={secondaryColor} opacity="0.08" />
    </svg>
);
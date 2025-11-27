import type { MonsterIconProps } from ".";


// Dragon
export const DragonIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#A3A3A3', secondaryColor = '#6B7280', accentColor = '#FBBF24', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps */}
        <ellipse cx="24" cy="32" rx="10" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête */}
        <ellipse cx="24" cy="18" rx="7" ry="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Yeux */}
        <ellipse cx="21" cy="16" rx="1.2" ry="2" fill={accentColor} />
        <ellipse cx="27" cy="16" rx="1.2" ry="2" fill={accentColor} />
        {/* Ailes */}
        <ellipse cx="14" cy="28" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
        <ellipse cx="34" cy="28" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
        {/* Queue */}
        <path d="M32 32Q38 36 40 44" stroke={accentColor} strokeWidth="2" />
        {/* Cornes */}
        <path d="M20 14Q18 10 22 12" stroke={secondaryColor} strokeWidth="1.2" />
        <path d="M28 14Q30 10 26 12" stroke={secondaryColor} strokeWidth="1.2" />
    </svg>
);


// Wyvern
export const WyvernIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#FBBF24', secondaryColor = '#A16207', accentColor = '#F59E42', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps */}
        <ellipse cx="24" cy="32" rx="9" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête */}
        <ellipse cx="24" cy="18" rx="7" ry="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Yeux */}
        <ellipse cx="21" cy="16" rx="1.2" ry="2" fill={accentColor} />
        <ellipse cx="27" cy="16" rx="1.2" ry="2" fill={accentColor} />
        {/* Ailes */}
        <ellipse cx="14" cy="28" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
        <ellipse cx="34" cy="28" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
        {/* Queue */}
        <path d="M32 32Q38 36 40 44" stroke={accentColor} strokeWidth="2" />
    </svg>
);

// Drake
export const DrakeIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#A3A3A3', secondaryColor = '#6B7280', accentColor = '#FBBF24', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps */}
        <ellipse cx="24" cy="32" rx="9" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête */}
        <ellipse cx="24" cy="18" rx="7" ry="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Yeux */}
        <ellipse cx="21" cy="16" rx="1.2" ry="2" fill={accentColor} />
        <ellipse cx="27" cy="16" rx="1.2" ry="2" fill={accentColor} />
        {/* Queue */}
        <path d="M32 32Q38 36 40 44" stroke={accentColor} strokeWidth="2" />
    </svg>
);

// Guardian Dragon
export const GuardianDragonIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#F59E0B', secondaryColor = '#B45309', accentColor = '#FBBF24', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps massif */}
        <ellipse cx="24" cy="32" rx="13" ry="11" fill={primaryColor} stroke={secondaryColor} strokeWidth="2.5" />
        {/* Tête */}
        <ellipse cx="24" cy="15" rx="9" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="2.5" />
        {/* Yeux */}
        <ellipse cx="20" cy="13" rx="3" ry="4" fill={accentColor} />
        <ellipse cx="28" cy="13" rx="3" ry="4" fill={accentColor} />
        {/* Cornes */}
        <path d="M17 9L14 4Q13 2 14 3" stroke={secondaryColor} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M31 9L34 4Q35 2 34 3" stroke={secondaryColor} strokeWidth="3.5" strokeLinecap="round" />
        {/* Bouclier */}
        <ellipse cx="24" cy="28" rx="5" ry="3" fill="#FBBF24" opacity="0.5" />
    </svg>
);


// Whelp
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

// Ancient Dragon
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
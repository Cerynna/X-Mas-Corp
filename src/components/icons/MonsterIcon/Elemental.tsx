// Élémentaire de vent
export const AirElementalIcon: React.FC<MonsterIconProps> = ({
    primaryColor = '#A7F3D0',
    secondaryColor = '#38BDF8',
    accentColor = '#F0F9FF',
    size = 64,
}) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="windTornado" cx="24" cy="24" r="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={accentColor} />
                <stop offset="60%" stopColor={primaryColor} />
                <stop offset="100%" stopColor={secondaryColor} />
            </radialGradient>
        </defs>
        {/* Tornade centrale */}
    <path d="M32 60C44 52 52 44 32 38C12 44 20 52 32 60Z" fill="url(#windTornado)" stroke={secondaryColor} strokeWidth="2.5" />
    {/* Spirale interne */}
    <path d="M32 60C38 54 44 48 32 44C20 48 26 54 32 60Z" fill={accentColor} opacity="0.3" />
    {/* Nuages autour */}
    <ellipse cx="20" cy="44" rx="7" ry="3.5" fill={accentColor} opacity="0.7" />
    <ellipse cx="44" cy="44" rx="6" ry="3" fill={accentColor} opacity="0.7" />
    <ellipse cx="32" cy="28" rx="10" ry="4" fill={accentColor} opacity="0.5" />
    {/* Reflets de vent */}
    <ellipse cx="32" cy="52" rx="12" ry="3.5" fill={primaryColor} opacity="0.2" />
    {/* Aura de vent */}
    <ellipse cx="32" cy="56" rx="21" ry="9" fill={primaryColor} opacity="0.08" />
    {/* Yeux */}
    <ellipse cx="28" cy="36" rx="2.2" ry="3.2" fill="#18181B" />
    <ellipse cx="36" cy="36" rx="2.2" ry="3.2" fill="#18181B" />
    <circle cx="28" cy="36" r="1.2" fill={secondaryColor} />
    <circle cx="36" cy="36" r="1.2" fill={secondaryColor} />
    </svg>
);
// Élémentaire de terre
export const EarthElementalIcon: React.FC<MonsterIconProps> = ({
    primaryColor = '#A3A3A3',
    secondaryColor = '#78716C',
    accentColor = '#D6D3D1',
    size = 64,
}) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="rockBody" cx="24" cy="28" r="18" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={accentColor} />
                <stop offset="60%" stopColor={primaryColor} />
                <stop offset="100%" stopColor={secondaryColor} />
            </radialGradient>
        </defs>
        {/* Corps principal : amas de pierres */}
    <ellipse cx="32" cy="44" rx="18" ry="12" fill="url(#rockBody)" stroke={secondaryColor} strokeWidth="2.5" />
    <ellipse cx="20" cy="50" rx="7" ry="4" fill={primaryColor} opacity="0.7" />
    <ellipse cx="44" cy="50" rx="6" ry="3.5" fill={primaryColor} opacity="0.7" />
    <ellipse cx="38" cy="34" rx="4" ry="2.5" fill={secondaryColor} opacity="0.6" />
    <ellipse cx="26" cy="34" rx="3.5" ry="2" fill={secondaryColor} opacity="0.6" />
    {/* Visage stylisé avec yeux */}
    <ellipse cx="28" cy="40" rx="2.2" ry="3.2" fill="#18181B" />
    <ellipse cx="36" cy="40" rx="2.2" ry="3.2" fill="#18181B" />
    <circle cx="28" cy="40" r="1.2" fill={primaryColor} />
    <circle cx="36" cy="40" r="1.2" fill={primaryColor} />
    <path d="M28 46Q32 48 36 46" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
    {/* Pierres volantes */}
    <circle cx="16" cy="34" r="1.5" fill={accentColor} opacity="0.5" />
    <circle cx="48" cy="34" r="1.5" fill={accentColor} opacity="0.5" />
    <circle cx="32" cy="60" r="2" fill={secondaryColor} opacity="0.3" />
    {/* Aura de terre */}
    <ellipse cx="32" cy="56" rx="21" ry="9" fill={primaryColor} opacity="0.08" />
    </svg>
);
import type { MonsterIconProps } from "./MonsterIcon";

// Élémentaire de glace
export const IceElementalIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#60A5FA', secondaryColor = '#3B82F6', accentColor = '#DBEAFE', size = 64 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="waterDrop" cx="24" cy="24" r="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={accentColor} />
                <stop offset="60%" stopColor={primaryColor} />
                <stop offset="100%" stopColor={secondaryColor} />
            </radialGradient>
        </defs>
        {/* Goutte d'eau inversée stylisée */}
    <path d="M32 60Q48 38 32 12Q16 38 32 60Z" fill="url(#waterDrop)" stroke={secondaryColor} strokeWidth="2.5" />
    {/* Reflets et effet d'eau */}
    <ellipse cx="32" cy="44" rx="10" ry="4" fill={accentColor} opacity="0.3" />
    <ellipse cx="32" cy="52" rx="7" ry="3" fill={primaryColor} opacity="0.15" />
    {/* Gouttelettes */}
    <circle cx="24" cy="56" r="1.5" fill={accentColor} opacity="0.6" />
    <circle cx="40" cy="56" r="1.5" fill={accentColor} opacity="0.6" />
    <circle cx="32" cy="60" r="2" fill={accentColor} opacity="0.5" />
    {/* Aura d'eau */}
    <ellipse cx="32" cy="56" rx="18" ry="9" fill={primaryColor} opacity="0.08" />
    {/* Yeux */}
    <ellipse cx="28" cy="36" rx="2.2" ry="3.2" fill="#18181B" />
    <ellipse cx="36" cy="36" rx="2.2" ry="3.2" fill="#18181B" />
    <circle cx="28" cy="36" r="1.2" fill={primaryColor} />
    <circle cx="36" cy="36" r="1.2" fill={primaryColor} />
    </svg>
);

// Élémentaire de feu
export const FireElementalIcon: React.FC<MonsterIconProps> = ({
    primaryColor = '#EF4444',
    secondaryColor = '#F97316',
    accentColor = '#FBBF24',
    size = 64,
}) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="flameTornado" cx="24" cy="24" r="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={accentColor} />
                <stop offset="40%" stopColor={secondaryColor} />
                <stop offset="100%" stopColor={primaryColor} />
            </radialGradient>
        </defs>
        {/* Tornade de flamme */}
    <path d="M32 60C42 54 52 44 40 38C56 32 48 20 32 26C16 20 8 32 24 38C12 44 22 54 32 60Z" fill="url(#flameTornado)" stroke={primaryColor} strokeWidth="2.5" />
    {/* Spirale interne */}
    <path d="M32 60C36 52 44 46 32 40C20 46 28 52 32 60Z" fill={accentColor} opacity="0.3" />
    {/* Reflets de flammes */}
    <ellipse cx="32" cy="44" rx="10" ry="4" fill={accentColor} opacity="0.4" />
    {/* Étincelles */}
    <circle cx="24" cy="52" r="1.5" fill={accentColor} opacity="0.7" />
    <circle cx="40" cy="52" r="1.5" fill={accentColor} opacity="0.7" />
    <circle cx="32" cy="56" r="2" fill={secondaryColor} opacity="0.5" />
    {/* Aura de chaleur */}
    <ellipse cx="32" cy="56" rx="18" ry="9" fill={primaryColor} opacity="0.08" />
    {/* Yeux */}
    <ellipse cx="28" cy="36" rx="2.2" ry="3.2" fill="#18181B" />
    <ellipse cx="36" cy="36" rx="2.2" ry="3.2" fill="#18181B" />
    <circle cx="28" cy="36" r="1.2" fill={primaryColor} />
    <circle cx="36" cy="36" r="1.2" fill={primaryColor} />
    </svg>
);

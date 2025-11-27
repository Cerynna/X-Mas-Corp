import type { MonsterIconProps } from ".";

// Squelette
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

// Fantôme
export const GhostIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#F3F4F6', secondaryColor = '#A3A3A3', accentColor = '#DC2626', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps flottant, contours irréguliers */}
        <path d="M12 24Q10 38 24 40Q38 38 36 24Q35 16 24 12Q13 16 12 24Z" fill={primaryColor} opacity="0.85" stroke={secondaryColor} strokeWidth="1.5" />
        {/* Tête fusionnée, visage effrayant */}
        <ellipse cx="24" cy="18" rx="7" ry="6" fill={primaryColor} opacity="0.95" stroke={secondaryColor} strokeWidth="1.2" />
        {/* Yeux lumineux, ronds, menaçants */}
        <ellipse cx="21" cy="17" rx="1.5" ry="2.2" fill={accentColor} opacity="0.85" />
        <ellipse cx="27" cy="17" rx="1.5" ry="2.2" fill={accentColor} opacity="0.85" />
        <ellipse cx="21" cy="17" rx="0.7" ry="1.2" fill="white" opacity="0.7" />
        <ellipse cx="27" cy="17" rx="0.7" ry="1.2" fill="white" opacity="0.7" />
        {/* Bouche spectrale, cri silencieux */}
        <path d="M22 20Q24 23 26 20Q24 22 22 20Z" fill="black" opacity="0.5" />
        {/* Bras vaporeux, flottants, enroulés vers le bas */}
        <path d="M15 22Q10 28 16 34Q18 36 19 34Q17 32 15 22Z" fill={primaryColor} opacity="0.6" />
        <path d="M33 22Q38 28 32 34Q30 36 29 34Q31 32 33 22Z" fill={primaryColor} opacity="0.6" />
        {/* Bas très effiloché, traînées fantomatiques */}
        <path d="M14 38Q18 44 24 41Q30 44 34 38" stroke={secondaryColor} strokeWidth="1.5" />
        <path d="M18 41Q20 44 22 41" stroke={secondaryColor} strokeWidth="1" opacity="0.7" />
        <path d="M26 41Q28 44 30 41" stroke={secondaryColor} strokeWidth="1" opacity="0.7" />
        {/* Aura spectrale, effet de brume */}
        <ellipse cx="24" cy="30" rx="14" ry="18" fill={accentColor} opacity="0.07" />
        <ellipse cx="24" cy="24" rx="18" ry="10" fill={primaryColor} opacity="0.04" />
    </svg>
);

// Gargouille
export const GargoyleIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#A3A3A3', secondaryColor = '#57534E', accentColor = '#F59E0B', size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corps pierreux */}
        <ellipse cx="24" cy="32" rx="9" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Tête */}
        <ellipse cx="24" cy="18" rx="7" ry="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
        {/* Yeux */}
        <ellipse cx="21" cy="16" rx="1.2" ry="2" fill={accentColor} />
        <ellipse cx="27" cy="16" rx="1.2" ry="2" fill={accentColor} />
        {/* Ailes */}
        <ellipse cx="14" cy="28" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
        <ellipse cx="34" cy="28" rx="3" ry="7" fill={secondaryColor} opacity="0.7" />
        {/* Griffes */}
        <rect x="21" y="38" width="2" height="4" rx="0.5" fill={secondaryColor} />
        <rect x="25" y="38" width="2" height="4" rx="0.5" fill={secondaryColor} />
    </svg>
);

// Gobelin
export const GoblinIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#8FBC8F', secondaryColor = '#556B2F', accentColor = '#FFEB3B',  size = 48,}) => (
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

// Zombie
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

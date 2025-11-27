import type { Monster } from '../../../types/monsters';
import {
  OwlIcon, FoxIcon, WolfIcon, BoarIcon,
  GiantRatIcon, BanditIcon, MurlocIcon, ThiefIcon,
  SkeletonIcon, GargoyleIcon, GhostIcon, ZombieIcon,
  IceElementalIcon, FireElementalIcon, AirElementalIcon, EarthElementalIcon,
  DemonIcon, FelguardIcon, ImpIcon, MinorDemonIcon, SuccubusIcon,
  IceGiantIcon, StoneGiantIcon, TrollBruteIcon,
  AncientDragonIcon, DragonIcon, DrakeIcon, GuardianDragonIcon, WhelpIcon, WyvernIcon

} from './AllIcon';


export interface MonsterIconProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  size?: number;
}


// Icône monstre par défaut
const DefaultMonsterIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#A3A3A3', secondaryColor = '#6B7280', accentColor = '#FBBF24', size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Silhouette générique */}
    <ellipse cx="24" cy="32" rx="10" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    {/* Tête */}
    <ellipse cx="24" cy="18" rx="7" ry="6" fill={primaryColor} stroke={secondaryColor} strokeWidth="2" />
    {/* Yeux */}
    <ellipse cx="21" cy="16" rx="1.2" ry="2" fill={accentColor} />
    <ellipse cx="27" cy="16" rx="1.2" ry="2" fill={accentColor} />
    {/* Bouche simple */}
    <ellipse cx="24" cy="22" rx="2" ry="1" fill={secondaryColor} opacity="0.5" />
    {/* Aura */}
    <ellipse cx="24" cy="32" rx="14" ry="10" fill={accentColor} opacity="0.08" />
  </svg>
);

export const MonsterIcon: React.FC<MonsterIconProps & { monster: Monster }> = ({ monster, size = 64 }) => {
  const cleaned = monster.id.replace(/-(\d+)$/, "");
  switch (cleaned) {
    // Level 1-5
    case "wolf":
      return <WolfIcon size={size} />;
    case "fox":
      return <FoxIcon size={size} />;
    case "boar":
      return <BoarIcon size={size} />;
    case "owl":
      return <OwlIcon size={size} />;
    // Level 5-15
    case "giant-rat":
      return <GiantRatIcon size={size} />;
    case "bandit":
      return <BanditIcon size={size} />;
    case "murloc":
      return <MurlocIcon size={size} />;
    case "thief":
      return <ThiefIcon size={size} />;
    // Level 10-15
    case "skeleton":
      return <SkeletonIcon size={size} />;
    case "gargoyle":
      return <GargoyleIcon size={size} />;
    case "ghost":
      return <GhostIcon size={size} />;
    case "ghoul":
      return <ZombieIcon size={size} />;
    // Level 15-20
    case "ice-elemental":
      return <IceElementalIcon size={size} />;
    case "fire-elemental":
      return <FireElementalIcon size={size} />;
    case "air-elemental":
      return <AirElementalIcon size={size} />;
    case "earth-elemental":
      return <EarthElementalIcon size={size} />;
    // Level 20-25
    case "demon":
      return <DemonIcon size={size} />;
    case "felguard":
      return <FelguardIcon size={size} />;
    case "imp":
      return <ImpIcon size={size} />;
    case "minor-demon":
      return <MinorDemonIcon size={size} />;
    case "succubus":
      return <SuccubusIcon size={size} />;
    // Level 25-32
    case "ice-giant":
      return <IceGiantIcon size={size} />;
    case "giant":
      return <StoneGiantIcon size={size} />;
    case "troll-brute":
      return <TrollBruteIcon size={size} />;
    // Level 30+
    case "whelp":
      return <WhelpIcon size={size} />;
    case "ancient-dragon":
      return <AncientDragonIcon size={size} />;
    case "dragon":
      return <DragonIcon size={size} />;
    case "drake":
      return <DrakeIcon size={size} />;
    case "guardian-dragon":
      return <GuardianDragonIcon size={size} />;
    case "wyvern":
      return <WyvernIcon size={size} />;
  }
  // Par défaut: default monster icon
  return <DefaultMonsterIcon size={size} />;
};


// Élémentaire Mineur de Pierre
// export const MinorStoneElementalIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#78716C', secondaryColor = '#57534E', accentColor = '#A8A29E', size = 48 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//     {/* Amas de pierres vivant */}
//     <ellipse cx="24" cy="34" rx="10" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="2.2" />
//     <ellipse cx="16" cy="40" rx="4" ry="3" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.2" />
//     <ellipse cx="32" cy="40" rx="4" ry="3" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.2" />
//     <ellipse cx="24" cy="44" rx="5" ry="2.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.2" />
//     {/* Pierres flottantes autour */}
//     <ellipse cx="10" cy="28" rx="2" ry="1.2" fill={accentColor} opacity="0.7" />
//     <ellipse cx="38" cy="28" rx="2" ry="1.2" fill={accentColor} opacity="0.7" />
//     <ellipse cx="24" cy="10" rx="2.5" ry="1.2" fill={accentColor} opacity="0.7" />
//     {/* Visage rocailleux menaçant */}
//     <ellipse cx="20" cy="32" rx="1.2" ry="2" fill={secondaryColor} />
//     <ellipse cx="28" cy="32" rx="1.2" ry="2" fill={secondaryColor} />
//     <ellipse cx="24" cy="36" rx="2.5" ry="1.2" fill={accentColor} opacity="0.7" />
//     {/* Fissures et cicatrices */}
//     <path d="M18 34Q20 36 22 34" stroke={secondaryColor} strokeWidth="0.7" />
//     <path d="M26 34Q28 36 30 34" stroke={secondaryColor} strokeWidth="0.7" />
//     <path d="M24 30Q25 32 26 30" stroke={accentColor} strokeWidth="0.7" />
//     {/* Aura de poussière */}
//     <ellipse cx="24" cy="34" rx="14" ry="10" fill={secondaryColor} opacity="0.08" />
//   </svg>
// );

// // Élémentaire Mineur de Foudre
// export const MinorLightningElementalIcon: React.FC<MonsterIconProps> = ({ primaryColor = '#FDE047', secondaryColor = '#F59E0B', size = 48 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//     {/* Tornade d'air */}
//     <defs>
//       <radialGradient id="airSpin" cx="24" cy="24" r="20" gradientUnits="userSpaceOnUse">
//         <stop offset="0%" stopColor="#FDE047" />
//         <stop offset="60%" stopColor="#FBBF24" />
//         <stop offset="100%" stopColor="#F59E0B" />
//       </radialGradient>
//     </defs>
//     <path d="M16 40Q24 8 32 40Q28 36 24 44Q20 36 16 40Z" fill="url(#airSpin)" stroke={secondaryColor} strokeWidth="2" />
//     {/* Spirale interne */}
//     <path d="M20 38Q24 20 28 38" stroke="#FBBF24" strokeWidth="2" opacity="0.7" />
//     {/* Visage d'air */}
//     <ellipse cx="24" cy="30" rx="3" ry="4" fill="#FFFDE7" opacity="0.7" />
//     <ellipse cx="22.5" cy="29" rx="0.8" ry="1.2" fill="#F59E0B" />
//     <ellipse cx="25.5" cy="29" rx="0.8" ry="1.2" fill="#F59E0B" />
//     <path d="M22 33Q24 35 26 33" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />
//     {/* Particules */}
//     <circle cx="14" cy="24" r="1" fill="#FDE047" opacity="0.7" />
//     <circle cx="34" cy="24" r="1" fill="#FDE047" opacity="0.7" />
//     <circle cx="18" cy="16" r="0.8" fill="#FBBF24" opacity="0.6" />
//     <circle cx="30" cy="16" r="0.8" fill="#FBBF24" opacity="0.6" />
//     {/* Aura d'air */}
//     <ellipse cx="24" cy="32" rx="14" ry="10" fill={primaryColor} opacity="0.08" />
//   </svg>
// );








// export const OrcIcon: React.FC<MonsterIconProps> = ({
//   primaryColor = '#6B8E23',
//   secondaryColor = '#556B2F',
//   accentColor = '#FFD700',
//   size = 48,
// }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//     {/* Corps massif */}
//     <ellipse cx="24" cy="34" rx="11" ry="10" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
//     {/* Tête large */}
//     <ellipse cx="24" cy="17" rx="9" ry="8" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />
//     {/* Front proéminent */}
//     <path d="M17 14Q24 12 31 14" fill={secondaryColor} opacity="0.3" />
//     {/* Yeux rouges féroces */}
//     <ellipse cx="20" cy="16" rx="2" ry="2.5" fill="#8B0000" />
//     <ellipse cx="28" cy="16" rx="2" ry="2.5" fill="#8B0000" />
//     <circle cx="20.5" cy="15.5" r="0.5" fill="#FF0000" />
//     <circle cx="28.5" cy="15.5" r="0.5" fill="#FF0000" />
//     {/* Défenses */}
//     <path d="M20 21L19 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//     <path d="M28 21L29 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//     {/* Bouche large */}
//     <path d="M18 22Q24 25 30 22" stroke={secondaryColor} strokeWidth="1.5" fill="none" />
//     {/* Cicatrices */}
//     <line x1="26" y1="13" x2="29" y2="15" stroke={secondaryColor} strokeWidth="0.8" />
//     <line x1="15" y1="18" x2="17" y2="20" stroke={secondaryColor} strokeWidth="0.8" />
//     {/* Bras musclés */}
//     <ellipse cx="14" cy="32" rx="3" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
//     <ellipse cx="34" cy="32" rx="3" ry="7" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
//     {/* Armure/pendentif */}
//     <circle cx="24" cy="28" r="2" fill={accentColor} stroke={secondaryColor} strokeWidth="0.5" />
//   </svg>
// );





// export const SlimeIcon: React.FC<MonsterIconProps> = ({
//   primaryColor = '#32CD32',
//   secondaryColor = '#228B22',
//   accentColor = '#90EE90',
//   size = 48,
// }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//     {/* Corps gélatineux */}
//     <ellipse cx="24" cy="30" rx="14" ry="12" fill={primaryColor} opacity="0.8" stroke={secondaryColor} strokeWidth="1.5" />
//     {/* Base qui s'étale */}
//     <ellipse cx="24" cy="38" rx="15" ry="4" fill={secondaryColor} opacity="0.4" />
//     {/* Reflets de gelée */}
//     <ellipse cx="18" cy="26" rx="4" ry="5" fill={accentColor} opacity="0.5" />
//     <ellipse cx="28" cy="24" rx="3" ry="4" fill={accentColor} opacity="0.5" />
//     {/* Yeux simples flottants */}
//     <circle cx="20" cy="28" r="3" fill="white" opacity="0.9" />
//     <circle cx="28" cy="28" r="3" fill="white" opacity="0.9" />
//     <circle cx="20.5" cy="28" r="1.5" fill="black" />
//     <circle cx="28.5" cy="28" r="1.5" fill="black" />
//     {/* Reflets brillants sur les yeux */}
//     <circle cx="19.5" cy="27" r="0.8" fill="white" />
//     <circle cx="27.5" cy="27" r="0.8" fill="white" />
//     {/* Bulles dans le slime */}
//     <circle cx="16" cy="32" r="1.5" fill={accentColor} opacity="0.6" />
//     <circle cx="24" cy="34" r="1" fill={accentColor} opacity="0.6" />
//     <circle cx="30" cy="30" r="1.2" fill={accentColor} opacity="0.6" />
//     <circle cx="26" cy="36" r="0.8" fill={accentColor} opacity="0.6" />
//     {/* Bouche simple */}
//     <path d="M22 32Q24 33 26 32" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.7" />
//   </svg>
// );

// export const ZombieIcon: React.FC<MonsterIconProps> = ({
//   primaryColor = '#6B7C59',
//   secondaryColor = '#4A5842',
//   accentColor = '#8B4513',
//   size = 48,
// }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//     {/* Corps décharné et décomposé */}
//     <ellipse cx="24" cy="34" rx="10" ry="11" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" opacity="0.95" />

//     {/* Déchirures sur le corps */}
//     <path d="M18 30L20 32" stroke="#8B0000" strokeWidth="1.5" opacity="0.7" />
//     <path d="M28 32L30 34" stroke="#8B0000" strokeWidth="1.5" opacity="0.7" />

//     {/* Chair en décomposition */}
//     <ellipse cx="20" cy="32" rx="2" ry="3" fill="#4A5842" opacity="0.6" />
//     <ellipse cx="28" cy="35" rx="2.5" ry="3" fill="#4A5842" opacity="0.6" />

//     {/* Côtes apparentes */}
//     <path d="M20 34Q24 33 28 34" stroke="#D3D3D3" strokeWidth="0.8" opacity="0.4" />
//     <path d="M20 36Q24 35 28 36" stroke="#D3D3D3" strokeWidth="0.8" opacity="0.4" />

//     {/* Tête en décomposition */}
//     <ellipse cx="24" cy="16" rx="8.5" ry="9" fill={primaryColor} stroke={secondaryColor} strokeWidth="1.5" />

//     {/* Peau décomposée sur le crâne */}
//     <path d="M17 14Q24 13 31 14" stroke={secondaryColor} strokeWidth="1" opacity="0.5" />
//     <ellipse cx="19" cy="12" rx="1.5" ry="2" fill="#4A5842" opacity="0.5" />
//     <ellipse cx="29" cy="13" rx="1.5" ry="2" fill="#4A5842" opacity="0.5" />

//     {/* Cheveux décharnés et sales */}
//     <path d="M17 9L16 6" stroke={accentColor} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
//     <path d="M20 8L19 5" stroke={accentColor} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
//     <path d="M24 7L24 4" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
//     <path d="M28 8L29 5" stroke={accentColor} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
//     <path d="M31 10L32 7" stroke={accentColor} strokeWidth="2" strokeLinecap="round" opacity="0.7" />

//     {/* Yeux morts et blancs */}
//     <ellipse cx="20" cy="15" rx="2.5" ry="3" fill="#F5F5DC" opacity="0.9" />
//     <ellipse cx="28" cy="15" rx="2.5" ry="3" fill="#F5F5DC" opacity="0.9" />
//     {/* Pupilles dilatées mortes */}
//     <circle cx="20" cy="15.5" r="1.5" fill="#696969" opacity="0.6" />
//     <circle cx="28" cy="15.5" r="1.5" fill="#696969" opacity="0.6" />
//     {/* Vaisseaux éclatés */}
//     <line x1="18" y1="14" x2="17" y2="15" stroke="#8B0000" strokeWidth="0.5" opacity="0.6" />
//     <line x1="30" y1="14" x2="31" y2="15" stroke="#8B0000" strokeWidth="0.5" opacity="0.6" />

//     {/* Bouche béante avec chair pourrie */}
//     <ellipse cx="24" cy="21" rx="4" ry="2.5" fill="black" opacity="0.7" />
//     <path d="M21 20Q24 22 27 20" stroke="#4A5842" strokeWidth="1" fill="none" />
//     {/* Dents cassées et pourries */}
//     <rect x="21" y="19.5" width="1.2" height="2" rx="0.2" fill="#D2B48C" opacity="0.8" />
//     <rect x="23.5" y="19.5" width="1" height="1.5" rx="0.2" fill="#D2B48C" opacity="0.7" />
//     <rect x="25.5" y="19.5" width="1.2" height="2" rx="0.2" fill="#D2B48C" opacity="0.8" />

//     {/* Plaies et blessures sur le visage */}
//     <ellipse cx="28" cy="18" rx="1.5" ry="1" fill="#8B0000" opacity="0.6" />
//     <path d="M17 18L19 20" stroke="#8B0000" strokeWidth="1.2" opacity="0.6" />
//     <circle cx="26" cy="12" r="0.8" fill="#8B0000" opacity="0.5" />

//     {/* Nez en décomposition */}
//     <path d="M24 17L23 19L25 19Z" fill="#4A5842" opacity="0.6" />

//     {/* Bras tendus en avant (posture de zombie) */}
//     <path d="M15 30Q12 32 10 35" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
//     <path d="M33 30Q36 32 38 35" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
//     {/* Chair pendante sur les bras */}
//     <path d="M12 33L11 34" stroke="#4A5842" strokeWidth="1.5" opacity="0.5" />
//     <path d="M36 33L37 34" stroke="#4A5842" strokeWidth="1.5" opacity="0.5" />

//     {/* Mains décharnées */}
//     <ellipse cx="10" cy="35" rx="2" ry="2.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
//     <ellipse cx="38" cy="35" rx="2" ry="2.5" fill={primaryColor} stroke={secondaryColor} strokeWidth="1" />
//     {/* Doigts griffus */}
//     <path d="M9 36L8 38M10 36L10 39M11 36L12 38" stroke={secondaryColor} strokeWidth="1.2" strokeLinecap="round" />
//     <path d="M37 36L36 38M38 36L38 39M39 36L40 38" stroke={secondaryColor} strokeWidth="1.2" strokeLinecap="round" />
//     {/* Ongles noirs */}
//     <circle cx="8" cy="38" r="0.4" fill="black" />
//     <circle cx="10" cy="39" r="0.4" fill="black" />
//     <circle cx="12" cy="38" r="0.4" fill="black" />
//     <circle cx="36" cy="38" r="0.4" fill="black" />
//     <circle cx="38" cy="39" r="0.4" fill="black" />
//     <circle cx="40" cy="38" r="0.4" fill="black" />

//     {/* Lambeaux de vêtements déchirés */}
//     <path d="M18 40Q20 42 22 41" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.6" />
//     <path d="M26 40Q28 42 30 41" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.6" />

//     {/* Taches de sang et fluides */}
//     <circle cx="22" cy="28" r="1.2" fill="#8B0000" opacity="0.5" />
//     <circle cx="26" cy="31" r="1" fill="#8B0000" opacity="0.5" />
//     <circle cx="24" cy="36" r="0.8" fill="#4A5842" opacity="0.4" />
//     <ellipse cx="20" cy="38" rx="1.5" ry="1" fill="#4A5842" opacity="0.3" />

//     {/* Jambes chancelantes */}
//     <path d="M20 42Q19 44 18 46" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
//     <path d="M28 42Q29 44 30 46" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />

//     {/* Mouches autour (décomposition) */}
//     <circle cx="14" cy="20" r="0.6" fill="black" opacity="0.4" />
//     <circle cx="34" cy="22" r="0.6" fill="black" opacity="0.4" />
//     <circle cx="18" cy="26" r="0.5" fill="black" opacity="0.4" />

//     {/* Aura de putréfaction */}
//     <ellipse cx="24" cy="30" rx="14" ry="18" fill="#4A5842" opacity="0.08" />
//   </svg>
// );








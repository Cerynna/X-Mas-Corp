import styled from 'styled-components';
import {
  OwlIcon, FoxIcon, WolfIcon, BoarIcon,
  GiantRatIcon, BanditIcon, MurlocIcon, ThiefIcon,
  SkeletonIcon, GargoyleIcon, GhostIcon, ZombieIcon,
  IceElementalIcon, FireElementalIcon, AirElementalIcon, EarthElementalIcon,
  DemonIcon, FelguardIcon, ImpIcon, MinorDemonIcon, SuccubusIcon,
  IceGiantIcon, StoneGiantIcon, TrollBruteIcon,
  AncientDragonIcon, DragonIcon, DrakeIcon, GuardianDragonIcon, WhelpIcon, WyvernIcon

} from './AllIcon';
import { DefaultMonsterIcon } from './MonsterIcon';
import type { Monster, MonsterTemplate } from '../../../types/monsters';

interface MonsterIconWithLevelProps {
  monster: Monster;
  level?: number;
  size?: number;
}

const IconContainer = styled.div<{ $size: number; $level: number }>`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => {
    // Couleur selon le niveau
    if (props.$level >= 30) return 'linear-gradient(135deg, #8B000022 0%, #DC143C33 100%)';
    if (props.$level >= 20) return 'linear-gradient(135deg, #A335EE22 0%, #8020CC33 100%)';
    if (props.$level >= 10) return 'linear-gradient(135deg, #0070DD22 0%, #0052AA33 100%)';
    return 'linear-gradient(135deg, #1EFF0022 0%, #00D00033 100%)';
  }};
  border: 2px solid ${props => {
    if (props.$level >= 30) return '#DC143C';
    if (props.$level >= 20) return '#A335EE';
    if (props.$level >= 10) return '#0070DD';
    return '#1EFF00';
  }};
  box-shadow: 0 2px 8px ${props => {
    if (props.$level >= 30) return '#DC143C44';
    if (props.$level >= 20) return '#A335EE44';
    if (props.$level >= 10) return '#0070DD44';
    return '#1EFF0044';
  }};
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
  }
`;

const LevelBadge = styled.div<{ $level: number }>`
  position: absolute;
  bottom: 2px;
  right: 2px;
  background: ${props => {
    if (props.$level >= 30) return 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)';
    if (props.$level >= 20) return 'linear-gradient(135deg, #6010AA 0%, #A335EE 100%)';
    if (props.$level >= 10) return 'linear-gradient(135deg, #003D88 0%, #0070DD 100%)';
    return 'linear-gradient(135deg, #00A000 0%, #1EFF00 100%)';
  }};
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const SkullIcon = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 12px;
  z-index: 1;
`;

export const MonsterIconWithLevel: React.FC<MonsterIconWithLevelProps> = ({
  monster,
  level = 1,
  size = 64,
}: {
  monster: Monster | MonsterTemplate;
  level?: number;
  size?: number;
}) => {

  const iconSize = Math.floor(size * 0.75);

  // Déterminer l'icône selon le nom du monstre
  const getMonsterIcon = () => {

    const cleaned = monster.id.replace(/-(\d+)$/, "");

    switch (cleaned) {
      // Level 1-5
      case "wolf":
        return <WolfIcon size={iconSize} />;
      case "fox":
        return <FoxIcon size={iconSize} />;
      case "boar":
        return <BoarIcon size={iconSize} />;
      case "owl":
        return <OwlIcon size={iconSize} />;
      // Level 5-15
      case "giant-rat":
        return <GiantRatIcon size={iconSize} />;
      case "bandit":
        return <BanditIcon size={iconSize} />;
      case "murloc":
        return <MurlocIcon size={iconSize} />;
      case "thief":
        return <ThiefIcon size={iconSize} />;
      // Level 10-15
      case "skeleton":
        return <SkeletonIcon size={iconSize} />;
      case "gargoyle":
        return <GargoyleIcon size={iconSize} />;
      case "ghost":
        return <GhostIcon size={iconSize} />;
      case "ghoul":
        return <ZombieIcon size={iconSize} />;
      // Level 15-20
      case "ice-elemental":
        return <IceElementalIcon size={iconSize} />;
      case "fire-elemental":
        return <FireElementalIcon size={iconSize} />;
      case "air-elemental":
        return <AirElementalIcon size={iconSize} />;
      case "earth-elemental":
        return <EarthElementalIcon size={iconSize} />;
      // Level 20-25
      case "demon":
        return <DemonIcon size={iconSize} />;
      case "felguard":
        return <FelguardIcon size={iconSize} />;
      case "imp":
        return <ImpIcon size={iconSize} />;
      case "minor-demon":
        return <MinorDemonIcon size={iconSize} />;
      case "succubus":
        return <SuccubusIcon size={iconSize} />;
      // Level 25-32
      case "ice-giant":
        return <IceGiantIcon size={iconSize} />;
      case "giant":
        return <StoneGiantIcon size={iconSize} />;
      case "troll-brute":
        return <TrollBruteIcon size={iconSize} />;
      // Level 30+
      case "whelp":
        return <WhelpIcon size={iconSize} />;
      case "ancient-dragon":
        return <AncientDragonIcon size={iconSize} />;
      case "dragon":
        return <DragonIcon size={iconSize} />;
      case "drake":
        return <DrakeIcon size={iconSize} />;
      case "guardian-dragon":
        return <GuardianDragonIcon size={iconSize} />;
      case "wyvern":
        return <WyvernIcon size={iconSize} />;

    }

    // Par défaut: default monster icon
    return <DefaultMonsterIcon size={iconSize} />;
  };

  // Boss indicator (niveau très élevé)
  const isBoss = level >= 40;

  return (
    <IconContainer $size={size} $level={level}>
      {isBoss && <SkullIcon>💀</SkullIcon>}
      {getMonsterIcon()}
      <LevelBadge $level={level}>{level}</LevelBadge>
    </IconContainer>
  );
};

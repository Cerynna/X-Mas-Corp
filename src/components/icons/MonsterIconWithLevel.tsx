import React from 'react';
import styled from 'styled-components';
import { 
  SkeletonIcon, 
  GoblinIcon, 
  OrcIcon,
  StoneGiantIcon,
  DragonIcon, 
  SlimeIcon, 
  ZombieIcon,
  DemonIcon,
  WolfIcon,
  BoarIcon,
  MurlocIcon,
  BanditIcon,
  FireElementalIcon,
  IceElementalIcon,
  ImpIcon,
  FelguardIcon,
  WhelpIcon,
  AncientDragonIcon
} from './MonsterIcon';

interface MonsterIconWithLevelProps {
  monsterName?: string;
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
  monsterName = '',
  level = 1,
  size = 64,
}) => {
  const nameLower = monsterName.toLowerCase();
  const iconSize = Math.floor(size * 0.75);

  // Déterminer l'icône selon le nom du monstre
  const getMonsterIcon = () => {
    // Morts-vivants (Squelette, Goule, Zombie)
    if (nameLower.includes('squelette') || nameLower.includes('skeleton')) {
      return <SkeletonIcon size={iconSize} />;
    }
    if (nameLower.includes('zombie') || nameLower.includes('mort-vivant') || nameLower.includes('goule') || nameLower.includes('ghoul')) {
      return <ZombieIcon size={iconSize} />;
    }
    
    // Dragons selon l'âge
    if (nameLower.includes('ancien') || nameLower.includes('ancient') || nameLower.includes('elder')) {
      return <AncientDragonIcon size={iconSize} />;
    }
    if (nameLower.includes('dragonnet') || nameLower.includes('whelp') || nameLower.includes('jeune')) {
      return <WhelpIcon size={iconSize} />;
    }
    if (nameLower.includes('dragon') || nameLower.includes('drake') || nameLower.includes('wyrm')) {
      return <DragonIcon size={iconSize} />;
    }
    
    // Démons spécifiques
    if (nameLower.includes('diablotin') || nameLower.includes('imp')) {
      return <ImpIcon size={iconSize} />;
    }
    if (nameLower.includes('gangregarde') || nameLower.includes('felguard') || nameLower.includes('garde')) {
      return <FelguardIcon size={iconSize} />;
    }
    // Démons génériques
    if (nameLower.includes('démon') || nameLower.includes('demon') || nameLower.includes('diable')) {
      return <DemonIcon size={iconSize} />;
    }
    
    // Géants
    if (nameLower.includes('géant') || nameLower.includes('giant')) {
      return <StoneGiantIcon size={iconSize} />;
    }
    
    // Orcs
    if (nameLower.includes('orc') || nameLower.includes('ogre') || nameLower.includes('troll')) {
      return <OrcIcon size={iconSize} />;
    }
    
    // Élémentaires
    if (nameLower.includes('feu') || nameLower.includes('fire') || nameLower.includes('flamme')) {
      return <FireElementalIcon size={iconSize} />;
    }
    if (nameLower.includes('glace') || nameLower.includes('ice') || nameLower.includes('givre') || nameLower.includes('frost')) {
      return <IceElementalIcon size={iconSize} />;
    }
    
    // Slimes et autres élémentaires
    if (nameLower.includes('slime') || nameLower.includes('gelée') || nameLower.includes('gluant') ||
        nameLower.includes('élémentaire') || nameLower.includes('elemental')) {
      return <SlimeIcon size={iconSize} />;
    }
    
    // Loup
    if (nameLower.includes('loup') || nameLower.includes('wolf')) {
      return <WolfIcon size={iconSize} />;
    }
    
    // Sanglier
    if (nameLower.includes('sanglier') || nameLower.includes('boar')) {
      return <BoarIcon size={iconSize} />;
    }
    
    // Murloc
    if (nameLower.includes('murloc')) {
      return <MurlocIcon size={iconSize} />;
    }
    
    // Bandit
    if (nameLower.includes('bandit') || nameLower.includes('voleur') || nameLower.includes('brigand')) {
      return <BanditIcon size={iconSize} />;
    }
    
    // Gobelins et petits humanoïdes par défaut
    if (nameLower.includes('gobelin') || nameLower.includes('goblin') || nameLower.includes('gnome')) {
      return <GoblinIcon size={iconSize} />;
    }
    
    // Par défaut: gobelin
    return <GoblinIcon size={iconSize} />;
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

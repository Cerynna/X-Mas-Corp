import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { WowButton } from './';
import type { Character } from '../firebase/database';
import { generateMonster } from '../types/monsters';
import type { ClassAbility, WowClass } from '../types/abilities';
import { getAvailableAbilities, calculateManaCost, getAbilityIconUrl } from '../types/abilities';
import { BASE_ACTION_ICONS } from '../data/spellIcons';
import { POTIONS } from '../types/shop';
import { MonsterIconWithLevel } from './icons';
import type { EquipmentItem } from '../types/equipment';
import {
  type BattleState,
  type BattleLogEntry,
  initBattle,
  playerAttack,
  playerDefend,
  playerFlee,
  useAbility as applyAbility,
  usePotion as applyPotion,
  processMonsterTurn,
  calculateRewards,
} from '../types/battle';
import { calculateBaseStats, CLASSES } from '../types/character';

const BattleContainer = styled.div`
  // min-height: calc(100vh - 92px);
  width: 100%;
  max-width: 1200px;
  background: 
    radial-gradient(ellipse at top, rgba(139, 0, 0, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at bottom, rgba(0, 0, 139, 0.3) 0%, transparent 50%),
    linear-gradient(180deg, rgba(10, 10, 20, 0.95) 0%, rgba(20, 10, 30, 0.98) 100%);
  padding: ${({ theme }) => theme.spacing.xl};
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.03) 2px,
        rgba(0, 0, 0, 0.03) 4px
      );
    pointer-events: none;
  }
`;

const BattleArena = styled.div`
  // max-width: 900px;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const BattleField = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }

  &::before {
    content: '⚔️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    opacity: 0.1;
    z-index: 0;
    animation: pulse 2s ease-in-out infinite;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.05; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 0.15; transform: translate(-50%, -50%) scale(1.1); }
  }
`;

const Combatant = styled.div<{ $isPlayer?: boolean }>`
  background: ${({ $isPlayer }) =>
    $isPlayer
      ? 'linear-gradient(135deg, rgba(65, 105, 225, 0.15) 0%, rgba(30, 58, 138, 0.25) 100%)'
      : 'linear-gradient(135deg, rgba(178, 34, 34, 0.15) 0%, rgba(127, 29, 29, 0.25) 100%)'
  };
  border: 2px solid ${({ theme, $isPlayer }) =>
    $isPlayer ? theme.colors.alliance.blue : theme.colors.horde.red
  };
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  position: relative;
  overflow: visible;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 32px ${({ $isPlayer }) =>
    $isPlayer ? 'rgba(65, 105, 225, 0.3)' : 'rgba(178, 34, 34, 0.3)'
  },
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme, $isPlayer }) => $isPlayer ? theme.colors.alliance.blue : theme.colors.horde.red},
      transparent
    );
  }
  z-index: 1;
`;

const FloatingTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: visible;
`;

const FloatingTextItem = styled.div<{ $type: 'damage' | 'heal' | 'critical' | 'miss' | 'effect' }>`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: bold;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.9),
    -1px -1px 2px rgba(0, 0, 0, 0.9),
    1px -1px 2px rgba(0, 0, 0, 0.9),
    -1px 1px 2px rgba(0, 0, 0, 0.9);
  animation: floatUp 1.5s ease-out forwards;
  white-space: nowrap;
  
  font-size: ${({ $type }) => {
    switch ($type) {
      case 'critical': return '2.5rem';
      case 'miss': return '1.8rem';
      default: return '2rem';
    }
  }};
  
  color: ${({ $type }) => {
    switch ($type) {
      case 'damage': return '#ff4444';
      case 'heal': return '#44ff44';
      case 'critical': return '#ffaa00';
      case 'miss': return '#aaaaaa';
      case 'effect': return '#88ccff';
      default: return '#ffffff';
    }
  }};
  
  @keyframes floatUp {
    0% {
      transform: translate(-50%, -50%) translateY(0) scale(0.5);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) translateY(-60px) scale(1.2);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translateY(-120px) scale(1);
      opacity: 0;
    }
  }
`;

const CombatantIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
`;

const MonsterIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CombatantName = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary.gold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 1px;
`;

const HealthBar = styled.div`
  width: 100%;
  height: 32px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 100%
    );
    pointer-events: none;
  }
`;

const HealthFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: linear-gradient(
    90deg,
    #dc2626 0%,
    #ef4444 50%,
    #f87171 100%
  );
  box-shadow: 
    0 0 10px rgba(239, 68, 68, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: width 0.5s ease-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const HealthText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-shadow: 
    0 0 8px rgba(0, 0, 0, 1),
    1px 1px 2px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  z-index: 2;
  letter-spacing: 0.5px;
`;

const ManaBar = styled(HealthBar)`
  height: 24px;
`;

const ManaFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: linear-gradient(
    90deg,
    #1e3a8a 0%,
    #3b82f6 50%,
    #60a5fa 100%
  );
  box-shadow: 
    0 0 10px rgba(59, 130, 246, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: width 0.5s ease-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }
`;

const ManaText = styled(HealthText)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const ActionPanel = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`;

const ActionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.primary.gold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary.gold},
      transparent
    );
  }
`;

const IconButton = styled.button<{ $disabled?: boolean; $variant?: 'primary' | 'secondary' | 'danger' }>`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ $disabled }) => $disabled ? 0.4 : 1};
  position: relative;
  transition: all 0.2s ease;
  padding: 0;
  overflow: hidden;
  
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(184, 134, 11, 0.3) 100%)';
      case 'secondary':
        return 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.3) 100%)';
      case 'danger':
        return 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.3) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(100, 116, 139, 0.2) 0%, rgba(71, 85, 105, 0.3) 100%)';
    }
  }};
  
  border-color: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return theme.colors.primary.gold;
      case 'secondary':
        return theme.colors.alliance.blue;
      case 'danger':
        return theme.colors.horde.red;
      default:
        return theme.colors.neutral.silver;
    }
  }};
  
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  

  
  &:active:not(:disabled) {
    transform: translateY(-2px);
  }
`;

const SpellIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const EmojiIcon = styled.span`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const BattleLog = styled.div`
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.winter.darkIce};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  max-height: 250px;
  overflow-y: auto;
  backdrop-filter: blur(10px);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.5),
    0 4px 16px rgba(0, 0, 0, 0.3);

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.gold};
    border-radius: 4px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary.bronze};
    }
  }
`;

const BattleLogTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const LogEntry = styled.div<{ $type: BattleLogEntry['type'] }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-left: 3px solid;
  background: ${({ $type }) => {
    switch ($type) {
      case 'critical':
        return 'rgba(239, 68, 68, 0.25)';
      case 'damage':
        return 'rgba(251, 191, 36, 0.25)';
      case 'heal':
        return 'rgba(34, 197, 94, 0.25)';
      case 'victory':
        return 'rgba(34, 197, 94, 0.35)';
      case 'defeat':
        return 'rgba(239, 68, 68, 0.35)';
      default:
        return 'rgba(100, 116, 139, 0.15)';
    }
  }};
  border-left-color: ${({ $type }) => {
    switch ($type) {
      case 'critical':
        return '#ef4444';
      case 'damage':
        return '#fbbf24';
      case 'heal':
        return '#22c55e';
      case 'victory':
        return '#22c55e';
      case 'defeat':
        return '#ef4444';
      default:
        return '#64748b';
    }
  }};
  color: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const VictoryPanel = styled.div`
  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.2) 0%,
    rgba(22, 163, 74, 0.3) 100%
  );
  border: 3px solid ${({ theme }) => theme.colors.status.success};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 0 40px rgba(34, 197, 94, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(34, 197, 94, 0.1) 0%,
      transparent 70%
    );
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const VictoryTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.status.success};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: 
    0 0 20px rgba(34, 197, 94, 0.8),
    0 0 40px rgba(34, 197, 94, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: glow 2s ease-in-out infinite;
  position: relative;
  z-index: 1;

  @keyframes glow {
    0%, 100% { text-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.8); }
    50% { text-shadow: 0 0 30px rgba(34, 197, 94, 1), 0 0 50px rgba(34, 197, 94, 0.7), 2px 2px 4px rgba(0, 0, 0, 0.8); }
  }
`;

const RewardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

const RewardItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary.gold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  padding: ${({ theme }) => theme.spacing.sm};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid rgba(255, 215, 0, 0.3);
  animation: slideInUp 0.5s ease-out backwards;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

interface BattleProps {
  character: Character;
  monsterLevel?: number;
  onBattleEnd: (updatedCharacter: Character, loot?: EquipmentItem) => void;
  onExit: () => void;
}

interface FloatingText {
  id: number;
  text: string;
  type: 'damage' | 'heal' | 'critical' | 'miss' | 'effect';
  target: 'player' | 'monster';
}

export function Battle({ character, monsterLevel, onBattleEnd, onExit }: BattleProps) {
  // Animation XPBar VictoryPanel (toujours en haut du composant)
  // const [xpProgress, setXpProgress] = useState(0);
  const [battleState, setBattleState] = useState<BattleState>(() => {
    const monster = generateMonster(typeof monsterLevel === 'number' ? monsterLevel : character.level);
    return initBattle(character, monster);
  });
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);

  // Calculs pour la barre XP (toujours calculés, mais utilisés seulement en victoire)
  // const prevLevel = battleState.status === 'victory' && battleState.rewards && battleState.rewards.levelUp && battleState.rewards.newLevel ? battleState.rewards.newLevel - 1 : character.level;
  // const xpForPrevLevel = prevLevel > 1 ? Math.floor(100 * Math.pow(1.5, prevLevel - 2)) : 0;
  // const xpForNextLevel = battleState.status === 'victory' && battleState.rewards && battleState.rewards.levelUp && battleState.rewards.newLevel ? Math.floor(100 * Math.pow(1.5, battleState.rewards.newLevel - 1)) : character.experienceToNextLevel;
  // const xpGainedInLevel = battleState.status === 'victory' && battleState.rewards ? (character.experience + battleState.rewards.experience) - xpForPrevLevel : 0;
  // const xpNeededForLevel = xpForNextLevel - xpForPrevLevel;
  // const xpProgressTarget = battleState.status === 'victory' && battleState.rewards ? Math.max(0, Math.min(100, (xpGainedInLevel / xpNeededForLevel) * 100)) : 0;

  // useEffect(() => {
  //   if (battleState.status === 'victory' && battleState.rewards) {
  //     setXpProgress(0);
  //   }
  // }, [battleState.status, battleState.rewards]);
  // useEffect(() => {
  //   let frame: number | undefined;
  //   if (battleState.status === 'victory' && battleState.rewards && xpProgress < xpProgressTarget) {
  //     frame = window.setTimeout(() => {
  //       setXpProgress(prev => Math.min(xpProgressTarget, prev + 2));
  //     }, 10000);
  //   }
  //   return () => {
  //     if (frame !== undefined) {
  //       clearTimeout(frame);
  //     }
  //   };
  // }, [xpProgress, xpProgressTarget, battleState.status, battleState.rewards]);

  // Fonction pour ajouter un texte flottant
  const addFloatingText = useCallback((text: string, type: FloatingText['type'], target: 'player' | 'monster') => {
    const newId = Date.now();
    const newText: FloatingText = {
      id: newId,
      text,
      type,
      target,
    };
    setFloatingTexts(prevTexts => [...prevTexts, newText]);

    // Retirer le texte après l'animation
    setTimeout(() => {
      setFloatingTexts(prevTexts => prevTexts.filter(t => t.id !== newId));
    }, 1500);
  }, []);

  // Obtenir les capacités disponibles pour le personnage
  const availableAbilities = getAvailableAbilities(character.class as WowClass, character.level);

  // Observer les changements de vie pour afficher les dégâts/soins
  useEffect(() => {
    if (!battleState.battleLog || battleState.battleLog.length === 0) return;

    const lastLog = battleState.battleLog[battleState.battleLog.length - 1];
    if (!lastLog) return;

    // Parser le dernier message du log pour extraire les dégâts/soins
    const damageMatch = lastLog.message.match(/(\d+) dégâts/i);
    const healMatch = lastLog.message.match(/(?:récupère|soigne|restaure) (\d+)/i);
    const criticalMatch = lastLog.message.match(/critique/i);
    const missMatch = lastLog.message.match(/esquive|raté|manque/i);
    const defendMatch = lastLog.message.match(/défense|défend/i);

    // Déterminer qui REÇOIT les dégâts
    // Le joueur attaque si :
    // - "Vous attaquez" / "Vous infligez"
    // - Nom de capacité suivi de "inflige" ou "CRITIQUE"
    // - Message contient "(-X mana)" (coût de capacité)
    const isPlayerAttacking =
      lastLog.message.match(/Vous (attaquez|infligez|utilisez)/i) ||
      lastLog.message.match(/inflige \d+ dégâts ! \(-\d+ mana\)/i) ||
      lastLog.message.match(/CRITIQUE.*\(-\d+ mana\)/i);

    if (missMatch) {
      const target = isPlayerAttacking ? 'monster' : 'player';
      addFloatingText('Esquivé !', 'miss', target);
    } else if (defendMatch && !damageMatch) {
      addFloatingText('Défense +', 'effect', 'player');
    } else if (healMatch) {
      const amount = healMatch[1];
      addFloatingText(`+${amount}`, 'heal', 'player');
    } else if (damageMatch) {
      const amount = damageMatch[1];
      // Le texte apparaît sur celui qui REÇOIT les dégâts
      // Si le joueur attaque → dégâts sur le monstre
      // Si le monstre attaque → dégâts sur le joueur
      const target = isPlayerAttacking ? 'monster' : 'player';
      const type = criticalMatch ? 'critical' : 'damage';
      const text = criticalMatch ? `${amount} !!!` : amount;
      addFloatingText(text, type, target);
    }
  }, [battleState.battleLog, addFloatingText]);

  // Traiter le tour du monstre automatiquement
  useEffect(() => {
    if (battleState.turn === 'monster' && battleState.status === 'ongoing') {
      const timer = setTimeout(() => {
        setBattleState((prev) => processMonsterTurn(prev));
      }, 200); // Délai pour voir l'action du joueur

      return () => clearTimeout(timer);
    }
  }, [battleState.turn, battleState.status]);

  const handleAttack = () => {
    if (battleState.turn === 'player' && battleState.status === 'ongoing') {
      setBattleState((prev) => playerAttack(prev));
    }
  };

  const handleUseAbility = (ability: ClassAbility) => {
    if (battleState.turn === 'player' && battleState.status === 'ongoing') {
      setBattleState((prev) => applyAbility(prev, ability));
    }
  };

  const handleDefend = () => {
    if (battleState.turn === 'player' && battleState.status === 'ongoing') {
      setBattleState((prev) => playerDefend(prev));
    }
  };

  const handleFlee = () => {
    if (battleState.turn === 'player' && battleState.status === 'ongoing') {
      setBattleState((prev) => playerFlee(prev));
    }
  };

  const handleUsePotion = (potionId: string) => {
    if (battleState.turn === 'player' && battleState.status === 'ongoing') {
      setBattleState((prev) => applyPotion(prev, potionId));
    }
  };

  const handleContinue = () => {
    if (battleState.status === 'victory' && battleState.rewards) {
      // Mettre à jour le personnage avec les récompenses
      const updatedCharacter: Character = {
        ...character,
        experience: character.experience + battleState.rewards.experience,
        gold: (character.gold || 0) + battleState.rewards.gold,
        level: battleState.rewards.newLevel || character.level,
        // Conserver la vie/mana actuelle du combat (pas de regen entre combats)
        health: battleState.player.health,
        mana: battleState.player.mana,
        // Mettre à jour l'inventaire avec les potions utilisées
        inventory: battleState.player.inventory,
        defeatedMonsters: character.defeatedMonsters + 1,
        experienceToNextLevel: battleState.rewards.levelUp
          ? Math.floor(100 * Math.pow(1.5, (battleState.rewards.newLevel || character.level) - 1))
          : character.experienceToNextLevel,
      };
      const baseStats = calculateBaseStats(character.class, character.race);
      const classInfo = CLASSES[character.class];
      // Si level up, augmenter les stats ET restaurer complètement
      if (battleState.rewards.levelUp) {
        updatedCharacter.maxHealth = Math.floor(updatedCharacter.maxHealth * 1.1);
        updatedCharacter.maxMana = Math.floor(updatedCharacter.maxMana * 1.1);
        updatedCharacter.health = updatedCharacter.maxHealth; // Full heal au level up
        updatedCharacter.mana = updatedCharacter.maxMana; // Full mana au level up
        updatedCharacter.strength = (baseStats.strength * updatedCharacter.level * 5);
        updatedCharacter.agility = (baseStats.agility * updatedCharacter.level * 5);
        updatedCharacter.intellect = (baseStats.intellect * updatedCharacter.level * 5);
        updatedCharacter.stamina = (baseStats.stamina * updatedCharacter.level * 5);


        const updatedStats = {
          strength: updatedCharacter.strength + (updatedCharacter.equipment ? Object.values(updatedCharacter.equipment).reduce((total, item) => {
            return total + (item.stats?.strength || 0);
          }, 0) : 0),
          agility: updatedCharacter.agility + (updatedCharacter.equipment ? Object.values(updatedCharacter.equipment).reduce((total, item) => {
            return total + (item.stats?.agility || 0);
          }, 0) : 0),
          intellect: updatedCharacter.intellect + (updatedCharacter.equipment ? Object.values(updatedCharacter.equipment).reduce((total, item) => {
            return total + (item.stats?.intellect || 0);
          }, 0) : 0),
          stamina: updatedCharacter.stamina + (updatedCharacter.equipment ? Object.values(updatedCharacter.equipment).reduce((total, item) => {
            return total + (item.stats?.stamina || 0);
          }, 0) : 0),
        }
        switch (classInfo.primaryStat) {
          case 'strength':
            // console.log('Calcul de la nouvelle puissance d\'attaque avec la force:', updatedStats.strength);
            updatedCharacter.attackPower = Math.floor(updatedStats.strength * 1.2);
            break;
          case 'agility':
            updatedCharacter.attackPower = Math.floor(updatedStats.agility * 1.2);
            updatedCharacter.critChance += updatedStats.agility * 1.05;
            break;
          case 'intellect':
            updatedCharacter.spellPower = Math.floor(updatedStats.intellect * 1.2);
            break;
          default:
            break;
        }

        updatedCharacter.armor = updatedCharacter.agility + updatedCharacter.stamina;
      }

      // Passer le loot au parent s'il y en a un
      onBattleEnd(updatedCharacter, battleState.rewards.loot);
    } else {
      onExit();
    }
  };

  // Calculer les récompenses si victoire
  useEffect(() => {
    if (battleState.status === 'victory' && !battleState.rewards) {
      const rewards = calculateRewards(battleState.monster, battleState.player);
      setBattleState((prev) => ({ ...prev, rewards }));
    }
  }, [battleState.status, battleState.monster, battleState.player, battleState.rewards]);

  const playerHealthPercentage = (battleState.player.health / battleState.player.maxHealth) * 100;
  const playerManaPercentage = (battleState.player.mana / battleState.player.maxMana) * 100;
  const monsterHealthPercentage = (battleState.monster.health / battleState.monster.maxHealth) * 100;

  // Calculs pour la barre XP (toujours calculés, mais utilisés seulement en victoire)
  const prevLevelVictory = battleState.status === 'victory' && battleState.rewards && battleState.rewards.levelUp && battleState.rewards.newLevel ? battleState.rewards.newLevel - 1 : character.level;
  const xpForPrevLevelVictory = prevLevelVictory > 1 ? Math.floor(100 * Math.pow(1.5, prevLevelVictory - 2)) : 0;
  const xpForNextLevelVictory = battleState.status === 'victory' && battleState.rewards && battleState.rewards.levelUp && battleState.rewards.newLevel ? Math.floor(100 * Math.pow(1.5, battleState.rewards.newLevel - 1)) : character.experienceToNextLevel;
  const xpGainedInLevelVictory = battleState.status === 'victory' && battleState.rewards ? (character.experience + battleState.rewards.experience) - xpForPrevLevelVictory : 0;
  const xpNeededForLevelVictory = xpForNextLevelVictory - xpForPrevLevelVictory;
  const xpProgressTargetVictory = battleState.status === 'victory' && battleState.rewards ? Math.max(0, Math.min(100, (xpGainedInLevelVictory / xpNeededForLevelVictory) * 100)) : 0;

  // Animation de la barre d'XP pour la victoire
  // Animation XPBar : d'abord l'ancien montant, puis l'exp gagnée en surbrillance
  const xpProgressBefore = Math.max(0, Math.min(100, ((character.experience - xpForPrevLevelVictory) / xpNeededForLevelVictory) * 100));
  const xpProgressAfter = xpProgressTargetVictory;
  const [showGain, setShowGain] = useState(false);
  useEffect(() => {
    if (battleState.status === 'victory' && battleState.rewards) {
      setShowGain(true)
      // setShowGain(false);
      // const timer = setTimeout(() => setShowGain(true), 2000);
      // return () => clearTimeout(timer);
    }
  }, [battleState.status, battleState.rewards]);


  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      // console.log('Key pressed (global):', e.key);
      if (e.key === "&") {
        handleAttack();
      }
    };
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keydown', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleKeyUp);
    };
  }, []);

  // Affichage de la victoire
  if (battleState.status === 'victory' && battleState.rewards) {
    return (
      <BattleContainer>
        <BattleArena>
          <VictoryPanel>
            <VictoryTitle>🎉 Victoire ! 🎉</VictoryTitle>
            <RewardsList>
              <RewardItem style={{ paddingBottom: '1.5rem' }}>
                <div style={{ width: '100%', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: '#aaa', marginBottom: '0.2rem' }}>
                    <span>Niveau {battleState.rewards.levelUp && battleState.rewards.newLevel ? battleState.rewards.newLevel : character.level}</span>
                    <span>{Math.floor(Math.max(0, xpGainedInLevelVictory))} / {Math.floor(xpNeededForLevelVictory)} XP</span>
                  </div>
                  <div style={{ position: 'relative', width: '100%', height: '22px', background: 'rgba(0,0,0,0.4)', borderRadius: '999px', border: '2px solid #ffd700', overflow: 'hidden', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)' }}>
                    {/* Barre XP avant gain */}
                    <div style={{ height: '100%', width: `${xpProgressBefore}%`, background: 'linear-gradient(90deg,#ffd700 0%,#ffed4e 50%,#ffd700 100%)', transition: 'width 0.7s cubic-bezier(.4,2,.3,1)', position: 'absolute', left: 0, top: 0, boxShadow: '0 0 10px rgba(255,215,0,0.5)' }} />
                    {/* Barre XP gagnée en surbrillance */}
                    {showGain && xpProgressAfter > xpProgressBefore && (
                      <div style={{ height: '100%', width: `${xpProgressAfter - xpProgressBefore}%`, background: 'linear-gradient(90deg,#22c55e 0%,#bbf7d0 100%)', transition: 'width 0.7s cubic-bezier(.4,2,.3,1)', position: 'absolute', left: `${xpProgressBefore}%`, top: 0, boxShadow: '0 0 10px rgba(34,197,94,0.3)' }} />
                    )}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: 'bold', color: '#222', textShadow: '0 1px 2px rgba(0,0,0,0.8)', fontSize: '0.85rem', zIndex: 1 }}>{Math.max(0, Math.round(xpProgressAfter))}%</div>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#22c55e', marginTop: '0.2rem', fontWeight: 'bold' }}>+{battleState.rewards.experience} XP gagnés</div>
                </div>
              </RewardItem>
              <RewardItem>💰 +{battleState.rewards.gold} Or</RewardItem>
              {battleState.rewards.levelUp && (
                <RewardItem>
                  🎊 NIVEAU SUPÉRIEUR ! Niveau {battleState.rewards.newLevel} 🎊
                </RewardItem>
              )}
              {battleState.rewards.loot && (
                <RewardItem style={{
                  color: `${battleState.rewards.loot.quality === 'poor' ? '#9d9d9d' :
                    battleState.rewards.loot.quality === 'common' ? '#ffffff' :
                      battleState.rewards.loot.quality === 'uncommon' ? '#1eff00' :
                        battleState.rewards.loot.quality === 'rare' ? '#0070dd' :
                          battleState.rewards.loot.quality === 'epic' ? '#a335ee' : '#ff8000'}`,
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                }}>
                  {battleState.rewards.loot.icon} {battleState.rewards.loot.name}
                </RewardItem>
              )}
            </RewardsList>
            <WowButton onClick={handleContinue}>Continuer</WowButton>
          </VictoryPanel>
        </BattleArena>
      </BattleContainer>
    );
  }

  // Affichage de la défaite ou fuite
  if (battleState.status === 'defeat' || battleState.status === 'fled') {
    return (
      <BattleContainer>
        <BattleArena>
          <VictoryPanel style={{ background: 'rgba(239, 68, 68, 0.2)', borderColor: '#ef4444' }}>
            <VictoryTitle style={{ color: '#ef4444' }}>
              {battleState.status === 'defeat' ? '💀 Défaite' : '🏃 Vous avez fui'}
            </VictoryTitle>
            <RewardsList>
              <RewardItem style={{ color: '#ef4444' }}>
                {battleState.status === 'defeat'
                  ? 'Vous avez été vaincu...'
                  : 'Vous avez échappé au combat'}
              </RewardItem>
            </RewardsList>
            <WowButton onClick={handleContinue}>Retour</WowButton>
          </VictoryPanel>
        </BattleArena>
      </BattleContainer>
    );
  }



  return (
    <BattleContainer>
      <BattleArena>
        <BattleField>
          {/* Joueur */}
          <Combatant $isPlayer>
            <CombatantName>{battleState.player.name}</CombatantName>
            <CombatantIcon>⚔️</CombatantIcon>

            <HealthBar>
              <HealthFill $percentage={playerHealthPercentage} />
              <HealthText>
                {battleState.player.health} / {battleState.player.maxHealth}
              </HealthText>
            </HealthBar>

            <ManaBar>
              <ManaFill $percentage={playerManaPercentage} />
              <ManaText>
                {battleState.player.mana} / {battleState.player.maxMana}
              </ManaText>
            </ManaBar>

            {/* Textes flottants pour le joueur */}
            <FloatingTextContainer>
              {floatingTexts
                .filter(ft => ft.target === 'player')
                .map(ft => (
                  <FloatingTextItem key={ft.id} $type={ft.type}>
                    {ft.text}
                  </FloatingTextItem>
                ))}
            </FloatingTextContainer>
          </Combatant>

          {/* Monstre */}
          <Combatant>
            <CombatantName>{battleState.monster.name.replace(/\s*\(Niv\.\s*\d+\)/, '')}</CombatantName>
            <MonsterIconContainer>
              <MonsterIconWithLevel
                monsterName={battleState.monster.name}
                level={battleState.monster.level}
                size={80}
              />
            </MonsterIconContainer>

            <HealthBar>
              <HealthFill $percentage={monsterHealthPercentage} />
              <HealthText>
                {battleState.monster.health} / {battleState.monster.maxHealth}
              </HealthText>
            </HealthBar>

            {/* Textes flottants pour le monstre */}
            <FloatingTextContainer>
              {floatingTexts
                .filter(ft => ft.target === 'monster')
                .map(ft => (
                  <FloatingTextItem key={ft.id} $type={ft.type}>
                    {ft.text}
                  </FloatingTextItem>
                ))}
            </FloatingTextContainer>
          </Combatant>
        </BattleField>

        {/* Actions et Potions sur la même ligne */}
        <ActionPanel>
          <ActionTitle>Actions & Potions</ActionTitle>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
            {/* Actions à gauche */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <IconButton
                onClick={handleAttack}

                disabled={battleState.turn !== 'player'}
                $disabled={battleState.turn !== 'player'}
                $variant="primary"
                style={{ boxShadow: 'none' }}
              // Tooltip désactivé
              >
                <SpellIcon src={BASE_ACTION_ICONS.attack} alt="Attaquer" />
              </IconButton>
              {availableAbilities.map((ability) => {
                const manaCost = calculateManaCost(ability, character.level);
                const canUse = battleState.turn === 'player' && battleState.player.mana >= manaCost;
                const iconUrl = getAbilityIconUrl(ability);
                return (
                  <IconButton
                    key={ability.id}
                    onClick={() => handleUseAbility(ability)}
                    disabled={!canUse}
                    $disabled={!canUse}
                    $variant="primary"
                    style={{ boxShadow: 'none' }}
                  // Tooltip désactivé
                  >
                    {iconUrl ? (
                      <SpellIcon src={iconUrl} alt={ability.name} />
                    ) : (
                      <EmojiIcon>{ability.icon}</EmojiIcon>
                    )}
                  </IconButton>
                );
              })}
              <IconButton
                onClick={handleDefend}
                disabled={battleState.turn !== 'player'}
                $disabled={battleState.turn !== 'player'}
                $variant="secondary"
                style={{ boxShadow: 'none' }}
              // Tooltip désactivé
              >
                <SpellIcon src={BASE_ACTION_ICONS.defend} alt="Défendre" />
              </IconButton>
              <IconButton
                onClick={handleFlee}
                disabled={battleState.turn !== 'player'}
                $disabled={battleState.turn !== 'player'}
                $variant="danger"
                style={{ boxShadow: 'none' }}
              // Tooltip désactivé
              >
                <SpellIcon src={BASE_ACTION_ICONS.flee} alt="Fuir" />
              </IconButton>
            </div>
            {/* Potions à droite */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {battleState.player.inventory && battleState.player.inventory.potions.length > 0 && (
                battleState.player.inventory.potions.map((item) => {
                  const potion = POTIONS.find(p => p.id === item.potionId);
                  if (!potion || item.quantity <= 0) return null;
                  const canUse = battleState.turn === 'player';
                  return (
                    <IconButton
                      key={item.potionId}
                      onClick={() => handleUsePotion(item.potionId)}
                      disabled={!canUse}
                      $disabled={!canUse}
                      $variant={potion.type === 'health' ? 'danger' : 'secondary'}
                      style={{ boxShadow: 'none' }}
                    // Tooltip désactivé
                    >
                      <EmojiIcon>{potion.icon}</EmojiIcon>
                    </IconButton>
                  );
                })
              )}
            </div>
          </div>
        </ActionPanel>

        {/* Journal de combat */}
        <BattleLog>
          <BattleLogTitle>📜 Journal de Combat</BattleLogTitle>
          {[...battleState.battleLog].reverse().map((entry) => (
            <LogEntry key={entry.id} $type={entry.type}>
              {entry.message}
            </LogEntry>
          ))}
        </BattleLog>
      </BattleArena>
    </BattleContainer>
  );
}

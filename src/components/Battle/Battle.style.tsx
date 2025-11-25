import styled from "styled-components";
import type { BattleLogEntry } from "../../types/battle";

export const BattleContainer = styled.div`
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

export const BattleArena = styled.div`
  // max-width: 900px;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const BattleField = styled.div`
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

export const Combatant = styled.div<{ $isPlayer?: boolean }>`
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

export const FloatingTextContainer = styled.div`
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

export const FloatingTextItem = styled.div<{ $type: 'damage' | 'heal' | 'critical' | 'miss' | 'effect' }>`
  position: absolute;
  top: 50%;
  left: ${({ $type }) => {
    switch ($type) {
      case 'damage': return '20%'; // coups normaux à gauche
      case 'critical': return '80%'; // critiques à droite
      case 'heal': return '50%'; // heal au centre
      default: return '50%';
    }
  }};
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

export const CombatantIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
`;

export const MonsterIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CombatantName = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary.gold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.5),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 1px;
`;

export const HealthBar = styled.div`
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

export const HealthFill = styled.div<{ $percentage: number }>`
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

export const HealthText = styled.div`
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

export const ManaBar = styled(HealthBar)`
  height: 24px;
`;

export const ManaFill = styled.div<{ $percentage: number }>`
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

export const ManaText = styled(HealthText)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const ActionPanel = styled.div`
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

export const ActionTitle = styled.h3`
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

export const IconButton = styled.button<{ $disabled?: boolean; $variant?: 'primary' | 'secondary' | 'danger' }>`
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

export const SpellIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const EmojiIcon = styled.span`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const BattleLog = styled.div`
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

export const BattleLogTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LogEntry = styled.div<{ $type: BattleLogEntry['type'] }>`
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

export const VictoryPanel = styled.div`
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

export const VictoryTitle = styled.h2`
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

export const RewardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
`;

export const RewardItem = styled.div`
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
export const RewardMoney = styled(RewardItem)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: ${({ theme }) => theme.spacing.sm};
`;
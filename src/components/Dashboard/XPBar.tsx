import styled from "styled-components";
import { useCharacter } from "../../contexts";

const XPBarContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const XPBarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const XPBarWrapper = styled.div`
  width: 100%;
  height: 24px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const XPBarFill = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(
    90deg,
    #ffd700 0%,
    #ffed4e 50%,
    #ffd700 100%
  );
  transition: width 0.5s ease;
  position: relative;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);

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
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const XPBarText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  z-index: 1;
`;


export function XPBar() {
  const { character } = useCharacter();
  if (!character) return null;

  // Calculer l'XP pour le niveau actuel
  // La formule d'XP est : 100 * 1.5^(level - 1)
  // const xpForThisLevel = character.level > 1
  // ? Math.floor(100 * Math.pow(1.5, character.level - 2))
  // : 0;
  // const xpForNextLevel = character.experienceToNextLevel;
  // const xpGainedInLevel = character.experience - xpForThisLevel;
  // const xpNeededForLevel = xpForNextLevel - xpForThisLevel;
  const xpProgress = character.experience / character.experienceToNextLevel * 100;
  return <XPBarContainer>
    <XPBarLabel>
      <span>Niveau {character.level}</span>
      <span>{character.experience} / {character.experienceToNextLevel} XP</span>
    </XPBarLabel>
    <XPBarWrapper>
      <XPBarFill $progress={Math.max(0, Math.min(100, xpProgress))} />
      <XPBarText>{Math.max(0, Math.round(xpProgress))}%</XPBarText>
    </XPBarWrapper>
  </XPBarContainer>
}
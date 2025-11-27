
import styled from "styled-components";
import type { BattleRewards } from "../../types/battle";
import type { Character } from "../../types/character";


interface BattleXpBarProps {
    character: Character;
    rewards: BattleRewards;
}


// Styled-components definitions
const XpBarContainer = styled.div`
    width: 100%;
    margin-bottom: 0.5rem;
`;

const XpBarInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.winter.snowWhite};
    margin-bottom: 0.2rem;
`;

const XpBarTrack = styled.div`
    position: relative;
    width: 100%;
    height: 22px;
    background: rgba(0,0,0,0.4);
    border-radius: 999px;
    border: 2px solid #ffd700;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
`;

const XpBarFill = styled.div<{ $percent: number }>`
    height: 100%;
    width: ${({ $percent }) => $percent}%;
    background: linear-gradient(90deg,#ffd700 0%,#ffed4e 50%,#ffd700 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 0 10px rgba(255,215,0,0.5);
`;

const XpBarGain = styled.div<{ $percent: number, $offset: number }>`
    height: 100%;
    width: ${({ $percent }) => $percent}%;
    background: linear-gradient(90deg,#22c55e 0%,#bbf7d0 100%);
    transition: width 0.7s cubic-bezier(.4,2,.3,1);
    position: absolute;
    left: ${({ $offset }) => $offset}%;
    top: 0;
    box-shadow: 0 0 10px rgba(34,197,94,0.3);
`;

const XpBarText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
    font-size: 0.85rem;
    z-index: 1;
`;

const XpBarReward = styled.div`
    font-size: 0.9rem;
    color: #22c55e;
    margin-top: 0.2rem;
    font-weight: bold;
`;

export function BattleXpBar({ character, rewards }: BattleXpBarProps) {
    const exepriencePercentBefore = (character.experience / character.experienceToNextLevel) * 100

    const experienceGainPercent = rewards && character.experienceToNextLevel
        ? (rewards.experience / character.experienceToNextLevel) * 100
        : 0;

    return (
        <XpBarContainer>
            <XpBarInfo>
                <span>Niveau {rewards.levelUp && rewards.newLevel ? rewards.newLevel : character.level}</span>
                <span>{character.experience} / {character.experienceToNextLevel} XP</span>
            </XpBarInfo>
            <XpBarTrack>
                <XpBarFill $percent={exepriencePercentBefore} />
                <XpBarGain $percent={experienceGainPercent} $offset={exepriencePercentBefore} />
                <XpBarText>{Math.max(0, Math.round(exepriencePercentBefore + experienceGainPercent))}%</XpBarText>
            </XpBarTrack>
            <XpBarReward>+{rewards.experience} XP gagnés</XpBarReward>
        </XpBarContainer>
    );
}
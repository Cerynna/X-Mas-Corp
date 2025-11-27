import styled from "styled-components";
import { Card, Flex } from "../../styles";
import { WowButton } from "../WowButton";
import { useModal } from "../../contexts/useModal";
import { useBattle } from "../../contexts/useBattle";
import { useCharacter } from "../../contexts";
import type { BattleRewards } from "../../types/battle";
import { expForLevel, playerStatsCalculator } from "../../utils/player";
import type { Character } from "../../types/character";
import { BattleXpBar } from "./BattleXpBar";
import Money from "../Money";
import { getQualityColors, ItemIconWithQuality, type ItemQuality } from "../icons";
import { useItemTooltip } from "../../hooks/useItemTooltip";


const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 0;
`;

const Recap = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.md};
    // width: 100%;
`;

const RewardMoney = styled(Card)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 1.5rem;
    &::before {
        content: '💰';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        opacity: 0.2;
        z-index: 0;
  }
`;

const RewardItem = styled(Card)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
    position: relative;
    &::before {
    content: '🎁';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0.2;
    z-index: 0;
}
`;
const ItemName = styled.div<{ $quality: ItemQuality }>`
    margin-top: ${({ theme }) => theme.spacing.sm};
    font-weight: bold;
    color: ${({ theme, $quality }) => getQualityColors($quality).primary || theme.colors.winter.snowWhite};
`;

const ItemIconWrapper = styled.div`
cursor: pointer;
`;

export function ModalVictory({ rewards }: { rewards: BattleRewards }) {
    const { character, updateCharacter } = useCharacter();
    const { battle, createNewBattle, setBattle } = useBattle();
    const { showItemTooltip, hideTooltip } = useItemTooltip();

    const { closeModal } = useModal();

    const handleContinue = () => {
        if (!character || !battle) return;

        const newExperience = (character!.experience || 0) + rewards.experience;
        const updatedCharacter: Character = {
            ...character!,
            experience: rewards.levelUp ? 0 : newExperience,
            gold: (character!.gold || 0) + rewards.gold,
            level: rewards.levelUp ? rewards.newLevel : character!.level,
            health: rewards.levelUp ? character!.maxHealth : battle.player.health,
            mana: rewards.levelUp ? character!.maxMana : battle.player.mana,
            defeatedMonsters: character!.defeatedMonsters + 1,
            experienceToNextLevel: expForLevel(rewards.newLevel),
            bagItems: character!.bagItems || [],
        };
        if (rewards.levelUp) {
            const statsCharacter = playerStatsCalculator(updatedCharacter);
            updatedCharacter.health = statsCharacter.maxHealth;
            updatedCharacter.mana = statsCharacter.maxMana;
            updatedCharacter.strength = statsCharacter.strength;
            updatedCharacter.agility = statsCharacter.agility;
            updatedCharacter.intellect = statsCharacter.intellect;
            updatedCharacter.stamina = statsCharacter.stamina;
            updatedCharacter.attackPower = statsCharacter.attackPower;
            updatedCharacter.spellPower = statsCharacter.spellPower;
            updatedCharacter.armor = statsCharacter.armor;
            updatedCharacter.critChance = statsCharacter.critChance;
            updatedCharacter.maxHealth = statsCharacter.maxHealth;
            updatedCharacter.maxMana = statsCharacter.maxMana;
        }
        if (rewards.loot) {
            updatedCharacter.bagItems = [
                ...(character!.bagItems || []),
                {
                    itemId: rewards.loot.id!,
                    item: rewards.loot,
                },
            ];
        }
        updateCharacter({ ...updatedCharacter });


    }

    if (!character || !battle) return null;


    return (
        <Flex direction="column" align="center" justify="space-between" style={{
            height: '100%',
        }}>
            <Title>🎉 Victoire ! 🎉</Title>
            <BattleXpBar character={character} rewards={rewards} />
            <Recap>
                <RewardMoney>
                    <Money amount={rewards.gold} />
                </RewardMoney>
                {rewards.loot && (
                    <RewardItem
                        onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => showItemTooltip(rewards.loot!, e)}
                        onMouseLeave={hideTooltip}>
                        <ItemIconWrapper>
                            <ItemIconWithQuality
                                itemType={rewards.loot.slot}
                                itemName={rewards.loot.name}
                                quality={rewards.loot.quality}
                                size={64}
                            />
                        </ItemIconWrapper>
                        <ItemName $quality={rewards.loot.quality}>
                            {rewards.loot.name}
                        </ItemName>

                    </RewardItem>
                )}
            </Recap>

            <Flex direction="row" justify="center" align="center" style={{
                marginTop: '5rem',
            }}>
                <WowButton onClick={() => {
                    handleContinue()
                    closeModal()
                    createNewBattle(character!, rewards.newLevel, battle!.zone);
                }}>
                    Continuer
                </WowButton>
                <WowButton $variant="secondary" onClick={() => {
                    handleContinue()
                    setBattle(null)
                    closeModal()
                }}>
                    Pierre de Foyer
                </WowButton>
            </Flex>
        </Flex>
    )
}

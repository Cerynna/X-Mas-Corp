import styled from "styled-components";
import { Card, SectionTitle } from "../../pages/Dashboard";
import { useCharacter } from "../../contexts";
import Money from "../Money";

const StatsPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xs};
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border-left: 3px solid ${({ theme }) => theme.colors.primary.gold};
`;

const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const StatValue = styled.span`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;



export function Stats() {
    const { character } = useCharacter();
    if (!character) return null;

    return <Card>
        <SectionTitle>📊 Statistiques</SectionTitle>
        <StatsPanel>
            <StatItem>
                <StatLabel>❤️ Vie</StatLabel>
                <StatValue>{Math.floor(character.health / 10)} / {Math.floor(character.maxHealth / 10)}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>💙 Mana</StatLabel>
                <StatValue>{character.mana} / {character.maxMana}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>💰 Or</StatLabel>
                <StatValue>
                    <Money amount={character.gold} />
                </StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>⚔️ Puissance d'attaque</StatLabel>
                <StatValue>{character.attackPower}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>🔮 Puissance magique</StatLabel>
                <StatValue>{character.spellPower}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>🛡️ Armure</StatLabel>
                <StatValue>{character.armor}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>💪 Force</StatLabel>
                <StatValue>{character.strength}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>🎯 Agilité</StatLabel>
                <StatValue>{character.agility}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>🧠 Intelligence</StatLabel>
                <StatValue>{character.intellect}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>💚 Endurance</StatLabel>
                <StatValue>{character.stamina}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>⚡ Critique</StatLabel>
                <StatValue>{(character.critChance).toFixed(1)}%</StatValue>
            </StatItem>
        </StatsPanel>
    </Card>
}
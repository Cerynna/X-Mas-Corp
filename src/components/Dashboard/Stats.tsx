import styled from "styled-components";
import { Card, SectionTitle } from "../../pages/Dashboard";
import { useCharacter } from "../../contexts";

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

    // Additionne les stats des équipements
    const equipment = character.equipment || {};
    const equipStats = Object.values(equipment).reduce((acc, item) => {
        Object.entries(item.stats || {}).forEach(([key, value]) => {
            acc[key] = (acc[key] || 0) + (value || 0);
        });
        return acc;
    }, {} as Record<string, number>);

    // Calculer les stats totales
    const totalAttackPower = (character.attackPower || 0) + (equipStats.attackPower || 0);
    const totalSpellPower = (character.spellPower || 0) + (equipStats.spellPower || 0);
    const totalArmor = (character.armor || 0) + (equipStats.armor || 0);
    const totalStrength = (character.strength || 0) + (equipStats.strength || 0);
    const totalAgility = (character.agility || 0) + (equipStats.agility || 0);
    const totalIntellect = (character.intellect || 0) + (equipStats.intellect || 0);
    const totalStamina = (character.stamina || 0) + (equipStats.stamina || 0);
    const totalCritChance = (character.critChance || 0) + (equipStats.critChance || 0);

    // Calculer l'esquive basée sur l'agilité totale (1 agilité = 0.05% d'esquive)
    const dodgeChance = (totalAgility) * 0.05 / 100;

    return <Card>
        <SectionTitle>📊 Statistiques</SectionTitle>
        <StatsPanel>
            <StatItem>
                <StatLabel>❤️ Vie</StatLabel>
                <StatValue>{character.health} / {character.maxHealth}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>💙 Mana</StatLabel>
                <StatValue>{character.mana} / {character.maxMana}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>💰 Or</StatLabel>
                <StatValue>{character.gold}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>⚔️ Puissance d'attaque</StatLabel>
                <StatValue>{totalAttackPower}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>🔮 Puissance magique</StatLabel>
                <StatValue>{totalSpellPower}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>🛡️ Armure</StatLabel>
                <StatValue>{totalArmor}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>💪 Force</StatLabel>
                <StatValue>{totalStrength}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>🎯 Agilité</StatLabel>
                <StatValue>{totalAgility}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>🧠 Intelligence</StatLabel>
                <StatValue>{totalIntellect}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>💚 Endurance</StatLabel>
                <StatValue>{totalStamina}</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>⚡ Critique</StatLabel>
                <StatValue>{(totalCritChance).toFixed(1)}%</StatValue>
            </StatItem>
            <StatItem>
                <StatLabel>🎲 Esquive</StatLabel>
                <StatValue>{(dodgeChance * 100).toFixed(1)}%</StatValue>
            </StatItem>
        </StatsPanel>
    </Card>
}
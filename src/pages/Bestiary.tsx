import { useState } from 'react';
import styled from 'styled-components';
import { MONSTER_TEMPLATES } from '../types/monsters';
import type { MonsterType } from '../types/monsters';
import { MonsterIconWithLevel } from '../components/icons';

const BestiaryContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Card = styled.div`
  background: linear-gradient(
    135deg,
    rgba(30, 58, 95, 0.9) 0%,
    rgba(26, 31, 46, 0.95) 100%
  );
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: ${({ theme }) => theme.shadows.glow.gold};
  text-align: center;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  line-height: 1.6;
`;

const FilterBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ $active, theme }) => 
    $active 
      ? `linear-gradient(135deg, ${theme.colors.primary.gold} 0%, ${theme.colors.primary.bronze} 100%)`
      : 'rgba(0, 0, 0, 0.3)'
  };
  color: ${({ $active, theme }) => $active ? theme.colors.neutral.black : theme.colors.text.secondary};
  border: 2px solid ${({ $active, theme }) => $active ? theme.colors.primary.gold : theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const MonsterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const MonsterCard = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary.gold};
    box-shadow: 0 8px 16px ${({ theme }) => theme.colors.primary.gold}33;
  }
`;

const MonsterName = styled.h3`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin: 0;
`;

const MonsterTypeLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xs};
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};

  span {
    color: ${({ theme }) => theme.colors.primary.gold};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const LevelRange = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
`;

const MonsterCount = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

type FilterType = 'all' | MonsterType;

// Mapping des types vers leurs labels en français
const MONSTER_TYPE_LABELS: Record<MonsterType, { icon: string; label: string }> = {
  beast: { icon: '🐺', label: 'Bêtes' },
  humanoid: { icon: '👤', label: 'Humanoïdes' },
  undead: { icon: '💀', label: 'Morts-vivants' },
  elemental: { icon: '🔥', label: 'Élémentaires' },
  demon: { icon: '😈', label: 'Démons' },
  giant: { icon: '🗿', label: 'Géants' },
  dragon: { icon: '🐉', label: 'Dragons' },
};

export function Bestiary() {
  const [filter, setFilter] = useState<FilterType>('all');

  // Filtrer les monstres
  const filteredMonsters = MONSTER_TEMPLATES.filter(monster => {
    if (filter === 'all') return true;
    return monster.type === filter;
  });

  // Compter les monstres par type
  const countByType = (type: MonsterType) => 
    MONSTER_TEMPLATES.filter(m => m.type === type).length;

  return (
    <BestiaryContainer>
      <Card>
        <Title>📖 Bestiaire</Title>
        <Description>
          Découvrez toutes les créatures qui peuplent le monde de la Fête d'Hiver.<br />
          Étudiez leurs forces et leurs faiblesses pour mieux les affronter !
        </Description>

        <FilterBar>
          <FilterButton $active={filter === 'all'} onClick={() => setFilter('all')}>
            Tous ({MONSTER_TEMPLATES.length})
          </FilterButton>
          {(Object.keys(MONSTER_TYPE_LABELS) as MonsterType[]).map((type) => {
            const count = countByType(type);
            const { icon, label } = MONSTER_TYPE_LABELS[type];
            return (
              <FilterButton 
                key={type} 
                $active={filter === type} 
                onClick={() => setFilter(type)}
              >
                {icon} {label} ({count})
              </FilterButton>
            );
          })}
        </FilterBar>

        <MonsterCount>
          {filteredMonsters.length} créature{filteredMonsters.length > 1 ? 's' : ''} trouvée{filteredMonsters.length > 1 ? 's' : ''}
        </MonsterCount>

        <MonsterGrid>
          {filteredMonsters.map((monster, index) => (
            <MonsterCard key={index}>
              <MonsterIconWithLevel 
                monsterName={monster.name}
                level={Math.floor((monster.minLevel + monster.maxLevel) / 2)}
                size={96}
              />
              <MonsterName>{monster.name}</MonsterName>
              <MonsterTypeLabel>{monster.type}</MonsterTypeLabel>
              <LevelRange>Niveau {monster.minLevel} - {monster.maxLevel}</LevelRange>
              
              <StatsGrid>
                <StatItem>
                  ❤️ PV: <span>{monster.baseHealth}</span>
                </StatItem>
                <StatItem>
                  ⚔️ ATT: <span>{monster.baseDamage}</span>
                </StatItem>
                <StatItem>
                  🛡️ ARM: <span>{monster.baseArmor}</span>
                </StatItem>
                <StatItem>
                  💰 Or: <span>{monster.goldReward}</span>
                </StatItem>
              </StatsGrid>
            </MonsterCard>
          ))}
        </MonsterGrid>
      </Card>
    </BestiaryContainer>
  );
}

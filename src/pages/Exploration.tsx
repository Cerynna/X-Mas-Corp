import { useState } from 'react';
import styled from 'styled-components';
import { useCharacter } from '../contexts/useCharacter';
import { Battle } from '../components/Battle';
import { WowButton } from '../components';
import { type Character } from '../firebase';
import type { EquipmentItem } from '../types/equipment';

const ExplorationContainer = styled.div`
  min-height: calc(100vh - 92px);
  width: 100%;
  max-width: 1200px;
  // background:
  //   radial-gradient(ellipse at top, rgba(139, 0, 0, 0.3) 0%, transparent 50%),
  //   radial-gradient(ellipse at bottom, rgba(0, 0, 139, 0.3) 0%, transparent 50%),
  //   linear-gradient(180deg, rgba(10, 10, 20, 0.95) 0%, rgba(20, 10, 30, 0.98) 100%);
  padding: ${({ theme }) => theme.spacing.xl};
  margin: 0 auto;
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
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: ${({ theme }) => theme.shadows.glow.gold};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

export function Exploration() {
  const { character, updateCharacter } = useCharacter();
  const [inBattle, setInBattle] = useState(false);
  const [monsterLevel, setMonsterLevel] = useState(character ? character.level : 1);

  if (!character) {
    return null;
  }

  const handleBattleEnd = (updatedCharacter: Character, loot?: EquipmentItem) => {
    // Ajouter le loot au sac si présent
    if (loot) {
      const newBagItems = [...(updatedCharacter.bagItems || []), {
        itemId: loot.id,
        item: loot,
      }];
      updateCharacter({
        ...updatedCharacter,
        bagItems: newBagItems,
      });
    } else {
      updateCharacter(updatedCharacter);
    }
    setInBattle(false);
    setTimeout(() => {
      setInBattle(true);
    }, 10);
  };

  if (inBattle) {
    return (
      <Battle
        character={character}
        monsterLevel={monsterLevel}
        onBattleEnd={handleBattleEnd}
        onExit={() => setInBattle(false)}
      />
    );
  }

  return (
    <ExplorationContainer>
      <Card>
        <Title>🗺️ Exploration</Title>
        <Description>
          Partez à l'aventure dans les terres sauvages et affrontez des monstres !<br />
          Gagnez de l'expérience, de l'or et trouvez des équipements légendaires.
        </Description>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32, justifyContent: 'center' }}>
          <label htmlFor="monster-level" style={{ fontWeight: 'bold', color: '#ffd700' }}>Niveau du monstre :</label>
          <input
            id="monster-level"
            type="number"
            min={1}
            max={character.level + 10 > 35 ? character.level + 10 : 35}
            value={monsterLevel}
            onChange={e => setMonsterLevel(Number(e.target.value))}
            style={{ width: 80, fontSize: 18, padding: 4, borderRadius: 8, border: '2px solid #ffd700', background: '#222', color: '#ffd700', textAlign: 'center' }}
          />
        </div>
        <WowButton onClick={() => setInBattle(true)} $size="large">
          ⚔️ Chercher un Combat
        </WowButton>
      </Card>
    </ExplorationContainer>
  );
}

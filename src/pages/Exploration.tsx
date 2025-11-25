import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useCharacter } from '../contexts/useCharacter';
import { Battle } from '../components/Battle/BattleContainer';
import { WowButton } from '../components';
import { type Character } from '../firebase';
import type { EquipmentItem } from '../types/equipment';
import { ZONES } from '../types/zone';

const ExplorationContainer = styled.div`
  min-height: calc(100vh - 92px);
  width: 100%;
  max-width: 1200px;
  padding: ${({ theme }) => theme.spacing.xl};
  margin: 0 auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
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
const SelectZoneContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const ZoneItem = styled.div<{ $selected: boolean }>`
  // width: 80px;
  border: 3px solid ${({ $selected, theme }) => $selected ? theme.colors.primary.gold : 'transparent'};
  border-radius: 12px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.neutral.darkGray};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;
  transition: border-color 0.3s;
  display: grid;
  grid-template-areas:
  "icon name"
  "level desc";
  grid-template-columns: auto 1fr;
  grid-template-rows: 30px 1fr;
  gap: 0 16px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ZoneLevel = styled.div`
  grid-area: level;
  width: fit-content;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  margin: auto;
  background-color: ${({ theme }) => theme.colors.winter.deepBlue};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ZoneDescription = styled.div`
  grid-area: desc;
  width: 200px;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ZoneName = styled.div`
  grid-area: name;
  height: 25px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary.gold};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  text-shadow: ${({ theme }) => theme.shadows.glow.gold};
  margin-bottom: 0;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.6;
`;

export function Exploration() {
  const { character, updateCharacter } = useCharacter();
  const [inBattle, setInBattle] = useState(false);
  const [monsterLevel, setMonsterLevel] = useState(1);
  const [selectedZone, setSelectedZone] = useState(ZONES.find(zone => character && character.level >= zone.levelRange[0] && character.level <= zone.levelRange[1]) || ZONES[0]);

  useEffect(() => {
    if (selectedZone) {
      const minLevel = selectedZone.levelRange[0];
      const maxLevel = selectedZone.levelRange[1];
      const level = Math.min(Math.max(character?.level || 1, minLevel), maxLevel);
      setMonsterLevel(level);
    }
  }, [character, monsterLevel, selectedZone]);


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
    }, 100);
  };




  if (inBattle) {
    return (
      <Battle
        character={character}
        monsterLevel={monsterLevel}
        zone={selectedZone}
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
        <SelectZoneContainer>

          {ZONES.map(zone => {
            const ZoneIcon = zone.componentIcon;
            // afficher les zones correspondant au niveau du personnage et les zone inférieures
            if (character.level < zone.levelRange[0]) {
              return null;
            }
            return (
              <ZoneItem key={zone.id} $selected={selectedZone.id === zone.id} onClick={() => setSelectedZone(zone)}>
                <div style={{ gridArea: 'icon' }}>
                  <ZoneIcon key={zone.id} />
                </div>
                <ZoneLevel>
                  {zone.levelRange[0]} - {zone.levelRange[1]}
                </ZoneLevel>
                <ZoneName>
                  {zone.name}
                </ZoneName>
                <ZoneDescription>
                  {zone.description}
                </ZoneDescription>
              </ZoneItem>
            )
              ;
          })}

        </SelectZoneContainer>
        <WowButton onClick={() => setInBattle(true)} $size="large">
          ⚔️ Chercher un Combat {monsterLevel}
        </WowButton>
      </Card>
    </ExplorationContainer>
  );
}

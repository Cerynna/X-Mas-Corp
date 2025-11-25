import styled from "styled-components";
import { Card, SectionTitle } from "../../pages/Dashboard";
import { ItemIconWithQuality } from "../icons";
import { useCharacter } from "../../contexts";
import { useItemTooltip } from "../../hooks/useItemTooltip";
import { cleanBagsItems } from "../../utils/bags";
import { useEffect, useState } from "react";
import type { EquipementsType } from "../../firebase";


const EquipmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EquipmentSlot = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SlotLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-transform: uppercase;
  text-align: center;
`;

const ItemIconWrapper = styled.div`
  cursor: pointer;
`;

const EmptySlot = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
`;




export function Stuffs() {
  const { character, updateCharacter } = useCharacter();
  const { showItemTooltip, hideTooltip } = useItemTooltip();
  const [equipments, setEquipment] = useState<EquipementsType>({});
  useEffect(() => {
    if (character) {
      setEquipment(character.equipment || {});
    }
  }, [character]);
  if (!character) return null;



  const handleUnequipItem = (slot: 'weapon' | 'head' | 'chest' | 'legs' | 'boots' | 'jewelry') => {
    if (!character.equipment || !character.equipment[slot]) return;

    const item = character.equipment[slot];
    let newBagItems = [...(character.bagItems || []), { itemId: item.id, item }];
    const newEquipment = { ...character.equipment };
    delete newEquipment[slot];

    newBagItems = cleanBagsItems(newBagItems);

    updateCharacter({
      ...character,
      equipment: newEquipment,
      bagItems: newBagItems,
    });
  };


  return <Card style={{ marginBottom: '1.5rem' }}>
    <SectionTitle>⚔️ Équipement</SectionTitle>
    <EquipmentGrid>
      {(['weapon', 'head', 'chest', 'legs', 'boots', 'jewelry'] as const).map((slot) => {
        const slotLabels: Record<string, string> = {
          weapon: '⚔️ Arme',
          head: '🪖 Tête',
          chest: '👕 Torse',
          legs: '👖 Jambes',
          boots: '👢 Bottes',
          jewelry: '💍 Bijou',
        };

        const item = equipments?.[slot];

        return (
          <EquipmentSlot key={slot}>
            <SlotLabel>{slotLabels[slot]}</SlotLabel>
            {item ? (
              <ItemIconWrapper
                onClick={() => handleUnequipItem(slot)}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => showItemTooltip(item, e)}
                onMouseLeave={hideTooltip}
              >
                <ItemIconWithQuality
                  itemType={slot}
                  itemName={item.name}
                  quality={item.quality}
                  size={52}
                />
              </ItemIconWrapper>
            ) : (
              <EmptySlot>Vide</EmptySlot>
            )}
          </EquipmentSlot>
        );
      })}
    </EquipmentGrid>
  </Card>
}
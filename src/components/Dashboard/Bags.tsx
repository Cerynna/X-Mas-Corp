import styled from "styled-components";
import { SectionTitle } from "../../pages/Dashboard";
import { useCharacter } from "../../contexts";
import type { EquipmentItem } from "../../types/equipment";
import { ItemIconWithQuality } from "../icons";
import { useItemTooltip } from "../../hooks/useItemTooltip";

const BagSection = styled.div``;

const BagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const BagItem = styled.div<{ $quality?: string }>`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({ $quality, theme }) => {
        switch ($quality) {
            case 'legendary': return theme.colors.quality.legendary;
            case 'epic': return theme.colors.quality.epic;
            case 'rare': return theme.colors.quality.rare;
            case 'uncommon': return theme.colors.quality.uncommon;
            case 'common': return theme.colors.quality.common;
            default: return theme.colors.quality.poor;
        }
    }};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ItemIconWrapper = styled.div`
  cursor: pointer;
`;
const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`;


const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs};
  background: ${({ $variant }) =>
        $variant === 'primary' ? 'rgba(0, 120, 255, 0.2)' : 'rgba(255, 215, 0, 0.2)'
    };
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ $variant, theme }) =>
        $variant === 'primary' ? theme.colors.alliance.blue : theme.colors.primary.gold
    };
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ $variant }) =>
        $variant === 'primary' ? 'rgba(0, 120, 255, 0.4)' : 'rgba(255, 215, 0, 0.4)'
    };
  }
`;

const EmptySlot = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
`;




export function Bags() {
    const { character, updateCharacter } = useCharacter();
    const { showItemTooltip, hideTooltip } = useItemTooltip();
    if (!character) return null;


    const handleEquipItem = (item: EquipmentItem) => {
        const equipment = character.equipment || {};
        const oldItem = equipment[item.slot];

        const newEquipment = {
            ...equipment,
            [item.slot]: item,
        };

        // Filtrer l'item équipé du sac (gérer les deux formats)
        let newBagItems = (character.bagItems || []).filter(bagItem => {
            const currentItem: EquipmentItem = 'item' in bagItem ? bagItem.item : bagItem as unknown as EquipmentItem;
            return currentItem.id !== item.id;
        });

        // Si un item était déjà équipé, le remettre dans le sac
        if (oldItem) {
            newBagItems = [...newBagItems, { itemId: oldItem.id, item: oldItem }];
        }

        updateCharacter({
            ...character,
            equipment: newEquipment,
            bagItems: newBagItems,
        });
    };

    const handleSellItem = (item: EquipmentItem) => {
        const sellPrice = Math.floor((item.price || 0) * 0.25);

        // Filtrer l'item vendu du sac (gérer les deux formats)
        const newBagItems = (character.bagItems || []).filter(bagItem => {
            const currentItem: EquipmentItem = 'item' in bagItem ? bagItem.item : bagItem as unknown as EquipmentItem;
            return currentItem.id !== item.id;
        });

        updateCharacter({
            ...character,
            bagItems: newBagItems,
            gold: character.gold + sellPrice,
        });
    };
    return <BagSection>
        <SectionTitle>🎒 Sac - Équipement</SectionTitle>
        {character.bagItems && character.bagItems.length > 0 ? (
            <BagGrid>
                {character.bagItems.map((bagItem, index) => {
                    const item: EquipmentItem = 'item' in bagItem ? bagItem.item : bagItem as unknown as EquipmentItem;
                    if (!item || !item.name) return null;

                    return (
                        <BagItem key={index} $quality={item.quality}>
                            <ItemIconWrapper
                                onClick={() => handleEquipItem(item)}
                                onMouseEnter={(e) => showItemTooltip(item, e)}
                                onMouseLeave={hideTooltip}
                            >
                                <ItemIconWithQuality
                                    itemType={item.slot}
                                    itemName={item.name}
                                    quality={item.quality}
                                    size={52}
                                />
                            </ItemIconWrapper>
                            <ItemActions>
                                <ActionButton $variant="secondary" onClick={() => handleSellItem(item)}>
                                    Vendre ({Math.floor((item.price || 0) * 0.25)}g)
                                </ActionButton>
                            </ItemActions>
                        </BagItem>
                    );
                })}
            </BagGrid>
        ) : (
            <EmptySlot>Aucun équipement dans le sac</EmptySlot>
        )}
    </BagSection>
}
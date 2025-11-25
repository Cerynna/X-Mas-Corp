import styled from "styled-components";
import { SectionTitle } from "../../pages/Dashboard";
import { useCharacter } from "../../contexts";
import type { EquipmentItem } from "../../types/equipment";
import { ItemIconWithQuality } from "../icons";
import { useItemTooltip } from "../../hooks/useItemTooltip";
import { cleanBagsItems } from "../../utils/bags";
import Money from "../Money";
import { WowButton } from "../WowButton";
import type { BagsItemsType } from "../../types/bags";

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


const ActionButton = styled(WowButton)`
padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
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
        // On clone l'item pour ne pas modifier l'objet original utilisé pour la tooltip
        const itemToEquip = { ...item };
        delete itemToEquip.equiped;
        const equipment = character.equipment || {};
        const oldItem = equipment[item.slot];
        // console.log(itemToEquip);

        const newEquipment = {
            ...equipment,
            [item.slot]: itemToEquip,
        };

        // Filtrer l'item équipé du sac (gérer les deux formats)
        let newBagItems = (character.bagItems || []).filter((bagItem: BagsItemsType) => {
            const currentItem: EquipmentItem = 'item' in bagItem ? bagItem.item : bagItem as unknown as EquipmentItem;
            return currentItem.id !== item.id;
        });

        // Si un item était déjà équipé, le remettre dans le sac sans la propriété equiped
        if (oldItem) {
            const oldItemClean = { ...oldItem };
            delete oldItemClean.equiped;
            newBagItems = [...newBagItems, { itemId: oldItemClean.id, item: oldItemClean }];
        }

        newBagItems = cleanBagsItems(newBagItems);

        updateCharacter({
            ...character,
            equipment: newEquipment,
            bagItems: newBagItems,
        });
    };

    const handleSellItem = (item: EquipmentItem) => {
        const sellPrice = Math.floor((item.price || 0) * 10);

        // Filtrer l'item vendu du sac (gérer les deux formats)
        let newBagItems = (character.bagItems || []).filter((bagItem: BagsItemsType) => {
            const currentItem: EquipmentItem = 'item' in bagItem ? bagItem.item : bagItem as unknown as EquipmentItem;
            return currentItem.id !== item.id;
        });

        newBagItems = cleanBagsItems(newBagItems);

        updateCharacter({
            ...character,
            bagItems: newBagItems,
            gold: character.gold + sellPrice,
        });
    };
    // Trier les items du sac par level décroissant
    const sortedBagItems = (character.bagItems || []).slice().sort((a: BagsItemsType, b: BagsItemsType) => {
        const itemA: EquipmentItem = 'item' in a ? a.item : a as unknown as EquipmentItem;
        const itemB: EquipmentItem = 'item' in b ? b.item : b as unknown as EquipmentItem;
        return (itemB.level || 0) - (itemA.level || 0);
    });

    const handleSellAll = () => {
        let totalSellPrice = 0;
        const newBagItems = (character.bagItems || []).filter((bagItem: BagsItemsType) => {
            const item: EquipmentItem = 'item' in bagItem ? bagItem.item : bagItem as unknown as EquipmentItem;
            totalSellPrice += (item.price || 0);
            return false; // Vendre tous les items
        });

        updateCharacter({
            ...character,
            bagItems: newBagItems,
            gold: character.gold + totalSellPrice,
        });
    }

    return <BagSection>
        <SectionTitle>🎒 Sac - Équipement
            <span>

                {sortedBagItems.length > 0 && (
                    <>
                        Tout vendre : {" "}
                        <ActionButton
                            onClick={() => handleSellAll()}
                            $size="small"
                            $variant={'secondary'}
                        >
                            <Money amount={sortedBagItems.reduce((total: number, bagItem: BagsItemsType) => {
                                const item: EquipmentItem = 'item' in bagItem ? bagItem.item : bagItem as unknown as EquipmentItem;
                                return total + Math.floor((item.price || 0));
                            }, 0)} variant="small" />
                        </ActionButton>
                    </>
                )}

            </span>
        </SectionTitle>
        {sortedBagItems.length > 0 ? (
            <BagGrid>
                {sortedBagItems.map((bagItem: BagsItemsType, index: number) => {
                    const item: EquipmentItem = 'item' in bagItem ? bagItem.item : bagItem as unknown as EquipmentItem;
                    item.equiped = character.equipment ? character.equipment[item.slot] : undefined;
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
                                <ActionButton
                                    onClick={() => handleSellItem(item)}
                                    $size="small"
                                    $variant={'secondary'}
                                >
                                    <Money amount={(item.price || 0)} variant="small" />
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
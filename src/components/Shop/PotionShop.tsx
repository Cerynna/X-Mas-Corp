import { useState } from "react";
import styled from "styled-components";

import { getAvailablePotions, addPotionToInventory, type Potion } from '../../types/shop';
import type { Character } from "../../types/character";

import { CategoryTab, CategoryTabs } from "./ShopComponent";
import { useCharacter } from "../../contexts";
import { PotionIconWithQuality } from "../icons";
import { WowButton } from "../WowButton";
import Money from "../Money";
import { Scrollable } from "../../styles";


const PotionIconWrapper = styled.div`
  cursor: pointer;
`;


const PotionShopGrid = styled(Scrollable)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PotionShopGridCell = styled.div`
    display: grid;
    grid-template-areas:
    "icon name"
    "icon desc";
    grid-template-columns: auto 1fr;
    justify-items: start;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.primary.gold};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background: ${({ theme }) => theme.colors.neutral.darkGray};
    box-shadow: ${({ theme }) => theme.shadows.md};
    padding: ${({ theme }) => theme.spacing.sm};
`;

const PotionShopName = styled.div`
    grid-area: name;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary.gold};
    height: 25px;
    line-height: 14px;
`;

const PotionShopPurchase = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    grid-area: desc;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const PurchaseRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  justify-content: space-between;
`;

const QuantityButton = styled.button`
  min-width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.primary.gold};
  color: ${({ theme }) => theme.colors.neutral.black};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const QuantityDisplay = styled.div`
  flex: 1;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;



export function PotionShop() {
    const { character, updateCharacter } = useCharacter();
    const [potionFilter, setPotionFilter] = useState<'all' | 'health' | 'mana' | 'effect'>('all');
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const availablePotions = getAvailablePotions(
        character?.level || 1,
        potionFilter === 'all' ? undefined : potionFilter
    );

    const getQuantity = (potionId: string) => quantities[potionId] || 1;

    const setQuantity = (potionId: string, quantity: number) => {
        setQuantities(prev => ({ ...prev, [potionId]: Math.max(1, quantity) }));
    };

    const handlePurchase = (potion: Potion) => {
        if (!character) return;
        const quantity = getQuantity(potion.id);
        const totalCost = potion.price * quantity;

        if (character.gold < totalCost) return;

        // Mettre à jour l'inventaire et l'or
        const currentInventory = character.inventory || { potions: [] };
        const newInventory = addPotionToInventory(currentInventory, potion.id, quantity);

        const updatedCharacter: Character = {
            ...character,
            gold: character.gold - totalCost,
            inventory: newInventory,
        };

        updateCharacter(updatedCharacter);
        setQuantities(prev => ({ ...prev, [potion.id]: 1 }));
    };

    return (
        <>
            <CategoryTabs>
                <CategoryTab $active={potionFilter === 'all'} onClick={() => setPotionFilter('all')}>
                    Toutes
                </CategoryTab>
                <CategoryTab $active={potionFilter === 'health'} onClick={() => setPotionFilter('health')}>
                    ❤️ Vie
                </CategoryTab>
                <CategoryTab $active={potionFilter === 'mana'} onClick={() => setPotionFilter('mana')}>
                    💙 Mana
                </CategoryTab>
                <CategoryTab $active={potionFilter === 'effect'} onClick={() => setPotionFilter('effect')}>
                    💙 Elixir
                </CategoryTab>
            </CategoryTabs>
            <PotionShopGrid>
                {
                    availablePotions.map(potion => {
                        if (!character) return null;
                        const quantity = getQuantity(potion.id);
                        const totalCost = potion.price * quantity;
                        const canAfford = character.gold >= totalCost;
                        return (<PotionShopGridCell key={potion.id}>
                            <PotionIconWrapper
                                // onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => showItemTooltip(item, e)}
                                // onMouseLeave={hideTooltip}
                                style={{ gridArea: 'icon' }}>
                                <PotionIconWithQuality
                                    potion={potion}
                                    size={64}

                                />
                            </PotionIconWrapper>
                            <PotionShopName>
                                {potion.name}
                            </PotionShopName>

                            <PotionShopPurchase>
                                <PurchaseRow>
                                    <QuantitySelector>
                                        <QuantityButton
                                            onClick={() => setQuantity(potion.id, quantity - 1)}
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </QuantityButton>
                                        <QuantityDisplay>{quantity}</QuantityDisplay>
                                        <QuantityButton
                                            onClick={() => setQuantity(potion.id, quantity + 1)}
                                            disabled={totalCost >= character.gold && quantity > 0}
                                        >
                                            +
                                        </QuantityButton>
                                        <QuantityButton
                                            onClick={() => setQuantity(potion.id, quantity + 10)}
                                            disabled={totalCost >= character.gold && quantity > 0}
                                        >
                                            +10
                                        </QuantityButton>
                                    </QuantitySelector>

                                    <WowButton
                                        onClick={() => handlePurchase(potion)}
                                        disabled={!canAfford}
                                        $size="small"
                                        $variant={'secondary'}
                                    >
                                        {canAfford ? <Money amount={totalCost} variant='small' /> : 'Trop cher'}
                                    </WowButton>
                                </PurchaseRow>
                            </PotionShopPurchase>
                        </PotionShopGridCell>);
                    })
                }


            </PotionShopGrid >

        </>
    );
}


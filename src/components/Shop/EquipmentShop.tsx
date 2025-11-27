import styled from "styled-components";
import { useShop } from "../../contexts/useShop";
import { ItemIconWithQuality } from "../icons";
import { useItemTooltip } from "../../hooks/useItemTooltip";
import { WowButton } from "../WowButton";
import Money from "../Money";
import { useCharacter } from "../../contexts";
// import { BuffTimer } from "../Dashboard/BuffTimer";
import type { ShopItem } from "../../types/equipment";
import { buyItem } from "../../firebase/models/shop";
import { CategoryTab, CategoryTabs } from "./ShopComponent";
import { Scrollable } from "../../styles";
// import { groupBy } from "es-toolkit";

const ItemIconWrapper = styled.div`
  cursor: pointer;
`;

const EquipmentShopGrid = styled(Scrollable)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;
  padding-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EquipmentShopGridCell = styled.div`
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

const EquipmentShopName = styled.div`
    grid-area: name;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary.gold};
    height: 25px;
`;

const EquipmentShopPurchase = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    grid-area: desc;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${({ theme }) => theme.spacing.sm};
`;


export function EquipmentShop() {
    const { character } = useCharacter();
    const { shop } = useShop();
    const { showItemTooltip, hideTooltip } = useItemTooltip();

    const handlePurchase = (item: ShopItem, randomPart: number) => {
        if (!character) return;
        if (character.gold < item.price * randomPart) return;
        if (character.level < item.level) return;
        buyItem(item.id!, character, randomPart);
    };


    // console.log(groupBy(shop, (item) => item.dateAdded));

    return (
        <>
            <CategoryTabs>
                <CategoryTab $active={true} onClick={() => { }}>
                    Toutes
                </CategoryTab>
            </CategoryTabs>
            <EquipmentShopGrid>
                {shop.filter(item => item.level <= character!.level).map((item) => {
                    const canAfford = character!.gold >= item.price;
                    // console.log(item)
                    return (
                        <EquipmentShopGridCell key={item.id}>
                            <ItemIconWrapper
                                onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => showItemTooltip(item, e)}
                                onMouseLeave={hideTooltip}
                                style={{ gridArea: 'icon' }}
                            >
                                <ItemIconWithQuality
                                    itemType={item.slot}
                                    itemName={item.name}
                                    quality={item.quality}
                                    size={64}
                                />
                            </ItemIconWrapper>
                            <EquipmentShopName>
                                {item.name}
                            </EquipmentShopName>

                            <EquipmentShopPurchase>
                                {/* <BuffTimer expiresAt={item.dateAdded + 15 * 60 * 1000 || 0} /> */}
                                <span>
                                    Level : {item.level}
                                </span>
                                <WowButton
                                    onClick={() => handlePurchase(item, 1.8)}
                                    disabled={!canAfford}
                                    $size="small"
                                    $variant={'secondary'}
                                >
                                    {canAfford ? (<Money amount={Math.floor(item.price * 1.8)} variant='small' />) : 'Trop cher'}
                                </WowButton>
                            </EquipmentShopPurchase>



                        </EquipmentShopGridCell >
                    )
                })}
            </EquipmentShopGrid>
        </>
    )
}
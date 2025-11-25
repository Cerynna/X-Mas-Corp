import styled from "styled-components";
import { useShop } from "../../contexts/useShop";
import { ItemIconWithQuality } from "../icons";
import { useItemTooltip } from "../../hooks/useItemTooltip";
import { WowButton } from "../WowButton";
import Money from "../Money";

const ItemIconWrapper = styled.div`
  cursor: pointer;
`;

const EquipmentShopGrid = styled.div`
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

const EquipmentShopGridCell = styled.div`
    display: grid;
    grid-template-areas:
    "icon name"
    "icon desc";
    grid-template-columns: auto 1fr;
    justify-items: start;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const EquipmentShopName = styled.div`
    grid-area: name;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary.gold};
`;

const EquipmentShopPurchase = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    grid-area: desc;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;


export function EquipmentShop() {
    const { shop } = useShop();
    const { showItemTooltip, hideTooltip } = useItemTooltip();

    return (
        <EquipmentShopGrid>
            {shop.map((item) => {
                return (
                    <EquipmentShopGridCell key={item.id}>
                        <ItemIconWrapper
                            onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => showItemTooltip(item, e)}
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
                            <span>
                                Level : {item.level}
                            </span>
                            <WowButton
                                // onClick={() => handlePurchase(potion)}
                                // disabled={!canAfford}
                                $size="small"
                                $variant={'secondary'}
                            >
                                <Money amount={item.price || 1000000} variant='small' />
                            </WowButton>
                        </EquipmentShopPurchase>



                    </EquipmentShopGridCell >
                )
            })}
        </EquipmentShopGrid>
    )
}
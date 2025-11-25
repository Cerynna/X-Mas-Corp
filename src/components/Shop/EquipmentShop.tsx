import styled from "styled-components";
import { useShop } from "../../contexts/useShop";
import { ItemIconWithQuality } from "../icons";
import { useItemTooltip } from "../../hooks/useItemTooltip";

const ItemIconWrapper = styled.div`
  cursor: pointer;
`;

const EquipmentShopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EquipmentShopGridCell = styled.div`
    display: flex;
    flex-direction: column;
`;


export function EquipmentShop() {
    const { shop } = useShop();
    const { showItemTooltip, hideTooltip } = useItemTooltip();

    return (
        <EquipmentShopGrid>
            {
                shop.map((item) => {
                    return <EquipmentShopGridCell key={item.id}>
                        
                         {item.name}

                        <ItemIconWrapper
                            onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => showItemTooltip(item, e)}
                            onMouseLeave={hideTooltip}
                        >
                            <ItemIconWithQuality
                                itemType={item.slot}
                                itemName={item.name}
                                quality={item.quality}
                                size={52}
                            />
                        </ItemIconWrapper>

                    </EquipmentShopGridCell >
                })
            }
        </EquipmentShopGrid>
    )
}
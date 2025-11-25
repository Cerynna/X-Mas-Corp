import React from 'react';
import styled from 'styled-components';
import { ItemIcon } from './ItemIcon';
import { getQualityColors, type ItemQuality } from './qualityColors';

interface ItemIconWithQualityProps {
  itemType: string;
  itemName?: string;
  quality?: ItemQuality;
  size?: number;
}

const IconContainer = styled.div<{ $quality: ItemQuality; $size: number }>`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => {
    const colors = getQualityColors(props.$quality);
    return `linear-gradient(135deg, ${colors.primary}22 0%, ${colors.secondary}33 100%)`;
  }};
  border: 2px solid ${props => getQualityColors(props.$quality).primary};
  box-shadow: 0 2px 8px ${props => getQualityColors(props.$quality).primary}44;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: radial-gradient(
      circle at 30% 30%,
      ${props => getQualityColors(props.$quality).primary}11 0%,
      transparent 70%
    );
  }
`;

export const ItemIconWithQuality: React.FC<ItemIconWithQualityProps> = ({
  itemType,
  itemName = '',
  quality = 'common',
  size = 48,
}) => {
  // L'icône elle-même sera un peu plus petite que le conteneur
  const iconSize = Math.floor(size * 0.65);

  return (
    <IconContainer $quality={quality} $size={size}>
      <ItemIcon
        itemType={itemType}
        itemName={itemName}
        quality="common" // On passe toujours 'common' pour garder les couleurs naturelles
        size={iconSize}
      />
    </IconContainer>
  );
};

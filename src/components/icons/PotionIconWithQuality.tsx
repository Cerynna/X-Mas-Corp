import React from 'react';
import styled from 'styled-components';
import { HealthPotionIcon, ManaPotionIcon, GenericPotionIcon } from './PotionIcon';
import { getQualityColors } from './qualityColors';
import { mapPotionQualityToItemQuality, type Potion, type PotionQuality, type PotionType } from '../../types/shop';
import type { BuffEffect } from '../../firebase';

interface PotionIconWithQualityProps {
  potion: Potion;
  size?: number;
}

const IconContainer = styled.div<{ $quality: PotionQuality; $size: number }>`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => {
    const colors = getQualityColors(mapPotionQualityToItemQuality(props.$quality));
    return `linear-gradient(135deg, ${colors.primary}22 0%, ${colors.secondary}33 100%)`;
  }};
  border: 2px solid ${props => getQualityColors(mapPotionQualityToItemQuality(props.$quality)).primary};
  box-shadow: 0 2px 8px ${props => getQualityColors(mapPotionQualityToItemQuality(props.$quality)).primary}44;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 3px;
    background: radial-gradient(
      circle at 30% 30%,
      ${props => getQualityColors(mapPotionQualityToItemQuality(props.$quality)).primary}11 0%,
      transparent 70%
    );
  }
`;

// const 

export const PotionIconWithQuality: React.FC<PotionIconWithQualityProps> = ({
  potion,
  size = 48,
}: {
  potion: Potion;
  potionType?: PotionType;
  quality?: PotionQuality;
  size?: number;
}) => {
  // L'icône elle-même sera un peu plus petite que le conteneur
  const iconSize = Math.floor(size * 0.65);

  const getLiquideColorEffect = (potion: Potion): string => {
    const effect = potion.id.split('-').pop() as BuffEffect;
    switch (effect) {
      case 'strength':
        switch (potion.quality) {
          case 'minor': return '#CD5C5C';
          case 'lesser': return '#DC143C';
          case 'normal': return '#FF0000';
          case 'greater': return '#FF4500';
          case 'superior': return '#FF6347';
          case 'ultimate': return '#FF7F50';
          default: return '#DC143C';
        }
      case 'agility':
        switch (potion.quality) {
          case 'minor': return '#4682B4';
          case 'lesser': return '#4169E1';
          case 'normal': return '#0000FF';
          case 'greater': return '#1E90FF';
          case 'superior': return '#00BFFF';
          case 'ultimate': return '#00FFFF';
          default: return '#4169E1';
        }
      case 'intellect':
        switch (potion.quality) {
          case 'minor': return '#6A5ACD';
          case 'lesser': return '#7B68EE';
          case 'normal': return '#8A2BE2';
          case 'greater': return '#9370DB';
          case 'superior': return '#BA55D3';
          case 'ultimate': return '#DA70D6';
          default: return '#7B68EE';
        }
      case 'stamina':
        switch (potion.quality) {
          case 'minor': return '#2E8B57';
          case 'lesser': return '#3CB371';
          case 'normal': return '#32CD32';
          case 'greater': return '#00FF7F';
          case 'superior': return '#7CFC00';
          case 'ultimate': return '#ADFF2F';
          default: return '#3CB371';
        }
      case 'attackPower':
        switch (potion.quality) {
          case 'minor': return '#B8860B';
          case 'lesser': return '#DAA520';
          case 'normal': return '#FFD700';
          case 'greater': return '#FFA500';
          case 'superior': return '#FF8C00';
          case 'ultimate': return '#FF7F50';
          default: return '#DAA520';
        }
      case 'spellPower':
        switch (potion.quality) {
          case 'minor': return '#4B0082';
          case 'lesser': return '#6A5ACD';
          case 'normal': return '#8A2BE2';
          case 'greater': return '#9400D3';
          case 'superior': return '#9932CC';
          case 'ultimate': return '#BA55D3';
          default: return '#6A5ACD';
        }
      case 'critChance':
        switch (potion.quality) {
          case 'minor': return '#708090';
          case 'lesser': return '#778899';
          case 'normal': return '#A9A9A9';
          case 'greater': return '#C0C0C0';
          case 'superior': return '#D3D3D3';
          case 'ultimate': return '#DCDCDC';
          default: return '#778899';
        }
      case 'luck':
        switch (potion.quality) {
          case 'minor': return '#8B4513';
          case 'lesser': return '#A0522D';
          case 'normal': return '#D2691E';
          case 'greater': return '#FF8C00';
          case 'superior': return '#FFA500';
          case 'ultimate': return '#FFD700';
          default: return '#A0522D';
        }
      default:
        return '#ffffffff00';
    }
  };

  // Couleurs du liquide selon la qualité (avec légère variation)
  const getLiquidColor = (potion: Potion): string => {
    switch (potion.type) {
      case 'health':
        return '#DC143C';
      case 'mana':
        return '#4169E1';
      case 'effect':
        return getLiquideColorEffect(potion);
      default:
        return '#ffffffff00';
    }
  };

  const liquidColor = getLiquidColor(potion);

  return (
    <IconContainer $quality={potion.quality} $size={size}>
      {potion.type === 'health' ? (
        <HealthPotionIcon liquidColor={liquidColor} size={iconSize} />
      ) : potion.type === 'mana' ? (
        <ManaPotionIcon liquidColor={liquidColor} size={iconSize} />
      ) : (
        <GenericPotionIcon liquidColor={liquidColor} size={iconSize} />
      )}
    </IconContainer>
  );
};

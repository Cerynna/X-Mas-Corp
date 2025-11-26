import { useState } from 'react';
import styled from 'styled-components';

import { useCharacter } from '../../contexts';

import { EquipmentShop } from './EquipmentShop';
import { PotionShop } from './PotionShop';
import Money from '../Money';


const ShopContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(30, 58, 95, 0.8),
    rgba(26, 31, 46, 0.9)
  );
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const ShopHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ShopTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.primary.gold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const GoldDisplay = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.winter.iceBlue};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  span {
    color: ${({ theme }) => theme.colors.primary.gold};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const CategoryTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
`;

export const CategoryTab = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.colors.primary.gold}, ${theme.colors.primary.bronze})`
      : 'rgba(0, 0, 0, 0.3)'};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: ${({ theme }) => theme.borders.thin} solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow.gold};
  }
`;




export function ShopComponent() {
  const { character } = useCharacter();
  const [category, setCategory] = useState<'potions' | 'equipment'>('potions');

  if (!character) return null;

  return (
    <ShopContainer>
      <ShopHeader>
        <ShopTitle>🏪 Boutique</ShopTitle>
        <GoldDisplay>
          Votre or : <Money amount={character.gold} variant='normal' />
        </GoldDisplay>
      </ShopHeader>
      <CategoryTabs>
        <CategoryTab $active={category === 'potions'} onClick={() => setCategory('potions')}>
          🧪 Potions
        </CategoryTab>
        <CategoryTab $active={category === 'equipment'} onClick={() => setCategory('equipment')}>
          ⚔️ Équipement
        </CategoryTab>
      </CategoryTabs>

      {category === 'potions' && (
        <PotionShop />
      )}

      {category === 'equipment' && (
        <EquipmentShop />
      )}
    </ShopContainer>
  );
}

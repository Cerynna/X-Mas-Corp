import { useState } from 'react';
import styled from 'styled-components';

import { useCharacter } from '../../contexts';

import { Card, Description, Title } from '../../styles';

import { EquipmentShop } from './EquipmentShop';
import { PotionShop } from './PotionShop';


export const CategoryTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
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
    <>
      <Title>🏪 Boutique</Title>
      <Description>
        Bienvenue dans la boutique ! Achetez des potions et de l'équipement pour améliorer votre personnage.<br />
        Toutes les 15 minutes, les stocks d'équipement sont réapprovisionnés.
      </Description>
      <Card>

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
      </Card>
    </>
  );
}

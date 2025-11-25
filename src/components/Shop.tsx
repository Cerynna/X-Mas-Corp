import { useState } from 'react';
import styled from 'styled-components';
import { WowButton } from './';
import type { Character } from '../firebase/database';
import { getAvailablePotions, addPotionToInventory, type Potion } from '../types/shop';
import { getShopEquipment, QUALITY_COLORS, QUALITY_NAMES, type EquipmentItem } from '../types/equipment';
import { ItemIconWithQuality, PotionIconWithQuality } from './icons';
import Money from './Money';

// Mapper les qualités de potion vers les qualités d'item


const ShopContainer = styled.div`
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

const CategoryTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
`;

const CategoryTab = styled.button<{ $active: boolean }>`
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

const PotionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PotionCard = styled.div<{ $affordable: boolean }>`
  background: rgba(0, 0, 0, 0.4);
  border: ${({ theme }) => theme.borders.medium} solid
    ${({ $affordable, theme }) =>
    $affordable ? theme.colors.primary.gold : theme.colors.neutral.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  opacity: ${({ $affordable }) => ($affordable ? 1 : 0.6)};
`;

const PotionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PotionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

const PotionName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary.gold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PotionDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1;
  color: ${({ theme }) => theme.colors.neutral.silver};
`;

const PotionLevel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.winter.iceBlue};
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
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
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

// const Message = styled.div<{ $type: 'success' | 'error' }>`
//   padding: ${({ theme }) => theme.spacing.md};
//   background: ${({ $type }) =>
//     $type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
//   border: ${({ theme }) => theme.borders.thin} solid
//     ${({ $type }) => ($type === 'success' ? '#22c55e' : '#ef4444')};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   color: ${({ theme }) => theme.colors.neutral.white};
//   text-align: center;
//   margin-bottom: ${({ theme }) => theme.spacing.lg};
// `;

interface ShopProps {
  character: Character;
  onPurchase: (updatedCharacter: Character) => void;
  onClose?: () => void;
}

export function Shop({ character, onPurchase }: ShopProps) {
  const [category, setCategory] = useState<'potions' | 'equipment'>('potions');
  const [potionFilter, setPotionFilter] = useState<'all' | 'health' | 'mana'>('all');
  const [equipmentSlotFilter, setEquipmentSlotFilter] = useState<'all' | 'weapon' | 'head' | 'chest' | 'legs' | 'boots' | 'jewelry'>('all');
  const [equipmentLevelFilter, setEquipmentLevelFilter] = useState<'all' | 'available' | 'current'>('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  // const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const availablePotions = getAvailablePotions(
    character.level,
    potionFilter === 'all' ? undefined : potionFilter
  );

  // Filtrer l'équipement selon les filtres sélectionnés
  const allEquipment = getShopEquipment(character.level);
  const availableEquipment = allEquipment.filter(item => {
    // Filtre par emplacement
    if (equipmentSlotFilter !== 'all' && item.slot !== equipmentSlotFilter) {
      return false;
    }

    // Filtre par niveau
    if (equipmentLevelFilter === 'available' && item.level > character.level) {
      return false;
    }
    if (equipmentLevelFilter === 'current') {
      const minLevel = Math.max(1, character.level - 5);
      const maxLevel = character.level + 5;
      if (item.level < minLevel || item.level > maxLevel) {
        return false;
      }
    }

    return true;
  });

  const getQuantity = (potionId: string) => quantities[potionId] || 1;

  const setQuantity = (potionId: string, quantity: number) => {
    setQuantities(prev => ({ ...prev, [potionId]: Math.max(1, quantity) }));
  };

  const handlePurchase = (potion: Potion) => {
    const quantity = getQuantity(potion.id);
    const totalCost = potion.price * quantity;

    if (character.gold < totalCost) {
      // setMessage({ text: `Pas assez d'or ! Il vous faut ${totalCost} pièces.`, type: 'error' });
      // setTimeout(() => setMessage(null), 3000);
      return;
    }

    // Mettre à jour l'inventaire et l'or
    const currentInventory = character.inventory || { potions: [] };
    const newInventory = addPotionToInventory(currentInventory, potion.id, quantity);

    const updatedCharacter: Character = {
      ...character,
      gold: character.gold - totalCost,
      inventory: newInventory,
    };

    onPurchase(updatedCharacter);
    // setMessage({
    //   text: `Vous avez acheté ${quantity}x ${potion.name} pour ${totalCost} 💰`,
    //   type: 'success',
    // });
    // setTimeout(() => setMessage(null), 3000);

    // Réinitialiser la quantité
    setQuantities(prev => ({ ...prev, [potion.id]: 1 }));
  };

  const handlePurchaseEquipment = (item: EquipmentItem) => {
    const totalCost = item.price || 0;

    if (character.gold < totalCost) {
      // setMessage({ text: `Pas assez d'or ! Il vous faut ${totalCost} pièces.`, type: 'error' });
      // setTimeout(() => setMessage(null), 3000);
      return;
    }

    if (character.level < item.level) {
      // setMessage({ text: `Niveau ${item.level} requis !`, type: 'error' });
      // setTimeout(() => setMessage(null), 3000);
      return;
    }

    // Ajouter l'item au sac
    const bagItems = character.bagItems || [];
    bagItems.push({
      itemId: item.id,
      item: item,
    });

    const updatedCharacter: Character = {
      ...character,
      gold: character.gold - totalCost,
      bagItems: bagItems,
    };

    onPurchase(updatedCharacter);
    // setMessage({
    //   text: `Vous avez acheté ${item.name} pour ${totalCost} 💰`,
    //   type: 'success',
    // });
    // setTimeout(() => setMessage(null), 3000);
  };

  return (
    <ShopContainer>
      <ShopHeader>
        <ShopTitle>🏪 Boutique</ShopTitle>
        <GoldDisplay>
          Votre or : <Money amount={character.gold} variant='normal' />
        </GoldDisplay>
      </ShopHeader>

      {/* {message && <Message $type={message.type}>{message.text}</Message>} */}

      <CategoryTabs>
        <CategoryTab $active={category === 'potions'} onClick={() => setCategory('potions')}>
          🧪 Potions
        </CategoryTab>
        <CategoryTab $active={category === 'equipment'} onClick={() => setCategory('equipment')}>
          ⚔️ Équipement
        </CategoryTab>
      </CategoryTabs>

      {category === 'potions' && (
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
          </CategoryTabs>

          <PotionsGrid>
            {availablePotions.map(potion => {
              const quantity = getQuantity(potion.id);
              const totalCost = potion.price * quantity;
              const canAfford = character.gold >= totalCost;

              return (
                <PotionCard key={potion.id} $affordable={canAfford}>
                  <PotionHeader>
                    <PotionIconWithQuality
                      potion={potion}
                      size={64}
                    />
                    <PotionInfo>
                      <PotionName>{potion.name}</PotionName>
                      <PotionDescription>{potion.description}</PotionDescription>
                      {/* <PotionLevel>Level : {potion.requiredLevel}</PotionLevel> */}
                    </PotionInfo>
                  </PotionHeader>



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
                </PotionCard>
              );
            })}
          </PotionsGrid>
        </>
      )}

      {category === 'equipment' && (
        <>
          <CategoryTabs>
            <CategoryTab $active={equipmentSlotFilter === 'all'} onClick={() => setEquipmentSlotFilter('all')}>
              Tous
            </CategoryTab>
            <CategoryTab $active={equipmentSlotFilter === 'weapon'} onClick={() => setEquipmentSlotFilter('weapon')}>
              ⚔️ Arme
            </CategoryTab>
            <CategoryTab $active={equipmentSlotFilter === 'head'} onClick={() => setEquipmentSlotFilter('head')}>
              🪖 Tête
            </CategoryTab>
            <CategoryTab $active={equipmentSlotFilter === 'chest'} onClick={() => setEquipmentSlotFilter('chest')}>
              🛡️ Torse
            </CategoryTab>
            <CategoryTab $active={equipmentSlotFilter === 'legs'} onClick={() => setEquipmentSlotFilter('legs')}>
              👖 Jambes
            </CategoryTab>
            <CategoryTab $active={equipmentSlotFilter === 'boots'} onClick={() => setEquipmentSlotFilter('boots')}>
              👢 Bottes
            </CategoryTab>
            <CategoryTab $active={equipmentSlotFilter === 'jewelry'} onClick={() => setEquipmentSlotFilter('jewelry')}>
              💍 Bijoux
            </CategoryTab>
          </CategoryTabs>

          <CategoryTabs>
            <CategoryTab $active={equipmentLevelFilter === 'all'} onClick={() => setEquipmentLevelFilter('all')}>
              Tous niveaux
            </CategoryTab>
            <CategoryTab $active={equipmentLevelFilter === 'available'} onClick={() => setEquipmentLevelFilter('available')}>
              ✅ Équipables
            </CategoryTab>
            <CategoryTab $active={equipmentLevelFilter === 'current'} onClick={() => setEquipmentLevelFilter('current')}>
              📊 ±5 niveaux
            </CategoryTab>
          </CategoryTabs>

          <PotionsGrid>
            {availableEquipment.map(item => {
              const canAfford = character.gold >= (item.price || 0);
              const canEquip = character.level >= item.level;

              return (
                <PotionCard key={item.id} $affordable={canAfford && canEquip}>
                  <PotionHeader>
                    <ItemIconWithQuality
                      itemType={item.slot}
                      itemName={item.name}
                      quality={item.quality}
                      size={56}
                    />
                    <PotionInfo>
                      <PotionName style={{ color: QUALITY_COLORS[item.quality] }}>
                        {item.name}
                      </PotionName>
                    </PotionInfo>
                  </PotionHeader>

                  <PotionDescription style={{ color: QUALITY_COLORS[item.quality] }}>
                    {QUALITY_NAMES[item.quality]}
                  </PotionDescription>

                  <PotionDescription>
                    {Object.entries(item.stats).map(([stat, value]) => (
                      <div key={stat}>
                        +{value} {stat === 'attackPower' ? 'Puissance' :
                          stat === 'spellPower' ? 'Magie' :
                            stat === 'critChance' ? 'Crit' :
                              stat === 'strength' ? 'Force' :
                                stat === 'agility' ? 'Agilité' :
                                  stat === 'intellect' ? 'Intelligence' :
                                    stat === 'stamina' ? 'Endurance' :
                                      stat === 'armor' ? 'Armure' : stat}
                      </div>
                    ))}
                  </PotionDescription>

                  <PotionLevel>Niveau {item.level}</PotionLevel>

                  <WowButton
                    onClick={() => handlePurchaseEquipment(item)}
                    disabled={!canAfford || !canEquip}
                    $fullWidth
                    $size="small"
                    $variant="primary"
                  >
                    {!canEquip ? `Niveau ${item.level} requis` : !canAfford ? 'Trop cher' : `${item.price} 💰`}
                  </WowButton>
                </PotionCard>
              );
            })}
          </PotionsGrid>
        </>
      )}
    </ShopContainer>
  );
}

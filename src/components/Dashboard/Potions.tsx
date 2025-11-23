import styled from "styled-components";
import { SectionTitle } from "../../pages/Dashboard";
import { consumePotionFromInventory, POTIONS, type Potion, type PotionQuality } from "../../types/shop";
import { PotionIconWithQuality, type ItemQuality } from "../icons";
import { useCharacter, useTooltip } from "../../contexts";
import { BuffEffectInfos, type BuffEffect } from "../../firebase";



// Mapper les qualités de potion vers les qualités d'item
const mapPotionQualityToItemQuality = (quality: PotionQuality): ItemQuality => {
    const mapping: Record<PotionQuality, ItemQuality> = {
        'minor': 'poor',
        'lesser': 'common',
        'normal': 'common',
        'greater': 'uncommon',
        'superior': 'rare',
        'ultimate': 'epic',
    };
    return mapping[quality];
};


const PotionsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PotionList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const PotionItem = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
`;

const PotionCount = styled.div`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
`;

const EmptySlot = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
`;




export function Potions() {
    const { character, updateCharacter } = useCharacter();
    const { showTooltip, hideTooltip } = useTooltip();
    if (!character) return null;


    const handleUsePotion = (potionId: string) => {
        if (!character.inventory) return;

        const potion = POTIONS.find(p => p.id === potionId);
        if (!potion) return;

        const result = consumePotionFromInventory(character.inventory, potionId);
        if (!result.success) {
            alert('Impossible d\'utiliser cette potion !');
            return;
        }

        let newHealth = character.health || 0;
        let newMana = character.mana || 0;
        const newBuffs = character.buffs || [];

        const qualityToDuration = (potion: Potion) => {
            switch (potion.quality) {
                case 'minor': return 1800; // 30 minutes
                case 'lesser': return 2100; // 35 minutes
                case 'normal': return 2400; // 40 minutes
                case 'greater': return 2700; // 45 minutes
                case 'superior': return 3000; // 50 minutes
                case 'ultimate': return 3600; // 60 minutes
                default: return 0;
            }

        }
        const effect = potion.id.split('-').pop() as BuffEffect;
        switch (potion.type) {
            case 'health':
                newHealth = Math.min(
                    character.maxHealth || character.health || 0,
                    (character.health || 0) + potion.restoreAmount
                );
                newHealth += Math.floor((character.maxHealth || 0) * (potion.restorePercent || 0) / 100);
                break;
            case 'mana':
                newMana = Math.min(
                    character.maxMana || character.mana || 0,
                    (character.mana || 0) + potion.restoreAmount
                );
                newMana += Math.floor((character.maxMana || 0) * (potion.restorePercent || 0) / 100);
                break;
            case 'effect':
                newBuffs.push({
                    id: `potion-${effect}-${Date.now()}`,
                    effect: effect,
                    amount: potion.restorePercent || 0,
                    duration: qualityToDuration(potion),
                    icon: BuffEffectInfos[effect]?.emoji || potion.icon,
                    name: potion.name,
                    description: potion.description,
                    expiresAt: Date.now() + (qualityToDuration(potion)),
                });
                break;
            default:
                break;
        }

        updateCharacter({
            ...character,
            inventory: result.inventory,
            health: newHealth,
            mana: newMana,
            buffs: newBuffs,
        });
    };

    return <PotionsSection>
        <SectionTitle>🧪 Potions</SectionTitle>
        {character.inventory?.potions && character.inventory.potions.length > 0 ? (
            <PotionList>
                {character.inventory.potions.map((inventoryPotion, index) => {
                    const potionData = POTIONS.find(p => p.id === inventoryPotion.potionId);
                    if (!potionData) return null;

                    return (
                        <PotionItem
                            key={index}
                            onClick={() => handleUsePotion(potionData.id)}
                        >
                            <div
                                onMouseEnter={(e) => {
                                    showTooltip({
                                        title: potionData.name,
                                        description: potionData.description,
                                        quality: mapPotionQualityToItemQuality(potionData.quality),
                                        stats: {
                                            'Type': potionData.type === 'health' ? 'Santé' : 'Mana',
                                            'Restaure': `${potionData.restoreAmount} ${potionData.type === 'health' ? 'PV' : 'Mana'}`
                                        }
                                    }, { x: e.clientX, y: e.clientY });
                                }}
                                onMouseLeave={hideTooltip}
                            >
                                <PotionIconWithQuality
                                    potion={potionData}
                                    size={48}
                                />
                            </div>
                            <PotionCount>x{inventoryPotion.quantity}</PotionCount>
                        </PotionItem>
                    );
                })}
            </PotionList>
        ) : (
            <EmptySlot  >Aucune potion</EmptySlot>
        )}
    </PotionsSection>
}
import React from 'react';
import { SwordIcon, StaffIcon, DaggerIcon, AxeIcon, BowIcon } from './WeaponIcon';
import { HelmetIcon, ChestplateIcon, LeggingsIcon, BootsIcon } from './ArmorIcon';
import { RingIcon, AmuletIcon, NecklaceIcon, BraceletIcon, CrownIcon } from './JewelryIcon';
import { getQualityColors, type ItemQuality } from './qualityColors';

interface ItemIconProps {
  itemType: string; // 'weapon', 'head', 'chest', 'legs', 'boots', 'jewelry'
  itemName?: string;
  quality?: ItemQuality;
  size?: number;
}

export const ItemIcon: React.FC<ItemIconProps> = ({
  itemType,
  itemName = '',
  quality = 'common',
  size = 24,
}) => {
  const nameLower = itemName.toLowerCase();

  // Couleurs naturelles pour les armes et armures
  const metalColors = {
    primary: '#C0C0C0',    // Argent
    secondary: '#A9A9A9',  // Gris foncé
    accent: '#E8E8E8',     // Blanc métallique
  };

  const goldColors = {
    primary: '#FFD700',    // Or
    secondary: '#DAA520',  // Or foncé
    accent: '#FFF8DC',     // Or clair
  };

  const woodColors = {
    primary: '#8B4513',    // Brun
    secondary: '#654321',  // Brun foncé
    accent: '#D2691E',     // Brun clair
  };

  // Déterminer l'icône selon le type et le nom
  switch (itemType) {
    case 'weapon':
      if (nameLower.includes('bâton') || nameLower.includes('staff') || nameLower.includes('sceptre')) {
        return <StaffIcon primaryColor={woodColors.primary} secondaryColor="#9370DB" accentColor="#BA55D3" size={size} />;
      }
      if (nameLower.includes('dague') || nameLower.includes('dagger') || nameLower.includes('poignard')) {
        return <DaggerIcon primaryColor={metalColors.primary} secondaryColor={metalColors.secondary} accentColor={metalColors.accent} size={size} />;
      }
      if (nameLower.includes('hache') || nameLower.includes('axe')) {
        return <AxeIcon primaryColor={woodColors.primary} secondaryColor={metalColors.primary} accentColor={metalColors.accent} size={size} />;
      }
      if (nameLower.includes('arc') || nameLower.includes('bow') || nameLower.includes('arbalète')) {
        return <BowIcon primaryColor={woodColors.primary} secondaryColor="#DEB887" accentColor={woodColors.accent} size={size} />;
      }
      // Par défaut: épée
      return <SwordIcon primaryColor={metalColors.primary} secondaryColor={woodColors.secondary} accentColor={metalColors.accent} size={size} />;

    case 'head':
      return <HelmetIcon primaryColor={metalColors.primary} secondaryColor={metalColors.secondary} accentColor={goldColors.primary} size={size} />;

    case 'chest':
      return <ChestplateIcon primaryColor={metalColors.primary} secondaryColor={metalColors.secondary} accentColor={goldColors.primary} size={size} />;

    case 'legs':
      return <LeggingsIcon primaryColor="#6B5D4F" secondaryColor="#4A3F35" accentColor={goldColors.secondary} size={size} />;

    case 'boots':
      return <BootsIcon primaryColor={woodColors.primary} secondaryColor={woodColors.secondary} accentColor={woodColors.accent} size={size} />;

    case 'jewelry':
      if (nameLower.includes('anneau') || nameLower.includes('ring') || nameLower.includes('bague')) {
        return <RingIcon primaryColor={goldColors.primary} secondaryColor={goldColors.secondary} gemColor="#4169E1" size={size} />;
      }
      if (nameLower.includes('amulette') || nameLower.includes('amulet') || nameLower.includes('médaillon')) {
        return <AmuletIcon primaryColor={goldColors.primary} secondaryColor={goldColors.secondary} gemColor="#9370DB" size={size} />;
      }
      if (nameLower.includes('collier') || nameLower.includes('necklace')) {
        return <NecklaceIcon primaryColor="#C0C0C0" secondaryColor="#A9A9A9" gemColor="#DC143C" size={size} />;
      }
      if (nameLower.includes('bracelet')) {
        return <BraceletIcon primaryColor={goldColors.primary} secondaryColor={goldColors.secondary} gemColor="#00CED1" size={size} />;
      }
      if (nameLower.includes('couronne') || nameLower.includes('crown') || nameLower.includes('diadème')) {
        return <CrownIcon primaryColor={goldColors.primary} secondaryColor={goldColors.secondary} gemColor="#FF0000" size={size} />;
      }
      // Par défaut: anneau
      return <RingIcon primaryColor={goldColors.primary} secondaryColor={goldColors.secondary} gemColor="#4169E1" size={size} />;

    default:
      return <RingIcon primaryColor={goldColors.primary} secondaryColor={goldColors.secondary} gemColor="#4169E1" size={size} />;
  }
};

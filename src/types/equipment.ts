// Système d'équipement du personnage
import { randomUUID } from "../utils/randomUUID";
import {
  CLASSES,
  type Character,
  type ClassInfo,
  type WeaponType,
  type WowClass,
} from "./character";

export type ItemQuality =
  | "poor"
  | "common"
  | "uncommon"
  | "rare"
  | "epic"
  | "legendary";
export type EquipmentSlot =
  | "weapon"
  | "head"
  | "chest"
  | "legs"
  | "boots"
  | "jewelry";

// Couleurs WoW pour chaque qualité
export const QUALITY_COLORS: Record<ItemQuality, string> = {
  poor: "#9d9d9d", // Gris
  common: "#ffffff", // Blanc
  uncommon: "#1eff00", // Vert
  rare: "#0070dd", // Bleu
  epic: "#a335ee", // Violet
  legendary: "#ff8000", // Orange
};

export const QUALITY_NAMES: Record<ItemQuality, string> = {
  poor: "Pauvre",
  common: "Commun",
  uncommon: "Inhabituel",
  rare: "Rare",
  epic: "Épique",
  legendary: "Légendaire",
};

export interface EquipmentStats {
  strength?: number;
  agility?: number;
  intellect?: number;
  stamina?: number;
  attackPower?: number;
  spellPower?: number;
  armor?: number;
  critChance?: number;
}

export interface EquipmentItem {
  id: string;
  name: string;
  slot: EquipmentSlot;
  quality: ItemQuality;
  level: number; // Niveau requis pour équiper
  stats: EquipmentStats;
  icon: string;
  price?: number; // Prix en or (si achetable en boutique)
  dropRate?: number; // Chance de drop (0-1) si c'est du loot
  equiped?: EquipmentItem;
}

export interface ShopItem extends EquipmentItem {
  dateAdded: number;
}


export interface EquippedItems {
  weapon?: EquipmentItem;
  head?: EquipmentItem;
  chest?: EquipmentItem;
  legs?: EquipmentItem;
  boots?: EquipmentItem;
  jewelry?: EquipmentItem;
}

// Templates d'items verts achetables tous les 10 niveaux
export const SHOP_EQUIPMENT: EquipmentItem[] = [
  // Niveau 1
  {
    id: "weapon-uncommon-1",
    name: "Épée du débutant",
    slot: "weapon",
    quality: "uncommon",
    level: 1,
    stats: { attackPower: 5, strength: 2 },
    icon: "⚔️",
    price: 50,
  },
  {
    id: "head-uncommon-1",
    name: "Casque de cuir",
    slot: "head",
    quality: "uncommon",
    level: 1,
    stats: { armor: 3, stamina: 2 },
    icon: "🪖",
    price: 40,
  },
  {
    id: "chest-uncommon-1",
    name: "Plastron renforcé",
    slot: "chest",
    quality: "uncommon",
    level: 1,
    stats: { armor: 5, stamina: 3 },
    icon: "🦺",
    price: 60,
  },
  {
    id: "legs-uncommon-1",
    name: "Jambières robustes",
    slot: "legs",
    quality: "uncommon",
    level: 1,
    stats: { armor: 4, stamina: 2 },
    icon: "👖",
    price: 50,
  },
  {
    id: "boots-uncommon-1",
    name: "Bottes de marche",
    slot: "boots",
    quality: "uncommon",
    level: 1,
    stats: { armor: 2, agility: 2 },
    icon: "👢",
    price: 40,
  },
  {
    id: "jewelry-uncommon-1",
    name: "Anneau de novice",
    slot: "jewelry",
    quality: "uncommon",
    level: 1,
    stats: { stamina: 3, intellect: 2 },
    icon: "💍",
    price: 45,
  },

  // Niveau 10
  {
    id: "weapon-uncommon-10",
    name: "Hache de guerre",
    slot: "weapon",
    quality: "uncommon",
    level: 10,
    stats: { attackPower: 15, strength: 5, critChance: 1 },
    icon: "🪓",
    price: 200,
  },
  {
    id: "head-uncommon-10",
    name: "Heaume de fer",
    slot: "head",
    quality: "uncommon",
    level: 10,
    stats: { armor: 8, stamina: 5 },
    icon: "⛑️",
    price: 150,
  },
  {
    id: "chest-uncommon-10",
    name: "Cuirasse de mailles",
    slot: "chest",
    quality: "uncommon",
    level: 10,
    stats: { armor: 12, stamina: 7 },
    icon: "🦺",
    price: 250,
  },
  {
    id: "legs-uncommon-10",
    name: "Cuissardes de plates",
    slot: "legs",
    quality: "uncommon",
    level: 10,
    stats: { armor: 10, stamina: 6 },
    icon: "👖",
    price: 200,
  },
  {
    id: "boots-uncommon-10",
    name: "Solerets de bataille",
    slot: "boots",
    quality: "uncommon",
    level: 10,
    stats: { armor: 6, agility: 5 },
    icon: "👢",
    price: 150,
  },
  {
    id: "jewelry-uncommon-10",
    name: "Collier de force",
    slot: "jewelry",
    quality: "uncommon",
    level: 10,
    stats: { strength: 5, stamina: 5 },
    icon: "📿",
    price: 180,
  },

  // Niveau 20
  {
    id: "weapon-uncommon-20",
    name: "Claymore enchantée",
    slot: "weapon",
    quality: "uncommon",
    level: 20,
    stats: { attackPower: 30, strength: 10, critChance: 2 },
    icon: "⚔️",
    price: 500,
  },
  {
    id: "head-uncommon-20",
    name: "Couronne de mage",
    slot: "head",
    quality: "uncommon",
    level: 20,
    stats: { armor: 15, intellect: 10, spellPower: 10 },
    icon: "👑",
    price: 400,
  },
  {
    id: "chest-uncommon-20",
    name: "Armure de champion",
    slot: "chest",
    quality: "uncommon",
    level: 20,
    stats: { armor: 25, stamina: 15 },
    icon: "🛡️",
    price: 600,
  },
  {
    id: "legs-uncommon-20",
    name: "Grèves mystiques",
    slot: "legs",
    quality: "uncommon",
    level: 20,
    stats: { armor: 20, stamina: 12, intellect: 8 },
    icon: "👖",
    price: 500,
  },
  {
    id: "boots-uncommon-20",
    name: "Bottes de célérité",
    slot: "boots",
    quality: "uncommon",
    level: 20,
    stats: { armor: 12, agility: 10, critChance: 1 },
    icon: "👢",
    price: 400,
  },
  {
    id: "jewelry-uncommon-20",
    name: "Amulette des braves",
    slot: "jewelry",
    quality: "uncommon",
    level: 20,
    stats: { strength: 10, stamina: 10, critChance: 2 },
    icon: "📿",
    price: 450,
  },

  // Niveau 30
  {
    id: "weapon-uncommon-30",
    name: "Lame de titan",
    slot: "weapon",
    quality: "uncommon",
    level: 30,
    stats: { attackPower: 50, strength: 15, critChance: 3 },
    icon: "⚔️",
    price: 1000,
  },
  {
    id: "head-uncommon-30",
    name: "Diadème arcanique",
    slot: "head",
    quality: "uncommon",
    level: 30,
    stats: { armor: 25, intellect: 18, spellPower: 20 },
    icon: "👑",
    price: 800,
  },
  {
    id: "chest-uncommon-30",
    name: "Cuirasse de conquérant",
    slot: "chest",
    quality: "uncommon",
    level: 30,
    stats: { armor: 40, stamina: 25 },
    icon: "🛡️",
    price: 1200,
  },
  {
    id: "legs-uncommon-30",
    name: "Jambières de maître",
    slot: "legs",
    quality: "uncommon",
    level: 30,
    stats: { armor: 35, stamina: 20, strength: 10 },
    icon: "👖",
    price: 1000,
  },
  {
    id: "boots-uncommon-30",
    name: "Bottes de vent",
    slot: "boots",
    quality: "uncommon",
    level: 30,
    stats: { armor: 20, agility: 18, critChance: 2 },
    icon: "👢",
    price: 800,
  },
  {
    id: "jewelry-uncommon-30",
    name: "Talisman de puissance",
    slot: "jewelry",
    quality: "uncommon",
    level: 30,
    stats: { strength: 15, intellect: 15, stamina: 15 },
    icon: "✨",
    price: 900,
  },
];

const qualityMultiplier: Record<ItemQuality, number> = {
  poor: 0.5,
  common: 1.0,
  uncommon: 1.5,
  rare: 2.5,
  epic: 4.0,
  legendary: 6.0,
};
const itemTypesText = {
  plate: "en Plaque",
  mail: "en Mailles",
  leather: "en Cuir",
  cloth: "en Tissu",
};
const icons = {
  weapon: "⚔️",
  head: "👑",
  chest: "🛡️",
  legs: "👖",
  boots: "👢",
  jewelry: "💍",
};
const qualityPriceMultiplier: Record<ItemQuality, number> = {
  poor: 0.5,
  common: 1.0,
  uncommon: 2.0,
  rare: 5.0,
  epic: 12.0,
  legendary: 30.0,
};

const weaponNames: Record<WeaponType, Record<ItemQuality, string[]>> = {
  sword: {
    poor: ["Épée rouillée", "Lame ébréchée"],
    common: ["Épée courte", "Lame simple"],
    uncommon: ["Lame tranchante", "Épée solide"],
    rare: ["Épée de chevalier", "Lame runique"],
    epic: ["Lame de dragon", "Épée mystique"],
    legendary: ["Excalibur", "Lame éternelle"],
  },
  axe: {
    poor: ["Hache usée", "Hache ébréchée"],
    common: ["Hache de guerre", "Hache solide"],
    uncommon: ["Hache tranchante", "Hache de bataille"],
    rare: ["Hache runique", "Hache de champion"],
    epic: ["Hache de dragon", "Hache mystique"],
    legendary: ["Hache des rois", "Hache éternelle"],
  },
  mace: {
    poor: ["Marteau usé", "Marteau ébréché"],
    common: ["Marteau de guerre", "Marteau solide"],
    uncommon: ["Marteau lourd", "Marteau de bataille"],
    rare: ["Marteau runique", "Marteau de champion"],
    epic: ["Marteau de dragon", "Marteau mystique"],
    legendary: ["Marteau des rois", "Marteau éternel"],
  },
  bow: {
    poor: ["Arc cassé", "Arc usé"],
    common: ["Arc court", "Arc solide"],
    uncommon: ["Arc long", "Arc précis"],
    rare: ["Arc elfique", "Arc de maître"],
    epic: ["Arc de dragon", "Arc mystique"],
    legendary: ["Arc des rois", "Arc éternel"],
  },
  staff: {
    poor: ["Bâton cassé", "Bâton usé"],
    common: ["Bâton de novice", "Bâton solide"],
    uncommon: ["Bâton d'apprenti", "Bâton enchanté"],
    rare: ["Bâton mystique", "Bâton de sorcier"],
    epic: ["Bâton de dragon", "Bâton céleste"],
    legendary: ["Bâton des rois", "Bâton éternel"],
  },
};

const itemNames = {
  weapon: {
    poor: ["Épée rouillée", "Bâton cassé", "Dague ébréchée"],
    common: ["Épée courte", "Hache de bucheron", "Bâton de novice"],
    uncommon: ["Lame tranchante", "Marteau lourd", "Arc solide"],
    rare: ["Épée de chevalier", "Hache runique", "Bâton mystique"],
    epic: ["Lame de dragon", "Marteau de foudre", "Arc de phoenix"],
    legendary: ["Excalibur", "Mjolnir", "Frostmourne"],
  },
  head: {
    poor: ["Bonnet", "Chapeau"],
    common: ["Casque", "Capuche"],
    uncommon: ["Heaume", "Coiffe"],
    rare: ["Couronne", "Casque renforcé"],
    epic: ["Heaume de dragon", "Couronne céleste"],
    legendary: ["Couronne des rois", "Masque éternel"],
  },
  chest: {
    poor: ["Tunique", "Gilet"],
    common: ["Plastron", "Robe"],
    uncommon: ["Cuirasse", "Armure"],
    rare: ["Armure renforcée", "Robe enchantée"],
    epic: ["Cuirasse céleste", "Armure de dragon"],
    legendary: ["Armure des rois", "Cuirasse éternel"],
  },
  legs: {
    poor: ["Pantalon", "Braies"],
    common: ["Jambières", "Pantalon renforcé"],
    uncommon: ["Grèves", "Cuissardes"],
    rare: ["Jambières renforcée", "Grèves renforcée"],
    epic: ["Cuissardes de dragon", "Jambières céleste"],
    legendary: ["Grèves des rois", "Cuissardes éternel"],
  },
  boots: {
    poor: ["Sandales", "Bottes"],
    common: ["Solerets", "Souliers"],
    uncommon: ["Bottes renforcées", "Sandales solides"],
    rare: ["Souliers enchantées", "Solerets de bataille"],
    epic: ["Bottes de dragon", "Solerets céleste"],
    legendary: ["Bottes des rois", "Solerets éternels"],
  },
  jewelry: {
    poor: ["Ficelle nouée", "Caillou poli"],
    common: ["Anneau de bronze", "Collier simple"],
    uncommon: ["Anneau d'argent", "Collier enchassé"],
    rare: ["Anneau d'or", "Amulette magique"],
    epic: ["Anneau de dragon", "Talisman céleste"],
    legendary: ["Anneau des rois", "Amulette éternels"],
  },
};



const calculatePrice = (level: number, quality: ItemQuality) => {
  return Math.floor(level * qualityPriceMultiplier[quality] * 100);
};

const generatorNameItem = (
  slot: EquipmentSlot,
  quality: ItemQuality,
  classInfo: ClassInfo
) => {
  const nameOptions = itemNames[slot][quality];
  let name = "";

  if (slot === "weapon" && classInfo && classInfo.weaponType) {
    // Choisir un type d'arme compatible avec la classe
    const possibleWeapons = classInfo.weaponType.filter(
      (wt) => weaponNames[wt] && weaponNames[wt][quality]
    );
    const chosenWeaponType = possibleWeapons[
      Math.floor(Math.random() * possibleWeapons.length)
    ] as WeaponType;
    name =
      weaponNames[chosenWeaponType][quality][
        Math.floor(
          Math.random() * weaponNames[chosenWeaponType][quality].length
        )
      ];
  } else if (slot === "jewelry") {
    name = `${nameOptions[Math.floor(Math.random() * nameOptions.length)]}`;
  } else {
    name = `${nameOptions[Math.floor(Math.random() * nameOptions.length)]} ${
      itemTypesText[classInfo ? classInfo.armorType : "cloth"]
    }`;
  }
  return name;
};

const calculateQuality = (level: number, qualityRoll: number): ItemQuality => {
  let quality: ItemQuality = "poor";
  if (level < 10) {
    if (qualityRoll < 0.5) quality = "poor";
    else if (qualityRoll < 0.85) quality = "common";
    else if (qualityRoll < 0.99) quality = "uncommon";
    else quality = "legendary";
  } else if (level < 20) {
    if (qualityRoll < 0.3) quality = "poor";
    else if (qualityRoll < 0.6) quality = "common";
    else if (qualityRoll < 0.85) quality = "uncommon";
    else if (qualityRoll < 0.98) quality = "rare";
    else quality = "legendary";
  } else if (level < 30) {
    if (qualityRoll < 0.3) quality = "common";
    else if (qualityRoll < 0.6) quality = "uncommon";
    else if (qualityRoll < 0.85) quality = "rare";
    else if (qualityRoll < 0.97) quality = "epic";
    else quality = "legendary";
  } else if (level > 49) {
    if (qualityRoll < 0.3) quality = "common";
    else if (qualityRoll < 0.6) quality = "uncommon";
    else if (qualityRoll < 0.85) quality = "rare";
    else if (qualityRoll < 0.9) quality = "epic";
    else quality = "legendary";
  } else if (level > 59) {
    if (qualityRoll < 0.3) quality = "common";
    else if (qualityRoll < 0.6) quality = "uncommon";
    else if (qualityRoll < 0.85) quality = "rare";
    else if (qualityRoll < 0.8) quality = "epic";
    else quality = "legendary";
  } else {
    if (qualityRoll < 0.4) quality = "uncommon";
    else if (qualityRoll < 0.7) quality = "rare";
    else if (qualityRoll < 0.95) quality = "epic";
    else quality = "legendary";
  }
  return quality;
};

const randomSlotEquipment = () => {
  const slots: EquipmentSlot[] = [
    "weapon",
    "head",
    "chest",
    "legs",
    "boots",
    "jewelry",
  ];
  return slots[Math.floor(Math.random() * slots.length)];
};

const calculateEquipmentStats = (
  slot: EquipmentSlot,
  classInfo: ClassInfo,
  monsterLevel: number,
  quality: ItemQuality,
  luck: number
) => {
  const stats: EquipmentStats = {};
  const baseStatValue = Math.floor(
    monsterLevel * 0.8 * qualityMultiplier[quality]
  );
  // Générer les stats selon le slot et la classe
  if (slot === "weapon") {
    // Weapon: primaryStat + attackPower/spellPower + crit
    if (classInfo) {
      stats[classInfo.primaryStat] = baseStatValue;
      if (classInfo.primaryStat === "intellect") {
        stats.spellPower = baseStatValue * 2;
      } else {
        stats.attackPower = baseStatValue * 2;
      }
    } else {
      stats.strength = baseStatValue;
      stats.attackPower = baseStatValue * 2;
    }
    // Crit chance proc
    if (Math.random() < 0.25) {
      stats.critChance = Math.floor(
        baseStatValue * (0.1 + Math.random() * 0.2)
      );
    }
  } else if (slot === "jewelry") {
    // Jewelry: primaryStat + random (attackPower/spellPower, crit, armor)
    if (classInfo) {
      stats[classInfo.primaryStat] = baseStatValue;
    } else {
      stats.strength = baseStatValue;
    }
    // Random bonus
    const bonusPool = ["attackPower", "spellPower", "critChance", "armor"];
    const bonusType = bonusPool[Math.floor(Math.random() * bonusPool.length)];
    if (
      bonusType === "attackPower" &&
      classInfo &&
      classInfo.primaryStat !== "intellect"
    ) {
      stats.attackPower = Math.floor(baseStatValue * 1.5);
    } else if (
      bonusType === "spellPower" &&
      classInfo &&
      classInfo.primaryStat === "intellect"
    ) {
      stats.spellPower = Math.floor(baseStatValue * 1.5);
    } else if (bonusType === "critChance") {
      stats.critChance = Math.floor(
        baseStatValue * (0.1 + Math.random() * 0.2)
      );
    } else if (bonusType === "armor") {
      stats.armor = Math.floor(baseStatValue * 1.2);
    }
  } else {
    // Armor slots: armor + primaryStat + crit proc
    stats.armor = baseStatValue * 2;
    if (classInfo) {
      stats[classInfo.primaryStat] = Math.floor(baseStatValue * 0.7);
    } else {
      stats.stamina = Math.floor(baseStatValue * 0.7);
    }
    // Crit chance proc
    let critChanceRoll = 0.15;

    if (luck > 1) {
      critChanceRoll += (luck - 1) * 0.2; // Bonus de 5% par point de chance au-delà de 100%
    }

    if (Math.random() > critChanceRoll) {
      stats.critChance = Math.floor(
        baseStatValue * (0.08 + Math.random() * 0.15)
      );
    }
  }
  return stats;
};

// Générateur de loot aléatoire basé sur le niveau
export const generateLoot = (
  level: number,
  player: Character
): EquipmentItem | null => {
  const classInfo: ClassInfo =
    CLASSES[player.class as WowClass] || CLASSES["warrior"];
  const luck: number =
    player.buffs?.reduce((acc, buff) => {
      if (buff.effect === "luck") {
        return acc + buff.amount / 100;
      }
      return acc;
    }, 0) || 0;
  const qualityRoll = Math.random() + luck > 1 ? (luck - 1) * 0.08 : 0.0;

  if (Math.random() > 0.3 + luck) return null;
  return generateRandomItem(level, qualityRoll, classInfo, luck);
};

export const generateRandomItem = (
  level: number,
  qualityRoll: number,
  classInfo: ClassInfo,
  luck: number
): EquipmentItem => {
  const quality: ItemQuality = calculateQuality(qualityRoll, level);
  const slot = randomSlotEquipment();
  const stats: EquipmentStats = calculateEquipmentStats(
    slot,
    classInfo,
    level,
    quality,
    luck
  );
  const name = generatorNameItem(slot, quality, classInfo);
  const price = calculatePrice(level, quality);

  return {
    id: `${slot}-${quality}-${Date.now()}-${randomUUID()}`,
    name,
    slot,
    quality,
    level,
    stats,
    icon: icons[slot],
    price,
  };
};

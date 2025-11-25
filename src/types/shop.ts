// Système de boutique et objets consommables

import { orderBy } from "es-toolkit";
import type { ItemQuality } from "../components/icons";
import { BuffEffectInfos, type BuffEffect } from "./buffs";

export type PotionType = "health" | "mana" | "effect";
export type PotionQuality =
  | "minor"
  | "lesser"
  | "normal"
  | "greater"
  | "superior"
  | "ultimate";

export interface Potion {
  id: string;
  name: string;
  description: string;
  type: PotionType;
  quality: PotionQuality;
  icon: string;
  restoreAmount: number; // Montant fixe restauré
  restorePercent?: number; // Pourcentage restauré (optionnel)
  price: number; // Prix en or
  requiredLevel: number; // Niveau minimum pour acheter
  effect?: string; // Effet spécial (optionnel)
}

export const mapPotionQualityToItemQuality = (
  quality: PotionQuality
): ItemQuality => {
  const mapping: Record<PotionQuality, ItemQuality> = {
    minor: "poor",
    lesser: "common",
    normal: "common",
    greater: "uncommon",
    superior: "rare",
    ultimate: "epic",
  };
  // console.log('Mapping potion quality:', quality, 'to item quality:', mapping[quality]);
  return mapping[quality];
};

// Catalogue de potions
export const POTIONS: Potion[] = [
  // Potions de vie
  {
    id: "health-minor",
    name: "Potion de soins mineure",
    description: "Restaure 600 points de vie",
    type: "health",
    quality: "minor",
    icon: "🧪",
    restoreAmount: 600,
    price: 100,
    requiredLevel: 1,
  },
  {
    id: "health-lesser",
    name: "Potion de soins inférieure",
    description: "Restaure 3000 points de vie",
    type: "health",
    quality: "lesser",
    icon: "🧪",
    restoreAmount: 3000,
    price: 5000,
    requiredLevel: 5,
  },
  {
    id: "health-normal",
    name: "Potion de soins",
    description: "Restaure 5000 points de vie",
    type: "health",
    quality: "normal",
    icon: "🧪",
    restoreAmount: 5000,
    price: 10000,
    requiredLevel: 10,
  },
  {
    id: "health-greater",
    name: "Potion de soins supérieure",
    description: "Restaure 12000 points de vie",
    type: "health",
    quality: "greater",
    icon: "🧪",
    restoreAmount: 12000,
    price: 50000,
    requiredLevel: 20,
  },
  {
    id: "health-superior",
    name: "Potion de soins majeure",
    description: "Restaure 20000 points de vie",
    type: "health",
    quality: "superior",
    icon: "🧪",
    restoreAmount: 20000,
    price: 100000,
    requiredLevel: 30,
  },
  {
    id: "health-ultimate",
    name: "Élixir de vie ultime",
    description: "Restaure 50% de la vie maximale",
    type: "health",
    quality: "ultimate",
    icon: "⚗️",
    restoreAmount: 0,
    restorePercent: 50,
    price: 500000,
    requiredLevel: 40,
  },

  // Potions de mana
  {
    id: "mana-minor",
    name: "Potion de mana mineure",
    description: "Restaure 10% de la mana maximum",
    type: "mana",
    quality: "minor",
    icon: "💙",
    restoreAmount: 0,
    restorePercent: 10,
    price: 100,
    requiredLevel: 1,
  },
  {
    id: "mana-lesser",
    name: "Potion de mana inférieure",
    description: "Restaure 20% de la mana maximum",
    type: "mana",
    quality: "lesser",
    icon: "💙",
    restoreAmount: 0,
    restorePercent: 20,
    price: 5000,
    requiredLevel: 5,
  },
  {
    id: "mana-normal",
    name: "Potion de mana",
    description: "Restaure 30% de la mana maximum",
    type: "mana",
    quality: "normal",
    icon: "💙",
    restoreAmount: 0,
    restorePercent: 30,
    price: 10000,
    requiredLevel: 10,
  },
  {
    id: "mana-greater",
    name: "Potion de mana supérieure",
    description: "Restaure 40% de la mana maximum",
    type: "mana",
    quality: "greater",
    icon: "💙",
    restoreAmount: 0,
    restorePercent: 40,
    price: 50000,
    requiredLevel: 20,
  },
  {
    id: "mana-superior",
    name: "Potion de mana majeure",
    description: "Restaure 50% de la mana maximum",
    type: "mana",
    quality: "superior",
    icon: "💙",
    restoreAmount: 0,
    restorePercent: 50,
    price: 100000,
    requiredLevel: 30,
  },
  {
    id: "mana-ultimate",
    name: "Élixir de mana ultime",
    description: "Restaure 80% du mana maximum",
    type: "mana",
    quality: "ultimate",
    icon: "💎",
    restoreAmount: 0,
    restorePercent: 80,
    price: 500000,
    requiredLevel: 40,
  },
  // Elixirs divers
  {
    id: "elixir-of-strength",
    name: "Élixir de force",
    description: "Augmente temporairement la force de 20% pendant 10 minutes",
    type: "effect",
    quality: "normal",
    icon: "🧪" + BuffEffectInfos["strength" as BuffEffect].emoji,
    restoreAmount: 0,
    restorePercent: 20,
    price: 10000,
    requiredLevel: 20,
  },
  {
    id: "elixir-of-luck",
    name: "Élixir de chance",
    description: "Augmente temporairement la chance de 20% pendant 10 minutes",
    type: "effect",
    quality: "normal",
    icon: "🧪" + BuffEffectInfos["luck" as BuffEffect].emoji,
    restoreAmount: 0,
    restorePercent: 20,
    price: 10000,
    requiredLevel: 20,
  },

  // Potions du dev
  {
    id: "health-dev",
    name: "Élixir de vie du Dev",
    description: "Restaure 100% de la vie maximale",
    type: "health",
    quality: "ultimate",
    icon: "💎",
    restoreAmount: 0,
    restorePercent: 100,
    price: 9999999,
    requiredLevel: 0,
  },
  {
    id: "mana-dev",
    name: "Élixir de mana du Dev",
    description: "Restaure 100% du mana maximum",
    type: "mana",
    quality: "ultimate",
    icon: "💎",
    restoreAmount: 0,
    restorePercent: 100,
    price: 9999999,
    requiredLevel: 0,
  },
];

// Obtenir les potions disponibles pour un niveau donné
export const getAvailablePotions = (
  level: number,
  type?: PotionType
): Potion[] => {
  let potions = POTIONS.filter((potion) => potion.requiredLevel <= level);

  if (type) {
    potions = potions.filter((potion) => potion.type === type);
  }

  return orderBy(potions, ["type", "requiredLevel"], ["desc", "desc"]);
};

// Calculer le montant restauré par une potion
export const calculatePotionRestore = (
  potion: Potion,
  currentValue: number,
  maxValue: number
): number => {
  let restore = potion.restoreAmount;

  // Si la potion restaure un pourcentage
  if (potion.restorePercent) {
    restore = Math.floor((maxValue * potion.restorePercent) / 100);
  }

  // Ne pas dépasser le maximum
  const newValue = Math.min(maxValue, currentValue + restore);
  return newValue - currentValue; // Retourner le montant réellement restauré
};

// Interface pour l'inventaire
export interface InventoryItem {
  potionId: string;
  quantity: number;
}

export interface Inventory {
  potions: InventoryItem[];
}

// Ajouter une potion à l'inventaire
export const addPotionToInventory = (
  inventory: Inventory,
  potionId: string,
  quantity: number = 1
): Inventory => {
  const existingItem = inventory.potions.find(
    (item) => item.potionId === potionId
  );

  if (existingItem) {
    return {
      ...inventory,
      potions: inventory.potions.map((item) =>
        item.potionId === potionId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ),
    };
  } else {
    return {
      ...inventory,
      potions: [...inventory.potions, { potionId, quantity }],
    };
  }
};

// Consommer une potion de l'inventaire
export const consumePotionFromInventory = (
  inventory: Inventory,
  potionId: string
): { inventory: Inventory; success: boolean } => {
  const item = inventory.potions.find((i) => i.potionId === potionId);

  if (!item || item.quantity <= 0) {
    return { inventory, success: false };
  }

  const newInventory: Inventory = {
    potions: inventory.potions
      .map((i) =>
        i.potionId === potionId ? { ...i, quantity: i.quantity - 1 } : i
      )
      .filter((i) => i.quantity > 0), // Retirer les items à 0
  };

  return { inventory: newInventory, success: true };
};

// Obtenir le nombre de potions d'un type dans l'inventaire
export const getPotionCount = (
  inventory: Inventory,
  potionId: string
): number => {
  const item = inventory.potions.find((i) => i.potionId === potionId);
  return item ? item.quantity : 0;
};

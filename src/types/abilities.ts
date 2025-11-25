// Système de capacités par classe

import { getSpellIconUrl } from "../data/spellIcons";

export interface ClassAbility {
  id: string;
  name: string;
  icon: string;
  description: string;
  baseDamage?: number;
  baseManaCost: number;
  unlockLevel: number;
  iconUrl?: string; // URL de l'icône WoW depuis Wowhead
  manaCostPerLevel?: number;
  baseHeal?: number;
}

export type WowClass =
  | "warrior"
  | "paladin"
  | "hunter"
  | "rogue"
  | "priest"
  | "shaman"
  | "mage"
  | "warlock"
  | "druid"
  | "death-knight";

// Capacités par classe
export const CLASS_ABILITIES: Record<WowClass, ClassAbility[]> = {
  warrior: [
    {
      id: "heroic-strike",
      name: "Frappe héroïque",
      icon: "⚔️",
      description: "Une attaque puissante qui inflige 20% des dégâts.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "mortal-strike",
      name: "Frappe mortelle",
      icon: "💥",
      description: "Frappe dévastatrice infligeant 50% des dégâts.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "whirlwind",
      name: "Tourbillon",
      icon: "🌪️",
      description: "Attaque tournoyante massive (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: "recklessness",
      name: "Témérité",
      icon: "💢",
      description: "Frappe avec témérité (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: "execute",
      name: "Exécution",
      icon: "☠️",
      description: "Coup final dévastateur (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 30,
    },
  ],
  paladin: [
    {
      id: "crusader-strike",
      name: "Frappe du croisé",
      icon: "⚡",
      description: "Frappe sacrée (20% dégâts).",
      baseDamage: 0.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "holy-light",
      name: "Lumière sacrée",
      icon: "✨",
      description: "Soigne pour 100% du spellPower.",
      baseHeal: 1.0,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 3,
    },
    {
      id: "divine-storm",
      name: "Tempête divine",
      icon: "🌟",
      description: "Tempête sacrée (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: "hammer-of-wrath",
      name: "Marteau de courroux",
      icon: "🔨",
      description: "Marteau divin (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: "divine-shield",
      name: "Bouclier divin",
      icon: "🛡️",
      description: "Frappe protectrice (100% dégâts + soin 50%).",
      baseDamage: 1.0,
      baseHeal: 0.5,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 30,
    },
  ],
  hunter: [
    {
      id: "arcane-shot",
      name: "Tir des arcanes",
      icon: "🏹",
      description: "Tir magique (20% dégâts).",
      baseDamage: 0.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "multi-shot",
      name: "Tir multiple",
      icon: "🎯",
      description: "Salve de flèches (50% dégâts).",
      baseDamage: 0.5,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "aimed-shot",
      name: "Tir visé",
      icon: "🎪",
      description: "Tir précis et puissant (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "explosive-shot",
      name: "Tir explosif",
      icon: "💣",
      description: "Flèche explosive (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 45,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "kill-shot",
      name: "Tir mortel",
      icon: "💀",
      description: "Tir fatal (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 60,
      manaCostPerLevel: 7,
      unlockLevel: 35,
    },
  ],
  rogue: [
    {
      id: "sinister-strike",
      name: "Frappe pernicieuse",
      icon: "🗡️",
      description: "Attaque sournoise (20% dégâts).",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "eviscerate",
      name: "Éventration",
      icon: "🔪",
      description: "Attaque tranchante (50% dégâts).",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "fan-of-knives",
      name: "Salve de couteaux",
      icon: "🗡️",
      description: "Attaque de zone (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: "shadowstep",
      name: "Pas de l’ombre",
      icon: "🌑",
      description: "Attaque furtive (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: "vendetta",
      name: "Vendetta",
      icon: "🔥",
      description: "Attaque vengeresse (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 30,
    },
  ],
  priest: [
    {
      id: "smite",
      name: "Châtiment",
      icon: "✨",
      description: "Frappe sacrée (20% dégâts magiques).",
      baseDamage: 0.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "heal",
      name: "Soins",
      icon: "💚",
      description: "Soigne pour 50% du spellPower.",
      baseHeal: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 1,
    },
    {
      id: "shadow-word-pain",
      name: "Mot de l’ombre : Douleur",
      icon: "🌑",
      description: "Douleur de l’ombre (50% dégâts).",
      baseDamage: 0.5,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: "mind-blast",
      name: "Explosion mentale",
      icon: "🧠",
      description: "Attaque mentale (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: "divine-hymn",
      name: "Hymne divin",
      icon: "🎵",
      description: "Hymne sacré (100% dégâts + soin 100%).",
      baseDamage: 1.0,
      baseHeal: 1.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 30,
    },
  ],
  shaman: [
    {
      id: "lightning-bolt",
      name: "Éclair",
      icon: "⚡",
      description: "Éclair foudroyant (20% dégâts).",
      baseDamage: 0.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "earth-shock",
      name: "Horion de terre",
      icon: "🌍",
      description: "Choc élémentaire (50% dégâts).",
      baseDamage: 0.5,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "lava-burst",
      name: "Explosion de lave",
      icon: "🌋",
      description: "Lave brûlante (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "chain-lightning",
      name: "Chaîne d’éclairs",
      icon: "⛈️",
      description: "Éclairs enchaînés (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 45,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "elemental-mastery",
      name: "Maîtrise élémentaire",
      icon: "🔥",
      description: "Puissance des éléments (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 60,
      manaCostPerLevel: 7,
      unlockLevel: 35,
    },
  ],
  mage: [
    {
      id: "fireball",
      name: "Boule de feu",
      icon: "🔥",
      description: "Boule de feu ardente (20% dégâts).",
      baseDamage: 0.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "frostbolt",
      name: "Éclair de givre",
      icon: "❄️",
      description: "Givre glacial (50% dégâts).",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 3,
    },
    {
      id: "arcane-missiles",
      name: "Projectiles des arcanes",
      icon: "🔮",
      description: "Salve arcanique (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "pyroblast",
      name: "Explosion pyrotechnique",
      icon: "💥",
      description: "Explosion de feu (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 25,
    },
    {
      id: "arcane-power",
      name: "Puissance des arcanes",
      icon: "✨",
      description: "Puissance arcanique ultime (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 70,
      manaCostPerLevel: 8,
      unlockLevel: 35,
    },
  ],
  warlock: [
    {
      id: "shadow-bolt",
      name: "Trait de l’ombre",
      icon: "🌑",
      description: "Projectile d’ombre (20% dégâts).",
      baseDamage: 0.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "immolate",
      name: "Immolation",
      icon: "🔥",
      description: "Flammes démoniaques (50% dégâts).",
      baseDamage: 0.5,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "chaos-bolt",
      name: "Trait du chaos",
      icon: "💀",
      description: "Chaos destructeur (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 15,
    },
    {
      id: "soul-fire",
      name: "Feu de l’âme",
      icon: "👻",
      description: "Flammes spirituelles (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 25,
    },
    {
      id: "dark-soul",
      name: "Âme noire",
      icon: "😈",
      description: "Puissance démoniaque (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 65,
      manaCostPerLevel: 8,
      unlockLevel: 35,
    },
  ],
  druid: [
    {
      id: "wrath",
      name: "Colère",
      icon: "🌿",
      description: "Colère de la nature (20% dégâts).",
      baseDamage: 0.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "moonfire",
      name: "Eclat lunaire",
      icon: "🌙",
      description: "Lumière lunaire (50% dégâts).",
      baseDamage: 0.5,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "starfire",
      name: "Feu stellaire",
      icon: "⭐",
      description: "Feu des étoiles (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "starsurge",
      name: "Déferlante stellaire",
      icon: "💫",
      description: "Déferlante cosmique (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 45,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "incarnation",
      name: "Incarnation",
      icon: "🦁",
      description: "Puissance animale (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 60,
      manaCostPerLevel: 7,
      unlockLevel: 35,
    },
  ],
  "death-knight": [
    {
      id: "death-strike",
      name: "Frappe de la mort",
      icon: "💀",
      description: "Frappe mortelle (20% dégâts).",
      baseDamage: 0.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "obliterate",
      name: "Oblitération",
      icon: "⚔️",
      description: "Coup destructeur (50% dégâts).",
      baseDamage: 0.5,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "frost-strike",
      name: "Frappe de givre",
      icon: "❄️",
      description: "Frappe glaciale (80% dégâts).",
      baseDamage: 0.8,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "soul-reaper",
      name: "Faucheuse d’âme",
      icon: "👻",
      description: "Récolte d’âmes (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 45,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "apocalypse",
      name: "Apocalypse",
      icon: "☠️",
      description: "Fin des temps (100% dégâts).",
      baseDamage: 1.0,
      baseManaCost: 60,
      manaCostPerLevel: 7,
      unlockLevel: 35,
    },
  ],
};

// Obtenir les capacités disponibles pour une classe et un niveau
export const getAvailableAbilities = (
  className: WowClass,
  level: number
): ClassAbility[] => {
  const classAbilities = CLASS_ABILITIES[className] || [];
  return classAbilities.filter((ability) => ability.unlockLevel <= level);
};

// Calculer le coût en mana d'une capacité selon le niveau
export const calculateManaCost = (
  ability: ClassAbility,
  level: number
): number => {
  return ability.baseManaCost + (ability.manaCostPerLevel || 0) * (level - 1);
};

// Calculer les dégâts d'une capacité
export const calculateAbilityDamage = (
  ability: ClassAbility,
  attackPower: number,
  spellPower: number,
  primaryStat: "strength" | "agility" | "intellect"
): number => {
  if (!ability.baseDamage) return 0;
  // Utiliser attackPower pour les classes physiques, spellPower pour les casters
  const basePower = primaryStat === "intellect" ? spellPower : attackPower;
  // Scaling uniquement sur la stat principale et le multiplicateur de l'ability
  return Math.floor(basePower * (1 + ability.baseDamage));
};

// Calculer les soins d'une capacité
export const calculateAbilityHeal = (
  ability: ClassAbility,
  spellPower: number
): number => {
  if (!ability.baseHeal) return 0;
  return Math.floor(spellPower * ability.baseHeal);
};

// Obtenir l'URL de l'icône WoW pour une ability
export const getAbilityIconUrl = (ability: ClassAbility): string => {
  return getSpellIconUrl(ability.id);
};

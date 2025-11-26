// Système de capacités par classe

import { getSpellIconUrl } from "../data/spellIcons";
import type { WowClass } from "./character";

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

// Capacités par classe
export const CLASS_ABILITIES: Record<WowClass, ClassAbility[]> = {
  monk: [
    {
      id: "jab",
      name: "Coup de poing",
      icon: "🥋",
      description: "Un coup rapide qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "rising-sun-kick",
      name: "Coup de pied du soleil levant",
      icon: "☀️",
      description:
        "Un coup puissant qui inflige +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "blackout-kick",
      name: "Coup de pied aveuglant",
      icon: "🌑",
      description:
        "Un coup tournoyant qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: "fists-of-fury",
      name: "Poings de fureur",
      icon: "👊",
      description:
        "Une série de coups rapides qui infligent +100% de dégâts supplémentaires.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: "spinning-crane-kick",
      name: "Coup de grue tournoyant",
      icon: "🦢",
      description:
        "Un coup tournoyant qui inflige +200% de dégâts supplémentaires.",
      baseDamage: 2.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 30,
    },
  ],
  warrior: [
    {
      id: "heroic-strike",
      name: "Frappe héroïque",
      icon: "⚔️",
      description:
        "Une attaque puissante qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "mortal-strike",
      name: "Frappe mortelle",
      icon: "💥",
      description:
        "Frappe dévastatrice qui inflige +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "whirlwind",
      name: "Tourbillon",
      icon: "🌪️",
      description:
        "Attaque tournoyante massive qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: "recklessness",
      name: "Témérité",
      icon: "💢",
      description:
        "Frappe avec témérité qui inflige +100% de dégâts supplémentaires.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: "execute",
      name: "Exécution",
      icon: "☠️",
      description:
        "Coup final dévastateur qui inflige +200% de dégâts supplémentaires.",
      baseDamage: 2.0,
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
      description: "Frappe sacrée qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "holy-light",
      name: "Lumière sacrée",
      icon: "✨",
      description: "Soigne pour 20% de la vie.",
      baseHeal: 0.2,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 3,
    },
    {
      id: "divine-storm",
      name: "Tempête divine",
      icon: "🌟",
      description: "Tempête sacrée qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: "hammer-of-wrath",
      name: "Marteau de courroux",
      icon: "🔨",
      description: "Marteau divin qui inflige +100% de dégâts.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: "divine-shield",
      name: "Bouclier divin",
      icon: "🛡️",
      description:
        "Frappe protectrice qui inflige +200% de dégâts et soigne +50%.",
      baseDamage: 2.0,
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
      description: "Tir magique qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "multi-shot",
      name: "Tir multiple",
      icon: "🎯",
      description:
        "Salve de flèches qui inflige +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "aimed-shot",
      name: "Tir visé",
      icon: "🎪",
      description:
        "Tir précis et puissant qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "explosive-shot",
      name: "Tir explosif",
      icon: "💣",
      description:
        "Flèche explosive qui inflige +100% de dégâts supplémentaires.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "kill-shot",
      name: "Tir mortel",
      icon: "💀",
      description: "Tir fatal qui inflige +200% de dégâts supplémentaires.",
      baseDamage: 2.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 35,
    },
  ],
  rogue: [
    {
      id: "sinister-strike",
      name: "Frappe pernicieuse",
      icon: "🗡️",
      description:
        "Attaque sournoise qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "eviscerate",
      name: "Éventration",
      icon: "🔪",
      description:
        "Attaque tranchante qui inflige +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "fan-of-knives",
      name: "Salve de couteaux",
      icon: "🗡️",
      description:
        "Attaque de zone qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: "shadowstep",
      name: "Pas de l’ombre",
      icon: "🌑",
      description:
        "Attaque furtive qui inflige +100% de dégâts supplémentaires.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: "vendetta",
      name: "Vendetta",
      icon: "🔥",
      description:
        "Attaque vengeresse qui inflige +200% de dégâts supplémentaires.",
      baseDamage: 2.0,
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
      description: "Frappe sacrée qui inflige +20% de dégâts magiques.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "heal",
      name: "Soins",
      icon: "💚",
      description: "Soigne pour 20% de la vie.",
      baseHeal: 0.2,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 1,
    },
    {
      id: "shadow-word-pain",
      name: "Mot de l’ombre : Douleur",
      icon: "🌑",
      description:
        "Douleur de l’ombre qui inflige +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: "mind-blast",
      name: "Explosion mentale",
      icon: "🧠",
      description:
        "Attaque mentale qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: "divine-hymn",
      name: "Hymne divin",
      icon: "🎵",
      description:
        "Hymne sacré qui inflige +200% de dégâts supplémentaires et soigne pour 50% de la vie.",
      baseDamage: 2.0,
      baseHeal: 0.5,
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
      description:
        "Éclair foudroyant qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "earth-shock",
      name: "Horion de terre",
      icon: "🌍",
      description:
        "Choc élémentaire qui inflige +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "lava-burst",
      name: "Explosion de lave",
      icon: "🌋",
      description: "Lave brûlante qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "chain-lightning",
      name: "Chaîne d’éclairs",
      icon: "⛈️",
      description:
        "Éclairs enchaînés qui infligent +100% de dégâts supplémentaires.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "elemental-mastery",
      name: "Maîtrise élémentaire",
      icon: "🔥",
      description:
        "Puissance des éléments qui inflige +200% de dégâts supplémentaires.",
      baseDamage: 2.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 35,
    },
  ],
  mage: [
    {
      id: "fireball",
      name: "Boule de feu",
      icon: "🔥",
      description:
        "Boule de feu ardente qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "frostbolt",
      name: "Éclair de givre",
      icon: "❄️",
      description: "Givre glacial qui inflige +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 3,
    },
    {
      id: "arcane-missiles",
      name: "Projectiles des arcanes",
      icon: "🔮",
      description:
        "Salve arcanique qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "pyroblast",
      name: "Explosion pyrotechnique",
      icon: "💥",
      description:
        "Explosion de feu qui inflige +100% de dégâts supplémentaires.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "arcane-power",
      name: "Puissance des arcanes",
      icon: "✨",
      description:
        "Puissance arcanique ultime qui inflige +200% de dégâts supplémentaires.",
      baseDamage: 2.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 35,
    },
  ],
  warlock: [
    {
      id: "shadow-bolt",
      name: "Trait de l’ombre",
      icon: "🌑",
      description:
        "Projectile d’ombre qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "immolate",
      name: "Immolation",
      icon: "🔥",
      description:
        "Flammes démoniaques qui infligent +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "chaos-bolt",
      name: "Trait du chaos",
      icon: "💀",
      description:
        "Chaos destructeur qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "soul-fire",
      name: "Feu de l’âme",
      icon: "👻",
      description:
        "Flammes spirituelles qui infligent +100% de dégâts supplémentaires.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "dark-soul",
      name: "Âme noire",
      icon: "😈",
      description:
        "Puissance démoniaque qui inflige +200% de dégâts supplémentaires.",
      baseDamage: 2.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 35,
    },
  ],
  druid: [
    {
      id: "wrath",
      name: "Colère",
      icon: "🌿",
      description:
        "Colère de la nature qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "moonfire",
      name: "Eclat lunaire",
      icon: "🌙",
      description:
        "Lumière lunaire qui inflige +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "starfire",
      name: "Feu stellaire",
      icon: "⭐",
      description:
        "Feu des étoiles qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "starsurge",
      name: "Déferlante stellaire",
      icon: "💫",
      description:
        "Déferlante cosmique qui inflige +100% de dégâts supplémentaires.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "incarnation",
      name: "Incarnation",
      icon: "🦁",
      description:
        "Puissance animale qui inflige +200% de dégâts supplémentaires.",
      baseDamage: 2.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 35,
    },
  ],
  "death-knight": [
    {
      id: "death-strike",
      name: "Frappe de la mort",
      icon: "💀",
      description:
        "Frappe mortelle qui inflige +20% de dégâts supplémentaires.",
      baseDamage: 0.2,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: "obliterate",
      name: "Oblitération",
      icon: "⚔️",
      description:
        "Coup destructeur qui inflige +50% de dégâts supplémentaires.",
      baseDamage: 0.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: "frost-strike",
      name: "Frappe de givre",
      icon: "❄️",
      description:
        "Frappe glaciale qui inflige +80% de dégâts supplémentaires.",
      baseDamage: 0.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: "soul-reaper",
      name: "Faucheuse d’âme",
      icon: "👻",
      description:
        "Récolte d’âmes qui inflige +100% de dégâts supplémentaires.",
      baseDamage: 1.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: "apocalypse",
      name: "Apocalypse",
      icon: "☠️",
      description: "Fin des temps qui inflige +200% de dégâts supplémentaires.",
      baseDamage: 2.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
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
  return (ability.baseManaCost + (ability.manaCostPerLevel || 0)) * (level - 1);
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

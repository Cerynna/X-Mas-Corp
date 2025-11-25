export type BuffEffect =
  | "none"
  | "strength"
  | "agility"
  | "intellect"
  | "stamina"
  | "attackPower"
  | "spellPower"
  | "critChance"
  | "luck";

export interface BuffType {
  id: string;
  effect: BuffEffect;
  name: string;
  description: string;
  duration: number; // Duration in seconds
  icon: string;
  expiresAt: number; // Timestamp when the buff expires
  amount: number;
}

export const BuffEffectInfos = {
  none: { name: "No Effect", emoji: "❔" },
  strength: { name: "Strength", emoji: "💪" },
  agility: { name: "Agility", emoji: "🤸" },
  intellect: { name: "Intellect", emoji: "🧠" },
  stamina: { name: "Stamina", emoji: "❤️" },
  attackPower: { name: "Attack Power", emoji: "⚔️" },
  spellPower: { name: "Spell Power", emoji: "✨" },
  critChance: { name: "Critical Chance", emoji: "🎯" },
  luck: { name: "Luck", emoji: "🍀" },
};

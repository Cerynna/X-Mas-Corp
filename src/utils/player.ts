import type { Character, EquipementsType, EquipementSlot } from "../firebase";
import { calculateBaseStats } from "../types/character";

function StatsFromStuffs(character: Pick<Character, "equipment">) {
  const totalStats = {
    strength: 0,
    agility: 0,
    intellect: 0,
    stamina: 0,
    armor: 0,
    attackPower: 0,
    spellPower: 0,
    critChance: 0,
  };

  if (!character.equipment) {
    return totalStats;
  }
  (Object.keys(character.equipment) as EquipementSlot[]).forEach((slot) => {
    const item = character.equipment?.[slot as keyof EquipementsType];
    if (item && item.stats) {
      totalStats.strength += item.stats.strength || 0;
      totalStats.agility += item.stats.agility || 0;
      totalStats.intellect += item.stats.intellect || 0;
      totalStats.stamina += item.stats.stamina || 0;
      totalStats.armor += item.stats.armor || 0;
      totalStats.attackPower += item.stats.attackPower || 0;
      totalStats.spellPower += item.stats.spellPower || 0;
      totalStats.critChance += item.stats.critChance || 0;
    }
  });
  return totalStats;
}

function playerStatsCalculator(
  character: Pick<Character, "class" | "race" | "level" | "equipment">
) {
  //   Calculer les stats de base
  const baseStats = calculateBaseStats(character.class, character.race);
  const baseStatsFromStuffs = StatsFromStuffs(character);

  // Formules linéaires pour la progression des stats
  const level = character.level;

  const baseHealth = baseStats.health;
  const baseMana = baseStats.energy;
  const baseStrength = baseStats.strength;
  const baseAgility = baseStats.agility;
  const baseIntellect = baseStats.intellect;
  const baseStamina = baseStats.stamina;
  const baseAttackPower = 5;
  const baseSpellPower = 5;
  const baseArmor = baseStats.armor;
  const baseCritChance = baseStats.critChance;

  const characterData: Pick<
    Character,
    | "maxHealth"
    | "maxMana"
    | "strength"
    | "agility"
    | "intellect"
    | "stamina"
    | "attackPower"
    | "spellPower"
    | "armor"
    | "critChance"
    | "experienceToNextLevel"
  > = {
    maxHealth: (baseHealth + baseStamina + baseStatsFromStuffs.stamina) * level,
    maxMana: (baseMana + baseIntellect + baseStatsFromStuffs.intellect) * level,

    strength: (baseStrength + baseStatsFromStuffs.strength) * level,
    agility: (baseAgility + baseStatsFromStuffs.agility) * level,
    intellect: (baseIntellect + baseStatsFromStuffs.intellect) * level,
    stamina: (baseStamina + baseStatsFromStuffs.stamina) * level,

    attackPower: (baseAttackPower + baseStatsFromStuffs.attackPower) * level,
    spellPower: (baseSpellPower + baseStatsFromStuffs.spellPower) * level,
    armor: Number(baseArmor) + baseStatsFromStuffs.armor,
    critChance: (Number(baseCritChance) + baseStatsFromStuffs.critChance) * 0.1,
    experienceToNextLevel: expForLevel(level + 1),
  };
  // console.log("Result of playerStatsCalculator:", characterData, level);
  return characterData;
}

function expForLevel(level: number) {
  // Ajuste les paramètres pour la courbe :
  // - level 50 atteignable facilement
  // - level 60 demande beaucoup plus d'exp
  // Formule : base * (level ** exponent)
  // base = 100, exponent = 1.12 (léger exponentiel)
  const base = 100;
  const exponent = 1.12;
  return Math.floor(base * Math.pow(level, exponent));
}

function formatNumber(num: number): string {
  // format K M B etc
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return num.toString();
  }
}

export { StatsFromStuffs, playerStatsCalculator, expForLevel, formatNumber };

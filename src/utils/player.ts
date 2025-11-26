import type { BuffType } from "../types/buffs";
import {
  CLASSES,
  RACES,
  type Character,
  type CharacterStats,
  type WowClass,
  type WowRace,
} from "../types/character";
import type { EquipementSlot, EquipementsType } from "../types/equipmentSlots";

function statsFromStuffs(character: Pick<Character, "equipment">) {
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
  character: Pick<Character, "class" | "race" | "level" | "equipment" | "buffs">
) {
  //   Calculer les stats de base
  const baseStats = calculateBaseStats(character.class, character.race);
  const baseStatsFromStuffs = statsFromStuffs(character);

  // Formules linéaires pour la progression des stats
  const level = character.level;

  const baseHealth = baseStats.health;
  const baseMana = baseStats.energy;
  const baseStrength = baseStats.strength;
  const baseAgility = baseStats.agility;
  const baseIntellect = baseStats.intellect;
  const baseStamina = baseStats.stamina;
  const baseAttackPower = Math.floor(
    baseStats.primaryStat === "strength"
      ? baseStrength + baseStatsFromStuffs.strength / 5
      : baseStats.primaryStat === "agility"
      ? baseAgility + baseStatsFromStuffs.agility / 5
      : baseIntellect + baseStatsFromStuffs.intellect / 5
  );
  const baseSpellPower = Math.floor(
    baseStats.primaryStat === "intellect"
      ? baseIntellect + baseStatsFromStuffs.intellect / 5
      : 0
  );
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

    strength: baseStrength * level + baseStatsFromStuffs.strength,
    agility: baseAgility * level + baseStatsFromStuffs.agility,
    intellect: baseIntellect * level + baseStatsFromStuffs.intellect,
    stamina: baseStamina * level + baseStatsFromStuffs.stamina,

    attackPower: (baseAttackPower + baseStatsFromStuffs.attackPower) * level,
    spellPower: (baseSpellPower + baseStatsFromStuffs.spellPower) * level,
    armor: Number(baseArmor) + baseStatsFromStuffs.armor,
    critChance: (Number(baseCritChance) + baseStatsFromStuffs.critChance) * 0.1,
    experienceToNextLevel: expForLevel(level + 1),
  };

  console.log(
    "attackPower",
    baseAttackPower,
    baseStatsFromStuffs.attackPower,
    level
  );

  // AJOUT DES BUFFS

  if (character.buffs) {
    character.buffs.forEach((buff: BuffType) => {
      switch (buff.effect) {
        case "strength":
          characterData.strength += Math.floor(
            (characterData.strength * buff.amount) / 100
          );
          break;
        case "agility":
          characterData.agility += Math.floor(
            (characterData.agility * buff.amount) / 100
          );
          break;
        case "intellect":
          characterData.intellect += Math.floor(
            (characterData.intellect * buff.amount) / 100
          );
          break;
        case "stamina":
          characterData.stamina += Math.floor(
            (characterData.stamina * buff.amount) / 100
          );
          characterData.maxHealth += Math.floor(
            (baseHealth + baseStatsFromStuffs.stamina) *
              Math.floor((character.level * buff.amount) / 100)
          );
          break;
        // case "attack-power":
        //   characterData.attackPower += Math.floor(
        //     (characterData.attackPower * buff.amount) / 100
        //   );
        //   break;
        // case "spell-power":
        //   characterData.spellPower += Math.floor(
        //     (characterData.spellPower * buff.amount) / 100
        //   );
        //   break;
        // case "crit-chance":
        //   characterData.critChance +=
        //     (characterData.critChance * buff.amount) / 100;
        //   break;
        default:
          break;
      }
    });
  }

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

function clearOldBuffs(character: Pick<Character, "buffs">) {
  if (!character.buffs) return [];
  const now = Date.now();
  return character.buffs.filter((buff: BuffType) => buff.expiresAt > now);
}

const calculateBaseStats = (
  classId: WowClass,
  raceId: WowRace
): CharacterStats => {
  const classInfo = CLASSES[classId];
  const raceInfo = RACES[raceId];
  // console.log("Calculating base stats for class:", classInfo, " race:", raceInfo);

  // Stats de base (niveau 1)
  const baseStrength = 10;
  const baseAgility = 10;
  const baseIntellect = 10;
  const baseStamina = 10;
  const baseArmor = 10;

  const strength = baseStrength + (raceInfo.bonuses.strength || 0);
  const agility = baseAgility + (raceInfo.bonuses.agility || 0);
  const intellect = baseIntellect + (raceInfo.bonuses.intellect || 0);
  const stamina = baseStamina + (raceInfo.bonuses.stamina || 0);
  const armor =
    baseArmor + Math.floor((agility + stamina + strength + intellect) / 4);

  const energyName = classInfo.energyName;

  const health = classInfo.baseHP * 10;
  const energy = classInfo.baseMP;
  let critChance = 0;

  switch (classInfo.primaryStat) {
    case "strength":
      critChance += 5 * strength;
      break;
    case "agility":
      // Les voleurs et chasseurs gagnent plus d'agilité
      critChance += 7 * agility;
      break;
    case "intellect":
      // Les mages et prêtres gagnent plus d'intellect
      critChance += 5 * intellect;
      break;
  }

  return {
    health,
    energy,
    strength,
    agility,
    intellect,
    stamina,
    armor,
    energyName,
    critChance,
    primaryStat: classInfo.primaryStat,
  };
};

export {
  calculateBaseStats,
  statsFromStuffs,
  playerStatsCalculator,
  expForLevel,
  formatNumber,
  clearOldBuffs,
};

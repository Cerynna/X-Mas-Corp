// Système de combat au tour par tour

import type { Character } from "../firebase/database";
import type { Monster } from "./monsters";
import type { ClassAbility } from "./abilities";
import {
  calculateManaCost,
  calculateAbilityDamage,
  calculateAbilityHeal,
} from "./abilities";
import {
  POTIONS,
  calculatePotionRestore,
  consumePotionFromInventory,
} from "./shop";
import {
  generateLoot,
  type EquipmentItem,
  type EquippedItems,
} from "./equipment";

export type BattleAction = "attack" | "ability" | "defend" | "flee";

export interface BattleState {
  player: Character;
  monster: Monster;
  turn: "player" | "monster";
  turnCount: number;
  playerDefending: boolean;
  monsterDefending: boolean;
  battleLog: BattleLogEntry[];
  status: "ongoing" | "victory" | "defeat" | "fled";
  rewards?: BattleRewards;
}

export interface BattleLogEntry {
  id: string;
  message: string;
  type: "info" | "damage" | "heal" | "critical" | "miss" | "victory" | "defeat";
  timestamp: number;
}

export interface BattleRewards {
  experience: number;
  gold: number;
  levelUp?: boolean;
  newLevel?: number;
  loot?: EquipmentItem; // Item droppé par le monstre
}

export interface BattleActionResult {
  success: boolean;
  damage?: number;
  heal?: number;
  critical?: boolean;
  missed?: boolean;
  message: string;
  type: BattleLogEntry["type"];
}

// Calculer les dégâts d'une attaque
export const calculateDamage = (
  attacker: {
    damage?: number;
    attackPower?: number;
    level: number;
    strength?: number;
    spellPower?: number;
    critChance?: number;
    equipment?: EquippedItems;
  },
  defender: { armor: number; stamina?: number },
  isAbility: boolean = false,
  abilityDamage: number = 0,
  isMonster: boolean = false
): { damage: number; critical: boolean } => {
  // Dégâts de base (utiliser attackPower pour les joueurs, damage pour les monstres)
  let attackerDamage = attacker.attackPower ?? attacker.damage ?? 0;
  let strength = attacker.strength ?? 0;
  let critChanceStat = attacker.critChance ?? 0;

  // // Ajouter les stats des équipements si présent
  // if (attacker.equipment) {
  //   for (const item of Object.values(attacker.equipment)) {
  //     if (item && item.stats) {
  //       attackerDamage += item.stats.attackPower || 0;
  //       strength += item.stats.strength || 0;
  // // spellPower += item.stats.spellPower || 0; // Non utilisé ici
  //       critChanceStat += item.stats.critChance || 0;
  //     }
  //   }
  // }

  let baseDamage = isAbility ? abilityDamage : attackerDamage;
  // Ajouter les bonus de stats si c'est le joueur
  baseDamage += Math.floor(strength * 0.5);

  // Critique (10% de base + chance critique du joueur si disponible)
  const critChance = 0.1 + critChanceStat / 100;
  const isCritical = Math.random() < critChance;
  if (isCritical) {
    baseDamage *= 2;
  }

  // Réduction d'armure (armure réduit 1% des dégâts par point)
  console.log("Calcul des dégâts :", {
    isMonster: isMonster ? 1 : 2,
    defender: defender.armor * 0.01,
  });
  const damageReduction = Math.abs((isMonster ? 1 : 2) - defender.armor * 0.01);
  console.log("Calcul des dégâts :", {
    baseDamage,
    damageReduction,
    defenderArmor: defender.armor,
  });
  const finalDamage = Math.max(1, Math.floor(baseDamage * damageReduction));
  console.log("Dégâts finaux après réduction :", finalDamage);

  return {
    damage: finalDamage,
    critical: isCritical,
  };
};

// Action d'attaque du joueur
export const playerAttack = (state: BattleState): BattleState => {
  const { damage, critical } = calculateDamage(state.player, state.monster);

  const newMonsterHealth = Math.max(0, state.monster.health - damage);
  const isDead = newMonsterHealth === 0;

  const logEntry: BattleLogEntry = {
    id: `${Date.now()}-player-attack`,
    message: critical
      ? `💥 Coup critique ! Vous infligez ${damage} dégâts !`
      : `⚔️ Vous attaquez et infligez ${damage} dégâts.`,
    type: critical ? "critical" : "damage",
    timestamp: Date.now(),
  };

  return {
    ...state,
    monster: {
      ...state.monster,
      health: newMonsterHealth,
    },
    turn: isDead ? "player" : "monster",
    status: isDead ? "victory" : "ongoing",
    battleLog: [...state.battleLog, logEntry],
  };
};

// Action d'attaque du monstre
export const monsterAttack = (state: BattleState): BattleState => {
  const { damage, critical } = calculateDamage(
    state.monster,
    state.player,
    false,
    0,
    true
  );

  // Réduction si le joueur défend
  const finalDamage = state.playerDefending ? Math.floor(damage * 0.5) : damage;

  const newPlayerHealth = Math.max(0, state.player.health - finalDamage);
  const isDead = newPlayerHealth === 0;

  const logEntry: BattleLogEntry = {
    id: `${Date.now()}-monster-attack`,
    message: critical
      ? `💀 ${state.monster.name} vous inflige un coup critique de ${finalDamage} dégâts !`
      : state.playerDefending
      ? `🛡️ Vous bloquez partiellement ! ${state.monster.name} inflige ${finalDamage} dégâts.`
      : `🔴 ${state.monster.name} vous inflige ${finalDamage} dégâts.`,
    type: critical ? "critical" : "damage",
    timestamp: Date.now(),
  };

  return {
    ...state,
    player: {
      ...state.player,
      health: newPlayerHealth,
    },
    turn: isDead ? "monster" : "player",
    status: isDead ? "defeat" : "ongoing",
    playerDefending: false,
    battleLog: [...state.battleLog, logEntry],
  };
};

// Action de défense du joueur
export const playerDefend = (state: BattleState): BattleState => {
  const logEntry: BattleLogEntry = {
    id: `${Date.now()}-player-defend`,
    message:
      "🛡️ Vous vous mettez en position défensive. Les dégâts du prochain tour seront réduits de 50%.",
    type: "info",
    timestamp: Date.now(),
  };

  return {
    ...state,
    playerDefending: true,
    turn: "monster",
    battleLog: [...state.battleLog, logEntry],
  };
};

// Fuite du combat
export const playerFlee = (state: BattleState): BattleState => {
  const fleeChance = 0.5; // 50% de chance de fuir
  const success = Math.random() < fleeChance;

  if (success) {
    const logEntry: BattleLogEntry = {
      id: `${Date.now()}-flee-success`,
      message: "🏃 Vous avez réussi à fuir le combat !",
      type: "info",
      timestamp: Date.now(),
    };

    return {
      ...state,
      status: "fled",
      battleLog: [...state.battleLog, logEntry],
    };
  } else {
    const logEntry: BattleLogEntry = {
      id: `${Date.now()}-flee-fail`,
      message: "❌ Vous n'avez pas réussi à fuir ! Le monstre vous rattrape.",
      type: "info",
      timestamp: Date.now(),
    };

    return {
      ...state,
      turn: "monster",
      battleLog: [...state.battleLog, logEntry],
    };
  }
};

// Utiliser une compétence de classe
export const useAbility = (
  state: BattleState,
  ability: ClassAbility
): BattleState => {
  const manaCost = calculateManaCost(ability, state.player.level);

  if (state.player.mana < manaCost) {
    const logEntry: BattleLogEntry = {
      id: `${Date.now()}-ability-nomana`,
      message: `❌ Pas assez de mana pour ${ability.name} ! (${manaCost} requis)`,
      type: "info",
      timestamp: Date.now(),
    };

    return {
      ...state,
      battleLog: [...state.battleLog, logEntry],
    };
  }

  // Déterminer la stat primaire basée sur la classe
  const primaryStat: "strength" | "agility" | "intellect" =
    state.player.spellPower > state.player.attackPower
      ? "intellect"
      : "strength";

  // Calculer les dégâts de la capacité
  const abilityBaseDamage = calculateAbilityDamage(
    ability,
    state.player.attackPower,
    state.player.spellPower,
    primaryStat
  );

  // Calculer les soins si la capacité soigne
  const healAmount = ability.baseHeal
    ? calculateAbilityHeal(ability, state.player.spellPower)
    : 0;

  const logMessages: string[] = [];
  let newPlayerHealth = state.player.health;
  let newMonsterHealth = state.monster.health;

  // Appliquer les dégâts si la capacité inflige des dégâts
  if (ability.baseDamage && abilityBaseDamage > 0) {
    const { damage, critical } = calculateDamage(
      state.player,
      state.monster,
      true,
      abilityBaseDamage
    );

    newMonsterHealth = Math.max(0, state.monster.health - damage);

    const damageMsg = critical
      ? `${ability.icon}💥 ${ability.name} CRITIQUE ! ${damage} dégâts !`
      : `${ability.icon} ${ability.name} inflige ${damage} dégâts !`;
    logMessages.push(damageMsg);
  }

  // Appliquer les soins si la capacité soigne
  if (healAmount > 0) {
    const actualHeal = Math.min(
      healAmount,
      state.player.maxHealth - state.player.health
    );
    newPlayerHealth = Math.min(
      state.player.maxHealth,
      state.player.health + actualHeal
    );
    logMessages.push(`💚 Vous récupérez ${actualHeal} PV !`);
  }

  const isDead = newMonsterHealth === 0;

  const logEntry: BattleLogEntry = {
    id: `${Date.now()}-ability`,
    message: `${logMessages.join(" ")} (-${manaCost} mana)`,
    type: isDead ? "victory" : "damage",
    timestamp: Date.now(),
  };

  return {
    ...state,
    player: {
      ...state.player,
      mana: state.player.mana - manaCost,
      health: newPlayerHealth,
    },
    monster: {
      ...state.monster,
      health: newMonsterHealth,
    },
    turn: isDead ? "player" : "monster",
    status: isDead ? "victory" : "ongoing",
    battleLog: [...state.battleLog, logEntry],
  };
};

// Utiliser une potion pendant le combat
export const usePotion = (
  state: BattleState,
  potionId: string
): BattleState => {
  const inventory = state.player.inventory || { potions: [] };
  const potion = POTIONS.find((p) => p.id === potionId);

  if (!potion) {
    const logEntry: BattleLogEntry = {
      id: `${Date.now()}-potion-not-found`,
      message: "❌ Potion introuvable !",
      type: "info",
      timestamp: Date.now(),
    };
    return {
      ...state,
      battleLog: [...state.battleLog, logEntry],
    };
  }

  // Vérifier si le joueur a cette potion
  const { inventory: newInventory, success } = consumePotionFromInventory(
    inventory,
    potionId
  );

  if (!success) {
    const logEntry: BattleLogEntry = {
      id: `${Date.now()}-no-potion`,
      message: `❌ Vous n'avez pas de ${potion.name} !`,
      type: "info",
      timestamp: Date.now(),
    };
    return {
      ...state,
      battleLog: [...state.battleLog, logEntry],
    };
  }

  let newPlayerHealth = state.player.health;
  let newPlayerMana = state.player.mana;
  let message = "";

  // Appliquer l'effet de la potion
  if (potion.type === "health") {
    const healAmount = calculatePotionRestore(
      potion,
      state.player.health,
      state.player.maxHealth
    );
    newPlayerHealth = state.player.health + healAmount;
    message = `💚 Vous utilisez ${potion.name} et récupérez ${healAmount} PV !`;
  } else if (potion.type === "mana") {
    const manaAmount = calculatePotionRestore(
      potion,
      state.player.mana,
      state.player.maxMana
    );
    newPlayerMana = state.player.mana + manaAmount;
    message = `💙 Vous utilisez ${potion.name} et récupérez ${manaAmount} MP !`;
  }

  const logEntry: BattleLogEntry = {
    id: `${Date.now()}-potion-used`,
    message,
    type: "heal",
    timestamp: Date.now(),
  };

  return {
    ...state,
    player: {
      ...state.player,
      health: newPlayerHealth,
      mana: newPlayerMana,
      inventory: newInventory,
    },
    turn: "monster", // Utiliser une potion prend un tour
    battleLog: [...state.battleLog, logEntry],
  };
};

// Calculer les récompenses après une victoire
export const calculateRewards = (
  monster: Monster,
  player: Character
): BattleRewards => {
  const experience = monster.experienceReward;
  const gold = monster.goldReward;

  // Vérifier si le joueur monte de niveau
  const newExperience = player.experience + experience;
  const levelUp = newExperience >= player.experienceToNextLevel;
  const newLevel = levelUp ? player.level + 1 : player.level;

  // Générer un loot aléatoire
  const loot = generateLoot(monster.level, player);

  return {
    experience,
    gold,
    levelUp,
    newLevel: levelUp ? newLevel : undefined,
    loot: loot || undefined, // Ajouter le loot s'il y en a un
  };
};

// Initialiser un nouveau combat
export const initBattle = (
  player: Character,
  monster: Monster
): BattleState => {
  const logEntry: BattleLogEntry = {
    id: `${Date.now()}-start`,
    message: `⚔️ Un ${monster.name} sauvage apparaît !`,
    type: "info",
    timestamp: Date.now(),
  };

  return {
    player,
    monster,
    turn: "player",
    turnCount: 1,
    playerDefending: false,
    monsterDefending: false,
    battleLog: [logEntry],
    status: "ongoing",
  };
};

// Traiter le tour du monstre (IA simple)
export const processMonsterTurn = (state: BattleState): BattleState => {
  // IA simple : 70% attaque normale, 30% utilise une compétence si disponible
  const useAbility = state.monster.abilities.length > 0 && Math.random() < 0.3;

  if (useAbility) {
    // Utiliser une compétence aléatoire
    const ability =
      state.monster.abilities[
        Math.floor(Math.random() * state.monster.abilities.length)
      ];

    const { damage, critical } = calculateDamage(
      state.monster,
      state.player,
      true,
      ability.damage || state.monster.damage * 1.5,
      true
    );

    const finalDamage = state.playerDefending
      ? Math.floor(damage * 0.5)
      : damage;
    const newPlayerHealth = Math.max(0, state.player.health - finalDamage);
    const isDead = newPlayerHealth === 0;

    const logEntry: BattleLogEntry = {
      id: `${Date.now()}-monster-ability`,
      message: critical
        ? `💀✨ ${state.monster.name} utilise ${ability.name} ! Coup critique de ${finalDamage} dégâts !`
        : `✨ ${state.monster.name} utilise ${ability.name} et inflige ${finalDamage} dégâts !`,
      type: critical ? "critical" : "damage",
      timestamp: Date.now(),
    };

    return {
      ...state,
      player: {
        ...state.player,
        health: newPlayerHealth,
      },
      turn: isDead ? "monster" : "player",
      status: isDead ? "defeat" : "ongoing",
      playerDefending: false,
      turnCount: state.turnCount + 1,
      battleLog: [...state.battleLog, logEntry],
    };
  } else {
    // Attaque normale
    return {
      ...monsterAttack(state),
      turnCount: state.turnCount + 1,
    };
  }
};

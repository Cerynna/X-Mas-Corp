// Types et constantes pour le système de personnages WoW

export type Faction = "alliance" | "horde";

export type WowClass =
  | "warrior" // Guerrier
  | "paladin" // Paladin
  | "hunter" // Chasseur
  | "rogue" // Voleur
  | "priest" // Prêtre
  | "shaman" // Chaman
  | "mage" // Mage
  | "warlock" // Démoniste
  | "druid" // Druide
  | "death-knight"; // Chevalier de la mort

export type AllianceRace =
  | "human" // Humain
  | "dwarf" // Nain
  | "night-elf" // Elfe de la nuit
  | "gnome" // Gnome
  | "draenei" // Draeneï
  | "worgen"; // Worgen

export type HordeRace =
  | "orc" // Orc
  | "undead" // Mort-vivant
  | "tauren" // Tauren
  | "troll" // Troll
  | "blood-elf" // Elfe de sang
  | "goblin"; // Gobelin

export type WowRace = AllianceRace | HordeRace;

type ArmorType = "cloth" | "leather" | "mail" | "plate";

// Informations sur les classes
export interface ClassInfo {
  id: WowClass;
  name: string;
  description: string;
  primaryStat: "strength" | "agility" | "intellect";
  icon: string;
  color: string;
  baseHP: number;
  baseMP: number;
  availableFor: {
    alliance: WowRace[];
    horde: WowRace[];
  };
  energyName: string;
  armorType: ArmorType;
}

// Informations sur les races
export interface RaceInfo {
  id: WowRace;
  name: string;
  description: string;
  faction: Faction;
  icon: string;
  bonuses: {
    strength?: number;
    agility?: number;
    intellect?: number;
    stamina?: number;
  };
}

// Classes disponibles
export const CLASSES: Record<WowClass, ClassInfo> = {
  warrior: {
    id: "warrior",
    name: "Guerrier",
    description:
      "Maître du combat au corps à corps, utilise la rage pour déchaîner des attaques dévastatrices.",
    primaryStat: "strength",
    icon: "⚔️",
    color: "#C79C6E",
    baseHP: 120,
    baseMP: 0,
    availableFor: {
      alliance: ["human", "dwarf", "night-elf", "gnome", "draenei", "worgen"],
      horde: ["orc", "undead", "tauren", "troll", "blood-elf", "goblin"],
    },
    energyName: "🔥 Rage",
    armorType: "plate",
  },
  paladin: {
    id: "paladin",
    name: "Paladin",
    description:
      "Guerrier sacré qui utilise la Lumière pour protéger ses alliés et punir ses ennemis.",
    primaryStat: "strength",
    icon: "🛡️",
    color: "#F58CBA",
    baseHP: 110,
    baseMP: 80,
    availableFor: {
      alliance: ["human", "dwarf", "draenei"],
      horde: ["blood-elf", "tauren"],
    },
    energyName: "💙 Mana",
    armorType: "plate",
  },
  hunter: {
    id: "hunter",
    name: "Chasseur",
    description: "Maître du tir à distance et compagnon des bêtes sauvages.",
    primaryStat: "agility",
    icon: "🏹",
    color: "#ABD473",
    baseHP: 100,
    baseMP: 100,
    availableFor: {
      alliance: ["human", "dwarf", "night-elf", "draenei", "worgen", "gnome"],
      horde: ["orc", "undead", "tauren", "troll", "blood-elf", "goblin"],
    },
    energyName: "🎯 Focus",
    armorType: "mail",
  },
  rogue: {
    id: "rogue",
    name: "Voleur",
    description:
      "Assassin furtif spécialisé dans les attaques sournoises et les coups critiques.",
    primaryStat: "agility",
    icon: "🗡️",
    color: "#FFF569",
    baseHP: 95,
    baseMP: 90,
    availableFor: {
      alliance: ["human", "dwarf", "night-elf", "gnome", "worgen"],
      horde: ["orc", "undead", "troll", "blood-elf", "goblin"],
    },
    energyName: "⚡ Énergie",
    armorType: "leather",
  },
  priest: {
    id: "priest",
    name: "Prêtre",
    description:
      "Manipule la magie sacrée et de l'ombre pour soigner ou blesser.",
    primaryStat: "intellect",
    icon: "✨",
    color: "#FFFFFF",
    baseHP: 80,
    baseMP: 120,
    availableFor: {
      alliance: ["human", "dwarf", "night-elf", "draenei", "worgen"],
      horde: ["undead", "troll", "blood-elf", "goblin"],
    },
    energyName: "💙 Mana",
    armorType: "cloth",
  },
  shaman: {
    id: "shaman",
    name: "Chaman",
    description: "Invoque le pouvoir des éléments et des esprits ancestraux.",
    primaryStat: "intellect",
    icon: "⚡",
    color: "#0070DE",
    baseHP: 95,
    baseMP: 110,
    availableFor: {
      alliance: ["draenei"],
      horde: ["orc", "tauren", "troll", "goblin"],
    },
    energyName: "💙 Mana",
    armorType: "mail",
  },
  mage: {
    id: "mage",
    name: "Mage",
    description:
      "Maître des arcanes, du feu et du givre, capable de manipuler les forces magiques.",
    primaryStat: "intellect",
    icon: "🔮",
    color: "#69CCF0",
    baseHP: 75,
    baseMP: 130,
    availableFor: {
      alliance: ["human", "dwarf", "night-elf", "gnome", "draenei", "worgen"],
      horde: ["orc", "undead", "troll", "blood-elf", "goblin"],
    },
    energyName: "💙 Mana",
    armorType: "cloth",
  },
  warlock: {
    id: "warlock",
    name: "Démoniste",
    description:
      "Invoque des démons et utilise la magie de l'ombre et du feu démoniaque.",
    primaryStat: "intellect",
    icon: "👿",
    color: "#9482C9",
    baseHP: 85,
    baseMP: 120,
    availableFor: {
      alliance: ["human", "dwarf", "gnome", "worgen"],
      horde: ["orc", "undead", "blood-elf", "goblin"],
    },
    energyName: "💙 Mana",
    armorType: "cloth",
  },
  druid: {
    id: "druid",
    name: "Druide",
    description:
      "Transformiste de la nature capable de prendre plusieurs formes animales.",
    primaryStat: "intellect",
    icon: "🌿",
    color: "#FF7D0A",
    baseHP: 90,
    baseMP: 110,
    availableFor: {
      alliance: ["night-elf", "worgen"],
      horde: ["tauren", "troll"],
    },
    energyName: "💙 Mana",
    armorType: "leather",
  },
  "death-knight": {
    id: "death-knight",
    name: "Chevalier de la mort",
    description:
      "Guerrier impie maniant les pouvoirs de la mort et de la glace.",
    primaryStat: "strength",
    icon: "💀",
    color: "#C41F3B",
    baseHP: 115,
    baseMP: 100,
    availableFor: {
      alliance: ["human", "dwarf", "night-elf", "gnome", "draenei", "worgen"],
      horde: ["orc", "undead", "tauren", "troll", "blood-elf", "goblin"],
    },
    energyName: "🌀 Runes",
    armorType: "plate",
  },
};

// Races disponibles
export const RACES: Record<WowRace, RaceInfo> = {
  // Alliance
  human: {
    id: "human",
    name: "Humain",
    description: "Peuple courageux et déterminé de Hurlevent.",
    faction: "alliance",
    icon: "👨",
    bonuses: { strength: 2, agility: 1, intellect: 2, stamina: 2 },
  },
  dwarf: {
    id: "dwarf",
    name: "Nain",
    description: "Race ancienne et robuste de Forgefer.",
    faction: "alliance",
    icon: "🧔",
    bonuses: { strength: 3, stamina: 4, agility: 1 },
  },
  "night-elf": {
    id: "night-elf",
    name: "Elfe de la nuit",
    description: "Ancien peuple mystique de Kalimdor.",
    faction: "alliance",
    icon: "🧝",
    bonuses: { agility: 4, intellect: 1, stamina: 1 },
  },
  gnome: {
    id: "gnome",
    name: "Gnome",
    description: "Inventeurs ingénieux de Gnomeregan.",
    faction: "alliance",
    icon: "🧙",
    bonuses: { intellect: 4, agility: 2 },
  },
  draenei: {
    id: "draenei",
    name: "Draeneï",
    description: "Réfugiés nobles guidés par la Lumière.",
    faction: "alliance",
    icon: "👽",
    bonuses: { strength: 2, intellect: 2, stamina: 2 },
  },
  worgen: {
    id: "worgen",
    name: "Worgen",
    description: "Humains maudits transformés en loups-garous.",
    faction: "alliance",
    icon: "🐺",
    bonuses: { strength: 2, agility: 3, stamina: 2 },
  },
  // Horde
  orc: {
    id: "orc",
    name: "Orc",
    description: "Guerriers féroces d'Orgrimmar.",
    faction: "horde",
    icon: "👹",
    bonuses: { strength: 4, stamina: 3 },
  },
  undead: {
    id: "undead",
    name: "Mort-vivant",
    description: "Les Réprouvés, libérés du Fléau.",
    faction: "horde",
    icon: "🧟",
    bonuses: { intellect: 2, agility: 2, stamina: 2 },
  },
  tauren: {
    id: "tauren",
    name: "Tauren",
    description: "Géants paisibles des plaines de Mulgore.",
    faction: "horde",
    icon: "🐮",
    bonuses: { strength: 3, stamina: 5 },
  },
  troll: {
    id: "troll",
    name: "Troll",
    description: "Chasseurs rusés des Îles de l'Écho.",
    faction: "horde",
    icon: "🗿",
    bonuses: { agility: 3, intellect: 1, stamina: 2 },
  },
  "blood-elf": {
    id: "blood-elf",
    name: "Elfe de sang",
    description: "Anciens Haut-Elfes assoiffés de magie.",
    faction: "horde",
    icon: "🧝‍♀️",
    bonuses: { intellect: 4, agility: 2 },
  },
  goblin: {
    id: "goblin",
    name: "Gobelin",
    description: "Marchands malins et ingénieux.",
    faction: "horde",
    icon: "👺",
    bonuses: { intellect: 3, agility: 3 },
  },
};

// Obtenir les races disponibles pour une faction
export const getRacesByFaction = (faction: Faction): RaceInfo[] => {
  return Object.values(RACES).filter((race) => race.faction === faction);
};

// Obtenir les classes disponibles pour une race
export const getClassesForRace = (
  race: WowRace,
  faction: Faction
): ClassInfo[] => {
  return Object.values(CLASSES).filter((classInfo) =>
    classInfo.availableFor[faction].includes(race)
  );
};

// Calculer les stats de base d'un personnage
export interface CharacterStats {
  health: number;
  energy: number;
  strength: number;
  agility: number;
  intellect: number;
  stamina: number;
  energyName: string;
  armor?: number;
  critChance?: number;
}

export const calculateBaseStats = (
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
  const energy = classInfo.baseMP * 5;
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
  };
};

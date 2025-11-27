// Types et données des monstres/ennemis du jeu

import { expForLevel } from "../utils/player";
import type { ZoneType } from "./zone";

export type MonsterType =
  | "beast" // Bêtes (loups, sangliers)
  | "humanoid" // Humanoïdes (murlocs, bandits)
  | "goblin" // Gobelins
  | "undead" // Morts-vivants
  | "elemental" // Élémentaires
  | "demon" // Démons
  | "dragon" // Dragons
  | "giant"; // Géants

export interface MonsterTemplate {
  id: string;
  name: string;
  type: MonsterType;
  icon: string;
  minLevel: number;
  maxLevel: number;
  baseHealth: number;
  baseDamage: number;
  baseArmor: number;
  experienceReward: number;
  goldReward: number;
  abilities?: MonsterAbility[];
  lootTable?: string[];
}

export interface MonsterAbility {
  name: string;
  icon: string;
  damage?: number;
  heal?: number;
  cooldown: number;
  description: string;
}

export interface Monster {
  id: string;
  name: string;
  type: MonsterType;
  icon: string;
  level: number;
  health: number;
  maxHealth: number;
  damage: number;
  armor: number;
  experienceReward: number;
  goldReward: number;
  abilities: MonsterAbility[];
}

// Templates des monstres par niveau
export const MONSTER_TEMPLATES: MonsterTemplate[] = [
  // Niveau 1-5: Bêtes basiques
  {
    id: "wolf",
    name: "Loup",
    type: "beast",
    icon: "🐺",
    minLevel: 1,
    maxLevel: 5,
    baseHealth: 15,
    baseDamage: 100,
    baseArmor: 5,
    experienceReward: 25,
    goldReward: 100,
    abilities: [
      {
        name: "Morsure",
        icon: "🦷",
        damage: 150,
        cooldown: 2,
        description: "Mord férocement la cible",
      },
    ],
  },
  {
    id: "boar",
    name: "Sanglier",
    type: "beast",
    icon: "🐗",
    minLevel: 1,
    maxLevel: 5,
    baseHealth: 20,
    baseDamage: 120,
    baseArmor: 8,
    experienceReward: 30,
    goldReward: 120,
    abilities: [
      {
        name: "Charge",
        icon: "💨",
        damage: 120,
        cooldown: 3,
        description: "Charge brutalement",
      },
    ],
  },
  // Ajout Foret du Départ (1-5)
  {
    id: "fox",
    name: "Renard Agile",
    type: "beast",
    icon: "🦊",
    minLevel: 1,
    maxLevel: 5,
    baseHealth: 12,
    baseDamage: 80,
    baseArmor: 4,
    experienceReward: 20,
    goldReward: 80,
    abilities: [
      {
        name: "Fuite Rapide",
        icon: "🏃",
        damage: 60,
        cooldown: 2,
        description: "Esquive et contre-attaque",
      },
    ],
  },
  {
    id: "owl",
    name: "Hibou Sombre",
    type: "beast",
    icon: "🦉",
    minLevel: 2,
    maxLevel: 5,
    baseHealth: 10,
    baseDamage: 70,
    baseArmor: 3,
    experienceReward: 18,
    goldReward: 70,
    abilities: [
      {
        name: "Serres Tranchantes",
        icon: "🪶",
        damage: 50,
        cooldown: 2,
        description: "Attaque silencieuse de nuit",
      },
    ],
  },

  // Niveau 5-10: Humanoïdes
  {
    id: "murloc",
    name: "Murloc",
    type: "humanoid",
    icon: "🐸",
    minLevel: 5,
    maxLevel: 10,
    baseHealth: 30,
    baseDamage: 600,
    baseArmor: 10,
    experienceReward: 200,
    goldReward: 600,
    abilities: [
      {
        name: "Cri Murloc",
        icon: "📢",
        damage: 780,
        cooldown: 4,
        description: "MRGLGLGL!",
      },
    ],
  },
  {
    id: "bandit",
    name: "Bandit de la Forêt",
    type: "humanoid",
    icon: "🗡️",
    minLevel: 6,
    maxLevel: 12,
    baseHealth: 45,
    baseDamage: 720,
    baseArmor: 12,
    experienceReward: 250,
    goldReward: 720,
    abilities: [
      {
        name: "Coup Sournois",
        icon: "🔪",
        damage: 800,
        cooldown: 3,
        description: "Frappe dans le dos",
      },
    ],
  },
  // Ajout Camp de Voleurs (5-15)
  {
    id: "thief",
    name: "Voleur de la Forêt",
    type: "humanoid",
    icon: "🕴️",
    minLevel: 5,
    maxLevel: 15,
    baseHealth: 35,
    baseDamage: 500,
    baseArmor: 8,
    experienceReward: 120,
    goldReward: 500,
    abilities: [
      {
        name: "Vol Rapide",
        icon: "🪙",
        damage: 400,
        cooldown: 3,
        description: "Dérobe et frappe rapidement",
      },
    ],
  },
  {
    id: "giant-rat",
    name: "Rat Géant",
    type: "beast",
    icon: "🐀",
    minLevel: 7,
    maxLevel: 15,
    baseHealth: 25,
    baseDamage: 350,
    baseArmor: 6,
    experienceReward: 80,
    goldReward: 350,
    abilities: [
      {
        name: "Morsure Infectée",
        icon: "🦠",
        damage: 300,
        cooldown: 4,
        description: "Peut empoisonner la cible",
      },
    ],
  },

  // Niveau 10-15: Morts-vivants
  {
    id: "skeleton",
    name: "Squelette résucité",
    type: "undead",
    icon: "💀",
    minLevel: 10,
    maxLevel: 15,
    baseHealth: 60,
    baseDamage: 1200,
    baseArmor: 15,
    experienceReward: 260,
    goldReward: 1200,
    abilities: [
      {
        name: "Toucher de Givre",
        icon: "❄️",
        damage: 1400,
        cooldown: 4,
        description: "Toucher glacial qui ralentit",
      },
    ],
  },
  {
    id: "ghoul",
    name: "Goule affamée",
    type: "undead",
    icon: "🧟",
    minLevel: 12,
    maxLevel: 18,
    baseHealth: 75,
    baseDamage: 1400,
    baseArmor: 18,
    experienceReward: 275,
    goldReward: 1400,
    abilities: [
      {
        name: "Festin de Chair",
        icon: "🩸",
        damage: 2000,
        heal: 20,
        cooldown: 5,
        description: "Dévore et se soigne",
      },
    ],
  },
  // Ajout Manoir Occulte (10-15)
  {
    id: "ghost",
    name: "Fantôme du Manoir",
    type: "undead",
    icon: "👻",
    minLevel: 10,
    maxLevel: 15,
    baseHealth: 40,
    baseDamage: 900,
    baseArmor: 10,
    experienceReward: 180,
    goldReward: 900,
    abilities: [
      {
        name: "Hurlement Effrayant",
        icon: "😱",
        damage: 800,
        cooldown: 4,
        description: "Effraie et affaiblit la cible",
      },
    ],
  },
  {
    id: "gargoyle",
    name: "Gargouille Animée",
    type: "undead",
    icon: "🗿",
    minLevel: 12,
    maxLevel: 15,
    baseHealth: 55,
    baseDamage: 1100,
    baseArmor: 18,
    experienceReward: 220,
    goldReward: 1100,
    abilities: [
      {
        name: "Griffes de Pierre",
        icon: "🪨",
        damage: 1000,
        cooldown: 3,
        description: "Attaque physique puissante",
      },
    ],
  },

  // Niveau 15-20: Élémentaires
  {
    id: "fire-elemental",
    name: "Élémentaire de Feu",
    type: "elemental",
    icon: "🔥",
    minLevel: 15,
    maxLevel: 22,
    baseHealth: 100,
    baseDamage: 1800,
    baseArmor: 18,
    experienceReward: 300,
    goldReward: 1800,
    abilities: [
      {
        name: "Boule de Feu",
        icon: "💥",
        damage: 2000,
        cooldown: 3,
        description: "Lance une boule de feu",
      },
    ],
  },
  {
    id: "ice-elemental",
    name: "Élémentaire de Eau",
    type: "elemental",
    icon: "❄️",
    minLevel: 16,
    maxLevel: 23,
    baseHealth: 100,
    baseDamage: 2000,
    baseArmor: 20,
    experienceReward: 300,
    goldReward: 1800,
    abilities: [
      {
        name: "Tempête d'Eau",
        icon: "🌨️",
        damage: 2500,
        cooldown: 3,
        description: "Congèle les ennemis",
      },
    ],
  },
  {
    id: "earth-elemental",
    name: "Élémentaire de Terre",
    type: "elemental",
    icon: "🌱",
    minLevel: 17,
    maxLevel: 24,
    baseHealth: 120,
    baseDamage: 2100,
    baseArmor: 25,
    experienceReward: 320,
    goldReward: 1900,
    abilities: [
      {
        name: "Secousse Sismique",
        icon: "🌋",
        damage: 2700,
        cooldown: 4,
        description: "Provoque une secousse qui étourdit",
      },
    ],
  },
  {
    id: "air-elemental",
    name: "Élémentaire d'Air",
    type: "elemental",
    icon: "🌪️",
    minLevel: 18,
    maxLevel: 25,
    baseHealth: 90,
    baseDamage: 2200,
    baseArmor: 15,
    experienceReward: 330,
    goldReward: 1950,
    abilities: [
      {
        name: "Rafale",
        icon: "💨",
        damage: 2600,
        cooldown: 3,
        description: "Attaque avec une puissante rafale de vent",
      },
    ],
  },

  // Niveau 20-25: Démons
  {
    id: "imp",
    name: "Diablotin",
    type: "demon",
    icon: "👿",
    minLevel: 20,
    maxLevel: 25,
    baseHealth: 120,
    baseDamage: 2400,
    baseArmor: 22,
    experienceReward: 350,
    goldReward: 2400,
    abilities: [
      {
        name: "Trait de Feu",
        icon: "🔥",
        damage: 3000,
        cooldown: 3,
        description: "Tire un trait de feu",
      },
    ],
  },
  {
    id: "felguard",
    name: "Gangregarde",
    type: "demon",
    icon: "😈",
    minLevel: 23,
    maxLevel: 28,
    baseHealth: 150,
    baseDamage: 2600,
    baseArmor: 28,
    experienceReward: 370,
    goldReward: 2600,
    abilities: [
      {
        name: "Coup Gangreneux",
        icon: "💚",
        damage: 3200,
        cooldown: 4,
        description: "Frappe corrompue",
      },
    ],
  },
  // Ajout Forteresse Démoniaque (20-25)
  {
    id: "minor-demon",
    name: "Démon Mineur",
    type: "demon",
    icon: "👹",
    minLevel: 20,
    maxLevel: 25,
    baseHealth: 110,
    baseDamage: 2200,
    baseArmor: 20,
    experienceReward: 320,
    goldReward: 2200,
    abilities: [
      {
        name: "Griffes Ardentes",
        icon: "🔥",
        damage: 2100,
        cooldown: 3,
        description: "Attaque de feu rapide",
      },
    ],
  },
  {
    id: "succubus",
    name: "Succube",
    type: "demon",
    icon: "👩‍🦰",
    minLevel: 22,
    maxLevel: 25,
    baseHealth: 100,
    baseDamage: 2300,
    baseArmor: 18,
    experienceReward: 330,
    goldReward: 2300,
    abilities: [
      {
        name: "Charme Fatal",
        icon: "💋",
        damage: 2000,
        cooldown: 4,
        description: "Peut charmer et affaiblir la cible",
      },
    ],
  },

  // Niveau 25-30: Géants
  {
    id: "giant",
    name: "Géant de Pierre",
    type: "giant",
    icon: "🗿",
    minLevel: 25,
    maxLevel: 32,
    baseHealth: 175,
    baseDamage: 3000,
    baseArmor: 30,
    experienceReward: 550,
    goldReward: 3000,
    abilities: [
      {
        name: "Écrasement",
        icon: "🪨",
        damage: 3500,
        cooldown: 4,
        description: "Écrase avec une force titanesque",
      },
    ],
  },
  // Ajout Terre des Géants (25-32)
  {
    id: "ice-giant",
    name: "Géant de Glace",
    type: "giant",
    icon: "🧊",
    minLevel: 25,
    maxLevel: 32,
    baseHealth: 200,
    baseDamage: 3200,
    baseArmor: 35,
    experienceReward: 600,
    goldReward: 3200,
    abilities: [
      {
        name: "Souffle Glacial",
        icon: "❄️",
        damage: 3700,
        cooldown: 4,
        description: "Rend la cible plus lente",
      },
    ],
  },
  {
    id: "troll-brute",
    name: "Troll Massif",
    type: "giant",
    icon: "🧟‍♂️",
    minLevel: 27,
    maxLevel: 32,
    baseHealth: 180,
    baseDamage: 3100,
    baseArmor: 28,
    experienceReward: 580,
    goldReward: 3100,
    abilities: [
      {
        name: "Coup de Massue",
        icon: "🔨",
        damage: 3400,
        cooldown: 3,
        description: "Frappe puissante avec une massue",
      },
    ],
  },

  // Niveau 30+: Dragons (Boss)
  {
    id: "whelp",
    name: "Dragonnet",
    type: "dragon",
    icon: "🐉",
    minLevel: 30,
    maxLevel: 35,
    baseHealth: 200,
    baseDamage: 3500,
    baseArmor: 40,
    experienceReward: 650,
    goldReward: 3500,
    abilities: [
      {
        name: "Souffle de Flammes",
        icon: "🔥",
        damage: 4000,
        cooldown: 4,
        description: "Souffle enflammé dévastateur",
      },
    ],
  },
  {
    id: "dragon",
    name: "Dragon",
    type: "dragon",
    icon: "🐲",
    minLevel: 35,
    maxLevel: 45,
    baseHealth: 300,
    baseDamage: 4200,
    baseArmor: 50,
    experienceReward: 800,
    goldReward: 4200,
    abilities: [
      {
        name: "Souffle de Dragon",
        icon: "💨",
        damage: 5000,
        cooldown: 3,
        description: "Souffle destructeur",
      },
      {
        name: "Rugissement",
        icon: "😤",
        damage: 4500,
        cooldown: 5,
        description: "Rugissement terrifiant",
      },
    ],
  },
  {
    id: "ancient-dragon",
    name: "Dragon Ancien",
    type: "dragon",
    icon: "🐲",
    minLevel: 45,
    maxLevel: 60,
    baseHealth: 400,
    baseDamage: 5500,
    baseArmor: 60,
    experienceReward: 1200,
    goldReward: 5500,
    abilities: [
      {
        name: "Cataclysme",
        icon: "💥",
        damage: 6000,
        cooldown: 5,
        description: "Déchaîne un cataclysme",
      },
      {
        name: "Souffle Ancestral",
        icon: "🌪️",
        damage: 7000,
        cooldown: 4,
        description: "Souffle millénaire",
      },
    ],
  },
  // Ajout Pic du Dragon (30-60)
  {
    id: "wyvern",
    name: "Wyvern Sauvage",
    type: "dragon",
    icon: "🦅",
    minLevel: 30,
    maxLevel: 40,
    baseHealth: 220,
    baseDamage: 3700,
    baseArmor: 38,
    experienceReward: 700,
    goldReward: 3700,
    abilities: [
      {
        name: "Piqûre Venimeuse",
        icon: "🦟",
        damage: 3900,
        cooldown: 4,
        description: "Peut empoisonner la cible",
      },
    ],
  },
  {
    id: "drake",
    name: "Drake des Cimes",
    type: "dragon",
    icon: "🦎",
    minLevel: 35,
    maxLevel: 50,
    baseHealth: 280,
    baseDamage: 4100,
    baseArmor: 45,
    experienceReward: 900,
    goldReward: 4100,
    abilities: [
      {
        name: "Souffle Acide",
        icon: "🧪",
        damage: 4800,
        cooldown: 3,
        description: "Souffle corrosif",
      },
    ],
  },
  {
    id: "guardian-dragon",
    name: "Dragon Gardien",
    type: "dragon",
    icon: "🛡️",
    minLevel: 50,
    maxLevel: 60,
    baseHealth: 500,
    baseDamage: 6000,
    baseArmor: 70,
    experienceReward: 1500,
    goldReward: 6000,
    abilities: [
      {
        name: "Barrière Draconique",
        icon: "🛡️",
        damage: 0,
        cooldown: 5,
        description: "Réduit fortement les dégâts subis",
      },
      {
        name: "Souffle de Givre",
        icon: "❄️",
        damage: 7500,
        cooldown: 4,
        description: "Souffle glacé paralysant",
      },
    ],
  },
];

// Générer un monstre basé sur le niveau du joueur
export const generateMonster = (
  playerLevel: number,
  zone: ZoneType
): Monster => {
  // Filtrer les monstres disponibles dans la zone
  const availableTemplates = MONSTER_TEMPLATES.filter((template) =>
    zone.monstersId.includes(template.id)
  );

  // Si aucun template exact, prendre le template avec le maxLevel le plus proche en dessous
  if (availableTemplates.length === 0) {
    const closest = MONSTER_TEMPLATES.reduce((prev, curr) => {
      return curr.maxLevel < playerLevel && curr.maxLevel > prev.maxLevel
        ? curr
        : prev;
    }, MONSTER_TEMPLATES[0]);
    return createMonsterFromTemplate(closest, playerLevel);
  }

  const randomTemplateIndex = Math.floor(
    Math.random() * availableTemplates.length
  );
  const randomTemplate = availableTemplates[randomTemplateIndex];

  // Prendre le template dont le maxLevel est le plus proche du niveau demandé
  const template = randomTemplate;
  return createMonsterFromTemplate(template, playerLevel);
};

// Créer une instance de monstre depuis un template
const createMonsterFromTemplate = (
  template: MonsterTemplate,
  level: number
): Monster => {
  // console.log("Creating monster:", template, "for level", level);
  // Scaling linéaire des stats
  const statPerLevel = 2;
  return {
    id: `${template.id}-${Date.now()}`,
    name: `${template.name}`,
    type: template.type,
    icon: template.icon,
    level,
    health: Math.floor(template.baseHealth * statPerLevel * level),
    maxHealth: Math.floor(template.baseHealth * statPerLevel * level),
    damage: Math.floor(
      template.baseDamage + (level - template.minLevel) * statPerLevel
    ),
    armor: Math.floor(
      template.baseArmor + (level - template.minLevel) * statPerLevel * 0.5
    ),
    experienceReward: Math.floor(expForLevel(level) / (4 + level / 10)),
    goldReward: Math.floor(template.goldReward * 3 * level),
    abilities: template.abilities || [],
  };
};

// Obtenir un monstre spécifique par ID
export const getMonsterTemplate = (id: string): MonsterTemplate | undefined => {
  return MONSTER_TEMPLATES.find((template) => template.id === id);
};

// Obtenir tous les monstres d'un certain type
export const getMonstersByType = (type: MonsterType): MonsterTemplate[] => {
  return MONSTER_TEMPLATES.filter((template) => template.type === type);
};

// Obtenir les monstres disponibles pour un niveau donné
export const getAvailableMonstersForLevel = (
  level: number
): MonsterTemplate[] => {
  return MONSTER_TEMPLATES.filter(
    (template) => template.minLevel <= level && template.maxLevel >= level
  );
};

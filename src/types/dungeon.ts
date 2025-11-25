import type { MonsterTemplate } from "./monsters";

export interface DungeonTemplate {
  id: string;
  name: string;
  levelRequirement: number;
  size: number;
  monsters: MonsterTemplate[];
  boss: MonsterTemplate;
}

export const DUNGEONS_TEMPLATE: DungeonTemplate[] = [
  {
    id: "forest_depths",
    name: "Profondeurs des Forêts",
    levelRequirement: 5,
    size: 2,
    monsters: [
      {
        id: "forest_wolf",
        name: "Loup des Forêts",
        type: "beast",
        icon: "🐺",
        minLevel: 5,
        maxLevel: 10,
        baseHealth: 50,
        baseDamage: 1000,
        baseArmor: 10,
        experienceReward: 200,
        goldReward: 1000,
        abilities: [
          {
            name: "Morsure Sauvage",
            icon: "🦷",
            damage: 1200,
            cooldown: 3,
            description: "Une morsure féroce infligeant des dégâts importants.",
          },
        ],
      },
    ],
    boss: {
      id: "forest_troll",
      name: "Troll des Forêts",
      type: "humanoid",
      icon: "👹",
      minLevel: 8,
      maxLevel: 12,
      baseHealth: 150,
      baseDamage: 2500,
      baseArmor: 20,
      experienceReward: 800,
      goldReward: 4000,
      abilities: [
        {
          name: "Coup de Massue",
          icon: "🔨",
          damage: 3000,
          cooldown: 5,
          description:
            "Un coup puissant avec une massue qui inflige de lourds dégâts.",
        },
        {
          name: "Rugissement Intimidant",
          icon: "🗣️",
          damage: 0,
          cooldown: 6,
          description:
            "Un rugissement terrifiant qui réduit la défense des ennemis.",
        },
      ],
    },
  },
  {
    id: "undeads_lair",
    name: "Undead's Lair",
    levelRequirement: 10,
    size: 5,
    monsters: [
      {
        id: "skeleton",
        name: "Squelette",
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
        name: "Goule",
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
    ],
    boss: {
      id: "undead_king",
      name: "Roi des Morts-Vivants",
      type: "undead",
      icon: "👑",
      minLevel: 15,
      maxLevel: 20,
      baseHealth: 200,
      baseDamage: 3000,
      baseArmor: 25,
      experienceReward: 1000,
      goldReward: 5000,
      abilities: [
        {
          name: "Cri de Guerre",
          icon: "📢",
          damage: 3500,
          cooldown: 6,
          description: "Cri terrifiant qui inflige des dégâts majeurs",
        },
        {
          name: "Lame Spectrale",
          icon: "👻",
          damage: 4000,
          cooldown: 7,
          description: "Frappe spectrale qui ignore l'armure",
        },
      ],
    },
  },
];

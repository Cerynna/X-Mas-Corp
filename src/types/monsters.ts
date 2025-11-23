// Types et données des monstres/ennemis du jeu

export type MonsterType = 
  | 'beast'      // Bêtes (loups, sangliers)
  | 'humanoid'   // Humanoïdes (murlocs, bandits)
  | 'undead'     // Morts-vivants
  | 'elemental'  // Élémentaires
  | 'demon'      // Démons
  | 'dragon'     // Dragons
  | 'giant';     // Géants

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
    id: 'wolf',
    name: 'Loup',
    type: 'beast',
    icon: '🐺',
    minLevel: 1,
    maxLevel: 5,
    baseHealth: 100,
    baseDamage: 12,
    baseArmor: 5,
    experienceReward: 25,
    goldReward: 5,
    abilities: [
      {
        name: 'Morsure',
        icon: '🦷',
        damage: 15,
        cooldown: 2,
        description: 'Mord férocement la cible',
      },
    ],
  },
  {
    id: 'boar',
    name: 'Sanglier',
    type: 'beast',
    icon: '🐗',
    minLevel: 1,
    maxLevel: 5,
    baseHealth: 120,
    baseDamage: 10,
    baseArmor: 8,
    experienceReward: 30,
    goldReward: 6,
    abilities: [
      {
        name: 'Charge',
        icon: '💨',
        damage: 12,
        cooldown: 3,
        description: 'Charge brutalement',
      },
    ],
  },
  
  // Niveau 5-10: Humanoïdes
  {
    id: 'murloc',
    name: 'Murloc',
    type: 'humanoid',
    icon: '🐸',
    minLevel: 5,
    maxLevel: 10,
    baseHealth: 110,
    baseDamage: 14,
    baseArmor: 10,
    experienceReward: 50,
    goldReward: 10,
    abilities: [
      {
        name: 'Cri Murloc',
        icon: '📢',
        damage: 20,
        cooldown: 4,
        description: 'MRGLGLGL!',
      },
    ],
  },
  {
    id: 'bandit',
    name: 'Bandit',
    type: 'humanoid',
    icon: '🗡️',
    minLevel: 6,
    maxLevel: 12,
    baseHealth: 130,
    baseDamage: 16,
    baseArmor: 12,
    experienceReward: 60,
    goldReward: 15,
    abilities: [
      {
        name: 'Coup Sournois',
        icon: '🔪',
        damage: 25,
        cooldown: 3,
        description: 'Frappe dans le dos',
      },
    ],
  },

  // Niveau 10-15: Morts-vivants
  {
    id: 'skeleton',
    name: 'Squelette',
    type: 'undead',
    icon: '💀',
    minLevel: 10,
    maxLevel: 15,
    baseHealth: 150,
    baseDamage: 20,
    baseArmor: 15,
    experienceReward: 480,
    goldReward: 20,
    abilities: [
      {
        name: 'Toucher de Givre',
        icon: '❄️',
        damage: 30,
        cooldown: 4,
        description: 'Toucher glacial qui ralentit',
      },
    ],
  },
  {
    id: 'ghoul',
    name: 'Goule',
    type: 'undead',
    icon: '🧟',
    minLevel: 12,
    maxLevel: 18,
    baseHealth: 180,
    baseDamage: 22,
    baseArmor: 18,
    experienceReward: 500,
    goldReward: 25,
    abilities: [
      {
        name: 'Festin de Chair',
        icon: '🩸',
        damage: 35,
        heal: 20,
        cooldown: 5,
        description: 'Dévore et se soigne',
      },
    ],
  },

  // Niveau 15-20: Élémentaires
  {
    id: 'fire-elemental',
    name: 'Élémentaire de Feu',
    type: 'elemental',
    icon: '🔥',
    minLevel: 15,
    maxLevel: 22,
    baseHealth: 180,
    baseDamage: 25,
    baseArmor: 18,
    experienceReward: 2000,
    goldReward: 35,
    abilities: [
      {
        name: 'Boule de Feu',
        icon: '💥',
        damage: 45,
        cooldown: 3,
        description: 'Lance une boule de feu',
      },
    ],
  },
  {
    id: 'ice-elemental',
    name: 'Élémentaire de Glace',
    type: 'elemental',
    icon: '❄️',
    minLevel: 16,
    maxLevel: 23,
    baseHealth: 200,
    baseDamage: 22,
    baseArmor: 20,
    experienceReward: 2200,
    goldReward: 40,
    abilities: [
      {
        name: 'Tempête de Glace',
        icon: '🌨️',
        damage: 40,
        cooldown: 4,
        description: 'Congèle les ennemis',
      },
    ],
  },

  // Niveau 20-25: Démons
  {
    id: 'imp',
    name: 'Diablotin',
    type: 'demon',
    icon: '👿',
    minLevel: 20,
    maxLevel: 25,
    baseHealth: 220,
    baseDamage: 30,
    baseArmor: 22,
    experienceReward: 8000,
    goldReward: 50,
    abilities: [
      {
        name: 'Trait de Feu',
        icon: '🔥',
        damage: 50,
        cooldown: 3,
        description: 'Tire un trait de feu',
      },
    ],
  },
  {
    id: 'felguard',
    name: 'Gangregarde',
    type: 'demon',
    icon: '😈',
    minLevel: 23,
    maxLevel: 28,
    baseHealth: 280,
    baseDamage: 35,
    baseArmor: 28,
    experienceReward: 9000,
    goldReward: 60,
    abilities: [
      {
        name: 'Coup Gangreneux',
        icon: '💚',
        damage: 60,
        cooldown: 4,
        description: 'Frappe corrompue',
      },
    ],
  },

  // Niveau 25-30: Géants
  {
    id: 'giant',
    name: 'Géant de Pierre',
    type: 'giant',
    icon: '🗿',
    minLevel: 25,
    maxLevel: 32,
    baseHealth: 350,
    baseDamage: 40,
    baseArmor: 35,
    experienceReward: 800,
    goldReward: 75,
    abilities: [
      {
        name: 'Écrasement',
        icon: '🪨',
        damage: 70,
        cooldown: 4,
        description: 'Écrase avec une force titanesque',
      },
    ],
  },

  // Niveau 30+: Dragons (Boss)
  {
    id: 'whelp',
    name: 'Dragonnet',
    type: 'dragon',
    icon: '🐉',
    minLevel: 30,
    maxLevel: 35,
    baseHealth: 400,
    baseDamage: 45,
    baseArmor: 40,
    experienceReward: 820,
    goldReward: 100,
    abilities: [
      {
        name: 'Souffle de Flammes',
        icon: '🔥',
        damage: 80,
        cooldown: 4,
        description: 'Souffle enflammé dévastateur',
      },
    ],
  },
  {
    id: 'dragon',
    name: 'Dragon',
    type: 'dragon',
    icon: '🐲',
    minLevel: 35,
    maxLevel: 45,
    baseHealth: 600,
    baseDamage: 55,
    baseArmor: 50,
    experienceReward: 1200,
    goldReward: 150,
    abilities: [
      {
        name: 'Souffle de Dragon',
        icon: '💨',
        damage: 100,
        cooldown: 3,
        description: 'Souffle destructeur',
      },
      {
        name: 'Rugissement',
        icon: '😤',
        damage: 50,
        cooldown: 5,
        description: 'Rugissement terrifiant',
      },
    ],
  },
  {
    id: 'ancient-dragon',
    name: 'Dragon Ancien',
    type: 'dragon',
    icon: '🐲',
    minLevel: 45,
    maxLevel: 60,
    baseHealth: 1000,
    baseDamage: 70,
    baseArmor: 60,
    experienceReward: 2500,
    goldReward: 250,
    abilities: [
      {
        name: 'Cataclysme',
        icon: '💥',
        damage: 150,
        cooldown: 5,
        description: 'Déchaîne un cataclysme',
      },
      {
        name: 'Souffle Ancestral',
        icon: '🌪️',
        damage: 120,
        cooldown: 4,
        description: 'Souffle millénaire',
      },
    ],
  },
];

// Générer un monstre basé sur le niveau du joueur
export const generateMonster = (playerLevel: number): Monster => {
  // Filtrer les monstres appropriés pour le niveau
  const availableTemplates = MONSTER_TEMPLATES.filter(
    (template) => template.minLevel <= playerLevel && template.maxLevel >= playerLevel
  );

  // Si aucun template exact, prendre le template avec le maxLevel le plus proche en dessous
  if (availableTemplates.length === 0) {
    const closest = MONSTER_TEMPLATES.reduce((prev, curr) => {
      return curr.maxLevel < playerLevel && curr.maxLevel > prev.maxLevel ? curr : prev;
    }, MONSTER_TEMPLATES[0]);
    return createMonsterFromTemplate(closest, playerLevel);
  }

  // Prendre le template dont le maxLevel est le plus proche du niveau demandé
  const template = availableTemplates.reduce((prev, curr) => {
    return Math.abs(curr.maxLevel - playerLevel) < Math.abs(prev.maxLevel - playerLevel) ? curr : prev;
  }, availableTemplates[0]);
  return createMonsterFromTemplate(template, playerLevel);
};

// Créer une instance de monstre depuis un template
const createMonsterFromTemplate = (template: MonsterTemplate, level: number): Monster => {
  // Calculer les stats basées sur le niveau avec une progression équilibrée
  // Progression modérée qui augmente avec le niveau
  const levelMultiplier = 1 + (level - 1) * 0.35; // +35% par niveau (linéaire)
  
  return {
    id: `${template.id}-${Date.now()}`,
    name: `${template.name} (Niv. ${level})`,
    type: template.type,
    icon: template.icon,
    level,
    health: Math.floor(template.baseHealth * levelMultiplier),
    maxHealth: Math.floor(template.baseHealth * levelMultiplier),
    damage: Math.floor(template.baseDamage * levelMultiplier),
    armor: Math.floor(template.baseArmor * levelMultiplier),
    experienceReward: Math.floor(template.experienceReward * levelMultiplier),
    goldReward: Math.floor(template.goldReward * levelMultiplier),
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
export const getAvailableMonstersForLevel = (level: number): MonsterTemplate[] => {
  return MONSTER_TEMPLATES.filter(
    (template) => template.minLevel <= level && template.maxLevel >= level
  );
};

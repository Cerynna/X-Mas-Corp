// Système de capacités par classe

import { getSpellIconUrl } from '../data/spellIcons';

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
  | 'warrior'
  | 'paladin'
  | 'hunter'
  | 'rogue'
  | 'priest'
  | 'shaman'
  | 'mage'
  | 'warlock'
  | 'druid'
  | 'death-knight';

// Capacités par classe
export const CLASS_ABILITIES: Record<WowClass, ClassAbility[]> = {
  warrior: [
    {
      id: 'heroic-strike',
      name: 'Frappe héroïque',
      icon: '⚔️',
      description: 'Une attaque puissante qui inflige 200% des dégâts.',
      baseDamage: 2.0,
      baseManaCost: 10,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'mortal-strike',
      name: 'Frappe mortelle',
      icon: '💥',
      description: 'Frappe dévastatrice infligeant 280% des dégâts.',
      baseDamage: 2.8,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: 'whirlwind',
      name: 'Tourbillon',
      icon: '🌪️',
      description: 'Attaque tournoyante massive (320% dégâts).',
      baseDamage: 3.2,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: 'recklessness',
      name: 'Témérité',
      icon: '😤',
      description: 'Frappe avec témérité (400% dégâts).',
      baseDamage: 4.0,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: 'execute',
      name: 'Exécution',
      icon: '☠️',
      description: 'Coup final dévastateur (500% dégâts).',
      baseDamage: 5.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 30,
    },
  ],

  paladin: [
    {
      id: 'crusader-strike',
      name: 'Frappe du croisé',
      icon: '⚡',
      description: 'Frappe sacrée (200% dégâts).',
      baseDamage: 2.0,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'holy-light',
      name: 'Lumière sacrée',
      icon: '✨',
      description: 'Soigne pour 150% du spellPower.',
      baseHeal: 1.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 3,
    },
    {
      id: 'divine-storm',
      name: 'Tempête divine',
      icon: '🌟',
      description: 'Tempête sacrée (280% dégâts).',
      baseDamage: 2.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: 'hammer-of-wrath',
      name: 'Marteau de courroux',
      icon: '🔨',
      description: 'Marteau divin (350% dégâts).',
      baseDamage: 3.5,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: 'divine-shield',
      name: 'Bouclier divin',
      icon: '🛡️',
      description: 'Frappe protectrice (300% dégâts + soin 50%).',
      baseDamage: 3.0,
      baseHeal: 0.5,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 30,
    },
  ],

  hunter: [
    {
      id: 'arcane-shot',
      name: 'Tir des arcanes',
      icon: '🏹',
      description: 'Tir magique (220% dégâts).',
      baseDamage: 2.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'multi-shot',
      name: 'Tir multiple',
      icon: '🎯',
      description: 'Salve de flèches (280% dégâts).',
      baseDamage: 2.8,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: 'aimed-shot',
      name: 'Tir visé',
      icon: '🎪',
      description: 'Tir précis et puissant (450% dégâts).',
      baseDamage: 4.5,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: 'explosive-shot',
      name: 'Tir explosif',
      icon: '💣',
      description: 'Flèche explosive (500% dégâts).',
      baseDamage: 5.0,
      baseManaCost: 45,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: 'kill-shot',
      name: 'Tir mortel',
      icon: '💀',
      description: 'Tir fatal (750% dégâts).',
      baseDamage: 7.5,
      baseManaCost: 60,
      manaCostPerLevel: 7,
      unlockLevel: 35,
    },
  ],

  rogue: [
    {
      id: 'sinister-strike',
      name: 'Attaque sournoise',
      icon: '🗡️',
      description: 'Frappe vicieuse (210% dégâts).',
      baseDamage: 2.1,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'backstab',
      name: 'Coup de poignard',
      icon: '🔪',
      description: 'Attaque dans le dos (300% dégâts).',
      baseDamage: 3.0,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: 'eviscerate',
      name: 'Éviscération',
      icon: '⚔️',
      description: 'Frappe mortelle (380% dégâts).',
      baseDamage: 3.8,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: 'kidney-shot',
      name: 'Coup bas',
      icon: '💫',
      description: 'Coup assommant (450% dégâts).',
      baseDamage: 4.5,
      baseManaCost: 45,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: 'shadow-dance',
      name: 'Danse de l\'ombre',
      icon: '🌑',
      description: 'Attaque des ombres (600% dégâts).',
      baseDamage: 6.0,
      baseManaCost: 60,
      manaCostPerLevel: 7,
      unlockLevel: 35,
    },
  ],

  priest: [
    {
      id: 'smite',
      name: 'Châtiment',
      icon: '✨',
      description: 'Frappe sacrée (200% dégâts magiques).',
      baseDamage: 2.0,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'heal',
      name: 'Soins',
      icon: '💚',
      description: 'Soigne pour 200% du spellPower.',
      baseHeal: 2.0,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 1,
    },
    {
      id: 'shadow-word-pain',
      name: 'Mot de l\'ombre : Douleur',
      icon: '🌑',
      description: 'Douleur de l\'ombre (280% dégâts).',
      baseDamage: 2.8,
      baseManaCost: 30,
      manaCostPerLevel: 4,
      unlockLevel: 10,
    },
    {
      id: 'mind-blast',
      name: 'Explosion mentale',
      icon: '🧠',
      description: 'Attaque mentale (350% dégâts).',
      baseDamage: 3.5,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 20,
    },
    {
      id: 'divine-hymn',
      name: 'Hymne divin',
      icon: '🎵',
      description: 'Hymne sacré (300% dégâts + soin 100%).',
      baseDamage: 3.0,
      baseHeal: 1.0,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 30,
    },
  ],

  shaman: [
    {
      id: 'lightning-bolt',
      name: 'Éclair',
      icon: '⚡',
      description: 'Éclair foudroyant (210% dégâts).',
      baseDamage: 2.1,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'earth-shock',
      name: 'Horion de terre',
      icon: '🌍',
      description: 'Choc élémentaire (260% dégâts).',
      baseDamage: 2.6,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: 'lava-burst',
      name: 'Explosion de lave',
      icon: '🌋',
      description: 'Lave brûlante (350% dégâts).',
      baseDamage: 3.5,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: 'chain-lightning',
      name: 'Chaîne d\'éclairs',
      icon: '⛈️',
      description: 'Éclairs enchaînés (420% dégâts).',
      baseDamage: 4.2,
      baseManaCost: 45,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: 'elemental-mastery',
      name: 'Maîtrise élémentaire',
      icon: '🔥',
      description: 'Puissance des éléments (550% dégâts).',
      baseDamage: 5.5,
      baseManaCost: 60,
      manaCostPerLevel: 7,
      unlockLevel: 35,
    },
  ],

  mage: [
    {
      id: 'fireball',
      name: 'Boule de feu',
      icon: '🔥',
      description: 'Boule de feu ardente (220% dégâts).',
      baseDamage: 2.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'frostbolt',
      name: 'Éclair de givre',
      icon: '❄️',
      description: 'Givre glacial (250% dégâts).',
      baseDamage: 2.5,
      baseManaCost: 20,
      manaCostPerLevel: 3,
      unlockLevel: 3,
    },
    {
      id: 'arcane-missiles',
      name: 'Projectiles des arcanes',
      icon: '🔮',
      description: 'Salve arcanique (340% dégâts).',
      baseDamage: 3.4,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: 'pyroblast',
      name: 'Explosion pyrotechnique',
      icon: '💥',
      description: 'Explosion de feu (450% dégâts).',
      baseDamage: 4.5,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 25,
    },
    {
      id: 'arcane-power',
      name: 'Puissance des arcanes',
      icon: '✨',
      description: 'Puissance arcanique ultime (600% dégâts).',
      baseDamage: 6.0,
      baseManaCost: 70,
      manaCostPerLevel: 8,
      unlockLevel: 35,
    },
  ],

  warlock: [
    {
      id: 'shadow-bolt',
      name: 'Trait de l\'ombre',
      icon: '🌑',
      description: 'Projectile d\'ombre (210% dégâts).',
      baseDamage: 2.1,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'immolate',
      name: 'Immolation',
      icon: '🔥',
      description: 'Flammes démoniaques (270% dégâts).',
      baseDamage: 2.7,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: 'chaos-bolt',
      name: 'Trait du chaos',
      icon: '💀',
      description: 'Chaos destructeur (360% dégâts).',
      baseDamage: 3.6,
      baseManaCost: 40,
      manaCostPerLevel: 5,
      unlockLevel: 15,
    },
    {
      id: 'soul-fire',
      name: 'Feu de l\'âme',
      icon: '👻',
      description: 'Flammes spirituelles (450% dégâts).',
      baseDamage: 4.5,
      baseManaCost: 50,
      manaCostPerLevel: 6,
      unlockLevel: 25,
    },
    {
      id: 'dark-soul',
      name: 'Âme noire',
      icon: '😈',
      description: 'Puissance démoniaque (580% dégâts).',
      baseDamage: 5.8,
      baseManaCost: 65,
      manaCostPerLevel: 8,
      unlockLevel: 35,
    },
  ],

  druid: [
    {
      id: 'wrath',
      name: 'Colère',
      icon: '🌿',
      description: 'Colère de la nature (200% dégâts).',
      baseDamage: 2.0,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'moonfire',
      name: 'Eclat lunaire',
      icon: '🌙',
      description: 'Lumière lunaire (260% dégâts).',
      baseDamage: 2.6,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: 'starfire',
      name: 'Feu stellaire',
      icon: '⭐',
      description: 'Feu des étoiles (340% dégâts).',
      baseDamage: 3.4,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: 'starsurge',
      name: 'Déferlante stellaire',
      icon: '💫',
      description: 'Déferlante cosmique (430% dégâts).',
      baseDamage: 4.3,
      baseManaCost: 45,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: 'incarnation',
      name: 'Incarnation',
      icon: '🦁',
      description: 'Puissance animale (550% dégâts).',
      baseDamage: 5.5,
      baseManaCost: 60,
      manaCostPerLevel: 7,
      unlockLevel: 35,
    },
  ],

  'death-knight': [
    {
      id: 'death-strike',
      name: 'Frappe de la mort',
      icon: '💀',
      description: 'Frappe mortelle (220% dégâts).',
      baseDamage: 2.2,
      baseManaCost: 15,
      manaCostPerLevel: 2,
      unlockLevel: 1,
    },
    {
      id: 'obliterate',
      name: 'Oblitération',
      icon: '⚔️',
      description: 'Coup destructeur (290% dégâts).',
      baseDamage: 2.9,
      baseManaCost: 25,
      manaCostPerLevel: 3,
      unlockLevel: 5,
    },
    {
      id: 'frost-strike',
      name: 'Frappe de givre',
      icon: '❄️',
      description: 'Frappe glaciale (360% dégâts).',
      baseDamage: 3.6,
      baseManaCost: 35,
      manaCostPerLevel: 4,
      unlockLevel: 15,
    },
    {
      id: 'soul-reaper',
      name: 'Faucheuse d\'âme',
      icon: '👻',
      description: 'Récolte d\'âmes (440% dégâts).',
      baseDamage: 4.4,
      baseManaCost: 45,
      manaCostPerLevel: 5,
      unlockLevel: 25,
    },
    {
      id: 'apocalypse',
      name: 'Apocalypse',
      icon: '☠️',
      description: 'Fin des temps (570% dégâts).',
      baseDamage: 5.7,
      baseManaCost: 60,
      manaCostPerLevel: 7,
      unlockLevel: 35,
    },
  ],
};

// Obtenir les capacités disponibles pour une classe et un niveau
export const getAvailableAbilities = (className: WowClass, level: number): ClassAbility[] => {
  const classAbilities = CLASS_ABILITIES[className] || [];
  return classAbilities.filter(ability => ability.unlockLevel <= level);
};

// Calculer le coût en mana d'une capacité selon le niveau
export const calculateManaCost = (ability: ClassAbility, level: number): number => {
  return ability.baseManaCost + ((ability.manaCostPerLevel || 0) * (level - 1));
};

// Calculer les dégâts d'une capacité
export const calculateAbilityDamage = (
  ability: ClassAbility, 
  attackPower: number,
  spellPower: number,
  primaryStat: 'strength' | 'agility' | 'intellect'
): number => {
  if (!ability.baseDamage) return 0;
  
  // Utiliser attackPower pour les classes physiques, spellPower pour les casters
  const basePower = primaryStat === 'intellect' ? spellPower : attackPower;
  return Math.floor(basePower * ability.baseDamage);
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

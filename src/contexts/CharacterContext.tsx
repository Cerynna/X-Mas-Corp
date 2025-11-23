import { createContext, useEffect, useState, useCallback } from 'react';
import type { User } from 'firebase/auth';
import { useAuth } from './useAuth';
import type { Character } from '../firebase/database';
import type { WowClass, WowRace, Faction } from '../types/character';
import {
  getCharactersByUser,
  createCharacter,
  updateDocument,
  collections,
  onDocumentChange,
} from '../firebase/database';
import { calculateBaseStats, CLASSES } from '../types/character';

interface CharacterContextType {
  character: Character | null;
  loading: boolean;
  hasCharacter: boolean;
  createNewCharacter: (data: {
    name: string;
    faction: Faction;
    race: WowRace;
    class: WowClass;
  }) => Promise<void>;
  updateCharacter: (data: Character) => Promise<void>;
  refreshCharacter: () => Promise<void>;
}

export const CharacterContext = createContext<CharacterContextType>({
  character: null,
  loading: true,
  hasCharacter: false,
  createNewCharacter: async () => { },
  updateCharacter: async () => { },
  refreshCharacter: async () => { },
});

interface CharacterProviderProps {
  children: React.ReactNode;
}

export const CharacterProvider = ({ children }: CharacterProviderProps) => {
  const { user } = useAuth();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  // Charger le personnage de l'utilisateur
  const loadCharacter = useCallback(async (currentUser: User) => {
    try {
      setLoading(true);
      const characters = await getCharactersByUser(currentUser.uid);

      if (characters.length > 0) {
        setCharacter(characters[0]); // Premier personnage (on pourra gérer plusieurs personnages plus tard)
      } else {
        setCharacter(null);
      }
    } catch (error) {
      console.error('Erreur lors du chargement du personnage:', error);
      setCharacter(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Créer un nouveau personnage
  const createNewCharacter = useCallback(async (data: {
    name: string;
    faction: Faction;
    race: WowRace;
    class: WowClass;
  }) => {
    if (!user) {
      throw new Error('Utilisateur non connecté');
    }

    try {
      setLoading(true);

      // Calculer les stats de base
      const baseStats = calculateBaseStats(data.class, data.race);
      const classInfo = CLASSES[data.class];

      // Créer le personnage avec toutes les stats
      const characterData: Omit<Character, 'id' | 'createdAt' | 'updatedAt'> = {
        userId: user.uid,
        name: data.name,
        faction: data.faction,
        race: data.race,
        class: data.class,
        level: 1,
        experience: 0,
        experienceToNextLevel: 100,

        // Stats de combat
        health: baseStats.health,
        maxHealth: baseStats.health,
        mana: baseStats.energy,
        maxMana: baseStats.energy,

        // Attributs
        strength: baseStats.strength,
        agility: baseStats.agility,
        intellect: baseStats.intellect,
        stamina: baseStats.stamina,

        // Stats dérivées (équilibrées pour un combat progressif)
        attackPower: 0,
        spellPower: 0,
        armor: baseStats.agility + baseStats.stamina,
        critChance: 5 + (baseStats.agility * 0.1),

        // Progression
        achievements: [],
        gold: 0,
        defeatedMonsters: 0,
        totalDamageDealt: 0,

        // Inventaire initial vide
        inventory: {
          potions: [],
        },

        // Équipement initial vide (pas de champs undefined pour Firebase)
        equipment: {},

        // Sac initial vide
        bagItems: [],

        chatChannel: [],
      };

      switch (classInfo.primaryStat) {
        case 'strength':
          characterData.attackPower = 5 + Math.floor(characterData.strength * 0.5);
          break;
        case 'agility':
          characterData.attackPower = 5 + Math.floor(characterData.agility * 0.5);
          characterData.critChance += characterData.agility * 0.05;
          break;
        case 'intellect':
          characterData.spellPower = 5 + Math.floor(characterData.intellect * 0.5);
          break;
        default:
          break;
      }

      // if (classInfo.primaryStat) {

      // }

      await createCharacter(characterData);

      // Recharger le personnage
      await loadCharacter(user);
    } catch (error) {
      console.error('Erreur lors de la création du personnage:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [user, loadCharacter]);

  // Mettre à jour le personnage
  const updateCharacter = useCallback(async (data: Character) => {
    console.log('Mise à jour du personnage avec les données:', data);
    if (!character?.id) {
      throw new Error('Aucun personnage à mettre à jour');
    }



    try {
      const classInfo = CLASSES[data.class || character.class];
      const baseStats = calculateBaseStats(data.class ?? character.class, data.race ?? character.race);

      const updatedStats = {
        strength: (baseStats.strength * data.level * 5) + (data.equipment ? Object.values(data.equipment).reduce((total, item) => {
          return total + (item.stats?.strength || 0);
        }, 0) : 0),
        agility: (baseStats.agility * data.level * 5) + (data.equipment ? Object.values(data.equipment).reduce((total, item) => {
          return total + (item.stats?.agility || 0);
        }, 0) : 0),
        intellect: (baseStats.intellect * data.level * 5) + (data.equipment ? Object.values(data.equipment).reduce((total, item) => {
          return total + (item.stats?.intellect || 0);
        }, 0) : 0),
        stamina: (baseStats.stamina * data.level * 5) + (data.equipment ? Object.values(data.equipment).reduce((total, item) => {
          return total + (item.stats?.stamina || 0);
        }, 0) : 0),
      }
      switch (classInfo.primaryStat) {
        case 'strength':
          console.log('Calcul de la nouvelle puissance d\'attaque avec la force:', updatedStats.strength);
          data.attackPower = Math.floor(updatedStats.strength * 1.2);
          break;
        case 'agility':
          data.attackPower = Math.floor(updatedStats.agility * 1.2);
          data.critChance = updatedStats.agility * .05;
          break;
        case 'intellect':
          data.spellPower = Math.floor(updatedStats.intellect * 1.2);
          break;
        default:
          break;
      }


      await updateDocument(collections.characters, data.id ?? character.id, {
        ...character,
        ...data,
      });

      // Mettre à jour l'état local
      setCharacter(prev => prev ? { ...prev, ...data } : null);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du personnage:', error);
      throw error;
    }
  }, [character]);

  // Rafraîchir le personnage
  const refreshCharacter = useCallback(async () => {
    if (user) {
      await loadCharacter(user);
    }
  }, [user, loadCharacter]);

  // Charger le personnage au montage et à chaque changement d'utilisateur
  useEffect(() => {
    if (user) {
      loadCharacter(user);
    } else {
      setCharacter(null);
      setLoading(false);
    }
  }, [user, loadCharacter]);

  // Écouter les changements en temps réel du personnage
  useEffect(() => {
    if (!character?.id) return;

    const unsubscribe = onDocumentChange(
      collections.characters,
      character.id,
      (data) => {
        if (data) {
          setCharacter(data as Character);
        }
      }
    );

    return () => unsubscribe();
  }, [character?.id]);

  const value: CharacterContextType = {
    character,
    loading,
    hasCharacter: character !== null,
    createNewCharacter,
    updateCharacter,
    refreshCharacter,
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

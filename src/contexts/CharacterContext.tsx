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
// import { calculateBaseStats, CLASSES } from '../types/character';
import { playerStatsCalculator } from '../utils/player';

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

// eslint-disable-next-line react-refresh/only-export-components
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

      const characterData: Character = {
        userId: user.uid,
        name: data.name,
        faction: data.faction,
        race: data.race,
        class: data.class,
        level: 1,
        experience: 0,
        experienceToNextLevel: Math.floor(100 * Math.pow(1.5, (1) - 1)),

        // Stats de combat linéaires
        health: 0,
        maxHealth: 0,
        mana: 0,
        maxMana: 0,

        // Attributs
        strength: 0,
        agility: 0,
        intellect: 0,
        stamina: 0,

        // Stats dérivées linéaires
        attackPower: 5,
        spellPower: 5,
        armor: 5,
        critChance: 5,

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

      const statsCharacter = playerStatsCalculator(characterData);

      await createCharacter({
        ...characterData,
        ...statsCharacter,
        mana: statsCharacter.maxMana,
        health: statsCharacter.maxHealth,
      });

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
    // console.log('Mise à jour du personnage avec les données:', data);
    if (!character?.id) {
      throw new Error('Aucun personnage à mettre à jour');
    }

    try {
      const statsCharacter = playerStatsCalculator(data);

      await updateDocument(collections.characters, data.id ?? character.id, {
        ...data,
        ...statsCharacter,
      });

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

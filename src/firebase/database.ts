import {
  ref,
  set,
  get,
  update,
  remove,
  push,
  query,
  orderByChild,
  equalTo,
  limitToFirst,
  onValue,
  off,
  serverTimestamp,
  child,
} from "firebase/database";
import type { DataSnapshot } from "firebase/database";
import { database } from "./config";
import type { WowClass, WowRace } from "../types/character";
import type { EquipmentItem } from "../types/equipment";
import { slugify } from "../utils";

// Collections de référence
export const collections = {
  characters: "characters",
  messages: "messages",
};

interface ChatChannel {
  slug: string;
  name: string;
}

export type BuffEffect =
  | "none"
  | "strength"
  | "agility"
  | "intellect"
  | "stamina"
  | "attackPower"
  | "spellPower"
  | "critChance"
  | "luck";

export const BuffEffectInfos = {
  strength: {
    name: "Force",
    description:
      "Augmente la force du personnage, augmentant les dégâts physiques.",
    emoji: "💪",
  },
  agility: {
    name: "Agilité",
    description:
      "Augmente l'agilité du personnage, améliorant la précision et l'esquive.",
    emoji: "🤸‍♂️",
  },
  intellect: {
    name: "Intelligence",
    description:
      "Augmente l'intelligence du personnage, améliorant les pouvoirs magiques.",
    emoji: "🧠",
  },
  stamina: {
    name: "Endurance",
    description:
      "Augmente l'endurance du personnage, augmentant la santé maximale.",
    emoji: "❤️",
  },
  attackPower: {
    name: "Puissance d'attaque",
    description:
      "Augmente la puissance d'attaque, augmentant les dégâts physiques infligés.",
    emoji: "⚔️",
  },
  spellPower: {
    name: "Puissance magique",
    description:
      "Augmente la puissance magique, augmentant les dégâts magiques infligés.",
    emoji: "✨",
  },
  critChance: {
    name: "Chance de coup critique",
    description:
      "Augmente la chance de porter des coups critiques, infligeant des dégâts supplémentaires.",
    emoji: "🎯",
  },
  luck: {
    name: "Chance de potion",
    description: "Augmente la chance d'obtenir des objets rares.",
    emoji: "🍀",
  },
} as {
  [key in BuffEffect]: {
    name: string;
    description: string;
    emoji: string;
  };
};

export interface Buffs {
  id: string;
  effect: BuffEffect;
  name: string;
  description: string;
  duration: number; // Duration in seconds
  icon: string;
  expiresAt: number; // Timestamp when the buff expires
  amount: number;
}

// Interface pour les événements
// export interface WowEvent {
//   id?: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   icon: string;
//   variant: "default" | "frost" | "fire" | "arcane";
//   reward: string;
//   startDate: number; // Timestamp en millisecondes
//   endDate: number;
//   isActive: boolean;
//   participants: number;
//   createdAt?: number;
//   updatedAt?: number;
// }

// Interface pour les personnages (RPG complet)
export interface Character {
  id?: string;
  userId: string;
  name: string;
  faction: "alliance" | "horde";
  level: number;
  experience: number;
  experienceToNextLevel: number;

  // Classe et race
  class: WowClass; // WowClass
  race: WowRace; // WowRace

  // Stats de combat
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;

  // Attributs principaux
  strength: number;
  agility: number;
  intellect: number;
  stamina: number;

  // Stats dérivées
  attackPower: number;
  spellPower: number;
  armor: number;
  critChance: number;

  // Progression
  guildId?: string;
  achievements: string[];
  gold: number;
  defeatedMonsters: number;
  totalDamageDealt: number;

  // Inventaire (potions)
  inventory?: {
    potions: Array<{ potionId: string; quantity: number }>;
  };

  // Équipement (stocke l'item complet, pas juste l'ID)
  equipment?: {
    weapon?: EquipmentItem; // EquipmentItem complet
    head?: EquipmentItem;
    chest?: EquipmentItem;
    legs?: EquipmentItem;
    boots?: EquipmentItem;
    jewelry?: EquipmentItem;
  };

  // Items dans le sac (loot)
  bagItems?: Array<{
    itemId: string;
    item: EquipmentItem; // EquipmentItem
  }>;

  chatChannel: ChatChannel[];

  buffs?: Buffs[];

  // Timestamps
  createdAt?: number;
  updatedAt?: number;
  lastBattleAt?: number;
}

// Interface pour les guildes
export interface Guild {
  id?: string;
  name: string;
  faction: "alliance" | "horde";
  leaderUserId: string;
  members: string[];
  level: number;
  description: string;
  createdAt?: number;
  updatedAt?: number;
}

// Créer un nouveau document avec un ID auto-généré
export const createDocument = async <T extends Record<string, unknown>>(
  collectionName: string,
  data: T
): Promise<string> => {
  try {
    const collectionRef = ref(database, collectionName);
    const newDocRef = push(collectionRef);

    await set(newDocRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return newDocRef.key!;
  } catch (error) {
    console.error("Erreur lors de la création du document:", error);
    throw error;
  }
};

// Créer ou mettre à jour un document avec un ID spécifique
export const setDocument = async <T extends Record<string, unknown>>(
  collectionName: string,
  documentId: string,
  data: T
): Promise<void> => {
  try {
    const docRef = ref(database, `${collectionName}/${documentId}`);
    await set(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Erreur lors de la définition du document:", error);
    throw error;
  }
};

// Lire un document par son ID
export const getDocument = async (
  collectionName: string,
  documentId: string
): Promise<unknown | null> => {
  try {
    const docRef = ref(database, `${collectionName}/${documentId}`);
    const snapshot = await get(docRef);

    if (snapshot.exists()) {
      return { id: documentId, ...snapshot.val() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la lecture du document:", error);
    throw error;
  }
};

// Lire tous les documents d'une collection
export const getDocuments = async (
  collectionName: string
): Promise<unknown[]> => {
  try {
    const collectionRef = ref(database, collectionName);
    const snapshot = await get(collectionRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la lecture des documents:", error);
    throw error;
  }
};

// Lire des documents avec une requête
export const queryDocuments = async (
  collectionName: string,
  orderBy: string,
  equalToValue?: string | number | boolean,
  limitTo?: number
): Promise<unknown[]> => {
  try {
    const collectionRef = ref(database, collectionName);
    let dbQuery = query(collectionRef, orderByChild(orderBy));

    if (equalToValue !== undefined) {
      dbQuery = query(dbQuery, equalTo(equalToValue));
    }

    if (limitTo) {
      dbQuery = query(dbQuery, limitToFirst(limitTo));
    }

    const snapshot = await get(dbQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la requête:", error);
    throw error;
  }
};

// Nettoyer les valeurs undefined d'un objet (Firebase ne les accepte pas)
const removeUndefinedValues = <T extends Record<string, unknown>>(
  obj: T
): T => {
  const cleaned: Record<string, unknown> = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (value === undefined) {
      // Skip undefined values
      return;
    }

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      // Recursively clean nested objects
      const cleanedNested = removeUndefinedValues(
        value as Record<string, unknown>
      );
      if (Object.keys(cleanedNested).length > 0) {
        cleaned[key] = cleanedNested;
      }
    } else if (Array.isArray(value)) {
      // Keep arrays as is (but could filter undefined items if needed)
      cleaned[key] = value;
    } else {
      cleaned[key] = value;
    }
  });

  return cleaned as T;
};

// Mettre à jour un document
export const updateDocument = async <T extends Record<string, unknown>>(
  collectionName: string,
  documentId: string,
  data: T
): Promise<void> => {
  try {
    const docRef = ref(database, `${collectionName}/${documentId}`);
    const cleanedData = removeUndefinedValues(data);
    await update(docRef, {
      ...cleanedData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du document:", error);
    throw error;
  }
};

// Supprimer un document
export const deleteDocument = async (
  collectionName: string,
  documentId: string
): Promise<void> => {
  try {
    const docRef = ref(database, `${collectionName}/${documentId}`);
    await remove(docRef);
  } catch (error) {
    console.error("Erreur lors de la suppression du document:", error);
    throw error;
  }
};

// Écouter les changements en temps réel sur un document
export const onDocumentChange = (
  collectionName: string,
  documentId: string,
  callback: (data: unknown | null) => void
): (() => void) => {
  const docRef = ref(database, `${collectionName}/${documentId}`);

  const unsubscribe = onValue(docRef, (snapshot) => {
    if (snapshot.exists()) {
      callback({ id: documentId, ...snapshot.val() });
    } else {
      callback(null);
    }
  });

  return () => off(docRef, "value", unsubscribe);
};

// Écouter les changements en temps réel sur une collection
export const onCollectionChange = (
  collectionName: string,
  callback: (data: unknown[]) => void
): (() => void) => {
  const collectionRef = ref(database, collectionName);

  const unsubscribe = onValue(collectionRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const documents = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      callback(documents);
    } else {
      callback([]);
    }
  });

  return () => off(collectionRef, "value", unsubscribe);
};

// Fonctions spécifiques pour le chat
export const getMessagesByChannel = async (
  channelSlug: string
): Promise<
  Array<{ who: string; message: string; channel: string; timestamp: number }>
> => {
  const allMessages = (await queryDocuments(
    collections.messages,
    "channel",
    channelSlug
  )) as Array<{
    who: string;
    message: string;
    channel: string;
    timestamp: number;
  }>;

  return allMessages
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 100)
    .reverse(); // Pour avoir les plus anciens en haut
};

export const sendMessageToChannel = async (
  who: string,
  message: string,
  channel: string
): Promise<string> => {
  return createDocument(collections.messages, {
    who,
    message,
    channel,
    timestamp: Date.now(),
  });
};

//fonctions spécifiques pour les members
export const getMembers = async (): Promise<Character[]> => {
  const allMembers = (await getDocuments(
    collections.characters
  )) as Character[];

  const uniqueMembers = allMembers.filter(
    (member, index, self) =>
      index === self.findIndex((m) => m.userId === member.userId)
  );
  return uniqueMembers;
};

const NameMPSlug = (who: Character, target: Character) => {
  const names = [who.name.toLowerCase(), target.name.toLowerCase()].sort();
  return slugify(`mp_${names.join("_")}`);
};

export const AddMpList = async (who: Character, target: Character) => {
  const slug = NameMPSlug(who, target);
  if (!who.chatChannel) who.chatChannel = [];
  if (!target.chatChannel) target.chatChannel = [];

  if (!who.chatChannel.find((c) => c.slug === slug)) {
    who.chatChannel.push({
      slug: slug,
      name: target.name,
    });
    await updateDocument(collections.characters, who.id!, {
      chatChannel: who.chatChannel,
    });
  }
  if (!target.chatChannel.find((c) => c.slug === slug)) {
    target.chatChannel.push({
      slug: slug,
      name: who.name,
    });
    await updateDocument(collections.characters, target.id!, {
      chatChannel: target.chatChannel,
    });
  }
};

export const removeMpList = async (character: Character, slug: string) => {
  const updatedChannels = character.chatChannel.filter((c) => c.slug !== slug);
  await updateDocument(collections.characters, character.id!, {
    chatChannel: updatedChannels,
  });
};

// Fonctions spécifiques pour les personnages
export const getCharactersByUser = async (
  userId: string
): Promise<Character[]> => {
  return queryDocuments(collections.characters, "userId", userId) as Promise<
    Character[]
  >;
};

export const createCharacter = async (
  characterData: Omit<Character, "id" | "createdAt" | "updatedAt">
): Promise<string> => {
  return createDocument(collections.characters, characterData);
};

// Export des utilitaires
export {
  ref,
  set,
  get,
  update,
  remove,
  push,
  query,
  orderByChild,
  equalTo,
  limitToFirst,
  onValue,
  off,
  serverTimestamp,
  child,
};

export type { DataSnapshot };

// Fonctions spécifiques pour les personnages
import type { Character } from "../../types/character";
import { queryDocuments, createDocument } from "../database";

export const getCharactersByUser = async (
  userId: string
): Promise<Character[]> => {
  return queryDocuments("characters", "userId", userId) as Promise<Character[]>;
};

export const createCharacter = async (
  characterData: Omit<Character, "id" | "createdAt" | "updatedAt">
): Promise<string> => {
  return createDocument("characters", characterData);
};

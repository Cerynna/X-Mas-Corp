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

export const collections = {
  characters: "characters",
  messages: "messages",
  shops: "shops",
};

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
export const removeUndefinedValues = <T extends Record<string, unknown>>(
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
      // Filtrer les undefined dans les tableaux, et nettoyer récursivement les objets
      cleaned[key] = value
        .filter((item) => item !== undefined)
        .map((item) =>
          item !== null && typeof item === "object" && !Array.isArray(item)
            ? removeUndefinedValues(item as Record<string, unknown>)
            : item
        );
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

// ...existing code...

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

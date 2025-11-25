import { orderBy } from "es-toolkit";
import { type ShopItem } from "../../types/equipment";
import {
  collections,
  deleteDocument,
  getDocuments,
  updateDocument,
} from "../database";
import { type Character } from "../../types/character";

export const getShopItems = async () => {
  // await updateShopItem();
  return getDocuments(collections.shops) as Promise<ShopItem[]>;
};

export const getShopItemsOrdered = async (
  key: ("name" | "slot" | "quality" | "level")[],
  order: ("asc" | "desc")[]
) => {
  // await updateShopItem();
  const items = (await getDocuments(collections.shops)) as ShopItem[];
  return orderBy(items, key, order);
};

export const buyItem = async (itemId: string, character: Character) => {
  const items = (await getDocuments(collections.shops)) as ShopItem[];
  const itemBuy = items.find((item) => item.id === itemId);
  if (!itemBuy) return;
  await deleteDocument(collections.shops, itemBuy.id!);
  const bagItems = character.bagItems || [];
  if (itemBuy) {
    bagItems.push({
      itemId: itemBuy.id!,
      item: itemBuy,
    });
  }
  await updateDocument(collections.characters, character.id!, {
    bagItems,
  });
};

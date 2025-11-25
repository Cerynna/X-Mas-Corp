import { orderBy } from "es-toolkit";
import { generateRandomItem, type EquipmentItem } from "../../types/equipment";
import {
  collections,
  createDocument,
  deleteDocument,
  getDocuments,
  updateDocument,
} from "../database";
import { randomClassInfo, type Character } from "../../types/character";

export interface ShopItem extends EquipmentItem {
  dateAdded: number;
}

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
  // await updateShopItem();
};

export const updateShopItem = async (shopItems: ShopItem[]) => {
  // const shopItems = await getShopItems();
  const now = Date.now();
  shopItems
    .map((item) => {
      if (now - item.dateAdded > 30 * 60 * 1000) {
        deleteDocument(collections.shops, item.id!);
        return false;
      }
      return item;
    })
    .filter(Boolean);
  console.log("Current shop items count:", shopItems.length);
  if (shopItems.length < 15) {
    console.log("Updating shop items...");
    // const diff = 15 - shopItems.length;
    // for (let i = 0; i < diff; i++) {
    const classInfo = randomClassInfo();
    console.log("Generating item for class:", classInfo.name);
    const randomItem = generateRandomItem(1, 1, classInfo, 1.5);
    await createDocument(collections.shops, {
      ...randomItem,
      dateAdded: Date.now(),
    });
    // }
  }
};

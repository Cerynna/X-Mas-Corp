import type { BagsItemsType } from "../types/bags";

export function cleanBagsItems(bagItems: BagsItemsType[]): BagsItemsType[] {
  // supprimer les doublons bagItem.id
  const uniqueItemsMap: Record<string, BagsItemsType> = {};
  bagItems.forEach((bagItem) => {
    uniqueItemsMap[bagItem.item.id] = {
      ...bagItem,
      item: {
        id: bagItem.item.id,
        name: bagItem.item.name,
        slot: bagItem.item.slot,
        quality: bagItem.item.quality,
        level: bagItem.item.level,
        stats: bagItem.item.stats,
        icon: bagItem.item.icon,
        price: bagItem.item.price,
      },
    };
  });
  return Object.values(uniqueItemsMap);
}

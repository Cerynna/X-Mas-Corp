import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

import { randomClassInfo } from "../../src/types/character.ts";
import { generateRandomItem, ShopItem } from "../../src/types/equipment.ts";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || "{}");

const app = initializeApp(serviceAccount);

export const database = getDatabase(app);

async function ensureShopItems(): Promise<void> {
  const shopRef = ref(database, "shops");
  const snapshot = await get(shopRef);

  const items: ShopItem[] = [];
  snapshot.forEach((childSnapshot) => {
    items.push(childSnapshot.val());
  });

  if (items.length < 15) {
    const missing = 15 - items.length;
    for (let i = 0; i < missing; i++) {
      const classInfo = randomClassInfo();
      const randomItem = generateRandomItem(1, 1, classInfo, 1.5);
      const newItemRef = ref(database, `shops/${Date.now()}_${i}`);
      await set(newItemRef, {
        ...randomItem,
        dateAdded: Date.now(),
      });
    }
    console.log(`Ajouté ${missing} items.`);
  } else {
    console.log("Déjà 15 items ou plus.");
  }
}

ensureShopItems();

console.log("ensureShopItem script executed");

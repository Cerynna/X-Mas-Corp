import admin from "firebase-admin";
import { randomClassInfo } from "../../src/types/character.ts";
import {
  generateRandomItem,
  type ShopItem,
} from "../../src/types/equipment.ts";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || "{}");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://xmas-corp-default-rtdb.europe-west1.firebasedatabase.app",
});

const MAX_SHOP_ITEMS = 12 * 4;

const db = admin.database();

async function ensureShopItems(): Promise<void> {
  const shopRef = db.ref("shops");
  const snapshot = await shopRef.once("value");

  const items: ShopItem[] = [];
  snapshot.forEach((childSnapshot) => {
    items.push(childSnapshot.val());
  });

  const now = Date.now();
  let itemCount = 0;
  for (const item of items) {
    if (item.dateAdded + 15 * 60 * 1000 <= now) {
      console.log(`Removing expired item: ${item.name}`);
      await shopRef.child(item.id!).remove();
    } else {
      itemCount++;
    }
  }

  if (itemCount < MAX_SHOP_ITEMS) {
    const missing = MAX_SHOP_ITEMS - itemCount;
    for (let i = 0; i < missing; i++) {
      const classInfo = randomClassInfo();
      const luck = Math.random() + 1;
      const randomLevel = Math.floor(Math.random() * 30) + 1;
      const qualityRoll = Math.random();
      const randomItem = generateRandomItem(
        randomLevel,
        qualityRoll,
        classInfo,
        luck
      );

      const newItemId = db.ref("shops").push().key; // Génère une clé unique
      await shopRef.child(newItemId).set({
        ...randomItem,
        id: newItemId,
        dateAdded: Date.now(),
      });
    }
    console.log(`Ajouté ${missing} items.`);
  } else {
    console.log(`Déjà ${MAX_SHOP_ITEMS} items ou plus.`);
  }
}

ensureShopItems();

console.log("ensureShopItem script executed");

setTimeout(() => {
  process.exit(0);
}, 1000 * 10);

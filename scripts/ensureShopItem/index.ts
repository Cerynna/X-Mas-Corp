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
    if (now - item.dateAdded > 30 * 60 * 1000) {
      await shopRef.child(item.id!).remove();
    } else {
      itemCount++;
    }
  }

  if (itemCount < 15) {
    const missing = 15 - itemCount;
    for (let i = 0; i < missing; i++) {
      const classInfo = randomClassInfo();
      const randomItem = generateRandomItem(1, 1, classInfo, 1.5);
      await shopRef.push({
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

setTimeout(() => {
  process.exit(0);
}, 1000 * 10);

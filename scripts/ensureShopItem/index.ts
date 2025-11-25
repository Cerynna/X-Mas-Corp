// ensureShopItem.ts
// Script to ensure a shop item exists in the database
// ...existing code from ensureShopItem.js will be migrated here...

// Example import (update as needed):
import admin from "firebase-admin";
import fs from "fs";
import { randomClassInfo } from "../../src/types/character";
import { generateRandomItem } from "../../src/types/equipment";


const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

async function ensureShopItems(): Promise<void> {
  const shopRef = db.collection("shops");
  const snapshot = await shopRef.get();
  const items = snapshot.docs.map((doc) => doc.data());

  if (items.length < 15) {
    const missing = 15 - items.length;
    for (let i = 0; i < missing; i++) {
      const classInfo = randomClassInfo();
      const randomItem = generateRandomItem(1, 1, classInfo, 1.5);
      await shopRef.add({
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

console.log('ensureShopItem script executed');

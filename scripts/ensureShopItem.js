const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // à ajouter plus tard

const randomClassInfo = require("../src/types/character").randomClassInfo;
const generateRandomItem = require("../src/types/equipment").generateRandomItem;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

async function ensureShopItems() {
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

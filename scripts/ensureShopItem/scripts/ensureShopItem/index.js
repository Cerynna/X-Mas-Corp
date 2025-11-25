"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const character_1 = require("../../src/types/character");
const equipment_1 = require("../../src/types/equipment");
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || "");
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
});
const db = firebase_admin_1.default.firestore();
async function ensureShopItems() {
    const shopRef = db.collection("shops");
    const snapshot = await shopRef.get();
    const items = snapshot.docs.map((doc) => doc.data());
    if (items.length < 15) {
        const missing = 15 - items.length;
        for (let i = 0; i < missing; i++) {
            const classInfo = (0, character_1.randomClassInfo)();
            const randomItem = (0, equipment_1.generateRandomItem)(1, 1, classInfo, 1.5);
            await shopRef.add({
                ...randomItem,
                dateAdded: Date.now(),
            });
        }
        console.log(`Ajouté ${missing} items.`);
    }
    else {
        console.log("Déjà 15 items ou plus.");
    }
}
ensureShopItems();
console.log('ensureShopItem script executed');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomUUID = randomUUID;
// Génère un UUID v4 compatible navigateur
function randomUUID() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    // Fallback si crypto.randomUUID n'est pas dispo
    const hex = [...crypto.getRandomValues(new Uint8Array(16))].map(b => b.toString(16).padStart(2, "0"));
    // Format UUID v4: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    hex[6] = (parseInt(hex[6], 16) & 0x0f | 0x40).toString(16); // version 4
    hex[8] = (parseInt(hex[8], 16) & 0x3f | 0x80).toString(16); // variant
    return `${hex.slice(0, 4).join("")}${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10, 12).join("")}-${hex.slice(12, 16).join("")}`;
}

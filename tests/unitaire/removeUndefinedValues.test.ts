

import { describe, it, expect } from "vitest";
import { removeUndefinedValues } from "../../src/firebase/database";

describe("removeUndefinedValues", () => {
	it("nettoie un objet Character avec des undefined", () => {
		const character = {
			id: undefined,
			userId: "user123",
			name: "Thrall",
			faction: "horde",
			level: 10,
			experience: 500,
			experienceToNextLevel: 1000,
			class: "shaman",
			race: "orc",
			health: 100,
			maxHealth: 100,
			mana: 80,
			maxMana: 80,
			strength: 15,
			agility: 12,
			intellect: 20,
			stamina: 18,
			attackPower: 30,
			spellPower: 40,
			armor: 25,
			critChance: 5,
			guildId: undefined,
			achievements: ["first-blood", undefined, "dragon-slayer"],
			gold: 100,
			defeatedMonsters: 3,
			totalDamageDealt: 200,
			inventory: {
				potions: [
					{ potionId: "p1", quantity: 2 },
					undefined,
					{ potionId: "p2", quantity: 1 }
				]
			},
			equipment: {
				weapon: undefined,
				head: { id: "h1", name: "Casque", slot: "head", quality: "rare", level: 10, stats: { armor: 5 }, icon: "icon.png", price: 50, dropRate: 0.1 },
				chest: undefined
			},
			bagItems: [undefined],
			chatChannel: [],
			buffs: undefined,
			createdAt: undefined,
			updatedAt: undefined,
			lastBattleAt: undefined
		};

			const cleaned = removeUndefinedValues(character);
			// Vérification du premier niveau
			expect(cleaned).not.toHaveProperty("id");
			expect(cleaned).not.toHaveProperty("guildId");
			expect(cleaned).not.toHaveProperty("buffs");
			expect(cleaned).not.toHaveProperty("createdAt");
			expect(cleaned).not.toHaveProperty("updatedAt");
			expect(cleaned).not.toHaveProperty("lastBattleAt");

			// Vérification des niveaux imbriqués
			expect(cleaned.inventory).toBeDefined();
			expect(cleaned.inventory.potions).toBeDefined();
			expect(Array.isArray(cleaned.inventory.potions)).toBe(true);
			// Le tableau potions ne doit plus contenir de undefined
			expect(cleaned.inventory.potions).toEqual([
				{ potionId: "p1", quantity: 2 },
				{ potionId: "p2", quantity: 1 }
			]);

			// Vérification de equipment imbriqué
			expect(cleaned.equipment).toBeDefined();
			expect(cleaned.equipment.head).toEqual({ id: "h1", name: "Casque", slot: "head", quality: "rare", level: 10, stats: { armor: 5 }, icon: "icon.png", price: 50, dropRate: 0.1 });
			expect(cleaned.equipment).not.toHaveProperty("weapon");
			expect(cleaned.equipment).not.toHaveProperty("chest");

			// Vérification du tableau achievements
			expect(cleaned.achievements).toEqual(["first-blood", "dragon-slayer"]);

			// Vérification du tableau bagItems
			expect(cleaned.bagItems).toEqual([]);
	});
});


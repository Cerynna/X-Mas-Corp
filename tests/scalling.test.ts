import { describe, it, expect } from "vitest";
import { generateMonster } from "../src/types/monsters";
import { expForLevel, playerStatsCalculator } from "../src/utils/player";
import { ZONES } from "../src/types/zone";
import { calculateQuality } from "../src/types/equipment";

describe("Scaling", () => {
  it("Scaling EXP - Monstre Experience Reward = expForLevel(level) / (4 + level / 10)", () => {
    const levels = [1, 10, 20, 30, 40, 50, 55, 60];
    levels.forEach((level) => {
      const monster = generateMonster(level, ZONES[0]);
      const expCurrentLevel = expForLevel(level);
      console.log(
        `Level ${level} - Monster EXP Reward: ${
          monster.experienceReward
        }, Expected: ${Math.floor(
          expCurrentLevel / (4 + monster.level / 10)
        )}, Gold: ${monster.goldReward}`
      );
      expect(monster.experienceReward).toBe(
        Math.floor(expCurrentLevel / (4 + monster.level / 10))
      );
    });
  });
  it("Scaling Health and Mana - Monstre Health = 50 * level ^ 1.5", () => {
    const levels = Array.from({ length: 10 }, (_, i) => i + 1);
    levels.forEach((level) => {
      const monster = generateMonster(level, ZONES[0]);
      const playerStats = playerStatsCalculator({
        class: "warrior",
        race: "human",
        level: level,
        equipment: {},
      });
      console.log(
        `Level ${level} - Monster Health: ${
          monster.health
        }, Player Max Health: ${playerStats.maxHealth}, testMDG: ${
          playerStats.maxHealth / 10
        }`
      );
    });
  });

  it("test calculateQuality", () => {
    const levels = [1, 10, 20, 30, 40, 50, 55, 60];
    levels.forEach((level) => {
      const qualityRolls = [0.1, 0.4, 0.6, 0.8, 0.95, 0.99];
      qualityRolls.forEach((qualityRoll) => {
        const quality = calculateQuality(level, qualityRoll);
        console.log(
          `Level ${level} - Quality Roll: ${qualityRoll} => Quality: ${quality}`
        );
      });
      console.log("----");
    });
  });
});

import type { Character } from "../firebase";

export const CalculateLeaderBoard = (members: Character[] | null, indexOrder: 'score' | 'level') => {
  if (!members) return [];
  return members
    .map((member) => {
      let score = 0;
      score += member.level * 10;
      score += member.gold / 100000;
      score += member.achievements ? member.achievements.length * 5 : 0;
      score += member.defeatedMonsters ? member.defeatedMonsters / 100 : 0;
      member.score = Math.floor(score);
      return member;
    })
    .sort((a, b) => (b[indexOrder] || 0) - (a[indexOrder] || 0));
};

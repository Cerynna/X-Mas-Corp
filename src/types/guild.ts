export interface Guild {
  id?: string;
  name: string;
  faction: "alliance" | "horde";
  leaderUserId: string;
  members: string[];
  level: number;
  description: string;
  createdAt?: number;
  updatedAt?: number;
}

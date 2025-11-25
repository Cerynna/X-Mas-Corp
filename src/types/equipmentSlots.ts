export type EquipementSlot =
  | "weapon"
  | "head"
  | "chest"
  | "legs"
  | "boots"
  | "jewelry"
  | "stamina";

import type { EquipmentItem } from "./equipment";

export interface EquipementsType {
  weapon?: EquipmentItem;
  head?: EquipmentItem;
  chest?: EquipmentItem;
  legs?: EquipmentItem;
  boots?: EquipmentItem;
  jewelry?: EquipmentItem;
}

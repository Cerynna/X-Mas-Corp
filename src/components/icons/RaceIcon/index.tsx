import React from "react";

import { HumanMaleIcon } from "./HumanMale";
import { HumanFemaleIcon } from "./HumanFemale";
import { DwarfMaleIcon } from "./DwarfMale";
import { DwarfFemaleIcon } from "./DwarfFemale";
import { NightElfMaleIcon } from "./NightElfMale";
import { NightElfFemaleIcon } from "./NightElfFemale";
import { GnomeMaleIcon } from "./GnomeMale";
import { GnomeFemaleIcon } from "./GnomeFemale";
import { DraeneiMaleIcon } from "./DraeneiMale";
import { DraeneiFemaleIcon } from "./DraeneiFemale";
import { WorgenMaleIcon } from "./WorgenMale";
import { WorgenFemaleIcon } from "./WorgenFemale";
import { PandarenMaleIcon } from "./PandarenMale";
import { PandarenFemaleIcon } from "./PandarenFemale";
import { OrcMaleIcon } from "./OrcMale";
import { OrcFemaleIcon } from "./OrcFemale";
import { UndeadMaleIcon } from "./UndeadMale";
import { UndeadFemaleIcon } from "./UndeadFemale";
import { TaurenMaleIcon } from "./TaurenMale";
import { TaurenFemaleIcon } from "./TaurenFemale";
import { TrollMaleIcon } from "./TrollMale";
import { TrollFemaleIcon } from "./TrollFemale";
import { BloodElfMaleIcon } from "./BloodElfMale";
import { BloodElfFemaleIcon } from "./BloodElfFemale";
import { GoblinMaleIcon } from "./GoblinMale";
import { GoblinFemaleIcon } from "./GoblinFemale";

export type WowRace =
  | "human"
  | "dwarf"
  | "night-elf"
  | "gnome"
  | "draenei"
  | "worgen"
  | "pandaren"
  | "orc"
  | "undead"
  | "tauren"
  | "troll"
  | "blood-elf"
  | "goblin";

export type RaceSex = "male" | "female";

export interface RaceIconProps {
  race: WowRace;
  sex: RaceSex;
  size?: number;
}

const raceIconMap: Record<WowRace, { male: React.FC<{ size?: number }>; female: React.FC<{ size?: number }> }> = {
  human: { male: HumanMaleIcon, female: HumanFemaleIcon },
  dwarf: { male: DwarfMaleIcon, female: DwarfFemaleIcon },
  "night-elf": { male: NightElfMaleIcon, female: NightElfFemaleIcon },
  gnome: { male: GnomeMaleIcon, female: GnomeFemaleIcon },
  draenei: { male: DraeneiMaleIcon, female: DraeneiFemaleIcon },
  worgen: { male: WorgenMaleIcon, female: WorgenFemaleIcon },
  pandaren: { male: PandarenMaleIcon, female: PandarenFemaleIcon },
  orc: { male: OrcMaleIcon, female: OrcFemaleIcon },
  undead: { male: UndeadMaleIcon, female: UndeadFemaleIcon },
  tauren: { male: TaurenMaleIcon, female: TaurenFemaleIcon },
  troll: { male: TrollMaleIcon, female: TrollFemaleIcon },
  "blood-elf": { male: BloodElfMaleIcon, female: BloodElfFemaleIcon },
  goblin: { male: GoblinMaleIcon, female: GoblinFemaleIcon },
};

export const RaceIcon: React.FC<RaceIconProps> = ({ race, sex, size = 48 }) => {
  const IconComponent = raceIconMap[race]?.[sex];
  if (!IconComponent) return null;
  return <IconComponent size={size} />;
};

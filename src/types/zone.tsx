import {
  BanditCampIcon, DemonStrongholdIcon,
  // DragonPeakIcon,
  ElementalPlainsIcon, GiantsLandIcon, OccultMansionIcon, StartingZoneIcon
} from "../components/icons/ZoneIcon";

export interface ZoneType {
  id: string;
  name: string;
  description: string;
  levelRange: [number, number];
  monstersId: string[];
  componentIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}



export const ZONES: ZoneType[] = [
  {
    id: "starting_zone",
    name: "Foret du Départ",
    description:
      "Le point de départ de toutes les aventures, où les héros commencent leur voyage.",
    levelRange: [1, 5],
    monstersId: ["wolf", "boar", "fox", "owl"],
    componentIcon: StartingZoneIcon,
  },
  {
    id: "bandit_camp",
    name: "Camp de Voleurs",
    description:
      "Un campement caché dans la forêt, habité par des bandits et des Murlocs.",
    levelRange: [5, 10],
    monstersId: ["bandit", "murloc", "thief", "giant-rat"],
    componentIcon: BanditCampIcon,
  },
  {
    id: "occult_mansion",
    name: "Manoir Occulte",
    description: "Un manoir mystérieux rempli de secrets et de dangers.",
    levelRange: [10, 15],
    monstersId: ["skeleton", "ghoul", "ghost", "gargoyle"],
    componentIcon: OccultMansionIcon,
  },
  {
    id: "elemental_plains",
    name: "Plain Elementaire",
    description:
      "Des plaines vastes où les éléments prennent vie sous des formes variées.",
    levelRange: [15, 20],
    monstersId: ["fire-elemental", "ice-elemental", "earth-elemental", "air-elemental"],
    componentIcon: ElementalPlainsIcon,
  },
  {
    id: "demon_stronghold",
    name: "Forteresse Démoniaque",
    description:
      "Le repaire des démons, un endroit sombre et périlleux où seuls les plus braves osent s'aventurer.",
    levelRange: [20, 25],
    monstersId: ["imp", "felguard", "minor-demon", "succubus"],
    componentIcon: DemonStrongholdIcon,
  },
  {
    id: "giants_land",
    name: "La Terre des Géants",
    description:
      "Un territoire vaste et imposant, habité par des créatures gigantesques.",
    levelRange: [25, 35],
    monstersId: ["giant", "ice-giant", "troll-brute"],
    componentIcon: GiantsLandIcon,
  }
  // ,
  //   {
  //     id: "dragon_peak",
  //     name: "Pic du Dragon",
  //     description:
  //       "Le sommet le plus élevé, où résident les dragons légendaires et leurs trésors.",
  //     levelRange: [30, 60],
  //     monstersId: ["whelp", "dragon", "ancient-dragon", "wyvern", "drake", "guardian-dragon"],
  //     componentIcon: DragonPeakIcon,
  //   }
];

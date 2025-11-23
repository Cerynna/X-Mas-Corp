// Couleurs selon la qualité des items (style WoW)
export type ItemQuality =
  | "poor"
  | "common"
  | "uncommon"
  | "rare"
  | "epic"
  | "legendary";

export interface QualityColors {
  primary: string;
  secondary: string;
  accent: string;
  gem?: string;
}

export const getQualityColors = (quality: ItemQuality): QualityColors => {
  // console.log("Getting colors for quality:", quality);
  switch (quality) {
    case "poor":
      return {
        primary: "#9D9D9D",
        secondary: "#7A7A7A",
        accent: "#6B6B6B",
        gem: "#808080",
      };
    case "common":
      return {
        primary: "#FFFFFF",
        secondary: "#D4D4D4",
        accent: "#B8B8B8",
        gem: "#E0E0E0",
      };
    case "uncommon":
      return {
        primary: "#1EFF00",
        secondary: "#00D000",
        accent: "#00A000",
        gem: "#00FF7F",
      };
    case "rare":
      return {
        primary: "#0070DD",
        secondary: "#0052AA",
        accent: "#003D88",
        gem: "#4169E1",
      };
    case "epic":
      return {
        primary: "#A335EE",
        secondary: "#8020CC",
        accent: "#6010AA",
        gem: "#9370DB",
      };
    case "legendary":
      return {
        primary: "#FF8000",
        secondary: "#DD6600",
        accent: "#BB4400",
        gem: "#FFD700",
      };
    default:
      return {
        primary: "#FFFFFF",
        secondary: "#D4D4D4",
        accent: "#B8B8B8",
        gem: "#E0E0E0",
      };
  }
};

// Obtenir la couleur du texte selon la qualité
export const getQualityTextColor = (quality: ItemQuality): string => {
  const colors = getQualityColors(quality);
  return colors.primary;
};

// Obtenir la couleur de bordure selon la qualité
export const getQualityBorderColor = (quality: ItemQuality): string => {
  const colors = getQualityColors(quality);
  return colors.primary;
};

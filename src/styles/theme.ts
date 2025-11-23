export const theme = {
  colors: {
    // Couleurs principales inspirées de WoW
    primary: {
      gold: "#FFD700",
      darkGold: "#C7A500",
      bronze: "#CD7F32",
    },

    // Palette d'hiver
    winter: {
      iceBlue: "#A5D8FF",
      deepBlue: "#1E3A5F",
      snowWhite: "#F8F9FA",
      frostBlue: "#4A90E2",
      darkIce: "#2C5F8D",
    },

    // Couleurs Alliance/Horde adaptées pour l'hiver
    alliance: {
      blue: "#0078D7",
      lightBlue: "#4BA3E3",
      darkBlue: "#003F7F",
    },

    horde: {
      red: "#8B0000",
      darkRed: "#5C0000",
      crimson: "#DC143C",
    },

    // Couleurs neutres
    neutral: {
      black: "#0A0E1A",
      darkGray: "#1A1F2E",
      gray: "#2E3440",
      lightGray: "#4C566A",
      silver: "#D8DEE9",
      white: "#ECEFF4",
    },

    // Couleurs d'accent
    accent: {
      arcane: "#8B5CF6",
      frost: "#60A5FA",
      fire: "#EF4444",
      nature: "#10B981",
      holy: "#FDE047",
    },

    // États
    status: {
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
      info: "#3B82F6",
    },

    // Couleurs de texte
    text: {
      primary: "#ECEFF4",
      secondary: "#D8DEE9",
      dark: "#0A0E1A",
      muted: "#4C566A",
    },

    channels: {
      general: "#ffdb97",
      wisp: "#cf21c7",
      group: "#60A5FA",
      guild: "#10B981",
      party: "#F59E0B",
      raid: "#EF4444",
    },

    // Qualités d'items (WoW-style)
    quality: {
      poor: "#9D9D9D",
      common: "#FFFFFF",
      uncommon: "#1EFF00",
      rare: "#0070DD",
      epic: "#A335EE",
      legendary: "#FF8000",
    },
  },

  // Typographie inspirée de l'UI de WoW
  fonts: {
    primary: "'Cinzel', serif",
    secondary: "'Roboto Condensed', sans-serif",
    body: "'Open Sans', sans-serif",
    display: "'Cinzel Decorative', cursive",
  },

  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  // Espacements
  spacing: {
    xxs: "0.125rem", // 2px
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
    "5xl": "8rem", // 128px
  },

  // Bordures
  borders: {
    thin: "1px",
    medium: "2px",
    thick: "4px",
    heavy: "6px",
  },

  borderRadius: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  // Ombres inspirées de l'UI de WoW
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.5)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)",
    glow: {
      blue: "0 0 20px rgba(74, 144, 226, 0.6), 0 0 40px rgba(74, 144, 226, 0.4)",
      gold: "0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)",
      arcane:
        "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)",
      frost:
        "0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(96, 165, 250, 0.4)",
    },
  },

  // Transitions
  transitions: {
    fast: "150ms ease-in-out",
    base: "250ms ease-in-out",
    slow: "350ms ease-in-out",
  },

  // Points de rupture
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Z-index
  zIndex: {
    dropdown: 1000,
    modal: 1100,
    popover: 1200,
    tooltip: 1300,
    notification: 1400,
  },
};

export type Theme = typeof theme;

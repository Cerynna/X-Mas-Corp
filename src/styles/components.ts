import styled from "styled-components";

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  height: 80vh;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  text-shadow: ${({ theme }) => theme.shadows.glow.gold};
  margin-bottom: 0;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.6;
  text-align: center;
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing["3xl"]} 0;
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 3 }) => columns}, 1fr);
  gap: ${({ gap, theme }) => gap || theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Flex = styled.div<{
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: string;
  justify?: string;
  gap?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ align = "center" }) => align};
  justify-content: ${({ justify = "flex-start" }) => justify};
  gap: ${({ gap, theme }) => gap || theme.spacing.md};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  width: 100%;
`;

interface CardProps {
  variant?: "default" | "frost" | "fire" | "arcane";
  bordered?: boolean;
  glowing?: boolean;
}

export const Card = styled.div<CardProps>`
  width: 100%;
  background: ${({ variant }) => {
    switch (variant) {
      case "frost":
        return `linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(30, 58, 95, 0.9))`;
      case "fire":
        return `linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(92, 0, 0, 0.9))`;
      case "arcane":
        return `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(30, 30, 70, 0.9))`;
      default:
        return `linear-gradient(135deg, rgba(30, 58, 95, 0.8), rgba(26, 31, 46, 0.9))`;
    }
  }};
  border: ${({ bordered, theme }) =>
    bordered
      ? `${theme.borders.medium} solid ${theme.colors.primary.gold}`
      : "none"};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  backdrop-filter: blur(10px);
`;

export const Scrollable = styled.div`
  max-height: 50vh;
  overflow-y: auto;
`;

// export const Card = styled.div<CardProps>`
// background: ${({ variant }) => {
//   switch (variant) {
//     case "frost":
//       return `linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(30, 58, 95, 0.9))`;
//     case "fire":
//       return `linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(92, 0, 0, 0.9))`;
//     case "arcane":
//       return `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(30, 30, 70, 0.9))`;
//     default:
//       return `linear-gradient(135deg, rgba(30, 58, 95, 0.8), rgba(26, 31, 46, 0.9))`;
//   }
// }};
//   border: ${({ bordered, theme }) =>
//     bordered
//       ? `${theme.borders.medium} solid ${theme.colors.primary.gold}`
//       : "none"};
//   border-radius: ${({ theme }) => theme.borderRadius.lg};
//   padding: ${({ theme }) => theme.spacing["2xl"]};
//   box-shadow: ${({ theme }) => theme.shadows.xl};
//   position: relative;
//   transition: all ${({ theme }) => theme.transitions.base};

//   ${({ glowing, theme, variant }) =>
//     glowing &&
//     `
//     &::before {
//       content: '';
//       position: absolute;
//       top: -2px;
//       left: -2px;
//       right: -2px;
//       bottom: -2px;
//       background: linear-gradient(
//         45deg,
//         ${
//           variant === "frost"
//             ? theme.colors.winter.frostBlue
//             : variant === "fire"
//             ? theme.colors.accent.fire
//             : variant === "arcane"
//             ? theme.colors.accent.arcane
//             : theme.colors.primary.gold
//         },
//         ${theme.colors.winter.frostBlue},
//         ${
//           variant === "frost"
//             ? theme.colors.winter.frostBlue
//             : variant === "fire"
//             ? theme.colors.accent.fire
//             : variant === "arcane"
//             ? theme.colors.accent.arcane
//             : theme.colors.primary.gold
//         }
//       );
//       border-radius: ${theme.borderRadius.lg};
//       z-index: -1;
//       opacity: 0;
//       transition: opacity ${theme.transitions.base};
//     }

//     &:hover::before {
//       opacity: 0.6;
//       animation: glow 2s ease-in-out infinite;
//     }

//     @keyframes glow {
//       0%, 100% { opacity: 0.4; }
//       50% { opacity: 0.8; }
//     }
//   `}

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: ${({ theme, variant }) => {
//       switch (variant) {
//         case "frost":
//           return theme.shadows.glow.frost;
//         case "arcane":
//           return theme.shadows.glow.arcane;
//         default:
//           return theme.shadows.glow.blue;
//       }
//     }};
//   }
// `;

export const CardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: ${({ theme }) => theme.borders.thin} solid
    ${({ theme }) => theme.colors.primary.gold};
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary.gold};
  margin: 0;
`;

export const CardSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.winter.iceBlue};
  margin: ${({ theme }) => theme.spacing.xs} 0 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardContent = styled.div`
  color: ${({ theme }) => theme.colors.neutral.silver};
  line-height: 1.8;
`;

export const CardFooter = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: ${({ theme }) => theme.borders.thin} solid
    ${({ theme }) => theme.colors.neutral.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const EmptySlot = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
`;

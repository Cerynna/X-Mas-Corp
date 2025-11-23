import styled from 'styled-components';

interface CardProps {
  variant?: 'default' | 'frost' | 'fire' | 'arcane';
  bordered?: boolean;
  glowing?: boolean;
}

export const Card = styled.div<CardProps>`
  background: ${({ variant }) => {
    switch (variant) {
      case 'frost':
        return `linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(30, 58, 95, 0.9))`;
      case 'fire':
        return `linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(92, 0, 0, 0.9))`;
      case 'arcane':
        return `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(30, 30, 70, 0.9))`;
      default:
        return `linear-gradient(135deg, rgba(30, 58, 95, 0.8), rgba(26, 31, 46, 0.9))`;
    }
  }};
  border: ${({ bordered, theme }) =>
    bordered ? `${theme.borders.medium} solid ${theme.colors.primary.gold}` : 'none'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  position: relative;
  transition: all ${({ theme }) => theme.transitions.base};

  ${({ glowing, theme, variant }) =>
    glowing &&
    `
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(
        45deg,
        ${
          variant === 'frost'
            ? theme.colors.winter.frostBlue
            : variant === 'fire'
            ? theme.colors.accent.fire
            : variant === 'arcane'
            ? theme.colors.accent.arcane
            : theme.colors.primary.gold
        },
        ${theme.colors.winter.frostBlue},
        ${
          variant === 'frost'
            ? theme.colors.winter.frostBlue
            : variant === 'fire'
            ? theme.colors.accent.fire
            : variant === 'arcane'
            ? theme.colors.accent.arcane
            : theme.colors.primary.gold
        }
      );
      border-radius: ${theme.borderRadius.lg};
      z-index: -1;
      opacity: 0;
      transition: opacity ${theme.transitions.base};
    }

    &:hover::before {
      opacity: 0.6;
      animation: glow 2s ease-in-out infinite;
    }

    @keyframes glow {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme, variant }) => {
      switch (variant) {
        case 'frost':
          return theme.shadows.glow.frost;
        case 'arcane':
          return theme.shadows.glow.arcane;
        default:
          return theme.shadows.glow.blue;
      }
    }};
  }
`;

export const CardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: ${({ theme }) => theme.borders.thin} solid ${({ theme }) => theme.colors.primary.gold};
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
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
  border-top: ${({ theme }) => theme.borders.thin} solid ${({ theme }) => theme.colors.neutral.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

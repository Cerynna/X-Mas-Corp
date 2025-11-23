import styled from 'styled-components';

interface WowButtonProps {
  $variant?: 'primary' | 'alliance' | 'horde' | 'secondary';
  $size?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
}

export const WowButton = styled.button<WowButtonProps>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ $size, theme }) =>
    $size === 'small'
      ? theme.fontSizes.sm
      : $size === 'large'
      ? theme.fontSizes.xl
      : theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: ${({ $size, theme }) =>
    $size === 'small'
      ? `${theme.spacing.sm} ${theme.spacing.md}`
      : $size === 'large'
      ? `${theme.spacing.lg} ${theme.spacing['2xl']}`
      : `${theme.spacing.md} ${theme.spacing.xl}`};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  background: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'alliance':
        return `linear-gradient(135deg, ${theme.colors.alliance.blue}, ${theme.colors.alliance.darkBlue})`;
      case 'horde':
        return `linear-gradient(135deg, ${theme.colors.horde.red}, ${theme.colors.horde.darkRed})`;
      case 'secondary':
        return `linear-gradient(135deg, ${theme.colors.neutral.gray}, ${theme.colors.neutral.darkGray})`;
      default:
        return `linear-gradient(135deg, ${theme.colors.primary.gold}, ${theme.colors.primary.bronze})`;
    }
  }};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.base};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width ${({ theme }) => theme.transitions.slow},
      height ${({ theme }) => theme.transitions.slow};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow.gold};

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

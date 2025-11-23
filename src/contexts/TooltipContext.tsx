import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface TooltipContent {
    title: string;
    description?: string;
    stats?: Record<string, string | number>;
    quality?: 'poor' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
    level?: number;
}

export type { TooltipContent };

interface TooltipPosition {
    x: number;
    y: number;
}

interface TooltipContextType {
    showTooltip: (content: TooltipContent, position: TooltipPosition) => void;
    hideTooltip: () => void;
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

export { TooltipContext };

const TooltipContainer = styled.div<{ $x: number; $y: number; $visible: boolean }>`
  position: fixed;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  z-index: 10000;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease;
  transform: translate(-50%, -100%) translateY(-10px);
`;

const TooltipBox = styled.div<{ $quality?: string }>`
  background: linear-gradient(
    135deg,
    rgba(20, 20, 30, 0.98) 0%,
    rgba(30, 30, 45, 0.98) 100%
  );
  border: 2px solid ${({ $quality, theme }) => {
        switch ($quality) {
            case 'poor': return '#9d9d9d';
            case 'common': return '#ffffff';
            case 'uncommon': return '#1eff00';
            case 'rare': return '#0070dd';
            case 'epic': return '#a335ee';
            case 'legendary': return '#ff8000';
            default: return theme.colors.primary.gold;
        }
    }};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  min-width: 200px;
  max-width: 350px;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  backdrop-filter: blur(10px);
`;

const TooltipTitle = styled.div<{ $quality?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ $quality }) => {
        switch ($quality) {
            case 'poor': return '#9d9d9d';
            case 'common': return '#ffffff';
            case 'uncommon': return '#1eff00';
            case 'rare': return '#0070dd';
            case 'epic': return '#a335ee';
            case 'legendary': return '#ff8000';
            default: return '#ffd700';
        }
    }};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

const TooltipDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-style: italic;
`;

const TooltipStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  border-top: 1px solid rgba(255, 215, 0, 0.3);
  padding-top: ${({ theme }) => theme.spacing.sm};
`;

const TooltipStat = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: #1eff00;
  display: flex;
  justify-content: space-between;
`;

export function TooltipProvider({ children }: { children: ReactNode }) {
    const [content, setContent] = useState<TooltipContent | null>(null);
    const [position, setPosition] = useState<TooltipPosition>({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    const showTooltip = (tooltipContent: TooltipContent, tooltipPosition: TooltipPosition) => {
        setContent(tooltipContent);
        setPosition(tooltipPosition);
        setVisible(true);
    };

    const hideTooltip = () => {
        setVisible(false);
        setTimeout(() => setContent(null), 200);
    };

    return (
        <TooltipContext.Provider value={{ showTooltip, hideTooltip }}>
            {children}
            {content && (
                <TooltipContainer $x={position.x} $y={position.y} $visible={visible}>
                    <TooltipBox $quality={content.quality} onMouseLeave={hideTooltip} onClick={hideTooltip}>
                        <TooltipTitle $quality={content.quality}>{content.title}</TooltipTitle>
                        {content.description && (
                            <TooltipDescription>"{content.description}"</TooltipDescription>
                        )}
                        {content.stats && Object.keys(content.stats).length > 0 && (
                            <TooltipStats>
                                {Object.entries(content.stats).sort().reverse().map(([key, value]) => (
                                    <TooltipStat key={key}>
                                        <span>{key}</span>
                                        <span>+{value}</span>
                                    </TooltipStat>
                                ))}
                            </TooltipStats>
                        )}
                        <TooltipStat>
                            <span>level</span>
                            <span>+{content.level}</span>
                        </TooltipStat>
                    </TooltipBox>
                </TooltipContainer>
            )}
        </TooltipContext.Provider>
    );
}

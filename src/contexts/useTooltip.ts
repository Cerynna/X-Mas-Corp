import { useContext } from 'react';
import { TooltipContext } from './TooltipContext';

export function useTooltip() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }
  return context;
}

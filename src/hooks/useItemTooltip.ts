import type { MouseEvent } from 'react';
import { useTooltip } from '../contexts/useTooltip';
import type { TooltipContent } from '../contexts/TooltipContext';
import type { EquipmentItem } from '../types/equipment';

export function useItemTooltip() {
  const { showTooltip, hideTooltip } = useTooltip();

  const showItemTooltip = (item: EquipmentItem, event: MouseEvent) => {
    const content: TooltipContent = {
      title: item.name,
      stats: item.stats as Record<string, string | number>,
      quality: item.quality,
      level: item.level,
      equiped: item.equiped ?? undefined,
    };

    showTooltip(content, {
      x: event.clientX,
      y: event.clientY,
    });
  };

  return {
    showItemTooltip,
    hideTooltip,
  };
}

import type { MouseEvent } from "react";
import { useTooltip } from "../contexts/useTooltip";
import type { TooltipContent } from "../contexts/TooltipContext";
import type { ClassAbility } from "../types/abilities";

export function useAbilityTooltip() {
  const { showTooltip, hideTooltip } = useTooltip();

  const showAbilityTooltip = (ability: ClassAbility, event: MouseEvent) => {
    const stats: Record<string, string | number> = {};
    if (ability.baseManaCost) {
      stats["Mana Cost"] = ability.baseManaCost;
    }

    const content: TooltipContent = {
      title: ability.name,
      description: ability.description,
      level: 0,
      stats,
    };

    showTooltip(content, {
      x: event.clientX,
      y: event.clientY,
    });
  };

  return {
    showAbilityTooltip,
    hideTooltip,
  };
}

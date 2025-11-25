import type { MouseEvent } from "react";
import { useTooltip } from "../contexts/useTooltip";
import type { TooltipContent } from "../contexts/TooltipContext";
import type { ClassAbility } from "../types/abilities";

export function useAbilityTooltip() {
  const { showTooltip, hideTooltip } = useTooltip();

  const showAbilityTooltip = (ability: ClassAbility, event: MouseEvent) => {
    const content: TooltipContent = {
      title: ability.name,
      description: ability.description,
      level: 0,
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

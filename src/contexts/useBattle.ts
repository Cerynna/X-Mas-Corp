import { useContext } from "react";
import { BattleContext } from "./BattleContext";

export const useBattle = () => {
  const context = useContext(BattleContext);
  if (!context) {
    throw new Error("useBattle doit être utilisé dans un BattleProvider");
  }
  return context;
};

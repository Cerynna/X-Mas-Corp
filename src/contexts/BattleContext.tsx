import { createContext, useEffect, useState, type ReactNode } from "react";
import { initBattle, type BattleState } from "../types/battle";
import type { Character } from "../types/character";
import type { ZoneType } from "../types/zone";
import { useLocation, useNavigate } from 'react-router-dom'

interface BattleContextType {
    battle: BattleState | null;
    setBattle: (battle: BattleState | null) => void;
    createNewBattle: (character: Character, level: number, zone: ZoneType) => void;
}

const BattleContext = createContext<BattleContextType | undefined>(undefined);

export { BattleContext };


//   player: Character;
//   monster: Monster;
//   turn: "player" | "monster";
//   turnCount: number;
//   playerDefending: boolean;
//   monsterDefending: boolean;
//   battleLog: BattleLogEntry[];
//   status: "ongoing" | "victory" | "defeat" | "fled";
//   rewards?: BattleRewards;


export function BattleProvider({ children }: { children: ReactNode }) {
    const [battle, setBattle] = useState<BattleState | null>(null);
    const location = useLocation()
    const navigate = useNavigate()


    const createNewBattle = (character: Character, level: number, zone: ZoneType): void => {
        setBattle(initBattle(character, level, zone));
    }
    useEffect(() => {
        if (battle && location.pathname !== '/battle') {
            navigate('/battle');
        }
        if (!battle && location.pathname === '/battle') {
            navigate('/');
        }
    }, [battle, location, navigate]);
    return (
        <BattleContext.Provider value={{ battle, setBattle, createNewBattle }}>
            {children}
        </BattleContext.Provider>
    );

}
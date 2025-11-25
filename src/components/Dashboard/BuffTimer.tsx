import React, { useEffect, useState } from "react";
import { useCharacter } from "../../contexts";
import { clearOldBuffs } from "../../utils/player";
import styled from "styled-components";

const BuffTimerContainer = styled.div`
margin-top: -16px;
background: rgba(0, 0, 0, 0.5);
padding: 2px;
border-radius: 4px;
color: white;
font-weight: bold;
font-size: 0.8rem;
`;

interface BuffTimerProps {
    expiresAt: number; // timestamp en ms
}

function formatDuration(ms: number) {
    if (ms <= 0) return "00:00";
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Toujours deux chiffres pour MM et SS
    const pad = (n: number) => n.toString().padStart(2, "0");

    if (hours > 0) {
        return `${hours}:${pad(minutes)}:${pad(seconds)}`;
    } else {
        return `${pad(minutes)}:${pad(seconds)}`;
    }
}

export const BuffTimer: React.FC<BuffTimerProps> = ({ expiresAt }) => {
    const { character, updateCharacter } = useCharacter();
    const [remaining, setRemaining] = useState(expiresAt - Date.now());

    useEffect(() => {
        if (remaining <= 0) {
            if (!character) return;
            const newBuffs = clearOldBuffs(character);
            character.buffs = newBuffs;
            updateCharacter(character);
            return;
        }
        const interval = setInterval(() => {
            setRemaining(expiresAt - Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, [expiresAt, remaining, character, updateCharacter]);

    return <BuffTimerContainer style={{
        fontSize: '0.8rem',
        color: remaining <= 60000 ? 'red' : 'inherit',
    }}>{formatDuration(remaining)}</BuffTimerContainer>;
};

import React, { useEffect, useState } from "react";

interface BuffTimerProps {
    expiresAt: number; // timestamp en ms
}

function formatDuration(ms: number) {
    if (ms <= 0) return "00:00";
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let result = "";
    if (hours > 0) {
        result += `${hours}:`;
    }
    if (minutes > 0 || hours > 0) {
        result += `${hours > 0 && minutes < 10 ? "0" : ""}${minutes}:`;
    }
    result += `${(seconds < 10 && (minutes > 0 || hours > 0)) ? "0" : ""}${seconds}`;
    return result;
}

export const BuffTimer: React.FC<BuffTimerProps> = ({ expiresAt }) => {
    const [remaining, setRemaining] = useState(expiresAt - Date.now());

    useEffect(() => {
        if (remaining <= 0) return;
        const interval = setInterval(() => {
            setRemaining(expiresAt - Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, [expiresAt, remaining]);

    return <span style={{
        fontSize: '0.8rem',
        color: remaining <= 60000 ? 'red' : 'inherit',
    }}>{formatDuration(remaining)}</span>;
};

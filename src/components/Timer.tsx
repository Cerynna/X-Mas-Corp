import { useEffect, useState } from "react";
import styled from "styled-components";

export function Timer({ initialTime, onTimeUp }: { initialTime: number; onTimeUp: () => void }) {
    // initialTime is now in milliseconds
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }
        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1000);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, onTimeUp]);

    const totalSeconds = Math.floor(timeLeft / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return (
        <TimerContainer>
            {formattedMinutes}:{formattedSeconds}
        </TimerContainer>
    );
}

const TimerContainer = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.winter.iceBlue};
`;
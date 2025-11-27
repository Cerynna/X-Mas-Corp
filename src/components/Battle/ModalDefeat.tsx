
import { Flex } from "../../styles";
import { WowButton } from "../WowButton";
import { useModal } from "../../contexts/useModal";
import { useBattle } from "../../contexts/useBattle";
import { useCharacter } from "../../contexts";
import type { Character } from "../../types/character";
import { useState } from "react";
import { Timer } from "../Timer";
import { BattleLog, BattleLogTitle, LogEntry, LogList } from "./Battle.style";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 0;
`;


export function ModalDefeat() {
    const { character, updateCharacter } = useCharacter();
    const { battle, setBattle } = useBattle();
    const [ready, setReady] = useState(false);

    const { closeModal } = useModal();

    const handleContinue = () => {
        if (!character || !battle) return;
        const updatedCharacter: Character = {
            ...character!,
        };
        updatedCharacter.health = (updatedCharacter.maxHealth * 10) / 100;
        updatedCharacter.mana = (updatedCharacter.maxMana * 10) / 100;
        updateCharacter({ ...updatedCharacter });

    }
    if (!character || !battle) return null;


    return (
        <Flex direction="column" align="center" justify="space-between" style={{
            height: '100%',
        }}>
            <Title>{battle.status === 'defeat' ? '💀 Défaite' : '🏃 Vous avez fui'}</Title>

            <BattleLog>
                <BattleLogTitle>📜 Journal de Combat</BattleLogTitle>
                <LogList>
                    {[...battle.battleLog].reverse().map((entry) => (
                        <LogEntry key={entry.id} $type={entry.type}>
                            {entry.message}
                        </LogEntry>
                    ))}
                </LogList>
            </BattleLog>



            <Flex direction="row" justify="center" align="center" style={{
                marginTop: '5rem',
            }}>
                <WowButton
                    disabled={!ready}
                    $variant="secondary"
                    onClick={() => {
                        handleContinue()
                        setBattle(null)
                        closeModal()
                    }}>
                    {ready ? "Recupérer mon corp" : <Timer initialTime={1000 * character.level} onTimeUp={() => setReady(true)} />}
                </WowButton>
            </Flex>
        </Flex>
    )
}

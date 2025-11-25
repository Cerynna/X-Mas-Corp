import styled from "styled-components";
import { BuffTimer } from "./BuffTimer";
import { useCharacter } from "../../contexts";

const PotionsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const BuffList = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.md};
`;


const BuffItem = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  align-items: center;
//   gap: ${({ theme }) => theme.spacing.xs};
`;

export function Buffs() {
    const { character } = useCharacter();
    if (!character || !character.buffs || character.buffs.length === 0) {
        return null;
    }

    return <PotionsSection>
        <BuffList>
            {character?.buffs.filter((buff) => buff.expiresAt > Date.now()).map((buff) => (
                <BuffItem key={buff.expiresAt + (buff.name || "")}>
                    <span style={{ fontSize: '1.5rem' }}>{buff.icon}</span>
                    <BuffTimer expiresAt={buff.expiresAt} />
                    {/* {buff.name}(+{buff.amount} %) - Durée restante : {buff.duration} secondes */}
                </BuffItem>
            ))}
        </BuffList>
    </PotionsSection>
}
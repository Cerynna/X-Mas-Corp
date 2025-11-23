import styled from "styled-components";
import { useCharacter } from "../../contexts";

const PotionsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const BuffList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;


const BuffItem = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export function Buffs() {
    const { character } = useCharacter();
    if (!character || !character.buffs || character.buffs.length === 0) {
        return null;
    }

    return <PotionsSection>
        <BuffList>
            <BuffItem>
                {character?.buffs.filter((buff) => buff.expiresAt < Date.now()).map((buff) => (
                    <>
                        <span style={{ fontSize: '1.5rem' }}>{buff.icon}</span> {buff.name}(+{buff.amount} %) - Durée restante : {buff.duration} secondes
                    </>
                ))}
            </BuffItem>
        </BuffList>
    </PotionsSection>
}
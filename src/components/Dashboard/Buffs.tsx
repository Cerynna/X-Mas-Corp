import styled from "styled-components";
import { BuffTimer } from "./BuffTimer";
import { useCharacter } from "../../contexts";
import type { BuffType } from "../../types/buffs";
import { Card, CardHeader, CardTitle, EmptySlot } from "../../styles";



const BuffList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;


const BuffItem = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export function Buffs() {
  const { character } = useCharacter();
  // if (!character || !character.buffs) {
  //   return null;
  // }

  return <Card>
    <CardHeader>
      <CardTitle>🚀 Buff</CardTitle>
    </CardHeader>
    {!character || !Array.isArray(character.buffs) || character.buffs.length === 0 ? (
      <EmptySlot>Aucun buff actif</EmptySlot>
    ) : (
      <BuffList>
        {character.buffs
          .filter((buff: BuffType) => buff.expiresAt > Date.now())
          .map((buff: BuffType) => (
            <BuffItem key={buff.expiresAt + (buff.name || "")}>
              <span style={{ fontSize: '1.5rem' }}>{buff.icon}</span>
              <BuffTimer expiresAt={buff.expiresAt} />
            </BuffItem>
          ))}
      </BuffList>
    )}
  </Card>
}
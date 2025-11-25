import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";
import { deleteDocument, onCollectionChange } from "../firebase";
import styled from "styled-components";
import { CLASSES, type Character, type WowClass } from "../types/character";
import { useCharacter } from "./useCharacter";
import { AddMpList, getMembers } from "../firebase/models/members";

interface MembersContextType {
  members: Character[] | null;
  showMembers: () => void;
  hideMembers: () => void;
}

const MembersContext = createContext<MembersContextType | undefined>(undefined);

export { MembersContext };

interface VisibilityProps {
  $visible: boolean;
}

const MemberContainer = styled.div<VisibilityProps>`
  position: fixed;
  right: 0;
  bottom: ${({ $visible }) => ($visible ? '0' : '-10px')};;
  width: ${({ $visible }) => ($visible ? '300px' : '0')};
  height: ${({ $visible }) => ($visible ? '50vh' : '0')};
  border: 2px solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const MembersToggler = styled.div<VisibilityProps>`
    position: absolute;
    top: ${({ $visible }) => ($visible ? '0' : '-70px')};
    left: ${({ $visible }) => ($visible ? '0' : '-60px')};
    width: ${({ $visible }) => ($visible ? '30px' : '60px')};
    height: ${({ $visible }) => ($visible ? '30px' : '60px')};
    background-color: ${({ theme }) => theme.colors.primary.gold};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ $visible }) => ($visible ? '0.8rem' : '1.5rem')};;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const MemberHeader = styled.div`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-shadow: ${({ theme }) => theme.shadows.glow.gold};
  text-align: center;
`;

const MemberList = styled.div`
  height: 90%;
  overflow-y: auto;
`;
const MemberListItem = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.winter.darkIce};
  color: ${({ theme }) => theme.colors.neutral.white};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background-color: rgba(255, 215, 0, 0.1);
  }
`;

const MemberItemName = styled.div<{ $color?: string }>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, $color }) => $color || theme.colors.primary.gold};
`;

const MemberItemConnected = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.winter.iceBlue};
`;

const MemberItemLevel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.winter.iceBlue};
`;

const MemberItemTools = styled.div`
  margin-left: auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ButtonTool = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary.gold};
  cursor: pointer;
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing.xs};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.gold};
    background-color: rgba(255, 215, 0, 0.2);
    border-radius: 50%;
  }
`;

export function MembersProvider({ children }: { children: ReactNode }) {
  const [members, setMembers] = useState<Character[] | null>(null);
  const [visible, setVisible] = useState(false);
  const { character } = useCharacter();

  function showMembers() {
    // Implementation to show members list
    setVisible(true);
  }

  function hideMembers() {
    // Implementation to hide members list
    setVisible(false);
  }


  const loadMembers = useCallback(async () => {
    const allMembers = await getMembers();
    setMembers(allMembers);
  }, []);

  useEffect(() => {
    onCollectionChange('characters', loadMembers);
    loadMembers();
  }, [character, loadMembers]);

  // members.map((member) => {
  //   console.log(typeof member.updatedAt === "number" && member.updatedAt + 60 * 1000 > Date.now(), member.name);
  // });

  const value: MembersContextType = {
    members,
    showMembers,
    hideMembers,
  };

  return (
    <MembersContext.Provider value={value}>
      <MemberContainer $visible={visible}>
        <MembersToggler $visible={visible} onClick={() => {
          setVisible(!visible);
        }}>
          {visible ? '❌' : '👥'}
        </MembersToggler>
        <MemberHeader>Members</MemberHeader>
        <MemberList>
          {/* Render members list here */}
          {members && members.map((member) => (
            <MemberListItem key={member.id}>
              <MemberItemConnected>
                {typeof member.updatedAt === "number" && member.updatedAt + (60 * 1000 * 15) > Date.now()
                  ? "🟢"
                  : "⚪"}
              </MemberItemConnected>
              <MemberItemLevel>{member.level}</MemberItemLevel>
              <MemberItemName $color={CLASSES[member.class as WowClass].color}>{member.name}</MemberItemName>
              {character && character.id !== member.id && (
                <MemberItemTools>
                  {character.isAdmin && (
                    <ButtonTool onClick={() => {
                      if (member.id) deleteDocument('characters', member.id);
                    }}>🗑️</ButtonTool>
                  )}
                  <ButtonTool onClick={() => {
                    console.log("SEND LOVE")
                  }}>❤️</ButtonTool>
                  <ButtonTool onClick={() => {
                    AddMpList(character, member);
                  }}>💬</ButtonTool>
                </MemberItemTools>
              )}
            </MemberListItem>
          ))}
        </MemberList>
      </MemberContainer>
      {children}
    </MembersContext.Provider>
  );

}
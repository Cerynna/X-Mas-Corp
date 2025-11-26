import styled from "styled-components";
import { useCharacter } from "../contexts";
import { CrestClasse } from "./CrestClasse";


const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: rgba(10, 14, 26, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: ${({ theme }) => theme.borders.thin} solid ${({ theme }) => theme.colors.winter.darkIce};
`;

const UserName = styled.span`
  color: ${({ theme }) => theme.colors.winter.iceBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.gold}, ${({ theme }) => theme.colors.primary.bronze});

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.black};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
`;

export function UserInfo() {
    const { character } = useCharacter();
    if (!character) return null;

    return (
        <UserInfoContainer>
            <Avatar>
                <CrestClasse wowClass={character.class} />
            </Avatar>
            <UserName>{character?.name || 'Aventurier'}</UserName>
        </UserInfoContainer>
    );
}
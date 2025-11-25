import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth, useCharacter } from '../contexts';
import { logOut } from '../firebase';
import { WowButton } from './';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(26, 31, 46, 0.98) 0%,
    rgba(30, 58, 95, 0.95) 100%
  );
  border-bottom: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  backdrop-filter: blur(10px);
  z-index: ${({ theme }) => theme.zIndex.dropdown};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primary.gold};
  text-shadow: ${({ theme }) => theme.shadows.glow.gold};
  cursor: pointer;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const UserInfo = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutral.black};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
`;

interface HeaderProps {
  showActions?: boolean;
}

export function Header({ showActions = true }: HeaderProps) {
  const { user, loading } = useAuth();
  const { character } = useCharacter();

  const handleLogOut = async () => {
    try {
      await logOut();
      // Recharger la page pour créer une nouvelle session anonyme
      window.location.reload();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>❄️ Fête d'Hiver</Logo>
        </Link>

        <Nav>
          {loading ? (
            <div>Chargement...</div>
          ) : user ? (
            <>
              {showActions && (
                <>
                  <Link to="/">
                    <WowButton $size="small" $variant="horde">
                      👤
                    </WowButton>
                  </Link>
                  <Link to="/exploration">
                    <WowButton $size="small">
                      🗺️
                    </WowButton>
                  </Link>
                  <Link to="/shop">
                    <WowButton $size="small" $variant="alliance">
                      🏪
                    </WowButton>
                  </Link>
                  <Link to="/bestiary">
                    <WowButton $size="small" $variant="secondary">
                      📖
                    </WowButton>
                  </Link>
                  <Link to="/leaderboard">
                    <WowButton $size="small" $variant="secondary">
                      🏅
                    </WowButton>
                  </Link>
                  <Link to="/achievements">
                    <WowButton $size="small" $variant="secondary">
                      🏆
                    </WowButton>
                  </Link>
                </>
              )}
              {character && character.isAdmin ? (<WowButton $size="small" $variant="secondary" onClick={handleLogOut}>
                Nouveau Personnage
              </WowButton>) : <></>}
              <UserInfo>
                <Avatar>👤</Avatar>
                <UserName>{character?.name || 'Aventurier'}</UserName>
              </UserInfo>
            </>
          ) : null}
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
}

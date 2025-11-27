import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { BattleProvider, useAuth, useCharacter } from './contexts';
import { ChatProvider } from './contexts/ChatContext';
import { MembersProvider } from './contexts/MembersContext';
import { ShopProvider } from './contexts/ShopContext';

import type { Faction, WowClass, WowRace } from './types/character';
import { Header, CharacterCreation } from './components';

import { Dashboard, ExplorationPage, ShopPage, Bestiary, LeaderBoardPage, BattlePage } from './pages';

import { Container } from './styles';
import { ModalProvider } from './contexts/ModalContext';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary.gold},
    ${({ theme }) => theme.colors.winter.iceBlue},
    ${({ theme }) => theme.colors.primary.gold}
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
  
  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.winter.iceBlue};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

function AppContent() {
  const { user, loading: authLoading } = useAuth();
  const { character, hasCharacter, loading: characterLoading, createNewCharacter } = useCharacter();

  const handleCharacterCreation = async (data: {
    name: string;
    faction: Faction;
    race: WowRace;
    class: WowClass;
  }) => {
    try {
      await createNewCharacter(data);
    } catch (error) {
      console.error('Erreur lors de la création du personnage:', error);
      alert('Erreur lors de la création du personnage. Veuillez réessayer.');
    }
  };

  if (authLoading || characterLoading) {
    return (
      <AppContainer>
        <Header showActions={false} />
        <MainContent>
          <Title>❄️ Fête d'Hiver</Title>
          <Subtitle>Chargement...</Subtitle>
        </MainContent>
      </AppContainer>
    );
  }

  if (user && !hasCharacter) {
    return (
      <AppContainer>
        <Header showActions={false} />
        <MainContent>
          <CharacterCreation onComplete={handleCharacterCreation} />
        </MainContent>
      </AppContainer>
    );
  }

  if (user && character) {
    return (
      <AppContainer>
        <BattleProvider>
          <ModalProvider>
            <ChatProvider>
              <MembersProvider>
                <ShopProvider>
                  <Header showActions={true} />
                  <MainContent>
                    <Container>
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/exploration" element={<ExplorationPage />} />
                        <Route path="/battle" element={<BattlePage />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/bestiary" element={<Bestiary />} />
                        <Route path="/leaderboard" element={<LeaderBoardPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </Container>
                  </MainContent>
                </ShopProvider>
              </MembersProvider>
            </ChatProvider>
          </ModalProvider>
        </BattleProvider>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <Header showActions={false} />
      <MainContent>
        <Title>❄️ Fête d'Hiver</Title>
        <Subtitle>Bienvenue dans l'aventure</Subtitle>
      </MainContent>
    </AppContainer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;


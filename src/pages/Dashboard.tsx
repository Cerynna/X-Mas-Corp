import styled from 'styled-components';

import { Stuffs } from '../components/Dashboard/Stuffs';
import { Stats } from '../components/Dashboard/Stats';
import { Potions } from '../components/Dashboard/Potions';
import { Bags } from '../components/Dashboard/Bags';
import { XPBar } from '../components/Dashboard/XPBar';
import { Buffs } from '../components/Dashboard/Buffs';



// Styled Components
const DashboardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Card = styled.div`
  background: linear-gradient(
    135deg,
    rgba(30, 58, 95, 0.9) 0%,
    rgba(26, 31, 46, 0.95) 100%
  );
  border: ${({ theme }) => theme.borders.medium} solid ${({ theme }) => theme.colors.primary.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  backdrop-filter: blur(10px);
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


export const SectionTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary.gold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: ${({ theme }) => theme.shadows.glow.gold};
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-shadow: none;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;


export function Dashboard() {

  return (
    <DashboardContainer>
      <XPBar />
      <TopSection>
        {/* Colonne Gauche : Équipement + Statistiques */}
        <div>
          <Stuffs />
          <Stats />
        </div>
        {/* Colonne Droite : Potions + Sac */}
        <Card>
          <Buffs />
          <Potions />
          <Bags />
        </Card>
      </TopSection>
    </DashboardContainer>
  );
}

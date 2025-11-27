import styled from 'styled-components';

import { Stuffs } from '../components/Dashboard/Stuffs';
import { Stats } from '../components/Dashboard/Stats';
import { Potions } from '../components/Dashboard/Potions';
import { Bags } from '../components/Dashboard/Bags';
import { XPBar } from '../components/Dashboard/XPBar';
import { Buffs } from '../components/Dashboard/Buffs';
import { Flex } from '../styles';




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
    <Flex direction="column" gap="1rem">
      <XPBar />
      <Flex direction="row" gap="32px" justify='flex-start' align='flex-start'>
        <Flex direction="column" gap="1rem">
          <Stuffs />
          <Stats />
        </Flex>
        <Flex direction="column" gap="1rem" align='flex-start'>
          <Buffs />
          <Potions />
          <Bags />
        </Flex>
      </Flex>
    </Flex>
  );
}

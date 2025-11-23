import styled from 'styled-components';
import { Shop as ShopComponent } from '../components/Shop';
import { useCharacter } from '../contexts/useCharacter';

const ShopContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export function ShopPage() {
  const { character, updateCharacter } = useCharacter();

  const handlePurchase = (updatedCharacter: any) => {
    updateCharacter(updatedCharacter);
  };

  const handleClose = () => {
    // Navigation handled by router, no need to close
  };

  return (
    <ShopContainer>
      <ShopComponent 
        character={character}
        onPurchase={handlePurchase}
        onClose={handleClose}
      />
    </ShopContainer>
  );
}

// import styled from 'styled-components';
import styled from 'styled-components';
import { ShopComponent } from '../components';

const ShopContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export function ShopPage() {
  return (
    <ShopContainer>
      <ShopComponent />
    </ShopContainer>
  );
}

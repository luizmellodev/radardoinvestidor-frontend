import styled from 'styled-components';
import { useRouter } from 'next/router';

import SubmitButton from 'components/SubmitButton';
import Screen from 'components/Screen';
import FundCard from 'components/FundCard';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header``;
export const List = styled.div`
  flex: 1;
`;
export const Footer = styled.footer`
  padding-top: 24px;
`;

export default function Home() {
  const router = useRouter();

  const handleCompareButtonClick = () => {
    router.push('/comparacao');
  };

  return (
    <Screen>
      <Container>
        <Header>Header</Header>
        <List>
          <FundCard />
        </List>
        <Footer>
          <SubmitButton onClick={handleCompareButtonClick}>
            Comparar Fundos
          </SubmitButton>
        </Footer>
      </Container>
    </Screen>
  );
}

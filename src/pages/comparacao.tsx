import { useContext } from 'react';
import styled from 'styled-components';
import { MdShare } from 'react-icons/md';

import { FundsContext } from 'contexts/Funds';

import TopBar from 'components/TopBar';
import Screen from 'components/Screen';
import FundCard from 'components/FundCard';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 32px 24px;
  overflow-y: auto;
  flex: 1;
`;

export default function Comparacao() {
  const { selectedFunds } = useContext(FundsContext);

  return (
    <Screen>
      <Container>
        <TopBar title="Comparação" rightIcon={<MdShare size={24} />} />

        <Content>
          {selectedFunds.map((fund) => (
            <FundCard isComparison fund={fund} key={fund.denom_social} />
          ))}
        </Content>
      </Container>
    </Screen>
  );
}

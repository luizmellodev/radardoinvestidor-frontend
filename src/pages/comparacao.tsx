import styled from 'styled-components';

import TopBar from 'components/TopBar';
import Screen from 'components/Screen';

import { MdShare } from 'react-icons/md';

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
  return (
    <Screen>
      <Container>
        <TopBar title="Comparação" rightIcon={<MdShare size={24} />} />

        <Content>
          <p>Conteúdo</p>
        </Content>
      </Container>
    </Screen>
  );
}

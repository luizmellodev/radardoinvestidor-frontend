import { useContext, useState } from 'react';
import styled from 'styled-components';
import { MdShare } from 'react-icons/md';

import { FundsContext } from 'contexts/Funds';

import TopBar from 'components/TopBar';
import Screen from 'components/Screen';
import FundCard from 'components/FundCard';
import Modal from 'components/Modal';

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

export const FundTitle = styled.p`
  margin: 20px 0 32px 0;
  text-align: center;
  letter-spacing: -1px;
  font-size: 24px;
  font-weight: bold;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  line-height: 24px;
`;

export const Info = styled.div`
  margin-bottom: 16px;

  p {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.textDescription};
  }

  span {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ModalSection = styled.p`
  margin: 32px 0 24px 0;
  font-family: Montserrat;
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
`;

export const CharacteristicRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  p {
    flex-wrap: wrap;
  }
`;

export default function Comparacao() {
  const { selectedFunds } = useContext(FundsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [detailedFund, setDetailedFund] = useState({});

  // const handleClickDetailButton = (fund: any) => {
  const handleClickDetailButton = () => {
    setIsModalOpen(true);
    // setDetailedFund(fund);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Screen>
        <Container>
          <TopBar title="Comparação" rightIcon={<MdShare size={24} />} />

          <Content>
            {selectedFunds.map((fund) => (
              <FundCard
                isComparison
                fund={fund}
                key={fund.denom_social}
                onClickDetails={() => handleClickDetailButton()}
              />
            ))}
          </Content>
        </Container>
      </Screen>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <FundTitle>Warren Green</FundTitle>
        <Info>
          <p>CNPJ</p>
          <span>61.562.112/0001-20</span>
        </Info>
        <Info>
          <p>Tipo de fundo</p>
          <span>FACFIF</span>
        </Info>
        <Info>
          <p>Classe</p>
          <span>Fundo Cambial</span>
        </Info>
        <Info>
          <p>Patrimônio Líquido</p>
          <span>+ R$ 100 MI</span>
        </Info>

        <ModalSection>Informações cadastrais</ModalSection>

        <Info>
          <p>Situação</p>
          <span>Em funcionamento normal</span>
        </Info>

        <Info>
          <p>Data de registro</p>
          <span>27/02/2007</span>
        </Info>

        <Info>
          <p>Data de início de atividade</p>
          <span>06/08/2003</span>
        </Info>

        <ModalSection>Características do fundo</ModalSection>

        <CharacteristicRow>
          <p>Valor total da carteira do fundo</p>
          <p>R$ 1.127.645,45</p>
        </CharacteristicRow>
        <CharacteristicRow>
          <p>Patrimônio líquido</p>
          <p>R$ 1.542.688,25</p>
        </CharacteristicRow>
        <CharacteristicRow>
          <p>Valor da cota</p>
          <p>R$ 27,31</p>
        </CharacteristicRow>
        <CharacteristicRow>
          <p>Captações realizadas no dia</p>
          <p>35.768,23</p>
        </CharacteristicRow>
        <CharacteristicRow>
          <p>Resgates pagos no dia</p>
          <p>R$ 2.212.958,96</p>
        </CharacteristicRow>
        <CharacteristicRow>
          <p>Número de cotistas</p>
          <p>7695</p>
        </CharacteristicRow>
      </Modal>
    </>
  );
}

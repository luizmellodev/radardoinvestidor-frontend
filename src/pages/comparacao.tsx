import { useContext, useState } from 'react';
import styled from 'styled-components';
import { MdShare } from 'react-icons/md';

import { FundsContext } from 'contexts/Funds';
import {formatCnpj} from 'utils/stringHelper';

import TopBar from 'components/TopBar';
import Screen from 'components/Screen';
import FundCard from 'components/FundCard';
import Modal from 'components/Modal';
import { useRouter } from 'next/router';
import api from 'api';

import Chart from 'components/Chart';

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
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailedFund, setDetailedFund] = useState({});

  const handleClickDetailButton = async (cnpj:any) => {
    const formatedCnpj = formatCnpj(cnpj);
    const { data } = await api.get(`/fundo/${formatedCnpj}`);
    setIsModalOpen(true);
    setDetailedFund(data);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if(selectedFunds.length == 0){
    router.push("/");
  }
  return (
    <>
      <Screen>
        <Container>
          <TopBar title="Comparação" rightIcon={<MdShare size={24} />} />
          <Chart test={[52, 66, 78, 96, 41]} />
          <Content>
            {selectedFunds.map((fund) => (
              <FundCard
                isComparison
                isSelected
                fund={fund}
                key={fund.denom_social}
                onClickDetails={() => handleClickDetailButton(fund.cnpj_fundo)}
              />
            ))}
          </Content>
        </Container>
      </Screen>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} details={detailedFund}/>  
    </>
  );
}

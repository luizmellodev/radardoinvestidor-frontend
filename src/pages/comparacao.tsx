import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { MdShare } from 'react-icons/md';

import { FundsContext } from 'contexts/Funds';
import {formatCnpj, formatDate} from 'utils/stringHelper';
import api from 'api';
import theme from 'styles/theme';

import TopBar from 'components/TopBar';
import Screen from 'components/Screen';
import FundCard from 'components/FundCard';
import Modal from 'components/Modal';
import Chart from 'components/Chart';
import Loading from 'components/Loading';


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

interface IDatasets {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}


export default function Comparacao() {
  const { selectedFunds } = useContext(FundsContext);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailedFund, setDetailedFund] = useState({});
  const [rentabFunds, setRentabFunds] = useState<any[]>([])
  const [labels, setLabels] = useState<string[]>([]);
  const [datasets, setDatasets] = useState<IDatasets[]>([]);

  useEffect(() => {
    const fetchProfitability = async () => {
      try {
        setIsLoading(true)

        const selectedsCnpj = selectedFunds.map((fund) => fund.cnpj_fundo)

        const { data } = await api.get('/rentabilidade', {
          params: {
            fundos: selectedsCnpj,
          }
        });

        setRentabFunds(data)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfitability();
  }, [])

  useEffect(() => {
    if (!rentabFunds.length) return;

    const firstFund = rentabFunds[0];
    const labels = firstFund.rentab.map((rentab: any) => formatDate(rentab.date, { month: "numeric", day: "numeric" }))

    setLabels(labels)

    const diffs = rentabFunds.map((fund: any) => (
      fund.rentab.map((rentab: any) => rentab.diff)
    ))

    const datasets = selectedFunds.map((fund, index) => ({
      label: fund.denom_social.length > 20 ? fund.denom_social.substr(0, 20) : fund.denom_social,
      backgroundColor: theme.colors.graph[index],
      borderColor: theme.colors.graph[index],
      data: fund.hidden ? [] : diffs[index]
    }))

    setDatasets(datasets);
  }, [rentabFunds, selectedFunds])

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
          {isLoading ? (
            <Loading />
          ) : (
            <Chart labels={labels} datasets={datasets} />
          )}
          <Content>
            {selectedFunds.map((fund, index) => (
              <FundCard
                index={index}
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

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
import Button from 'components/Button';
import DataFilter from 'components/DataFilter';


export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 15px 24px;
  overflow-y: auto;
  flex: 1;
`;

export const FilterContent = styled.div`
  padding: 15px 24px;
`;

export const ChartContainer = styled.div<IChartContainer>`
  margin: ${(props) => (props.isLoading ? "15px" : "auto 15px")};
`;


export const TitleChart = styled.strong<any>`
  font-family: Montserrat;
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  border-bottom: 1px solid #e3e4eb;
  margin: 15px 24px 12px;
`;

export const TitleFundos = styled.strong<any>`
  font-family: Montserrat;
  font-size: 20px;
  line-height: 28px;
  border-bottom: 1px solid #e3e4eb;
  font-weight: bold;
  margin: 15px auto;
  display:flex;
`;
interface IChartContainer{
  isLoading: boolean;
}
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
            from: new Date(2021,4,1).toISOString().split("T")[0],
            to: new Date().toISOString().split("T")[0]
          }
        });
        console.log(data);
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
    const fundsCnpj: string[] = selectedFunds.map(fund => formatCnpj(fund.cnpj_fundo));
    router.push({pathname: 'comparacao', query: {fundos: fundsCnpj.join(',')}});
  }, [selectedFunds])

  useEffect(() => {
    if(!selectedFunds.length)
      router.push("/");
    if (!rentabFunds.length) return;

    const firstFund = rentabFunds[0];
    const labels = firstFund.rentab.map((rentab: any) => formatDate(rentab.date, { month: "numeric", day: "numeric" }))

    setLabels(labels)

    const diffs = rentabFunds.map((fund: any) => (
      
      fund.rentab.map((rentab: any) => {
        // if(!rentab.diff) return;
        // console.log(typeof(new Intl.NumberFormat('en-US',{style:'percent', maximumFractionDigits: 2}).format(rentab?.diff)));
        // return new Intl.NumberFormat('en-US',{style:'percent', maximumFractionDigits: 2}).format(rentab?.diff)
        return rentab.diff;
      })
    ))

    const datasets = selectedFunds.map((fund, index) => ({
      label: fund.denom_social.length > 20 ? fund.denom_social.substr(0, 20) : fund.denom_social,
      backgroundColor: theme.colors.graph[index],
      borderColor: theme.colors.graph[index],
      data: fund.hidden ? [] : diffs[index]
    }))
    const cdiRentab:any = rentabFunds.find( fund =>
        fund.name === "CDI"
      )
      console.log(cdiRentab);
    const CDI = {
      label: "CDI",
      backgroundColor: theme.colors.text,
      borderColor: theme.colors.text,
      data: cdiRentab.rentab.map((rentab: any) =>{
        return rentab.diff;
      })
    }
    setDatasets([...datasets, CDI]);
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

  const onChangeFilter = (value: string) => {
    console.log(value);
  }

  return (
    <>
      <Screen>
        <Container>
          <TopBar title="Comparação" rightIcon={<MdShare size={24} />} />
          <TitleChart>Histórico de Rendimentos</TitleChart>
          <ChartContainer isLoading={isLoading}>
            {isLoading ? (
              <div style={{ position: 'relative', width: '100wv', height: '40vh' }}>
                <Loading/>
              </div>
            ) : (
              <Chart labels={labels} datasets={datasets} />
            )}
          </ChartContainer>
          <FilterContent>
            <DataFilter onChange={onChangeFilter} />
          </FilterContent>
          <Content>
          <Button onClick={() => router.push("/")}>Adicionar</Button>
          <TitleFundos>Fundos</TitleFundos>
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

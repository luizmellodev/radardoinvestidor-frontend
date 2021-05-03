import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SubmitButton from 'components/SubmitButton';
import Screen from 'components/Screen';
import HeaderHome from 'components/HeaderHome';
import FundCard from 'components/FundCard';
import Loading from 'components/Loading';
import Tabs from 'components/Tabs';
import Tab from 'components/Tabs/Tab';
import { FundsContext } from 'contexts/Funds';
export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.header`
  padding-bottom: 40px;
`;
export const List = styled.div`
  margin-top: 32px;
`;
export const Footer = styled.footer`
  padding-top: 24px;
`;
export default function Home() {
  const router = useRouter();
  const { foundedFunds, filterFundByName, selectedFunds } = useContext(
    FundsContext
  );
  const handleCompareButtonClick = () => {
    router.push('/comparacao');
  };
  const handleOnChangeText = async (searchText: string) => {
    filterFundByName(searchText);
  };
  const tabSelectedFunds: string =
    (('Selecionados (' + (selectedFunds.length as any)) as string) + ')';
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <Screen>
      <Container>
        <Header>
          <HeaderHome onChangeHandler={handleOnChangeText} />
        </Header>
        <Tabs>
          <Tab title="Encontrados">
            {isLoading ? (
              <Loading />
            ) : (
              <List>
                {foundedFunds.map((fund) => (
                  <FundCard fund={fund} key={fund.razaoSocial} />
                ))}
              </List>
            )}
          </Tab>
          {selectedFunds.length ? (
            <Tab title={tabSelectedFunds}>
              <List>
                {selectedFunds.map((fund) => (
                  <FundCard fund={fund} key={fund.razaoSocial} />
                ))}
              </List>
            </Tab>
          ) : (
            <Tab title="Selecionados">
              <List>
                <p>Nenhum Fundo Selecionado</p>
              </List>
            </Tab>
          )}
        </Tabs>
        <Footer>
          <SubmitButton
            isDisable={!selectedFunds.length}
            onClick={handleCompareButtonClick}
          >
            Comparar Fundos
          </SubmitButton>
        </Footer>
      </Container>
    </Screen>
  );
}

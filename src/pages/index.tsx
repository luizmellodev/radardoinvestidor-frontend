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
import api from 'api';

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
  padding-left: 24px;
  padding-right: 24px;
`;

export const Footer = styled.footer`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`;

export default function Home() {
  const router = useRouter();
  const { selectedFunds, filteredFunds, updateFundsList } = useContext(
    FundsContext
  );

  const handleCompareButtonClick = () => {
    router.push('/comparacao');
  };

  const handleOnChangeText = async (searchText: string) => {
    setSearchText(searchText);
  };

  const tabSelectedFunds = `Selecionados ${
    selectedFunds.length ? `(${selectedFunds.length}) ` : ''
  }`;

  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);

    const fetchFunds = async () => {
      setIsLoading(true);

      const { data } = await api.get('/pesquisa', {
        params: {
          s: searchText,
        },
      });

      updateFundsList(data);
      setIsLoading(false);

      console.log(data);
    };

    fetchFunds();
  }, [searchText]);

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
                {filteredFunds.map((fund) => (
                  <FundCard fund={fund} key={fund.denom_social} />
                ))}
              </List>
            )}
          </Tab>
          <Tab title={tabSelectedFunds}>
            {selectedFunds.length ? (
              <List>
                {selectedFunds.map((fund) => (
                  <FundCard fund={fund} key={fund.denom_social} />
                ))}
              </List>
            ) : (
              <List>
                <p>Nenhum Fundo Selecionado</p>
              </List>
            )}
          </Tab>
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

import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import api from 'api';
import { FundsContext } from 'contexts/Funds';
import useDebounce from 'hooks/useDebounce';

import SubmitButton from 'components/SubmitButton';
import Screen from 'components/Screen';
import HeaderHome from 'components/HeaderHome';
import FundCard from 'components/FundCard';
import Loading from 'components/Loading';
import Tabs from 'components/Tabs';
import Tab from 'components/Tabs/Tab';

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
  height: 100%;
`;

export const Footer = styled.footer`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`;

export const Center = styled.p`
  flex: 1;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const router = useRouter();
  const {
    selectedFunds,
    foundedFunds,
    updateFetchedFunds,
    resetHiddenState,
  } = useContext(FundsContext);

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

  const debouncedSearchText = useDebounce(searchText, 1000);

  useEffect(() => {
    resetHiddenState();
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, [searchText]);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        setIsLoading(true);

        const { data } = await api.get('/pesquisa', {
          params: {
            s: debouncedSearchText,
          },
        });

        console.log(debouncedSearchText, data);
        updateFetchedFunds(data);
      } catch (e) {
        console.error(e);
        updateFetchedFunds([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFunds();
  }, [debouncedSearchText]);

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
            ) : foundedFunds.length ? (
              <List>
                {foundedFunds.map((fund) => (
                  <FundCard fund={fund} key={fund.denom_social} />
                ))}
              </List>
            ) : (
              <Center>Nenhum fundo encontrado</Center>
            )}
          </Tab>
          <Tab title={tabSelectedFunds}>
            {selectedFunds.length ? (
              <List>
                {selectedFunds.map((fund) => (
                  <FundCard isSelected fund={fund} key={fund.denom_social} />
                ))}
              </List>
            ) : (
              <Center>Nenhum fundo selecionado</Center>
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

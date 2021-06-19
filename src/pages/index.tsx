import { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import api from 'api';
import { FundsContext } from 'contexts/Funds';
import {FilterProvider } from 'contexts/Filters';
import useDebounce from 'hooks/useDebounce';

import SubmitButton from 'components/SubmitButton';
import Screen from 'components/Screen';
import HeaderHome from 'components/HeaderHome';
import FundCard from 'components/FundCard';
import Loading from 'components/Loading';
import Tabs from 'components/Tabs';
import Tab from 'components/Tabs/Tab';
import { formatCnpj } from 'utils/stringHelper';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding-bottom: 40px;
`;

const List = styled.div`
  margin-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
  height: 100%;
`;

const BottomLoading = styled.div`
  padding-top: 24px;
;
`
const BottomLoadingSearch = styled.div`
    position: relative;
    width: 100wv;
    height: 40vh;
;
`

const Footer = styled.footer`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`;

const Center = styled.p`
  flex: 1;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true)

  const router = useRouter();
  const debouncedSearchText = useDebounce(searchText, 1000);
  const {
    selectedFunds,
    foundedFunds,
    updateFetchedFunds,
    resetHiddenState,
    resetFoundedFunds
  } = useContext(FundsContext);
  const observerLastItem = useRef<any>();

  const lastFundElementRef = useCallback(node => {
    if (isLoading) {
      return
    }

    if (observerLastItem?.current) {
      observerLastItem.current.disconnect()
    }

    observerLastItem.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setSkip(prevState => prevState + 50)
      }
    })

    if (node) {
      observerLastItem.current.observe(node)
    }
  }, [isLoading, hasMore, foundedFunds])

  const handleCompareButtonClick = () => {
    const fundsCnpj: string[] = selectedFunds.map(fund => formatCnpj(fund.cnpj_fundo));
    router.push({pathname: 'comparacao', query: {fundos: fundsCnpj.join(',')}});
  };

  const handleOnChangeText = async (searchText: string) => {
    setSearchText(searchText);
    setSkip(0)
  };

  const tabSelectedFunds = `Selecionados ${
    selectedFunds.length ? `(${selectedFunds.length}) ` : ''
  }`;

  useEffect(() => {
    resetHiddenState();
  }, []);

  useEffect(() => {
    setIsLoading(!!searchText);
  }, [searchText]);

  useEffect(() => {
    resetFoundedFunds()
  }, [debouncedSearchText]);

  useEffect(() => {
    console.log('FOUNDED FUNDS', foundedFunds)
  }, [foundedFunds])

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        setIsLoading(true);

        const { data } = await api.get('/pesquisa', {
          params: {
            s: debouncedSearchText,
            skip,
          },
        });

        console.log('FETCHED FUNDS', debouncedSearchText, data);
        updateFetchedFunds(data);
        setHasMore(data.length > 0)
      } catch (e) {
        console.error(e);
        updateFetchedFunds([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFunds();
  }, [debouncedSearchText, skip]);

  return (
    <Screen>
      <Container>
          <Header>
            <HeaderHome onChangeHandler={handleOnChangeText}/>
          </Header>
        <Tabs>
          <Tab title="Encontrados">
            {isLoading && skip === 0 ? (
              <BottomLoadingSearch>
                 <Loading />
              </BottomLoadingSearch>
            ) : (
              foundedFunds.length ? (
                <List>
                  {foundedFunds.map((fund, index, list) =>
                    <FundCard ref={list.length === index + 1 ? lastFundElementRef : undefined} fund={fund} key={fund.denom_social} />
                  )}
                  {isLoading && hasMore && (
                    <BottomLoading>
                      <Loading />
                    </BottomLoading>
                  )}
                </List>
              ) : (
                <Center>Nenhum fundo encontrado</Center>
              )
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
            onClick={() => handleCompareButtonClick()}
          >
            Comparar Fundos
          </SubmitButton>
        </Footer>
      </Container>
    </Screen>
  );
}

import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import SubmitButton from 'components/SubmitButton';
import Screen from 'components/Screen';
import SearchBar from 'components/SearchBar';
import HeaderHome from 'components/HeaderHome';
import FundCard from 'components/FundCard';
import Loading from 'components/Loading';

import {FundsContext} from 'contexts/Funds';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding-bottom: 40px;
`;

export const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Footer = styled.footer`
  padding-top: 24px;
`;

export default function Home() {
  const router = useRouter();
  const { funds, filterFundByName, selectedFunds } = useContext(FundsContext);

  const [searchText, setSearchText] = useState('');

  const handleCompareButtonClick = () => {
    router.push('/comparacao');
  };

  const handleOnChangeText = async (searchText: string) => {
    setSearchText(searchText);
    filterFundByName(searchText);
  };

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
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <List>
              {selectedFunds.length && !searchText ? (
                selectedFunds.map((fund) => (
                  <FundCard fund={fund} key={fund.razaoSocial} />
                ))
              ) : (
                funds.map((fund) => (
                  <FundCard fund={fund} key={fund.razaoSocial} />
                ))
              )}
            </List>
            <Footer>
              <SubmitButton onClick={handleCompareButtonClick}>
                Comparar Fundos
              </SubmitButton>
            </Footer>
          </>
        )}
      </Container>
    </Screen>
  );
}

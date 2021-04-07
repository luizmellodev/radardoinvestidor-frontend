import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import SubmitButton from 'components/SubmitButton';
import Screen from 'components/Screen';
import FundCard from 'components/FundCard';
import Loading from 'components/Loading';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header``;

export const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Footer = styled.footer`
  padding-top: 24px;
`;

export default function Home() {
  const router = useRouter();

  const handleCompareButtonClick = () => {
    router.push('/comparacao');
  };
  const fundList = [
    {
      razaoSocial: 'Warren tec',
      cnpj: '29.577.652/0001-75',
      classe: 'Renda Variável',
      patrimonioLiquido: '+ R$ 100 mi',
      cotistas: '+ 50 mil',
    },
    {
      razaoSocial: 'Warren tec 2',
      cnpj: '29.577.652/0001-75',
      classe: 'Renda Variável',
      patrimonioLiquido: '+ R$ 100 mi',
      cotistas: '+ 50 mil',
    },
    {
      razaoSocial: 'Warren tec 3',
      cnpj: '29.577.652/0001-75',
      classe: 'Renda Variável',
      patrimonioLiquido: '+ R$ 100 mi',
      cotistas: '+ 50 mil',
    },
    {
      razaoSocial: 'Warren tec 3',
      cnpj: '29.577.652/0001-75',
      classe: 'Renda Variável',
      patrimonioLiquido: '+ R$ 100 mi',
      cotistas: '+ 50 mil',
    },
    {
      razaoSocial: 'Warren tec 3',
      cnpj: '29.577.652/0001-75',
      classe: 'Renda Variável',
      patrimonioLiquido: '+ R$ 100 mi',
      cotistas: '+ 50 mil',
    },
    {
      razaoSocial: 'Warren tec 3',
      cnpj: '29.577.652/0001-75',
      classe: 'Renda Variável',
      patrimonioLiquido: '+ R$ 100 mi',
      cotistas: '+ 50 mil',
    },
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Screen>
      <Container>
        <Header>Header</Header>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <List>
              {fundList.map((fund) => (
                <FundCard fund={fund} key={fund.razaoSocial} />
              ))}
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

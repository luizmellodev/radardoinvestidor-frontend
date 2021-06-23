import Screen from 'components/Screen';
import TopBar from 'components/TopBar';
import styled from 'styled-components';
import router from 'next/router';
import FilterSection from 'components/FilterSection';
import SubmitButton from 'components/SubmitButton';

const Container = styled.div`
  /* height: 100%; */
  flex: 1;
  overflow-y: scroll;
`;
const Footer = styled.div`
  padding: 0px 24px 24px;
`;
const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
export default function Filtro() {
  const classesOptions = [
    'Fundo de Ações',
    'Fundo Cambial',
    'Fundo Multimercado',
    'Fundo de Renda Fixa',
  ];
  const cotistasOptions = [50000, 100000, 250000, 500000, 1000000];
  const patrimonioOptions = [
    1000000,
    100000000,
    2500000,
    500000000,
    1000000000,
  ];

  return (
    <Screen>
      <Body>
        <TopBar title="Filtros" />
        <Container>
          <FilterSection
            title={'Classe do patrimônio'}
            type={'classes'}
            options={classesOptions}
          />
          <FilterSection
            title={'Número de cotistas'}
            type={'cotistas'}
            options={cotistasOptions}
          />
          <FilterSection
            title={'Patrimônio Liquido'}
            type={'patrimonio'}
            options={patrimonioOptions}
          />
        </Container>
        <Footer>
          <SubmitButton onClick={() => router.push('/')}>Filtrar</SubmitButton>
        </Footer>
      </Body>
    </Screen>
  );
}

import { FilterContext, FilterProvider } from 'contexts/Filters';
import { useContext, useEffect, useState } from 'react';
import Screen from 'components/Screen';
import TopBar from 'components/TopBar';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import FilterSection from 'components/FilterSection';
import SubmitButton from 'components/SubmitButton';

const Container = styled.div`
  /* height: 100%; */
  overflow-y: scroll;
  margin-top: 56px;
`;
const Footer = styled.div`
  padding: 0px 24px 32px;

`;
const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
`;
export default function Filtro() {
  const {selectedFilters,updateFilter} = useContext(FilterContext);

  const classesOptions = [  "Fundo de Ações", "Renda Variável", "Fundo Cambial","Renda Fixa"];
  const cotistasOptions = [-50000, 50000, 100000, 250000, 500000];
  const patrimônioOptions = [-1000000, 1000000, 100000000, 500000000, 1000000000];
  
  // useEffect(() =>{
  //   if(!hasStartedByHome)
  //     useRouter().push('/');
  // },[hasStartedByHome])

  return (
    <Screen>
        <FilterProvider>
          <Header>
            <TopBar title="Filtros" />
          </Header>
          <Container>
              <FilterSection title={"Classe do patrimônio"} type={"classe"} options={classesOptions}/>
              <FilterSection title={"Número de cotistas"} type={"cotistas"} options={cotistasOptions}/>
              <FilterSection title={"Patrimônio Liquido"} type={"patrimonio"} options={patrimônioOptions}/>
          </Container>
        </FilterProvider>
        <Footer>
          <SubmitButton onClick={() => useRouter().push("/")}>Filtrar</SubmitButton>
        </Footer>
    </Screen>
  );
}
export const NavegatingToFilter = () => {
  const router = useRouter()
  router.push("/filtro" )
};

import { FilterContext, FilterProvider } from 'contexts/Filters';
import { useContext, useEffect } from 'react';
import Screen from 'components/Screen';
import TopBar from 'components/TopBar';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FilterSection from 'components/FilterSection';
import SubmitButton from 'components/SubmitButton';


export default function Filtro() {
  const {hasStartedByHome} = useContext(FilterContext);

  const classesOptions = [  "Fundo de Ações", "Renda Variável", "Fundo Cambial","Renda Fixa"];
  const cotistasOptions = [-50000, 50000, 100000, 250000, 500000];
  const patrimônioOptions = [-1000000, 1000000, 100000000, 500000000, 1000000000];
  const router = useRouter();
  // useEffect(() =>{
  //   if(!hasStartedByHome)
  //     useRouter().push('/');
  // },[hasStartedByHome])

  return (
    <Screen>
      <FilterProvider>
        <TopBar title="Filtros" />
        <FilterSection title={"Classe do patrimônio"} type={"classe"} options={classesOptions}/>
        <FilterSection title={"Nímero de cotistas"} type={"cotistas"} options={cotistasOptions}/>
        <FilterSection title={"Patrimônio Liquido"} type={"patrimonio"} options={patrimônioOptions}/>
      </FilterProvider>
      <SubmitButton onClick={() => router.push("/")}>Filtrar</SubmitButton>
    </Screen>
  );
}

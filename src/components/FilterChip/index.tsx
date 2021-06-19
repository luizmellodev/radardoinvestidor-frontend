import { Container } from './styles';
import {formatCotistas, formatPatrimonio} from 'utils/stringHelper';
import { useContext } from 'react';
import { FilterContext } from 'contexts/Filters';
import router from 'next/router';

function FilterChip() {
  const {selectedFilters} = useContext(FilterContext);
  return (
    <Container>  
      {
        selectedFilters.classes.map((classe, index) =>{
          return <button key={index} onClick={() => router.push('/filtro')}>{classe}</button>
        }) 
      }
     { 
       selectedFilters.patrimonio !== 0 &&
        <button onClick={() => router.push('/filtro')}>{formatPatrimonio(selectedFilters.patrimonio)}</button>
    }
    {
      selectedFilters.cotistas !== 0 && 
        <button onClick={() => router.push('/filtro')}>{formatCotistas(selectedFilters.cotistas)}</button>
    }
    </Container>
  );
};

export default FilterChip;

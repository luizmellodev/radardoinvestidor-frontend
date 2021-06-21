import { Container } from './styles';
import {
  formatCotistas,
  formatPatrimonio,
  formatFilterLabel,
} from 'utils/stringHelper';
import { useContext } from 'react';
import { FilterContext } from 'contexts/Filters';
import router from 'next/router';

function FilterChip() {
  const { selectedFilters } = useContext(FilterContext);
  return (
    <Container>
      {selectedFilters.classes.map((classe: string, index) => {
        return (
          <button key={index} onClick={() => router.push('/filtro')}>
            {formatFilterLabel(classe, 'classes')}
          </button>
        );
      })}
      {selectedFilters.patrimonio !== 0 && (
        <button onClick={() => router.push('/filtro')}>
          {formatPatrimonio(selectedFilters.patrimonio)} de Patrimônio
        </button>
      )}
      {selectedFilters.cotistas !== 0 && (
        <button onClick={() => router.push('/filtro')}>
          {formatCotistas(selectedFilters.cotistas)} de Cotistas
        </button>
      )}
    </Container>
  );
}

export default FilterChip;

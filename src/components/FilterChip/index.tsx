import { Container } from './styles';
import {formatCotistas, formatPatrimonio} from 'utils/stringHelper';

interface FilterChipProps {
  router: (value: string) => any;
}

function FilterChip({ router}: FilterChipProps) {
  return (
    <Container>  
     <button onClick={() => router('/filtro')}>Renda Fixa</button>
     <button onClick={() => router('/filtro')}>{formatCotistas(-50000)}</button>
     <button onClick={() => router('/filtro')}>{formatPatrimonio(1000000)}</button>
    </Container>
  );
};

export default FilterChip;

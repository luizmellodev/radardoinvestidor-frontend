import { Container } from './styles';

interface FilterChipProps {
  labels: string[];
}

function FilterChip({labels}: FilterChipProps) {
  return (
    <Container>
      {labels.map(l => <button>{l}</button>)}
    </Container>
  );
};

export default FilterChip;

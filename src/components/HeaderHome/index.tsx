import SearchBar from 'components/SearchBar';
import { Container } from './styles';
import FilterChip from 'components/FilterChip';

interface HeaderHomeProps {
  onChangeHandler: (value: string) => any;
}

function HeaderHome({ onChangeHandler }: HeaderHomeProps) {
  return (
    <Container>
      <img src="/logo-home.png" style={{ paddingBottom: '20px' }} />
      <SearchBar onChange={onChangeHandler} />
      <FilterChip labels ={["Renda Fixa", "Renda Variável", "FII", "+R$ 50 MIL", "500 Bi"]}></FilterChip>
    </Container>
  );
}

export default HeaderHome;

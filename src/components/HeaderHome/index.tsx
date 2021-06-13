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
      <SearchBar onChange={onChangeHandler}/>
    </Container>
  );
}

export default HeaderHome;

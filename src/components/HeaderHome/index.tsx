import SearchBar from 'components/SearchBar';
import { Container } from './styles';
import FilterChip from 'components/FilterChip';

interface HeaderHomeProps {
  onChangeHandler: (value: string) => any;
  router: (value: string) => any;
}
function HeaderHome({ onChangeHandler, router }: HeaderHomeProps) {
  return (
    <Container>
      <img src="/logo-home.png" style={{ paddingBottom: '20px' }} />
      <SearchBar onChange={onChangeHandler} router={router}/>
      <FilterChip router={router} ></FilterChip>
    </Container>
  );
}

export default HeaderHome;

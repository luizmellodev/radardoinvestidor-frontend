import SearchBar from 'components/SearchBar';
import { Container } from './styles';

interface HeaderHomeProps {
  onChangeHandler: (value: string) => any;
  router: (value: string) => any;
}

function HeaderHome({ onChangeHandler, router }: HeaderHomeProps) {
  return (
    <Container>
      <img src="/logo-home.png" style={{ paddingBottom: '20px' }} />
      <SearchBar onChange={onChangeHandler} router={router}/>
    </Container>
  );
}

export default HeaderHome;

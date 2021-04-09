import SearchBar from 'components/SearchBar';
import { Container } from './styles';

interface HeaderHomeProps {
  onChangeHandler: (value: string) => any;
}

function HeaderHome({ onChangeHandler }: HeaderHomeProps) {
  return (
    <Container>
      <img src="/logo-home.png" style={{paddingBottom:"20px"}}/>
      <SearchBar onChange={onChangeHandler} />
    </Container>
  );
};

export default HeaderHome;

import { Container, Input, Row } from './styles';
import { MdSearch, MdFilterList } from 'react-icons/md';
import theme from 'styles/theme';
interface SearchBarProps {
  onChange: (value: string) => any;
  router: (value: string) => any;
}

function SearchBar({ onChange, router }: SearchBarProps) {
  return (
    <Container>
      <Row>
        <MdSearch size={24} color={theme.colors.text} />
        <Input
          placeholder={'Buscar'}
          onChange={(inputText) => onChange(inputText.target.value)}/>
        <MdFilterList size={24} color={theme.colors.text} onClick={() => router('/filtro')}/>
      </Row>
    </Container>
  );
}

export default SearchBar;

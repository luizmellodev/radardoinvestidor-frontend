import { Container, Input, Row } from './styles';
import { MdSearch, MdFilterList } from 'react-icons/md';
import theme from 'styles/theme';
import { NavegatingToFilter } from 'pages/filtro';
interface SearchBarProps {
  onChange: (value: string) => any;
}

function SearchBar({ onChange }: SearchBarProps) {
  return (
    <Container>
      <Row>
        <MdSearch size={24} color={theme.colors.text} />
        <Input
          placeholder={'Buscar'}
          onChange={(inputText) => onChange(inputText.target.value)}/>
        <MdFilterList size={24} color={theme.colors.text} onClick={() => NavegatingToFilter()}/>
      </Row>
    </Container>
  );
}

export default SearchBar;

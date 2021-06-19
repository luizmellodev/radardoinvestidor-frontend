import { Container, Input, Row } from './styles';
import { MdSearch, MdFilterList } from 'react-icons/md';
import theme from 'styles/theme';
import router from 'next/router';
import { useContext } from 'react';
import { FilterContext } from 'contexts/Filters';
import styled from 'styled-components';
interface SearchBarProps {
  onChange: (value: string) => any;
}
const Button = styled.button<any>`
  background: transparent;
  border: none ;
`;

function SearchBar({ onChange }: SearchBarProps) {
  const {updateHasStartedByHome} = useContext(FilterContext);

  const handleFilterScreen = () =>{
    updateHasStartedByHome;
    router.push("/filtro");
  }
  return (
    <Container>
      <Row>
        <MdSearch size={24} color={theme.colors.text} />
        <Input
          placeholder={'Buscar'}
          onChange={(inputText) => onChange(inputText.target.value)}/>
          <Button onClick={handleFilterScreen}>
            <MdFilterList size={24} color={theme.colors.text} />
          </Button>
      </Row>
    </Container>
  );
}

export default SearchBar;

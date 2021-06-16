import { Container, Input, Row } from './styles';
import { MdContentCopy } from 'react-icons/md';
import theme from 'styles/theme';

interface SearchBarProps {
  onChange: (value: string) => any;
}

function UrlBar({ onChange }: SearchBarProps) {
  return (
    <Container>
      <Row>
        <Input
         readOnly
         value={window.location.href}/>

        <button>
          <MdContentCopy size={24} color={theme.colors.text} />
          </button> 
      </Row>
    </Container>
  );
}

export default UrlBar;

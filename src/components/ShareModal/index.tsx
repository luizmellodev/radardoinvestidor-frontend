import { MdClose } from 'react-icons/md';
import SearchBar from 'components/SearchBar';

import { Container, Header, Body, Footer} from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ShareModal({isOpen, onClose}: ModalProps) {
  if (!isOpen) return null;
  return (
    <Container>
      <Header>
        <p>Compartilhar Fundos</p>
        <button onClick={onClose}>
          <MdClose size={24} />
        </button>
      </Header>
      <Body>
      <SearchBar
        onChange={() => {}} 
      />
      </Body>
      <Footer>
        <button onClick={onClose}>Fechar</button>
      </Footer>
    </Container>
  );
}

export default ShareModal;

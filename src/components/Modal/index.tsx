import { ReactNode } from 'react';
import { MdClose } from 'react-icons/md';

import { Container, Header, Body, Footer } from './styles';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Container>
      <Header>
        <p>Detalhes do produto</p>
        <button onClick={onClose}>
          <MdClose size={24} />
        </button>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <button onClick={onClose}>Fechar</button>
      </Footer>
    </Container>
  );
}

export default Modal;

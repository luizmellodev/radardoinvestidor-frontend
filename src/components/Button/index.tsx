import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void | undefined;
}

function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <Container disabled={disabled} onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;

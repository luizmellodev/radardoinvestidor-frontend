import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: any;
}

function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <Container disabled={disabled} onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;

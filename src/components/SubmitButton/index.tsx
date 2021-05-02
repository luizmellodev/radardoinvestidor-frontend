import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  children: React.ReactChild;
  onClick: () => any;
  isDisable?: boolean;
}

function SubmitButton({ onClick, children, isDisable }: ButtonProps) {
  return (
    <Container disabled={isDisable} onClick={onClick}>
      {children}
    </Container>
  );
}

export default SubmitButton;

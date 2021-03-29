import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  children: React.ReactChild;
  disabled?: boolean;
}

function Button({ children, disabled }: ButtonProps) {
  return <Container disabled={disabled}>{children}</Container>;
}

export default Button;

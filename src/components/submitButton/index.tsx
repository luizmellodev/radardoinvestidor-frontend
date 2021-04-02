import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  children: React.ReactChild;
  onClick: () => any;
}

function SubmitButton({ onClick, children }: ButtonProps) {
  return <Container onClick={onClick}>{children}</Container>;
}

export default SubmitButton;

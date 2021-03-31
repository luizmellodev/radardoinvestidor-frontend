import React from 'react';
import { Container } from './styles';

interface ButtonProps {
    children: React.ReactChild;
  }
  
  function SubmitButton({ children }: ButtonProps) {
    return <Container>{children}</Container>;
  }
  
  export default SubmitButton;
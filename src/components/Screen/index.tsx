import { ReactNode } from 'react';

import { Container } from './styles';

interface ScreenProps {
  children: ReactNode;
}

function Screen({ children }: ScreenProps) {
  return <Container>{children}</Container>;
}

export default Screen;

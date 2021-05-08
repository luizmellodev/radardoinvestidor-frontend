import { ReactNode } from 'react';

import { Container } from './styles';

interface TopBarProps {
  children: ReactNode;
}

function TopBar({ children }: TopBarProps) {
  return (
    <Container>
      <h1>TopBar</h1>
      {children}
    </Container>
  );
};

export default TopBar;

import React, { ReactNode } from 'react';
import { Container } from './styles';

type TabProps = {
  children: ReactNode;
  title: string;
};

function Tab({ children }: TabProps) {
  return <Container>{children}</Container>;
}

export default Tab;

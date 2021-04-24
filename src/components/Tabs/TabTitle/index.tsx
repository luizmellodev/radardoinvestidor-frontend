import React, { ReactNode, useCallback } from 'react';
import { Container } from './styles';

interface TabTitleProps {
  index: number;
  title: string;
  setSelectedTab: (index: number) => void;
}

function TabTitle({ index, title, setSelectedTab }: TabTitleProps) {
  const handleClickTab = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <Container>
      <button onClick={handleClickTab}>{title}</button>
    </Container>
  );
}

export default TabTitle;

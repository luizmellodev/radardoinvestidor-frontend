import React, { useCallback } from 'react';
import { Container } from './styles';

interface TabTitleProps {
  index: number;
  title: string;
  isActive: boolean;
  setSelectedTab: (index: number) => void;
}

function TabTitle({ index, title, setSelectedTab, isActive }: TabTitleProps) {
  const handleClickTab = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <Container isActive={isActive}>
      <button onClick={handleClickTab}>{title}</button>
    </Container>
  );
}

export default TabTitle;

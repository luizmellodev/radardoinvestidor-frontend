import React, { ReactNode, useCallback } from 'react';

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
    <li>
      <button onClick={handleClickTab}>{title}</button>
    </li>
  );
}

export default TabTitle;

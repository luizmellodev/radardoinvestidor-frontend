import React, { ReactNode } from 'react';

type TabProps = {
  children: ReactNode;
  title: string;
};

function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}

export default Tab;

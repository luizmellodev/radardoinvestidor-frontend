import React, { ReactElement, useState } from 'react';

import TabTitle from './TabTitle';
import { Container, TabList } from './styles';

type TabsProps = {
  children: ReactElement[];
};

function Tabs({ children }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container>
      <TabList>
        {children.map((tab, index) => (
          <TabTitle
            key={index}
            index={index}
            isActive={index === selectedTab}
            title={tab.props.title}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </TabList>
      {children[selectedTab]}
    </Container>
  );
}

export default Tabs;

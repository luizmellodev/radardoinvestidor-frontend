import React, { ReactElement, useState } from 'react';

import TabTitle from './TabTitle';
import { Container } from './styles';

type TabsProps = {
  children: ReactElement[];
};

function Tabs({ children }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <Container>
        {children.map((tab, index) => (
          <TabTitle
            key={index}
            index={index}
            title={tab.props.title}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </Container>
      {children[selectedTab]}
    </div>
  );
}

export default Tabs;

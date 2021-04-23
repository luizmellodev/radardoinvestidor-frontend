import React, { ReactElement, useState } from 'react';

import TabTitle from './TabTitle';

type TabsProps = {
  children: ReactElement[];
};

function Tabs({ children }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <ul>
        {children.map((tab, index) => (
          <TabTitle
            key={index}
            index={index}
            title={tab.props.title}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
}

export default Tabs;

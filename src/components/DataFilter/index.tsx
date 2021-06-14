import { useState } from 'react';

import { Filter } from './styles';

interface DataFilterProps {
  onChange: any;
}


const DataFilter = ({onChange}: DataFilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState("30D");

  return (
    <>
    <Filter isSelected={selectedFilter === "30D"} onClick={() => handleSelect("30D")}>
      30D
    </Filter>
    <Filter isSelected={selectedFilter === "3M"} onClick={() => handleSelect("3M")}>
      3M
    </Filter>
    <Filter isSelected={selectedFilter === "6M"} onClick={() => handleSelect("6M")}>
      6M
    </Filter>
    <Filter isSelected={selectedFilter === "12M"} onClick={() => handleSelect("12M")}>
      12M
    </Filter>
    <Filter isSelected={selectedFilter === "TUDO"} onClick={() => handleSelect("TUDO")}>
      TUDO
    </Filter>
    </>
  );

  function handleSelect(value: string) {
    setSelectedFilter(value);
    onChange(value);
  }
}

export default DataFilter;

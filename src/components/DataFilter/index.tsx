import { useState } from 'react';
import { Filter, CDIContainer,Container } from './styles';

interface DataFilterProps {
  onChange: any;
  isToHiddenCDI: boolean;
  handleOnClick: () => void;
}


const DataFilter = ({onChange, isToHiddenCDI, handleOnClick}: DataFilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState("30D");
  
    return (
    <Container>
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
      <CDIContainer>
        <Filter isSelected={isToHiddenCDI} onClick={() => handleOnClick()}>
          CDI
        </Filter>
      </CDIContainer>
    </Container>
  );

  function handleSelect(value: string) {
    setSelectedFilter(value);
    onChange(value);
  }
}

export default DataFilter;

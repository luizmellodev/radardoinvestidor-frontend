import { FilterContext } from 'contexts/Filters';
import { useState, useEffect, useContext } from 'react';
import { Button, Text } from './styles';

interface FilterButtonProps {
  type:string;
  value:string|number;
  label:string
}

export default function FilterButton({ label, type, value}: FilterButtonProps) {
  const {selectedFilters, updateFilter} = useContext(FilterContext);

  const [isClicked,setIsClicked] = useState(selectedFilters[type] === value);

  useEffect(() =>{
    setIsClicked(selectedFilters[type] === value);
    console.log(`filterButton ${selectedFilters[type]}`)
  },[selectedFilters]);

  const handleClick = () =>{
    console.log("handleClick clicked")
    if(isClicked){
      const newValue = typeof value === "string" ? "" : 0;
      updateFilter(type, newValue); 
    } 
    else 
      updateFilter(type, value);
    setIsClicked(!isClicked);
    console.log(selectedFilters)
  };

  return (
    <Button isClicked={isClicked} onClick={() => handleClick()}>
      <Text>
        {label}
      </Text>
    </Button>
  );
};


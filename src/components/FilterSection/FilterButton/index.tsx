import { FilterContext } from 'contexts/Filters';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Button, Text } from './styles';

interface FilterButtonProps {
  type:"classes" | "patrimonio" | "cotistas";
  value:string|number;
  label:string,
  status:boolean
}

export default function FilterButton({ label, type, value, status}: FilterButtonProps) {
  
  const [isClicked, setIsClicked] = useState(status);
  const { updateCacheFilter, selectedFilters} = useContext(FilterContext);
  
  useEffect(() =>{
    console.log("passei aqui ", selectedFilters);
    if(type === 'classes' && typeof value === 'string')
      setIsClicked(selectedFilters.classes.includes(value))
    else
      setIsClicked(selectedFilters[type] === value);
  },[selectedFilters]);


  return (
    <Button isClicked={isClicked} onClick={() => updateCacheFilter(type, value)}>
      <Text>
        {label}
      </Text>
    </Button>
  );
};


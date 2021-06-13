import { useState } from 'react';
import { ReactNode } from 'react';
import { Button, Text } from './styles';

interface FilterButtonProps {
  type:string;
  value:string|number;
  label:string
}

export default function FilterButton({ label, type, value}: FilterButtonProps) {
  const [isClicked,setIsClicked] = useState(false);

  const handleClick = () =>{
    console.log("clicked")
    setIsClicked(!isClicked);
  };

  return (
    <Button isClicked={isClicked} onClick={() => handleClick()}>
      <Text>
        {label}
      </Text>
    </Button>
  );
};


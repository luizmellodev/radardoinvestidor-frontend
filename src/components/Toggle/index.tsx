import { Dispatch, SetStateAction, useState } from 'react';
import Switch from "react-switch";
import theme from 'styles/theme';
import { Container } from './styles';

interface ToggleProps {
  labelON: Element;
  labelOFF?:Element;
  valueDefault: boolean
  handleValue: () => void;
}

function Toggle({valueDefault,labelOFF,labelON,handleValue }: ToggleProps) {
  const [isChecked,setIsChecked] = useState(!valueDefault);

  const handleChange = () =>{
    const newValue = !isChecked;
    setIsChecked(newValue);
    handleValue();
  }
  return (
    <Container>
      <Switch
        checked={isChecked}
        onChange={() => handleChange()}
        onColor={theme.colors.text}
        offColor={theme.colors.disabled}
        uncheckedIcon={<div></div>}
        checkedIcon={labelON}
        />
    </Container>
  );
}

export default Toggle;

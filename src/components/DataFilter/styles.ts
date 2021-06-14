import styled from 'styled-components';

interface FilterProps {
  isSelected: boolean;
}

export const Filter = styled.button<FilterProps>`
  background: ${(props) => (props.isSelected ? "#757680":"none")};
  color: ${(props) => (props.isSelected ? "#2E2D33":"#757680")};

  border: 0px;
  border-radius: 4px;
  padding: 2px 6px;
  font-family: 'Source Sans Pro';
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  flex-direction: row;
  
`
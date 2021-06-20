import styled from 'styled-components';
import theme from 'styles/theme';

interface FilterProps {
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;

`;

export const Filter = styled.button<FilterProps>`
  background: ${(props) => (props.isSelected ? theme.colors.filterClicked : "transparent")};
  color: ${(props) => (props.isSelected ? theme.colors.text : theme.colors.textDescription)};
  border: 0px;
  border-radius: 4px;
  padding: 2px 6px;
  font-family: 'Source Sans Pro';
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  flex-direction: row;
`;

export const CDIContainer = styled.div`
  flex: 1;
  text-align: right;
  display: inline-block;
`;
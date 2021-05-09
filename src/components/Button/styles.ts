import styled from 'styled-components';

export const Container = styled.button`
  border: 0px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 100px;
  padding: 6px 16px;
  font-family: 'Source Sans Pro';
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;

  :disabled {
    background: ${(props) => props.theme.colors.disabled};
    color: ${(props) => props.theme.colors.textDisabled};
  }
`;

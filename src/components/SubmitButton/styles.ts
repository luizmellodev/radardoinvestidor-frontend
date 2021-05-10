import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 12px;
  border: 0;
  padding: 16px 8px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;

  :disabled {
    background: ${(props) => props.theme.colors.disabled};
    color: ${(props) => props.theme.colors.textDisabled};
  }
`;

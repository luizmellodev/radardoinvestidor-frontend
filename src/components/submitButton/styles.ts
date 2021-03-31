import styled from 'styled-components';

export const Container = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 12px;
  border: 0;
  padding: 20px 80px;
  
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;
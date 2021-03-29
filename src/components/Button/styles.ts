import styled from 'styled-components';

export const Container = styled.button`
  background: ${(props) =>
    props.disabled ? 'green' : props.theme.colors.primary};
  padding: 20px 40px;
  border-radius: 100px;
  border: 0;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

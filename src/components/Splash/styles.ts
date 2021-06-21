import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

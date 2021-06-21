import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px 24px;
`;
export const ButtonSection = styled.div<any>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: line;
  margin: 8px 0;
  align-content: space-around;
  & button {
    margin: 5px 5px 5px;
    min-width: 90px;
  }
`;

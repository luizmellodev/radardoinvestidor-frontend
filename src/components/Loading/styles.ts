import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  animation: blink 0.75s linear infinite;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

import styled from 'styled-components';

interface ContainerProps {
  rightIcon: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  height: 56px;

  p {
    color: white;
    font-family: 'Source Sans Pro';
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
    flex: 1;
    margin-right: ${(props) => (props.rightIcon ? 0 : '24px')};
  }

  button {
    background-color: transparent;
    border: 0;
  }

  svg {
    color: #fff;
  }
`;

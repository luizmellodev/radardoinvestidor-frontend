import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
`;

export const Header = styled.div`
  height: 56px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};

  p {
    flex: 1;
    margin-left: 24px;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text};
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    font-family: 'Source Sans Pro';
  }

  button {
    background-color: transparent;
    border: 0;

    svg {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const Body = styled.div`
  flex: 1;
  padding: 16px;
  min-height: 20px;
  overflow-y: auto;
`;

export const Footer = styled.div`
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  button {
    padding: 12px;
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Source Sans Pro';
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

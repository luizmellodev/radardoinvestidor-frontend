import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
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

export const FundTitle = styled.p`
  margin: 20px 0 32px 0;
  text-align: center;
  letter-spacing: -1px;
  font-size: 24px;
  font-weight: bold;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  line-height: 24px;
`;

export const Info = styled.div`
  margin-bottom: 16px;

  p {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.textDescription};
  }

  span {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ModalSection = styled.p`
  margin: 32px 0 24px 0;
  font-family: Montserrat;
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
`;

export const CharacteristicRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  p {
    flex-wrap: wrap;
  }
`;

import styled from 'styled-components';

interface IButton {
  isClicked: boolean;
}
export const Text = styled.p`
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 3px;
  padding: 0 5px;
  text-transform: uppercase;
`;
export const Button = styled.button<IButton>`
  background-color: ${(props) =>
    props.isClicked
      ? props.theme.colors.primary
      : props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 100px;
  color: ${(props) =>
    props.isClicked
      ? props.theme.colors.background
      : props.theme.colors.primary};
  height: 40px;
`;

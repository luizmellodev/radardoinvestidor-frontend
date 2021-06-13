import styled from 'styled-components';

export const Text = styled.p`
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    font-family: Source Sans Pro;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 12px;
`;
export const Button = styled.button<any>`
    background-color: ${(props) => (props.isClicked ? props.theme.colors.primary : props.theme.colors.background)};
    border: 3px solid ${(props) => props.theme.colors.primary};
    border-radius: 100px;
    color: ${(props) => (props.isClicked ? props.theme.colors.background : props.theme.colors.primary)};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: static;
    height: 40px;
    left: 0px;
    top: 0px;
`;
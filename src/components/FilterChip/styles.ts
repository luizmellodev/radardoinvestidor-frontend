import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 8px;
  padding-bottom: 12px;
  display: flex;
  overflow-x: auto;
  /* background-color: brown; */

  button {
    flex: 0 0 auto;
    background: ${(props) => props.theme.colors.text};
    color: #fff;
    border-radius: 24px;
    border: 0;
    align-items: center;
    font-family: Source Sans Pro;
    font-size: 14px;
    line-height: 18px;
    margin: 0 4px;
    padding: 2px 14px;
  }
`;

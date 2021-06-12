import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 8px;
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;


button{
  flex-direction: row; 
  flex: 0 0 auto;
  justify-content: flex-start; 
  background: ${(props) => props.theme.colors.text};
  color: #fff;
  border-radius: 24px;
  border: 0;
  align-self: auto;
  align-items: center;
  justify-content: center;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin: 0 4px;
  padding: 2px 14px;
}
`;

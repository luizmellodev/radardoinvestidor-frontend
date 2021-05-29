import styled, { css } from 'styled-components';

const isHiddenStyle = css`
  color: ${(props) => props.theme.colors.disabled};
  text-decoration: line-through;
`;

interface InfoProps {
  alignRight?: boolean;
}

interface FundTitleProps {
  isHidden: boolean;
  index?: number;
}

interface RowProps {
  marginBottom?: string;
}

export const Container = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 0 8px;
`;

export const Content = styled.div`
  border-top: 1px solid #e3e4eb;
  padding: 12px 0;
`;

export const Row = styled.div<RowProps>`
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FundTitle = styled.strong<FundTitleProps>`
  margin-right: 24px;
  font-family: Montserrat;
  font-size: 17px;
  line-height: 24px;
  color: ${({theme, index}) => typeof index !== 'undefined' ? theme.colors.graph[index] : theme.colors.text};
  ${(props) => props.isHidden && isHiddenStyle};
`;

export const Actions = styled.div`
  display: flex;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  margin-left: 12px;

  svg {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const FundFooter = styled.div`
  margin-top: 12px;
`;

export const Info = styled.div<InfoProps>`
  text-align: ${(props) => (props.alignRight ? 'right' : 'left')};

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

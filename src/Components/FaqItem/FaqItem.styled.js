import styled, { css } from 'styled-components';

export const FaqItemWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`;
export const FaqItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
export const FaqItemHeaderTitle = styled.div`
  font-family: Gilroy;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #ffffff;
  padding: 24px 0;
`;
export const FaqItemHeaderExpand = styled.div`
  line-height: 24px;
  width: 24px;
  text-align: center;
  ${(props) =>
    props.open === false &&
    css`
      transform: rotate(-180deg);
    `}
`;

export const FaqItemContent = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #7a7f95;
  padding-bottom: 16px;

  a {
    text-decoration: none;
    color: #31c77a;
  }

  ${(props) =>
    props.open === false &&
    css`
      display: none;
    `}
`;

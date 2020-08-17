import styled, { css, keyframes } from 'styled-components';
export const LoaderWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #1b1f26;
  ${(props) =>
    props.loading === 'false' &&
    css`
      display: none;
    `}
`;

export const LoaderGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoaderTitle = styled.div`
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #ffffff;
  padding: 16px 32px;
`;

export const LoaderProgressBar = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  position: absolute;
  transition: transform 0.2s linear;
  transform-origin: left;

  background-color: #30bf70;
  border-radius: 3px;
`;

const indeterminate1 = keyframes`
0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;

const indeterminate2 = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`;

export const LoaderProgress = styled.div`
  height: 4px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);

  ${LoaderProgressBar}:first-child {
    width: auto;
    animation: ${indeterminate1} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
      infinite;
  }

  ${LoaderProgressBar}:last-child {
    width: auto;
    animation: ${indeterminate2} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s
      infinite;
  }
`;

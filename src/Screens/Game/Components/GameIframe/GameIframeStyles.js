import styled from 'styled-components';
export const styles = () => ({
  root: {
    border: 'none',
    width: '100%',
    height: '100%',
    flex: '1',
  },
});

export const EmbededWrapper = styled.div`
  height: calc(100vh - 120px);
  border: 16px solid #21252e;
  border-radius: 6px;
  background-color: #1b1f26;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border-top: 0px;
`;

export const EmbededToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #21252e;
`;

export const EmbededContent = styled.div`
  height: 100%;
`;

export const EmbededToolbarTitle = styled.span`
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #ffffff;
`;

export const EmbededIconButton = styled.span`
  padding: 20px 10px;
  cursor: pointer;
`;

export const IframeComponent = styled.iframe`
  width: 100%;
  height: 100%;
  flex: 1;
  top: 0;
  left: 0;
`;

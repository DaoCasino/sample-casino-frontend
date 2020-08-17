import React from 'react';
import styled from 'styled-components';

import { Layout } from 'Components/Layout';

const StyledWrapper = styled(Layout)`
  background: #16191f;
  text-align: center;
`;

const StyledWidthContainer = styled(Layout)`
  max-width: 1024px;
  width: 100%;
  overflow: visible;
  padding: 0 16px;
  display: inline-block;
`;

export const Wrapper = ({ children }) => (
  <StyledWrapper orientation='column' align='center center'>
    <StyledWidthContainer orientation='column' align='center center'>
      {children}
    </StyledWidthContainer>
  </StyledWrapper>
);

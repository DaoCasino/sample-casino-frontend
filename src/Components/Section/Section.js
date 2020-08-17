import React from 'react';
import styled from 'styled-components';
import { Layout } from '../Layout';

const SectionContent = styled(Layout)`
  overflow: visible;
`;
const SectionWrapper = styled(Layout)`
  padding-bottom: 20px;
  overflow: visible;
`;
const SectionTitle = styled.div`
  font-family: 'Gilroy', Roboto, Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #ffffff;
`;
const SectionSubtitle = styled.div`
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #7a7f95;
`;
const SectionTypograhpySpacing = styled.div`
  padding: 4px;
  width: 100%;
`;
const SectionTypograhpy = styled(Layout)`
  padding: 24px 0;
  overflow: visible;
`;

const SectionBadge = styled.span`
  font-family: Roboto, Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #7a7f95;
  padding: 6px 12px;
  border-radius: 16.5px;
  border: solid 1px rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Section = ({ title, subtitle, children, badge }) => {
  return (
    <SectionWrapper orientation='column' fill='true'>
      <Layout orientation='row' align='space-around center'>
        {title && (
          <SectionTypograhpy orientation='column'>
            <SectionTitle>{title}</SectionTitle>
            {subtitle && <SectionTypograhpySpacing />}
            {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
          </SectionTypograhpy>
        )}
        {badge && <SectionBadge>{badge}</SectionBadge>}
      </Layout>
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};

import React from 'react';
import styled from 'styled-components';

import { data } from './data';

import { Icon } from 'Components/Icon';
import { Layout } from 'Components/Layout';

const AdvantageTitle = styled.span`
  font-family: 'Gilroy', Roboto Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const AdvantageIconWrapper = styled(Layout)`
  position: relative;
  height: 32px;
  overflow: visible;
`;

const AdvantageDescription = styled.div`
  font-family: Roboto Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #7a7f95;
  p {
    margin-top: 12px;
  }

  a {
    text-decoration: none;
    color: #31c77a;
  }
`;

const AdvantageBoxLayout = styled(Layout)`
  flex-wrap: wrap;
  overflow: visible;
  margin-bottom: -46px;
`;

const AdvantageLayout = styled(Layout)`
  padding: 4px 0;
  width: 100%;
  margin-bottom: 12px;
  overflow: visible;
  @media (min-width: 768px) {
    :nth-child(2n-1) {
      margin-right: 16px;
    }
    margin-bottom: 26px;
    width: calc(50% - 8px);
  }
`;

const BluredCircle = ({ color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='60'
      viewBox='0 0 60 60'
      style={{ position: 'absolute', left: '-10px' }}
    >
      <defs>
        <filter
          id='x43fxcxvd'
          width='212.5%'
          height='212.5%'
          x='-56.2%'
          y='-56.2%'
          filterUnits='objectBoundingBox'
        >
          <feGaussianBlur in='SourceGraphic' stdDeviation='6' />
        </filter>
      </defs>
      <g fill='none' transform='translate(14 14)'>
        <circle
          cx='16'
          cy='16'
          r='16'
          fill={color}
          filter='url(#x43fxcxvd)'
          opacity='.1'
        />
      </g>
    </svg>
  );
};

function AdvantageBox() {
  return (
    <AdvantageBoxLayout
      orientation-gt-xs='row'
      orientation='column'
      align='center start'
    >
      {data.map((advantage) => {
        return (
          <AdvantageLayout key={advantage.title} flex={45} orientation='column'>
            <AdvantageIconWrapper align='start center'>
              <BluredCircle color={advantage.color} />
              <Icon
                style={{ marginRight: '24px', marginLeft: '10px' }}
                size={24}
                icon={advantage.icon}
              />
              <AdvantageTitle>{advantage.title}</AdvantageTitle>
            </AdvantageIconWrapper>
            <AdvantageDescription>
              {advantage.description.map((description, index) => (
                // eslint-disable-next-line react/jsx-key
                <p key={index}>{description}</p>
              ))}
            </AdvantageDescription>
          </AdvantageLayout>
        );
      })}
    </AdvantageBoxLayout>
  );
}

export default AdvantageBox;

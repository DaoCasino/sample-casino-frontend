import React from 'react';
import styled from 'styled-components';
import { getBackground } from './helpers';

// TODO: create
const Button = styled.a`
  border-radius: 6px;
  background-color: #30bf70;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  padding-top: 16px;
  padding-bottom: 16px;
  text-decoration: none;
`;

const ItemWrapperOutset = styled.div`
  box-sizing: border-box;
  outline: none;
  margin-left: 8px;
  margin-right: 8px;
`;

// background-size: ${getBackgroundSize};
const ItemWrapper = styled.div`
  outline: none;
  width: 544px;
  height: 300px;
  color: #fff;
  background: ${getBackground};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  ${({ theme: { media } }) => media.lessThan('xs_gt')`
    width: 343px;
    height: 300px;
    padding: 0 24px;
    font-size: 20px;
  `}

  @media (max-width: 370px) {
    width: 288px;
  }
`;

const Title = styled.div`
  font-family: 'Gilroy', Roboto, Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #ffffff;
  text-align: center;

  ${({ theme: { media } }) => media.greaterThan('sm')`
    text-align: left;
    font-size: 32px;

  `}
`;

const Description = styled.div`
  min-height: 24px;
  white-space: normal;
  max-width: 100%;
  height: auto;
  opacity: 0.8;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #ffffff;
  margin-top: 8px;
  text-align: center;

  ${({ theme: { media } }) => media.greaterThan('sm')`
    text-align: left;
  `}
`;

const CTAButton = styled(Button)`
  width: 198px;
  /* height: 54px; */
  margin-top: 32px;
  white-space: nowrap;
  ${({ theme: { media } }) => media.lessThan('sm')`
    width: 191px;
    max-width: 100%;
  `}
`;

const View = (
  { title = 'N/A', description, ctaLink, ctaText, background, bgImg },
  key
) => {
  return (
    <ItemWrapperOutset key={key}>
      <ItemWrapper background={background} bgImg={bgImg}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CTAButton href={ctaLink}>{ctaText}</CTAButton>
      </ItemWrapper>
    </ItemWrapperOutset>
  );
};

export default View;

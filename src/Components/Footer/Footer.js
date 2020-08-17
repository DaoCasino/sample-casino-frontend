import React from 'react';
import styled from 'styled-components';
import { LegalBox } from './LegalBox';
import { Link } from 'react-router-dom';

import { Layout } from 'Components/Layout';
import { Icon } from 'Components/Icon';
import Wrapper from 'Components/Wrapper';

import { menuItems as faqItems } from 'Screens/Faq/content';

import FooterPlayLink from './FooterPlayLink';

const StyledFooterMenuLayout = styled(Layout)`
  /* padding: 32px 0; */
`;

export const FooterLink = styled(Link)`
  /* width: 33px;
  height: 24px; */
  padding: 8px 0px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
`;

const FooterHref = styled.a`
  /* width: 33px;
  height: 24px; */
  padding: 8px 0px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
`;

const FooterSubLink = styled(Link)`
  font-family: Roboto Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: rgba(255, 255, 255, 0.8);
  padding: 5px 0;
  text-decoration: none;
`;

const DivideBox = styled(Layout)`
  padding: 24px 0;
  border-top: 1px solid #202020;
  border-bottom: 1px solid #202020;
  /* margin: 0 16px; */
  font-family: Roboto Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 32px;
  margin-top: 32px;
`;

const SpanStyled = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #0495d2;
`;

const TelegramWrapper = styled(Layout)`
  ${({ theme: { media } }) => media.lessThan('xs_gt')`
  padding-top: 24px;`}
`;

const CopyrightWrapper = styled.span`
  ${({ theme: { media } }) => media.lessThan('xs_gt')`
padding-bottom: 16px;`}
`;

const currentYear = new Date().getFullYear();

const Logo = styled.div`
  font-family: Gilroy;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;

const FaqMenu = () =>
  faqItems.map(({ id, question }) => (
    <FooterSubLink key={`faq:${id}`} to={`/faq/${id}`}>
      {question}
    </FooterSubLink>
  ));

export const Footer = (props) => (
  <footer>
    <Wrapper>
      <DivideBox
        orientation='column'
        orientation-gt-md='row'
        align-gt-md='space-between center'
        align='center center'
      >
        <Logo>SAMPLE</Logo>
        <TelegramWrapper align='end center'>
          <SpanStyled style={{ padding: '6px', color: '#fff' }}>
            Join our
          </SpanStyled>
          <a
            style={{ textDecoration: 'none' }}
            href='#'
            rel='noopener noreferrer'
            target='_blank'
          >
            <span style={{ padding: '8px' }}>
              <Icon icon='telegram' size={16} />
            </span>
            <SpanStyled>Telegram</SpanStyled>
          </a>
        </TelegramWrapper>
      </DivideBox>
      <StyledFooterMenuLayout
        orientation='column'
        orientation-gt-md='row'
        align-gt-md='start start'
        align='start center'
      >
        <Layout
          orientation='column'
          align='center center'
          align-gt-md='start start'
        >
          <FooterPlayLink />
          <FooterHref
            href='https://daowallet.com/individual/'
            rel='noopener noreferrer'
            target='_blank'
          >
            Wallet
          </FooterHref>
        </Layout>
        <Layout
          orientation='column'
          align='center center'
          align-gt-md='start start'
        >
          <FooterLink to='/sample'>Terms & Conditions</FooterLink>
          {/* <FooterLink to='#'>Privacy policy</FooterLink> */}
        </Layout>
        <Layout
          orientation='column'
          align='center center'
          align-gt-md='start start'
        >
          <FooterLink to='/faq/'>FAQ</FooterLink>
          <Layout
            orientation='column'
            align='center center'
            align-gt-md='start start'
            style={{ marginTop: '-7px' }}
          >
            <FaqMenu />
          </Layout>
        </Layout>
      </StyledFooterMenuLayout>
      <DivideBox
        orientation='column'
        orientation-gt-md='row'
        align-gt-md='space-between center'
        align='center center'
        style={{ padding: '16px 0' }}
      >
        <CopyrightWrapper>© {currentYear}, Sample Ltd.</CopyrightWrapper>
        <span>
          <span style={{ margin: '0 16px' }}>
            <Icon size={36} icon='18-plus' />
          </span>
          18 ONLY AND OVER
        </span>
      </DivideBox>
      <LegalBox />
    </Wrapper>
  </footer>
);

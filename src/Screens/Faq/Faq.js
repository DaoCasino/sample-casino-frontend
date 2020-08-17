import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Wrapper from 'Components/Wrapper';
import Modals from 'Components/Modals';

import { Helmet } from 'react-helmet';

import { items } from './content';
import { Icon } from 'Components/Icon';

const FaqItemWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`;
const FaqItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const FaqItemHeaderTitle = styled.div`
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
const FaqItemHeaderExpand = styled.div`
  line-height: 24px;
  width: 24px;
  text-align: center;
  ${(props) =>
    props.open === false &&
    css`
      transform: rotate(-180deg);
    `}
`;
const FaqItemContent = styled.div`
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

const Title = styled.h1`
  font-family: Gilroy;
  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin: 0 0 16px;
`;
const WrapperContent = styled.div`
  text-align: left;
  padding: 32px 0;
`;

function FaqItem({ item, expand }) {
  const { question, answer } = item;
  const [open, setOpen] = useState(expand);

  useEffect(() => {
    setOpen(expand);
  }, [expand]);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <FaqItemWrapper>
      <FaqItemHeader onClick={handleClick}>
        <FaqItemHeaderTitle>{question}</FaqItemHeaderTitle>
        <FaqItemHeaderExpand open={open}>
          <Icon icon={'chevron-right'} size={10} />
        </FaqItemHeaderExpand>
      </FaqItemHeader>
      <FaqItemContent open={open}>{answer}</FaqItemContent>
    </FaqItemWrapper>
  );
}

function Faq(props) {
  const { id } = props.match.params;
  console.log('render FAQ', id);
  return (
    <React.Fragment>
      <Helmet>
        <title>Sample FAQ</title>
      </Helmet>
      <Header />
      <main>
        <Wrapper>
          <WrapperContent>
            <Title>FAQ</Title>
            {items.map((item, index) => {
              return (
                <FaqItem
                  item={item}
                  key={`faq:${index}`}
                  expand={id !== undefined && item.id == id ? true : false}
                />
              );
            })}
          </WrapperContent>
        </Wrapper>
      </main>
      <Footer />
      <Modals />
    </React.Fragment>
  );
}

export default Faq;

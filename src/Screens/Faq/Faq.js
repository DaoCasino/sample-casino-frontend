import React from 'react';
import styled from 'styled-components';
import Wrapper from 'Components/Wrapper';
import FaqItem from 'Components/FaqItem';
import { items } from './content';
import WithFooter from '../hocs/WithFooter';
import seo from './seo';

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

function Faq() {
  const id = window.location.hash.substr(1);

  if (id) {
    const item = items.find((i) => i.id == id);

    if (item) {
      seo.title = 'FAQ: ' + item.question;
      seo.description = undefined;
    }
  }

  console.log('render FAQ', id);
  return (
    <WithFooter {...seo}>
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
    </WithFooter>
  );
}

export default Faq;

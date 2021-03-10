import React, { useState, useEffect } from 'react';
import { Icon } from 'Components/Icon';
import {
  FaqItemWrapper,
  FaqItemHeader,
  FaqItemHeaderTitle,
  FaqItemHeaderExpand,
  FaqItemContent,
} from './FaqItem.styled';

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

export default FaqItem;

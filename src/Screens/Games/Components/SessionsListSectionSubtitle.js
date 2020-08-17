import React from 'react';
import styled from 'styled-components';
import { Icon } from 'Components/Icon';

const IconWrapper = styled.span``;

export const SessionsListSectionSubtitle = () => {
  return (
    <React.Fragment>
      Registred on{' '}
      <IconWrapper>
        <Icon icon='dao-shield' size={16} />
      </IconWrapper>{' '}
      DAOBet Blockchain
    </React.Fragment>
  );
};

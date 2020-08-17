import React from 'react';
import styled from 'styled-components';
import { Icon } from 'Components/Icon';

const LoadingWrapper = styled.div`
  width: 140px;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-image: linear-gradient(
      264deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0) 98%
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
`;

const AccountIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-image: linear-gradient(315deg, #f12711, #f5af19 99%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DaoBetIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AccountCardLoading() {
  return (
    <LoadingWrapper>
      <DaoBetIconWrapper>
        <Icon icon='dao-bet' size='20' />
      </DaoBetIconWrapper>
      <AccountIcon>D</AccountIcon>
    </LoadingWrapper>
  );
}

export default AccountCardLoading;

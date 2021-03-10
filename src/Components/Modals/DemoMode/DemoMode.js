import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import WalletLink from 'Components/WalletLink';

const Content = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  color: #7a7f95;
`;
const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin: 0 0 12px;
  color: #fff;
`;

const ButtonGroup = styled.div`
  margin-top: 16px;
  margin-bottom: 4px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;

const Button = styled.div`
  cursor: pointer;
  background: ${(props) =>
    props.active ? '#30BF70' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 6px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
  padding: 7px;
`;

function ButtonLink({ children, ...props }) {
  return (
    <Button as='a' {...props} active={true}>
      {children}
    </Button>
  );
}

function DemoMode({ open, close }) {
  return (
    <Modal
      open={open}
      close={close}
      name={'dependence-webgl-modal'}
      showClose={false}
      padding={20}
    >
      <Title>This is Demo mode</Title>
      <Content>
        You are playing in the Demo mode. To unlock full mode please sign up and
        connect your DAOWallet. Do you want to sign up or continue playing in
        the Demo mode?
        <ButtonGroup>
          <Button onClick={close}>Continue</Button>
          <WalletLink
            data-test='signup-btn'
            href={window.walletSingUp.toString()}
            asDiv={Button}
            asLink={ButtonLink}
          >
            Sign up
          </WalletLink>
        </ButtonGroup>
      </Content>
    </Modal>
  );
}

export default DemoMode;

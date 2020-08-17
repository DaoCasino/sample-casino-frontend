import React from 'react';

import Modal from '../Modal';
import styled, { css } from 'styled-components';
import { Icon } from 'Components/Icon';
import { useHistory } from 'react-router-dom';

const ModalHeader = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 29.8033px;
  line-height: 36px;
  color: #fff;
  text-align: center;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 24px;
  cursor: pointer;
  display: flex;
`;

const CheckboxLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #7a7f95;

  a {
    text-decoration: none;
    color: #31c77a;
  }
`;

const Checkbox = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #2f3043;
  box-sizing: border-box;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    visibility: hidden;
  }

  ${(props) =>
    props.checked &&
    css`
      background: #30bf70;
      border: none;

      svg {
        visibility: visible;
      }
    `}
`;

function Link(props) {
  const { to, before, children } = props;
  const history = useHistory();

  function handeClick(e) {
    e.preventDefault();

    if (before) {
      before();
    }

    history.push(to);
  }

  return (
    <a href={to} onClick={handeClick}>
      {children}
    </a>
  );
}

const Button = styled.button`
  background: #30bf70;
  border-radius: 6px;
  text-align: center;
  padding: 18px;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  outline: none;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: auto;
    `}
`;

function WalletDisclaimer(props) {
  const { login, close, open } = props;

  const [therms, setTherms] = React.useState(false);
  const [custodial, setCustodial] = React.useState(false);
  const disabled = !(therms && custodial);

  function handleTherms() {
    setTherms(!therms);
  }

  function handleCustodial() {
    setCustodial(!custodial);
  }

  function handleButton() {
    if (therms && custodial) {
      login();
    }
  }

  return (
    <Modal open={open} close={close} name='wallet-disclaimer-modal'>
      <ModalHeader>
        <Title>Sample</Title>
      </ModalHeader>
      <CheckboxWrapper data-test='therms-checkbox' onClick={handleTherms}>
        <div>
          <Checkbox checked={therms}>
            <Icon icon='tick' size={12} />
          </Checkbox>
        </div>
        <CheckboxLabel>
          By checking this box, you confirm that you have read and agree to our{' '}
          <Link to='/sample' before={close}>
            Terms and Conditions
          </Link>
        </CheckboxLabel>
      </CheckboxWrapper>
      <CheckboxWrapper data-test='custodial-checkbox' onClick={handleCustodial}>
        <div>
          <Checkbox checked={custodial}>
            <Icon icon='tick' size={12} />
          </Checkbox>
        </div>
        <CheckboxLabel>
          By checking this box and proceeding to log in I understand and agree
          that Sample is a non-custodial casino and the{' '}
          <Link to='/sample' before={close}>
            Procedures are applied
          </Link>
          .
        </CheckboxLabel>
      </CheckboxWrapper>
      <Button
        disabled={disabled}
        data-test='letmein-btn'
        onClick={handleButton}
      >
        Let me in
      </Button>
    </Modal>
  );
}

export default WalletDisclaimer;

import React from 'react';
import Modal from '../Modal';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Title, Content } from '../Modal/ModalStyled';

const Button = styled.button`
  background: #30bf70;
  border-radius: 6px;
  text-align: center;
  padding: 16px 54px;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;

  cursor: pointer;
  text-decoration: none;
  outline: none;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

function InsufficientBalance(props) {
  const { close, open } = props;
  let history = useHistory();

  function handleButtonClick() {
    close();
    history.push('/howtogetbets');
  }

  // const location = useLocation();
  // function handleClose() {
  //   close();
  //   if (location.pathname !== '/') {
  //     history.push('/');
  //   }
  // }

  return (
    <Modal open={open} close={close} name={'insufficient-balance-modal'}>
      <Title>Low wallet BET balance!</Title>
      <Content>Buy more bets to start playing.</Content>
      <ButtonWrapper>
        <Button onClick={handleButtonClick}>Show me how</Button>
      </ButtonWrapper>
    </Modal>
  );
}

export default InsufficientBalance;

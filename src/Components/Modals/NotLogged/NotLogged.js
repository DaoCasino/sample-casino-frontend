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

function NotLogged(props) {
  const { close, open, login } = props;
  let history = useHistory();

  function handleButtonClick() {
    close();
    login();
  }

  function handleClose() {
    close();
    history.push('/');
  }

  return (
    <Modal open={open} close={handleClose} name={'not-logged-modal'}>
      <Title>You need to be logged in to play</Title>
      <Content>You can do that by opening your DAOWallet</Content>
      <ButtonWrapper>
        <Button onClick={handleButtonClick}>Open wallet</Button>
      </ButtonWrapper>
    </Modal>
  );
}

export default NotLogged;

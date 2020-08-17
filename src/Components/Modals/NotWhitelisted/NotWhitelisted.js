import React from 'react';
import Modal from '../Modal';
import { Title, Content } from '../Modal/ModalStyled';

function NotWhitelisted(props) {
  const { close, open } = props;

  return (
    <Modal open={open} close={close} name={'not-whitelisted'}>
      <Title>You are not on the list</Title>
      <Content>
        Sample only accepts accounts that owned BET before soft launch. We’ll
        be launching for everyone soon so{' '}
        <a href='#' target='_blank' rel='noopener noreferrer'>
          stay tuned
        </a>
        .
      </Content>
    </Modal>
  );
}

export default NotWhitelisted;

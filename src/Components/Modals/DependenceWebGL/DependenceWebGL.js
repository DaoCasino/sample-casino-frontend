import React from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../Modal';
import { Title, Content } from '../Modal/ModalStyled';

function DependenceWebGL({ open, close }) {
  const history = useHistory();

  function handleClose() {
    close();
    history.push('/');
  }

  return (
    <Modal open={open} close={handleClose} name={'dependence-webgl-modal'}>
      <Title>WebGL not supported</Title>
      <Content>
        WebGL is required for this game to run. Please check your browser WebGL
        support.{' '}
        <a
          href='https://www.google.com/search?q=enable+webgl+in+browser'
          target='_blank'
          rel='noopener noreferrer'
        >
          Here are possible fixes
        </a>
      </Content>
    </Modal>
  );
}

export default DependenceWebGL;

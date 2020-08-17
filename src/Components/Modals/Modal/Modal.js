import React from 'react';

import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import { Icon } from 'Components/Icon';

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #21252e;
  outline: none;
  padding: 32px;

  ${({ theme: { media } }) => media.greaterThan('xs_gt')`
  width: 432px;
  height: auto;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `}
`;

const ModalContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.5;
  cursor: pointer;
`;

function BaseModal(props) {
  const { open, close, name, children } = props;

  return (
    <Modal open={open} onClose={close}>
      <ModalWrapper data-test={name}>
        <ModalContent>
          <ModalClose onClick={close}>
            <Icon icon='close' size={12} />
          </ModalClose>
          <div style={{ width: '100%' }}>{children}</div>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
}

export default BaseModal;

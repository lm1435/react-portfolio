import React from 'react';
import styled from 'styled-components';
import Portal from '../Portal/Portal';
import Icon from '../Utilities/Icon';

const Modal = ({ children, on, toggle }) => (
  <Portal>
    {on && (
      <ModalWrapper>
        <ModalCard>
          <CloseButton onClick={toggle}><Icon name="close" /></CloseButton>
          <div>{children}</div>
        </ModalCard>
        <Background onClick={toggle} />
      </ModalWrapper>
    )}
  </Portal>
);

export default Modal;


const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const ModalCard = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  top: 25%;
  left: 0;
  right: 0;
  max-width: 800px;
  margin: auto;
  @media(max-width:799px) {
    zoom: .4;
    top: 40%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: .7;
`;
